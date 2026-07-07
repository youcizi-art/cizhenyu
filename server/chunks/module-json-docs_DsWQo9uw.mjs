globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { a as renderComponent } from "./worker-entry_DDBDk8oL.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_Dga_YKQx.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const $$ModuleJsonDocs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ModuleJsonDocs;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["sites.view", "sites.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  const exampleJson = JSON.stringify({
    content_category: {
      name: "内容分类",
      slug: "content_category",
      description: "文章内容的分类体系",
      fields: [
        { name: "name", type: "text", label: "分类名称", required: true, isListDisplay: true },
        { name: "slug", type: "text", label: "分类标识", required: true, isListDisplay: true }
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
          type: "relation",
          label: "内容分类",
          relationConfig: {
            collectionSlug: "content_category",
            displayField: "name"
          },
          multiple: true,
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
  }, null, 2);
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "模块模板 JSON 说明" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"> <div class="space-y-2"> <h1 class="text-2xl font-semibold text-slate-900">模块模板 JSON 编写说明</h1> <p class="text-sm leading-6 text-slate-600">
这里填写的是一组可直接用于 \`/admin/sites\` 快速注入的数据模型定义，而不是资源构件 ID。
        它的目标是帮助你批量生成本来也可以在 \`/admin/models\` 与 \`/admin/collections\` 中手工配置的结构。
</p> </div> <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-4"> <h2 class="text-sm font-semibold text-slate-900">职责边界</h2> <div class="mt-2 space-y-2 text-sm leading-6 text-slate-700"> <p>\`/admin/sites\` 只负责模块模板 JSON 注入、组合、预检和批量执行，它不是独立于模型管理之外的第二套系统。</p> <p>模型字段能力本身必须保持在 \`/admin/models\` 可手动配置的通用模型能力范围内，不要在这里设计只能靠特殊逻辑生效的字段。</p> <p>如果你愿意，完全可以跳过 \`/admin/sites\`，直接在 \`/admin/models\` 与 \`/admin/collections\` 中手工完成同等配置。</p> </div> </div> <div class="grid gap-4 md:grid-cols-2"> <div class="rounded-xl border border-slate-200 bg-slate-50 p-4"> <h2 class="text-sm font-semibold text-slate-900">顶层结构</h2> <p class="mt-2 text-sm leading-6 text-slate-600">
顶层必须是一个对象，键建议直接使用模型 slug，例如 \`page\`、\`article\`、\`landing_form\`。
</p> </div> <div class="rounded-xl border border-slate-200 bg-slate-50 p-4"> <h2 class="text-sm font-semibold text-slate-900">单个模型必填项</h2> <p class="mt-2 text-sm leading-6 text-slate-600">
每个模型至少需要 \`name\`、\`slug\`、\`fields\`。其中 \`fields\` 必须是数组，且每个字段至少包含 \`name\`、\`type\`、\`label\`。
</p> </div> </div> <div class="rounded-xl border border-blue-200 bg-blue-50 p-4"> <h2 class="text-sm font-semibold text-slate-900">关联关系写法</h2> <div class="mt-2 space-y-2 text-sm leading-6 text-slate-700"> <p>如果模型之间存在“所属分类 / 父子级 / 归属 / 引用 / 作者 / 关联商品”这类关系，不能只建两个模型，必须把关联关系一起写出来。</p> <p>标准写法包含三部分：字段 \`type: "relation"\`、字段内的 \`relationConfig\`、以及模型级 \`fieldConfig\` 中对应字段的目标映射。</p> <p>如果当前模型依赖另一个模型才能成立，还需要在模型对象中声明 \`dependencies\`，例如文章依赖内容分类。</p> </div> </div> <div class="rounded-xl border border-violet-200 bg-violet-50 p-4"> <h2 class="text-sm font-semibold text-slate-900">隐藏字段与生成规则</h2> <div class="mt-2 space-y-2 text-sm leading-6 text-slate-700"> <p>模型 JSON 只描述字段本身，不再内置 SEO 推荐字段模板或字段名约定。</p> <p>如果某个字段需要隐藏，请在模型字段上设置 \`ui.hidden = true\`；它的值如何生成，应在 \`/admin/collections\` 的高级字段配置中选择系统预制模式。</p> <p>当前预制模式支持最终访问路径、摘要、字段复制、模板拼接、数字计算。这样既能保持模型通用性，也能降低用户理解成本。</p> </div> </div> <div class="rounded-xl border border-slate-200 p-4"> <h2 class="text-sm font-semibold text-slate-900">推荐示例</h2> <p class="mt-2 text-sm leading-6 text-slate-600">
下面示例等价于一组可直接批量注入的模型定义，可以作为模块模板 JSON 的起点。
</p> <pre class="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-100"><code>${exampleJson}</code></pre> </div> <div class="grid gap-4 md:grid-cols-2"> <div class="rounded-xl border border-slate-200 p-4"> <h2 class="text-sm font-semibold text-slate-900">常用字段说明</h2> <ul class="mt-2 space-y-2 text-sm leading-6 text-slate-600"> <li><span class="font-medium text-slate-900">name</span>：模型名称，展示在后台菜单与集合标题中。</li> <li><span class="font-medium text-slate-900">slug</span>：模型唯一标识，会作为模型和集合的 slug 使用。</li> <li><span class="font-medium text-slate-900">description</span>：模型说明。</li> <li><span class="font-medium text-slate-900">menuGroup</span>：后台菜单分组。</li> <li><span class="font-medium text-slate-900">icon</span>：后台菜单图标名称。</li> <li><span class="font-medium text-slate-900">menuOrder</span>：菜单排序。</li> <li><span class="font-medium text-slate-900">fieldConfig</span>：字段附加配置，例如 API 暴露、选项集等。</li> </ul> </div> <div class="rounded-xl border border-slate-200 p-4"> <h2 class="text-sm font-semibold text-slate-900">字段数组说明</h2> <ul class="mt-2 space-y-2 text-sm leading-6 text-slate-600"> <li><span class="font-medium text-slate-900">name</span>：字段唯一标识。</li> <li><span class="font-medium text-slate-900">type</span>：字段类型，例如 \`text\`、\`textarea\`、\`select\`、\`image\`、\`multi_image\`、\`richtext\`、\`json\`、\`relation\`。</li> <li><span class="font-medium text-slate-900">label</span>：后台显示名。</li> <li><span class="font-medium text-slate-900">required</span>：是否必填。</li> <li><span class="font-medium text-slate-900">isListDisplay</span>：是否显示在列表页。</li> <li><span class="font-medium text-slate-900">relationConfig</span>：关联字段时必填目标集合，例如 \`collectionSlug\` 和 \`displayField\`。</li> <li><span class="font-medium text-slate-900">ui.hidden</span>：可选，用于声明该字段在录入表单中隐藏；具体如何生成值，应在集合配置中选择预制模式。</li> </ul> </div> </div> <div class="grid gap-4 md:grid-cols-2"> <div class="rounded-xl border border-slate-200 p-4"> <h2 class="text-sm font-semibold text-slate-900">关联字段最小写法</h2> <pre class="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-100"><code>${`{
  "name": "taxonomy_ids",
  "type": "relation_multi",
  "label": "内容分类",
  "relationConfig": {
    "collectionSlug": "content_category",
    "displayField": "name"
  }
}`}</code></pre> </div> <div class="rounded-xl border border-slate-200 p-4"> <h2 class="text-sm font-semibold text-slate-900">模型级映射与依赖</h2> <pre class="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-100"><code>${`{
  "fieldConfig": {
    "taxonomy_ids": {
      "target_slug": "content_category",
      "display_field": "name",
      "targetCollectionSlug": "content_category",
      "displayField": "name"
    }
  },
  "dependencies": ["content_category"]
}`}</code></pre> </div> </div> <div class="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
提示：这里要求的是标准 JSON，不是 JavaScript 对象字面量。请使用双引号包裹键名和字符串值。
</div> </div> ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/sites/module-json-docs.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/sites/module-json-docs.astro";
const $$url = "/admin/sites/module-json-docs";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ModuleJsonDocs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
