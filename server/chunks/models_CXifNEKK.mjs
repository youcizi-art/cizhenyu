globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_DQAyehZh.mjs";
import { D as Database, g as Settings2, G as GripVertical, d as Pencil, $ as $$DashboardLayout } from "./DashboardLayout_Cly2CC3o.mjs";
import { h as useAdminPermissions, u as useToast, j as jsxDevRuntimeExports, B as Button, I as Input, T as Trash2, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, D as DialogFooter, L as Loader2 } from "./useAdminPermissions_CAR-Xq1O.mjs";
import { C as Card } from "./Card_BdyOyfIQ.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_BDFOHypt.mjs";
import { B as Badge } from "./Badge_BF0_7Zi1.mjs";
import { S as Switch } from "./Switch_DEhsob1-.mjs";
import { L as Label } from "./Checkbox_CqQLL2yg.mjs";
import { I as Info, c as ConfirmDialog } from "./chat-workspace_D3zVFcLO.mjs";
import { F as FormDialog } from "./FormDialog_BAETsQhL.mjs";
import { g as getReservedFieldDefinitions, i as isReservedFieldName, c as createReservedField } from "./reserved-fields_BvytjmSq.mjs";
import { P as Plus } from "./settings_Dtra946-.mjs";
import { L as Lock } from "./shield-check_CiONMVXR.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const createEmptyField = () => ({
  name: "",
  type: "text",
  label: "",
  placeholder: "",
  required: false,
  isListDisplay: true,
  ui: { hidden: false },
  validation: {
    textPattern: "",
    textErrorMessage: "",
    textareaMaxLength: 0,
    numberMode: "integer",
    numberStep: 1,
    allowNegative: false,
    decimalPlaces: 2,
    roundingMode: "round"
  }
});
const normalizeFieldDraft = (field) => ({
  ...createEmptyField(),
  ...field || {},
  ui: {
    hidden: false,
    ...field?.ui || {}
  },
  validation: {
    ...createEmptyField().validation,
    ...field?.validation || {}
  }
});
const ModelsManagement = () => {
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canManageModels = hasPermission2(["models.manage", "role.manage"]);
  const [models, setModels] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [isCreateOpen, setIsCreateOpen] = reactExports.useState(false);
  const [editingModel, setEditingModel] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const { toast } = useToast();
  const [deleteId, setDeleteId] = reactExports.useState(null);
  const [isDeleting, setIsDeleting] = reactExports.useState(false);
  const [errorDialog, setErrorDialog] = reactExports.useState({ open: false, message: "" });
  const [form, setForm] = reactExports.useState({
    name: "",
    slug: "",
    description: "",
    fieldsJson: []
  });
  reactExports.useEffect(() => {
    if (editingModel) {
      setForm({ ...editingModel });
    } else {
      setForm({ name: "", slug: "", description: "", fieldsJson: [] });
    }
  }, [editingModel]);
  const [newField, setNewField] = reactExports.useState(createEmptyField());
  const [editingFieldIndex, setEditingFieldIndex] = reactExports.useState(null);
  const [advancedSettingsOpen, setAdvancedSettingsOpen] = reactExports.useState(false);
  const [draggingIdx, setDraggingIdx] = reactExports.useState(null);
  const [dragOverIdx, setDragOverIdx] = reactExports.useState(null);
  const [editorError, setEditorError] = reactExports.useState("");
  const reservedFieldDefinitions = getReservedFieldDefinitions();
  const isReservedField = (field) => isReservedFieldName(String(field?.name || "").trim());
  const getReservedFieldMeta = (field) => reservedFieldDefinitions.find((definition) => definition.key === String(field?.name || "").trim()) || null;
  const resetFieldDraft = () => {
    setNewField(createEmptyField());
    setEditingFieldIndex(null);
    setAdvancedSettingsOpen(false);
  };
  const resetModelEditor = () => {
    setIsCreateOpen(false);
    setEditingModel(null);
    setForm({ name: "", slug: "", description: "", fieldsJson: [] });
    resetFieldDraft();
    setEditorError("");
    setDraggingIdx(null);
    setDragOverIdx(null);
  };
  reactExports.useEffect(() => {
    fetchModels();
  }, []);
  const fetchModels = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/rbac/models");
      const data = await res.json();
      setModels(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("Failed to fetch models");
    } finally {
      setLoading(false);
    }
  };
  const handleNameChange = (name) => {
    const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    setEditorError("");
    setForm((prev) => ({
      ...prev,
      name,
      slug: prev.id ? prev.slug : slug
    }));
  };
  const openFieldAdvancedSettings = () => {
    if (!canManageModels) {
      return;
    }
    setAdvancedSettingsOpen(true);
  };
  const startEditField = (index) => {
    if (!canManageModels) {
      return;
    }
    if (isReservedField(form.fieldsJson[index])) {
      toast({ title: "系统字段已锁定", description: "保留字段只能添加或移除，不支持在这里编辑结构。" });
      return;
    }
    setEditingFieldIndex(index);
    setNewField(normalizeFieldDraft(form.fieldsJson[index]));
    setEditorError("");
    setTimeout(() => {
      const dialogContent = document.querySelector('[role="dialog"]');
      if (dialogContent) {
        dialogContent.scrollTop = 0;
        const scrollableChildren = dialogContent.querySelectorAll('[class*="overflow-y"]');
        scrollableChildren.forEach((el) => {
          el.scrollTop = 0;
        });
      }
    }, 0);
  };
  const updateFieldUi = (updates) => {
    setNewField((prev) => ({
      ...prev,
      ui: {
        ...prev.ui || {},
        ...updates
      }
    }));
  };
  const updateFieldValidation = (updates) => {
    setNewField((prev) => ({
      ...prev,
      validation: {
        ...prev.validation || {},
        ...updates
      }
    }));
  };
  const upsertField = () => {
    if (!canManageModels) {
      return;
    }
    const normalizedName = newField.name.trim();
    if (!newField.label.trim() || !normalizedName) {
      return;
    }
    if (isReservedFieldName(normalizedName)) {
      return;
    }
    if (form.fieldsJson.some((f, index) => index !== editingFieldIndex && f.name.toLowerCase() === normalizedName.toLowerCase())) {
      return;
    }
    const nextField = normalizeFieldDraft({ ...newField, name: normalizedName });
    setForm((prev) => {
      if (editingFieldIndex === null) {
        return {
          ...prev,
          fieldsJson: [...prev.fieldsJson, nextField]
        };
      }
      return {
        ...prev,
        fieldsJson: prev.fieldsJson.map((field, index) => index === editingFieldIndex ? nextField : field)
      };
    });
    resetFieldDraft();
  };
  const appendReservedField = (fieldName) => {
    if (!canManageModels) {
      return;
    }
    if (form.fieldsJson.some((field) => field.name === fieldName)) {
      return;
    }
    setForm((prev) => ({
      ...prev,
      fieldsJson: [...prev.fieldsJson, createReservedField(fieldName)]
    }));
  };
  const removeField = (index) => {
    if (!canManageModels) {
      return;
    }
    setForm((prev) => ({
      ...prev,
      fieldsJson: prev.fieldsJson.filter((_, i) => i !== index)
    }));
    if (editingFieldIndex === index) {
      resetFieldDraft();
    }
  };
  const handleSaveModel = async () => {
    if (!canManageModels) return;
    const modelSaveDisabledReason2 = getModelSaveDisabledReason();
    if (modelSaveDisabledReason2) {
      return;
    }
    setEditorError("");
    setSaving(true);
    try {
      const isEdit = !!form.id;
      const res = await fetch(isEdit ? `/api/v1/rbac/models/${form.id}` : "/api/v1/rbac/models", {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        resetModelEditor();
        window.dispatchEvent(new CustomEvent("collections-updated"));
        fetchModels();
        toast({ title: isEdit ? "更新成功" : "创建成功", description: "模型定义已同步至 D1 数据库" });
      } else {
        const err = await res.json();
        const detail = [err.error, err.details].filter(Boolean).join("：");
        setEditorError(detail || "模型定义保存失败");
        toast({ variant: "destructive", title: "保存失败", description: detail || "模型定义保存失败" });
      }
    } catch (e) {
      setEditorError("无法连接至后台服务");
      toast({ variant: "destructive", title: "网络错误", description: "无法连接至后台服务" });
    } finally {
      setSaving(false);
    }
  };
  const getFieldDraftDisabledReason = () => {
    const normalizedName = newField.name.trim();
    if (!newField.label.trim()) return "请先填写字段显示名称。";
    if (!normalizedName) return "请先填写字段 Key。";
    if (isReservedFieldName(normalizedName)) {
      return `字段 Key [${normalizedName}] 是系统保留字段，请通过“添加系统字段”启用。`;
    }
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(normalizedName)) {
      return "字段标识必须以字母或下划线开头，且仅包含字母、数字及下划线。";
    }
    if (form.fieldsJson.some((f, index) => index !== editingFieldIndex && f.name.toLowerCase() === normalizedName.toLowerCase())) {
      return `字段 Key [${normalizedName}] 已存在，请使用其他名称。`;
    }
    if (newField.type === "text" && newField.validation?.textPattern) {
      try {
        new RegExp(newField.validation.textPattern);
      } catch {
        return "文本校验正则格式不合法，请检查后再保存字段。";
      }
    }
    if (newField.type === "textarea" && Number(newField.validation?.textareaMaxLength || 0) < 0) {
      return "多行文本的最大字数不能小于 0。";
    }
    if (newField.type === "number") {
      const step = Number(newField.validation?.numberStep || 0);
      if (step <= 0) {
        return "数字字段的步长必须大于 0。";
      }
      if ((newField.validation?.numberMode || "integer") === "decimal" && Number(newField.validation?.decimalPlaces) < 0) {
        return "小数位数不能小于 0。";
      }
    }
    return "";
  };
  const getModelSaveDisabledReason = () => {
    if (!form.name.trim()) return "请先填写模型显示名称。";
    if (!form.slug.trim()) return "请先填写模型标识符。";
    if (form.fieldsJson.length === 0) return "请至少添加一个字段后再保存模型定义。";
    return "";
  };
  const handleDeleteModel = async () => {
    if (!canManageModels || !deleteId) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/v1/rbac/models/${deleteId}`, {
        method: "DELETE"
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok) {
        toast({ title: "删除成功", description: "内容模型及其关联权限已移除" });
        setDeleteId(null);
        fetchModels();
      } else {
        const message = result.error || "删除失败";
        if (res.status === 400) {
          setErrorDialog({ open: true, message });
          setDeleteId(null);
          return;
        }
        throw new Error(message);
      }
    } catch (err) {
      toast({ variant: "destructive", title: "删除操作失败", description: err.message });
      setDeleteId(null);
    } finally {
      setIsDeleting(false);
    }
  };
  const getFieldTypeBadge = (type) => {
    switch (type) {
      case "text":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-blue-100 text-blue-700 hover:bg-blue-100", children: "文本" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 424,
          columnNumber: 27
        }, void 0);
      case "textarea":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-cyan-100 text-cyan-700 hover:bg-cyan-100", children: "多行文本" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 425,
          columnNumber: 31
        }, void 0);
      case "number":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-orange-100 text-orange-700 hover:bg-orange-100", children: "数字" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 426,
          columnNumber: 29
        }, void 0);
      case "richtext":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-purple-100 text-purple-700 hover:bg-purple-100", children: "富文本" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 427,
          columnNumber: 31
        }, void 0);
      case "image":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-green-100 text-green-700 hover:bg-green-100", children: "图片" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 428,
          columnNumber: 28
        }, void 0);
      case "multi_image":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100", children: "多图" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 429,
          columnNumber: 34
        }, void 0);
      case "media":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-indigo-100 text-indigo-700 hover:bg-indigo-100", children: "单文件" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 430,
          columnNumber: 28
        }, void 0);
      case "multi_file":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-violet-100 text-violet-700 hover:bg-violet-100", children: "多文件" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 431,
          columnNumber: 33
        }, void 0);
      case "radio":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-pink-100 text-pink-700 hover:bg-pink-100", children: "单选" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 432,
          columnNumber: 28
        }, void 0);
      case "checkbox":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-orange-100 text-orange-700 hover:bg-orange-100", children: "多选" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 433,
          columnNumber: 31
        }, void 0);
      case "select":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-rose-100 text-rose-700 hover:bg-rose-100", children: "下拉单选" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 434,
          columnNumber: 29
        }, void 0);
      case "multi_select":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-100", children: "下拉多选" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 435,
          columnNumber: 35
        }, void 0);
      case "relation_single":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100", children: "关联单选" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 436,
          columnNumber: 38
        }, void 0);
      case "relation_multi":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-amber-100 text-amber-700 hover:bg-amber-100", children: "关联多选" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 437,
          columnNumber: 37
        }, void 0);
      case "json":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-slate-100 text-slate-700 hover:bg-slate-100 font-mono", children: "JSON" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 438,
          columnNumber: 27
        }, void 0);
      case "reference":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-cyan-100 text-cyan-700 hover:bg-cyan-100", children: "通用引用" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 439,
          columnNumber: 32
        }, void 0);
      default:
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", children: type }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 440,
          columnNumber: 23
        }, void 0);
    }
  };
  const fieldDraftDisabledReason = getFieldDraftDisabledReason();
  const modelSaveDisabledReason = getModelSaveDisabledReason();
  const describeFieldAdvancedState = (field) => {
    const flags = [];
    if (isReservedField(field)) flags.push("系统字段");
    if (field.required) flags.push("必填");
    if (field.isListDisplay) flags.push("列表展示");
    if (field.ui?.hidden) flags.push("隐藏字段");
    if (field.type === "text" && field.validation?.textPattern) flags.push("文本校验");
    if (field.type === "textarea" && Number(field.validation?.textareaMaxLength || 0) > 0) flags.push(`限 ${field.validation?.textareaMaxLength} 字`);
    if (field.type === "number") {
      const mode = field.validation?.numberMode === "decimal" ? "小数" : "整数";
      flags.push(mode);
    }
    return flags;
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Database, { className: "text-blue-600", size: 24 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 466,
            columnNumber: 13
          }, void 0),
          "内容模型定义"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 465,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500 mt-1", children: "定义您的业务模型，系统将自动生成对应的数据库表、CRUD 接口及 RBAC 权限。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 469,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 464,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          className: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 gap-2",
          onClick: () => {
            if (!canManageModels) return;
            resetModelEditor();
            setIsCreateOpen(true);
          },
          disabled: !canManageModels,
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 18 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 483,
              columnNumber: 11
            }, void 0),
            "新建模型"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 474,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
      lineNumber: 463,
      columnNumber: 7
    }, void 0),
    !loadingPermissions && !canManageModels ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看模型定义，创建、编辑、删除与字段调整操作已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
      lineNumber: 489,
      columnNumber: 9
    }, void 0) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: isCreateOpen || !!editingModel,
        onOpenChange: (open) => {
          if (!open) {
            resetModelEditor();
          } else if (!editingModel && canManageModels) {
            setIsCreateOpen(true);
          }
        },
        title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings2, { className: "text-blue-600", size: 20 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 505,
            columnNumber: 15
          }, void 0),
          editingModel ? "编辑内容模型" : "定义新模型"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 504,
          columnNumber: 13
        }, void 0),
        contentClassName: "sm:max-w-[80%] max-h-[90vh] overflow-y-auto rounded-3xl",
        bodyClassName: "grid gap-6 py-4",
        cancelText: "取消",
        confirmText: "保存模型定义",
        onCancel: resetModelEditor,
        onConfirm: handleSaveModel,
        confirmLoading: saving,
        confirmDisabled: !canManageModels || saving || !!modelSaveDisabledReason,
        confirmHint: editorError || modelSaveDisabledReason,
        confirmClassName: "min-w-[120px] hover:bg-blue-700",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 py-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 gap-4 border-b pb-6 lg:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "name", children: "模型显示名称" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 523,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  id: "name",
                  placeholder: "例如：产品、文章、案例",
                  value: form.name,
                  onChange: (e) => handleNameChange(e.target.value),
                  disabled: !canManageModels
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 524,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 522,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "slug", children: "模型标识符 (Slug)" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 533,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  id: "slug",
                  placeholder: "仅限字母、数字、横线",
                  value: form.slug,
                  disabled: !canManageModels || !!editingModel,
                  onChange: (e) => setForm((prev) => ({ ...prev, slug: e.target.value }))
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 534,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 532,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 lg:col-span-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "description", children: "模型说明" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 543,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "textarea",
                {
                  id: "description",
                  className: "min-h-[88px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                  placeholder: "补充这个模型的用途、适用场景或录入说明",
                  value: form.description || "",
                  disabled: !canManageModels,
                  onChange: (e) => setForm((prev) => ({ ...prev, description: e.target.value }))
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 544,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 542,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 521,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-base font-semibold", children: [
                "字段配置 (",
                form.fieldsJson.length,
                ")"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 557,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 rounded bg-blue-50 px-2 py-1 text-xs text-blue-600", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { size: 12 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 559,
                  columnNumber: 19
                }, void 0),
                "保存后将自动生成 `entity:",
                form.slug,
                ":*` 权限"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 558,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 556,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-3 flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { size: 16, className: "mt-0.5 text-amber-700" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 567,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-medium text-slate-800", children: "系统字段" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 569,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs leading-5 text-slate-600", children: "系统字段使用保留字契约，结构由内核固定。用户只能决定是否启用，启用后模型、集合、表单与公共 API 都按同一协议解释，不能在字段编辑器中改类型、改校验或改选项。" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 570,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 568,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 566,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 gap-3 lg:grid-cols-2", children: reservedFieldDefinitions.map((definition) => {
                  const exists = form.fieldsJson.some((field) => field.name === definition.key);
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg border border-amber-200 bg-white/80 px-3 py-3 shadow-sm", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-3", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-medium text-slate-800", children: definition.label }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                            lineNumber: 581,
                            columnNumber: 33
                          }, void 0),
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "border-none bg-amber-100 text-amber-800 hover:bg-amber-100", children: definition.key }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                            lineNumber: 582,
                            columnNumber: 33
                          }, void 0),
                          exists ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "border-none bg-emerald-100 text-emerald-700 hover:bg-emerald-100", children: "已启用" }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                            lineNumber: 586,
                            columnNumber: 35
                          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "border-amber-300 text-amber-700", children: "未启用" }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                            lineNumber: 588,
                            columnNumber: 35
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 580,
                          columnNumber: 31
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs leading-5 text-slate-600", children: definition.description }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 591,
                          columnNumber: 31
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 579,
                        columnNumber: 29
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        Button,
                        {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          disabled: !canManageModels || exists,
                          onClick: () => appendReservedField(definition.key),
                          className: "h-8 shrink-0 border-amber-300 bg-amber-50 hover:bg-amber-100",
                          children: [
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Database, { size: 14, className: "mr-1" }, void 0, false, {
                              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                              lineNumber: 601,
                              columnNumber: 31
                            }, void 0),
                            exists ? "已启用" : "添加"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 593,
                          columnNumber: 29
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 578,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 space-y-1 rounded-md bg-slate-50 px-3 py-2 text-[11px] text-slate-600", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: definition.contractSummary }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 606,
                        columnNumber: 29
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: definition.capabilitySummary }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 607,
                        columnNumber: 29
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 605,
                      columnNumber: 27
                    }, void 0)
                  ] }, definition.key, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 577,
                    columnNumber: 25
                  }, void 0);
                }) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 573,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 565,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-12 md:items-end", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5 md:col-span-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[12px] uppercase text-slate-500", children: "显示名称" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 617,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      className: "h-9 text-sm",
                      placeholder: "例如：标题",
                      value: newField.label,
                      disabled: !canManageModels,
                      onChange: (e) => setNewField({ ...newField, label: e.target.value })
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 618,
                      columnNumber: 21
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 616,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5 md:col-span-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[12px] uppercase text-slate-500", children: "类型" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 627,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "select",
                    {
                      className: "h-9 w-full rounded border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500",
                      value: newField.type,
                      disabled: !canManageModels,
                      onChange: (e) => setNewField(normalizeFieldDraft({ ...newField, type: e.target.value })),
                      children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "text", children: "文本" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 634,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "textarea", children: "多行文本" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 635,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "number", children: "数字" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 636,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "richtext", children: "富文本" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 637,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "image", children: "图片单张" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 638,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "multi_image", children: "图片多张" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 639,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "media", children: "单文件/媒体" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 640,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "multi_file", children: "多文件/媒体" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 641,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "radio", children: "单选" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 642,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "checkbox", children: "多选" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 643,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "select", children: "下拉单选" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 644,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "multi_select", children: "下拉多选" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 645,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "relation_single", children: "关联单选" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 646,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "relation_multi", children: "关联多选" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 647,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "json", children: "JSON" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 648,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "reference", children: "通用引用" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 649,
                          columnNumber: 23
                        }, void 0)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 628,
                      columnNumber: 21
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 626,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5 md:col-span-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[12px] uppercase text-slate-500", children: "字段 Key" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 653,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      className: "h-9 text-sm",
                      placeholder: "例如：title",
                      value: newField.name,
                      disabled: !canManageModels,
                      onChange: (e) => setNewField({ ...newField, name: e.target.value })
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 654,
                      columnNumber: 21
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 652,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5 md:col-span-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[12px] uppercase text-slate-500", children: "占位提示" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 663,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      className: "h-9 text-sm",
                      placeholder: "表单输入时的提示文案",
                      value: newField.placeholder || "",
                      disabled: !canManageModels,
                      onChange: (e) => setNewField({ ...newField, placeholder: e.target.value })
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 664,
                      columnNumber: 21
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 662,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 615,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 flex flex-wrap items-center gap-4", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Switch,
                    {
                      id: "required-toggle",
                      checked: newField.required,
                      disabled: !canManageModels,
                      onCheckedChange: (v) => setNewField({ ...newField, required: v })
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 676,
                      columnNumber: 21
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "required-toggle", className: "text-xs font-normal", children: "必填项" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 682,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 675,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Switch,
                    {
                      id: "list-toggle",
                      checked: newField.isListDisplay,
                      disabled: !canManageModels,
                      onCheckedChange: (v) => setNewField({ ...newField, isListDisplay: v })
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 685,
                      columnNumber: 21
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "list-toggle", className: "text-xs font-normal", children: "在列表中展示" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 691,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 684,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: openFieldAdvancedSettings,
                    disabled: !canManageModels,
                    className: "h-8",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings2, { size: 14, className: "mr-1" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 701,
                        columnNumber: 21
                      }, void 0),
                      "高级选项"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 693,
                    columnNumber: 19
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 674,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600", children: describeFieldAdvancedState(newField).length > 0 ? describeFieldAdvancedState(newField).map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-white text-slate-700 hover:bg-white", children: item }, item, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 709,
                columnNumber: 23
              }, void 0)) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "当前字段使用默认配置，更多规则可在高级选项中设置。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 714,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 706,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    type: "button",
                    onClick: upsertField,
                    size: "sm",
                    disabled: !canManageModels || !!fieldDraftDisabledReason,
                    className: "h-9 bg-slate-800 hover:bg-slate-900",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 14, className: "mr-1" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 726,
                        columnNumber: 21
                      }, void 0),
                      editingFieldIndex === null ? "添加字段" : "更新字段"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                    lineNumber: 719,
                    columnNumber: 19
                  },
                  void 0
                ),
                editingFieldIndex !== null ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", size: "sm", onClick: resetFieldDraft, children: "取消编辑" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 730,
                  columnNumber: 21
                }, void 0) : null
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 718,
                columnNumber: 17
              }, void 0),
              fieldDraftDisabledReason ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600", children: fieldDraftDisabledReason }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 737,
                columnNumber: 19
              }, void 0) : null
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 564,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "overflow-hidden rounded-lg border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[120px]", children: "字段 Key" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 747,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "显示名称" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 748,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "类型" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 749,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-center", children: "属性" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 750,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-right", children: "操作" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 751,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 746,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 745,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: form.fieldsJson.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 5, className: "text-center py-6 text-slate-400 text-sm italic", children: "尚未添加任何字段..." }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 757,
                columnNumber: 27
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 756,
                columnNumber: 25
              }, void 0) : form.fieldsJson.map((field, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                TableRow,
                {
                  onDragOver: (e) => {
                    if (!canManageModels) return;
                    e.preventDefault();
                    setDragOverIdx(idx);
                  },
                  onDragLeave: () => setDragOverIdx(null),
                  onDrop: (e) => {
                    if (!canManageModels) return;
                    e.preventDefault();
                    setDraggingIdx(null);
                    setDragOverIdx(null);
                    const fromIndex = parseInt(e.dataTransfer.getData("text/plain"));
                    const toIndex = idx;
                    if (fromIndex === toIndex || isNaN(fromIndex)) return;
                    const newFields = [...form.fieldsJson];
                    const [movedItem] = newFields.splice(fromIndex, 1);
                    newFields.splice(toIndex, 0, movedItem);
                    setForm((prev) => ({ ...prev, fieldsJson: newFields }));
                  },
                  className: `${isReservedField(field) ? "bg-amber-50/70" : "hover:bg-slate-50/50"} transition-all ${draggingIdx === idx ? "opacity-40 bg-slate-100" : ""} ${dragOverIdx === idx ? "border-t-2 border-blue-500 bg-blue-50" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "font-mono text-xs", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1", children: [
                      isReservedField(field) ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { size: 12, className: "text-amber-700" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 792,
                        columnNumber: 59
                      }, void 0) : null,
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: field.name }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 793,
                        columnNumber: 33
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 791,
                      columnNumber: 31
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 790,
                      columnNumber: 29
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: field.label }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 798,
                        columnNumber: 33
                      }, void 0),
                      getReservedFieldMeta(field) ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-amber-700", children: getReservedFieldMeta(field)?.capabilitySummary }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 800,
                        columnNumber: 35
                      }, void 0) : null
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 797,
                      columnNumber: 31
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 796,
                      columnNumber: 29
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: getFieldTypeBadge(field.type) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 804,
                      columnNumber: 29
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap justify-center gap-2", children: describeFieldAdvancedState(field).map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "border-none bg-slate-100 px-1 text-[12px] text-slate-700", children: item }, `${field.name}-${item}`, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 808,
                      columnNumber: 35
                    }, void 0)) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 806,
                      columnNumber: 31
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 805,
                      columnNumber: 29
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-end gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "div",
                        {
                          draggable: canManageModels,
                          onDragStart: (e) => {
                            if (!canManageModels) return;
                            setDraggingIdx(idx);
                            e.dataTransfer.setData("text/plain", idx.toString());
                          },
                          onDragEnd: () => {
                            setDraggingIdx(null);
                            setDragOverIdx(null);
                          },
                          className: `${canManageModels ? "cursor-move hover:text-slate-600" : "cursor-not-allowed opacity-50"} text-slate-400 p-1`,
                          title: "按住拖动排序",
                          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(GripVertical, { size: 14 }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                            lineNumber: 830,
                            columnNumber: 35
                          }, void 0)
                        },
                        void 0,
                        false,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 816,
                          columnNumber: 33
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        Button,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => startEditField(idx),
                          disabled: !canManageModels || isReservedField(field),
                          className: `h-8 w-8 p-0 ${isReservedField(field) ? "text-amber-400 hover:text-amber-400" : "text-slate-400 hover:text-blue-600"}`,
                          title: isReservedField(field) ? "系统字段已锁定，只允许添加或移除" : "编辑字段",
                          children: isReservedField(field) ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { size: 14 }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                            lineNumber: 840,
                            columnNumber: 61
                          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pencil, { size: 14 }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                            lineNumber: 840,
                            columnNumber: 82
                          }, void 0)
                        },
                        void 0,
                        false,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                          lineNumber: 832,
                          columnNumber: 33
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", onClick: () => removeField(idx), disabled: !canManageModels, className: "text-slate-400 hover:text-red-600 h-8 w-8 p-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 843,
                        columnNumber: 35
                      }, void 0) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                        lineNumber: 842,
                        columnNumber: 33
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 815,
                      columnNumber: 31
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 814,
                      columnNumber: 29
                    }, void 0)
                  ]
                },
                idx,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 763,
                  columnNumber: 27
                },
                void 0
              )) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 754,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 744,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 743,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 555,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 520,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 494,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: advancedSettingsOpen, onOpenChange: setAdvancedSettingsOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-xl", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: "字段高级设置" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 860,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 859,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-5 px-4 pb-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-600", children: "开启隐藏字段后，该字段不会出现在内容录入表单中，后续请在 `/admin/collections` 的高级字段配置里指定它的生成方式。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 864,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between rounded-lg border px-3 py-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-medium text-slate-800", children: "隐藏字段" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 870,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "隐藏后不在录入表单展示，由集合层决定如何生成字段值。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 871,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 869,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Switch,
            {
              checked: !!newField.ui?.hidden,
              disabled: !canManageModels,
              onCheckedChange: (checked) => updateFieldUi({ hidden: checked })
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 873,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 868,
          columnNumber: 13
        }, void 0),
        newField.type === "text" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "格式校验正则" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 883,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "例如：^1[3-9]\\\\d{9}$ 或 ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$",
                value: newField.validation?.textPattern || "",
                disabled: !canManageModels,
                onChange: (e) => updateFieldValidation({ textPattern: e.target.value })
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 884,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 882,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "校验失败提示" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 892,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "例如：请输入正确的手机号或邮箱",
                value: newField.validation?.textErrorMessage || "",
                disabled: !canManageModels,
                onChange: (e) => updateFieldValidation({ textErrorMessage: e.target.value })
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 893,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 891,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 881,
          columnNumber: 15
        }, void 0) : null,
        newField.type === "textarea" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "最大字数" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 905,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              type: "number",
              min: "0",
              placeholder: "0 表示不限制",
              value: newField.validation?.textareaMaxLength ?? 0,
              disabled: !canManageModels,
              onChange: (e) => updateFieldValidation({ textareaMaxLength: Number(e.target.value || 0) })
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 906,
              columnNumber: 17
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "多行文本第一版只提供字数限制，0 代表不限字数。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 914,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 904,
          columnNumber: 15
        }, void 0) : null,
        newField.type === "number" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "数字类型" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 922,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "select",
                {
                  className: "h-9 w-full rounded border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500",
                  value: newField.validation?.numberMode || "integer",
                  disabled: !canManageModels,
                  onChange: (e) => updateFieldValidation({ numberMode: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "integer", children: "整数" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 929,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "decimal", children: "小数" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 930,
                      columnNumber: 23
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 923,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 921,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "步长" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 934,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  type: "number",
                  min: "0.000001",
                  step: "0.000001",
                  value: newField.validation?.numberStep ?? 1,
                  disabled: !canManageModels,
                  onChange: (e) => updateFieldValidation({ numberStep: Number(e.target.value || 1) })
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 935,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 933,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 920,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between rounded-lg border px-3 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-medium text-slate-800", children: "允许负数" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 947,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "适合成本、差额、温度等可能出现负值的场景。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 948,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 946,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Switch,
              {
                checked: !!newField.validation?.allowNegative,
                disabled: !canManageModels,
                onCheckedChange: (checked) => updateFieldValidation({ allowNegative: checked })
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 950,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 945,
            columnNumber: 17
          }, void 0),
          (newField.validation?.numberMode || "integer") === "decimal" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "保留小数位" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 959,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  type: "number",
                  min: "0",
                  value: newField.validation?.decimalPlaces ?? 2,
                  disabled: !canManageModels,
                  onChange: (e) => updateFieldValidation({ decimalPlaces: Number(e.target.value || 0) })
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 960,
                  columnNumber: 23
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 958,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "取整方式" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                lineNumber: 969,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "select",
                {
                  className: "h-9 w-full rounded border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500",
                  value: newField.validation?.roundingMode || "round",
                  disabled: !canManageModels,
                  onChange: (e) => updateFieldValidation({ roundingMode: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "round", children: "四舍五入" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 976,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "ceil", children: "向上取整" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 977,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "floor", children: "向下取整" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                      lineNumber: 978,
                      columnNumber: 25
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
                  lineNumber: 970,
                  columnNumber: 23
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 968,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 957,
            columnNumber: 19
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "整数模式下默认不允许小数输入。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 983,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 919,
          columnNumber: 15
        }, void 0) : null,
        !["text", "textarea", "number"].includes(newField.type) ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500", children: "当前字段类型第一版暂无额外高级校验项，仅支持设置是否隐藏。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 989,
          columnNumber: 15
        }, void 0) : null
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 863,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "px-4 pb-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: () => setAdvancedSettingsOpen(false), children: "完成" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 994,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 993,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
      lineNumber: 858,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
      lineNumber: 857,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-100 shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "pl-6", children: "模型名称" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1005,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "标识 (Slug)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1006,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "字段概览" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1007,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-right pr-6", children: "操作" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1008,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1004,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1003,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "py-20 text-center", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin inline-block text-blue-500 mb-2", size: 32 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1015,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500", children: "正在通过 Drizzle 拉取模型定义..." }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1016,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1014,
        columnNumber: 18
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1013,
        columnNumber: 15
      }, void 0) : models.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "py-20 text-center", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Database, { size: 48, className: "text-slate-200 inline-block mb-4" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1022,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-500", children: "尚未定义任何动态模型" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1023,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", className: "mt-4", onClick: () => canManageModels && setIsCreateOpen(true), disabled: !canManageModels, children: "点击开始创建" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1024,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1021,
        columnNumber: 18
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1020,
        columnNumber: 15
      }, void 0) : models.map((model) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "hover:bg-slate-50/50 group", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "pl-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold", children: model.name[0] }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 1032,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-slate-800", children: model.name }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 1035,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1031,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1030,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "text-xs bg-slate-100 px-2 py-1 rounded text-slate-600", children: model.slug }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1039,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1038,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1", children: [
          model.fieldsJson.slice(0, 3).map((f, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded", children: f.label }, i, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 1044,
            columnNumber: 25
          }, void 0)),
          model.fieldsJson.length > 3 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400", children: [
            "+",
            model.fieldsJson.length - 3
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 1048,
            columnNumber: 55
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1042,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1041,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right pr-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", className: "opacity-0 group-hover:opacity-100 transition-opacity text-slate-500", onClick: () => canManageModels && setEditingModel(model), disabled: !canManageModels, children: [
            "编辑定义 ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings2, { size: 14, className: "ml-1" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
              lineNumber: 1054,
              columnNumber: 31
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 1053,
            columnNumber: 24
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", className: "text-slate-400 hover:text-red-600", onClick: () => canManageModels && setDeleteId(model.id), disabled: !canManageModels, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 1057,
            columnNumber: 26
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
            lineNumber: 1056,
            columnNumber: 24
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1052,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1051,
          columnNumber: 19
        }, void 0)
      ] }, model.id, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1029,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1011,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
      lineNumber: 1002,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
      lineNumber: 1001,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!deleteId,
        onOpenChange: (open) => !open && setDeleteId(null),
        title: "确认删除模型？",
        description: "确定要删除该模型吗？这将同步删除相关的权限定义。删除前系统会先校验是否仍有业务集合在引用该模型；如果还在被集合使用，系统会阻止删除并明确提示原因。",
        onConfirm: handleDeleteModel,
        onCancel: () => setDeleteId(null),
        confirmText: "彻底删除",
        variant: "destructive",
        isLoading: isDeleting
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1068,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: errorDialog.open,
        onOpenChange: (open) => !open && setErrorDialog({ open: false, message: "" }),
        title: "无法删除模型",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-medium text-slate-700", children: errorDialog.message }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
          lineNumber: 1084,
          columnNumber: 22
        }, void 0),
        onConfirm: () => setErrorDialog({ open: false, message: "" }),
        confirmText: "知道了",
        hideCancel: true,
        variant: "destructive"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
        lineNumber: 1080,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement.tsx",
    lineNumber: 462,
    columnNumber: 5
  }, void 0);
};
const $$Models = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Models;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["models.view", "models.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "模型引擎管理" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorBoundary", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/ui/ErrorBoundary", "client:component-export": "ErrorBoundary" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ModelsManagement", ModelsManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/ModelsManagement", "client:component-export": "ModelsManagement" })} ` })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/models.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/models.astro";
const $$url = "/admin/models";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Models,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
