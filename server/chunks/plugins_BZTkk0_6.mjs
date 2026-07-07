globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_DDBDk8oL.mjs";
import { R as RefreshCcw, h as Puzzle, P as PlusCircle, C as Code, T as Terminal, S as ShieldAlert, $ as $$DashboardLayout } from "./DashboardLayout_Dga_YKQx.mjs";
import { h as useAdminPermissions, u as useToast, j as jsxDevRuntimeExports, B as Button, T as Trash2, I as Input } from "./useAdminPermissions_CfFJqDvL.mjs";
import { c as ConfirmDialog } from "./chat-workspace_DyCtoeYY.mjs";
import { F as FormDialog } from "./FormDialog_DhmUXAVW.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_BfD_7nEV.mjs";
import { S as Switch } from "./Switch_CjQRIakf.mjs";
import { C as Card, c as CardContent } from "./Card_8dYLdZ7_.mjs";
import { B as Badge } from "./Badge_CWaAv5tk.mjs";
import { L as Label } from "./Label_BdYADn1o.mjs";
import { A as AdvancedJSONEditor } from "./AdvancedJSONEditor_DqvAG-RU.mjs";
import { S as Settings } from "./settings_Dn1vcIjP.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const PluginManagement = () => {
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canManagePlugins = hasPermission2(["plugins.manage", "role.manage"]);
  const [plugins, setPlugins] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [processingSlug, setProcessingSlug] = reactExports.useState(null);
  const [registerModalOpen, setRegisterModalOpen] = reactExports.useState(false);
  const [newPluginData, setNewPluginData] = reactExports.useState({ slug: "", name: "", description: "" });
  const [configModalOpen, setConfigModalOpen] = reactExports.useState(false);
  const [editingPlugin, setEditingPlugin] = reactExports.useState(null);
  const [editingConfig, setEditingConfig] = reactExports.useState({});
  const [editingName, setEditingName] = reactExports.useState("");
  const [editingDescription, setEditingDescription] = reactExports.useState("");
  const [confirmOpen, setConfirmOpen] = reactExports.useState(false);
  const [confirmSlug, setConfirmSlug] = reactExports.useState(null);
  const { toast } = useToast();
  const fetchPlugins = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/plugins/admin/available");
      if (!res.ok) throw new Error("无法连接至插件管理服务");
      const { data } = await res.json();
      setPlugins(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchPlugins();
  }, []);
  const handleRegister = async () => {
    if (!canManagePlugins) return;
    if (!newPluginData.slug) return toast({ title: "必填项缺失", description: "Slug 是识别插件的唯一标识", variant: "destructive" });
    setProcessingSlug("registering");
    try {
      const res = await fetch("/api/v1/plugins/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPluginData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "登记失败");
      toast({ title: "登记成功", description: `插件 ${newPluginData.slug} 已成功录入 Drizzle 系统。` });
      setRegisterModalOpen(false);
      setNewPluginData({ slug: "", name: "", description: "" });
      await fetchPlugins();
    } catch (err) {
      toast({ title: "登记错误", description: err.message, variant: "destructive" });
    } finally {
      setProcessingSlug(null);
    }
  };
  const handleUninstall = async () => {
    if (!canManagePlugins) return;
    if (!confirmSlug) return;
    const slug = confirmSlug;
    setProcessingSlug(slug);
    setConfirmOpen(false);
    try {
      const res = await fetch("/api/v1/plugins/admin/uninstall", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug })
      });
      if (!res.ok) throw new Error("卸载失败");
      toast({ title: "已移除", description: "插件记录已从数据库物理删除。" });
      await fetchPlugins();
      window.dispatchEvent(new CustomEvent("plugins-updated"));
    } catch (err) {
      toast({ title: "操作错误", description: err.message, variant: "destructive" });
    } finally {
      setProcessingSlug(null);
      setConfirmSlug(null);
    }
  };
  const triggerUninstallConfirm = (slug) => {
    if (!canManagePlugins) return;
    setConfirmSlug(slug);
    setConfirmOpen(true);
  };
  const togglePlugin = async (slug, currentStatus, canManage = false) => {
    if (!canManage) return;
    setProcessingSlug(slug);
    try {
      const res = await fetch("/api/v1/plugins/admin/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, enabled: !currentStatus })
      });
      if (!res.ok) throw new Error("状态切换失败");
      const nextStatus = !currentStatus;
      setPlugins((prev) => prev.map(
        (p) => p.slug === slug ? { ...p, isEnabled: nextStatus } : p
      ));
      toast({
        title: nextStatus ? "插件已激活" : "插件已禁用",
        description: nextStatus ? "权限已自动注入，侧边栏菜单已同步。" : "相关功能入口已关闭。"
      });
      window.dispatchEvent(new CustomEvent("plugins-updated"));
      await fetchPlugins();
    } catch (err) {
      toast({ title: "切换失败", description: err.message, variant: "destructive" });
      await fetchPlugins();
    } finally {
      setProcessingSlug(null);
    }
  };
  const openConfig = (plugin) => {
    setEditingPlugin(plugin);
    setEditingConfig(plugin.config || {});
    setEditingName(plugin.name || "");
    setEditingDescription(plugin.description || "");
    setConfigModalOpen(true);
  };
  const saveConfig = async () => {
    if (!editingPlugin?.canManage) return;
    setProcessingSlug(editingPlugin.slug);
    try {
      const res = await fetch("/api/v1/plugins/admin/config", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: editingPlugin.slug,
          name: editingName,
          description: editingDescription,
          config: editingConfig
        })
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "保存失败");
      }
      toast({ title: "配置热更新成功", description: "名称、描述及 JSON 参数已同步应用。" });
      setConfigModalOpen(false);
      await fetchPlugins();
    } catch (err) {
      toast({ title: "保存失败", description: err.message, variant: "destructive" });
    } finally {
      setProcessingSlug(null);
    }
  };
  if (loading && plugins.length === 0) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center h-64 space-y-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCcw, { className: "w-8 h-8 text-blue-500 animate-spin" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-500 font-medium tracking-tight", children: "正在检索插件资产树..." }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-bold text-slate-800 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Puzzle, { className: "text-blue-600" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, void 0),
          "资产管理与生命周期"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-500 text-sm mt-1", children: "将物理代码在 D1 数据库中登记，开启路由代理、动态 UI 联动与 RBAC 权限系统。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: fetchPlugins, className: "gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCcw, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 251,
            columnNumber: 13
          }, void 0),
          "刷新状态"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 250,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { size: "sm", onClick: () => canManagePlugins && setRegisterModalOpen(true), disabled: !canManagePlugins, className: "gap-2 bg-blue-600 hover:bg-blue-700", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PlusCircle, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, void 0),
          "手动登记插件"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 254,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, void 0),
    !loadingPermissions && !canManagePlugins ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看插件资产与配置，插件登记、启停、卸载和运行时配置修改已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 262,
      columnNumber: 9
    }, void 0) : null,
    error ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "pt-6 flex items-center gap-3 text-red-700", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertCircle, { size: 20 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 270,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: error }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 271,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 269,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 268,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-200 shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50/50 text-[11px] uppercase tracking-wider font-bold", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[220px]", children: "插件身份 (Slug)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 279,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "功能描述与声明" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 280,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[120px]", children: "运行时状态" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 281,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[120px] text-right", children: "资产控制" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 282,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 278,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 277,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: plugins.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "h-40 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-2 text-slate-400", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Code, { size: 24, className: "opacity-20" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 290,
          columnNumber: 23
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "当前无已登记资产数据。请点击右上方按钮开始登记。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 291,
          columnNumber: 23
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 289,
        columnNumber: 21
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 288,
        columnNumber: 19
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 287,
        columnNumber: 17
      }, void 0) : plugins.map((plugin) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "group hover:bg-slate-50/50 transition-colors", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: [
          plugin.isEnabled ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "a",
            {
              href: `/admin/plugins/${plugin.slug}`,
              className: "font-bold text-slate-800 hover:text-blue-600 hover:underline transition-all decoration-blue-300 underline-offset-4",
              children: plugin.name
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 301,
              columnNumber: 27
            },
            void 0
          ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-slate-400 cursor-not-allowed italic", children: [
            plugin.name,
            " (已挂起)"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 308,
            columnNumber: 27
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 mt-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "text-[12px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono border border-slate-200", children: plugin.slug }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 313,
              columnNumber: 27
            }, void 0),
            !plugin.isCodePresent && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "text-[9px] bg-red-50 text-red-600 border-red-100 py-0 px-1 opacity-80", children: "代码未就绪" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 317,
              columnNumber: 30
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 312,
            columnNumber: 25
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 299,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 298,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "max-w-md", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[13px] text-slate-600 leading-relaxed line-clamp-2", children: plugin.description || "暂无元数据说明" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 325,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] text-slate-400 mt-1.5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1 font-medium", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Terminal, { size: 10 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 329,
                columnNumber: 80
              }, void 0),
              " v",
              plugin.version
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 329,
              columnNumber: 26
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "opacity-60", children: [
              "作者: ",
              plugin.author
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 330,
              columnNumber: 26
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 328,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 324,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: plugin.isEnabled ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "bg-green-50 text-green-700 border-green-200 gap-1 font-medium px-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 336,
            columnNumber: 27
          }, void 0),
          "已运行"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 335,
          columnNumber: 25
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "bg-slate-100 text-slate-500 border-slate-200 gap-1 font-medium px-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldAlert, { size: 12 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 341,
            columnNumber: 27
          }, void 0),
          "已冻结"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 340,
          columnNumber: 25
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 333,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-end gap-2.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "h-8 w-8 text-slate-400 hover:text-blue-600 transition-colors",
              onClick: () => openConfig(plugin),
              disabled: !plugin.canManage,
              title: "高阶运行时配置",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { size: 16 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 356,
                columnNumber: 27
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 348,
              columnNumber: 25
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Switch,
            {
              checked: plugin.isEnabled,
              disabled: processingSlug === plugin.slug || !plugin.isCodePresent || !plugin.canManage,
              onCheckedChange: () => togglePlugin(plugin.slug, plugin.isEnabled, !!plugin.canManage)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 359,
              columnNumber: 25
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "h-8 w-8 text-slate-300 hover:text-red-500 transition-colors ml-1",
              onClick: () => triggerUninstallConfirm(plugin.slug),
              disabled: processingSlug === plugin.slug || !canManagePlugins,
              title: "从数据库中移除登记记录",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 16 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 373,
                columnNumber: 27
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 365,
              columnNumber: 25
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 347,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 346,
          columnNumber: 21
        }, void 0)
      ] }, plugin.slug, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 297,
        columnNumber: 19
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 276,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 275,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-100/80 border border-slate-200 rounded-2xl p-6 flex gap-5 items-start", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Terminal, { className: "text-blue-500 shrink-0 mt-0.5", size: 24 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 387,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-600 leading-relaxed space-y-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-slate-800 text-sm", children: "💡 资产管理中心 - 开发者与管理员指南" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 389,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold text-slate-700 flex items-center gap-1.5 underline decoration-blue-200 underline-offset-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Code, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 393,
                columnNumber: 17
              }, void 0),
              " 什么是高级初始化配置 (JSON)？"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 392,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
              "这相当于插件的 ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("b", { children: "“环境变量”" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 396,
                columnNumber: 25
              }, void 0),
              "。开发者可以在此定义插件运行所需的外部参数 （如 API 密钥、资源重定向路径等），实现 ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("b", { children: "“代码不动，配置先行”" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 397,
                columnNumber: 40
              }, void 0),
              "。系统会在插件启动时自动注入这些配置。"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 395,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 391,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold text-slate-700 flex items-center gap-1.5 underline decoration-blue-200 underline-offset-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Puzzle, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 402,
                columnNumber: 17
              }, void 0),
              " 插件集成工作流"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 401,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
              "1. 在 ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { children: "src/plugins/" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 405,
                columnNumber: 22
              }, void 0),
              " 创建子目录。",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 405,
                columnNumber: 54
              }, void 0),
              "2. 遵循目录契约 (需具备 ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { children: "manifest.ts" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 406,
                columnNumber: 32
              }, void 0),
              ", ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { children: "index.ts" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 406,
                columnNumber: 58
              }, void 0),
              ", ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { children: "admin/index.tsx" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 406,
                columnNumber: 81
              }, void 0),
              ")。",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 406,
                columnNumber: 111
              }, void 0),
              "3. 重启 dev 环境触发自动扫描，系统将生成代码桥接文件。",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 407,
                columnNumber: 48
              }, void 0),
              "4. 在此页面点击",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("b", { children: "手动登记" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 408,
                columnNumber: 26
              }, void 0),
              "并激活，开启路由代理与 RBAC 权限联动。"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 404,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 400,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 390,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 388,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
      lineNumber: 386,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: registerModalOpen,
        onOpenChange: (open) => {
          if (open && !canManagePlugins) return;
          setRegisterModalOpen(open);
        },
        title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2 text-slate-800", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PlusCircle, { className: "text-blue-600", size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 423,
            columnNumber: 13
          }, void 0),
          "手动登记新资产"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 422,
          columnNumber: 11
        }, void 0),
        description: "请输入物理代码文件夹对应的 Slug 标识。系统将尝试从代码中提取 Manifest 信息。",
        contentClassName: "max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden p-0",
        bodyClassName: "max-h-[60vh] space-y-5 overflow-y-auto p-6",
        footerClassName: "bg-slate-50 p-4 border-t border-slate-100 mt-0",
        cancelText: "取消操作",
        confirmText: processingSlug === "registering" ? "正在连接资产..." : "立即激活资产",
        onCancel: () => setRegisterModalOpen(false),
        onConfirm: handleRegister,
        confirmDisabled: !canManagePlugins || processingSlug === "registering",
        confirmClassName: "min-w-[120px] hover:bg-blue-700",
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "slug", className: "text-xs font-bold uppercase text-slate-500", children: "Slug 标识 (必填)" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 440,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  id: "slug",
                  placeholder: "例如: membership",
                  value: newPluginData.slug,
                  onChange: (e) => setNewPluginData((prev) => ({ ...prev, slug: e.target.value })),
                  disabled: !canManagePlugins,
                  className: "font-mono bg-slate-50 border-slate-200"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                  lineNumber: 441,
                  columnNumber: 13
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 439,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "name", className: "text-xs font-bold uppercase text-slate-500", children: "显示名称 (推荐)" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 451,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  id: "name",
                  placeholder: "会员管理系统",
                  value: newPluginData.name,
                  onChange: (e) => setNewPluginData((prev) => ({ ...prev, name: e.target.value })),
                  disabled: !canManagePlugins
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                  lineNumber: 452,
                  columnNumber: 13
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 450,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 438,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "desc", className: "text-xs font-bold uppercase text-slate-500", children: "功能简述" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 463,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                id: "desc",
                placeholder: "基于 Drizzle 的高级会员插件...",
                value: newPluginData.description,
                onChange: (e) => setNewPluginData((prev) => ({ ...prev, description: e.target.value })),
                disabled: !canManagePlugins
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 464,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 462,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 border-t border-slate-100 pt-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { size: 14, className: "text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 475,
                columnNumber: 13
              }, void 0),
              "高级初始化配置 (JSON)"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 474,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border border-slate-200 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              AdvancedJSONEditor,
              {
                value: newPluginData.config || {},
                onChange: (val) => canManagePlugins && setNewPluginData((prev) => ({ ...prev, config: val }))
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 479,
                columnNumber: 13
              },
              void 0
            ) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 478,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400", children: "登记成功后，这些参数将作为插件的初始运行时配置应用。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 484,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 473,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 415,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: configModalOpen,
        onOpenChange: setConfigModalOpen,
        title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2 text-slate-800", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { className: "text-blue-600", size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 493,
            columnNumber: 13
          }, void 0),
          "高级运行时配置: ",
          editingPlugin?.name
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
          lineNumber: 492,
          columnNumber: 11
        }, void 0),
        description: "修改插件的运行时 JSON 环境参数。保存后，相关代理转发将立即应用新参数。",
        contentClassName: "max-w-2xl bg-white rounded-2xl shadow-2xl",
        bodyClassName: "p-6 space-y-6",
        footerClassName: "bg-slate-50 -mx-6 -mb-6 p-4 mt-4 rounded-b-2xl border-t border-slate-100",
        cancelText: "关闭窗口",
        confirmText: editingPlugin?.canManage ? "持久化配置" : "仅查看",
        onCancel: () => setConfigModalOpen(false),
        onConfirm: saveConfig,
        confirmDisabled: !editingPlugin?.canManage || processingSlug === editingPlugin?.slug,
        confirmClassName: "min-w-[100px] hover:bg-blue-700",
        children: [
          !loadingPermissions && !editingPlugin?.canManage ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800", children: "当前账号仅可查看该插件配置，修改和保存已禁用。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 509,
            columnNumber: 11
          }, void 0) : null,
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[11px] font-bold uppercase text-slate-400", children: "插件显示名称" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 515,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  value: editingName,
                  onChange: (e) => setEditingName(e.target.value),
                  disabled: !editingPlugin?.canManage,
                  className: "bg-slate-50 border-slate-200 focus:ring-blue-500"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                  lineNumber: 516,
                  columnNumber: 13
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 514,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[11px] font-bold uppercase text-slate-400", children: "资源定位 Slug" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 524,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: editingPlugin?.slug, disabled: true, className: "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed font-mono" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 525,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 523,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 513,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[11px] font-bold uppercase text-slate-400", children: "功能简述" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 530,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                value: editingDescription,
                onChange: (e) => setEditingDescription(e.target.value),
                disabled: !editingPlugin?.canManage,
                className: "bg-slate-50 border-slate-200 focus:ring-blue-500"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 531,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 529,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 border-t border-slate-100 pt-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-[11px] font-bold uppercase text-slate-400 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Code, { size: 14, className: "text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 541,
                columnNumber: 13
              }, void 0),
              "运行时环境变量 (JSON Params)"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 540,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border border-slate-200 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              AdvancedJSONEditor,
              {
                value: editingConfig,
                onChange: (value) => editingPlugin?.canManage && setEditingConfig(value)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
                lineNumber: 545,
                columnNumber: 13
              },
              void 0
            ) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
              lineNumber: 544,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
            lineNumber: 539,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 488,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: confirmOpen,
        onOpenChange: setConfirmOpen,
        title: "移除插件登记",
        description: `确定要移除插件记录 "${confirmSlug}" 吗？注意：这不会删除物理文件夹，但会清除该插件的所有数据库配置、权限定义及 RBAC 映射。`,
        onConfirm: handleUninstall,
        variant: "destructive",
        confirmText: "确认物理移除",
        isLoading: processingSlug === confirmSlug
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
        lineNumber: 553,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement.tsx",
    lineNumber: 238,
    columnNumber: 5
  }, void 0);
};
const $$Plugins = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Plugins;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["plugins.view", "plugins.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "插件管理中心" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PluginManagement", PluginManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/PluginManagement", "client:component-export": "PluginManagement" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/plugins.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/plugins.astro";
const $$url = "/admin/plugins";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Plugins,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
