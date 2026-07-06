globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, U as UI_LAYER, L as Loader2 } from "./useAdminPermissions_CAR-Xq1O.mjs";
import { r as reactExports } from "./worker-entry_DQAyehZh.mjs";
import { C as Circle, a as Clock, L as Lock, M as MonitorSmartphone, S as ShieldCheck } from "./shield-check_CiONMVXR.mjs";
import { B as Bot, C as ChevronDown, g as CheckCircle2, A as AlertTriangle, h as ChatWorkspace } from "./chat-workspace_D3zVFcLO.mjs";
const STATE_META = {
  init: { color: "text-slate-400 dark:text-slate-500", label: "待建站指令" },
  plan_pending: { color: "text-amber-500 animate-pulse", label: "模型阻断审计中" },
  plan_ready: { color: "text-emerald-500", label: "站点规划已就绪" },
  building: { color: "text-blue-500 animate-pulse", label: "正在生成前端预览" },
  build_complete: { color: "text-violet-500", label: "预览与交接结果已就绪" },
  locked: { color: "text-rose-500 animate-ping", label: "资产完全锁定" }
};
function TopBar({ ctx, dispatch }) {
  const [agents, setAgents] = reactExports.useState([]);
  const [drafts, setDrafts] = reactExports.useState([]);
  const [showDrafts, setShowDrafts] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetch("/api/v1/agents").then((r) => r.json()).then((d) => {
      const list = d.agents || d.data || [];
      setAgents(list);
      if (list.length > 0 && !ctx.selectedAgentId) {
        dispatch({ type: "SET_SELECTED_AGENT", payload: list[0].id });
      }
    }).catch(() => setAgents([]));
  }, []);
  const fetchDrafts = () => {
    fetch("/api/v1/plugins/proxy/lowcode-deployer/drafts/list").then((r) => r.json()).then((d) => setDrafts(d.drafts || [])).catch(() => setDrafts([]));
  };
  reactExports.useEffect(() => {
    fetchDrafts();
  }, [ctx.state, ctx.htmlStore]);
  const handleRestore = async (draftId) => {
    setShowDrafts(false);
    try {
      const resp = await fetch(`/api/v1/plugins/proxy/lowcode-deployer/drafts/load/${draftId}`);
      const data = await resp.json();
      if (data.code === "OK") {
        const { draft } = data;
        dispatch({ type: "SET_SITE_PLAN", payload: draft.sitePlan });
        dispatch({ type: "SET_HTML_STORE", payload: draft.htmlStore });
        dispatch({ type: "SET_PAGE_STORE", payload: draft.pageStore || {} });
        const currentPageId = draft.sitePlan?.pages?.[0]?.pageId || "home";
        dispatch({ type: "SET_SELECTED_PAGE", payload: currentPageId });
        const pagePreviewUrl = draft.pageStore?.[currentPageId]?.previewUrl;
        if (pagePreviewUrl) {
          dispatch({ type: "SET_PREVIEW_URL", payload: pagePreviewUrl });
        } else {
          const firstSection = draft.sitePlan?.pages?.[0]?.sections?.[0]?.sectionId;
          if (firstSection) {
            const key = `${currentPageId}-${firstSection}`;
            const pUrl = draft.htmlStore[key]?.previewUrl;
            if (pUrl) dispatch({ type: "SET_PREVIEW_URL", payload: pUrl });
          }
        }
        dispatch({ type: "SET_STATE", payload: "build_complete" });
      }
    } catch {
      alert("草稿倒流载入失败，请确认通信。");
    }
  };
  const { color, label } = STATE_META[ctx.state] ?? { color: "text-slate-400", label: ctx.state };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("header", { className: "flex-none flex items-center gap-4 px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm z-30 select-none", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-500/10", children: "🚀" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-extrabold text-slate-800 dark:text-slate-100 tracking-wide uppercase", children: "Lowcode Deployer" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[8px] text-slate-400 font-light", children: "AI 前端生成插件" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-px h-5 bg-slate-200 dark:bg-slate-700 shrink-0" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 shrink-0 bg-slate-50 dark:bg-slate-800/40 px-2.5 py-1 rounded-full border border-slate-200/40", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Circle, { size: 8, className: `fill-current ${color}` }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-bold text-slate-500 dark:text-slate-400", children: label }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 shrink-0", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bot, { size: 13, className: "text-slate-400" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "select",
        {
          className: "text-[12px] font-semibold border border-slate-200 dark:border-slate-850 rounded-lg px-2 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500/40",
          value: ctx.selectedAgentId,
          onChange: (e) => dispatch({ type: "SET_SELECTED_AGENT", payload: e.target.value }),
          children: [
            agents.length === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "", children: "AI加载中…" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 122,
              columnNumber: 35
            }, this),
            agents.map((a) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: a.id, children: a.name }, a.id, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 124,
              columnNumber: 13
            }, this))
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 117,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative shrink-0", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          className: "flex items-center gap-1 text-[12px] font-bold px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
          onClick: () => {
            fetchDrafts();
            setShowDrafts((v) => !v);
          },
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Clock, { size: 11 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 138,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "云端草稿" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 9 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 140,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 131,
          columnNumber: 9
        },
        this
      ),
      showDrafts && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `absolute right-0 top-8.5 ${UI_LAYER.page.flyout} w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300`, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "px-3 py-2 text-[12px] font-bold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest bg-slate-50/50 dark:bg-slate-950/20", children: "云端视觉资产草稿" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        drafts.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "px-3 py-6 text-xs text-slate-400 text-center italic", children: "暂无云端备份" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "max-h-60 overflow-y-auto divide-y divide-slate-150 dark:divide-slate-800/80", children: drafts.map((d) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-center justify-between px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0 flex-1 pr-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold text-slate-700 dark:text-slate-300 truncate", children: d.memo || "低代码视觉资产" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 156,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[8px] text-slate-400", children: new Date(d.created_at).toLocaleString() }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 157,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
            lineNumber: 155,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              className: "text-[9px] font-bold px-2 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 transition-colors shrink-0",
              onClick: () => handleRestore(d.id),
              children: "恢复"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
              lineNumber: 159,
              columnNumber: 21
            },
            this
          )
        ] }, d.id, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 154,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        className: "flex items-center gap-1 shrink-0 text-[12px] font-bold px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-500/10 transition-colors disabled:opacity-40",
        disabled: ctx.state !== "build_complete",
        onClick: () => dispatch({ type: "SET_STATE", payload: "locked" }),
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { size: 10 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
            lineNumber: 179,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "锁定架构" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
            lineNumber: 180,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
        lineNumber: 174,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/TopBar.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
function ChatPanel({ ctx, dispatch, onSchemaIncomplete }) {
  const [activeEmpId, setActiveEmpId] = reactExports.useState(ctx.selectedAgentId || "");
  const [astroPlan, setAstroPlan] = reactExports.useState(null);
  const [astroFilesExport, setAstroFilesExport] = reactExports.useState(null);
  const [deployResult, setDeployResult] = reactExports.useState(null);
  const [deployHistory, setDeployHistory] = reactExports.useState([]);
  const [selectedDeployment, setSelectedDeployment] = reactExports.useState(null);
  const [deployConfig, setDeployConfig] = reactExports.useState({
    projectName: "",
    branch: "main",
    customDomain: ""
  });
  const [notice, setNotice] = reactExports.useState(null);
  const [isPreparing, setIsPreparing] = reactExports.useState(false);
  const [isSwitchingMode, setIsSwitchingMode] = reactExports.useState(false);
  const [isExportingAstroFiles, setIsExportingAstroFiles] = reactExports.useState(false);
  const [isDeploying, setIsDeploying] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (ctx.selectedAgentId) {
      setActiveEmpId(ctx.selectedAgentId);
    } else {
      fetch("/api/v1/agents").then((r) => r.json()).then((d) => {
        const list = d.agents || d.data || [];
        if (list.length > 0) {
          setActiveEmpId(list[0].id);
        }
      }).catch(() => {
      });
    }
  }, [ctx.selectedAgentId]);
  reactExports.useEffect(() => {
    setAstroPlan(null);
    setAstroFilesExport(null);
    setDeployResult(null);
    setDeployHistory([]);
    setSelectedDeployment(null);
  }, [activeEmpId]);
  reactExports.useEffect(() => {
    if (!ctx.sitePlan?.projectId) {
      setDeployHistory([]);
      return;
    }
    fetch(`/api/v1/plugins/proxy/lowcode-deployer/deployments/${ctx.sitePlan.projectId}`).then((r) => r.json().catch(() => ({}))).then((json) => {
      if (json?.code === "OK" && Array.isArray(json?.deployments)) {
        setDeployHistory(json.deployments);
        const latest = json.deployments[0] || null;
        if (latest) {
          setDeployConfig((prev) => ({
            projectName: prev.projectName || latest.projectName || "",
            branch: latest.branch || prev.branch || "main",
            customDomain: latest.customDomain || prev.customDomain || ""
          }));
        }
      }
    }).catch(() => {
    });
  }, [ctx.sitePlan?.projectId]);
  reactExports.useEffect(() => {
    if (!ctx.sitePlan?.siteMeta?.siteName) return;
    setDeployConfig((prev) => ({
      ...prev,
      projectName: prev.projectName || String(ctx.sitePlan.siteMeta.siteName || "")
    }));
  }, [ctx.sitePlan?.siteMeta?.siteName]);
  const buildStatusPrompt = reactExports.useCallback((goal, sitePlan, previewUrl, htmlStore, pageStore, astroPlan2) => {
    const pageLines = Array.isArray(sitePlan?.pages) ? sitePlan.pages.map((page) => {
      const sectionTitles = Array.isArray(page?.sections) ? page.sections.map((sec) => sec.title || sec.sectionId).slice(0, 4).join("、") : "";
      return `- ${page.pageName || page.pageId}${sectionTitles ? `：${sectionTitles}` : ""}`;
    }).join("\n") : "- 暂无页面结构";
    const previewCount = Object.keys(htmlStore || {}).length;
    const pagePreviewCount = Object.keys(pageStore || {}).length;
    const dataModeLabel = sitePlan?.dataBinding?.mode === "real" ? "真实字段模式" : "Mock 数据模式";
    const handoffSummary = astroPlan2?.handoffSummary || null;
    return [
      goal,
      "",
      "系统上下文：",
      `- 已完成站点规划并生成首批静态 HTML 预览`,
      `- 预览地址：${previewUrl || "暂未生成"}`,
      `- 页面数量：${Array.isArray(sitePlan?.pages) ? sitePlan.pages.length : 0}`,
      `- 已生成页面预览数：${pagePreviewCount}`,
      `- 生成区块数：${previewCount}`,
      `- 当前数据模式：${dataModeLabel}`,
      astroPlan2 ? `- 已生成 Astro 渲染计划，模板文件数：${Array.isArray(astroPlan2?.templateFiles) ? astroPlan2.templateFiles.length : 0}` : "- Astro 渲染计划尚未导出",
      handoffSummary ? `- Astro 交接摘要：数据模式=${handoffSummary.dataMode || "mock"}，映射模型数=${Number(handoffSummary.mappedModelCount || 0)}，样本记录数=${Number(handoffSummary.sampleRecordCount || 0)}` : "- Astro 交接摘要尚未生成",
      "页面结构：",
      pageLines,
      "",
      "请以“低代码建站数字员工”的身份，用简洁中文回复用户：",
      "1. 已完成了什么",
      "2. 当前预览站点包含哪些页面/模块",
      "3. 当前是否已经具备 Astro 工程化交接条件",
      "4. 下一步用户可以继续如何微调风格、模块和数据对接"
    ].join("\n");
  }, []);
  const mockEmployee = {
    id: activeEmpId || "lowcode-deployer",
    name: "低代码建站数字员工",
    avatar: "🚀",
    description: "为您自愈审计描述总线数据模型，秒级编译并生成 Cloudflare R2 视觉独立站资产",
    systemPrompt: "",
    loadedModels: [],
    masterModelId: "default",
    systemRoleId: "default",
    subModels: [],
    skills: [],
    isActive: true
  };
  const rebuildSiteArtifacts = reactExports.useCallback(async (sitePlan, memo) => {
    const buildResp = await fetch("/api/v1/plugins/proxy/lowcode-deployer/project/build-sections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: sitePlan.projectId,
        pagePlan: { pages: sitePlan.pages || [] },
        sitePlan
      })
    });
    const buildData = await buildResp.json().catch(() => ({}));
    if (buildData.code !== "OK") {
      throw new Error(buildData.error || "静态 HTML 生成失败");
    }
    dispatch({ type: "SET_HTML_STORE", payload: buildData.htmlStore || {} });
    dispatch({ type: "SET_PAGE_STORE", payload: buildData.pageStore || {} });
    setAstroFilesExport(null);
    const firstPage = sitePlan?.pages?.[0];
    const firstPageId = firstPage?.pageId || "";
    const firstPreviewUrl = firstPageId ? buildData.pageStore?.[firstPageId]?.previewUrl || "" : "";
    if (firstPageId) {
      dispatch({ type: "SET_SELECTED_PAGE", payload: firstPageId });
    }
    if (firstPreviewUrl) {
      dispatch({ type: "SET_PREVIEW_URL", payload: firstPreviewUrl });
    }
    dispatch({ type: "SET_STATE", payload: "build_complete" });
    const astroResp = await fetch("/api/v1/plugins/proxy/lowcode-deployer/project/export-astro-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: sitePlan.projectId,
        sitePlan,
        htmlStore: buildData.htmlStore || {}
      })
    });
    const astroData = await astroResp.json().catch(() => ({}));
    if (astroData.code !== "OK") {
      throw new Error(astroData.error || "Astro 渲染计划导出失败");
    }
    setAstroPlan(astroData.astroPlan || null);
    await fetch("/api/v1/plugins/proxy/lowcode-deployer/drafts/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sitePlan,
        htmlStore: buildData.htmlStore || {},
        pageStore: buildData.pageStore || {},
        metadata: {
          siteSlug: sitePlan?.projectId || "lowcode-site",
          memo,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      })
    }).catch(() => {
    });
    return {
      buildData,
      astroData,
      firstPreviewUrl
    };
  }, [dispatch]);
  const handleBeforeSend = async (text, attachments) => {
    const goal = text.trim();
    if (!goal) return false;
    if (!activeEmpId) return false;
    const shouldRefine = !!ctx.sitePlan && !/(重新生成|从头|重做|新建一个|重新开始)/.test(goal);
    setIsPreparing(true);
    setNotice({
      tone: "info",
      title: shouldRefine ? "正在微调站点方案" : "正在生成站点方案",
      description: shouldRefine ? "系统会基于当前 DSL 调整页面结构与风格，然后重建整页预览。" : "系统会先规划页面结构，再生成首批整页预览与 Astro 交接结果。"
    });
    try {
      dispatch({ type: "SET_STATE", payload: "building" });
      let sitePlan = null;
      let refineSummary = "";
      if (shouldRefine) {
        const refineResp = await fetch("/api/v1/plugins/proxy/lowcode-deployer/project/refine", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sitePlan: ctx.sitePlan,
            instruction: goal
          })
        });
        const refineData = await refineResp.json().catch(() => ({}));
        if (!refineResp.ok || refineData.code !== "OK" || !refineData.sitePlan) {
          throw new Error(refineData.error || refineData.message || "站点微调失败");
        }
        sitePlan = refineData.sitePlan;
        refineSummary = String(refineData.summary || "").trim();
      } else {
        const initResp = await fetch("/api/v1/plugins/proxy/lowcode-deployer/project/init", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ adminId: "admin", siteCommand: goal || "低代码快速建站" })
        });
        const initData = await initResp.json();
        if (initData.code === "SCHEMA_INCOMPLETE") {
          dispatch({ type: "SET_STATE", payload: "plan_pending" });
          if (onSchemaIncomplete) {
            onSchemaIncomplete(initData.missingModels);
          }
          setNotice({
            tone: "warning",
            title: "模型审计未通过",
            description: "未检测到产品/分类相关模型，任务已阻塞，需先通过模型管理补齐结构，或使用模块模板注入器快速注入后再继续建站。"
          });
          return {
            requestText: [
              goal,
              "",
              "系统上下文：",
              `- Schema 审计未通过`,
              `- 缺失模型：${(initData.missingModels || []).join("、") || "产品/分类模型"}`,
              "请明确告知用户先前往 /admin/models 或 /admin/sites 补齐模型，再回来继续生成站点。"
            ].join("\n"),
            requestAttachments: attachments
          };
        }
        if (initData.code !== "OK" || !initData.sitePlan) {
          throw new Error(initData.error || initData.message || "站点规划失败");
        }
        sitePlan = initData.sitePlan;
      }
      if (sitePlan) {
        dispatch({ type: "SET_SITE_PLAN", payload: sitePlan });
        dispatch({ type: "SET_STATE", payload: "plan_ready" });
        const { buildData, astroData, firstPreviewUrl } = await rebuildSiteArtifacts(
          sitePlan,
          `${goal.slice(0, 24) || "站点方案"} - 自动保存`
        );
        setNotice({
          tone: "success",
          title: shouldRefine ? "站点微调已完成" : "首轮站点预览已生成",
          description: firstPreviewUrl ? shouldRefine ? `${refineSummary || "已根据你的要求调整 DSL 并重建整页预览。"}` : "已完成站点规划、整页 HTML 预览和 Astro 交接计划导出，当前可继续微调页面结构、风格和后续数据对接。" : shouldRefine ? "已完成微调并重建静态 HTML 预览。" : "已完成规划并生成静态 HTML 预览。"
        });
        return {
          requestText: buildStatusPrompt(
            goal,
            sitePlan,
            firstPreviewUrl,
            buildData.htmlStore || {},
            buildData.pageStore || {},
            astroData.astroPlan
          ),
          requestAttachments: attachments
        };
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : "协作任务执行失败";
      dispatch({ type: "SET_STATE", payload: ctx.sitePlan ? "plan_ready" : "init" });
      setNotice({
        tone: "warning",
        title: "站点生成失败",
        description: message
      });
      return {
        requestText: [
          goal,
          "",
          "系统上下文：",
          `- 当前建站流程执行失败：${message}`,
          "- 请向用户说明失败原因，并建议重新调整描述或稍后重试。"
        ].join("\n"),
        requestAttachments: attachments
      };
    } finally {
      setIsPreparing(false);
    }
  };
  const handleDataModeSwitch = reactExports.useCallback(async (nextMode) => {
    if (!ctx.sitePlan || ctx.sitePlan?.dataBinding?.mode === nextMode) return;
    const modeLabel = nextMode === "real" ? "真实字段模式" : "Mock 数据模式";
    let nextSitePlan = {
      ...ctx.sitePlan,
      dataBinding: {
        ...ctx.sitePlan?.dataBinding || {},
        mode: nextMode,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      changeLog: [
        {
          version: Number(ctx.sitePlan?.version || 1),
          instruction: `切换到${modeLabel}`,
          summary: `已切换预览数据模式为${modeLabel}`,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          patches: [
            {
              op: "update",
              targetType: "section",
              targetId: "data-binding",
              summary: `切换到${modeLabel}`
            }
          ]
        },
        ...(Array.isArray(ctx.sitePlan?.changeLog) ? ctx.sitePlan.changeLog : []).slice(0, 11)
      ]
    };
    setIsSwitchingMode(true);
    setNotice({
      tone: "info",
      title: "正在切换数据模式",
      description: `系统会按${modeLabel}重建整页预览和交接结果。`
    });
    try {
      if (nextMode === "real") {
        const sampleResp = await fetch("/api/v1/plugins/proxy/lowcode-deployer/project/real-samples", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sitePlan: nextSitePlan })
        });
        const sampleData = await sampleResp.json().catch(() => ({}));
        if (!sampleResp.ok || sampleData.code !== "OK" || !sampleData.sitePlan) {
          throw new Error(sampleData.error || "真实记录采样失败");
        }
        nextSitePlan = sampleData.sitePlan;
      }
      dispatch({ type: "SET_SITE_PLAN", payload: nextSitePlan });
      dispatch({ type: "SET_STATE", payload: "building" });
      await rebuildSiteArtifacts(nextSitePlan, `${modeLabel} - 自动保存`);
      const sampleCount = Array.isArray(nextSitePlan?.dataBinding?.sampleRecords) ? nextSitePlan.dataBinding.sampleRecords.reduce((sum, group) => sum + Number(group?.items?.length || 0), 0) : 0;
      setNotice({
        tone: "success",
        title: "数据模式已切换",
        description: nextMode === "real" ? `当前预览已更新为${modeLabel}，本次注入 ${sampleCount} 条真实样本记录。` : `当前预览已更新为${modeLabel}。`
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "数据模式切换失败";
      dispatch({ type: "SET_SITE_PLAN", payload: ctx.sitePlan });
      dispatch({ type: "SET_STATE", payload: "build_complete" });
      setNotice({
        tone: "warning",
        title: "数据模式切换失败",
        description: message
      });
    } finally {
      setIsSwitchingMode(false);
    }
  }, [ctx.sitePlan, dispatch, rebuildSiteArtifacts]);
  const handleDeploy = reactExports.useCallback(async (overrideConfig) => {
    if (!ctx.sitePlan?.projectId || !astroPlan) return;
    const effectiveConfig = {
      projectName: overrideConfig?.projectName ?? deployConfig.projectName,
      branch: overrideConfig?.branch ?? deployConfig.branch,
      customDomain: overrideConfig?.customDomain ?? deployConfig.customDomain
    };
    setIsDeploying(true);
    setNotice({
      tone: "info",
      title: "正在生成发布包",
      description: "系统会整理 Pages 发布目录，并在检测到 Cloudflare 凭证时尝试直传部署。"
    });
    try {
      const resp = await fetch("/api/v1/plugins/proxy/lowcode-deployer/project/lock-and-deploy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: ctx.sitePlan.projectId,
          sitePlan: ctx.sitePlan,
          astroPlan,
          deployConfig: {
            projectName: effectiveConfig.projectName || astroPlan?.handoffSummary?.siteName || ctx.sitePlan?.siteMeta?.siteName || ctx.sitePlan.projectId,
            branch: effectiveConfig.branch || "main",
            customDomain: effectiveConfig.customDomain || ""
          }
        })
      });
      const json = await resp.json().catch(() => ({}));
      if (!resp.ok || !["DEPLOYED", "PACKAGE_READY"].includes(json?.code)) {
        throw new Error(json?.error || json?.message || "发布失败");
      }
      setDeployResult(json);
      const historyResp = await fetch(`/api/v1/plugins/proxy/lowcode-deployer/deployments/${ctx.sitePlan.projectId}`);
      const historyJson = await historyResp.json().catch(() => ({}));
      if (historyJson?.code === "OK" && Array.isArray(historyJson?.deployments)) {
        setDeployHistory(historyJson.deployments);
      }
      setNotice({
        tone: json?.code === "DEPLOYED" ? "success" : "warning",
        title: json?.code === "DEPLOYED" ? "发布完成" : "发布包已生成",
        description: json?.code === "DEPLOYED" ? `站点已发布到 ${json?.deploymentUrl || json?.packageInfo?.pagesDomain || "Cloudflare Pages"}` : json?.message || "当前已生成发布包，但未完成直传部署。"
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "发布失败";
      setNotice({
        tone: "warning",
        title: "发布失败",
        description: message
      });
    } finally {
      setIsDeploying(false);
    }
  }, [astroPlan, ctx.sitePlan, deployConfig]);
  const handleExportAstroFiles = reactExports.useCallback(async () => {
    if (!ctx.sitePlan?.projectId || !ctx.sitePlan || !astroPlan) return;
    setIsExportingAstroFiles(true);
    setNotice({
      tone: "info",
      title: "正在导出 Astro 工程文件",
      description: "系统会把当前站点 DSL、页面路由和模板文件整理为 Astro 工程文件清单，并写入 R2。"
    });
    try {
      const resp = await fetch("/api/v1/plugins/proxy/lowcode-deployer/project/export-astro-files", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: ctx.sitePlan.projectId,
          sitePlan: ctx.sitePlan,
          astroPlan
        })
      });
      const json = await resp.json().catch(() => ({}));
      if (!resp.ok || json?.code !== "OK") {
        throw new Error(json?.error || json?.message || "Astro 工程文件导出失败");
      }
      setAstroFilesExport(json);
      setNotice({
        tone: "success",
        title: "Astro 工程文件已导出",
        description: `本次共导出 ${Number(json?.summary?.fileCount || 0)} 个文件，结果已写入 ${json?.objectKey || "R2"}。`
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Astro 工程文件导出失败";
      setNotice({
        tone: "warning",
        title: "Astro 工程文件导出失败",
        description: message
      });
    } finally {
      setIsExportingAstroFiles(false);
    }
  }, [astroPlan, ctx.sitePlan]);
  const handleViewDeploymentDetail = reactExports.useCallback(async (deploymentId) => {
    if (!deploymentId) return;
    try {
      const resp = await fetch(`/api/v1/plugins/proxy/lowcode-deployer/deployment-record/${deploymentId}`);
      const json = await resp.json().catch(() => ({}));
      if (!resp.ok || json?.code !== "OK" || !json?.deployment) {
        throw new Error(json?.error || json?.message || "部署详情读取失败");
      }
      setSelectedDeployment(json.deployment);
    } catch (e) {
      const message = e instanceof Error ? e.message : "部署详情读取失败";
      setNotice({
        tone: "warning",
        title: "无法查看部署详情",
        description: message
      });
    }
  }, []);
  const handleRetryDeployment = reactExports.useCallback(async (item) => {
    if (!item) return;
    const nextConfig = {
      projectName: String(item.projectName || ""),
      branch: String(item.branch || "main"),
      customDomain: String(item.customDomain || "")
    };
    setDeployConfig(nextConfig);
    setNotice({
      tone: "info",
      title: "已载入历史发布配置",
      description: "系统已填充该次发布的项目名、分支和目标域名，正在重新发起发布。"
    });
    await handleDeploy(nextConfig);
  }, [handleDeploy]);
  const panelTone = reactExports.useMemo(() => {
    if (!notice) return null;
    if (notice.tone === "success") return "border-emerald-200 bg-emerald-50 text-emerald-700";
    if (notice.tone === "warning") return "border-amber-200 bg-amber-50 text-amber-700";
    return "border-blue-200 bg-blue-50 text-blue-700";
  }, [notice]);
  const siteVersion = Number(ctx.sitePlan?.version || 0);
  const styleKeywords = Array.isArray(ctx.sitePlan?.siteMeta?.styleKeywords) ? ctx.sitePlan.siteMeta.styleKeywords : [];
  const changeLog = Array.isArray(ctx.sitePlan?.changeLog) ? ctx.sitePlan.changeLog : [];
  const schemaAnalysis = ctx.sitePlan?.schemaAnalysis || null;
  const dataBinding = ctx.sitePlan?.dataBinding || null;
  const dataMode = dataBinding?.mode === "real" ? "real" : "mock";
  const fieldMappings = Array.isArray(dataBinding?.fieldMappings) ? dataBinding.fieldMappings : [];
  const sampleRecords = Array.isArray(dataBinding?.sampleRecords) ? dataBinding.sampleRecords : [];
  const astroHandoffSummary = astroPlan?.handoffSummary || null;
  const astroAdapters = astroPlan?.adapters || null;
  const astroHandoff = astroPlan?.handoff || null;
  const astroExportSummary = astroFilesExport?.summary || null;
  const astroExportFiles = Array.isArray(astroFilesExport?.files) ? astroFilesExport.files : [];
  const deployedPackageInfo = deployResult?.packageInfo || null;
  const matchedProductModel = schemaAnalysis?.matched?.product?.slug || "";
  const matchedCategoryModel = schemaAnalysis?.matched?.category?.slug || "";
  const plannedPageCount = Array.isArray(ctx.sitePlan?.pages) ? ctx.sitePlan.pages.length : 0;
  const generatedPageCount = Object.keys(ctx.pageStore || {}).length;
  const generatedSectionCount = Object.keys(ctx.htmlStore || {}).length;
  const astroPageCount = Array.isArray(astroPlan?.pages) ? astroPlan.pages.length : 0;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-full min-h-0 bg-white dark:bg-slate-900", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0 flex flex-col", children: [
    notice ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `mx-4 mt-4 rounded-2xl border px-4 py-3 ${panelTone}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-0.5", children: notice.tone === "success" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CheckCircle2, { size: 16 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 586,
        columnNumber: 19
      }, this) : notice.tone === "warning" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { size: 16 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 588,
        columnNumber: 19
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 16, className: isPreparing || isSwitchingMode ? "animate-spin" : "" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 590,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 584,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold", children: notice.title }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 594,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-xs leading-6 opacity-90", children: notice.description }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 595,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 593,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
      lineNumber: 583,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
      lineNumber: 582,
      columnNumber: 11
    }, this) : null,
    plannedPageCount > 0 || generatedPageCount > 0 || astroPageCount > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-4 mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-3 sm:grid-cols-3 xl:grid-cols-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-white px-4 py-3 border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "DSL 版本" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 604,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-semibold text-slate-800", children: siteVersion || 1 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 605,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 603,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-white px-4 py-3 border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "规划页面数" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 608,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-semibold text-slate-800", children: plannedPageCount }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 609,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 607,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-white px-4 py-3 border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "整页预览数" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 612,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-semibold text-slate-800", children: generatedPageCount }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 613,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 611,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-white px-4 py-3 border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "区块产物数" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 616,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-semibold text-slate-800", children: generatedSectionCount }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 617,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 615,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-white px-4 py-3 border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "Astro 交接页数" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 620,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-lg font-semibold text-slate-800", children: astroPageCount }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 621,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 619,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 602,
        columnNumber: 13
      }, this),
      styleKeywords.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "当前风格标签" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 626,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 flex flex-wrap gap-2", children: styleKeywords.map((keyword) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "span",
          {
            className: "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600",
            children: keyword
          },
          keyword,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 629,
            columnNumber: 21
          },
          this
        )) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 627,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 625,
        columnNumber: 15
      }, this) : null,
      schemaAnalysis ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "真实字段分析" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 641,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 grid gap-3 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "Schema 来源" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 644,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: schemaAnalysis.source === "schema_all" ? "/schema/all" : "models fallback" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 645,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 643,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "匹配产品模型" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 650,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: matchedProductModel || "未识别" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 651,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 649,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "匹配分类模型" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 654,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: matchedCategoryModel || "未识别" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 655,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 653,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 642,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 640,
        columnNumber: 15
      }, this) : null,
      dataBinding ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "数据模式" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 664,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: dataMode === "real" ? "真实字段模式" : "Mock 数据模式" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 665,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 663,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                disabled: isSwitchingMode || dataMode === "mock",
                onClick: () => void handleDataModeSwitch("mock"),
                className: `rounded-full border px-3 py-1.5 text-xs transition ${dataMode === "mock" ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"} disabled:cursor-not-allowed disabled:opacity-60`,
                children: "Mock 预览"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 670,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                disabled: isSwitchingMode || dataMode === "real",
                onClick: () => void handleDataModeSwitch("real"),
                className: `rounded-full border px-3 py-1.5 text-xs transition ${dataMode === "real" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"} disabled:cursor-not-allowed disabled:opacity-60`,
                children: "真实字段"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 682,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 669,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 662,
          columnNumber: 17
        }, this),
        fieldMappings.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: fieldMappings.slice(0, 2).map((mapping) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold text-slate-800", children: mapping.sourceModel }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 701,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: mapping.status === "mapped" ? "已映射" : "回退映射" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 702,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 700,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-[11px] text-slate-500", children: mapping.usage }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 704,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 flex flex-wrap gap-2", children: Object.entries(mapping.fields || {}).slice(0, 5).map(([role, field]) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "span",
            {
              className: "rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-600",
              children: [
                role,
                ":",
                String(field)
              ]
            },
            `${mapping.sourceModel}-${role}`,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 707,
              columnNumber: 29
            },
            this
          )) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 705,
            columnNumber: 25
          }, this)
        ] }, mapping.sourceModel, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 699,
          columnNumber: 23
        }, this)) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 697,
          columnNumber: 19
        }, this) : null,
        dataMode === "real" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "真实记录样本" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 721,
            columnNumber: 21
          }, this),
          sampleRecords.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 grid gap-3", children: sampleRecords.map((group) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold text-slate-800", children: group.sourceModel }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 727,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: [
                "共 ",
                Number(group.total || 0),
                " 条，展示 ",
                Array.isArray(group.items) ? group.items.length : 0,
                " 条"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 728,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 726,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 space-y-2", children: (Array.isArray(group.items) ? group.items : []).slice(0, 2).map((item, index) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-[11px] text-slate-600", children: Object.entries(item || {}).slice(0, 5).map(([key, value]) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "truncate", children: [
              key,
              ": ",
              String(value || "--")
            ] }, `${group.sourceModel}-${index}-${key}`, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 734,
              columnNumber: 37
            }, this)) }, `${group.sourceModel}-${index}`, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 732,
              columnNumber: 33
            }, this)) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 730,
              columnNumber: 29
            }, this)
          ] }, group.sourceModel, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 725,
            columnNumber: 27
          }, this)) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 723,
            columnNumber: 23
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 rounded-xl border border-dashed border-slate-200 bg-white px-4 py-3 text-xs text-slate-500", children: "当前真实模型已识别，但还没有采样到实体记录。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 745,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 720,
          columnNumber: 19
        }, this) : null
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 661,
        columnNumber: 15
      }, this) : null,
      astroPlan ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "Astro 交接摘要" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 756,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                disabled: isExportingAstroFiles,
                onClick: () => void handleExportAstroFiles(),
                className: "rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-60",
                children: isExportingAstroFiles ? "正在导出..." : "导出 Astro 工程文件"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 758,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                disabled: isDeploying,
                onClick: () => void handleDeploy(),
                className: "rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-60",
                children: isDeploying ? "正在发布..." : "发布到 Pages"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 766,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 757,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 755,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 grid gap-3 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "Pages 项目名" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 778,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                value: deployConfig.projectName,
                onChange: (e) => setDeployConfig((prev) => ({ ...prev, projectName: e.target.value })),
                className: "mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-300",
                placeholder: "例如 industrial-brand-site"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 779,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 777,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "发布分支" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 788,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                value: deployConfig.branch,
                onChange: (e) => setDeployConfig((prev) => ({ ...prev, branch: e.target.value })),
                className: "mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-300",
                placeholder: "main"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 789,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 787,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "目标域名" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 798,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                value: deployConfig.customDomain,
                onChange: (e) => setDeployConfig((prev) => ({ ...prev, customDomain: e.target.value })),
                className: "mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-300",
                placeholder: "可选，例如 www.example.com"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 799,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 797,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 776,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 grid gap-3 md:grid-cols-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "交接数据模式" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 810,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: astroHandoffSummary?.dataMode === "real" ? "真实字段模式" : "Mock 数据模式" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 811,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 809,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "映射模型数" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 816,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: Number(astroHandoffSummary?.mappedModelCount || 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 817,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 815,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "样本模型数" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 820,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: Number(astroHandoffSummary?.sampleModelCount || 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 821,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 819,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: "样本记录数" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 824,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-sm font-semibold text-slate-800", children: Number(astroHandoffSummary?.sampleRecordCount || 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 825,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 823,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 808,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "模板落点" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 830,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs text-slate-600", children: [
              "模板基座：",
              astroPlan?.templateRoot || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 831,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-xs text-slate-600", children: [
              "推荐布局：",
              astroAdapters?.layout || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 832,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-xs text-slate-600", children: [
              "推荐数据模块：",
              astroAdapters?.recommendedDataModule || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 833,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-xs text-slate-600", children: [
              "兜底组件：",
              astroAdapters?.fallbackSectionComponent || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 834,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 829,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "交接建议" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 837,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs leading-6 text-slate-600", children: astroHandoff?.delivery?.nextAction || "当前已具备 Astro 工程化交接条件。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 838,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs text-slate-500", children: [
              "入口页：",
              astroPlan?.entryPage || "/",
              "，模板文件数：",
              Array.isArray(astroPlan?.templateFiles) ? astroPlan.templateFiles.length : 0
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 841,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 836,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 828,
          columnNumber: 17
        }, this),
        astroFilesExport ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "Astro 文件导出" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 849,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: [
              "导出时间：",
              astroFilesExport?.generatedAt ? new Date(astroFilesExport.generatedAt).toLocaleString() : "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 850,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 848,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 grid gap-2 md:grid-cols-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "导出 ID：",
              astroFilesExport?.exportId || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 855,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "文件数：",
              Number(astroExportSummary?.fileCount || astroExportFiles.length || 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 858,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "页面数：",
              Number(astroExportSummary?.pageCount || 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 861,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 854,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 break-all text-[11px] text-slate-400", children: [
            "R2 对象：",
            astroFilesExport?.objectKey || "--"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 865,
            columnNumber: 21
          }, this),
          astroExportFiles.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 space-y-2", children: [
            astroExportFiles.slice(0, 8).map((file) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-3 text-xs text-slate-600", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-mono text-[11px] text-slate-700", children: file.path || "--" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                  lineNumber: 873,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-500", children: file.kind || "generated" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                  lineNumber: 874,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 872,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-[11px] text-slate-500", children: typeof file.content === "string" ? `内容长度 ${file.content.length} 字符` : "已生成文件内容" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 878,
                columnNumber: 29
              }, this)
            ] }, file.path, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 871,
              columnNumber: 27
            }, this)),
            astroExportFiles.length > 8 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: [
              "另有 ",
              astroExportFiles.length - 8,
              " 个文件未展开显示。"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 886,
              columnNumber: 27
            }, this) : null
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 869,
            columnNumber: 23
          }, this) : null
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 847,
          columnNumber: 19
        }, this) : null,
        deployResult ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "发布结果" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 896,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-sm font-semibold text-slate-800", children: deployResult?.code === "DEPLOYED" ? "Cloudflare Pages 已发布" : "发布包已生成" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 897,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs leading-6 text-slate-600", children: deployResult?.message || "发布结果已返回。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 900,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 grid gap-2 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "项目名：",
              deployedPackageInfo?.projectName || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 904,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "分支：",
              deployedPackageInfo?.branch || "main"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 907,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "文件数：",
              Number(deployedPackageInfo?.fileCount || 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 910,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "发布域名：",
              deployResult?.deploymentUrl || deployedPackageInfo?.pagesDomain || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 913,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 903,
            columnNumber: 21
          }, this),
          deployedPackageInfo?.bundleObjectKey ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-[11px] break-all text-slate-400", children: [
            "发布包：",
            deployedPackageInfo.bundleObjectKey
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 918,
            columnNumber: 23
          }, this) : null
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 895,
          columnNumber: 19
        }, this) : null,
        deployHistory.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "部署历史" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 926,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 space-y-2", children: deployHistory.slice(0, 5).map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-3 text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-semibold text-slate-700", children: [
                item.projectName || "--",
                " · ",
                item.branch || "main"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 931,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: item.createdAt ? new Date(item.createdAt).toLocaleString() : "--" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 934,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 930,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px]", children: [
                "状态：",
                item.status || "--"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 939,
                columnNumber: 29
              }, this),
              item.customDomain ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px]", children: [
                "目标域名：",
                item.customDomain
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 943,
                columnNumber: 31
              }, this) : null,
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => void handleViewDeploymentDetail(item.id),
                  className: "rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-600 transition hover:border-slate-300",
                  children: "查看详情"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                  lineNumber: 947,
                  columnNumber: 29
                },
                this
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  type: "button",
                  disabled: isDeploying,
                  onClick: () => void handleRetryDeployment(item),
                  className: "rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-600 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-60",
                  children: "按此配置重试"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                  lineNumber: 954,
                  columnNumber: 29
                },
                this
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 938,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-[11px] leading-6 text-slate-500", children: item.message || "无部署说明" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 963,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 break-all text-[11px] text-slate-400", children: item.deploymentUrl || item.bundleObjectKey || "--" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 966,
              columnNumber: 27
            }, this)
          ] }, item.id, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 929,
            columnNumber: 25
          }, this)) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 927,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 925,
          columnNumber: 19
        }, this) : null,
        selectedDeployment ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "部署详情" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 977,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setSelectedDeployment(null),
                className: "text-[11px] text-slate-400 transition hover:text-slate-600",
                children: "关闭"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
                lineNumber: 978,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 976,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 grid gap-2 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "项目名：",
              selectedDeployment.projectName || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 987,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "状态：",
              selectedDeployment.status || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 988,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "分支：",
              selectedDeployment.branch || "main"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 989,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600", children: [
              "目标域名：",
              selectedDeployment.customDomain || "--"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 990,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 986,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 text-xs leading-6 text-slate-600", children: selectedDeployment.message || "无部署说明" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 992,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 break-all text-[11px] text-slate-400", children: selectedDeployment.deploymentUrl || selectedDeployment.bundleObjectKey || "--" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 995,
            columnNumber: 21
          }, this),
          selectedDeployment.response ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "mt-3 max-h-64 overflow-auto rounded-lg bg-slate-950 p-3 text-[11px] leading-5 text-slate-200", children: JSON.stringify(selectedDeployment.response, null, 2) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 999,
            columnNumber: 23
          }, this) : null
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 975,
          columnNumber: 19
        }, this) : null
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 754,
        columnNumber: 15
      }, this) : null,
      changeLog.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "最近变更" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 1007,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 space-y-2", children: changeLog.slice(0, 3).map((record) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-white px-4 py-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-semibold text-slate-700", children: [
              "v",
              record.version
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 1012,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-400", children: record.createdAt ? new Date(record.createdAt).toLocaleString() : "--" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
              lineNumber: 1013,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 1011,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs text-slate-600", children: record.summary || "无变更摘要" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 1015,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-[11px] text-slate-400 line-clamp-2", children: record.instruction || "系统自动生成" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 1016,
            columnNumber: 23
          }, this)
        ] }, `${record.version}-${record.createdAt || ""}`, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 1010,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 1008,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 1006,
        columnNumber: 15
      }, this) : null,
      Object.keys(ctx.pageStore || {}).length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500", children: "页面预览切换" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 1024,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 flex flex-wrap gap-2", children: Object.entries(ctx.pageStore).map(([pageId, info]) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => {
              dispatch({ type: "SET_SELECTED_PAGE", payload: pageId });
              dispatch({ type: "SET_PREVIEW_URL", payload: info.previewUrl });
            },
            className: `rounded-full border px-3 py-1.5 text-xs transition ${ctx.selectedPageId === pageId ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"}`,
            children: info.pageName || pageId
          },
          pageId,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
            lineNumber: 1027,
            columnNumber: 21
          },
          this
        )) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
          lineNumber: 1025,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 1023,
        columnNumber: 15
      }, this) : null
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
      lineNumber: 601,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ChatWorkspace,
      {
        employee: mockEmployee,
        sessionId: `lowcode-session-${activeEmpId}`,
        storageType: "memory",
        onBeforeSend: handleBeforeSend,
        className: "h-full border-none shadow-none bg-transparent"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
        lineNumber: 1049,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
      lineNumber: 1048,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
    lineNumber: 580,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/ChatPanel.tsx",
    lineNumber: 579,
    columnNumber: 5
  }, this);
}
function IframeSandbox({ previewUrl }) {
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (previewUrl) {
      setLoading(true);
    }
  }, [previewUrl]);
  if (!previewUrl) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center h-full bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-600 gap-3 p-6 animate-in fade-in duration-500", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-16 h-16 rounded-3xl bg-slate-200/50 dark:bg-slate-900/50 flex items-center justify-center border border-slate-200/30", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MonitorSmartphone, { size: 28, className: "opacity-40 animate-pulse text-slate-500" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center space-y-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold text-slate-600 dark:text-slate-400", children: "视觉预览沙箱就绪" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 max-w-[200px] leading-relaxed", children: "在中间栏由 AI 批量构建或发起局部微调后，此区域将以 0 毫秒延时实时呈现带动态交互的页面" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative w-full h-full bg-white dark:bg-slate-950 flex flex-col", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-9 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-3 shrink-0 select-none", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-2.5 h-2.5 rounded-full bg-rose-500" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-500" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] font-mono bg-slate-200/50 dark:bg-slate-800 text-slate-500 px-3 py-0.5 rounded-lg border border-slate-200/20 max-w-[50%] truncate", children: previewUrl }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 text-[12px] text-emerald-500 font-semibold uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldCheck, { size: 11 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "边缘沙箱隔离中" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 relative bg-white", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "iframe",
        {
          src: previewUrl,
          className: "w-full h-full border-0 bg-white",
          sandbox: "allow-scripts allow-same-origin allow-forms",
          title: "低代码视觉预览沙箱",
          onLoad: () => setLoading(false)
        },
        previewUrl,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      ),
      loading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md flex flex-col items-center justify-center gap-3 animate-in fade-in duration-300", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 flex items-center justify-center border border-blue-500/20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin text-blue-600 dark:text-blue-400", size: 22 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center space-y-0.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] font-bold text-slate-800 dark:text-slate-200", children: "正在重构视觉资产..." }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] text-slate-400 font-light", children: "正在 R2 直写并代理刷新浏览器沙箱" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/components/IframeSandbox.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
const initial = {
  state: "init",
  sitePlan: null,
  htmlStore: {},
  pageStore: {},
  selectedAgentId: "",
  previewUrl: "",
  selectedPageId: "home"
  // 默认选中首页
};
function reducer(ctx, action) {
  switch (action.type) {
    case "SET_STATE":
      return { ...ctx, state: action.payload };
    case "SET_SITE_PLAN": {
      const firstPage = action.payload?.pages?.[0]?.pageId || "home";
      return { ...ctx, sitePlan: action.payload, selectedPageId: firstPage };
    }
    case "SET_HTML_STORE":
      return { ...ctx, htmlStore: action.payload };
    case "SET_PAGE_STORE":
      return { ...ctx, pageStore: action.payload };
    case "SET_SELECTED_AGENT":
      return { ...ctx, selectedAgentId: action.payload };
    case "SET_PREVIEW_URL":
      return { ...ctx, previewUrl: action.payload };
    case "SET_SELECTED_PAGE":
      return { ...ctx, selectedPageId: action.payload };
    default:
      return ctx;
  }
}
function AdminPage() {
  const [ctx, dispatch] = reactExports.useReducer(reducer, initial);
  reactExports.useEffect(() => {
    fetch("/api/v1/plugins/proxy/lowcode-deployer/init").catch(() => {
    });
  }, []);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TopBar, { ctx, dispatch }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 flex overflow-hidden min-h-0 w-full", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0 flex flex-col border-r border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900/50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChatPanel, { ctx, dispatch }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/index.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/index.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-[45%] min-w-[380px] flex-none h-full border-l border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(IframeSandbox, { previewUrl: ctx.previewUrl }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/index.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/lowcode-deployer/admin/index.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
export {
  AdminPage as default
};
