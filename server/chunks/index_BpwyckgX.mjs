globalThis.process ??= {};
globalThis.process.env ??= {};
import { H as Hono } from "./hono_C7UaUXH7.mjs";
import { c as cors } from "./index_oKH0goKJ.mjs";
import { s as sql, b as sqliteTable, d as integer, t as text, f as createDbClient, e as eq, g as and } from "./index_Bs1dLHcd.mjs";
import { g as getAuthInstances, p as passwordHasher } from "./auth_C9MZO_Gl.mjs";
import { g as getValidatedMapping } from "./domains_JCVeAtQW.mjs";
const oauthBindings = sqliteTable("oauth_bindings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  member_id: text("member_id").notNull(),
  provider: text("provider").notNull(),
  provider_user_id: text("provider_user_id").notNull(),
  created_at: integer("created_at").notNull()
});
const systemSettings = sqliteTable("system_settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  description: text("description"),
  updated_at: integer("updated_at")
});
const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  tenantId: integer("tenant_id").notNull(),
  email: text("email").notNull()
});
const adminApp = new Hono();
const sfApp = new Hono();
sfApp.use("*", cors({
  origin: (origin) => {
    return origin || "*";
  },
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true
}));
adminApp.post("/settings", async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const body = await c.req.json();
    const { key, value } = body;
    if (key !== "plugin:oauth-login:settings") {
      return c.json({ success: false, error: "非法的配置 Key" }, 400);
    }
    await db.run(sql`
      INSERT OR REPLACE INTO system_settings (key, value, updated_at)
      VALUES (${key}, ${value}, ${Date.now()})
    `);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
adminApp.get("/settings", async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const result = await db.select().from(systemSettings).where(eq(systemSettings.key, "plugin:oauth-login:settings")).get();
    return c.json({ success: true, data: result?.value });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.get("/p/settings", async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const result = await db.select().from(systemSettings).where(eq(systemSettings.key, "plugin:oauth-login:settings")).get();
    const settingsStr = result?.value;
    const settings = settingsStr ? JSON.parse(settingsStr) : [];
    let publicSettings = [];
    if (Array.isArray(settings)) {
      publicSettings = settings.map((p) => ({
        id: p.id,
        name: p.name,
        isEnabled: p.isEnabled,
        clientId: p.clientId
      }));
    } else if (typeof settings === "object" && settings !== null) {
      publicSettings = Object.keys(settings).map((key) => {
        const item = settings[key];
        return {
          id: key,
          name: item.name || key,
          isEnabled: item.isEnabled,
          clientId: item.clientId
        };
      });
    }
    const mapping = await getValidatedMapping(c.env);
    let adminDomain = mapping?.admin_domain;
    if (!adminDomain) {
      const urlObj = new URL(c.req.url);
      const hostParts = urlObj.host.split(".");
      if (hostParts.length > 2) {
        hostParts[0] = "admin";
        adminDomain = hostParts.join(".");
      } else {
        adminDomain = "admin." + urlObj.host;
      }
    }
    return c.json({ success: true, data: publicSettings, adminDomain });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.get("/p/auth/:provider", async (c) => {
  const provider = c.req.param("provider");
  const db = await createDbClient(c.env.DB);
  try {
    const result = await db.select().from(systemSettings).where(eq(systemSettings.key, "plugin:oauth-login:settings")).get();
    const settingsStr = result?.value;
    if (!settingsStr) {
      return c.json({ error: "OAuth 插件尚未配置" }, 400);
    }
    const settings = JSON.parse(settingsStr);
    const platformConfig = settings.find((p) => p.id === provider);
    if (!platformConfig || !platformConfig.isEnabled) {
      return c.json({ error: `平台 ${provider} 未启用或未配置` }, 400);
    }
    const clientId = platformConfig.clientId;
    const redirectUri = `${new URL(c.req.url).origin}/api/v1/s/oauth-login/p/callback/${provider}`;
    let authUrl = "";
    if (provider === "google") {
      authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=email%20profile`;
    } else if (provider === "facebook") {
      authUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=email`;
    } else {
      return c.json({ error: "不支持的第三方平台" }, 400);
    }
    return c.redirect(authUrl);
  } catch (err) {
    return c.json({ error: `生成授权链接失败: ${err.message}` }, 500);
  }
});
sfApp.get("/p/callback/:provider", async (c) => {
  const provider = c.req.param("provider");
  const code = c.req.query("code");
  const db = await createDbClient(c.env.DB);
  if (!code) {
    return c.json({ error: "授权 Code 缺失" }, 400);
  }
  try {
    const result = await db.select().from(systemSettings).where(eq(systemSettings.key, "plugin:oauth-login:settings")).get();
    const settingsStr = result?.value;
    if (!settingsStr) throw new Error("配置未找到");
    const settings = JSON.parse(settingsStr);
    const platformConfig = settings.find((p) => p.id === provider);
    const { clientId, clientSecret } = platformConfig;
    const redirectUri = `${new URL(c.req.url).origin}/api/v1/s/oauth-login/p/callback/${provider}`;
    let email = "";
    let providerUserId = "";
    if (provider === "google") {
      const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(redirectUri)}&grant_type=authorization_code`
      });
      const tokenData = await tokenRes.json();
      const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: { Authorization: `Bearer ${tokenData.access_token}` }
      });
      const userData = await userRes.json();
      email = userData.email;
      providerUserId = userData.id;
    } else if (provider === "facebook") {
      const tokenRes = await fetch(`https://graph.facebook.com/v12.0/oauth/access_token?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&client_secret=${clientSecret}&code=${code}`);
      const tokenData = await tokenRes.json();
      const userRes = await fetch(`https://graph.facebook.com/me?fields=id,email&access_token=${tokenData.access_token}`);
      const userData = await userRes.json();
      email = userData.email;
      providerUserId = userData.id;
    }
    if (!providerUserId) {
      throw new Error("无法获取第三方用户唯一标识");
    }
    const { userAuth } = await getAuthInstances(c.env.DB);
    const existingBinding = await db.select().from(oauthBindings).where(and(eq(oauthBindings.provider, provider), eq(oauthBindings.provider_user_id, providerUserId))).get();
    if (existingBinding) {
      const memberId = existingBinding.member_id;
      const session = await userAuth.createSession(memberId, {});
      const sessionCookie = userAuth.createSessionCookie(session.id);
      c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
      return c.redirect("/member");
    }
    if (email) {
      const domains = c.get("site_domains") || c.get("domains");
      const tenantId = Number(domains?.tenant_id || domains?.id || 1);
      const userResult = await db.select({ id: users.id }).from(users).where(and(
        eq(users.email, email),
        eq(users.tenantId, tenantId)
      )).get();
      let memberId = userResult?.id;
      if (!memberId) {
        memberId = crypto.randomUUID();
        const rawRandPass = crypto.randomUUID() + Math.random().toString(36).slice(2);
        const passHash = await passwordHasher.hash(rawRandPass);
        await db.run(sql`
          INSERT INTO users (id, tenant_id, email, password_hash, user_type, status, created_at)
          VALUES (${memberId}, ${tenantId}, ${email}, ${passHash}, 'member', 'active', ${Date.now()})
        `);
        await db.run(sql`
          INSERT INTO members (id, type, created_at)
          VALUES (${memberId}, 'registered', ${Date.now()})
        `);
      }
      await db.insert(oauthBindings).values({
        member_id: memberId,
        provider,
        provider_user_id: providerUserId,
        created_at: Date.now()
      });
      const session = await userAuth.createSession(memberId, {});
      const sessionCookie = userAuth.createSessionCookie(session.id);
      c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
      return c.redirect("/member");
    }
    const payload = JSON.stringify({ provider, providerUserId, timestamp: Date.now() });
    const tempToken = btoa(payload);
    return c.redirect(`/api/v1/s/oauth-login/p/bind-email-view?token=${tempToken}`);
  } catch (err) {
    return c.json({ error: `登录处理失败: ${err.message}` }, 500);
  }
});
sfApp.post("/p/bind-email", async (c) => {
  const { token, email } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  if (!token || !email) {
    return c.json({ success: false, error: "参数缺失" }, 400);
  }
  try {
    const payloadStr = atob(token);
    const payload = JSON.parse(payloadStr);
    const { provider, providerUserId, timestamp } = payload;
    if (Date.now() - timestamp > 10 * 60 * 1e3) {
      return c.json({ success: false, error: "凭证已过期，请重新发起登录" }, 400);
    }
    const { userAuth } = await getAuthInstances(c.env.DB);
    const domains = c.get("site_domains") || c.get("domains");
    const tenantId = Number(domains?.tenant_id || domains?.id || 1);
    const userResult = await db.select({ id: users.id }).from(users).where(and(
      eq(users.email, email),
      eq(users.tenantId, tenantId)
    )).get();
    let memberId = userResult?.id;
    if (!memberId) {
      memberId = crypto.randomUUID();
      const rawRandPass = crypto.randomUUID() + Math.random().toString(36).slice(2);
      const passHash = await passwordHasher.hash(rawRandPass);
      await db.run(sql`
        INSERT INTO users (id, tenant_id, email, password_hash, user_type, status, created_at)
        VALUES (${memberId}, ${tenantId}, ${email}, ${passHash}, 'member', 'active', ${Date.now()})
      `);
      await db.run(sql`
        INSERT INTO members (id, type, created_at)
        VALUES (${memberId}, 'registered', ${Date.now()})
      `);
    }
    await db.insert(oauthBindings).values({
      member_id: memberId,
      provider,
      provider_user_id: providerUserId,
      created_at: Date.now()
    });
    const session = await userAuth.createSession(memberId, {});
    const sessionCookie = userAuth.createSessionCookie(session.id);
    c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
    return c.json({ success: true, redirect: "/member" });
  } catch (err) {
    return c.json({ success: false, error: `绑定失败: ${err.message}` }, 400);
  }
});
sfApp.post("/p/facebook/login-by-sdk", async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const { accessToken, userID } = await c.req.json();
    if (!accessToken || !userID) {
      return c.json({ success: false, error: "参数缺失" }, 400);
    }
    const userRes = await fetch(`https://graph.facebook.com/me?fields=id,email&access_token=${accessToken}`);
    if (!userRes.ok) {
      throw new Error("Facebook 凭证校验失败或已过期");
    }
    const userData = await userRes.json();
    const providerUserId = userData.id;
    const email = userData.email;
    if (!providerUserId || providerUserId !== userID) {
      throw new Error("第三方用户身份不匹配");
    }
    const { userAuth } = await getAuthInstances(c.env.DB);
    const existingBinding = await db.select().from(oauthBindings).where(and(eq(oauthBindings.provider, "facebook"), eq(oauthBindings.provider_user_id, providerUserId))).get();
    if (existingBinding) {
      const memberId = existingBinding.member_id;
      const session = await userAuth.createSession(memberId, {});
      const sessionCookie = userAuth.createSessionCookie(session.id);
      c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
      return c.json({ success: true, redirect: "/member" });
    }
    if (email) {
      const domains = c.get("site_domains") || c.get("domains");
      const tenantId = Number(domains?.tenant_id || domains?.id || 1);
      const userResult = await db.select({ id: users.id }).from(users).where(and(
        eq(users.email, email),
        eq(users.tenantId, tenantId)
      )).get();
      let memberId = userResult?.id;
      if (!memberId) {
        memberId = crypto.randomUUID();
        const rawRandPass = crypto.randomUUID() + Math.random().toString(36).slice(2);
        const passHash = await passwordHasher.hash(rawRandPass);
        await db.run(sql`
          INSERT INTO users (id, tenant_id, email, password_hash, user_type, status, created_at)
          VALUES (${memberId}, ${tenantId}, ${email}, ${passHash}, 'member', 'active', ${Date.now()})
        `);
        await db.run(sql`
          INSERT INTO members (id, type, created_at)
          VALUES (${memberId}, 'registered', ${Date.now()})
        `);
      }
      await db.insert(oauthBindings).values({
        member_id: memberId,
        provider: "facebook",
        provider_user_id: providerUserId,
        created_at: Date.now()
      });
      const session = await userAuth.createSession(memberId, {});
      const sessionCookie = userAuth.createSessionCookie(session.id);
      c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
      return c.json({ success: true, redirect: "/member" });
    }
    const payload = JSON.stringify({ provider: "facebook", providerUserId, timestamp: Date.now() });
    const tempToken = btoa(payload);
    return c.json({
      success: true,
      redirect: `/api/v1/s/oauth-login/p/bind-email-view?token=${tempToken}`
    });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
const oauthLoginPlugin = {
  admin: adminApp,
  storefront: sfApp,
  init: async (db) => {
    if (!db) {
      console.warn("⚠️ [OAuth Login] No DB client provided during plugin init.");
      return;
    }
    try {
      await db.run(sql`
        CREATE TABLE IF NOT EXISTS oauth_bindings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          member_id TEXT NOT NULL,
          provider TEXT NOT NULL,
          provider_user_id TEXT NOT NULL,
          created_at INTEGER NOT NULL
        )
      `);
      console.log("🔌 [OAuth Login] Plugin database tables auto-synced successfully.");
    } catch (err) {
      console.error("❌ [OAuth Login] Plugin database initialization failed:", err);
    }
  }
};
export {
  oauthLoginPlugin as default,
  oauthBindings,
  systemSettings,
  users
};
