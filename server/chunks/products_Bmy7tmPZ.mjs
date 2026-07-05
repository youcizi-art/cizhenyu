globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_CJzzDslR.mjs";
const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "产品预览" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-8 text-slate-500">产品中心占位页面</div> ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/products.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/products.astro";
const $$url = "/admin/products";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
