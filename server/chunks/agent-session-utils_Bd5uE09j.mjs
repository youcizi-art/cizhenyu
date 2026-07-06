globalThis.process ??= {};
globalThis.process.env ??= {};
import { p as createLucideIcon, j as jsxDevRuntimeExports, B as Button, I as Input, T as Trash2, U as UI_LAYER, L as Loader2, X, A as reactDomExports } from "./useAdminPermissions_CAR-Xq1O.mjs";
import { r as reactExports } from "./worker-entry_DQAyehZh.mjs";
import { a as ChevronRight, R as RefreshCw, g as CheckCircle2, h as ChatWorkspace } from "./chat-workspace_D3zVFcLO.mjs";
import { P as Plus, S as Settings } from "./settings_Dtra946-.mjs";
const Activity = createLucideIcon("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]
]);
const AlertCircle = createLucideIcon("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const EyeOff = createLucideIcon("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Eye = createLucideIcon("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Layers = createLucideIcon("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);
const Link2 = createLucideIcon("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const PenLine = createLucideIcon("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
const Pen = createLucideIcon("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
const Sparkles = createLucideIcon("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
const SessionHistory = ({
  sessions,
  activeSessionId,
  setActiveSessionId,
  loadingSessions,
  historyExpanded,
  setHistoryExpanded,
  isRenamingSessionId,
  setIsRenamingSessionId,
  renamingTitle,
  setRenamingTitle,
  handleCreateNewSession,
  handleRenameSession,
  handleDeleteSession,
  employeesLength
}) => {
  if (employeesLength === 0) return null;
  const hasDraftSession = Boolean(activeSessionId) && !sessions.some((session) => session.id === activeSessionId);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      className: `bg-slate-50/20 dark:bg-slate-900/10 border-r border-slate-100 dark:border-slate-800 flex flex-col justify-between shrink-0 transition-all duration-300 animate-fade-in ${historyExpanded ? "w-[190px]" : "w-[56px]"}`,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3.5 flex flex-col h-full overflow-hidden", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center mb-3.5", children: historyExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-extrabold text-slate-700 dark:text-slate-300 text-[11px] flex items-center gap-1.5 truncate", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 13, className: "text-blue-500 shrink-0" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 58,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "对话历史" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 59,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-0.5 shrink-0", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                size: "icon",
                variant: "ghost",
                onClick: () => handleCreateNewSession(),
                className: "w-5.5 h-5.5 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 rounded-lg text-slate-400",
                title: "新建会话",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 13 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 69,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 62,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                size: "icon",
                variant: "ghost",
                onClick: () => setHistoryExpanded(false),
                className: "w-5.5 h-5.5 hover:bg-slate-100 rounded-lg text-slate-400",
                title: "收起对话历史",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronLeft, { size: 13 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 78,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 71,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              size: "icon",
              variant: "ghost",
              onClick: () => setHistoryExpanded(true),
              className: "w-7 h-7 hover:bg-slate-150 rounded-lg text-slate-400",
              title: "展开对话历史",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 91,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 84,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              size: "icon",
              variant: "ghost",
              onClick: () => handleCreateNewSession(),
              className: "w-7 h-7 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 rounded-lg text-slate-400 mt-1",
              title: "新建会话",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 100,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 93,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 overflow-y-auto space-y-1.5 pr-0.5 scrollbar-none", children: loadingSessions ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center py-12 text-slate-400", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 14, className: "animate-spin mb-1.5" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, void 0),
          historyExpanded && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[9px] font-bold", children: "载入历史中..." }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 110,
            columnNumber: 35
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, void 0) : hasDraftSession ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          !historyExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              onClick: () => setActiveSessionId(activeSessionId),
              className: "w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transition-all border mx-auto shadow-sm bg-blue-50 border-blue-100 text-blue-600 scale-[1.08] ring-2 ring-blue-500/10 dark:bg-blue-950/40 dark:border-blue-900",
              title: "新对话（未发送）",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 12, className: "text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 120,
                columnNumber: 19
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 115,
              columnNumber: 17
            },
            void 0
          ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              onClick: () => setActiveSessionId(activeSessionId),
              className: "group relative p-2 rounded-xl transition-all flex items-center justify-between border bg-blue-50/70 border-blue-100 text-blue-700 dark:bg-blue-950/20 dark:border-blue-900/50 dark:text-blue-400 font-bold",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 11, className: "text-blue-500" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 128,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] truncate flex-1 leading-normal select-none", children: "新对话（未发送）" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 129,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 127,
                columnNumber: 19
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 123,
              columnNumber: 17
            },
            void 0
          ),
          sessions.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-8 text-slate-400", children: historyExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] font-bold", children: "暂无历史记录" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 139,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[7px] mt-0.5", children: "发送首条消息后会进入历史" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 140,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 138,
            columnNumber: 21
          }, void 0) : null }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, void 0) : sessions.map((s) => {
            const isSelected = s.id === activeSessionId;
            const isRenaming = s.id === isRenamingSessionId;
            if (!historyExpanded) {
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "div",
                {
                  onClick: () => setActiveSessionId(s.id),
                  className: `w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transition-all border mx-auto shadow-sm ${isSelected ? "bg-blue-50 border-blue-100 text-blue-600 scale-[1.08] ring-2 ring-blue-500/10 dark:bg-blue-950/40 dark:border-blue-900" : "bg-white border-slate-200 text-slate-400 hover:bg-slate-100 hover:scale-[1.03] hover:text-slate-650 dark:bg-slate-850 dark:border-slate-750"}`,
                  title: s.title,
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 12, className: isSelected ? "text-blue-500" : "text-slate-400" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                    lineNumber: 161,
                    columnNumber: 25
                  }, void 0)
                },
                s.id,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 151,
                  columnNumber: 23
                },
                void 0
              );
            }
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "div",
              {
                onClick: () => {
                  if (!isRenaming) {
                    setActiveSessionId(s.id);
                  }
                },
                className: `group relative p-2 rounded-xl cursor-pointer transition-all flex items-center justify-between border ${isSelected ? "bg-blue-50/70 border-blue-100 text-blue-700 dark:bg-blue-950/20 dark:border-blue-900/50 dark:text-blue-400 font-bold" : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"}`,
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 11, className: isSelected ? "text-blue-500" : "text-slate-400" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                      lineNumber: 181,
                      columnNumber: 25
                    }, void 0),
                    isRenaming ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Input,
                      {
                        value: renamingTitle,
                        onChange: (e) => setRenamingTitle(e.target.value),
                        onKeyDown: (e) => {
                          if (e.key === "Enter") {
                            handleRenameSession(s.id, renamingTitle);
                          } else if (e.key === "Escape") {
                            setIsRenamingSessionId("");
                          }
                        },
                        onBlur: () => handleRenameSession(s.id, renamingTitle),
                        className: "h-5 text-[9px] p-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500",
                        autoFocus: true,
                        onClick: (e) => e.stopPropagation()
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                        lineNumber: 183,
                        columnNumber: 27
                      },
                      void 0
                    ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "span",
                      {
                        className: "text-[12px] truncate flex-1 leading-normal select-none",
                        onDoubleClick: (e) => {
                          e.stopPropagation();
                          setIsRenamingSessionId(s.id);
                          setRenamingTitle(s.title);
                        },
                        title: "双击可以重命名会话",
                        children: s.title
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                        lineNumber: 199,
                        columnNumber: 27
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                    lineNumber: 180,
                    columnNumber: 23
                  }, void 0),
                  !isRenaming && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity ml-1 shrink-0", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Button,
                      {
                        size: "icon",
                        variant: "ghost",
                        onClick: (e) => {
                          e.stopPropagation();
                          setIsRenamingSessionId(s.id);
                          setRenamingTitle(s.title);
                        },
                        className: "w-4 h-4 rounded p-0 text-slate-400 hover:text-blue-500 hover:bg-slate-200/50 dark:hover:bg-slate-800",
                        title: "重命名会话",
                        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { size: 9 }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                          lineNumber: 226,
                          columnNumber: 29
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                        lineNumber: 215,
                        columnNumber: 27
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Button,
                      {
                        size: "icon",
                        variant: "ghost",
                        onClick: (e) => handleDeleteSession(s.id, e),
                        className: "w-4 h-4 rounded p-0 text-slate-400 hover:text-red-500 hover:bg-slate-200/50 dark:hover:bg-slate-800",
                        title: "删除会话",
                        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 9 }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                          lineNumber: 235,
                          columnNumber: 29
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                        lineNumber: 228,
                        columnNumber: 27
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                    lineNumber: 214,
                    columnNumber: 25
                  }, void 0)
                ]
              },
              s.id,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 167,
                columnNumber: 21
              },
              void 0
            );
          })
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, void 0) : sessions.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-12 text-slate-400", children: historyExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] font-bold", children: "暂无历史记录" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 248,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[7px] mt-0.5", children: "发个消息即可开辟新对话" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
            lineNumber: 249,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 247,
          columnNumber: 17
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 14, className: "animate-pulse mx-auto opacity-30" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 252,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 245,
          columnNumber: 13
        }, void 0) : sessions.map((s) => {
          const isSelected = s.id === activeSessionId;
          const isRenaming = s.id === isRenamingSessionId;
          if (!historyExpanded) {
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "div",
              {
                onClick: () => setActiveSessionId(s.id),
                className: `w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transition-all border mx-auto shadow-sm ${isSelected ? "bg-blue-50 border-blue-100 text-blue-600 scale-[1.08] ring-2 ring-blue-500/10 dark:bg-blue-950/40 dark:border-blue-900" : "bg-white border-slate-200 text-slate-400 hover:bg-slate-100 hover:scale-[1.03] hover:text-slate-650 dark:bg-slate-850 dark:border-slate-750"}`,
                title: s.title,
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 12, className: isSelected ? "text-blue-500" : "text-slate-400" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 272,
                  columnNumber: 21
                }, void 0)
              },
              s.id,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                lineNumber: 262,
                columnNumber: 19
              },
              void 0
            );
          }
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              onClick: () => {
                if (!isRenaming) {
                  setActiveSessionId(s.id);
                }
              },
              className: `group relative p-2 rounded-xl cursor-pointer transition-all flex items-center justify-between border ${isSelected ? "bg-blue-50/70 border-blue-100 text-blue-700 dark:bg-blue-950/20 dark:border-blue-900/50 dark:text-blue-400 font-bold" : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"}`,
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 11, className: isSelected ? "text-blue-500" : "text-slate-400" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                    lineNumber: 292,
                    columnNumber: 21
                  }, void 0),
                  isRenaming ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      value: renamingTitle,
                      onChange: (e) => setRenamingTitle(e.target.value),
                      onKeyDown: (e) => {
                        if (e.key === "Enter") {
                          handleRenameSession(s.id, renamingTitle);
                        } else if (e.key === "Escape") {
                          setIsRenamingSessionId("");
                        }
                      },
                      onBlur: () => handleRenameSession(s.id, renamingTitle),
                      className: "h-5 text-[9px] p-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500",
                      autoFocus: true,
                      onClick: (e) => e.stopPropagation()
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                      lineNumber: 294,
                      columnNumber: 23
                    },
                    void 0
                  ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "span",
                    {
                      className: "text-[12px] truncate flex-1 leading-normal select-none",
                      onDoubleClick: (e) => {
                        e.stopPropagation();
                        setIsRenamingSessionId(s.id);
                        setRenamingTitle(s.title);
                      },
                      title: "双击可以重命名会话",
                      children: s.title
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                      lineNumber: 310,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 291,
                  columnNumber: 19
                }, void 0),
                !isRenaming && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity ml-1 shrink-0", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Button,
                    {
                      size: "icon",
                      variant: "ghost",
                      onClick: (e) => {
                        e.stopPropagation();
                        setIsRenamingSessionId(s.id);
                        setRenamingTitle(s.title);
                      },
                      className: "w-4 h-4 rounded p-0 text-slate-400 hover:text-blue-500 hover:bg-slate-200/50 dark:hover:bg-slate-800",
                      title: "重命名会话",
                      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { size: 9 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                        lineNumber: 337,
                        columnNumber: 25
                      }, void 0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                      lineNumber: 326,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Button,
                    {
                      size: "icon",
                      variant: "ghost",
                      onClick: (e) => handleDeleteSession(s.id, e),
                      className: "w-4 h-4 rounded p-0 text-slate-400 hover:text-red-500 hover:bg-slate-200/50 dark:hover:bg-slate-800",
                      title: "删除会话",
                      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 9 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                        lineNumber: 346,
                        columnNumber: 25
                      }, void 0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                      lineNumber: 339,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
                  lineNumber: 325,
                  columnNumber: 21
                }, void 0)
              ]
            },
            s.id,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
              lineNumber: 278,
              columnNumber: 17
            },
            void 0
          );
        }) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/session-history.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    void 0
  );
};
const EmployeeTaskDialog = ({
  isOpen,
  onClose,
  employees,
  selectedEmployeeId,
  onSelectEmployee,
  sessionId,
  sessions,
  loadingSessions = false,
  onSelectSession,
  onCreateSession,
  onEnsureSession,
  onRenameSession,
  onDeleteSession,
  onBeforeSend,
  onMessagesChange,
  notice,
  isBusy = false,
  title = "AI生成",
  description = "通过数字员工生成并回填当前页面内容",
  settingsHref = "/admin/settings/ai",
  sizeStorageKey = "employee_task_dialog_size",
  sidePanel
}) => {
  const [size, setSize] = reactExports.useState({ width: 980, height: 720 });
  const [isInitializedSize, setIsInitializedSize] = reactExports.useState(false);
  const [isResizing, setIsResizing] = reactExports.useState(false);
  const [historyExpanded, setHistoryExpanded] = reactExports.useState(true);
  const [renamingSessionId, setRenamingSessionId] = reactExports.useState("");
  const [renamingTitle, setRenamingTitle] = reactExports.useState("");
  const startRef = reactExports.useRef({
    width: 0,
    height: 0,
    startX: 0,
    startY: 0,
    direction: null
  });
  const activeEmployee = reactExports.useMemo(
    () => employees.find((item) => item.id === selectedEmployeeId) || null,
    [employees, selectedEmployeeId]
  );
  const activeSession = reactExports.useMemo(
    () => sessions.find((item) => item.id === sessionId) || null,
    [sessions, sessionId]
  );
  const noticeClassName = notice?.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : notice?.type === "info" ? "border-blue-200 bg-blue-50 text-blue-700" : "border-amber-200 bg-amber-50 text-amber-700";
  const processingNotice = isBusy && notice?.type === "info" ? notice : null;
  reactExports.useEffect(() => {
    if (!isOpen) return;
    let initW = Math.max(window.innerWidth * 0.62, 920);
    let initH = Math.max(window.innerHeight * 0.78, 680);
    try {
      const saved = localStorage.getItem(sizeStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.width === "number" && typeof parsed.height === "number") {
          initW = parsed.width;
          initH = parsed.height;
        }
      }
    } catch (error) {
    }
    setSize({ width: initW, height: initH });
    setIsInitializedSize(true);
  }, [isOpen, sizeStorageKey]);
  const handleResizeStart = (e, direction) => {
    e.preventDefault();
    setIsResizing(true);
    startRef.current = {
      width: size.width,
      height: size.height,
      startX: e.clientX,
      startY: e.clientY,
      direction,
      finalWidth: size.width,
      finalHeight: size.height
    };
    const handleMouseMove = (moveEvent) => {
      const { startX, startY, width: startWidth, height: startHeight, direction: dir } = startRef.current;
      if (!dir) return;
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      let newWidth = startWidth;
      let newHeight = startHeight;
      if (dir === "left" || dir === "top-left") {
        newWidth = startWidth - deltaX;
      }
      if (dir === "top" || dir === "top-left") {
        newHeight = startHeight - deltaY;
      }
      const minWidth = 820;
      const minHeight = 560;
      const maxWidth = window.innerWidth - 48;
      const maxHeight = window.innerHeight - 120;
      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));
      setSize({ width: newWidth, height: newHeight });
      startRef.current.finalWidth = newWidth;
      startRef.current.finalHeight = newHeight;
    };
    const handleMouseUp = () => {
      setIsResizing(false);
      const { finalWidth, finalHeight } = startRef.current;
      if (finalWidth && finalHeight) {
        try {
          localStorage.setItem(sizeStorageKey, JSON.stringify({ width: finalWidth, height: finalHeight }));
        } catch (error) {
        }
      }
      startRef.current.direction = null;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  if (!isOpen) return null;
  const dialogContent = /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      style: {
        width: isInitializedSize ? `${size.width}px` : "980px",
        height: isInitializedSize ? `${size.height}px` : "720px",
        zIndex: UI_LAYER.workspace.window,
        pointerEvents: "auto"
      },
      className: `fixed right-6 bottom-24 bg-transparent rounded-2xl shadow-2xl ${isResizing ? "select-none" : "transition-all duration-300 animate-in slide-in-from-bottom-5"}`,
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            onMouseDown: (e) => handleResizeStart(e, "left"),
            style: { zIndex: UI_LAYER.workspace.handle },
            className: "absolute left-[-4px] top-0 bottom-0 w-[8px] cursor-w-resize group/left flex items-center justify-center",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-[2px] h-10 bg-slate-300/0 group-hover/left:bg-blue-500/40 rounded transition-colors" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
              lineNumber: 210,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
            lineNumber: 205,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            onMouseDown: (e) => handleResizeStart(e, "top"),
            style: { zIndex: UI_LAYER.workspace.handle },
            className: "absolute left-0 right-0 top-[-4px] h-[8px] cursor-s-resize group/top flex items-center justify-center",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-[2px] w-10 bg-slate-300/0 group-hover/top:bg-blue-500/40 rounded transition-colors" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
              lineNumber: 217,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
            lineNumber: 212,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            onMouseDown: (e) => handleResizeStart(e, "top-left"),
            style: { zIndex: UI_LAYER.workspace.cornerHandle },
            className: "absolute left-[-6px] top-[-6px] w-[14px] h-[14px] cursor-nwse-resize group/corner flex items-center justify-center",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-2 h-2 border-t-2 border-l-2 border-slate-300/0 group-hover/corner:border-blue-500/60 transition-colors" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
              lineNumber: 224,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
            lineNumber: 219,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full h-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col relative", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-sm font-semibold text-slate-800", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: title }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 231,
                  columnNumber: 15
                }, void 0),
                isBusy ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[12px] font-medium text-blue-700", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 11, className: "animate-spin" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 234,
                    columnNumber: 19
                  }, void 0),
                  "任务执行中"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 233,
                  columnNumber: 17
                }, void 0) : null
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                lineNumber: 230,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500", children: description }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                lineNumber: 239,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
              lineNumber: 229,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "ml-4 flex shrink-0 items-center gap-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "a",
                {
                  href: settingsHref,
                  className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700",
                  title: "配置数字员工",
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { size: 15 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 247,
                    columnNumber: 15
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 242,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: onClose,
                  disabled: isBusy,
                  className: "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-slate-400",
                  title: isBusy ? "任务执行中，请勿关闭页面" : "关闭 AI 任务",
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { size: 15 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 255,
                    columnNumber: 15
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 249,
                  columnNumber: 13
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
              lineNumber: 241,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
            lineNumber: 228,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0 flex bg-slate-50/40", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              SessionHistory,
              {
                sessions,
                activeSessionId: sessionId,
                setActiveSessionId: onSelectSession,
                loadingSessions,
                historyExpanded,
                setHistoryExpanded,
                isRenamingSessionId: renamingSessionId,
                setIsRenamingSessionId: setRenamingSessionId,
                renamingTitle,
                setRenamingTitle,
                handleCreateNewSession: onCreateSession,
                handleRenameSession: onRenameSession,
                handleDeleteSession: (id, e) => {
                  e.stopPropagation();
                  onDeleteSession(id);
                },
                employeesLength: employees.length
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                lineNumber: 261,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0 flex flex-col max-w-[79%]", children: [
              notice ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "div",
                {
                  className: `mx-4 mt-4 rounded-xl border px-4 py-3 text-sm ${noticeClassName}`,
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-2", children: [
                    notice.type === "success" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CheckCircle2, { size: 16, className: "mt-0.5 shrink-0" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                      lineNumber: 289,
                      columnNumber: 21
                    }, void 0) : notice.type === "info" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 16, className: "mt-0.5 shrink-0 animate-spin" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                      lineNumber: 291,
                      columnNumber: 21
                    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertCircle, { size: 16, className: "mt-0.5 shrink-0" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                      lineNumber: 293,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-medium", children: notice.title }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                        lineNumber: 296,
                        columnNumber: 21
                      }, void 0),
                      notice.description ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-xs opacity-90", children: notice.description }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                        lineNumber: 297,
                        columnNumber: 43
                      }, void 0) : null
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                      lineNumber: 295,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 287,
                    columnNumber: 17
                  }, void 0)
                },
                notice.timestamp,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 283,
                  columnNumber: 15
                },
                void 0
              ) : null,
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0 relative", children: [
                processingNotice ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 z-20 flex items-center justify-center bg-white/70 backdrop-blur-[2px] pointer-events-none", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-6 w-full max-w-md rounded-2xl border border-blue-200 bg-white px-5 py-4 shadow-2xl shadow-blue-100", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-0.5 rounded-full bg-blue-100 p-2 text-blue-600", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 18, className: "animate-spin" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 309,
                    columnNumber: 25
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 308,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold text-slate-900", children: processingNotice.title || "AI 员工正在处理中" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                      lineNumber: 312,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-xs leading-6 text-slate-600", children: processingNotice.description || "请稍候，系统正在执行翻译与回填任务。" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                      lineNumber: 315,
                      columnNumber: 25
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 311,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 307,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 306,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 305,
                  columnNumber: 17
                }, void 0) : null,
                activeEmployee ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  ChatWorkspace,
                  {
                    employee: activeEmployee,
                    sessionId,
                    storageType: "localstorage",
                    onEnsureSession,
                    onBeforeSend,
                    onMessagesChange,
                    className: "h-full border-none bg-transparent shadow-none",
                    headerActions: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 lg:block", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-medium text-slate-700", children: activeSession?.title || "新任务" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                        lineNumber: 335,
                        columnNumber: 25
                      }, void 0) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                        lineNumber: 334,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "select",
                        {
                          value: selectedEmployeeId,
                          onChange: (e) => onSelectEmployee(e.target.value),
                          className: "h-9 max-w-[220px] rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none focus:ring-2 focus:ring-blue-500",
                          children: employees.map((employee) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: employee.id, children: [
                            employee.avatar,
                            " ",
                            employee.name
                          ] }, employee.id, true, {
                            fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                            lineNumber: 343,
                            columnNumber: 27
                          }, void 0))
                        },
                        void 0,
                        false,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                          lineNumber: 337,
                          columnNumber: 23
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                      lineNumber: 333,
                      columnNumber: 21
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                    lineNumber: 324,
                    columnNumber: 17
                  },
                  void 0
                ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-full rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center text-sm text-slate-500", children: "当前没有可用的数字员工，请先到 AI 设置中创建员工。" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                  lineNumber: 352,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
                lineNumber: 303,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
              lineNumber: 281,
              columnNumber: 11
            }, void 0),
            sidePanel ? sidePanel : null
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
            lineNumber: 260,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
          lineNumber: 227,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/EmployeeTaskDialog.tsx",
      lineNumber: 194,
      columnNumber: 5
    },
    void 0
  );
  if (typeof document === "undefined") return null;
  return reactDomExports.createPortal(dialogContent, document.body);
};
const createAgentSessionRecord = ({
  agentId,
  buildTitle,
  customTitle,
  sessionId,
  fallbackTitle = "新任务"
}) => {
  const now = /* @__PURE__ */ new Date();
  return {
    id: sessionId || crypto.randomUUID(),
    agentId,
    title: buildTitle(customTitle, fallbackTitle),
    summary: "",
    createdAt: now,
    updatedAt: now
  };
};
const readStoredSessionId = (storageKey) => {
  try {
    return localStorage.getItem(storageKey) || "";
  } catch {
    return "";
  }
};
const writeStoredSessionId = (storageKey, sessionId) => {
  try {
    localStorage.setItem(storageKey, sessionId);
  } catch {
  }
};
const syncAgentSessionRemote = async (session, options) => {
  try {
    await fetch(`/api/v1/agents/${session.agentId}/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(session)
    });
  } catch (error) {
    console.warn(`${options?.logPrefix || "[AgentSession]"} 会话创建同步失败`, error);
  }
};
const updateAgentSessionRemote = async (agentId, sessionId, payload, options) => {
  try {
    await fetch(`/api/v1/agents/${agentId}/sessions/${sessionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.warn(`${options?.logPrefix} 会话更新同步失败`, error);
  }
};
const deleteAgentSessionRemote = async (agentId, sessionId, options) => {
  try {
    await fetch(`/api/v1/agents/${agentId}/sessions/${sessionId}`, {
      method: "DELETE"
    });
  } catch (error) {
    console.warn(`${options?.logPrefix} 会话删除同步失败`, error);
  }
};
export {
  AlertCircle as A,
  ChevronLeft as C,
  Eye as E,
  Layers as L,
  MessageSquare as M,
  Pen as P,
  Sparkles as S,
  Link2 as a,
  Activity as b,
  createAgentSessionRecord as c,
  deleteAgentSessionRemote as d,
  PenLine as e,
  EyeOff as f,
  EmployeeTaskDialog as g,
  SessionHistory as h,
  readStoredSessionId as r,
  syncAgentSessionRemote as s,
  updateAgentSessionRemote as u,
  writeStoredSessionId as w
};
