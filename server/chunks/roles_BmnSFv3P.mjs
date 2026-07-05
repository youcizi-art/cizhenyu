globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_CJzzDslR.mjs";
import { j as jsxDevRuntimeExports, B as Button, O as Overlay, c as cn, U as UI_LAYER, v as Portal, C as Content, w as Close, X, x as Title, y as Description, g as cva, R as Root, u as useToast, I as Input, T as Trash2 } from "./useAdminPermissions_8aANvvWm.mjs";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./Card_DzPhX3RV.mjs";
import { S as Switch } from "./Switch_PL3bAMIj.mjs";
import { L as Label } from "./Checkbox_4vP3zo9F.mjs";
import { S as Skeleton } from "./Skeleton_BD6SYiAT.mjs";
import { L as ListRefreshButton } from "./ListRefreshButton_DS9NvQr7.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_Bjp9Ed0y.mjs";
import { B as Badge } from "./Badge_CKfcU1_S.mjs";
import { S as Search, c as ConfirmDialog } from "./chat-workspace_BThR_WE3.mjs";
import { P as Plus } from "./settings_CgFC4cr_.mjs";
import { S as ShieldCheck } from "./shield-check_x8y0ttEW.mjs";
import { P as Pen } from "./agent-session-utils_DpT6INAb.mjs";
const PermissionGrid = ({
  allPermissions,
  selectedSlugs,
  onChange,
  loading = false,
  highlightCategory
}) => {
  if (loading) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-48 w-full" }, i, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
      lineNumber: 35,
      columnNumber: 32
    }, void 0)) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, void 0);
  }
  const groups = allPermissions.reduce((acc, perm) => {
    const category = perm.permCategory || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(perm);
    return acc;
  }, {});
  const togglePermission = (slug) => {
    if (selectedSlugs.includes(slug)) {
      onChange(selectedSlugs.filter((s) => s !== slug));
    } else {
      onChange([...selectedSlugs, slug]);
    }
  };
  const toggleModule = (category, perms) => {
    const moduleSlugs = perms.map((p) => p.slug);
    const allSelected = moduleSlugs.every((s) => selectedSlugs.includes(s));
    if (allSelected) {
      onChange(selectedSlugs.filter((s) => !moduleSlugs.includes(s)));
    } else {
      const otherSlugs = selectedSlugs.filter((s) => !moduleSlugs.includes(s));
      onChange([...otherSlugs, ...moduleSlugs]);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: Object.entries(groups).map(([category, perms]) => {
    const isHighlighted = highlightCategory && category.toLowerCase().includes(highlightCategory.toLowerCase());
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Card,
      {
        className: `shadow-none border-slate-200 transition-all duration-1000 ${isHighlighted ? "ring-2 ring-blue-500 border-blue-500 bg-blue-50/10 shadow-lg shadow-blue-50" : ""}`,
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: `flex flex-row items-center justify-between space-y-0 py-3 ${isHighlighted ? "bg-blue-50" : "bg-slate-50/50"}`, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: `text-sm font-bold tracking-tight ${isHighlighted ? "text-blue-700" : "text-slate-700"}`, children: [
              category,
              isHighlighted && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "ml-2 text-[12px] bg-blue-600 text-white px-1.5 py-0.5 rounded", children: "NEW" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
                lineNumber: 85,
                columnNumber: 35
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-7 text-[12px] px-2",
                onClick: (e) => {
                  e.preventDefault();
                  toggleModule(category, perms);
                },
                children: "全选 / 反选"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
                lineNumber: 87,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-4 grid gap-4", children: perms.map((perm) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between space-x-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col space-y-0.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-semibold cursor-pointer", onClick: () => togglePermission(perm.slug), children: perm.name }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
                lineNumber: 100,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-mono text-muted-foreground", children: perm.slug }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
              lineNumber: 99,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Switch,
              {
                checked: selectedSlugs.includes(perm.slug),
                onCheckedChange: () => togglePermission(perm.slug)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
                lineNumber: 105,
                columnNumber: 19
              },
              void 0
            )
          ] }, perm.slug, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, void 0)) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, void 0)
        ]
      },
      category,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
        lineNumber: 74,
        columnNumber: 11
      },
      void 0
    );
  }) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/PermissionGrid.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, void 0);
};
const Sheet = Root;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Overlay,
  {
    className: cn(
      "fixed inset-0 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      UI_LAYER.dialog.base.overlay,
      className
    ),
    ...props,
    ref
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  void 0
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=closed]:duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetPortal, { children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetOverlay, {}, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    Content,
    {
      ref,
      className: cn(sheetVariants({ side }), UI_LAYER.dialog.base.content, className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
          lineNumber: 64,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
  lineNumber: 56,
  columnNumber: 3
}, void 0));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
    lineNumber: 77,
    columnNumber: 3
  },
  void 0
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
    lineNumber: 105,
    columnNumber: 3
  },
  void 0
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Sheet.tsx",
    lineNumber: 117,
    columnNumber: 3
  },
  void 0
));
SheetDescription.displayName = Description.displayName;
const RolesManagement = () => {
  const [roles, setRoles] = reactExports.useState([]);
  const [allPermissions, setAllPermissions] = reactExports.useState([]);
  const [isSheetOpen, setIsSheetOpen] = reactExports.useState(false);
  const [editingRole, setEditingRole] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const [roleToDelete, setRoleToDelete] = reactExports.useState(null);
  const [highlightParam, setHighlightParam] = reactExports.useState(null);
  const { toast } = useToast();
  const fetchData = async () => {
    try {
      setLoading(true);
      const [rolesRes, permsRes] = await Promise.all([
        fetch("/api/v1/rbac/roles"),
        fetch("/api/v1/rbac/permissions")
      ]);
      const rolesData = await rolesRes.json();
      const permsData = await permsRes.json();
      if (Array.isArray(rolesData)) setRoles(rolesData);
      if (Array.isArray(permsData)) setAllPermissions(permsData);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "加载失败",
        description: "无法获取权限数据，请检查网络连接。"
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchData();
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const highlight = params.get("highlight");
      if (highlight) {
        setHighlightParam(highlight);
      }
    }
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!editingRole) return;
    setSaving(true);
    const method = editingRole.id ? "PATCH" : "POST";
    const url = editingRole.id ? `/api/v1/rbac/roles/${editingRole.id}` : "/api/v1/rbac/roles";
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editingRole.name,
          description: editingRole.description,
          permissionSlugs: editingRole.permissions
        })
      });
      if (res.ok) {
        toast({
          title: editingRole.id ? "更新成功" : "创建成功",
          description: `角色 [${editingRole.name}] 已成功同步到系统。`
        });
        await fetchData();
        setIsSheetOpen(false);
        setEditingRole(null);
      } else {
        throw new Error("API Error");
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "保存失败",
        description: "系统发生未知异常，请稍后再试。"
      });
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async (role) => {
    if (!role.id) return;
    setDeletingId(role.id);
    try {
      const res = await fetch(`/api/v1/rbac/roles/${role.id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (res.ok) {
        toast({
          title: "删除成功",
          description: `角色 [${role.name}] 已被物理移除。`
        });
        setRoleToDelete(null);
        await fetchData();
      } else {
        throw new Error(data.error || "删除失败");
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "操作失败",
        description: err.message
      });
    } finally {
      setDeletingId(null);
    }
  };
  const filteredRoles = roles.filter(
    (role) => role.name.toLowerCase().includes(searchQuery.toLowerCase()) || role.description && role.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6 animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-3xl font-extrabold tracking-tight text-slate-900", children: "角色与职能" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground", children: "精细化定义操作权限，确保业务流程合规与安全" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          ListRefreshButton,
          {
            loading,
            onClick: fetchData,
            title: "刷新角色列表"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 183,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative w-64", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 189,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              placeholder: "搜索角色名称或描述...",
              className: "pl-9 bg-white",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
              lineNumber: 190,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => {
          setEditingRole({ name: "", description: "", permissions: [] });
          setIsSheetOpen(true);
        }, className: "shadow-lg", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, void 0),
          " 新建角色"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-200/60 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50/50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[200px] font-bold", children: "角色名称" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 208,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "font-bold", children: "职能描述" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 209,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[120px] font-bold", children: "权限数量" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 210,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[100px] text-right font-bold", children: "操作" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 211,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 207,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 206,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-24" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 218,
          columnNumber: 32
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 218,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-full" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 219,
          columnNumber: 32
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 219,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-12" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 220,
          columnNumber: 32
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 220,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-10 ml-auto" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 221,
          columnNumber: 55
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 221,
          columnNumber: 21
        }, void 0)
      ] }, i, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 217,
        columnNumber: 19
      }, void 0)) : filteredRoles.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "h-32 text-center text-muted-foreground italic", children: "未找到匹配的角色条目" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 226,
        columnNumber: 19
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 225,
        columnNumber: 17
      }, void 0) : filteredRoles.map((role) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "group hover:bg-slate-50/80", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "font-bold text-slate-900", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldCheck, { className: "h-4 w-4 text-primary" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 235,
            columnNumber: 25
          }, void 0),
          role.name
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 234,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 233,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-slate-500 text-xs leading-relaxed max-w-md truncate", children: role.description || /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-slate-300 italic", children: "暂无描述" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 240,
          columnNumber: 44
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 239,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "font-mono", children: [
          role.permissions.length,
          " 项"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 243,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 242,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end items-center gap-1", children: role.name === "SuperAdmin" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "icon",
              disabled: true,
              title: "系统核心超级管理员角色拥有所有权限，不允许修改",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-4 w-4 text-slate-300" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                lineNumber: 255,
                columnNumber: 31
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
              lineNumber: 249,
              columnNumber: 29
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-2 opacity-10 grayscale cursor-not-allowed", title: "核心权限角色不可删除", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "h-4 w-4 text-slate-300" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 258,
            columnNumber: 31
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 257,
            columnNumber: 29
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 248,
          columnNumber: 27
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "icon", onClick: () => {
            setEditingRole(role);
            setIsSheetOpen(true);
          }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 264,
            columnNumber: 31
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 263,
            columnNumber: 29
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "text-slate-400 hover:text-red-600 transition-colors",
              onClick: () => setRoleToDelete(role),
              loading: deletingId === role.id,
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "h-4 w-4" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                lineNumber: 273,
                columnNumber: 31
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
              lineNumber: 266,
              columnNumber: 29
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 262,
          columnNumber: 27
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 246,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 245,
          columnNumber: 21
        }, void 0)
      ] }, role.id, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 232,
        columnNumber: 19
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 214,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
      lineNumber: 205,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
      lineNumber: 204,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!roleToDelete,
        onOpenChange: (open) => !open && setRoleToDelete(null),
        title: "删除权限角色？",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          "您确定要永久删除 ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-slate-900", children: [
            "[",
            roleToDelete?.name,
            "]"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 293,
            columnNumber: 22
          }, void 0),
          " 角色吗？",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 294,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 295,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-red-500 font-bold underline", children: "警告：" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, void 0),
          " 所有已被分配此角色的管理员将立即失去该角色关联的所有权限。此操作无法恢复。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 292,
          columnNumber: 11
        }, void 0),
        onConfirm: () => roleToDelete && handleDelete(roleToDelete),
        onCancel: () => setRoleToDelete(null),
        confirmText: "确认移除角色",
        variant: "destructive",
        isLoading: !!deletingId
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 287,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetContent, { className: "sm:max-w-3xl overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetHeader, { className: "mb-8", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetTitle, { className: "text-2xl", children: editingRole?.id ? "编辑职能权限" : "定义新角色" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 309,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetDescription, { children: "请配置该角色的详细权能。所有更改将在保存后即时生效。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 310,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 308,
        columnNumber: 11
      }, void 0),
      editingRole && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-8 pb-20", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-bold text-slate-700", children: "名称" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                lineNumber: 320,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  required: true,
                  placeholder: "系统管理员",
                  value: editingRole.name,
                  onChange: (e) => setEditingRole({ ...editingRole, name: e.target.value })
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                  lineNumber: 321,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
              lineNumber: 319,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-bold text-slate-700", children: "描述" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                lineNumber: 329,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  placeholder: "负责全局参数配置",
                  value: editingRole.description,
                  onChange: (e) => setEditingRole({ ...editingRole, description: e.target.value })
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                  lineNumber: 330,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
              lineNumber: 328,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 318,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-bold text-slate-700", children: "权能分配矩阵" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                lineNumber: 340,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", children: [
                editingRole.permissions.length,
                " 已选"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                lineNumber: 341,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
              lineNumber: 339,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              PermissionGrid,
              {
                allPermissions,
                selectedSlugs: editingRole.permissions,
                onChange: (slugs) => setEditingRole({ ...editingRole, permissions: slugs }),
                highlightCategory: highlightParam || void 0
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
                lineNumber: 343,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 338,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 317,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "fixed bottom-0 right-0 left-0 sm:left-auto sm:w-[512px] md:w-[768px] lg:w-[768px] p-6 bg-white border-t border-slate-100 flex justify-end gap-3 z-20", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: () => setIsSheetOpen(false), children: "取消" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 353,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", loading: saving, className: "px-8 shadow-md", children: "提交配置" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
            lineNumber: 354,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
          lineNumber: 352,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
        lineNumber: 316,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
      lineNumber: 307,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
      lineNumber: 306,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, void 0);
};
const $$Roles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "角色权限管理" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorBoundary", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/ui/ErrorBoundary", "client:component-export": "ErrorBoundary" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RolesManagement", RolesManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/RolesManagement", "client:component-export": "RolesManagement" })} ` })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/roles.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/roles.astro";
const $$url = "/admin/roles";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Roles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
