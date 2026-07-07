globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { a as renderComponent } from "./worker-entry_DwrWQjkq.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_Cf3rFJx6.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const $$Database = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Database;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["database.view", "database.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "数据库管理 (D1)" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorBoundary", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/ui/ErrorBoundary", "client:component-export": "ErrorBoundary" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DatabaseManagement", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/DatabaseManagement", "client:component-export": "DatabaseManagement" })} ` })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/database.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/database.astro";
const $$url = "/admin/database";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Database,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
