globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_DwrWQjkq.mjs";
import { U as UserPlus, $ as $$DashboardLayout } from "./DashboardLayout_Cf3rFJx6.mjs";
import { u as useToast, j as jsxDevRuntimeExports, I as Input, B as Button, T as Trash2, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, D as DialogFooter } from "./useAdminPermissions_BNA5PeGD.mjs";
import { L as ListRefreshButton } from "./ListRefreshButton_ohId2QN0.mjs";
import { C as Card, c as CardContent } from "./Card_BAe1fqp7.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_TAa6-Uik.mjs";
import { B as Badge } from "./Badge_nVUenOEd.mjs";
import { C as Checkbox } from "./Checkbox_DPiAVtyY.mjs";
import { S as Skeleton } from "./Skeleton_DMeOFszY.mjs";
import { e as Search, f as Shield, P as Pen, d as ConfirmDialog, g as AlertTriangle, b as Check, h as Copy } from "./agent-session-utils_Ct7fJQ5O.mjs";
const ManagersManagement = () => {
  const [managers, setManagers] = reactExports.useState([]);
  const [roles, setRoles] = reactExports.useState([]);
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = reactExports.useState(null);
  const [newManager, setNewManager] = reactExports.useState({ username: "", password: "", roleIds: [] });
  const [generatedPassword, setGeneratedPassword] = reactExports.useState(null);
  const [creating, setCreating] = reactExports.useState(false);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const [managerToDelete, setManagerToDelete] = reactExports.useState(null);
  const [editingManager, setEditingManager] = reactExports.useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const [managersRes, rolesRes, meRes] = await Promise.all([
        fetch("/api/v1/rbac/managers"),
        fetch("/api/v1/rbac/roles"),
        fetch("/api/auth/admin/me")
      ]);
      const [managersData, rolesData, meData] = await Promise.all([
        managersRes.json(),
        rolesRes.json(),
        meRes.json()
      ]);
      setManagers(Array.isArray(managersData) ? managersData : []);
      setRoles(Array.isArray(rolesData) ? rolesData : []);
      setCurrentUser(meData.user || null);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "获取列表失败",
        description: "请检查您的权限或网络设置。"
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      if (editingManager) {
        const res = await fetch(`/api/v1/rbac/managers/${editingManager.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: newManager.username,
            password: newManager.password,
            roleIds: newManager.roleIds
          })
        });
        if (res.ok) {
          toast({ title: "管理员信息已更新" });
          setIsDialogOpen(false);
          setEditingManager(null);
          await fetchData();
        } else {
          throw new Error("更新失败");
        }
      } else {
        const password = newManager.password || Math.random().toString(36).slice(-10);
        const res = await fetch("/api/v1/rbac/managers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...newManager, password })
        });
        if (res.ok) {
          setGeneratedPassword(password);
          await fetchData();
          toast({
            title: "管理员创建成功",
            description: `用户 [${newManager.username}] 已加入系统。`
          });
        } else {
          throw new Error("API Failure");
        }
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: editingManager ? "更新失败" : "创建失败",
        description: err.message || "请检查输入内容。"
      });
    } finally {
      setCreating(false);
    }
  };
  const handleDelete = async (manager) => {
    setDeletingId(manager.id);
    try {
      const res = await fetch(`/api/v1/rbac/managers/${manager.id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (res.ok) {
        toast({
          title: "删除成功",
          description: `管理员 [${manager.username}] 已被移除。`
        });
        setManagerToDelete(null);
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
  const filteredManagers = managers.filter(
    (m) => m.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-3xl font-extrabold tracking-tight text-slate-900", children: "操作员管理" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground", children: "配置系统访问账号，分配所属角色组及其操作权限" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          ListRefreshButton,
          {
            loading,
            onClick: fetchData,
            title: "刷新操作员列表"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 185,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative w-64", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 191,
            columnNumber: 14
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              placeholder: "通过用户名搜索...",
              className: "pl-9 bg-white",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 192,
              columnNumber: 14
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => {
              setNewManager({ username: "", password: "", roleIds: [] });
              setGeneratedPassword(null);
              setEditingManager(null);
              setIsDialogOpen(true);
            },
            className: "shadow-lg",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(UserPlus, { className: "mr-2 h-4 w-4" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 208,
                columnNumber: 13
              }, void 0),
              " 添加账号"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 199,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-200/60 shadow-sm overflow-hidden bg-white/40 backdrop-blur-md", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50/50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[250px] font-bold", children: "操作员" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 218,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "font-bold", children: "角色分配" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 219,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[180px] font-bold", children: "注册时间" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 220,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[100px] text-right font-bold", children: "操作" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 221,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 217,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: loading ? Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-10 w-40" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 228,
          columnNumber: 32
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 228,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-10 w-full" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 229,
          columnNumber: 32
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 229,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-10 w-28" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 230,
          columnNumber: 32
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 230,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-10 w-10 ml-auto" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 231,
          columnNumber: 55
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 231,
          columnNumber: 21
        }, void 0)
      ] }, i, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 227,
        columnNumber: 19
      }, void 0)) : filteredManagers.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "h-32 text-center text-muted-foreground italic", children: "暂无符合条件的管理员账号" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 236,
        columnNumber: 19
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 235,
        columnNumber: 17
      }, void 0) : filteredManagers.map((manager) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-slate-50/80 transition-colors group border-b", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm", children: manager.username[0].toUpperCase() }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 245,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-bold text-slate-900", children: manager.username }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 249,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 font-mono tracking-tighter", children: manager.id }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 250,
              columnNumber: 27
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 248,
            columnNumber: 25
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 244,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 243,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5", children: [
          manager.roles.map((role, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "px-2 py-0 border-primary/10", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Shield, { className: "h-3 w-3 mr-1 text-primary/60" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 258,
              columnNumber: 29
            }, void 0),
            role.name
          ] }, `${manager.id}-${role.id}-${idx}`, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 257,
            columnNumber: 27
          }, void 0)),
          manager.roles.length === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-300 italic", children: "未分配" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 262,
            columnNumber: 56
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 255,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 254,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-xs text-slate-500 font-mono", children: new Date(manager.createdAt).toLocaleDateString() }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 265,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end items-center gap-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "text-slate-400 hover:text-primary transition-colors",
              onClick: () => {
                setEditingManager(manager);
                setNewManager({
                  username: manager.username,
                  password: "",
                  roleIds: manager.roles.map((r) => r.id)
                });
                setGeneratedPassword(null);
                setIsDialogOpen(true);
              },
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { size: 16 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 285,
                columnNumber: 27
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 270,
              columnNumber: 25
            },
            void 0
          ),
          manager.id === "super-admin-01" || manager.id === currentUser?.id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-2 opacity-20 grayscale cursor-not-allowed", title: manager.id === "super-admin-01" ? "系统预设账号不可删除" : "无法删除当前登录账号", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 290,
            columnNumber: 29
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 289,
            columnNumber: 27
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "text-slate-400 hover:text-red-600 transition-colors",
              onClick: () => setManagerToDelete(manager),
              loading: deletingId === manager.id,
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 16 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 300,
                columnNumber: 29
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 293,
              columnNumber: 27
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 269,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 268,
          columnNumber: 21
        }, void 0)
      ] }, manager.id, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 242,
        columnNumber: 19
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 224,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
      lineNumber: 215,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
      lineNumber: 214,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!managerToDelete,
        onOpenChange: (open) => !open && setManagerToDelete(null),
        title: "确认物理删除？",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          "您正在尝试永久移除管理员 ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-slate-900", children: [
            "[",
            managerToDelete?.username,
            "]"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 319,
            columnNumber: 26
          }, void 0),
          "。该账户的所有访问权限、关联角色映射以及当前活跃会话都将被立即清理。此操作不可撤销。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 318,
          columnNumber: 11
        }, void 0),
        onConfirm: () => managerToDelete && handleDelete(managerToDelete),
        onCancel: () => setManagerToDelete(null),
        cancelText: "保留账号",
        confirmText: "确认彻底删除",
        variant: "destructive",
        isLoading: !!deletingId
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 313,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Dialog,
      {
        open: isDialogOpen,
        onOpenChange: (open) => {
          setIsDialogOpen(open);
          if (!open) setEditingManager(null);
        },
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "sm:max-w-md", children: !generatedPassword ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl", children: editingManager ? "编辑操作员权限" : "添加系统管理员" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 341,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: editingManager ? `正在修改管理员 [${editingManager.username}] 的角色及其操作权限。` : "为业务人员创建一个新的访问账号，请合理分配其权限范围。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 344,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 340,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "py-6 space-y-5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-bold text-slate-700", children: "账户用户名" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 353,
                columnNumber: 20
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  required: true,
                  disabled: editingManager?.id === "super-admin-01" && editingManager?.id !== currentUser?.id,
                  placeholder: "例如: kerry_zhao",
                  value: newManager.username,
                  onChange: (e) => setNewManager({ ...newManager, username: e.target.value })
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                  lineNumber: 354,
                  columnNumber: 20
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 352,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-bold text-slate-700", children: editingManager ? "修改密码 (选填)" : "初始密码 (选填)" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 363,
                columnNumber: 20
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  type: "password",
                  autoComplete: "new-password",
                  placeholder: editingManager ? "留空则保持原密码不变" : "留空即为系统随机生成",
                  value: newManager.password,
                  onChange: (e) => setNewManager({ ...newManager, password: e.target.value })
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                  lineNumber: 366,
                  columnNumber: 20
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 362,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-sm font-bold text-slate-700", children: "分配角色组" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                  lineNumber: 376,
                  columnNumber: 22
                }, void 0),
                editingManager?.id === currentUser?.id && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "text-[12px] text-amber-600 border-amber-200 bg-amber-50 gap-1 font-medium", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { size: 10 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                    lineNumber: 379,
                    columnNumber: 26
                  }, void 0),
                  " 禁止修改本人权限"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                  lineNumber: 378,
                  columnNumber: 24
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 375,
                columnNumber: 20
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `grid grid-cols-2 gap-3 p-4 rounded-xl border ${editingManager?.id === currentUser?.id ? "bg-slate-50/50 border-slate-200 opacity-60" : "bg-slate-50 border-slate-100"}`, children: roles.map((role) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Checkbox,
                  {
                    id: `role-${role.id}`,
                    disabled: editingManager?.id === currentUser?.id,
                    checked: newManager.roleIds.includes(role.id),
                    onCheckedChange: (checked) => {
                      const ids = checked ? [...newManager.roleIds, role.id] : newManager.roleIds.filter((id) => id !== role.id);
                      setNewManager({ ...newManager, roleIds: ids });
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                    lineNumber: 390,
                    columnNumber: 27
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "label",
                  {
                    htmlFor: `role-${role.id}`,
                    className: `text-xs font-medium leading-none ${editingManager?.id === currentUser?.id ? "cursor-not-allowed text-slate-400" : "cursor-pointer"}`,
                    children: role.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                    lineNumber: 401,
                    columnNumber: 27
                  },
                  void 0
                )
              ] }, role.id, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 389,
                columnNumber: 25
              }, void 0)) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 383,
                columnNumber: 20
              }, void 0),
              editingManager?.id === currentUser?.id && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 text-center italic", children: "为了防止逻辑死锁，系统禁止通过此页面修改当前登录账号的角色映射。" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 413,
                columnNumber: 22
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 374,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 351,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: () => setIsDialogOpen(false), children: "取消" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 420,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", loading: creating, children: editingManager ? "确认修改" : "生成账号" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 421,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 419,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-2 space-y-6 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center animate-in zoom-in-50 duration-500", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 28, strokeWidth: 3 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 429,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 428,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-2xl font-black", children: "创建成功" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 432,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "px-4", children: "请立即复制并妥善保管该初始密码。出于安全考虑，关闭此窗口后将无法再次查看。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 433,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 431,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full bg-slate-900 text-white p-6 rounded-2xl font-mono text-xl tracking-widest text-center relative group shadow-2xl overflow-hidden self-stretch", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-x-0 bottom-0 h-1 bg-primary/50" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
              lineNumber: 438,
              columnNumber: 17
            }, void 0),
            generatedPassword,
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => {
                  navigator.clipboard.writeText(generatedPassword);
                  toast({ title: "已成功复制到剪贴板" });
                },
                className: "absolute right-3 top-3 p-1.5 text-slate-500 hover:text-white transition-all bg-white/5 rounded-lg border border-white/10",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 16 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                  lineNumber: 447,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
                lineNumber: 440,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 437,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => setIsDialogOpen(false), className: "w-full h-12 text-md font-bold", children: "我已记录，关闭窗口" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
            lineNumber: 450,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 427,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
          lineNumber: 337,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
        lineNumber: 330,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, void 0);
};
const $$Managers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "管理员帐户管理" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorBoundary", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/components/ui/ErrorBoundary", "client:component-export": "ErrorBoundary" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ManagersManagement", ManagersManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/ManagersManagement", "client:component-export": "ManagersManagement" })} ` })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/managers.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/managers.astro";
const $$url = "/admin/managers";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Managers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
