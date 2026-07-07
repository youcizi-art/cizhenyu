globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { a as renderComponent } from "./worker-entry_DDBDk8oL.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_Dga_YKQx.mjs";
import { M as MediaPicker } from "./chat-workspace_DyCtoeYY.mjs";
const $$Media = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "附件管理中心" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"> ${renderComponent($$result2, "MediaPicker", MediaPicker, { "client:load": true, "mode": "manager", "title": "全站附件中心", "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker", "client:component-export": "MediaPicker" })} </div> ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/media.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/media.astro";
const $$url = "/admin/media";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Media,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
