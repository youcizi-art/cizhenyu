globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as reactExports } from "./worker-entry_DDBDk8oL.mjs";
const MANIFEST$2 = {
  slug: "ai-skill-market",
  name: "AI技能中心",
  description: "AI技能和MCP连接器的市场管理面板，支持服务注册、连通性心跳检测。",
  version: "1.0.0",
  author: "Antigravity Store",
  permissions: [
    { slug: "skill.view", name: "查看技能中心", description: "允许查看 AI 技能与连接器列表，但不能新增、编辑、测试或删除技能" },
    { slug: "skill.manage", name: "管理技能中心", description: "允许添加、修改、启用或禁用AI技能与MCP服务" },
    { slug: "skill.use", name: "使用技能服务", description: "允许AI员工或系统调用登记的技能与MCP服务" }
  ],
  adminMenu: {
    title: "AI 技能中心",
    icon: "Wrench",
    path: "/admin/plugins/ai-skill-market"
  }
};
const MANIFEST$1 = {
  name: "lowcode-deployer",
  version: "1.0.0"
};
const MANIFEST = {
  slug: "oauth-login",
  name: "第三方一键登录",
  description: "支持第三方平台（如 Google、Facebook）的一键登录与账号绑定。",
  version: "1.0.0",
  author: "Slow Cat",
  permissions: [
    { slug: "oauth.manage", name: "管理第三方登录", description: "允许管理第三方登录配置与绑定关系" }
  ],
  adminMenu: {
    title: "第三方登录",
    icon: "Key",
    path: "/admin/plugins/oauth-login"
  }
};
const aiSkillMarketAdminUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_DGHWQAt4.mjs").catch(() => ({ default: () => null }))) : (() => null);
const lowcodeDeployerAdminUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_CGmnyo-v.mjs").catch(() => ({ default: () => null }))) : (() => null);
const oauthLoginAdminUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_r3aoo8_L.mjs").catch(() => ({ default: () => null }))) : (() => null);
const PLUGIN_CODE_REGISTRY = {
  "ai-skill-market": {
    manifest: MANIFEST$2,
    getAdminApp: async () => {
      try {
        const mod = await import("./AgentCapabilityService_D80kP5vr.mjs").then((n) => n.i);
        return mod.default?.admin || mod.admin || mod.adminApp;
      } catch (e) {
        console.error("❌ [Registry] Failed to load admin app for ai-skill-market:", e);
        return null;
      }
    },
    getStorefrontApp: async () => {
      try {
        const mod = await import("./AgentCapabilityService_D80kP5vr.mjs").then((n) => n.i);
        return mod.default?.storefront || mod.storefront || mod.sfApp;
      } catch (e) {
        return null;
      }
    },
    getManifest: async () => MANIFEST$2,
    getInit: async () => (await import("./AgentCapabilityService_D80kP5vr.mjs").then((n) => n.i).catch(() => ({}))).default?.init,
    frontend: aiSkillMarketAdminUI
  },
  "lowcode-deployer": {
    manifest: MANIFEST$1,
    getAdminApp: async () => {
      try {
        const mod = await import("./index_BGJvfZNp.mjs");
        return mod.default?.admin || mod.admin || mod.adminApp;
      } catch (e) {
        console.error("❌ [Registry] Failed to load admin app for lowcode-deployer:", e);
        return null;
      }
    },
    getStorefrontApp: async () => {
      try {
        const mod = await import("./index_BGJvfZNp.mjs");
        return mod.default?.storefront || mod.storefront || mod.sfApp;
      } catch (e) {
        return null;
      }
    },
    getManifest: async () => MANIFEST$1,
    getInit: async () => (await import("./index_BGJvfZNp.mjs").catch(() => ({}))).default?.init,
    frontend: lowcodeDeployerAdminUI
  },
  "oauth-login": {
    manifest: MANIFEST,
    getAdminApp: async () => {
      try {
        const mod = await import("./index_UBzxwFXJ.mjs");
        return mod.default?.admin || mod.admin || mod.adminApp;
      } catch (e) {
        console.error("❌ [Registry] Failed to load admin app for oauth-login:", e);
        return null;
      }
    },
    getStorefrontApp: async () => {
      try {
        const mod = await import("./index_UBzxwFXJ.mjs");
        return mod.default?.storefront || mod.storefront || mod.sfApp;
      } catch (e) {
        return null;
      }
    },
    getManifest: async () => MANIFEST,
    getInit: async () => (await import("./index_UBzxwFXJ.mjs").catch(() => ({}))).default?.init,
    frontend: oauthLoginAdminUI
  }
};
export {
  PLUGIN_CODE_REGISTRY as P
};
