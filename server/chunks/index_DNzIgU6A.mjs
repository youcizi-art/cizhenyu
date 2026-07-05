globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { $ as $$DashboardLayout, D as Database } from "./DashboardLayout_CJzzDslR.mjs";
import { L as Layers } from "./agent-session-utils_DpT6INAb.mjs";
import { S as Settings } from "./settings_CgFC4cr_.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "管理概览" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group"> <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Database", Database, { "size": 48 })} </div> <p class="text-sm font-medium text-slate-500 mb-1">数据库模型</p> <div class="flex items-end justify-between"> <h3 class="text-3xl font-bold text-slate-900">正常</h3> <span class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">运行中</span> </div> </div> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group"> <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Layers", Layers, { "size": 48 })} </div> <p class="text-sm font-medium text-slate-500 mb-1">业务集合</p> <div class="flex items-end justify-between"> <h3 class="text-3xl font-bold text-slate-900">就绪</h3> <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">实时同步</span> </div> </div> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group"> <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Settings", Settings, { "size": 48 })} </div> <p class="text-sm font-medium text-slate-500 mb-1">系统状态</p> <div class="flex items-end justify-between"> <h3 class="text-3xl font-bold text-slate-900">健康</h3> <span class="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">检查正常</span> </div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div class="lg:col-span-2 space-y-6"> <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"> <div class="px-6 py-4 border-b border-slate-100 bg-slate-50/50"> <h3 class="font-semibold text-slate-800">快捷操作</h3> </div> <div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4"> <a href="/admin/collections" class="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center group"> <p class="font-medium text-sm text-slate-700 group-hover:text-blue-600">管理内容</p> </a> <a href="/admin/models" class="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center group"> <p class="font-medium text-sm text-slate-700 group-hover:text-blue-600">调整模型</p> </a> <a href="/admin/settings/general" class="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center group"> <p class="font-medium text-sm text-slate-700 group-hover:text-blue-600">系统设置</p> </a> </div> </div> </div> <div class="bg-blue-600 rounded-xl p-6 text-white shadow-lg shadow-blue-600/20"> <h3 class="font-bold text-lg mb-2">欢迎使用后台系统</h3> <p class="text-sm text-blue-100 leading-relaxed mb-4">
您的系统已准备就绪。可以通过左侧导航栏管理各功能模块。
</p> </div> </div> ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/index.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/index.astro";
const $$url = "/admin";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
