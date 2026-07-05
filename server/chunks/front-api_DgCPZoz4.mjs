globalThis.process ??= {};
globalThis.process.env ??= {};
import { H as Hono } from "./hono_C7UaUXH7.mjs";
import { g as getCookie } from "./app_XB3RYrcF.mjs";
import { g as getAuthInstances } from "./auth_D3VEQItg.mjs";
import { P as PLUGIN_CODE_REGISTRY } from "./auto-registry.gen_Dt3LQRuG.mjs";
import { PluginService } from "./PluginService_htICt3ZK.mjs";
import { f as createDbClient } from "./index_C8hkm3Ad.mjs";
const sf = new Hono();
sf.use("/:slug/*", async (c, next) => {
  const slug = c.req.param("slug");
  if (!PLUGIN_CODE_REGISTRY[slug]) return await next();
  const db = await createDbClient(c.env.DB);
  const plugin = await PluginService.checkPluginStatus(db, slug);
  if (!plugin || !plugin.isEnabled) {
    console.warn(`🚫 [Storefront Gateway] Blocked access to inactive plugin: ${slug}`);
    return c.json({ error: "Plugin Inactive", message: `该扩展功能 (${slug}) 当前未开启` }, 404);
  }
  await next();
});
sf.use("*", async (c, next) => {
  const path = c.req.path;
  const parts = path.split("/");
  if (parts[2] === "p") {
    return await next();
  }
  try {
    const { userAuth } = await getAuthInstances(c.env.DB);
    const sessionId = getCookie(c, "user_session");
    if (!sessionId) {
      return c.json({ error: "Unauthorized", message: "请先登录会员账号" }, 419);
    }
    const { session, user } = await userAuth.validateSession(sessionId);
    if (!session) {
      return c.json({ error: "Session Expired", message: "登录已失效，请重新进入" }, 419);
    }
    c.set("current_member", user);
    c.set("member_session", session);
    await next();
  } catch (e) {
    return c.json({ error: "Auth Error", details: e.message }, 500);
  }
});
Object.keys(PLUGIN_CODE_REGISTRY).forEach((slug) => {
  sf.all(`/${slug}/*`, async (c) => {
    const getApp = PLUGIN_CODE_REGISTRY[slug].getStorefrontApp;
    const app = await getApp();
    if (!app) {
      console.warn(`[Gateway] Plugin sub-app not found: ${slug}`);
      return c.json({ error: "Plugin Module Not Found" }, 404);
    }
    const url = new URL(c.req.url);
    url.pathname = url.pathname.replace(`/${slug}`, "");
    const newRequest = new Request(url.toString(), c.req.raw);
    let executionCtx;
    try {
      executionCtx = c.executionCtx;
    } catch (e) {
    }
    return app.fetch(newRequest, c.env, executionCtx);
  });
});
export {
  sf as default
};
