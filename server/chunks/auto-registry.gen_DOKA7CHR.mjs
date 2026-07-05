globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as reactExports } from "./worker-entry_DhHjvv2h.mjs";
const MANIFEST$3 = {
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
const MANIFEST$2 = {
  slug: "cf-deployer",
  name: "Cloudflare 自动部署管理",
  description: "允许注册会员在会员中心提供其 Cloudflare 凭证，从而一键自动化克隆与部署其完全独立的站点。",
  version: "1.0.0",
  author: "Antigravity AI",
  isEnabled: true,
  permissions: [
    {
      slug: "cf-deployer.manage",
      name: "管理 Cloudflare 部署",
      description: "允许会员管理和一键克隆独立的 Cloudflare Worker 系统。"
    }
  ],
  // 💡 会员中心自适应渲染引擎元数据 (自适应路由与菜单挂载点)
  memberMenu: {
    title: "应用部署",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    path: "cf-deployer"
  },
  // 💡 彻底清空 injections 侵入式注入，秉持 microkernel 100% 零侵入铁律
  injections: []
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
const aiSkillMarketAdminUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_yB5v24r7.mjs").catch(() => ({ default: () => null }))) : (() => null);
const cfDeployerAdminUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_nsarcjR_.mjs").catch(() => ({ default: () => null }))) : (() => null);
const cfDeployerMemberUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_CJSOBJRM.mjs").catch(() => ({ default: () => null }))) : (() => null);
const lowcodeDeployerAdminUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_PjxYqFez.mjs").catch(() => ({ default: () => null }))) : (() => null);
const oauthLoginAdminUI = typeof window !== "undefined" ? reactExports.lazy(() => import("./index_ClIfI2nv.mjs").catch(() => ({ default: () => null }))) : (() => null);
const PLUGIN_CODE_REGISTRY = {
  "ai-skill-market": {
    manifest: MANIFEST$3,
    getAdminApp: async () => {
      try {
        const mod = await import("./AgentCapabilityService_4lssCQgg.mjs").then((n) => n.i);
        return mod.default?.admin || mod.admin || mod.adminApp;
      } catch (e) {
        console.error("❌ [Registry] Failed to load admin app for ai-skill-market:", e);
        return null;
      }
    },
    getStorefrontApp: async () => {
      try {
        const mod = await import("./AgentCapabilityService_4lssCQgg.mjs").then((n) => n.i);
        return mod.default?.storefront || mod.storefront || mod.sfApp;
      } catch (e) {
        return null;
      }
    },
    getManifest: async () => MANIFEST$3,
    getInit: async () => (await import("./AgentCapabilityService_4lssCQgg.mjs").then((n) => n.i).catch(() => ({}))).default?.init,
    frontend: aiSkillMarketAdminUI
  },
  "cf-deployer": {
    manifest: MANIFEST$2,
    memberFrontend: cfDeployerMemberUI,
    getAdminApp: async () => {
      try {
        const mod = await import("./index_DxtYix7o.mjs");
        return mod.default?.admin || mod.admin || mod.adminApp;
      } catch (e) {
        console.error("❌ [Registry] Failed to load admin app for cf-deployer:", e);
        return null;
      }
    },
    getStorefrontApp: async () => {
      try {
        const mod = await import("./index_DxtYix7o.mjs");
        return mod.default?.storefront || mod.storefront || mod.sfApp;
      } catch (e) {
        return null;
      }
    },
    getManifest: async () => MANIFEST$2,
    getInit: async () => (await import("./index_DxtYix7o.mjs").catch(() => ({}))).default?.init,
    frontend: cfDeployerAdminUI
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
        const mod = await import("./index_BpwyckgX.mjs");
        return mod.default?.admin || mod.admin || mod.adminApp;
      } catch (e) {
        console.error("❌ [Registry] Failed to load admin app for oauth-login:", e);
        return null;
      }
    },
    getStorefrontApp: async () => {
      try {
        const mod = await import("./index_BpwyckgX.mjs");
        return mod.default?.storefront || mod.storefront || mod.sfApp;
      } catch (e) {
        return null;
      }
    },
    getManifest: async () => MANIFEST,
    getInit: async () => (await import("./index_BpwyckgX.mjs").catch(() => ({}))).default?.init,
    frontend: oauthLoginAdminUI
  }
};
const initializeAllPlugins = () => {
  Object.keys(PLUGIN_CODE_REGISTRY).forEach(async (slug) => {
    const init = await PLUGIN_CODE_REGISTRY[slug].getInit();
    if (init) init();
  });
};
export {
  PLUGIN_CODE_REGISTRY as P,
  initializeAllPlugins as i
};
