globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { G as GripVertical, m as Languages, $ as $$DashboardLayout } from "./DashboardLayout_CJzzDslR.mjs";
import { j as jsxDevRuntimeExports, c as cn, h as useAdminPermissions, u as useToast, G as Globe, B as Button, T as Trash2, I as Input } from "./useAdminPermissions_8aANvvWm.mjs";
import { C as Card } from "./Card_DzPhX3RV.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_Bjp9Ed0y.mjs";
import { B as Badge } from "./Badge_CKfcU1_S.mjs";
import { S as Skeleton } from "./Skeleton_BD6SYiAT.mjs";
import { L as Label } from "./Label_zq5CgPId.mjs";
import { b as Check, c as ConfirmDialog } from "./chat-workspace_BThR_WE3.mjs";
import { F as FormDialog } from "./FormDialog_BBzVV8fv.mjs";
import { P as Plus } from "./settings_CgFC4cr_.mjs";
import { P as Pen } from "./agent-session-utils_DpT6INAb.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const DragSortHandle = ({
  draggable,
  disabled = false,
  title,
  className,
  onDragStart,
  onDragEnd
}) => {
  const canDrag = draggable && !disabled;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      draggable: canDrag,
      onDragStart,
      onDragEnd,
      className: cn(
        "p-1 text-slate-400",
        canDrag ? "cursor-move hover:text-slate-600" : "cursor-not-allowed opacity-50",
        className
      ),
      title,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(GripVertical, { size: 14 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ui/DragSortHandle.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/DragSortHandle.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    void 0
  );
};
const LanguagesManagement = () => {
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canManageLanguages = hasPermission2(["languages.manage", "role.manage"]);
  const [languages, setLanguages] = reactExports.useState([]);
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [editingLang, setEditingLang] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [deletingCode, setDeletingCode] = reactExports.useState(null);
  const [draggingCode, setDraggingCode] = reactExports.useState(null);
  const [dragOverCode, setDragOverCode] = reactExports.useState(null);
  const [reordering, setReordering] = reactExports.useState(false);
  const { toast } = useToast();
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/v1/rbac/languages");
      const data = await res.json();
      if (Array.isArray(data)) {
        setLanguages(data);
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "加载失败",
        description: "无法获取语种数据，请检查网络连接。"
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchData();
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!editingLang) return;
    setSaving(true);
    try {
      const isNew = !languages.some((l) => l.code === editingLang.code);
      const method = isNew ? "POST" : "PUT";
      const res = await fetch("/api/v1/rbac/languages", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingLang)
      });
      if (!res.ok) throw new Error(isNew ? "创建失败" : "更新失败");
      toast({ title: "成功", description: isNew ? "语种已添加" : "语种配置已保存" });
      setIsDialogOpen(false);
      fetchData();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "保存失败",
        description: err.message
      });
    } finally {
      setSaving(false);
    }
  };
  const setAsDefault = async (code) => {
    try {
      const res = await fetch(`/api/v1/rbac/languages/default/${code}`, {
        method: "PATCH"
      });
      if (!res.ok) throw new Error("设置失败");
      toast({ title: "成功", description: "默认语种已切换" });
      fetchData();
    } catch (err) {
      toast({ variant: "destructive", title: "操作失败", description: err.message });
    }
  };
  const handleDelete = async () => {
    if (!deletingCode) return;
    try {
      const res = await fetch(`/api/v1/rbac/languages/${deletingCode}`, {
        method: "DELETE"
      });
      if (!res.ok) throw new Error("删除失败");
      toast({ title: "成功", description: "语种已移除" });
      setDeletingCode(null);
      fetchData();
    } catch (err) {
      toast({ variant: "destructive", title: "操作失败", description: err.message });
    }
  };
  const handleDropReorder = async (targetCode) => {
    if (!canManageLanguages || !draggingCode || draggingCode === targetCode) {
      setDraggingCode(null);
      setDragOverCode(null);
      return;
    }
    const previousLanguages = languages;
    const fromIndex = previousLanguages.findIndex((item) => item.code === draggingCode);
    const toIndex = previousLanguages.findIndex((item) => item.code === targetCode);
    if (fromIndex < 0 || toIndex < 0) {
      setDraggingCode(null);
      setDragOverCode(null);
      return;
    }
    const reordered = [...previousLanguages];
    const [movedItem] = reordered.splice(fromIndex, 1);
    reordered.splice(toIndex, 0, movedItem);
    const normalized = reordered.map((item, index) => ({ ...item, sortOrder: index }));
    setLanguages(normalized);
    setDraggingCode(null);
    setDragOverCode(null);
    setReordering(true);
    try {
      const res = await fetch("/api/v1/rbac/languages/reorder", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codes: normalized.map((item) => item.code) })
      });
      if (!res.ok) {
        const result = await res.json().catch(() => ({}));
        throw new Error(result.error || "语种排序保存失败");
      }
      toast({ title: "成功", description: "语种排序已更新" });
    } catch (err) {
      setLanguages(previousLanguages);
      toast({
        variant: "destructive",
        title: "排序失败",
        description: err.message || "语种排序保存失败，请稍后重试。"
      });
    } finally {
      setReordering(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { className: "text-blue-600", size: 24 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, void 0),
          "多语言设置"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-500 text-sm mt-1", children: "管理系统支持的内容语种、默认显示及翻译状态" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          onClick: () => {
            if (!canManageLanguages) return;
            setEditingLang({ code: "", name: "", isDefault: false, status: "active" });
            setIsDialogOpen(true);
          },
          disabled: !canManageLanguages,
          className: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16, className: "mr-2" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
              lineNumber: 198,
              columnNumber: 11
            }, void 0),
            "新增语种"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 189,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, void 0),
    !loadingPermissions && !canManageLanguages ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看语言设置，新增、编辑、删除和默认语种切换已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
      lineNumber: 204,
      columnNumber: 9
    }, void 0) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-200/60 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm", children: [
      reordering ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-b border-slate-200 bg-blue-50 px-4 py-2 text-xs text-blue-700", children: "正在保存语种排序..." }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
        lineNumber: 211,
        columnNumber: 11
      }, void 0) : null,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50/50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "font-semibold text-slate-700", children: "语种名称" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "font-semibold text-slate-700", children: "编码 (Code)" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "font-semibold text-slate-700", children: "状态" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "font-semibold text-slate-700", children: "默认" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 221,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-right font-semibold text-slate-700", children: "操作" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: loading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-32" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 229,
            columnNumber: 30
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 229,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-20" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 230,
            columnNumber: 30
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 230,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-16" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 231,
            columnNumber: 30
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 231,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-12" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 232,
            columnNumber: 30
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 232,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-8 w-24 ml-auto" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 233,
            columnNumber: 30
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 233,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 228,
          columnNumber: 17
        }, void 0)) : languages.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 5, className: "h-32 text-center text-slate-400", children: "尚未配置任何语种" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 238,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, void 0) : languages.map((lang) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          TableRow,
          {
            onDragOver: (e) => {
              if (!canManageLanguages || reordering) return;
              e.preventDefault();
              setDragOverCode(lang.code);
            },
            onDragLeave: () => {
              if (dragOverCode === lang.code) {
                setDragOverCode(null);
              }
            },
            onDrop: (e) => {
              if (!canManageLanguages || reordering) return;
              e.preventDefault();
              void handleDropReorder(lang.code);
            },
            className: cn(
              "hover:bg-slate-50/50 transition-colors",
              draggingCode === lang.code && "bg-slate-100 opacity-40",
              dragOverCode === lang.code && "border-t-2 border-blue-500 bg-blue-50"
            ),
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "font-medium text-slate-900", children: lang.name }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 267,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded", children: lang.code }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 269,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 268,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: lang.status === "active" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "bg-green-50 text-green-600 border-green-100 hover:bg-green-50 shadow-none", children: "启用中" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 275,
                columnNumber: 23
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-50 shadow-none", children: "已禁用" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 277,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 273,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: lang.isDefault ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 text-blue-600 text-xs font-bold", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 14, strokeWidth: 3 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                  lineNumber: 283,
                  columnNumber: 25
                }, void 0),
                "默认"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 282,
                columnNumber: 23
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => canManageLanguages && setAsDefault(lang.code),
                  disabled: !canManageLanguages,
                  className: "text-[12px] px-2 py-0.5 border border-slate-200 text-slate-400 rounded-full hover:border-blue-200 hover:text-blue-500 transition-all",
                  children: "设为默认"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                  lineNumber: 287,
                  columnNumber: 23
                },
                void 0
              ) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 280,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-end gap-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  DragSortHandle,
                  {
                    draggable: canManageLanguages && !reordering,
                    title: canManageLanguages ? "按住拖动排序" : "暂无排序权限",
                    onDragStart: (e) => {
                      if (!canManageLanguages || reordering) return;
                      setDraggingCode(lang.code);
                      e.dataTransfer.effectAllowed = "move";
                      e.dataTransfer.setData("text/plain", lang.code);
                    },
                    onDragEnd: () => {
                      setDraggingCode(null);
                      setDragOverCode(null);
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                    lineNumber: 298,
                    columnNumber: 23
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "h-8 w-8 p-0 text-slate-400 hover:text-blue-600 hover:bg-blue-50",
                    onClick: () => {
                      if (!canManageLanguages) return;
                      setEditingLang(lang);
                      setIsDialogOpen(true);
                    },
                    disabled: !canManageLanguages,
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { size: 14 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                      lineNumber: 323,
                      columnNumber: 25
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                    lineNumber: 312,
                    columnNumber: 23
                  },
                  void 0
                ),
                !lang.isDefault && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "h-8 w-8 p-0 text-slate-400 hover:text-red-600 hover:bg-red-50",
                    onClick: () => canManageLanguages && setDeletingCode(lang.code),
                    disabled: !canManageLanguages,
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                      lineNumber: 333,
                      columnNumber: 27
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                    lineNumber: 326,
                    columnNumber: 25
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 297,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 296,
                columnNumber: 19
              }, void 0)
            ]
          },
          lang.code,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 244,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: isDialogOpen,
        onOpenChange: (open) => {
          if (!canManageLanguages && open) return;
          setIsDialogOpen(open);
        },
        title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Languages, { size: 18, className: "text-blue-600" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 353,
            columnNumber: 13
          }, void 0),
          languages.some((l) => l.code === editingLang?.code) ? "编辑语种" : "新增语种"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 352,
          columnNumber: 11
        }, void 0),
        description: "设置语种名称与标准化编码 (如 en-US, zh-CN)。",
        contentClassName: "sm:max-w-[425px]",
        confirmText: "确认保存",
        confirmType: "submit",
        confirmForm: "language-form",
        confirmLoading: saving,
        confirmDisabled: !canManageLanguages,
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { id: "language-form", onSubmit: handleSave, className: "space-y-4 py-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "语种名称" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
              lineNumber: 367,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "名称 (如：简体中文)",
                value: editingLang?.name || "",
                onChange: (e) => setEditingLang((prev) => prev ? { ...prev, name: e.target.value } : null),
                required: true
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 368,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 366,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "语种编码 (Code)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
              lineNumber: 376,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "编码 (如：zh-CN)",
                value: editingLang?.code || "",
                onChange: (e) => setEditingLang((prev) => prev ? { ...prev, code: e.target.value } : null),
                disabled: languages.some((l) => l.code === editingLang?.code),
                required: true
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 377,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400", children: "符合 ISO 标准的语言代码，保存后不可更改。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
              lineNumber: 384,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 375,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4 pt-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "checkbox",
                id: "lang-status",
                checked: editingLang?.status === "active",
                onChange: (e) => setEditingLang((prev) => prev ? { ...prev, status: e.target.checked ? "active" : "inactive" } : null),
                className: "rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
                lineNumber: 388,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "lang-status", className: "text-xs", children: "启用该语种" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
              lineNumber: 395,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 387,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
            lineNumber: 386,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
          lineNumber: 365,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
        lineNumber: 345,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!deletingCode,
        onOpenChange: (open) => !open && setDeletingCode(null),
        title: "确认移除语种？",
        description: "移除语种不会删除属于该语种的内容，但系统将不再显示该语言版本，且无法再切换至该语种进行编辑。",
        onConfirm: handleDelete,
        onCancel: () => setDeletingCode(null),
        confirmText: "确认移除",
        variant: "destructive",
        confirmClassName: "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/20"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
        lineNumber: 401,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, void 0);
};
const $$Languages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Languages;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["languages.view", "languages.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "语言设置" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorBoundary", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/ui/ErrorBoundary", "client:component-export": "ErrorBoundary" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LanguagesManagement", LanguagesManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/LanguagesManagement", "client:component-export": "LanguagesManagement" })} ` })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/languages.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/languages.astro";
const $$url = "/admin/languages";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Languages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
