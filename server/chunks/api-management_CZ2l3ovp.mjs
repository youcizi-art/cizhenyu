globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { R as React, r as reactExports, a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { b as buildTree, F as FolderOpen, f as flattenTreeWithPrefix, o as BookOpen, g as Settings2, $ as $$DashboardLayout } from "./DashboardLayout_CJzzDslR.mjs";
import { j as jsxDevRuntimeExports, B as Button, G as Globe, u as useToast, h as useAdminPermissions } from "./useAdminPermissions_8aANvvWm.mjs";
import { C as ChevronDown, a as ChevronRight, e as Copy, c as ConfirmDialog } from "./chat-workspace_BThR_WE3.mjs";
import { C as Card } from "./Card_DzPhX3RV.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_Bjp9Ed0y.mjs";
import { B as Badge } from "./Badge_CKfcU1_S.mjs";
import { S as Switch } from "./Switch_PL3bAMIj.mjs";
import { L as Lock } from "./shield-check_x8y0ttEW.mjs";
import { F as FormDialog } from "./FormDialog_BBzVV8fv.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
function ApiCollectionTree({
  collections,
  loading,
  saving,
  readOnly = false,
  expandedGroups,
  expandedNodes,
  onToggleGroup,
  onToggleNode,
  onToggleApi,
  onOpenDoc,
  onOpenPolicy,
  onCopy,
  onBatchToggle,
  toast
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-bold tracking-tight text-slate-900", children: "API 开放治理 (Gateways)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500 mt-1", children: "统一管理业务集合的公开访问状态、方法权限和接口开放范围。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => onBatchToggle(false), disabled: saving || readOnly, className: "text-slate-500", children: "一键全关" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => onBatchToggle(true), disabled: saving || readOnly, className: "text-blue-600 border-blue-200 bg-blue-50", children: "一键全开" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-100 shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { className: "bg-slate-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "pl-6 w-[280px]", children: "业务集合" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[100px]", children: "状态" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "w-[150px]", children: "允许的方法" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "接口入口 (Relative)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-right pr-6", children: "操作" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 5, className: "py-20 text-center text-slate-400", children: "加载中..." }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this) : collections.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 5, className: "py-20 text-center text-slate-400", children: "暂无业务集合" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this) : (() => {
        const groups = collections.filter((item) => item.slug !== "media_library").reduce((acc, item) => {
          const groupName = item.menuGroup || "其它内容";
          if (!acc[groupName]) acc[groupName] = [];
          acc[groupName].push(item);
          return acc;
        }, {});
        groups["公共接口"] = [
          {
            id: -999,
            name: "获取系统语种 (Languages)",
            slug: "languages",
            modelId: -999,
            modelName: "System",
            description: "获取系统全局多语言配置",
            icon: "Globe",
            fieldConfig: {},
            menuGroup: "公共接口",
            isSystem: true
          },
          {
            id: -998,
            name: "获取全站结构总线 (Schema All)",
            slug: "schema/all",
            modelId: -998,
            modelName: "System",
            description: "获取当前系统的模型结构、集合结构与保留字段目录",
            icon: "BookOpen",
            fieldConfig: {},
            menuGroup: "公共接口",
            isSystem: true
          },
          {
            id: -997,
            name: "获取全站接口契约 (Data Contract)",
            slug: "data-contract/all",
            modelId: -997,
            modelName: "System",
            description: "获取当前系统所有集合的内部真实 CRUD 契约",
            icon: "BookOpen",
            fieldConfig: {},
            menuGroup: "公共接口",
            isSystem: true
          },
          {
            id: -996,
            name: "获取前端公开接口契约 (Frontend Contract)",
            slug: "data-contract/frontend",
            modelId: -996,
            modelName: "System",
            description: "仅获取前端当前可调用的公开运行时契约",
            icon: "Globe",
            fieldConfig: {},
            menuGroup: "公共接口",
            isSystem: true
          }
        ];
        return Object.entries(groups).map(([groupName, groupItems]) => {
          const isGroupExpanded = expandedGroups.has(groupName);
          const groupTree = buildTree(groupItems, { idKey: "id", parentKey: "parentId" });
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(React.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "bg-slate-50/50 hover:bg-slate-100/50 cursor-pointer", onClick: () => onToggleGroup(groupName), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 5, className: "py-2.5 pl-6 font-semibold text-xs text-slate-500 uppercase tracking-wider", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              isGroupExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                lineNumber: 145,
                columnNumber: 48
              }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                lineNumber: 145,
                columnNumber: 76
              }, this),
              groupName === "公共接口" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 14, className: "text-emerald-600" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                lineNumber: 146,
                columnNumber: 53
              }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FolderOpen, { size: 14, className: "text-slate-400" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                lineNumber: 146,
                columnNumber: 104
              }, this),
              groupName
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
              lineNumber: 144,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
              lineNumber: 143,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
              lineNumber: 142,
              columnNumber: 23
            }, this),
            isGroupExpanded && flattenTreeWithPrefix(groupTree, "name", " ").map((item) => {
              let shouldShow = true;
              let current = item;
              while (current.parentId) {
                if (!expandedNodes.has(current.parentId)) {
                  shouldShow = false;
                  break;
                }
                current = groupItems.find((entry) => entry.id === current.parentId);
                if (!current) break;
              }
              if (!shouldShow) return null;
              const isSystem = Boolean(item.isSystem);
              const apiPolicy = item.fieldConfig?.__api_policy || {};
              const isEnabled = isSystem ? true : Boolean(apiPolicy.enabled);
              const methods = isSystem ? ["GET"] : apiPolicy.allowed_methods || [];
              const hasChildren = groupItems.some((entry) => entry.parentId === item.id);
              const isExpanded = expandedNodes.has(item.id);
              const relativeUrl = isSystem ? `/api/v1/p/${item.slug}` : `/api/v1/p/data/${item.slug}`;
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "group hover:bg-slate-50/30 transition-colors", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "pl-8 py-3.5 relative", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  Array.from({ length: item.level }).map((_, index) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-5 border-r border-slate-200 h-10 -my-4 last:mr-1" }, index, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 178,
                    columnNumber: 35
                  }, this)),
                  hasChildren && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "button",
                    {
                      onClick: (event) => {
                        event.stopPropagation();
                        onToggleNode(item.id);
                      },
                      className: "p-0.5 rounded hover:bg-slate-100",
                      children: isExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 12 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                        lineNumber: 188,
                        columnNumber: 51
                      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 12 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                        lineNumber: 188,
                        columnNumber: 79
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                      lineNumber: 181,
                      columnNumber: 35
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col min-w-0", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-medium text-sm text-slate-900 truncate", children: item.name }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                      lineNumber: 192,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 font-mono truncate", children: item.slug }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                      lineNumber: 193,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 191,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 176,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 175,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: isSystem ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Switch, { checked: true, disabled: true }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 199,
                  columnNumber: 33
                }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Switch, { checked: isEnabled, disabled: readOnly, onCheckedChange: (value) => onToggleApi(item, value) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 201,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 197,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1", children: [
                  methods.length === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-300 italic", children: "None" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 206,
                    columnNumber: 58
                  }, this),
                  methods.map((method) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: isSystem ? "text-[9px] px-1 h-4 bg-green-100 text-green-700 uppercase" : "text-[9px] px-1 h-4 bg-slate-100 text-slate-500 uppercase", children: method }, method, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 208,
                    columnNumber: 35
                  }, this))
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 205,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 204,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: isEnabled ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 group/url", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "text-[12px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100 font-mono truncate max-w-[200px]", children: relativeUrl }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 217,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "button",
                    {
                      onClick: () => onCopy(relativeUrl),
                      className: "p-1 rounded hover:bg-blue-100 text-blue-400 opacity-0 group-hover/url:opacity-100 transition-opacity",
                      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 12 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                        lineNumber: 222,
                        columnNumber: 37
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                      lineNumber: 218,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 216,
                  columnNumber: 33
                }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 italic flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { size: 10 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 227,
                    columnNumber: 35
                  }, this),
                  " 接口已关闭"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 226,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 214,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right pr-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end gap-1", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", title: "查看文档", onClick: () => onOpenDoc(item), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(BookOpen, { size: 16, className: "text-slate-400 hover:text-blue-600" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 234,
                    columnNumber: 35
                  }, this) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                    lineNumber: 233,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-8 w-8 p-0",
                      title: readOnly ? "查看策略配置" : "策略配置",
                      onClick: () => {
                        if (isSystem) {
                          toast({ title: "提示", description: "该接口为系统内置，无需策略配置。请通过【查看文档】获取接口结构。", variant: "default" });
                          return;
                        }
                        onOpenPolicy(item);
                      },
                      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings2, { size: 16, className: isSystem ? "text-slate-200" : "text-slate-400 hover:text-blue-600" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                        lineNumber: 249,
                        columnNumber: 35
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                      lineNumber: 236,
                      columnNumber: 33
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 232,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                  lineNumber: 231,
                  columnNumber: 29
                }, this)
              ] }, item.id, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
                lineNumber: 174,
                columnNumber: 27
              }, this);
            })
          ] }, groupName, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
            lineNumber: 141,
            columnNumber: 21
          }, this);
        });
      })() }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiCollectionTree.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
const DEFAULT_PUBLIC_ALLOWED_METHODS$1 = ["schema", "data"];
const normalizePublicPolicy$1 = (policy = {}) => {
  const nextPolicy = { ...policy };
  if (nextPolicy.enabled && (!Array.isArray(nextPolicy.allowed_methods) || nextPolicy.allowed_methods.length === 0)) {
    nextPolicy.allowed_methods = [...DEFAULT_PUBLIC_ALLOWED_METHODS$1];
  }
  return nextPolicy;
};
function ApiPolicyEditor({ collection, models, onClose, onSaved, readOnly = false }) {
  const [settings, setSettings] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const { toast } = useToast();
  reactExports.useEffect(() => {
    if (!collection) return;
    const policy = normalizePublicPolicy$1(collection.fieldConfig?.__api_policy || { enabled: false, allowed_methods: [], security: {}, field_permissions: {} });
    setSettings({ policy });
  }, [collection]);
  const fields = reactExports.useMemo(() => {
    if (!collection) return [];
    const currentModel = models.find((item) => item.id === collection.modelId);
    if (!currentModel) return [];
    return typeof currentModel.fieldsJson === "string" ? JSON.parse(currentModel.fieldsJson) : currentModel.fieldsJson;
  }, [collection, models]);
  if (!collection || !settings) return null;
  const updatePolicy = (updates) => setSettings((prev) => ({ ...prev, policy: { ...prev.policy, ...updates } }));
  const handleSave = async () => {
    if (readOnly) return;
    setSaving(true);
    try {
      const response = await fetch(`/api/v1/rbac/collections/${collection.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...collection,
          fieldConfig: {
            ...collection.fieldConfig || {},
            __api_policy: normalizePublicPolicy$1(settings.policy)
          }
        })
      });
      if (response.ok) {
        toast({ title: "配置已更新" });
        onSaved();
      }
    } catch (error) {
      toast({ variant: "destructive", title: "保存失败", description: error.message });
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    FormDialog,
    {
      open: Boolean(collection),
      onOpenChange: (open) => !open && onClose(),
      title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2", children: [
        "配置治理: ",
        collection.name
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
        lineNumber: 69,
        columnNumber: 14
      }, this),
      contentClassName: "max-w-3xl max-h-[90vh] overflow-y-auto",
      bodyClassName: "py-4",
      footerClassName: "border-t pt-4",
      cancelText: "取消",
      confirmText: "保存 API 策略",
      onCancel: onClose,
      onConfirm: handleSave,
      confirmLoading: saving,
      confirmDisabled: readOnly,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border rounded-lg bg-slate-50 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-sm font-semibold text-slate-900", children: "启用公共访问" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500", children: "此开关决定了外部资源是否可以无 Token 访问接口。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Switch, { checked: settings.policy.enabled, disabled: readOnly, onCheckedChange: (value) => updatePolicy({ enabled: value }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
          lineNumber: 81,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 border-b pb-1", children: "公开能力控制" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                lineNumber: 92,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold", children: "允许的方法" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 94,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500", children: "`DATA` 同时控制公开列表、公开条件过滤和公开单条详情。" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 95,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-4", children: [
                  { key: "schema", label: "SCHEMA" },
                  { key: "data", label: "DATA (列表/过滤/详情)" },
                  { key: "submit", label: "SUBMIT" }
                ].map(({ key, label }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "flex items-center gap-2 text-sm cursor-pointer", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      className: "rounded",
                      checked: Boolean(settings.policy.allowed_methods?.includes(key)),
                      disabled: readOnly,
                      onChange: (event) => {
                        const current = new Set(settings.policy.allowed_methods || []);
                        if (event.target.checked) current.add(key);
                        else current.delete(key);
                        updatePolicy({ allowed_methods: Array.from(current) });
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                      lineNumber: 103,
                      columnNumber: 23
                    },
                    this
                  ),
                  label
                ] }, key, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 102,
                  columnNumber: 21
                }, this)) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 96,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                lineNumber: 93,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 border-b pb-1", children: "安全与限流" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                lineNumber: 122,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold block mb-1", children: "CORS 域名白名单" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 125,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "input",
                    {
                      type: "text",
                      className: "w-full text-xs p-2 border rounded border-slate-200 outline-none focus:border-blue-500 transition-colors",
                      placeholder: "例如: https://example.com, https://app.example.com",
                      disabled: readOnly,
                      value: (settings.policy.security?.allowed_domains || []).join(", "),
                      onChange: (e) => {
                        const domains = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                        updatePolicy({ security: { ...settings.policy.security, allowed_domains: domains } });
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                      lineNumber: 126,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 mt-1", children: "留空或输入 * 表示允许所有源访问跨域资源" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 137,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 124,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "text-xs font-semibold block mb-1", children: "接口单 IP 访问频次 (次/分钟)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 140,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "input",
                    {
                      type: "number",
                      className: "w-full text-xs p-2 border rounded border-slate-200 outline-none focus:border-blue-500 transition-colors",
                      placeholder: "默认: 0 (无限制)",
                      disabled: readOnly,
                      value: settings.policy.security?.rate_limit_per_min || "",
                      onChange: (e) => {
                        const val = parseInt(e.target.value, 10);
                        updatePolicy({ security: { ...settings.policy.security, rate_limit_per_min: isNaN(val) ? 0 : val } });
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                      lineNumber: 141,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 mt-1", children: "填 0 或留空代表不限流" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 152,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 139,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                lineNumber: 123,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 border-b pb-1 flex justify-between", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "字段治理" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                lineNumber: 160,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 font-normal", children: "设置公开读写权限" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                lineNumber: 161,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
              lineNumber: 159,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-h-[300px] overflow-y-auto border rounded divide-y bg-white", children: fields.map((field) => {
              const permissions = settings.policy.field_permissions || {};
              const isRead = permissions.read_whitelist?.includes(field.name);
              const isWrite = permissions.write_whitelist?.includes(field.name);
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3 flex items-center justify-between hover:bg-slate-50 transition-colors", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-semibold text-slate-700 text-xs", children: field.label }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 171,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] text-slate-400 font-mono mt-0.5", children: field.name }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 172,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 170,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "flex flex-col items-center gap-1 cursor-pointer", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-semibold text-slate-500", children: "可读" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                      lineNumber: 176,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Switch,
                      {
                        checked: Boolean(isRead),
                        disabled: readOnly,
                        onCheckedChange: (checked) => {
                          const list = new Set(settings.policy.field_permissions?.read_whitelist || []);
                          if (checked) list.add(field.name);
                          else list.delete(field.name);
                          updatePolicy({ field_permissions: { ...settings.policy.field_permissions, read_whitelist: Array.from(list) } });
                        }
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                        lineNumber: 177,
                        columnNumber: 25
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 175,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "flex flex-col items-center gap-1 cursor-pointer", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-semibold text-slate-500", children: "可写" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                      lineNumber: 188,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Switch,
                      {
                        checked: Boolean(isWrite),
                        disabled: readOnly,
                        onCheckedChange: (checked) => {
                          const list = new Set(settings.policy.field_permissions?.write_whitelist || []);
                          if (checked) list.add(field.name);
                          else list.delete(field.name);
                          updatePolicy({ field_permissions: { ...settings.policy.field_permissions, write_whitelist: Array.from(list) } });
                        }
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                        lineNumber: 189,
                        columnNumber: 25
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                    lineNumber: 187,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                  lineNumber: 174,
                  columnNumber: 21
                }, this)
              ] }, field.name, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
                lineNumber: 169,
                columnNumber: 19
              }, this);
            }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
              lineNumber: 163,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
            lineNumber: 158,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiPolicyEditor.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}
function ApiDocPreview({ collection, domains, onClose }) {
  if (!collection) return null;
  const isDedicatedApi = Boolean(domains?.api_domain);
  const baseOrigin = isDedicatedApi ? `https://${domains.api_domain}` : window.location.origin;
  const isSystem = Boolean(collection.isSystem);
  const readWhitelist = Array.isArray(collection.fieldConfig?.__api_policy?.field_permissions?.read_whitelist) ? collection.fieldConfig.__api_policy.field_permissions.read_whitelist.filter(Boolean) : [];
  const sampleFilterField = readWhitelist.find((field) => !["id", "locale", "translationGroup"].includes(field)) || readWhitelist[0] || "title";
  const sampleFilterValue = /slug$/i.test(String(sampleFilterField)) ? "demo-slug" : "demo-value";
  let endpoints = [];
  if (isSystem) {
    if (collection.slug === "languages") {
      endpoints = [{
        name: "获取系统语种 (LANGUAGES)",
        method: "GET",
        path: "/api/v1/p/languages",
        desc: "获取系统当前已启用的所有多语言语种列表。",
        responseExample: `{
  "success": true,
  "data": [
    {
      "code": "zh-CN",
      "name": "简体中文",
      "isDefault": true,
      "status": "active"
    }
  ]
}`
      }];
    } else if (collection.slug === "schema/all") {
      endpoints = [{
        name: "获取全站结构总线 (SCHEMA ALL)",
        method: "GET",
        path: "/api/v1/p/schema/all",
        desc: "获取当前系统的结构总线，包含模型字段、集合字段与保留字段目录。",
        responseExample: `{
  "success": true,
  "models": [
    {
      "modelSlug": "article",
      "fields": []
    }
  ],
  "collections": [
    {
      "collectionSlug": "articles",
      "fields": []
    }
  ],
  "reservedFields": [
    {
      "key": "status"
    }
  ]
}`
      }];
    } else if (collection.slug === "data-contract/all") {
      endpoints = [{
        name: "获取全站接口契约 (DATA CONTRACT)",
        method: "GET",
        path: "/api/v1/p/data-contract/all",
        desc: "获取当前系统所有集合的内部真实 CRUD 契约。",
        responseExample: `{
  "success": true,
  "data": {
    "viewer": {
      "mode": "admin_audit"
    },
    "collections": [
      {
        "collectionSlug": "articles",
        "endpoints": [],
        "requestFields": [],
        "responseFields": []
      }
    ]
  }
}`
      }];
    } else if (collection.slug === "data-contract/frontend") {
      endpoints = [{
        name: "获取前端公开接口契约 (FRONTEND CONTRACT)",
        method: "GET",
        path: "/api/v1/p/data-contract/frontend",
        desc: "获取当前系统所有前端可调用的公开运行时契约。",
        responseExample: `{
  "success": true,
  "data": {
    "systemEndpoints": [],
    "collections": [
      {
        "collectionSlug": "articles",
        "fields": [],
        "filters": {},
        "responseFields": []
      }
    ]
  }
}`
      }];
    }
  } else {
    endpoints = [
      {
        name: "获取字段模型 (SCHEMA)",
        method: "GET",
        path: `/api/v1/p/schema/${collection.slug}`,
        desc: "获取此业务集合的字段展示定义（元数据）。",
        sampleCalls: [`/api/v1/p/schema/${collection.slug}`]
      },
      {
        name: "公开列表 / 条件过滤 (PUBLIC DATA)",
        method: "GET",
        path: `/api/v1/p/data/${collection.slug}`,
        desc: "公开读取接口，仅返回已发布数据。支持分页、关键词搜索、语种过滤，以及任意白名单字段的精确/模糊过滤。",
        queryParams: [
          "page: 页码，默认 1",
          "pageSize / limit: 每页条数，默认 20，最大 100",
          "search: 关键词全文搜索",
          "locale: 按语种过滤，例如 zh-CN",
          "translationGroup: 按多语言分组过滤",
          `?字段=xxx: 对任意公开白名单字段做精确匹配，例如 ?${sampleFilterField}=${sampleFilterValue}`,
          `?字段_like=xxx: 对任意公开白名单字段做模糊匹配，例如 ?${sampleFilterField}_like=${sampleFilterValue}`
        ],
        sampleCalls: [
          `/api/v1/p/data/${collection.slug}`,
          `/api/v1/p/data/${collection.slug}?page=1&pageSize=20`,
          `/api/v1/p/data/${collection.slug}?${sampleFilterField}=${encodeURIComponent(sampleFilterValue)}`,
          `/api/v1/p/data/${collection.slug}?${sampleFilterField}_like=${encodeURIComponent(sampleFilterValue)}`
        ],
        filterNote: readWhitelist.length > 0 ? `当前集合支持作为公开过滤条件的白名单字段：${readWhitelist.join("、")}` : "当前集合未配置公开读取白名单字段，因此不支持字段级过滤。"
      },
      {
        name: "前端单表单读取 (FRONTEND SINGLE FORM)",
        method: "GET",
        path: `/api/v1/p/data/${collection.slug}`,
        desc: "当前端将某个集合视为单表单/配置页时，直接复用公开列表接口即可。推荐传入 locale，并将 pageSize 设为 1，仅取排序后的第一条已发布记录；若前端已知 translationGroup，也可继续追加 translationGroup 过滤。",
        queryParams: [
          "locale: 当前页面语种，例如 zh-CN",
          "page: 固定传 1",
          "pageSize / limit: 固定传 1，仅取第一条",
          "translationGroup: 可选；若前端已锁定某个翻译组，可追加此参数精确命中"
        ],
        sampleCalls: [
          `/api/v1/p/data/${collection.slug}?locale=zh-CN&page=1&pageSize=1`,
          `/api/v1/p/data/${collection.slug}?locale=en-US&page=1&pageSize=1`,
          `/api/v1/p/data/${collection.slug}?locale=zh-CN&page=1&pageSize=1&translationGroup=group_xxx`
        ],
        responseExample: `{
  "success": true,
  "list": [
    {
      "id": 1,
      "locale": "zh-CN",
      "translationGroup": "group_xxx"
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "pageSize": 1,
    "totalPages": 1
  }
}`
      },
      {
        name: "公开单条详情 (PUBLIC DETAIL)",
        method: "GET",
        path: `/api/v1/p/data/${collection.slug}/{id}`,
        desc: "按真实数字主键读取单条已发布记录详情。",
        sampleCalls: [`/api/v1/p/data/${collection.slug}/123`]
      },
      {
        name: "管理端精细查询 (ADMIN QUERY)",
        method: "GET",
        path: `/api/v1/entities/${collection.slug}`,
        desc: "如需登录后查看管理端数据、未发布内容或完整 CRUD 能力，可使用后台实体接口。",
        authNote: "需要登录，并具备该集合的查看权限。",
        queryParams: [
          "search: 关键词全文搜索，匹配序列化后的 dataJson",
          "page: 页码，默认 1",
          "pageSize: 每页条数，默认 20，最大 100"
        ],
        sampleCalls: [`/api/v1/entities/${collection.slug}?search=关键词&page=1&pageSize=20`]
      },
      {
        name: "管理端单表单查询 (ADMIN SINGLE FORM)",
        method: "GET",
        path: `/api/v1/entities/${collection.slug}/single`,
        desc: "按单表单链路读取当前集合的基准记录。接口会以默认语种排序后的第一条记录作为锚点决定 translationGroup；若传入 ?locale=xx，则优先返回该翻译组下对应语种的记录，不存在时返回该语种空草稿态，适合设置页、配置页和单表单场景。",
        authNote: "需要登录，并具备该集合的查看权限。",
        queryParams: [
          "locale: 可选；指定希望返回的语种版本，例如 zh-CN / en-US"
        ],
        sampleCalls: [
          `/api/v1/entities/${collection.slug}/single`,
          `/api/v1/entities/${collection.slug}/single?locale=zh-CN`,
          `/api/v1/entities/${collection.slug}/single?locale=en-US`
        ],
        responseExample: `{
  "data": {
    "id": 1,
    "locale": "en-US",
    "translationGroup": "group_xxx",
    "translations": [
      { "id": 1, "locale": "zh-CN" },
      { "id": 2, "locale": "en-US" }
    ]
  },
  "model": {
    "name": "${collection.name}",
    "slug": "${collection.slug}",
    "fieldsJson": [],
    "presentationMode": "single_form"
  },
  "meta": {
    "presentationMode": "single_form",
    "anchorLocale": "zh-CN",
    "requestedLocale": "en-US",
    "translationGroup": "group_xxx",
    "isEmpty": false
  }
}`
      },
      {
        name: "外部提交接口 (SUBMIT)",
        method: "POST",
        path: `/api/v1/p/submit/${collection.slug}`,
        desc: "允许外部受控提交数据（如：留言板、在线报名）。",
        sampleCalls: [`/api/v1/p/submit/${collection.slug}`]
      }
    ];
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    FormDialog,
    {
      open: Boolean(collection),
      onOpenChange: (open) => !open && onClose(),
      title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2", children: [
        "API 开发文档: ",
        collection.name
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
        lineNumber: 251,
        columnNumber: 14
      }, this),
      contentClassName: "max-w-2xl max-h-[85vh] overflow-y-auto",
      bodyClassName: "py-2 space-y-6",
      hideCancel: true,
      confirmText: "确定",
      onConfirm: onClose,
      confirmClassName: "bg-slate-900",
      footerClassName: "border-0 pt-0",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-900 rounded-xl p-4 text-slate-300 font-mono text-xs space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-slate-500 mb-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 263,
                columnNumber: 13
              }, this),
              " Base Endpoint ",
              isDedicatedApi ? "(Mapped)" : ""
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 262,
              columnNumber: 11
            }, this),
            isDedicatedApi && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "text-[9px] border-green-900 text-green-500 h-4", children: "Dedicated API Domain" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 265,
              columnNumber: 30
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
            lineNumber: 261,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-blue-400", children: [
            baseOrigin,
            isDedicatedApi ? "" : "/api"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
            lineNumber: 267,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
          lineNumber: 260,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: endpoints.map((endpoint) => {
          const displayPath = isDedicatedApi ? endpoint.path.replace(/^\/api/, "") : endpoint.path;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-50 px-4 py-2 border-b flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: endpoint.method === "GET" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700", children: endpoint.method }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 277,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-sm text-slate-700", children: endpoint.name }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 278,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 276,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: () => navigator.clipboard.writeText(`${baseOrigin}${displayPath}`), className: "text-slate-400 hover:text-blue-600", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 281,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 280,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 space-y-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "text-[11px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200 truncate", children: [
                baseOrigin,
                displayPath
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 286,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 285,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500 leading-relaxed", children: endpoint.desc }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 288,
                columnNumber: 17
              }, this),
              endpoint.authNote && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-800", children: [
                "访问要求: ",
                endpoint.authNote
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 289,
                columnNumber: 39
              }, this),
              endpoint.queryParams?.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] font-bold text-slate-400", children: "支持参数 (Query):" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 292,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "list-disc list-inside text-[11px] text-slate-600 space-y-1", children: endpoint.queryParams.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: item }, item, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 294,
                  columnNumber: 59
                }, this)) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 293,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 291,
                columnNumber: 19
              }, this),
              endpoint.filterNote && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-[11px] text-blue-700", children: endpoint.filterNote }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 299,
                columnNumber: 19
              }, this),
              endpoint.sampleCalls?.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] font-bold text-slate-400", children: "调用示例 (Example):" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 305,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: endpoint.sampleCalls.map((sample) => {
                  const displaySample = isDedicatedApi ? sample.replace(/^\/api/, "") : sample;
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "bg-slate-900 text-cyan-300 p-3 rounded-lg text-[12px] overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed", children: [
                    baseOrigin,
                    displaySample
                  ] }, sample, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                    lineNumber: 310,
                    columnNumber: 27
                  }, this);
                }) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 306,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 304,
                columnNumber: 19
              }, this),
              endpoint.responseExample && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] font-bold text-slate-400 mb-1", children: "返回结构 (Response):" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 318,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "bg-slate-900 text-green-400 p-3 rounded-lg text-[12px] overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed", children: endpoint.responseExample }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                  lineNumber: 319,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
                lineNumber: 317,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 284,
              columnNumber: 15
            }, this)
          ] }, endpoint.path, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this);
        }) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
          lineNumber: 270,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 bg-blue-50 border border-blue-100 rounded-xl", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h5", { className: "text-sm font-bold text-blue-900 mb-1", children: "注意事项" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
            lineNumber: 329,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "text-xs text-blue-700 list-disc list-inside space-y-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: "公共 API 访问无需携带身份 Token。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 331,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: "返回字段受既有字段显隐与写入控制策略约束。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 332,
              columnNumber: 11
            }, this),
            !isSystem && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: "`/api/v1/p/data/:slug` 支持公开列表、公开过滤，以及 `/api/v1/p/data/:slug/:id` 公开单条详情。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 333,
              columnNumber: 25
            }, this),
            !isSystem && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: "若集合在前端按单表单模式消费，推荐直接调用 `/api/v1/p/data/:slug?locale=当前语种&page=1&pageSize=1`，从返回的 `list[0]` 读取当前配置。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 334,
              columnNumber: 25
            }, this),
            !isSystem && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: "`/api/v1/entities/:slug/single` 为管理端单表单投影接口，适合后台配置页或单表单模式页面。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 335,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: "外部提交的数据默认进入“待审”状态，需在后台手动审核后生效。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
              lineNumber: 336,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
            lineNumber: 330,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
          lineNumber: 328,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiDocPreview.tsx",
      lineNumber: 248,
      columnNumber: 5
    },
    this
  );
}
const DEFAULT_PUBLIC_ALLOWED_METHODS = ["schema", "data"];
const normalizePublicPolicy = (policy = {}) => {
  const nextPolicy = { ...policy };
  if (nextPolicy.enabled && (!Array.isArray(nextPolicy.allowed_methods) || nextPolicy.allowed_methods.length === 0)) {
    nextPolicy.allowed_methods = [...DEFAULT_PUBLIC_ALLOWED_METHODS];
  }
  return nextPolicy;
};
const ApiManagement = () => {
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canManageApi = hasPermission2(["api.manage", "role.manage"]);
  const [collections, setCollections] = reactExports.useState([]);
  const [models, setModels] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [siteDomains, setSiteDomains] = reactExports.useState(null);
  const [expandedGroups, setExpandedGroups] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedNodes, setExpandedNodes] = reactExports.useState(/* @__PURE__ */ new Set());
  const [configTarget, setConfigTarget] = reactExports.useState(null);
  const [docTarget, setDocTarget] = reactExports.useState(null);
  const [confirmOpen, setConfirmOpen] = reactExports.useState(false);
  const [batchTarget, setBatchTarget] = reactExports.useState(null);
  const { toast } = useToast();
  const fetchData = async () => {
    setLoading(true);
    try {
      const [collectionsRes, modelsRes, domainsRes] = await Promise.all([
        fetch("/api/v1/rbac/collections"),
        fetch("/api/v1/rbac/models"),
        fetch("/api/v1/infra/domains")
      ]);
      const [collectionsData, modelsData, domainsData] = await Promise.all([
        collectionsRes.json(),
        modelsRes.json(),
        domainsRes.json()
      ]);
      setCollections(collectionsData);
      setModels(modelsData);
      setSiteDomains(domainsData);
      setExpandedGroups(new Set(collectionsData.map((item) => item.menuGroup || "其它内容")));
      setExpandedNodes(new Set(collectionsData.filter((item) => collectionsData.some((child) => child.parentId === item.id)).map((item) => item.id)));
    } catch {
      toast({ variant: "destructive", title: "加载失败", description: "无法获取 API 数据" });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchData();
  }, []);
  const handleToggleApi = async (collection, enabled) => {
    if (!canManageApi) return;
    const newPolicy = normalizePublicPolicy({ ...collection.fieldConfig?.__api_policy || {}, enabled });
    try {
      const response = await fetch(`/api/v1/rbac/collections/${collection.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...collection,
          fieldConfig: { ...collection.fieldConfig || {}, __api_policy: newPolicy }
        })
      });
      if (response.ok) {
        toast({ title: enabled ? "API 已开启" : "API 已关闭" });
        fetchData();
      }
    } catch (error) {
      toast({ variant: "destructive", title: "更新失败", description: error.message });
    }
  };
  const handleExecuteBatchToggle = async () => {
    if (!canManageApi) return;
    if (batchTarget === null) return;
    setSaving(true);
    setConfirmOpen(false);
    try {
      for (const collection of collections) {
        const currentPolicy = collection.fieldConfig?.__api_policy || {};
        if (currentPolicy.enabled === batchTarget) continue;
        const nextPolicy = normalizePublicPolicy({ ...currentPolicy, enabled: batchTarget });
        await fetch(`/api/v1/rbac/collections/${collection.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...collection,
            fieldConfig: { ...collection.fieldConfig || {}, __api_policy: nextPolicy }
          })
        });
      }
      toast({ title: "批量操作完成", description: batchTarget ? "所有 API 已开启" : "所有 API 已关闭" });
      fetchData();
    } catch (error) {
      toast({ variant: "destructive", title: "批量操作部分失败", description: error.message });
    } finally {
      setSaving(false);
      setBatchTarget(null);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    !loadingPermissions && !canManageApi ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看 API 开放治理配置与文档，开关切换、策略保存和批量操作已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiManagement.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, void 0) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ApiCollectionTree,
      {
        collections,
        loading,
        saving,
        readOnly: !canManageApi,
        expandedGroups,
        expandedNodes,
        onToggleGroup: (groupName) => setExpandedGroups((prev) => {
          const next = new Set(prev);
          if (next.has(groupName)) next.delete(groupName);
          else next.add(groupName);
          return next;
        }),
        onToggleNode: (nodeId) => setExpandedNodes((prev) => {
          const next = new Set(prev);
          if (next.has(nodeId)) next.delete(nodeId);
          else next.add(nodeId);
          return next;
        }),
        onToggleApi: handleToggleApi,
        onOpenDoc: setDocTarget,
        onOpenPolicy: setConfigTarget,
        onCopy: (text) => {
          navigator.clipboard.writeText(text);
          toast({ title: "已复制", description: "API 路径已复制到剪贴板" });
        },
        onBatchToggle: (enabled) => {
          setBatchTarget(enabled);
          setConfirmOpen(true);
        },
        toast
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiManagement.tsx",
        lineNumber: 122,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ApiPolicyEditor,
      {
        collection: configTarget,
        models,
        readOnly: !canManageApi,
        onClose: () => setConfigTarget(null),
        onSaved: () => {
          setConfigTarget(null);
          fetchData();
        }
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiManagement.tsx",
        lineNumber: 153,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ApiDocPreview,
      {
        collection: docTarget,
        domains: siteDomains,
        onClose: () => setDocTarget(null)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiManagement.tsx",
        lineNumber: 164,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: confirmOpen,
        onOpenChange: setConfirmOpen,
        title: batchTarget ? "全量开启接口 API" : "全量停止接口 API",
        description: batchTarget ? "确定要一键开启所有业务集合的公共访问权限吗？开启后，这些集合的数据将可能被外界直接读取。" : "确定要一键关闭所有业务集合的公共访问权限吗？这会导致所有外部前端应用无法通过公共接口获取数据。",
        onConfirm: handleExecuteBatchToggle,
        variant: batchTarget ? "default" : "destructive",
        confirmText: batchTarget ? "确认全量开启" : "确认全量关闭",
        isLoading: saving
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiManagement.tsx",
        lineNumber: 170,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/ApiManagement.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, void 0);
};
const $$ApiManagement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ApiManagement;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["api.manage.view", "api.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "API 开放治理" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-8 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ApiManagement", ApiManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/ApiManagement", "client:component-export": "ApiManagement" })} </div> ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/api-management.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/api-management.astro";
const $$url = "/admin/api-management";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ApiManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
