globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as defineMiddleware, s as sequence } from "./chunks/sequence_B081Vtkc.mjs";
import { f as createDbClient, c as collections } from "./chunks/index_Bs1dLHcd.mjs";
import { g as getAuthInstances } from "./chunks/auth_C9MZO_Gl.mjs";
import { g as getValidatedMapping, i as identifyTarget } from "./chunks/domains_JCVeAtQW.mjs";
import { getAdminPermissions } from "./chunks/rbac_ubixCz_c.mjs";
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { cookies, redirect, locals, url } = context;
  const hostname = url.hostname;
  const path = url.pathname;
  let DB;
  let NS_CONFIG;
  const isStatic = path.startsWith("/_astro/") || path.includes("favicon") || path.startsWith("/public/") || /\.(js|css|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|ico)$/.test(path);
  if (isStatic) return next();
  try {
    const { env } = await import("cloudflare:workers");
    DB = env.DB;
    NS_CONFIG = env.NS_CONFIG;
  } catch (e) {
    const runtime = context.locals.runtime;
    DB = runtime?.DB || context.locals.DB;
    NS_CONFIG = runtime?.NS_CONFIG || context.locals.NS_CONFIG;
  }
  let config = null;
  let target = "public";
  if (DB) {
    const currentEnv = context.locals?.runtime?.env || context.locals?.env || {};
    const envObj = { ...currentEnv, DB, NS_CONFIG };
    config = await getValidatedMapping(envObj);
    target = identifyTarget(hostname, config, envObj);
    console.log(`🌐 [Routing] Host: ${hostname}, Target: ${target}, ConfigAPI: ${config?.api_domain}`);
    locals.DB = DB;
    if (!locals.runtime) locals.runtime = {};
    locals.runtime.DB = DB;
    locals.runtime.NS_CONFIG = NS_CONFIG;
    try {
      const { adminAuth } = await getAuthInstances(DB);
      const sessionId = cookies.get(adminAuth.sessionCookieName)?.value ?? null;
      if (sessionId) {
        const { session, user } = await adminAuth.validateSession(sessionId);
        if (session && session.fresh) {
          const sessionCookie = adminAuth.createSessionCookie(session.id);
          cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        }
        locals.user = user;
        locals.session = session;
      }
    } catch (e) {
      console.warn("⚠️ [Auth Middleware] 鉴权初始化失败:", e.message);
    }
    if (target === "admin" && path.startsWith("/admin") && locals.user?.id) {
      try {
        const db = await createDbClient(DB);
        let permissions = null;
        let collections$1 = null;
        const permsCacheKey = `admin_perms:${locals.user.id}`;
        const collsCacheKey = `admin_colls`;
        try {
          if (NS_CONFIG) {
            const [cachedPerms, cachedColls] = await Promise.all([
              NS_CONFIG.get(permsCacheKey, { type: "json" }),
              NS_CONFIG.get(collsCacheKey, { type: "json" })
            ]);
            permissions = cachedPerms;
            collections$1 = cachedColls;
          }
        } catch (e) {
          console.warn("⚠️ [RBAC Cache] 读取 KV 失败:", e.message);
        }
        if (!permissions || !collections$1) {
          const queries = [];
          if (!permissions) queries.push(getAdminPermissions(db, locals.user.id));
          else queries.push(Promise.resolve(permissions));
          if (!collections$1) {
            queries.push(
              db.select({
                id: collections.id,
                name: collections.name,
                slug: collections.slug,
                icon: collections.icon,
                menuGroup: collections.menuGroup,
                menuOrder: collections.menuOrder,
                parentId: collections.parentId
              }).from(collections).catch(() => [])
            );
          } else {
            queries.push(Promise.resolve(collections$1));
          }
          const [dbPerms, dbColls] = await Promise.all(queries);
          try {
            if (NS_CONFIG) {
              const puts = [];
              if (!permissions && dbPerms) puts.push(NS_CONFIG.put(permsCacheKey, JSON.stringify(dbPerms), { expirationTtl: 300 }));
              if (!collections$1 && dbColls) puts.push(NS_CONFIG.put(collsCacheKey, JSON.stringify(dbColls), { expirationTtl: 300 }));
              await Promise.allSettled(puts);
            }
          } catch (e) {
            console.warn("⚠️ [RBAC Cache] 写入 KV 失败:", e.message);
          }
          permissions = dbPerms;
          collections$1 = dbColls;
        }
        locals.adminPermissions = permissions || [];
        locals.sidebarCollections = collections$1 || [];
      } catch (e) {
        console.warn("⚠️ [RBAC Middleware] 权限预热失败:", e.message);
        locals.adminPermissions = [];
        locals.sidebarCollections = [];
      }
    }
    if (target === "admin") {
      const isAdminPath = path.startsWith("/admin");
      const isLoginPage = path === "/login";
      if (isAdminPath && !locals.user && !isLoginPage) return redirect("/login");
      return next();
    }
    if (target === "api") {
      const validPrefixes = ["/v1/p/", "/v1/s/", "/webhooks/", "/infra/"];
      const isOriginalApi = path.startsWith("/api/");
      const isShorthandApi = validPrefixes.some((p) => path.startsWith(p));
      if (isOriginalApi || isShorthandApi) {
        if (!isOriginalApi) return context.rewrite(`/api${path}`);
        return next();
      }
      return new Response(JSON.stringify({ error: "Forbidden", message: "API 域名仅允许调用接口，禁止访问网页。" }), { status: 403, headers: { "Content-Type": "application/json" } });
    }
    if (target === "member") {
      if (path === "/") return context.rewrite("/member");
      const allowedPaths = ["/member", "/api/auth/", "/api/v1/p/", "/api/v1/s/", "/api/v1/plugins/proxy/"];
      if (allowedPaths.some((p) => path.startsWith(p))) return next();
      return new Response(JSON.stringify({ error: "Forbidden", message: "会员域名仅允许访问会员中心。" }), { status: 403, headers: { "Content-Type": "application/json" } });
    }
    if (target === "public") {
      const forbiddenPrefixes = ["/admin", "/login", "/member"];
      const hasDedicatedAdmin = config && config.admin_domain && config.admin_domain.trim().length > 0;
      const hasDedicatedMember = config && config.member_domain && config.member_domain.trim().length > 0;
      const isForbidden = forbiddenPrefixes.some((p) => {
        if (p === "/admin" || p === "/login") {
          return hasDedicatedAdmin && path.startsWith(p);
        }
        if (p === "/member") {
          return hasDedicatedMember && path.startsWith(p);
        }
        return false;
      });
      if (isForbidden) {
        return new Response(JSON.stringify({ error: "Forbidden", message: "请使用专用域名访问后台或会员中心。" }), { status: 403, headers: { "Content-Type": "application/json" } });
      }
    }
  }
  return next();
});
const onRequest = sequence(
  onRequest$1
);
export {
  onRequest
};
