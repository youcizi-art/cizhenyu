globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, B as Button, T as Trash2, L as Loader2, U as UI_LAYER } from "./Button_BI0VYNyM.mjs";
import { r as reactExports } from "./worker-entry_DhHjvv2h.mjs";
import { C as Card, a as CardContent } from "./Card_Bcuf39jp.mjs";
import { A as AlertTriangle, I as Info, C as Check, a as ConfirmDialog } from "./ConfirmDialog_De0oqLuK.mjs";
import { K as Key, S as Settings, P as Plus } from "./settings_CVqNjo3K.mjs";
import { T as Terminal } from "./terminal_Cs31z74n.mjs";
import { R as RefreshCw, C as Copy } from "./refresh-cw_BDTLwcEs.mjs";
import { T as TrendingUp, U as UserCheck } from "./user-check__HzT2qk9.mjs";
const CFDeployerAdmin = () => {
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [copiedId, setCopiedId] = reactExports.useState(null);
  const [copiedAccountId, setCopiedAccountId] = reactExports.useState(null);
  const [copiedUsernameId, setCopiedUsernameId] = reactExports.useState(null);
  const handleCopyAccountId = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedAccountId(id);
    setTimeout(() => setCopiedAccountId(null), 1500);
  };
  const handleCopyUsername = (id, text) => {
    let cleanText = text;
    const match = text.match(/\(([^)]+)\)/);
    if (match && match[1]) {
      cleanText = match[1];
    }
    navigator.clipboard.writeText(cleanText);
    setCopiedUsernameId(id);
    setTimeout(() => setCopiedUsernameId(null), 1500);
  };
  const [page, setPage] = reactExports.useState(1);
  const [limit, setLimit] = reactExports.useState(10);
  const [total, setTotal] = reactExports.useState(0);
  const [unusedCount, setUnusedCount] = reactExports.useState(0);
  const [usedCount, setUsedCount] = reactExports.useState(0);
  const [expiredCount, setExpiredCount] = reactExports.useState(0);
  const [showGenModal, setShowGenModal] = reactExports.useState(false);
  const [genCount, setGenCount] = reactExports.useState(10);
  const [customCountInput, setCustomCountInput] = reactExports.useState("");
  const [expiresDays, setExpiresDays] = reactExports.useState(365);
  const [customDaysInput, setCustomDaysInput] = reactExports.useState("");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = reactExports.useState(null);
  const [feedbackDialog, setFeedbackDialog] = reactExports.useState({ open: false, title: "", description: "" });
  const [selectedIds, setSelectedIds] = reactExports.useState([]);
  const [showBatchDeleteConfirm, setShowBatchDeleteConfirm] = reactExports.useState(false);
  const [isBatchDeleting, setIsBatchDeleting] = reactExports.useState(false);
  const [chromeExtId, setChromeExtId] = reactExports.useState("");
  const [isSavingExt, setIsSavingExt] = reactExports.useState(false);
  const [showExtConfigDialog, setShowExtConfigDialog] = reactExports.useState(false);
  const [showEngineConfigDialog, setShowEngineConfigDialog] = reactExports.useState(false);
  const openFeedbackDialog = (title, description) => {
    setFeedbackDialog({ open: true, title, description });
  };
  const [engineSettings, setEngineSettings] = reactExports.useState({
    runner_type: "github",
    github_token: "",
    github_repo: "youcizi-art/cizhenyu",
    github_workflow: "deploy.yml",
    custom_runner_url: "",
    webhook_secret: "antigravity-webhook-secret-2026"
    // 预设一个足够安全的默认 Webhook 密钥
  });
  const [loadingEngine, setLoadingEngine] = reactExports.useState(false);
  const [savingEngine, setSavingEngine] = reactExports.useState(false);
  const fetchEngineSettings = async () => {
    setLoadingEngine(true);
    try {
      const res = await fetch("/api/v1/plugins/proxy/cf-deployer/settings/engine");
      const json = await res.json();
      if (json.success) {
        setEngineSettings((prev) => ({
          runner_type: json.settings.runner_type || prev.runner_type,
          github_token: json.settings.github_token || prev.github_token,
          github_repo: json.settings.github_repo || prev.github_repo,
          github_workflow: json.settings.github_workflow || prev.github_workflow,
          custom_runner_url: json.settings.custom_runner_url || prev.custom_runner_url,
          webhook_secret: json.settings.webhook_secret || prev.webhook_secret
        }));
      }
    } catch (err) {
      console.error("拉取外部部署引擎配置失败:", err);
    } finally {
      setLoadingEngine(false);
    }
  };
  const saveEngineSettings = async () => {
    setSavingEngine(true);
    try {
      const res = await fetch("/api/v1/plugins/proxy/cf-deployer/settings/engine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(engineSettings)
      });
      const json = await res.json();
      if (json.success) {
        openFeedbackDialog("保存成功", "外部部署引擎配置已安全保存！");
      } else {
        openFeedbackDialog("保存失败", json.error || "保存配置时发生错误");
      }
    } catch (err) {
      openFeedbackDialog("网络异常", "保存配置时发生网络异常");
    } finally {
      setSavingEngine(false);
    }
  };
  const fetchCodes = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/v1/plugins/proxy/cf-deployer/codes?page=${page}&limit=${limit}`);
      const json = await res.json();
      if (json.success) {
        setList(json.list || []);
        if (json.pagination) {
          setTotal(json.pagination.total || 0);
          setUnusedCount(json.pagination.unusedCount || 0);
          setUsedCount(json.pagination.usedCount || 0);
          setExpiredCount(json.pagination.expiredCount || 0);
        }
      }
    } catch (err) {
      console.error("拉取部署授权码失败:", err);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchCodes();
    fetchExtId();
    fetchEngineSettings();
    setSelectedIds([]);
  }, [page, limit]);
  const fetchExtId = async () => {
    try {
      const res = await fetch("/api/v1/plugins/proxy/cf-deployer/settings/chrome-extension");
      const json = await res.json();
      if (json.success) {
        setChromeExtId(json.extensionId || "");
      }
    } catch (e) {
    }
  };
  const handleSaveExtId = async () => {
    setIsSavingExt(true);
    try {
      const res = await fetch("/api/v1/plugins/proxy/cf-deployer/settings/chrome-extension", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ extensionId: chromeExtId })
      });
      const json = await res.json();
      if (json.success) {
        openFeedbackDialog("保存成功", "Chrome 扩展 ID 已同步。");
      } else {
        openFeedbackDialog("保存失败", json.error || "未知错误");
      }
    } catch (e) {
      openFeedbackDialog("保存失败", e.message);
    } finally {
      setIsSavingExt(false);
    }
  };
  const handleSelectRow = (id) => {
    setSelectedIds(
      (prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const isAllSelected = list.length > 0 && list.every((item) => selectedIds.includes(item.id));
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds((prev) => prev.filter((id) => !list.some((item) => item.id === id)));
    } else {
      const toAdd = list.map((item) => item.id);
      setSelectedIds((prev) => Array.from(/* @__PURE__ */ new Set([...prev, ...toAdd])));
    }
  };
  const handleBatchDelete = async () => {
    if (selectedIds.length === 0) return;
    setIsBatchDeleting(true);
    try {
      const res = await fetch("/api/v1/plugins/proxy/cf-deployer/codes/batch-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds })
      });
      const json = await res.json();
      if (json.success) {
        setSelectedIds([]);
        setShowBatchDeleteConfirm(false);
        fetchCodes();
      } else {
        openFeedbackDialog("批量物理注销失败", json.error || "批量物理注销失败！");
      }
    } catch {
      openFeedbackDialog("网络连接异常", "物理网络连接异常！");
    } finally {
      setIsBatchDeleting(false);
    }
  };
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };
  const handleGenerateCodes = async () => {
    const finalCount = customCountInput.trim() ? parseInt(customCountInput, 10) : genCount;
    if (isNaN(finalCount) || finalCount <= 0 || finalCount > 500) {
      openFeedbackDialog("参数校验失败", "请输入 1 到 500 之间的合法数字！");
      return;
    }
    const finalDays = expiresDays === -1 ? parseInt(customDaysInput, 10) : expiresDays;
    if (expiresDays === -1 && (isNaN(finalDays) || finalDays <= 0)) {
      openFeedbackDialog("参数校验失败", "请输入合法的自定义天数！");
      return;
    }
    setIsGenerating(true);
    try {
      const res = await fetch("/api/v1/plugins/proxy/cf-deployer/codes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          count: finalCount,
          expiresDays: finalDays > 0 ? finalDays : null
        })
      });
      const json = await res.json();
      if (json.success) {
        setShowGenModal(false);
        setCustomCountInput("");
        setCustomDaysInput("");
        setPage(1);
        fetchCodes();
      } else {
        openFeedbackDialog("批量生成失败", json.error || "批量生成部署码失败！");
      }
    } catch (err) {
      openFeedbackDialog("网络连接异常", "物理网络连接异常！");
    } finally {
      setIsGenerating(false);
    }
  };
  const handleDeleteCode = async (id) => {
    try {
      const res = await fetch(`/api/v1/plugins/proxy/cf-deployer/codes/${id}`, {
        method: "DELETE"
      });
      const json = await res.json();
      if (json.success) {
        setDeleteConfirmId(null);
        fetchCodes();
      } else {
        openFeedbackDialog("吊销授权码失败", json.error || "吊销授权码失败！");
      }
    } catch {
      openFeedbackDialog("网络连接异常", "物理网络连接异常！");
    }
  };
  const totalCodes = total;
  const unusedCodes = unusedCount;
  const usedCodes = usedCount;
  const expiredCodes = expiredCount;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto space-y-8 select-none", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { className: "w-7 h-7 text-blue-600 animate-pulse" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 347,
            columnNumber: 13
          }, void 0),
          "云端部署授权码超级管理中心"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 346,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500 mt-1", children: "一键批量发行、物理审计、生命周期注销，支持 Cloudflare 多租户物理 ID 绑定限制。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 350,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 345,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setShowExtConfigDialog(true),
            variant: "outline",
            className: "border-blue-200 text-blue-600 hover:bg-blue-50 h-10 px-4 rounded-xl shadow-sm transition-all flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { className: "w-4 h-4" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 362,
                columnNumber: 13
              }, void 0),
              "插件协同"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 357,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setShowEngineConfigDialog(true),
            variant: "outline",
            className: "border-purple-200 text-purple-600 hover:bg-purple-50 h-10 px-4 rounded-xl shadow-sm transition-all flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Terminal, { className: "w-4 h-4" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 370,
                columnNumber: 13
              }, void 0),
              "部署引擎"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 365,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 356,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 344,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
      selectedIds.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          onClick: () => setShowBatchDeleteConfirm(true),
          className: "bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 font-bold h-10 px-4 rounded-2xl shadow-sm transition-all flex items-center gap-1.5 animate-in fade-in slide-in-from-right-3 duration-200",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 15 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 382,
              columnNumber: 15
            }, void 0),
            " 批量物理注销 (",
            selectedIds.length,
            ")"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 378,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          onClick: fetchCodes,
          variant: "outline",
          className: "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 h-10 w-10 p-0 rounded-2xl transition-all",
          title: "刷新列表",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { className: `w-4 h-4 ${loading ? "animate-spin" : ""}` }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 391,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 385,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          onClick: () => setShowGenModal(true),
          className: "bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 px-5 rounded-2xl shadow-md shadow-blue-200/50 hover:shadow-lg hover:shadow-blue-300/60 transition-all flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 397,
              columnNumber: 13
            }, void 0),
            " 批量发行授权码"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 393,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 376,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-emerald-100 bg-emerald-50/20 rounded-3xl p-5 shadow-sm flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest", children: "未使用授权码" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 405,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-3xl font-black text-emerald-800", children: unusedCodes }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 406,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 404,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TrendingUp, { size: 22 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 409,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 408,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 403,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-purple-100 bg-purple-50/20 rounded-3xl p-5 shadow-sm flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-extrabold text-purple-600 uppercase tracking-widest", children: "已激活使用" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 415,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-3xl font-black text-purple-800", children: usedCodes }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 416,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 414,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 bg-purple-50 text-purple-600 border border-purple-100 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(UserCheck, { size: 22 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 419,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 418,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 413,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-rose-100 bg-rose-50/20 rounded-3xl p-5 shadow-sm flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-extrabold text-rose-600 uppercase tracking-widest", children: "已到期作废" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 425,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-3xl font-black text-rose-800", children: expiredCodes }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 426,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 424,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 bg-rose-50 text-rose-600 border border-rose-100 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { size: 22 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 429,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 428,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 423,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-slate-200/80 bg-white rounded-3xl p-5 shadow-sm flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-extrabold text-slate-500 uppercase tracking-widest", children: "总发行配额" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 435,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-3xl font-black text-slate-800", children: totalCodes }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 436,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 434,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 bg-slate-50 text-slate-500 border border-slate-200/60 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { size: 22 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 439,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 438,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 433,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 402,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-slate-200/80 bg-white rounded-3xl overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full text-left border-collapse", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "bg-slate-50/80 border-b border-slate-100/80 text-[11px] font-black text-slate-400 uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6 w-10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "input",
          {
            type: "checkbox",
            checked: isAllSelected,
            onChange: handleSelectAll,
            className: "w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 452,
            columnNumber: 21
          },
          void 0
        ) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 451,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "ID" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 459,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "授权部署码 (Key)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 460,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "状态" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 461,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "授权有效期" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 462,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "绑定注册用户" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 463,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "绑定 CF 账户 (Account ID)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 464,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "创建时间" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 465,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6", children: "激活时间" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 466,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-4.5 px-6 text-center w-24", children: "操作" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 467,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 450,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 449,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y divide-slate-100/80", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: 10, className: "py-16 text-center text-slate-400 font-bold", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "w-6 h-6 text-blue-500 animate-spin" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 475,
          columnNumber: 25
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "正在安全审计加载云端部署码..." }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 476,
          columnNumber: 25
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 474,
        columnNumber: 23
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 473,
        columnNumber: 21
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 472,
        columnNumber: 19
      }, void 0) : list.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: 10, className: "py-16 text-center text-slate-400 font-bold", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { className: "w-7 h-7 text-slate-300" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 484,
          columnNumber: 25
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: "暂无已发行的授权部署码，请点击右上角按钮进行批量发行。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 485,
          columnNumber: 25
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 483,
        columnNumber: 23
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 482,
        columnNumber: 21
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 481,
        columnNumber: 19
      }, void 0) : list.map((item, index) => {
        const isCopied = copiedId === item.id;
        deleteConfirmId === item.id;
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: `hover:bg-slate-50/50 transition-colors group ${selectedIds.includes(item.id) ? "bg-blue-50/20" : ""}`, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6 w-10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "checkbox",
              checked: selectedIds.includes(item.id),
              onChange: () => handleSelectRow(item.id),
              className: "w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 496,
              columnNumber: 27
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 495,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6 text-xs text-slate-400 font-mono font-bold", children: [
            "#",
            item.id
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 503,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-xl select-all", children: item.code }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 506,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => handleCopy(item.id, item.code),
                className: "p-1 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                title: "点击复制",
                children: isCopied ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 12, className: "text-emerald-600" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                  lineNumber: 514,
                  columnNumber: 43
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 12 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                  lineNumber: 514,
                  columnNumber: 94
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 509,
                columnNumber: 29
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 505,
            columnNumber: 27
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 504,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6", children: item.expires_at && Date.now() > item.expires_at ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1 text-[12px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100 animate-pulse", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-500" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 521,
              columnNumber: 31
            }, void 0),
            "已过期"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 520,
            columnNumber: 29
          }, void 0) : item.status === "used" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1 text-[12px] font-extrabold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-purple-500" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 526,
              columnNumber: 31
            }, void 0),
            "已使用"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 525,
            columnNumber: 29
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1 text-[12px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 531,
              columnNumber: 31
            }, void 0),
            "未使用"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 530,
            columnNumber: 29
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 518,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6", children: item.expires_at ? Date.now() > item.expires_at ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1 text-[12px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 540,
              columnNumber: 33
            }, void 0),
            "已过期"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 539,
            columnNumber: 31
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1 text-[12px] font-bold text-slate-600 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-lg font-mono", children: [
            new Date(item.expires_at).toLocaleDateString(),
            " 到期"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 544,
            columnNumber: 31
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1 text-[12px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 550,
              columnNumber: 31
            }, void 0),
            "永久有效"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 549,
            columnNumber: 29
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 536,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6", children: item.bound_username ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 bg-blue-50 border border-blue-100/60 px-2.5 py-0.5 rounded-lg w-fit", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-extrabold text-xs text-blue-700", title: item.bound_username, children: item.bound_username.length > 24 ? `${item.bound_username.slice(0, 22)}...` : item.bound_username }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 559,
              columnNumber: 31
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => handleCopyUsername(item.id, item.bound_username),
                className: "p-0.5 text-blue-400 hover:text-blue-600 hover:bg-blue-100/50 rounded transition-colors cursor-pointer",
                title: "复制该会员用户的完整登录邮箱",
                children: copiedUsernameId === item.id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 11, className: "text-emerald-600 animate-in zoom-in-50" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                  lineNumber: 568,
                  columnNumber: 35
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 11 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                  lineNumber: 570,
                  columnNumber: 35
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 562,
                columnNumber: 31
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 558,
            columnNumber: 29
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 font-bold bg-slate-100/60 px-2 py-0.5 rounded-lg w-fit inline-block", children: "未绑定用户" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 575,
            columnNumber: 29
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 556,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6", title: item.bound_account_id || "暂无绑定的 Cloudflare 账户", children: item.bound_account_id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 font-mono text-[11px] text-slate-600 bg-slate-100/60 border border-slate-200/50 px-2 py-0.5 rounded-xl w-fit", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
              item.bound_account_id.slice(0, 12),
              "..."
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 585,
              columnNumber: 31
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => handleCopyAccountId(item.id, item.bound_account_id),
                className: "p-0.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer",
                title: "复制 Cloudflare Account ID",
                children: copiedAccountId === item.id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 11, className: "text-emerald-600 animate-in zoom-in-50" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                  lineNumber: 592,
                  columnNumber: 35
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 11 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                  lineNumber: 594,
                  columnNumber: 35
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 586,
                columnNumber: 31
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 584,
            columnNumber: 29
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-300 font-bold", children: "—" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 599,
            columnNumber: 29
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 582,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6 text-xs text-slate-400", children: new Date(item.created_at).toLocaleString() }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 602,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6 text-xs text-slate-400 font-medium", children: item.used_at ? new Date(item.used_at).toLocaleString() : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-slate-300", children: "—" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 606,
            columnNumber: 85
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 605,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-4 px-6 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setDeleteConfirmId(item.id),
              className: "p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all",
              title: "彻底物理删除吊销部署码",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 13 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 614,
                columnNumber: 29
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 609,
              columnNumber: 27
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 608,
            columnNumber: 25
          }, void 0)
        ] }, item.id, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 494,
          columnNumber: 23
        }, void 0);
      }) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 470,
        columnNumber: 15
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 448,
      columnNumber: 13
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 447,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 446,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 445,
      columnNumber: 7
    }, void 0),
    total > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-medium text-slate-500", children: [
        "显示第 ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-slate-800", children: (page - 1) * limit + 1 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 631,
          columnNumber: 17
        }, void 0),
        " 到",
        " ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-slate-800", children: Math.min(page * limit, total) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 632,
          columnNumber: 13
        }, void 0),
        " 条记录， 共 ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-slate-800", children: total }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 633,
          columnNumber: 15
        }, void 0),
        " 条"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 630,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 select-none", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setPage((p) => Math.max(1, p - 1)),
            disabled: page === 1,
            variant: "outline",
            className: "h-8 px-3 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-all disabled:opacity-40",
            children: "上一页"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 637,
            columnNumber: 13
          },
          void 0
        ),
        Array.from({ length: Math.ceil(total / limit) }).map((_, idx) => {
          const pageNum = idx + 1;
          const isSelected = page === pageNum;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setPage(pageNum),
              className: `w-8 h-8 rounded-xl text-xs font-bold border transition-all ${isSelected ? "bg-blue-600 border-blue-600 text-white shadow-sm" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
              children: pageNum
            },
            pageNum,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 650,
              columnNumber: 17
            },
            void 0
          );
        }),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setPage((p) => Math.min(Math.ceil(total / limit), p + 1)),
            disabled: page === Math.ceil(total / limit),
            variant: "outline",
            className: "h-8 px-3 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-all disabled:opacity-40",
            children: "下一页"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 663,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 636,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 629,
      columnNumber: 9
    }, void 0),
    showGenModal && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `fixed inset-0 ${UI_LAYER.dialog.base.overlay} bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white border border-slate-200/80 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 border-b border-slate-100 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { size: 20 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 681,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 680,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-black text-slate-900", children: "批量发行部署授权码" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 684,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500 mt-0.5", children: "请选择发行数量或输入您期待的自定义数量。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 685,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 683,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 679,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "快捷选择发行配额" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 692,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-4 gap-2", children: [1, 10, 20, 30, 40, 50, 100].map((num) => {
            const isSelected = genCount === num && !customCountInput;
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => {
                  setGenCount(num);
                  setCustomCountInput("");
                },
                className: `h-9 font-bold text-xs rounded-xl border transition-all ${isSelected ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                children: [
                  num,
                  " 个"
                ]
              },
              num,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 697,
                columnNumber: 23
              },
              void 0
            );
          }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 693,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 691,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "或输入自定义发行量" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 718,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "number",
              placeholder: "请输入 1 - 500 的正整数...",
              value: customCountInput,
              onChange: (e) => {
                setCustomCountInput(e.target.value);
              },
              className: "w-full border border-slate-200 rounded-xl h-10 px-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 font-bold transition-all"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 719,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 717,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "设置授权有效期" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 732,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-3 gap-2", children: [
            { label: "永久有效", val: 0 },
            { label: "1 个月 (30天)", val: 30 },
            { label: "3 个月 (90天)", val: 90 },
            { label: "半年 (180天)", val: 180 },
            { label: "1 年 (365天)", val: 365 },
            { label: "自定义天数", val: -1 }
          ].map((opt) => {
            const isSelected = expiresDays === opt.val;
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => {
                  setExpiresDays(opt.val);
                  if (opt.val !== -1) setCustomDaysInput("");
                },
                className: `h-9 font-bold text-[12px] rounded-xl border transition-all ${isSelected ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                children: opt.label
              },
              opt.label,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 744,
                columnNumber: 23
              },
              void 0
            );
          }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 733,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 731,
          columnNumber: 15
        }, void 0),
        expiresDays === -1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 animate-in slide-in-from-top-2 duration-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "自定义有效天数" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 766,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "number",
              placeholder: "请输入授权码有效天数 (如 30)...",
              value: customDaysInput,
              onChange: (e) => setCustomDaysInput(e.target.value),
              className: "w-full border border-slate-200 rounded-xl h-10 px-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 font-bold transition-all"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 767,
              columnNumber: 19
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 765,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { className: "w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 778,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-500 leading-relaxed", children: "发行后的部署码为 **32-40位四段式高强度防伪激活密钥**。支持**永久有效**或**指定限期作废**，授权到期后系统将自动物理隔离并限制其对应的付费应用一键克隆与部署，实现高精度的商业流控。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 779,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 777,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 689,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => {
              setShowGenModal(false);
              setCustomCountInput("");
            },
            disabled: isGenerating,
            variant: "outline",
            className: "bg-white border-slate-200 text-slate-700 font-bold h-9 px-4 rounded-xl",
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 786,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: handleGenerateCodes,
            disabled: isGenerating,
            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-4 rounded-xl shadow-md flex items-center gap-1",
            children: isGenerating ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "w-3.5 h-3.5 animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 804,
                columnNumber: 21
              }, void 0),
              "正在发行中..."
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 803,
              columnNumber: 19
            }, void 0) : "立即发行密钥"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 797,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 785,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 678,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 677,
      columnNumber: 9
    }, void 0),
    deleteConfirmId !== null && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `fixed inset-0 ${UI_LAYER.dialog.base.overlay} bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white border border-rose-100 rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 border-b border-rose-50 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 20 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 821,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 820,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-black text-slate-900", children: "确认吊销此部署码？" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 824,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500 mt-0.5", children: "此操作不可撤销，请谨慎确认。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 825,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 823,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 819,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-rose-50 border border-rose-100 rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-rose-700 font-bold", children: [
          "彻底物理吊销 ID #",
          deleteConfirmId,
          " 的授权部署码。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 831,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-rose-500 mt-1.5 leading-relaxed", children: "被注销的授权码将无法恢复，若对应账户已绑定付费应用，其应用的重新部署能力也将同步受限。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 832,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 830,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 829,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setDeleteConfirmId(null),
            variant: "outline",
            className: "bg-white border-slate-200 text-slate-700 font-bold h-9 px-4 rounded-xl",
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 839,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => handleDeleteCode(deleteConfirmId),
            className: "bg-rose-600 hover:bg-rose-700 text-white font-bold h-9 px-4 rounded-xl shadow-md flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 850,
                columnNumber: 17
              }, void 0),
              "确认吊销"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 846,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 838,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 818,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 817,
      columnNumber: 9
    }, void 0),
    showBatchDeleteConfirm && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `fixed inset-0 ${UI_LAYER.dialog.base.overlay} bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white border border-rose-100 rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 border-b border-rose-50 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { size: 20 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 864,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 863,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-black text-slate-900", children: "确认批量物理注销" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 867,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500 mt-0.5", children: "此操作不可撤销，请谨慎确认。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 868,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 866,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 862,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-rose-50 border border-rose-100 rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-rose-700 font-bold", children: [
          "您即将永久物理注销 ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-lg font-black", children: selectedIds.length }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 875,
            columnNumber: 29
          }, void 0),
          " 个授权部署码。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 874,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-rose-500 mt-1.5 leading-relaxed", children: "被注销的授权码将无法恢复，若对应账户已绑定付费应用，其应用的重新部署能力也将同步受限。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 877,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 873,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 872,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setShowBatchDeleteConfirm(false),
            disabled: isBatchDeleting,
            variant: "outline",
            className: "bg-white border-slate-200 text-slate-700 font-bold h-9 px-4 rounded-xl",
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 884,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: handleBatchDelete,
            disabled: isBatchDeleting,
            className: "bg-rose-600 hover:bg-rose-700 text-white font-bold h-9 px-4 rounded-xl shadow-md flex items-center gap-1.5",
            children: isBatchDeleting ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "w-3.5 h-3.5 animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 899,
                columnNumber: 21
              }, void 0),
              "正在注销中..."
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 898,
              columnNumber: 19
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 904,
                columnNumber: 21
              }, void 0),
              "确认永久注销"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 903,
              columnNumber: 19
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 892,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 883,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 861,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 860,
      columnNumber: 9
    }, void 0),
    showExtConfigDialog && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `fixed inset-0 ${UI_LAYER.dialog.base.overlay} bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white border border-slate-200/80 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 border-b border-slate-100 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 921,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 920,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 919,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-black text-slate-900", children: "Chrome 插件协同配置" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 925,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500 mt-0.5", children: "配置与本系统联动的浏览器扩展 ID" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 926,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 924,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 918,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "Chrome Extension ID" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 932,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "如: cmhmkdjchmcniknchifpfplddfanfpnn",
              className: "w-full text-sm border border-slate-200 bg-white rounded-xl focus:ring-blue-500 focus:border-blue-500 h-11 pl-4 pr-4 transition-shadow",
              value: chromeExtId,
              onChange: (e) => setChromeExtId(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 933,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 931,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500 mt-3 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { className: "w-3.5 h-3.5 text-blue-500" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 942,
            columnNumber: 17
          }, void 0),
          "配置后，前台用户登录/登出时系统会自动向此 ID 的 Chrome 扩展发送广播通知。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 941,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 930,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setShowExtConfigDialog(false),
            disabled: isSavingExt,
            variant: "outline",
            className: "bg-white border-slate-200 text-slate-700 font-bold h-9 px-4 rounded-xl",
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 948,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: async () => {
              await handleSaveExtId();
              setShowExtConfigDialog(false);
            },
            disabled: isSavingExt,
            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-4 rounded-xl shadow-md flex items-center gap-1.5",
            children: isSavingExt ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "w-3.5 h-3.5 animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 966,
                columnNumber: 21
              }, void 0),
              "正在保存..."
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 965,
              columnNumber: 19
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 971,
                columnNumber: 21
              }, void 0),
              "保存配置"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 970,
              columnNumber: 19
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 956,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 947,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 917,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 916,
      columnNumber: 9
    }, void 0),
    showEngineConfigDialog && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `fixed inset-0 ${UI_LAYER.dialog.base.overlay} bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white border border-slate-200/80 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 max-h-[90vh] flex flex-col", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 border-b border-slate-100 flex items-center gap-3 shrink-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 bg-purple-50 text-purple-600 border border-purple-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Terminal, { className: "w-5 h-5" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 987,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 986,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-black text-slate-900", children: "外部部署引擎配置" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 990,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500 mt-0.5", children: "配置用于执行应用构建和上传的外部运行器" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 991,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 989,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 985,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 overflow-y-auto space-y-6", children: loadingEngine ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-center py-8 text-slate-400", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "w-5 h-5 animate-spin mr-2" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 998,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold", children: "正在加载配置..." }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 999,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 997,
        columnNumber: 17
      }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "部署引擎类型" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1005,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setEngineSettings((prev) => ({ ...prev, runner_type: "github" })),
                className: `h-10 font-bold text-xs rounded-xl border transition-all flex items-center justify-center gap-2 ${engineSettings.runner_type === "github" ? "bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-200" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                    lineNumber: 1016,
                    columnNumber: 27
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                    lineNumber: 1015,
                    columnNumber: 25
                  }, void 0),
                  "GitHub Actions"
                ]
              },
              void 0,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1007,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setEngineSettings((prev) => ({ ...prev, runner_type: "custom" })),
                className: `h-10 font-bold text-xs rounded-xl border transition-all flex items-center justify-center gap-2 ${engineSettings.runner_type === "custom" ? "bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-200" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14M12 5l7 7-7 7" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                    lineNumber: 1029,
                    columnNumber: 27
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                    lineNumber: 1028,
                    columnNumber: 25
                  }, void 0),
                  "自定义服务器"
                ]
              },
              void 0,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1020,
                columnNumber: 23
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1006,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 1004,
          columnNumber: 19
        }, void 0),
        engineSettings.runner_type === "github" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pt-2 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "GitHub Personal Access Token" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 1040,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "ghp_xxxxxxxxxxxxxx",
                value: engineSettings.github_token,
                onChange: (e) => setEngineSettings((prev) => ({ ...prev, github_token: e.target.value })),
                className: "w-full border border-slate-200 rounded-xl h-10 px-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 font-bold transition-all"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1041,
                columnNumber: 25
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1039,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "GitHub 仓库 (owner/repo)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 1050,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "your-username/your-repo",
                value: engineSettings.github_repo,
                onChange: (e) => setEngineSettings((prev) => ({ ...prev, github_repo: e.target.value })),
                className: "w-full border border-slate-200 rounded-xl h-10 px-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 font-bold transition-all"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1051,
                columnNumber: 25
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1049,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "工作流文件名" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 1060,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "deploy.yml",
                value: engineSettings.github_workflow,
                onChange: (e) => setEngineSettings((prev) => ({ ...prev, github_workflow: e.target.value })),
                className: "w-full border border-slate-200 rounded-xl h-10 px-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 font-bold transition-all"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1061,
                columnNumber: 25
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1059,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 1038,
          columnNumber: 21
        }, void 0),
        engineSettings.runner_type === "custom" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pt-2 border-t border-slate-100 pt-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "自定义服务器地址" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1076,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "https://your-deploy-server.com/api/deploy",
              value: engineSettings.custom_runner_url,
              onChange: (e) => setEngineSettings((prev) => ({ ...prev, custom_runner_url: e.target.value })),
              className: "w-full border border-slate-200 rounded-xl h-10 px-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 font-bold transition-all"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 1077,
              columnNumber: 25
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 1075,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 1074,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 pt-2 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-[11px] font-black text-slate-500 uppercase tracking-wider", children: "Webhook 密钥" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 1091,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "用于验证外部部署引擎回调的密钥",
                value: engineSettings.webhook_secret,
                onChange: (e) => setEngineSettings((prev) => ({ ...prev, webhook_secret: e.target.value })),
                className: "w-full border border-slate-200 rounded-xl h-10 px-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 font-bold transition-all"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1092,
                columnNumber: 23
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1090,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-400", children: "此密钥用于验证外部部署引擎向本系统发送的 Webhook 回调，确保回调来源安全。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1100,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
          lineNumber: 1089,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 1002,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 995,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setShowEngineConfigDialog(false),
            disabled: savingEngine,
            variant: "outline",
            className: "bg-white border-slate-200 text-slate-700 font-bold h-9 px-4 rounded-xl",
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1109,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: async () => {
              await saveEngineSettings();
              setShowEngineConfigDialog(false);
            },
            disabled: savingEngine,
            className: "bg-purple-600 hover:bg-purple-700 text-white font-bold h-9 px-4 rounded-xl shadow-md flex items-center gap-1.5",
            children: savingEngine ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "w-3.5 h-3.5 animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1127,
                columnNumber: 21
              }, void 0),
              "正在保存..."
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 1126,
              columnNumber: 19
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
                lineNumber: 1132,
                columnNumber: 21
              }, void 0),
              "保存配置"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
              lineNumber: 1131,
              columnNumber: 19
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
            lineNumber: 1117,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 1108,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 984,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
      lineNumber: 983,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: feedbackDialog.open,
        onOpenChange: (open) => setFeedbackDialog((prev) => ({ ...prev, open })),
        title: feedbackDialog.title,
        description: feedbackDialog.description,
        confirmText: "我知道了",
        hideCancel: true,
        variant: "destructive",
        onConfirm: () => setFeedbackDialog({ open: false, title: "", description: "" })
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
        lineNumber: 1142,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/cf-deployer/admin/index.tsx",
    lineNumber: 341,
    columnNumber: 5
  }, void 0);
};
export {
  CFDeployerAdmin,
  CFDeployerAdmin as default
};
