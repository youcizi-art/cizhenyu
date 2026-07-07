globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { a as renderComponent } from "./worker-entry_DDBDk8oL.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_Dga_YKQx.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, [`collection:${slug}:view`, "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": `集合列表: ${slug}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorBoundary", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/ui/ErrorBoundary", "client:component-export": "ErrorBoundary" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentManagement", null, { "client:only": "react", "slug": slug, "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/ContentManagement", "client:component-export": "ContentManagement" })} ` })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/collections/[slug].astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/collections/[slug].astro";
const $$url = "/admin/collections/[slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
