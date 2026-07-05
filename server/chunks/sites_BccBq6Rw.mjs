globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { d as Pencil, $ as $$DashboardLayout } from "./DashboardLayout_CJzzDslR.mjs";
import { h as useAdminPermissions, j as jsxDevRuntimeExports, I as Input, B as Button, L as Loader2, T as Trash2, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, D as DialogFooter, t as toast } from "./useAdminPermissions_8aANvvWm.mjs";
import { C as Card, a as CardHeader, b as CardTitle, d as CardDescription, c as CardContent, e as CardFooter } from "./Card_DzPhX3RV.mjs";
import { B as Badge } from "./Badge_CKfcU1_S.mjs";
import { R as RefreshCw, B as Bot, f as Send, c as ConfirmDialog } from "./chat-workspace_BThR_WE3.mjs";
import { L as Label } from "./Label_zq5CgPId.mjs";
import { C as Checkbox } from "./Checkbox_4vP3zo9F.mjs";
import { S as Sparkles, L as Layers, E as Eye } from "./agent-session-utils_DpT6INAb.mjs";
import { P as Plus } from "./settings_CgFC4cr_.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const defaultAiPromptText = "例如：帮我生成一个品牌官网落地页模块模板，包含独立页面、联系表单、可隐藏的系统字段，并暴露 schema 与 data API。";
const defaultModuleJsonText = JSON.stringify({
  page: {
    name: "独立页面",
    slug: "page",
    description: "定制化页面，如 About Us、Contact、Landing Page 等",
    fields: [
      { name: "title", type: "text", label: "页面标题", required: true, isListDisplay: true },
      { name: "content", type: "richtext", label: "页面内容" },
      { name: "summary", type: "textarea", label: "摘要" }
    ],
    menuGroup: "内容管理",
    icon: "Layout",
    menuOrder: 2,
    fieldConfig: {
      __api_policy: {
        enabled: true,
        allowed_methods: ["schema", "data"],
        security: { allowed_domains: ["*"], rate_limit_per_min: 0 },
        field_permissions: {
          read_whitelist: ["title", "content", "summary"],
          write_whitelist: []
        }
      }
    }
  }
}, null, 2);
const emptyModuleForm = {
  id: "",
  source: "custom",
  name: "",
  description: "",
  tagsText: "",
  jsonText: defaultModuleJsonText
};
const parseTags = (value) => Array.from(
  new Set(
    value.split(/[，,\n]/).map((item) => item.trim()).filter(Boolean).slice(0, 12)
  )
);
const formatTags = (tags) => tags.join("，");
const textareaClassName = "min-h-[96px] w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500";
const MODULES_PAGE_SIZE = 12;
const extractJsonCandidate = (content) => {
  const trimmed = content.trim();
  if (!trimmed) return "";
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced?.[1]) return fenced[1].trim();
  return trimmed;
};
const validateModuleConfig = (jsonText) => {
  if (!jsonText.trim()) {
    return { error: "请输入模块 JSON 配置" };
  }
  try {
    const parsed = JSON.parse(jsonText);
    if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
      return { error: "JSON 必须是对象格式" };
    }
    const entries = Object.entries(parsed);
    if (entries.length === 0) {
      return { error: "模型组 JSON 不能为空" };
    }
    const normalizedEntries = entries.map(([key, value]) => {
      if (!value || Array.isArray(value) || typeof value !== "object") {
        throw new Error(`模型 ${key} 必须是对象`);
      }
      const definition = value;
      const name = String(definition.name || "").trim();
      const slug = String(definition.slug || key).trim();
      if (!name || !slug) {
        throw new Error(`模型 ${key} 缺少 name 或 slug`);
      }
      if (!Array.isArray(definition.fields) || definition.fields.length === 0) {
        throw new Error(`模型 ${slug} 至少需要一个字段定义`);
      }
      const fields = definition.fields.map((field, index) => {
        if (!field || Array.isArray(field) || typeof field !== "object") {
          throw new Error(`模型 ${slug} 的第 ${index + 1} 个字段格式无效`);
        }
        const rawField = field;
        const fieldName = String(rawField.name || "").trim();
        const fieldType = String(rawField.type || "").trim();
        const fieldLabel = String(rawField.label || "").trim();
        if (!fieldName || !fieldType || !fieldLabel) {
          throw new Error(`模型 ${slug} 的第 ${index + 1} 个字段缺少 name/type/label`);
        }
        return {
          ...rawField,
          name: fieldName,
          type: fieldType,
          label: fieldLabel
        };
      });
      return [slug, {
        ...definition,
        name,
        slug,
        fields
      }];
    });
    return {
      data: Object.fromEntries(normalizedEntries)
    };
  } catch (error) {
    return { error: error.message || "JSON 格式不正确" };
  }
};
const buildModuleJsonText = (module) => JSON.stringify(module.modelGroupJson || {}, null, 2);
const SiteInitializerManager = () => {
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canManageSites = hasPermission2(["sites.manage", "role.manage"]);
  const [catalog, setCatalog] = reactExports.useState({ systemModules: [] });
  const [loading, setLoading] = reactExports.useState(true);
  const [moduleSearchInput, setModuleSearchInput] = reactExports.useState("");
  const [moduleSearchKeyword, setModuleSearchKeyword] = reactExports.useState("");
  const [moduleFilters, setModuleFilters] = reactExports.useState({
    installed: false,
    uninstalled: false,
    preset: false,
    custom: false
  });
  const [modulePage, setModulePage] = reactExports.useState(1);
  const [moduleDialogMode, setModuleDialogMode] = reactExports.useState(null);
  const [moduleForm, setModuleForm] = reactExports.useState(emptyModuleForm);
  const [savingModule, setSavingModule] = reactExports.useState(false);
  const [initializingId, setInitializingId] = reactExports.useState(null);
  const [planningModuleId, setPlanningModuleId] = reactExports.useState(null);
  const [modulePlan, setModulePlan] = reactExports.useState(null);
  const [isAiDialogOpen, setIsAiDialogOpen] = reactExports.useState(false);
  const [aiMessages, setAiMessages] = reactExports.useState([]);
  const [aiInput, setAiInput] = reactExports.useState(defaultAiPromptText);
  const [aiLoading, setAiLoading] = reactExports.useState(false);
  const [deleteDialog, setDeleteDialog] = reactExports.useState(null);
  const [deletingItem, setDeletingItem] = reactExports.useState(false);
  const [uninstallDialog, setUninstallDialog] = reactExports.useState(null);
  const [uninstallingItem, setUninstallingItem] = reactExports.useState(false);
  const [planningUninstallId, setPlanningUninstallId] = reactExports.useState(null);
  const [uninstallPlan, setUninstallPlan] = reactExports.useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const catalogResponse = await fetch("/api/v1/system/site-initializer/catalog");
      const catalogResult = await catalogResponse.json();
      if (!catalogResponse.ok || !catalogResult.success) {
        throw new Error(catalogResult.error || "加载初始化目录失败");
      }
      setCatalog(catalogResult.data);
    } catch (error) {
      toast({
        title: "加载失败",
        description: error.message || "无法获取模块模板注入配置",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchData();
  }, []);
  const systemModuleMap = reactExports.useMemo(
    () => new Map(catalog.systemModules.map((item) => [item.id, item])),
    [catalog.systemModules]
  );
  const normalizedModuleSearchKeyword = moduleSearchKeyword.trim().toLowerCase();
  const filteredSystemModules = reactExports.useMemo(() => {
    let filtered = catalog.systemModules;
    const { installed, uninstalled, preset, custom } = moduleFilters;
    if (installed || uninstalled || preset || custom) {
      filtered = filtered.filter((module) => {
        let matchInstall = true;
        if (installed && !uninstalled) matchInstall = module.isInstalled;
        else if (uninstalled && !installed) matchInstall = !module.isInstalled;
        let matchSource = true;
        if (preset && !custom) matchSource = module.source === "preset";
        else if (custom && !preset) matchSource = module.source === "custom";
        return matchInstall && matchSource;
      });
    }
    if (!normalizedModuleSearchKeyword) {
      return filtered;
    }
    return filtered.filter((module) => {
      const haystack = [
        module.name,
        module.description,
        module.category,
        module.target,
        ...module.tags || [],
        ...module.collectionSlugs || [],
        ...module.resolvedUnitIds || []
      ].filter(Boolean).join(" ").toLowerCase();
      return haystack.includes(normalizedModuleSearchKeyword);
    });
  }, [catalog.systemModules, normalizedModuleSearchKeyword, moduleFilters]);
  const moduleTotalPages = Math.max(1, Math.ceil(filteredSystemModules.length / MODULES_PAGE_SIZE));
  const safeModulePage = Math.min(modulePage, moduleTotalPages);
  const paginatedSystemModules = reactExports.useMemo(() => {
    const startIndex = (safeModulePage - 1) * MODULES_PAGE_SIZE;
    return filteredSystemModules.slice(startIndex, startIndex + MODULES_PAGE_SIZE);
  }, [filteredSystemModules, safeModulePage]);
  reactExports.useEffect(() => {
    if (modulePage > moduleTotalPages) {
      setModulePage(moduleTotalPages);
    }
  }, [modulePage, moduleTotalPages]);
  const executeModuleSearch = () => {
    setModuleSearchKeyword(moduleSearchInput.trim());
    setModulePage(1);
  };
  const resetModuleSearch = () => {
    setModuleSearchInput("");
    setModuleSearchKeyword("");
    setModuleFilters({ installed: false, uninstalled: false, preset: false, custom: false });
    setModulePage(1);
  };
  const moduleJsonValidation = reactExports.useMemo(() => validateModuleConfig(moduleForm.jsonText), [moduleForm.jsonText]);
  const moduleDialogReadOnly = moduleDialogMode === "view" || moduleDialogMode === "init";
  const selectedModule = reactExports.useMemo(
    () => moduleForm.id ? systemModuleMap.get(moduleForm.id) || null : null,
    [moduleForm.id, systemModuleMap]
  );
  const openModuleDialog = (mode, module) => {
    if (!canManageSites && mode !== "view") {
      return;
    }
    if (!module) {
      setModulePlan(null);
      setPlanningModuleId(null);
      setModuleForm(emptyModuleForm);
      setModuleDialogMode(mode);
      return;
    }
    setModulePlan(null);
    setPlanningModuleId(null);
    setModuleForm({
      id: module.id,
      source: module.source,
      name: module.name,
      description: module.description,
      tagsText: formatTags(module.tags),
      jsonText: buildModuleJsonText(module)
    });
    setModuleDialogMode(mode);
  };
  reactExports.useEffect(() => {
    const fetchModulePlan = async () => {
      if (moduleDialogMode !== "init" || !selectedModule) {
        return;
      }
      setPlanningModuleId(selectedModule.id);
      setModulePlan(null);
      try {
        const response = await fetch("/api/v1/system/site-initializer/plan/module", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ systemModuleIds: [selectedModule.id] })
        });
        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.error || "预检失败");
        }
        setModulePlan(result.data || null);
      } catch (error) {
        setModulePlan(null);
        toast({
          title: "预检失败",
          description: error.message || "无法获取执行计划",
          variant: "destructive"
        });
      } finally {
        setPlanningModuleId(null);
      }
    };
    fetchModulePlan();
  }, [moduleDialogMode, selectedModule?.id]);
  const openAiDialog = () => {
    if (!canManageSites) return;
    setIsAiDialogOpen(true);
    if (!aiInput.trim()) {
      setAiInput(defaultAiPromptText);
    }
    if (aiMessages.length === 0) {
      setAiMessages([
        {
          role: "assistant",
          content: "请描述你要生成的模块模板，例如业务场景、需要哪些模型、字段、菜单分组和 API 能力，我会帮你生成可直接写入的模型组 JSON。"
        }
      ]);
    }
  };
  const sendAiPrompt = async () => {
    if (!canManageSites) return;
    const prompt = aiInput.trim();
    if (!prompt || aiLoading) return;
    const nextMessages = [...aiMessages, { role: "user", content: prompt }];
    setAiMessages(nextMessages);
    setAiLoading(true);
    const callAiAndValidate = async (isRetry = false, lastContent = "", validationError = "") => {
      try {
        const prepRes = await fetch("/api/v1/system/site-initializer/generate-module-json/prepare", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, messages: nextMessages, isRetry, lastContent, validationError })
        });
        const prepResult = await prepRes.json();
        if (!prepRes.ok || !prepResult.success) {
          throw new Error(prepResult.error || "AI 准备阶段失败");
        }
        const { url, headers, body, providerType } = prepResult.data;
        const aiRes = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        });
        if (!aiRes.ok) {
          const errText = await aiRes.text();
          throw new Error(`AI 生成失败 (${aiRes.status})`);
        }
        const json = await aiRes.json();
        let content = "";
        if (providerType === "workers-ai") {
          content = String(json.result?.response || "");
        } else {
          content = String(json.choices?.[0]?.message?.content || "");
        }
        const valRes = await fetch("/api/v1/system/site-initializer/generate-module-json/validate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content, prompt, messages: nextMessages })
        });
        const valResult = await valRes.json();
        if (!valRes.ok || !valResult.success) {
          throw new Error(valResult.error || "校验不通过");
        }
        if (valResult.data.valid) {
          setAiMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: String(valResult.data.content || "").trim() || "AI 未返回内容，请重试。"
            }
          ]);
        } else if (!isRetry && valResult.data.needsRetry) {
          await callAiAndValidate(true, valResult.data.lastContent, valResult.data.validationError);
        } else {
          throw new Error(valResult.data.validationError || "修复失败，JSON 不合格");
        }
      } catch (error) {
        setAiMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `AI 生成失败：${error.message || "请检查全局 AI 配置"}`
          }
        ]);
        toast({
          title: "AI 生成失败",
          description: error.message || "请检查 /admin/settings/ai 中的模块模板生成模型配置",
          variant: "destructive"
        });
      }
    };
    await callAiAndValidate();
    setAiLoading(false);
  };
  const latestAssistantJson = reactExports.useMemo(() => {
    const latestAssistant = [...aiMessages].reverse().find((item) => item.role === "assistant");
    if (!latestAssistant) return null;
    const candidate = extractJsonCandidate(latestAssistant.content);
    const validation = validateModuleConfig(candidate);
    if (validation.error || !validation.data) return null;
    return candidate;
  }, [aiMessages]);
  const applyAiJsonToModuleForm = () => {
    if (!canManageSites) {
      return;
    }
    if (!latestAssistantJson) {
      toast({
        title: "无法应用",
        description: "最后一条 AI 回复不是有效的模型组 JSON",
        variant: "destructive"
      });
      return;
    }
    setModuleForm({
      ...emptyModuleForm,
      jsonText: latestAssistantJson
    });
    setModuleDialogMode("create");
    setIsAiDialogOpen(false);
    toast({
      title: "已写入表单",
      description: "AI 生成的 JSON 已填入模块模板新增表单"
    });
  };
  const [errorDialog, setErrorDialog] = reactExports.useState(null);
  const confirmDelete = async () => {
    if (!canManageSites || !deleteDialog) return;
    setDeletingItem(true);
    const { item } = deleteDialog;
    try {
      const endpoint = `/api/v1/system/site-initializer/modules/${item.id}`;
      const response = await fetch(endpoint, {
        method: "DELETE"
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "删除模块模板失败");
      }
      toast({
        title: "已删除",
        description: "删除成功"
      });
      setDeleteDialog(null);
      await fetchData();
    } catch (error) {
      setDeleteDialog(null);
      setErrorDialog({
        open: true,
        title: "模块模板删除受阻",
        message: error.message || "删除失败，可能存在数据残留"
      });
    } finally {
      setDeletingItem(false);
    }
  };
  const confirmUninstall = async () => {
    if (!canManageSites || !uninstallDialog) return;
    setUninstallingItem(true);
    const { item } = uninstallDialog;
    try {
      const endpoint = `/api/v1/system/site-initializer/modules/${item.id}/uninstall`;
      const response = await fetch(endpoint, {
        method: "POST"
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "卸载模块模板失败");
      }
      toast({
        title: "已卸载",
        description: "卸载成功"
      });
      setUninstallDialog(null);
      window.dispatchEvent(new CustomEvent("collections-updated"));
      await fetchData();
    } catch (error) {
      setUninstallDialog(null);
      setErrorDialog({
        open: true,
        title: "模块模板卸载受阻",
        message: error.message || "卸载失败，可能存在数据残留"
      });
    } finally {
      setUninstallingItem(false);
    }
  };
  reactExports.useEffect(() => {
    const fetchUninstallPlan = async () => {
      if (!uninstallDialog?.item?.id) {
        return;
      }
      setPlanningUninstallId(uninstallDialog.item.id);
      setUninstallPlan(null);
      try {
        const response = await fetch(`/api/v1/system/site-initializer/modules/${uninstallDialog.item.id}/uninstall/plan`, {
          method: "POST"
        });
        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.error || "卸载预检失败");
        }
        setUninstallPlan(result.data || null);
      } catch (error) {
        setUninstallPlan(null);
        toast({
          title: "卸载预检失败",
          description: error.message || "无法获取卸载计划",
          variant: "destructive"
        });
      } finally {
        setPlanningUninstallId(null);
      }
    };
    fetchUninstallPlan();
  }, [uninstallDialog?.item?.id]);
  const saveSystemModule = async () => {
    if (!canManageSites) return;
    if (!moduleForm.name.trim()) {
      return;
    }
    if (moduleJsonValidation.error || !moduleJsonValidation.data) {
      return;
    }
    setSavingModule(true);
    try {
      const response = await fetch("/api/v1/system/site-initializer/modules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: moduleForm.id || void 0,
          source: moduleForm.source,
          name: moduleForm.name.trim(),
          description: moduleForm.description.trim(),
          tags: parseTags(moduleForm.tagsText),
          modelGroupJson: moduleJsonValidation.data
        })
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "保存模块模板失败");
      }
      toast({
        title: moduleForm.id ? "保存成功" : "创建成功",
        description: moduleForm.id ? "模块模板定义已更新" : "新的模块模板定义已保存"
      });
      setModuleForm(emptyModuleForm);
      setModuleDialogMode(null);
      await fetchData();
    } catch (error) {
      toast({
        title: "保存失败",
        description: error.message || "保存模块模板失败",
        variant: "destructive"
      });
    } finally {
      setSavingModule(false);
    }
  };
  const initializeModule = async (module) => {
    if (!canManageSites) return;
    const key = `module:${module.id}`;
    setInitializingId(key);
    try {
      const response = await fetch(`/api/v1/system/site-initializer/init/module`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemModuleIds: [module.id] })
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "初始化失败");
      }
      window.dispatchEvent(new CustomEvent("collections-updated"));
      await fetchData();
      const generatedCollections = Array.isArray(result.data?.generated) ? result.data.generated.filter(Boolean) : [];
      const syncedCollections = Array.isArray(result.data?.synced) ? result.data.synced.filter(Boolean) : [];
      const reusedCollections = Array.isArray(result.data?.reused) ? result.data.reused.filter(Boolean) : [];
      toast({
        title: module.isInstalled ? "同步完成" : "初始化完成",
        description: [
          generatedCollections.length > 0 ? `新建：${generatedCollections.join("、")}` : "",
          syncedCollections.length > 0 ? `同步：${syncedCollections.join("、")}` : "",
          reusedCollections.length > 0 ? `复用：${reusedCollections.join("、")}` : ""
        ].filter(Boolean).join("；") || `${module.name} 已完成注入，本次未改动底层对象`
      });
    } catch (error) {
      toast({
        title: "初始化失败",
        description: error.message || "初始化失败",
        variant: "destructive"
      });
    } finally {
      setInitializingId(null);
      setModuleDialogMode(null);
    }
  };
  const syncSystemModules = async () => {
    if (!canManageSites) return;
    try {
      const response = await fetch("/api/v1/system/site-initializer/modules/sync-presets", {
        method: "POST"
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "同步预置模块失败");
      }
      toast({
        title: "同步成功",
        description: "系统预置模块已恢复至列表。",
        className: "bg-emerald-50 text-emerald-900"
      });
      await fetchData();
    } catch (error) {
      toast({
        title: "同步失败",
        description: error.message || "网络或服务器异常",
        variant: "destructive"
      });
    }
  };
  const moduleDialogTitle = moduleDialogMode === "create" ? "添加" : moduleDialogMode === "edit" ? "编辑" : moduleDialogMode === "init" ? "初始化" : "查看";
  const blockedPlanItems = modulePlan?.blocked || [];
  const planConfirmDisabled = !canManageSites || !selectedModule || planningModuleId === selectedModule?.id || blockedPlanItems.length > 0;
  const uninstallDeleteItems = uninstallPlan?.units.filter((item) => item.action === "delete") || [];
  const uninstallRetainedItems = uninstallPlan?.units.filter((item) => item.action === "retain_shared") || [];
  const uninstallBlockedItems = uninstallPlan?.units.filter((item) => item.action === "blocked_data") || [];
  const uninstallConfirmDisabled = !canManageSites || planningUninstallId === uninstallDialog?.item.id || (uninstallPlan ? !uninstallPlan.canExecute : true);
  const moduleSaveDisabledReason = !moduleForm.name.trim() ? "请先填写模块模板名称。" : moduleJsonValidation.error || (!moduleJsonValidation.data ? "模块 JSON 配置不正确。" : "");
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-1 flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              value: moduleSearchInput,
              onChange: (e) => setModuleSearchInput(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  executeModuleSearch();
                }
              },
              placeholder: "搜索模块名称、描述、标签、集合标识...",
              className: "w-full sm:w-[320px]"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 828,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: executeModuleSearch,
              className: "border-slate-200 text-slate-700 hover:bg-slate-50",
              children: "搜索"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 840,
              columnNumber: 13
            },
            void 0
          ),
          moduleSearchInput || moduleSearchKeyword || Object.values(moduleFilters).some(Boolean) ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: resetModuleSearch,
              className: "border-slate-200 text-slate-600 hover:bg-slate-50",
              children: "清空"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 849,
              columnNumber: 15
            },
            void 0
          ) : null,
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500 ml-2", children: [
            "共 ",
            catalog.systemModules.length,
            " 个模块，当前匹配 ",
            filteredSystemModules.length,
            " 个"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 858,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 827,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", onClick: openAiDialog, variant: "outline", disabled: !canManageSites, className: "border-violet-200 text-violet-700 hover:bg-violet-50", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 16, className: "mr-2" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 865,
              columnNumber: 15
            }, void 0),
            "AI 生成"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 864,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", title: "同步预置模块", onClick: syncSystemModules, variant: "outline", disabled: !canManageSites, className: "border-emerald-200 text-emerald-700 hover:bg-emerald-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 869,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 868,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", onClick: () => openModuleDialog("create"), disabled: !canManageSites, className: "bg-blue-600 text-white hover:bg-blue-700", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16, className: "mr-2" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 872,
              columnNumber: 15
            }, void 0),
            "添加"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 871,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 863,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 826,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-4 border-t border-slate-100 pt-3 text-sm text-slate-600 mt-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-medium text-slate-700", children: "筛选：" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 879,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "flex items-center gap-2 cursor-pointer hover:text-slate-900 font-normal", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Checkbox, { checked: moduleFilters.installed, onCheckedChange: (c) => {
            setModuleFilters((prev) => ({ ...prev, installed: !!c }));
            setModulePage(1);
          } }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 881,
            columnNumber: 13
          }, void 0),
          "已安装"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 880,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "flex items-center gap-2 cursor-pointer hover:text-slate-900 font-normal", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Checkbox, { checked: moduleFilters.uninstalled, onCheckedChange: (c) => {
            setModuleFilters((prev) => ({ ...prev, uninstalled: !!c }));
            setModulePage(1);
          } }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 885,
            columnNumber: 13
          }, void 0),
          "未安装"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 884,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-[1px] h-4 bg-slate-200 mx-1" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 888,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "flex items-center gap-2 cursor-pointer hover:text-slate-900 font-normal", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Checkbox, { checked: moduleFilters.preset, onCheckedChange: (c) => {
            setModuleFilters((prev) => ({ ...prev, preset: !!c }));
            setModulePage(1);
          } }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 890,
            columnNumber: 13
          }, void 0),
          "系统预设"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 889,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "flex items-center gap-2 cursor-pointer hover:text-slate-900 font-normal", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Checkbox, { checked: moduleFilters.custom, onCheckedChange: (c) => {
            setModuleFilters((prev) => ({ ...prev, custom: !!c }));
            setModulePage(1);
          } }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 894,
            columnNumber: 13
          }, void 0),
          "自定义"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 893,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 878,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 825,
      columnNumber: 7
    }, void 0),
    !loadingPermissions && !canManageSites ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看模块模板与注入能力，创建、同步、AI 生成与执行注入操作已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 901,
      columnNumber: 9
    }, void 0) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-0", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-[320px] items-center justify-center rounded-3xl border border-slate-200 bg-white", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 text-slate-500", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin", size: 18 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 910,
        columnNumber: 15
      }, void 0),
      "正在加载模块模板..."
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 909,
      columnNumber: 13
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 908,
      columnNumber: 11
    }, void 0) : catalog.systemModules.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-base font-semibold text-slate-900", children: "当前还没有模块模板" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 916,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 max-w-md text-sm leading-6 text-slate-500", children: "模块模板列表默认为空，你可以通过手工编写 JSON、选择预置模板，或使用 AI 生成来补齐结构。" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 917,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", onClick: () => openModuleDialog("create"), disabled: !canManageSites, className: "mt-5 bg-blue-600 text-white hover:bg-blue-700", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16, className: "mr-2" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 921,
          columnNumber: 15
        }, void 0),
        "添加"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 920,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 915,
      columnNumber: 11
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: filteredSystemModules.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-base font-semibold text-slate-900", children: "没有找到匹配的模块模板" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 929,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 max-w-md text-sm leading-6 text-slate-500", children: "请尝试更换关键词，或清空搜索条件后继续浏览全部预置模板。" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 930,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: resetModuleSearch,
          className: "mt-5 border-slate-200 text-slate-700 hover:bg-slate-50",
          children: "清空搜索"
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 933,
          columnNumber: 17
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 928,
      columnNumber: 15
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", children: paginatedSystemModules.map((module) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "flex h-full flex-col overflow-hidden rounded-2xl border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "space-y-3 bg-slate-50/70 p-4 pb-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0 space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-violet-100 p-1.5 text-violet-600", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Layers, { size: 16 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 952,
                columnNumber: 33
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 951,
                columnNumber: 31
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "truncate text-base text-slate-900", children: module.name }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 954,
                columnNumber: 31
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 950,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardDescription, { className: "line-clamp-2 min-h-[40px] text-xs leading-5 text-slate-600", children: module.description || "暂无介绍" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 956,
              columnNumber: 29
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 949,
            columnNumber: 27
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Badge,
              {
                variant: "outline",
                className: module.source === "custom" ? "border-violet-200 bg-violet-50 text-violet-700" : "border-emerald-200 bg-emerald-50 text-emerald-700",
                children: module.source === "custom" ? "自" : "预"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 961,
                columnNumber: 29
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 text-slate-400 hover:bg-red-50 hover:text-red-600",
                onClick: () => setDeleteDialog({ type: "module", item: module }),
                disabled: !canManageSites,
                title: "彻底删除",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 15 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 976,
                  columnNumber: 31
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 967,
                columnNumber: 29
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 960,
            columnNumber: 27
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 948,
          columnNumber: 25
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 947,
          columnNumber: 23
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "flex-1 space-y-3 px-4 pb-4 pt-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50 p-3 text-center", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-500", children: "模型集合" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 985,
                columnNumber: 29
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: module.collectionSlugs.length }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 986,
                columnNumber: 29
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 984,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50 p-3 text-center", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-500", children: "业务字段" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 989,
                columnNumber: 29
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: module.fieldCount }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 990,
                columnNumber: 29
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 988,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50 p-3 text-center", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-500", children: "数据量" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 993,
                columnNumber: 29
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: module.installedDataCount }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 994,
                columnNumber: 29
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 992,
              columnNumber: 27
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 983,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-slate-200 bg-slate-50 text-slate-600", children: module.category || "通用模块" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 998,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-slate-200 bg-slate-50 text-slate-600", children: module.target || "全局" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1001,
              columnNumber: 27
            }, void 0),
            module.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-violet-100 bg-violet-50 text-violet-700", children: tag }, `${module.id}-${tag}`, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1005,
              columnNumber: 29
            }, void 0))
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 997,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3 text-[11px] text-slate-500", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "将创建的集合" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1012,
                columnNumber: 29
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                module.collectionSlugs.length,
                " 个"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1013,
                columnNumber: 29
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1011,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5", children: module.collectionSlugs.length > 0 ? module.collectionSlugs.map((slug) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-slate-200 bg-white text-slate-700", children: slug }, `${module.id}-${slug}`, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1017,
              columnNumber: 31
            }, void 0)) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-400", children: "暂无集合定义" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1021,
              columnNumber: 31
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1015,
              columnNumber: 27
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1010,
            columnNumber: 25
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 982,
          columnNumber: 23
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardFooter, { className: "flex items-center gap-2 border-t border-slate-100 bg-slate-50/60 p-4 pt-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", size: "icon", title: "查看", onClick: () => openModuleDialog("view", module), className: "h-8 w-8 border-slate-200 text-slate-700 shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Eye, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1029,
            columnNumber: 27
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1028,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", size: "icon", title: "编辑", onClick: () => openModuleDialog("edit", module), disabled: !canManageSites, className: "h-8 w-8 border-slate-200 text-slate-700 shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pencil, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1032,
            columnNumber: 27
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1031,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 flex justify-end gap-2", children: [
            module.isInstalled && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setUninstallDialog({ type: "module", item: module }),
                disabled: !canManageSites,
                className: "h-8 border-rose-200 bg-rose-50 px-3 text-xs text-rose-600 hover:bg-rose-100",
                children: "卸载"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1037,
                columnNumber: 29
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                type: "button",
                onClick: () => openModuleDialog("init", module),
                loading: initializingId === `module:${module.id}`,
                disabled: !canManageSites,
                className: module.isInstalled ? "h-8 bg-emerald-100 px-3 text-xs text-emerald-700 hover:bg-emerald-200" : "h-8 bg-slate-900 px-3 text-xs text-white hover:bg-slate-800",
                children: module.isInstalled ? "同步" : "初始化"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1047,
                columnNumber: 27
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1035,
            columnNumber: 25
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1027,
          columnNumber: 23
        }, void 0)
      ] }, module.id, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 946,
        columnNumber: 21
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 944,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500", children: [
          "当前显示第 ",
          (safeModulePage - 1) * MODULES_PAGE_SIZE + 1,
          " - ",
          Math.min(safeModulePage * MODULES_PAGE_SIZE, filteredSystemModules.length),
          " 条，共 ",
          filteredSystemModules.length,
          " 条"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1065,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              variant: "outline",
              disabled: safeModulePage <= 1,
              onClick: () => setModulePage((prev) => Math.max(1, prev - 1)),
              className: "border-slate-200 text-slate-700 hover:bg-slate-50",
              children: "上一页"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1069,
              columnNumber: 21
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-[88px] text-center text-sm font-medium text-slate-700", children: [
            safeModulePage,
            " / ",
            moduleTotalPages
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1078,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              variant: "outline",
              disabled: safeModulePage >= moduleTotalPages,
              onClick: () => setModulePage((prev) => Math.min(moduleTotalPages, prev + 1)),
              className: "border-slate-200 text-slate-700 hover:bg-slate-50",
              children: "下一页"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1081,
              columnNumber: 21
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1068,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1064,
        columnNumber: 17
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 943,
      columnNumber: 15
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 926,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 906,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: moduleDialogMode !== null, onOpenChange: (open) => !open && setModuleDialogMode(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "flex max-h-[88vh] max-w-4xl flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: moduleDialogTitle }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1101,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: moduleDialogMode === "init" ? "执行前会展示模型组涉及的底层对象；缺失对象会创建，已登记对象会按最新定义做安全同步，未登记但同名已存在的对象会阻断接管。" : "模块模板弹窗只保留模块名称、标签、模块介绍和 JSON 注入配置；所有字段能力都必须与 /admin/models 的通用模型能力保持一致。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1102,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1100,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 space-y-5 overflow-y-auto py-2 pr-1", children: [
        moduleDialogMode === "init" && selectedModule && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold text-slate-900", children: "本次涉及以下底层集合" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1112,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs leading-5 text-slate-600", children: "系统会优先创建缺失对象；已登记对象会尝试安全同步到最新定义；如果发现同名对象已经存在但不在当前安装清单中，或同步需要破坏已有数据结构，都会直接停止并提示你改用底层模型入口处理。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1113,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1111,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2", children: selectedModule.collectionSlugs.map((slug) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-amber-200 bg-white text-amber-700", children: slug }, `dialog-${selectedModule.id}-${slug}`, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1119,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1117,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-3 md:grid-cols-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-amber-200 bg-white p-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-500", children: "底层集合数" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1126,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: selectedModule.collectionSlugs.length }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1127,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1125,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-amber-200 bg-white p-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-500", children: "底层模型数" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1130,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: selectedModule.resolvedUnitIds.length }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1131,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1129,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-amber-200 bg-white p-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-500", children: "依赖模块数" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1134,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: selectedModule.resolvedModuleDependencyIds.length }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1135,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1133,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1124,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-medium text-slate-700", children: "底层模型标识" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1139,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5", children: selectedModule.resolvedUnitIds.map((unitId) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-slate-200 bg-white text-slate-700", children: unitId }, `unit-${selectedModule.id}-${unitId}`, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1142,
              columnNumber: 23
            }, void 0)) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1140,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1138,
            columnNumber: 17
          }, void 0),
          selectedModule.resolvedModuleDependencyIds.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-medium text-slate-700", children: "来自依赖模块" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1150,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5", children: selectedModule.resolvedModuleDependencyIds.map((dependencyId) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-slate-200 bg-white text-slate-700", children: dependencyId }, `dep-${selectedModule.id}-${dependencyId}`, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1153,
              columnNumber: 25
            }, void 0)) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1151,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1149,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 rounded-xl border border-slate-200 bg-white p-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold text-slate-900", children: "执行前预检计划" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1163,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs leading-5 text-slate-500", children: "计划由底层生命周期规则直接生成，和实际执行使用同一套判断逻辑。" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1164,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1162,
                columnNumber: 21
              }, void 0),
              planningModuleId === selectedModule.id && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs text-slate-500", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 14, className: "animate-spin" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1170,
                  columnNumber: 25
                }, void 0),
                "正在预检"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1169,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1161,
              columnNumber: 19
            }, void 0),
            modulePlan ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-3 md:grid-cols-4", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-emerald-200 bg-emerald-50 p-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-emerald-700", children: "新建" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1180,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-emerald-900", children: modulePlan.generated.length }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1181,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1179,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-blue-200 bg-blue-50 p-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-blue-700", children: "同步" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1184,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-blue-900", children: modulePlan.synced.length }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1185,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1183,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50 p-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-600", children: "复用" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1188,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: modulePlan.reused.length }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1189,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1187,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-rose-200 bg-rose-50 p-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-rose-700", children: "阻断" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1192,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-rose-900", children: modulePlan.blocked.length }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1193,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1191,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1178,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: modulePlan.units.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50/70 p-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Badge,
                    {
                      variant: "outline",
                      className: item.action === "create" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : item.action === "sync" ? "border-blue-200 bg-blue-50 text-blue-700" : item.action === "reuse" ? "border-slate-200 bg-white text-slate-700" : "border-rose-200 bg-rose-50 text-rose-700",
                      children: item.action === "create" ? "新建" : item.action === "sync" ? "同步" : item.action === "reuse" ? "复用" : "阻断"
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                      lineNumber: 1201,
                      columnNumber: 31
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm font-medium text-slate-900", children: item.slug }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1215,
                    columnNumber: 31
                  }, void 0),
                  item.hasData ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-amber-200 bg-amber-50 text-amber-700", children: "有业务数据" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1217,
                    columnNumber: 33
                  }, void 0) : null,
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-500", children: [
                    "模型: ",
                    item.modelAction || "-",
                    " / 集合: ",
                    item.collectionAction || "-"
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1221,
                    columnNumber: 31
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1200,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs leading-5 text-slate-600", children: item.reason }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1225,
                  columnNumber: 29
                }, void 0)
              ] }, `plan-${selectedModule.id}-${item.id}`, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1199,
                columnNumber: 27
              }, void 0)) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1197,
                columnNumber: 23
              }, void 0),
              blockedPlanItems.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs leading-5 text-rose-700", children: "当前预检存在阻断项，系统不会执行本次注入。请先改用 `/admin/models` 或 `/admin/collections` 处理冲突对象，再回来重试。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1231,
                columnNumber: 25
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs leading-5 text-emerald-700", children: "当前预检已通过，确认后将严格按上面的计划执行，不会额外接管未登记对象。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1235,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1177,
              columnNumber: 21
            }, void 0) : planningModuleId === selectedModule.id ? null : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-700", children: "暂未获取到预检计划，请关闭后重试。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1241,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1160,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1110,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "module-name", children: "模块名称" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1250,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                id: "module-name",
                placeholder: "例如：预约报名模块",
                value: moduleForm.name,
                onChange: (e) => setModuleForm((prev) => ({ ...prev, name: e.target.value })),
                disabled: moduleDialogReadOnly
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1251,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1249,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "module-tags", children: "标签" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1260,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                id: "module-tags",
                placeholder: "例如：线索，预约，获客",
                value: moduleForm.tagsText,
                onChange: (e) => setModuleForm((prev) => ({ ...prev, tagsText: e.target.value })),
                disabled: moduleDialogReadOnly
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1261,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1259,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1248,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "module-description", children: "模块介绍" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1271,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "textarea",
            {
              id: "module-description",
              className: textareaClassName,
              placeholder: "说明这个模块模板封装了哪些业务能力...",
              value: moduleForm.description,
              onChange: (e) => setModuleForm((prev) => ({ ...prev, description: e.target.value })),
              disabled: moduleDialogReadOnly
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1272,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1270,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "module-json", children: "JSON 注入配置" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1283,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: "/admin/sites/module-json-docs",
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs font-medium text-blue-600 hover:text-blue-700",
                children: "查看说明文档"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1284,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1282,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "textarea",
            {
              id: "module-json",
              className: `${textareaClassName} min-h-[360px] font-mono leading-6`,
              placeholder: defaultModuleJsonText,
              value: moduleForm.jsonText,
              onChange: (e) => setModuleForm((prev) => ({ ...prev, jsonText: e.target.value })),
              disabled: moduleDialogReadOnly,
              spellCheck: false
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1293,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs leading-5 text-slate-500", children: "请输入模型组 JSON，例如以 `page`、`article` 这类模型 slug 作为键，值为完整模型定义。这里是快捷批量注入器，模型层只定义通用字段；隐藏字段的生成方式请在集合配置中选择系统预制模式。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1302,
            columnNumber: 15
          }, void 0),
          !moduleDialogReadOnly && moduleSaveDisabledReason && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-red-600", children: moduleSaveDisabledReason }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1306,
            columnNumber: 17
          }, void 0),
          !moduleDialogReadOnly && !moduleSaveDisabledReason && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-emerald-600", children: "JSON 校验通过" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1309,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1281,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1108,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: () => setModuleDialogMode(null), children: moduleDialogMode === "view" ? "关闭" : "取消" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1314,
          columnNumber: 13
        }, void 0),
        (moduleDialogMode === "edit" || moduleDialogMode === "create") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            type: "button",
            onClick: saveSystemModule,
            loading: savingModule,
            disabled: !canManageSites || savingModule || !!moduleSaveDisabledReason,
            className: "bg-blue-600 text-white hover:bg-blue-700",
            children: moduleForm.id ? "保存修改" : "保存模块模板"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1318,
            columnNumber: 15
          },
          void 0
        ),
        moduleDialogMode === "init" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            type: "button",
            onClick: () => selectedModule && initializeModule(selectedModule),
            loading: initializingId === `module:${moduleForm.id}`,
            disabled: planConfirmDisabled,
            className: "bg-slate-900 text-white hover:bg-slate-800",
            children: planningModuleId === selectedModule?.id ? "正在预检..." : selectedModule?.isInstalled ? "确认并同步" : "确认并初始化"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1329,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1313,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 1099,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 1098,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isAiDialogOpen, onOpenChange: setIsAiDialogOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "flex max-h-[88vh] max-w-4xl flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bot, { size: 18, className: "text-violet-600" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1351,
            columnNumber: 15
          }, void 0),
          "AI 生成模块模板"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1350,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: "输入你的业务描述，AI 会根据模块模板说明文档生成模型组 JSON。你可以将最后一次有效结果直接写入新增表单。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1354,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1349,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 space-y-4 overflow-y-auto py-2 pr-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-medium text-slate-900", children: "对话记录" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1361,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: "/admin/sites/module-json-docs",
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs font-medium text-blue-600 hover:text-blue-700",
                children: "查看说明文档"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1362,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1360,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-h-[360px] space-y-3 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3", children: [
            aiMessages.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "py-12 text-center text-sm text-slate-400", children: "请输入需求后开始生成模块模板 JSON" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1373,
              columnNumber: 19
            }, void 0) : aiMessages.map((message, index) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-blue-600 text-white" : "border border-slate-200 bg-slate-50 text-slate-700"}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "whitespace-pre-wrap break-words font-sans", children: message.content }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1380,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1376,
              columnNumber: 21
            }, void 0) }, `${message.role}-${index}`, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1375,
              columnNumber: 19
            }, void 0)),
            aiLoading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 16, className: "animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1387,
                columnNumber: 23
              }, void 0),
              "AI 正在生成模块模板 JSON..."
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1386,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1385,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1371,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1359,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "module-ai-input", children: "需求描述" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1396,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "textarea",
            {
              id: "module-ai-input",
              className: `${textareaClassName} min-h-[140px]`,
              placeholder: defaultAiPromptText,
              value: aiInput,
              onChange: (e) => setAiInput(e.target.value),
              disabled: aiLoading || !canManageSites
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1397,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1395,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1358,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => {
              setAiMessages([]);
              setAiInput(defaultAiPromptText);
            },
            disabled: aiLoading || !canManageSites,
            children: "清空对话"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1408,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: () => setIsAiDialogOpen(false), disabled: aiLoading, children: "关闭" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1419,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: applyAiJsonToModuleForm, disabled: !canManageSites || !latestAssistantJson || aiLoading, children: "应用到新增表单" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1422,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", onClick: sendAiPrompt, loading: aiLoading, disabled: !canManageSites, className: "bg-violet-600 text-white hover:bg-violet-700", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { size: 14, className: "mr-2" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1426,
            columnNumber: 15
          }, void 0),
          "发送给 AI"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1425,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1407,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 1348,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
      lineNumber: 1347,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: deleteDialog !== null,
        onOpenChange: (open) => !open && setDeleteDialog(null),
        title: "删除模块模板",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          "此操作将删除该模块模板。",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1440,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1441,
            columnNumber: 13
          }, void 0),
          "确认要删除模块模板「",
          deleteDialog?.item.name,
          "」吗？已生成的底层集合和数据不会受影响。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1438,
          columnNumber: 11
        }, void 0),
        onConfirm: confirmDelete,
        onCancel: () => setDeleteDialog(null),
        confirmText: "确认删除",
        variant: "destructive",
        isLoading: deletingItem
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1433,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: uninstallDialog !== null,
        onOpenChange: (open) => {
          if (!open) {
            setUninstallDialog(null);
            setUninstallPlan(null);
            setPlanningUninstallId(null);
          }
        },
        title: "卸载模块模板",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: "此操作会按照安装清单回滚该模块模板注入的底层集合与模型。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1465,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              "确认要卸载模块模板「",
              uninstallDialog?.item.name,
              "」吗？如果相关集合中仍有业务数据，系统会直接阻断，不会强行删除现有内容。"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1466,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1464,
            columnNumber: 13
          }, void 0),
          planningUninstallId === uninstallDialog?.item.id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-600", children: "正在生成卸载预检计划..." }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1469,
            columnNumber: 15
          }, void 0) : uninstallPlan ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-3 text-xs leading-5 text-slate-600", children: [
              "级联卸载模块：",
              uninstallPlan.cascadeModuleNames.join("、") || "无"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1474,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-3 sm:grid-cols-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-orange-200 bg-orange-50 p-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-orange-700", children: "级联模块" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1480,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-orange-900", children: uninstallPlan.cascadeModuleIds.length }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1481,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1479,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-emerald-200 bg-emerald-50 p-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-emerald-700", children: "将删除" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1484,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-emerald-900", children: uninstallDeleteItems.length }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1485,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1483,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50 p-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-600", children: "共享保留" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1488,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-slate-900", children: uninstallRetainedItems.length }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1489,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1487,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-rose-200 bg-rose-50 p-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-rose-700", children: "数据阻断" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1492,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-bold text-rose-900", children: uninstallBlockedItems.length }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1493,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1491,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1478,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-h-[280px] space-y-2 overflow-y-auto pr-1", children: uninstallPlan.units.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50/70 p-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Badge,
                  {
                    variant: "outline",
                    className: item.action === "delete" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : item.action === "retain_shared" ? "border-slate-200 bg-white text-slate-700" : "border-rose-200 bg-rose-50 text-rose-700",
                    children: item.action === "delete" ? "删除" : item.action === "retain_shared" ? "共享保留" : "数据阻断"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                    lineNumber: 1501,
                    columnNumber: 25
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm font-medium text-slate-900", children: item.slug }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1513,
                  columnNumber: 25
                }, void 0),
                item.entityCount > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-amber-200 bg-amber-50 text-amber-700", children: [
                  item.entityCount,
                  " 条数据"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1515,
                  columnNumber: 27
                }, void 0) : null,
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-500", children: [
                  "集合 ID: ",
                  item.collectionId ?? "-",
                  " / 模型 ID: ",
                  item.modelId ?? "-"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                  lineNumber: 1519,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1500,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs leading-5 text-slate-600", children: item.reason }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
                lineNumber: 1523,
                columnNumber: 23
              }, void 0)
            ] }, `uninstall-plan-${uninstallDialog?.item.id}-${item.slug}`, true, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1499,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1497,
              columnNumber: 17
            }, void 0),
            uninstallPlan.canExecute ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs leading-5 text-emerald-700", children: "当前卸载预检已通过，确认后只会删除上面标记为“删除”的底层对象，共享对象会保留，未登记对象不会被接管。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1529,
              columnNumber: 19
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs leading-5 text-rose-700", children: "当前卸载预检存在数据阻断项，系统不会执行本次卸载。请先到对应集合处理业务数据，再回来重试。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
              lineNumber: 1533,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1473,
            columnNumber: 15
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-700", children: "暂未获取到卸载预检计划，请关闭后重试。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
            lineNumber: 1539,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
          lineNumber: 1463,
          columnNumber: 11
        }, void 0),
        onConfirm: confirmUninstall,
        onCancel: () => {
          setUninstallDialog(null);
          setUninstallPlan(null);
          setPlanningUninstallId(null);
        },
        confirmText: "确认卸载",
        variant: "destructive",
        isLoading: uninstallingItem,
        confirmClassName: "bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-100",
        confirmDisabled: uninstallConfirmDisabled,
        dialogClassName: "sm:max-w-[720px] rounded-3xl border border-slate-200 bg-white shadow-2xl"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1452,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: errorDialog?.open || false,
        onOpenChange: (open) => !open && setErrorDialog(null),
        title: errorDialog?.title || "操作失败",
        description: errorDialog?.message || "",
        onConfirm: () => setErrorDialog(null),
        confirmText: "我知道了",
        hideCancel: true,
        variant: "destructive",
        dialogClassName: "sm:max-w-[400px] rounded-3xl border-rose-100 bg-white shadow-2xl",
        footerClassName: "mt-6 sm:justify-center",
        confirmClassName: "w-full bg-rose-600 px-8 hover:bg-rose-700 sm:w-auto"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
        lineNumber: 1559,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/features/admin-sites/SiteInitializerManager.tsx",
    lineNumber: 824,
    columnNumber: 5
  }, void 0);
};
const $$Sites = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sites;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["sites.view", "sites.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "模块模板注入" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SiteInitializerManager", SiteInitializerManager, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/SiteInitializerManager", "client:component-export": "SiteInitializerManager" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/sites.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/sites.astro";
const $$url = "/admin/sites";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Sites,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
