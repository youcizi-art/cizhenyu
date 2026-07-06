globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, R as React, a as renderComponent } from "./worker-entry_DQAyehZh.mjs";
import { f as flattenTreeWithPrefix, b as buildTree, a as LayoutTemplate, F as FolderOpen, c as FolderClosed, d as Pencil, A as ArrowRight, S as ShieldAlert, e as LucideIcons, $ as $$DashboardLayout } from "./DashboardLayout_Cly2CC3o.mjs";
import { h as useAdminPermissions, u as useToast, j as jsxDevRuntimeExports, B as Button, I as Input, L as Loader2, T as Trash2, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, D as DialogFooter, r as DialogTrigger } from "./useAdminPermissions_CAR-Xq1O.mjs";
import { C as Card } from "./Card_BdyOyfIQ.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_BDFOHypt.mjs";
import { B as Badge } from "./Badge_BF0_7Zi1.mjs";
import { S as Switch } from "./Switch_DEhsob1-.mjs";
import { C as ChevronDown, a as ChevronRight, c as ConfirmDialog } from "./chat-workspace_D3zVFcLO.mjs";
import { F as FormDialog } from "./FormDialog_BAETsQhL.mjs";
import { L as Layers, a as Link2 } from "./agent-session-utils_Bd5uE09j.mjs";
import { P as Plus, S as Settings } from "./settings_Dtra946-.mjs";
import { S as Save } from "./save_B_xHweMU.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const AVAILABLE_ICONS = [
  "Layers",
  "LayoutGrid",
  "Users",
  "MessageSquare",
  "ShoppingBag",
  "FileText",
  "Image",
  "Globe",
  "Settings",
  "Package",
  "Shield",
  "Wand2",
  "Database",
  "Code2",
  "Mail",
  "Languages",
  "Clock",
  "Search",
  "Bell",
  "Calendar",
  "Briefcase"
];
const CollectionsManagement = () => {
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canManageCollections = hasPermission2(["collections.manage", "role.manage"]);
  const [collections, setCollections] = reactExports.useState([]);
  const [models, setModels] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [isCreateOpen, setIsCreateOpen] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [deleteId, setDeleteId] = reactExports.useState(null);
  const [deleteName, setDeleteName] = reactExports.useState("");
  const [errorDialog, setErrorDialog] = reactExports.useState({ open: false, message: "" });
  const [isEdit, setIsEdit] = reactExports.useState(false);
  const [editId, setEditId] = reactExports.useState(null);
  const [isGroupEditOpen, setIsGroupEditOpen] = reactExports.useState(false);
  const [groupForm, setGroupForm] = reactExports.useState({
    oldName: "",
    newName: "",
    icon: "Layers"
  });
  const { toast } = useToast();
  const [form, setForm] = reactExports.useState({
    name: "",
    slug: "",
    modelId: 0,
    description: "",
    icon: "Layers",
    sort: 0,
    menuGroup: "",
    parentId: null,
    metadata: {
      presentationMode: "list"
    }
  });
  const [formError, setFormError] = reactExports.useState("");
  const resetCollectionForm = () => {
    setForm({
      name: "",
      slug: "",
      modelId: 0,
      description: "",
      icon: "Layers",
      sort: 0,
      menuGroup: "",
      parentId: null,
      metadata: {
        presentationMode: "list"
      }
    });
    setFormError("");
    setIsEdit(false);
    setEditId(null);
  };
  const [expandedGroups, setExpandedGroups] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedNodes, setExpandedNodes] = reactExports.useState(/* @__PURE__ */ new Set());
  reactExports.useEffect(() => {
    if (collections.length > 0) {
      const groups = new Set(collections.map((c) => c.menuGroup || "其它内容"));
      setExpandedGroups(groups);
      const nodesWithChildren = new Set(collections.filter((c) => collections.some((child) => child.parentId === c.id)).map((c) => c.id));
      setExpandedNodes(nodesWithChildren);
    }
  }, [collections.length === 0]);
  reactExports.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const [cRes, mRes] = await Promise.all([
        fetch("/api/v1/rbac/collections"),
        fetch("/api/v1/rbac/models")
      ]);
      const [cData, mData] = await Promise.all([cRes.json(), mRes.json()]);
      setCollections(cData);
      setModels(mData);
    } catch (e) {
      toast({ variant: "destructive", title: "加载失败", description: "无法获取集合或模型数据" });
    } finally {
      setLoading(false);
    }
  };
  const handleNameChange = (name) => {
    const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    setFormError("");
    setForm((prev) => ({ ...prev, name, slug }));
  };
  const handleSave = async () => {
    if (!canManageCollections) return;
    const disabledReason = getCollectionSaveDisabledReason();
    if (disabledReason) {
      return;
    }
    setFormError("");
    setSaving(true);
    try {
      const url = isEdit ? `/api/v1/rbac/collections/${editId}` : "/api/v1/rbac/collections";
      const method = isEdit ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setIsCreateOpen(false);
        resetCollectionForm();
        window.dispatchEvent(new CustomEvent("collections-updated"));
        fetchData();
        toast({ title: isEdit ? "更新成功" : "创建成功" });
      } else {
        const err = await res.json();
        throw new Error(err.error || (isEdit ? "更新失败" : "创建失败"));
      }
    } catch (e) {
      setFormError(e.message);
      toast({ variant: "destructive", title: "保存失败", description: e.message });
    } finally {
      setSaving(false);
    }
  };
  const getCollectionSaveDisabledReason = () => {
    if (models.length === 0) return "当前没有可用内容模型，请先到内容模型定义中创建模型。";
    if (!form.name.trim()) return "请先填写集合名称。";
    if (!form.slug.trim()) return "请先填写唯一标识 Slug。";
    if (form.modelId === 0) return "请选择一个绑定内容模型。";
    return "";
  };
  const handleSaveGroup = async () => {
    if (!canManageCollections) return;
    if (!groupForm.newName.trim()) {
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/v1/rbac/collections/group/${encodeURIComponent(groupForm.oldName)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newName: groupForm.newName,
          icon: groupForm.icon
        })
      });
      if (res.ok) {
        setIsGroupEditOpen(false);
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("collections-updated"));
          fetchData();
        }, 100);
        toast({ title: "分组更新成功" });
      } else {
        const err = await res.json();
        throw new Error(err.error || "更新失败");
      }
    } catch (e) {
      toast({ variant: "destructive", title: "保存失败", description: e.message });
    } finally {
      setSaving(false);
    }
  };
  const openEdit = (c) => {
    if (!canManageCollections) {
      return;
    }
    setForm({
      name: c.name,
      slug: c.slug,
      modelId: c.modelId,
      description: c.description,
      icon: c.icon || "Layers",
      sort: c.sort || 0,
      menuGroup: c.menuGroup || "",
      parentId: c.parentId || null,
      metadata: {
        ...c.metadata || {},
        presentationMode: c.metadata?.presentationMode === "single_form" ? "single_form" : "list"
      }
    });
    setEditId(c.id);
    setIsEdit(true);
    setIsCreateOpen(true);
  };
  const handleDelete = async (id) => {
    if (!canManageCollections) {
      return;
    }
    try {
      const res = await fetch(`/api/v1/rbac/collections/${id}`, { method: "DELETE" });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 409) {
          setErrorDialog({ open: true, message: result.error || "当前业务集合下还有数据记录，请先清空后再删除。" });
          setDeleteId(null);
          return;
        }
        throw new Error(result.error || "删除业务集合失败");
      }
      toast({ title: "已删除", description: "集合入口已关闭" });
      window.dispatchEvent(new CustomEvent("collections-updated"));
      fetchData();
      setDeleteId(null);
    } catch (e) {
      toast({ variant: "destructive", title: "操作失败", description: e.message });
      setDeleteId(null);
    }
  };
  const collectionSaveDisabledReason = getCollectionSaveDisabledReason();
  const groupSaveDisabledReason = !groupForm.newName.trim() ? "请先填写分组名称。" : "";
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Layers, { className: "text-blue-600", size: 24 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, void 0),
          "业务集合管理 (Collections)"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 305,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500 mt-1", children: "基于内容模型创建不同的业务单元（如：博客、技术文档、通知公告）。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 309,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 304,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { className: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 gap-2", onClick: () => canManageCollections && setIsCreateOpen(true), disabled: !canManageCollections, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 18 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 315,
          columnNumber: 11
        }, void 0),
        "创建新集合"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 314,
        columnNumber: 9
      }, void 0),
      !loadingPermissions && !canManageCollections ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看业务集合结构，创建、编辑、分组调整和删除操作已禁用。" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 320,
        columnNumber: 11
      }, void 0) : null,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        FormDialog,
        {
          open: isCreateOpen,
          onOpenChange: (open) => {
            if (!canManageCollections && open) return;
            setIsCreateOpen(open);
            if (!open) {
              resetCollectionForm();
            }
          },
          title: isEdit ? "编辑业务集合" : "实例化业务集合",
          contentClassName: "max-w-xl",
          bodyClassName: "grid gap-4 py-4",
          cancelText: "取消",
          confirmText: isEdit ? "保存更改" : "确认创建",
          onCancel: () => {
            setIsCreateOpen(false);
            resetCollectionForm();
          },
          onConfirm: handleSave,
          confirmLoading: saving,
          confirmDisabled: !canManageCollections || saving || !!collectionSaveDisabledReason,
          confirmHint: formError || collectionSaveDisabledReason,
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-medium", children: "集合名称 (显示在侧边栏)" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 349,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "如：官方博客", value: form.name, onChange: (e) => handleNameChange(e.target.value) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 350,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 348,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-medium", children: "唯一标识 (Slug)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 354,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "blog", value: form.slug, onChange: (e) => setForm({ ...form, slug: e.target.value }) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 355,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 353,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-medium", children: "绑定内容模型" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 358,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "select",
                  {
                    className: "w-full h-10 px-3 bg-white border border-slate-200 rounded-md text-sm",
                    value: form.modelId,
                    onChange: (e) => {
                      setFormError("");
                      setForm({ ...form, modelId: parseInt(e.target.value) });
                    },
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: 0, children: "选择一个骨架模型..." }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 367,
                        columnNumber: 17
                      }, void 0),
                      models.map((m) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: m.id, children: [
                        m.name,
                        " (",
                        m.slug,
                        ")"
                      ] }, m.id, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 368,
                        columnNumber: 34
                      }, void 0))
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 359,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 357,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 352,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-medium", children: "描述信息" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 374,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "简述用途...", value: form.description, onChange: (e) => setForm({ ...form, description: e.target.value }) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 375,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 373,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-medium", children: "展示模式" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 378,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "select",
                  {
                    className: "w-full h-10 px-3 bg-white border border-slate-200 rounded-md text-sm",
                    value: form.metadata?.presentationMode === "single_form" ? "single_form" : "list",
                    onChange: (e) => setForm({
                      ...form,
                      metadata: {
                        ...form.metadata || {},
                        presentationMode: e.target.value === "single_form" ? "single_form" : "list"
                      }
                    }),
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "list", children: "列表模式" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 390,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "single_form", children: "单表单模式" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 391,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 379,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-500", children: "单表单模式会将内容页直接渲染为表单，并以默认语种第一条记录作为基准。" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 393,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 377,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 372,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-medium flex items-center justify-between", children: "父级菜单/名称" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 398,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative group/parent", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    placeholder: "输入或选择...",
                    list: "menu-options",
                    value: form.parentId ? collections.find((c) => c.id === form.parentId)?.name || "" : form.menuGroup || "",
                    onChange: (e) => {
                      const val = e.target.value;
                      const matchedColl = collections.find((c) => c.name === val);
                      if (matchedColl) {
                        setForm({ ...form, parentId: matchedColl.id, menuGroup: matchedColl.menuGroup || "" });
                      } else {
                        setForm({ ...form, parentId: null, menuGroup: val });
                      }
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 400,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("datalist", { id: "menu-options", children: [
                  [...new Set(collections.map((c) => c.menuGroup).filter(Boolean))].map((group) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: group }, `group-${group}`, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 416,
                    columnNumber: 21
                  }, void 0)),
                  flattenTreeWithPrefix(buildTree(collections, { idKey: "id", parentKey: "parentId" }), "name", "└── ").map((c) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: c.name }, `coll-${c.id}`, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 419,
                    columnNumber: 21
                  }, void 0))
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 414,
                  columnNumber: 17
                }, void 0),
                form.parentId && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute right-3 top-2 text-[12px] text-blue-500 bg-blue-50 px-1 rounded border border-blue-100", children: "作为子集" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 423,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] h-4 pt-2 text-yellow-400", children: "输入新名称自动创建一级菜单" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 427,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 399,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 397,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 396,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 325,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-100 shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "pl-6", children: "业务集合" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 438,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "绑定模型" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 439,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "Slug" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 440,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-right pr-6", children: "操作" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 441,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 437,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 436,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "py-20 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin inline-block text-blue-500" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 447,
        columnNumber: 70
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 447,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 446,
        columnNumber: 15
      }, void 0) : collections.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "py-20 text-center", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LayoutTemplate, { size: 48, className: "text-slate-200 inline-block mb-4" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 452,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-500 italic", children: "尚未创建任何业务集合" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 453,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 451,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 450,
        columnNumber: 15
      }, void 0) : (() => {
        const groups = collections.filter((c) => c.slug !== "media_library").reduce((acc, c) => {
          const g = c.menuGroup || "其它内容";
          if (!acc[g]) acc[g] = [];
          acc[g].push(c);
          return acc;
        }, {});
        return Object.entries(groups).map(([groupName, groupItems]) => {
          const isGroupExpanded = expandedGroups.has(groupName);
          const groupTree = buildTree(groupItems, { idKey: "id", parentKey: "parentId" });
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(React.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              TableRow,
              {
                className: "bg-slate-50/80 hover:bg-slate-100/80 cursor-pointer border-y border-slate-200/60",
                onClick: () => {
                  const next = new Set(expandedGroups);
                  if (next.has(groupName)) next.delete(groupName);
                  else next.add(groupName);
                  setExpandedGroups(next);
                },
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "py-2.5 pl-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between w-full pr-4 group/header", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-slate-600", children: [
                    isGroupExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 14 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 486,
                      columnNumber: 50
                    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 14 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 486,
                      columnNumber: 78
                    }, void 0),
                    isGroupExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FolderOpen, { size: 16, className: "text-blue-500/70" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 487,
                      columnNumber: 50
                    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FolderClosed, { size: 16, className: "text-slate-400" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 487,
                      columnNumber: 106
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold uppercase tracking-wider font-mono", children: groupName }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 488,
                      columnNumber: 31
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-slate-200/50 text-slate-500 text-[12px] h-4 ml-1", children: groupItems.length }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 489,
                      columnNumber: 31
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 485,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-7 px-2 text-slate-400 hover:text-blue-600 opacity-0 group-hover/header:opacity-100 transition-opacity",
                      onClick: (e) => {
                        e.stopPropagation();
                        setGroupForm({
                          oldName: groupName,
                          newName: groupName,
                          icon: groupItems[0]?.icon || "Layers"
                        });
                        setIsGroupEditOpen(true);
                      },
                      children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pencil, { size: 12, className: "mr-1" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                          lineNumber: 507,
                          columnNumber: 31
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px]", children: "编辑分组" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                          lineNumber: 508,
                          columnNumber: 31
                        }, void 0)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 493,
                      columnNumber: 29
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 484,
                  columnNumber: 27
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 483,
                  columnNumber: 25
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 475,
                columnNumber: 23
              },
              void 0
            ),
            isGroupExpanded && flattenTreeWithPrefix(groupTree, "name", " ").map((c) => {
              let shouldShow = true;
              let curr = c;
              while (curr.parentId) {
                if (!expandedNodes.has(curr.parentId)) {
                  shouldShow = false;
                  break;
                }
                curr = groupItems.find((it) => it.id === curr.parentId);
                if (!curr) break;
              }
              if (!shouldShow) return null;
              const hasChildren = groupItems.some((it) => it.parentId === c.id);
              const isExpanded = expandedNodes.has(c.id);
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "group hover:bg-white transition-colors border-b border-slate-100/50", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "pl-8 py-3.5 relative", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  Array.from({ length: c.level }).map((_, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-5 border-r border-slate-200 h-10 -my-4 last:mr-1" }, i, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 539,
                    columnNumber: 35
                  }, void 0)),
                  hasChildren ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        const next = new Set(expandedNodes);
                        if (next.has(c.id)) next.delete(c.id);
                        else next.add(c.id);
                        setExpandedNodes(next);
                      },
                      className: "p-0.5 hover:bg-slate-100 rounded text-slate-400",
                      children: isExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 12 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 552,
                        columnNumber: 51
                      }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 12 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 552,
                        columnNumber: 79
                      }, void 0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 543,
                      columnNumber: 35
                    },
                    void 0
                  ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-4" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 555,
                    columnNumber: 35
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-7 h-7 rounded flex items-center justify-center transition-all ${c.level > 0 ? "bg-blue-50 text-blue-500 ring-1 ring-blue-100" : "bg-slate-100 text-slate-500"}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Layers, { size: c.level > 0 ? 12 : 14 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 559,
                    columnNumber: 35
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 558,
                    columnNumber: 33
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `font-semibold text-slate-800 truncate ${c.level > 0 ? "text-xs" : "text-sm"}`, children: c.name }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 563,
                        columnNumber: 37
                      }, void 0),
                      c.level > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link2, { size: 10, className: "text-slate-300" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 566,
                        columnNumber: 53
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 562,
                      columnNumber: 35
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 truncate block whitespace-nowrap overflow-hidden max-w-[200px]", children: c.description || "无描述信息..." }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 568,
                      columnNumber: 35
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 561,
                    columnNumber: 33
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 536,
                  columnNumber: 31
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 535,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "gap-1 border-blue-50 text-blue-500 bg-blue-50/30 text-[12px] py-0 px-2 h-5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LayoutTemplate, { size: 10 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 576,
                    columnNumber: 33
                  }, void 0),
                  c.modelName
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 575,
                  columnNumber: 31
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 574,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "text-[12px] bg-slate-50 border border-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono", children: c.slug }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 582,
                    columnNumber: 33
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "text-[12px] h-5", children: c.metadata?.presentationMode === "single_form" ? "单表单" : "列表" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 583,
                    columnNumber: 33
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 581,
                  columnNumber: 31
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 580,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right pr-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end gap-1.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-blue-600", title: "进入管理", onClick: () => window.location.href = `/admin/collections/${c.slug}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 591,
                    columnNumber: 35
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 590,
                    columnNumber: 33
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 text-slate-400 hover:text-blue-600", title: "基础配置", onClick: () => canManageCollections && openEdit(c), disabled: !canManageCollections, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pencil, { size: 14 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 594,
                    columnNumber: 35
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 593,
                    columnNumber: 33
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    FieldConfigDialog,
                    {
                      collection: c,
                      collections,
                      allModels: models,
                      onUpdated: fetchData,
                      readOnly: !canManageCollections
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 596,
                      columnNumber: 33
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 text-slate-400 hover:text-red-600", title: "删除集合", onClick: () => {
                    if (!canManageCollections) return;
                    setDeleteId(c.id);
                    setDeleteName(c.name);
                  }, disabled: !canManageCollections, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 604,
                    columnNumber: 35
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 603,
                    columnNumber: 33
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 589,
                  columnNumber: 31
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 588,
                  columnNumber: 29
                }, void 0)
              ] }, c.id, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 534,
                columnNumber: 27
              }, void 0);
            })
          ] }, groupName, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 473,
            columnNumber: 21
          }, void 0);
        });
      })() }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 444,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 435,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 434,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 p-4 bg-orange-50 border border-orange-100 rounded-lg", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldAlert, { className: "text-orange-500", size: 18 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 621,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm text-orange-700 font-medium", children: [
        "提示：创建集合后，请前往“角色权限”为对应角色开启 ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "text-[12px] h-5 border-orange-200", children: [
          "collection:",
          form.slug || "...",
          ":view"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 623,
          columnNumber: 37
        }, void 0),
        " 权限。"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 622,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 620,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!deleteId,
        onOpenChange: (open) => !open && setDeleteId(null),
        title: "确认删除业务集合？",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          "确定要删除业务集合 ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-slate-900", children: [
            "[",
            deleteName,
            "]"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 633,
            columnNumber: 23
          }, void 0),
          " 吗？",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 634,
            columnNumber: 13
          }, void 0),
          "删除前会先校验该集合下是否还有数据记录；如果仍有内容数据，系统会阻止删除，你需要先进入对应集合清空数据后再继续。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 632,
          columnNumber: 11
        }, void 0),
        onConfirm: () => deleteId && handleDelete(deleteId),
        onCancel: () => setDeleteId(null),
        confirmText: "执行解绑",
        variant: "destructive"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 627,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: errorDialog.open,
        onOpenChange: (open) => !open && setErrorDialog({ open: false, message: "" }),
        title: "无法删除",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-medium text-slate-700", children: errorDialog.message }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 648,
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
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 644,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isGroupEditOpen, onOpenChange: (open) => {
      if (!canManageCollections && open) return;
      setIsGroupEditOpen(open);
    }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "sm:max-w-[440px] rounded-3xl", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pencil, { size: 20, className: "text-blue-600" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 663,
          columnNumber: 15
        }, void 0),
        "编辑目录分组"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 662,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 661,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "py-6 space-y-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-semibold text-slate-700 ml-1", children: "分组名称" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 670,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              value: groupForm.newName,
              onChange: (e) => setGroupForm({ ...groupForm, newName: e.target.value }),
              placeholder: "输入新的分组名称...",
              className: "h-11 rounded-xl border-slate-200 focus:ring-blue-500"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 671,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 669,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-semibold text-slate-700 ml-1", children: "选择分组图标" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 680,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-7 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100", children: AVAILABLE_ICONS.map((iconName) => {
            const IconComp = LucideIcons[iconName] || Layers;
            const isSelected = groupForm.icon === iconName;
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => setGroupForm({ ...groupForm, icon: iconName }),
                className: `w-10 h-10 flex items-center justify-center rounded-xl transition-all ${isSelected ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-slate-400 hover:text-blue-500 hover:bg-blue-50 border border-slate-100"}`,
                title: iconName,
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(IconComp, { size: 18 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 696,
                  columnNumber: 23
                }, void 0)
              },
              iconName,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 686,
                columnNumber: 21
              },
              void 0
            );
          }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 681,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 679,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-blue-50/50 p-3 rounded-xl border border-blue-100/50 flex gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldAlert, { className: "text-blue-500 shrink-0", size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 704,
            columnNumber: 16
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-blue-700 leading-relaxed font-medium", children: "提示：修改分组名称会同步更新该线下所有集合的所属菜单项；修改图标将同步更新侧边栏中该目录的展示图标。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 705,
            columnNumber: 16
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 703,
          columnNumber: 13
        }, void 0),
        groupSaveDisabledReason && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600", children: groupSaveDisabledReason }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 710,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 668,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", onClick: () => setIsGroupEditOpen(false), className: "rounded-xl", children: "取消" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 717,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: handleSaveGroup,
            disabled: !canManageCollections || saving || !!groupSaveDisabledReason,
            className: "bg-blue-600 text-white px-8 rounded-xl shadow-lg shadow-blue-500/20",
            children: [
              saving ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin mr-2", size: 16 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 723,
                columnNumber: 25
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { className: "mr-2", size: 16 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 723,
                columnNumber: 79
              }, void 0),
              "确认更新"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 718,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 716,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 660,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 656,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
    lineNumber: 302,
    columnNumber: 5
  }, void 0);
};
const FieldConfigDialog = ({ collection, collections, allModels, onUpdated, readOnly = false }) => {
  const [open, setOpen] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("fields");
  const [settings, setSettings] = reactExports.useState(collection.fieldConfig || collection.relationSettings || {});
  const { toast } = useToast();
  reactExports.useEffect(() => {
    if (open) {
      setSettings(collection.fieldConfig || collection.relationSettings || {});
    }
  }, [open, collection]);
  const currentModel = allModels.find((m) => m.id === collection.modelId);
  const fields = currentModel ? typeof currentModel.fieldsJson === "string" ? JSON.parse(currentModel.fieldsJson) : currentModel.fieldsJson : [];
  const handleUpdateRelation = (fieldName, targetSlug, displayField = "name") => {
    if (readOnly) {
      return;
    }
    setSettings((prev) => {
      const newSettings = { ...prev };
      if (!targetSlug) {
        delete newSettings[fieldName];
      } else {
        newSettings[fieldName] = { ...newSettings[fieldName], target_slug: targetSlug, display_field: displayField, targetCollectionSlug: targetSlug, displayField };
      }
      return newSettings;
    });
  };
  const handleUpdateOptions = (fieldName, options) => {
    if (readOnly) {
      return;
    }
    setSettings((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], options }
    }));
  };
  const handleUpdateApiPolicy = (updates) => {
    if (readOnly) {
      return;
    }
    setSettings((prev) => ({
      ...prev,
      __api_policy: { ...prev.__api_policy || {}, ...updates }
    }));
  };
  const handleUpdateNotificationPolicy = (updates) => {
    if (readOnly) {
      return;
    }
    setSettings((prev) => ({
      ...prev,
      __notification_policy: { ...prev.__notification_policy || {}, ...updates }
    }));
  };
  const handleUpdateGeneration = (fieldName, updates) => {
    if (readOnly) {
      return;
    }
    setSettings((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName] || {},
        generation: {
          enabled: true,
          preset: "manual",
          ...prev[fieldName]?.generation || {},
          ...updates
        }
      }
    }));
  };
  const save = async () => {
    if (readOnly) {
      return;
    }
    setSaving(true);
    try {
      const payload = { ...collection };
      delete payload.modelName;
      const res = await fetch(`/api/v1/rbac/collections/${collection.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          fieldConfig: settings
          // Store everything under fieldConfig
        })
      });
      if (res.ok) {
        toast({ title: "配置已更新", description: "字段高级配置已生效" });
        setOpen(false);
        onUpdated();
      } else {
        const d = await res.json();
        throw new Error(d.error || "保存失败");
      }
    } catch (e) {
      toast({ variant: "destructive", title: "保存失败", description: e.message });
    } finally {
      setSaving(false);
    }
  };
  const editableFields = fields.filter(
    (f) => ["checkbox", "radio", "select", "multi_select", "relation", "relation_single", "relation_multi", "reference"].includes(f.type)
  );
  const hiddenFields = fields.filter((f) => !!f?.ui?.hidden);
  const sourceFields = fields.filter((f) => f.type !== "json" && f.type !== "reference");
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", className: "text-slate-400 hover:text-blue-600 flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { size: 16 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 863,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: "配置" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 864,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 862,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 861,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-3xl max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2", children: [
        "高级字段配置: ",
        collection.name
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 869,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 868,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "py-2 space-y-4", children: [
        readOnly ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800", children: "当前账号仅可查看字段配置、API 开放治理和通知钩子配置，保存操作已禁用。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 875,
          columnNumber: 13
        }, void 0) : null,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex border-b", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              className: `px-4 py-2 text-sm font-medium ${activeTab === "fields" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"}`,
              onClick: () => setActiveTab("fields"),
              children: "内部字段配置"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 880,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              className: `px-4 py-2 text-sm font-medium ${activeTab === "api" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"}`,
              onClick: () => setActiveTab("api"),
              children: "API 开放治理"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 884,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              className: `px-4 py-2 text-sm font-medium ${activeTab === "hooks" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"}`,
              onClick: () => setActiveTab("hooks"),
              children: "通知钩子 (Hooks)"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 888,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 879,
          columnNumber: 11
        }, void 0),
        activeTab === "fields" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "这里分成两部分：可交互字段用于配置选项和关联目标；隐藏字段用于设置系统自动生成方式。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 896,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
            editableFields.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-slate-400", children: "当前模型暂无需要辅助配置的可交互字段。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 902,
              columnNumber: 19
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: editableFields.map((f) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border rounded-lg bg-slate-50 shadow-sm", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold", children: f.label }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 908,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "text-[12px] font-mono", children: f.name }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 909,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "text-[12px] bg-blue-100 text-blue-600 border-none", children: f.type.toUpperCase() }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 910,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 907,
                columnNumber: 23
              }, void 0),
              ["radio", "checkbox", "select", "multi_select"].includes(f.type) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                OptionEditor,
                {
                  initialOptions: settings[f.name]?.options || [],
                  onChange: (opts) => handleUpdateOptions(f.name, opts),
                  readOnly
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 914,
                  columnNumber: 25
                },
                void 0
              ),
              ["relation", "relation_single", "relation_multi"].includes(f.type) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold text-slate-600", children: "目标业务集合 (Target Collection)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 924,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "select",
                    {
                      className: "w-full h-9 text-sm border rounded px-3",
                      value: settings[f.name]?.target_slug || settings[f.name]?.targetCollectionSlug || f.relationConfig?.collectionSlug || "",
                      disabled: readOnly,
                      onChange: (e) => handleUpdateRelation(f.name, e.target.value, settings[f.name]?.display_field || settings[f.name]?.displayField || "name"),
                      children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "", children: "-- 请选择数据源 --" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                          lineNumber: 932,
                          columnNumber: 31
                        }, void 0),
                        collections.filter((c) => c.id !== collection.id).map((c) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: c.slug, children: [
                          c.name,
                          " (",
                          c.slug,
                          ")"
                        ] }, c.id, true, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                          lineNumber: 934,
                          columnNumber: 33
                        }, void 0))
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 925,
                      columnNumber: 29
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 923,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold text-slate-600", children: "回显字段 (Display Field)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 939,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      className: "h-9 text-sm",
                      placeholder: "例如: title 或 name",
                      value: settings[f.name]?.display_field || settings[f.name]?.displayField || "",
                      disabled: readOnly || !settings[f.name],
                      onChange: (e) => {
                        const val = e.target.value;
                        handleUpdateRelation(f.name, settings[f.name]?.target_slug || settings[f.name]?.targetCollectionSlug, val);
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 940,
                      columnNumber: 29
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 938,
                  columnNumber: 27
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 922,
                columnNumber: 25
              }, void 0),
              f.type === "reference" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold text-slate-600", children: "允许引用的目标集合 (Allowed Collections)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 956,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3 bg-white border rounded-lg max-h-48 overflow-y-auto space-y-2", children: collections.map((c) => {
                  const allowed = settings[f.name]?.allowedCollections || f.relationConfig?.allowedCollections || [];
                  const isChecked = allowed.includes(c.slug);
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "flex items-center gap-2 cursor-pointer text-sm", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "input",
                      {
                        type: "checkbox",
                        className: "rounded",
                        checked: isChecked,
                        disabled: readOnly,
                        onChange: (e) => {
                          const next = new Set(allowed);
                          if (e.target.checked) next.add(c.slug);
                          else next.delete(c.slug);
                          setSettings((prev) => ({
                            ...prev,
                            [f.name]: { ...prev[f.name] || {}, allowedCollections: Array.from(next) }
                          }));
                        }
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 963,
                        columnNumber: 35
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                      c.name,
                      " ",
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-400 font-mono", children: [
                        "(",
                        c.slug,
                        ")"
                      ] }, void 0, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 978,
                        columnNumber: 50
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 978,
                      columnNumber: 35
                    }, void 0)
                  ] }, c.id, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 962,
                    columnNumber: 33
                  }, void 0);
                }) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 957,
                  columnNumber: 27
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 955,
                columnNumber: 25
              }, void 0)
            ] }, f.name, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 906,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 904,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 rounded-xl border border-slate-200 bg-white p-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-sm font-semibold text-slate-800", children: "隐藏字段自动生成" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 992,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-slate-500", children: '只对模型中已开启"隐藏字段"的字段生效，每次保存时自动重新计算。' }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 993,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 991,
                columnNumber: 19
              }, void 0),
              hiddenFields.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-400", children: "当前模型还没有隐藏字段，请先到 `/admin/models` 的字段高级设置中开启“隐藏字段”。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 999,
                columnNumber: 21
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: hiddenFields.map((field) => {
                const generation = settings[field.name]?.generation || {
                  preset: "manual"
                };
                return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg border border-slate-200 bg-slate-50 p-4", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-slate-800", children: field.label }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1013,
                      columnNumber: 31
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "text-[12px] font-mono", children: field.name }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1014,
                      columnNumber: 31
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "border-none bg-slate-200 text-[12px] text-slate-700", children: "隐藏字段" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1015,
                      columnNumber: 31
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1012,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold text-slate-600", children: "生成方式" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1019,
                      columnNumber: 31
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "select",
                      {
                        className: "h-9 w-full rounded border border-slate-200 bg-white px-3 text-sm",
                        value: generation.preset || "manual",
                        disabled: readOnly,
                        onChange: (e) => handleUpdateGeneration(field.name, { preset: e.target.value }),
                        children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "manual", children: "不自动生成" }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                            lineNumber: 1026,
                            columnNumber: 33
                          }, void 0),
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "canonical_path", children: "最终访问路径 (/:collection/:id-:slug)" }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                            lineNumber: 1027,
                            columnNumber: 33
                          }, void 0),
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "template_text", children: "自定义模板" }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                            lineNumber: 1028,
                            columnNumber: 33
                          }, void 0)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1020,
                        columnNumber: 31
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1018,
                    columnNumber: 29
                  }, void 0),
                  generation.preset === "canonical_path" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 space-y-2", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold text-slate-600", children: "Slug 来源字段" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1034,
                      columnNumber: 33
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "select",
                      {
                        className: "h-9 w-full rounded border border-slate-200 bg-white px-3 text-sm",
                        value: generation.sourceField || "",
                        disabled: readOnly,
                        onChange: (e) => handleUpdateGeneration(field.name, { sourceField: e.target.value }),
                        children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "", children: "优先使用标题/名称等常见字段" }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                            lineNumber: 1041,
                            columnNumber: 35
                          }, void 0),
                          sourceFields.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: item.name, children: [
                            item.label,
                            " (",
                            item.name,
                            ")"
                          ] }, item.name, true, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                            lineNumber: 1043,
                            columnNumber: 37
                          }, void 0))
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1035,
                        columnNumber: 33
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1033,
                    columnNumber: 31
                  }, void 0) : null,
                  generation.preset === "template_text" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 space-y-2", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold text-slate-600", children: "模板内容" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1054,
                      columnNumber: 33
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "textarea",
                      {
                        className: "min-h-[80px] w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm",
                        placeholder: "例如：/{:collection}/{:id}-{:field:title}",
                        value: generation.template || "",
                        disabled: readOnly,
                        onChange: (e) => handleUpdateGeneration(field.name, { template: e.target.value })
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1055,
                        columnNumber: 33
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500 space-x-2", children: [
                      "支持变量：",
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "rounded bg-slate-100 px-1 py-0.5", children: "{:id}" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1064,
                        columnNumber: 35
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "rounded bg-slate-100 px-1 py-0.5", children: "{:collection}" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1065,
                        columnNumber: 35
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "rounded bg-slate-100 px-1 py-0.5", children: "{:locale}" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1066,
                        columnNumber: 35
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "rounded bg-slate-100 px-1 py-0.5", children: "{:now}" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1067,
                        columnNumber: 35
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "rounded bg-slate-100 px-1 py-0.5", children: "{:field:字段名}" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1068,
                        columnNumber: 35
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1062,
                      columnNumber: 33
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1053,
                    columnNumber: 31
                  }, void 0) : null
                ] }, field.name, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1011,
                  columnNumber: 27
                }, void 0);
              }) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1003,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 990,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 900,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 895,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border rounded-lg bg-slate-50 shadow-sm flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-semibold text-sm", children: "启用公共 API" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1086,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "允许外部请求无 Token 访问此集合的受限数据。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1087,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 1085,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Switch,
              {
                checked: settings.__api_policy?.enabled || false,
                disabled: readOnly,
                onCheckedChange: (v) => handleUpdateApiPolicy({ enabled: v })
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1089,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 1084,
            columnNumber: 15
          }, void 0),
          settings.__api_policy?.enabled && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border rounded-lg space-y-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-semibold text-sm border-b pb-2", children: "基础设置" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1099,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: "允许的请求方法 (Allowed Methods)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1101,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-4", children: ["schema", "data", "submit"].map((method) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "flex items-center gap-2 text-sm cursor-pointer", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      className: "rounded",
                      checked: !!settings.__api_policy?.allowed_methods?.includes(method),
                      disabled: readOnly,
                      onChange: (e) => {
                        const current = new Set(settings.__api_policy?.allowed_methods || []);
                        if (e.target.checked) current.add(method);
                        else current.delete(method);
                        handleUpdateApiPolicy({ allowed_methods: Array.from(current) });
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1105,
                      columnNumber: 29
                    },
                    void 0
                  ),
                  method.toUpperCase()
                ] }, method, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1104,
                  columnNumber: 27
                }, void 0)) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1102,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1100,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: "CORS 域名白名单 (逗号分隔)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1121,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      placeholder: "如: https://example.com, *",
                      value: (settings.__api_policy?.security?.allowed_domains || []).join(", "),
                      disabled: readOnly,
                      onChange: (e) => {
                        const domains = e.target.value.split(",").map((d) => d.trim()).filter(Boolean);
                        handleUpdateApiPolicy({ security: { ...settings.__api_policy?.security || {}, allowed_domains: domains } });
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1122,
                      columnNumber: 25
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1120,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: "IP 频率限制 (次/分钟，0为不限)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1133,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      type: "number",
                      placeholder: "0",
                      value: settings.__api_policy?.security?.rate_limit_per_min || 0,
                      disabled: readOnly,
                      onChange: (e) => handleUpdateApiPolicy({ security: { ...settings.__api_policy?.security || {}, rate_limit_per_min: parseInt(e.target.value) || 0 } })
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1134,
                      columnNumber: 25
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1132,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1119,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 1098,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border rounded-lg space-y-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-semibold text-sm border-b pb-2 flex justify-between", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "字段显隐与写入控制" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1146,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-normal text-slate-500", children: "仅允许白名单的字段发生交互" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1147,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1145,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-1/2", children: "字段 (显示名称 / Key)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1153,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-center", children: "可读 (Read)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1154,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-center", children: "可写 (Write)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1155,
                    columnNumber: 29
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1152,
                  columnNumber: 27
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1151,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: fields.map((f) => {
                  const isReadable = !!settings.__api_policy?.field_permissions?.read_whitelist?.includes(f.name);
                  const isWritable = !!settings.__api_policy?.field_permissions?.write_whitelist?.includes(f.name);
                  const toggleRead = (checked) => {
                    const current = new Set(settings.__api_policy?.field_permissions?.read_whitelist || []);
                    if (checked) current.add(f.name);
                    else current.delete(f.name);
                    handleUpdateApiPolicy({ field_permissions: { ...settings.__api_policy?.field_permissions || {}, read_whitelist: Array.from(current) } });
                  };
                  const toggleWrite = (checked) => {
                    const current = new Set(settings.__api_policy?.field_permissions?.write_whitelist || []);
                    if (checked) current.add(f.name);
                    else current.delete(f.name);
                    handleUpdateApiPolicy({ field_permissions: { ...settings.__api_policy?.field_permissions || {}, write_whitelist: Array.from(current) } });
                  };
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "py-2", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-medium text-sm", children: f.label }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1177,
                        columnNumber: 35
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] text-slate-400 font-mono", children: f.name }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                        lineNumber: 1178,
                        columnNumber: 35
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1176,
                      columnNumber: 33
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-center py-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { type: "checkbox", className: "rounded", checked: isReadable, disabled: readOnly, onChange: (e) => toggleRead(e.target.checked) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1181,
                      columnNumber: 35
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1180,
                      columnNumber: 33
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-center py-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { type: "checkbox", className: "rounded", checked: isWritable, disabled: readOnly, onChange: (e) => toggleWrite(e.target.checked) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1184,
                      columnNumber: 35
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                      lineNumber: 1183,
                      columnNumber: 33
                    }, void 0)
                  ] }, f.name, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1175,
                    columnNumber: 31
                  }, void 0);
                }) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1158,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1150,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1149,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 1144,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 1097,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 1083,
          columnNumber: 13
        }, void 0),
        activeTab === "hooks" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border rounded-lg bg-slate-50 shadow-sm flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-semibold text-sm", children: "启用通知钩子" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1202,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "当有新数据通过公有API提交时，触发后续动作（依赖全局邮件服务配置）。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1203,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 1201,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Switch,
              {
                checked: settings.__notification_policy?.enabled || false,
                disabled: readOnly,
                onCheckedChange: (v) => handleUpdateNotificationPolicy({ enabled: v })
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1205,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 1200,
            columnNumber: 15
          }, void 0),
          settings.__notification_policy?.enabled && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border rounded-lg space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-semibold text-sm border-b pb-2", children: "基础设置" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 1214,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: "邮件通知收件人 (多邮箱打逗号)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1217,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    placeholder: "admin@example.com",
                    value: (settings.__notification_policy?.receiver_emails || []).join(", "),
                    disabled: readOnly,
                    onChange: (e) => {
                      const emails = e.target.value.split(",").map((m) => m.trim()).filter(Boolean);
                      handleUpdateNotificationPolicy({ receiver_emails: emails });
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1218,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1216,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: "发件人显示昵称" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1229,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    placeholder: "System Notifier",
                    value: settings.__notification_policy?.sender_name || "",
                    disabled: readOnly,
                    onChange: (e) => handleUpdateNotificationPolicy({ sender_name: e.target.value })
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1230,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1228,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: [
                  "邮件主题模板 (支持 ",
                  "{{",
                  "变量",
                  "}}",
                  ")"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1238,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    placeholder: "您有一条新的提交",
                    value: settings.__notification_policy?.mail_subject_template || "",
                    disabled: readOnly,
                    onChange: (e) => handleUpdateNotificationPolicy({ mail_subject_template: e.target.value })
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1239,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1237,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold text-blue-600", children: "Webhook URL (选填, POST方法推送 JSON)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1247,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    placeholder: "https://example.com/api/webhook",
                    value: settings.__notification_policy?.webhook_url || "",
                    disabled: readOnly,
                    onChange: (e) => handleUpdateNotificationPolicy({ webhook_url: e.target.value })
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1248,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1246,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: [
                  "邮件正文模板 (支持 HTML 和 ",
                  "{{",
                  "变量",
                  "}}",
                  ")"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1256,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "textarea",
                  {
                    className: "w-full min-h-[100px] text-sm border rounded-md p-2 font-mono",
                    placeholder: "如果您留空，系统将自动生成汇总表格。",
                    value: settings.__notification_policy?.mail_body_template || "",
                    disabled: readOnly,
                    onChange: (e) => handleUpdateNotificationPolicy({ mail_body_template: e.target.value })
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1257,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1255,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-100/50 p-2 rounded border border-dashed", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[12px] font-bold text-slate-400 block mb-1 uppercase tracking-wider", children: "可用变量提示 (点击复制)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1266,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5 overflow-hidden", children: fields.map((f) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    type: "button",
                    className: "px-1.5 py-0.5 bg-white border rounded text-[12px] font-mono text-blue-600 hover:bg-blue-50 transition-colors",
                    title: f.label,
                    onClick: () => {
                      navigator.clipboard.writeText(`{{${f.name}}}`);
                      toast({ title: "已复制", description: `变量 {{${f.name}}} 已复制到剪贴板` });
                    },
                    children: `{{${f.name}}}`
                  },
                  f.name,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                    lineNumber: 1269,
                    columnNumber: 27
                  },
                  void 0
                )) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                  lineNumber: 1267,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
                lineNumber: 1265,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
              lineNumber: 1215,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 1213,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 1199,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 873,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "mt-4 border-t pt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", onClick: () => setOpen(false), children: "取消" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 1291,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: save, disabled: readOnly || saving, className: "bg-blue-600 text-white", children: [
          saving && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin mr-2", size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
            lineNumber: 1293,
            columnNumber: 24
          }, void 0),
          readOnly ? "仅查看" : "保存配置"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
          lineNumber: 1292,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1290,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 867,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
    lineNumber: 860,
    columnNumber: 5
  }, void 0);
};
const OptionEditor = ({ initialOptions, onChange, readOnly = false }) => {
  const [opts, setOpts] = reactExports.useState(initialOptions);
  reactExports.useEffect(() => {
    setOpts(initialOptions);
  }, [initialOptions]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-12 gap-2 mb-2 font-medium text-xs text-slate-500", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-5", children: "存储值 (Key)" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1312,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-6", children: "显示文本 (Value)" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1313,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-1" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1314,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 1311,
      columnNumber: 7
    }, void 0),
    opts.map((opt, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-12 gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { className: "col-span-5 h-8 text-xs", value: opt.key, onChange: (e) => {
        const copy = [...opts];
        copy[i].key = e.target.value;
        setOpts(copy);
        onChange(copy);
      }, placeholder: "eg. active", disabled: readOnly }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1318,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { className: "col-span-6 h-8 text-xs", value: opt.value, onChange: (e) => {
        const copy = [...opts];
        copy[i].value = e.target.value;
        setOpts(copy);
        onChange(copy);
      }, placeholder: "eg. 激活状态", disabled: readOnly }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1321,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", className: "col-span-1 h-8 text-red-500 p-0", disabled: readOnly, onClick: () => {
        const copy = opts.filter((_, idx) => idx !== i);
        setOpts(copy);
        onChange(copy);
      }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1326,
        columnNumber: 14
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1324,
        columnNumber: 11
      }, void 0)
    ] }, i, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 1317,
      columnNumber: 9
    }, void 0)),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", className: "h-8 text-xs border-dashed w-full", disabled: readOnly, onClick: () => {
      const copy = [...opts, { key: "", value: "" }];
      setOpts(copy);
      onChange(copy);
    }, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 14, className: "mr-1" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
        lineNumber: 1332,
        columnNumber: 9
      }, void 0),
      " 追加选项行"
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
      lineNumber: 1329,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement.tsx",
    lineNumber: 1310,
    columnNumber: 5
  }, void 0);
};
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["collections.manage.view", "collections.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "业务集合管理" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CollectionsManagement", CollectionsManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/CollectionsManagement", "client:component-export": "CollectionsManagement" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/collections/index.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/collections/index.astro";
const $$url = "/admin/collections";
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
