globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_DhHjvv2h.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_COgjawil.mjs";
import { j as jsxDevRuntimeExports, B as Button, U as UI_LAYER, L as Loader2 } from "./Button_BI0VYNyM.mjs";
import { u as useToast, I as Input } from "./Input_B7IXRXvt.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./Tabs_CV9MXHxO.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./Select_Dfdkr-u8.mjs";
import { u as useAdminPermissions } from "./useAdminPermissions_DIK-OUdi.mjs";
import { C as ChevronDown } from "./chat-workspace_D0_ebyMN.mjs";
import { C as Check } from "./ConfirmDialog_De0oqLuK.mjs";
import { S as Save } from "./save_iUHUJVl7.mjs";
const SEMANTIC_TYPES = [
  { value: "seo_title", label: "SEO 标题", description: "页面的主标题，通常显示在浏览器标签和搜索结果中。", useDirectInput: false },
  { value: "seo_description", label: "SEO 描述", description: "页面的简短描述，显示在搜索结果中，吸引用户点击。", useDirectInput: false },
  { value: "canonical_url", label: "规范 URL", description: "页面的唯一、权威链接，用于避免重复内容问题。", useDirectInput: false },
  { value: "og_image", label: "社交分享图片", description: "在社交媒体（如微信、Facebook）上分享时显示的预览图。", useDirectInput: false },
  { value: "geo_latitude", label: "地理纬度", description: "内容相关的地理位置纬度坐标。", useDirectInput: true },
  { value: "geo_longitude", label: "地理经度", description: "内容相关的地理位置经度坐标。", useDirectInput: true }
];
const AUTO_FILL_CANDIDATES = {
  seo_title: ["seo_title", "title"],
  seo_description: ["seo_desc", "seo_description", "summary", "excerpt"],
  canonical_url: ["url_slug"],
  og_image: ["cover"]
};
const SeoGeoManagement = () => {
  const { toast } = useToast();
  const { hasPermission, loading: loadingPermissions } = useAdminPermissions();
  const canManage = hasPermission(["seo_geo.manage", "role.manage"]);
  const [collections, setCollections] = reactExports.useState([]);
  const [models, setModels] = reactExports.useState([]);
  const [enabledCollections, setEnabledCollections] = reactExports.useState([]);
  const [mappings, setMappings] = reactExports.useState({});
  const [activeTab, setActiveTab] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [isSavingEnabled, setIsSavingEnabled] = reactExports.useState(false);
  const [dropdownOpen, setDropdownOpen] = reactExports.useState(false);
  const dropdownRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  reactExports.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [collectionsRes, modelsRes, mappingsRes, enabledRes] = await Promise.all([
          fetch("/api/v1/rbac/collections"),
          fetch("/api/v1/rbac/models"),
          fetch("/api/v1/seo-geo/mappings"),
          fetch("/api/v1/seo-geo/enabled-collections")
        ]);
        if (!collectionsRes.ok || !modelsRes.ok || !mappingsRes.ok || !enabledRes.ok) {
          throw new Error("Failed to fetch initial data");
        }
        const collectionsData = await collectionsRes.json();
        const modelsData = await modelsRes.json();
        const mappingsData = await mappingsRes.json();
        const enabledData = await enabledRes.json();
        setCollections(collectionsData);
        setModels(modelsData);
        setMappings(mappingsData);
        setEnabledCollections(enabledData);
        if (enabledData.length > 0) {
          setActiveTab(enabledData[0]);
        } else if (collectionsData.length > 0) {
          setActiveTab(collectionsData[0].slug);
        }
      } catch (error) {
        toast({
          title: "错误",
          description: "加载 SEO/GEO 配置数据失败。",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [toast]);
  const handleMappingChange = (collectionSlug, semanticType, field, value) => {
    setMappings((prev) => ({
      ...prev,
      [collectionSlug]: {
        ...prev[collectionSlug],
        [semanticType]: {
          ...prev[collectionSlug]?.[semanticType],
          [field]: value
        }
      }
    }));
  };
  const handleSave = async (collectionSlug) => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/v1/seo-geo/mappings/${collectionSlug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mappings[collectionSlug] || {})
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok || payload?.success !== true) {
        throw new Error(payload?.error || "Failed to save mappings");
      }
      toast({
        title: "成功",
        description: `集合 [${collectionSlug}] 的 SEO/GEO 映射规则已保存。`
      });
    } catch (error) {
      toast({
        title: "错误",
        description: error instanceof Error ? error.message : "保存失败，请稍后重试。",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };
  const handleToggleCollection = (slug) => {
    if (enabledCollections.includes(slug)) {
      setEnabledCollections((prev) => prev.filter((s) => s !== slug));
    } else {
      setEnabledCollections((prev) => [...prev, slug]);
    }
  };
  const handleSaveEnabledCollections = async () => {
    setIsSavingEnabled(true);
    try {
      const res = await fetch("/api/v1/seo-geo/enabled-collections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collectionSlugs: enabledCollections })
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok || payload?.success !== true) {
        throw new Error(payload?.error || "Failed to save enabled collections");
      }
      if (enabledCollections.length > 0 && !enabledCollections.includes(activeTab)) {
        setActiveTab(enabledCollections[0]);
      }
      setDropdownOpen(false);
      toast({
        title: "成功",
        description: "已更新启用的集合列表。"
      });
    } catch (error) {
      toast({
        title: "错误",
        description: error instanceof Error ? error.message : "保存失败，请稍后重试。",
        variant: "destructive"
      });
    } finally {
      setIsSavingEnabled(false);
    }
  };
  const getModelFieldsByCollectionSlug = (collectionSlug) => {
    const currentCollection = collections.find((c) => c.slug === collectionSlug);
    if (!currentCollection) return [];
    const currentModel = models.find((m) => m.id === currentCollection.modelId);
    if (!currentModel || !currentModel.fieldsJson) return [];
    return currentModel.fieldsJson;
  };
  const handleAutoFill = (collectionSlug) => {
    const modelFields = getModelFieldsByCollectionSlug(collectionSlug);
    if (!Array.isArray(modelFields) || modelFields.length === 0) {
      toast({
        title: "错误",
        description: "当前集合未找到可匹配的模型字段。",
        variant: "destructive"
      });
      return;
    }
    const fieldNameMap = /* @__PURE__ */ new Map();
    modelFields.forEach((field) => {
      if (field?.name) {
        fieldNameMap.set(String(field.name).trim().toLowerCase(), field.name);
      }
    });
    const nextMappings = {};
    let matchedCount = 0;
    Object.entries(AUTO_FILL_CANDIDATES).forEach(([semanticType, candidates]) => {
      const matchedField = candidates.map((candidate) => fieldNameMap.get(candidate.toLowerCase())).find(Boolean);
      nextMappings[semanticType] = matchedField ? { sourceFieldName: matchedField } : { sourceFieldName: "" };
      if (matchedField) {
        matchedCount += 1;
      }
    });
    setMappings((prev) => ({
      ...prev,
      [collectionSlug]: {
        ...prev[collectionSlug],
        ...nextMappings
      }
    }));
    toast({
      title: "已自动预填",
      description: `已为当前集合匹配 ${matchedCount} 个 SEO 字段，请确认后再保存。`
    });
  };
  const collectionFields = reactExports.useMemo(() => {
    if (!activeTab || collections.length === 0 || models.length === 0) {
      return [];
    }
    const currentCollection = collections.find((c) => c.slug === activeTab);
    if (!currentCollection) return [];
    const currentModel = models.find((m) => m.id === currentCollection.modelId);
    if (!currentModel || !currentModel.fieldsJson) return [];
    return currentModel.fieldsJson.map((field) => ({
      value: field.name,
      label: `${field.label} (${field.name})`
    }));
  }, [activeTab, collections, models]);
  const visibleCollections = reactExports.useMemo(() => {
    return collections.filter((c) => enabledCollections.includes(c.slug));
  }, [collections, enabledCollections]);
  if (isLoading || loadingPermissions) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6", children: "加载中..." }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
      lineNumber: 261,
      columnNumber: 12
    }, void 0);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 bg-white rounded-lg shadow-sm", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl font-bold", children: "SEO/GEO 增强" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
        lineNumber: 267,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", ref: dropdownRef, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: "secondary",
            onClick: () => setDropdownOpen(!dropdownOpen),
            disabled: !canManage,
            children: [
              "选择要配置的集合",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "ml-2 h-4 w-4" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                lineNumber: 277,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 271,
            columnNumber: 11
          },
          void 0
        ),
        dropdownOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 ${UI_LAYER.page.flyout} max-h-96 overflow-y-auto`, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3 border-b border-slate-100", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500", children: "选择需要启用 SEO/GEO 增强的集合" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 283,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-2", children: collections.map((collection) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: "flex items-center justify-between p-2 hover:bg-slate-50 rounded cursor-pointer",
              onClick: () => handleToggleCollection(collection.slug),
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm", children: collection.name }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                  lineNumber: 292,
                  columnNumber: 21
                }, void 0),
                enabledCollections.includes(collection.slug) ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4 text-blue-600" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                  lineNumber: 294,
                  columnNumber: 23
                }, void 0) : null
              ]
            },
            collection.slug,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 287,
              columnNumber: 19
            },
            void 0
          )) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 285,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3 border-t border-slate-100", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              onClick: handleSaveEnabledCollections,
              disabled: isSavingEnabled,
              className: "w-full",
              children: [
                isSavingEnabled ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                  lineNumber: 305,
                  columnNumber: 38
                }, void 0) : null,
                "保存"
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 300,
              columnNumber: 17
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 299,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
          lineNumber: 281,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
        lineNumber: 270,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, void 0),
    visibleCollections.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsList, { className: "flex-wrap h-auto", children: visibleCollections.map((collection) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: collection.slug, className: "flex-shrink-0", children: collection.name }, collection.slug, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
        lineNumber: 318,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
        lineNumber: 316,
        columnNumber: 11
      }, void 0),
      visibleCollections.map((collection) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContent, { value: collection.slug, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 border border-slate-200 rounded-lg p-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: SEMANTIC_TYPES.map((type) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 items-center", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "md:col-span-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-semibold", children: type.label }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 331,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500 mt-1", children: type.description }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 332,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 330,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "md:col-span-2", children: type.useDirectInput ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              disabled: !canManage,
              value: mappings[collection.slug]?.[type.value]?.directValue || "",
              onChange: (e) => handleMappingChange(collection.slug, type.value, "directValue", e.target.value),
              placeholder: `输入${type.label}...`
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 336,
              columnNumber: 27
            },
            void 0
          ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Select,
            {
              disabled: !canManage,
              value: mappings[collection.slug]?.[type.value]?.sourceFieldName || "",
              onValueChange: (value) => handleMappingChange(collection.slug, type.value, "sourceFieldName", value),
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectTrigger, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectValue, { placeholder: "选择一个源字段..." }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                  lineNumber: 349,
                  columnNumber: 31
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                  lineNumber: 348,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectContent, { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "", children: "-- 不映射 --" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                    lineNumber: 352,
                    columnNumber: 31
                  }, void 0),
                  collectionFields.map((field) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: field.value, children: field.label }, field.value, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                    lineNumber: 354,
                    columnNumber: 33
                  }, void 0))
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
                  lineNumber: 351,
                  columnNumber: 29
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 343,
              columnNumber: 27
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 334,
            columnNumber: 23
          }, void 0)
        ] }, type.value, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
          lineNumber: 329,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
          lineNumber: 327,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex justify-end gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "secondary",
              onClick: () => handleAutoFill(collection.slug),
              disabled: !canManage,
              children: "一键设置"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 366,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => handleSave(collection.slug), disabled: !canManage || isSaving, children: [
            isSaving ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 374,
              columnNumber: 33
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
              lineNumber: 374,
              columnNumber: 85
            }, void 0),
            isSaving ? "保存中..." : "保存当前集合的设置"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
            lineNumber: 373,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
          lineNumber: 365,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
        lineNumber: 326,
        columnNumber: 15
      }, void 0) }, collection.slug, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
        lineNumber: 325,
        columnNumber: 13
      }, void 0))
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
      lineNumber: 315,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-12 text-slate-500", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "请在右上角选择要启用 SEO/GEO 增强的集合" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
      lineNumber: 384,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
      lineNumber: 383,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement.tsx",
    lineNumber: 265,
    columnNumber: 5
  }, void 0);
};
const $$SeoGeo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "SEO/GEO 增强" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SeoGeoManagement", SeoGeoManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/SeoGeoManagement", "client:component-export": "default" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/seo-geo.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/seo-geo.astro";
const $$url = "/admin/seo-geo";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SeoGeo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
