globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, c as cn, B as Button, T as Trash2 } from "./useAdminPermissions_CAR-Xq1O.mjs";
import { r as reactExports } from "./worker-entry_DQAyehZh.mjs";
import { S as Switch } from "./Switch_DEhsob1-.mjs";
import { M as MediaPicker, C as ChevronDown, a as ChevronRight } from "./chat-workspace_D3zVFcLO.mjs";
import { E as Eye, S as Sparkles, A as AlertCircle } from "./agent-session-utils_Bd5uE09j.mjs";
import { C as Code, I as Image, B as Braces, L as List, P as PlusCircle } from "./DashboardLayout_Cly2CC3o.mjs";
import { P as Plus } from "./settings_Dtra946-.mjs";
const AdvancedJSONEditor = ({ value, onChange, hasError, onAIGenerate }) => {
  const [activeTab, setActiveTab] = reactExports.useState("visual");
  const [rawText, setRawText] = reactExports.useState("");
  const [jsonError, setJsonError] = reactExports.useState(null);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = reactExports.useState(false);
  const [mediaCallback, setMediaCallback] = reactExports.useState(null);
  const handleRequestMedia = reactExports.useCallback((cb) => {
    setMediaCallback(() => cb);
    setIsMediaPickerOpen(true);
  }, []);
  reactExports.useEffect(() => {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
        try {
          const parsed = JSON.parse(trimmed);
          if (typeof parsed === "object" && parsed !== null) {
            console.log("🤖 [JSON Editor] Auto-parsed stringified JSON value.");
            onChange(parsed);
            return;
          }
        } catch (e) {
        }
      }
    }
    try {
      const stringified = JSON.stringify(value, null, 2);
      if (stringified !== rawText) {
        setRawText(stringified === "null" ? "" : stringified);
      }
    } catch (e) {
    }
  }, [value, activeTab, onChange]);
  const handleSourceChange = (text) => {
    setRawText(text);
    if (!text.trim()) {
      setJsonError(null);
      onChange({});
      return;
    }
    try {
      const parsed = JSON.parse(text);
      setJsonError(null);
      onChange(parsed);
    } catch (e) {
      setJsonError(e.message);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn(
    "flex flex-col border rounded-xl overflow-hidden bg-white transition-all shadow-sm",
    hasError ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
  ), children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex bg-slate-200/50 p-1 rounded-lg", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab("visual"),
            className: cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold transition-all",
              activeTab === "visual" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            ),
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Eye, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                lineNumber: 114,
                columnNumber: 13
              }, void 0),
              " 可视化编辑"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 106,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab("source"),
            className: cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold transition-all",
              activeTab === "source" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            ),
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Code, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                lineNumber: 124,
                columnNumber: 13
              }, void 0),
              " 源码模式"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 116,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => {
            if (onAIGenerate) {
              onAIGenerate();
            } else {
              window.dispatchEvent(new CustomEvent("open-employee-task-window"));
            }
          },
          className: "text-[12px] h-7 px-2 gap-1 border-violet-200 text-violet-700 hover:bg-violet-50 hover:text-violet-800",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 12, className: "mr-1" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
              lineNumber: 140,
              columnNumber: 11
            }, void 0),
            " AI 生成"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 127,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-h-[200px] max-h-[500px] overflow-y-auto", children: activeTab === "source" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 space-y-3 relative h-full", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "textarea",
        {
          className: cn(
            "w-full h-[300px] font-mono text-[11px] p-4 bg-slate-900 text-blue-300 rounded-lg outline-none selection:bg-blue-500/30",
            jsonError ? "ring-1 ring-red-500" : ""
          ),
          spellCheck: false,
          value: rawText,
          onChange: (e) => handleSourceChange(e.target.value),
          placeholder: '{"key": "value"}'
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 148,
          columnNumber: 13
        },
        void 0
      ),
      jsonError && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute bottom-6 left-6 right-6 p-2 bg-red-500 text-white text-[12px] rounded flex items-center gap-2 animate-in slide-in-from-bottom-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertCircle, { size: 12 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 160,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
          "JSON 格式错误: ",
          jsonError
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 161,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 159,
        columnNumber: 15
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 147,
      columnNumber: 11
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      VisualNode,
      {
        data: value,
        onChange,
        depth: 0,
        isLast: true,
        onRequestMedia: handleRequestMedia
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 167,
        columnNumber: 13
      },
      void 0
    ) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 166,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      MediaPicker,
      {
        isOpen: isMediaPickerOpen,
        onClose: () => setIsMediaPickerOpen(false),
        onSelect: (item) => {
          if (mediaCallback) mediaCallback(item.url);
          setIsMediaPickerOpen(false);
        },
        mode: "picker"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 177,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, void 0);
};
const VisualNode = ({ data, onChange, onKeyChange, depth, label, isLast, onRequestMedia }) => {
  const [isExpanded, setIsExpanded] = reactExports.useState(true);
  const [editingKey, setEditingKey] = reactExports.useState(label || "");
  const isObject = data !== null && typeof data === "object" && !Array.isArray(data);
  const isResource = isObject && data.type === "resource";
  const isArray = Array.isArray(data);
  const isObjectArray = isArray && data.length > 0 && data.every((item) => item !== null && typeof item === "object" && !Array.isArray(item) && item.type !== "resource");
  const isPrimitive = !isObject && !isArray;
  let currentType = "string";
  if (isResource) currentType = "resource";
  else if (isObjectArray) currentType = "object_array";
  else if (isObject) currentType = "object";
  else if (isArray) currentType = "array";
  else currentType = typeof data;
  reactExports.useEffect(() => {
    if (label !== void 0) setEditingKey(label);
  }, [label]);
  const updateType = (newType) => {
    switch (newType) {
      case "string":
        onChange("");
        break;
      case "number":
        onChange(0);
        break;
      case "boolean":
        onChange(false);
        break;
      case "object":
        onChange({});
        break;
      case "array":
        onChange([]);
        break;
      case "resource":
        onChange({ type: "resource", url: "", filename: "" });
        break;
      case "object_array":
        onChange([{}]);
        break;
    }
  };
  const renderLabel = () => {
    if (!label && depth === 0) return null;
    if (onKeyChange) {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "input",
        {
          type: "text",
          className: cn(
            "text-xs font-mono px-1 py-0.5 rounded outline-none w-24 transition-all focus:bg-white focus:ring-1 focus:ring-blue-400",
            isObject ? "text-blue-600 font-bold" : "text-slate-600"
          ),
          value: editingKey,
          onChange: (e) => setEditingKey(e.target.value),
          onBlur: () => {
            if (editingKey !== label && editingKey.trim()) {
              onKeyChange(editingKey.trim());
            } else {
              setEditingKey(label || "");
            }
          },
          onKeyDown: (e) => {
            if (e.key === "Enter") e.target.blur();
          }
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 242,
          columnNumber: 9
        },
        void 0
      );
    }
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: cn(
      "text-xs font-mono shrink-0",
      isObject ? "text-blue-600 font-bold" : "text-slate-600"
    ), children: [
      label,
      ":"
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, void 0);
  };
  if (isResource) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 py-1 group", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
        renderLabel(),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors rounded-lg px-2 py-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Image, { size: 14, className: "text-slate-400 shrink-0" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "text",
              className: "flex-1 bg-transparent border-none focus:outline-none text-xs font-mono min-w-0",
              value: data.url || "",
              onChange: (e) => onChange({ ...data, url: e.target.value }),
              placeholder: "资源 URL"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
              lineNumber: 282,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "outline",
              className: "h-6 text-[12px] px-2 py-0 shrink-0 bg-white",
              onClick: () => onRequestMedia?.((url) => onChange({ ...data, url, filename: url.split("/").pop() })),
              children: "选择"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
              lineNumber: 289,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 280,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(NodeControls, { onTypeChange: updateType, type: currentType }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 300,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, void 0);
  }
  if (isPrimitive) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 py-1 group", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
        renderLabel(),
        typeof data === "boolean" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Switch, { checked: data, onCheckedChange: onChange }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 312,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-bold text-slate-400 capitalize", children: String(data) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 313,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "input",
          {
            type: typeof data === "number" ? "number" : "text",
            className: "flex-1 bg-white border-b border-transparent hover:border-slate-200 focus:border-blue-400 focus:outline-none text-xs px-1 py-0.5 font-mono min-w-0",
            value: data ?? "",
            onChange: (e) => onChange(typeof data === "number" ? Number(e.target.value) : e.target.value)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 316,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 308,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(NodeControls, { onTypeChange: updateType, type: currentType }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 324,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 307,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("flex flex-col", depth > 0 && "ml-4 border-l border-slate-100 pl-4"), children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between py-1 group", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 cursor-pointer", onClick: () => setIsExpanded(!isExpanded), children: [
        isExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 14, className: "text-slate-400" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 334,
          columnNumber: 25
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 14, className: "text-slate-400" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 334,
          columnNumber: 80
        }, void 0),
        renderLabel(),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1.5 text-[12px] text-slate-400 font-bold uppercase", children: [
          isObject ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Braces, { size: 10 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 337,
            columnNumber: 25
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(List, { size: 10 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 337,
            columnNumber: 48
          }, void 0),
          isObject ? "Object" : "Array",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[9px] lowercase font-normal", children: [
            "(",
            Object.keys(data || {}).length,
            " items)"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 336,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "icon",
            className: "h-6 w-6 text-blue-500 hover:bg-blue-50",
            onClick: (e) => {
              e.stopPropagation();
              if (isObject) {
                let i = 0;
                while (Object.keys(data).includes(`key_${Object.keys(data).length + i}`)) i++;
                const key = `key_${Object.keys(data).length + i}`;
                onChange({ ...data, [key]: "" });
              } else if (isObjectArray) {
                onChange([...data, {}]);
              } else {
                onChange([...data, ""]);
              }
              setIsExpanded(true);
            },
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 12 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
              lineNumber: 363,
              columnNumber: 13
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 343,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(NodeControls, { onTypeChange: updateType, type: currentType, hideDelete: depth === 0 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 365,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 342,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 332,
      columnNumber: 7
    }, void 0),
    isExpanded && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: isObjectArray ? (() => {
      const allKeys = Array.from(new Set(data.flatMap((item) => Object.keys(item))));
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 mb-2 overflow-x-auto border border-slate-200 rounded-lg bg-white shadow-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full text-left text-xs border-collapse", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-slate-50 border-b border-slate-200", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-2 py-1.5 w-8 text-center text-slate-400 font-mono", children: "#" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 379,
            columnNumber: 25
          }, void 0),
          allKeys.map((key) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-2 py-1.5 font-mono text-slate-600 font-bold border-r border-slate-200 min-w-[120px] group/th relative", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "text",
                defaultValue: key,
                className: "w-full bg-transparent outline-none font-bold text-slate-600 focus:text-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-400 rounded px-1 -ml-1 transition-all text-[11px]",
                onBlur: (e) => {
                  const newKey = e.target.value.trim();
                  if (!newKey || newKey === key || allKeys.includes(newKey)) {
                    e.target.value = key;
                    return;
                  }
                  const next = data.map((item) => {
                    if (key in item) {
                      const { [key]: val, ...rest } = item;
                      return { ...rest, [newKey]: val };
                    }
                    return item;
                  });
                  onChange(next);
                },
                onKeyDown: (e) => {
                  if (e.key === "Enter") e.target.blur();
                }
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                lineNumber: 383,
                columnNumber: 31
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                className: "text-slate-300 hover:text-red-500 opacity-0 group-hover/th:opacity-100 transition-opacity shrink-0",
                onClick: () => {
                  const next = data.map((item) => {
                    const { [key]: _, ...rest } = item;
                    return rest;
                  });
                  onChange(next);
                },
                title: "删除该列",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 10 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                  lineNumber: 418,
                  columnNumber: 33
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                lineNumber: 406,
                columnNumber: 31
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 382,
            columnNumber: 29
          }, void 0) }, key, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 381,
            columnNumber: 27
          }, void 0)),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-2 py-1.5 w-12 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              className: "text-blue-500 hover:text-blue-600 flex items-center justify-center w-full",
              onClick: () => {
                const newKey = `field_${allKeys.length + 1}`;
                const next = data.map((item) => ({ ...item, [newKey]: "" }));
                onChange(next);
              },
              title: "添加新列",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PlusCircle, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                lineNumber: 434,
                columnNumber: 29
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
              lineNumber: 424,
              columnNumber: 27
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 423,
            columnNumber: 25
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 378,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 377,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { children: data.map((row, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-2 py-1.5 text-center text-slate-400 font-mono border-r border-slate-200 bg-slate-50/50", children: idx }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 442,
            columnNumber: 27
          }, void 0),
          allKeys.map((key) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-2 py-1.5 border-r border-slate-200 p-0 align-top", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            VisualNode,
            {
              data: row[key] !== void 0 ? row[key] : "",
              depth: 0,
              onChange: (newVal) => {
                const next = [...data];
                next[idx] = { ...next[idx], [key]: newVal };
                onChange(next);
              },
              onRequestMedia
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
              lineNumber: 445,
              columnNumber: 31
            },
            void 0
          ) }, key, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 444,
            columnNumber: 29
          }, void 0)),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-2 py-1.5 text-center align-middle", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => {
                const next = [...data];
                next.splice(idx, 1);
                onChange(next);
              },
              className: "p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors mx-auto",
              title: "删除该行",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                lineNumber: 468,
                columnNumber: 31
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
              lineNumber: 458,
              columnNumber: 29
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 457,
            columnNumber: 27
          }, void 0)
        ] }, idx, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 441,
          columnNumber: 25
        }, void 0)) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 439,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tfoot", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: allKeys.length + 2, className: "px-2 py-1.5 text-center bg-slate-50/50 border-t border-slate-200", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            type: "button",
            className: "text-xs font-bold text-blue-500 hover:text-blue-600 flex items-center justify-center gap-1.5 w-full py-1 rounded-md hover:bg-blue-50 transition-colors",
            onClick: () => onChange([...data, {}]),
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
                lineNumber: 482,
                columnNumber: 29
              }, void 0),
              " 添加新行 (Row)"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 477,
            columnNumber: 27
          },
          void 0
        ) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 476,
          columnNumber: 25
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 475,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 474,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 376,
        columnNumber: 19
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 375,
        columnNumber: 17
      }, void 0);
    })() : isObject ? Object.entries(data || {}).map(([key, val], idx, arr) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        VisualNode,
        {
          label: key,
          data: val,
          depth: depth + 1,
          isLast: idx === arr.length - 1,
          onRequestMedia,
          onKeyChange: (newKey) => {
            if (newKey === key) return;
            if (Object.keys(data).includes(newKey)) return;
            const next = {};
            Object.entries(data).forEach(([k, v]) => {
              if (k === key) next[newKey] = v;
              else next[k] = v;
            });
            onChange(next);
          },
          onChange: (newVal) => {
            const next = { ...data };
            next[key] = newVal;
            onChange(next);
          }
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 495,
          columnNumber: 19
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 494,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1.5 shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          type: "button",
          onClick: () => {
            const next = { ...data };
            delete next[key];
            onChange(next);
          },
          className: "p-1 text-slate-300 hover:text-red-500 transition-colors",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 12 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 529,
            columnNumber: 21
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 520,
          columnNumber: 19
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 519,
        columnNumber: 17
      }, void 0)
    ] }, key, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 493,
      columnNumber: 15
    }, void 0)) : data.map((val, idx, arr) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        VisualNode,
        {
          label: String(idx),
          data: val,
          depth: depth + 1,
          isLast: idx === arr.length - 1,
          onRequestMedia,
          onChange: (newVal) => {
            const next = [...data];
            next[idx] = newVal;
            onChange(next);
          }
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 538,
          columnNumber: 19
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 537,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1.5 shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          type: "button",
          onClick: () => {
            const next = [...data];
            next.splice(idx, 1);
            onChange(next);
          },
          className: "p-1 text-slate-400 hover:text-red-500 transition-colors",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 12 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
            lineNumber: 561,
            columnNumber: 21
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 552,
          columnNumber: 19
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
        lineNumber: 551,
        columnNumber: 17
      }, void 0)
    ] }, idx, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 536,
      columnNumber: 15
    }, void 0)) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 370,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
    lineNumber: 331,
    columnNumber: 5
  }, void 0);
};
const NodeControls = ({ onTypeChange, type, hideDelete }) => {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 origin-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "select",
    {
      value: type,
      onChange: (e) => onTypeChange(e.target.value),
      className: "text-[11px] border rounded bg-slate-50 px-1 py-0.5 outline-none cursor-pointer hover:bg-white transition-colors",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "string", children: "字符串(str)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 588,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "number", children: "数字(num)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 589,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "boolean", children: "布尔(bool)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 590,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "object", children: "对象(obj)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 591,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "array", children: "数组(arr)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 592,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "resource", children: "资源(res)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 593,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "object_array", children: "对象数组(object_array)" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
          lineNumber: 594,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
      lineNumber: 583,
      columnNumber: 7
    },
    void 0
  ) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdvancedJSONEditor.tsx",
    lineNumber: 582,
    columnNumber: 5
  }, void 0);
};
export {
  AdvancedJSONEditor as A
};
