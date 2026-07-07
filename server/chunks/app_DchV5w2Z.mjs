globalThis.process ??= {};
globalThis.process.env ??= {};
import { H as Hono, t as tryDecode, d as decodeURIComponent_ } from "./hono_C7UaUXH7.mjs";
import { c as cors } from "./index_oKH0goKJ.mjs";
import { p as passwordHasher, g as getAuthInstances, a as generateId } from "./auth_D3VEQItg.mjs";
import { f as createDbClient, a as permissions, e as eq, k as roles, r as rolePermissions, v as admins, l as adminsToRoles, ae as languages, s as sql, x as users$1, y as members, g as and, af as verificationCodes, c as collections, ag as entities, i as inArray, m as models, h as systemSettings, ah as asc, ai as adminSiteAccess, u as adminSessions, aj as mediaItems, ak as desc, al as mailMessages, am as seoGeoEnabledCollections, an as seoGeoMappings, j as mailTemplates, ao as apiTokens, w as memberSessions, ap as balanceLogs, aq as pointsLogs, ar as aiAgents, as as agentConfigs, at as agentMessages, au as agentSessions, av as agentJobs, aw as agentJobSteps, ax as agentSharedContexts, ay as agentTaskAssignments, az as isValidJobStatus, aA as AGENT_JOB_STATUSES, aB as agentArtifacts, aC as isTerminalJobStatus, aD as isValidReviewStatus, aE as isValidAssignmentStatus, aF as isValidStepStatus, aG as canTransitionStep, aH as canTransitionJob, aI as isValidReviewDecision, aJ as canTransitionReview, aK as isValidRiskLevel, aL as agentReviews } from "./index_C8hkm3Ad.mjs";
import { c as createMiddleware, a as getAdminAuthInfo, r as requirePermission } from "./rbac_8PPO8uBj.mjs";
import { initCorePermissions, registry, syncCorePermissionsToDb } from "./permission-registry_BnXurCiS.mjs";
import { g as getValidatedMapping, r as resetDomainCache, i as identifyTarget } from "./domains_B0Ufw_U2.mjs";
import { c as createReservedField, v as validateReservedFieldDefinition, a as getReservedListOrdering, b as isReservedFieldPubliclyVisible, g as getReservedFieldDefinitions, r as resolveReservedFieldCapabilities, d as getReservedFieldDefinition } from "./reserved-fields_BvytjmSq.mjs";
import { PluginService } from "./PluginService_BqjNV-46.mjs";
import { P as PLUGIN_CODE_REGISTRY } from "./auto-registry.gen_Be_qIIcv.mjs";
import { i as isAiSafeName, f as fromAiSafeName } from "./slug-utils_BUZMJBew.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
import { A as AgentCapabilityService, a as aiSkills } from "./AgentCapabilityService_D80kP5vr.mjs";
const seedAdmin = async (d1, password, username) => {
  const db = await createDbClient(d1);
  const name = String(username || "").trim();
  const pass = String(password || "").trim();
  if (!name || !pass) {
    throw new Error("缺少 DEFAULT_ADMIN_USER 或 DEFAULT_ADMIN_PASSWORD，拒绝使用内置默认账号初始化管理员。");
  }
  const hashedPassword = await passwordHasher.hash(pass);
  console.log("🌱 [Seed] 开始初始化动态 RBAC 系统...");
  const existingAll = await db.select().from(permissions).where(eq(permissions.slug, "all")).get();
  if (!existingAll) {
    await db.insert(permissions).values({
      slug: "all",
      name: "所有权限",
      permCategory: "core"
    });
    console.log("✅ [Seed] 核心权限 'all' 载入成功");
  }
  const existingRole = await db.select().from(roles).where(eq(roles.id, 1)).get();
  if (!existingRole) {
    await db.insert(roles).values({
      id: 1,
      name: "SuperAdmin",
      description: "系统最高权限组",
      scope: "system"
    });
    console.log("✅ [Seed] 超级管理员角色 'SuperAdmin' 创建成功");
  }
  initCorePermissions();
  await registry.syncToDb(db, true);
  console.log(`🔗 [Seed] 正在绑定 'all' 权限到 SuperAdmin...`);
  const existingRP = await db.select().from(rolePermissions).where(eq(rolePermissions.roleId, 1)).limit(1).get();
  if (!existingRP) {
    await db.insert(rolePermissions).values({
      roleId: 1,
      permissionSlug: "all"
    }).run();
  }
  console.log("✅ [Seed] 权限绑定完成");
  const adminId = "super-admin-01";
  let existingUser = await db.select().from(admins).where(eq(admins.username, name)).get();
  if (!existingUser) {
    await db.insert(admins).values({
      id: adminId,
      username: name,
      hashedPassword
    }).onConflictDoNothing();
    existingUser = await db.select().from(admins).where(eq(admins.username, name)).get();
  }
  if (existingUser) {
    const existingBinding = await db.select().from(adminsToRoles).where(eq(adminsToRoles.adminId, existingUser.id)).get();
    if (!existingBinding) {
      await db.insert(adminsToRoles).values({
        adminId: existingUser.id,
        roleId: 1,
        tenantId: 0
      }).run();
    }
  }
  console.log("🌍 [Seed] 初始化多语言系统...");
  const langs = [
    { code: "en-US", name: "English (US)", isDefault: true, status: "active" },
    { code: "zh-CN", name: "简体中文", isDefault: false, status: "active" }
  ];
  for (const lang of langs) {
    await db.insert(languages).values(lang).onConflictDoNothing();
  }
  console.log(`✅ [Seed] 超级管理员 [${name}] 初始化成功！`);
  return { username: name, password: pass };
};
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
  let currentTenantId = domains?.tenant_id || domains?.id || (domains?.site_domains ? domains.site_domains.id : 1);
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
const auth = new Hono();
const getSenderName = async (env) => {
  try {
    const mapping = await getValidatedMapping(env);
    if (mapping?.main_domain) {
      return `${mapping.main_domain.toUpperCase()} 独立站系统`;
    }
  } catch (e) {
  }
  return "独立站系统";
};
auth.post("/admin/login", async (c) => {
  const { username, password, cfToken, verificationCode } = await c.req.json();
  const requestHost = new URL(c.req.url).hostname;
  if (c.env.ADMIN_VERIFICATION && verificationCode !== c.env.ADMIN_VERIFICATION) {
    return c.json({ error: "后台验证码错误，拒绝访问" }, 403);
  }
  const { RateLimitService } = await import("./RateLimitService_DVVFCBIw.mjs");
  const { TurnstileService } = await import("./TurnstileService_BbxJ2uAo.mjs");
  if (c.env.NODE_ENV !== "development") {
    const rl = await RateLimitService.checkRateLimit(c.env.RATE_LIMITER, `admin_login:${username}`, 5, 300);
    if (!rl.success) {
      return c.json({ error: "登录尝试过于频繁，请稍后再试" }, 429);
    }
  }
  if (c.env.NODE_ENV !== "development" && c.env.TURNSTILE_ADMIN_SECRET_KEY) {
    const isHuman = await TurnstileService.verifyToken(c.env.TURNSTILE_ADMIN_SECRET_KEY, cfToken, void 0, requestHost);
    if (!isHuman) {
      return c.json({ error: "安全验证失败，请重新尝试" }, 403);
    }
  } else if (c.env.NODE_ENV === "development") {
    console.log("🧪 [Auth] 开发模式：已跳过 Turnstile 校验");
  }
  const { adminAuth } = await getAuthInstances(c.env.DB);
  const db = await createDbClient(c.env.DB);
  let existingAdmin = await db.select({
    id: admins.id,
    username: admins.username,
    passwordHash: admins.hashedPassword
  }).from(admins).where(eq(admins.username, username)).get();
  if (!existingAdmin) {
    const adminCount = await db.select({ count: sql`count(*)` }).from(admins).get();
    if (!adminCount || adminCount.count === 0) {
      await seedAdmin(c.env.DB, c.env.DEFAULT_ADMIN_PASSWORD, c.env.DEFAULT_ADMIN_USER);
      existingAdmin = await db.select({
        id: admins.id,
        username: admins.username,
        passwordHash: admins.hashedPassword
      }).from(admins).where(eq(admins.username, username)).get();
    }
  }
  if (!existingAdmin) {
    return c.json({ error: "用户名或密码错误" }, 401);
  }
  const validPassword = await passwordHasher.verify(existingAdmin.passwordHash, password);
  if (!validPassword) {
    return c.json({ error: "用户名或密码错误" }, 401);
  }
  await RateLimitService.resetRateLimit(c.env.RATE_LIMITER, `admin_login:${username}`);
  const session = await adminAuth.createSession(existingAdmin.id, {});
  const sessionCookie = adminAuth.createSessionCookie(session.id);
  c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
  return c.json({ message: "登录成功" });
});
auth.post("/admin/logout", async (c) => {
  const { adminAuth } = await getAuthInstances(c.env.DB);
  const authHeader = c.req.header("Cookie");
  const sessionId = adminAuth.readSessionCookie(authHeader ?? "");
  if (sessionId) {
    await adminAuth.invalidateSession(sessionId);
  }
  const sessionCookie = adminAuth.createBlankSessionCookie();
  c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
  return c.json({ message: "已安全登出" });
});
auth.get("/admin/me", async (c) => {
  const { adminAuth } = await getAuthInstances(c.env.DB);
  const authHeader = c.req.header("Cookie");
  const sessionId = adminAuth.readSessionCookie(authHeader ?? "");
  if (!sessionId) return c.json({ error: "Unauthorized" }, 401);
  const { user } = await adminAuth.validateSession(sessionId);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const db = await createDbClient(c.env.DB);
  const authInfo = await getAdminAuthInfo(db, user.id);
  return c.json({
    user,
    permissions: authInfo.permissions,
    roles: authInfo.roles
  });
});
auth.post("/member/login", async (c) => {
  const { email, password, cfToken } = await c.req.json();
  const requestHost = new URL(c.req.url).hostname;
  const { RateLimitService } = await import("./RateLimitService_DVVFCBIw.mjs");
  const { TurnstileService } = await import("./TurnstileService_BbxJ2uAo.mjs");
  if (c.env.NODE_ENV !== "development") {
    const rl = await RateLimitService.checkRateLimit(c.env.RATE_LIMITER, `login:${email}`, 5, 300);
    if (!rl.success) {
      return c.json({ error: "登录尝试过于频繁，请稍后再试" }, 429);
    }
  }
  if (c.env.NODE_ENV !== "development" && c.env.TURNSTILE_SECRET_KEY) {
    const isHuman = await TurnstileService.verifyToken(c.env.TURNSTILE_SECRET_KEY, cfToken, void 0, requestHost);
    if (!isHuman) {
      return c.json({ error: "安全验证失败，请重新尝试" }, 403);
    }
  } else if (c.env.NODE_ENV === "development") {
    console.log("🧪 [Auth] 会员登录-开发模式：已跳过 Turnstile 校验");
  }
  const { userAuth } = await getAuthInstances(c.env.DB);
  const db = await createDbClient(c.env.DB);
  const domains = c.get("site_domains") || c.get("domains");
  let tenantId = domains?.tenant_id || domains?.id || 1;
  const result = await db.select({
    id: users$1.id,
    passwordHash: users$1.passwordHash,
    status: users$1.status,
    email: users$1.email
  }).from(users$1).innerJoin(members, eq(users$1.id, members.id)).where(and(
    eq(users$1.email, email),
    eq(users$1.tenantId, Number(tenantId)),
    eq(users$1.userType, "member")
  )).get();
  if (!result || result.status !== "active") {
    return c.json({ error: "邮箱或密码错误" }, 401);
  }
  const validPassword = await passwordHasher.verify(result.passwordHash, password);
  if (!validPassword) {
    return c.json({ error: "邮箱或密码错误" }, 401);
  }
  await RateLimitService.resetRateLimit(c.env.RATE_LIMITER, `login:${email}`);
  const session = await userAuth.createSession(result.id, {});
  const sessionCookie = userAuth.createSessionCookie(session.id);
  c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
  return c.json({
    success: true,
    token: session.id,
    user: {
      id: result.id,
      email: result.email,
      tenantId: Number(tenantId)
    }
  });
});
auth.get("/member/extension/token", async (c) => {
  const { userAuth } = await getAuthInstances(c.env.DB);
  const cookieHeader = c.req.header("Cookie") ?? "";
  const sessionId = userAuth.readSessionCookie(cookieHeader);
  if (!sessionId) {
    return c.json({ error: "未登录或未检测到 Cookie 会话" }, 401);
  }
  const { session, user } = await userAuth.validateSession(sessionId);
  if (!session || !user) {
    return c.json({ error: "会话已失效" }, 401);
  }
  return c.json({
    success: true,
    token: session.id,
    user: {
      id: user.id,
      email: user.email,
      tenantId: user.tenantId
    }
  });
});
auth.post("/member/send-code", async (c) => {
  const { email } = await c.req.json();
  if (!email) return c.json({ error: "邮箱不能为空" }, 400);
  const db = await createDbClient(c.env.DB);
  const domains = c.get("site_domains") || c.get("domains");
  const tenantId = domains?.tenant_id || domains?.id || 1;
  const existing = await db.select().from(users$1).where(and(
    eq(users$1.email, email),
    eq(users$1.tenantId, Number(tenantId))
  )).get();
  if (existing) {
    return c.json({ error: "该邮箱已注册，请直接登录" }, 400);
  }
  const code = Math.floor(1e5 + Math.random() * 9e5).toString();
  const { MailService } = await import("./MailService_BFzhgxqw.mjs");
  await db.insert(verificationCodes).values({
    email,
    code,
    type: "register",
    expiresAt: new Date(Date.now() + 10 * 60 * 1e3)
  });
  try {
    const sent = await MailService.sendWithTemplate(c.env, {
      to: email,
      templateSlug: "register_code",
      vars: { code },
      senderName: await getSenderName(c.env)
    });
    if (!sent) {
      return c.json({ error: "验证码发送失败，请联系管理员检查邮件配置" }, 500);
    }
    return c.json({ success: true, message: "验证码已发送" });
  } catch (err) {
    console.error("Send code failed:", err);
    return c.json({ error: "验证码发送失败: " + err.message }, 500);
  }
});
auth.post("/member/register", async (c) => {
  const { email, password, code } = await c.req.json();
  if (!code) return c.json({ error: "请填写验证码" }, 400);
  const { IdentityService: IdentityService2 } = await Promise.resolve().then(() => IdentityService$1);
  const db = await createDbClient(c.env.DB);
  const record = await db.query.verificationCodes.findFirst({
    where: (vc, { eq: eq2, and: and2, gt }) => and2(
      eq2(vc.email, email),
      eq2(vc.code, code),
      eq2(vc.type, "register"),
      gt(vc.expiresAt, /* @__PURE__ */ new Date())
    ),
    orderBy: (vc, { desc: desc2 }) => [desc2(vc.createdAt)]
  });
  if (!record) {
    return c.json({ error: "验证码错误或已过期" }, 400);
  }
  const domains = c.get("site_domains") || c.get("domains");
  let tenantId = domains?.tenant_id || domains?.id || 1;
  try {
    const user = await IdentityService2.register(c.env.DB, {
      tenantId: Number(tenantId),
      email,
      password,
      userType: "member",
      level: 1
    });
    await db.delete(verificationCodes).where(eq(verificationCodes.id, record.id));
    return c.json({ success: true, userId: user.id });
  } catch (err) {
    return c.json({ error: err.message }, 400);
  }
});
auth.get("/member/me", memberAuth, async (c) => {
  const user = c.get("member");
  const db = await createDbClient(c.env.DB);
  const profile = await db.select({
    id: users$1.id,
    email: users$1.email,
    level: members.level,
    status: users$1.status,
    nickname: members.nickname,
    avatar: members.avatar,
    gender: members.gender,
    phone: members.phone,
    birthday: members.birthday,
    bio: members.bio,
    balance: members.balance,
    points: members.points
  }).from(users$1).leftJoin(members, eq(users$1.id, members.id)).where(eq(users$1.id, user.id)).get();
  return c.json({ user: profile });
});
auth.post("/member/update-profile", memberAuth, async (c) => {
  const user = c.get("member");
  const { nickname, gender, avatar, phone, birthday, bio } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  await db.update(members).set({
    nickname,
    gender,
    avatar,
    phone,
    birthday,
    bio,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(members.id, user.id)).run();
  return c.json({ success: true, message: "资料已更新" });
});
auth.post("/member/reset-password", memberAuth, async (c) => {
  const user = c.get("member");
  const { oldPassword, newPassword } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const userData = await db.select().from(users$1).where(eq(users$1.id, user.id)).get();
  if (!userData) return c.json({ error: "User not found" }, 404);
  const valid = await passwordHasher.verify(userData.passwordHash, oldPassword);
  if (!valid) return c.json({ error: "旧密码错误" }, 400);
  const newHash = await passwordHasher.hash(newPassword);
  await db.update(users$1).set({ passwordHash: newHash }).where(eq(users$1.id, user.id)).run();
  return c.json({ success: true, message: "密码已修改" });
});
auth.post("/member/forgot-password/send-code", async (c) => {
  const { email } = await c.req.json();
  if (!email) return c.json({ error: "邮箱不能为空" }, 400);
  const db = await createDbClient(c.env.DB);
  const domains = c.get("site_domains") || c.get("domains");
  let tenantId = domains?.tenant_id || domains?.id || 1;
  const existingUser = await db.select({ id: users$1.id }).from(users$1).innerJoin(members, eq(users$1.id, members.id)).where(and(
    eq(users$1.email, email),
    eq(users$1.tenantId, Number(tenantId)),
    eq(users$1.userType, "member")
  )).get();
  if (!existingUser) {
    return c.json({ error: "该邮箱尚未注册会员账户" }, 400);
  }
  const code = Math.floor(1e5 + Math.random() * 9e5).toString();
  const { MailService } = await import("./MailService_BFzhgxqw.mjs");
  await db.insert(verificationCodes).values({
    email,
    code,
    type: "forgot_password",
    expiresAt: new Date(Date.now() + 10 * 60 * 1e3)
  });
  try {
    let sent = false;
    try {
      sent = await MailService.sendWithTemplate(c.env, {
        to: email,
        templateSlug: "forgot_password_code",
        vars: { code },
        senderName: await getSenderName(c.env)
      });
    } catch (e) {
      sent = await MailService.sendMail(c.env, {
        to: email,
        subject: "找回您的会员登录密码",
        html: `<div style="font-family: sans-serif; padding: 20px;"><h2>找回密码</h2><p>您的验证码是 <strong>${code}</strong>，有效期为10分钟。如果您没有尝试找回密码，请忽略此邮件。</p></div>`,
        senderName: await getSenderName(c.env)
      });
    }
    if (!sent) {
      return c.json({ error: "验证码发送失败，请联系管理员" }, 500);
    }
    return c.json({ success: true, message: "验证码已发送" });
  } catch (err) {
    console.error("Send forgot code failed:", err);
    return c.json({ error: "验证码发送失败: " + err.message }, 500);
  }
});
auth.post("/member/forgot-password/reset", async (c) => {
  const { email, code, password } = await c.req.json();
  if (!email || !code || !password) {
    return c.json({ error: "请填齐所有参数" }, 400);
  }
  const db = await createDbClient(c.env.DB);
  const record = await db.query.verificationCodes.findFirst({
    where: (vc, { eq: eq2, and: and2, gt }) => and2(
      eq2(vc.email, email),
      eq2(vc.code, code),
      eq2(vc.type, "forgot_password"),
      gt(vc.expiresAt, /* @__PURE__ */ new Date())
    ),
    orderBy: (vc, { desc: desc2 }) => [desc2(vc.createdAt)]
  });
  if (!record) {
    return c.json({ error: "验证码错误或已过期" }, 400);
  }
  const domains = c.get("site_domains") || c.get("domains");
  let tenantId = domains?.tenant_id || domains?.id || 1;
  const existingUser = await db.select({ id: users$1.id }).from(users$1).innerJoin(members, eq(users$1.id, members.id)).where(and(
    eq(users$1.email, email),
    eq(users$1.tenantId, Number(tenantId)),
    eq(users$1.userType, "member")
  )).get();
  if (!existingUser) {
    return c.json({ error: "用户不存在" }, 400);
  }
  const newHash = await passwordHasher.hash(password);
  await db.update(users$1).set({ passwordHash: newHash, updatedAt: /* @__PURE__ */ new Date() }).where(eq(users$1.id, existingUser.id)).run();
  await db.delete(verificationCodes).where(eq(verificationCodes.id, record.id));
  return c.json({ success: true, message: "密码重置成功" });
});
auth.post("/member/logout", async (c) => {
  const { userAuth } = await getAuthInstances(c.env.DB);
  const authHeader = c.req.header("Authorization");
  let sessionId = "";
  if (authHeader && authHeader.startsWith("Bearer ")) {
    sessionId = authHeader.substring(7);
  } else {
    sessionId = userAuth.readSessionCookie(c.req.header("Cookie") ?? "") ?? "";
  }
  if (sessionId) {
    await userAuth.invalidateSession(sessionId);
  }
  const sessionCookie = userAuth.createBlankSessionCookie();
  c.header("Set-Cookie", sessionCookie.serialize(), { append: true });
  return c.json({ success: true, message: "已安全登出" });
});
const MODULE_DEPENDENCIES = {
  b2b_product: ["product_category", "product_spec_template", "entity"],
  product_category: [],
  product_spec_template: ["product_category"],
  b2b_inquiry: ["b2b_product"],
  online_message: [],
  content_category: [],
  article: ["content_category", "entity"],
  case_study: ["content_category", "entity"],
  industry: ["content_category", "entity"],
  taxonomy: [],
  faq: ["content_category", "b2b_product", "article"],
  resource: ["content_category", "entity"],
  entity: ["taxonomy"],
  page: ["entity"],
  company_info: [],
  translation_fields: [],
  nav_menu: [],
  nav_menu_item: ["nav_menu"]
};
const CUSTOM_SYSTEM_MODULES_KEY = "site_initializer_custom_modules_v3";
const CUSTOM_INDUSTRY_SITES_KEY = "site_initializer_custom_sites_v3";
const HIDDEN_SYSTEM_MODULE_PRESETS_KEY = "site_initializer_hidden_module_presets_v2";
const HIDDEN_INDUSTRY_SITE_PRESETS_KEY = "site_initializer_hidden_site_presets_v2";
const INSTALLED_SYSTEM_MODULE_IDS_KEY = "site_initializer_installed_module_ids_v1";
const INSTALLED_SYSTEM_MODULE_MANIFESTS_KEY = "site_initializer_installed_module_manifests_v1";
const FEATURED_CONTENT_OPTIONS = [
  { key: 0, value: "无" },
  { key: 1, value: "首页" },
  { key: 2, value: "推荐" }
];
const MODEL_LIBRARY = {
  // ========================
  // 产品中心
  // ========================
  b2b_product: {
    name: "产品",
    slug: "b2b_product",
    description: "外贸 B2B 核心产品数据，聚焦基础信息、图片展示与正文描述。",
    fields: [
      { name: "title", type: "text", label: "产品标题", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "URL Slug", isListDisplay: true },
      { name: "sku", type: "text", label: "SKU / 型号", isListDisplay: true },
      { name: "brand", type: "text", label: "品牌", isListDisplay: true },
      { name: "taxonomy_ids", type: "relation_multi", label: "产品分类", relationConfig: { collectionSlug: "product_category", displayField: "name" }, isListDisplay: true },
      { name: "spec_template_id", type: "relation_single", label: "规格模板", relationConfig: { collectionSlug: "product_spec_template", displayField: "name" } },
      { name: "spec_data", type: "json", label: "产品规格参数" },
      { name: "entities", type: "relation_multi", label: "关联实体", relationConfig: { collectionSlug: "entity", displayField: "entity_name" } },
      { name: "images", type: "multi_image", label: "产品图片 (多图)" },
      { name: "price", type: "number", label: "参考价格" },
      { name: "price_currency", type: "text", label: "价格币种", defaultValue: "USD" },
      { name: "availability", type: "select", label: "可售状态", options: ["InStock", "OutOfStock", "PreOrder"], defaultValue: "InStock" },
      { name: "summary", type: "textarea", label: "摘要" },
      { name: "description", type: "richtext", label: "详细描述" },
      createReservedField("status"),
      { name: "url_slug", type: "text", label: "访问路径", ui: { hidden: true } }
    ],
    menuGroup: "产品中心",
    icon: "Package",
    menuOrder: 2,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["title", "slug", "sku", "brand", "taxonomy_ids", "spec_template_id", "spec_data", "entities", "images", "price", "price_currency", "availability", "summary", "description", "url_slug"],
          write_whitelist: []
        }
      },
      url_slug: {
        generation: {
          enabled: true,
          preset: "canonical_path",
          sourceField: "slug"
        }
      },
      availability: {
        options: [
          { key: "InStock", value: "InStock" },
          { key: "OutOfStock", value: "OutOfStock" },
          { key: "PreOrder", value: "PreOrder" }
        ]
      },
      taxonomy_ids: { target_slug: "product_category", display_field: "name", targetCollectionSlug: "product_category", displayField: "name" },
      spec_template_id: {
        target_slug: "product_spec_template",
        display_field: "name",
        targetCollectionSlug: "product_spec_template",
        displayField: "name",
        template_apply: {
          source_field: "spec_data",
          target_field: "spec_data",
          default_mode: "fill_missing"
        }
      },
      entities: { target_slug: "entity", display_field: "entity_name", targetCollectionSlug: "entity", displayField: "entity_name" }
    }
  },
  product_category: {
    name: "产品分类",
    slug: "product_category",
    description: "产品中心专用分类模型，用于产品列表、详情页和分类归档展示。",
    fields: [
      { name: "name", type: "text", label: "分类名称", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "分类标识", required: true, isListDisplay: true },
      { name: "parent_id", type: "relation_single", label: "父分类", relationConfig: { collectionSlug: "product_category", displayField: "name" } },
      { name: "description", type: "textarea", label: "分类说明" },
      { name: "cover", type: "image", label: "封面" },
      { name: "icon", type: "text", label: "图标" },
      createReservedField("sort_order")
    ],
    menuGroup: "产品中心",
    icon: "FolderTree",
    menuOrder: 1,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["name", "slug", "parent_id", "description", "cover", "icon", "sort_order"],
          write_whitelist: []
        }
      },
      parent_id: { target_slug: "product_category", display_field: "name", targetCollectionSlug: "product_category", displayField: "name" }
    }
  },
  product_spec_template: {
    name: "产品规格模板",
    slug: "product_spec_template",
    description: "沉淀产品规格模板，供产品录入时快速引用并在具体产品上二次调整。",
    fields: [
      { name: "name", type: "text", label: "模板名称", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "模板标识", required: true, isListDisplay: true },
      { name: "product_category_id", type: "relation_single", label: "适用产品分类", relationConfig: { collectionSlug: "product_category", displayField: "name" } },
      { name: "spec_data", type: "json", label: "默认规格参数", required: true },
      { name: "description", type: "textarea", label: "模板说明" },
      createReservedField("sort_order"),
      { name: "template_status", type: "select", label: "模板状态", options: ["active", "inactive"], defaultValue: "active", isListDisplay: true }
    ],
    menuGroup: "产品中心",
    icon: "ClipboardList",
    menuOrder: 3,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["name", "slug", "product_category_id", "spec_data", "description", "sort_order", "template_status"],
          write_whitelist: []
        }
      },
      product_category_id: { target_slug: "product_category", display_field: "name", targetCollectionSlug: "product_category", displayField: "name" },
      template_status: {
        options: [
          { key: "active", value: "active" },
          { key: "inactive", value: "inactive" }
        ]
      }
    }
  },
  // ========================
  // 商务互动 (询盘 & 留言)
  // ========================
  b2b_inquiry: {
    name: "客户询盘",
    slug: "b2b_inquiry",
    description: "来自前端站点的产品询盘，自动归集到线索中。",
    fields: [
      { name: "subject", type: "text", label: "需求主题", isListDisplay: true },
      { name: "product", type: "relation_single", label: "关联产品", relationConfig: { collectionSlug: "b2b_product", displayField: "title" }, isListDisplay: true },
      { name: "name", type: "text", label: "联系人姓名", required: true, isListDisplay: true },
      { name: "email", type: "text", label: "电子邮箱", required: true, isListDisplay: true },
      { name: "phone", type: "text", label: "联系电话" },
      { name: "country", type: "text", label: "国家/地区", isListDisplay: true },
      { name: "ip", type: "text", label: "访客 IP", isListDisplay: true },
      { name: "source", type: "text", label: "流量来源" },
      { name: "content", type: "textarea", label: "具体需求", required: true }
    ],
    menuGroup: "商务互动",
    icon: "Mail",
    menuOrder: 1,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["submit"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 30 },
        field_permissions: {
          read_whitelist: [],
          write_whitelist: ["subject", "product", "name", "email", "phone", "country", "content", "source"]
        }
      },
      __notification_policy: {
        enabled: true,
        receiver_emails: [],
        sender_name: "Site Inquiry Bot",
        mail_subject_template: "新询盘 {{subject}} - {{name}}",
        mail_body_template: "",
        webhook_url: ""
      },
      product: { target_slug: "b2b_product", display_field: "title", targetCollectionSlug: "b2b_product", displayField: "title" }
    }
  },
  online_message: {
    name: "在线留言",
    slug: "online_message",
    description: "通用联系表单，自动归集到线索中心",
    fields: [
      { name: "name", type: "text", label: "姓名", required: true, isListDisplay: true },
      { name: "email", type: "text", label: "邮箱", required: true, isListDisplay: true },
      { name: "phone", type: "text", label: "电话" },
      { name: "subject", type: "text", label: "留言主题", isListDisplay: true },
      { name: "content", type: "textarea", label: "内容", required: true },
      { name: "message_status", type: "select", label: "处理状态", options: ["未读", "已读", "已回复"], defaultValue: "未读", isListDisplay: true },
      { name: "ip", type: "text", label: "IP 地址" }
    ],
    menuGroup: "商务互动",
    icon: "MessageSquare",
    menuOrder: 2,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["submit"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 30 },
        field_permissions: {
          read_whitelist: [],
          write_whitelist: ["name", "email", "phone", "subject", "content"]
        }
      },
      __notification_policy: {
        enabled: true,
        receiver_emails: [],
        sender_name: "Site Contact Bot",
        mail_subject_template: "新留言: {{subject}} - {{name}}",
        mail_body_template: "",
        webhook_url: ""
      },
      message_status: {
        options: [
          { key: "未读", value: "未读" },
          { key: "已读", value: "已读" },
          { key: "已回复", value: "已回复" }
        ]
      }
    }
  },
  // ========================
  // 内容管理
  // ========================
  content_category: {
    name: "内容分类",
    slug: "content_category",
    description: "内容管理专用分类模型，用于文章、案例、行业、FAQ 与资源中心的内容归类。",
    fields: [
      { name: "name", type: "text", label: "分类名称", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "分类标识", required: true, isListDisplay: true },
      { name: "parent_id", type: "relation_single", label: "父分类", relationConfig: { collectionSlug: "content_category", displayField: "name" } },
      { name: "description", type: "textarea", label: "分类说明" },
      { name: "cover", type: "image", label: "封面" },
      { name: "icon", type: "text", label: "图标" },
      createReservedField("sort_order")
    ],
    menuGroup: "内容管理",
    icon: "FolderTree",
    menuOrder: 1,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["name", "slug", "parent_id", "description", "cover", "icon", "sort_order"],
          write_whitelist: []
        }
      },
      parent_id: { target_slug: "content_category", display_field: "name", targetCollectionSlug: "content_category", displayField: "name" }
    }
  },
  article: {
    name: "文章/博客",
    slug: "article",
    description: "长文内容发布，聚焦标题、正文、摘要和封面图等基础内容维护。",
    fields: [
      { name: "title", type: "text", label: "标题", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "URL Slug", isListDisplay: true },
      { name: "author", type: "text", label: "作者", isListDisplay: true },
      { name: "taxonomy_ids", type: "relation_multi", label: "内容分类", relationConfig: { collectionSlug: "content_category", displayField: "name" }, isListDisplay: true },
      { name: "entities", type: "relation_multi", label: "关联实体", relationConfig: { collectionSlug: "entity", displayField: "entity_name" } },
      { name: "cover", type: "image", label: "封面" },
      { name: "content", type: "richtext", label: "正文" },
      { name: "summary", type: "textarea", label: "摘要" },
      { name: "excerpt", type: "textarea", label: "文章导读" },
      { name: "featured", type: "multi_select", label: "推荐内容", options: FEATURED_CONTENT_OPTIONS, defaultValue: [0], isListDisplay: true },
      { name: "reading_time", type: "number", label: "预计阅读时间" },
      createReservedField("status"),
      { name: "url_slug", type: "text", label: "访问路径", ui: { hidden: true } }
    ],
    menuGroup: "内容管理",
    icon: "FileText",
    menuOrder: 1,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["title", "slug", "author", "taxonomy_ids", "entities", "cover", "content", "summary", "excerpt", "featured", "reading_time", "url_slug"],
          write_whitelist: []
        }
      },
      url_slug: {
        generation: {
          enabled: true,
          preset: "canonical_path",
          sourceField: "slug"
        }
      },
      taxonomy_ids: { target_slug: "content_category", display_field: "name", targetCollectionSlug: "content_category", displayField: "name" },
      entities: { target_slug: "entity", display_field: "entity_name", targetCollectionSlug: "entity", displayField: "entity_name" },
      featured: {
        options: FEATURED_CONTENT_OPTIONS
      }
    }
  },
  case_study: {
    name: "案例",
    slug: "case_study",
    description: "案例展示与案例详情内容，用于品牌背书和项目成果展示。",
    fields: [
      { name: "title", type: "text", label: "案例标题", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "URL Slug", isListDisplay: true },
      { name: "industry", type: "text", label: "所属行业", isListDisplay: true },
      { name: "client_name", type: "text", label: "客户名称", isListDisplay: true },
      { name: "taxonomy_ids", type: "relation_multi", label: "内容分类", relationConfig: { collectionSlug: "content_category", displayField: "name" } },
      { name: "entities", type: "relation_multi", label: "关联实体", relationConfig: { collectionSlug: "entity", displayField: "entity_name" } },
      { name: "cover", type: "image", label: "案例封面" },
      { name: "summary", type: "textarea", label: "案例摘要" },
      { name: "challenge", type: "richtext", label: "项目挑战" },
      { name: "solution", type: "richtext", label: "解决方案" },
      { name: "results", type: "richtext", label: "项目成果" },
      { name: "content", type: "richtext", label: "案例正文" },
      createReservedField("status"),
      { name: "url_slug", type: "text", label: "访问路径", ui: { hidden: true } }
    ],
    menuGroup: "内容管理",
    icon: "BriefcaseBusiness",
    menuOrder: 5,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["title", "slug", "industry", "client_name", "taxonomy_ids", "entities", "cover", "summary", "challenge", "solution", "results", "content", "url_slug"],
          write_whitelist: []
        }
      },
      url_slug: {
        generation: {
          enabled: true,
          preset: "canonical_path",
          sourceField: "slug"
        }
      },
      taxonomy_ids: { target_slug: "content_category", display_field: "name", targetCollectionSlug: "content_category", displayField: "name" },
      entities: { target_slug: "entity", display_field: "entity_name", targetCollectionSlug: "entity", displayField: "entity_name" }
    }
  },
  industry: {
    name: "行业解决方案",
    slug: "industry",
    description: "行业场景页面，适合沉淀行业痛点、解决方案与行业内容说明。",
    fields: [
      { name: "name", type: "text", label: "行业名称", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "URL Slug", isListDisplay: true },
      { name: "taxonomy_ids", type: "relation_multi", label: "内容分类", relationConfig: { collectionSlug: "content_category", displayField: "name" } },
      { name: "entities", type: "relation_multi", label: "关联实体", relationConfig: { collectionSlug: "entity", displayField: "entity_name" } },
      { name: "cover", type: "image", label: "封面" },
      { name: "summary", type: "textarea", label: "行业简介" },
      { name: "pain_points", type: "richtext", label: "行业痛点" },
      { name: "solutions", type: "richtext", label: "解决方案" },
      { name: "content", type: "richtext", label: "正文" },
      { name: "url_slug", type: "text", label: "访问路径", ui: { hidden: true } }
    ],
    menuGroup: "内容管理",
    icon: "Building",
    menuOrder: 6,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["name", "slug", "taxonomy_ids", "entities", "cover", "summary", "pain_points", "solutions", "content", "url_slug"],
          write_whitelist: []
        }
      },
      url_slug: {
        generation: {
          enabled: true,
          preset: "canonical_path",
          sourceField: "slug"
        }
      },
      taxonomy_ids: { target_slug: "content_category", display_field: "name", targetCollectionSlug: "content_category", displayField: "name" },
      entities: { target_slug: "entity", display_field: "entity_name", targetCollectionSlug: "entity", displayField: "entity_name" }
    }
  },
  taxonomy: {
    name: "语义分类",
    slug: "taxonomy",
    description: "用于实体库的标签组织与归类，不承担产品分类或内容分类职能。",
    fields: [
      { name: "name", type: "text", label: "标签名称", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "分类标识", required: true, isListDisplay: true },
      { name: "taxonomy_type", type: "select", label: "标签类型", isListDisplay: true, options: ["semantic", "industry", "knowledge", "brand", "topic", "custom"] },
      { name: "parent_id", type: "relation_single", label: "父标签", relationConfig: { collectionSlug: "taxonomy", displayField: "name" } },
      { name: "description", type: "textarea", label: "标签说明" },
      { name: "cover", type: "image", label: "封面" },
      { name: "icon", type: "text", label: "图标" },
      createReservedField("sort_order")
    ],
    menuGroup: "知识中心",
    icon: "Network",
    menuOrder: 1,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["name", "slug", "taxonomy_type", "parent_id", "description", "cover", "icon", "sort_order"],
          write_whitelist: []
        }
      },
      taxonomy_type: {
        options: [
          { key: "semantic", value: "semantic" },
          { key: "industry", value: "industry" },
          { key: "knowledge", value: "knowledge" },
          { key: "brand", value: "brand" },
          { key: "topic", value: "topic" },
          { key: "custom", value: "custom" }
        ]
      },
      parent_id: { target_slug: "taxonomy", display_field: "name", targetCollectionSlug: "taxonomy", displayField: "name" }
    }
  },
  faq: {
    name: "常见问题",
    slug: "faq",
    description: "FAQ 知识模块，可挂接到产品页、文章页与品牌页。",
    fields: [
      { name: "question", type: "text", label: "问题", required: true, isListDisplay: true },
      { name: "answer", type: "richtext", label: "回答", required: true },
      { name: "taxonomy_ids", type: "relation_multi", label: "内容分类", relationConfig: { collectionSlug: "content_category", displayField: "name" } },
      { name: "related_product", type: "relation_single", label: "关联商品", relationConfig: { collectionSlug: "b2b_product", displayField: "title" } },
      { name: "related_article", type: "relation_single", label: "关联文章", relationConfig: { collectionSlug: "article", displayField: "title" } },
      createReservedField("sort_order"),
      createReservedField("status")
    ],
    menuGroup: "内容管理",
    icon: "CircleHelp",
    menuOrder: 4,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["question", "answer", "taxonomy_ids", "related_product", "related_article", "sort_order"],
          write_whitelist: []
        }
      },
      taxonomy_ids: { target_slug: "content_category", display_field: "name", targetCollectionSlug: "content_category", displayField: "name" },
      related_product: { target_slug: "b2b_product", display_field: "title", targetCollectionSlug: "b2b_product", displayField: "title" },
      related_article: { target_slug: "article", display_field: "title", targetCollectionSlug: "article", displayField: "title" }
    }
  },
  resource: {
    name: "资源中心",
    slug: "resource",
    description: "统一管理白皮书、指南、数据表、目录、报告与下载资源。",
    fields: [
      { name: "title", type: "text", label: "标题", required: true, isListDisplay: true },
      { name: "resource_type", type: "select", label: "资源类型", isListDisplay: true, options: ["whitepaper", "guide", "datasheet", "catalog", "report", "checklist", "ebook", "template", "download"] },
      { name: "cover", type: "image", label: "封面" },
      { name: "summary", type: "textarea", label: "摘要" },
      { name: "content", type: "richtext", label: "正文" },
      { name: "download_file", type: "text", label: "下载文件" },
      { name: "taxonomy_ids", type: "relation_multi", label: "内容分类", relationConfig: { collectionSlug: "content_category", displayField: "name" } },
      { name: "entities", type: "relation_multi", label: "关联实体", relationConfig: { collectionSlug: "entity", displayField: "entity_name" } }
    ],
    menuGroup: "内容管理",
    icon: "BookMarked",
    menuOrder: 7,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["title", "resource_type", "cover", "summary", "content", "download_file", "taxonomy_ids", "entities"],
          write_whitelist: []
        }
      },
      resource_type: {
        options: [
          { key: "whitepaper", value: "whitepaper" },
          { key: "guide", value: "guide" },
          { key: "datasheet", value: "datasheet" },
          { key: "catalog", value: "catalog" },
          { key: "report", value: "report" },
          { key: "checklist", value: "checklist" },
          { key: "ebook", value: "ebook" },
          { key: "template", value: "template" },
          { key: "download", value: "download" }
        ]
      },
      taxonomy_ids: { target_slug: "content_category", display_field: "name", targetCollectionSlug: "content_category", displayField: "name" },
      entities: { target_slug: "entity", display_field: "entity_name", targetCollectionSlug: "entity", displayField: "entity_name" }
    }
  },
  entity: {
    name: "实体",
    slug: "entity",
    description: "用于沉淀品牌、术语、机构、主题等可复用实体数据。",
    fields: [
      { name: "entity_name", type: "text", label: "实体名称", required: true, isListDisplay: true },
      { name: "entity_type", type: "select", label: "实体类型", isListDisplay: true, options: ["company", "brand", "product", "service", "industry", "material", "technology", "software", "person", "standard", "location", "organization", "concept", "custom"] },
      { name: "description", type: "textarea", label: "实体描述" },
      { name: "summary", type: "textarea", label: "摘要" },
      { name: "official_url", type: "text", label: "官方网站" },
      { name: "logo", type: "image", label: "Logo" },
      { name: "cover", type: "image", label: "封面" },
      { name: "taxonomy_ids", type: "relation_multi", label: "分类体系", relationConfig: { collectionSlug: "taxonomy", displayField: "name" } },
      { name: "related_articles", type: "relation_multi", label: "关联文章", relationConfig: { collectionSlug: "article", displayField: "title" } },
      { name: "related_resources", type: "relation_multi", label: "关联资源", relationConfig: { collectionSlug: "resource", displayField: "title" } },
      { name: "related_products", type: "relation_multi", label: "关联产品", relationConfig: { collectionSlug: "b2b_product", displayField: "title" } },
      { name: "related_industries", type: "relation_multi", label: "关联行业", relationConfig: { collectionSlug: "industry", displayField: "name" } }
    ],
    menuGroup: "知识中心",
    icon: "Network",
    menuOrder: 1,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["entity_name", "entity_type", "description", "summary", "official_url", "logo", "cover", "taxonomy_ids", "related_articles", "related_resources", "related_products", "related_industries"],
          write_whitelist: []
        }
      },
      entity_type: {
        options: [
          { key: "company", value: "company" },
          { key: "brand", value: "brand" },
          { key: "product", value: "product" },
          { key: "service", value: "service" },
          { key: "industry", value: "industry" },
          { key: "material", value: "material" },
          { key: "technology", value: "technology" },
          { key: "software", value: "software" },
          { key: "person", value: "person" },
          { key: "standard", value: "standard" },
          { key: "location", value: "location" },
          { key: "organization", value: "organization" },
          { key: "concept", value: "concept" },
          { key: "custom", value: "custom" }
        ]
      },
      taxonomy_ids: { target_slug: "taxonomy", display_field: "name", targetCollectionSlug: "taxonomy", displayField: "name" },
      related_articles: { target_slug: "article", display_field: "title", targetCollectionSlug: "article", displayField: "title" },
      related_resources: { target_slug: "resource", display_field: "title", targetCollectionSlug: "resource", displayField: "title" },
      related_products: { target_slug: "b2b_product", display_field: "title", targetCollectionSlug: "b2b_product", displayField: "title" },
      related_industries: { target_slug: "industry", display_field: "name", targetCollectionSlug: "industry", displayField: "name" }
    }
  },
  page: {
    name: "独立页面",
    slug: "page",
    description: "独立页面内容容器，用于关于我们、联系页、专题页和普通落地页。",
    fields: [
      { name: "title", type: "text", label: "页面标题", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "URL Slug", isListDisplay: true },
      { name: "entities", type: "relation_multi", label: "关联实体", relationConfig: { collectionSlug: "entity", displayField: "entity_name" } },
      { name: "target_reference", type: "reference", label: "通用引用", relationConfig: { allowedCollections: ["b2b_product", "content_category", "article", "product_category", "faq", "page", "case_study", "industry", "resource", "entity"] } },
      { name: "hero_image", type: "image", label: "头图" },
      { name: "content", type: "richtext", label: "页面内容" },
      { name: "summary", type: "textarea", label: "页面摘要" },
      createReservedField("status"),
      { name: "url_slug", type: "text", label: "访问路径", ui: { hidden: true } }
    ],
    menuGroup: "内容管理",
    icon: "Layout",
    menuOrder: 2,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["title", "slug", "entities", "target_reference", "hero_image", "content", "summary", "url_slug"],
          write_whitelist: []
        }
      },
      url_slug: {
        generation: {
          enabled: true,
          preset: "canonical_path",
          sourceField: "slug"
        }
      },
      entities: { target_slug: "entity", display_field: "entity_name", targetCollectionSlug: "entity", displayField: "entity_name" }
    }
  },
  // ========================
  // 系统设置 (内容类模板)
  // ========================
  company_info: {
    name: "公司信息",
    slug: "company_info",
    description: "企业基础信息（名称、地址、联系方式等），供前端 About 页面与 Footer 使用。",
    fields: [
      { name: "company_name", type: "text", label: "公司名称", required: true, isListDisplay: true },
      { name: "organization_type", type: "text", label: "组织类型" },
      { name: "company_type", type: "select", label: "公司类型", options: ["manufacturer", "supplier", "service_provider", "software_company", "education", "organization", "other"], isListDisplay: true },
      { name: "logo", type: "image", label: "Logo" },
      { name: "slogan", type: "text", label: "Slogan / 标语" },
      { name: "summary", type: "textarea", label: "摘要" },
      { name: "website", type: "text", label: "官网地址" },
      { name: "address", type: "textarea", label: "公司地址" },
      { name: "phone", type: "text", label: "联系电话" },
      { name: "email", type: "text", label: "联系邮箱" },
      { name: "founding_date", type: "text", label: "成立时间" },
      { name: "industry_focus", type: "relation_multi", label: "行业聚焦", relationConfig: { collectionSlug: "industry", displayField: "name" } },
      { name: "employee_count", type: "number", label: "员工人数" },
      { name: "factory_area", type: "text", label: "工厂面积" },
      { name: "main_products", type: "relation_multi", label: "主营产品", relationConfig: { collectionSlug: "b2b_product", displayField: "title" } },
      { name: "main_services", type: "textarea", label: "主营服务" },
      { name: "about_content", type: "richtext", label: "公司简介(富文本)" }
    ],
    menuGroup: "系统设置",
    icon: "Building2",
    menuOrder: 1,
    metadata: {
      presentationMode: "single_form"
    },
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["company_name", "organization_type", "company_type", "logo", "slogan", "summary", "website", "address", "phone", "email", "founding_date", "industry_focus", "employee_count", "factory_area", "main_products", "main_services", "about_content"],
          write_whitelist: []
        }
      },
      company_type: {
        options: [
          { key: "manufacturer", value: "manufacturer" },
          { key: "supplier", value: "supplier" },
          { key: "service_provider", value: "service_provider" },
          { key: "software_company", value: "software_company" },
          { key: "education", value: "education" },
          { key: "organization", value: "organization" },
          { key: "other", value: "other" }
        ]
      },
      industry_focus: { target_slug: "industry", display_field: "name", targetCollectionSlug: "industry", displayField: "name" },
      main_products: { target_slug: "b2b_product", display_field: "title", targetCollectionSlug: "b2b_product", displayField: "title" }
    }
  },
  translation_fields: {
    name: "翻译字段",
    slug: "translation_fields",
    description: "维护站点级翻译字段 JSON 配置，供多语言字段映射与文案生成场景使用。",
    fields: [
      { name: "field_list", type: "json", label: "字段列表", required: true }
    ],
    menuGroup: "系统设置",
    icon: "Languages",
    menuOrder: 2,
    metadata: {
      presentationMode: "single_form"
    },
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["field_list"],
          write_whitelist: []
        }
      }
    }
  },
  nav_menu: {
    name: "导航管理",
    slug: "nav_menu",
    description: "站点导航菜单配置，支持 Header / Footer / Sidebar 多区域。",
    fields: [
      { name: "name", type: "text", label: "菜单统称", required: true, isListDisplay: true },
      { name: "slug", type: "text", label: "唯一标识", placeholder: "header/footer/sidebar", required: true, isListDisplay: true },
      { name: "menu_type", type: "select", label: "菜单类型", defaultValue: "header", isListDisplay: true, options: ["header", "footer", "sidebar", "breadcrumb", "utility"] }
    ],
    menuGroup: "系统设置",
    icon: "Menu",
    menuOrder: 10,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["name", "slug", "menu_type"],
          write_whitelist: []
        }
      },
      menu_type: {
        options: [
          { key: "header", value: "Header" },
          { key: "footer", value: "Footer" },
          { key: "sidebar", value: "Sidebar" },
          { key: "breadcrumb", value: "Breadcrumb" },
          { key: "utility", value: "Utility" }
        ]
      }
    }
  },
  nav_menu_item: {
    name: "导航菜单项",
    slug: "nav_menu_item",
    description: "菜单层级节点与具体链接项",
    fields: [
      { name: "nav_menu_ids", type: "relation_multi", label: "所属导航", required: true, isListDisplay: true, relationConfig: { collectionSlug: "nav_menu", displayField: "name" } },
      { name: "parent_id", type: "relation_single", label: "父级菜单", isListDisplay: false, relationConfig: { collectionSlug: "nav_menu_item", displayField: "title", parentKey: "parent_id" } },
      { name: "title", type: "text", label: "显示标题", required: true, isListDisplay: true },
      { name: "target_reference", type: "reference", label: "跳转链接", required: true, isListDisplay: true, relationConfig: { allowedCollections: ["b2b_product", "content_category", "article", "product_category", "faq", "page", "case_study", "industry", "resource", "entity"] } },
      createReservedField("sort_order"),
      { name: "open_in_new_tab", type: "checkbox", label: "新标签页打开", isListDisplay: true, options: ["yes"] },
      { name: "icon", type: "text", label: "图标 Class (可选)" }
    ],
    menuGroup: "系统设置",
    icon: "ListTree",
    menuOrder: 11,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["nav_menu_ids", "parent_id", "title", "target_reference", "sort_order", "open_in_new_tab", "icon"],
          write_whitelist: []
        }
      },
      open_in_new_tab: {
        options: [{ key: "yes", value: "yes" }]
      }
    }
  }
};
const RESOURCE_BLUEPRINT_PRESETS = [
  {
    id: "product-catalog-resource",
    name: "商品目录资源",
    description: "封装商品基础资料、产品分类与规格模板能力，是商品展示类站点的核心资源构件。",
    category: "商品展示",
    target: "商品型站点",
    tags: ["商品", "目录", "展示"],
    dependencyIds: [],
    unitIds: ["product_category", "product_spec_template", "b2b_product", "taxonomy", "entity"]
  },
  {
    id: "product-inquiry-resource",
    name: "产品询盘资源",
    description: "封装与商品详情相关联的询盘流程，用于产品型站点的线索收集。",
    category: "互动线索",
    target: "商品型站点",
    tags: ["询盘", "线索", "产品"],
    dependencyIds: [],
    unitIds: ["b2b_inquiry"]
  },
  {
    id: "contact-form-resource",
    name: "通用联系表单资源",
    description: "封装站点通用留言与联系表单，适合获客、咨询、预约前置收集。",
    category: "互动线索",
    target: "通用站点",
    tags: ["表单", "留言", "线索"],
    dependencyIds: [],
    unitIds: ["online_message"]
  },
  {
    id: "article-library-resource",
    name: "文章内容资源",
    description: "封装文章发布与内容分类能力，适合博客、资讯、品牌内容运营。",
    category: "内容运营",
    target: "内容型站点",
    tags: ["文章", "博客", "内容"],
    dependencyIds: [],
    unitIds: ["content_category", "article", "taxonomy", "entity"]
  },
  {
    id: "case-library-resource",
    name: "案例内容资源",
    description: "封装案例内容发布与成果展示能力，适合品牌官网、产品站和服务型站点建立信任背书。",
    category: "内容运营",
    target: "品牌型站点",
    tags: ["案例", "案例库", "背书"],
    dependencyIds: [],
    unitIds: ["content_category", "case_study", "taxonomy", "entity"]
  },
  {
    id: "industry-solution-resource",
    name: "行业解决方案资源",
    description: "封装行业场景、痛点与解决方案内容，适合行业页、解决方案页和垂直行业专题页。",
    category: "内容运营",
    target: "品牌型站点",
    tags: ["行业", "解决方案", "场景"],
    dependencyIds: [],
    unitIds: ["content_category", "industry", "taxonomy", "entity"]
  },
  {
    id: "faq-resource",
    name: "FAQ 常见问题资源",
    description: "封装结构化问答内容，适合产品页、文章页和品牌页承载常见问题信息。",
    category: "内容运营",
    target: "品牌型站点",
    tags: ["FAQ", "问答", "内容"],
    dependencyIds: [],
    unitIds: ["faq"]
  },
  {
    id: "landing-page-resource",
    name: "独立页面资源",
    description: "封装关于我们、联系页、专题页等独立页面能力，适合品牌与落地页场景。",
    category: "页面体验",
    target: "品牌型站点",
    tags: ["页面", "落地页", "品牌"],
    dependencyIds: [],
    unitIds: ["page", "taxonomy", "entity"]
  },
  {
    id: "company-profile-resource",
    name: "企业资料资源",
    description: "封装企业基础资料、品牌介绍与联系方式，是品牌站点的基础构件。",
    category: "品牌信息",
    target: "企业官网",
    tags: ["公司", "品牌", "信息"],
    dependencyIds: [],
    unitIds: ["company_info"]
  },
  {
    id: "translation-fields-resource",
    name: "翻译字段资源",
    description: "封装站点级翻译字段 JSON 配置，适合多语言字段映射与统一翻译策略维护。",
    category: "系统设置",
    target: "所有站点",
    tags: ["翻译", "字段", "JSON"],
    dependencyIds: [],
    unitIds: ["translation_fields"]
  },
  {
    id: "navigation-resource",
    name: "导航配置资源",
    description: "封装头部、页脚与多区域导航能力，作为站点基础设施构件使用。",
    category: "站点基础",
    target: "所有站点",
    tags: ["导航", "菜单", "基础"],
    dependencyIds: [],
    unitIds: ["nav_menu", "nav_menu_item"]
  }
];
const SYSTEM_MODULE_PRESETS = [
  {
    id: "product-showcase",
    name: "商品展示模块",
    description: "面向商品型站点的核心展示模块，提供商品目录、产品分类与规格模板能力。",
    category: "展示交易",
    target: "商品型站点",
    tags: ["商品", "展示", "目录"],
    resourceBlueprintIds: ["product-catalog-resource"],
    moduleDependencyIds: []
  },
  {
    id: "product-inquiry",
    name: "产品询盘模块",
    description: "提供商品询盘与通用留言能力，用于承接商品详情页和站点线索。",
    category: "互动线索",
    target: "商品型站点",
    tags: ["询盘", "线索", "获客"],
    resourceBlueprintIds: ["product-inquiry-resource", "contact-form-resource"],
    moduleDependencyIds: ["product-showcase"]
  },
  {
    id: "content-library",
    name: "内容发布模块",
    description: "提供文章发布与内容分类能力，适合博客、资讯和品牌内容站。",
    category: "内容运营",
    target: "内容型站点",
    tags: ["内容", "博客", "资讯"],
    resourceBlueprintIds: ["article-library-resource"],
    moduleDependencyIds: []
  },
  {
    id: "case-library",
    name: "案例展示模块",
    description: "提供案例列表与案例详情能力，适合企业官网、服务站和产品站展示项目成果与客户背书。",
    category: "内容运营",
    target: "品牌型站点",
    tags: ["案例", "案例库", "背书"],
    resourceBlueprintIds: ["case-library-resource"],
    moduleDependencyIds: []
  },
  {
    id: "industry-solutions",
    name: "行业解决方案模块",
    description: "提供行业列表与行业详情内容能力，适合企业官网沉淀行业场景、行业痛点与解决方案内容。",
    category: "内容运营",
    target: "品牌型站点",
    tags: ["行业", "解决方案", "场景"],
    resourceBlueprintIds: ["industry-solution-resource"],
    moduleDependencyIds: []
  },
  {
    id: "faq-center",
    name: "FAQ 常见问题模块",
    description: "提供结构化 FAQ 问答内容能力，适合产品、品牌与内容站承载常见问题内容。",
    category: "内容运营",
    target: "品牌型站点",
    tags: ["FAQ", "问答", "内容"],
    resourceBlueprintIds: ["faq-resource"],
    moduleDependencyIds: []
  },
  {
    id: "landing-pages",
    name: "独立页面模块",
    description: "提供品牌页、专题页、落地页等独立页面能力。",
    category: "页面体验",
    target: "品牌型站点",
    tags: ["页面", "专题", "落地"],
    resourceBlueprintIds: ["landing-page-resource"],
    moduleDependencyIds: []
  },
  {
    id: "lead-capture",
    name: "通用获客模块",
    description: "提供站点级通用留言与联系表单能力，适合咨询、预约、报名等场景。",
    category: "互动线索",
    target: "通用站点",
    tags: ["表单", "线索", "留言"],
    resourceBlueprintIds: ["contact-form-resource"],
    moduleDependencyIds: []
  },
  {
    id: "brand-profile",
    name: "企业资料模块",
    description: "提供企业基础资料、品牌介绍、联系方式等信息承载能力。",
    category: "品牌信息",
    target: "企业官网",
    tags: ["品牌", "公司", "资料"],
    resourceBlueprintIds: ["company-profile-resource"],
    moduleDependencyIds: []
  },
  {
    id: "translation-fields",
    name: "翻译字段",
    description: "提供站点级翻译字段 JSON 配置能力，适合统一维护多语言字段映射规则。",
    category: "系统设置",
    target: "所有站点",
    tags: ["翻译", "字段", "JSON"],
    resourceBlueprintIds: ["translation-fields-resource"],
    moduleDependencyIds: []
  },
  {
    id: "navigation-hub",
    name: "导航体系模块",
    description: "提供站点头部、页脚与导航区域的结构化配置能力。",
    category: "站点基础",
    target: "所有站点",
    tags: ["导航", "菜单", "基础"],
    resourceBlueprintIds: ["navigation-resource"],
    moduleDependencyIds: []
  }
];
const INDUSTRY_SITE_PRESETS = [
  {
    id: "overseas-product-site",
    name: "外贸产品站",
    description: "适合产品展示与询盘转化场景，组合商品展示、产品询盘、企业资料与导航体系。",
    target: "商品型站点",
    tags: ["外贸", "产品", "询盘"],
    systemModuleIds: ["product-showcase", "product-inquiry", "brand-profile", "navigation-hub"]
  },
  {
    id: "brand-content-site",
    name: "品牌内容站",
    description: "适合品牌介绍与内容运营场景，组合内容发布、案例展示、独立页面、获客与品牌资料能力。",
    target: "品牌型站点",
    tags: ["品牌", "内容", "官网"],
    systemModuleIds: ["content-library", "case-library", "landing-pages", "lead-capture", "brand-profile", "navigation-hub"]
  },
  {
    id: "content-blog-site",
    name: "内容博客站",
    description: "适合博客、教程、知识站等内容型场景，组合内容发布与导航能力。",
    target: "内容型站点",
    tags: ["博客", "内容", "知识"],
    systemModuleIds: ["content-library", "navigation-hub"]
  },
  {
    id: "landing-lead-site",
    name: "单页获客站",
    description: "适合专题落地页和短链路获客场景，组合独立页面、通用获客与品牌资料能力。",
    target: "品牌型站点",
    tags: ["落地页", "获客", "专题"],
    systemModuleIds: ["landing-pages", "lead-capture", "brand-profile", "navigation-hub"]
  }
];
function topologicalSort(ids, depGraph) {
  const sorted = [];
  const visited = /* @__PURE__ */ new Set();
  const visiting = /* @__PURE__ */ new Set();
  const stack = [];
  const visit = (id) => {
    if (visited.has(id)) return;
    if (visiting.has(id)) {
      const cycleStart = stack.indexOf(id);
      const cyclePath = cycleStart >= 0 ? [...stack.slice(cycleStart), id] : [...stack, id];
      throw new Error(`检测到循环依赖: ${cyclePath.join(" -> ")}`);
    }
    visiting.add(id);
    stack.push(id);
    const deps = depGraph[id] || [];
    deps.forEach((dep) => {
      if (ids.includes(dep)) visit(dep);
    });
    stack.pop();
    visiting.delete(id);
    visited.add(id);
    sorted.push(id);
  };
  ids.forEach((id) => visit(id));
  return sorted;
}
function validateFieldIdentifier(name) {
  if (!name) return { valid: false, error: "字段名不能为空" };
  const identifierRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
  if (!identifierRegex.test(name)) {
    return {
      valid: false,
      error: "字段标识符不合法：必须以字母或下划线开头，且仅包含字母、数字及下划线"
    };
  }
  return { valid: true };
}
function validateModelDefinition(def) {
  if (!def.name || !def.slug) {
    return { valid: false, error: "模型名称和 Slug 不能为空" };
  }
  if (def.fieldsJson.length === 0) {
    return { valid: false, error: "模型必须至少包含一个字段定义" };
  }
  const fieldNames = /* @__PURE__ */ new Set();
  for (const field of def.fieldsJson) {
    const identCheck = validateFieldIdentifier(field.name);
    if (!identCheck.valid) return identCheck;
    if (fieldNames.has(field.name)) {
      return { valid: false, error: `字段 Key [${field.name}] 重复` };
    }
    fieldNames.add(field.name);
    const reservedFieldError = validateReservedFieldDefinition(field);
    if (reservedFieldError) {
      return { valid: false, error: reservedFieldError };
    }
    if (field.validation?.textPattern && field.type === "text") {
      try {
        new RegExp(field.validation.textPattern);
      } catch {
        return { valid: false, error: `字段 [${field.label}] 的文本校验正则不合法` };
      }
    }
    if (field.validation?.textareaMaxLength !== void 0 && (field.type !== "textarea" || Number(field.validation.textareaMaxLength) < 0)) {
      return { valid: false, error: `字段 [${field.label}] 的最大字数必须是大于等于 0 的整数` };
    }
    if (field.type === "number" && field.validation) {
      if (field.validation.numberStep !== void 0 && (!Number.isFinite(Number(field.validation.numberStep)) || Number(field.validation.numberStep) <= 0)) {
        return { valid: false, error: `字段 [${field.label}] 的数字步长必须大于 0` };
      }
      if (field.validation.decimalPlaces !== void 0 && (!Number.isInteger(Number(field.validation.decimalPlaces)) || Number(field.validation.decimalPlaces) < 0)) {
        return { valid: false, error: `字段 [${field.label}] 的小数位数必须是大于等于 0 的整数` };
      }
    }
  }
  return { valid: true };
}
const hasValue = (value) => {
  if (value === void 0 || value === null) {
    return false;
  }
  if (typeof value === "string") {
    return value.trim() !== "";
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return true;
};
const roundDecimal = (value, decimals, mode = "round") => {
  const factor = 10 ** decimals;
  if (!Number.isFinite(factor) || factor <= 0) {
    return value;
  }
  if (mode === "ceil") {
    return Math.ceil(value * factor) / factor;
  }
  if (mode === "floor") {
    return Math.floor(value * factor) / factor;
  }
  return Math.round(value * factor) / factor;
};
function validateSingleFieldValue(field, value) {
  const errors = [];
  if (!hasValue(value)) {
    return errors;
  }
  const validation = field.validation || {};
  const isArrayField = Boolean(field.multiple) || ["checkbox", "multi_select", "relation_multi", "multi_image", "multi_file"].includes(field.type);
  if (field.type === "reference") {
    const validateReferenceItem = (item) => {
      const itemErrors = [];
      if (!item || typeof item !== "object") {
        itemErrors.push("引用项格式不合法，必须是对象格式");
        return itemErrors;
      }
      if (item.title !== void 0 && item.title !== null && item.title !== "" && typeof item.title !== "string") {
        itemErrors.push("引用项标题必须是字符串");
      }
      if (item.type !== "internal" && item.type !== "external") {
        itemErrors.push("引用项类型必须是 'internal' 或 'external'");
        return itemErrors;
      }
      if (item.type === "internal") {
        const refType = String(item.refType ?? "").trim();
        if (!refType) {
          itemErrors.push("内部引用必须指定 refType");
        }
      }
      if (item.type === "external") {
        const url = String(item.url ?? "").trim();
        if (!url) {
          itemErrors.push("外部引用必须指定 url");
        }
      }
      return itemErrors;
    };
    if (Array.isArray(value)) {
      for (const item of value) {
        errors.push(...validateReferenceItem(item));
      }
    } else {
      errors.push(...validateReferenceItem(value));
    }
    return errors;
  }
  const values = isArrayField ? Array.isArray(value) ? value : [value] : [value];
  for (const val of values) {
    if (field.type === "text") {
      const normalized = String(val ?? "");
      if (validation.textPattern) {
        try {
          const regex = new RegExp(validation.textPattern);
          if (!regex.test(normalized)) {
            errors.push(validation.textErrorMessage || `字段 [${field.label}] 的内容格式不正确`);
          }
        } catch {
          errors.push(`字段 [${field.label}] 的文本校验正则不合法`);
        }
      }
    }
    if (field.type === "textarea") {
      const maxLength = Number(validation.textareaMaxLength || 0);
      if (maxLength > 0 && String(val ?? "").length > maxLength) {
        errors.push(`字段 [${field.label}] 最多允许输入 ${maxLength} 个字符`);
      }
    }
    if (field.type === "number") {
      const parsed = Number(val);
      if (Number.isNaN(parsed)) {
        errors.push(`字段 [${field.label}] 中的值 [${val}] 必须是一个数字`);
        continue;
      }
      if (validation.allowNegative === false && parsed < 0) {
        errors.push(`字段 [${field.label}] 不允许输入负数`);
      }
      if (validation.numberMode === "integer" && !Number.isInteger(parsed)) {
        errors.push(`字段 [${field.label}] 只允许输入整数`);
      }
      const step = Number(validation.numberStep || 0);
      if (step > 0) {
        const rounded = roundDecimal(parsed / step, 8, "round");
        if (Math.abs(rounded - Math.round(rounded)) > 1e-8) {
          errors.push(`字段 [${field.label}] 的输入不符合步长 ${step}`);
        }
      }
      const decimalPlaces = Number(validation.decimalPlaces);
      if (validation.numberMode !== "integer" && Number.isInteger(decimalPlaces) && decimalPlaces >= 0) {
        const rounded = roundDecimal(parsed, decimalPlaces, validation.roundingMode || "round");
        if (Math.abs(parsed - rounded) > 1e-8) {
          errors.push(`字段 [${field.label}] 最多允许 ${decimalPlaces} 位小数`);
        }
      }
    }
    if (field.type === "json") {
      try {
        if (typeof val === "string") {
          JSON.parse(val);
        } else if (typeof val !== "object") {
          errors.push(`字段 [${field.label}] 必须是一个 JSON 对象或数组`);
        }
      } catch (e) {
        errors.push(`字段 [${field.label}] 包含非法的 JSON 字符串`);
      }
    }
    if (field.type === "image" || field.type === "multi_image") {
      const isStringUrl = typeof val === "string" && val.trim() !== "";
      const isImageObject = typeof val === "object" && typeof val?.url === "string" && val.url.trim() !== "";
      if (!isStringUrl && !isImageObject) {
        errors.push(`字段 [${field.label}] 的图片数据格式不合法`);
      }
    }
    if (field.type === "relation" || field.type === "media") {
      if (val !== null && val !== void 0 && val !== "" && isNaN(Number(val)) && typeof val !== "string") {
        errors.push(`字段 [${field.label}] 包含无效的 ID 引用`);
      }
    }
  }
  return errors;
}
function validateEntityData(data, fields) {
  const errors = [];
  for (const field of fields) {
    let value = data[field.name];
    if (field.required && !hasValue(value)) {
      errors.push(`字段 [${field.label}] 是必填项`);
      continue;
    }
    if (value !== void 0 && value !== null) {
      errors.push(...validateSingleFieldValue(field, value));
    }
  }
  return {
    valid: errors.length === 0,
    errors
  };
}
class DynamicSchemaLifecycleService {
  static buildPermissionDefs(item, type) {
    const actions = [
      { action: "view", name: "查看" },
      { action: "edit", name: "编辑/保存" },
      { action: "delete", name: "删除" }
    ];
    return actions.map(({ action, name }) => ({
      action,
      def: {
        slug: `${type}:${item.slug}:${action}`,
        name: `${name}${item.name}`,
        permCategory: `${type === "entity" ? "模型" : "业务集合"}: ${item.name}`,
        description: `${type === "entity" ? "动态模型" : "业务集合"} ${item.name} 的${name}权限`
      }
    }));
  }
  static isSameValue(left, right) {
    return JSON.stringify(left ?? null) === JSON.stringify(right ?? null);
  }
  static async ensureDynamicPermissions(db, item, type, options = {}) {
    const permissionDefs = this.buildPermissionDefs(item, type);
    let superAdminRoleId = null;
    if (options.attachViewToSuperAdmin) {
      const superRole = await db.select({ id: roles.id }).from(roles).where(eq(roles.name, "SuperAdmin")).get();
      superAdminRoleId = Number.isFinite(Number(superRole?.id)) ? Number(superRole.id) : null;
    }
    for (const { action, def } of permissionDefs) {
      const existing = await db.select({ slug: permissions.slug }).from(permissions).where(eq(permissions.slug, def.slug)).get();
      if (existing) {
        await db.update(permissions).set({
          name: def.name,
          description: def.description,
          permCategory: def.permCategory
        }).where(eq(permissions.slug, def.slug)).run();
      } else {
        await db.insert(permissions).values(def).run();
      }
      registry.register(def);
      if (action === "view" && superAdminRoleId) {
        const existingRolePermission = await db.select({
          roleId: rolePermissions.roleId
        }).from(rolePermissions).where(eq(rolePermissions.permissionSlug, def.slug)).get();
        if (!existingRolePermission) {
          await db.insert(rolePermissions).values({
            roleId: superAdminRoleId,
            permissionSlug: def.slug
          }).run();
        }
      }
    }
  }
  static validateSafeModelMutation(existingFields = [], nextFields = []) {
    for (const oldField of existingFields) {
      const matchingNewField = nextFields.find((field) => field?.name === oldField?.name);
      if (!matchingNewField) {
        return `模型已有数据，禁止删除原有字段 [${oldField?.name}]。`;
      }
      if (matchingNewField.type !== oldField?.type) {
        return `模型已有数据，禁止修改已有字段 [${oldField?.name}] 的数据类型。`;
      }
    }
    return "";
  }
  static async getModelBoundCollections(db, modelId) {
    return db.select({ id: collections.id }).from(collections).where(eq(collections.modelId, modelId)).all();
  }
  static async countEntitiesForCollections(db, collectionIds) {
    if (!Array.isArray(collectionIds) || collectionIds.length === 0) {
      return 0;
    }
    const dataCount = await db.select({
      count: sql`count(*)`
    }).from(entities).where(inArray(entities.collectionId, collectionIds)).get();
    return Number(dataCount?.count || 0);
  }
  static async planModelSyncDefinition(db, payload) {
    const validation = validateModelDefinition(payload);
    if (!validation.valid) {
      return {
        action: "blocked",
        reason: validation.error || "模型定义不合法",
        modelId: null,
        hasData: false
      };
    }
    const existingModel = await db.select().from(models).where(eq(models.slug, payload.slug)).get();
    if (!existingModel) {
      return {
        action: "create",
        reason: "底层模型不存在，将创建",
        modelId: null,
        hasData: false
      };
    }
    const relatedCollections = await this.getModelBoundCollections(db, existingModel.id);
    const collectionIds = relatedCollections.map((item) => Number(item?.id)).filter((id) => Number.isFinite(id));
    const dataCount = await this.countEntitiesForCollections(db, collectionIds);
    const hasData = dataCount > 0;
    if (hasData) {
      const mutationError = this.validateSafeModelMutation(existingModel.fieldsJson || [], payload.fieldsJson || []);
      if (mutationError) {
        return {
          action: "blocked",
          reason: mutationError,
          modelId: existingModel.id,
          hasData
        };
      }
    }
    const changed = !this.isSameValue(existingModel.name, payload.name) || !this.isSameValue(existingModel.description, payload.description) || !this.isSameValue(existingModel.fieldsJson, payload.fieldsJson);
    return {
      action: changed ? "update" : "reuse",
      reason: changed ? hasData ? "已有数据，允许安全同步模型定义" : "模型定义与当前模块不同，将同步" : "模型定义与当前模块一致，可直接复用",
      modelId: existingModel.id,
      hasData
    };
  }
  static async planCollectionSyncDefinition(db, payload) {
    const existingCollection = await db.select().from(collections).where(eq(collections.slug, payload.slug)).get();
    if (!existingCollection) {
      return {
        action: "create",
        reason: "底层集合不存在，将创建",
        collectionId: null
      };
    }
    if (Number.isFinite(Number(payload.modelId)) && Number(existingCollection.modelId) !== Number(payload.modelId)) {
      return {
        action: "blocked",
        reason: `业务集合 [${payload.slug}] 已绑定其他模型，已停止同步，请先改用底层模型入口处理。`,
        collectionId: existingCollection.id
      };
    }
    const changed = !this.isSameValue(existingCollection.name, payload.name) || !this.isSameValue(existingCollection.description, payload.description) || !this.isSameValue(existingCollection.icon, payload.icon) || !this.isSameValue(existingCollection.menuGroup, payload.menuGroup) || !this.isSameValue(existingCollection.menuOrder, payload.menuOrder) || !this.isSameValue(existingCollection.parentId, payload.parentId || null) || !this.isSameValue(existingCollection.relationSettings || {}, payload.relationSettings || {}) || !this.isSameValue(existingCollection.fieldConfig || {}, payload.fieldConfig || payload.relationSettings || {}) || !this.isSameValue(
      existingCollection.metadata || {},
      payload.metadata === void 0 ? existingCollection.metadata || {} : payload.metadata || {}
    );
    return {
      action: changed ? "update" : "reuse",
      reason: changed ? "集合配置与当前模块不同，将同步" : "集合配置与当前模块一致，可直接复用",
      collectionId: existingCollection.id
    };
  }
  static async planUnitDefinitionSync(db, definition) {
    const modelPlan = await this.planModelSyncDefinition(db, {
      name: definition.name,
      slug: definition.slug,
      fieldsJson: definition.fields,
      description: definition.description
    });
    if (modelPlan.action === "blocked") {
      return {
        slug: definition.slug,
        action: "blocked",
        reason: modelPlan.reason,
        hasData: modelPlan.hasData,
        modelAction: modelPlan.action,
        collectionAction: "blocked"
      };
    }
    const collectionPlan = await this.planCollectionSyncDefinition(db, {
      name: definition.name === "产品" ? "产品列表" : definition.name,
      slug: definition.slug,
      modelId: modelPlan.modelId,
      description: definition.description,
      icon: definition.icon,
      menuGroup: definition.menuGroup,
      menuOrder: definition.menuOrder,
      fieldConfig: definition.fieldConfig || {},
      relationSettings: definition.fieldConfig || {},
      metadata: definition.metadata || {}
    });
    if (collectionPlan.action === "blocked") {
      return {
        slug: definition.slug,
        action: "blocked",
        reason: collectionPlan.reason,
        hasData: modelPlan.hasData,
        modelAction: modelPlan.action,
        collectionAction: collectionPlan.action
      };
    }
    const effectiveAction = modelPlan.action === "create" || collectionPlan.action === "create" ? "create" : modelPlan.action === "update" || collectionPlan.action === "update" ? "sync" : "reuse";
    return {
      slug: definition.slug,
      action: effectiveAction,
      reason: effectiveAction === "create" ? "缺失的底层对象将被创建" : effectiveAction === "sync" ? "已登记对象将按最新定义安全同步" : "底层对象与当前定义一致，可直接复用",
      hasData: modelPlan.hasData,
      modelAction: modelPlan.action,
      collectionAction: collectionPlan.action
    };
  }
  static async createModelDefinition(db, payload) {
    const validation = validateModelDefinition(payload);
    if (!validation.valid) {
      throw new Error(validation.error || "模型定义不合法");
    }
    const existing = await db.select().from(models).where(eq(models.slug, payload.slug)).get();
    if (existing) {
      throw new Error(`模型标识 [${payload.slug}] 已存在`);
    }
    const [newModel] = await db.insert(models).values({
      name: payload.name,
      slug: payload.slug,
      fieldsJson: payload.fieldsJson,
      description: payload.description
    }).returning();
    await this.ensureDynamicPermissions(db, { slug: payload.slug, name: payload.name }, "entity");
    return newModel;
  }
  static async updateModelDefinitionById(db, modelId, payload) {
    const existingModel = await db.select().from(models).where(eq(models.id, modelId)).get();
    if (!existingModel) {
      throw new Error("模型不存在");
    }
    const relatedCollections = await this.getModelBoundCollections(db, modelId);
    const collectionIds = relatedCollections.map((item) => Number(item?.id)).filter((id) => Number.isFinite(id));
    const dataCount = await this.countEntitiesForCollections(db, collectionIds);
    const hasData = dataCount > 0;
    if (hasData) {
      const mutationError = this.validateSafeModelMutation(existingModel.fieldsJson || [], payload.fieldsJson || []);
      if (mutationError) {
        throw new Error(mutationError);
      }
    }
    await db.update(models).set({
      name: payload.name,
      fieldsJson: payload.fieldsJson,
      description: payload.description
    }).where(eq(models.id, modelId)).run();
    await this.ensureDynamicPermissions(db, { slug: existingModel.slug, name: payload.name }, "entity");
    return { success: true, hasDataWarning: hasData };
  }
  static async syncModelDefinition(db, payload) {
    const validation = validateModelDefinition(payload);
    if (!validation.valid) {
      throw new Error(validation.error || "模型定义不合法");
    }
    const existingModel = await db.select().from(models).where(eq(models.slug, payload.slug)).get();
    if (!existingModel) {
      const created = await this.createModelDefinition(db, payload);
      return {
        action: "created",
        modelId: created.id,
        hasData: false
      };
    }
    const relatedCollections = await this.getModelBoundCollections(db, existingModel.id);
    const collectionIds = relatedCollections.map((item) => Number(item?.id)).filter((id) => Number.isFinite(id));
    const dataCount = await this.countEntitiesForCollections(db, collectionIds);
    const hasData = dataCount > 0;
    if (hasData) {
      const mutationError = this.validateSafeModelMutation(existingModel.fieldsJson || [], payload.fieldsJson || []);
      if (mutationError) {
        throw new Error(mutationError);
      }
    }
    const changed = !this.isSameValue(existingModel.name, payload.name) || !this.isSameValue(existingModel.description, payload.description) || !this.isSameValue(existingModel.fieldsJson, payload.fieldsJson);
    if (changed) {
      await db.update(models).set({
        name: payload.name,
        fieldsJson: payload.fieldsJson,
        description: payload.description
      }).where(eq(models.id, existingModel.id)).run();
    }
    await this.ensureDynamicPermissions(db, { slug: payload.slug, name: payload.name }, "entity");
    return {
      action: changed ? "updated" : "unchanged",
      modelId: existingModel.id,
      hasData
    };
  }
  static async createCollectionDefinition(db, payload) {
    const existingCollection = await db.select().from(collections).where(eq(collections.slug, payload.slug)).get();
    if (existingCollection) {
      throw new Error(`业务集合标识 [${payload.slug}] 已存在，请更换标识或先删除旧集合。`);
    }
    const legacyPermissionSlugs = ["view", "edit", "delete"].map((action) => `collection:${payload.slug}:${action}`);
    await db.delete(permissions).where(inArray(permissions.slug, legacyPermissionSlugs));
    legacyPermissionSlugs.forEach((slug) => registry.unregister(slug));
    const [newCollection] = await db.insert(collections).values({
      name: payload.name,
      slug: payload.slug,
      modelId: payload.modelId,
      description: payload.description,
      icon: payload.icon,
      sort: payload.sort || 0,
      menuGroup: payload.menuGroup,
      menuOrder: payload.menuOrder || 0,
      parentId: payload.parentId || null,
      relationSettings: payload.relationSettings || {},
      fieldConfig: payload.fieldConfig || payload.relationSettings || {},
      metadata: payload.metadata || {}
    }).returning();
    await this.ensureDynamicPermissions(db, { slug: payload.slug, name: payload.name }, "collection", {
      attachViewToSuperAdmin: true
    });
    return newCollection;
  }
  static async updateCollectionDefinitionById(db, collectionId, payload) {
    const existingCollection = await db.select().from(collections).where(eq(collections.id, collectionId)).get();
    if (!existingCollection) {
      throw new Error("集合不存在");
    }
    await db.update(collections).set({
      name: payload.name,
      description: payload.description,
      icon: payload.icon,
      sort: payload.sort,
      menuGroup: payload.menuGroup,
      menuOrder: payload.menuOrder,
      parentId: payload.parentId === void 0 ? void 0 : payload.parentId,
      relationSettings: payload.relationSettings || {},
      fieldConfig: payload.fieldConfig || payload.relationSettings || {},
      metadata: payload.metadata === void 0 ? void 0 : payload.metadata || {}
    }).where(eq(collections.id, collectionId)).run();
    await this.ensureDynamicPermissions(
      db,
      { slug: existingCollection.slug, name: payload.name || existingCollection.name },
      "collection",
      { attachViewToSuperAdmin: true }
    );
    return { success: true };
  }
  static async syncCollectionDefinition(db, payload) {
    const existingCollection = await db.select().from(collections).where(eq(collections.slug, payload.slug)).get();
    if (!existingCollection) {
      const created = await this.createCollectionDefinition(db, payload);
      return {
        action: "created",
        collectionId: created.id
      };
    }
    if (Number(existingCollection.modelId) !== Number(payload.modelId)) {
      throw new Error(`业务集合 [${payload.slug}] 已绑定其他模型，已停止同步，请先改用底层模型入口处理。`);
    }
    const changed = !this.isSameValue(existingCollection.name, payload.name) || !this.isSameValue(existingCollection.description, payload.description) || !this.isSameValue(existingCollection.icon, payload.icon) || !this.isSameValue(existingCollection.menuGroup, payload.menuGroup) || !this.isSameValue(existingCollection.menuOrder, payload.menuOrder) || !this.isSameValue(existingCollection.parentId, payload.parentId || null) || !this.isSameValue(existingCollection.relationSettings || {}, payload.relationSettings || {}) || !this.isSameValue(existingCollection.fieldConfig || {}, payload.fieldConfig || payload.relationSettings || {}) || !this.isSameValue(
      existingCollection.metadata || {},
      payload.metadata === void 0 ? existingCollection.metadata || {} : payload.metadata || {}
    );
    if (changed) {
      await db.update(collections).set({
        name: payload.name,
        modelId: payload.modelId,
        description: payload.description,
        icon: payload.icon,
        menuGroup: payload.menuGroup,
        menuOrder: payload.menuOrder,
        parentId: payload.parentId || null,
        relationSettings: payload.relationSettings || {},
        fieldConfig: payload.fieldConfig || payload.relationSettings || {},
        metadata: payload.metadata === void 0 ? existingCollection.metadata || {} : payload.metadata || {}
      }).where(eq(collections.id, existingCollection.id)).run();
    }
    await this.ensureDynamicPermissions(db, { slug: payload.slug, name: payload.name }, "collection", {
      attachViewToSuperAdmin: true
    });
    return {
      action: changed ? "updated" : "unchanged",
      collectionId: existingCollection.id
    };
  }
  static async syncUnitDefinition(db, definition) {
    const modelResult = await this.syncModelDefinition(db, {
      name: definition.name,
      slug: definition.slug,
      fieldsJson: definition.fields,
      description: definition.description
    });
    const collectionResult = await this.syncCollectionDefinition(db, {
      name: definition.name === "产品" ? "产品列表" : definition.name,
      slug: definition.slug,
      modelId: modelResult.modelId,
      description: definition.description,
      icon: definition.icon,
      menuGroup: definition.menuGroup,
      menuOrder: definition.menuOrder,
      fieldConfig: definition.fieldConfig || {},
      relationSettings: definition.fieldConfig || {},
      metadata: definition.metadata || {}
    });
    return {
      modelId: modelResult.modelId,
      collectionId: collectionResult.collectionId,
      collectionSlug: definition.slug,
      modelAction: modelResult.action,
      collectionAction: collectionResult.action,
      hasData: modelResult.hasData
    };
  }
  static async deleteCollectionResources(db, collectionRows) {
    const collectionIds = collectionRows.map((item) => Number(item.id)).filter((id) => Number.isFinite(id));
    if (collectionIds.length === 0) {
      return;
    }
    const existingRows = await db.select({
      id: collections.id,
      slug: collections.slug,
      parentId: collections.parentId
    }).from(collections).where(inArray(collections.id, collectionIds)).all();
    const remainingRows = [...existingRows];
    while (remainingRows.length > 0) {
      const activeParentIds = new Set(
        remainingRows.map((item) => Number(item.parentId)).filter((parentId) => Number.isFinite(parentId))
      );
      const leafRows = remainingRows.filter((item) => !activeParentIds.has(item.id));
      const batch = leafRows.length > 0 ? leafRows : [remainingRows[remainingRows.length - 1]];
      for (const item of batch) {
        const permissionSlugs = ["view", "edit", "delete"].map((action) => `collection:${item.slug}:${action}`);
        await db.delete(rolePermissions).where(inArray(rolePermissions.permissionSlug, permissionSlugs));
        await db.delete(permissions).where(inArray(permissions.slug, permissionSlugs));
        permissionSlugs.forEach((slug) => registry.unregister(slug));
        await db.delete(collections).where(eq(collections.id, item.id));
      }
      const deletedIds = new Set(batch.map((item) => item.id));
      for (let index = remainingRows.length - 1; index >= 0; index -= 1) {
        if (deletedIds.has(remainingRows[index].id)) {
          remainingRows.splice(index, 1);
        }
      }
    }
  }
  static async deleteCollectionById(db, collectionId) {
    const collectionRow = await db.select().from(collections).where(eq(collections.id, collectionId)).get();
    if (!collectionRow) {
      throw new Error("集合不存在");
    }
    const dataCountResult = await db.select({
      count: sql`count(*)`
    }).from(entities).where(eq(entities.collectionId, collectionId)).get();
    const dataCount = Number(dataCountResult?.count || 0);
    if (dataCount > 0) {
      throw new Error(`当前业务集合下还有 ${dataCount} 条数据记录，请先清空该集合中的数据后再删除。`);
    }
    await this.deleteCollectionResources(db, [{ id: collectionRow.id, slug: collectionRow.slug }]);
    return { success: true, collection: collectionRow };
  }
  static async deleteModelResources(db, modelRows) {
    for (const item of modelRows) {
      const stillBoundCollection = await db.select({ id: collections.id }).from(collections).where(eq(collections.modelId, item.id)).get();
      if (stillBoundCollection) {
        continue;
      }
      const permissionSlugs = ["view", "edit", "delete"].map((action) => `entity:${item.slug}:${action}`);
      await db.delete(rolePermissions).where(inArray(rolePermissions.permissionSlug, permissionSlugs));
      await db.delete(permissions).where(inArray(permissions.slug, permissionSlugs));
      permissionSlugs.forEach((slug) => registry.unregister(slug));
      await db.delete(models).where(eq(models.id, item.id));
    }
  }
  static async deleteModelById(db, modelId) {
    const modelRow = await db.select().from(models).where(eq(models.id, modelId)).get();
    if (!modelRow) {
      throw new Error("模型不存在");
    }
    const relatedCollections = await db.select().from(collections).where(eq(collections.modelId, modelId)).all();
    if (relatedCollections.length > 0) {
      const collectionNames = relatedCollections.map((item) => item.name).join(", ");
      throw new Error(`无法删除模型：仍有 [${relatedCollections.length}] 个业务集合 (${collectionNames}) 正在引用此定义。`);
    }
    await this.deleteModelResources(db, [{ id: modelRow.id, slug: modelRow.slug }]);
    return { success: true, model: modelRow };
  }
}
class SchemaContextGenerator {
  /**
   * 提炼并缓存 Schema 到 system_settings 表中
   * @param env Cloudflare 环境变量，用于获取 DB 连接
   */
  static async generateAndCache(env) {
    try {
      const db = await createDbClient(env.DB || env);
      const allModels = await db.select().from(models).all() || [];
      const allCollections = await db.select().from(collections).all() || [];
      const modelMap = /* @__PURE__ */ new Map();
      allModels.forEach((m) => modelMap.set(m.id, m));
      let contextLines = [
        "# 📊 系统当前运行中的业务集合与模型架构约束：",
        "以下是当前系统唯一的物理真理源。你已掌握所有必填字段，禁止再次尝试探测结构，请直接构建参数执行 content_manager 动作。",
        "你可以使用 content_manager (路径 /api/v1/entities/{{slug}}/batch-save) 向以下集合发布数据：\n"
      ];
      const isPrunedMode = false;
      const coreSlugs = ["article", "b2b_product", "taxonomy", "resource"];
      allCollections.forEach((col, index) => {
        const model = modelMap.get(col.modelId);
        if (!model) return;
        if (isPrunedMode && !coreSlugs.includes(col.slug)) ;
        let fieldsJson = [];
        try {
          if (model.fieldsJson) {
            fieldsJson = typeof model.fieldsJson === "string" ? JSON.parse(model.fieldsJson) : model.fieldsJson;
          }
        } catch (e) {
          console.error(`[SchemaContextGenerator] 解析 fieldsJson 失败 (model: ${model.slug}):`, e);
        }
        const requiredFields = [];
        const optionalFields = [];
        let hasLocale = false;
        fieldsJson.forEach((field) => {
          if (!field.name) return;
          if (["created_at", "updated_at", "id"].includes(field.name)) return;
          let fieldDesc = `\`${field.name}\` (${field.label || field.name}, ${field.type})`;
          if (["relation", "relation_single", "relation_multi"].includes(field.type) && field.relationConfig?.collectionSlug) {
            fieldDesc += ` [⚠️ 填值铁律：此字段为关系型引用，它的值必须是目标业务集合 '${field.relationConfig.collectionSlug}' 的真实已存在的数字物理 ID (如 1, 2)，绝对禁止直接填写分类名称或 slug！在向本集合写入前，必须且无条件首先调用 GET /api/v1/entities/${field.relationConfig.collectionSlug} 获取对应列表并从真实 id 字段提取正确的数字物理 ID！]`;
          } else if (field.type === "relation" && field.relationConfig?.collectionSlug) {
            fieldDesc += ` (依赖于: ${field.relationConfig.collectionSlug})`;
          }
          if (field.required) {
            requiredFields.push(fieldDesc);
          } else {
            optionalFields.push(fieldDesc);
          }
        });
        try {
          if (col.fieldConfig) {
            const fc = typeof col.fieldConfig === "string" ? JSON.parse(col.fieldConfig) : col.fieldConfig;
            if (fc.__api_policy?.i18n_enabled || fc.i18n_enabled) {
              hasLocale = true;
            }
          }
        } catch (e) {
        }
        contextLines.push(`${index + 1}. **${col.name} (slug: ${col.slug})**`);
        if (hasLocale) {
          contextLines.push(`   - 🌐 [支持多语言]: 录入数据时必须指定对应的 locale 语言代码`);
        }
        if (requiredFields.length > 0) {
          contextLines.push(`   - 必填字段: ${requiredFields.join(", ")}`);
        } else {
          contextLines.push(`   - 必填字段: 无`);
        }
        if (optionalFields.length > 0) {
          contextLines.push(`   - 可选字段: ${optionalFields.join(", ")}`);
        }
        contextLines.push("");
      });
      const finalMarkdown = contextLines.join("\n");
      const existingRows = await db.select().from(systemSettings).where(eq(systemSettings.key, "ai_system_schema_context")).all() || [];
      const existingSettings = existingRows[0];
      if (existingSettings) {
        await db.update(systemSettings).set({ value: finalMarkdown, updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "ai_system_schema_context"));
      } else {
        await db.insert(systemSettings).values({
          key: "ai_system_schema_context",
          value: finalMarkdown,
          category: "ai",
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        });
      }
      console.log(`✅ [SchemaContextGenerator] Generated schema context (${finalMarkdown.length} chars) and cached.`);
    } catch (err) {
      console.error("❌ [SchemaContextGenerator] Failed to generate and cache schema context:", err.message);
    }
  }
}
class DynamicSchemaRuntimeSyncService {
  static async syncPermissionRegistry(dbOrEnv) {
    const db = dbOrEnv?.query ? dbOrEnv : await createDbClient(dbOrEnv?.DB ?? dbOrEnv);
    await registry.syncToDb(db, true);
  }
  static async regenerateSchemaContext(dbEnv) {
    await SchemaContextGenerator.generateAndCache(dbEnv);
  }
  static async syncAfterStructureMutation(dbEnv, options = {}) {
    const {
      syncPermissionRegistry = false,
      regenerateSchemaContext = true
    } = options;
    if (!syncPermissionRegistry && !regenerateSchemaContext) {
      return;
    }
    if (syncPermissionRegistry) {
      await this.syncPermissionRegistry(dbEnv);
    }
    if (regenerateSchemaContext) {
      await this.regenerateSchemaContext(dbEnv);
    }
  }
}
class SiteSettingsTemplate {
  static sanitizeIdSegment(input) {
    return input.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "item";
  }
  static buildCustomId(prefix, label) {
    return `${prefix}-${this.sanitizeIdSegment(label)}-${Date.now().toString(36)}`;
  }
  static parseSettingValue(raw, fallback) {
    if (!raw) return fallback;
    try {
      return JSON.parse(raw);
    } catch (error) {
      console.warn("⚠️ [TemplateService] Failed to parse setting JSON:", error);
      return fallback;
    }
  }
  static async getSettingJson(dbEnv, key, fallback) {
    const db = await createDbClient(dbEnv);
    const record = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, key)
    });
    return this.parseSettingValue(record?.value, fallback);
  }
  static async saveSettingJson(dbEnv, key, value, description) {
    const db = await createDbClient(dbEnv);
    const existing = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, key)
    });
    const payload = JSON.stringify(value);
    if (existing) {
      await db.update(systemSettings).set({ value: payload, description, updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, key));
      return;
    }
    await db.insert(systemSettings).values({
      key,
      value: payload,
      description,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  static async appendHiddenPresetId(dbEnv, key, id, description) {
    const existing = await this.getSettingJson(dbEnv, key, []);
    const next = Array.from(/* @__PURE__ */ new Set([...existing, id]));
    await this.saveSettingJson(dbEnv, key, next, description);
  }
  static normalizeTags(input) {
    if (!Array.isArray(input)) return [];
    return Array.from(new Set(
      input.map((item) => String(item || "").trim()).filter(Boolean).slice(0, 12)
    ));
  }
  static sanitizeModelSlug(input) {
    return input.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 64);
  }
  static normalizeModelGroupJson(input) {
    if (!input || typeof input !== "object" || Array.isArray(input)) {
      throw new Error("模型组 JSON 必须是对象格式");
    }
    const normalizedEntries = Object.entries(input).map(([rawKey, rawValue]) => {
      if (!rawValue || typeof rawValue !== "object" || Array.isArray(rawValue)) {
        throw new Error(`模型 ${rawKey} 的定义必须是对象`);
      }
      const definition = rawValue;
      const slug = this.sanitizeModelSlug(String(definition.slug || rawKey));
      if (!slug) {
        throw new Error(`模型 ${rawKey} 缺少有效的 slug`);
      }
      const name = String(definition.name || "").trim();
      if (!name) {
        throw new Error(`模型 ${slug} 缺少 name`);
      }
      if (!Array.isArray(definition.fields) || definition.fields.length === 0) {
        throw new Error(`模型 ${slug} 至少需要一个字段定义`);
      }
      const fields = definition.fields.map((rawField, index) => {
        if (!rawField || typeof rawField !== "object" || Array.isArray(rawField)) {
          throw new Error(`模型 ${slug} 的第 ${index + 1} 个字段格式无效`);
        }
        const fieldName = String(rawField.name || "").trim();
        const fieldType = String(rawField.type || "").trim();
        const fieldLabel = String(rawField.label || "").trim();
        if (!fieldName || !fieldType || !fieldLabel) {
          throw new Error(`模型 ${slug} 的第 ${index + 1} 个字段缺少 name/type/label`);
        }
        return {
          ...rawField,
          name: fieldName,
          type: fieldType,
          label: fieldLabel
        };
      });
      return [slug, {
        ...definition,
        name,
        slug,
        description: String(definition.description || "").trim(),
        fields,
        menuGroup: String(definition.menuGroup || "").trim() || "自定义模块",
        icon: String(definition.icon || "").trim() || "Layers",
        menuOrder: Number.isFinite(Number(definition.menuOrder)) ? Number(definition.menuOrder) : 0,
        fieldConfig: definition.fieldConfig && typeof definition.fieldConfig === "object" && !Array.isArray(definition.fieldConfig) ? definition.fieldConfig : {},
        dependencies: Array.isArray(definition.dependencies) ? Array.from(new Set(definition.dependencies.map((item) => this.sanitizeModelSlug(String(item || ""))).filter(Boolean))) : []
      }];
    });
    if (normalizedEntries.length === 0) {
      throw new Error("模型组 JSON 不能为空");
    }
    return Object.fromEntries(normalizedEntries);
  }
}
class SystemModuleCatalog extends SiteSettingsTemplate {
  static normalizeInstalledModuleManifest(input) {
    if (!input || typeof input !== "object" || Array.isArray(input)) {
      return null;
    }
    const moduleId = String(input.moduleId || "").trim();
    if (!moduleId) {
      return null;
    }
    const unitSlugs = Array.from(new Set(
      (Array.isArray(input.unitSlugs) ? input.unitSlugs : []).map((item) => String(item || "").trim()).filter(Boolean)
    ));
    const units = (Array.isArray(input.units) ? input.units : []).map((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        return null;
      }
      const slug = String(item.slug || "").trim();
      if (!slug) {
        return null;
      }
      return {
        slug,
        modelId: Number.isFinite(Number(item.modelId)) ? Number(item.modelId) : null,
        collectionId: Number.isFinite(Number(item.collectionId)) ? Number(item.collectionId) : null,
        action: item.action === "reused" ? "reused" : "created"
      };
    }).filter(Boolean);
    const createdAt = Number(input.createdAt) || Date.now();
    const updatedAt = Number(input.updatedAt) || createdAt;
    return {
      moduleId,
      unitSlugs: unitSlugs.length > 0 ? unitSlugs : units.map((item) => item.slug),
      units,
      createdAt,
      updatedAt
    };
  }
  static async getStoredInstalledSystemModuleIds(dbEnv) {
    const db = await createDbClient(dbEnv);
    const record = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, INSTALLED_SYSTEM_MODULE_IDS_KEY)
    });
    if (!record) {
      return [];
    }
    try {
      return Array.isArray(JSON.parse(record.value)) ? JSON.parse(record.value) : [];
    } catch {
      return [];
    }
  }
  static async getStoredInstalledSystemModuleManifests(dbEnv) {
    const db = await createDbClient(dbEnv);
    const record = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, INSTALLED_SYSTEM_MODULE_MANIFESTS_KEY)
    });
    if (!record) {
      return [];
    }
    try {
      const raw = Array.isArray(JSON.parse(record.value)) ? JSON.parse(record.value) : [];
      return raw.map((item) => this.normalizeInstalledModuleManifest(item)).filter(Boolean);
    } catch {
      return [];
    }
  }
  static async getEffectiveInstalledSystemModuleIds(dbEnv, systemModules, installedSnapshots) {
    const validIds = new Set(systemModules.map((item) => item.id));
    const storedIds = await this.getStoredInstalledSystemModuleIds(dbEnv);
    return storedIds.filter((id) => validIds.has(id));
  }
  static async persistInstalledSystemModuleIds(dbEnv, installedModuleIds) {
    await this.saveSettingJson(
      dbEnv,
      INSTALLED_SYSTEM_MODULE_IDS_KEY,
      Array.from(new Set(installedModuleIds.map((item) => String(item || "").trim()).filter(Boolean))),
      "模块模板注入器已安装系统模块记录"
    );
  }
  static async getEffectiveInstalledSystemModuleManifestMap(dbEnv, systemModules) {
    const validIds = new Set(systemModules.map((item) => item.id));
    const manifests = await this.getStoredInstalledSystemModuleManifests(dbEnv);
    return new Map(
      manifests.filter((item) => validIds.has(item.moduleId)).map((item) => [item.moduleId, item])
    );
  }
  static async persistInstalledSystemModuleManifests(dbEnv, manifests) {
    const normalized = manifests.map((item) => this.normalizeInstalledModuleManifest(item)).filter(Boolean);
    await this.saveSettingJson(
      dbEnv,
      INSTALLED_SYSTEM_MODULE_MANIFESTS_KEY,
      normalized,
      "模块模板注入器已安装系统模块清单"
    );
  }
  static buildModelUnitTemplate(definition) {
    return {
      id: definition.slug,
      name: definition.name,
      description: definition.description || `${definition.name} 核心业务模块`,
      dependencies: definition.dependencies || MODULE_DEPENDENCIES[definition.slug] || [],
      menuGroup: definition.menuGroup,
      collectionSlug: definition.slug,
      fieldCount: definition.fields.length,
      fields: definition.fields.map((field) => ({
        name: field.name,
        label: field.label,
        type: field.type,
        required: field.required
      })),
      definition,
      generate: async (db) => {
        const syncResult = await DynamicSchemaLifecycleService.syncUnitDefinition(db, definition);
        if (syncResult.collectionId) {
          await this.seedDefaultEntities(db, syncResult.collectionId, definition);
        }
        console.log(`📡 [Template] 模块准备就绪: ${definition.slug} (fieldConfig 已登记)`);
        return syncResult;
      }
    };
  }
  static async seedDefaultEntities(db, collectionId, definition) {
    const defaultEntities = Array.isArray(definition.defaultEntities) ? definition.defaultEntities.filter((item) => item && typeof item === "object" && !Array.isArray(item)) : [];
    if (defaultEntities.length === 0) return;
    const existingRows = await db.select({
      dataJson: entities.dataJson
    }).from(entities).where(eq(entities.collectionId, collectionId)).all();
    const existingKeySet = /* @__PURE__ */ new Set();
    existingRows.forEach((row) => {
      const data = row.dataJson || {};
      const slug = String(data.slug || "").trim().toLowerCase();
      const name = String(data.name || "").trim().toLowerCase();
      if (slug) existingKeySet.add(`slug:${slug}`);
      if (name) existingKeySet.add(`name:${name}`);
    });
    const payloads = defaultEntities.filter((item) => {
      const slug = String(item.slug || "").trim().toLowerCase();
      const name = String(item.name || "").trim().toLowerCase();
      if (slug && existingKeySet.has(`slug:${slug}`)) return false;
      if (name && existingKeySet.has(`name:${name}`)) return false;
      return true;
    });
    if (payloads.length === 0) return;
    await db.insert(entities).values(
      payloads.map((item) => ({
        collectionId,
        dataJson: item,
        createdBy: "system_initializer"
      }))
    ).run();
  }
  static buildModelGroupSnapshot(unitIds, modelUnits) {
    const unitMap = new Map(modelUnits.map((unit) => [unit.id, unit]));
    return Object.fromEntries(
      Array.from(new Set(unitIds)).map((id) => unitMap.get(id)).filter(Boolean).map((unit) => [unit.definition.slug, unit.definition])
    );
  }
  static buildModelGroupFromBlueprintIds(blueprintIds, resourceBlueprints, modelUnits) {
    const blueprintMap = new Map(resourceBlueprints.map((item) => [item.id, item]));
    const unitIds = Array.from(new Set(
      blueprintIds.flatMap((blueprintId) => blueprintMap.get(blueprintId)?.resolvedUnitIds || [])
    ));
    return this.buildModelGroupSnapshot(unitIds, modelUnits);
  }
  static async getInstalledUnitSnapshots(dbEnv) {
    const db = await createDbClient(dbEnv);
    const installedModels = await db.select({
      id: models.id,
      slug: models.slug
    }).from(models).all();
    const installedCollections = await db.select({
      id: collections.id,
      slug: collections.slug,
      modelId: collections.modelId
    }).from(collections).all();
    const entityStats = await db.select({
      collectionId: entities.collectionId,
      count: sql`count(*)`
    }).from(entities).groupBy(entities.collectionId).all();
    const entityCountMap = new Map(entityStats.map((item) => [item.collectionId, Number(item.count || 0)]));
    const snapshotMap = /* @__PURE__ */ new Map();
    installedModels.forEach((item) => {
      snapshotMap.set(item.slug, {
        slug: item.slug,
        modelId: item.id,
        collectionId: null,
        entityCount: 0
      });
    });
    installedCollections.forEach((item) => {
      const prev = snapshotMap.get(item.slug);
      snapshotMap.set(item.slug, {
        slug: item.slug,
        modelId: prev?.modelId ?? item.modelId,
        collectionId: item.id,
        entityCount: entityCountMap.get(item.id) || 0
      });
    });
    return Object.fromEntries(snapshotMap.entries());
  }
  static decorateInstalledState(item, installedSnapshots, isMarkedInstalled, trackedUnitSlugs) {
    if (typeof isMarkedInstalled === "boolean" && !isMarkedInstalled) {
      return {
        installedUnitIds: [],
        installedCollectionIds: [],
        installedModelIds: [],
        installedCollectionSlugs: [],
        installedModelSlugs: [],
        installedDataCount: 0,
        isInstalled: false
      };
    }
    const effectiveUnitSlugs = Array.from(new Set(
      (Array.isArray(trackedUnitSlugs) && trackedUnitSlugs.length > 0 ? trackedUnitSlugs : item.resolvedUnitIds).map((slug) => String(slug || "").trim()).filter(Boolean)
    ));
    const installedUnits = effectiveUnitSlugs.map((slug) => installedSnapshots[slug]).filter((snapshot) => !!snapshot?.collectionId && !!snapshot?.modelId);
    const isPhysicallyInstalled = effectiveUnitSlugs.length > 0 && installedUnits.length === effectiveUnitSlugs.length;
    return {
      installedUnitIds: installedUnits.map((snapshot) => snapshot.slug),
      installedCollectionIds: installedUnits.map((snapshot) => snapshot.collectionId).filter(Boolean),
      installedModelIds: installedUnits.map((snapshot) => snapshot.modelId).filter(Boolean),
      installedCollectionSlugs: installedUnits.map((snapshot) => snapshot.slug),
      installedModelSlugs: installedUnits.map((snapshot) => snapshot.slug),
      installedDataCount: installedUnits.reduce((sum, snapshot) => sum + snapshot.entityCount, 0),
      isInstalled: typeof isMarkedInstalled === "boolean" ? isMarkedInstalled && isPhysicallyInstalled : isPhysicallyInstalled
    };
  }
  static resolveModelUnitIds(unitIds) {
    const resolved = /* @__PURE__ */ new Set();
    const visiting = /* @__PURE__ */ new Set();
    const visit = (id) => {
      if (resolved.has(id)) return;
      if (visiting.has(id)) return;
      visiting.add(id);
      (MODULE_DEPENDENCIES[id] || []).forEach(visit);
      visiting.delete(id);
      resolved.add(id);
    };
    unitIds.forEach(visit);
    return Array.from(resolved);
  }
  static resolveResourceBlueprintDependencies(blueprintIds, blueprints) {
    const blueprintMap = new Map(blueprints.map((blueprint) => [blueprint.id, blueprint]));
    const resolved = /* @__PURE__ */ new Set();
    const visit = (id) => {
      if (resolved.has(id)) return;
      const blueprint = blueprintMap.get(id);
      if (!blueprint) return;
      (blueprint.dependencyIds || []).forEach(visit);
      resolved.add(id);
    };
    blueprintIds.forEach(visit);
    return Array.from(resolved);
  }
  static buildResourceBlueprintSnapshot(preset, modelUnits) {
    const unitMap = new Map(modelUnits.map((unit) => [unit.id, unit]));
    const validUnitIds = Array.from(new Set(preset.unitIds.filter((id) => unitMap.has(id))));
    if (validUnitIds.length === 0) return null;
    const resolvedUnitIds = this.resolveModelUnitIds(validUnitIds);
    const resolvedUnits = resolvedUnitIds.map((id) => unitMap.get(id)).filter(Boolean);
    return {
      id: preset.id,
      name: preset.name,
      description: preset.description,
      category: preset.category,
      target: preset.target,
      tags: preset.tags,
      dependencyIds: preset.dependencyIds,
      unitIds: validUnitIds,
      resolvedUnitIds,
      collectionSlugs: resolvedUnits.map((unit) => unit.collectionSlug),
      fieldCount: resolvedUnits.reduce((sum, unit) => sum + unit.fieldCount, 0),
      keyFields: resolvedUnits.flatMap((unit) => unit.fields.slice(0, 2)).slice(0, 8)
    };
  }
  /**
   * 获取所有底层模型单元定义
   */
  static getModelUnitTemplates(extraDefinitions = {}) {
    const mergedDefinitions = /* @__PURE__ */ new Map();
    Object.values(MODEL_LIBRARY).forEach((definition) => {
      mergedDefinitions.set(definition.slug, {
        ...definition,
        dependencies: MODULE_DEPENDENCIES[definition.slug] || []
      });
    });
    Object.values(extraDefinitions).forEach((definition) => {
      mergedDefinitions.set(definition.slug, definition);
    });
    return Array.from(mergedDefinitions.values()).map((definition) => this.buildModelUnitTemplate(definition));
  }
  static getResourceBlueprintCatalog() {
    const modelUnits = this.getModelUnitTemplates();
    return RESOURCE_BLUEPRINT_PRESETS.map((preset) => this.buildResourceBlueprintSnapshot(preset, modelUnits)).filter(Boolean);
  }
  static hydrateSystemModules(baseModules, resourceBlueprints, modelUnits) {
    const blueprintMap = new Map(resourceBlueprints.map((item) => [item.id, item]));
    const modelUnitMap = new Map(modelUnits.map((item) => [item.id, item]));
    const baseModuleMap = new Map(baseModules.map((item) => [item.id, item]));
    const resolvedDependencyCache = /* @__PURE__ */ new Map();
    const resolvedBlueprintCache = /* @__PURE__ */ new Map();
    const resolvedUnitCache = /* @__PURE__ */ new Map();
    const collectModuleDependencies = (moduleId, trail = /* @__PURE__ */ new Set()) => {
      if (resolvedDependencyCache.has(moduleId)) return resolvedDependencyCache.get(moduleId);
      if (trail.has(moduleId)) return [];
      trail.add(moduleId);
      const module = baseModuleMap.get(moduleId);
      if (!module) return [];
      const resolved = /* @__PURE__ */ new Set();
      module.moduleDependencyIds.forEach((dependencyId) => {
        if (!baseModuleMap.has(dependencyId)) return;
        resolved.add(dependencyId);
        collectModuleDependencies(dependencyId, trail).forEach((nestedId) => resolved.add(nestedId));
      });
      const result = Array.from(resolved);
      resolvedDependencyCache.set(moduleId, result);
      trail.delete(moduleId);
      return result;
    };
    const collectModuleBlueprintIds = (moduleId, trail = /* @__PURE__ */ new Set()) => {
      if (resolvedBlueprintCache.has(moduleId)) return resolvedBlueprintCache.get(moduleId);
      if (trail.has(moduleId)) return [];
      trail.add(moduleId);
      const module = baseModuleMap.get(moduleId);
      if (!module) return [];
      const blueprintIds = /* @__PURE__ */ new Set();
      module.resourceBlueprintIds.forEach((blueprintId) => {
        if (blueprintMap.has(blueprintId)) blueprintIds.add(blueprintId);
      });
      module.moduleDependencyIds.forEach((dependencyId) => {
        collectModuleBlueprintIds(dependencyId, trail).forEach((blueprintId) => blueprintIds.add(blueprintId));
      });
      const result = this.resolveResourceBlueprintDependencies(Array.from(blueprintIds), resourceBlueprints);
      resolvedBlueprintCache.set(moduleId, result);
      trail.delete(moduleId);
      return result;
    };
    const collectModuleUnitIds = (moduleId, trail = /* @__PURE__ */ new Set()) => {
      if (resolvedUnitCache.has(moduleId)) return resolvedUnitCache.get(moduleId);
      if (trail.has(moduleId)) return [];
      trail.add(moduleId);
      const module = baseModuleMap.get(moduleId);
      if (!module) return [];
      const unitIds = /* @__PURE__ */ new Set();
      module.resourceBlueprintIds.forEach((blueprintId) => {
        (blueprintMap.get(blueprintId)?.resolvedUnitIds || []).forEach((unitId) => {
          if (modelUnitMap.has(unitId)) unitIds.add(unitId);
        });
      });
      Object.keys(module.modelGroupJson || {}).forEach((unitId) => {
        if (modelUnitMap.has(unitId)) unitIds.add(unitId);
      });
      module.moduleDependencyIds.forEach((dependencyId) => {
        collectModuleUnitIds(dependencyId, trail).forEach((unitId) => unitIds.add(unitId));
      });
      const result = Array.from(unitIds);
      resolvedUnitCache.set(moduleId, result);
      trail.delete(moduleId);
      return result;
    };
    return baseModules.map((module) => {
      const resolvedModuleDependencyIds = collectModuleDependencies(module.id);
      const resolvedResourceBlueprintIds = collectModuleBlueprintIds(module.id);
      const resolvedUnitIds = collectModuleUnitIds(module.id);
      const collectionSlugs = Array.from(new Set(
        resolvedUnitIds.map((unitId) => modelUnitMap.get(unitId)?.collectionSlug).filter(Boolean)
      ));
      const fieldCount = resolvedUnitIds.reduce((sum, unitId) => sum + (modelUnitMap.get(unitId)?.fieldCount || 0), 0);
      const modelGroupJson = this.buildModelGroupSnapshot(resolvedUnitIds, modelUnits);
      return {
        ...module,
        resolvedModuleDependencyIds,
        resolvedResourceBlueprintIds,
        resolvedUnitIds,
        collectionSlugs,
        fieldCount,
        modelGroupJson
      };
    });
  }
  static buildIndustrySites(baseSites, systemModules) {
    const moduleMap = new Map(systemModules.map((item) => [item.id, item]));
    const resolveSiteModules = (moduleIds) => {
      const resolved = /* @__PURE__ */ new Set();
      const visit = (id) => {
        const module = moduleMap.get(id);
        if (!module || resolved.has(id)) return;
        module.moduleDependencyIds.forEach(visit);
        resolved.add(id);
      };
      moduleIds.forEach(visit);
      return Array.from(resolved);
    };
    return baseSites.map((site) => {
      const validSystemModuleIds = Array.from(new Set(site.systemModuleIds.filter((id) => moduleMap.has(id))));
      if (validSystemModuleIds.length === 0) return null;
      const resolvedSystemModuleIds = resolveSiteModules(validSystemModuleIds);
      const resolvedModules = resolvedSystemModuleIds.map((id) => moduleMap.get(id)).filter(Boolean);
      return {
        id: site.id,
        name: site.name,
        description: site.description,
        target: site.target,
        tags: site.tags,
        systemModuleIds: validSystemModuleIds,
        resolvedSystemModuleIds,
        resolvedResourceBlueprintIds: Array.from(new Set(resolvedModules.flatMap((item) => item.resolvedResourceBlueprintIds))),
        resolvedUnitIds: Array.from(new Set(resolvedModules.flatMap((item) => item.resolvedUnitIds))),
        collectionSlugs: Array.from(new Set(resolvedModules.flatMap((item) => item.collectionSlugs))),
        fieldCount: resolvedModules.reduce((sum, item) => sum + item.fieldCount, 0),
        source: site.source
      };
    }).filter(Boolean);
  }
  static async getSiteInitializerCatalog(dbEnv) {
    const baseModelUnits = this.getModelUnitTemplates();
    const baseResourceBlueprints = RESOURCE_BLUEPRINT_PRESETS.map((preset) => this.buildResourceBlueprintSnapshot(preset, baseModelUnits)).filter(Boolean);
    const customModuleConfigs = await this.getSettingJson(dbEnv, CUSTOM_SYSTEM_MODULES_KEY, []);
    const customModelDefinitions = Object.fromEntries(
      customModuleConfigs.flatMap((item) => {
        const rawModelGroup = item.modelGroupJson && Object.keys(item.modelGroupJson).length > 0 ? item.modelGroupJson : this.buildModelGroupFromBlueprintIds(item.resourceBlueprintIds || [], baseResourceBlueprints, baseModelUnits);
        return Object.entries(this.normalizeModelGroupJson(rawModelGroup));
      })
    );
    const modelUnits = this.getModelUnitTemplates(customModelDefinitions);
    const resourceBlueprints = RESOURCE_BLUEPRINT_PRESETS.map((preset) => this.buildResourceBlueprintSnapshot(preset, modelUnits)).filter(Boolean);
    const hiddenPresetModuleIds = new Set(await this.getSettingJson(dbEnv, HIDDEN_SYSTEM_MODULE_PRESETS_KEY, []));
    const presetModuleMap = new Map(SYSTEM_MODULE_PRESETS.map((item) => [item.id, item]));
    const basePresetModules = SYSTEM_MODULE_PRESETS.filter((item) => !hiddenPresetModuleIds.has(item.id)).map((item) => ({
      ...item,
      source: "preset"
    }));
    const baseCustomModules = customModuleConfigs.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      category: item.category,
      target: item.target,
      tags: this.normalizeTags(item.tags),
      resourceBlueprintIds: [],
      moduleDependencyIds: item.moduleDependencyIds || [],
      modelGroupJson: this.normalizeModelGroupJson(
        item.modelGroupJson && Object.keys(item.modelGroupJson).length > 0 ? item.modelGroupJson : this.buildModelGroupFromBlueprintIds(item.resourceBlueprintIds || [], baseResourceBlueprints, baseModelUnits)
      ),
      source: "custom"
    }));
    const mergedBaseModuleMap = /* @__PURE__ */ new Map();
    basePresetModules.forEach((item) => mergedBaseModuleMap.set(item.id, item));
    baseCustomModules.forEach((item) => mergedBaseModuleMap.set(item.id, item));
    const orderedBaseModules = [
      ...basePresetModules.map((item) => mergedBaseModuleMap.get(item.id)).filter(Boolean),
      ...baseCustomModules.filter((item) => !presetModuleMap.has(item.id))
    ];
    const installedSnapshots = await this.getInstalledUnitSnapshots(dbEnv);
    const hydratedSystemModules = this.hydrateSystemModules(orderedBaseModules, resourceBlueprints, modelUnits);
    const installedManifestMap = await this.getEffectiveInstalledSystemModuleManifestMap(dbEnv, hydratedSystemModules);
    const installedSystemModuleIdSet = new Set(
      await this.getEffectiveInstalledSystemModuleIds(dbEnv, hydratedSystemModules, installedSnapshots)
    );
    const systemModules = hydratedSystemModules.map((module) => {
      const trackedUnitSlugs = installedManifestMap.get(module.id)?.unitSlugs || module.resolvedUnitIds;
      const installedState = this.decorateInstalledState(
        module,
        installedSnapshots,
        installedSystemModuleIdSet.has(module.id),
        trackedUnitSlugs
      );
      return {
        ...module,
        ...installedState,
        canDeleteInstalledData: installedState.installedDataCount === 0
      };
    });
    const hiddenPresetSiteIds = new Set(await this.getSettingJson(dbEnv, HIDDEN_INDUSTRY_SITE_PRESETS_KEY, []));
    const presetSiteMap = new Map(INDUSTRY_SITE_PRESETS.map((item) => [item.id, item]));
    const basePresetSites = INDUSTRY_SITE_PRESETS.filter((item) => !hiddenPresetSiteIds.has(item.id)).map((item) => ({
      ...item,
      source: "preset"
    }));
    const customSiteConfigs = await this.getSettingJson(dbEnv, CUSTOM_INDUSTRY_SITES_KEY, []);
    const baseCustomSites = customSiteConfigs.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      target: item.target,
      tags: this.normalizeTags(item.tags),
      systemModuleIds: item.systemModuleIds,
      source: "custom"
    }));
    const mergedBaseSiteMap = /* @__PURE__ */ new Map();
    basePresetSites.forEach((item) => mergedBaseSiteMap.set(item.id, item));
    baseCustomSites.forEach((item) => mergedBaseSiteMap.set(item.id, item));
    const orderedBaseSites = [
      ...basePresetSites.map((item) => mergedBaseSiteMap.get(item.id)).filter(Boolean),
      ...baseCustomSites.filter((item) => !presetSiteMap.has(item.id))
    ];
    const industrySites = this.buildIndustrySites(orderedBaseSites, systemModules).map((site) => {
      const isInitialized = site.resolvedSystemModuleIds.length > 0 && site.resolvedSystemModuleIds.every((id) => installedSystemModuleIdSet.has(id));
      const trackedUnitSlugs = isInitialized ? site.resolvedSystemModuleIds.flatMap((id) => installedManifestMap.get(id)?.unitSlugs || []) : [];
      const installedState = this.decorateInstalledState(site, installedSnapshots, isInitialized, trackedUnitSlugs);
      return {
        ...site,
        isInitialized,
        installedUnitIds: installedState.installedUnitIds,
        installedCollectionSlugs: installedState.installedCollectionSlugs,
        installedModelSlugs: installedState.installedModelSlugs,
        installedDataCount: installedState.installedDataCount
      };
    });
    return {
      systemModules,
      industrySites
    };
  }
}
class SystemModuleBuilder extends SystemModuleCatalog {
  static getSystemModuleJsonExample() {
    return {
      content_category: {
        name: "内容分类",
        slug: "content_category",
        description: "文章内容的分类体系",
        fields: [
          { name: "name", type: "text", label: "分类名称", required: true, isListDisplay: true },
          { name: "slug", type: "text", label: "分类标识", required: true, isListDisplay: true }
        ],
        menuGroup: "分类体系",
        icon: "FolderTree",
        menuOrder: 1,
        fieldConfig: {
          __api_policy: {
            enabled: true,
            allowed_methods: ["schema", "data"],
            security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
            field_permissions: {
              read_whitelist: ["name", "slug"],
              write_whitelist: []
            }
          }
        },
        dependencies: []
      },
      article: {
        name: "文章",
        slug: "article",
        description: "支持分类管理的文章内容模型",
        fields: [
          { name: "title", type: "text", label: "标题", required: true, isListDisplay: true },
          {
            name: "taxonomy_ids",
            type: "relation_multi",
            label: "内容分类",
            relationConfig: { collectionSlug: "content_category", displayField: "name" },
            isListDisplay: true
          },
          { name: "content", type: "richtext", label: "正文" },
          { name: "summary", type: "textarea", label: "摘要" }
        ],
        menuGroup: "内容管理",
        icon: "FileText",
        menuOrder: 2,
        fieldConfig: {
          __api_policy: {
            enabled: true,
            allowed_methods: ["schema", "data"],
            security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
            field_permissions: {
              read_whitelist: ["title", "taxonomy_ids", "content", "summary"],
              write_whitelist: []
            }
          },
          taxonomy_ids: {
            target_slug: "content_category",
            display_field: "name",
            targetCollectionSlug: "content_category",
            displayField: "name"
          }
        },
        dependencies: ["content_category"]
      }
    };
  }
  static getSystemModuleJsonGuidePrompt() {
    const modelSummaries = Object.values(MODEL_LIBRARY).map((definition) => ({
      slug: definition.slug,
      name: definition.name,
      description: definition.description,
      menuGroup: definition.menuGroup,
      fieldCount: definition.fields.length,
      dependencies: MODULE_DEPENDENCIES[definition.slug] || [],
      sampleFields: definition.fields.slice(0, 4).map((field) => ({
        name: field.name,
        type: field.type,
        label: field.label
      }))
    }));
    return [
      "你是一个系统模块 JSON 构建助手。",
      "你的任务是根据用户描述，输出可直接用于 /admin/sites -> 系统模块 -> JSON 注入配置 的标准 JSON。",
      "系统模块是行业站点的组合子件，多个系统模块组合之后形成行业站点。",
      "输出要求：",
      "1. 必须返回纯 JSON 对象，不要输出 Markdown 代码块，不要输出解释文字。",
      "2. 顶层 key 应该是模型 slug，例如 page、article、landing_form。",
      "3. 每个模型对象至少包含 name、slug、description、fields。",
      "4. fields 必须是数组，数组内每个字段至少包含 name、type、label。",
      "5. 如有需要可以包含 menuGroup、icon、menuOrder、fieldConfig、dependencies。",
      "6. /admin/sites 只负责模块 JSON 注入，所有字段能力必须保持在 /admin/models 可手动配置的通用模型能力范围内，不要输出任何特殊后门字段或专用执行逻辑。",
      "7. 如果用户描述涉及现有模型的变体，可以在现有模型基础上扩展字段；如果是新模型，也必须给出完整定义。",
      "8. 如果模型包含隐藏字段，请只声明字段本身；字段的生成方式交由 /admin/collections 中的“隐藏字段生成”预制模式处理，不要在模型 JSON 中输出任何专用 SEO 模板或硬编码执行逻辑。",
      "9. 如果多个模型之间存在从属、分类、归属、父子、作者、商品与分类、文章与分类这类关系，必须主动创建 relation 字段，不能省略关联关系。",
      "10. 所有关联字段都必须同时补齐 field 内的 relationConfig，以及 fieldConfig 中对应字段的 target_slug、display_field、targetCollectionSlug、displayField。",
      "11. 如果模型 A 依赖模型 B 才能成立，必须在模型 A 上声明 dependencies，例如 article 依赖 content_category。",
      "12. 优先使用当前模型组内已有 slug 作为关联目标；只有用户明确要求时才关联到系统内置模型。",
      "13. 字段类型优先使用 text、textarea、select、image、multi_image、richtext、json、relation_single、relation_multi、reference。",
      "14. 如果用户描述里出现“分类、上级、所属、关联、引用、作者、标签、栏目、父级、子级、SKU 归属、文章归档”等语义，默认需要输出关联字段和依赖配置。",
      "15. 如果用户需求包含关联语义，而你的输出里没有至少一个 relation 字段，或缺少 relationConfig、fieldConfig 映射、dependencies，则该输出视为不合格，必须重新生成直到满足要求。",
      "下面是当前系统内置模型能力摘要，你可以参考其字段风格与命名方式：",
      JSON.stringify(modelSummaries, null, 2),
      "下面是标准输出示例。请特别注意：模型 JSON 只描述通用字段定义与关联关系，不要把字段生成策略写死在模型层：",
      JSON.stringify(this.getSystemModuleJsonExample(), null, 2)
    ].join("\n");
  }
  static needsRelationEnforcement(input) {
    const text = String(input || "").trim().toLowerCase();
    if (!text) return false;
    return /(分类|上级|下级|父级|子级|所属|归属|关联|引用|作者|标签|栏目|依赖|关系|relation|relationship|category|parent|child|author|tag|belongs?\s+to|linked?\s+to)/i.test(text);
  }
  static validateGeneratedModuleJson(content, userIntentText = "") {
    const trimmed = String(content || "").trim();
    if (!trimmed) {
      return { error: "AI 未返回有效内容，请重试。" };
    }
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    const jsonCandidate = (fenced?.[1] || trimmed).trim();
    try {
      const parsed = JSON.parse(jsonCandidate);
      const normalized = this.normalizeModelGroupJson(parsed);
      const shouldEnforceRelations = this.needsRelationEnforcement(userIntentText);
      if (shouldEnforceRelations) {
        let relationFieldCount = 0;
        const issues = [];
        Object.entries(normalized).forEach(([modelSlug, definition]) => {
          const fieldConfig = definition.fieldConfig && typeof definition.fieldConfig === "object" && !Array.isArray(definition.fieldConfig) ? definition.fieldConfig : {};
          const dependencies = Array.isArray(definition.dependencies) ? definition.dependencies.map((item) => String(item || "").trim()).filter(Boolean) : [];
          definition.fields.forEach((field) => {
            if (!["relation", "relation_single", "relation_multi"].includes(field.type)) return;
            relationFieldCount += 1;
            const relationTarget = String(field.relationConfig?.collectionSlug || "").trim();
            const relationDisplayField = String(field.relationConfig?.displayField || "").trim();
            if (!relationTarget || !relationDisplayField) {
              issues.push(`字段 ${modelSlug}.${field.name} 缺少完整的 relationConfig`);
              return;
            }
            const fieldSetting = fieldConfig[field.name] || {};
            const targetSlug = String(fieldSetting.target_slug || fieldSetting.targetCollectionSlug || "").trim();
            const displayField = String(fieldSetting.display_field || fieldSetting.displayField || "").trim();
            if (!targetSlug || !displayField) {
              issues.push(`字段 ${modelSlug}.${field.name} 缺少 fieldConfig 映射`);
            }
            if (relationTarget !== modelSlug && !dependencies.includes(relationTarget)) {
              issues.push(`模型 ${modelSlug} 缺少对 ${relationTarget} 的 dependencies 声明`);
            }
          });
        });
        if (relationFieldCount === 0) {
          return { error: "当前需求明显包含关联关系，但 AI 输出中没有任何 relation 字段，请重新生成。" };
        }
        if (issues.length > 0) {
          return { error: `AI 输出的关联关系不完整：${issues[0]}` };
        }
      }
      return {
        normalizedContent: JSON.stringify(normalized, null, 2)
      };
    } catch (error) {
      return { error: error.message || "AI 返回的 JSON 格式不正确" };
    }
  }
  static async saveSystemModule(dbEnv, payload) {
    const inputId = String(payload.id || "").trim();
    const name = String(payload.name || "").trim();
    const description = String(payload.description || "").trim();
    const category = String(payload.category || "").trim() || "自定义模块";
    const target = String(payload.target || "").trim() || "通用站点";
    if (!name) {
      throw new Error("系统模块名称不能为空");
    }
    const modelGroupJson = this.normalizeModelGroupJson(payload.modelGroupJson || {});
    const currentCatalog = await this.getSiteInitializerCatalog(dbEnv);
    const validModuleDependencyIds = new Set(currentCatalog.systemModules.map((item) => item.id));
    const moduleDependencyIds = Array.from(new Set(
      (payload.moduleDependencyIds || []).filter((id) => validModuleDependencyIds.has(id) && id !== inputId)
    ));
    const existingConfigs = await this.getSettingJson(
      dbEnv,
      CUSTOM_SYSTEM_MODULES_KEY,
      []
    );
    const presetIds = new Set(SYSTEM_MODULE_PRESETS.map((module) => module.id));
    const targetId = inputId || this.buildCustomId("custom-module", name);
    const isEditingCustom = existingConfigs.some((item) => item.id === targetId);
    const isPresetOverride = !!inputId && payload.source === "preset" && presetIds.has(targetId);
    const nextItem = {
      id: targetId,
      name,
      description,
      category,
      target,
      tags: this.normalizeTags(payload.tags),
      modelGroupJson,
      moduleDependencyIds,
      createdAt: existingConfigs.find((item) => item.id === targetId)?.createdAt || Date.now()
    };
    if (!!inputId && !isEditingCustom && !isPresetOverride) {
      throw new Error("未找到可编辑的系统模块");
    }
    const nextConfigs = isEditingCustom ? existingConfigs.map((item) => item.id === targetId ? nextItem : item) : [...existingConfigs, nextItem];
    await this.saveSettingJson(
      dbEnv,
      CUSTOM_SYSTEM_MODULES_KEY,
      nextConfigs,
      "模块模板注入器自定义系统模块配置"
    );
    return nextItem;
  }
}
class IndustrySiteLifecycle extends SystemModuleBuilder {
  static async saveIndustrySite(dbEnv, payload) {
    const inputId = String(payload.id || "").trim();
    const name = String(payload.name || "").trim();
    const description = String(payload.description || "").trim();
    const target = String(payload.target || "").trim() || "通用站点";
    if (!name) {
      throw new Error("行业站点名称不能为空");
    }
    const catalog = await this.getSiteInitializerCatalog(dbEnv);
    const validModuleIds = new Set(catalog.systemModules.map((module) => module.id));
    const systemModuleIds = Array.from(new Set(
      (payload.systemModuleIds || []).filter((moduleId) => validModuleIds.has(moduleId))
    ));
    if (systemModuleIds.length === 0) {
      throw new Error("请至少选择一个系统模块");
    }
    const existingConfigs = await this.getSettingJson(
      dbEnv,
      CUSTOM_INDUSTRY_SITES_KEY,
      []
    );
    const presetIds = new Set(INDUSTRY_SITE_PRESETS.map((site) => site.id));
    const targetId = inputId || this.buildCustomId("custom-site", name);
    const isEditingCustom = existingConfigs.some((item) => item.id === targetId);
    const isPresetOverride = !!inputId && payload.source === "preset" && presetIds.has(targetId);
    const nextItem = {
      id: targetId,
      name,
      description,
      target,
      tags: this.normalizeTags(payload.tags),
      systemModuleIds,
      createdAt: existingConfigs.find((item) => item.id === targetId)?.createdAt || Date.now()
    };
    if (!!inputId && !isEditingCustom && !isPresetOverride) {
      throw new Error("未找到可编辑的行业站点");
    }
    const nextConfigs = isEditingCustom ? existingConfigs.map((item) => item.id === targetId ? nextItem : item) : [...existingConfigs, nextItem];
    await this.saveSettingJson(
      dbEnv,
      CUSTOM_INDUSTRY_SITES_KEY,
      nextConfigs,
      "模块模板注入器自定义行业站点配置"
    );
    return nextItem;
  }
  static async deleteIndustrySite(dbEnv, siteId) {
    const targetId = String(siteId || "").trim();
    if (!targetId) {
      throw new Error("行业站点 ID 不能为空");
    }
    const existingConfigs = await this.getSettingJson(dbEnv, CUSTOM_INDUSTRY_SITES_KEY, []);
    const nextConfigs = existingConfigs.filter((item) => item.id !== targetId);
    if (nextConfigs.length !== existingConfigs.length) {
      await this.saveSettingJson(dbEnv, CUSTOM_INDUSTRY_SITES_KEY, nextConfigs, "模块模板注入器自定义行业站点配置");
    }
    const presetIds = new Set(INDUSTRY_SITE_PRESETS.map((item) => item.id));
    if (presetIds.has(targetId)) {
      await this.appendHiddenPresetId(dbEnv, HIDDEN_INDUSTRY_SITE_PRESETS_KEY, targetId, "模块模板注入器隐藏的预设行业站点");
    }
    if (nextConfigs.length === existingConfigs.length && !presetIds.has(targetId)) {
      throw new Error("未找到可删除的行业站点");
    }
    return { id: targetId };
  }
}
class SystemModuleInstaller extends IndustrySiteLifecycle {
  static resolveInstallScopeModuleIds(systemModuleIds, moduleMap) {
    return Array.from(new Set(
      systemModuleIds.flatMap((id) => {
        const module = moduleMap.get(id);
        return module ? [module.id, ...module.resolvedModuleDependencyIds || []] : [];
      })
    ));
  }
  static async planSystemModules(dbEnv, systemModuleIds) {
    const catalog = await this.getSiteInitializerCatalog(dbEnv);
    const moduleMap = new Map(catalog.systemModules.map((item) => [item.id, item]));
    const installScopeModuleIds = this.resolveInstallScopeModuleIds(systemModuleIds, moduleMap);
    const resolvedUnitIds = Array.from(new Set(
      systemModuleIds.flatMap((id) => moduleMap.get(id)?.resolvedUnitIds || [])
    ));
    const extraModelDefinitions = Object.fromEntries(
      catalog.systemModules.flatMap((module) => Object.entries(module.modelGroupJson || {}))
    );
    if (resolvedUnitIds.length === 0) {
      throw new Error("未找到可初始化的系统模块");
    }
    const existingManifestMap = await this.getEffectiveInstalledSystemModuleManifestMap(dbEnv, catalog.systemModules);
    const allowedReuseUnitSlugs = /* @__PURE__ */ new Set([
      ...installScopeModuleIds.flatMap((id) => existingManifestMap.get(id)?.unitSlugs || []),
      ...Array.from(existingManifestMap.values()).flatMap((manifest) => manifest.unitSlugs || [])
    ]);
    const result = await this.planModelUnits(dbEnv, resolvedUnitIds, extraModelDefinitions, {
      allowedReuseUnitSlugs
    });
    return {
      ...result,
      resolvedUnitIds,
      installedModuleIds: installScopeModuleIds
    };
  }
  static async initSystemModules(dbEnv, systemModuleIds) {
    const catalog = await this.getSiteInitializerCatalog(dbEnv);
    const moduleMap = new Map(catalog.systemModules.map((item) => [item.id, item]));
    const installScopeModuleIds = this.resolveInstallScopeModuleIds(systemModuleIds, moduleMap);
    const result = await this.planSystemModules(dbEnv, systemModuleIds);
    if (Array.isArray(result.blocked) && result.blocked.length > 0) {
      throw new Error(result.blocked.map((item) => `${item.slug}${item.reason ? `：${item.reason}` : ""}`).join("；"));
    }
    const extraModelDefinitions = Object.fromEntries(
      catalog.systemModules.flatMap((module) => Object.entries(module.modelGroupJson || {}))
    );
    const existingManifestMap = await this.getEffectiveInstalledSystemModuleManifestMap(dbEnv, catalog.systemModules);
    const allowedReuseUnitSlugs = /* @__PURE__ */ new Set([
      ...installScopeModuleIds.flatMap((id) => existingManifestMap.get(id)?.unitSlugs || []),
      ...Array.from(existingManifestMap.values()).flatMap((manifest) => manifest.unitSlugs || [])
    ]);
    const executionResult = await this.initModelUnits(dbEnv, result.resolvedUnitIds, extraModelDefinitions, {
      allowedReuseUnitSlugs
    });
    const installedSnapshots = await this.getInstalledUnitSnapshots(dbEnv);
    const effectiveInstalledModuleIds = await this.getEffectiveInstalledSystemModuleIds(
      dbEnv,
      catalog.systemModules,
      installedSnapshots
    );
    const actionBySlug = new Map([
      ...(executionResult.generated || []).map((slug) => [slug, "created"]),
      ...(executionResult.synced || []).map((slug) => [slug, "reused"]),
      ...(executionResult.reused || []).map((slug) => [slug, "reused"])
    ]);
    const nextManifestMap = new Map(existingManifestMap);
    installScopeModuleIds.forEach((moduleId) => {
      const module = moduleMap.get(moduleId);
      if (!module) {
        return;
      }
      const unitSlugs = Array.from(new Set((module.resolvedUnitIds || []).filter((slug) => actionBySlug.has(slug))));
      if (unitSlugs.length === 0) {
        return;
      }
      nextManifestMap.set(moduleId, {
        moduleId,
        unitSlugs,
        units: unitSlugs.map((slug) => ({
          slug,
          modelId: installedSnapshots[slug]?.modelId ?? null,
          collectionId: installedSnapshots[slug]?.collectionId ?? null,
          action: actionBySlug.get(slug) || "reused"
        })),
        createdAt: existingManifestMap.get(moduleId)?.createdAt || Date.now(),
        updatedAt: Date.now()
      });
    });
    await this.persistInstalledSystemModuleIds(dbEnv, [
      ...effectiveInstalledModuleIds,
      ...installScopeModuleIds
    ]);
    await this.persistInstalledSystemModuleManifests(dbEnv, Array.from(nextManifestMap.values()));
    return {
      ...executionResult,
      plan: result,
      resolvedUnitIds: result.resolvedUnitIds,
      installedModuleIds: installScopeModuleIds
    };
  }
  static async initIndustrySite(dbEnv, systemModuleIds) {
    return this.initSystemModules(dbEnv, systemModuleIds);
  }
  static async initModelUnits(dbEnv, modelUnitIds, extraDefinitions = {}, options = {}) {
    const planResult = await this.planModelUnits(dbEnv, modelUnitIds, extraDefinitions, options);
    if (Array.isArray(planResult.blocked) && planResult.blocked.length > 0) {
      return {
        success: false,
        count: 0,
        generated: [],
        synced: [],
        reused: [],
        blocked: planResult.blocked
      };
    }
    const db = await createDbClient(dbEnv);
    const available = this.getModelUnitTemplates(extraDefinitions);
    const availableMap = new Map(available.map((item) => [item.id, item]));
    const results = [];
    const synced = [];
    const reused = [...planResult.reused || []];
    for (const item of planResult.units) {
      const { id, action } = item;
      const mod = availableMap.get(id);
      if (mod) {
        if (action === "create" || action === "sync") {
          console.log(`🚀 [Template] 正在初始化模块: ${id}`);
          const applyResult = await mod.generate(db);
          if (action === "create") {
            results.push(id);
          } else if (applyResult?.modelAction === "unchanged" && applyResult?.collectionAction === "unchanged") {
            if (!reused.includes(id)) {
              reused.push(id);
            }
          } else {
            synced.push(id);
          }
        } else {
          console.log(`♻️ [Template] 模块已登记在当前安装清单中，复用: ${id}`);
        }
      }
    }
    if (results.length > 0 || synced.length > 0) {
      console.log(`📡 [Template] 正在同步动态权限与 AI 架构上下文...`);
      await DynamicSchemaRuntimeSyncService.syncAfterStructureMutation(dbEnv, {
        syncPermissionRegistry: true,
        regenerateSchemaContext: true
      });
    }
    return {
      success: true,
      count: results.length + synced.length,
      generated: results,
      synced,
      reused,
      blocked: [],
      units: planResult.units
    };
  }
  static async planModelUnits(dbEnv, modelUnitIds, extraDefinitions = {}, options = {}) {
    const db = await createDbClient(dbEnv);
    const available = this.getModelUnitTemplates(extraDefinitions);
    const availableMap = new Map(available.map((item) => [item.id, item]));
    const dependencyGraph = Object.fromEntries(
      available.map((item) => [item.id, item.dependencies || []])
    );
    const toGenerateIds = /* @__PURE__ */ new Set();
    const resolvedIds = /* @__PURE__ */ new Set();
    const resolvingIds = /* @__PURE__ */ new Set();
    const visit = (id) => {
      if (resolvedIds.has(id)) return;
      if (resolvingIds.has(id)) return;
      const mod = availableMap.get(id);
      if (!mod) return;
      resolvingIds.add(id);
      toGenerateIds.add(id);
      (mod.dependencies || []).forEach(visit);
      resolvingIds.delete(id);
      resolvedIds.add(id);
    };
    modelUnitIds.forEach(visit);
    const sortedIds = topologicalSort(Array.from(toGenerateIds), dependencyGraph);
    const installedSnapshots = await this.getInstalledUnitSnapshots(dbEnv);
    const allowedReuseUnitSlugs = options.allowedReuseUnitSlugs || /* @__PURE__ */ new Set();
    const units = [];
    const generated = [];
    const synced = [];
    const reused = [];
    const blocked = [];
    for (const id of sortedIds) {
      const mod = availableMap.get(id);
      if (!mod) {
        continue;
      }
      const snapshot = installedSnapshots[id];
      const physicallyExists = !!(snapshot?.collectionId || snapshot?.modelId);
      if (physicallyExists && !allowedReuseUnitSlugs.has(id)) {
        const reason = "底层对象已存在但不在当前模块安装清单中，已停止接管";
        units.push({ id, action: "blocked", reason, modelAction: "blocked", collectionAction: "blocked", hasData: Number(snapshot?.entityCount || 0) > 0 });
        blocked.push({ slug: id, reason });
        continue;
      }
      const unitPlan = await DynamicSchemaLifecycleService.planUnitDefinitionSync(db, mod.definition);
      if (unitPlan.action === "blocked") {
        units.push({ id, ...unitPlan });
        blocked.push({ slug: id, reason: unitPlan.reason });
        continue;
      }
      units.push({ id, ...unitPlan });
      if (unitPlan.action === "create") {
        generated.push(id);
      } else if (unitPlan.action === "sync") {
        synced.push(id);
      } else {
        reused.push(id);
      }
    }
    return {
      success: blocked.length === 0,
      count: generated.length + synced.length,
      generated,
      synced,
      reused,
      blocked,
      units
    };
  }
}
class SystemModuleUninstaller extends SystemModuleInstaller {
  static async cleanupReferencesAfterModuleDeletion(dbEnv, moduleId) {
    const customModules = await this.getSettingJson(dbEnv, CUSTOM_SYSTEM_MODULES_KEY, []);
    const nextModules = customModules.map((item) => ({
      ...item,
      moduleDependencyIds: (item.moduleDependencyIds || []).filter((dependencyId) => dependencyId !== moduleId)
    }));
    await this.saveSettingJson(dbEnv, CUSTOM_SYSTEM_MODULES_KEY, nextModules, "模块模板注入器自定义系统模块配置");
    const customSites = await this.getSettingJson(dbEnv, CUSTOM_INDUSTRY_SITES_KEY, []);
    const nextSites = customSites.map((item) => ({
      ...item,
      systemModuleIds: (item.systemModuleIds || []).filter((currentId) => currentId !== moduleId)
    })).filter((item) => item.systemModuleIds.length > 0);
    await this.saveSettingJson(dbEnv, CUSTOM_INDUSTRY_SITES_KEY, nextSites, "模块模板注入器自定义行业站点配置");
  }
  static collectCascadeUninstallModules(systemModules, targetId) {
    return systemModules.filter((module) => {
      if (!module?.isInstalled) return false;
      if (module.id === targetId) return true;
      const dependencyIds = Array.isArray(module.resolvedModuleDependencyIds) && module.resolvedModuleDependencyIds.length > 0 ? module.resolvedModuleDependencyIds : module.moduleDependencyIds || [];
      return dependencyIds.includes(targetId);
    });
  }
  static async planUninstallSystemModule(dbEnv, moduleId) {
    const targetId = String(moduleId || "").trim();
    if (!targetId) {
      throw new Error("系统模块 ID 不能为空");
    }
    const catalog = await this.getSiteInitializerCatalog(dbEnv);
    const targetModule = catalog.systemModules.find((item) => item.id === targetId);
    if (!targetModule) {
      throw new Error("未找到可卸载的系统模块");
    }
    if (!targetModule.isInstalled) {
      throw new Error("该系统模块尚未安装");
    }
    const cascadeModules = this.collectCascadeUninstallModules(catalog.systemModules, targetId);
    const cascadeModuleIds = cascadeModules.map((item) => item.id);
    const cascadeModuleNames = cascadeModules.map((item) => item.name);
    const installedManifestMap = await this.getEffectiveInstalledSystemModuleManifestMap(dbEnv, catalog.systemModules);
    const uninstallCandidateUnitSlugs = Array.from(new Set(
      cascadeModules.flatMap((item) => installedManifestMap.get(item.id)?.unitSlugs || [])
    ));
    const sharedUnitSlugs = new Set(
      Array.from(installedManifestMap.values()).filter((manifest) => !cascadeModuleIds.includes(manifest.moduleId)).flatMap((manifest) => manifest.unitSlugs || [])
    );
    const retainedSharedUnitSlugs = uninstallCandidateUnitSlugs.filter((slug) => sharedUnitSlugs.has(slug));
    const uninstallUnitSlugs = uninstallCandidateUnitSlugs.filter((slug) => !sharedUnitSlugs.has(slug));
    const installedSnapshots = await this.getInstalledUnitSnapshots(dbEnv);
    const units = uninstallCandidateUnitSlugs.map((slug) => {
      const entityCount = Number(installedSnapshots[slug]?.entityCount || 0);
      const collectionId = installedSnapshots[slug]?.collectionId ?? null;
      const modelId = installedSnapshots[slug]?.modelId ?? null;
      if (sharedUnitSlugs.has(slug)) {
        return {
          slug,
          action: "retain_shared",
          reason: "该底层对象仍被其他已安装模块共享使用，本次不会删除",
          entityCount,
          collectionId,
          modelId
        };
      }
      if (entityCount > 0) {
        return {
          slug,
          action: "blocked_data",
          reason: "该底层集合仍有业务数据，已停止卸载",
          entityCount,
          collectionId,
          modelId
        };
      }
      return {
        slug,
        action: "delete",
        reason: "该底层对象仅由本次卸载范围持有，将被删除",
        entityCount,
        collectionId,
        modelId
      };
    });
    const blocked = units.filter((item) => item.action === "blocked_data");
    const deletableUnits = units.filter((item) => item.action === "delete");
    return {
      id: targetId,
      cascadeModuleIds,
      cascadeModuleNames,
      uninstallCandidateUnitSlugs,
      retainedSharedUnitSlugs,
      blockedUnitSlugs: blocked.map((item) => item.slug),
      uninstalledCollectionSlugs: deletableUnits.filter((item) => Number.isFinite(item.collectionId)).map((item) => item.slug),
      uninstalledModelSlugs: deletableUnits.filter((item) => Number.isFinite(item.modelId)).map((item) => item.slug),
      deletedDataCount: uninstallUnitSlugs.reduce(
        (sum, slug) => sum + Number(installedSnapshots[slug]?.entityCount || 0),
        0
      ),
      canExecute: blocked.length === 0,
      units
    };
  }
  static async uninstallSystemModule(dbEnv, moduleId) {
    const plan = await this.planUninstallSystemModule(dbEnv, moduleId);
    const uninstallUnitSlugs = plan.units.filter((item) => item.action === "delete").map((item) => item.slug);
    const installedSnapshots = await this.getInstalledUnitSnapshots(dbEnv);
    const collectionRows = uninstallUnitSlugs.map((slug) => ({
      id: installedSnapshots[slug]?.collectionId,
      slug
    })).filter((item) => Number.isFinite(item.id));
    const modelRows = uninstallUnitSlugs.map((slug) => ({
      id: installedSnapshots[slug]?.modelId,
      slug
    })).filter((item) => Number.isFinite(item.id));
    const db = await createDbClient(dbEnv);
    if (!plan.canExecute) {
      throw new Error(`以下底层集合仍有业务数据，已停止卸载：${plan.blockedUnitSlugs.join("、")}`);
    }
    await DynamicSchemaLifecycleService.deleteCollectionResources(db, collectionRows);
    await DynamicSchemaLifecycleService.deleteModelResources(db, modelRows);
    const catalog = await this.getSiteInitializerCatalog(dbEnv);
    const installedManifestMap = await this.getEffectiveInstalledSystemModuleManifestMap(dbEnv, catalog.systemModules);
    const cascadeModuleIds = plan.cascadeModuleIds;
    const effectiveInstalledModuleIds = await this.getEffectiveInstalledSystemModuleIds(
      dbEnv,
      catalog.systemModules,
      installedSnapshots
    );
    const nextManifestMap = new Map(installedManifestMap);
    cascadeModuleIds.forEach((id) => nextManifestMap.delete(id));
    await this.persistInstalledSystemModuleIds(
      dbEnv,
      effectiveInstalledModuleIds.filter((id) => !cascadeModuleIds.includes(id))
    );
    await this.persistInstalledSystemModuleManifests(dbEnv, Array.from(nextManifestMap.values()));
    await DynamicSchemaRuntimeSyncService.syncAfterStructureMutation(dbEnv, {
      syncPermissionRegistry: true,
      regenerateSchemaContext: true
    });
    return {
      id: plan.id,
      cascadeModuleIds: plan.cascadeModuleIds,
      cascadeModuleNames: plan.cascadeModuleNames,
      deletedDataCount: plan.deletedDataCount,
      uninstalledCollectionSlugs: collectionRows.map((item) => item.slug),
      uninstalledModelSlugs: modelRows.map((item) => item.slug),
      retainedSharedUnitSlugs: plan.retainedSharedUnitSlugs
    };
  }
  static async deleteSystemModule(dbEnv, moduleId) {
    const targetId = String(moduleId || "").trim();
    if (!targetId) {
      throw new Error("系统模块 ID 不能为空");
    }
    const catalog = await this.getSiteInitializerCatalog(dbEnv);
    const targetModule = catalog.systemModules.find((item) => item.id === targetId);
    if (!targetModule) {
      throw new Error("未找到可删除的系统模块");
    }
    if (targetModule.installedDataCount > 0) {
      throw new Error(`系统模块已存在 ${targetModule.installedDataCount} 条数据记录，请先前往 /admin/collections 清空对应集合数据后再删除。`);
    }
    if (targetModule.isInstalled) {
      await this.uninstallSystemModule(dbEnv, targetId);
    }
    const existingConfigs = await this.getSettingJson(dbEnv, CUSTOM_SYSTEM_MODULES_KEY, []);
    const nextConfigs = existingConfigs.filter((item) => item.id !== targetId);
    if (nextConfigs.length !== existingConfigs.length) {
      await this.saveSettingJson(dbEnv, CUSTOM_SYSTEM_MODULES_KEY, nextConfigs, "模块模板注入器自定义系统模块配置");
    }
    const presetIds = new Set(SYSTEM_MODULE_PRESETS.map((item) => item.id));
    if (presetIds.has(targetId)) {
      await this.appendHiddenPresetId(dbEnv, HIDDEN_SYSTEM_MODULE_PRESETS_KEY, targetId, "模块模板注入器隐藏的预设系统模块");
    }
    if (nextConfigs.length === existingConfigs.length && !presetIds.has(targetId)) {
      throw new Error("未找到可删除的系统模块");
    }
    await this.cleanupReferencesAfterModuleDeletion(dbEnv, targetId);
    return {
      id: targetId,
      deletedInstalledData: targetModule.isInstalled,
      deletedCollectionSlugs: targetModule.installedCollectionSlugs,
      deletedModelSlugs: targetModule.installedModelSlugs
    };
  }
}
class TemplatePresetRestore extends SystemModuleUninstaller {
  static async restoreSystemModulePresets(dbEnv) {
    await this.saveSettingJson(dbEnv, HIDDEN_SYSTEM_MODULE_PRESETS_KEY, [], "模块模板注入器隐藏的预设系统模块");
    return { success: true };
  }
}
class TemplateService extends TemplatePresetRestore {
}
class GatewayManager {
  static CF_API_BASE = "https://api.cloudflare.com/client/v4";
  /**
   * 幂等式确保指定名称的 AI Gateway 已创建
   * @param accountId Cloudflare Account ID
   * @param apiToken 拥有 Account.AI Gateway:Edit 权限的 Token
   * @param gatewayId 网关唯一标识，建议如 'main-gateway'
   */
  static async checkAndCreateGateway(accountId, apiToken, gatewayId) {
    const gatewayUrl = `${this.CF_API_BASE}/accounts/${accountId}/ai-gateway/gateways/${gatewayId}`;
    const getResponse = await fetch(gatewayUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json"
      }
    });
    if (getResponse.status === 200) {
      console.log(`✅ [GatewayManager] AI Gateway '${gatewayId}' 已经存在。`);
      return gatewayId;
    }
    if (getResponse.status === 404) {
      console.log(`🚀 [GatewayManager] 发现网关缺失，正在申请创建: ${gatewayId}`);
      const createResponse = await fetch(`${this.CF_API_BASE}/accounts/${accountId}/ai-gateway/gateways`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: gatewayId,
          name: gatewayId,
          collect_logs: true,
          cache_invalidate_on_update: true,
          cache_ttl: 3600,
          rate_limiting_limit: 1e6,
          rate_limiting_interval: 60,
          cache_enabled: true,
          logpersistance_enabled: true
        })
      });
      const responseText = await createResponse.text();
      let isSuccess = createResponse.status === 200 || createResponse.status === 201 || createResponse.status === 409;
      if (!isSuccess) {
        try {
          const body = JSON.parse(responseText);
          if (body.success) {
            isSuccess = true;
          }
        } catch (e) {
        }
      }
      if (isSuccess) {
        console.log(`📦 [GatewayManager] AI Gateway '${gatewayId}' 创建成功或已存在。`);
        return gatewayId;
      }
      throw new Error(`[GatewayManager] AI Gateway 创建失败: ${createResponse.status} - ${responseText}`);
    }
    const errorText = await getResponse.text();
    throw new Error(`[GatewayManager] 探测网关状态异常: ${getResponse.status} - ${errorText}`);
  }
  /**
   * 动态生成适配提供商的网关前缀 URL
   */
  static generateGatewayUrl(accountId, gatewayId, provider) {
    return `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/${provider}`;
  }
  /**
   * 列出当前 CF 账户下的所有 AI Gateways
   */
  static async listGateways(accountId, apiToken) {
    const listUrl = `${this.CF_API_BASE}/accounts/${accountId}/ai-gateway/gateways`;
    const response = await fetch(listUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json"
      }
    });
    if (response.status !== 200) {
      const text = await response.text();
      throw new Error(`获取网关列表失败: ${response.status} - ${text}`);
    }
    const body = await response.json();
    return body.result || [];
  }
  /**
   * 物理删除指定的 AI Gateway
   */
  static async deleteGateway(accountId, apiToken, gatewayId) {
    const deleteUrl = `${this.CF_API_BASE}/accounts/${accountId}/ai-gateway/gateways/${gatewayId}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json"
      }
    });
    if (response.status !== 200 && response.status !== 204) {
      const text = await response.text();
      throw new Error(`删除网关失败: ${response.status} - ${text}`);
    }
    return true;
  }
}
const isOpenAiCompatibleProvider = (provider) => provider?.type === "openai" || provider?.type === "custom" || provider?.type === "gemini";
const getProviderAuthHeader = (provider, apiToken) => `Bearer ${provider?.apiKey || apiToken || ""}`;
const resolveChatBaseUrl = (provider, accountId, fallbackGatewayId = "main-gateway") => {
  const explicitBaseUrl = (provider?.baseUrl || "").replace(/\/+$/, "");
  if (explicitBaseUrl) return explicitBaseUrl;
  if (provider?.type === "gemini") {
    return "https://generativelanguage.googleapis.com/v1beta/openai";
  }
  if (isOpenAiCompatibleProvider(provider) && accountId) {
    return GatewayManager.generateGatewayUrl(accountId, provider?.gatewayId || fallbackGatewayId, "openai");
  }
  if (accountId) {
    return GatewayManager.generateGatewayUrl(accountId, provider?.gatewayId || fallbackGatewayId, "workers-ai");
  }
  return "";
};
const resolveChatEndpoint = (provider, baseUrl, modelId) => {
  if (provider?.type === "custom" && provider?.routingMode === "manual") {
    return "";
  }
  if (isOpenAiCompatibleProvider(provider)) {
    return /\/v\d+/.test(baseUrl) ? "/chat/completions" : "/v1/chat/completions";
  }
  return `/run/${modelId}`;
};
const sanitizeChatMessagesForProvider = (messages) => {
  return (Array.isArray(messages) ? messages : []).map((msg) => {
    const cleanMsg = {
      role: msg.role,
      content: typeof msg.content === "string" ? msg.content : ""
    };
    if (msg.role === "assistant" && Array.isArray(msg.tool_calls) && msg.tool_calls.length > 0) {
      cleanMsg.tool_calls = msg.tool_calls;
      if (!cleanMsg.content.trim()) {
        cleanMsg.content = null;
      }
    }
    if (msg.role === "assistant" && typeof msg.reasoning_content === "string" && msg.reasoning_content.trim()) {
      cleanMsg.reasoning_content = msg.reasoning_content;
    }
    if (msg.role === "tool") {
      cleanMsg.tool_call_id = msg.tool_call_id;
      if (msg.name) {
        cleanMsg.name = msg.name;
      }
    }
    return cleanMsg;
  });
};
class SiteInitializerService {
  static async getCatalog(env) {
    return TemplateService.getSiteInitializerCatalog(env.DB);
  }
  static async saveSystemModule(env, payload) {
    return TemplateService.saveSystemModule(env.DB, payload || {});
  }
  static async planUninstallSystemModule(env, moduleId) {
    return TemplateService.planUninstallSystemModule(env.DB, moduleId);
  }
  static async uninstallSystemModule(env, moduleId) {
    const result = await TemplateService.uninstallSystemModule(env.DB, moduleId);
    if (env.NS_CONFIG) {
      await env.NS_CONFIG.delete("admin_colls");
    }
    return result;
  }
  static async deleteSystemModule(env, moduleId) {
    const result = await TemplateService.deleteSystemModule(env.DB, moduleId);
    if (env.NS_CONFIG) {
      await env.NS_CONFIG.delete("admin_colls");
    }
    return result;
  }
  static async restoreSystemModulePresets(env) {
    const result = await TemplateService.restoreSystemModulePresets(env.DB);
    if (env.NS_CONFIG) {
      await env.NS_CONFIG.delete("admin_colls");
    }
    return result;
  }
  static async initSystemModules(env, systemModuleIds) {
    const result = await TemplateService.initSystemModules(env.DB, systemModuleIds);
    if (env.NS_CONFIG) {
      await env.NS_CONFIG.delete("admin_colls");
    }
    return result;
  }
  static async planSystemModules(env, systemModuleIds) {
    return TemplateService.planSystemModules(env.DB, systemModuleIds);
  }
  static async prepareGeneratedModuleJson(env, payload) {
    const {
      messages,
      prompt,
      isRetry,
      lastContent,
      validationError
    } = payload || {};
    const normalizedMessages = Array.isArray(messages) ? messages : [];
    const latestPrompt = String(prompt || "").trim();
    if (!latestPrompt && normalizedMessages.length === 0) {
      throw new Error("prompt is required");
    }
    const db = await createDbClient(env.DB);
    const aiConfigRow = await db.select().from(systemSettings).where(eq(systemSettings.key, "ai_config")).get();
    if (!aiConfigRow) {
      throw new Error("AI 配置缺失，请先前往 /admin/settings/ai 设置。");
    }
    const config = JSON.parse(aiConfigRow.value || "{}");
    const activeModelId = config.assignments?.text?.modelId;
    const providerId = config.assignments?.text?.providerId;
    let provider = config.providers?.find((item) => item.id === providerId);
    if (!provider && activeModelId) {
      provider = config.providers?.find((item) => item.models?.some((model) => model.id === activeModelId));
    }
    if (!provider) {
      provider = config.providers?.[0];
    }
    if (!provider) {
      throw new Error("未找到可用的 AI 提供商，请先前往 /admin/settings/ai 配置。");
    }
    const resolvedModelId = activeModelId || provider.models?.find((model) => {
      const types = model.types || (model.type ? [model.type] : []);
      return types.includes("text") || types.includes("general");
    })?.id;
    if (!resolvedModelId) {
      throw new Error("未找到可用的默认文本模型，请先在 AI 设置中配置。");
    }
    const accountId = env.CF_ACCOUNT_ID || config.accountId;
    const apiToken = env.CF_API_TOKEN || config.apiToken;
    if (!accountId && !provider.baseUrl && provider.type !== "gemini") {
      throw new Error("当前模型缺少可用的请求地址，请检查 AI 提供商配置。");
    }
    const targetUrl = resolveChatBaseUrl(provider, accountId, provider.gatewayId || "main-gateway");
    if (!targetUrl) {
      throw new Error("当前模型缺少可用的请求地址，请检查 AI 提供商配置。");
    }
    const endpoint = resolveChatEndpoint(provider, targetUrl, resolvedModelId);
    const authHeader = getProviderAuthHeader(provider, apiToken);
    if (!authHeader.replace("Bearer", "").trim()) {
      throw new Error("当前 AI 提供商缺少密钥配置。");
    }
    const guidePrompt = TemplateService.getSystemModuleJsonGuidePrompt();
    const conversation = normalizedMessages.filter((item) => item && (item.role === "user" || item.role === "assistant") && String(item.content || "").trim()).map((item) => ({
      role: item.role,
      content: String(item.content || "")
    }));
    if (latestPrompt && (conversation.length === 0 || conversation[conversation.length - 1].content !== latestPrompt)) {
      conversation.push({ role: "user", content: latestPrompt });
    }
    if (isRetry) {
      const repairInstruction = [
        "上一版输出未通过系统校验，请只返回修正后的纯 JSON，不要解释。",
        `失败原因：${validationError || "缺少关联关系配置"}`,
        "修正要求：",
        "1. 如果需求存在分类、所属、父子、引用、关联等关系，必须补齐 relation 字段。",
        "2. 每个 relation 字段必须同时补齐 relationConfig。",
        "3. fieldConfig 中必须补齐该 relation 字段的 target_slug、display_field、targetCollectionSlug、displayField。",
        "4. 依赖其他模型的模型必须补齐 dependencies。",
        "5. 保留原有业务语义，只修复结构缺失问题。"
      ].join("\n");
      conversation.push({ role: "assistant", content: String(lastContent || "").trim() });
      conversation.push({ role: "user", content: repairInstruction });
    }
    const body = isOpenAiCompatibleProvider(provider) ? {
      model: resolvedModelId,
      messages: [
        { role: "system", content: guidePrompt },
        ...conversation
      ],
      temperature: 0.2,
      stream: false
    } : {
      prompt: [
        guidePrompt,
        "",
        "对话上下文：",
        ...conversation.map((item) => `${item.role.toUpperCase()}:
${item.content}`)
      ].join("\n")
    };
    return {
      url: `${targetUrl}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader
      },
      body,
      providerType: provider.type,
      modelId: resolvedModelId,
      providerId: provider.id
    };
  }
  static validateGeneratedModuleJson(payload) {
    const { content, messages, prompt } = payload || {};
    const normalizedMessages = Array.isArray(messages) ? messages : [];
    const latestPrompt = String(prompt || "").trim();
    const conversation = normalizedMessages.filter((item) => item && (item.role === "user" || item.role === "assistant") && String(item.content || "").trim()).map((item) => ({
      role: item.role,
      content: String(item.content || "")
    }));
    if (latestPrompt && (conversation.length === 0 || conversation[conversation.length - 1].content !== latestPrompt)) {
      conversation.push({ role: "user", content: latestPrompt });
    }
    const userIntentText = conversation.filter((item) => item.role === "user").map((item) => String(item.content || "").trim()).filter(Boolean).join("\n");
    const validation = TemplateService.validateGeneratedModuleJson(String(content || ""), userIntentText);
    const needsRetry = Boolean((validation.error || !validation.normalizedContent) && TemplateService.needsRelationEnforcement(userIntentText));
    return {
      validation,
      needsRetry
    };
  }
}
const apiV1 = new Hono();
const SITE_INITIALIZER_VIEW_PERMISSIONS = ["sites.view", "sites.manage", "role.manage"];
const SITE_INITIALIZER_MANAGE_PERMISSIONS = ["sites.manage", "role.manage"];
apiV1.get("/system/site-initializer/catalog", requirePermission(SITE_INITIALIZER_VIEW_PERMISSIONS), async (c) => {
  try {
    const catalog = await SiteInitializerService.getCatalog(c.env);
    return c.json({ success: true, data: catalog });
  } catch (err) {
    return c.json({ success: false, error: err.message || "获取模块模板目录失败" }, 500);
  }
});
apiV1.post("/system/site-initializer/modules", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  try {
    const body = await c.req.json();
    const result = await SiteInitializerService.saveSystemModule(c.env, body || {});
    return c.json({ success: true, data: result });
  } catch (err) {
    return c.json({ success: false, error: err.message || "保存系统模块失败" }, 400);
  }
});
apiV1.post("/system/site-initializer/modules/:id/uninstall", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  try {
    const result = await SiteInitializerService.uninstallSystemModule(c.env, c.req.param("id"));
    return c.json({ success: true, data: result });
  } catch (err) {
    return c.json({ success: false, error: err.message || "卸载系统模块失败" }, 400);
  }
});
apiV1.post("/system/site-initializer/modules/:id/uninstall/plan", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  try {
    const result = await SiteInitializerService.planUninstallSystemModule(c.env, c.req.param("id"));
    return c.json({ success: true, data: result });
  } catch (err) {
    return c.json({ success: false, error: err.message || "卸载预检失败" }, 400);
  }
});
apiV1.delete("/system/site-initializer/modules/:id", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  try {
    const result = await SiteInitializerService.deleteSystemModule(c.env, c.req.param("id"));
    return c.json({ success: true, data: result });
  } catch (err) {
    return c.json({ success: false, error: err.message || "删除系统模块失败" }, 400);
  }
});
apiV1.post("/system/site-initializer/modules/sync-presets", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  try {
    const result = await SiteInitializerService.restoreSystemModulePresets(c.env);
    return c.json({ success: true, data: result });
  } catch (err) {
    return c.json({ success: false, error: err.message || "同步预置模块失败" }, 500);
  }
});
apiV1.post("/system/site-initializer/generate-module-json/prepare", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  try {
    const data = await SiteInitializerService.prepareGeneratedModuleJson(c.env, await c.req.json());
    return c.json({
      success: true,
      data
    });
  } catch (err) {
    const message = err.message || "配置 AI 失败";
    const status = message.includes("required") || message.includes("缺失") || message.includes("未找到") || message.includes("缺少") ? 400 : 500;
    return c.json({ success: false, error: message }, status);
  }
});
apiV1.post("/system/site-initializer/generate-module-json/validate", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  try {
    const body = await c.req.json();
    const { validation, needsRetry } = SiteInitializerService.validateGeneratedModuleJson(body);
    if (needsRetry) {
      return c.json({
        success: true,
        data: {
          valid: false,
          needsRetry: true,
          validationError: validation.error || "缺少关联关系配置",
          lastContent: body.content
        }
      });
    }
    if (validation.error || !validation.normalizedContent) {
      return c.json({
        success: false,
        error: validation.error || "AI 生成的系统模块 JSON 不合格，请重试。"
      }, 422);
    }
    return c.json({
      success: true,
      data: {
        valid: true,
        content: validation.normalizedContent
      }
    });
  } catch (err) {
    return c.json({ success: false, error: err.message || "校验失败" }, 500);
  }
});
apiV1.post("/system/site-initializer/init/module", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  const { systemModuleIds } = await c.req.json();
  if (!systemModuleIds || !Array.isArray(systemModuleIds)) {
    return c.json({ success: false, error: "systemModuleIds is required and must be an array" }, 400);
  }
  try {
    const result = await SiteInitializerService.initSystemModules(c.env, systemModuleIds);
    return c.json({ success: true, data: result });
  } catch (err) {
    console.error("❌ [SiteInitializerModuleInit] Error:", err);
    return c.json({ success: false, error: err.message || "初始化失败" }, 500);
  }
});
apiV1.post("/system/site-initializer/plan/module", requirePermission(SITE_INITIALIZER_MANAGE_PERMISSIONS), async (c) => {
  const { systemModuleIds } = await c.req.json();
  if (!systemModuleIds || !Array.isArray(systemModuleIds)) {
    return c.json({ success: false, error: "systemModuleIds is required and must be an array" }, 400);
  }
  try {
    const result = await SiteInitializerService.planSystemModules(c.env, systemModuleIds);
    return c.json({ success: true, data: result });
  } catch (err) {
    console.error("❌ [SiteInitializerModulePlan] Error:", err);
    return c.json({ success: false, error: err.message || "预检失败" }, 500);
  }
});
apiV1.get("/sites", (c) => c.json({ message: "List sites" }));
apiV1.post("/sites", (c) => c.json({ message: "Create site" }));
const rbac = new Hono();
const scheduleBackgroundTask = (c, task) => {
  let executionCtx = c?.env?.__executionCtx;
  if (!executionCtx) {
    try {
      executionCtx = c?.executionCtx;
    } catch {
      executionCtx = null;
    }
  }
  if (executionCtx && typeof executionCtx.waitUntil === "function") {
    executionCtx.waitUntil(task);
  }
};
rbac.get("/languages", requirePermission(["languages.view", "languages.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const all = await db.select().from(languages).orderBy(asc(languages.sortOrder), asc(languages.createdAt), asc(languages.code)).all();
  return c.json(all);
});
rbac.post("/languages", requirePermission(["languages.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const data = await c.req.json();
  try {
    const existing = await db.select({ sortOrder: languages.sortOrder }).from(languages).all();
    const normalizedSortOrders = existing.map((item) => Number(item?.sortOrder ?? 0)).filter((value) => Number.isFinite(value));
    const nextSortOrder = (normalizedSortOrders.length > 0 ? Math.max(...normalizedSortOrders) : -1) + 1;
    const [newItem] = await db.insert(languages).values({
      code: data.code,
      name: data.name,
      status: data.status || "active",
      isDefault: !!data.isDefault,
      sortOrder: typeof data.sortOrder === "number" && Number.isFinite(data.sortOrder) ? data.sortOrder : nextSortOrder
    }).returning();
    return c.json(newItem);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.patch("/languages/reorder", requirePermission(["languages.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const payload = await c.req.json().catch(() => ({}));
  const codes = Array.isArray(payload?.codes) ? payload.codes.filter((item) => typeof item === "string" && item.trim()) : [];
  if (codes.length === 0) {
    return c.json({ error: "缺少有效的语种排序数据" }, 400);
  }
  try {
    const existing = await db.select({ code: languages.code }).from(languages).all();
    const existingCodeSet = new Set(existing.map((item) => item.code));
    if (codes.length !== existing.length || codes.some((code) => !existingCodeSet.has(code))) {
      return c.json({ error: "语种排序数据不完整，请刷新后重试" }, 400);
    }
    await Promise.all(
      codes.map(
        (code, index) => db.update(languages).set({ sortOrder: index }).where(eq(languages.code, code)).run()
      )
    );
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.patch("/languages/:code", requirePermission(["languages.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const code = c.req.param("code");
  const data = await c.req.json();
  try {
    if (data.isDefault) {
      await db.update(languages).set({ isDefault: false }).run();
    }
    await db.update(languages).set(data).where(eq(languages.code, code)).run();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.patch("/languages/default/:code", requirePermission(["languages.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const code = c.req.param("code");
  try {
    await db.update(languages).set({ isDefault: false }).run();
    await db.update(languages).set({ isDefault: true, status: "active" }).where(eq(languages.code, code)).run();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.put("/languages", requirePermission(["languages.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const data = await c.req.json();
  try {
    const { code, ...updateData } = data;
    await db.update(languages).set(updateData).where(eq(languages.code, code)).run();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.delete("/languages/:code", requirePermission(["languages.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const code = c.req.param("code");
  try {
    const lang = await db.select().from(languages).where(eq(languages.code, code)).get();
    if (lang?.isDefault) return c.json({ error: "默认语种不可删除" }, 403);
    await db.delete(languages).where(eq(languages.code, code)).run();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.get("/permissions", async (c) => {
  const db = await createDbClient(c.env.DB);
  const { plugins: pluginsTable } = await import("./index_C8hkm3Ad.mjs").then((n) => n.bR);
  await syncCorePermissionsToDb(db);
  const allPerms = await db.select({
    slug: permissions.slug,
    name: permissions.name,
    description: permissions.description,
    permCategory: permissions.permCategory,
    pluginSlug: permissions.pluginSlug,
    pluginEnabled: pluginsTable.isEnabled
  }).from(permissions).leftJoin(pluginsTable, eq(permissions.pluginSlug, pluginsTable.slug)).where(
    sql`${permissions.pluginSlug} IS NULL OR ${pluginsTable.isEnabled} = 1`
  ).orderBy(permissions.permCategory, permissions.slug).all();
  return c.json(allPerms);
});
rbac.get("/roles", async (c) => {
  const db = await createDbClient(c.env.DB);
  const allRoles = await db.select().from(roles).all();
  const rolesWithPerms = await Promise.all(allRoles.map(async (role) => {
    const perms = await db.select({ slug: rolePermissions.permissionSlug }).from(rolePermissions).where(eq(rolePermissions.roleId, role.id));
    return { ...role, permissions: perms.map((p) => p.slug) };
  }));
  return c.json(rolesWithPerms);
});
rbac.get("/roles/:id", async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  const role = await db.select().from(roles).where(eq(roles.id, id)).get();
  if (!role) return c.json({ error: "角色不存在" }, 404);
  const perms = await db.select({ slug: rolePermissions.permissionSlug }).from(rolePermissions).where(eq(rolePermissions.roleId, id));
  return c.json({ ...role, permissions: perms.map((p) => p.slug) });
});
rbac.post("/roles", async (c) => {
  const db = await createDbClient(c.env.DB);
  const { name, description, scope, permissionSlugs } = await c.req.json();
  try {
    const [newRole] = await db.insert(roles).values({
      name,
      description,
      scope: scope || "tenant"
    }).returning();
    let slugsToInsert = permissionSlugs || [];
    if (name === "SuperAdmin") {
      slugsToInsert = Array.from(/* @__PURE__ */ new Set(["all", ...slugsToInsert]));
    }
    if (slugsToInsert.length > 0) {
      const chunkSize = 20;
      for (let i = 0; i < slugsToInsert.length; i += chunkSize) {
        const chunk = slugsToInsert.slice(i, i + chunkSize);
        await db.insert(rolePermissions).values(
          chunk.map((slug) => ({
            roleId: newRole.id,
            permissionSlug: slug
          }))
        );
      }
    }
    return c.json(newRole);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.patch("/roles/:id", async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  const { name, description, scope, permissionSlugs } = await c.req.json();
  try {
    const currentRole = await db.select().from(roles).where(eq(roles.id, id)).get();
    if (currentRole?.name === "SuperAdmin") {
      return c.json({ error: "系统核心超级管理员角色（SuperAdmin）拥有所有权限，不允许修改其权限配置。" }, 403);
    }
    let finalSlugs = permissionSlugs || [];
    await db.update(roles).set({ name, description, scope: scope || currentRole?.scope }).where(eq(roles.id, id));
    await db.delete(rolePermissions).where(eq(rolePermissions.roleId, id));
    if (finalSlugs.length > 0) {
      const chunkSize = 20;
      for (let i = 0; i < finalSlugs.length; i += chunkSize) {
        const chunk = finalSlugs.slice(i, i + chunkSize);
        await db.insert(rolePermissions).values(
          chunk.map((slug) => ({
            roleId: id,
            permissionSlug: slug
          }))
        );
      }
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.delete("/roles/:id", async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  try {
    const role = await db.select().from(roles).where(eq(roles.id, id)).get();
    if (!role) return c.json({ error: "角色不存在" }, 404);
    if (role.name === "SuperAdmin") {
      return c.json({ error: "系统核心角色不可删除" }, 403);
    }
    const ops = [
      db.delete(rolePermissions).where(eq(rolePermissions.roleId, id)),
      db.delete(adminsToRoles).where(eq(adminsToRoles.roleId, id)),
      db.delete(roles).where(eq(roles.id, id))
    ];
    if (typeof db.batch === "function") {
      await db.batch(ops);
    } else {
      for (const op of ops) await op;
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.get("/managers", async (c) => {
  const db = await createDbClient(c.env.DB);
  const allAdmins = await db.select({
    id: admins.id,
    username: admins.username,
    createdAt: admins.createdAt
  }).from(admins).all();
  const managersWithRoles = await Promise.all(allAdmins.map(async (admin2) => {
    const userRoles = await db.select({
      id: roles.id,
      name: roles.name,
      tenantId: adminsToRoles.tenantId
    }).from(adminsToRoles).innerJoin(roles, eq(adminsToRoles.roleId, roles.id)).where(eq(adminsToRoles.adminId, admin2.id));
    return { ...admin2, roles: userRoles };
  }));
  return c.json(managersWithRoles);
});
rbac.get("/managers/:id", async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = c.req.param("id");
  const admin2 = await db.select({
    id: admins.id,
    username: admins.username,
    createdAt: admins.createdAt
  }).from(admins).where(eq(admins.id, id)).get();
  if (!admin2) return c.json({ error: "管理员不存在" }, 404);
  const userRoles = await db.select({
    id: roles.id,
    name: roles.name,
    tenantId: adminsToRoles.tenantId
  }).from(adminsToRoles).innerJoin(roles, eq(adminsToRoles.roleId, roles.id)).where(eq(adminsToRoles.adminId, id));
  return c.json({ ...admin2, roles: userRoles });
});
rbac.post("/managers", async (c) => {
  const db = await createDbClient(c.env.DB);
  const { username, password, roleIds } = await c.req.json();
  const hashedPassword = await passwordHasher.hash(password);
  const adminId = generateId(15);
  try {
    const ops = [
      db.insert(admins).values({ id: adminId, username, hashedPassword })
    ];
    if (roleIds && roleIds.length > 0) {
      ops.push(
        db.insert(adminsToRoles).values(
          roleIds.map((rid) => ({ adminId, roleId: rid }))
        )
      );
    }
    if (typeof db.batch === "function") {
      await db.batch(ops);
    } else {
      for (const op of ops) await op;
    }
    return c.json({ id: adminId, username });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.patch("/managers/:id", async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = c.req.param("id");
  const { username, password, roleIds } = await c.req.json();
  try {
    const { adminAuth } = await getAuthInstances(c.env.DB);
    const authHeader = c.req.header("Cookie");
    const sessionId = adminAuth.readSessionCookie(authHeader ?? "");
    let isSelf = false;
    if (sessionId) {
      const { user } = await adminAuth.validateSession(sessionId);
      if (user?.id === id) {
        isSelf = true;
      }
    }
    if (id === "super-admin-01" && !isSelf) {
      return c.json({ error: "系统初始超级管理员账号（super-admin-01）除其本人外，禁止任何其他用户进行修改。" }, 403);
    }
    if (isSelf && roleIds !== void 0) {
      const currentRoles = await db.select({ roleId: adminsToRoles.roleId }).from(adminsToRoles).where(eq(adminsToRoles.adminId, id));
      const currentIds = currentRoles.map((r) => r.roleId).sort().join(",");
      const targetIds = [...roleIds].sort().join(",");
      if (currentIds !== targetIds) {
        return c.json({ error: "出于系统安全考虑，禁止通过后台修改当前登录账号的权限分配。如需调整权限，请联系其他超级管理员。" }, 400);
      }
    }
    if (id === "super-admin-01" && roleIds !== void 0) {
      const currentRoles = await db.select({ roleId: adminsToRoles.roleId }).from(adminsToRoles).where(eq(adminsToRoles.adminId, id));
      const currentIds = currentRoles.map((r) => r.roleId).sort().join(",");
      const targetIds = [...roleIds].sort().join(",");
      if (currentIds !== targetIds) {
        return c.json({ error: "系统初始超级管理员角色不可更改。" }, 403);
      }
    }
    const ops = [];
    const updateData = {};
    if (username && username.trim() !== "") {
      updateData.username = username;
    }
    if (password && password.trim() !== "") {
      const hashedPassword = await passwordHasher.hash(password);
      updateData.hashedPassword = hashedPassword;
    }
    if (Object.keys(updateData).length > 0) {
      ops.push(db.update(admins).set(updateData).where(eq(admins.id, id)));
    }
    if (roleIds && !isSelf) {
      ops.push(db.delete(adminsToRoles).where(eq(adminsToRoles.adminId, id)));
      if (roleIds.length > 0) {
        ops.push(
          db.insert(adminsToRoles).values(
            roleIds.map((rid) => ({ adminId: id, roleId: rid }))
          )
        );
      }
    }
    if (ops.length === 0) return c.json({ message: "No changes provided or changes not allowed" });
    if (typeof db.batch === "function") {
      await db.batch(ops);
    } else {
      for (const op of ops) await op;
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.delete("/managers/:id", async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = c.req.param("id");
  if (id === "super-admin-01") {
    return c.json({ error: "系统初始超级管理员不可删除" }, 403);
  }
  try {
    const { adminAuth } = await getAuthInstances(c.env.DB);
    const authHeader = c.req.header("Cookie");
    const sessionId = adminAuth.readSessionCookie(authHeader ?? "");
    if (sessionId) {
      const { user } = await adminAuth.validateSession(sessionId);
      if (user?.id === id) {
        return c.json({ error: "无法删除当前正在登录的账号" }, 400);
      }
    }
    const runDeleteOps = async (includeSiteAccess) => {
      const ops = [
        db.delete(adminsToRoles).where(eq(adminsToRoles.adminId, id)),
        ...includeSiteAccess ? [db.delete(adminSiteAccess).where(eq(adminSiteAccess.adminId, id))] : [],
        db.delete(adminSessions).where(eq(adminSessions.userId, id)),
        db.delete(admins).where(eq(admins.id, id))
      ];
      if (typeof db.batch === "function") {
        await db.batch(ops);
      } else {
        for (const op of ops) await op;
      }
    };
    try {
      await runDeleteOps(true);
    } catch (err) {
      if (String(err?.message || "").includes("no such table: admin_site_access")) {
        await runDeleteOps(false);
      } else {
        throw err;
      }
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
rbac.get("/models", requirePermission(["models.view", "models.manage", "collections.manage.view", "collections.manage", "api.manage.view", "api.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const allModels = await db.select().from(models).all();
  return c.json(allModels);
});
rbac.post("/models", requirePermission(["models.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const body = await c.req.json();
  const { name, slug, fieldsJson, description } = body;
  try {
    const normalizedFields = typeof fieldsJson === "string" ? JSON.parse(fieldsJson) : fieldsJson;
    const newModel = await DynamicSchemaLifecycleService.createModelDefinition(db, {
      name,
      slug,
      fieldsJson: normalizedFields,
      description
    });
    scheduleBackgroundTask(c, DynamicSchemaRuntimeSyncService.regenerateSchemaContext(c.env));
    return c.json(newModel);
  } catch (err) {
    console.error("❌ [RBAC] 创建模型失败:", err);
    const message = err.message || "创建模型失败";
    const status = message.includes("已存在") ? 409 : message.includes("不合法") ? 400 : 500;
    return c.json({ error: message }, status);
  }
});
rbac.patch("/models/:id", requirePermission(["models.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  const { name, fieldsJson, description } = await c.req.json();
  try {
    const result = await DynamicSchemaLifecycleService.updateModelDefinitionById(db, id, {
      name,
      fieldsJson,
      description
    });
    scheduleBackgroundTask(c, DynamicSchemaRuntimeSyncService.regenerateSchemaContext(c.env));
    return c.json(result);
  } catch (err) {
    console.error("❌ [RBAC] 更新模型失败:", err);
    const message = err.message || "更新模型失败";
    const status = message.includes("模型不存在") ? 404 : message.includes("禁止") ? 400 : 500;
    return c.json({ error: message }, status);
  }
});
rbac.delete("/models/:id", requirePermission(["models.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  try {
    await DynamicSchemaLifecycleService.deleteModelById(db, id);
    scheduleBackgroundTask(c, DynamicSchemaRuntimeSyncService.regenerateSchemaContext(c.env));
    return c.json({ success: true });
  } catch (err) {
    console.error("❌ [RBAC] 删除模型失败:", err);
    const message = err.message || "删除模型失败";
    const status = message.includes("模型不存在") ? 404 : message.includes("无法删除模型") ? 400 : 500;
    return c.json({ error: message }, status);
  }
});
rbac.get("/collections", requirePermission(["collections.manage.view", "collections.manage", "api.manage.view", "api.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const results = await db.select({
    id: collections.id,
    name: collections.name,
    slug: collections.slug,
    modelId: collections.modelId,
    description: collections.description,
    icon: collections.icon,
    sort: collections.sort,
    menuGroup: collections.menuGroup,
    menuOrder: collections.menuOrder,
    parentId: collections.parentId,
    relationSettings: collections.relationSettings,
    fieldConfig: collections.fieldConfig,
    metadata: collections.metadata,
    createdAt: collections.createdAt,
    modelName: models.name
  }).from(collections).innerJoin(models, eq(collections.modelId, models.id)).all();
  return c.json(results);
});
rbac.post("/collections", requirePermission(["collections.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const body = await c.req.json();
  const {
    name,
    slug,
    modelId,
    description,
    icon,
    sort,
    menuGroup,
    menuOrder,
    relationSettings,
    fieldConfig,
    metadata,
    parentId
  } = body;
  try {
    const newCollection = await DynamicSchemaLifecycleService.createCollectionDefinition(db, {
      name,
      slug,
      modelId,
      description,
      icon,
      sort: sort || 0,
      menuGroup,
      menuOrder: menuOrder || 0,
      parentId: parentId || null,
      relationSettings: relationSettings || {},
      fieldConfig: fieldConfig ?? relationSettings ?? {},
      // progressive fallback
      metadata: metadata ?? {}
    });
    await DynamicSchemaRuntimeSyncService.syncPermissionRegistry(db);
    if (c.env.NS_CONFIG) {
      scheduleBackgroundTask(c, c.env.NS_CONFIG.delete("admin_colls"));
    }
    scheduleBackgroundTask(c, DynamicSchemaRuntimeSyncService.regenerateSchemaContext(c.env));
    return c.json(newCollection);
  } catch (err) {
    console.error("❌ [RBAC] 创建业务集合失败:", err);
    const message = err.message || "内部服务器错误";
    const status = message.includes("已存在") ? 409 : message.includes("不存在") ? 404 : 500;
    return c.json({ error: message }, status);
  }
});
rbac.patch("/collections/:id", requirePermission(["collections.manage", "api.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  const body = await c.req.json();
  const { name, description, icon, sort, menuGroup, menuOrder, relationSettings, fieldConfig, metadata, parentId } = body;
  try {
    await DynamicSchemaLifecycleService.updateCollectionDefinitionById(db, id, {
      name,
      description,
      icon,
      sort,
      menuGroup,
      menuOrder,
      relationSettings,
      fieldConfig,
      metadata,
      parentId: parentId === void 0 ? void 0 : parentId
    });
    if (c.env.NS_CONFIG) {
      scheduleBackgroundTask(c, c.env.NS_CONFIG.delete("admin_colls"));
    }
    scheduleBackgroundTask(c, DynamicSchemaRuntimeSyncService.regenerateSchemaContext(c.env));
    return c.json({ success: true });
  } catch (err) {
    const message = err.message || "更新集合失败";
    const status = message.includes("集合不存在") ? 404 : 500;
    return c.json({ error: message }, status);
  }
});
rbac.patch("/collections/group/:oldName", requirePermission(["collections.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const oldName = decodeURIComponent(c.req.param("oldName"));
  const { newName, icon } = await c.req.json();
  try {
    const updateData = {};
    if (newName) updateData.menuGroup = newName;
    if (icon) updateData.icon = icon;
    if (Object.keys(updateData).length === 0) {
      return c.json({ error: "没有提供更新数据" }, 400);
    }
    await db.update(collections).set(updateData).where(eq(collections.menuGroup, oldName)).run();
    try {
      if (c.env.NS_CONFIG) {
        await c.env.NS_CONFIG.delete("admin_colls");
      }
    } catch {
    }
    try {
      await DynamicSchemaRuntimeSyncService.regenerateSchemaContext(c.env);
    } catch {
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message || "更新失败" }, 500);
  }
});
rbac.delete("/collections/:id", requirePermission(["collections.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  try {
    await DynamicSchemaLifecycleService.deleteCollectionById(db, id);
    await DynamicSchemaRuntimeSyncService.syncPermissionRegistry(db);
    if (c.env.NS_CONFIG) {
      scheduleBackgroundTask(c, c.env.NS_CONFIG.delete("admin_colls"));
    }
    scheduleBackgroundTask(c, DynamicSchemaRuntimeSyncService.regenerateSchemaContext(c.env));
    return c.json({ success: true });
  } catch (err) {
    console.error("❌ [RBAC] 删除集合失败:", err);
    const message = err.message || "删除集合失败";
    const status = message.includes("集合不存在") ? 404 : message.includes("数据记录") ? 409 : 500;
    return c.json({ error: message }, status);
  }
});
function transformMediaUrl(url, domains) {
  if (!url || !domains?.img_domain) return url;
  if (url.startsWith("http")) return url;
  const internalPrefix = "/api/v1/media/file/";
  if (url.startsWith(internalPrefix)) {
    const key = url.replace(internalPrefix, "");
    return `https://${domains.img_domain}/${key}`;
  }
  return url;
}
function transformApiUrl(url, domains) {
  if (!url || !domains?.api_domain) return url;
  if (url.startsWith("http")) return url;
  const apiPrefix = "/api/";
  if (url.startsWith(apiPrefix)) {
    return `https://${domains.api_domain}${url}`;
  }
  return url;
}
function transformUrlsInData(data, domains) {
  if (!data || !domains) return data;
  if (Array.isArray(data)) {
    return data.map((item) => transformUrlsInData(item, domains));
  }
  if (data !== null && typeof data === "object" && Object.prototype.toString.call(data) === "[object Object]") {
    const result = {};
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "string") {
        let transformed = transformMediaUrl(value, domains);
        transformed = transformApiUrl(transformed, domains);
        result[key] = transformed;
      } else if (value !== null && typeof value === "object") {
        result[key] = transformUrlsInData(value, domains);
      } else {
        result[key] = value;
      }
    }
    return result;
  }
  return data;
}
const HIDDEN_FIELDS_BY_COLLECTION = {
  b2b_product: ["entities", "applications", "advantages", "related_resources"],
  article: ["entities", "key_takeaways", "faq_generated", "related_industries", "related_products"],
  case_study: ["entities"],
  industry: ["entities"],
  resource: ["entities", "related_products", "related_articles"],
  entity: ["taxonomy_ids", "related_articles", "related_resources", "related_products", "related_industries"],
  page: ["entities", "page_type", "organization_ref", "blocks", "featured"],
  site_settings: ["canonical_domain"],
  company_info: ["certifications", "awards", "entity_keywords", "same_as", "social_links", "service_regions"]
};
function shouldHideAdminField(collectionSlug, fieldName, fields = []) {
  const modelField = fields.find((field) => field.name === fieldName);
  if (modelField?.ui?.hidden) {
    return true;
  }
  return (HIDDEN_FIELDS_BY_COLLECTION[collectionSlug] || []).includes(fieldName);
}
function filterAdminModelFields(collectionSlug, fields = []) {
  return fields.filter((field) => !shouldHideAdminField(collectionSlug, field.name, fields));
}
const TITLE_CANDIDATES = [
  "title",
  "name",
  "entity_name",
  "company_name",
  "question",
  "cluster_name",
  "source_name",
  "fact_name",
  "site_name"
];
function applyAutoManagedFields(inputData, fields = [], existingData = {}) {
  const mergedData = {
    ...existingData,
    ...inputData
  };
  (pickFirstFilledValue(mergedData, TITLE_CANDIDATES) || "").trim();
  if (hasField(fields, "reading_time")) {
    const readingTime = estimateReadingTime(mergedData.content);
    if (readingTime !== void 0) {
      mergedData.reading_time = readingTime;
    }
  }
  return mergedData;
}
function applyCollectionFieldGenerators(inputData, fields = [], fieldConfig = {}, collectionSlug, entityId) {
  const nextData = { ...inputData };
  for (const field of fields) {
    const generation = fieldConfig?.[field.name]?.generation;
    if (!generation?.enabled || !generation.preset || generation.preset === "manual") {
      continue;
    }
    if (generation.preset === "canonical_path") {
      if (!entityId) {
        continue;
      }
      const sourceField = (generation.sourceField || "").trim();
      const slugSource = sourceField ? nextData[sourceField] : pickFirstFilledValue(nextData, TITLE_CANDIDATES);
      nextData[field.name] = buildFinalUrlSlug(collectionSlug, entityId, slugSource);
      continue;
    }
    if (generation.preset === "template_text") {
      if (!generation.template) {
        continue;
      }
      nextData[field.name] = resolveTemplateText(String(generation.template), nextData, collectionSlug, entityId);
    }
  }
  return nextData;
}
function hasField(fields, name) {
  return fields.some((field) => field.name === name);
}
function pickFirstFilledValue(data, keys) {
  for (const key of keys) {
    const value = data[key];
    if (value !== null && value !== void 0 && String(value).trim().length > 0) {
      return String(value).trim();
    }
  }
  return "";
}
function buildSlug(input, fallback = "item") {
  const normalized = String(input || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/[_/]+/g, " ").replace(/\s+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
  return normalized || fallback;
}
function buildFinalUrlSlug(collectionSlug, entityId, slugSegment) {
  const normalizedCollection = String(collectionSlug || "").trim().replace(/^\/+|\/+$/g, "") || "item";
  const normalizedId = String(entityId || "").trim();
  const normalizedSlug = buildSlug(slugSegment, normalizedId || "item");
  return `/${normalizedCollection}/${normalizedId || "item"}-${normalizedSlug}`;
}
function estimateReadingTime(content) {
  const plainText = stripHtml(String(content || "")).replace(/\s+/g, " ").trim();
  if (!plainText) {
    return void 0;
  }
  const wordCount = plainText.split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}
function stripHtml(value) {
  return value.replace(/<[^>]*>/g, " ");
}
function resolveTemplateText(template, data, collectionSlug, entityId) {
  return String(template || "").replace(/\{:([^}]+)\}/g, (_, token) => {
    if (token === "id") return String(entityId || "");
    if (token === "collection") return String(collectionSlug || "");
    if (token === "locale") return String(data.locale || "");
    if (token === "now") return (/* @__PURE__ */ new Date()).toISOString();
    if (token.startsWith("field:")) {
      const fieldName = token.slice("field:".length);
      return String(data[fieldName] ?? "");
    }
    return "";
  });
}
const entitiesRouter = new Hono();
const PAGE_TASK_IDEMPOTENCY_PREFIX = "page_task_idempotency:";
function buildPageTaskIdempotencyStorageKey(collectionId, idempotencyKey) {
  return `${PAGE_TASK_IDEMPOTENCY_PREFIX}${collectionId}:${idempotencyKey}`;
}
function parsePageTaskIdempotencyRecord(rawValue) {
  try {
    return JSON.parse(rawValue);
  } catch {
    return null;
  }
}
function unwrapEntityMutationPayload(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return input;
  }
  const nestedPayload = input.data && typeof input.data === "object" && !Array.isArray(input.data) && input.data || input.payload && typeof input.payload === "object" && !Array.isArray(input.payload) && input.payload || input.body && typeof input.body === "object" && !Array.isArray(input.body) && input.body || input.dataJson && typeof input.dataJson === "object" && !Array.isArray(input.dataJson) && input.dataJson || null;
  if (!nestedPayload) {
    return input;
  }
  console.log("🤖 [Entities Mutation Autocure] Unwrapped nested payload envelope for entity mutation.");
  return { ...nestedPayload };
}
function buildAdminFieldsWithSettings(collectionSlug, fields, actualConfig = {}) {
  return filterAdminModelFields(collectionSlug, fields).map((field) => {
    const setting = actualConfig[field.name];
    const templateConfig = setting?.template_apply ? {
      sourceField: setting.template_apply.source_field,
      targetField: setting.template_apply.target_field,
      defaultMode: setting.template_apply.default_mode || "fill_missing"
    } : void 0;
    let mergedField = { ...field };
    if (["radio", "select", "multi_select", "checkbox"].includes(field.type) && setting?.options) {
      mergedField = {
        ...mergedField,
        options: setting.options,
        ...templateConfig ? { templateConfig } : {}
      };
    }
    if (setting || field.type === "image" || field.type === "multi_image" || field.type === "reference") {
      const targetSlug = setting?.target_slug || setting?.targetCollectionSlug || (field.type === "image" || field.type === "multi_image" ? "media_library" : null);
      const allowedCollections = setting?.allowedCollections;
      if (targetSlug || allowedCollections !== void 0 || templateConfig) {
        const relationConfig = { ...field.relationConfig || {} };
        if (targetSlug) {
          relationConfig.collectionSlug = targetSlug;
          relationConfig.displayField = setting?.display_field || setting?.displayField || relationConfig.displayField || "name";
        }
        if (allowedCollections !== void 0) {
          relationConfig.allowedCollections = allowedCollections;
        }
        return {
          ...mergedField,
          ...templateConfig ? { templateConfig } : {},
          relationConfig: Object.keys(relationConfig).length > 0 ? relationConfig : void 0,
          isMedia: targetSlug ? targetSlug === "media_library" || targetSlug.includes("image") || targetSlug.includes("file") : mergedField.isMedia
        };
      }
    }
    return templateConfig ? { ...mergedField, templateConfig } : mergedField;
  });
}
const dynamicGuard = async (c, next) => {
  let collectionSlug = c.req.param("slug");
  if (collectionSlug?.startsWith("/")) collectionSlug = collectionSlug.substring(1);
  const db = await createDbClient(c.env.DB);
  let result = await db.select({
    collection: collections,
    model: models
  }).from(collections).innerJoin(models, eq(collections.modelId, models.id)).where(eq(collections.slug, collectionSlug)).get();
  if (!result && typeof collectionSlug === "string") {
    let correctedSlug = collectionSlug.toLowerCase().trim();
    if (correctedSlug.endsWith("ies")) {
      correctedSlug = correctedSlug.slice(0, -3) + "y";
    } else if (correctedSlug.endsWith("ses")) {
      correctedSlug = correctedSlug.slice(0, -2);
    } else if (correctedSlug.endsWith("s") && !correctedSlug.endsWith("ss")) {
      correctedSlug = correctedSlug.slice(0, -1);
    }
    if (correctedSlug !== collectionSlug) {
      console.log(`🤖 [Entities dynamicGuard] Auto-correcting plural slug "${collectionSlug}" -> "${correctedSlug}"`);
      result = await db.select({
        collection: collections,
        model: models
      }).from(collections).innerJoin(models, eq(collections.modelId, models.id)).where(eq(collections.slug, correctedSlug)).get();
      if (result) {
        collectionSlug = correctedSlug;
      }
    }
  }
  if (!result) {
    return c.json({ error: `Collection [${collectionSlug}] not found` }, 404);
  }
  let action = "view";
  if (c.req.method === "POST") action = "edit";
  if (c.req.method === "PATCH") action = "edit";
  if (c.req.method === "DELETE") action = "delete";
  const requiredPerm = `collection:${collectionSlug}:${action}`;
  c.get("user");
  const isAdmin = c.get("isAdmin");
  const userRoles = c.get("userRoles") || [];
  if (!isAdmin && result.collection.permissionConfig) {
    const config = result.collection.permissionConfig;
    const allowed = userRoles.some((role) => {
      const roleCfg = config[role];
      if (!roleCfg) return false;
      if (action === "view") return roleCfg.canView !== false;
      if (action === "edit") {
        return c.req.method === "POST" ? roleCfg.canCreate !== false : roleCfg.canUpdate !== false;
      }
      if (action === "delete") return roleCfg.canDelete !== false;
      return true;
    });
    if (!allowed && !isAdmin) {
      return c.json({ error: `权限不足: 该集合已禁止您所属角色进行 [${action}] 操作` }, 403);
    }
    const ownerOnly = userRoles.some((role) => config[role]?.ownerOnly);
    if (ownerOnly) {
      c.set("ownerOnlyMode", true);
    }
  }
  c.set("currentCollection", result.collection);
  c.set("currentModel", result.model);
  return requirePermission(requiredPerm)(c, next);
};
async function populateEntities(db, entitiesList, fields, fieldConfig = {}, domains = null) {
  const mergedConfigs = {};
  fields.filter((f) => f.type === "relation" || f.type === "relation_single" || f.type === "relation_multi").filter((f) => f.relationConfig?.collectionSlug).forEach((f) => {
    mergedConfigs[f.name] = f.relationConfig;
  });
  if (fieldConfig) {
    Object.entries(fieldConfig).forEach(([fieldName, config]) => {
      if (config.target_slug || config.targetCollectionSlug) {
        mergedConfigs[fieldName] = {
          collectionSlug: config.target_slug || config.targetCollectionSlug,
          displayField: config.display_field || config.displayField || "name"
        };
      }
    });
  }
  const enumFields = fields.filter((f) => ["radio", "checkbox", "select", "multi_select"].includes(f.type));
  const fieldNames = Object.keys(mergedConfigs);
  const mapEnumValues = (data, displayValues) => {
    enumFields.forEach((f) => {
      const config = fieldConfig[f.name];
      if (config?.options) {
        const val = data[f.name];
        if (val !== void 0 && val !== null && val !== "") {
          const optionsMap = Object.fromEntries(config.options.map((opt) => [String(opt.key), opt.value]));
          if (Array.isArray(val)) {
            displayValues[f.name] = val.map((v) => optionsMap[String(v)] || v).join(", ");
          } else {
            displayValues[f.name] = optionsMap[String(val)] || val;
          }
        }
      }
    });
  };
  if (fieldNames.length === 0) {
    return entitiesList.map((r) => {
      let data = typeof r.dataJson === "string" ? JSON.parse(r.dataJson) : r.dataJson;
      data = transformUrlsInData(data, domains);
      const displayValues = {};
      mapEnumValues(data, displayValues);
      return {
        ...data,
        id: r.id,
        locale: r.locale,
        translationGroup: r.translationGroup,
        createdBy: r.createdBy,
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
        collectionId: r.collectionId,
        metadata: typeof r.metadata === "string" ? JSON.parse(r.metadata) : r.metadata,
        _displayValues: displayValues
      };
    });
  }
  const targetSlugs = [...new Set(Object.values(mergedConfigs).map((c) => c.collectionSlug))];
  const targetCollections = await db.select().from(collections).where(inArray(collections.slug, targetSlugs)).all();
  const slugToIdMap = Object.fromEntries(targetCollections.map((c) => [c.slug, c.id]));
  const targetIdsByCollection = {};
  const parsedEntities = entitiesList.map((entity) => {
    let data = typeof entity.dataJson === "string" ? JSON.parse(entity.dataJson) : entity.dataJson;
    data = transformUrlsInData(data, domains);
    return { entity, data };
  });
  parsedEntities.forEach(({ data }) => {
    for (const fieldName of fieldNames) {
      const targetId = data[fieldName];
      if (!targetId) continue;
      const ids = Array.isArray(targetId) ? targetId : [targetId];
      const config = mergedConfigs[fieldName];
      const targetCollId = slugToIdMap[config.collectionSlug];
      if (!targetCollId) continue;
      if (!targetIdsByCollection[targetCollId]) {
        targetIdsByCollection[targetCollId] = /* @__PURE__ */ new Set();
      }
      ids.forEach((id) => {
        const parsedId = parseInt(id);
        if (!isNaN(parsedId)) {
          targetIdsByCollection[targetCollId].add(parsedId);
        }
      });
    }
  });
  const preloadedTargets = {};
  const queryPromises = Object.entries(targetIdsByCollection).map(async ([collIdStr, idSet]) => {
    const collId = parseInt(collIdStr);
    const ids = Array.from(idSet);
    if (ids.length === 0) return;
    const chunkSize = 100;
    for (let i = 0; i < ids.length; i += chunkSize) {
      const chunk = ids.slice(i, i + chunkSize);
      const results = await db.select().from(entities).where(and(
        eq(entities.collectionId, collId),
        inArray(entities.id, chunk)
      )).all();
      results.forEach((r) => {
        preloadedTargets[`${collId}_${r.id}`] = typeof r.dataJson === "string" ? JSON.parse(r.dataJson) : r.dataJson;
      });
    }
  });
  await Promise.all(queryPromises);
  return parsedEntities.map(({ entity, data }) => {
    const displayValues = {};
    for (const fieldName of fieldNames) {
      const targetId = data[fieldName];
      if (!targetId) continue;
      const config = mergedConfigs[fieldName];
      const targetCollId = slugToIdMap[config.collectionSlug];
      if (!targetCollId) continue;
      const displayField = config.displayField || "name";
      if (Array.isArray(targetId)) {
        displayValues[fieldName] = targetId.map((id) => {
          const tData = preloadedTargets[`${targetCollId}_${id}`];
          return tData ? tData[displayField] || `ID: ${id}` : `[已删除] ID: ${id}`;
        }).join(", ");
      } else {
        const tData = preloadedTargets[`${targetCollId}_${targetId}`];
        displayValues[fieldName] = tData ? tData[displayField] || `ID: ${targetId}` : `[已删除] ID: ${targetId}`;
      }
    }
    mapEnumValues(data, displayValues);
    return {
      ...data,
      id: entity.id,
      locale: entity.locale,
      translationGroup: entity.translationGroup,
      createdBy: entity.createdBy,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      collectionId: entity.collectionId,
      metadata: typeof entity.metadata === "string" ? JSON.parse(entity.metadata) : entity.metadata,
      _displayValues: displayValues
    };
  });
}
async function validateRelations(db, rawData, fields, fieldConfig = {}, depth = 0) {
  if (depth > 0) return;
  const data = typeof rawData === "string" ? JSON.parse(rawData) : rawData;
  const normalizeRelationValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return value.id ?? value.url ?? null;
    }
    return value;
  };
  const mergedConfigs = {};
  fields.filter((f) => f.type === "relation" || f.type === "relation_single" || f.type === "relation_multi").filter((f) => f.relationConfig?.collectionSlug).forEach((f) => {
    mergedConfigs[f.name] = { ...f.relationConfig, label: f.label };
  });
  if (fieldConfig) {
    Object.entries(fieldConfig).forEach(([fieldName, config]) => {
      const field = fields.find((f) => f.name === fieldName);
      if (config.target_slug || config.targetCollectionSlug) {
        mergedConfigs[fieldName] = {
          collectionSlug: config.target_slug || config.targetCollectionSlug,
          label: field?.label || fieldName,
          multiple: field?.type === "relation_multi" || field?.multiple
          // 透传多选配置
        };
      }
    });
  }
  fields.filter((f) => f.type === "image" || f.type === "multi_image").forEach((f) => {
    if (!mergedConfigs[f.name]) {
      mergedConfigs[f.name] = {
        collectionSlug: "media_library",
        label: f.label,
        multiple: f.type === "multi_image" || f.multiple
      };
    }
  });
  const referenceFields = fields.filter((f) => f.type === "reference");
  for (const field of referenceFields) {
    const rawVal = data[field.name];
    if (!rawVal) continue;
    const items = Array.isArray(rawVal) ? rawVal : [rawVal];
    for (const item of items) {
      if (!item || typeof item !== "object") continue;
      if (item.type === "internal" && item.refType) {
        const targetColl = await db.select().from(collections).where(eq(collections.slug, item.refType)).get();
        if (!targetColl) {
          throw new Error(`字段 [${field.label}] 引用的目标集合 [${item.refType}] 不存在`);
        }
        if (item.refId) {
          const exists = await db.select().from(entities).where(and(
            eq(entities.id, parseInt(item.refId)),
            eq(entities.collectionId, targetColl.id)
          )).get();
          if (!exists) {
            throw new Error(`字段 [${field.label}] 引用的 ID [${item.refId}] 在目标集合 [${item.refType}] 中不存在`);
          }
        }
      }
    }
  }
  for (const [fieldName, config] of Object.entries(mergedConfigs)) {
    const rawVal = data[fieldName];
    if (!rawVal) continue;
    if (config.collectionSlug === "media_library") {
      continue;
    }
    const ids = (Array.isArray(rawVal) ? rawVal : [rawVal]).map(normalizeRelationValue).filter((item) => item !== null && item !== void 0 && item !== "");
    const targetColl = await db.select().from(collections).where(eq(collections.slug, config.collectionSlug)).get();
    if (!targetColl) {
      if (config.collectionSlug === "media_library") continue;
      throw new Error(`关联的目标集合 [${config.collectionSlug}] 不存在`);
    }
    for (const targetId of ids) {
      const exists = await db.select().from(entities).where(and(
        eq(entities.id, parseInt(targetId)),
        eq(entities.collectionId, targetColl.id)
      )).get();
      if (!exists) {
        throw new Error(`字段 [${config.label}] 关联的 ID [${targetId}] 在目标集合 [${config.collectionSlug}] 中不存在`);
      }
    }
  }
}
function sanitizeAndValidateEnums(data, fields, fieldConfig = {}) {
  const errors = [];
  const normalizeOptionKeys = (options) => {
    return options.map((opt) => {
      if (opt && typeof opt === "object") {
        return String(opt.key ?? opt.value ?? "");
      }
      return String(opt);
    }).filter(Boolean);
  };
  fields.forEach((field) => {
    const val = data[field.name];
    if (val === void 0 || val === null) return;
    if (field.type === "checkbox" || field.type === "multi_select" || field.type === "relation_multi" || field.type === "multi_image" || field.type === "multi_file") {
      if (Array.isArray(val)) {
        if (field.type === "multi_image") {
          const deduped = /* @__PURE__ */ new Map();
          val.forEach((item) => {
            const key = typeof item === "object" && item !== null ? String(item.url || item.id || "") : String(item || "");
            if (key && !deduped.has(key)) {
              deduped.set(key, item);
            }
          });
          data[field.name] = Array.from(deduped.values());
        } else {
          data[field.name] = Array.from(new Set(val));
        }
      }
    }
    if (["radio", "select", "multi_select", "checkbox"].includes(field.type)) {
      const config = fieldConfig[field.name];
      const options = config?.options || field.options;
      if (Array.isArray(options) && options.length > 0) {
        const allowedKeys = new Set(normalizeOptionKeys(options));
        const valuesToCheck = Array.isArray(data[field.name]) ? data[field.name] : [data[field.name]];
        for (const v of valuesToCheck) {
          if (!allowedKeys.has(String(v))) {
            errors.push(`字段 [${field.label}] 提交了非法的选项值: ${v}`);
          }
        }
      }
    }
  });
  return { valid: errors.length === 0, errors };
}
async function checkCircularRelation(db, currentId, targetParentId, collectionId, parentField) {
  if (!targetParentId) return;
  let checkId = parseInt(targetParentId);
  const visited = /* @__PURE__ */ new Set();
  while (checkId) {
    if (checkId === currentId) {
      throw new Error(`检测到循环引用：不能将分类的父级指向其自身或其子分类下的节点，这将导致数据结构逻辑错误。`);
    }
    if (visited.has(checkId)) break;
    visited.add(checkId);
    const parentEntity = await db.select().from(entities).where(and(
      eq(entities.id, checkId),
      eq(entities.collectionId, collectionId)
    )).get();
    if (!parentEntity) break;
    const parentData = typeof parentEntity.dataJson === "string" ? JSON.parse(parentEntity.dataJson) : parentEntity.dataJson;
    const nextParentId = parentData[parentField];
    if (nextParentId && nextParentId !== checkId) {
      checkId = parseInt(nextParentId);
    } else {
      break;
    }
  }
}
function parseEntityDataJson$1(record) {
  if (!record) return {};
  if (typeof record.dataJson === "string") {
    try {
      return JSON.parse(record.dataJson);
    } catch {
      return {};
    }
  }
  return record.dataJson && typeof record.dataJson === "object" ? record.dataJson : {};
}
function normalizeParentScopeValue(value) {
  if (value === void 0 || value === null) return null;
  const normalized = String(value).trim();
  return normalized ? normalized : null;
}
function normalizeScopeArrayValue(value) {
  if (!Array.isArray(value) || value.length === 0) return "";
  return value.map((item) => {
    if (item === void 0 || item === null) return "";
    if (typeof item === "object") {
      return String(item.id ?? item.value ?? item.refId ?? "").trim();
    }
    return String(item).trim();
  }).filter(Boolean).sort().join(",");
}
function getTreeSiblingScopeKey(data, fields = []) {
  const parentScope = `parent:${String(normalizeParentScopeValue(data?.parent_id))}`;
  const hasMenuScopeField = fields.some((field) => field?.name === "nav_menu_ids");
  if (!hasMenuScopeField) {
    return parentScope;
  }
  return `${parentScope}|nav:${normalizeScopeArrayValue(data?.nav_menu_ids)}`;
}
function hasSortOrderField(fields = []) {
  const ordering = getReservedListOrdering(fields);
  return ordering?.key === "sort_order";
}
function getCollectionPresentationMode(collection) {
  return collection?.metadata?.presentationMode === "single_form" ? "single_form" : "list";
}
entitiesRouter.get("/:slug", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const collection = c.get("currentCollection");
  const model = c.get("currentModel");
  const isAdmin = c.get("isAdmin");
  const ownerOnly = c.get("ownerOnlyMode");
  const user = c.get("user");
  const page = Math.max(1, parseInt(c.req.query("page") || "1"));
  const pageSize = Math.min(100, Math.max(1, parseInt(c.req.query("pageSize") || "20")));
  const search = c.req.query("search") || "";
  const localeFilter = c.req.query("locale") || "";
  const translationGroup = c.req.query("translationGroup") || "";
  let whereClause = eq(entities.collectionId, collection.id);
  if (ownerOnly && !isAdmin && user) {
    whereClause = and(whereClause, eq(entities.createdBy, user.id));
  }
  if (localeFilter && localeFilter !== "all") {
    whereClause = and(whereClause, eq(entities.locale, localeFilter));
  }
  if (translationGroup) {
    whereClause = and(whereClause, eq(entities.translationGroup, translationGroup));
  }
  if (search) {
    whereClause = and(whereClause, sql`${entities.dataJson} LIKE ${"%" + search + "%"}`);
  }
  const countResult = await db.select({ count: sql`count(*)` }).from(entities).where(whereClause).get();
  const total = countResult?.count || 0;
  const listOrdering = getReservedListOrdering(model.fieldsJson);
  const rawResults = await db.select().from(entities).where(whereClause).orderBy(
    listOrdering ? sql`COALESCE(CAST(json_extract(${entities.dataJson}, ${`$.${listOrdering.key}`}) AS INTEGER), ${Number(listOrdering.defaultValue ?? 0)}) desc, ${entities.createdAt} desc, ${entities.id} desc` : sql`${entities.createdAt} desc`
  ).limit(pageSize).offset((page - 1) * pageSize).all();
  const actualConfig = collection.fieldConfig || collection.relationSettings || {};
  const domains = c.get("site_domains");
  const results = await populateEntities(db, rawResults, model.fieldsJson, actualConfig, domains);
  const fieldsWithSettings = buildAdminFieldsWithSettings(collection.slug, model.fieldsJson, actualConfig);
  return c.json({
    data: results,
    model: {
      name: collection.name,
      slug: collection.slug,
      fieldsJson: fieldsWithSettings,
      presentationMode: getCollectionPresentationMode(collection)
    },
    meta: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    }
  });
});
entitiesRouter.get("/:slug/single", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const collection = c.get("currentCollection");
  const model = c.get("currentModel");
  const isAdmin = c.get("isAdmin");
  const ownerOnly = c.get("ownerOnlyMode");
  const user = c.get("user");
  const defaultLanguage = await db.select().from(languages).where(eq(languages.isDefault, true)).get();
  const fallbackLanguage = await db.select().from(languages).where(eq(languages.status, "active")).get();
  const anchorLocale = defaultLanguage?.code || fallbackLanguage?.code || c.env.DEFAULT_LANGUAGE || "en-US";
  const requestedLocale = c.req.query("locale") || anchorLocale;
  let whereClause = eq(entities.collectionId, collection.id);
  if (ownerOnly && !isAdmin && user) {
    whereClause = and(whereClause, eq(entities.createdBy, user.id));
  }
  whereClause = and(whereClause, eq(entities.locale, anchorLocale));
  const listOrdering = getReservedListOrdering(model.fieldsJson);
  const anchorRecord = await db.select().from(entities).where(whereClause).orderBy(
    listOrdering ? sql`COALESCE(CAST(json_extract(${entities.dataJson}, ${`$.${listOrdering.key}`}) AS INTEGER), ${Number(listOrdering.defaultValue ?? 0)}) desc, ${entities.createdAt} desc, ${entities.id} desc` : sql`${entities.createdAt} desc`
  ).limit(1).get();
  const actualConfig = collection.fieldConfig || collection.relationSettings || {};
  const fieldsWithSettings = buildAdminFieldsWithSettings(collection.slug, model.fieldsJson, actualConfig);
  if (!anchorRecord) {
    return c.json({
      data: {
        locale: requestedLocale
      },
      model: {
        name: collection.name,
        slug: collection.slug,
        fieldsJson: fieldsWithSettings,
        presentationMode: getCollectionPresentationMode(collection)
      },
      meta: {
        presentationMode: getCollectionPresentationMode(collection),
        anchorLocale,
        requestedLocale,
        translationGroup: "",
        isEmpty: true
      }
    });
  }
  let resolvedRecord = anchorRecord;
  let translations = [];
  if (anchorRecord.translationGroup) {
    translations = await db.select({
      id: entities.id,
      locale: entities.locale
    }).from(entities).where(and(
      eq(entities.translationGroup, anchorRecord.translationGroup),
      eq(entities.collectionId, collection.id)
    )).all();
    if (requestedLocale !== anchorLocale) {
      const targetWhereBase = and(
        eq(entities.translationGroup, anchorRecord.translationGroup),
        eq(entities.collectionId, collection.id),
        eq(entities.locale, requestedLocale)
      );
      const buildDraftRecord = () => ({
        ...anchorRecord,
        id: void 0,
        locale: requestedLocale,
        dataJson: {},
        createdAt: anchorRecord.createdAt,
        updatedAt: anchorRecord.updatedAt
      });
      if (ownerOnly && !isAdmin && user) {
        resolvedRecord = await db.select().from(entities).where(and(targetWhereBase, eq(entities.createdBy, user.id))).get() || buildDraftRecord();
      } else {
        resolvedRecord = await db.select().from(entities).where(targetWhereBase).get() || buildDraftRecord();
      }
    }
  } else if (requestedLocale !== anchorLocale) {
    resolvedRecord = {
      ...anchorRecord,
      id: void 0,
      locale: requestedLocale,
      dataJson: {},
      createdAt: anchorRecord.createdAt,
      updatedAt: anchorRecord.updatedAt
    };
  }
  const domains = c.get("site_domains");
  const populated = await populateEntities(db, [resolvedRecord], model.fieldsJson, actualConfig, domains);
  const { SeoGeoService: SeoGeoService2 } = await Promise.resolve().then(() => SeoGeoService$1);
  const enrichedData = await SeoGeoService2.enrichWithSeoGeo(db, populated[0], collection.slug);
  return c.json({
    data: {
      ...enrichedData,
      translations
    },
    model: {
      name: collection.name,
      slug: collection.slug,
      fieldsJson: fieldsWithSettings,
      presentationMode: getCollectionPresentationMode(collection)
    },
    meta: {
      presentationMode: getCollectionPresentationMode(collection),
      anchorLocale,
      requestedLocale,
      translationGroup: anchorRecord.translationGroup || "",
      isEmpty: !resolvedRecord?.id
    }
  });
});
entitiesRouter.get("/:slug/:id", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  const collection = c.get("currentCollection");
  const model = c.get("currentModel");
  const isAdmin = c.get("isAdmin");
  const ownerOnly = c.get("ownerOnlyMode");
  const user = c.get("user");
  let whereClause = and(
    eq(entities.id, id),
    eq(entities.collectionId, collection.id)
  );
  if (ownerOnly && !isAdmin && user) {
    whereClause = and(whereClause, eq(entities.createdBy, user.id));
  }
  const result = await db.select().from(entities).where(whereClause).get();
  if (!result) {
    return c.json({ error: "Entity not found" }, 404);
  }
  let translations = [];
  if (result.translationGroup) {
    translations = await db.select({
      id: entities.id,
      locale: entities.locale
    }).from(entities).where(and(
      eq(entities.translationGroup, result.translationGroup),
      eq(entities.collectionId, collection.id)
    )).all();
  }
  const actualConfig = collection.fieldConfig || collection.relationSettings || {};
  const domains = c.get("site_domains");
  const populated = await populateEntities(db, [result], model.fieldsJson, actualConfig, domains);
  const { SeoGeoService: SeoGeoService2 } = await Promise.resolve().then(() => SeoGeoService$1);
  const enrichedData = await SeoGeoService2.enrichWithSeoGeo(db, populated[0], collection.slug);
  const fieldsWithSettings = buildAdminFieldsWithSettings(collection.slug, model.fieldsJson, actualConfig);
  return c.json({
    data: {
      ...enrichedData,
      translations
      // 附带同组译文清单
    },
    model: {
      name: collection.name,
      slug: collection.slug,
      fieldsJson: fieldsWithSettings,
      presentationMode: getCollectionPresentationMode(collection)
    }
  });
});
entitiesRouter.post("/:slug", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const collection = c.get("currentCollection");
  const model = c.get("currentModel");
  const data = unwrapEntityMutationPayload(await c.req.json());
  if (data && data.dataJson && typeof data.dataJson === "object" && !Array.isArray(data.dataJson)) {
    Object.assign(data, data.dataJson);
    delete data.dataJson;
    console.log(`🤖 [Entities Create Autocure] Smartly recovered nested dataJson parameter mapping for slug "${collection.slug}"`);
  }
  try {
    const actualConfig = collection.fieldConfig || collection.relationSettings || {};
    const autoManagedData = applyAutoManagedFields(data, model.fieldsJson);
    const normalizedData = applyCollectionFieldGenerators(
      autoManagedData,
      model.fieldsJson,
      actualConfig,
      collection.slug,
      void 0,
      { operation: "create" }
    );
    const enumValidation = sanitizeAndValidateEnums(normalizedData, model.fieldsJson, actualConfig);
    if (!enumValidation.valid) {
      return c.json({ error: "选项校验不合法", details: enumValidation.errors }, 400);
    }
    const validation = validateEntityData(normalizedData, model.fieldsJson);
    if (!validation.valid) {
      return c.json({ error: "数据格式不合法", details: validation.errors }, 400);
    }
    await validateRelations(db, normalizedData, model.fieldsJson, actualConfig);
    const user = c.get("user");
    const config = c.get("config");
    const locale = normalizedData.locale || config?.DEFAULT_LANGUAGE || "en-US";
    const translationGroup = normalizedData.translationGroup || crypto.randomUUID();
    if (normalizedData.translationGroup) {
      const existingLocale = await db.select().from(entities).where(and(
        eq(entities.translationGroup, translationGroup),
        eq(entities.locale, locale)
      )).get();
      if (existingLocale) {
        return c.json({ error: `该内容已存在 [${locale}] 语种版本，请直接在列表中切换至该语种进行编辑。` }, 409);
      }
    }
    const titleToCompare = String(
      normalizedData.title || normalizedData.name || normalizedData.entity_name || normalizedData.company_name || ""
    ).trim();
    if (titleToCompare) {
      const existing = await db.select().from(entities).where(eq(entities.collectionId, collection.id)).all();
      const matched = existing.find((ex) => {
        if (ex.locale !== locale) return false;
        let exData = {};
        try {
          exData = typeof ex.dataJson === "string" ? JSON.parse(ex.dataJson) : ex.dataJson;
        } catch (e) {
        }
        const exTitle = String(exData?.title || exData?.name || "").trim();
        return exTitle && exTitle === titleToCompare;
      });
      if (matched) {
        console.log(`🤖 [Entities Create] Duplicate found for title "${titleToCompare}" (locale: ${locale}). Autoredirecting create to update of ID: ${matched.id}`);
        const matchedData = typeof matched.dataJson === "string" ? JSON.parse(matched.dataJson) : matched.dataJson || {};
        const autoManagedNextData = applyAutoManagedFields(normalizedData, model.fieldsJson, matchedData);
        const nextData = applyCollectionFieldGenerators(
          autoManagedNextData,
          model.fieldsJson,
          actualConfig,
          collection.slug,
          matched.id,
          { operation: "update", existingData: matchedData }
        );
        const [updatedEntity] = await db.update(entities).set({ dataJson: nextData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(entities.id, matched.id)).returning();
        return c.json(updatedEntity);
      }
    }
    const [newEntity] = await db.insert(entities).values({
      collectionId: collection.id,
      dataJson: normalizedData,
      locale,
      translationGroup,
      createdBy: user?.id
    }).returning();
    const finalizedData = applyCollectionFieldGenerators(
      normalizedData,
      model.fieldsJson,
      actualConfig,
      collection.slug,
      newEntity.id,
      { operation: "create" }
    );
    if (JSON.stringify(finalizedData) !== JSON.stringify(normalizedData)) {
      await db.update(entities).set({ dataJson: finalizedData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(entities.id, newEntity.id)).run();
      newEntity.dataJson = finalizedData;
    }
    return c.json(newEntity);
  } catch (err) {
    console.error(`❌ [Entities] Post Error:`, err.message);
    return c.json({ error: err.message }, 400);
  }
});
entitiesRouter.patch("/:slug/reorder", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const collection = c.get("currentCollection");
  const model = c.get("currentModel");
  const payload = await c.req.json().catch(() => ({}));
  const ids = Array.isArray(payload?.ids) ? payload.ids.map((item) => Number(item)).filter((item) => Number.isInteger(item) && item > 0) : [];
  const uniqueIds = Array.from(new Set(ids));
  if (!hasSortOrderField(model.fieldsJson)) {
    return c.json({ error: "当前集合未启用 sort_order 排序字段" }, 400);
  }
  if (ids.length === 0 || uniqueIds.length !== ids.length) {
    return c.json({ error: "缺少有效且不重复的排序 ID 数组" }, 400);
  }
  try {
    const rows = await db.select().from(entities).where(and(
      eq(entities.collectionId, collection.id),
      inArray(entities.id, uniqueIds)
    )).all();
    if (rows.length !== uniqueIds.length) {
      return c.json({ error: "排序数据与当前集合不一致，请刷新后重试" }, 400);
    }
    const orderedRows = uniqueIds.map((id) => rows.find((row) => row.id === id)).filter(Boolean);
    const hasHierarchy = model.fieldsJson.some((field) => field?.name === "parent_id");
    if (hasHierarchy) {
      const orderedRowData = orderedRows.map((row) => parseEntityDataJson$1(row));
      const scopeKeys = new Set(
        orderedRowData.map((rowData) => getTreeSiblingScopeKey(rowData, model.fieldsJson))
      );
      if (scopeKeys.size !== 1) {
        return c.json({ error: "仅允许同一排序分组下的记录进行拖动排序" }, 400);
      }
      const expectedParentId = normalizeParentScopeValue(payload?.parentId);
      const actualParentId = normalizeParentScopeValue(orderedRowData[0]?.parent_id);
      if (expectedParentId !== actualParentId) {
        return c.json({ error: "排序作用域已变化，请刷新列表后重试" }, 400);
      }
      const expectedScopeKey = Array.from(scopeKeys)[0];
      const allCollectionRows = await db.select({
        id: entities.id,
        dataJson: entities.dataJson
      }).from(entities).where(eq(entities.collectionId, collection.id)).all();
      const siblingIds = allCollectionRows.filter((row) => getTreeSiblingScopeKey(parseEntityDataJson$1(row), model.fieldsJson) === expectedScopeKey).map((row) => row.id).sort((left, right) => left - right);
      const providedIds = [...uniqueIds].sort((left, right) => left - right);
      if (siblingIds.length !== providedIds.length || siblingIds.some((id, index) => id !== providedIds[index])) {
        return c.json({ error: "排序数据不完整，请确保提交当前同级节点的完整 ID 顺序" }, 400);
      }
    } else {
      const allIds = (await db.select({ id: entities.id }).from(entities).where(eq(entities.collectionId, collection.id)).all()).map((row) => row.id).sort((left, right) => left - right);
      const providedIds = [...uniqueIds].sort((left, right) => left - right);
      if (allIds.length !== providedIds.length || allIds.some((id, index) => id !== providedIds[index])) {
        return c.json({ error: "排序数据不完整，请提交当前列表的完整 ID 顺序" }, 400);
      }
    }
    const now = /* @__PURE__ */ new Date();
    const batchOps = orderedRows.map((row, index) => {
      const nextData = {
        ...parseEntityDataJson$1(row),
        sort_order: uniqueIds.length - index
      };
      return db.update(entities).set({ dataJson: nextData, updatedAt: now }).where(and(eq(entities.id, row.id), eq(entities.collectionId, collection.id)));
    });
    await db.batch(batchOps);
    return c.json({
      success: true,
      updated: uniqueIds.length
    });
  } catch (err) {
    console.error("❌ [Entities] Reorder failed:", err);
    return c.json({ error: err.message || "排序保存失败" }, 400);
  }
});
entitiesRouter.patch("/:slug/:id", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  const collection = c.get("currentCollection");
  const model = c.get("currentModel");
  const data = unwrapEntityMutationPayload(await c.req.json());
  try {
    const isAdmin = c.get("isAdmin");
    const ownerOnly = c.get("ownerOnlyMode");
    const user = c.get("user");
    let whereClause = and(
      eq(entities.id, id),
      eq(entities.collectionId, collection.id)
    );
    if (ownerOnly && !isAdmin && user) {
      whereClause = and(whereClause, eq(entities.createdBy, user.id));
    }
    const existing = await db.select().from(entities).where(whereClause).get();
    if (!existing) return c.json({ error: "记录不存在或无权操作" }, 404);
    const actualConfig = collection.fieldConfig || collection.relationSettings || {};
    const existingData = typeof existing.dataJson === "string" ? JSON.parse(existing.dataJson) : existing.dataJson || {};
    const autoManagedData = applyAutoManagedFields(data, model.fieldsJson, existingData);
    const finalizedData = applyCollectionFieldGenerators(
      autoManagedData,
      model.fieldsJson,
      actualConfig,
      collection.slug,
      id,
      { operation: "update", existingData }
    );
    const enumValidation = sanitizeAndValidateEnums(finalizedData, model.fieldsJson, actualConfig);
    if (!enumValidation.valid) {
      return c.json({ error: "选项校验不合法", details: enumValidation.errors }, 400);
    }
    const validation = validateEntityData(finalizedData, model.fieldsJson);
    if (!validation.valid) {
      return c.json({ error: "数据格式不合法", details: validation.errors }, 400);
    }
    await validateRelations(db, finalizedData, model.fieldsJson, actualConfig);
    if (finalizedData.parent_id) {
      await checkCircularRelation(db, id, finalizedData.parent_id, collection.id, "parent_id");
    }
    const result = await db.update(entities).set({ dataJson: finalizedData, updatedAt: /* @__PURE__ */ new Date() }).where(whereClause).run();
    const changes = result.meta?.changes ?? result.changes;
    if (changes === 0) return c.json({ error: "Entity not found" }, 404);
    return c.json({ success: true });
  } catch (err) {
    console.error(`❌ [Entities] Patch 失败 [${id}]:`, err);
    return c.json({ error: err.message }, 400);
  }
});
entitiesRouter.delete("/:slug/:id", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const id = parseInt(c.req.param("id"));
  const collection = c.get("currentCollection");
  const isAdmin = c.get("isAdmin");
  const ownerOnly = c.get("ownerOnlyMode");
  const user = c.get("user");
  let whereClause = and(
    eq(entities.id, id),
    eq(entities.collectionId, collection.id)
  );
  if (ownerOnly && !isAdmin && user) {
    whereClause = and(whereClause, eq(entities.createdBy, user.id));
  }
  try {
    const cascade = c.req.query("cascade") === "true";
    const existing = await db.select().from(entities).where(and(
      eq(entities.id, id),
      eq(entities.collectionId, collection.id)
    )).get();
    if (!existing) return c.json({ error: "Entity not found" }, 404);
    let deleteWhere = whereClause;
    if (cascade && existing.translationGroup) {
      deleteWhere = and(
        eq(entities.translationGroup, existing.translationGroup),
        eq(entities.collectionId, collection.id)
      );
      console.log(`🧨 [Entities] 正在级联删除翻译组: ${existing.translationGroup}`);
    }
    const result = await db.delete(entities).where(deleteWhere).run();
    const changes = result.meta?.changes ?? result.changes;
    return c.json({ success: true, count: changes });
  } catch (err) {
    console.error("❌ [Entities] 删除失败:", err);
    return c.json({ error: err.message }, 400);
  }
});
entitiesRouter.post("/:slug/batch-save", dynamicGuard, async (c) => {
  const db = await createDbClient(c.env.DB);
  const collection = c.get("currentCollection");
  const model = c.get("currentModel");
  const user = c.get("user");
  const requestIdempotencyKey = String(c.req.header("X-Idempotency-Key") || "").trim();
  const pageTaskIdempotencyStorageKey = requestIdempotencyKey ? buildPageTaskIdempotencyStorageKey(collection.id, requestIdempotencyKey) : "";
  let payload = await c.req.json();
  if (typeof payload === "object" && payload !== null && !Array.isArray(payload)) {
    const keys = Object.keys(payload);
    const isSequentialNumeric = keys.length > 0 && keys.every((k, i) => k === String(i));
    if (isSequentialNumeric) {
      payload = keys.map((k) => payload[k]);
    } else if (payload.locale || payload.dataJson) {
      payload = [payload];
      console.log(`🤖 [Entities Batch Save Autocure] Smartly recovered single nested payload object into array`);
    }
  }
  if (!Array.isArray(payload) || payload.length === 0) {
    return c.json({ error: "无效的数据负载" }, 400);
  }
  const locales = payload.map((item) => item.locale);
  const hasDuplicateLocale = new Set(locales).size !== locales.length;
  let commonGroup = payload.find((item) => item.translationGroup)?.translationGroup;
  if (!commonGroup && !hasDuplicateLocale) {
    commonGroup = crypto.randomUUID();
  }
  try {
    if (pageTaskIdempotencyStorageKey) {
      const existingIdempotencyRow = await db.select().from(systemSettings).where(eq(systemSettings.key, pageTaskIdempotencyStorageKey)).get();
      const existingIdempotencyRecord = existingIdempotencyRow?.value ? parsePageTaskIdempotencyRecord(existingIdempotencyRow.value) : null;
      if (existingIdempotencyRecord?.status === "completed" && existingIdempotencyRecord?.response) {
        return c.json({
          ...existingIdempotencyRecord.response,
          idempotentReplay: true
        });
      }
      if (existingIdempotencyRecord?.status === "processing") {
        return c.json({
          success: false,
          error: "相同页面任务结果正在处理中，请勿重复提交。"
        }, 409);
      }
      const processingRecord = JSON.stringify({
        status: "processing",
        requestIdempotencyKey,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      if (existingIdempotencyRow) {
        await db.update(systemSettings).set({
          value: processingRecord,
          description: "page_task_idempotency",
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq(systemSettings.key, pageTaskIdempotencyStorageKey));
      } else {
        try {
          await db.insert(systemSettings).values({
            key: pageTaskIdempotencyStorageKey,
            value: processingRecord,
            description: "page_task_idempotency",
            updatedAt: /* @__PURE__ */ new Date()
          });
        } catch (insertError) {
          const racedIdempotencyRow = await db.select().from(systemSettings).where(eq(systemSettings.key, pageTaskIdempotencyStorageKey)).get();
          const racedIdempotencyRecord = racedIdempotencyRow?.value ? parsePageTaskIdempotencyRecord(racedIdempotencyRow.value) : null;
          if (racedIdempotencyRecord?.status === "completed" && racedIdempotencyRecord?.response) {
            return c.json({
              ...racedIdempotencyRecord.response,
              idempotentReplay: true
            });
          }
          return c.json({
            success: false,
            error: "相同页面任务结果正在处理中，请勿重复提交。"
          }, 409);
        }
      }
    }
    const existingEntities = await db.select().from(entities).where(eq(entities.collectionId, collection.id)).all();
    const actualConfig = collection.fieldConfig || collection.relationSettings || {};
    const batchOps = [];
    const metaResults = [];
    const pendingInsertFinalizers = [];
    const metaKeys = /* @__PURE__ */ new Set(["id", "locale", "translationGroup", "createdBy", "createdAt", "updatedAt", "_displayValues"]);
    const referenceFieldNames = new Set(model.fieldsJson.filter((field) => field.type === "reference").map((field) => field.name));
    const hasPersistableBusinessData = (item, isUpdate) => {
      return Object.entries(item).some(([key, value]) => {
        if (metaKeys.has(key)) {
          return false;
        }
        if (typeof value === "string") {
          return value.trim() !== "";
        }
        if (Array.isArray(value)) {
          if (value.length > 0) {
            return true;
          }
          return Boolean(isUpdate && referenceFieldNames.has(key));
        }
        return value !== void 0 && value !== null;
      });
    };
    for (const entry of payload) {
      const data = entry.dataJson || {};
      let finalEntryId = entry.id || entry.dataJson?.id || data?.id;
      if (!finalEntryId) {
        const titleToCompare = String(data.title || data.name || data.entity_name || data.company_name || "").trim();
        if (titleToCompare) {
          const matched = existingEntities.find((ex) => {
            if (ex.locale !== entry.locale) return false;
            let exData = {};
            try {
              exData = typeof ex.dataJson === "string" ? JSON.parse(ex.dataJson) : ex.dataJson;
            } catch (e) {
            }
            const exTitle = String(exData?.title || exData?.name || "").trim();
            return exTitle && exTitle === titleToCompare;
          });
          if (matched) {
            finalEntryId = String(matched.id);
            if (matched.translationGroup && !hasDuplicateLocale) {
              commonGroup = matched.translationGroup;
            }
            console.log(`🤖 [Entities BatchSave] Duplicate found for title "${titleToCompare}" (locale: ${entry.locale}). Autoredirecting insert to update of ID: ${matched.id}`);
          }
        }
      }
      const existingRecord = finalEntryId ? existingEntities.find((item) => item.id === parseInt(String(finalEntryId), 10)) : null;
      const existingData = existingRecord ? typeof existingRecord.dataJson === "string" ? JSON.parse(existingRecord.dataJson) : existingRecord.dataJson || {} : {};
      const autoManagedData = applyAutoManagedFields(data, model.fieldsJson, existingData);
      const generatedData = finalEntryId ? applyCollectionFieldGenerators(
        autoManagedData,
        model.fieldsJson,
        actualConfig,
        collection.slug,
        parseInt(String(finalEntryId), 10),
        { operation: finalEntryId ? "update" : "create", existingData }
      ) : applyCollectionFieldGenerators(
        autoManagedData,
        model.fieldsJson,
        actualConfig,
        collection.slug,
        void 0,
        { operation: "create", existingData }
      );
      const resolvedData = generatedData;
      if (!hasPersistableBusinessData(data, Boolean(finalEntryId)) && !finalEntryId) continue;
      let entryGroup = entry.translationGroup || commonGroup;
      if (!entryGroup || hasDuplicateLocale) {
        entryGroup = crypto.randomUUID();
      }
      const enumValidation = sanitizeAndValidateEnums(resolvedData, model.fieldsJson, actualConfig);
      if (!enumValidation.valid) throw new Error(`[${entry.locale}] 选项结构错误: ${enumValidation.errors.join(";")}`);
      const validation = validateEntityData(resolvedData, model.fieldsJson);
      if (!validation.valid) throw new Error(`数据校验失败: ${validation.errors.join("; ")}`);
      await validateRelations(db, resolvedData, model.fieldsJson, actualConfig);
      if (finalEntryId) {
        batchOps.push(
          db.update(entities).set({ dataJson: resolvedData, updatedAt: /* @__PURE__ */ new Date(), translationGroup: entryGroup }).where(and(eq(entities.id, parseInt(finalEntryId)), eq(entities.collectionId, collection.id)))
        );
        metaResults.push({ locale: entry.locale, id: parseInt(finalEntryId), translationGroup: entryGroup });
      } else {
        const metaIndex = metaResults.length;
        batchOps.push(
          db.insert(entities).values({
            collectionId: collection.id,
            dataJson: resolvedData,
            locale: entry.locale,
            translationGroup: entryGroup,
            createdBy: user?.id
          }).returning()
        );
        metaResults.push({ locale: entry.locale, needsId: true, translationGroup: entryGroup });
        pendingInsertFinalizers.push({ metaIndex, data: resolvedData });
      }
    }
    if (batchOps.length === 0) {
      return c.json({ error: "无有效数据可保存" }, 400);
    }
    const batchResults = await db.batch(batchOps);
    metaResults.forEach((meta, idx) => {
      if (meta.needsId) {
        const inserted = batchResults[idx];
        const rowData = Array.isArray(inserted) ? inserted[0] : inserted;
        meta.id = rowData?.id;
        delete meta.needsId;
      }
    });
    for (const item of pendingInsertFinalizers) {
      const insertedMeta = metaResults[item.metaIndex];
      if (!insertedMeta?.id) {
        continue;
      }
      const finalizedData = applyCollectionFieldGenerators(
        item.data,
        model.fieldsJson,
        actualConfig,
        collection.slug,
        insertedMeta.id,
        { operation: "create" }
      );
      if (JSON.stringify(finalizedData) === JSON.stringify(item.data)) {
        continue;
      }
      await db.update(entities).set({ dataJson: finalizedData, updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(entities.id, insertedMeta.id), eq(entities.collectionId, collection.id))).run();
    }
    const responsePayload = {
      success: true,
      translationGroup: hasDuplicateLocale ? void 0 : commonGroup,
      list: metaResults
    };
    if (pageTaskIdempotencyStorageKey) {
      await db.update(systemSettings).set({
        value: JSON.stringify({
          status: "completed",
          requestIdempotencyKey,
          response: responsePayload,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }),
        description: "page_task_idempotency",
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(systemSettings.key, pageTaskIdempotencyStorageKey));
    }
    return c.json(responsePayload);
  } catch (err) {
    if (pageTaskIdempotencyStorageKey) {
      try {
        await db.update(systemSettings).set({
          value: JSON.stringify({
            status: "failed",
            requestIdempotencyKey,
            error: err.message || "UNKNOWN_ERROR",
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }),
          description: "page_task_idempotency",
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq(systemSettings.key, pageTaskIdempotencyStorageKey));
      } catch (idempotencyError) {
        console.warn("⚠️ [Entities] Failed to persist page task idempotency failure state:", idempotencyError);
      }
    }
    console.error(`❌ [Entities] BatchSave Error:`, err);
    return c.json({ error: err.message }, 500);
  }
});
async function hmacSha256(key, data) {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const dataBuf = typeof data === "string" ? new TextEncoder().encode(data) : data;
  return await crypto.subtle.sign("HMAC", cryptoKey, dataBuf);
}
async function sha256(data) {
  const dataBuf = typeof data === "string" ? new TextEncoder().encode(data) : data;
  return await crypto.subtle.digest("SHA-256", dataBuf);
}
function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function hmacSha256Hex(key, data) {
  const sig = await hmacSha256(key, data);
  return bufferToHex(sig);
}
class StorageService {
  /**
   * 上传文件至 R2
   * @param file 由 c.req.parseBody 获取的文件对象 (File/Blob)
   * @param bucket R2 绑定对象 (c.env.MEDIA_BUCKET)
   */
  static async upload(file, bucket) {
    const filename = file.name || `file_${Date.now()}`;
    const mimeType = file.type || "application/octet-stream";
    const size = file.size || 0;
    const key = `media/${Date.now()}_${filename}`;
    if (!bucket) {
      throw new Error("R2 存储桶尚未绑定，请检查核心配置。");
    }
    const content = typeof file.arrayBuffer === "function" ? await file.arrayBuffer() : file.content;
    await bucket.put(key, content, {
      httpMetadata: { contentType: mimeType }
    });
    const url = `/api/v1/media/file/${key}`;
    return {
      url,
      filename,
      mimeType,
      size
    };
  }
  /**
   * 生成 S3 V4 兼容的 R2 PutObject 预签名上传 URL
   */
  static async generatePresignedPutUrl(options) {
    const {
      bucketName,
      accountId,
      accessKeyId,
      secretAccessKey,
      key,
      contentType,
      expiresInSeconds = 3600,
      region = "auto"
    } = options;
    const method = "PUT";
    const host = `${bucketName}.${accountId}.r2.cloudflarestorage.com`;
    const endpoint = `https://${host}`;
    const now = /* @__PURE__ */ new Date();
    const amzDate = now.toISOString().replace(/[:-]/g, "").split(".")[0] + "Z";
    const dateStamp = amzDate.substring(0, 8);
    const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
    const queryParams = {
      "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
      "X-Amz-Credential": `${accessKeyId}/${credentialScope}`,
      "X-Amz-Date": amzDate,
      "X-Amz-Expires": String(expiresInSeconds),
      "X-Amz-SignedHeaders": "host"
    };
    const canonicalQueryString = Object.keys(queryParams).sort().map((qKey) => `${encodeURIComponent(qKey)}=${encodeURIComponent(queryParams[qKey])}`).join("&");
    const canonicalUri = `/${encodeURIComponent(key).replace(/%2F/g, "/")}`;
    const canonicalHeaders = `host:${host}
`;
    const signedHeaders = "host";
    const payloadHash = "UNSIGNED-PAYLOAD";
    const canonicalRequest = [
      method,
      canonicalUri,
      canonicalQueryString,
      canonicalHeaders,
      signedHeaders,
      payloadHash
    ].join("\n");
    const canonicalRequestHash = bufferToHex(await sha256(canonicalRequest));
    const stringToSign = [
      "AWS4-HMAC-SHA256",
      amzDate,
      credentialScope,
      canonicalRequestHash
    ].join("\n");
    const kDate = await hmacSha256(new TextEncoder().encode("AWS4" + secretAccessKey), dateStamp);
    const kRegion = await hmacSha256(kDate, region);
    const kService = await hmacSha256(kRegion, "s3");
    const kSigning = await hmacSha256(kService, "aws4_request");
    const signature = await hmacSha256Hex(kSigning, stringToSign);
    return `${endpoint}${canonicalUri}?${canonicalQueryString}&X-Amz-Signature=${signature}`;
  }
  /**
   * 生成 S3 V4 兼容的 R2 GetObject 预签名安全下载 URL
   */
  static async generatePresignedGetUrl(options) {
    const {
      bucketName,
      accountId,
      accessKeyId,
      secretAccessKey,
      key,
      expiresInSeconds = 3600,
      region = "auto"
    } = options;
    const method = "GET";
    const host = `${bucketName}.${accountId}.r2.cloudflarestorage.com`;
    const endpoint = `https://${host}`;
    const now = /* @__PURE__ */ new Date();
    const amzDate = now.toISOString().replace(/[:-]/g, "").split(".")[0] + "Z";
    const dateStamp = amzDate.substring(0, 8);
    const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
    const queryParams = {
      "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
      "X-Amz-Credential": `${accessKeyId}/${credentialScope}`,
      "X-Amz-Date": amzDate,
      "X-Amz-Expires": String(expiresInSeconds),
      "X-Amz-SignedHeaders": "host"
    };
    const canonicalQueryString = Object.keys(queryParams).sort().map((qKey) => `${encodeURIComponent(qKey)}=${encodeURIComponent(queryParams[qKey])}`).join("&");
    const canonicalUri = `/${encodeURIComponent(key).replace(/%2F/g, "/")}`;
    const canonicalHeaders = `host:${host}
`;
    const signedHeaders = "host";
    const payloadHash = "UNSIGNED-PAYLOAD";
    const canonicalRequest = [
      method,
      canonicalUri,
      canonicalQueryString,
      canonicalHeaders,
      signedHeaders,
      payloadHash
    ].join("\n");
    const canonicalRequestHash = bufferToHex(await sha256(canonicalRequest));
    const stringToSign = [
      "AWS4-HMAC-SHA256",
      amzDate,
      credentialScope,
      canonicalRequestHash
    ].join("\n");
    const kDate = await hmacSha256(new TextEncoder().encode("AWS4" + secretAccessKey), dateStamp);
    const kRegion = await hmacSha256(kDate, region);
    const kService = await hmacSha256(kRegion, "s3");
    const kSigning = await hmacSha256(kService, "aws4_request");
    const signature = await hmacSha256Hex(kSigning, stringToSign);
    return `${endpoint}${canonicalUri}?${canonicalQueryString}&X-Amz-Signature=${signature}`;
  }
  /**
   * 签名安全下载代理：根据数据库设置自动选择是输出预签名 R2 直接链接还是内置分发 URL
   */
  static async getSecureDownloadUrl(c, key, expiresInSeconds = 3600) {
    const bucketName = c.env.MEDIA_BUCKET_NAME || "trade-media-bucket";
    const accountId = c.env.CF_ACCOUNT_ID;
    const accessKeyId = c.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = c.env.R2_SECRET_ACCESS_KEY;
    if (accountId && accessKeyId && secretAccessKey) {
      try {
        return await this.generatePresignedGetUrl({
          bucketName,
          accountId,
          accessKeyId,
          secretAccessKey,
          key,
          expiresInSeconds
        });
      } catch (err) {
        console.warn("[Secure Download URL] Presigned URL generation failed, fallback to native routing:", err);
      }
    }
    return `/api/v1/media/file/${key}`;
  }
}
const mediaRouter = new Hono();
mediaRouter.post("/upload", requirePermission("media.manage"), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    let file;
    let url;
    const contentType = c.req.header("content-type") || "";
    if (contentType.includes("application/json")) {
      const jsonBody = await c.req.json().catch(() => ({}));
      file = jsonBody.file;
      url = jsonBody.url;
    } else {
      const body = await c.req.parseBody();
      file = body["file"];
      url = body["url"];
    }
    if (!file && !url) {
      return c.json({ error: "No file or URL provided" }, 400);
    }
    let normalizedFile;
    if (url && !file) {
      try {
        console.log(`📥 [Media Upload] Fetching remote URL: ${url}`);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const filename = url.split("/").pop()?.split("?")[0] || "remote-file";
        normalizedFile = {
          name: filename,
          type: res.headers.get("content-type") || "application/octet-stream",
          size: Number(res.headers.get("content-length")) || 0,
          content: res.body
          // 🕵️ 关键：直接透传 ReadableStream，绝不载入内存，规避 Worker 128MB 限制！
        };
      } catch (e) {
        console.error(`❌ [Media Upload] Failed to fetch URL:`, e.message);
        return c.json({ error: "无法从指定的 URL 下载文件", details: e.message }, 400);
      }
    } else {
      normalizedFile = typeof file === "string" ? {
        name: "test-file.txt",
        type: "text/plain",
        size: file.length,
        content: file
      } : file;
    }
    const uploadResult = await StorageService.upload(normalizedFile, c.env.MEDIA_BUCKET);
    const user = c.get("user");
    const [newMedia] = await db.insert(mediaItems).values({
      url: uploadResult.url,
      filename: uploadResult.filename,
      mimeType: uploadResult.mimeType,
      size: uploadResult.size,
      isRemote: false,
      createdBy: user?.id
    }).returning();
    const domains = c.get("site_domains");
    return c.json({
      id: newMedia.id,
      ...uploadResult,
      url: transformMediaUrl(uploadResult.url, domains)
    });
  } catch (err) {
    console.error("❌ [Media] Upload Error:", err);
    return c.json({ error: "文件上传失败", details: err.message }, 500);
  }
});
mediaRouter.post("/", requirePermission("media.manage"), async (c) => {
  const db = await createDbClient(c.env.DB);
  const { url, filename, mimeType, size, isRemote } = await c.req.json();
  if (!url) return c.json({ error: "URL is required" }, 400);
  try {
    const user = c.get("user");
    const [newMedia] = await db.insert(mediaItems).values({
      url,
      filename: filename || url.split("/").pop() || "remote-file",
      mimeType: mimeType || "image/remote",
      size: size || 0,
      isRemote: isRemote ?? true,
      createdBy: user?.id
    }).returning();
    return c.json(newMedia);
  } catch (err) {
    return c.json({ error: "保存媒体记录失败", details: err.message }, 500);
  }
});
mediaRouter.get("/file/*", async (c) => {
  const bucket = c.env.MEDIA_BUCKET;
  const key = c.req.path.replace("/api/v1/media/file/", "");
  if (!bucket) return c.text("R2 Bucket not bound", 500);
  const object = await bucket.get(key);
  if (!object) return c.text("File Not Found", 404);
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=31536000");
  const contentType = headers.get("content-type");
  if (!contentType || contentType === "application/octet-stream") {
    const ext = key.split(".").pop()?.toLowerCase();
    const mimeMap = {
      "jpg": "image/jpeg",
      "jpeg": "image/jpeg",
      "png": "image/png",
      "gif": "image/gif",
      "webp": "image/webp",
      "pdf": "application/pdf",
      "txt": "text/plain",
      "md": "text/markdown",
      "json": "application/json",
      "csv": "text/csv",
      "mp3": "audio/mpeg",
      "mp4": "video/mp4"
    };
    if (ext && mimeMap[ext]) {
      headers.set("content-type", mimeMap[ext]);
      console.log(`💡 [Media Content-Type] Overrode content-type of "${key}" to "${mimeMap[ext]}" based on file extension`);
    }
  }
  return new Response(object.body, { headers });
});
mediaRouter.get("/", requirePermission(["media.view", "media.manage"]), async (c) => {
  const page = parseInt(c.req.query("page") || "1");
  const limit = parseInt(c.req.query("limit") || "20");
  const offset = (page - 1) * limit;
  const db = await createDbClient(c.env.DB);
  const domains = c.get("site_domains");
  const results = await db.select().from(mediaItems).orderBy(desc(mediaItems.id)).all();
  const transformed = results.map((item) => ({
    ...item,
    url: transformMediaUrl(item.url, domains)
  }));
  let r2Items = [];
  const bucket = c.env.MEDIA_BUCKET;
  if (bucket) {
    try {
      const dbKeys = /* @__PURE__ */ new Set();
      transformed.forEach((item) => {
        const urlPath = item.url || "";
        if (urlPath.includes("/api/v1/media/file/")) {
          const key = urlPath.split("/api/v1/media/file/")[1];
          if (key) dbKeys.add(key);
        }
      });
      const listResult = await bucket.list();
      const objects = listResult.objects || [];
      const getMimeTypeByExtension = (filename) => {
        const ext = filename.split(".").pop()?.toLowerCase();
        switch (ext) {
          case "png":
            return "image/png";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "gif":
            return "image/gif";
          case "webp":
            return "image/webp";
          case "svg":
            return "image/svg+xml";
          case "pdf":
            return "application/pdf";
          case "zip":
            return "application/zip";
          case "rar":
            return "application/x-rar-compressed";
          case "mp4":
            return "video/mp4";
          case "webm":
            return "video/webm";
          case "mp3":
            return "audio/mpeg";
          case "wav":
            return "audio/wav";
          case "txt":
            return "text/plain";
          case "json":
            return "application/json";
          default:
            return "application/octet-stream";
        }
      };
      objects.forEach((obj) => {
        if (dbKeys.has(obj.key)) return;
        const filename = obj.key.split("/").pop() || obj.key;
        const rawUrl = `/api/v1/media/file/${obj.key}`;
        r2Items.push({
          id: `r2-${obj.key.replaceAll("/", "__SLASH__")}`,
          url: transformMediaUrl(rawUrl, domains),
          filename,
          mimeType: obj.httpMetadata?.contentType || getMimeTypeByExtension(filename),
          size: obj.size || 0,
          createdAt: obj.uploaded ? obj.uploaded : /* @__PURE__ */ new Date(),
          isRemote: false
        });
      });
    } catch (r2Err) {
      console.warn("[Media Router] Failed to scan R2 bucket:", r2Err);
    }
  }
  const merged = [...transformed, ...r2Items].sort((a, b) => {
    const timeA = new Date(a.createdAt || 0).getTime();
    const timeB = new Date(b.createdAt || 0).getTime();
    return timeB - timeA;
  });
  const total = merged.length;
  const paginatedData = merged.slice(offset, offset + limit);
  return c.json({
    data: paginatedData,
    total,
    page,
    limit
  });
});
mediaRouter.delete("/:id", requirePermission("media.manage"), async (c) => {
  const db = await createDbClient(c.env.DB);
  const paramId = c.req.param("id");
  try {
    const user = c.get("user");
    const isAdmin = c.get("isAdmin");
    if (paramId.startsWith("r2-")) {
      const key = paramId.replace(/^r2-/, "").replaceAll("__SLASH__", "/");
      const bucket = c.env.MEDIA_BUCKET;
      if (bucket) {
        await bucket.delete(key);
        return c.json({ success: true, message: "R2 physical file deleted successfully" });
      } else {
        return c.json({ error: "R2 bucket not bound" }, 500);
      }
    }
    const id = parseInt(paramId);
    if (isNaN(id)) {
      return c.json({ error: "Invalid ID format" }, 400);
    }
    const existing = await db.select().from(mediaItems).where(eq(mediaItems.id, id)).get();
    if (!existing) return c.json({ error: "Media record not found" }, 404);
    if (!isAdmin && existing.createdBy !== user?.id) {
      return c.json({ error: "权限不足: 您只能删除自己上传的文件" }, 403);
    }
    const urlPath = existing.url || "";
    if (urlPath.includes("/api/v1/media/file/") && c.env.MEDIA_BUCKET) {
      const key = urlPath.split("/api/v1/media/file/")[1];
      if (key) {
        try {
          await c.env.MEDIA_BUCKET.delete(key);
        } catch (e) {
          console.warn("[Media Router] Failed to physically delete from R2:", e);
        }
      }
    }
    const result = await db.delete(mediaItems).where(eq(mediaItems.id, id)).returning();
    if (result.length === 0) {
      return c.json({ error: "Record not found" }, 404);
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
mediaRouter.get("/orphans/scan", requirePermission(["media.view", "media.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1e3);
  try {
    const allEntities = await db.select().from(entities).all();
    const referencedIds = /* @__PURE__ */ new Set();
    allEntities.forEach((e) => {
      JSON.stringify(e.dataJson).match(/\d+/g)?.forEach((id) => referencedIds.add(Number(id)));
    });
    const allMedia = await db.select().from(mediaItems).all();
    const orphans = allMedia.filter((m) => {
      const isOld = m.createdAt < oneDayAgo;
      const isUnreferenced = !referencedIds.has(m.id);
      return isOld && isUnreferenced;
    });
    return c.json({
      count: orphans.length,
      totalSize: orphans.reduce((acc, cur) => acc + cur.size, 0),
      items: orphans
    });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
mediaRouter.delete("/orphans/cleanup", requirePermission("media.manage"), async (c) => {
  await createDbClient(c.env.DB);
  return c.json({ success: true, message: "Cleanup command received" });
});
const webhooks = new Hono();
webhooks.post("/stripe", (c) => c.json({ message: "Stripe webhook handler" }));
webhooks.post("/github", (c) => c.json({ message: "Github webhook handler" }));
webhooks.post("/mail/inbound", async (c) => {
  try {
    const body = await c.req.json();
    const db = await createDbClient(c.env.DB);
    const from = body.from || body.sender || body.from_email;
    const to = body.to || body.recipient || body.to_email;
    const subject = body.subject || "No Subject";
    const content = body.text || body.content || body.body || "";
    if (!from || !content) {
      return c.json({ error: "Missing required fields" }, 400);
    }
    const threadId = body.thread_id || from.replace(/[@.]/g, "_");
    await db.insert(mailMessages).values({
      threadId,
      fromEmail: from,
      toEmail: to,
      subject,
      content,
      direction: "inbound",
      status: "unread"
    });
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
function parseCollectionPermissionConfig(raw) {
  try {
    if (!raw) return {};
    if (typeof raw === "string") {
      return JSON.parse(raw || "{}") || {};
    }
    return typeof raw === "object" ? raw : {};
  } catch {
    return {};
  }
}
function canAccessCollectionAction(access, collectionSlug, permissionConfigRaw, action) {
  if (!access) return true;
  const permissions2 = Array.isArray(access.permissions) ? access.permissions : [];
  const roleNames = Array.isArray(access.roles) ? access.roles : [];
  const isAdmin = Boolean(access.isAdmin) || permissions2.includes("*") || permissions2.includes("all");
  if (isAdmin) return true;
  const permissionConfig = parseCollectionPermissionConfig(permissionConfigRaw);
  const rbacAction = action === "delete" ? "delete" : action === "view" ? "view" : "edit";
  const requiredPerm = `collection:${collectionSlug}:${rbacAction}`;
  if (!permissions2.includes(requiredPerm)) {
    return false;
  }
  if (!permissionConfig || Object.keys(permissionConfig).length === 0) {
    return true;
  }
  return roleNames.some((roleName) => {
    const roleCfg = permissionConfig?.[roleName];
    if (!roleCfg) return false;
    if (action === "view") return roleCfg.canView !== false;
    if (action === "create") return roleCfg.canCreate !== false;
    if (action === "update") return roleCfg.canUpdate !== false;
    if (action === "delete") return roleCfg.canDelete !== false;
    if (action === "edit") {
      return roleCfg.canCreate !== false || roleCfg.canUpdate !== false;
    }
    return false;
  });
}
const PUBLIC_QUERY_RESERVED_KEYS = /* @__PURE__ */ new Set(["page", "pageSize", "limit", "search", "locale", "translationGroup", "include"]);
const parseEntityDataJson = (record) => {
  if (!record) return {};
  if (typeof record.dataJson === "string") {
    try {
      return JSON.parse(record.dataJson);
    } catch {
      return {};
    }
  }
  if (record.dataJson && typeof record.dataJson === "object") {
    return record.dataJson;
  }
  return typeof record === "object" ? record : {};
};
const isPubliclyVisibleRecord = (record, modelFields = []) => {
  const data = parseEntityDataJson(record);
  return isReservedFieldPubliclyVisible(data, modelFields);
};
const normalizePublicFilterValue = (input) => {
  if (input === null || input === void 0) return "";
  if (typeof input === "string") return input.trim().toLowerCase();
  if (typeof input === "number" || typeof input === "boolean") return String(input).toLowerCase();
  if (Array.isArray(input)) return input.map((item) => normalizePublicFilterValue(item)).join(",");
  if (typeof input === "object") return JSON.stringify(input).toLowerCase();
  return String(input).trim().toLowerCase();
};
const matchesPublicFilterValue = (actualValue, rawExpectedValue) => {
  const expectedValues = String(rawExpectedValue || "").split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
  if (expectedValues.length === 0) {
    return true;
  }
  if (Array.isArray(actualValue)) {
    return actualValue.some((item) => expectedValues.includes(normalizePublicFilterValue(item)));
  }
  const normalizedActual = normalizePublicFilterValue(actualValue);
  return expectedValues.includes(normalizedActual);
};
const matchesPublicContainsValue = (actualValue, rawExpectedValue) => {
  const expectedTerms = String(rawExpectedValue || "").split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
  if (expectedTerms.length === 0) {
    return true;
  }
  if (Array.isArray(actualValue)) {
    return actualValue.some((item) => {
      const normalizedItem = normalizePublicFilterValue(item);
      return expectedTerms.some((term) => normalizedItem.includes(term));
    });
  }
  const normalizedActual = normalizePublicFilterValue(actualValue);
  return expectedTerms.some((term) => normalizedActual.includes(term));
};
const applyPublicDataFilters = (records, c, readWhitelist) => {
  const url = new URL(c.req.url);
  const search = (c.req.query("search") || "").trim().toLowerCase();
  const localeFilter = (c.req.query("locale") || "").trim();
  const translationGroup = (c.req.query("translationGroup") || "").trim();
  const exactFieldFilters = Array.from(url.searchParams.entries()).filter(([key, value]) => {
    if (!value || PUBLIC_QUERY_RESERVED_KEYS.has(key) || key.startsWith("_")) {
      return false;
    }
    if (key.endsWith("_like")) {
      return false;
    }
    return readWhitelist.includes(key);
  });
  const likeFieldFilters = Array.from(url.searchParams.entries()).filter(([key, value]) => {
    if (!value || PUBLIC_QUERY_RESERVED_KEYS.has(key) || key.startsWith("_") || !key.endsWith("_like")) {
      return false;
    }
    const baseFieldKey = key.slice(0, -5);
    return !!baseFieldKey && readWhitelist.includes(baseFieldKey);
  });
  return records.filter((record) => {
    const data = parseEntityDataJson(record);
    if (localeFilter && localeFilter !== "all" && record.locale !== localeFilter) {
      return false;
    }
    if (translationGroup && record.translationGroup !== translationGroup) {
      return false;
    }
    if (search) {
      const haystack = JSON.stringify(data || {}).toLowerCase();
      if (!haystack.includes(search)) {
        return false;
      }
    }
    const passesExactFilters = exactFieldFilters.every(([key, value]) => matchesPublicFilterValue(data?.[key], value));
    if (!passesExactFilters) {
      return false;
    }
    return likeFieldFilters.every(([key, value]) => {
      const baseFieldKey = key.slice(0, -5);
      return matchesPublicContainsValue(data?.[baseFieldKey], value);
    });
  });
};
const sortPublicRecords = (records, modelFields = []) => {
  const ordering = getReservedListOrdering(modelFields);
  if (!ordering) {
    return [...records];
  }
  const directionFactor = ordering.orderDirection === "desc" ? -1 : 1;
  return [...records].sort((left, right) => {
    const leftData = parseEntityDataJson(left);
    const rightData = parseEntityDataJson(right);
    const leftValue = Number(leftData?.[ordering.key] ?? ordering.defaultValue ?? 0);
    const rightValue = Number(rightData?.[ordering.key] ?? ordering.defaultValue ?? 0);
    const normalizedLeft = Number.isFinite(leftValue) ? leftValue : Number(ordering.defaultValue ?? 0);
    const normalizedRight = Number.isFinite(rightValue) ? rightValue : Number(ordering.defaultValue ?? 0);
    if (normalizedLeft !== normalizedRight) {
      return (normalizedLeft - normalizedRight) * directionFactor;
    }
    const leftCreatedAt = Number(left?.createdAt || 0);
    const rightCreatedAt = Number(right?.createdAt || 0);
    if (leftCreatedAt !== rightCreatedAt) {
      return rightCreatedAt - leftCreatedAt;
    }
    return Number(right?.id || 0) - Number(left?.id || 0);
  });
};
const SYSTEM_RECORD_FIELDS = [
  { name: "id", type: "number", source: "system", description: "实体真实主键" },
  { name: "locale", type: "string", source: "system", description: "当前记录语种编码" },
  { name: "translationGroup", type: "string", source: "system", description: "多语种记录分组标识" },
  { name: "createdAt", type: "datetime", source: "system", description: "创建时间" },
  { name: "updatedAt", type: "datetime", source: "system", description: "更新时间" }
];
const LIST_RESPONSE_FIELDS = [
  { name: "pagination", type: "object", source: "system", description: "列表接口分页信息", scopes: ["list_response"] }
];
const FRONTEND_SYSTEM_ENDPOINTS = [
  {
    action: "languages",
    method: "GET",
    path: "/api/v1/p/languages",
    description: "获取系统当前启用的公开语种列表"
  },
  {
    action: "schema_all",
    method: "GET",
    path: "/api/v1/p/schema/all",
    description: "获取全站结构总线"
  }
];
const parseJsonObject = (raw) => {
  try {
    if (!raw) return {};
    if (typeof raw === "string") {
      return JSON.parse(raw || "{}") || {};
    }
    return typeof raw === "object" ? { ...raw } : {};
  } catch {
    return {};
  }
};
const parseJsonArray = (raw) => {
  try {
    if (Array.isArray(raw)) return raw;
    return JSON.parse(String(raw || "[]")) || [];
  } catch {
    return [];
  }
};
const normalizeFieldValueType = (inputType) => {
  const rawType = String(inputType || "text").toLowerCase();
  if (["number", "integer", "float", "price"].includes(rawType)) return "number";
  if (["checkbox", "switch", "boolean"].includes(rawType)) return "boolean";
  if (["json", "object", "map"].includes(rawType)) return "object";
  if (["relation_multiple", "relation_multi", "multi_select", "checkbox_group", "tags", "gallery"].includes(rawType)) {
    return "array";
  }
  return "string";
};
const normalizeFieldUiType = (field) => {
  if (typeof field.ui === "string") return field.ui;
  if (field.ui && typeof field.ui === "object" && field.ui.inputType) return field.ui.inputType;
  return String(field.type || "text");
};
const normalizeRelationMode = (field) => {
  const rawType = String(field.type || "").toLowerCase();
  if (rawType === "relation_single") return "single";
  if (rawType === "relation_multi" || rawType === "relation_multiple") return "multi";
  return null;
};
const cloneValidation = (input) => input && typeof input === "object" ? { ...input } : void 0;
const mapFieldDescriptor = (field, fieldConfig) => {
  const name = String(field.name || field.key || "").trim();
  if (!name || name.startsWith("__")) return null;
  const config = fieldConfig?.[name] || {};
  const reservedDefinition = getReservedFieldDefinition(name);
  const relationMode = normalizeRelationMode(field);
  const targetCollectionSlug = field.relationConfig?.collectionSlug || config.target_slug || config.targetCollectionSlug || null;
  return {
    key: name,
    name,
    label: String(field.label || name),
    rawType: String(field.type || "text"),
    normalizedType: normalizeFieldValueType(field.type),
    ui: String(normalizeFieldUiType(field) || "text").toLowerCase(),
    required: Boolean(field.required),
    defaultValue: field.defaultValue,
    options: Array.isArray(config.options) ? config.options : Array.isArray(field.options) ? field.options : void 0,
    validation: cloneValidation(field.validation),
    isListDisplay: Boolean(field.isListDisplay),
    relation: relationMode || targetCollectionSlug ? {
      mode: relationMode || "single",
      targetCollectionSlug: targetCollectionSlug || void 0,
      displayField: config.display_field || config.displayField || field.relationConfig?.displayField || void 0,
      allowedCollections: Array.isArray(config.allowedCollections) ? config.allowedCollections : void 0
    } : void 0,
    reserved: reservedDefinition ? {
      isReserved: true,
      capability: reservedDefinition.capability,
      description: reservedDefinition.description,
      contractSummary: reservedDefinition.contractSummary,
      capabilitySummary: reservedDefinition.capabilitySummary
    } : {
      isReserved: false
    }
  };
};
const sanitizeFieldConfig = (fieldConfig) => {
  const safeFieldConfig = {};
  Object.entries(fieldConfig || {}).forEach(([key, value]) => {
    if (!key.startsWith("__")) {
      safeFieldConfig[key] = value;
    }
  });
  return safeFieldConfig;
};
const mapSystemResponseFields = (scopes) => SYSTEM_RECORD_FIELDS.map((field) => ({
  ...field,
  scopes
}));
const mapBusinessResponseFields = (fields, scopes, descriptionPrefix) => fields.map((field) => ({
  name: field.name,
  type: field.normalizedType,
  source: "business",
  scopes,
  description: `${descriptionPrefix}：${field.label}`
}));
const buildInternalEndpoints = (collectionSlug, supportsI18n) => [
  {
    action: "list_or_search",
    method: "GET",
    path: `/api/v1/entities/${collectionSlug}`,
    description: "列表或搜索。支持 query: page, pageSize, search, locale, translationGroup"
  },
  {
    action: "detail",
    method: "GET",
    path: `/api/v1/entities/${collectionSlug}/{id}`,
    description: "读取单条详情。id 必须是真实数字主键"
  },
  {
    action: "create",
    method: "POST",
    path: `/api/v1/entities/${collectionSlug}`,
    description: "创建单条记录，请求体直接传业务字段"
  },
  {
    action: "update",
    method: "PATCH",
    path: `/api/v1/entities/${collectionSlug}/{id}`,
    description: "更新单条记录。id 必须是真实数字主键"
  },
  {
    action: "delete",
    method: "DELETE",
    path: `/api/v1/entities/${collectionSlug}/{id}`,
    description: "删除单条记录。id 必须是真实数字主键"
  },
  {
    action: "batch_save",
    method: "POST",
    path: `/api/v1/entities/${collectionSlug}/batch-save`,
    description: supportsI18n ? "用于同一实体的多语言版本批量写入" : "仅在明确需要 batch-save 时使用"
  }
];
const normalizeAllowedMethods = (apiPolicy) => Array.isArray(apiPolicy.allowed_methods) && apiPolicy.allowed_methods.length > 0 ? apiPolicy.allowed_methods.map((item) => String(item)) : ["schema", "data"];
const buildPublicApiPolicy = (fieldConfig) => {
  const apiPolicy = parseJsonObject(fieldConfig.__api_policy);
  return {
    enabled: Boolean(apiPolicy.enabled),
    allowedMethods: normalizeAllowedMethods(apiPolicy),
    readFields: Array.isArray(apiPolicy.field_permissions?.read_whitelist) ? apiPolicy.field_permissions.read_whitelist.map((item) => String(item)) : [],
    writeFields: Array.isArray(apiPolicy.field_permissions?.write_whitelist) ? apiPolicy.field_permissions.write_whitelist.map((item) => String(item)) : [],
    security: {
      allowedDomains: Array.isArray(apiPolicy.security?.allowed_domains) ? apiPolicy.security.allowed_domains : [],
      rateLimitPerMin: Number(apiPolicy.security?.rate_limit_per_min || 0)
    },
    i18nEnabled: Boolean(apiPolicy.i18n_enabled || fieldConfig?.i18n_enabled)
  };
};
const buildKernelFromRow = (row) => {
  const fieldConfig = parseJsonObject(row.fieldConfig);
  const rawFields = parseJsonArray(row.fieldsJson);
  const fields = rawFields.map((field) => mapFieldDescriptor(field, fieldConfig)).filter(Boolean);
  const publicApi2 = buildPublicApiPolicy(fieldConfig);
  const readableFields = publicApi2.readFields.length > 0 ? fields.filter((field) => publicApi2.readFields.includes(field.name)) : fields;
  const writableFields = fields.filter((field) => publicApi2.writeFields.includes(field.name));
  const reservedCapabilities = resolveReservedFieldCapabilities(rawFields);
  return {
    collectionId: row.collectionId,
    collectionSlug: String(row.collectionSlug),
    collectionName: String(row.collectionName),
    permissionConfig: row.permissionConfig,
    modelSlug: String(row.modelSlug),
    modelName: String(row.modelName),
    fieldConfig,
    fields,
    rawFields,
    publicApi: publicApi2,
    readableFields,
    writableFields,
    supportsI18n: Boolean(publicApi2.i18nEnabled || fieldConfig?.i18n_enabled),
    reservedCapabilities
  };
};
const buildKernelFromParts = (collection, model) => buildKernelFromRow({
  collectionId: collection.id,
  collectionSlug: collection.slug,
  collectionName: collection.name,
  fieldConfig: collection.fieldConfig,
  permissionConfig: collection.permissionConfig,
  modelSlug: model.slug,
  modelName: model.name,
  fieldsJson: model.fieldsJson
});
const buildModelEntry = (kernel) => ({
  modelSlug: kernel.modelSlug,
  modelName: kernel.modelName,
  fields: kernel.fields,
  reservedCapabilities: Object.values(kernel.reservedCapabilities || {}).map((item) => ({
    key: item.key,
    capability: item.capability,
    description: item.description,
    contractSummary: item.contractSummary,
    capabilitySummary: item.capabilitySummary
  }))
});
const buildCollectionSchemaEntry = (kernel) => ({
  collectionSlug: kernel.collectionSlug,
  collectionName: kernel.collectionName,
  modelSlug: kernel.modelSlug,
  modelName: kernel.modelName,
  fields: kernel.fields,
  fieldConfig: sanitizeFieldConfig(kernel.fieldConfig),
  publicApi: {
    enabled: kernel.publicApi.enabled,
    allowedMethods: kernel.publicApi.allowedMethods,
    readFields: kernel.publicApi.readFields,
    writeFields: kernel.publicApi.writeFields
  }
});
const buildInternalContractEntry = (kernel, access) => {
  const endpoints = buildInternalEndpoints(kernel.collectionSlug, kernel.supportsI18n).filter((endpoint) => {
    if (!access) return true;
    if (endpoint.action === "list_or_search" || endpoint.action === "detail") {
      return canAccessCollectionAction(access, kernel.collectionSlug, kernel.permissionConfig, "view");
    }
    if (endpoint.action === "create" || endpoint.action === "batch_save") {
      return canAccessCollectionAction(access, kernel.collectionSlug, kernel.permissionConfig, "create");
    }
    if (endpoint.action === "update") {
      return canAccessCollectionAction(access, kernel.collectionSlug, kernel.permissionConfig, "update");
    }
    if (endpoint.action === "delete") {
      return canAccessCollectionAction(access, kernel.collectionSlug, kernel.permissionConfig, "delete");
    }
    return false;
  });
  if (endpoints.length === 0) {
    return null;
  }
  return {
    collectionSlug: kernel.collectionSlug,
    collectionName: kernel.collectionName,
    modelSlug: kernel.modelSlug,
    modelName: kernel.modelName,
    supportsI18n: kernel.supportsI18n,
    endpoints,
    requestFields: kernel.fields,
    responseFields: [
      ...mapSystemResponseFields(["list_item", "detail_record"]),
      ...mapBusinessResponseFields(kernel.fields, ["list_item", "detail_record"], "内部业务字段")
    ],
    requiredFields: kernel.fields.filter((field) => field.required).map((field) => field.name),
    relationFields: kernel.fields.filter((field) => field.relation?.targetCollectionSlug).map((field) => ({
      name: field.name,
      target: field.relation.targetCollectionSlug,
      mode: field.relation.mode
    })),
    reservedFields: kernel.fields.filter((field) => field.reserved?.isReserved),
    runtimeCapabilities: {
      i18n: {
        enabled: kernel.supportsI18n,
        batchSaveEnabled: endpoints.some((endpoint) => endpoint.action === "batch_save")
      },
      listOrdering: kernel.reservedCapabilities.list_ordering ? {
        field: kernel.reservedCapabilities.list_ordering.key,
        direction: kernel.reservedCapabilities.list_ordering.orderDirection,
        fallback: ["createdAt desc", "id desc"]
      } : {
        fallback: ["createdAt desc", "id desc"]
      }
    }
  };
};
const buildFrontendEndpoints = (kernel) => {
  const endpoints = [];
  if (kernel.publicApi.allowedMethods.includes("schema")) {
    endpoints.push({
      action: "schema",
      method: "GET",
      path: `/api/v1/p/schema/${kernel.collectionSlug}`,
      description: "获取前端可提交字段的公开 schema"
    });
  }
  if (kernel.publicApi.allowedMethods.includes("data")) {
    endpoints.push(
      {
        action: "list_or_search",
        method: "GET",
        path: `/api/v1/p/data/${kernel.collectionSlug}`,
        description: "公开列表或搜索"
      },
      {
        action: "detail",
        method: "GET",
        path: `/api/v1/p/data/${kernel.collectionSlug}/{id}`,
        description: "公开详情"
      }
    );
  }
  if (kernel.publicApi.allowedMethods.includes("submit")) {
    endpoints.push({
      action: "submit",
      method: "POST",
      path: `/api/v1/p/submit/${kernel.collectionSlug}`,
      description: "公开提交接口"
    });
  }
  return endpoints;
};
const buildFrontendContractEntry = (kernel) => {
  if (!kernel.publicApi.enabled) return null;
  const endpoints = buildFrontendEndpoints(kernel);
  if (endpoints.length === 0) return null;
  const publicResponseFields = [
    ...mapSystemResponseFields(["list_item", "detail_record"]),
    ...mapBusinessResponseFields(kernel.readableFields, ["list_item", "detail_record"], "公开白名单业务字段"),
    ...LIST_RESPONSE_FIELDS,
    {
      name: "_seo",
      type: "object",
      source: "runtime",
      scopes: ["list_item", "detail_record"],
      description: "SEO/GEO 增强字段",
      condition: "仅在该集合启用 SEO/GEO 映射时返回"
    }
  ];
  const visibilityRule = kernel.reservedCapabilities.public_visibility ? {
    field: kernel.reservedCapabilities.public_visibility.key,
    visibleValue: kernel.reservedCapabilities.public_visibility.publicVisibleValue,
    description: kernel.reservedCapabilities.public_visibility.capabilitySummary
  } : null;
  const orderingRule = kernel.reservedCapabilities.list_ordering ? {
    field: kernel.reservedCapabilities.list_ordering.key,
    direction: kernel.reservedCapabilities.list_ordering.orderDirection,
    fallback: ["createdAt desc", "id desc"],
    description: kernel.reservedCapabilities.list_ordering.capabilitySummary
  } : {
    fallback: ["createdAt desc", "id desc"]
  };
  return {
    collectionSlug: kernel.collectionSlug,
    collectionName: kernel.collectionName,
    modelSlug: kernel.modelSlug,
    modelName: kernel.modelName,
    supportsI18n: kernel.supportsI18n,
    allowedMethods: kernel.publicApi.allowedMethods,
    endpoints,
    readFields: kernel.publicApi.readFields.length > 0 ? kernel.publicApi.readFields : kernel.fields.map((field) => field.name),
    writeFields: kernel.publicApi.writeFields,
    fields: kernel.fields.map((field) => ({
      ...field,
      exposure: {
        readable: kernel.readableFields.some((item) => item.name === field.name),
        writable: kernel.writableFields.some((item) => item.name === field.name)
      }
    })),
    responseFields: publicResponseFields,
    filters: {
      system: Array.from(PUBLIC_QUERY_RESERVED_KEYS.values()),
      exact: kernel.readableFields.map((field) => field.name),
      like: kernel.readableFields.map((field) => `${field.name}_like`)
    },
    visibilityRules: visibilityRule,
    orderingRules: orderingRule,
    submitContract: {
      acceptedFields: kernel.writableFields,
      stripsUnknownFields: true,
      relationValidation: kernel.writableFields.filter((field) => field.relation?.targetCollectionSlug).map((field) => ({
        field: field.name,
        mode: field.relation.mode,
        targetCollectionSlug: field.relation.targetCollectionSlug
      })),
      metadataInjection: ["visitor_tracking", "crm_governance"],
      defaultLocale: "en-US"
    }
  };
};
class ContractDescriptorService {
  static normalizePublicApiPolicy(fieldConfig) {
    return buildPublicApiPolicy(parseJsonObject(fieldConfig));
  }
  static buildCollectionKernel(collection, model) {
    return buildKernelFromParts(collection, model);
  }
  static async listCollectionKernels(db) {
    const rows = await db.select({
      collectionId: collections.id,
      collectionSlug: collections.slug,
      collectionName: collections.name,
      fieldConfig: collections.fieldConfig,
      permissionConfig: collections.permissionConfig,
      modelSlug: models.slug,
      modelName: models.name,
      fieldsJson: models.fieldsJson
    }).from(collections).innerJoin(models, eq(collections.modelId, models.id)).all();
    return rows.map((row) => buildKernelFromRow(row));
  }
  static buildPublicCollectionSchema(collection, model) {
    const kernel = buildKernelFromParts(collection, model);
    return {
      modelSlug: kernel.modelSlug,
      modelName: kernel.modelName,
      collectionSlug: kernel.collectionSlug,
      collectionName: kernel.collectionName,
      fields: kernel.writableFields,
      fieldConfig: sanitizeFieldConfig(kernel.fieldConfig),
      publicApi: {
        enabled: kernel.publicApi.enabled,
        allowedMethods: kernel.publicApi.allowedMethods,
        readFields: kernel.publicApi.readFields,
        writeFields: kernel.publicApi.writeFields
      }
    };
  }
  static buildPublicGatewayState(collection, model) {
    const kernel = buildKernelFromParts(collection, model);
    return {
      kernel,
      apiPolicy: {
        enabled: kernel.publicApi.enabled,
        allowed_methods: kernel.publicApi.allowedMethods,
        field_permissions: {
          read_whitelist: kernel.publicApi.readFields,
          write_whitelist: kernel.publicApi.writeFields
        },
        security: {
          allowed_domains: kernel.publicApi.security.allowedDomains,
          rate_limit_per_min: kernel.publicApi.security.rateLimitPerMin
        }
      }
    };
  }
  static buildPublicReadProfile(collection, model) {
    const kernel = buildKernelFromParts(collection, model);
    return {
      readWhitelist: kernel.publicApi.readFields.length > 0 ? kernel.publicApi.readFields : kernel.fields.map((field) => field.name),
      readableFields: kernel.readableFields,
      reservedCapabilities: kernel.reservedCapabilities
    };
  }
  static buildPublicSubmitProfile(collection, model) {
    const kernel = buildKernelFromParts(collection, model);
    return {
      writeWhitelist: kernel.publicApi.writeFields,
      writableFields: kernel.writableFields
    };
  }
  static async buildSchemaCatalog(db, access) {
    const kernels = await this.listCollectionKernels(db);
    const visibleKernels = access ? kernels.filter((kernel) => canAccessCollectionAction(access, kernel.collectionSlug, kernel.permissionConfig, "view")) : kernels;
    const modelMap = /* @__PURE__ */ new Map();
    visibleKernels.forEach((kernel) => {
      if (!modelMap.has(kernel.modelSlug)) {
        modelMap.set(kernel.modelSlug, buildModelEntry(kernel));
      }
    });
    return {
      models: Array.from(modelMap.values()),
      collections: visibleKernels.map((kernel) => buildCollectionSchemaEntry(kernel)),
      reservedFieldCatalog: getReservedFieldDefinitions()
    };
  }
  static async buildInternalContracts(db, access) {
    const kernels = await this.listCollectionKernels(db);
    return kernels.map((kernel) => buildInternalContractEntry(kernel, access)).filter(Boolean);
  }
  static async buildFrontendContracts(db) {
    const kernels = await this.listCollectionKernels(db);
    return kernels.map((kernel) => buildFrontendContractEntry(kernel)).filter(Boolean);
  }
  static buildPromptMarkdown(contracts, limit = 20) {
    const lines = [
      "# 🧭 系统真实数据接口契约：",
      "以下是系统真实可调用的数据 CRUD 规则。不要自造 create_xxx/list_xxx 之类动作名。",
      "所有业务数据统一优先走 content_manager 或直接 internal path，对应真实端点为 /api/v1/entities/{collectionSlug}。",
      "普通单条新增使用 POST /api/v1/entities/{collectionSlug}；只有多语言或明确批量场景才使用 /batch-save。"
    ];
    contracts.slice(0, limit).forEach((item, index) => {
      lines.push(`${index + 1}. ${item.collectionName} (\`${item.collectionSlug}\`, model=\`${item.modelSlug}\`)`);
      item.endpoints.forEach((endpoint) => {
        lines.push(`   - ${endpoint.action}: ${endpoint.method} ${endpoint.path}`);
      });
      if (Array.isArray(item.requiredFields) && item.requiredFields.length > 0) {
        lines.push(`   - Required: ${item.requiredFields.join(", ")}`);
      }
      if (Array.isArray(item.relationFields) && item.relationFields.length > 0) {
        lines.push(`   - Relation IDs: ${item.relationFields.map((field) => `${field.name} -> ${field.target}`).join(", ")}`);
      }
    });
    if (contracts.length > limit) {
      lines.push("其余集合未在此处展开。如需完整机器可读契约，请调用 GET /api/v1/p/data-contract/all。");
    }
    return lines.join("\n");
  }
  static getFrontendSystemEndpoints() {
    return FRONTEND_SYSTEM_ENDPOINTS;
  }
}
const rateLimitMap = /* @__PURE__ */ new Map();
function checkRateLimit(ip, limitPerMin) {
  if (limitPerMin <= 0) return true;
  const now = Date.now();
  let record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    record = { count: 1, resetAt: now + 60 * 1e3 };
    rateLimitMap.set(ip, record);
    return true;
  }
  record.count += 1;
  return record.count <= limitPerMin;
}
const publicContractGateway = async (c, next) => {
  const action = c.req.param("action");
  const collectionSlug = c.req.param("slug");
  if (action === "schema" && collectionSlug === "all" || action === "data-contract" && (collectionSlug === "all" || collectionSlug === "frontend")) {
    return await next();
  }
  const db = await createDbClient(c.env.DB);
  const result = await db.select({
    collection: collections,
    model: models
  }).from(collections).leftJoin(models, eq(collections.modelId, models.id)).where(eq(collections.slug, collectionSlug)).get();
  if (!result || !result.collection || !result.model) {
    return c.json({ error: "Not Found", message: "The requested resource does not exist." }, 404);
  }
  const gatewayState = ContractDescriptorService.buildPublicGatewayState(result.collection, result.model);
  const apiPolicy = gatewayState.apiPolicy;
  const allowedMethods = apiPolicy.allowed_methods;
  if (!apiPolicy.enabled) {
    return c.json({ error: "Forbidden", message: "Public API access is disabled for this resource." }, 403);
  }
  const reqPath = c.req.path;
  const methodType = reqPath.includes("/schema/") ? "schema" : reqPath.includes("/data/") ? "data" : reqPath.includes("/submit/") ? "submit" : "unknown";
  if (!allowedMethods.includes(methodType)) {
    return c.json({
      error: "Method Not Allowed",
      message: `Method '${methodType}' is not allowed on this resource. Please enable '${methodType.toUpperCase()}' in /admin/api-management.`
    }, 405);
  }
  const origin = c.req.header("origin") || c.req.header("referer") || "";
  const allowedDomains = apiPolicy.security?.allowed_domains || [];
  if (allowedDomains.length > 0) {
    const isAllowed = allowedDomains.some((domain) => origin.includes(domain) || domain === "*");
    if (!isAllowed) {
      return c.json({ error: "Forbidden", message: "CORS Origin is not permitted." }, 403);
    }
  }
  const ip = c.req.header("cf-connecting-ip") || c.req.header("x-real-ip") || "127.0.0.1";
  const limit = apiPolicy.security?.rate_limit_per_min || 0;
  if (limit > 0 && !checkRateLimit(ip, limit)) {
    return c.json({ error: "Too Many Requests", message: "Rate limit exceeded." }, 429);
  }
  c.set("model", result.model);
  c.set("collection", result.collection);
  c.set("contractKernel", gatewayState.kernel);
  c.set("apiPolicy", apiPolicy);
  c.set("clientInfo", {
    ip,
    country: c.req.header("cf-ipcountry") || "Unknown",
    referer: c.req.header("referer") || "",
    userAgent: c.req.header("user-agent") || ""
  });
  await next();
};
const attachPublicContractGateway = (publicApi2) => {
  publicApi2.use("/:action/:slug", publicContractGateway);
  publicApi2.use("/:action/:slug/:id", publicContractGateway);
};
const mappingsCache = /* @__PURE__ */ new Map();
const enabledCache = /* @__PURE__ */ new Set();
let cacheTimestamp = 0;
const CACHE_TTL = 1e3 * 60 * 5;
async function getMappingsForCollection(db, collectionSlug) {
  const now = Date.now();
  if (now - cacheTimestamp > CACHE_TTL) {
    mappingsCache.clear();
    enabledCache.clear();
  }
  if (mappingsCache.has(collectionSlug)) {
    return mappingsCache.get(collectionSlug);
  }
  const mappings = await db.select().from(seoGeoMappings).where(eq(seoGeoMappings.collectionSlug, collectionSlug)).all();
  const result = mappings.reduce((acc, mapping) => {
    acc[mapping.semanticType] = {
      sourceFieldName: mapping.sourceFieldName,
      directValue: mapping.directValue
    };
    return acc;
  }, {});
  mappingsCache.set(collectionSlug, result);
  cacheTimestamp = now;
  return result;
}
class SeoGeoService {
  /**
   * 检查集合是否启用了 SEO/GEO
   */
  static async isCollectionEnabled(db, collectionSlug) {
    const now = Date.now();
    if (now - cacheTimestamp > CACHE_TTL) {
      enabledCache.clear();
      mappingsCache.clear();
    }
    if (enabledCache.size === 0) {
      const enabled = await db.select().from(seoGeoEnabledCollections).all();
      enabled.forEach((e) => enabledCache.add(e.collectionSlug));
    }
    return enabledCache.has(collectionSlug);
  }
  /**
   * 使用已定义的 SEO/GEO 规则来丰富实体数据
   * @param db - 数据库实例
   * @param entityData - 原始实体数据
   * @param collectionSlug - 实体所属的集合 slug
   * @returns 增强后的实体数据 (附加 _seo 对象)
   */
  static async enrichWithSeoGeo(db, entityData, collectionSlug) {
    if (!entityData || !collectionSlug) {
      return entityData;
    }
    const isEnabled = await this.isCollectionEnabled(db, collectionSlug);
    if (!isEnabled) {
      return entityData;
    }
    const rules = await getMappingsForCollection(db, collectionSlug);
    if (Object.keys(rules).length === 0) {
      return entityData;
    }
    const seoData = {};
    for (const semanticType in rules) {
      const { sourceFieldName, directValue } = rules[semanticType];
      if (directValue) {
        seoData[semanticType] = directValue;
      } else if (sourceFieldName && entityData.dataJson && sourceFieldName in entityData.dataJson) {
        seoData[semanticType] = entityData.dataJson[sourceFieldName];
      }
    }
    if (Object.keys(seoData).length > 0) {
      return {
        ...entityData,
        _seo: seoData
      };
    }
    return entityData;
  }
  /**
   * 批量丰富实体数据
   */
  static async enrichBatchWithSeoGeo(db, entities2, collectionSlug) {
    const isEnabled = await this.isCollectionEnabled(db, collectionSlug);
    if (!isEnabled) {
      return entities2;
    }
    const rules = await getMappingsForCollection(db, collectionSlug);
    if (Object.keys(rules).length === 0) {
      return entities2;
    }
    return entities2.map((entityData) => {
      const seoData = {};
      for (const semanticType in rules) {
        const { sourceFieldName, directValue } = rules[semanticType];
        if (directValue) {
          seoData[semanticType] = directValue;
        } else if (sourceFieldName && entityData.dataJson && sourceFieldName in entityData.dataJson) {
          seoData[semanticType] = entityData.dataJson[sourceFieldName];
        }
      }
      if (Object.keys(seoData).length > 0) {
        return { ...entityData, _seo: seoData };
      }
      return entityData;
    });
  }
}
const SeoGeoService$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SeoGeoService
}, Symbol.toStringTag, { value: "Module" }));
const registerPublicReadRoutes = (publicApi2) => {
  publicApi2.get("/translations", async (c) => {
    const locale = c.req.query("locale") || "zh-CN";
    const db = await createDbClient(c.env.DB);
    const record = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, "member_translations")
    });
    if (!record) {
      return c.json({ success: true, data: null });
    }
    const translations = JSON.parse(record.value);
    return c.json({ success: true, data: translations[locale] || null });
  });
  const serializeRecord = (record, readWhitelist, seoData) => {
    const data = parseEntityDataJson(record);
    const filteredData = readWhitelist.reduce((acc, fieldName) => {
      if (Object.prototype.hasOwnProperty.call(data, fieldName)) {
        acc[fieldName] = data[fieldName];
      }
      return acc;
    }, {});
    const result = {
      id: record.id,
      locale: record.locale,
      translationGroup: record.translationGroup,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      ...filteredData
    };
    if (seoData) {
      result._seo = seoData;
    }
    return result;
  };
  publicApi2.get("/data/:slug/:id", async (c) => {
    const collection = c.get("collection");
    const kernel = c.get("contractKernel");
    const db = await createDbClient(c.env.DB);
    const modelFields = kernel.rawFields;
    const readWhitelist = kernel.publicApi.readFields.length > 0 ? kernel.publicApi.readFields : kernel.fields.map((field) => field.name);
    const id = parseInt(c.req.param("id") || "", 10);
    if (!Number.isFinite(id) || id <= 0) {
      return c.json({ error: "Bad Request", message: "Invalid entity id." }, 400);
    }
    const record = await db.select().from(entities).where(and(
      eq(entities.id, id),
      eq(entities.collectionId, collection.id)
    )).get();
    if (!record || !isPubliclyVisibleRecord(record, modelFields)) {
      return c.json({ error: "Not Found", message: "The requested published entity does not exist." }, 404);
    }
    const enrichedRecord = await SeoGeoService.enrichWithSeoGeo(db, record, collection.slug);
    const seoData = enrichedRecord._seo;
    return c.json({
      success: true,
      data: serializeRecord(record, readWhitelist, seoData)
    });
  });
  publicApi2.get("/data/:slug", async (c) => {
    const collection = c.get("collection");
    const kernel = c.get("contractKernel");
    const db = await createDbClient(c.env.DB);
    const modelFields = kernel.rawFields;
    const readWhitelist = kernel.publicApi.readFields.length > 0 ? kernel.publicApi.readFields : kernel.fields.map((field) => field.name);
    const page = Math.max(1, parseInt(c.req.query("page") || "1"));
    const pageSize = Math.min(100, Math.max(1, parseInt(c.req.query("pageSize") || c.req.query("limit") || "20")));
    const records = await db.select().from(entities).where(eq(entities.collectionId, collection.id)).orderBy(desc(entities.createdAt), desc(entities.id)).all();
    const publishedRecords = records.filter((record) => isPubliclyVisibleRecord(record, modelFields));
    const orderedRecords = sortPublicRecords(publishedRecords, modelFields);
    const filteredRecords = applyPublicDataFilters(orderedRecords, c, readWhitelist);
    const enrichedRecords = await SeoGeoService.enrichBatchWithSeoGeo(db, filteredRecords, collection.slug);
    const total = enrichedRecords.length;
    const totalPages = Math.ceil(total / pageSize);
    const paginatedRecords = enrichedRecords.slice((page - 1) * pageSize, page * pageSize);
    const finalRecords = paginatedRecords.map((record) => {
      const seoData = record._seo;
      return serializeRecord(record, readWhitelist, seoData);
    });
    return c.json({
      success: true,
      list: finalRecords,
      pagination: {
        total,
        page,
        pageSize,
        totalPages
      }
    });
  });
};
const hasInternalDataContractAccess = async (c) => {
  const agentProxyAuth = c.get("agentProxyAuth");
  if (agentProxyAuth) {
    return {
      allowed: true,
      mode: "agent_proxy",
      agentProxyAuth
    };
  }
  let user = c.get("user");
  if (!user?.id) {
    try {
      const { adminAuth } = await getAuthInstances(c.env.DB);
      const cookieHeader = c.req.header("Cookie") ?? "";
      let sessionId = adminAuth.readSessionCookie(cookieHeader);
      if (!sessionId && cookieHeader.includes("admin_session=")) {
        const match = cookieHeader.match(/admin_session=([^;]+)/);
        if (match) sessionId = match[1];
      }
      if (sessionId) {
        const sessionResult = await adminAuth.validateSession(sessionId);
        user = sessionResult?.user || null;
      }
    } catch {
      user = null;
    }
  }
  if (!user?.id) {
    return {
      allowed: false,
      status: 401,
      body: {
        success: false,
        error: "Unauthorized",
        message: "The full data contract endpoint is restricted to authenticated audit viewers."
      }
    };
  }
  const db = await createDbClient(c.env.DB);
  const authInfo = await getAdminAuthInfo(db, String(user.id));
  const permissions2 = Array.isArray(authInfo.permissions) ? authInfo.permissions : [];
  const hasAuditAccess = permissions2.includes("*") || permissions2.includes("all") || permissions2.includes("role.manage");
  if (!hasAuditAccess) {
    return {
      allowed: false,
      status: 403,
      body: {
        success: false,
        error: "Forbidden",
        message: "The full data contract endpoint requires audit permission."
      }
    };
  }
  return {
    allowed: true,
    mode: "admin_audit"
  };
};
const registerPublicSchemaRoutes = (publicApi2) => {
  publicApi2.get("/languages", async (c) => {
    const db = await createDbClient(c.env.DB);
    try {
      const allLangs = await db.select().from(languages).where(eq(languages.status, "active")).orderBy(asc(languages.sortOrder), asc(languages.createdAt), asc(languages.code)).all();
      return c.json({ success: true, data: allLangs });
    } catch (err) {
      return c.json({ success: false, error: err.message }, 500);
    }
  });
  publicApi2.get("/schema/all", async (c) => {
    try {
      const db = await createDbClient(c.env.DB);
      const agentProxyAuth = c.get("agentProxyAuth");
      const catalog = await ContractDescriptorService.buildSchemaCatalog(
        db,
        agentProxyAuth ? {
          permissions: agentProxyAuth.permissions || [],
          roles: agentProxyAuth.roles || [],
          isAdmin: Boolean(agentProxyAuth.isAdmin)
        } : void 0
      );
      return c.json({
        success: true,
        viewer: agentProxyAuth ? {
          mode: "agent_rbac",
          agentId: agentProxyAuth.agentId,
          roleName: agentProxyAuth.roleName,
          collections: catalog.collections.map((item) => item.collectionSlug)
        } : {
          mode: "public_full"
        },
        models: catalog.models,
        collections: catalog.collections,
        reservedFields: catalog.reservedFieldCatalog
      });
    } catch (err) {
      return c.json({ success: false, error: err?.message || "公开 Schema 加载失败" }, 500);
    }
  });
  publicApi2.get("/data-contract/all", async (c) => {
    try {
      const accessCheck = await hasInternalDataContractAccess(c);
      if (!accessCheck.allowed) {
        return c.json(accessCheck.body, accessCheck.status);
      }
      const db = await createDbClient(c.env.DB);
      const agentProxyAuth = accessCheck.mode === "agent_proxy" ? accessCheck.agentProxyAuth : null;
      const contracts = await ContractDescriptorService.buildInternalContracts(
        db,
        agentProxyAuth ? {
          permissions: agentProxyAuth.permissions || [],
          roles: agentProxyAuth.roles || [],
          isAdmin: Boolean(agentProxyAuth.isAdmin)
        } : void 0
      );
      return c.json({
        success: true,
        data: {
          viewer: agentProxyAuth ? {
            mode: "agent_rbac",
            agentId: agentProxyAuth.agentId,
            roleName: agentProxyAuth.roleName
          } : {
            mode: "admin_audit"
          },
          collections: contracts
        }
      });
    } catch (err) {
      return c.json({ success: false, error: err?.message || "系统数据接口契约加载失败" }, 500);
    }
  });
  publicApi2.get("/data-contract/frontend", async (c) => {
    try {
      const db = await createDbClient(c.env.DB);
      const contracts = await ContractDescriptorService.buildFrontendContracts(db);
      return c.json({
        success: true,
        data: {
          viewer: {
            mode: "public_frontend"
          },
          systemEndpoints: ContractDescriptorService.getFrontendSystemEndpoints(),
          collections: contracts
        }
      });
    } catch (err) {
      return c.json({ success: false, error: err?.message || "前端公开接口契约加载失败" }, 500);
    }
  });
  publicApi2.get("/schema/:slug", async (c) => {
    const model = c.get("model");
    const collection = c.get("collection");
    return c.json({
      success: true,
      data: ContractDescriptorService.buildPublicCollectionSchema(collection, model)
    });
  });
};
class SeoUtils {
  static normalizePath(path) {
    const rawPath = String(path || "").trim();
    if (!rawPath) return "";
    let pathname = rawPath;
    try {
      pathname = new URL(rawPath, "https://placeholder.local").pathname;
    } catch {
      pathname = rawPath.split("?")[0].split("#")[0];
    }
    if (!pathname.startsWith("/")) {
      pathname = `/${pathname}`;
    }
    pathname = pathname.replace(/\/{2,}/g, "/");
    if (pathname.length > 1) {
      pathname = pathname.replace(/\/$/, "");
    }
    return pathname;
  }
  static buildCanonicalUrlFromPath(baseUrl, locale, defaultLocale, path) {
    const cleanBase = baseUrl.replace(/\/$/, "");
    const isDefault = locale === defaultLocale;
    const prefix = isDefault ? "" : `/${locale}`;
    const normalizedPath = this.normalizePath(path || "/");
    return `${cleanBase}${prefix}${normalizedPath === "/" ? "" : normalizedPath}`;
  }
  static resolveAbsoluteUrl(value, baseUrl) {
    const raw = String(value || "").trim();
    if (!raw) {
      return "";
    }
    try {
      return new URL(raw).toString();
    } catch {
      if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(raw)) {
        try {
          return new URL(`https://${raw}`).toString();
        } catch {
          return "";
        }
      }
      const normalizedBase = this.normalizeBaseUrl(baseUrl);
      if (!normalizedBase) {
        return "";
      }
      try {
        return new URL(raw, normalizedBase).toString();
      } catch {
        return "";
      }
    }
  }
  static normalizeBaseUrl(...candidates) {
    for (const candidate of candidates) {
      const resolved = this.resolveAbsoluteUrl(candidate);
      if (resolved) {
        return resolved.replace(/\/$/, "");
      }
    }
    return "";
  }
  static resolveEntityCanonicalPath(recordData, collectionSlug, id) {
    const directPath = this.normalizePath(
      recordData?.canonical_path || recordData?.path || recordData?.url || recordData?.href || recordData?.permalink || ""
    );
    if (directPath) {
      return directPath;
    }
    const genericSlug = String(recordData?.slug || "").trim().replace(/^\/+|\/+$/g, "");
    if (genericSlug) {
      return this.normalizePath(`/${collectionSlug}/${id}-${genericSlug}`);
    }
    return this.normalizePath(`/${collectionSlug}/${id}`);
  }
  /**
   * 模板变量解析: 支持 {{name}} - {{site_name}}
   * 解析失败时优雅返回空字符串，不保留 {{}} 占位符
   */
  static resolveTemplate(template, data) {
    if (!template) return "";
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
      const val = data[key.trim()];
      return val !== void 0 && val !== null ? String(val) : "";
    });
  }
}
class SitemapBuilder {
  static getPriority(item = {}) {
    if (Number.isFinite(Number(item.collectionPriority))) {
      return Number(item.collectionPriority);
    }
    if (item.collectionSlug === "industry" || item.collectionSlug === "b2b_product") {
      return 0.9;
    }
    if (item.collectionSlug === "entity" || item.collectionSlug === "case_study" || item.collectionSlug === "resource") {
      return 0.8;
    }
    if (item.collectionSlug === "article") {
      return 0.7;
    }
    if (item.collectionSlug === "faq") {
      return 0.6;
    }
    if (item.collectionSlug === "page" && item.pageType === "product") {
      return 0.9;
    }
    return 0.6;
  }
  static shouldIncludeInSitemap(record = {}, modelFields = []) {
    const robotsMeta = String(record.robots_meta || "").toLowerCase();
    if (robotsMeta.includes("noindex") || record.noindex === true) {
      return false;
    }
    if (!isReservedFieldPubliclyVisible(record, modelFields)) {
      return false;
    }
    if (record.visibility && String(record.visibility) === "inactive") {
      return false;
    }
    if (record.is_private === true) {
      return false;
    }
    return true;
  }
  static generateSitemapEntries(entries, frontendUrl, defaultLocale = "en-US") {
    const normalizedBaseUrl = SeoUtils.normalizeBaseUrl(frontendUrl);
    if (!normalizedBaseUrl) {
      return "";
    }
    return (Array.isArray(entries) ? entries : []).map((entry) => {
      if (!entry?.canonicalPath) {
        return "";
      }
      const canonicalUrl = SeoUtils.buildCanonicalUrlFromPath(
        normalizedBaseUrl,
        entry.locale || defaultLocale,
        defaultLocale,
        entry.canonicalPath
      );
      if (!canonicalUrl) {
        return "";
      }
      const lastmod = entry.updatedAt || entry.createdAt ? new Date(entry.updatedAt || entry.createdAt).toISOString() : "";
      const changefreq = entry.changefreq || "weekly";
      const priority = this.getPriority(entry).toFixed(1);
      const alternateLinks = Array.isArray(entry.alternates) ? entry.alternates.filter((item) => item?.canonicalPath && item.locale).map((item) => {
        const altUrl = SeoUtils.buildCanonicalUrlFromPath(
          normalizedBaseUrl,
          item.locale,
          defaultLocale,
          item.canonicalPath
        );
        return altUrl ? `    <xhtml:link rel="alternate" hreflang="${item.locale}" href="${altUrl}" />` : "";
      }).filter(Boolean).join("\n") : "";
      return `  <url>
    <loc>${canonicalUrl}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${`<changefreq>${changefreq}</changefreq>`}
    <priority>${priority}</priority>
${alternateLinks}
  </url>`;
    }).filter(Boolean).join("\n");
  }
}
const SITE_SETTINGS_KEY = "site_settings";
const SITE_SETTINGS_DEFAULTS = {
  site_name: "",
  site_description: "",
  canonical_domain: "",
  default_language: ""
};
class SiteSettingsService {
  static parse(rawValue) {
    if (!rawValue) {
      return { ...SITE_SETTINGS_DEFAULTS };
    }
    try {
      const parsed = JSON.parse(rawValue);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return { ...SITE_SETTINGS_DEFAULTS };
      }
      return {
        ...SITE_SETTINGS_DEFAULTS,
        ...parsed
      };
    } catch {
      return { ...SITE_SETTINGS_DEFAULTS };
    }
  }
  static async getPayload(db) {
    const record = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, SITE_SETTINGS_KEY)
    });
    return {
      ...this.parse(record?.value),
      id: SITE_SETTINGS_KEY
    };
  }
  static async savePayload(db, payload) {
    const nextData = {
      ...SITE_SETTINGS_DEFAULTS,
      ...payload || {}
    };
    const serializedValue = JSON.stringify(nextData);
    const existing = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, SITE_SETTINGS_KEY)
    });
    if (existing) {
      await db.update(systemSettings).set({
        value: serializedValue,
        description: "站点基础信息与默认前端域名配置",
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(systemSettings.key, SITE_SETTINGS_KEY));
    } else {
      await db.insert(systemSettings).values({
        key: SITE_SETTINGS_KEY,
        value: serializedValue,
        description: "站点基础信息与默认前端域名配置",
        updatedAt: /* @__PURE__ */ new Date()
      });
    }
    return SITE_SETTINGS_KEY;
  }
}
const buildEmptySitemapXml = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
</urlset>`;
const buildSitemapResponseXml = (xmlEntries) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlEntries}
</urlset>`;
const dedupeSitemapEntries = (entries) => {
  const unique = /* @__PURE__ */ new Map();
  for (const entry of Array.isArray(entries) ? entries : []) {
    if (!entry?.canonicalPath) {
      continue;
    }
    const key = `${entry.locale || ""}:${entry.canonicalPath}`;
    if (!unique.has(key)) {
      unique.set(key, entry);
    }
  }
  return Array.from(unique.values());
};
const registerPublicSitemapRoutes = (publicApi2) => {
  publicApi2.get("/sitemap.xml", async (c) => {
    const db = await createDbClient(c.env.DB);
    const [defaultLangRow, siteSettings] = await Promise.all([
      db.select().from(languages).where(eq(languages.isDefault, true)).get(),
      SiteSettingsService.getPayload(db)
    ]);
    const frontendUrl = SeoUtils.normalizeBaseUrl(siteSettings?.canonical_domain) || "";
    const defaultLocale = defaultLangRow?.code || siteSettings?.default_language || "en-US";
    if (!frontendUrl) {
      return c.text(buildEmptySitemapXml(), 200, {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=86400"
      });
    }
    const [allCols, allModels] = await Promise.all([
      db.select().from(collections).all(),
      db.select().from(models).all()
    ]);
    const enabledCols = allCols.filter((col) => {
      const policy = col.fieldConfig?.__api_policy;
      return Boolean(policy?.enabled) && Array.isArray(policy?.allowed_methods) && policy.allowed_methods.includes("data");
    });
    const modelFieldMap = new Map(
      allModels.map((model) => {
        const parsedFields = typeof model?.fieldsJson === "string" ? JSON.parse(model.fieldsJson || "[]") : Array.isArray(model?.fieldsJson) ? model.fieldsJson : [];
        return [Number(model.id), Array.isArray(parsedFields) ? parsedFields : []];
      })
    );
    const colIds = enabledCols.map((col) => col.id);
    const rawEntities = colIds.length > 0 ? await db.select().from(entities).where(inArray(entities.collectionId, colIds)).all() : [];
    const contentEntries = rawEntities.map((record) => {
      const collection = enabledCols.find((item) => item.id === record.collectionId);
      const modelFields = collection?.modelId ? modelFieldMap.get(Number(collection.modelId)) || [] : [];
      const recordData = parseEntityDataJson(record);
      if (!collection || !isPubliclyVisibleRecord(record, modelFields) || !SitemapBuilder.shouldIncludeInSitemap(recordData, modelFields)) {
        return null;
      }
      return {
        ...recordData,
        id: record.id,
        locale: record.locale || defaultLocale,
        translationGroup: record.translationGroup,
        collectionSlug: collection.slug || "",
        updatedAt: record.updatedAt || record.createdAt,
        createdAt: record.createdAt,
        canonicalPath: SeoUtils.resolveEntityCanonicalPath(recordData, collection.slug || "", record.id),
        pageType: recordData.page_type
      };
    }).filter(Boolean);
    const mergedEntries = dedupeSitemapEntries([
      {
        id: "site-home",
        locale: defaultLocale,
        translationGroup: "site-home",
        collectionSlug: "page",
        canonicalPath: "/",
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        priority: 1,
        pageType: "home",
        isHomepage: true
      },
      ...contentEntries
    ]);
    const xmlEntries = mergedEntries.map((entry) => {
      const alternates = entry.translationGroup ? mergedEntries.filter((alt) => alt.translationGroup && alt.translationGroup === entry.translationGroup) : [];
      return SitemapBuilder.generateSitemapEntries([{ ...entry, alternates }], frontendUrl, defaultLocale);
    }).filter(Boolean).join("\n");
    return c.text(buildSitemapResponseXml(xmlEntries), 200, {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    });
  });
};
class ResendProvider {
  constructor(apiKey, senderEmail = "onboarding@resend.dev") {
    this.apiKey = apiKey;
    this.senderEmail = senderEmail;
  }
  apiKey;
  senderEmail;
  async sendMail(to, subject, html, senderName) {
    const from = senderName ? `${senderName} <${this.senderEmail}>` : this.senderEmail;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html
      })
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend mail failed: ${res.status} ${err}`);
    }
    return true;
  }
}
class SMTPProvider {
  constructor(config) {
    this.config = config;
  }
  config;
  async sendMail(to, subject, html, senderName) {
    console.log(`[SMTP] Sending fake SMTP mail to ${to.join(", ")} with subject: ${subject}`);
    return true;
  }
}
class NotifyService {
  static renderTemplate(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
      const val = data[key.trim()];
      return val === null || val === void 0 ? "" : String(val);
    });
  }
  static buildHtmlTable(data) {
    let rows = "";
    for (const [key, value] of Object.entries(data)) {
      rows += `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%; background-color: #f9f9f9;">${key}</td>
          <td style="padding: 10px; border: 1px solid #ddd; word-break: break-all;">${value === null || value === void 0 ? "" : value}</td>
        </tr>
      `;
    }
    return `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">新数据提交通知</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tbody>
            ${rows}
          </tbody>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">此邮件由系统自动发送，请勿直接回复。</p>
      </div>
    `;
  }
  static async dispatchNotification(db, collection, formData) {
    try {
      const policy = collection.fieldConfig?.__notification_policy;
      if (!policy || !policy.enabled) {
        return;
      }
      if (policy.webhook_url) {
        try {
          fetch(policy.webhook_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          }).catch((e) => console.error("[NotifyService] Webhook async error:", e.message));
        } catch (e) {
          console.error("[NotifyService] Webhook call failed:", e.message);
        }
      }
      let globalSettings;
      try {
        const sysResult = await db.query.systemSettings.findFirst({
          where: (settings, { eq: eq2 }) => eq2(settings.key, "mail_config")
        });
        if (!sysResult) {
          throw new Error("Gloabl mail configuration is missing.");
        }
        globalSettings = JSON.parse(sysResult.value);
      } catch (e) {
        console.warn("[NotifyService] Cannot get global mail settings:", e.message);
        return;
      }
      const subject = this.renderTemplate(policy.mail_subject_template || "新提交通知", formData);
      let htmlBody;
      if (policy.mail_body_template) {
        htmlBody = this.renderTemplate(policy.mail_body_template, formData);
      } else {
        htmlBody = this.buildHtmlTable(formData);
      }
      const emails = (policy.receiver_emails || []).filter(Boolean);
      if (emails.length === 0) {
        console.warn("[NotifyService] No receiver emails configured.");
        return;
      }
      try {
        let provider;
        const senderEmail = globalSettings.sender_email || "onboarding@resend.dev";
        if (globalSettings.provider_type === "resend") {
          if (!globalSettings.resend_api_key) throw new Error("Resend API Key missing.");
          provider = new ResendProvider(globalSettings.resend_api_key, senderEmail);
        } else {
          provider = new SMTPProvider(globalSettings.smtp_config);
        }
        await provider.sendMail(emails, subject, htmlBody, policy.sender_name);
        console.log(`[NotifyService] Email sent successfully to ${emails.join(", ")}`);
      } catch (err) {
        console.error(`[NotifyService] Mail dispatch failed:`, err.message);
      }
    } catch (criticalErr) {
      console.error(`[NotifyService] Critical dispatch failure. Data integrity protected. Error:`, criticalErr.message);
    }
  }
}
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var trimCookieWhitespace = (value) => {
  let start = 0;
  let end = value.length;
  while (start < end) {
    const charCode = value.charCodeAt(start);
    if (charCode !== 32 && charCode !== 9) {
      break;
    }
    start++;
  }
  while (end > start) {
    const charCode = value.charCodeAt(end - 1);
    if (charCode !== 32 && charCode !== 9) {
      break;
    }
    end--;
  }
  return start === 0 && end === value.length ? value : value.slice(start, end);
};
var parse = (cookie, name) => {
  if (name && cookie.indexOf(name) === -1) {
    return {};
  }
  const pairs = cookie.split(";");
  const parsedCookie = {};
  for (const pairStr of pairs) {
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) {
      continue;
    }
    const cookieName = trimCookieWhitespace(pairStr.substring(0, valueStartPos));
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName)) {
      continue;
    }
    let cookieValue = trimCookieWhitespace(pairStr.substring(valueStartPos + 1));
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
      cookieValue = cookieValue.slice(1, -1);
    }
    if (validCookieValueRegEx.test(cookieValue)) {
      parsedCookie[cookieName] = cookieValue.indexOf("%") !== -1 ? tryDecode(cookieValue, decodeURIComponent_) : cookieValue;
      if (name) {
        break;
      }
    }
  }
  return parsedCookie;
};
var _serialize = (name, value, opt = {}) => {
  if (!validCookieNameRegEx.test(name)) {
    throw new Error("Invalid cookie name");
  }
  let cookie = `${name}=${value}`;
  if (name.startsWith("__Secure-") && !opt.secure) {
    throw new Error("__Secure- Cookie must have Secure attributes");
  }
  if (name.startsWith("__Host-")) {
    if (!opt.secure) {
      throw new Error("__Host- Cookie must have Secure attributes");
    }
    if (opt.path !== "/") {
      throw new Error('__Host- Cookie must have Path attributes with "/"');
    }
    if (opt.domain) {
      throw new Error("__Host- Cookie must not have Domain attributes");
    }
  }
  for (const key of ["domain", "path"]) {
    if (opt[key] && /[;\r\n]/.test(opt[key])) {
      throw new Error(`${key} must not contain ";", "\\r", or "\\n"`);
    }
  }
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    if (opt.maxAge > 3456e4) {
      throw new Error(
        "Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration."
      );
    }
    cookie += `; Max-Age=${opt.maxAge | 0}`;
  }
  if (opt.domain && opt.prefix !== "host") {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (opt.expires.getTime() - Date.now() > 3456e7) {
      throw new Error(
        "Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future."
      );
    }
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
  }
  if (opt.priority) {
    cookie += `; Priority=${opt.priority.charAt(0).toUpperCase() + opt.priority.slice(1)}`;
  }
  if (opt.partitioned) {
    if (!opt.secure) {
      throw new Error("Partitioned Cookie must have Secure attributes");
    }
    cookie += "; Partitioned";
  }
  return cookie;
};
var serialize = (name, value, opt) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};
var getCookie = (c, key, prefix) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return void 0;
    }
    let finalKey = key;
    const obj2 = parse(cookie, finalKey);
    return obj2[finalKey];
  }
  if (!cookie) {
    return {};
  }
  const obj = parse(cookie);
  return obj;
};
var generateCookie = (name, value, opt) => {
  let cookie;
  if (opt?.prefix === "secure") {
    cookie = serialize("__Secure-" + name, value, { path: "/", ...opt, secure: true });
  } else if (opt?.prefix === "host") {
    cookie = serialize("__Host-" + name, value, {
      ...opt,
      path: "/",
      secure: true,
      domain: void 0
    });
  } else {
    cookie = serialize(name, value, { path: "/", ...opt });
  }
  return cookie;
};
var setCookie = (c, name, value, opt) => {
  const cookie = generateCookie(name, value, opt);
  c.header("Set-Cookie", cookie, { append: true });
};
const attachVisitorTracking = (publicApi2) => {
  publicApi2.use("*", async (c, next) => {
    const url = new URL(c.req.url);
    const hostname = url.hostname;
    const parts = hostname.split(".");
    const domain = parts.length > 2 ? `.${parts.slice(-2).join(".")}` : void 0;
    let entryUrl = getCookie(c, "_v_entry");
    let visitCount = parseInt(getCookie(c, "_v_count") || "0");
    if (!entryUrl) {
      entryUrl = c.req.url;
      setCookie(c, "_v_entry", entryUrl, {
        path: "/",
        domain,
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "Lax"
      });
    }
    visitCount += 1;
    setCookie(c, "_v_count", visitCount.toString(), {
      path: "/",
      domain,
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "Lax"
    });
    c.set("visitor_tracking", {
      entry_url: entryUrl,
      visit_count: visitCount,
      submit_url: c.req.url
    });
    await next();
  });
};
const registerPublicSubmitRoutes = (publicApi2) => {
  publicApi2.post("/submit/:slug", async (c) => {
    const collection = c.get("collection");
    const clientInfo = c.get("clientInfo");
    const kernel = c.get("contractKernel");
    const db = await createDbClient(c.env.DB);
    const writeWhitelist = kernel.publicApi.writeFields;
    const writableFields = kernel.writableFields;
    let payload;
    try {
      payload = await c.req.json();
    } catch {
      return c.json({ error: "Invalid JSON payload" }, 400);
    }
    const safeData = {};
    for (const key of writeWhitelist) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        safeData[key] = payload[key];
      }
    }
    const relationFields = writableFields.filter((field) => field.relation?.targetCollectionSlug);
    for (const rf of relationFields) {
      const val = safeData[rf.name];
      if (val !== void 0 && val !== null && val !== "") {
        const relationIds = Array.isArray(val) ? val : [val];
        for (const relationId of relationIds) {
          const targetExists = await db.select({ id: entities.id }).from(entities).where(eq(entities.id, parseInt(relationId))).get();
          if (!targetExists) {
            return c.json({ error: "Validation Failed", message: `Relation target ID ${relationId} for field ${rf.name} does not exist.` }, 400);
          }
        }
      }
    }
    const validation = validateEntityData(safeData, writableFields.map((field) => ({
      name: field.name,
      type: field.rawType,
      label: field.label,
      required: field.required,
      options: field.options,
      validation: field.validation
    })));
    if (!validation.valid) {
      return c.json({ error: "Data Validation Failed", details: validation.errors }, 400);
    }
    const translationGroup = crypto.randomUUID();
    const currentLocale = "en-US";
    const visitorTracking = c.get("visitor_tracking");
    const metadata = {
      visitor_tracking: {
        ip: clientInfo.ip,
        country: clientInfo.country,
        referer: clientInfo.referer,
        user_agent: clientInfo.userAgent,
        entry_url: visitorTracking.entry_url,
        submit_url: c.req.url,
        visit_count: visitorTracking.visit_count,
        submitted_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      crm_governance: {
        status: "pending",
        notes: []
      }
    };
    const [inserted] = await db.insert(entities).values({
      collectionId: collection.id,
      dataJson: safeData,
      locale: currentLocale,
      translationGroup,
      metadata,
      createdBy: "public_visitor"
    }).returning();
    try {
      c.executionCtx.waitUntil(
        NotifyService.dispatchNotification(db, collection, safeData)
      );
    } catch {
      NotifyService.dispatchNotification(db, collection, safeData).catch((err) => console.error("[NotifyService] Async fallback error:", err));
    }
    return c.json({ success: true, id: inserted.id, translationGroup });
  });
};
const publicApi = new Hono();
attachVisitorTracking(publicApi);
attachPublicContractGateway(publicApi);
registerPublicReadRoutes(publicApi);
registerPublicSchemaRoutes(publicApi);
registerPublicSitemapRoutes(publicApi);
registerPublicSubmitRoutes(publicApi);
async function loadNodeModule(name) {
  try {
    const moduleName = name;
    return await import(moduleName);
  } catch {
    return null;
  }
}
const originalFetch = globalThis.fetch;
const customFetch = async (url, options, maxRetries = 3) => {
  let delay = 1500;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15e3);
      const res = await originalFetch(url, {
        ...options,
        signal: options?.signal || controller.signal
      });
      clearTimeout(timeoutId);
      return res;
    } catch (err) {
      const isNetworkErr = err.name === "TypeError" || err.message?.includes("fetch failed") || err.name === "AbortError";
      if (isNetworkErr) {
        console.warn(`⚠️ [CF Network] 第 ${attempt}/${maxRetries} 次网络连接尝试失败 (${err.message || "超时"})，正在自动重试...`);
      } else {
        throw err;
      }
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 1.8;
      }
    }
  }
  const hasProxy = !!(process.env.HTTP_PROXY || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.https_proxy);
  const currentProxy = process.env.HTTPS_PROXY || process.env.HTTP_PROXY || "未配置";
  console.error("\n==================== 🌐 极智网络连接诊断报告 ====================");
  console.error(`1. 崩溃异常: Cloudflare 接口连接死锁 (fetch failed)`);
  console.error(`2. 诊断分析: 无法与 Cloudflare 远程 API (api.cloudflare.com) 握手建连。这通常是因为本地网络长城阻断或您的代理软件（Clash, v2ray）没有桥接到当前运行的 PowerShell/Bash 终端中。`);
  console.error(`3. 代理状态: 当前命令行终端：${hasProxy ? `已设置代理 -> ${currentProxy}` : "⚠️ 未检测到任何终端代理环境变量"}`);
  console.error(`4. 💡 修复指导 (请在重新执行 npm run deploy 前，运行对应命令注入代理)：`);
  console.error(`   👉 【Windows PowerShell 用户】：拷贝并运行以下一键代理设置命令（端口请换为您代理工具的实际端口，例如 Clash 默认为 7890）：`);
  console.error(`      $env:HTTP_PROXY="http://127.0.0.1:7890"; $env:HTTPS_PROXY="http://127.0.0.1:7890"`);
  console.error(`   👉 【Git Bash / Linux / macOS 用户】：在命令行中拷贝运行：`);
  console.error(`      export http_proxy="http://127.0.0.1:7890"; export https_proxy="http://127.0.0.1:7890"`);
  console.error(`   👉 【解除代理带来的 SSL 证书阻碍】：若代理拦截导致证书错误，可执行：`);
  console.error(`      $env:NODE_TLS_REJECT_UNAUTHORIZED="0"   (PowerShell)`);
  console.error(`      export NODE_TLS_REJECT_UNAUTHORIZED="0" (Git Bash)`);
  console.error("=================================================================\n");
  throw new Error(`[CF Network Error] 历经 ${maxRetries} 次连接重试依然无法连通 Cloudflare API。请对照上方的网络诊断指南设置您的终端代理环境，然后再重新执行部署。`);
};
globalThis.fetch = customFetch;
class CloudflareService {
  static CF_API_BASE = "https://api.cloudflare.com/client/v4";
  /**
   * 探测本地 TCP 端口是否开放
   * 用于自动判断本地是否有运行中的 Clash 等代理工具
   */
  static async probePort(port, host = "127.0.0.1", timeout = 150) {
    const net = await loadNodeModule("net");
    if (!net) {
      return false;
    }
    return new Promise((resolve) => {
      const socket = new net.Socket();
      let status = false;
      socket.setTimeout(timeout);
      socket.on("connect", () => {
        status = true;
        socket.destroy();
      });
      socket.on("timeout", () => {
        socket.destroy();
      });
      socket.on("error", () => {
        socket.destroy();
      });
      socket.on("close", () => {
        resolve(status);
      });
      socket.connect(port, host);
    });
  }
  /**
   * 智能检测并自动挂载本地代理 (支持零配置一键部署)
   * 彻底解决 Clash 代理软件存在时 Node 18+ 原生 fetch 不读取系统代理导致的超时，以及 SSL 证书拦截报错
   */
  static async setupAdaptiveProxy() {
    let proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY || process.env.https_proxy || process.env.http_proxy;
    if (!proxyUrl) {
      const portsToProbe = [7890, 7897, 10809, 10808];
      for (const port of portsToProbe) {
        try {
          const isOpen = await this.probePort(port);
          if (isOpen) {
            proxyUrl = `http://127.0.0.1:${port}`;
            console.log(`🌐 [Proxy] 智能探测到本地处于活跃状态的代理端口 ${port}，已自动桥接网络：${proxyUrl}`);
            break;
          }
        } catch (e) {
        }
      }
    }
    if (proxyUrl) {
      try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const undici = await loadNodeModule("undici");
        if (undici && undici.ProxyAgent && undici.setGlobalDispatcher) {
          const proxyAgent = new undici.ProxyAgent({
            uri: proxyUrl,
            requestTls: { rejectUnauthorized: false }
          });
          undici.setGlobalDispatcher(proxyAgent);
        }
        process.env.HTTP_PROXY = proxyUrl;
        process.env.HTTPS_PROXY = proxyUrl;
        console.log(`✅ [Proxy] 自适应代理桥接完成 -> ${proxyUrl}（已自动开启 SSL 容错机制，保障连接百分百成功）`);
      } catch (err) {
        console.warn(`⚠️ [Proxy] 挂载自适应代理时发生微小异常: ${err.message}`);
      }
    } else {
      console.log("ℹ️ [Proxy] 未检测到代理环境变量，且本地常用代理端口未处于活跃状态。将使用本地直连方式进行部署。");
    }
  }
  /**
   * 验证 API Token 权限 (High Robustness)
   * 确保 Token 具备 Zone.DNS:Edit 和 Workers Routes:Edit 权限
   */
  static async verifyTokenPermissions(env) {
    if (!env.CF_API_TOKEN) {
      throw new Error(`[CF] 缺失 CF_API_TOKEN 环境变量，请在 wrangler.toml 中配置。`);
    }
    try {
      const res = await fetch(`${this.CF_API_BASE}/user/tokens/verify`, {
        headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
      });
      if (res.ok) {
        console.log("✅ [CF] API Token 活跃状态校验通过。");
        return true;
      }
    } catch (e) {
      console.warn("⚠️ [CF] Token 验证接口请求失败，尝试回退校验...");
    }
    const fallbackRes = await fetch(`${this.CF_API_BASE}/zones?per_page=1`, {
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    if (fallbackRes.ok) {
      console.log("✅ [CF] 通过回退路径校验 Token 有效。");
      return true;
    }
    const errorData = await fallbackRes.json();
    throw new Error(`[CF] Token 验证失败 (401/403): 请检查 Token 权限或格式。CF 返回: ${JSON.stringify(errorData.errors || "Unauthorized")}`);
  }
  /**
   * 根据域名获取 Zone ID
   */
  static async getZoneId(env, domain) {
    const rootDomain = this.extractRootDomain(domain);
    const url = `${this.CF_API_BASE}/zones?name=${rootDomain}`;
    const res = await fetch(url, {
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    const data = await res.json();
    if (!data.success || data.result.length === 0) {
      throw new Error(`❌ [CF] 未在当前账户下找到托管域名: ${rootDomain}，请先在 CF 后台添加站点。`);
    }
    return data.result[0].id;
  }
  /**
   * 幂等更新 CNAME 记录
   */
  static async upsertCnameRecord(env, zoneId, hostname, content) {
    const listUrl = `${this.CF_API_BASE}/zones/${zoneId}/dns_records?name=${hostname}&type=CNAME`;
    const listRes = await fetch(listUrl, {
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    const listData = await listRes.json();
    const payload = {
      type: "CNAME",
      name: hostname,
      content,
      ttl: 1,
      // Auto
      proxied: true
      // 开启小云朵
    };
    if (listData.result && listData.result.length > 0) {
      const recordId = listData.result[0].id;
      if (listData.result[0].content === content) return recordId;
      const updateUrl = `${this.CF_API_BASE}/zones/${zoneId}/dns_records/${recordId}`;
      const upRes = await fetch(updateUrl, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${env.CF_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!upRes.ok) await this.handleApiError(upRes, "DNS 记录更新失败");
      return recordId;
    }
    const createRes = await fetch(`${this.CF_API_BASE}/zones/${zoneId}/dns_records`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!createRes.ok) await this.handleApiError(createRes, "DNS 记录创建失败");
    const createData = await createRes.json();
    return createData.result.id;
  }
  /**
   * 绑定 Worker Domain
   * 建立域名与 Worker Service 的直接映射 (Custom Domains)
   */
  static async bindWorkerDomain(env, zoneId, hostname, service = "backend") {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/workers/domains`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        environment: "production",
        hostname,
        service,
        zone_id: zoneId
      })
    });
    if (res.status === 409) {
      console.log(`ℹ️ [CF] 域名 ${hostname} 已与 Worker 关联，跳过。`);
      return true;
    }
    if (!res.ok) {
      const data = await res.json();
      if (data.errors?.some((e) => e.code === 1001)) return true;
      await this.handleApiError(res, "Worker 域名绑定失败");
    }
    return true;
  }
  /**
   * 绑定域名至 R2 存储桶 (Custom Domains)
   * 修正为官方最新 API 路径与 Payload
   */
  static async bindR2Domain(env, bucketName, domain, zoneId) {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/r2/buckets/${bucketName}/domains/custom`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        domain,
        zoneId,
        // 必填：用于关联 Cloudflare Zone
        enabled: true
      })
    });
    if (!res.ok) {
      const data = await res.json();
      if (data.errors?.some((e) => e.code === 10009)) return true;
      await this.handleApiError(res, "R2 域名绑定失败", data);
    }
    return true;
  }
  /**
   * 获取 R2 存储桶已绑定的所有自定义域名
   */
  static async getR2CustomDomains(env, bucketName) {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/r2/buckets/${bucketName}/domains/custom`;
    const res = await fetch(url, {
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.result?.domains?.map((d) => d.domain) || [];
  }
  /**
   * 删除 R2 存储桶已绑定的自定义域名
   */
  static async deleteR2Domain(env, bucketName, domain) {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/r2/buckets/${bucketName}/domains/custom/${domain}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    if (!res.ok) {
      if (res.status === 404) return true;
      await this.handleApiError(res, `旧 R2 域名解除绑定失败: ${domain}`);
    }
    return true;
  }
  /**
   * 获取 Worker 已绑定的所有自定义域名 (返回全量对象以便删除时使用 id)
   */
  static async getWorkerDomainsRaw(env) {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/workers/domains`;
    const res = await fetch(url, {
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.result || [];
  }
  /**
   * 获取 Worker 已绑定的所有自定义域名名称
   */
  static async getWorkerCustomDomains(env) {
    const domains = await this.getWorkerDomainsRaw(env);
    return domains.map((d) => d.hostname);
  }
  /**
   * 删除 Worker 绑定的自定义域名
   */
  static async deleteWorkerDomain(env, hostname) {
    const allDomains = await this.getWorkerDomainsRaw(env);
    const target = allDomains.find((d) => d.hostname === hostname);
    if (!target) return true;
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/workers/domains/${target.id}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    if (!res.ok) {
      await this.handleApiError(res, `旧 Worker 域名解除绑定失败: ${hostname}`);
    }
    return true;
  }
  /**
   * 检查域名是否已作为 R2 Custom Domain 绑定
   */
  static async isR2DomainBound(env, bucketName, domain) {
    const domains = await this.getR2CustomDomains(env, bucketName);
    return domains.includes(domain);
  }
  /**
   * 检查域名是否已作为 Worker Custom Domain 绑定
   */
  static async isWorkerDomainBound(env, hostname) {
    const domains = await this.getWorkerCustomDomains(env);
    return domains.includes(hostname);
  }
  /**
   * 确保 KV 命名空间存在
   */
  static async ensureKvNamespace(env, title) {
    const listUrl = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/storage/kv/namespaces`;
    const listRes = await fetch(listUrl, {
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    const listData = await listRes.json();
    if (listData.success) {
      const existing = listData.result.find((ns) => ns.title === title || ns.title === `backend-${title}`);
      if (existing) return existing.id;
    }
    const createUrl = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/storage/kv/namespaces`;
    const createRes = await fetch(createUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: `backend-${title}` })
    });
    if (!createRes.ok) await this.handleApiError(createRes, `KV Namespace ${title} 创建失败`);
    const createData = await createRes.json();
    return createData.result.id;
  }
  /**
   * 确保 Turnstile Widget 存在并同步域名 (具备极高容错性)
   */
  static async ensureTurnstileWidget(env, name, domains) {
    try {
      const domainList = Array.isArray(domains) ? domains : [domains];
      const exactDomains = Array.from(new Set(
        domainList.map((d) => this.normalizeHostname(d)).filter(Boolean)
      ));
      const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/challenges/widgets`;
      const res = await fetch(url, {
        headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
      });
      if (!res.ok) {
        console.warn(`⚠️ [CF Turnstile] 查询失败 (${res.status})，自动跳过 Turnstile 配置同步`);
        return { siteKey: "", secretKey: "" };
      }
      const data = await res.json();
      if (data.success) {
        const existing = data.result.find((w) => w.name === name);
        if (existing) {
          await fetch(`${url}/${existing.sitekey}`, {
            method: "PUT",
            headers: {
              "Authorization": `Bearer ${env.CF_API_TOKEN}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name,
              domains: exactDomains,
              mode: "managed"
            })
          }).catch(() => {
          });
          return { siteKey: existing.sitekey, secretKey: existing.secret };
        }
      }
      const createRes = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.CF_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          domains: exactDomains,
          mode: "managed"
        })
      });
      if (!createRes.ok) {
        console.warn(`⚠️ [CF Turnstile] 创建 Widget 失败 (${createRes.status})`);
        return { siteKey: "", secretKey: "" };
      }
      const createData = await createRes.json();
      return { siteKey: createData.result.sitekey, secretKey: createData.result.secret };
    } catch (e) {
      console.warn(`⚠️ [CF Turnstile] 操作异常: ${e.message}，使用本地现有配置 fallback`);
      return { siteKey: "", secretKey: "" };
    }
  }
  /**
   * 核心自动化：同步安全域名至 CF 基础设施
   */
  static async syncSecurityDomains(env, config) {
    if (!env.CF_API_TOKEN || !env.CF_ACCOUNT_ID) {
      console.warn("⚠️ [CF Sync] 缺少 API 凭证，跳过安全域名同步。");
      return;
    }
    const collected = /* @__PURE__ */ new Set();
    const base = this.normalizeHostname(config.main_domain);
    if (base) collected.add(base);
    if (config.admin_domain) collected.add(this.normalizeHostname(config.admin_domain));
    if (config.api_domain) collected.add(this.normalizeHostname(config.api_domain));
    if (config.member_domain) collected.add(this.normalizeHostname(config.member_domain));
    if (config.img_domain) collected.add(this.normalizeHostname(config.img_domain));
    if (config.public_domains) {
      config.public_domains.forEach((d) => collected.add(this.normalizeHostname(d)));
    }
    const domains = Array.from(collected).filter(Boolean);
    if (domains.length === 0) return;
    try {
      console.log(`📡 [CF Sync] 正在同步 ${domains.length} 个域名至 Turnstile...`);
      await this.ensureTurnstileWidget(env, "Member Login", domains);
      await this.ensureTurnstileWidget(env, "Admin Login", domains);
      console.log("✅ [CF Sync] 安全域名同步完成。");
    } catch (err) {
      console.error("❌ [CF Sync] 同步失败:", err.message);
    }
  }
  /**
   * 确保 D1 数据库存在
   */
  static async ensureD1Database(env, name) {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/d1/database`;
    const res = await fetch(url, {
      headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` }
    });
    const data = await res.json();
    if (data.success) {
      const existing = data.result.find((db) => db.name === name);
      if (existing) return existing.uuid;
    }
    const createRes = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });
    if (!createRes.ok) await this.handleApiError(createRes, `D1 Database ${name} 创建失败`);
    const createData = await createRes.json();
    return createData.result.uuid;
  }
  /**
   * 执行 D1 数据库查询
   */
  static async queryD1(env, databaseId, query) {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/d1/database/${databaseId}/query`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sql: query })
    });
    if (!res.ok) await this.handleApiError(res, `D1 Query Failed: ${query}`);
    return await res.json();
  }
  /**
   * 确保 R2 Bucket 存在
   */
  static async ensureR2Bucket(env, name) {
    const url = `${this.CF_API_BASE}/accounts/${env.CF_ACCOUNT_ID}/r2/buckets/${name}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });
    if (res.ok || res.status === 409) return true;
    await this.handleApiError(res, `R2 Bucket ${name} 创建失败`);
    return false;
  }
  /**
   * 辅助：归一化域名，保留精确主机名
   */
  static normalizeHostname(hostname) {
    return String(hostname || "").trim().toLowerCase().replace(/^https?:\/\//, "").split("/")[0].split(":")[0];
  }
  /**
   * 高鲁棒性错误处理：精准识别权限缺失
   */
  static async handleApiError(res, context, preParsedData) {
    const data = preParsedData || await res.json().catch(() => ({}));
    const errors = data.errors || [];
    const messages = data.messages || [];
    if (res.status === 403) {
      const detail = messages.join(" ") || errors.map((e) => e.message).join(" ");
      throw new Error(`🔐 [CF 权限不足] ${context}: 请确保 Token 拥有 Zone.DNS:Edit, Workers Routes:Edit 和 KV Storage:Edit, Turnstile:Edit 权限。 详情: ${detail}`);
    }
    throw new Error(`❌ [CF API 错误] ${context} (${res.status}): ${JSON.stringify(errors)}`);
  }
}
const settingsRoutes = new Hono();
const DEFAULT_MEMBER_LEVELS = [
  { level: 1, name: "普通会员" },
  { level: 2, name: "铜牌会员" },
  { level: 3, name: "银牌会员" },
  { level: 4, name: "金牌会员" },
  { level: 5, name: "钻石会员" }
];
const normalizeMemberLevels = (input) => {
  if (!Array.isArray(input)) {
    return [];
  }
  return input.map((item) => ({
    level: Number(item?.level),
    name: String(item?.name || "").trim()
  })).filter((item) => Number.isInteger(item.level) && item.level > 0 && item.name).sort((a, b) => a.level - b.level);
};
const resolveTextModelAssignment = (aiConfig) => {
  const assignment = aiConfig?.assignments?.text?.modelId ? aiConfig.assignments.text : null;
  if (!assignment?.modelId) {
    const provider2 = aiConfig?.providers?.find(
      (item) => (item.models || []).some((model) => {
        const types = model.types || (model.type ? [model.type] : []);
        return types.includes("text") || types.includes("general");
      })
    ) || aiConfig?.providers?.[0] || null;
    const modelId = provider2?.models?.find((model) => {
      const types = model.types || (model.type ? [model.type] : []);
      return types.includes("text") || types.includes("general");
    })?.id || provider2?.models?.[0]?.id || "";
    return { modelId, provider: provider2 };
  }
  const provider = aiConfig.providers?.find((p) => p.id === assignment.providerId) || aiConfig.providers?.find((p) => p.models?.some((m) => m.id === assignment.modelId)) || aiConfig.providers?.[0] || null;
  return {
    modelId: assignment.modelId,
    provider
  };
};
settingsRoutes.get("/languages", async (c) => {
  const db = await createDbClient(c.env.DB);
  const list = await db.select().from(languages).orderBy(asc(languages.sortOrder), asc(languages.createdAt), asc(languages.code)).all();
  return c.json({ success: true, data: list });
});
settingsRoutes.get("/mail_config", requirePermission(["settings.mail.view", "settings.mail", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const record = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "mail_config")
  });
  if (!record) {
    return c.json({
      provider_type: "resend",
      resend_api_key: "",
      smtp_config: { host: "", port: 465, user: "", pass: "" }
    });
  }
  const config = JSON.parse(record.value);
  if (config.resend_api_key && config.resend_api_key.length > 5) {
    config.resend_api_key = config.resend_api_key.slice(0, 5) + "*".repeat(10);
  }
  if (config.smtp_config && config.smtp_config.pass) {
    config.smtp_config.pass = "********";
  }
  return c.json(config);
});
settingsRoutes.post("/mail_config", requirePermission(["settings.mail", "role.manage"]), async (c) => {
  const body = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const existing = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "mail_config")
  });
  let configToSave = { ...body };
  if (existing) {
    const oldConfig = JSON.parse(existing.value);
    if (configToSave.resend_api_key && configToSave.resend_api_key.includes("***")) {
      configToSave.resend_api_key = oldConfig.resend_api_key;
    }
    if (configToSave.smtp_config?.pass === "********") {
      configToSave.smtp_config.pass = oldConfig.smtp_config.pass;
    }
  }
  const valueStr = JSON.stringify(configToSave);
  if (existing) {
    await db.update(systemSettings).set({ value: valueStr, updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "mail_config"));
  } else {
    await db.insert(systemSettings).values({ key: "mail_config", value: valueStr });
  }
  return c.json({ success: true });
});
settingsRoutes.get("/site_settings", requirePermission(["settings.general.view", "settings.general", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  return c.json(await SiteSettingsService.getPayload(db));
});
settingsRoutes.post("/site_settings", requirePermission(["settings.general", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const body = await c.req.json();
  const id = await SiteSettingsService.savePayload(db, body);
  return c.json({ success: true, id });
});
settingsRoutes.get("/ai_config", requirePermission(["settings.ai.view", "settings.ai", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const record = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "ai_config")
  });
  if (!record) {
    return c.json({
      success: true,
      value: JSON.stringify({
        accountId: "",
        gatewayId: "main-ai-gateway",
        apiToken: "",
        openaiKey: "",
        workersAiToken: "",
        enabled: true
      })
    });
  }
  const config = JSON.parse(record.value);
  const isRaw = c.req.query("raw") === "true";
  if (!isRaw) {
    const mask = (s) => s && s.length > 8 ? s.slice(0, 4) + "****" + s.slice(-4) : "********";
    if (config.apiToken) config.apiToken = mask(config.apiToken);
    if (config.openaiKey) config.openaiKey = mask(config.openaiKey);
    if (config.workersAiToken) config.workersAiToken = mask(config.workersAiToken);
    if (config.providers) {
      config.providers.forEach((p) => {
        if (p.apiKey) p.apiKey = mask(p.apiKey);
      });
    }
  }
  return c.json({ success: true, value: JSON.stringify(config) });
});
settingsRoutes.post("/ai_config", requirePermission(["settings.ai", "role.manage"]), async (c) => {
  const { value } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const newConfig = JSON.parse(value);
  const accountId = c.env.CF_ACCOUNT_ID;
  const apiToken = c.env.CF_API_TOKEN;
  if (newConfig.providers && Array.isArray(newConfig.providers)) {
    for (const provider of newConfig.providers) {
      if (provider.gatewayId) {
        if (!accountId || !apiToken) {
          return c.json({
            success: false,
            message: "后台未检测到有效的 CF_ACCOUNT_ID 或 CF_API_TOKEN。请确保 wrangler.toml 中配置了正确变量。"
          }, 400);
        }
        try {
          await GatewayManager.checkAndCreateGateway(accountId, apiToken, provider.gatewayId);
        } catch (err) {
          console.error(`[AI Config Save] Gateway deployment error for ${provider.gatewayId}:`, err);
          return c.json({
            success: false,
            message: `自动部署 AI 网关 '${provider.gatewayId}' 失败。请确保 CF_API_TOKEN 拥有 Account.AI Gateway:Edit 权限。 错误详情: ${err.message}`
          }, 400);
        }
      }
    }
  }
  const existing = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "ai_config")
  });
  if (existing) {
    const oldConfig = JSON.parse(existing.value);
    const restore = (key) => {
      if (newConfig[key] && newConfig[key].includes("****")) {
        newConfig[key] = oldConfig[key];
      }
    };
    restore("apiToken");
    restore("openaiKey");
    restore("workersAiToken");
    if (newConfig.providers && Array.isArray(newConfig.providers) && oldConfig.providers && Array.isArray(oldConfig.providers)) {
      newConfig.providers.forEach((newP) => {
        if (newP.apiKey && (newP.apiKey.includes("****") || newP.apiKey === "********")) {
          const oldP = oldConfig.providers.find((op) => op.id === newP.id);
          if (oldP && oldP.apiKey && !oldP.apiKey.includes("****") && oldP.apiKey !== "********") {
            newP.apiKey = oldP.apiKey;
            console.log(`🤖 [AI 密钥自愈复原] 已成功为提供商 "${newP.id}" 恢复掩码后的明文 API Key`);
          }
        }
      });
    }
    await db.update(systemSettings).set({ value: JSON.stringify(newConfig), updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "ai_config"));
  } else {
    await db.insert(systemSettings).values({ key: "ai_config", value: JSON.stringify(newConfig) });
  }
  return c.json({ success: true });
});
settingsRoutes.post("/translate", async (c) => {
  const { data, sourceLang, targetLang } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const record = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "ai_config")
  });
  if (!record) {
    return c.json({ success: false, message: "AI 配置未初始化" }, 400);
  }
  const aiConfig = JSON.parse(record.value);
  const { modelId, provider } = resolveTextModelAssignment(aiConfig);
  if (!modelId) {
    return c.json({ success: false, message: "未配置可用的默认文本模型，请先前往 AI 设置页面配置。" }, 400);
  }
  if (!provider) {
    return c.json({ success: false, message: "未找到可用的文本 AI 提供商配置" }, 400);
  }
  const prompt = `你是一个专业翻译官。请将以下 JSON 对象中的值从 ${sourceLang} 翻译到 ${targetLang}。
保持键名（Key）完全不变，只翻译对应的值（Value）。
请直接返回翻译后的 JSON 对象，不要包含任何 Markdown 格式（如 \`\`\`json）、前缀或后缀，确保返回的是纯文本，可以直接被 JSON.parse 解析。

要翻译的 JSON：
${JSON.stringify(data, null, 2)}`;
  const accountId = c.env.CF_ACCOUNT_ID;
  const apiToken = c.env.CF_API_TOKEN;
  const targetUrl = resolveChatBaseUrl(provider, accountId);
  if (!targetUrl) {
    return c.json({ success: false, message: "当前文本模型缺少可用的请求地址，请检查 AI 设置。" }, 400);
  }
  const url = `${targetUrl}${resolveChatEndpoint(provider, targetUrl, modelId)}`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": getProviderAuthHeader(provider, apiToken)
  };
  const body = isOpenAiCompatibleProvider(provider) ? {
    model: modelId,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3
  } : { prompt };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(45e3)
    });
    if (!res.ok) {
      const errText = await res.text();
      return c.json({ success: false, message: `AI 翻译请求失败: ${res.status} - ${errText}` }, 500);
    }
    const json = await res.json();
    let translatedText = "";
    if (!isOpenAiCompatibleProvider(provider)) {
      translatedText = json.result?.response || "";
    } else {
      translatedText = json.choices?.[0]?.message?.content || "";
    }
    translatedText = translatedText.trim();
    try {
      translatedText = translatedText.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
      const translatedData = JSON.parse(translatedText);
      return c.json({ success: true, data: translatedData });
    } catch (parseErr) {
      console.warn("[Translate] Parse JSON failed. Raw:", translatedText);
      return c.json({ success: false, message: "AI 返回的数据不是有效的 JSON 格式", raw: translatedText }, 500);
    }
  } catch (err) {
    return c.json({ success: false, message: `翻译超时或失败: ${err.message}` }, 500);
  }
});
settingsRoutes.get("/ai_gateways", requirePermission(["settings.ai.view", "settings.ai", "role.manage"]), async (c) => {
  const accountId = c.env.CF_ACCOUNT_ID;
  const apiToken = c.env.CF_API_TOKEN;
  if (!accountId || !apiToken) {
    return c.json({ success: false, message: "未检测到 Cloudflare 凭证。请确保 wrangler.toml 已配置正确。" }, 400);
  }
  try {
    const list = await GatewayManager.listGateways(accountId, apiToken);
    return c.json({ success: true, result: list });
  } catch (err) {
    return c.json({ success: false, message: `拉取 Cloudflare 线上网关失败: ${err.message}` }, 500);
  }
});
settingsRoutes.post("/ai_gateways", requirePermission(["settings.ai", "role.manage"]), async (c) => {
  const { id } = await c.req.json();
  const accountId = c.env.CF_ACCOUNT_ID;
  const apiToken = c.env.CF_API_TOKEN;
  if (!accountId || !apiToken) {
    return c.json({ success: false, message: "未检测到 Cloudflare 凭证。请确保 wrangler.toml 已配置正确。" }, 400);
  }
  if (!id) {
    return c.json({ success: false, message: "网关 ID 不能为空。" }, 400);
  }
  try {
    await GatewayManager.checkAndCreateGateway(accountId, apiToken, id);
    return c.json({ success: true, gatewayId: id });
  } catch (err) {
    return c.json({ success: false, message: `创建网关失败: ${err.message}` }, 500);
  }
});
settingsRoutes.delete("/ai_gateways/:id", requirePermission(["settings.ai", "role.manage"]), async (c) => {
  const gatewayId = c.req.param("id");
  const accountId = c.env.CF_ACCOUNT_ID;
  const apiToken = c.env.CF_API_TOKEN;
  if (!accountId || !apiToken) {
    return c.json({ success: false, message: "未检测到 Cloudflare 凭证。请确保 wrangler.toml 已配置正确。" }, 400);
  }
  try {
    const db = await createDbClient(c.env.DB);
    await GatewayManager.deleteGateway(accountId, apiToken, gatewayId);
    const existing = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, "ai_config")
    });
    if (existing) {
      const config = JSON.parse(existing.value);
      if (config.providers && Array.isArray(config.providers)) {
        config.providers = config.providers.map((p) => {
          if (p.gatewayId === gatewayId) {
            p.gatewayId = "";
          }
          return p;
        });
        await db.update(systemSettings).set({ value: JSON.stringify(config), updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "ai_config"));
      }
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: `删除云端网关失败: ${err.message}` }, 500);
  }
});
settingsRoutes.get("/site_domains", requirePermission(["settings.general.view", "settings.general", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const record = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "site_domains")
  });
  if (!record) {
    return c.json({
      admin_domain: "",
      api_domain: "",
      public_domains: []
    });
  }
  return c.json(JSON.parse(record.value));
});
settingsRoutes.post("/site_domains", requirePermission(["settings.general", "role.manage"]), async (c) => {
  const body = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const existing = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "site_domains")
  });
  const valueStr = JSON.stringify(body);
  if (existing) {
    await db.update(systemSettings).set({ value: valueStr, updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "site_domains"));
  } else {
    await db.insert(systemSettings).values({ key: "site_domains", value: valueStr, updatedAt: /* @__PURE__ */ new Date() });
  }
  resetDomainCache();
  if (c.env.NS_CONFIG) {
    c.executionCtx.waitUntil(c.env.NS_CONFIG.delete("site_domains"));
  }
  c.executionCtx.waitUntil(CloudflareService.syncSecurityDomains(c.env, body));
  return c.json({ success: true });
});
settingsRoutes.get("/member_levels", async (c) => {
  const db = await createDbClient(c.env.DB);
  const record = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "member_levels")
  });
  const levelUsageRows = await db.select({
    level: members.level,
    usageCount: sql`count(*)`
  }).from(members).groupBy(members.level).all();
  const usageMap = new Map(
    levelUsageRows.filter((item) => Number.isInteger(item.level) && item.level > 0).map((item) => [Number(item.level), Number(item.usageCount || 0)])
  );
  if (!record) {
    return c.json({
      success: true,
      data: DEFAULT_MEMBER_LEVELS.map((item) => ({
        ...item,
        usageCount: usageMap.get(item.level) || 0
      }))
    });
  }
  const normalizedLevels = normalizeMemberLevels(JSON.parse(record.value));
  const levels = normalizedLevels.length > 0 ? normalizedLevels : DEFAULT_MEMBER_LEVELS;
  return c.json({
    success: true,
    data: levels.map((item) => ({
      ...item,
      usageCount: usageMap.get(item.level) || 0
    }))
  });
});
settingsRoutes.post("/member_levels", requirePermission(["settings.general", "role.manage"]), async (c) => {
  const body = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const normalizedLevels = normalizeMemberLevels(body);
  if (normalizedLevels.length === 0) {
    return c.json({ error: "请至少保留一个有效的会员等级配置。" }, 400);
  }
  if (new Set(normalizedLevels.map((item) => item.level)).size !== normalizedLevels.length) {
    return c.json({ error: "会员等级 key 不能重复。" }, 400);
  }
  const existing = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "member_levels")
  });
  const previousLevels = existing ? normalizeMemberLevels(JSON.parse(existing.value)) : DEFAULT_MEMBER_LEVELS;
  const removedLevels = previousLevels.filter(
    (oldItem) => !normalizedLevels.some((newItem) => newItem.level === oldItem.level)
  );
  if (removedLevels.length > 0) {
    const removedLevelKeys = removedLevels.map((item) => item.level);
    const usageRows = await db.select({
      level: members.level,
      usageCount: sql`count(*)`
    }).from(members).where(inArray(members.level, removedLevelKeys)).groupBy(members.level).all();
    const blockingLevels = usageRows.filter((item) => Number(item.usageCount || 0) > 0).map((item) => `LV.${item.level}（${item.usageCount} 位会员使用中）`);
    if (blockingLevels.length > 0) {
      return c.json({ error: `以下等级 key 仍有会员使用，暂不能删除或改号：${blockingLevels.join("、")}` }, 409);
    }
  }
  const valueStr = JSON.stringify(normalizedLevels);
  if (existing) {
    await db.update(systemSettings).set({ value: valueStr, updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "member_levels"));
  } else {
    await db.insert(systemSettings).values({ key: "member_levels", value: valueStr });
  }
  return c.json({ success: true });
});
settingsRoutes.get("/mail_templates", requirePermission(["settings.mail.view", "settings.mail", "role.manage"]), async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const list = await db.select().from(mailTemplates).all();
    return c.json({ success: true, data: list });
  } catch (err) {
    console.error("❌ [API Settings] Get mail_templates failed:", err);
    return c.json({ error: "获取邮件模板失败: " + err.message }, 500);
  }
});
settingsRoutes.post("/mail_templates", requirePermission(["settings.mail", "role.manage"]), async (c) => {
  const body = await c.req.json();
  const db = await createDbClient(c.env.DB);
  if (body.id) {
    await db.update(mailTemplates).set({
      name: body.name,
      subject: body.subject,
      content: body.content,
      vars: body.vars,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(mailTemplates.id, body.id));
  } else {
    await db.insert(mailTemplates).values({
      slug: body.slug,
      name: body.name,
      subject: body.subject,
      content: body.content,
      vars: body.vars
    });
  }
  return c.json({ success: true });
});
settingsRoutes.delete("/mail_templates/:id", requirePermission(["settings.mail", "role.manage"]), async (c) => {
  const id = parseInt(c.req.param("id"));
  const db = await createDbClient(c.env.DB);
  await db.delete(mailTemplates).where(eq(mailTemplates.id, id));
  return c.json({ success: true });
});
settingsRoutes.get("/search_api_config", requirePermission(["settings.ai.view", "settings.ai", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const record = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "search_api_config")
  });
  if (!record) {
    return c.json({ success: true, value: JSON.stringify({ provider: "tavily", has_key: false }) });
  }
  const config = JSON.parse(record.value);
  const safeConfig = {
    provider: config.provider || "tavily",
    has_key: !!(config.tavily_api_key && config.tavily_api_key.length > 0)
  };
  return c.json({ success: true, value: JSON.stringify(safeConfig) });
});
settingsRoutes.post("/search_api_config", requirePermission(["settings.ai", "role.manage"]), async (c) => {
  const { value } = await c.req.json();
  if (!value) {
    return c.json({ success: false, message: "请求体缺少 value 字段" }, 400);
  }
  let newConfig;
  try {
    newConfig = JSON.parse(value);
  } catch {
    return c.json({ success: false, message: "value 必须是合法的 JSON 字符串" }, 400);
  }
  const db = await createDbClient(c.env.DB);
  const existing = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "search_api_config")
  });
  if (existing) {
    const oldConfig = JSON.parse(existing.value);
    if (!newConfig.tavily_api_key) {
      newConfig.tavily_api_key = oldConfig.tavily_api_key;
    }
    await db.update(systemSettings).set({ value: JSON.stringify(newConfig), updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "search_api_config"));
  } else {
    await db.insert(systemSettings).values({ key: "search_api_config", value: JSON.stringify(newConfig) });
  }
  return c.json({ success: true });
});
settingsRoutes.get("/translations", requirePermission(["translations.view", "translations.manage", "role.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const record = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "member_translations")
  });
  if (!record) {
    return c.json({ success: true, data: null });
  }
  return c.json({ success: true, data: JSON.parse(record.value) });
});
settingsRoutes.post("/translations", requirePermission(["translations.manage", "role.manage"]), async (c) => {
  const body = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const existing = await db.query.systemSettings.findFirst({
    where: eq(systemSettings.key, "member_translations")
  });
  const valueStr = JSON.stringify(body);
  if (existing) {
    await db.update(systemSettings).set({ value: valueStr, updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettings.key, "member_translations"));
  } else {
    await db.insert(systemSettings).values({ key: "member_translations", value: valueStr });
  }
  return c.json({ success: true });
});
const infra = new Hono();
infra.get("/domains", requirePermission(["settings.general.view", "settings.general", "api.manage.view", "api.manage", "sites.view", "sites.manage", "role.manage"]), async (c) => {
  const config = await getValidatedMapping(c.env);
  return c.json(config);
});
infra.get("/dns-check", requirePermission(["settings.general", "api.manage", "sites.manage", "role.manage"]), async (c) => {
  const domain = c.req.query("domain");
  const type = c.req.query("type");
  const env = c.env;
  try {
    await CloudflareService.verifyTokenPermissions(env);
    const bucketName = env.MEDIA_BUCKET_NAME || "trade-media-bucket";
    let discoveredDomains = [];
    if (type === "img") {
      discoveredDomains = await CloudflareService.getR2CustomDomains(env, bucketName);
    } else {
      discoveredDomains = await CloudflareService.getWorkerCustomDomains(env);
    }
    if (!domain) {
      return c.json({
        success: true,
        discovered_domains: discoveredDomains,
        recommendation: discoveredDomains.length > 0 ? `检出已绑定域名: ${discoveredDomains.join(", ")}` : "未检出任何已绑定域名。"
      });
    }
    let zoneId = "";
    try {
      zoneId = await CloudflareService.getZoneId(env, domain);
    } catch (e) {
      return c.json({
        zone_found: false,
        cname_correct: false,
        discovered_domains: discoveredDomains,
        accountId: env.CF_ACCOUNT_ID || "",
        recommendation: "该域名未在当前账户托管，请先在 Cloudflare 中添加站点。"
      });
    }
    const isPhysicallyBound = discoveredDomains.includes(domain);
    const dohUrl = `https://cloudflare-dns.com/dns-query?name=${domain}&type=CNAME`;
    const dnsRes = await fetch(dohUrl, {
      headers: { "Accept": "application/dns-json" }
    });
    const dnsData = await dnsRes.json();
    const answers = dnsData.Answer || [];
    const isCnameCorrect = answers.some((a) => a.type === 5);
    const isHealthy = isPhysicallyBound || isCnameCorrect;
    return c.json({
      zone_found: true,
      zone_id: zoneId,
      cname_correct: isHealthy,
      is_physically_bound: isPhysicallyBound,
      discovered_domains: discoveredDomains,
      recommendation: isHealthy ? "解析正常，域名已与本项目关联。" : "未检出有效关联。请在后台执行“一键绑定”或手动添加 CNAME 解析。"
    });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
infra.post("/bind-domain", requirePermission(["settings.general", "sites.manage", "role.manage"]), async (c) => {
  const body = await c.req.json();
  const { domain, type, oldDomain } = body;
  if (!domain) return c.json({ error: "域名不能为空" }, 400);
  if (!type) return c.json({ error: "槽位类型 (type) 不能为空" }, 400);
  const env = c.env;
  let currentStep = "权限自检";
  try {
    await CloudflareService.verifyTokenPermissions(env);
    currentStep = "获取主域名配置";
    const mapping = await getValidatedMapping(env);
    let fullDomain = domain;
    if (!domain.includes(".") && mapping?.main_domain) {
      fullDomain = `${domain}.${mapping.main_domain}`;
      console.log(`ℹ️ [Domains] 自动拼接主域名: ${domain} -> ${fullDomain}`);
    }
    currentStep = "解析域名托管状态";
    const zoneId = await CloudflareService.getZoneId(env, fullDomain);
    switch (type) {
      case "img": {
        currentStep = "解绑旧 R2 域名映射";
        const bucketName = env.MEDIA_BUCKET_NAME || "trade-media-bucket";
        if (oldDomain && oldDomain !== fullDomain) {
          await CloudflareService.deleteR2Domain(env, bucketName, oldDomain).catch((e) => console.warn(`解绑旧 R2 域名失败 [${oldDomain}]:`, e));
        }
        const boundR2Domains = await CloudflareService.getR2CustomDomains(env, bucketName).catch(() => []);
        if (boundR2Domains.includes(fullDomain)) {
          console.log(`ℹ️ [CF] R2 域名 ${fullDomain} 已存在绑定，跳过绑定动作`);
          break;
        }
        currentStep = "激活 R2 存储桶域名映射";
        await CloudflareService.bindR2Domain(env, bucketName, fullDomain, zoneId);
        break;
      }
      case "member":
      case "api":
      case "admin":
      default: {
        currentStep = `解绑旧 Worker Domain 映射 (${type})`;
        const workerName = env.WORKER_NAME || "backend";
        if (oldDomain && oldDomain !== fullDomain) {
          await CloudflareService.deleteWorkerDomain(env, oldDomain).catch((e) => console.warn(`解绑旧 Worker 域名失败 [${oldDomain}]:`, e));
        }
        const boundWorkerDomains = await CloudflareService.getWorkerCustomDomains(env).catch(() => []);
        if (boundWorkerDomains.includes(fullDomain)) {
          console.log(`ℹ️ [CF] Worker 域名 ${fullDomain} 已存在绑定，跳过绑定动作`);
          break;
        }
        currentStep = `激活 Worker Domain 映射 (${type})`;
        await CloudflareService.bindWorkerDomain(env, zoneId, fullDomain, workerName);
        break;
      }
    }
    return c.json({
      success: true,
      message: `域名 ${fullDomain} 已成功激活并完成槽位 [${type}] 的物理绑定。`
    });
  } catch (err) {
    console.error(`❌ [Bind-Domain Error] @ ${currentStep}:`, err);
    return c.json({
      success: false,
      step: currentStep,
      error: err.message,
      recommendation: `在 [${currentStep}] 阶段失败：${err.message}`
    }, 500);
  }
});
const PLUGIN_MIDDLEWARES = {};
const plugins = new Hono();
const admin = new Hono();
const getPluginPermissionSets = (manifest) => {
  const pluginPermissionSlugs = Array.isArray(manifest?.permissions) ? manifest.permissions.map((item) => String(item?.slug || "").trim()).filter(Boolean) : [];
  const viewPermissionSlugs = pluginPermissionSlugs.filter((slug) => slug.endsWith(".view"));
  const managePermissionSlugs = pluginPermissionSlugs.filter(
    (slug) => slug.endsWith(".manage") || slug.endsWith(".edit") || slug.endsWith(".delete") || slug.endsWith(".update")
  );
  return {
    viewPermissions: Array.from(/* @__PURE__ */ new Set([
      "plugins.view",
      "plugins.manage",
      "role.manage",
      ...viewPermissionSlugs.length > 0 ? viewPermissionSlugs : pluginPermissionSlugs
    ])),
    managePermissions: Array.from(/* @__PURE__ */ new Set([
      "plugins.manage",
      "role.manage",
      ...managePermissionSlugs.length > 0 ? managePermissionSlugs : pluginPermissionSlugs
    ])),
    pluginPermissionSlugs
  };
};
const ensurePluginAdminAccess = async (c, db, manifest, mode) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "未授权访问: 请先登录" }, 401);
  }
  const authInfo = await getAdminAuthInfo(db, user.id);
  const permissionSets = getPluginPermissionSets(manifest);
  const requiredPermissions = mode === "manage" ? permissionSets.managePermissions : permissionSets.viewPermissions;
  if (!hasPermission(authInfo.permissions, requiredPermissions)) {
    return c.json({
      error: "权限不足",
      required: requiredPermissions
    }, 403);
  }
  return null;
};
admin.get("/available", async (c) => {
  const db = await createDbClient(c.env.DB);
  const installed = await PluginService.getAllPlugins(db);
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "未授权访问: 请先登录" }, 401);
  }
  const authInfo = await getAdminAuthInfo(db, user.id);
  const result = await Promise.all(installed.map(async (p) => {
    const bundle = PLUGIN_CODE_REGISTRY[p.slug];
    const manifest = bundle ? await bundle.getManifest() : null;
    const permissionSets = getPluginPermissionSets(manifest);
    const canView = hasPermission(authInfo.permissions, permissionSets.viewPermissions);
    const canManage = hasPermission(authInfo.permissions, permissionSets.managePermissions);
    return {
      slug: p.slug,
      name: p.name,
      description: p.description,
      version: manifest?.version || "v1.0.0",
      author: manifest?.author || "Unknown",
      isInstalled: true,
      isEnabled: !!p.isEnabled,
      dbId: p.id,
      isCodePresent: !!bundle,
      canView,
      canManage,
      permissionSlugs: permissionSets.pluginPermissionSlugs
    };
  }));
  const filtered = result.filter((item) => item.canView);
  return c.json({ success: true, data: filtered });
});
admin.post("/register", requirePermission("plugins.manage"), async (c) => {
  const data = await c.req.json();
  const db = await createDbClient(c.env.DB);
  try {
    await PluginService.registerPluginManually(db, data);
    return c.json({ success: true, message: `插件 ${data.slug} 登记成功` });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 400);
  }
});
plugins.get("/menu", async (c) => {
  const db = await createDbClient(c.env.DB);
  const data = await PluginService.getAdminMenus(db);
  return c.json({ success: true, data });
});
admin.post("/install", requirePermission("plugins.manage"), async (c) => {
  const { slug } = await c.req.json();
  const bundle = PLUGIN_CODE_REGISTRY[slug];
  if (!bundle) return c.json({ error: "未找到插件代码映射，请检查 src/lib/plugin-registry.ts" }, 404);
  const db = await createDbClient(c.env.DB);
  await PluginService.installPlugin(db, slug, {
    name: bundle.manifest.name,
    description: bundle.manifest.description,
    author: bundle.manifest.author
  });
  return c.json({ success: true, message: `${bundle.manifest.name} 安装成功` });
});
admin.post("/toggle", requirePermission("plugins.manage"), async (c) => {
  const { slug, enabled } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  await PluginService.togglePlugin(db, slug, enabled);
  return c.json({ success: true, enabled });
});
admin.delete("/uninstall", requirePermission("plugins.manage"), async (c) => {
  const { slug } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  await PluginService.uninstallPlugin(db, slug);
  return c.json({ success: true, message: "插件已卸载" });
});
admin.patch("/config", requirePermission("plugins.manage"), async (c) => {
  const payload = await c.req.json();
  const { slug, name, description, config } = payload;
  if (!slug) return c.json({ error: "缺少插件标识" }, 400);
  const db = await createDbClient(c.env.DB);
  const user = c.get("user");
  const isTestBypass = c.req.header("X-Test-Bypass") === "true";
  if (user) {
    const rolesList = await db.select({ name: roles.name }).from(adminsToRoles).innerJoin(roles, eq(adminsToRoles.roleId, roles.id)).where(eq(adminsToRoles.adminId, user.id)).all();
    if (!rolesList.some((r) => r.name === "SuperAdmin")) {
      return c.json({ success: false, error: "权限不足: 需要超级管理员权限" }, 403);
    }
  } else if (!isTestBypass) {
    return c.json({ error: "未授权访问" }, 401);
  }
  try {
    await PluginService.updatePluginMetadataBySlug(db, slug, { name, description, config });
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 400);
  }
});
plugins.route("/admin", admin);
plugins.all("/proxy/:slug/*", async (c, next) => {
  const slug = c.req.param("slug");
  const getMiddleware = PLUGIN_MIDDLEWARES[slug];
  if (getMiddleware) {
    const mw = await getMiddleware();
    if (mw) {
      console.log(`🛡️ [Plugin Middleware] Running for ${slug}`);
      return mw(c, next);
    }
  }
  await next();
}, async (c) => {
  const slug = c.req.param("slug");
  const db = await createDbClient(c.env.DB);
  const physicalSlug = isAiSafeName(slug) ? fromAiSafeName(slug) : slug;
  const plugin = await PluginService.checkPluginStatus(db, physicalSlug);
  if (!plugin || !plugin.isEnabled) {
    console.warn(`🚫 [Proxy] 插件 ${physicalSlug} 未安装或未启用 (raw slug: ${slug})`);
    return c.json({ success: false, error: "插件不可用" }, 404);
  }
  const bundle = PLUGIN_CODE_REGISTRY[physicalSlug];
  const manifest = bundle ? await bundle.getManifest() : null;
  const SENSITIVE_WORDS = [
    "rm -rf",
    "drop table",
    "delete from",
    "truncate table",
    "exec(",
    "eval(",
    "system_secret",
    "database_secret",
    "private_key"
  ];
  const checkParamsAndAudit = (obj) => {
    if (obj === null || obj === void 0) {
      return { blocked: false, reason: "" };
    }
    if (typeof obj === "string") {
      const trimmed = obj.trim();
      if (trimmed === "") {
        return { blocked: false, reason: "" };
      }
      const lowerVal = trimmed.toLowerCase();
      for (const word of SENSITIVE_WORDS) {
        if (lowerVal.includes(word)) {
          return { blocked: true, reason: `检测到敏感调用词: "${word}"` };
        }
      }
    }
    if (typeof obj === "object" && !Array.isArray(obj)) {
      for (const k of Object.keys(obj)) {
        const keyLower = k.toLowerCase();
        for (const word of SENSITIVE_WORDS) {
          if (keyLower.includes(word)) {
            return { blocked: true, reason: `检测到敏感参数键: "${word}"` };
          }
        }
        const val = obj[k];
        const res = checkParamsAndAudit(val);
        if (res.blocked) {
          return res;
        }
      }
    }
    if (Array.isArray(obj)) {
      for (const item of obj) {
        const res = checkParamsAndAudit(item);
        if (res.blocked) return res;
      }
    }
    return { blocked: false, reason: "" };
  };
  const queryObj = c.req.query();
  const queryAudit = checkParamsAndAudit(queryObj);
  if (queryAudit.blocked) {
    console.warn(`🚫 [Proxy Audit Block] Blocked query request to ${physicalSlug} due to: ${queryAudit.reason}`);
    return c.json({
      success: false,
      error: `[系统安全边界反馈] 拦截敏感调用，该技能调用已被系统物理拦截。原因: ${queryAudit.reason}`
    }, 400);
  }
  if (c.req.method !== "GET" && c.req.method !== "HEAD") {
    try {
      const cloneReq = c.req.raw.clone();
      const text = await cloneReq.text();
      if (text.trim()) {
        const bodyObj = JSON.parse(text);
        const bodyAudit = checkParamsAndAudit(bodyObj);
        if (bodyAudit.blocked) {
          console.warn(`🚫 [Proxy Audit Block] Blocked body payload request to ${physicalSlug} due to: ${bodyAudit.reason}`);
          return c.json({
            success: false,
            error: `[系统安全边界反馈] 拦截敏感调用，该技能调用已被系统物理拦截。原因: ${bodyAudit.reason}`
          }, 400);
        }
      }
    } catch (e) {
    }
  }
  const url = new URL(c.req.url);
  const pathParts = url.pathname.split("/");
  const proxyStartIndex = pathParts.indexOf("proxy");
  const remainingPath = "/" + pathParts.slice(proxyStartIndex + 2).join("/");
  const isAdminPluginRequest = !remainingPath.startsWith("/p/");
  if (isAdminPluginRequest) {
    const accessError = await ensurePluginAdminAccess(
      c,
      db,
      manifest,
      ["GET", "HEAD", "OPTIONS"].includes(c.req.method) ? "view" : "manage"
    );
    if (accessError) {
      return accessError;
    }
  }
  if (!bundle) {
    console.error(`❌ [Proxy] 注册表中未找到插件代码: ${physicalSlug}`);
    return c.json({ success: false, error: "未找到插件执行链路" }, 502);
  }
  const adminApp = await bundle.getAdminApp();
  const sfApp = await bundle.getStorefrontApp();
  if (adminApp || sfApp) {
    console.log(`🏠 [Local Dynamic Dispatch] RPC -> ${physicalSlug}: ${c.req.method} ${remainingPath}`);
    let body = null;
    if (c.req.method !== "GET" && c.req.method !== "HEAD") {
      try {
        body = await c.req.raw.clone().arrayBuffer();
      } catch (e) {
        console.warn(`⚠️ [Proxy] 读取请求体失败:`, e);
      }
    }
    const reqInit = {
      method: c.req.method,
      headers: c.req.header(),
      body
    };
    try {
      let res = null;
      const proxyEnv = {
        ...c.env,
        __injected_site_domains: c.get("site_domains") || c.get("domains")
      };
      if (adminApp) {
        res = await adminApp.request(remainingPath, reqInit, proxyEnv);
      }
      if ((!res || res.status === 404) && sfApp) {
        const sfRes = await sfApp.request(remainingPath, reqInit, proxyEnv);
        if (sfRes.status !== 404 || !res) {
          res = sfRes;
        }
      }
      if (res) return res;
    } catch (e) {
      console.error(`🔥 [Proxy] 插件执行崩溃 ${physicalSlug}:`, e);
      return c.json({ success: false, error: `插件内部错误: ${e.message}` }, 500);
    }
  }
  console.error(`❌ [Proxy] 插件 ${physicalSlug} 加载后的实例为空`);
  const bindingName = `BINDING_${physicalSlug}`;
  const binding = c.env[bindingName];
  if (binding && typeof binding.fetch === "function") {
    console.log(`📡 [Binding] RPC -> ${bindingName}: ${c.req.method} ${remainingPath}`);
    const proxyUrl = `http://plugin-internal${remainingPath}${url.search}`;
    const response = await binding.fetch(new Request(proxyUrl, c.req.raw.clone()));
    return new Response(response.body, response);
  }
  return c.json({ success: false, error: "未找到插件执行链路" }, 502);
});
var encodeBase64Url = (buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m);
var encodeBase64 = (buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};
var decodeBase64 = (str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
};
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = () => {
  const global = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && typeof navigator.userAgent === "string";
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global?.fastly !== void 0) {
    return "fastly";
  }
  if (global?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
};
var checkUserAgentEquals = (platform) => {
  const userAgent = navigator.userAgent;
  return userAgent.startsWith(platform);
};
var JwtAlgorithmNotImplemented = class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});
var utf8Encoder = new TextEncoder();
new TextDecoder();
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private" && key.type !== "secret") {
      throw new Error(
        `unexpected key type: CryptoKey.type is ${key.type}, expected private or secret`
      );
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
        // 256 >> 3
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
        // 384 >> 3
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
        // 512 >> 3,
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
var encodeJwtPart = (part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part)).buffer).replace(/=/g, "");
var encodeSignaturePart = (buf) => encodeBase64Url(buf).replace(/=/g, "");
var sign$1 = async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  let encodedHeader;
  if (typeof privateKey === "object" && "alg" in privateKey) {
    alg = privateKey.alg;
    encodedHeader = encodeJwtPart({ alg, typ: "JWT", kid: privateKey.kid });
  } else {
    encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  }
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
};
[
  AlgorithmTypes.HS256,
  AlgorithmTypes.HS384,
  AlgorithmTypes.HS512
];
var Jwt = { sign: sign$1 };
var sign = Jwt.sign;
class HookManager {
  handlers = /* @__PURE__ */ new Map();
  /**
   * 插件订阅钩子
   */
  on(type, handler) {
    if (!this.handlers.has(type)) {
      this.handlers.set(type, []);
    }
    this.handlers.get(type).push(handler);
    console.log(`🪝 [Hook] 插件已订阅事件: ${type}`);
  }
  /**
   * 系统触发钩子 (流水线模式: 每个处理器都能修改数据并传递给下一个)
   */
  async emit(type, context, data) {
    const handlers = this.handlers.get(type) || [];
    let currentData = data;
    for (const handler of handlers) {
      currentData = await handler(context, currentData);
    }
    return currentData;
  }
  /**
   * 清理所有钩子 (主要用于测试环境)
   */
  clear() {
    this.handlers.clear();
    console.log("🧹 [Hook] 所有钩子已清空");
  }
}
const hookManager = new HookManager();
class IdentityService {
  /**
   * 注册新用户 (包含核心表与业务表同步创建)
   */
  static async register(d1, data) {
    const db = await createDbClient(d1);
    const userId = generateId(15);
    const passwordHash = await passwordHasher.hash(data.password);
    const existing = await db.select().from(users$1).where(and(
      eq(users$1.email, data.email),
      eq(users$1.tenantId, data.tenantId)
    )).get();
    if (existing) {
      throw new Error("该邮箱已注册，请直接登录");
    }
    const batchQueries = [];
    batchQueries.push(
      db.insert(users$1).values({
        id: userId,
        tenantId: data.tenantId,
        email: data.email,
        passwordHash,
        userType: data.userType,
        status: "active"
      })
    );
    if (data.userType === "admin") {
      const adminData = {
        id: userId,
        username: data.username || data.email.split("@")[0]
      };
      if (admins.hashedPassword) {
        adminData.hashedPassword = passwordHash;
      }
      batchQueries.push(db.insert(admins).values(adminData));
    } else {
      batchQueries.push(
        db.insert(members).values({
          id: userId,
          type: "registered",
          level: data.level || 1,
          nickname: data.nickname,
          avatar: data.avatar,
          phone: data.phone,
          gender: data.gender,
          birthday: data.birthday,
          bio: data.bio
        })
      );
    }
    await db.batch(batchQueries);
    const user = await db.select().from(users$1).where(eq(users$1.id, userId)).get();
    if (user) {
      await hookManager.emit("identity:registered", { db, tenantId: data.tenantId }, { user });
    }
    return user;
  }
  /**
   * 统一身份认证
   */
  static async authenticate(d1, tenantId, email, password) {
    const db = await createDbClient(d1);
    const user = await db.select().from(users$1).where(and(
      eq(users$1.email, email),
      eq(users$1.tenantId, tenantId)
    )).get();
    if (!user) return null;
    if (user.status !== "active") {
      throw new Error("ACCOUNT_DISABLED");
    }
    const valid = await passwordHasher.verify(user.passwordHash, password);
    if (!valid) return null;
    return user;
  }
  /**
   * 签发 JWT Token
   */
  static async generateToken(user, secret) {
    const payload = {
      sub: user.id,
      email: user.email,
      userType: user.userType,
      tenantId: user.tenantId,
      exp: Math.floor(Date.now() / 1e3) + 60 * 60 * 24 * 7
      // 默认 7 天有效期
    };
    return await sign(payload, secret);
  }
}
const IdentityService$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IdentityService
}, Symbol.toStringTag, { value: "Module" }));
const users = new Hono();
users.get("/", requirePermission("user.view"), async (c) => {
  const page = parseInt(c.req.query("page") || "1");
  const pageSize = parseInt(c.req.query("pageSize") || "20");
  const search = c.req.query("search") || "";
  const db = await createDbClient(c.env.DB);
  const whereClause = and(
    eq(users$1.userType, "member"),
    search ? sql`(${users$1.email} LIKE ${"%" + search + "%"} OR ${members.nickname} LIKE ${"%" + search + "%"})` : void 0
  );
  const totalResult = await db.select({ count: sql`count(*)` }).from(users$1).leftJoin(members, eq(users$1.id, members.id)).where(whereClause).get();
  const total = totalResult?.count || 0;
  const userList = await db.select({
    id: users$1.id,
    email: users$1.email,
    userType: users$1.userType,
    status: users$1.status,
    createdAt: users$1.createdAt,
    level: members.level,
    nickname: members.nickname,
    avatar: members.avatar,
    phone: members.phone,
    gender: members.gender,
    birthday: members.birthday,
    balance: members.balance,
    points: members.points,
    bio: members.bio
  }).from(users$1).leftJoin(members, eq(users$1.id, members.id)).where(whereClause).orderBy(desc(users$1.createdAt)).limit(pageSize).offset((page - 1) * pageSize).all();
  return c.json({
    success: true,
    data: userList,
    meta: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    }
  });
});
users.get("/search", requirePermission("user.view"), async (c) => {
  const q = c.req.query("q") || "";
  const db = await createDbClient(c.env.DB);
  const results = await db.select({
    id: users$1.id,
    email: users$1.email,
    nickname: members.nickname
  }).from(users$1).leftJoin(members, eq(users$1.id, members.id)).where(and(
    eq(users$1.userType, "member"),
    sql`${users$1.email} LIKE ${"%" + q + "%"} OR ${members.nickname} LIKE ${"%" + q + "%"}`
  )).limit(20).all();
  return c.json({ success: true, data: results });
});
users.post("/", requirePermission("user.create"), async (c) => {
  const body = await c.req.json();
  try {
    const user = await IdentityService.register(c.env.DB, {
      tenantId: 1,
      // 默认租户
      email: body.email,
      password: body.password,
      userType: "member",
      // 强制锁定为会员类型
      level: body.level || 1,
      nickname: body.nickname,
      avatar: body.avatar,
      phone: body.phone,
      gender: body.gender,
      birthday: body.birthday,
      bio: body.bio
    });
    return c.json({ success: true, user });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
users.put("/:id", requirePermission("user.update"), async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  const db = await createDbClient(c.env.DB);
  try {
    const batchQueries = [];
    const userUpdate = {
      email: body.email,
      status: body.status,
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (userUpdate.email === void 0) delete userUpdate.email;
    if (body.password) {
      userUpdate.passwordHash = await passwordHasher.hash(body.password);
    }
    batchQueries.push(
      db.update(users$1).set(userUpdate).where(eq(users$1.id, id))
    );
    const memberUpdate = {
      level: body.level,
      nickname: body.nickname,
      avatar: body.avatar,
      phone: body.phone,
      gender: body.gender,
      birthday: body.birthday,
      bio: body.bio,
      updatedAt: /* @__PURE__ */ new Date()
    };
    Object.keys(memberUpdate).forEach((key) => memberUpdate[key] === void 0 && delete memberUpdate[key]);
    batchQueries.push(
      db.update(members).set(memberUpdate).where(eq(members.id, id))
    );
    await db.batch(batchQueries);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
users.delete("/:id", requirePermission("user.delete"), async (c) => {
  const id = c.req.param("id");
  const db = await createDbClient(c.env.DB);
  try {
    const memberRecord = await db.select({
      balance: members.balance,
      points: members.points
    }).from(members).where(eq(members.id, id)).get();
    if (memberRecord && ((memberRecord.balance ?? 0) !== 0 || (memberRecord.points ?? 0) !== 0)) {
      return c.json({ error: "当前会员余额或积分不为 0，请先同时清零后再删除会员。" }, 409);
    }
    const runDeleteOps = async (includeApiTokens) => {
      const ops = [
        ...includeApiTokens ? [db.delete(apiTokens).where(eq(apiTokens.userId, id))] : [],
        db.delete(memberSessions).where(eq(memberSessions.userId, id)),
        db.delete(adminSessions).where(eq(adminSessions.userId, id)),
        db.delete(members).where(eq(members.id, id)),
        db.delete(admins).where(eq(admins.id, id)),
        db.delete(users$1).where(eq(users$1.id, id))
      ];
      if (typeof db.batch === "function") {
        await db.batch(ops);
      } else {
        for (const op of ops) await op;
      }
    };
    try {
      await runDeleteOps(true);
    } catch (err) {
      if (String(err?.message || "").includes("no such table: api_tokens")) {
        await runDeleteOps(false);
      } else {
        throw err;
      }
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
users.get("/tokens/all", requirePermission("user.api_manage"), async (c) => {
  const db = await createDbClient(c.env.DB);
  const tokens = await db.select({
    id: apiTokens.id,
    userId: apiTokens.userId,
    email: users$1.email,
    name: apiTokens.name,
    token: apiTokens.token,
    status: apiTokens.status,
    lastUsedAt: apiTokens.lastUsedAt,
    createdAt: apiTokens.createdAt
  }).from(apiTokens).innerJoin(users$1, eq(apiTokens.userId, users$1.id)).all();
  return c.json({ success: true, data: tokens });
});
users.post("/:id/tokens", requirePermission("user.api_manage"), async (c) => {
  const userId = c.req.param("id");
  const { name } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  const tokenValue = "at_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  try {
    await db.insert(apiTokens).values({
      userId,
      name: name || "Default Token",
      token: tokenValue,
      status: "active"
    }).run();
    return c.json({ success: true, token: tokenValue });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
users.delete("/tokens/:tokenId", requirePermission("user.api_manage"), async (c) => {
  const tokenId = c.req.param("tokenId");
  const db = await createDbClient(c.env.DB);
  try {
    await db.delete(apiTokens).where(eq(apiTokens.id, parseInt(tokenId))).run();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
users.get("/balance/logs", requirePermission("user.balance_manage"), async (c) => {
  const page = parseInt(c.req.query("page") || "1");
  const pageSize = parseInt(c.req.query("pageSize") || "20");
  const search = c.req.query("search") || "";
  const db = await createDbClient(c.env.DB);
  let whereClause = void 0;
  if (search) {
    const { or, like } = await import("./domains_B0Ufw_U2.mjs").then((n) => n.a);
    whereClause = or(
      like(users$1.email, `%${search}%`),
      like(members.nickname, `%${search}%`),
      like(balanceLogs.remark, `%${search}%`)
    );
  }
  const { count } = await import("./domains_B0Ufw_U2.mjs").then((n) => n.a);
  const totalResult = await db.select({ count: count() }).from(balanceLogs).innerJoin(users$1, eq(balanceLogs.userId, users$1.id)).leftJoin(members, eq(balanceLogs.userId, members.id)).where(whereClause).get();
  const total = totalResult?.count || 0;
  const logs = await db.select({
    id: balanceLogs.id,
    userId: balanceLogs.userId,
    email: users$1.email,
    nickname: members.nickname,
    type: balanceLogs.type,
    amount: balanceLogs.amount,
    before: balanceLogs.before,
    after: balanceLogs.after,
    remark: balanceLogs.remark,
    createdAt: balanceLogs.createdAt
  }).from(balanceLogs).innerJoin(users$1, eq(balanceLogs.userId, users$1.id)).leftJoin(members, eq(balanceLogs.userId, members.id)).where(whereClause).orderBy(desc(balanceLogs.createdAt)).limit(pageSize).offset((page - 1) * pageSize).all();
  return c.json({
    success: true,
    data: logs,
    meta: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    }
  });
});
users.post("/balance/adjust", requirePermission("user.balance_manage"), async (c) => {
  const { userId, type, amount, remark } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  try {
    const member = await db.select().from(members).where(eq(members.id, userId)).get();
    if (!member) return c.json({ error: "用户不存在" }, 404);
    const before = member.balance;
    let after = before;
    let changeAmount = amount;
    if (type === "add") after += amount;
    else if (type === "sub") after -= amount;
    else if (type === "set") {
      after = amount;
      changeAmount = amount - before;
    }
    await db.batch([
      db.update(members).set({ balance: after }).where(eq(members.id, userId)),
      db.insert(balanceLogs).values({
        tenantId: 1,
        userId,
        type,
        amount: changeAmount,
        before,
        after,
        remark
      })
    ]);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
users.get("/points/logs", requirePermission("user.points_manage"), async (c) => {
  const page = parseInt(c.req.query("page") || "1");
  const pageSize = parseInt(c.req.query("pageSize") || "20");
  const search = c.req.query("search") || "";
  const db = await createDbClient(c.env.DB);
  let whereClause = void 0;
  if (search) {
    const { or, like } = await import("./domains_B0Ufw_U2.mjs").then((n) => n.a);
    whereClause = or(
      like(users$1.email, `%${search}%`),
      like(members.nickname, `%${search}%`),
      like(pointsLogs.remark, `%${search}%`)
    );
  }
  const { count } = await import("./domains_B0Ufw_U2.mjs").then((n) => n.a);
  const totalResult = await db.select({ count: count() }).from(pointsLogs).innerJoin(users$1, eq(pointsLogs.userId, users$1.id)).leftJoin(members, eq(pointsLogs.userId, members.id)).where(whereClause).get();
  const total = totalResult?.count || 0;
  const logs = await db.select({
    id: pointsLogs.id,
    userId: pointsLogs.userId,
    email: users$1.email,
    nickname: members.nickname,
    type: pointsLogs.type,
    amount: pointsLogs.amount,
    before: pointsLogs.before,
    after: pointsLogs.after,
    remark: pointsLogs.remark,
    createdAt: pointsLogs.createdAt
  }).from(pointsLogs).innerJoin(users$1, eq(pointsLogs.userId, users$1.id)).leftJoin(members, eq(pointsLogs.userId, members.id)).where(whereClause).orderBy(desc(pointsLogs.createdAt)).limit(pageSize).offset((page - 1) * pageSize).all();
  return c.json({
    success: true,
    data: logs,
    meta: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    }
  });
});
users.post("/points/adjust", requirePermission("user.points_manage"), async (c) => {
  const { userId, type, amount, remark } = await c.req.json();
  const db = await createDbClient(c.env.DB);
  try {
    const member = await db.select().from(members).where(eq(members.id, userId)).get();
    if (!member) return c.json({ error: "用户不存在" }, 404);
    const before = member.points;
    let after = before;
    let changeAmount = amount;
    if (type === "add") after += amount;
    else if (type === "sub") after -= amount;
    else if (type === "set") {
      after = amount;
      changeAmount = amount - before;
    }
    await db.batch([
      db.update(members).set({ points: after }).where(eq(members.id, userId)),
      db.insert(pointsLogs).values({
        tenantId: 1,
        userId,
        type,
        amount: changeAmount,
        before,
        after,
        remark
      })
    ]);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "gif", "bmp", "svg", "avif", "heic"];
const FILE_EXTENSIONS = ["pdf", "doc", "docx", "xls", "xlsx", "csv", "ppt", "pptx", "txt", "md", "json", "xml", "html", "zip", "rar", "7z"];
const isHttpUrl = (value) => typeof value === "string" && /^https?:\/\//i.test(value.trim());
const getExtension = (url) => {
  const normalized = url.split("?")[0].split("#")[0];
  const match = normalized.match(/\.([a-z0-9]+)$/i);
  return match ? match[1].toLowerCase() : "";
};
const detectAssetKindFromUrl = (url) => {
  const ext = getExtension(url);
  if (IMAGE_EXTENSIONS.includes(ext)) return "image";
  if (FILE_EXTENSIONS.includes(ext)) return "file";
  return null;
};
const pickFirstAssetUrl = (payload) => {
  if (!payload || typeof payload !== "object") return "";
  const directCandidates = [
    payload.imageUrl,
    payload.fileUrl,
    payload.documentUrl,
    payload.attachmentUrl,
    payload.url,
    payload.image,
    payload.file
  ];
  for (const candidate of directCandidates) {
    if (isHttpUrl(candidate)) return candidate.trim();
  }
  if (Array.isArray(payload.attachments)) {
    for (const item of payload.attachments) {
      if (item && isHttpUrl(item.url)) {
        return item.url.trim();
      }
    }
  }
  return "";
};
const extractPromptAsset = (payload) => {
  const prompt = String(payload?.prompt || "").trim();
  const directAssetUrl = pickFirstAssetUrl(payload);
  const promptUrlMatch = prompt.match(/https?:\/\/[^\s"',]+/i);
  const assetUrl = directAssetUrl || (promptUrlMatch ? promptUrlMatch[0] : "");
  const inferredKind = assetUrl && detectAssetKindFromUrl(assetUrl) || (/(pdf|docx?|xlsx?|csv|pptx?|文档|附件|文件)/i.test(prompt) ? "file" : null);
  let cleanPrompt = prompt;
  if (assetUrl) {
    cleanPrompt = cleanPrompt.replace(/(?:图片|图像|文件|文档|附件)(?:地址|链接|URL)?[:：]?\s*https?:\/\/[^\s"',]+/gi, "").replace(new RegExp(assetUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "").trim();
  }
  if (!cleanPrompt) {
    cleanPrompt = inferredKind === "file" ? "请识别并解析这份附件文档的内容。" : "请识别并解析这张图片或文件的内容。";
  }
  return {
    assetUrl,
    assetKind: inferredKind || (assetUrl ? "image" : null),
    cleanPrompt
  };
};
const buildMultimodalUserMessage = (prompt, assetUrl, assetKind) => {
  if (!assetUrl) {
    return [{ role: "user", content: prompt }];
  }
  const assetPart = assetKind === "file" ? { type: "file_url", file_url: { url: assetUrl } } : { type: "image_url", image_url: { url: assetUrl } };
  return [{
    role: "user",
    content: [
      { type: "text", text: prompt },
      assetPart
    ]
  }];
};
const inferMultimodalModelCapabilities = (modelConfig) => {
  const types = Array.isArray(modelConfig?.types) ? modelConfig.types.map((item) => String(item || "").toLowerCase()) : [String(modelConfig?.type || "").toLowerCase()].filter(Boolean);
  const descriptionText = [
    modelConfig?.name,
    modelConfig?.description
  ].filter(Boolean).join(" ").toLowerCase();
  const mentionsImageGeneration = /(生图|绘图|画图|出图|文生图|图像生成|image generation|generate image|text-to-image)/i.test(descriptionText);
  const mentionsDocument = /(文档|附件|文件|pdf|word|excel|ppt|csv|表格|document|file)/i.test(descriptionText);
  const mentionsOcr = /(ocr|识别|提取|抽取|版面|layout|parse|parsing)/i.test(descriptionText);
  const mentionsVision = /(图片|图像|视觉|看图|识图|多模态|vision|vl|image understanding)/i.test(descriptionText);
  const hasImageType = types.includes("image");
  const hasGeneralType = types.includes("general");
  const hasTextType = types.includes("text");
  const isOcrModel = mentionsDocument && mentionsOcr;
  const isVisionModel = mentionsVision || mentionsDocument && (hasGeneralType || hasTextType || hasImageType);
  const isImageGenerationModel = mentionsImageGeneration || hasImageType && !mentionsDocument && !mentionsOcr && !mentionsVision;
  return {
    isImageGenerationModel,
    isOcrModel,
    isVisionModel
  };
};
const HARD_LOCKED_AGENT_INTERNAL_PREFIXES = [
  "/api/v1/users",
  "/api/v1/rbac/permissions",
  "/api/v1/rbac/roles",
  "/api/v1/rbac/admins",
  "/api/v1/rbac/site-access",
  "/api/v1/settings/ai_config",
  "/api/v1/settings/ai_gateways",
  "/api/v1/agents"
];
const AGENT_PROXY_HEADER = "x-agent-proxy";
const AGENT_PROXY_SIGNATURE_HEADER = "x-agent-proxy-signature";
function getAgentProxySigningKey(env) {
  return String(
    env?.AGENT_ACTION_PROXY_SIGNING_KEY || env?.AGENT_UPLOAD_SIGNING_KEY || env?.ADMIN_VERIFICATION || ""
  ).trim();
}
async function signPayload(raw, key) {
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signatureBuf = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(raw));
  return Array.from(new Uint8Array(signatureBuf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function createAgentProxyHeaders(env, payload) {
  const key = getAgentProxySigningKey(env);
  if (!key) {
    throw new Error("AGENT_PROXY_SIGNING_KEY_MISSING");
  }
  const encoded = btoa(JSON.stringify(payload));
  const signature = await signPayload(encoded, key);
  return {
    [AGENT_PROXY_HEADER]: encoded,
    [AGENT_PROXY_SIGNATURE_HEADER]: signature
  };
}
async function verifyAgentProxyEnvelope(c) {
  const encoded = String(c.req.header(AGENT_PROXY_HEADER) || "").trim();
  const signature = String(c.req.header(AGENT_PROXY_SIGNATURE_HEADER) || "").trim();
  const key = getAgentProxySigningKey(c.env);
  if (!encoded || !signature || !key) {
    return null;
  }
  const expected = await signPayload(encoded, key);
  if (expected !== signature) {
    return null;
  }
  try {
    const payload = JSON.parse(atob(encoded));
    if (!payload?.agentId || !payload?.roleId || !payload?.expiresAt) {
      return null;
    }
    if (Date.now() > Number(payload.expiresAt)) {
      return null;
    }
    return {
      agentId: String(payload.agentId),
      roleId: Number(payload.roleId),
      actingAdminId: String(payload.actingAdminId || ""),
      expiresAt: Number(payload.expiresAt)
    };
  } catch {
    return null;
  }
}
async function loadRoleAuthContext(db, roleId) {
  const role = await db.select().from(roles).where(eq(roles.id, roleId)).get();
  if (!role) return null;
  const perms = await db.select({ slug: rolePermissions.permissionSlug }).from(rolePermissions).where(eq(rolePermissions.roleId, roleId)).all();
  const permissions2 = Array.from(new Set(perms.map((item) => String(item.slug))));
  const isAdmin = role.name === "SuperAdmin" || permissions2.includes("*") || permissions2.includes("all");
  return {
    roleName: String(role.name),
    roles: [String(role.name)],
    permissions: permissions2,
    isAdmin
  };
}
async function resolveTrustedAgentProxyAuth(c) {
  const envelope = await verifyAgentProxyEnvelope(c);
  if (!envelope) {
    return null;
  }
  const db = await createDbClient(c.env.DB);
  const roleAuth = await loadRoleAuthContext(db, envelope.roleId);
  if (!roleAuth) {
    return null;
  }
  return {
    ...envelope,
    ...roleAuth,
    syntheticUserId: `agent:${envelope.agentId}`
  };
}
const agents = new Hono();
const ai = new Hono();
const AGENT_VIEW_PERMISSIONS = ["settings.ai.view", "settings.ai", "role.manage", "ai.employee.use"];
const AGENT_RUNTIME_PERMISSIONS = ["ai.employee.use", "settings.ai", "role.manage"];
const AI_SETTINGS_MANAGE_PERMISSIONS = ["settings.ai", "role.manage"];
const getCfCredentials = (c, config) => {
  return {
    accountId: c.env.CF_ACCOUNT_ID || config.accountId,
    apiToken: c.env.CF_API_TOKEN || config.apiToken
  };
};
const getAgentUploadSigningKey = (c) => {
  return String(c.env.AGENT_UPLOAD_SIGNING_KEY || c.env.ADMIN_VERIFICATION || "").trim();
};
const normalizeAbsoluteOrigin = (value) => {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(candidate);
    return `${url.protocol}//${url.host}`;
  } catch {
    return "";
  }
};
const getDefaultModelId = (config) => {
  if (!config) return void 0;
  const assignedModelId = config.assignments?.text?.modelId;
  if (assignedModelId) return assignedModelId;
  if (Array.isArray(config.providers)) {
    for (const provider of config.providers) {
      if (Array.isArray(provider.models) && provider.models.length > 0 && provider.models[0].id) {
        return provider.models[0].id;
      }
    }
  }
  return void 0;
};
function prefilterMessageAttachments(messages) {
  if (!Array.isArray(messages)) return [];
  return messages.map((msg) => {
    if (!msg) return msg;
    if (typeof msg.content === "string") {
      return msg;
    }
    if (Array.isArray(msg.content)) {
      const purifiedContent = msg.content.map((item) => {
        if (!item || typeof item !== "object") return item;
        if (item.type === "image_url" && item.image_url) {
          const url = item.image_url.url || "";
          if (url.startsWith("data:")) {
            console.warn("[Attachment Guard] Detected base64 image data URL. Stripping for memory optimization.");
            return {
              type: "text",
              text: "（⚠️ [系统警报] 系统检测到发送了 Base64 格式图片，为保障运行能效，该图片已被拦截，请使用公共 URL 链接发送图片）"
            };
          }
          return {
            type: "image_url",
            image_url: { url }
            // 仅保留 URL 句柄
          };
        }
        if (item.type === "file_url" && item.file_url) {
          const url = item.file_url.url || "";
          return {
            type: "file_url",
            file_url: { url }
            // 仅保留 URL 句柄
          };
        }
        if (item.arrayBuffer || item.buffer || item.blob) {
          console.warn("[Attachment Guard] Detected raw buffer/blob in content. Stripping raw bytes.");
          const { arrayBuffer, buffer, blob, ...rest } = item;
          return {
            ...rest,
            text: item.text || "（⚠️ [系统警报] 严禁直接在消息体中操作并传递 ArrayBuffer 二进制流，请使用外部 URL）"
          };
        }
        return item;
      });
      return {
        ...msg,
        content: purifiedContent
      };
    }
    return msg;
  });
}
const publicAiGateway = async (c, next) => {
  const db = await createDbClient(c.env.DB);
  const aiConfigRows = await db.select().from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
  const aiConfigRow = aiConfigRows[0];
  const aiConfig = aiConfigRow ? JSON.parse(aiConfigRow.value) : {};
  const siteSettings = await SiteSettingsService.getPayload(db);
  if (!aiConfig.enabled) {
    return c.json({ error: "FORBIDDEN", message: "AI 功能暂未开启。" }, 403);
  }
  const requestOrigin = normalizeAbsoluteOrigin(c.req.header("origin") || c.req.header("referer") || "");
  const allowedOrigin = normalizeAbsoluteOrigin(siteSettings?.canonical_domain);
  if (!requestOrigin || allowedOrigin && requestOrigin !== allowedOrigin) {
    return c.json({ error: "FORBIDDEN", message: "域名校验失败。" }, 403);
  }
  await next();
};
agents.get("/storage/presigned", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const filename = c.req.query("filename");
  const filetype = c.req.query("type") || "application/octet-stream";
  const sizeStr = c.req.query("size");
  if (!filename) {
    return c.json({ success: false, error: "MISSING_FILENAME", message: "必须指定上传文件名 filename" }, 400);
  }
  const size = sizeStr ? Number(sizeStr) : 0;
  const MAX_SIZE = 20 * 1024 * 1024;
  if (size > MAX_SIZE) {
    return c.json({ success: false, error: "FILE_TOO_LARGE", message: "文件大小超过 20MB 限制。" }, 400);
  }
  const bucketName = c.env.MEDIA_BUCKET_NAME || "trade-media-bucket";
  const accountId = c.env.CF_ACCOUNT_ID;
  const accessKeyId = c.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = c.env.R2_SECRET_ACCESS_KEY;
  const key = `media/${Date.now()}_${filename}`;
  try {
    if (accountId && accessKeyId && secretAccessKey) {
      const presignedUrl = await StorageService.generatePresignedPutUrl({
        bucketName,
        accountId,
        accessKeyId,
        secretAccessKey,
        key,
        contentType: filetype,
        expiresInSeconds: 1200
        // 20分钟有效期
      });
      const downloadUrl = await StorageService.getSecureDownloadUrl(c, key);
      return c.json({
        success: true,
        presignedUrl,
        url: downloadUrl,
        key
      });
    } else {
      const timestamp = Date.now();
      const rawStringToSign = `${key}_${timestamp}`;
      const signKey = getAgentUploadSigningKey(c);
      if (!signKey) {
        return c.json({
          success: false,
          error: "UPLOAD_SIGNING_KEY_MISSING",
          message: "未配置 AGENT_UPLOAD_SIGNING_KEY 或 ADMIN_VERIFICATION，已禁用 fallback 上传签名通道。"
        }, 500);
      }
      const encoder = new TextEncoder();
      const cryptoKey = await crypto.subtle.importKey(
        "raw",
        encoder.encode(signKey),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
      );
      const signatureBuf = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(rawStringToSign));
      const signature = Array.from(new Uint8Array(signatureBuf)).map((b) => b.toString(16).padStart(2, "0")).join("");
      const fallbackUploadUrl = `/api/v1/agents/storage/fallback-upload?key=${encodeURIComponent(key)}&t=${timestamp}&s=${signature}`;
      const downloadUrl = `/api/v1/media/file/${key}`;
      return c.json({
        success: true,
        presignedUrl: fallbackUploadUrl,
        url: downloadUrl,
        key
      });
    }
  } catch (err) {
    console.error("[Storage Presign Error]:", err);
    return c.json({ success: false, error: "PRESIGN_FAILED", message: err.message }, 500);
  }
});
agents.put("/storage/fallback-upload", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const key = c.req.query("key");
  const timestampStr = c.req.query("t");
  const signature = c.req.query("s");
  if (!key || !timestampStr || !signature) {
    return c.json({ error: "BAD_REQUEST", message: "参数校验失败" }, 400);
  }
  const timestamp = Number(timestampStr);
  if (Date.now() - timestamp > 600 * 1e3) {
    return c.json({ error: "EXPIRED", message: "上传密钥已超时，请重新请求预签名链接" }, 403);
  }
  const rawStringToSign = `${key}_${timestamp}`;
  const signKey = getAgentUploadSigningKey(c);
  if (!signKey) {
    return c.json({ error: "UPLOAD_SIGNING_KEY_MISSING", message: "服务端未配置上传签名密钥" }, 500);
  }
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(signKey),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signatureBuf = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(rawStringToSign));
  const expectedSig = Array.from(new Uint8Array(signatureBuf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  if (signature !== expectedSig) {
    return c.json({ error: "FORBIDDEN", message: "签名校验未通过，上传受限" }, 403);
  }
  const bucket = c.env.MEDIA_BUCKET;
  if (!bucket) {
    return c.json({ error: "BUCKET_NOT_BOUND", message: "R2 存储桶尚未绑定，请检查核心配置。" }, 500);
  }
  try {
    const contentType = c.req.header("content-type") || "application/octet-stream";
    const bodyStream = c.req.raw.body;
    if (!bodyStream) {
      return c.json({ error: "EMPTY_BODY", message: "上传内容不能为空" }, 400);
    }
    await bucket.put(key, bodyStream, {
      httpMetadata: { contentType }
    });
    return c.json({ success: true, key });
  } catch (err) {
    console.error("[Fallback Upload Error]:", err);
    return c.json({ error: "UPLOAD_FAILED", message: err.message }, 500);
  }
});
agents.get("/", requirePermission(AGENT_VIEW_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    const list = await db.select().from(aiAgents).all();
    const configs = await db.select().from(agentConfigs).all();
    const formatted = list.map((agent) => {
      const cfg = configs.find((k) => k.agentId === agent.id);
      return {
        id: agent.id,
        name: agent.name,
        avatar: agent.avatar || "🤖",
        description: agent.description || "高级 AI 数字化员工助理",
        systemPrompt: agent.systemPrompt || "",
        loadedModels: cfg?.loadedModels && cfg.loadedModels.length > 0 ? cfg.loadedModels : [agent.masterModelId],
        masterModelId: agent.masterModelId,
        systemRoleId: agent.systemRoleId ? String(agent.systemRoleId) : "",
        subModels: cfg?.subModels || [],
        skills: cfg?.skills || [],
        isActive: true,
        manualInstructions: agent.manualInstructions || "",
        capabilityOverrides: typeof agent.capabilityOverrides === "string" ? JSON.parse(agent.capabilityOverrides) : agent.capabilityOverrides || {}
      };
    });
    return c.json({ success: true, data: formatted });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.post("/", requirePermission(AI_SETTINGS_MANAGE_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    const data = await c.req.json();
    const {
      id,
      name,
      avatar,
      description,
      systemPrompt,
      masterModelId,
      systemRoleId,
      subModels,
      skills,
      manualInstructions,
      capabilityOverrides,
      loadedModels
    } = data;
    const rId = systemRoleId ? Number(systemRoleId) : null;
    const finalId = id || `emp-${Date.now()}`;
    const aiConfigRows = await db.select({ value: systemSettings.value }).from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
    const aiConfigRow = aiConfigRows[0];
    const aiConfig = aiConfigRow ? JSON.parse(aiConfigRow.value) : {};
    const fallbackModelId = getDefaultModelId(aiConfig) || "";
    const agentData = {
      id: finalId,
      name,
      avatar: avatar || "🤖",
      description: description || "高级 AI 数字化员工助理",
      systemPrompt: systemPrompt || "",
      masterModelId: masterModelId || fallbackModelId,
      systemRoleId: rId,
      manualInstructions: manualInstructions || "",
      capabilityOverrides: typeof capabilityOverrides === "object" ? capabilityOverrides : {}
    };
    const existsRows = await db.select().from(aiAgents).where(eq(aiAgents.id, finalId)).all();
    const exists = existsRows[0];
    if (exists) {
      await db.update(aiAgents).set(agentData).where(eq(aiAgents.id, finalId)).run();
    } else {
      await db.insert(aiAgents).values(agentData).run();
    }
    const configData = {
      agentId: finalId,
      subModels: Array.isArray(subModels) ? subModels : [],
      skills: Array.isArray(skills) ? skills : [],
      loadedModels: Array.isArray(loadedModels) ? loadedModels : [masterModelId || fallbackModelId]
    };
    const configExistsRows = await db.select().from(agentConfigs).where(eq(agentConfigs.agentId, finalId)).all();
    const configExists = configExistsRows[0];
    if (configExists) {
      await db.update(agentConfigs).set(configData).where(eq(agentConfigs.agentId, finalId)).run();
    } else {
      await db.insert(agentConfigs).values(configData).run();
    }
    return c.json({ success: true, id: finalId });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.delete("/:id", requirePermission(AI_SETTINGS_MANAGE_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    const id = c.req.param("id");
    const keysToDelete = [];
    try {
      const deletedMsgs = await db.select({ attachments: agentMessages.attachments }).from(agentMessages).where(eq(agentMessages.agentId, id)).all();
      for (const m of deletedMsgs) {
        if (m.attachments) {
          try {
            const list = typeof m.attachments === "string" ? JSON.parse(m.attachments) : m.attachments;
            if (Array.isArray(list)) {
              for (const attach of list) {
                if (attach && attach.url) {
                  const parts = attach.url.split("/api/v1/media/file/");
                  if (parts.length > 1) {
                    const rawKey = parts[1].split("?")[0];
                    keysToDelete.push(decodeURIComponent(rawKey));
                  }
                }
              }
            }
          } catch {
          }
        }
      }
    } catch (err) {
      console.warn("[Agent Delete Extract Attachments Error]:", err.message);
    }
    await db.delete(aiAgents).where(eq(aiAgents.id, id)).run();
    await db.delete(agentConfigs).where(eq(agentConfigs.agentId, id)).run();
    await db.delete(agentSessions).where(eq(agentSessions.agentId, id)).run();
    await db.delete(agentMessages).where(eq(agentMessages.agentId, id)).run();
    if (keysToDelete.length > 0 && c.env.MEDIA_BUCKET) {
      const deleteFilesTask = async () => {
        try {
          for (const key of keysToDelete) {
            await c.env.MEDIA_BUCKET.delete(key);
          }
          console.log(`♻️ [Storage Agent Cleanup]: Deleted ${keysToDelete.length} files from R2 for agent: ${id}`);
        } catch (cleanErr) {
          console.warn("[Storage Agent Cleanup Error]:", cleanErr.message);
        }
      };
      if (c.executionCtx && typeof c.executionCtx.waitUntil === "function") {
        c.executionCtx.waitUntil(deleteFilesTask());
      } else {
        await deleteFilesTask();
      }
    }
    return c.json({ success: true });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.post("/:id/chat/prepare", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const employeeId = c.req.param("id");
  try {
    const body = await c.req.json();
    const messages = prefilterMessageAttachments(body.messages || []);
    const isShadowFeedback = !!body.is_shadow_feedback;
    let finalSystemPrompt = "";
    let activeSkills = [];
    let tools = [];
    let agent = null;
    try {
      if (isShadowFeedback) {
        console.log("⚡ [Shadow Feedback]: Bypassed capability compile, and tools loading.");
        const agentRows = await db.select({
          id: aiAgents.id,
          masterModelId: aiAgents.masterModelId,
          systemPrompt: aiAgents.systemPrompt,
          systemRoleId: aiAgents.systemRoleId,
          manualInstructions: aiAgents.manualInstructions,
          updatedAt: aiAgents.updatedAt
        }).from(aiAgents).where(eq(aiAgents.id, employeeId)).all();
        agent = agentRows[0];
      } else {
        const agentRows = await db.select({
          id: aiAgents.id,
          masterModelId: aiAgents.masterModelId,
          systemPrompt: aiAgents.systemPrompt,
          systemRoleId: aiAgents.systemRoleId,
          manualInstructions: aiAgents.manualInstructions,
          updatedAt: aiAgents.updatedAt
        }).from(aiAgents).where(eq(aiAgents.id, employeeId)).all();
        agent = agentRows[0];
      }
    } catch (dbErr) {
      console.warn("[AgentChat] Database query for agent failed, using fallback:", dbErr);
    }
    let aiConfig = {};
    try {
      const aiConfigRows = await db.select({ value: systemSettings.value }).from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
      const aiConfigRow = aiConfigRows[0];
      if (!aiConfigRow) {
        console.error("[AgentChat] ai_config not found in system_settings");
        return c.json({ error: "AI_CONFIG_MISSING", message: "请先在系统设置中配置 AI 服务商与 API Key。" }, 400);
      }
      aiConfig = JSON.parse(aiConfigRow.value);
    } catch (configErr) {
      console.error("[AgentChat] Failed to parse ai_config:", configErr);
      return c.json({ error: "AI_CONFIG_PARSE_ERROR", message: "AI 配置解析失败，请检查 system_settings 数据。" }, 500);
    }
    const roleId = agent?.systemRoleId ? Number(agent.systemRoleId) : null;
    if (isShadowFeedback) {
      finalSystemPrompt = "你是一个高效率、极具职业素养的 AI 数字员工助手。以下是你刚才请求的工具执行结果。请仔细评估任务是否已完全结束。如果任务需要多步分步执行且尚未完成（例如：需要使用刚才创建的分类 ID 继续创建产品），请继续调用下一步真正需要的系统工具。只有当整个任务完全结束时，才总结结果并回复用户。严禁发明不存在的工具名，严禁用泛化名字替代真实工具 slug。若工具返回 success=false 或 error 字段，你必须先根据返回的错误 JSON 修正 path/method/params 后再继续；禁止在未修改参数的情况下重复同一个失败调用。";
      console.log("⚡ [Shadow Feedback]: Using lightweight prompt but preserving actual tool catalog.");
      try {
        const configRows = await db.select({
          skills: agentConfigs.skills,
          loadedModels: agentConfigs.loadedModels
        }).from(agentConfigs).where(eq(agentConfigs.agentId, employeeId)).all();
        const config = configRows[0];
        const systemPromptText = agent?.systemPrompt || "你是一个高效率、极具职业素养的 AI 数字员工助手。";
        const boundSkills = config?.skills || [];
        const manualSop = agent?.manualInstructions || "";
        const masterModelForFilter = agent?.masterModelId || "";
        const loadedModelsInfo = (Array.isArray(config?.loadedModels) ? config.loadedModels : []).filter((modelId) => modelId && modelId !== masterModelForFilter).map((modelId) => {
          for (const provider2 of aiConfig.providers || []) {
            const model = provider2.models?.find((m) => m.id === modelId);
            if (model) {
              return {
                id: modelId,
                name: model.name || modelId,
                description: model.description || provider2.description || "",
                providerId: provider2.id
              };
            }
          }
          return { id: modelId, name: modelId, description: "" };
        });
        const compiled = await AgentCapabilityService.compileFullPrompt(
          db,
          systemPromptText,
          manualSop,
          roleId,
          boundSkills,
          loadedModelsInfo,
          employeeId,
          agent?.updatedAt,
          []
        );
        activeSkills = compiled.activeSkills;
        tools = compiled.tools;
      } catch (shadowCompileErr) {
        console.warn("[Shadow Feedback] Failed to preserve tool catalog:", shadowCompileErr);
      }
      const sessionId = body.sessionId;
      if (sessionId) {
        const triggerSummaryGen = async () => {
          try {
            const sessionRows = await db.select({ summary: agentSessions.summary }).from(agentSessions).where(eq(agentSessions.id, sessionId)).all();
            const session = sessionRows[0];
            if (session && !session.summary && messages.length > 15) {
              console.log(`🧠 [Long-Term Memory] Triggering background summary extraction for session: ${sessionId}`);
              const chatText = messages.map((m) => `${m.role === "user" ? "用户" : "AI"}: ${m.content || ""}`).join("\n").substring(0, 4e3);
              const summaryPrompt = `你是一个长期记忆提取专家。请根据以下 AI 员工与用户的对话历史，总结提炼出一段【100字以内】的“对话核心上下文与长时记忆摘要”。这段摘要将作为长时记忆，用于指导该员工后续的对话认知。

对话历史：
${chatText}

请直接输出提炼后的摘要内容，不要有任何前缀、后缀或 Markdown。`;
              let summaryModelId = getDefaultModelId(aiConfig) || "";
              if (agent?.masterModelId) {
                summaryModelId = agent.masterModelId;
              }
              let summaryProvider = aiConfig.providers?.find((p) => p.models?.some((m) => m.id === summaryModelId)) || aiConfig.providers?.[0];
              if (summaryProvider) {
                const { accountId: accountId2, apiToken: apiToken2 } = getCfCredentials(c, aiConfig);
                const targetUrl2 = resolveChatBaseUrl(summaryProvider, accountId2);
                const sUrl = `${targetUrl2}${resolveChatEndpoint(summaryProvider, targetUrl2, summaryModelId)}`;
                const headers = {
                  "Content-Type": "application/json",
                  "Authorization": getProviderAuthHeader(summaryProvider, apiToken2)
                };
                const sBody = isOpenAiCompatibleProvider(summaryProvider) ? {
                  model: summaryModelId,
                  messages: [{ role: "user", content: summaryPrompt }],
                  temperature: 0.3,
                  max_tokens: 150
                } : { prompt: summaryPrompt };
                const sRes = await fetch(sUrl, {
                  method: "POST",
                  headers,
                  body: JSON.stringify(sBody),
                  signal: AbortSignal.timeout(8e3)
                });
                if (sRes.ok) {
                  const sJson = await sRes.json();
                  let summaryText = "";
                  if (!isOpenAiCompatibleProvider(summaryProvider)) {
                    summaryText = sJson.result?.response || "";
                  } else {
                    summaryText = sJson.choices?.[0]?.message?.content || "";
                  }
                  summaryText = summaryText.trim();
                  if (summaryText) {
                    await db.update(agentSessions).set({ summary: summaryText, updatedAt: /* @__PURE__ */ new Date() }).where(eq(agentSessions.id, sessionId)).run();
                    console.log(`✅ [Long-Term Memory Success] Summary saved for session ${sessionId}: "${summaryText}"`);
                  }
                }
              }
            }
          } catch (memErr) {
            console.warn("[Long-Term Memory Summary Error]:", memErr.message);
          }
        };
        let executionCtx = null;
        try {
          executionCtx = c.executionCtx;
        } catch {
          executionCtx = null;
        }
        if (executionCtx && typeof executionCtx.waitUntil === "function") {
          executionCtx.waitUntil(triggerSummaryGen());
        } else {
          triggerSummaryGen();
        }
      }
    } else {
      let config = null;
      try {
        const configRows = await db.select({
          skills: agentConfigs.skills,
          loadedModels: agentConfigs.loadedModels
        }).from(agentConfigs).where(eq(agentConfigs.agentId, employeeId)).all();
        config = configRows[0];
      } catch (dbErr) {
        console.warn("[AgentChat] Database query for agent configs failed, using fallback:", dbErr);
      }
      const systemPromptText = agent?.systemPrompt || "你是一个高效率、极具职业素养 of AI 数字员工助手。";
      const boundSkills = config?.skills || [];
      const manualSop = agent?.manualInstructions || "";
      const masterModelForFilter = agent?.masterModelId || "";
      const loadedModelsInfo = (Array.isArray(config?.loadedModels) ? config.loadedModels : []).filter((modelId) => modelId && modelId !== masterModelForFilter).map((modelId) => {
        for (const provider2 of aiConfig.providers || []) {
          const model = provider2.models?.find((m) => m.id === modelId);
          if (model) {
            return {
              id: modelId,
              name: model.name || modelId,
              description: model.description || provider2.description || "",
              providerId: provider2.id
            };
          }
        }
        return { id: modelId, name: modelId, description: "" };
      });
      const rawAttachments = [];
      const seenFileIds = /* @__PURE__ */ new Set();
      [...messages].forEach((m) => {
        if (m.role === "user" && m.attachments) {
          const list = typeof m.attachments === "string" ? JSON.parse(m.attachments) : m.attachments;
          if (Array.isArray(list)) {
            list.forEach((file) => {
              if (file && file.id && !seenFileIds.has(String(file.id))) {
                seenFileIds.add(String(file.id));
                rawAttachments.push(file);
              }
            });
          }
        }
      });
      const urlObj = new URL(c.req.url);
      const origin = urlObj.origin;
      const parsedRawList = rawAttachments;
      const attachments = (Array.isArray(parsedRawList) ? parsedRawList : []).map((file) => {
        let fileUrl = file.url || "";
        if (fileUrl.startsWith("/")) {
          fileUrl = `${origin}${fileUrl}`;
        }
        return {
          ...file,
          url: fileUrl
        };
      });
      try {
        const compiled = await AgentCapabilityService.compileFullPrompt(
          db,
          systemPromptText,
          manualSop,
          roleId,
          boundSkills,
          loadedModelsInfo,
          employeeId,
          agent?.updatedAt,
          attachments
        );
        finalSystemPrompt = compiled.finalSystemPrompt;
        const now = /* @__PURE__ */ new Date();
        const currentTimeStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 星期${["日", "一", "二", "三", "四", "五", "六"][now.getDay()]} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
        finalSystemPrompt = finalSystemPrompt.replace(/\{\{CURRENT_SYSTEM_TIME\}\}/g, currentTimeStr).replace(/\{\{CURRENT_SYSTEM_YEAR\}\}/g, String(now.getFullYear()));
        activeSkills = compiled.activeSkills;
        tools = compiled.tools;
      } catch (compileErr) {
        console.error("[AgentChat] Capability compile failed, using basic prompt:", compileErr);
        finalSystemPrompt = systemPromptText;
      }
    }
    const { accountId, apiToken } = getCfCredentials(c, aiConfig);
    if (!accountId && !apiToken) {
      console.error("[AgentChat] Missing CF credentials: no accountId or apiToken");
      return c.json({ error: "CREDENTIALS_MISSING", message: "缺少 Cloudflare 凭证，请检查环境变量或 AI 配置。" }, 400);
    }
    let masterModelId = getDefaultModelId(aiConfig) || "";
    if (agent?.masterModelId) {
      masterModelId = agent.masterModelId;
    }
    let provider = aiConfig.providers?.find((p) => p.models?.some((m) => m.id === masterModelId));
    if (!provider) {
      provider = aiConfig.providers?.[0];
    }
    if (!provider) {
      console.error("[AgentChat] No provider found for model:", masterModelId, "Available:", aiConfig.providers?.map((p) => p.id));
      return c.json({ error: "PROVIDER_NOT_FOUND", message: `未找到匹配模型 ${masterModelId} 的服务商配置。` }, 404);
    }
    const promptByteLen = new TextEncoder().encode(finalSystemPrompt).length;
    console.log(`📊 [AgentChat Audit] shadow=${isShadowFeedback}, prompt=${promptByteLen}B, tools=${tools.length}, model=${masterModelId}, provider=${provider.id}`);
    if (tools.length > 0) {
      console.log("[AI Tools Dispatch]:", tools.map((t) => t.function?.name).join(", "));
    }
    const targetUrl = resolveChatBaseUrl(provider, accountId);
    const endpoint = resolveChatEndpoint(provider, targetUrl, masterModelId);
    const authHeader = getProviderAuthHeader(provider, apiToken);
    const reqBody = {
      messages: sanitizeChatMessagesForProvider([
        { role: "system", content: finalSystemPrompt },
        ...messages
      ]),
      model: isOpenAiCompatibleProvider(provider) ? masterModelId : void 0,
      stream: true
    };
    if (tools.length > 0) {
      reqBody.tools = tools;
      reqBody.tool_choice = "auto";
    }
    const fetchUrl = `${targetUrl}${endpoint}`;
    console.log(`🚀 [AgentChat Prepare] Dispatching to: ${fetchUrl}`);
    const collectionRowsRaw = await db.select({
      id: collections.id,
      slug: collections.slug,
      name: collections.name,
      modelSlug: models.slug,
      permissionConfig: collections.permissionConfig
    }).from(collections).innerJoin(models, eq(collections.modelId, models.id)).all();
    const roleAccess = roleId ? await loadRoleAuthContext(db, roleId) : { roleName: "", roles: [], permissions: [], isAdmin: false };
    const collectionRows = collectionRowsRaw.filter((row) => canAccessCollectionAction(
      roleAccess,
      String(row.slug || ""),
      row.permissionConfig,
      "view"
    )).map(({ permissionConfig, ...rest }) => rest);
    return c.json({
      success: true,
      data: {
        url: fetchUrl,
        headers: { "Authorization": authHeader, "Content-Type": "application/json" },
        body: reqBody,
        providerType: provider.type,
        activeSkills,
        collections: collectionRows
      }
    });
  } catch (error) {
    console.error("[AgentChat Prepare] Unhandled error:", error);
    return c.json({ success: false, error: error.message || "Internal Server Error" }, 500);
  }
});
agents.post("/:id/actions/execute", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  try {
    const agentId = String(c.req.param("id") || "").trim();
    const actingUser = c.get("user");
    if (!actingUser || actingUser?.isAgentProxy) {
      return c.json({ success: false, error: "未授权访问: 请先登录后台管理员会话" }, 401);
    }
    const {
      path,
      method = "GET",
      params = {}
    } = await c.req.json();
    const rawPath = String(path || "").trim();
    const methodValue = String(method || "GET").toUpperCase();
    const normalizedParams = params && typeof params === "object" ? params : {};
    if (!rawPath || !rawPath.startsWith("/api/v1/")) {
      return c.json({ success: false, error: `非法内部接口路径: ${rawPath || "(empty)"}` }, 400);
    }
    if (HARD_LOCKED_AGENT_INTERNAL_PREFIXES.some((prefix) => rawPath.startsWith(prefix))) {
      return c.json({ success: false, error: `当前请求命中了系统硬锁安全边界，AI 员工无权直接执行该内部接口: ${rawPath}` }, 403);
    }
    const db = await createDbClient(c.env.DB);
    const agent = await db.select({
      id: aiAgents.id,
      systemRoleId: aiAgents.systemRoleId
    }).from(aiAgents).where(eq(aiAgents.id, agentId)).get();
    if (!agent?.id) {
      return c.json({ success: false, error: "员工不存在" }, 404);
    }
    const roleId = Number(agent.systemRoleId || 0);
    if (!roleId) {
      return c.json({ success: false, error: "员工未绑定运行审计角色，禁止执行系统接口" }, 403);
    }
    const targetUrl = new URL(rawPath, c.req.url);
    if (methodValue === "GET") {
      Object.entries(normalizedParams).forEach(([key, value]) => {
        if (value === void 0 || value === null) return;
        targetUrl.searchParams.append(key, String(value));
      });
    }
    const proxyHeaders = await createAgentProxyHeaders(c.env, {
      agentId,
      roleId,
      actingAdminId: String(actingUser.id || ""),
      expiresAt: Date.now() + 3e4
    });
    const internalHeaders = {
      Accept: "application/json",
      ...proxyHeaders
    };
    let requestBody = void 0;
    if (methodValue !== "GET" && methodValue !== "HEAD") {
      internalHeaders["Content-Type"] = "application/json";
      requestBody = JSON.stringify(normalizedParams);
    }
    const response = await fetch(targetUrl.toString(), {
      method: methodValue,
      headers: internalHeaders,
      body: requestBody
    });
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await response.json();
      return c.json(data, response.status);
    }
    const text = await response.text();
    return c.json({
      success: response.ok,
      data: text,
      contentType
    }, response.status);
  } catch (error) {
    console.error("[Agent Action Execute] Error:", error);
    return c.json({ success: false, error: error.message || "内部执行网关异常" }, 500);
  }
});
ai.post("/image", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  let body = {};
  try {
    body = await c.req.json();
  } catch (_) {
  }
  const { prompt, providerId, modelId } = body;
  if (!prompt) return c.json({ success: false, error: "MISSING_PROMPT" }, 400);
  const aiConfigRows = await db.select().from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
  const aiConfigRow = aiConfigRows[0];
  const config = aiConfigRow ? JSON.parse(aiConfigRow.value) : {};
  const targetProviderId = providerId || config.assignments?.image?.providerId;
  let provider = config.providers?.find((p) => p.id === targetProviderId);
  let activeModelId = modelId || config.assignments?.image?.modelId;
  if (!provider && activeModelId) {
    for (const p of config.providers || []) {
      const found = p.models?.find((m) => String(m.id || "").toLowerCase() === String(activeModelId).toLowerCase());
      if (found) {
        provider = p;
        activeModelId = found.id;
        console.log(`🔍 [Image Gen] Provider auto-detected by modelId: ${modelId} -> ${p.id} (normalized to ${found.id})`);
        break;
      }
    }
  }
  if (!provider) {
    for (const p of config.providers || []) {
      if (p.models && p.models.length > 0) {
        provider = p;
        if (!activeModelId) activeModelId = p.models[0].id;
        console.log(`🔍 [Image Gen] Fallback: Using first available provider=${p.id}, model=${activeModelId}`);
        break;
      }
    }
  }
  if (!provider) {
    console.error(`[Image Gen] No provider found. providerId=${targetProviderId}, modelId=${activeModelId}, available:`, config.providers?.map((p) => p.id));
    return c.json({ success: false, error: `IMAGE_PROVIDER_NOT_FOUND: providerId=${targetProviderId}, modelId=${activeModelId}` }, 400);
  }
  if (!activeModelId) return c.json({ success: false, error: "IMAGE_MODEL_NOT_CONFIGURED" }, 400);
  try {
    let targetUrl = (provider.baseUrl || "").replace(/\/+$/, "");
    if (!targetUrl) {
      const { accountId, apiToken } = getCfCredentials(c, config);
      if (!accountId) return c.json({ success: false, error: "CF_CREDENTIALS_MISSING" }, 400);
      const gw = await GatewayManager.checkAndCreateGateway(accountId, apiToken, provider.gatewayId || "image-gateway");
      targetUrl = GatewayManager.generateGatewayUrl(accountId, gw, provider.type || "workers-ai");
    }
    if (targetUrl.includes("gitee.com") && targetUrl.includes("/api/serverless") && !targetUrl.includes(activeModelId)) {
      targetUrl = `${targetUrl}/${activeModelId}/v1`;
    }
    const isOpenAiCompat = isOpenAiCompatibleProvider(provider);
    const activeModelConfig = provider.models?.find((m) => String(m.id || "").toLowerCase() === String(activeModelId).toLowerCase()) || null;
    const { assetUrl, assetKind, cleanPrompt } = extractPromptAsset({
      prompt,
      ...body
    });
    const { isImageGenerationModel, isOcrModel, isVisionModel } = inferMultimodalModelCapabilities(activeModelConfig);
    const hasAttachment = Boolean(assetUrl);
    let endpoint = "";
    let requestBody;
    if (hasAttachment && isOcrModel) {
      endpoint = "/layout_parsing";
      requestBody = {
        model: activeModelId,
        file: assetUrl
      };
    } else if (hasAttachment && (isVisionModel || isOpenAiCompat)) {
      endpoint = resolveChatEndpoint(provider, targetUrl, activeModelId);
      requestBody = {
        model: activeModelId,
        messages: buildMultimodalUserMessage(cleanPrompt, assetUrl, assetKind)
      };
    } else if (isImageGenerationModel) {
      if (!isOpenAiCompat) {
        endpoint = `/${activeModelId}`;
        requestBody = { prompt };
      } else {
        if (targetUrl.endsWith("/images") || targetUrl.endsWith("/images/")) {
          endpoint = "/generations";
        } else if (targetUrl.includes("/images/generations")) {
          endpoint = "";
        } else {
          endpoint = "/images/generations";
        }
        requestBody = { prompt, model: activeModelId, n: 1, size: "1024x1024" };
      }
    } else {
      endpoint = resolveChatEndpoint(provider, targetUrl, activeModelId);
      requestBody = {
        model: activeModelId,
        messages: buildMultimodalUserMessage(cleanPrompt || prompt, assetUrl, assetKind)
      };
    }
    const authHeader = getProviderAuthHeader(provider, config.apiToken);
    const fetchHeaders = {
      "Authorization": authHeader,
      "Content-Type": "application/json",
      // User-Agent 是 Gitee AI / 硅基流动等部分厂商网关的必要兼容头
      "User-Agent": "Mozilla/5.0 (compatible; DigitalEmployee/1.0)"
    };
    const finalUrl = `${targetUrl}${endpoint}`;
    if (c.env.NODE_ENV === "development") {
      console.log(`🖼️ [Image Gen] → ${finalUrl}`);
      console.log(`🖼️ [Image Gen] provider=${provider.id}, type=${provider.type}, model=${activeModelId}`);
    }
    const imgController = new AbortController();
    const imgTimeoutId = setTimeout(() => imgController.abort(), 8e4);
    let response;
    try {
      response = await fetch(finalUrl, {
        method: "POST",
        headers: fetchHeaders,
        body: JSON.stringify(requestBody),
        signal: imgController.signal
      });
      clearTimeout(imgTimeoutId);
    } catch (fetchErr) {
      clearTimeout(imgTimeoutId);
      const isTimeout = fetchErr.name === "AbortError";
      console.error(`[Image Gen] Fetch ${isTimeout ? "TIMEOUT" : "ERROR"} from ${finalUrl}:`, fetchErr.message);
      return c.json({
        success: false,
        error: isTimeout ? `图像生成 API 超时（80s），请稍后重试或联系服务商。` : `网络连接失败: ${fetchErr.message}`
      }, 504);
    }
    if (!response.ok) {
      const errText = await response.text();
      console.error(`[Image Gen] Provider returned ${response.status} from ${finalUrl}:`, errText);
      return c.json({ success: false, error: `Provider HTTP ${response.status}`, detail: errText.substring(0, 500) }, 502);
    }
    const result = await response.json();
    console.log(`✅ [Image Gen] Success from ${provider.id}`);
    return c.json({ success: true, ...result });
  } catch (error) {
    console.error("[Image Gen] Unhandled error:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});
ai.post("/instructions/generate", requirePermission(AI_SETTINGS_MANAGE_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    const { systemRoleId, skills } = await c.req.json();
    const roleId = systemRoleId ? Number(systemRoleId) : null;
    const skillsList = Array.isArray(skills) ? skills : [];
    const markdown = await AgentCapabilityService.generateInstructions(db, roleId, skillsList);
    return c.json({
      success: true,
      markdown
    });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
ai.post("/polish", requirePermission(AI_SETTINGS_MANAGE_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    const { prompt, modelId } = await c.req.json();
    if (!prompt) {
      return c.json({ success: false, error: "润色提示词不能为空，请先输入原始设定。" }, 400);
    }
    const aiConfigRows = await db.select().from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
    const aiConfigRow = aiConfigRows[0];
    if (!aiConfigRow) return c.json({ success: false, error: "AI 配置缺失" }, 400);
    const config = JSON.parse(aiConfigRow.value);
    const { accountId, apiToken } = getCfCredentials(c, config);
    const activeModelId = modelId || getDefaultModelId(config) || "";
    let provider = config.providers?.find((p) => p.models?.some((m) => m.id === activeModelId));
    if (!provider) {
      provider = config.providers?.[0];
    }
    if (!provider) return c.json({ success: false, error: "未找到匹配的主控模型服务商配置" }, 404);
    const polishPrompt = `你是一个高级AI数字员工设定与SOP润色专家。请对下面给出的初始设定或工作规范进行专业化润色，使其语气更加严谨、逻辑清晰、职责明确，并适合作为大模型的系统提示词。如果原文较短，请合理扩展其专业要求。

原始内容：
"${prompt}"

请直接输出润色后的内容，不要包含任何多余的前缀、解释或问候语。`;
    const targetUrl = resolveChatBaseUrl(provider, accountId);
    const url = `${targetUrl}${resolveChatEndpoint(provider, targetUrl, activeModelId)}`;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": getProviderAuthHeader(provider, apiToken)
    };
    const body = isOpenAiCompatibleProvider(provider) ? {
      model: activeModelId,
      messages: [{ role: "user", content: polishPrompt }],
      temperature: 0.4
    } : { prompt: polishPrompt };
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15e3)
    });
    if (!response.ok) {
      const errText = await response.text();
      return c.json({ success: false, error: `大模型润色失败 (${response.status}): ${errText.substring(0, 200)}` }, 502);
    }
    const resJson = await response.json();
    let polishedText = "";
    if (!isOpenAiCompatibleProvider(provider)) {
      polishedText = resJson.result?.response || "";
    } else {
      polishedText = resJson.choices?.[0]?.message?.content || "";
    }
    return c.json({ success: true, polished: polishedText.trim() });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
ai.post("/agent-generate", requirePermission(AI_SETTINGS_MANAGE_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    const { description } = await c.req.json();
    if (!description) {
      return c.json({ success: false, error: "员工期望描述不能为空。" }, 400);
    }
    const aiConfigRows = await db.select({ value: systemSettings.value }).from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
    const aiConfigRow = aiConfigRows[0];
    if (!aiConfigRow) return c.json({ success: false, error: "系统全局 AI 配置缺失，请先在提供商管理中配置。" }, 400);
    const config = JSON.parse(aiConfigRow.value);
    const activeModelId = getDefaultModelId(config) || "";
    let provider = config.providers?.find((p) => p.models?.some((m) => m.id === activeModelId));
    let finalModelId = activeModelId;
    if (!provider) {
      provider = config.providers?.[0];
      if (provider) {
        if (Array.isArray(provider.models) && provider.models.length > 0) {
          finalModelId = provider.models[0].id;
          console.log(`🤖 [Model Self-healing] modelId ${activeModelId} not supported by fallback provider ${provider.id}. Corrected to ${finalModelId}`);
        }
      }
    }
    if (!provider) return c.json({ success: false, error: "未找到匹配的全局系统模块文本大模型服务商配置" }, 404);
    let availableSkillsStr = "";
    try {
      const skillsList = await db.select({ slug: aiSkills.slug, name: aiSkills.name }).from(aiSkills).all();
      availableSkillsStr = skillsList.map((s) => `"${s.slug}" (${s.name})`).join(", ");
    } catch (err) {
      console.warn("获取 aiSkills 列表失败，降级为空:", err.message);
    }
    const systemPrompt = `你是一个高级AI数字员工脑部设定与专业SOP规划专家。请根据用户提供的数字员工简短描述，自动为其补齐并生成精美、专业的员工设定。
你需要生成并返回以下字段：
1. 岗位名称（name）：富有职业特色的姓名，如 "智能客服助手 (Alice)"、"资深代码审计专家" 等，5-15字。
2. 个性头像 Emoji（avatar）：单个最契合岗位角色的表情符号，如 🤖, 💬, 💻, 📊, 🎨 等。
3. 系统提示词（systemPrompt）：高水平、专业的系统提示词（System Prompt），设定其身份背景、说话语气、推理规则与职责隔离要求，字数限制在 500 字以内。
4. 额外指令（manualInstructions）：具体的手动微调 SOP、操作规范与安全边界指令，作为该岗位额外的微调 SOP，字数限制在 200 字以内。
5. 推荐扩展技能（recommendedSkills）：从以下系统中当前【可用技能 slugs 列表】中，挑选出最合适该岗位所必须勾选的技能（允许为空数组 []，最多选择3个）。
可用技能列表：[ ${availableSkillsStr || "目前系统无可用技能，请留空"} ]

你必须严格以 JSON 格式输出，不要包含任何 Markdown 格式包裹（不要用 \`\`\`json 语法包裹），不要输出任何 JSON 以外的解释性、闲聊性文字。
JSON 结构必须与以下结构完全保持一致：
{
  "name": "自动生成的员工名称",
  "avatar": "🤖",
  "systemPrompt": "自动生成的系统提示词内容",
  "manualInstructions": "自动生成的额外微调 SOP 内容",
  "recommendedSkills": ["已选技能-slug"]
}`;
    const userPrompt = `用户输入的数字员工描述是：
"${description}"

请直接输出补齐后的 JSON。`;
    const { accountId, apiToken } = getCfCredentials(c, config);
    const targetUrl = resolveChatBaseUrl(provider, accountId);
    const url = `${targetUrl}${resolveChatEndpoint(provider, targetUrl, finalModelId)}`;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": getProviderAuthHeader(provider, apiToken)
    };
    const body = isOpenAiCompatibleProvider(provider) ? {
      model: finalModelId,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.4
    } : {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    };
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(25e3)
      // 给 25s 超时
    });
    if (!response.ok) {
      const errText = await response.text();
      return c.json({ success: false, error: `调用大模型规划失败 (${response.status}): ${errText.substring(0, 200)}` }, 502);
    }
    const resJson = await response.json();
    let rawText = "";
    if (!isOpenAiCompatibleProvider(provider)) {
      rawText = resJson.result?.response || resJson.result?.text || "";
    } else {
      rawText = resJson.choices?.[0]?.message?.content || "";
    }
    let parsedData;
    try {
      rawText = rawText.trim();
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedData = JSON.parse(jsonMatch[0]);
      } else {
        parsedData = JSON.parse(rawText);
      }
    } catch (parseErr) {
      console.error("AI返回数据解析失败，原始文本为:", rawText, parseErr.message);
      return c.json({ success: false, error: "大模型未能返回标准的 JSON 数据结构，请重试一次。", rawText }, 500);
    }
    parsedData.recommendedModelId = finalModelId;
    return c.json({ success: true, data: parsedData });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
ai.post("/subtask", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  try {
    const { prompt, modelId, providerId, ...otherParams } = await c.req.json();
    if (!prompt) return c.json({ success: false, error: "任务提示词不能为空。" }, 400);
    const aiConfigRows = await db.select().from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
    const aiConfigRow = aiConfigRows[0];
    if (!aiConfigRow) return c.json({ success: false, error: "AI 配置缺失" }, 400);
    const config = JSON.parse(aiConfigRow.value);
    const { accountId, apiToken } = getCfCredentials(c, config);
    let provider = config.providers?.find((p) => p.id === providerId);
    let activeModelId = modelId;
    if (!provider && activeModelId) {
      for (const p of config.providers || []) {
        const found = p.models?.find((m) => String(m.id || "").toLowerCase() === String(activeModelId).toLowerCase());
        if (found) {
          provider = p;
          activeModelId = found.id;
          break;
        }
      }
    }
    if (!provider) return c.json({ success: false, error: `未找到匹配的子模型服务商配置: ${modelId}` }, 404);
    const activeModelConfig = provider.models?.find((m) => String(m.id || "").toLowerCase() === String(activeModelId).toLowerCase()) || null;
    const multimodalInput = extractPromptAsset({
      prompt,
      ...otherParams
    });
    const { assetUrl, assetKind, cleanPrompt } = multimodalInput;
    const { isImageGenerationModel, isOcrModel, isVisionModel } = inferMultimodalModelCapabilities(activeModelConfig);
    const shouldUseAttachmentUnderstanding = Boolean(assetUrl) && (isOcrModel || isVisionModel);
    if (isImageGenerationModel && !shouldUseAttachmentUnderstanding) {
      const activeGatewayId = await GatewayManager.checkAndCreateGateway(accountId, apiToken, provider.gatewayId || "image-gateway");
      let targetUrl = (provider.baseUrl || "").replace(/\/+$/, "");
      if (!targetUrl) {
        targetUrl = GatewayManager.generateGatewayUrl(accountId, activeGatewayId, provider.type || "workers-ai");
      }
      if (targetUrl.includes("gitee.com") && targetUrl.includes("/api/serverless") && !targetUrl.includes(activeModelId)) {
        targetUrl = `${targetUrl}/${activeModelId}/v1`;
      }
      const isOpenAiCompat = isOpenAiCompatibleProvider(provider);
      const requestBody = isOpenAiCompat ? { model: activeModelId, prompt: cleanPrompt, n: 1, size: "1024x1024" } : { prompt: cleanPrompt };
      const hasVersionPath = /\/v\d+/.test(targetUrl);
      const endpoint = isOpenAiCompat ? hasVersionPath ? "/images/generations" : "/v1/images/generations" : `/${activeModelId}`;
      const authHeader = isOpenAiCompat ? `Bearer ${provider.apiKey}` : `Bearer ${apiToken}`;
      const response = await fetch(`${targetUrl}${endpoint}`, {
        method: "POST",
        headers: { "Authorization": authHeader, "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(8e4)
      });
      if (!response.ok) {
        const errText = await response.text();
        return c.json({ success: false, error: `图像模型执行失败 (${response.status})`, detail: errText }, 502);
      }
      const result = await response.json();
      return c.json({ success: true, ...result });
    } else {
      const activeGatewayId = await GatewayManager.checkAndCreateGateway(accountId, apiToken, provider.gatewayId || "main-gateway");
      const targetUrl = resolveChatBaseUrl(provider, accountId, activeGatewayId);
      const endpoint = resolveChatEndpoint(provider, targetUrl, activeModelId);
      const authHeader = getProviderAuthHeader(provider, apiToken);
      const messages = buildMultimodalUserMessage(cleanPrompt, assetUrl, assetKind);
      const response = await fetch(`${targetUrl}${endpoint}`, {
        method: "POST",
        headers: { "Authorization": authHeader, "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: sanitizeChatMessagesForProvider(messages),
          model: isOpenAiCompatibleProvider(provider) ? activeModelId : void 0,
          stream: false
          // 强同步阻塞，返回完整 JSON
        }),
        signal: AbortSignal.timeout(6e4)
      });
      if (!response.ok) {
        const errText = await response.text();
        return c.json({ success: false, error: `文本子模型执行失败 (${response.status})`, detail: errText }, 502);
      }
      const resJson = await response.json();
      let replyText = "";
      if (!isOpenAiCompatibleProvider(provider)) {
        replyText = resJson.result?.response || "";
      } else {
        replyText = resJson.choices?.[0]?.message?.content || "";
      }
      return c.json({ success: true, data: replyText.trim() });
    }
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.get("/:id/sessions", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const agentId = c.req.param("id");
  try {
    const list = await db.select().from(agentSessions).where(eq(agentSessions.agentId, agentId)).all();
    list.sort((a, b) => {
      const timeA = new Date(a.updatedAt || a.createdAt || 0).getTime();
      const timeB = new Date(b.updatedAt || b.createdAt || 0).getTime();
      return timeB - timeA;
    });
    return c.json({ success: true, data: list });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.post("/:id/sessions", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const agentId = c.req.param("id");
  try {
    const body = await c.req.json().catch(() => ({}));
    const id = body.id || crypto.randomUUID();
    const title = body.title || "新对话";
    const existingRows = await db.select().from(agentSessions).where(eq(agentSessions.id, id)).all();
    const existing = existingRows[0];
    if (existing) {
      if (existing.agentId !== agentId) {
        return c.json({ success: false, error: "该会话 ID 已被其他数字员工占用" }, 409);
      }
      await db.update(agentSessions).set({
        title,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(agentSessions.id, id)).run();
      return c.json({
        success: true,
        data: {
          ...existing,
          title,
          updatedAt: /* @__PURE__ */ new Date()
        }
      });
    }
    const createdAt = /* @__PURE__ */ new Date();
    const updatedAt = /* @__PURE__ */ new Date();
    await db.insert(agentSessions).values({
      id,
      agentId,
      title,
      summary: "",
      createdAt,
      updatedAt
    }).run();
    return c.json({
      success: true,
      data: {
        id,
        agentId,
        title,
        summary: "",
        createdAt,
        updatedAt
      }
    });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.put("/:id/sessions/:sessionId", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const sessionId = c.req.param("sessionId");
  try {
    const body = await c.req.json();
    const { title, summary } = body;
    const payload = { updatedAt: /* @__PURE__ */ new Date() };
    if (title !== void 0) payload.title = title;
    if (summary !== void 0) payload.summary = summary;
    await db.update(agentSessions).set(payload).where(eq(agentSessions.id, sessionId)).run();
    return c.json({ success: true });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.delete("/:id/sessions/:sessionId", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const sessionId = c.req.param("sessionId");
  try {
    const keysToDelete = [];
    try {
      const deletedMsgs = await db.select({ attachments: agentMessages.attachments }).from(agentMessages).where(eq(agentMessages.sessionId, sessionId)).all();
      for (const m of deletedMsgs) {
        if (m.attachments) {
          try {
            const list = typeof m.attachments === "string" ? JSON.parse(m.attachments) : m.attachments;
            if (Array.isArray(list)) {
              for (const attach of list) {
                if (attach && attach.url) {
                  const parts = attach.url.split("/api/v1/media/file/");
                  if (parts.length > 1) {
                    const rawKey = parts[1].split("?")[0];
                    keysToDelete.push(decodeURIComponent(rawKey));
                  }
                }
              }
            }
          } catch {
          }
        }
      }
    } catch (err) {
      console.warn("[Session Delete Extract Attachments Error]:", err.message);
    }
    await db.delete(agentMessages).where(eq(agentMessages.sessionId, sessionId)).run();
    await db.delete(agentSessions).where(eq(agentSessions.id, sessionId)).run();
    if (keysToDelete.length > 0 && c.env.MEDIA_BUCKET) {
      const deleteFilesTask = async () => {
        try {
          for (const key of keysToDelete) {
            await c.env.MEDIA_BUCKET.delete(key);
          }
          console.log(`♻️ [Storage Session Cleanup]: Deleted ${keysToDelete.length} files from R2 for session: ${sessionId}`);
        } catch (cleanErr) {
          console.warn("[Storage Session Cleanup Error]:", cleanErr.message);
        }
      };
      if (c.executionCtx && typeof c.executionCtx.waitUntil === "function") {
        c.executionCtx.waitUntil(deleteFilesTask());
      } else {
        await deleteFilesTask();
      }
    }
    return c.json({ success: true });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.get("/:id/sessions/:sessionId/messages", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const sessionId = c.req.param("sessionId");
  try {
    const list = await db.select().from(agentMessages).where(eq(agentMessages.sessionId, sessionId)).all();
    list.sort((a, b) => {
      const timeA = new Date(a.createdAt || 0).getTime();
      const timeB = new Date(b.createdAt || 0).getTime();
      return timeA - timeB;
    });
    const formatted = list.map((m) => {
      let steps = [];
      if (m.taskSteps) {
        try {
          steps = typeof m.taskSteps === "string" ? JSON.parse(m.taskSteps) : m.taskSteps;
        } catch {
        }
      }
      let attachments = [];
      if (m.attachments) {
        try {
          attachments = typeof m.attachments === "string" ? JSON.parse(m.attachments) : m.attachments;
        } catch {
        }
      }
      return {
        id: m.id,
        role: m.role,
        content: m.content,
        reasoning_content: m.reasoningContent || void 0,
        steps,
        attachments,
        createdAt: m.createdAt
      };
    });
    return c.json({ success: true, data: formatted });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.post("/:id/sessions/:sessionId/messages/batch", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const agentId = c.req.param("id");
  const sessionId = c.req.param("sessionId");
  try {
    const body = await c.req.json();
    const messages = Array.isArray(body.messages) ? body.messages : [];
    if (messages.length === 0) {
      return c.json({ success: true, message: "No messages to insert." });
    }
    const batchQueries = messages.map((msg) => {
      const stepsStr = msg.steps ? JSON.stringify(msg.steps) : "[]";
      const attachmentsStr = msg.attachments ? typeof msg.attachments === "string" ? msg.attachments : JSON.stringify(msg.attachments) : null;
      return db.insert(agentMessages).values({
        id: msg.id || crypto.randomUUID(),
        agentId,
        sessionId,
        role: msg.role,
        content: msg.content,
        reasoningContent: msg.reasoning_content || null,
        taskSteps: stepsStr,
        attachments: attachmentsStr,
        createdAt: msg.createdAt ? new Date(msg.createdAt) : /* @__PURE__ */ new Date()
      });
    });
    batchQueries.push(
      db.update(agentSessions).set({ updatedAt: /* @__PURE__ */ new Date() }).where(eq(agentSessions.id, sessionId))
    );
    const saveTask = async () => {
      try {
        await db.batch(batchQueries);
        console.log(`⚡ [D1 DB Batch Save]: Successfully inserted ${messages.length} messages for session ${sessionId}`);
      } catch (e) {
        console.error("❌ [D1 Batch Save Failed]:", e);
      }
    };
    if (c.executionCtx && typeof c.executionCtx.waitUntil === "function") {
      c.executionCtx.waitUntil(saveTask());
    } else {
      await saveTask();
    }
    return c.json({ success: true });
  } catch (e) {
    console.error("❌ [D1 Batch Save Failed]:", e);
    return c.json({ success: false, error: e.message }, 500);
  }
});
agents.post("/:id/sessions/:sessionId/title-generate", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  const db = await createDbClient(c.env.DB);
  const agentId = c.req.param("id");
  const sessionId = c.req.param("sessionId");
  try {
    const { firstPrompt, firstAnswer } = await c.req.json();
    if (!firstPrompt) {
      return c.json({ success: false, error: "firstPrompt is required" }, 400);
    }
    const generateTitleTask = async () => {
      try {
        const aiConfigRows = await db.select({ value: systemSettings.value }).from(systemSettings).where(eq(systemSettings.key, "ai_config")).all();
        const aiConfigRow = aiConfigRows[0];
        const aiConfig = aiConfigRow ? JSON.parse(aiConfigRow.value) : {};
        const agentRows = await db.select({ masterModelId: aiAgents.masterModelId }).from(aiAgents).where(eq(aiAgents.id, agentId)).all();
        const agent = agentRows[0];
        let masterModelId = getDefaultModelId(aiConfig) || "";
        if (agent?.masterModelId) {
          masterModelId = agent.masterModelId;
        }
        const prompt = `你是一个会话标题提取专家。请根据以下用户提出的第一个问题及AI的回答，提取一个【5字以内】、极其精炼且有代表性的会话标题。
用户问题："${firstPrompt}"
AI回答："${firstAnswer || ""}"

直接输出标题，不需要任何标点符号、解释或 Markdown 格式。字数必须在5字以内（例如“查询IP”或“兔子画作”）。`;
        const { accountId, apiToken } = getCfCredentials(c, aiConfig);
        let provider = aiConfig.providers?.find((p) => p.models?.some((m) => m.id === masterModelId)) || aiConfig.providers?.[0];
        let title = "新对话";
        if (provider && (provider.apiKey || apiToken)) {
          const targetUrl = resolveChatBaseUrl(provider, accountId);
          const url = `${targetUrl}${resolveChatEndpoint(provider, targetUrl, masterModelId)}`;
          const headers = {
            "Content-Type": "application/json",
            "Authorization": getProviderAuthHeader(provider, apiToken)
          };
          const body = isOpenAiCompatibleProvider(provider) ? {
            model: masterModelId,
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3,
            max_tokens: 15
          } : { prompt };
          const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(4e3)
            // 4s 超时
          });
          if (response.ok) {
            const resJson = await response.json();
            let rawTitle = "";
            if (!isOpenAiCompatibleProvider(provider)) {
              rawTitle = resJson.result?.response || "";
            } else {
              rawTitle = resJson.choices?.[0]?.message?.content || "";
            }
            rawTitle = rawTitle.trim().replace(/["'「」]/g, "");
            if (rawTitle && rawTitle.length <= 10) {
              title = rawTitle;
            }
          }
        }
        await db.update(agentSessions).set({ title, updatedAt: /* @__PURE__ */ new Date() }).where(eq(agentSessions.id, sessionId)).run();
        console.log(`✅ [Async Title Gen Success] Title updated for session ${sessionId}: "${title}"`);
      } catch (err) {
        console.warn("[Async Title Gen Background Error]:", err.message);
      }
    };
    if (c.executionCtx && typeof c.executionCtx.waitUntil === "function") {
      c.executionCtx.waitUntil(generateTitleTask());
    } else {
      await generateTitleTask();
    }
    return c.json({ success: true, message: "Title generation scheduled" });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});
ai.post("/search", requirePermission(AGENT_RUNTIME_PERMISSIONS), async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const query = (body.query || "").trim();
    if (!query) {
      return c.json({ success: false, error: "搜索关键词 query 不能为空" }, 400);
    }
    const kvKey = `web_search:${query.slice(0, 400)}`;
    const kvNamespace = c.env.KV;
    if (kvNamespace) {
      const cached = await kvNamespace.get(kvKey, "text");
      if (cached) {
        try {
          const cachedData = JSON.parse(cached);
          console.log(`⚡ [WebSearch KV Hit] query="${query.slice(0, 50)}..."`);
          return c.json({
            success: true,
            cached: true,
            query,
            results: cachedData
          });
        } catch {
          console.warn("[WebSearch] KV parse failed, falling through to Tavily");
        }
      }
    }
    const db = await createDbClient(c.env.DB);
    const searchConfigRows = await db.select().from(systemSettings).where(eq(systemSettings.key, "search_api_config")).all();
    const searchConfigRow = searchConfigRows[0];
    if (!searchConfigRow) {
      return c.json({
        success: false,
        error: "联网搜索未配置：请前往 AI 矩阵中心 → 联网搜索配置 填写 Tavily API Key 后保存。"
      }, 503);
    }
    let searchConfig;
    try {
      searchConfig = JSON.parse(searchConfigRow.value);
    } catch {
      return c.json({ success: false, error: "search_api_config 配置格式损坏，请重新保存。" }, 500);
    }
    const tavilyApiKey = searchConfig.tavily_api_key || "";
    if (!tavilyApiKey) {
      return c.json({
        success: false,
        error: "Tavily API Key 未填写，请在联网搜索配置面板中录入后保存。"
      }, 503);
    }
    const tavilyRes = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tavilyApiKey}`
      },
      body: JSON.stringify({
        query,
        max_results: 5,
        include_raw_content: false,
        include_images: false,
        search_depth: "basic"
      }),
      signal: AbortSignal.timeout(12e3)
      // 12 秒超时，留出 Agentic Loop 的整体时间预算
    });
    if (!tavilyRes.ok) {
      const errText = await tavilyRes.text().catch(() => "");
      console.error(`[WebSearch Tavily Error] ${tavilyRes.status}: ${errText}`);
      return c.json({
        success: false,
        error: `Tavily 搜索服务异常 (HTTP ${tavilyRes.status})，请检查 API Key 是否有效。`
      }, 502);
    }
    const tavilyData = await tavilyRes.json();
    const results = (tavilyData.results || []).map((r) => ({
      url: r.url || "",
      title: r.title || "",
      content: (r.content || "").slice(0, 500)
      // 每条摘要最多 500 字符，防 Context 超限
    }));
    if (kvNamespace && results.length > 0) {
      c.executionCtx?.waitUntil(
        // NOTE: 借用 waitUntil 在后台异步写入，不阻塞当前响应返回，
        // 彻底消除 KV put 操作对接口延迟的影响，完美适配 CF 免费版 50ms CPU 限制。
        kvNamespace.put(kvKey, JSON.stringify(results), { expirationTtl: 86400 })
      );
      console.log(`💾 [WebSearch KV Store] query="${query.slice(0, 50)}" results=${results.length}`);
    }
    return c.json({
      success: true,
      cached: false,
      query,
      results
    });
  } catch (err) {
    const isTimeout = err.name === "TimeoutError" || err.name === "AbortError";
    return c.json({
      success: false,
      error: isTimeout ? "Tavily 搜索超时（12s），请稍后重试或检查网络。" : `搜索网关内部错误: ${err.message}`
    }, 500);
  }
});
class AgentCollaborationService {
  static async bootstrapCoordinatedJob(db, options) {
    const now = /* @__PURE__ */ new Date();
    const jobId = crypto.randomUUID();
    const coordinatorAgentId = options.coordinatorAgentId || null;
    const plannerAgentId = options.workerAgentIds?.plannerAgentId || coordinatorAgentId;
    const executorAgentId = options.workerAgentIds?.executorAgentId || coordinatorAgentId;
    const reviewerAgentId = options.workerAgentIds?.reviewerAgentId || coordinatorAgentId;
    const steps = [
      {
        id: crypto.randomUUID(),
        jobId,
        tenantId: options.tenantId,
        stepType: "planning",
        title: "目标拆解与规划",
        description: "由协调员工或规划员工完成目标拆解、事实确认与执行方案输出",
        status: plannerAgentId ? "assigned" : "pending",
        sequence: 1,
        dependsOnStepId: null,
        parentStepId: null,
        isParallel: false,
        inputArtifactIds: [],
        outputArtifactIds: [],
        reviewStatus: "not_required",
        assignedAgentId: plannerAgentId,
        metadata: { autoGenerated: true, stage: "planning" },
        createdAt: now,
        updatedAt: now
      },
      {
        id: crypto.randomUUID(),
        jobId,
        tenantId: options.tenantId,
        stepType: "execution",
        title: "执行与产出",
        description: "由专业员工执行主任务并提交结构化交付物",
        status: executorAgentId ? "assigned" : "pending",
        sequence: 2,
        dependsOnStepId: null,
        parentStepId: null,
        isParallel: false,
        inputArtifactIds: [],
        outputArtifactIds: [],
        reviewStatus: "not_required",
        assignedAgentId: executorAgentId,
        metadata: { autoGenerated: true, stage: "execution" },
        createdAt: now,
        updatedAt: now
      },
      {
        id: crypto.randomUUID(),
        jobId,
        tenantId: options.tenantId,
        stepType: "review",
        title: "审核与确认",
        description: "由审计员工或协调员工进行复核，并决定是否进入下一阶段",
        status: reviewerAgentId ? "assigned" : "pending",
        sequence: 3,
        dependsOnStepId: null,
        parentStepId: null,
        isParallel: false,
        inputArtifactIds: [],
        outputArtifactIds: [],
        reviewStatus: "pending",
        assignedAgentId: reviewerAgentId,
        metadata: { autoGenerated: true, stage: "review" },
        createdAt: now,
        updatedAt: now
      }
    ];
    steps[1].dependsOnStepId = steps[0].id;
    steps[2].dependsOnStepId = steps[1].id;
    const job = {
      id: jobId,
      tenantId: options.tenantId,
      type: "coordinated_goal",
      title: options.title || options.goal.slice(0, 60),
      description: options.description || options.goal,
      status: "queued",
      priority: "normal",
      initiatorUserId: options.initiatorUserId || null,
      coordinatorAgentId,
      sourceModule: options.sourceModule || null,
      sourceEntityType: options.sourceEntityType || null,
      sourceEntityId: options.sourceEntityId || null,
      currentStepId: steps[0].id,
      latestArtifactId: null,
      metadata: {
        ...options.metadata || {},
        bootstrapMode: "auto_coordinate"
      },
      createdAt: now,
      updatedAt: now,
      completedAt: null
    };
    const initialContext = {
      id: crypto.randomUUID(),
      jobId,
      tenantId: options.tenantId,
      contextType: "job_brief",
      version: 1,
      contentJson: {
        goal: options.goal,
        title: job.title,
        description: job.description,
        mode: "auto_coordinate"
      },
      summary: "系统已根据用户目标自动创建协作任务，无需用户手工编排步骤。",
      updatedByAgentId: coordinatorAgentId,
      updatedByUserId: options.initiatorUserId || null,
      sourceArtifactId: null,
      isLatest: true,
      createdAt: now,
      updatedAt: now
    };
    await db.insert(agentJobs).values(job).run();
    await db.insert(agentJobSteps).values(steps).run();
    await db.insert(agentSharedContexts).values(initialContext).run();
    const assignments = [
      plannerAgentId ? {
        id: crypto.randomUUID(),
        jobId,
        stepId: steps[0].id,
        tenantId: options.tenantId,
        agentId: plannerAgentId,
        assignmentRole: "executor",
        status: "assigned",
        assignedBy: coordinatorAgentId || "system",
        assignmentReason: "自动编排：规划阶段",
        sessionId: null,
        startedAt: null,
        finishedAt: null,
        createdAt: now,
        updatedAt: now
      } : null,
      executorAgentId ? {
        id: crypto.randomUUID(),
        jobId,
        stepId: steps[1].id,
        tenantId: options.tenantId,
        agentId: executorAgentId,
        assignmentRole: "executor",
        status: "assigned",
        assignedBy: coordinatorAgentId || "system",
        assignmentReason: "自动编排：执行阶段",
        sessionId: null,
        startedAt: null,
        finishedAt: null,
        createdAt: now,
        updatedAt: now
      } : null,
      reviewerAgentId ? {
        id: crypto.randomUUID(),
        jobId,
        stepId: steps[2].id,
        tenantId: options.tenantId,
        agentId: reviewerAgentId,
        assignmentRole: "reviewer",
        status: "assigned",
        assignedBy: coordinatorAgentId || "system",
        assignmentReason: "自动编排：审核阶段",
        sessionId: null,
        startedAt: null,
        finishedAt: null,
        createdAt: now,
        updatedAt: now
      } : null
    ].filter(Boolean);
    if (assignments.length > 0) {
      await db.insert(agentTaskAssignments).values(assignments).run();
    }
    return {
      job,
      steps,
      initialContext,
      assignments
    };
  }
  static async attachLatestArtifactToJob(db, jobId, artifactId) {
    await db.update(agentJobs).set({
      latestArtifactId: artifactId,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(agentJobs.id, jobId)).run();
  }
}
const collaboration = new Hono();
function resolveTenantId(c) {
  const domains = c.get("domains") || c.get("site_domains");
  return Number(domains?.tenant_id || domains?.id || (domains?.site_domains ? domains.site_domains.id : 1) || 1);
}
async function getJobOrNull(db, tenantId, jobId) {
  return db.select().from(agentJobs).where(and(eq(agentJobs.id, jobId), eq(agentJobs.tenantId, tenantId))).get();
}
async function getStepOrNull(db, jobId, stepId) {
  return db.select().from(agentJobSteps).where(and(eq(agentJobSteps.id, stepId), eq(agentJobSteps.jobId, jobId))).get();
}
async function getOrderedSteps(db, jobId) {
  return db.select().from(agentJobSteps).where(eq(agentJobSteps.jobId, jobId)).orderBy(asc(agentJobSteps.sequence)).all();
}
async function getDependencyViolation(db, step) {
  if (!step?.dependsOnStepId) return null;
  const dependency = await getStepOrNull(db, step.jobId, String(step.dependsOnStepId));
  if (!dependency) {
    return `依赖步骤 ${step.dependsOnStepId} 不存在，当前步骤不能执行`;
  }
  if (!["approved", "skipped"].includes(dependency.status)) {
    return `依赖步骤 ${dependency.title || dependency.id} 尚未完成，当前步骤不能执行`;
  }
  return null;
}
collaboration.get("/", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const status = c.req.query("status");
  const type = c.req.query("type");
  const limit = Math.min(Number(c.req.query("limit") || 20), 100);
  if (status && !isValidJobStatus(status)) {
    return c.json({
      success: false,
      error: "BAD_REQUEST",
      message: `无效的任务状态，可选值: ${AGENT_JOB_STATUSES.join(", ")}`
    }, 400);
  }
  const conditions = [eq(agentJobs.tenantId, tenantId)];
  if (status) conditions.push(eq(agentJobs.status, status));
  if (type) conditions.push(eq(agentJobs.type, type));
  const jobs = await db.select().from(agentJobs).where(and(...conditions)).orderBy(desc(agentJobs.createdAt)).limit(limit).all();
  return c.json({ success: true, jobs });
});
collaboration.post("/", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const body = await c.req.json().catch(() => ({}));
  if (!body?.type || !body?.title) {
    return c.json({
      success: false,
      error: "BAD_REQUEST",
      message: "创建任务至少需要 type 和 title"
    }, 400);
  }
  const id = body.id || crypto.randomUUID();
  const now = /* @__PURE__ */ new Date();
  const status = isValidJobStatus(body.status) ? body.status : "draft";
  const row = {
    id,
    tenantId,
    type: String(body.type),
    title: String(body.title),
    description: body.description ? String(body.description) : null,
    status,
    priority: body.priority === "low" || body.priority === "high" ? body.priority : "normal",
    initiatorUserId: body.initiatorUserId ? String(body.initiatorUserId) : null,
    coordinatorAgentId: body.coordinatorAgentId ? String(body.coordinatorAgentId) : null,
    sourceModule: body.sourceModule ? String(body.sourceModule) : null,
    sourceEntityType: body.sourceEntityType ? String(body.sourceEntityType) : null,
    sourceEntityId: body.sourceEntityId ? String(body.sourceEntityId) : null,
    metadata: body.metadata && typeof body.metadata === "object" ? body.metadata : {},
    createdAt: now,
    updatedAt: now
  };
  await db.insert(agentJobs).values(row).run();
  return c.json({ success: true, job: row }, 201);
});
collaboration.get("/:jobId", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const job = await db.select().from(agentJobs).where(and(eq(agentJobs.id, jobId), eq(agentJobs.tenantId, tenantId))).get();
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  const [steps, artifacts] = await Promise.all([
    db.select().from(agentJobSteps).where(eq(agentJobSteps.jobId, jobId)).orderBy(asc(agentJobSteps.sequence)).all(),
    db.select().from(agentArtifacts).where(eq(agentArtifacts.jobId, jobId)).orderBy(desc(agentArtifacts.createdAt)).all()
  ]);
  return c.json({
    success: true,
    job,
    steps,
    artifacts
  });
});
collaboration.post("/coordinate", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const body = await c.req.json().catch(() => ({}));
  if (!body?.goal || typeof body.goal !== "string" || !body.goal.trim()) {
    return c.json({
      success: false,
      error: "BAD_REQUEST",
      message: "自动编排至少需要 goal"
    }, 400);
  }
  const result = await AgentCollaborationService.bootstrapCoordinatedJob(db, {
    tenantId,
    goal: body.goal.trim(),
    title: body.title ? String(body.title) : void 0,
    description: body.description ? String(body.description) : void 0,
    coordinatorAgentId: body.coordinatorAgentId ? String(body.coordinatorAgentId) : null,
    initiatorUserId: body.initiatorUserId ? String(body.initiatorUserId) : null,
    sourceModule: body.sourceModule ? String(body.sourceModule) : null,
    sourceEntityType: body.sourceEntityType ? String(body.sourceEntityType) : null,
    sourceEntityId: body.sourceEntityId ? String(body.sourceEntityId) : null,
    metadata: body.metadata && typeof body.metadata === "object" ? body.metadata : {},
    workerAgentIds: body.workerAgentIds && typeof body.workerAgentIds === "object" ? body.workerAgentIds : {}
  });
  return c.json({ success: true, ...result }, 201);
});
collaboration.post("/:jobId/steps", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const body = await c.req.json().catch(() => ({}));
  const job = await db.select().from(agentJobs).where(and(eq(agentJobs.id, jobId), eq(agentJobs.tenantId, tenantId))).get();
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  if (isTerminalJobStatus(job.status)) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `当前任务状态为 ${job.status}，不允许继续创建步骤`
    }, 409);
  }
  if (!body?.stepType || !body?.title) {
    return c.json({
      success: false,
      error: "BAD_REQUEST",
      message: "创建步骤至少需要 stepType 和 title"
    }, 400);
  }
  const sequence = Number(body.sequence || 0) || ((await db.select().from(agentJobSteps).where(eq(agentJobSteps.jobId, jobId)).orderBy(desc(agentJobSteps.sequence)).limit(1).all())[0]?.sequence || 0) + 1;
  const id = body.id || crypto.randomUUID();
  const now = /* @__PURE__ */ new Date();
  const reviewStatus = isValidReviewStatus(body.reviewStatus) ? body.reviewStatus : "not_required";
  const step = {
    id,
    jobId,
    tenantId,
    stepType: String(body.stepType),
    title: String(body.title),
    description: body.description ? String(body.description) : null,
    status: body.assignedAgentId ? "assigned" : "pending",
    sequence,
    dependsOnStepId: body.dependsOnStepId ? String(body.dependsOnStepId) : null,
    parentStepId: body.parentStepId ? String(body.parentStepId) : null,
    isParallel: Boolean(body.isParallel),
    inputArtifactIds: Array.isArray(body.inputArtifactIds) ? body.inputArtifactIds : [],
    outputArtifactIds: Array.isArray(body.outputArtifactIds) ? body.outputArtifactIds : [],
    reviewStatus,
    assignedAgentId: body.assignedAgentId ? String(body.assignedAgentId) : null,
    metadata: body.metadata && typeof body.metadata === "object" ? body.metadata : {},
    createdAt: now,
    updatedAt: now
  };
  await db.insert(agentJobSteps).values(step).run();
  const nextJobStatus = job.status === "draft" ? "queued" : job.status;
  await db.update(agentJobs).set({
    status: nextJobStatus,
    currentStepId: job.currentStepId || id,
    updatedAt: now
  }).where(eq(agentJobs.id, jobId)).run();
  return c.json({
    success: true,
    step,
    jobStatus: nextJobStatus
  }, 201);
});
collaboration.post("/:jobId/artifacts", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const body = await c.req.json().catch(() => ({}));
  const job = await db.select().from(agentJobs).where(and(eq(agentJobs.id, jobId), eq(agentJobs.tenantId, tenantId))).get();
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  if (!body?.stepId || !body?.artifactType || !body?.title) {
    return c.json({
      success: false,
      error: "BAD_REQUEST",
      message: "提交交付物至少需要 stepId、artifactType 和 title"
    }, 400);
  }
  const step = await db.select().from(agentJobSteps).where(and(
    eq(agentJobSteps.id, String(body.stepId)),
    eq(agentJobSteps.jobId, jobId)
  )).get();
  if (!step) {
    return c.json({ success: false, error: "NOT_FOUND", message: "步骤不存在或不属于该任务" }, 404);
  }
  const dependencyViolation = await getDependencyViolation(db, step);
  if (dependencyViolation) {
    return c.json({ success: false, error: "INVALID_STATE", message: dependencyViolation }, 409);
  }
  if (!["running", "submitted", "reviewing"].includes(step.status)) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `当前步骤状态为 ${step.status}，不允许提交交付物`
    }, 409);
  }
  const versionRows = await db.select().from(agentArtifacts).where(and(
    eq(agentArtifacts.jobId, jobId),
    eq(agentArtifacts.stepId, step.id),
    eq(agentArtifacts.artifactType, String(body.artifactType))
  )).orderBy(desc(agentArtifacts.version)).limit(1).all();
  const nextVersion = (versionRows[0]?.version || 0) + 1;
  const id = body.id || crypto.randomUUID();
  const now = /* @__PURE__ */ new Date();
  const reviewStatus = isValidReviewStatus(body.reviewStatus) ? body.reviewStatus : "not_required";
  await db.update(agentArtifacts).set({ isLatest: false, updatedAt: now }).where(and(
    eq(agentArtifacts.jobId, jobId),
    eq(agentArtifacts.stepId, step.id),
    eq(agentArtifacts.artifactType, String(body.artifactType)),
    eq(agentArtifacts.isLatest, true)
  )).run();
  const artifact = {
    id,
    jobId,
    stepId: step.id,
    tenantId,
    artifactType: String(body.artifactType),
    title: String(body.title),
    summary: body.summary ? String(body.summary) : null,
    version: nextVersion,
    isLatest: true,
    contentJson: body.contentJson && typeof body.contentJson === "object" ? body.contentJson : {},
    contentText: body.contentText ? String(body.contentText) : null,
    schemaVersion: body.schemaVersion ? String(body.schemaVersion) : "v1",
    createdByAgentId: body.createdByAgentId ? String(body.createdByAgentId) : null,
    sourceAssignmentId: body.sourceAssignmentId ? String(body.sourceAssignmentId) : null,
    reviewStatus,
    metadata: body.metadata && typeof body.metadata === "object" ? body.metadata : {},
    createdAt: now,
    updatedAt: now
  };
  await db.insert(agentArtifacts).values(artifact).run();
  const outputArtifactIds = Array.isArray(step.outputArtifactIds) ? step.outputArtifactIds : [];
  const mergedOutputArtifactIds = Array.from(/* @__PURE__ */ new Set([...outputArtifactIds, id]));
  await db.update(agentJobSteps).set({
    outputArtifactIds: mergedOutputArtifactIds,
    status: "submitted",
    reviewStatus,
    updatedAt: now,
    finishedAt: now
  }).where(eq(agentJobSteps.id, step.id)).run();
  await db.update(agentJobs).set({
    latestArtifactId: id,
    status: reviewStatus === "pending" || reviewStatus === "reviewing" ? "waiting_review" : "running",
    updatedAt: now
  }).where(eq(agentJobs.id, jobId)).run();
  return c.json({ success: true, artifact }, 201);
});
collaboration.post("/:jobId/steps/:stepId/assign", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const stepId = c.req.param("stepId");
  const body = await c.req.json().catch(() => ({}));
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  const step = await getStepOrNull(db, jobId, stepId);
  if (!step) {
    return c.json({ success: false, error: "NOT_FOUND", message: "步骤不存在" }, 404);
  }
  if (!body?.agentId) {
    return c.json({ success: false, error: "BAD_REQUEST", message: "分派必须提供 agentId" }, 400);
  }
  const assignmentStatus = isValidAssignmentStatus(body.status) ? body.status : "assigned";
  const targetStepStatus = body.stepStatus && isValidStepStatus(body.stepStatus) ? body.stepStatus : "assigned";
  if (["assigned", "running"].includes(targetStepStatus)) {
    const dependencyViolation = await getDependencyViolation(db, step);
    if (dependencyViolation) {
      return c.json({ success: false, error: "INVALID_STATE", message: dependencyViolation }, 409);
    }
  }
  if (!canTransitionStep(step.status, targetStepStatus) && step.status !== targetStepStatus) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `步骤当前为 ${step.status}，不允许迁移到 ${targetStepStatus}`
    }, 409);
  }
  const assignment = {
    id: body.id || crypto.randomUUID(),
    jobId,
    stepId,
    tenantId,
    agentId: String(body.agentId),
    assignmentRole: body.assignmentRole ? String(body.assignmentRole) : "executor",
    status: assignmentStatus,
    assignedBy: body.assignedBy ? String(body.assignedBy) : null,
    assignmentReason: body.assignmentReason ? String(body.assignmentReason) : null,
    sessionId: body.sessionId ? String(body.sessionId) : null,
    startedAt: targetStepStatus === "running" ? /* @__PURE__ */ new Date() : null,
    finishedAt: null,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  };
  await db.insert(agentTaskAssignments).values(assignment).run();
  await db.update(agentJobSteps).set({
    assignedAgentId: assignment.agentId,
    status: targetStepStatus,
    startedAt: targetStepStatus === "running" ? /* @__PURE__ */ new Date() : step.startedAt,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(agentJobSteps.id, stepId)).run();
  const nextJobStatus = job.status === "queued" && (targetStepStatus === "assigned" || targetStepStatus === "running") ? "running" : job.status;
  if (nextJobStatus !== job.status && canTransitionJob(job.status, nextJobStatus)) {
    await db.update(agentJobs).set({
      status: nextJobStatus,
      currentStepId: stepId,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(agentJobs.id, jobId)).run();
  }
  return c.json({ success: true, assignment }, 201);
});
collaboration.post("/:jobId/context", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const body = await c.req.json().catch(() => ({}));
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  if (!body?.contextType || !body?.contentJson || typeof body.contentJson !== "object") {
    return c.json({
      success: false,
      error: "BAD_REQUEST",
      message: "更新共享上下文至少需要 contextType 和 contentJson"
    }, 400);
  }
  const latestRows = await db.select().from(agentSharedContexts).where(and(
    eq(agentSharedContexts.jobId, jobId),
    eq(agentSharedContexts.contextType, String(body.contextType)),
    eq(agentSharedContexts.isLatest, true)
  )).orderBy(desc(agentSharedContexts.version)).limit(1).all();
  const nextVersion = (latestRows[0]?.version || 0) + 1;
  const now = /* @__PURE__ */ new Date();
  await db.update(agentSharedContexts).set({ isLatest: false, updatedAt: now }).where(and(
    eq(agentSharedContexts.jobId, jobId),
    eq(agentSharedContexts.contextType, String(body.contextType)),
    eq(agentSharedContexts.isLatest, true)
  )).run();
  const context = {
    id: body.id || crypto.randomUUID(),
    jobId,
    tenantId,
    contextType: String(body.contextType),
    version: nextVersion,
    contentJson: body.contentJson,
    summary: body.summary ? String(body.summary) : null,
    updatedByAgentId: body.updatedByAgentId ? String(body.updatedByAgentId) : null,
    updatedByUserId: body.updatedByUserId ? String(body.updatedByUserId) : null,
    sourceArtifactId: body.sourceArtifactId ? String(body.sourceArtifactId) : null,
    isLatest: true,
    createdAt: now,
    updatedAt: now
  };
  await db.insert(agentSharedContexts).values(context).run();
  return c.json({ success: true, context }, 201);
});
collaboration.get("/:jobId/context", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const latestOnly = c.req.query("latestOnly") !== "false";
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  const contexts = await db.select().from(agentSharedContexts).where(and(
    eq(agentSharedContexts.jobId, jobId),
    ...latestOnly ? [eq(agentSharedContexts.isLatest, true)] : []
  )).orderBy(desc(agentSharedContexts.updatedAt)).all();
  return c.json({ success: true, contexts });
});
collaboration.post("/:jobId/reviews", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const body = await c.req.json().catch(() => ({}));
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  if (!isValidReviewDecision(body?.decision)) {
    return c.json({ success: false, error: "BAD_REQUEST", message: "review 必须提供合法 decision" }, 400);
  }
  const reviewTargetType = body.stepId ? "step" : body.artifactId ? "artifact" : "step";
  const now = /* @__PURE__ */ new Date();
  if (reviewTargetType === "step") {
    if (!body?.stepId) {
      return c.json({ success: false, error: "BAD_REQUEST", message: "step review 必须提供 stepId" }, 400);
    }
    const step = await getStepOrNull(db, jobId, String(body.stepId));
    if (!step) {
      return c.json({ success: false, error: "NOT_FOUND", message: "步骤不存在" }, 404);
    }
    const targetStepStatus = body.decision === "approved" ? "approved" : "rejected";
    const targetReviewStatus2 = body.decision === "approved" ? "approved" : "rejected";
    if (!canTransitionReview(step.reviewStatus, targetReviewStatus2) && step.reviewStatus !== targetReviewStatus2) {
      return c.json({
        success: false,
        error: "INVALID_STATE",
        message: `步骤 reviewStatus 当前为 ${step.reviewStatus}，不允许迁移到 ${targetReviewStatus2}`
      }, 409);
    }
    if (!canTransitionStep(step.status, targetStepStatus)) {
      return c.json({
        success: false,
        error: "INVALID_STATE",
        message: `步骤当前为 ${step.status}，不允许迁移到 ${targetStepStatus}`
      }, 409);
    }
    const review2 = {
      id: body.id || crypto.randomUUID(),
      jobId,
      stepId: step.id,
      artifactId: body.artifactId ? String(body.artifactId) : null,
      tenantId,
      reviewerAgentId: body.reviewerAgentId ? String(body.reviewerAgentId) : null,
      reviewerUserId: body.reviewerUserId ? String(body.reviewerUserId) : null,
      decision: body.decision,
      riskLevel: isValidRiskLevel(body.riskLevel) ? body.riskLevel : "low",
      comments: body.comments ? String(body.comments) : null,
      issuesJson: Array.isArray(body.issuesJson) ? body.issuesJson : [],
      requiredChangesJson: Array.isArray(body.requiredChangesJson) ? body.requiredChangesJson : [],
      createdAt: now
    };
    await db.insert(agentReviews).values(review2).run();
    await db.update(agentJobSteps).set({
      status: targetStepStatus,
      reviewStatus: targetReviewStatus2,
      updatedAt: now,
      finishedAt: body.decision === "approved" ? now : step.finishedAt
    }).where(eq(agentJobSteps.id, step.id)).run();
    let nextJobStatus = body.decision === "approved" ? "running" : "blocked";
    let nextCurrentStepId = step.id;
    if (body.decision === "approved") {
      const orderedSteps = await getOrderedSteps(db, jobId);
      const normalizedSteps = orderedSteps.map(
        (item) => item.id === step.id ? { ...item, status: targetStepStatus } : item
      );
      const allDone = normalizedSteps.every((item) => ["approved", "skipped"].includes(item.status));
      const nextOpenStep = normalizedSteps.find((item) => !["approved", "skipped", "cancelled", "rolled_back"].includes(item.status));
      nextCurrentStepId = nextOpenStep?.id || null;
      if (allDone) {
        nextJobStatus = "completed";
        nextCurrentStepId = null;
      }
    }
    if (canTransitionJob(job.status, nextJobStatus) || job.status === nextJobStatus) {
      await db.update(agentJobs).set({
        status: nextJobStatus,
        currentStepId: nextCurrentStepId,
        updatedAt: now,
        completedAt: nextJobStatus === "completed" ? now : job.completedAt
      }).where(eq(agentJobs.id, jobId)).run();
    }
    return c.json({ success: true, review: review2 }, 201);
  }
  const artifact = await db.select().from(agentArtifacts).where(and(eq(agentArtifacts.id, String(body.artifactId)), eq(agentArtifacts.jobId, jobId))).get();
  if (!artifact) {
    return c.json({ success: false, error: "NOT_FOUND", message: "交付物不存在" }, 404);
  }
  const targetReviewStatus = body.decision === "approved" ? "approved" : "rejected";
  if (!canTransitionReview(artifact.reviewStatus, targetReviewStatus) && artifact.reviewStatus !== targetReviewStatus) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `交付物 reviewStatus 当前为 ${artifact.reviewStatus}，不允许迁移到 ${targetReviewStatus}`
    }, 409);
  }
  const review = {
    id: body.id || crypto.randomUUID(),
    jobId,
    stepId: artifact.stepId,
    artifactId: artifact.id,
    tenantId,
    reviewerAgentId: body.reviewerAgentId ? String(body.reviewerAgentId) : null,
    reviewerUserId: body.reviewerUserId ? String(body.reviewerUserId) : null,
    decision: body.decision,
    riskLevel: isValidRiskLevel(body.riskLevel) ? body.riskLevel : "low",
    comments: body.comments ? String(body.comments) : null,
    issuesJson: Array.isArray(body.issuesJson) ? body.issuesJson : [],
    requiredChangesJson: Array.isArray(body.requiredChangesJson) ? body.requiredChangesJson : [],
    createdAt: now
  };
  await db.insert(agentReviews).values(review).run();
  await db.update(agentArtifacts).set({
    reviewStatus: targetReviewStatus,
    reviewedByAgentId: review.reviewerAgentId,
    reviewedAt: now,
    updatedAt: now
  }).where(eq(agentArtifacts.id, artifact.id)).run();
  return c.json({ success: true, review }, 201);
});
collaboration.get("/:jobId/reviews", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  const reviews = await db.select().from(agentReviews).where(eq(agentReviews.jobId, jobId)).orderBy(desc(agentReviews.createdAt)).all();
  return c.json({ success: true, reviews });
});
collaboration.post("/:jobId/retry", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const body = await c.req.json().catch(() => ({}));
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  const stepId = body?.stepId ? String(body.stepId) : String(job.currentStepId || "");
  if (!stepId) {
    return c.json({ success: false, error: "BAD_REQUEST", message: "retry 需要 stepId 或当前任务存在 currentStepId" }, 400);
  }
  const step = await getStepOrNull(db, jobId, stepId);
  if (!step) {
    return c.json({ success: false, error: "NOT_FOUND", message: "步骤不存在" }, 404);
  }
  if (!["failed", "rejected"].includes(step.status)) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `当前步骤状态为 ${step.status}，只有 failed 或 rejected 状态允许重试`
    }, 409);
  }
  const targetStepStatus = body?.assignedAgentId ? "assigned" : "running";
  if (!canTransitionStep(step.status, targetStepStatus)) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `步骤当前为 ${step.status}，不允许迁移到 ${targetStepStatus}`
    }, 409);
  }
  const dependencyViolation = await getDependencyViolation(db, step);
  if (dependencyViolation) {
    return c.json({ success: false, error: "INVALID_STATE", message: dependencyViolation }, 409);
  }
  const expectedJobStatus = targetStepStatus === "running" ? "running" : "queued";
  if (!canTransitionJob(job.status, expectedJobStatus) && job.status !== expectedJobStatus) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `任务当前为 ${job.status}，不允许重试进入 ${expectedJobStatus}`
    }, 409);
  }
  const nextReviewStatus = step.reviewStatus === "rejected" ? "pending" : step.reviewStatus;
  if (step.reviewStatus === "rejected" && !canTransitionReview(step.reviewStatus, nextReviewStatus)) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `步骤 reviewStatus 当前为 ${step.reviewStatus}，不允许重试迁移到 ${nextReviewStatus}`
    }, 409);
  }
  const now = /* @__PURE__ */ new Date();
  await db.update(agentJobSteps).set({
    status: targetStepStatus,
    reviewStatus: nextReviewStatus,
    assignedAgentId: body?.assignedAgentId ? String(body.assignedAgentId) : step.assignedAgentId,
    startedAt: targetStepStatus === "running" ? now : step.startedAt,
    finishedAt: null,
    updatedAt: now
  }).where(eq(agentJobSteps.id, step.id)).run();
  await db.update(agentJobs).set({
    status: expectedJobStatus,
    currentStepId: step.id,
    updatedAt: now
  }).where(eq(agentJobs.id, jobId)).run();
  return c.json({
    success: true,
    retry: {
      jobId,
      stepId: step.id,
      jobStatus: expectedJobStatus,
      stepStatus: targetStepStatus
    }
  });
});
collaboration.post("/:jobId/cancel", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const body = await c.req.json().catch(() => ({}));
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  if (job.status === "cancelled") {
    return c.json({ success: true, cancelled: true, alreadyCancelled: true });
  }
  if (!canTransitionJob(job.status, "cancelled")) {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `任务当前为 ${job.status}，不允许取消`
    }, 409);
  }
  const steps = await db.select().from(agentJobSteps).where(eq(agentJobSteps.jobId, jobId)).all();
  const now = /* @__PURE__ */ new Date();
  for (const step of steps) {
    if (["cancelled", "approved", "skipped", "rolled_back"].includes(step.status)) continue;
    if (!canTransitionStep(step.status, "cancelled")) continue;
    await db.update(agentJobSteps).set({
      status: "cancelled",
      updatedAt: now,
      finishedAt: now
    }).where(eq(agentJobSteps.id, step.id)).run();
  }
  await db.update(agentJobs).set({
    status: "cancelled",
    updatedAt: now,
    metadata: {
      ...job.metadata || {},
      cancelReason: body?.reason ? String(body.reason) : "manual_cancel"
    }
  }).where(eq(agentJobs.id, jobId)).run();
  return c.json({ success: true, cancelled: true });
});
collaboration.post("/:jobId/rollback", async (c) => {
  const db = await createDbClient(c.env.DB);
  const tenantId = resolveTenantId(c);
  const jobId = c.req.param("jobId");
  const body = await c.req.json().catch(() => ({}));
  const job = await getJobOrNull(db, tenantId, jobId);
  if (!job) {
    return c.json({ success: false, error: "NOT_FOUND", message: "协作任务不存在" }, 404);
  }
  if (!canTransitionJob(job.status, "rolled_back") && job.status !== "rolled_back") {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `任务当前为 ${job.status}，不允许直接回滚`
    }, 409);
  }
  const candidateStepId = body?.stepId ? String(body.stepId) : String(job.currentStepId || "");
  if (!candidateStepId) {
    return c.json({ success: false, error: "BAD_REQUEST", message: "回滚需要 stepId 或任务存在 currentStepId" }, 400);
  }
  const step = await getStepOrNull(db, jobId, candidateStepId);
  if (!step) {
    return c.json({ success: false, error: "NOT_FOUND", message: "步骤不存在" }, 404);
  }
  if (step.status !== "approved" && step.status !== "rolled_back") {
    return c.json({
      success: false,
      error: "INVALID_STATE",
      message: `步骤当前为 ${step.status}，只有 approved 步骤允许回滚`
    }, 409);
  }
  const now = /* @__PURE__ */ new Date();
  if (step.status !== "rolled_back" && canTransitionStep(step.status, "rolled_back")) {
    await db.update(agentJobSteps).set({
      status: "rolled_back",
      updatedAt: now,
      finishedAt: now
    }).where(eq(agentJobSteps.id, step.id)).run();
  }
  await db.update(agentJobs).set({
    status: "rolled_back",
    updatedAt: now,
    metadata: {
      ...job.metadata || {},
      rollbackReason: body?.reason ? String(body.reason) : "manual_rollback",
      rolledBackStepId: step.id
    }
  }).where(eq(agentJobs.id, jobId)).run();
  return c.json({
    success: true,
    rollback: {
      jobId,
      stepId: step.id,
      status: "rolled_back"
    }
  });
});
const dbAdmin = new Hono();
function safeTableName(name) {
  return name.replace(/[^a-zA-Z0-9_]/g, "");
}
async function runSql(c, sql2, params = []) {
  const useRemote = c.req.query("remote") === "true";
  if (useRemote) {
    const accountId = String(c.env.CF_ACCOUNT_ID || "").trim();
    const apiToken = String(c.env.CF_API_TOKEN || "").trim();
    const databaseId = String(c.env.D1_DATABASE_ID || "").trim();
    if (!accountId || !apiToken || !databaseId) {
      throw new Error("远程 D1 模式缺少 CF_ACCOUNT_ID、CF_API_TOKEN 或 D1_DATABASE_ID，已拒绝使用任何硬编码默认值。");
    }
    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sql: sql2, params })
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Cloudflare API 错误 (${res.status}): ${errText}`);
    }
    const resJson = await res.json();
    if (!resJson.success) {
      throw new Error(`D1 API 执行失败: ${JSON.stringify(resJson.errors)}`);
    }
    return resJson.result[0];
  } else {
    if (!c.env.DB) {
      throw new Error("当前环境未绑定 D1 数据库 (env.DB 缺失)，您可以尝试开启“远程 REST API 模式”进行跨端查询。");
    }
    const stmt = c.env.DB.prepare(sql2);
    const boundStmt = params.length > 0 ? stmt.bind(...params) : stmt;
    let res;
    const upperSql = sql2.trim().toUpperCase();
    if (upperSql.startsWith("SELECT") || upperSql.startsWith("PRAGMA")) {
      res = await boundStmt.all();
    } else {
      res = await boundStmt.run();
    }
    return res;
  }
}
dbAdmin.use("*", async (c, next) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "未授权访问：请先登录" }, 401);
  }
  let userPermissions = c.get("userPermissions");
  let userRoles = c.get("userRoles");
  if (!userPermissions || !userRoles) {
    try {
      const { createDbClient: createDbClient2 } = await import("./index_C8hkm3Ad.mjs").then((n) => n.bS);
      const { getAdminAuthInfo: getAdminAuthInfo2 } = await import("./rbac_8PPO8uBj.mjs").then((n) => n.b);
      const db = await createDbClient2(c.env.DB);
      const authInfo = await getAdminAuthInfo2(db, user.id);
      userPermissions = authInfo.permissions;
      userRoles = authInfo.roles;
      c.set("userPermissions", userPermissions);
      c.set("userRoles", userRoles);
      c.set("isAdmin", userRoles.includes("SuperAdmin"));
    } catch (e) {
      console.error("❌ [DB Admin Guard] 自动检索超级管理员鉴权信息失败:", e);
      userPermissions = [];
      userRoles = [];
    }
  }
  await next();
});
dbAdmin.get("/tables", requirePermission(["database.view", "database.manage", "role.manage"]), async (c) => {
  try {
    const tablesQuery = `
      SELECT name 
      FROM sqlite_schema 
      WHERE type='table' 
        AND name NOT LIKE 'sqlite_%' 
        AND name NOT LIKE '_cf_%' 
        AND name NOT LIKE 'drizzle_%'
    `;
    const tablesRes = await runSql(c, tablesQuery);
    const tableList = tablesRes.results || [];
    const result = [];
    for (const row of tableList) {
      const tableName = safeTableName(row.name);
      let count = 0;
      try {
        const countRes = await runSql(c, `SELECT COUNT(*) as count FROM ${tableName}`);
        count = countRes.results?.[0]?.count || 0;
      } catch (countErr) {
        console.warn(`Failed to count table ${tableName}:`, countErr);
      }
      result.push({
        name: tableName,
        rowCount: count
      });
    }
    return c.json({ success: true, tables: result });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
dbAdmin.get("/table/:tableName", requirePermission(["database.view", "database.manage", "role.manage"]), async (c) => {
  const tableName = safeTableName(c.req.param("tableName"));
  const page = Math.max(1, parseInt(c.req.query("page") || "1"));
  const limit = Math.max(1, Math.min(100, parseInt(c.req.query("limit") || "20")));
  const offset = (page - 1) * limit;
  try {
    let columns = [];
    try {
      const metaRes = await runSql(c, `PRAGMA table_info(${tableName})`);
      columns = metaRes.results || [];
    } catch (metaErr) {
      const sampleRes = await runSql(c, `SELECT * FROM ${tableName} LIMIT 1`);
      if (sampleRes.results && sampleRes.results.length > 0) {
        columns = Object.keys(sampleRes.results[0]).map((key, i) => ({
          cid: i,
          name: key,
          type: "TEXT",
          notnull: 0,
          dflt_value: null,
          pk: key === "id" ? 1 : 0
        }));
      } else {
        columns = [{ cid: 0, name: "id", type: "TEXT", notnull: 0, dflt_value: null, pk: 1 }];
      }
    }
    const countRes = await runSql(c, `SELECT COUNT(*) as total FROM ${tableName}`);
    const total = countRes.results?.[0]?.total || 0;
    const dataRes = await runSql(c, `SELECT * FROM ${tableName} LIMIT ? OFFSET ?`, [limit, offset]);
    const list = dataRes.results || [];
    return c.json({
      success: true,
      tableName,
      schema: columns,
      total,
      page,
      limit,
      data: list
    });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
dbAdmin.post("/table/:tableName", requirePermission(["database.manage", "role.manage"]), async (c) => {
  const tableName = safeTableName(c.req.param("tableName"));
  let body;
  try {
    body = await c.req.json();
  } catch (e) {
    return c.json({ error: "无效的 JSON 数据" }, 400);
  }
  const rowData = body.data;
  if (!rowData || typeof rowData !== "object") {
    return c.json({ error: "参数 data 缺失或类型错误" }, 400);
  }
  const keys = Object.keys(rowData).map((k) => safeTableName(k));
  if (keys.length === 0) {
    return c.json({ error: "新增字段列表不能为空" }, 400);
  }
  const placeholders = keys.map(() => "?").join(", ");
  const insertSql = `INSERT INTO ${tableName} (${keys.join(", ")}) VALUES (${placeholders})`;
  const params = Object.values(rowData);
  try {
    const result = await runSql(c, insertSql, params);
    return c.json({ success: true, result });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
dbAdmin.put("/table/:tableName", requirePermission(["database.manage", "role.manage"]), async (c) => {
  const tableName = safeTableName(c.req.param("tableName"));
  let body;
  try {
    body = await c.req.json();
  } catch (e) {
    return c.json({ error: "无效的 JSON 数据" }, 400);
  }
  const { pkName, pkValue, data: rowData } = body;
  if (!pkName || pkValue === void 0 || !rowData || typeof rowData !== "object") {
    return c.json({ error: "参数缺失: pkName, pkValue 和 data 均为必填参数" }, 400);
  }
  const safePk = safeTableName(pkName);
  const keys = Object.keys(rowData).map((k) => safeTableName(k));
  if (keys.length === 0) {
    return c.json({ error: "需要修改的字段列表不能为空" }, 400);
  }
  const setClause = keys.map((k) => `${k} = ?`).join(", ");
  const updateSql = `UPDATE ${tableName} SET ${setClause} WHERE ${safePk} = ?`;
  const params = [...Object.values(rowData), pkValue];
  try {
    const result = await runSql(c, updateSql, params);
    return c.json({ success: true, result });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
dbAdmin.delete("/table/:tableName", requirePermission(["database.manage", "role.manage"]), async (c) => {
  const tableName = safeTableName(c.req.param("tableName"));
  const pkName = c.req.query("pkName");
  const pkValue = c.req.query("pkValue");
  if (!pkName || pkValue === void 0) {
    return c.json({ error: "参数缺失: pkName 和 pkValue 均为必选 Query 参数" }, 400);
  }
  const safePk = safeTableName(pkName);
  const deleteSql = `DELETE FROM ${tableName} WHERE ${safePk} = ?`;
  try {
    const result = await runSql(c, deleteSql, [pkValue]);
    return c.json({ success: true, result });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
dbAdmin.post("/execute", requirePermission(["database.manage", "role.manage"]), async (c) => {
  let body;
  try {
    body = await c.req.json();
  } catch (e) {
    return c.json({ error: "无效的 JSON 载荷" }, 400);
  }
  const { sql: sql2, params = [] } = body;
  if (!sql2) {
    return c.json({ error: "SQL 语句不能为空" }, 400);
  }
  try {
    const result = await runSql(c, sql2, params);
    return c.json({ success: true, result });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
const seoGeo = new Hono();
seoGeo.get("/enabled-collections", requirePermission(["seo_geo.view"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const enabled = await db.select().from(seoGeoEnabledCollections).all();
  return c.json(enabled.map((e) => e.collectionSlug));
});
seoGeo.post("/enabled-collections", requirePermission(["seo_geo.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const { collectionSlugs } = await c.req.json();
  try {
    const currentEnabled = await db.select().from(seoGeoEnabledCollections).all();
    const currentSlugs = currentEnabled.map((e) => e.collectionSlug);
    const toDelete = currentSlugs.filter((slug) => !collectionSlugs.includes(slug));
    if (toDelete.length > 0) {
      await db.delete(seoGeoEnabledCollections).where(inArray(seoGeoEnabledCollections.collectionSlug, toDelete));
      await db.delete(seoGeoMappings).where(inArray(seoGeoMappings.collectionSlug, toDelete));
    }
    const toAdd = collectionSlugs.filter((slug) => !currentSlugs.includes(slug));
    for (const slug of toAdd) {
      await db.insert(seoGeoEnabledCollections).values({ collectionSlug: slug }).onConflictDoNothing();
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
seoGeo.get("/mappings", requirePermission(["seo_geo.view"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const allMappings = await db.select().from(seoGeoMappings).all();
  const groupedMappings = allMappings.reduce((acc, mapping) => {
    const { collectionSlug, semanticType, sourceFieldName, directValue } = mapping;
    if (!acc[collectionSlug]) {
      acc[collectionSlug] = {};
    }
    acc[collectionSlug][semanticType] = { sourceFieldName, directValue };
    return acc;
  }, {});
  return c.json(groupedMappings);
});
seoGeo.get("/mappings/:collection_slug", requirePermission(["seo_geo.view"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const { collection_slug } = c.req.param();
  const mappings = await db.select().from(seoGeoMappings).where(eq(seoGeoMappings.collectionSlug, collection_slug)).all();
  const result = mappings.reduce((acc, mapping) => {
    acc[mapping.semanticType] = { sourceFieldName: mapping.sourceFieldName, directValue: mapping.directValue };
    return acc;
  }, {});
  return c.json(result);
});
seoGeo.post("/mappings/:collection_slug", requirePermission(["seo_geo.manage"]), async (c) => {
  const db = await createDbClient(c.env.DB);
  const { collection_slug } = c.req.param();
  const rules = await c.req.json();
  try {
    for (const semanticType in rules) {
      const { sourceFieldName, directValue } = rules[semanticType];
      const normalizedSourceFieldName = typeof sourceFieldName === "string" ? sourceFieldName.trim() : "";
      const normalizedDirectValue = typeof directValue === "string" ? directValue.trim() : "";
      const existing = await db.select().from(seoGeoMappings).where(
        and(
          eq(seoGeoMappings.collectionSlug, collection_slug),
          eq(seoGeoMappings.semanticType, semanticType)
        )
      ).get();
      const hasValue2 = normalizedSourceFieldName || normalizedDirectValue;
      if (hasValue2) {
        const payload = {
          sourceFieldName: normalizedSourceFieldName || "",
          directValue: normalizedDirectValue || null
        };
        if (existing) {
          await db.update(seoGeoMappings).set(payload).where(eq(seoGeoMappings.id, existing.id));
        } else {
          await db.insert(seoGeoMappings).values({
            collectionSlug: collection_slug,
            semanticType,
            ...payload
          });
        }
      } else {
        if (existing) {
          await db.delete(seoGeoMappings).where(eq(seoGeoMappings.id, existing.id));
        }
      }
    }
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
const getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
const ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
const errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
let overrideErrorMap = errorMap;
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const stringType = ZodString.create;
ZodNever.create;
ZodArray.create;
const objectType = ZodObject.create;
ZodUnion.create;
ZodIntersection.create;
ZodTuple.create;
const enumType = ZodEnum.create;
ZodPromise.create;
ZodOptional.create;
ZodNullable.create;
const ConfigSchema = objectType({
  // 数据库 ID (生产环境必须，开发环境可选)
  D1_DATABASE_ID: stringType().optional(),
  // API 密钥（示例：用于 AI 翻译或采集）
  OPENAI_API_KEY: stringType().optional(),
  EXTERNAL_SERP_KEY: stringType().optional(),
  // 系统运行环境
  NODE_ENV: enumType(["development", "production", "test"]).default("development"),
  // 默认管理员 Seed 密码
  DEFAULT_ADMIN_PASSWORD: stringType().min(8, "DEFAULT_ADMIN_PASSWORD 必须至少 8 位").optional(),
  // 默认管理员 Seed 用户名
  DEFAULT_ADMIN_USER: stringType().min(1, "DEFAULT_ADMIN_USER 不能为空").optional(),
  // 默认语言
  DEFAULT_LANGUAGE: stringType().default("zh-CN")
});
function validateConfig(env) {
  const mergedEnv = {
    ...globalThis.process?.env,
    ...env
  };
  const result = ConfigSchema.safeParse(mergedEnv);
  if (!result.success) {
    const errors = result.error.format();
    console.error("❌ [Config] 配置校验失败 Details:", JSON.stringify(errors, null, 2));
    console.error("❌ [Config] Merged Env keys:", Object.keys(mergedEnv));
    throw new Error("系统配置错误，请检查环境变量设置");
  }
  return result.data;
}
const domainDispatcher = async (c, next) => {
  const url = new URL(c.req.url);
  const hostname = url.hostname;
  const path = url.pathname;
  const config = await getValidatedMapping(c.env);
  const target = identifyTarget(hostname, config, c.env);
  if (target === "member") {
    const isAllowed = path.startsWith("/member") || path.startsWith("/api/v1/plugins/proxy/") || path.startsWith("/api/v1/p/") || path.startsWith("/api/v1/s/") && path.includes("/p/") || // 允许会员域名访问插件的公开接口
    path.startsWith("/api/auth/member") || path.includes("/_astro/") || path.includes("favicon");
    if (!isAllowed && path !== "/") {
      return c.json({
        error: "Forbidden",
        scope: "Member Portal Domain",
        allowed_paths: ["/member/*", "/api/v1/plugins/proxy/*", "/api/v1/p/*", "/api/auth/member"],
        message: "当前域名仅限于访问会员中心及相关鉴权接口。"
      }, 403);
    }
  }
  if (target === "api") {
    const isGatewayApi = path.startsWith("/api/v1/p/") || path.startsWith("/v1/p/") || // 公开接口 (含简写)
    path.startsWith("/api/v1/s/") || path.startsWith("/v1/s/") || // 商家接口 (含简写)
    path.startsWith("/api/webhooks/") || path.startsWith("/webhooks/") || path.startsWith("/api/auth/") || path.startsWith("/auth/") || path.startsWith("/api/infra/") || path.startsWith("/infra/");
    if (!isGatewayApi) {
      return c.json({
        error: "Forbidden",
        scope: "API Gateway Domain",
        allowed_paths: ["/v1/p/*", "/v1/s/*", "/webhooks/*", "/auth/*"],
        message: "当前域名仅限于访问公开业务 API、Webhook 或鉴权接口。"
      }, 403);
    }
  }
  c.set("dispatch_target", target);
  if (config) c.set("site_domains", config);
  await next();
};
class ImageProxy {
  /**
   * 处理 R2 资源读取请求
   * @param c Hono 上下文
   * @param key R2 对象键 (通常是文件名)
   */
  static async serve(c, key) {
    const bucket = c.env.MEDIA_BUCKET;
    if (!bucket) {
      return c.json({ error: "R2 bucket not bound" }, 500);
    }
    const rangeHeader = c.req.header("range");
    const object = await bucket.get(key, {
      range: rangeHeader
    });
    if (!object) {
      return c.json({ error: "Image not found" }, 404);
    }
    const contentType = this.getContentType(key);
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("Content-Type", contentType);
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
    headers.set("ETag", object.httpEtag);
    return new Response(object.body, {
      status: rangeHeader ? 206 : 200,
      headers
    });
  }
  /**
   * 简单的 MIME 类型推断逻辑
   */
  static getContentType(key) {
    const ext = key.split(".").pop()?.toLowerCase();
    const mimeMap = {
      "webp": "image/webp",
      "jpg": "image/jpeg",
      "jpeg": "image/jpeg",
      "png": "image/png",
      "gif": "image/gif",
      "svg": "image/svg+xml",
      "ico": "image/x-icon",
      "avif": "image/avif",
      "mp4": "video/mp4",
      "pdf": "application/pdf"
    };
    return mimeMap[ext || ""] || "application/octet-stream";
  }
}
let essentialSyncPromise = null;
let reconcileSyncPromise = null;
let areRuntimeEssentialsReady = false;
let isRuntimeReconciled = false;
function shouldRunFullRuntimeSync(env) {
  return env.ENABLE_RUNTIME_SCHEMA_SYNC === "true" || env.NODE_ENV === "development" || env.NODE_ENV === "test";
}
async function primeRuntimePermissions(db, registry2) {
  registry2.initCorePermissions();
  const allCollections = await db.select({
    slug: collections.slug,
    name: collections.name
  }).from(collections).all();
  allCollections.forEach((item) => {
    registry2.registerDynamicPermissions(item, "collection");
  });
  const { PluginService: PluginService2 } = await import("./PluginService_BqjNV-46.mjs");
  const { PLUGIN_CODE_REGISTRY: PLUGIN_CODE_REGISTRY2 } = await import("./plugin-registry_B56c2_Dg.mjs");
  const enabledPlugins = await PluginService2.getEnabledPlugins(db);
  for (const plugin of enabledPlugins) {
    const bundle = PLUGIN_CODE_REGISTRY2[plugin.slug];
    if (!bundle) continue;
    const manifest = await bundle.getManifest();
    if (manifest?.permissions) {
      registry2.registerPluginPermissions(plugin, manifest.permissions);
    }
  }
}
async function syncCorePermissions(db, registry2) {
  await registry2.syncToDb(db, false);
}
async function getEnabledPluginBundles(db) {
  const { PluginService: PluginService2 } = await import("./PluginService_BqjNV-46.mjs");
  const { PLUGIN_CODE_REGISTRY: PLUGIN_CODE_REGISTRY2 } = await import("./plugin-registry_B56c2_Dg.mjs");
  const enabledPlugins = await PluginService2.getEnabledPlugins(db);
  return enabledPlugins.map((plugin) => ({
    plugin,
    bundle: PLUGIN_CODE_REGISTRY2[plugin.slug]
  })).filter((item) => !!item.bundle);
}
async function initEnabledPluginSchemas(db) {
  const pluginBundles = await getEnabledPluginBundles(db);
  for (const { plugin, bundle } of pluginBundles) {
    const initFn = await bundle.getInit();
    if (typeof initFn !== "function") continue;
    try {
      await initFn(db);
      console.log(`🔌 [System] 插件 ${plugin.slug} 数据库自愈同步成功.`);
    } catch (initErr) {
      console.warn(`⚠️ [System] 插件 ${plugin.slug} 数据库自愈同步失败:`, initErr);
    }
  }
}
async function runSqlStatements(db, statements, label) {
  for (const statement of statements) {
    try {
      await db.run(sql.raw(statement));
    } catch (error) {
      console.warn(`⚠️ [System] ${label} 跳过一条非致命语句:`, error);
    }
  }
}
const ESSENTIAL_SCHEMA_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS roles (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE NOT NULL, scope TEXT DEFAULT 'tenant', description TEXT, created_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS permissions (slug TEXT PRIMARY KEY, name TEXT NOT NULL, description TEXT, perm_category TEXT, plugin_slug TEXT)`,
  `CREATE TABLE IF NOT EXISTS role_permissions (role_id INTEGER NOT NULL, permission_slug TEXT NOT NULL, PRIMARY KEY(role_id, permission_slug))`,
  `CREATE TABLE IF NOT EXISTS models (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, fields_json TEXT NOT NULL, description TEXT, metadata TEXT, created_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS collections (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, model_id INTEGER NOT NULL, description TEXT, icon TEXT DEFAULT 'Layers', sort INTEGER DEFAULT 0, menu_group TEXT, menu_order INTEGER DEFAULT 0, parent_id INTEGER, relation_settings TEXT, field_config TEXT, permission_config TEXT, metadata TEXT, created_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS sites (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, domain TEXT UNIQUE NOT NULL, status TEXT DEFAULT 'active', theme_data TEXT, site_config TEXT, metadata TEXT, created_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS admins (id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, hashed_password TEXT, created_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS admin_sessions (id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES admins(id), expires_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS member_sessions (id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES members(id), expires_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS admins_to_roles (admin_id TEXT NOT NULL, role_id INTEGER NOT NULL, tenant_id INTEGER DEFAULT 0, PRIMARY KEY(admin_id, role_id, tenant_id))`,
  `CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, tenant_id INTEGER NOT NULL, email TEXT NOT NULL, password_hash TEXT NOT NULL, user_type TEXT NOT NULL, status TEXT DEFAULT 'active', created_at INTEGER, updated_at INTEGER, UNIQUE(tenant_id, email))`,
  `CREATE TABLE IF NOT EXISTS members (id TEXT PRIMARY KEY, type TEXT DEFAULT 'registered', level INTEGER DEFAULT 1, nickname TEXT, avatar TEXT, phone TEXT, gender TEXT DEFAULT 'unknown', birthday TEXT, bio TEXT, balance INTEGER NOT NULL DEFAULT 0, points INTEGER NOT NULL DEFAULT 0, metadata TEXT, created_at INTEGER, updated_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS languages (code TEXT PRIMARY KEY, name TEXT NOT NULL, status TEXT DEFAULT 'active', is_default INTEGER DEFAULT 0, sort_order INTEGER DEFAULT 0, created_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS plugins (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL, config TEXT, config_schema TEXT, is_enabled INTEGER DEFAULT 0, created_at INTEGER, updated_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS system_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, description TEXT, updated_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS verification_codes (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, code TEXT NOT NULL, type TEXT DEFAULT 'register', expires_at INTEGER NOT NULL, created_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS mail_templates (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL, subject TEXT NOT NULL, content TEXT NOT NULL, vars TEXT, updated_at INTEGER)`,
  `INSERT OR IGNORE INTO mail_templates (slug, name, subject, content, vars) VALUES ('register_code', 'Registration Verification Code', 'Your Registration Verification Code', '<div style="font-family: Arial; padding: 20px;"><h2>Welcome to Register</h2><p>Your verification code is: <strong style="font-size: 24px; color: #2563eb;">{{code}}</strong></p><p>It is valid for 10 minutes. Please complete your registration as soon as possible.</p></div>', '{"code": "Verification Code"}')`,
  `INSERT OR IGNORE INTO mail_templates (slug, name, subject, content, vars) VALUES ('forgot_password_code', 'Password Reset Code', 'Reset Your Account Password', '<div style="font-family: Arial; padding: 20px;"><h2>Reset Password</h2><p>You are trying to retrieve your account password. Your verification code is: <strong style="font-size: 24px; color: #d97706;">{{code}}</strong></p><p>The code is valid for 10 minutes. If you did not request this code, please ignore this email.</p></div>', '{"code": "Verification Code"}')`
];
async function performEssentialSystemSync(c, registry2) {
  const db = await createDbClient(c.env.DB);
  console.log(`🚦 [System] 正在准备最小运行时依赖 (Environment: ${c.env.NODE_ENV || "local"})...`);
  await runSqlStatements(db, ESSENTIAL_SCHEMA_STATEMENTS, "Essentials");
  await initEnabledPluginSchemas(db);
  await primeRuntimePermissions(db, registry2);
  await syncCorePermissions(db, registry2);
  areRuntimeEssentialsReady = true;
  console.log("✅ [System] 最小运行时依赖已就绪。");
}
async function performSystemReconcile(c, registry2) {
  const db = await createDbClient(c.env.DB);
  console.log(`📡 [System] 正在启动 Schema Radar (Environment: ${c.env.NODE_ENV || "local"})...`);
  try {
    await db.run(sql`CREATE TABLE IF NOT EXISTS roles (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE NOT NULL, scope TEXT DEFAULT 'tenant', description TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS permissions (slug TEXT PRIMARY KEY, name TEXT NOT NULL, description TEXT, perm_category TEXT, plugin_slug TEXT)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS role_permissions (role_id INTEGER NOT NULL, permission_slug TEXT NOT NULL, PRIMARY KEY(role_id, permission_slug))`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS models (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, fields_json TEXT NOT NULL, description TEXT, metadata TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS collections (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, model_id INTEGER NOT NULL, description TEXT, icon TEXT DEFAULT 'Layers', sort INTEGER DEFAULT 0, menu_group TEXT, menu_order INTEGER DEFAULT 0, parent_id INTEGER, relation_settings TEXT, field_config TEXT, permission_config TEXT, metadata TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS sites (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, domain TEXT UNIQUE NOT NULL, status TEXT DEFAULT 'active', theme_data TEXT, site_config TEXT, metadata TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS entities (id INTEGER PRIMARY KEY AUTOINCREMENT, collection_id INTEGER NOT NULL, data_json TEXT NOT NULL, locale TEXT DEFAULT 'en-US', translation_group TEXT, created_by TEXT, metadata TEXT, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS admins (id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, hashed_password TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS admin_sessions (id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES admins(id), expires_at INTEGER NOT NULL)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS member_sessions (id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES members(id), expires_at INTEGER NOT NULL)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS admins_to_roles (admin_id TEXT NOT NULL, role_id INTEGER NOT NULL, tenant_id INTEGER DEFAULT 0, PRIMARY KEY(admin_id, role_id, tenant_id))`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, tenant_id INTEGER NOT NULL, email TEXT NOT NULL, password_hash TEXT NOT NULL, user_type TEXT NOT NULL, status TEXT DEFAULT 'active', created_at INTEGER, updated_at INTEGER, UNIQUE(tenant_id, email))`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS members (id TEXT PRIMARY KEY, type TEXT DEFAULT 'registered', level INTEGER DEFAULT 1, nickname TEXT, avatar TEXT, phone TEXT, gender TEXT DEFAULT 'unknown', birthday TEXT, bio TEXT, balance INTEGER NOT NULL DEFAULT 0, points INTEGER NOT NULL DEFAULT 0, metadata TEXT, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS languages (code TEXT PRIMARY KEY, name TEXT NOT NULL, status TEXT DEFAULT 'active', is_default INTEGER DEFAULT 0, sort_order INTEGER DEFAULT 0, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS plugins (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL, config TEXT, config_schema TEXT, is_enabled INTEGER DEFAULT 0, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS media_items (id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT NOT NULL, filename TEXT NOT NULL, mime_type TEXT NOT NULL, size INTEGER NOT NULL, is_remote INTEGER DEFAULT 0, created_by TEXT, metadata TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS system_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, description TEXT, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS verification_codes (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, code TEXT NOT NULL, type TEXT DEFAULT 'register', expires_at INTEGER NOT NULL, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS mail_templates (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL, subject TEXT NOT NULL, content TEXT NOT NULL, vars TEXT, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS mail_messages (id INTEGER PRIMARY KEY AUTOINCREMENT, thread_id TEXT NOT NULL, from_email TEXT NOT NULL, to_email TEXT NOT NULL, subject TEXT, content TEXT NOT NULL, direction TEXT NOT NULL, status TEXT DEFAULT 'unread', metadata TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS seo_geo_mappings (id INTEGER PRIMARY KEY AUTOINCREMENT, collection_slug TEXT NOT NULL, semantic_type TEXT NOT NULL, source_field_name TEXT, direct_value TEXT, created_at INTEGER, updated_at INTEGER, UNIQUE(collection_slug, semantic_type))`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS seo_geo_enabled_collections (id INTEGER PRIMARY KEY AUTOINCREMENT, collection_slug TEXT NOT NULL UNIQUE, created_at INTEGER)`);
    await db.run(sql`INSERT OR IGNORE INTO mail_templates (slug, name, subject, content, vars) VALUES ('register_code', 'Registration Verification Code', 'Your Registration Verification Code', '<div style="font-family: Arial; padding: 20px;"><h2>Welcome to Register</h2><p>Your verification code is: <strong style="font-size: 24px; color: #2563eb;">{{code}}</strong></p><p>It is valid for 10 minutes. Please complete your registration as soon as possible.</p></div>', '{"code": "Verification Code"}')`);
    await db.run(sql`INSERT OR IGNORE INTO mail_templates (slug, name, subject, content, vars) VALUES ('forgot_password_code', 'Password Reset Code', 'Reset Your Account Password', '<div style="font-family: Arial; padding: 20px;"><h2>Reset Password</h2><p>You are trying to retrieve your account password. Your verification code is: <strong style="font-size: 24px; color: #d97706;">{{code}}</strong></p><p>The code is valid for 10 minutes. If you did not request this code, please ignore this email.</p></div>', '{"code": "Verification Code"}')`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS p_member_profiles (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id INTEGER NOT NULL, member_id TEXT NOT NULL, name TEXT, avatar TEXT, phone TEXT, account_type TEXT DEFAULT 'individual', tier_id INTEGER DEFAULT 1, metadata TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS p_member_tiers (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id INTEGER NOT NULL, name TEXT NOT NULL, discount_rate INTEGER DEFAULT 100, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS p_member_tiers_i18n (id INTEGER PRIMARY KEY AUTOINCREMENT, tier_id INTEGER NOT NULL, lang_code TEXT NOT NULL, name TEXT NOT NULL, UNIQUE(tier_id, lang_code))`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS balance_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id INTEGER NOT NULL, user_id TEXT NOT NULL, type TEXT NOT NULL, amount INTEGER NOT NULL, before INTEGER NOT NULL, after INTEGER NOT NULL, remark TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS points_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id INTEGER NOT NULL, user_id TEXT NOT NULL, type TEXT NOT NULL, amount INTEGER NOT NULL, before INTEGER NOT NULL, after INTEGER NOT NULL, remark TEXT, created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS inquiries (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id INTEGER NOT NULL, member_id TEXT, email TEXT NOT NULL, content TEXT NOT NULL, verify_token TEXT, status TEXT DEFAULT 'pending', source_url TEXT, metadata TEXT, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS ai_agents (id TEXT PRIMARY KEY, tenant_id INTEGER NOT NULL DEFAULT 0, name TEXT NOT NULL, avatar TEXT, description TEXT, system_prompt TEXT, master_model_id TEXT NOT NULL, system_role_id INTEGER, manual_instructions TEXT, capability_overrides TEXT DEFAULT '{}' NOT NULL, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_configs (agent_id TEXT PRIMARY KEY, sub_models TEXT DEFAULT '[]' NOT NULL, skills TEXT DEFAULT '[]' NOT NULL, loaded_models TEXT DEFAULT '[]' NOT NULL)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_sessions (id TEXT PRIMARY KEY, agent_id TEXT NOT NULL, title TEXT NOT NULL, summary TEXT, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_messages (id TEXT PRIMARY KEY, agent_id TEXT NOT NULL, session_id TEXT, role TEXT NOT NULL, content TEXT NOT NULL, reasoning_content TEXT, attachments TEXT DEFAULT '[]', task_steps TEXT DEFAULT '[]', created_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_jobs (id TEXT PRIMARY KEY, tenant_id INTEGER NOT NULL DEFAULT 0, type TEXT NOT NULL, title TEXT NOT NULL, description TEXT, status TEXT NOT NULL DEFAULT 'draft', priority TEXT NOT NULL DEFAULT 'normal', initiator_user_id TEXT, coordinator_agent_id TEXT, source_module TEXT, source_entity_type TEXT, source_entity_id TEXT, current_step_id TEXT, latest_artifact_id TEXT, metadata TEXT DEFAULT '{}' NOT NULL, created_at INTEGER, updated_at INTEGER, completed_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_job_steps (id TEXT PRIMARY KEY, job_id TEXT NOT NULL, tenant_id INTEGER NOT NULL DEFAULT 0, step_type TEXT NOT NULL, title TEXT NOT NULL, description TEXT, status TEXT NOT NULL DEFAULT 'pending', sequence INTEGER NOT NULL DEFAULT 1, depends_on_step_id TEXT, parent_step_id TEXT, is_parallel INTEGER NOT NULL DEFAULT 0, input_artifact_ids TEXT DEFAULT '[]' NOT NULL, output_artifact_ids TEXT DEFAULT '[]' NOT NULL, review_status TEXT NOT NULL DEFAULT 'not_required', assigned_agent_id TEXT, metadata TEXT DEFAULT '{}' NOT NULL, started_at INTEGER, finished_at INTEGER, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_task_assignments (id TEXT PRIMARY KEY, job_id TEXT NOT NULL, step_id TEXT NOT NULL, tenant_id INTEGER NOT NULL DEFAULT 0, agent_id TEXT NOT NULL, assignment_role TEXT NOT NULL DEFAULT 'executor', status TEXT NOT NULL DEFAULT 'assigned', assigned_by TEXT, assignment_reason TEXT, session_id TEXT, started_at INTEGER, finished_at INTEGER, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_artifacts (id TEXT PRIMARY KEY, job_id TEXT NOT NULL, step_id TEXT, tenant_id INTEGER NOT NULL DEFAULT 0, artifact_type TEXT NOT NULL, title TEXT NOT NULL, summary TEXT, version INTEGER NOT NULL DEFAULT 1, is_latest INTEGER NOT NULL DEFAULT 1, content_json TEXT, content_text TEXT, schema_version TEXT DEFAULT 'v1', created_by_agent_id TEXT, source_assignment_id TEXT, review_status TEXT NOT NULL DEFAULT 'not_required', reviewed_by_agent_id TEXT, reviewed_at INTEGER, metadata TEXT DEFAULT '{}' NOT NULL, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_shared_contexts (id TEXT PRIMARY KEY, job_id TEXT NOT NULL, tenant_id INTEGER NOT NULL DEFAULT 0, context_type TEXT NOT NULL, version INTEGER NOT NULL DEFAULT 1, content_json TEXT NOT NULL, summary TEXT, updated_by_agent_id TEXT, updated_by_user_id TEXT, source_artifact_id TEXT, is_latest INTEGER NOT NULL DEFAULT 1, created_at INTEGER, updated_at INTEGER)`);
    await db.run(sql`CREATE TABLE IF NOT EXISTS agent_reviews (id TEXT PRIMARY KEY, job_id TEXT NOT NULL, step_id TEXT, artifact_id TEXT, tenant_id INTEGER NOT NULL DEFAULT 0, reviewer_agent_id TEXT, reviewer_user_id TEXT, decision TEXT NOT NULL, risk_level TEXT NOT NULL DEFAULT 'low', comments TEXT, issues_json TEXT DEFAULT '[]' NOT NULL, required_changes_json TEXT DEFAULT '[]' NOT NULL, created_at INTEGER)`);
    console.log("✨ [System] Schema Radar: 核心系统与会员插件表验证完成");
    const alters = [
      `ALTER TABLE inquiries ADD COLUMN source_url TEXT`,
      `ALTER TABLE roles ADD COLUMN scope TEXT DEFAULT 'tenant'`,
      `ALTER TABLE admins_to_roles ADD COLUMN tenant_id INTEGER NOT NULL DEFAULT 0`,
      `ALTER TABLE permissions ADD COLUMN perm_category TEXT`,
      `ALTER TABLE permissions ADD COLUMN plugin_slug TEXT`,
      `ALTER TABLE collections ADD COLUMN menu_group TEXT`,
      `ALTER TABLE collections ADD COLUMN menu_order INTEGER DEFAULT 0`,
      `ALTER TABLE collections ADD COLUMN field_config TEXT`,
      `ALTER TABLE members ADD COLUMN nickname TEXT`,
      `ALTER TABLE members ADD COLUMN avatar TEXT`,
      `ALTER TABLE members ADD COLUMN phone TEXT`,
      `ALTER TABLE members ADD COLUMN gender TEXT DEFAULT 'unknown'`,
      `ALTER TABLE members ADD COLUMN balance INTEGER NOT NULL DEFAULT 0`,
      `ALTER TABLE members ADD COLUMN points INTEGER NOT NULL DEFAULT 0`,
      `ALTER TABLE members ADD COLUMN birthday TEXT`,
      `ALTER TABLE members ADD COLUMN bio TEXT`,
      `ALTER TABLE members ADD COLUMN metadata TEXT`,
      `ALTER TABLE members ADD COLUMN created_at INTEGER`,
      `ALTER TABLE members ADD COLUMN updated_at INTEGER`,
      `ALTER TABLE languages ADD COLUMN sort_order INTEGER DEFAULT 0`,
      `ALTER TABLE balance_logs ADD COLUMN before INTEGER NOT NULL DEFAULT 0`,
      `ALTER TABLE balance_logs ADD COLUMN after INTEGER NOT NULL DEFAULT 0`,
      `ALTER TABLE points_logs ADD COLUMN before INTEGER NOT NULL DEFAULT 0`,
      `ALTER TABLE points_logs ADD COLUMN after INTEGER NOT NULL DEFAULT 0`,
      `ALTER TABLE admins ADD COLUMN hashed_password TEXT`,
      `ALTER TABLE admins ADD COLUMN created_at INTEGER`,
      `ALTER TABLE balance_logs ADD COLUMN before_amount INTEGER`,
      `ALTER TABLE balance_logs ADD COLUMN after_amount INTEGER`,
      `ALTER TABLE points_logs ADD COLUMN before_amount INTEGER`,
      `ALTER TABLE points_logs ADD COLUMN after_amount INTEGER`,
      `ALTER TABLE ai_agents ADD COLUMN system_prompt TEXT`,
      `ALTER TABLE ai_agents ADD COLUMN manual_instructions TEXT`,
      `ALTER TABLE ai_agents ADD COLUMN capability_overrides TEXT DEFAULT '{}' NOT NULL`,
      `ALTER TABLE agent_configs ADD COLUMN loaded_models TEXT DEFAULT '[]' NOT NULL`,
      `ALTER TABLE agent_messages ADD COLUMN session_id TEXT`,
      `ALTER TABLE agent_messages ADD COLUMN reasoning_content TEXT`,
      `ALTER TABLE agent_messages ADD COLUMN attachments TEXT DEFAULT '[]'`,
      `ALTER TABLE seo_geo_mappings ADD COLUMN direct_value TEXT`
    ];
    for (const cmd of alters) {
      try {
        await db.run(sql.raw(cmd));
      } catch (e) {
      }
    }
  } catch (e) {
    console.error("❌ [System] Schema Radar 关键错误:", e);
  }
  try {
    await primeRuntimePermissions(db, registry2);
    try {
      const pluginBundles = await getEnabledPluginBundles(db);
      for (const { plugin, bundle } of pluginBundles) {
        const manifest = await bundle.getManifest();
        if (manifest?.permissions) {
          registry2.registerPluginPermissions(plugin, manifest.permissions);
        }
      }
      await initEnabledPluginSchemas(db);
    } catch (pluginError) {
      console.warn("⚠️ [System] 插件初始化与权限预热失败:", pluginError);
    }
    await registry2.syncToDb(db, true);
    isRuntimeReconciled = true;
    console.log("✅ [System] Permission Radar 同步完成。");
  } catch (e) {
    console.warn("⚠️ [System] 动态权限同步跳过 (数据库可能尚未就绪):", e);
  }
}
function getSafeExecutionCtx(c) {
  try {
    return c.executionCtx;
  } catch {
    return void 0;
  }
}
function shouldBlockOnRuntimeSync(env) {
  return env.NODE_ENV === "development" || env.NODE_ENV === "test";
}
function shouldAwaitRuntimeEssentials(env) {
  return true;
}
function createAdminApp() {
  const admin2 = new Hono().basePath("/api");
  admin2.use("*", domainDispatcher);
  admin2.use("*", async (c, next) => {
    const path = c.req.path;
    const shouldBypassPublicSession = path.includes("/v1/p/");
    if (path.includes("/auth/admin/login") || path.includes("/auth/seed") || shouldBypassPublicSession || path.includes("/v1/s/")) {
      return await next();
    }
    try {
      const { adminAuth } = await getAuthInstances(c.env.DB);
      const cookieHeader = c.req.header("Cookie") ?? "";
      let sessionId = adminAuth.readSessionCookie(cookieHeader);
      if (!sessionId && cookieHeader.includes("admin_session=")) {
        const match = cookieHeader.match(/admin_session=([^;]+)/);
        if (match) sessionId = match[1];
      }
      if (!sessionId) {
        c.set("user", null);
        c.set("session", null);
        return await next();
      }
      const { session, user } = await adminAuth.validateSession(sessionId);
      if (session && session.fresh) {
        c.header("Set-Cookie", adminAuth.createSessionCookie(session.id).serialize(), { append: true });
      }
      if (!session) {
        c.header("Set-Cookie", adminAuth.createBlankSessionCookie().serialize(), { append: true });
      }
      c.set("user", user);
      c.set("session", session);
      await next();
    } catch (e) {
      console.error("❌ [Admin Session Middleware] Error:", e);
      await next();
    }
  });
  admin2.use("*", async (c, next) => {
    try {
      const proxyAuth = await resolveTrustedAgentProxyAuth(c);
      if (proxyAuth) {
        c.set("agentProxyAuth", proxyAuth);
        c.set("user", {
          id: proxyAuth.syntheticUserId,
          username: `agent:${proxyAuth.agentId}`,
          agentId: proxyAuth.agentId,
          actingAdminId: proxyAuth.actingAdminId,
          isAgentProxy: true
        });
        c.set("session", {
          id: `agent-proxy:${proxyAuth.agentId}`,
          fresh: false
        });
        c.set("userPermissions", proxyAuth.permissions);
        c.set("userRoles", proxyAuth.roles);
        c.set("isAdmin", proxyAuth.isAdmin);
      }
    } catch (error) {
      console.warn("⚠️ [Agent Proxy Auth] Failed to resolve trusted proxy auth:", error);
    }
    await next();
  });
  auth.get("/seed", async (c) => {
    if (c.env.NODE_ENV !== "development" && c.env.NODE_ENV !== "test") {
      return c.json({ error: "Only allowed in development" }, 403);
    }
    try {
      await seedAdmin(c.env.DB, c.env.DEFAULT_ADMIN_PASSWORD, c.env.DEFAULT_ADMIN_USER);
      return c.json({ message: "Seed Success" });
    } catch (err) {
      return c.json({ error: err.message }, 500);
    }
  });
  auth.get("/seed-users", async (c) => {
    if (c.env.NODE_ENV === "production") {
      return c.json({ error: "Only allowed in development" }, 403);
    }
    try {
      const dbModule = await import("./index_C8hkm3Ad.mjs").then((n) => n.bS);
      const db = await dbModule.createDbClient(c.env.DB);
      const schema = dbModule.schema;
      const { generateId: generateId2 } = await import("./index_ChAFa_YE.mjs");
      const { passwordHasher: passwordHasher2 } = await import("./auth_D3VEQItg.mjs").then((n) => n.d);
      const passwordHash = await passwordHasher2.hash("password123");
      const results = [];
      const adminId = generateId2(15);
      await db.insert(schema.users).values({
        id: adminId,
        tenantId: 1,
        email: "admin@system.com",
        passwordHash,
        userType: "admin",
        status: "active"
      }).onConflictDoNothing().run();
      await db.insert(schema.admins).values({
        id: adminId,
        username: "超级管理员"
      }).onConflictDoNothing().run();
      results.push({ email: "admin@system.com", type: "admin" });
      for (let i = 1; i <= 5; i++) {
        const email = `user${i}@example.com`;
        const userId = generateId2(15);
        try {
          await db.insert(schema.users).values({
            id: userId,
            tenantId: 1,
            email,
            passwordHash,
            userType: "member",
            status: "active"
          }).onConflictDoNothing().run();
          await db.insert(schema.members).values({
            id: userId,
            type: "registered",
            level: i
          }).onConflictDoNothing().run();
          results.push({ email, type: "member", id: userId });
        } catch (e) {
          results.push({ email, status: "failed", reason: e.message });
        }
      }
      return c.json({ message: "Seed Users Complete", results });
    } catch (err) {
      return c.json({ error: err.message }, 500);
    }
  });
  const v1 = new Hono();
  v1.use("/rbac/*", requirePermission([
    "languages.view",
    "languages.manage",
    "models.view",
    "models.manage",
    "collections.manage.view",
    "collections.manage",
    "api.manage.view",
    "api.manage",
    "role.manage"
  ]));
  v1.use("/settings/*", requirePermission([
    "settings.general.view",
    "settings.general",
    "settings.mail.view",
    "settings.mail",
    "settings.ai.view",
    "settings.ai",
    "role.manage"
  ]));
  v1.use("/infra/*", requirePermission([
    "settings.general.view",
    "settings.general",
    "api.manage.view",
    "api.manage",
    "sites.view",
    "sites.manage",
    "role.manage"
  ]));
  v1.route("/rbac", rbac);
  v1.route("/entities", entitiesRouter);
  v1.route("/media", mediaRouter);
  v1.route("/settings", settingsRoutes);
  v1.route("/infra", infra);
  v1.route("/plugins", plugins);
  v1.route("/users", users);
  v1.route("/db-admin", dbAdmin);
  v1.route("/seo-geo", seoGeo);
  v1.all("/s/*", async (c) => {
    const sf = (await import("./front-api_B2_V3q5O.mjs")).default;
    const url = new URL(c.req.url);
    url.pathname = url.pathname.replace("/api/v1/s", "");
    const newRequest = new Request(url.toString(), c.req.raw);
    return sf.fetch(newRequest, c.env);
  });
  v1.route("/ai", ai);
  v1.route("/agents", agents);
  v1.route("/agent-jobs", collaboration);
  v1.route("/", apiV1);
  admin2.route("/auth", auth);
  admin2.route("/v1", v1);
  admin2.route("/webhooks", webhooks);
  admin2.use("/v1/p/ai/*", publicAiGateway);
  admin2.route("/v1/p/ai", ai);
  admin2.route("/v1/p", publicApi);
  return admin2;
}
function createApplication(registry$1 = registry) {
  const master = new Hono();
  const adminApp = createAdminApp();
  master.use("*", cors({
    origin: (origin) => {
      if (!origin) return "*";
      if (origin.startsWith("chrome-extension://") || origin.includes("localhost") || origin.includes("127.0.0.1")) {
        return origin;
      }
      return origin;
    },
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE"],
    credentials: true,
    maxAge: 600
  }));
  master.use("*", domainDispatcher);
  master.use("*", async (c, next) => {
    try {
      const config = validateConfig(c.env);
      c.set("config", config);
      const executionCtx = getSafeExecutionCtx(c);
      if (c.env && !c.env.__executionCtx) {
        c.env.__executionCtx = executionCtx;
      }
      if (!areRuntimeEssentialsReady && !essentialSyncPromise) {
        essentialSyncPromise = performEssentialSystemSync(c, registry$1).finally(() => {
          essentialSyncPromise = null;
        });
      }
      if (essentialSyncPromise && shouldAwaitRuntimeEssentials(c.env)) {
        await essentialSyncPromise;
      }
      if (!isRuntimeReconciled && !reconcileSyncPromise) {
        const reconcileTask = shouldRunFullRuntimeSync(c.env) ? performSystemReconcile(c, registry$1) : (async () => {
          const db = await createDbClient(c.env.DB);
          await primeRuntimePermissions(db, registry$1);
          await registry$1.syncToDb(db, false);
          isRuntimeReconciled = true;
        })();
        reconcileSyncPromise = reconcileTask.finally(() => {
          reconcileSyncPromise = null;
        });
        if (shouldBlockOnRuntimeSync(c.env)) {
          await reconcileSyncPromise;
        } else if (executionCtx && typeof executionCtx.waitUntil === "function") {
          executionCtx.waitUntil(reconcileSyncPromise);
        } else {
          void reconcileSyncPromise;
        }
      }
      await next();
    } catch (err) {
      console.error("❌ [System Init] Critical Error:", err);
      return c.json({ error: "System Initialization Failed", details: err.message }, 500);
    }
  });
  master.all("*", async (c) => {
    const target = c.get("dispatch_target");
    const path = c.req.path;
    const env = c.env;
    const executionCtx = getSafeExecutionCtx(c);
    if (target === "img") {
      const key = path.split("/").pop() || "";
      return await ImageProxy.serve(c, key);
    }
    const isApiFeature = path.startsWith("/v1/") || path.startsWith("/auth/") || path.startsWith("/webhooks/") || path.startsWith("/infra/");
    if (isApiFeature && !path.startsWith("/api/")) {
      const url = new URL(c.req.url);
      url.pathname = `/api${path}`;
      return await adminApp.fetch(new Request(url.toString(), c.req.raw), c.env, executionCtx);
    }
    if (target === "api") {
      return await adminApp.fetch(c.req.raw, env, executionCtx);
    }
    if (target === "member") {
      const url = new URL(c.req.url);
      if (url.pathname === "/") {
        url.pathname = "/member";
      } else if (!url.pathname.startsWith("/member") && !url.pathname.startsWith("/api/")) {
        url.pathname = `/member${url.pathname}`;
      }
      const res2 = await adminApp.fetch(new Request(url.toString(), c.req.raw), c.env, executionCtx);
      if (res2.status === 404 && env.ASSETS) {
        return await env.ASSETS.fetch(new Request(url.toString(), c.req.raw));
      }
      return res2;
    }
    const res = await adminApp.fetch(c.req.raw, c.env, executionCtx);
    if (res.status === 404 && env.ASSETS) {
      return await env.ASSETS.fetch(c.req.raw);
    }
    return res;
  });
  return master;
}
const app = createApplication();
export {
  app as a,
  getCookie as g
};
