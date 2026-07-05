globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createMiddleware } from "./index_D5ANNvI6.mjs";
import { g as getAuthInstances } from "./auth_C9MZO_Gl.mjs";
function parseHostWhitelist(rawValue) {
  return String(rawValue || "").split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
}
function getFallbackHostWhitelist(env) {
  const configuredHosts = [
    ...parseHostWhitelist(env?.MEMBER_AUTH_DOMAIN_WHITELIST),
    ...parseHostWhitelist(env?.LOCAL_DOMAIN_WHITELIST)
  ];
  return Array.from(new Set(configuredHosts));
}
const memberAuth = createMiddleware(async (c, next) => {
  const domains = c.get("domains") || c.get("site_domains") || c.env?.__injected_site_domains;
  const requestUrl = new URL(c.req.url);
  const requestHost = requestUrl.hostname.toLowerCase();
  const fallbackHostWhitelist = getFallbackHostWhitelist(c.env);
  const fallbackTenantId = Number(c.env?.MEMBER_AUTH_FALLBACK_TENANT_ID || 0);
  let currentTenantId = domains?.tenant_id || domains?.id || (domains?.site_domains ? domains.site_domains.id : void 0);
  if (!currentTenantId) {
    const canUseFallbackTenant = fallbackHostWhitelist.includes(requestHost) && Number.isFinite(fallbackTenantId) && fallbackTenantId > 0;
    if (!canUseFallbackTenant) {
      return c.json({ error: "域名环境未就绪" }, 500);
    }
    currentTenantId = fallbackTenantId;
  }
  try {
    const { userAuth } = await getAuthInstances(c.env.DB);
    const authHeader = c.req.header("Authorization");
    let sessionId = "";
    if (authHeader && authHeader.startsWith("Bearer ")) {
      sessionId = authHeader.substring(7);
    } else {
      sessionId = userAuth.readSessionCookie(c.req.header("Cookie") ?? "") ?? "";
    }
    if (!sessionId) {
      return c.json({ error: "请先登录" }, 401);
    }
    const { session, user } = await userAuth.validateSession(sessionId);
    if (!session) {
      return c.json({ error: "会话已失效" }, 401);
    }
    const memberTenantId = user.tenantId;
    if (memberTenantId !== void 0 && memberTenantId !== Number(currentTenantId)) {
      console.warn(`🚨 [Security] 跨店登录企图: 会员(Tenant:${memberTenantId}) 尝试访问 店铺(Tenant:${currentTenantId})`);
      return c.json({
        error: "身份非法",
        message: "您的账号不属于当前店铺，请重新登录"
      }, 403);
    }
    c.set("member", user);
    c.set("session", session);
    c.set("activeTenantId", currentTenantId);
    await next();
  } catch (err) {
    console.error("❌ [MemberAuth] Error:", err);
    return c.json({ error: "身份校验系统异常" }, 500);
  }
});
export {
  memberAuth as m
};
