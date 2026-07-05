globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { R as RefreshCcw, S as ShieldAlert, $ as $$DashboardLayout } from "./DashboardLayout_CJzzDslR.mjs";
import { j as jsxDevRuntimeExports } from "./useAdminPermissions_8aANvvWm.mjs";
import { P as PLUGIN_CODE_REGISTRY } from "./auto-registry.gen_Dt3LQRuG.mjs";
import { L as Lock } from "./shield-check_x8y0ttEW.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const PluginPageContainer = ({ slug }) => {
  const [status, setStatus] = reactExports.useState(null);
  const [manifest, setManifest] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const bundle = PLUGIN_CODE_REGISTRY[slug];
  reactExports.useEffect(() => {
    const checkStatus = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/v1/plugins/admin/available");
        if (!res.ok) throw new Error("无法校验插件运行状态");
        const { data } = await res.json();
        const p = data.find((item) => item.slug === slug);
        if (!p) {
          setError("PLUGIN_NOT_REGISTERED");
        } else {
          setStatus({ isEnabled: p.isEnabled, isInstalled: p.isInstalled });
          if (bundle) {
            const m = await bundle.getManifest();
            setManifest(m);
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    checkStatus();
  }, [slug, bundle]);
  if (loading) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center min-h-[400px]", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCcw, { className: "animate-spin text-blue-500 mb-2", size: 24 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 font-mono tracking-tighter", children: "VERIFYING ASSET STATUS..." }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, void 0);
  }
  if (!bundle || error === "PLUGIN_NOT_REGISTERED") {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center min-h-[500px] border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldAlert, { size: 48, className: "text-slate-300 mb-4" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-lg font-bold text-slate-700", children: "未定义的扩展资产" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500 mt-1 max-w-xs text-center px-4", children: [
        "标识码为 ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { children: slug }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
          lineNumber: 70,
          columnNumber: 16
        }, void 0),
        " 的资产未在系统内完成登记，或物理代码已丢失。"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, void 0);
  }
  if (status && !status.isEnabled) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center min-h-[500px] rounded-3xl bg-white shadow-xl shadow-slate-100 border border-slate-100 animate-in zoom-in-95 duration-300", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { size: 32, className: "text-orange-500" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xl font-black text-slate-800 tracking-tight", children: "插件功能已冻结" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500 mt-2 max-w-sm text-center px-8 leading-relaxed", children: [
        "管理员已在“插件管理”中心停用了 ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: manifest?.name || slug }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
          lineNumber: 85,
          columnNumber: 29
        }, void 0),
        " 的所有运行入口。请先开启该插件后再尝试访问。"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "/admin/plugins", className: "px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all", children: "返回管理中心" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 88,
        columnNumber: 12
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, void 0);
  }
  const PluginComponent = bundle.frontend;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center min-h-[400px]", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCcw, { className: "animate-spin text-blue-500 mb-2", size: 24 }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-400 font-mono tracking-tighter uppercase", children: [
      "Initializing ",
      slug,
      "..."
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PluginComponent, {}, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, void 0) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, void 0);
};
function getStaticPaths() {
  return [];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const permissions = Astro2.locals.adminPermissions || [];
  const bundle = slug ? PLUGIN_CODE_REGISTRY[slug] : null;
  const manifest = bundle ? await bundle.getManifest() : null;
  const pluginPermissionSlugs = Array.isArray(manifest?.permissions) ? manifest.permissions.map((item) => String(item?.slug || "").trim()).filter(Boolean) : [];
  const viewPermissionSlugs = pluginPermissionSlugs.filter((item) => item.endsWith(".view"));
  const viewPermissions = Array.from(/* @__PURE__ */ new Set([
    "plugins.view",
    "plugins.manage",
    "role.manage",
    ...viewPermissionSlugs.length > 0 ? viewPermissionSlugs : pluginPermissionSlugs
  ]));
  if (!hasPermission(permissions, viewPermissions)) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": `插件管理: ${slug}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PluginPageContainer", PluginPageContainer, { "slug": slug, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/PluginPageContainer", "client:component-export": "PluginPageContainer" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/plugins/[slug].astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/plugins/[slug].astro";
const $$url = "/admin/plugins/[slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
