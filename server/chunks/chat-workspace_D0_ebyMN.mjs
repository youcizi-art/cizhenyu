globalThis.process ??= {};
globalThis.process.env ??= {};
import { g as createLucideIcon, j as jsxDevRuntimeExports, U as UI_LAYER, L as Loader2, c as cn, B as Button, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, T as Trash2 } from "./Button_BI0VYNyM.mjs";
import { r as reactExports, R as React } from "./worker-entry_DhHjvv2h.mjs";
import { C as Check, a as ConfirmDialog } from "./ConfirmDialog_De0oqLuK.mjs";
import { C as Copy, R as RefreshCw } from "./refresh-cw_BDTLwcEs.mjs";
import { E as ExternalLink, C as ChevronRight } from "./external-link_zN9JCFNJ.mjs";
import { G as Globe, I as Input, t as toast } from "./Input_B7IXRXvt.mjs";
import { u as useAdminPermissions } from "./useAdminPermissions_DIK-OUdi.mjs";
import { i as isAiSafeName, f as fromAiSafeName, t as toAiSafeName } from "./slug-utils_BUZMJBew.mjs";
const Bot = createLucideIcon("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
const FileDown = createLucideIcon("FileDown", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
]);
const FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
const File = createLucideIcon("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
const Library = createLucideIcon("Library", [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }]
]);
const Maximize2 = createLucideIcon("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Minimize2 = createLucideIcon("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Paperclip = createLucideIcon("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const Play = createLucideIcon("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const Send = createLucideIcon("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const Shield = createLucideIcon("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
const Square = createLucideIcon("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const Upload = createLucideIcon("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const ImageRenderer = ({ url, alt }) => {
  const [loading, setLoading] = reactExports.useState(true);
  const [previewOpen, setPreviewOpen] = reactExports.useState(false);
  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = url;
    link.download = alt || "image.png";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative group my-3 inline-block max-w-full rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-lg min-h-[120px] min-w-[120px]", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "img",
      {
        src: url,
        alt,
        onLoad: () => setLoading(false),
        onError: () => setLoading(false),
        onClick: () => setPreviewOpen(true),
        className: "max-w-[280px] max-h-[280px] object-cover cursor-zoom-in transition-transform duration-500 hover:scale-[1.03] block"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      void 0
    ),
    loading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90 flex flex-col items-center justify-center gap-2 p-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 16, className: "text-blue-500 animate-spin" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[9px] text-slate-400 font-bold", children: "载入作品中..." }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, void 0),
    !loading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        onClick: handleDownload,
        className: "w-7 h-7 bg-white/95 hover:bg-white text-slate-700 hover:text-blue-600 rounded-xl flex items-center justify-center shadow-md transition-all duration-200",
        title: "保存至本地",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileDown, { size: 14 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 46,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, void 0),
    previewOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        onClick: () => setPreviewOpen(false),
        className: `fixed inset-0 bg-slate-950/80 backdrop-blur-md ${UI_LAYER.page.lightbox} flex items-center justify-center p-4 cursor-zoom-out animate-fade-in`,
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative max-w-full max-h-full flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "img",
            {
              src: url,
              alt,
              className: "max-w-[90vw] max-h-[80vh] rounded-2xl object-contain shadow-2xl scale-up-center"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 flex items-center gap-3", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-white/95 font-bold bg-white/10 backdrop-blur px-3 py-1.5 rounded-xl border border-white/10", children: alt || "创意图片" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: handleDownload,
                className: "bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-9 px-4 text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileDown, { size: 14 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                  }, void 0),
                  " 保存作品到电脑"
                ]
              },
              void 0,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
                lineNumber: 69,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 57,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
const LinkOrFileRenderer = ({ url, text }) => {
  const isFile = url.match(/\.(pdf|zip|rar|tar|gz|docx?|xlsx?|pptx?|csv|txt|mp3|mp4|png|jpg|jpeg|webp)$/i) || text.includes("下载") || text.includes("file") || text.includes("文件") || text.includes("数据表");
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = text || "download";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  if (isFile) {
    const ext = url.split(".").pop()?.split("?")[0].toLowerCase() || "";
    let fileTypeLabel = "DOC 文档";
    let fileColorClass = "border-blue-150 bg-blue-50/20 text-blue-600 dark:border-blue-800/30 dark:bg-blue-950/20";
    if (["zip", "rar", "tar", "gz", "7z"].includes(ext)) {
      fileTypeLabel = "压缩归档";
      fileColorClass = "border-amber-150 bg-amber-50/20 text-amber-600 dark:border-amber-800/30 dark:bg-amber-950/20";
    } else if (["xls", "xlsx", "csv"].includes(ext)) {
      fileTypeLabel = "Excel 数据表";
      fileColorClass = "border-green-150 bg-green-50/20 text-green-600 dark:border-green-800/30 dark:bg-green-950/20";
    } else if (["pdf"].includes(ext)) {
      fileTypeLabel = "PDF 文档";
      fileColorClass = "border-rose-150 bg-rose-50/20 text-rose-600 dark:border-rose-800/30 dark:bg-rose-950/20";
    } else if (["png", "jpg", "jpeg", "webp", "gif"].includes(ext)) {
      fileTypeLabel = "设计图片";
      fileColorClass = "border-purple-150 bg-purple-50/20 text-purple-600 dark:border-purple-800/30 dark:bg-purple-950/20";
    }
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `my-3 p-3.5 rounded-2xl border flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all duration-300 group max-w-sm scale-in-center ${fileColorClass}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-inner shrink-0 group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileText, { size: 20 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h5", { className: "font-bold text-xs truncate leading-normal text-slate-800 dark:text-slate-200", children: text || "生成的文件" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] text-slate-400 font-semibold uppercase mt-0.5", children: fileTypeLabel }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: handleDownload,
          className: "w-8 h-8 rounded-xl bg-white dark:bg-slate-800 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 hover:shadow flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800 transition-all active:scale-95",
          title: "点击下载文件",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileDown, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 136,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 131,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-0.5 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-bold hover:underline transition-colors",
      children: [
        text,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ExternalLink, { size: 10, className: "shrink-0" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 150,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 143,
      columnNumber: 5
    },
    void 0
  );
};
const InlineTextRenderer = ({ text }) => {
  if (!text) return null;
  const regex = /(!\[(.*?)\]\((.*?)\))|(\[(.*?)\]\((.*?)\))|(\*\*(.*?)\*\*)/g;
  const elements = [];
  let lastIndex = 0;
  let match;
  let keyIdx = 0;
  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      elements.push(/* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: text.substring(lastIndex, matchIndex) }, keyIdx++, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 172,
        columnNumber: 21
      }, void 0));
    }
    if (match[1]) {
      const alt = match[2];
      const url = match[3];
      elements.push(/* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ImageRenderer, { url, alt }, keyIdx++, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 178,
        columnNumber: 21
      }, void 0));
    } else if (match[4]) {
      const linkText = match[5];
      const url = match[6];
      elements.push(/* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LinkOrFileRenderer, { url, text: linkText }, keyIdx++, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 182,
        columnNumber: 21
      }, void 0));
    } else if (match[7]) {
      const boldText = match[8];
      elements.push(/* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "font-extrabold text-slate-900 dark:text-slate-100", children: boldText }, keyIdx++, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 185,
        columnNumber: 21
      }, void 0));
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    elements.push(/* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: text.substring(lastIndex) }, keyIdx++, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 192,
      columnNumber: 19
    }, void 0));
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: elements }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
    lineNumber: 195,
    columnNumber: 10
  }, void 0);
};
const CodeBlockComponent = ({ code, lang }) => {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "my-3 w-full min-w-0 max-w-full rounded-2xl border border-slate-200/50 bg-slate-950 text-slate-200 overflow-hidden shadow-md font-mono text-[11px] scale-in-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-w-0 items-center justify-between gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800 text-[12px] font-sans text-slate-400 font-bold", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "min-w-0 truncate", children: lang ? lang.toUpperCase() : "CODE" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: handleCopy,
          className: "shrink-0 flex items-center gap-1 hover:text-white transition-colors cursor-pointer bg-slate-800/50 px-2 py-0.5 rounded border border-slate-800",
          children: [
            copied ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 10, className: "text-green-400" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
              lineNumber: 218,
              columnNumber: 21
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 10 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
              lineNumber: 218,
              columnNumber: 70
            }, void 0),
            copied ? "已复制" : "复制"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 214,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "w-full max-w-full min-w-0 p-4 overflow-x-auto overflow-y-auto whitespace-pre font-mono leading-relaxed max-h-[300px] text-slate-300 select-text", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { children: code }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 223,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
    lineNumber: 211,
    columnNumber: 5
  }, void 0);
};
const TextBlockComponent = ({ text }) => {
  const lines = text.split("\n");
  const renderedElements = [];
  let currentList = null;
  let currentTable = null;
  const flushList = (key) => {
    if (currentList) {
      const listItems = currentList.items.map((item, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex gap-2 items-start mt-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(InlineTextRenderer, { text: item }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 245,
          columnNumber: 44
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, void 0)
      ] }, idx, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, void 0));
      renderedElements.push(
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "pl-1 my-2 space-y-1", children: listItems }, `ul-${key}`, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 249,
          columnNumber: 9
        }, void 0)
      );
      currentList = null;
    }
  };
  const flushTable = (key) => {
    if (currentTable) {
      const headers = currentTable[0];
      const rows = currentTable.slice(1);
      renderedElements.push(
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "overflow-x-auto my-3 rounded-xl border border-slate-150/70 shadow-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "min-w-full divide-y divide-slate-150 text-left text-[11px]", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-slate-50 font-bold text-slate-600", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: headers.map((h, hIdx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(InlineTextRenderer, { text: h.trim() }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 268,
            columnNumber: 56
          }, void 0) }, hIdx, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 268,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y divide-slate-100 bg-white dark:bg-slate-900 text-slate-600", children: rows.map((row, rIdx) => {
            if (row.every((cell) => cell.trim().match(/^:?-+:?$/))) {
              return null;
            }
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-slate-50/50 transition-colors", children: row.map((cell, cIdx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(InlineTextRenderer, { text: cell.trim() }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
              lineNumber: 280,
              columnNumber: 60
            }, void 0) }, cIdx, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
              lineNumber: 280,
              columnNumber: 23
            }, void 0)) }, rIdx, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
              lineNumber: 278,
              columnNumber: 19
            }, void 0);
          }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
            lineNumber: 272,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, void 0) }, `table-${key}`, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 263,
          columnNumber: 9
        }, void 0)
      );
      currentTable = null;
    }
  };
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList(index);
      const cells = trimmed.split("|").slice(1, -1);
      if (!currentTable) {
        currentTable = [cells];
      } else {
        currentTable.push(cells);
      }
      return;
    } else {
      flushTable(index);
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const content = trimmed.substring(2);
      if (!currentList) {
        currentList = { type: "ul", items: [content] };
      } else {
        currentList.items.push(content);
      }
      return;
    } else {
      flushList(index);
    }
    if (trimmed.startsWith("#")) {
      const hLevel = trimmed.match(/^#+/)?.[0].length || 1;
      const hContent = trimmed.replace(/^#+\s*/, "");
      const hClasses = hLevel === 1 ? "text-sm font-extrabold text-slate-900 mt-4 mb-2 flex items-center gap-1 border-b pb-1 border-slate-100" : hLevel === 2 ? "text-xs font-extrabold text-slate-800 mt-3 mb-1.5 flex items-center gap-1" : "text-xs font-bold text-slate-700 mt-2 mb-1";
      renderedElements.push(
        React.createElement(`h${Math.min(hLevel + 2, 6)}`, { key: index, className: hClasses }, /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(InlineTextRenderer, { text: hContent }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 332,
          columnNumber: 11
        }, void 0))
      );
      return;
    }
    if (trimmed === "") {
      renderedElements.push(/* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-2" }, index, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 339,
        columnNumber: 29
      }, void 0));
    } else {
      renderedElements.push(
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-inherit leading-relaxed min-h-[1.25rem]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(InlineTextRenderer, { text: line }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 343,
          columnNumber: 11
        }, void 0) }, index, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
          lineNumber: 342,
          columnNumber: 9
        }, void 0)
      );
    }
  });
  flushList("final");
  flushTable("final");
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: renderedElements }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
    lineNumber: 352,
    columnNumber: 10
  }, void 0);
};
const RichContentRenderer = ({ content }) => {
  if (!content) return null;
  const blocks = [];
  let remaining = content;
  while (remaining.includes("```")) {
    const startIndex = remaining.indexOf("```");
    if (startIndex > 0) {
      blocks.push({ type: "text", content: remaining.substring(0, startIndex) });
    }
    const endMarkerIndex = remaining.indexOf("```", startIndex + 3);
    if (endMarkerIndex !== -1) {
      const codeBlockContent = remaining.substring(startIndex + 3, endMarkerIndex);
      const firstLineBreak = codeBlockContent.indexOf("\n");
      let lang = "";
      let code = codeBlockContent;
      if (firstLineBreak !== -1) {
        lang = codeBlockContent.substring(0, firstLineBreak).trim();
        code = codeBlockContent.substring(firstLineBreak + 1);
      }
      blocks.push({ type: "code", content: code, lang });
      remaining = remaining.substring(endMarkerIndex + 3);
    } else {
      blocks.push({ type: "code", content: remaining.substring(startIndex + 3) });
      remaining = "";
    }
  }
  if (remaining) {
    blocks.push({ type: "text", content: remaining });
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 min-w-0 max-w-full font-sans text-xs text-inherit leading-relaxed select-text", children: blocks.map((block, bIdx) => {
    if (block.type === "code") {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CodeBlockComponent, { code: block.content, lang: block.lang }, bIdx, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
        lineNumber: 395,
        columnNumber: 18
      }, void 0);
    }
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextBlockComponent, { text: block.content }, bIdx, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
      lineNumber: 397,
      columnNumber: 16
    }, void 0);
  }) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/rich-content-renderer.tsx",
    lineNumber: 392,
    columnNumber: 5
  }, void 0);
};
const ChatMessageItem = React.memo(({
  msg,
  activeEmployee,
  isLogCollapsed,
  isReasoningCollapsed,
  isUserMsgCollapsed,
  onToggleLog,
  onToggleReasoning,
  onToggleUserMessage,
  onToggleSteps
}) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(msg.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  if (msg.role === "system" || msg.role === "tool") {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full max-w-[95%] mx-auto my-2.5 bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl p-3.5 text-xs font-mono shadow-sm scale-in-center transition-all duration-300", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          onClick: () => onToggleLog(msg.id),
          className: "flex items-center gap-2 text-slate-500 font-bold text-[12px] cursor-pointer hover:text-slate-700 select-none transition-colors",
          title: "点击展开/收起系统日志",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Shield, { size: 12, className: "text-purple-500 shrink-0" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "系统底层审计日志 / API FEEDBACK" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[8px] bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-slate-400 font-bold tracking-wider", children: "SECURE" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "ml-auto text-slate-400 font-bold flex items-center gap-1 hover:text-slate-600", children: [
              isLogCollapsed ? "点击展开" : "点击收纳",
              isLogCollapsed ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 11 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 62,
                columnNumber: 31
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 11 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 62,
                columnNumber: 60
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
          lineNumber: 51,
          columnNumber: 9
        },
        void 0
      ),
      !isLogCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2.5 text-slate-600 dark:text-slate-300 whitespace-pre-wrap leading-relaxed select-text overflow-x-auto border-t border-slate-250/20 dark:border-slate-800/50 pt-2.5 max-h-[350px] overflow-y-auto animate-fade-in", children: msg.content }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, void 0);
  }
  const isAI = msg.role === "assistant";
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      className: `flex gap-3 max-w-[85%] ${isAI ? "mr-auto" : "ml-auto flex-row-reverse"}`,
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm select-none shadow-sm ${isAI ? "bg-blue-100 text-blue-600" : "bg-slate-900 text-white"}`, children: isAI ? activeEmployee?.avatar : "👤" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5 min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `group relative min-w-0 max-w-full overflow-hidden p-4 rounded-3xl text-xs leading-relaxed shadow-sm ${isAI ? "bg-white text-slate-700 border border-slate-100 rounded-tl-none" : "bg-slate-900 text-white rounded-tr-none"}`, children: [
            msg.content && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: handleCopy,
                className: `absolute top-2 right-2 z-10 p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border shadow-xs ${isAI ? "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-750 dark:text-slate-500" : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-750"}`,
                title: "复制消息内容",
                children: copied ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 11, className: "text-green-500" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 101,
                  columnNumber: 25
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { size: 11 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 101,
                  columnNumber: 74
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 92,
                columnNumber: 13
              },
              void 0
            ),
            isAI ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "markdown-body min-w-0 max-w-full pr-8", children: [
              msg.reasoning_content && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-50 dark:bg-slate-900/60 border border-slate-150/60 dark:border-slate-800/80 rounded-2xl p-3.5 mb-3 text-[11px] text-slate-500 dark:text-slate-400 select-text leading-relaxed font-sans shadow-inner", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    onClick: () => onToggleReasoning(msg.id),
                    className: "flex items-center justify-between font-bold text-slate-400 select-none cursor-pointer hover:text-blue-500 transition-colors",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: msg.isStreaming ? "animate-pulse" : "", children: "🧠" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 114,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                          "思考逻辑链 (",
                          msg.reasoning_content.length,
                          " 字)"
                        ] }, void 0, true, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 115,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 text-[12px] text-slate-400/80", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: isReasoningCollapsed ? "展开" : "折叠" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 118,
                          columnNumber: 23
                        }, void 0),
                        isReasoningCollapsed ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 12 }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 119,
                          columnNumber: 47
                        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 12 }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 119,
                          columnNumber: 76
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 109,
                    columnNumber: 19
                  },
                  void 0
                ),
                !isReasoningCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "whitespace-pre-wrap font-mono text-[10.5px] border-t border-slate-100 dark:border-slate-800/40 pt-2 opacity-85 mt-2 animate-in fade-in slide-in-from-top-1 duration-200", children: msg.reasoning_content }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 123,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 108,
                columnNumber: 17
              }, void 0),
              msg.content ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RichContentRenderer, { content: msg.content }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 130,
                columnNumber: 17
              }, void 0) : msg.isStreaming ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1 text-slate-400", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0ms" } }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 133,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "150ms" } }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 134,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "300ms" } }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 135,
                  columnNumber: 19
                }, void 0),
                "正在检索并深度思考中..."
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 132,
                columnNumber: 17
              }, void 0) : null
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative min-w-0 max-w-full pr-8", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `transition-all duration-300 ${isUserMsgCollapsed ? "max-h-[140px] overflow-hidden" : "pb-6"}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RichContentRenderer, { content: msg.content }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 143,
                columnNumber: 17
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 142,
                columnNumber: 15
              }, void 0),
              isUserMsgCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 147,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex justify-center mt-1.5 ${isUserMsgCollapsed ? "relative z-10" : "border-t border-slate-800/40 pt-2"}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => onToggleUserMessage(msg.id),
                  className: "flex items-center gap-1.5 text-[12px] font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2 py-1 rounded-md border border-slate-700/50 shadow-sm transition-all select-none",
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: isUserMsgCollapsed ? "显示全文" : "收起内容" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 155,
                      columnNumber: 19
                    }, void 0),
                    isUserMsgCollapsed ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 10 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 156,
                      columnNumber: 41
                    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronUp, { size: 10 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 156,
                      columnNumber: 69
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 151,
                  columnNumber: 17
                },
                void 0
              ) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 150,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, void 0),
            msg.attachments && msg.attachments.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 pt-3 border-t border-dashed border-slate-200/50 dark:border-slate-800/30 flex flex-col gap-2 max-w-sm", children: msg.attachments.map((attach) => {
              const isImage = attach.type && attach.type.startsWith("image/");
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "div",
                {
                  className: `flex items-center gap-2.5 p-2 rounded-xl border ${isAI ? "bg-slate-50/60 border-slate-100 dark:bg-slate-950/10 dark:border-slate-800/40" : "bg-slate-800/80 border-slate-700/60"}`,
                  children: [
                    isImage ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: attach.url, target: "_blank", rel: "noopener noreferrer", className: "block shrink-0 group relative rounded-lg overflow-hidden border border-slate-200/50 dark:border-slate-800", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: attach.url, className: "w-10 h-10 object-cover transition-transform group-hover:scale-105", alt: attach.name }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 174,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileDown, { size: 12, className: "text-white" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 176,
                        columnNumber: 27
                      }, void 0) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 175,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 173,
                      columnNumber: 23
                    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-[12px] uppercase shrink-0 ${isAI ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400" : "bg-slate-700 text-slate-300"}`, children: attach.name.split(".").pop()?.toUpperCase() || "FILE" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 180,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0 pr-2", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: `text-[12px] font-bold truncate ${isAI ? "text-slate-700 dark:text-slate-300" : "text-slate-100"}`, children: attach.name }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 185,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[8px] text-slate-400", children: [
                        attach.size ? (attach.size / 1024 / 1024).toFixed(2) : "0.00",
                        " MB"
                      ] }, void 0, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 188,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 184,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "a",
                      {
                        href: attach.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `p-1.5 rounded-lg transition-colors shrink-0 ${isAI ? "hover:bg-slate-100 text-slate-500 hover:text-blue-600 dark:hover:bg-slate-800" : "hover:bg-slate-700 text-slate-400 hover:text-white"}`,
                        title: "下载或预览附件",
                        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileDown, { size: 13 }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 199,
                          columnNumber: 23
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 192,
                        columnNumber: 21
                      },
                      void 0
                    )
                  ]
                },
                attach.id,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 168,
                  columnNumber: 19
                },
                void 0
              );
            }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, void 0),
          isAI && msg.steps && msg.steps.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/50 rounded-xl overflow-hidden max-w-[340px]", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => onToggleSteps(msg.id),
                className: "w-full px-3 py-2 flex justify-between items-center text-[12px] font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100/30 transition-all",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Play, { size: 10, className: "text-blue-500" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 216,
                      columnNumber: 17
                    }, void 0),
                    "云端自主任务编排轨迹"
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 215,
                    columnNumber: 15
                  }, void 0),
                  msg.stepsExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 12 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 219,
                    columnNumber: 36
                  }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 12 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 219,
                    columnNumber: 64
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 211,
                columnNumber: 13
              },
              void 0
            ),
            msg.stepsExpanded && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "px-3 pb-3 pt-1 space-y-2 border-t border-slate-100", children: msg.steps.map((s, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1 py-1 border-b border-slate-100/30 last:border-b-0", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-[12px]", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `w-1.5 h-1.5 rounded-full ${s.status === "success" ? "bg-green-500" : s.status === "running" ? "bg-blue-500 animate-pulse" : s.status === "failed" ? "bg-red-500" : "bg-slate-300"}` }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 228,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: s.status === "success" ? "text-slate-500 line-through" : s.status === "running" ? "text-blue-600 font-semibold" : s.status === "failed" ? "text-red-500 font-medium" : "text-slate-400", children: s.title }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 232,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 227,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${s.status === "success" ? "bg-green-50 text-green-600" : s.status === "running" ? "bg-blue-50 text-blue-600 animate-pulse" : s.status === "failed" ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-400"}`, children: s.status === "success" ? "已完成" : s.status === "running" ? "运行中" : s.status === "failed" ? "已失败" : "排队中" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 240,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 226,
                columnNumber: 21
              }, void 0),
              s.result && s.result.success && s.status === "success" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "pl-3.5 pr-2 py-1.5 bg-white/60 dark:bg-slate-900/60 rounded-lg border border-slate-100/80 dark:border-slate-800/80 my-1 animate-in slide-in-from-top-1 duration-200", children: (() => {
                const data = s.result.data;
                if (!data) return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] text-slate-400", children: "（无返回数据）" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 256,
                  columnNumber: 45
                }, void 0);
                if (s.outputType === "image") {
                  let imgUrl = "";
                  if (typeof data === "string") {
                    imgUrl = data;
                  } else if (data && typeof data === "object") {
                    imgUrl = data.url || data.image || data.img || data.data || "";
                  }
                  if (imgUrl && (imgUrl.startsWith("http") || imgUrl.startsWith("data:"))) {
                    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "scale-90 origin-left mt-0.5 max-w-[200px]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RichContentRenderer, { content: `![${s.title}](${imgUrl})` }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 269,
                      columnNumber: 35
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 268,
                      columnNumber: 33
                    }, void 0);
                  }
                }
                if (s.outputType === "markdown") {
                  let mdContent = "";
                  if (typeof data === "string") {
                    mdContent = data;
                  } else if (data && typeof data === "object") {
                    mdContent = data.markdown || data.content || data.text || JSON.stringify(data, null, 2);
                  }
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-950/20 p-2 rounded-md border border-slate-100/50 dark:border-slate-800/50 mt-1 max-h-[150px] overflow-y-auto font-normal", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RichContentRenderer, { content: mdContent }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 284,
                    columnNumber: 33
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 283,
                    columnNumber: 31
                  }, void 0);
                }
                if (s.outputType === "table") {
                  const sqlRows = data?.result?.results || data?.results || (Array.isArray(data) ? data : null);
                  if (Array.isArray(sqlRows) && sqlRows.length > 0) {
                    const headers = Object.keys(sqlRows[0]);
                    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden max-h-[200px] overflow-y-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-[9px] font-mono text-left", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-slate-50 dark:bg-slate-900 sticky top-0 font-bold text-slate-500", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: headers.map((h) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-2 py-1.5 border-b border-slate-250/20", children: h }, h, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 299,
                        columnNumber: 43
                      }, void 0)) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 297,
                        columnNumber: 39
                      }, void 0) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 296,
                        columnNumber: 37
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y divide-slate-100 dark:divide-slate-900 bg-white dark:bg-slate-950", children: sqlRows.map((row, rIdx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-slate-50/50", children: headers.map((h) => {
                        const cellVal = row[h];
                        const cellStr = cellVal === null ? "NULL" : typeof cellVal === "object" ? JSON.stringify(cellVal) : String(cellVal);
                        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-2 py-1 truncate max-w-[120px]", title: cellStr, children: cellVal === null ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-slate-400 italic", children: "null" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 311,
                          columnNumber: 69
                        }, void 0) : cellStr }, h, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                          lineNumber: 310,
                          columnNumber: 47
                        }, void 0);
                      }) }, rIdx, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 305,
                        columnNumber: 41
                      }, void 0)) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                        lineNumber: 303,
                        columnNumber: 37
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 295,
                      columnNumber: 35
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                      lineNumber: 294,
                      columnNumber: 33
                    }, void 0);
                  }
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] text-slate-400", children: "（SQL 执行成功，但返回的记录集为空）" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 322,
                    columnNumber: 36
                  }, void 0);
                }
                return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("details", { className: "outline-none", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("summary", { className: "text-[9px] text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 select-none font-bold", children: "查看返回负载 (JSON)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 327,
                    columnNumber: 31
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "w-full max-w-full min-w-0 text-[8px] font-mono bg-slate-50 dark:bg-slate-950 p-1.5 rounded border border-slate-100 dark:border-slate-800 mt-1 overflow-x-auto overflow-y-auto max-h-[100px] text-slate-500 whitespace-pre", children: JSON.stringify(data, null, 2) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                    lineNumber: 328,
                    columnNumber: 31
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                  lineNumber: 326,
                  columnNumber: 29
                }, void 0);
              })() }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
                lineNumber: 253,
                columnNumber: 23
              }, void 0)
            ] }, idx, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, void 0)) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
              lineNumber: 223,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
            lineNumber: 210,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
          lineNumber: 84,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-message-item.tsx",
      lineNumber: 76,
      columnNumber: 5
    },
    void 0
  );
}, (prev, next) => {
  return prev.isLogCollapsed === next.isLogCollapsed && prev.isReasoningCollapsed === next.isReasoningCollapsed && prev.isUserMsgCollapsed === next.isUserMsgCollapsed && prev.msg.content === next.msg.content && prev.msg.isStreaming === next.msg.isStreaming && prev.msg.reasoning_content === next.msg.reasoning_content && prev.msg.stepsExpanded === next.msg.stepsExpanded && prev.msg.steps === next.msg.steps && prev.activeEmployee?.id === next.activeEmployee?.id && prev.activeEmployee?.avatar === next.activeEmployee?.avatar;
});
function ChatComposer({
  value,
  attachments = [],
  isLoading = false,
  disabled = false,
  placeholder = "输入多行或 Markdown 消息...",
  onChange,
  onSend,
  onInterrupt,
  onAttachClick,
  onRemoveAttachment
}) {
  const [isInputExpanded, setIsInputExpanded] = reactExports.useState(false);
  const textareaRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!textareaRef.current) return;
    if (isInputExpanded) {
      textareaRef.current.style.height = "350px";
    } else {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
    }
  }, [value, isInputExpanded]);
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && !isLoading) {
        onSend();
      }
    }
  }
  const canSend = value.trim().length > 0 || attachments.length > 0;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 bg-gradient-to-t from-slate-50/70 via-slate-50/20 to-transparent dark:from-slate-950/70 dark:to-transparent shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-4xl mx-auto w-full", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-end mb-2 px-1.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        type: "button",
        onClick: () => setIsInputExpanded(!isInputExpanded),
        className: "px-1.5 py-0.5 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-md transition-all flex items-center justify-center",
        title: isInputExpanded ? "收缩输入框" : "展开输入框查看更多",
        children: isInputExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Minimize2, { size: 11 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
          lineNumber: 93,
          columnNumber: 32
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Maximize2, { size: 11 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
          lineNumber: 93,
          columnNumber: 58
        }, this)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
        lineNumber: 87,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex flex-col gap-2 bg-slate-100/90 dark:bg-slate-850/90 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-transparent transition-all shadow-sm", children: [
      attachments.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2 p-2 bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-200/40 dark:border-slate-850/40 rounded-t-xl", children: attachments.map((file) => {
        const isImage = file.type && file.type.startsWith("image/");
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            className: "group relative flex items-center gap-2 p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm max-w-[150px] truncate",
            children: [
              isImage ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: file.url, className: "w-8 h-8 rounded object-cover", alt: file.name }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-8 h-8 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-[9px] uppercase shrink-0", children: file.name.split(".").pop()?.toUpperCase() || "FILE" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                lineNumber: 114,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0 pr-4", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] font-bold text-slate-700 dark:text-slate-300 truncate", children: file.name }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                  lineNumber: 119,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[8px] text-slate-400", children: [
                  (file.size / 1024 / 1024).toFixed(2),
                  " MB"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                  lineNumber: 120,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                lineNumber: 118,
                columnNumber: 19
              }, this),
              onRemoveAttachment && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => onRemoveAttachment(file.id),
                  className: "absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold shadow opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity",
                  children: "✕"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                  lineNumber: 123,
                  columnNumber: 21
                },
                this
              )
            ]
          },
          file.id,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
            lineNumber: 107,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "textarea",
        {
          ref: textareaRef,
          placeholder,
          value,
          onChange: (e) => onChange(e.target.value),
          onKeyDown: handleKeyDown,
          disabled,
          rows: 1,
          style: {
            minHeight: isInputExpanded ? "350px" : "38px",
            maxHeight: isInputExpanded ? "350px" : "180px"
          },
          className: "flex-1 bg-transparent border-none text-xs text-slate-900 dark:text-slate-100 font-medium focus:ring-0 focus-visible:ring-0 shadow-none px-2 py-1 placeholder-slate-400 dark:placeholder-slate-500 resize-none leading-relaxed transition-all outline-none disabled:opacity-60 disabled:cursor-not-allowed"
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/40 pt-1.5 px-1 bg-transparent", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400", children: "Enter 发送，Shift+Enter 换行" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-mono text-slate-400 mr-1", children: [
            value.length,
            " 字"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
            lineNumber: 158,
            columnNumber: 13
          }, this),
          onAttachClick && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: disabled || isLoading,
              onClick: onAttachClick,
              className: "p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg transition-colors flex items-center justify-center shrink-0 disabled:opacity-40",
              title: "选择/上传附件",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Paperclip, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                lineNumber: 171,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
              lineNumber: 164,
              columnNumber: 15
            },
            this
          ),
          isLoading && onInterrupt ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              onClick: onInterrupt,
              className: "w-8 h-8 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white animate-pulse",
              title: "中断任务/停止生成",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Square, { size: 10, fill: "currentColor" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                lineNumber: 183,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
              lineNumber: 177,
              columnNumber: 15
            },
            this
          ) : isLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: true,
              className: "w-8 h-8 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center bg-slate-100 text-slate-400 dark:bg-slate-800/50",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 12, className: "animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                lineNumber: 191,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
              lineNumber: 186,
              columnNumber: 15
            },
            this
          ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              onClick: onSend,
              disabled: disabled || !canSend,
              className: `w-8 h-8 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center ${canSend ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-100 text-slate-400 dark:bg-slate-800/50"} disabled:opacity-50`,
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
                lineNumber: 204,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
              lineNumber: 194,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ai/ChatComposer.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
const MediaPicker = ({
  onSelect,
  onSelectMultiple,
  allowedTypes = [],
  title = "媒体库",
  isOpen,
  onClose,
  mode = "picker",
  multiple = false
}) => {
  const { hasPermission, loading: loadingPermissions } = useAdminPermissions();
  const canViewMedia = hasPermission(["media.view", "media.manage"]);
  const canManageMedia = hasPermission("media.manage");
  const [activeTab, setActiveTab] = reactExports.useState("library");
  const [items, setItems] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [uploading, setUploading] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [selectedIds, setSelectedIds] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(1);
  const [limit, setLimit] = reactExports.useState(20);
  const [total, setTotal] = reactExports.useState(0);
  const [remoteUrl, setRemoteUrl] = reactExports.useState("");
  const [deleteConfirmId, setDeleteConfirmId] = reactExports.useState(null);
  const fetchMedia = async (p = page) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/v1/media?page=${p}&limit=${limit}`);
      const result = await res.json();
      setItems(result.data || []);
      setTotal(result.total || 0);
    } catch (err) {
      console.error("Failed to fetch media:", err);
    } finally {
      setIsLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (mode === "manager" || mode === "picker" && isOpen) {
      fetchMedia(page);
    }
  }, [mode, isOpen, page]);
  reactExports.useEffect(() => {
    if (isOpen) {
      setSelectedIds([]);
      setSearch("");
    }
  }, [isOpen]);
  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/v1/media/upload", {
        method: "POST",
        body: formData
      });
      const newItem = await res.json();
      if (newItem.id) {
        setItems((prev) => [newItem, ...prev]);
        if (mode === "picker") {
          setSelectedIds((prev) => multiple ? Array.from(/* @__PURE__ */ new Set([...prev, newItem.id])) : [newItem.id]);
          setActiveTab("library");
        } else {
          setActiveTab("library");
        }
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };
  const currentSelectedItems = items.filter((i) => selectedIds.includes(i.id));
  const currentSelectedItem = currentSelectedItems[0];
  const toggleSelectedItem = (id) => {
    setSelectedIds((prev) => {
      if (!multiple) return [id];
      return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "library":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 168,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "搜索文件名...",
                className: "pl-8",
                value: search,
                onChange: (e) => setSearch(e.target.value)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 169,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 167,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-[350px] overflow-y-auto border rounded-xl p-4 bg-slate-50/50", children: isLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-full flex flex-col items-center justify-center text-slate-400 gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "h-8 w-8 animate-spin" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm", children: "拉取文件中..." }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 181,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, void 0) : items.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-full flex flex-col items-center justify-center text-slate-400 gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Library, { className: "h-12 w-12 opacity-20" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 185,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm", children: "暂无媒体文件" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 186,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4", children: items.filter((i) => (i.filename || "").toLowerCase().includes(search.toLowerCase())).filter((i) => {
              if (!allowedTypes || allowedTypes.length === 0) return true;
              return allowedTypes.some((type) => {
                if (type.endsWith("/*")) {
                  const prefix = type.slice(0, -2);
                  return i.mimeType?.startsWith(prefix);
                }
                return i.mimeType === type;
              });
            }).map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "div",
              {
                title: item.filename,
                className: cn(
                  "relative aspect-square border-2 rounded-lg overflow-hidden cursor-pointer transition-all hover:ring-2 hover:ring-blue-500/20 group",
                  selectedIds.includes(item.id) && mode === "picker" ? "border-blue-500 ring-2 ring-blue-500/20 shadow-md" : "border-transparent bg-white shadow-sm"
                ),
                onClick: () => {
                  if (mode === "manager") {
                    window.open(item.url, "_blank");
                  } else {
                    toggleSelectedItem(item.id);
                  }
                },
                children: [
                  item?.mimeType?.startsWith("image/") ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "img",
                    {
                      src: item.url,
                      alt: item.filename,
                      className: "w-full h-full object-cover"
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                      lineNumber: 220,
                      columnNumber: 29
                    },
                    void 0
                  ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-50", children: [
                    (() => {
                      const ext = item.filename ? item.filename.split(".").pop()?.toLowerCase() : "";
                      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold text-blue-600 uppercase", children: ext || "file" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                        lineNumber: 231,
                        columnNumber: 37
                      }, void 0) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                        lineNumber: 230,
                        columnNumber: 35
                      }, void 0);
                    })(),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-500 text-center px-1 truncate w-full", children: item.filename }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                      lineNumber: 235,
                      columnNumber: 31
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                    lineNumber: 226,
                    columnNumber: 29
                  }, void 0),
                  mode === "manager" && canManageMedia && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-1 z-10 duration-200", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-white font-black bg-blue-600/90 px-2 py-1 rounded-full shadow-md backdrop-blur-sm", children: "在新窗口打开" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                    lineNumber: 240,
                    columnNumber: 31
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                    lineNumber: 239,
                    columnNumber: 29
                  }, void 0),
                  selectedIds.includes(item.id) && mode === "picker" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute top-1 right-1 bg-blue-500 text-white rounded-full p-0.5 animate-in zoom-in", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 10 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                    lineNumber: 247,
                    columnNumber: 31
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                    lineNumber: 246,
                    columnNumber: 29
                  }, void 0),
                  mode === "manager" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        setDeleteConfirmId(item.id);
                      },
                      className: "absolute top-1 right-1 z-20 bg-red-500 text-white rounded-full p-1.5 opacity-100 shadow-md hover:bg-red-600 transition-colors",
                      title: "删除附件",
                      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 12 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                        lineNumber: 259,
                        columnNumber: 31
                      }, void 0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                      lineNumber: 251,
                      columnNumber: 29
                    },
                    void 0
                  )
                ]
              },
              item.id,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 204,
                columnNumber: 25
              },
              void 0
            )) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 190,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-between border-t border-slate-100 pt-4 bg-white/50 backdrop-blur-sm sticky bottom-0 z-10 p-2 rounded-b-xl shadow-sm shadow-slate-100/50", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500 font-medium", children: [
                "共 ",
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-blue-600 font-bold", children: total }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                  lineNumber: 269,
                  columnNumber: 25
                }, void 0),
                " 个附件，当前第 ",
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-blue-600 font-bold", children: page }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                  lineNumber: 269,
                  columnNumber: 90
                }, void 0),
                " 页 / 共 ",
                Math.ceil(total / limit) || 1,
                " 页"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 268,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-8 text-xs font-semibold rounded-lg",
                    disabled: page === 1,
                    onClick: () => setPage(page - 1),
                    children: "上一页"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                    lineNumber: 272,
                    columnNumber: 23
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-8 text-xs font-semibold rounded-lg",
                    disabled: page >= Math.ceil(total / limit),
                    onClick: () => setPage(page + 1),
                    children: "下一页"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                    lineNumber: 281,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 271,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 267,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, void 0);
      case "upload":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/30 animate-in zoom-in-95 duration-200 ${!canManageMedia ? "pointer-events-none opacity-70" : ""}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-12 text-center space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4", children: uploading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin", size: 32 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 302,
            columnNumber: 30
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Upload, { size: 32 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 302,
            columnNumber: 79
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 301,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-sm font-bold text-slate-700", children: "将文件拖拽至此处上传" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 304,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-400", children: [
            "支持 ",
            allowedTypes.join(", ") || "常用图片与文档"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 305,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "file",
              id: "tab-upload-input",
              className: "hidden",
              onChange: handleUpload,
              ...allowedTypes.length > 0 ? { accept: allowedTypes.join(",") } : {}
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 306,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              onClick: () => document.getElementById("tab-upload-input")?.click(),
              disabled: uploading || !canManageMedia,
              className: "mt-4",
              children: "选取本地文件"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 313,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 300,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 299,
          columnNumber: 11
        }, void 0);
      case "remote":
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `h-[400px] flex flex-col gap-6 p-8 bg-slate-50/30 border rounded-xl animate-in slide-in-from-right-4 duration-300 ${!canManageMedia ? "pointer-events-none opacity-70" : ""}`, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-slate-700", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 18, className: "text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 328,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm font-bold", children: "远程资源 URL" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 329,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 327,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "https://example.com/image.png",
                value: remoteUrl,
                onChange: (e) => setRemoteUrl(e.target.value),
                className: "bg-white"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 331,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500 italic", children: "请确保链接协议为 HTTPS 且支持跨域访问。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 337,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 326,
            columnNumber: 13
          }, void 0),
          remoteUrl && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 border-4 border-white bg-white shadow-sm rounded-lg overflow-hidden flex flex-col items-center justify-center relative group", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "img",
              {
                src: remoteUrl,
                className: "max-w-full max-h-full object-contain",
                onError: (e) => {
                  e.target.src = "https://placehold.co/400x300?text=Invalid+Image+URL";
                }
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
                lineNumber: 342,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 349,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              disabled: !remoteUrl || uploading || !canManageMedia,
              className: "w-full",
              loading: uploading,
              onClick: async () => {
                setUploading(true);
                try {
                  const res = await fetch("/api/v1/media", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      url: remoteUrl,
                      filename: remoteUrl.split("/").pop() || "remote-file",
                      isRemote: true
                    })
                  });
                  if (!res.ok) throw new Error("Persistence failed");
                  const newItem = await res.json();
                  setItems((prev) => [newItem, ...prev]);
                  setSelectedIds((prev) => multiple ? Array.from(/* @__PURE__ */ new Set([...prev, newItem.id])) : [newItem.id]);
                  setRemoteUrl("");
                  setActiveTab("library");
                } catch (err) {
                  console.error("Failed to save remote URL:", err);
                } finally {
                  setUploading(false);
                }
              },
              children: "确认并存入媒体库"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 353,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 325,
          columnNumber: 11
        }, void 0);
    }
  };
  const content = /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col h-[520px]", children: [
    !loadingPermissions && canViewMedia && !canManageMedia ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800", children: "当前账号仅可查看媒体库，上传、远程入库和删除附件已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
      lineNumber: 392,
      columnNumber: 9
    }, void 0) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-1 p-1 bg-slate-100/80 rounded-lg w-fit mb-6 mx-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => setActiveTab("library"),
          className: cn(
            "px-4 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-2",
            activeTab === "library" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
          ),
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Library, { size: 14 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 406,
              columnNumber: 11
            }, void 0),
            " 附件列表"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 399,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => canManageMedia && setActiveTab("upload"),
          disabled: !canManageMedia,
          className: cn(
            "px-4 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-2",
            activeTab === "upload" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700",
            !canManageMedia ? "cursor-not-allowed opacity-50" : ""
          ),
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Upload, { size: 14 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 417,
              columnNumber: 11
            }, void 0),
            " 本地上传"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 408,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => canManageMedia && setActiveTab("remote"),
          disabled: !canManageMedia,
          className: cn(
            "px-4 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-2",
            activeTab === "remote" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700",
            !canManageMedia ? "cursor-not-allowed opacity-50" : ""
          ),
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 14 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
              lineNumber: 428,
              columnNumber: 11
            }, void 0),
            " 远程地址"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 419,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
      lineNumber: 398,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 overflow-hidden", children: renderTabContent() }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
      lineNumber: 432,
      columnNumber: 7
    }, void 0),
    selectedIds.length > 0 && mode === "picker" && activeTab === "library" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-100 animate-in slide-in-from-bottom-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 overflow-hidden", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-md overflow-hidden bg-white border shrink-0", children: currentSelectedItem?.mimeType?.startsWith("image/") ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: currentSelectedItem.url, className: "w-full h-full object-cover" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 442,
          columnNumber: 17
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(File, { className: "p-2 text-slate-400", size: 40 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 443,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 440,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "truncate", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold text-blue-900 truncate", children: multiple ? `已选 ${currentSelectedItems.length} 个附件` : currentSelectedItem?.filename }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 446,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-blue-500 opacity-70", children: [
            multiple ? currentSelectedItems.slice(0, 2).map((item) => item.filename).join("、") : "托管于 R2 存储引擎",
            multiple && currentSelectedItems.length > 2 ? ` 等 ${currentSelectedItems.length} 个文件` : ""
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
            lineNumber: 449,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 445,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
        lineNumber: 439,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          size: "sm",
          onClick: () => {
            if (multiple) {
              if (onSelectMultiple) {
                onSelectMultiple(currentSelectedItems);
              } else {
                currentSelectedItems.forEach((item) => onSelect?.(item));
              }
            } else if (currentSelectedItem) {
              onSelect?.(currentSelectedItem);
            }
          },
          children: multiple ? `确认选取 (${currentSelectedItems.length})` : "确认选取"
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 455,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
      lineNumber: 438,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
    lineNumber: 390,
    columnNumber: 5
  }, void 0);
  if (mode === "manager") {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between border-b pb-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-black tracking-tight flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Library, { className: "text-blue-500" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 481,
          columnNumber: 13
        }, void 0),
        title
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
        lineNumber: 480,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
        lineNumber: 479,
        columnNumber: 9
      }, void 0),
      content,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        ConfirmDialog,
        {
          open: !!deleteConfirmId,
          onOpenChange: (open) => !open && setDeleteConfirmId(null),
          title: "确认永久删除该附件吗？",
          description: "附件记录及其在 D1/R2 中的关联将尝试移除。此操作不可撤销。",
          onConfirm: () => {
            const id = deleteConfirmId;
            if (!id) return;
            if (!canManageMedia) return;
            fetch(`/api/v1/media/${id}`, { method: "DELETE" }).then((res) => res.ok && setItems((prev) => prev.filter((i) => i.id !== id))).finally(() => setDeleteConfirmId(null));
          },
          onCancel: () => setDeleteConfirmId(null),
          confirmText: "执行删除",
          variant: "destructive"
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
          lineNumber: 486,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
      lineNumber: 478,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose?.(), children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "sm:max-w-3xl max-h-[95vh] overflow-hidden flex flex-col rounded-3xl p-6", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { className: "mb-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-black", children: title }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
        lineNumber: 511,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
        lineNumber: 510,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 overflow-hidden py-2", children: content }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
        lineNumber: 513,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
      lineNumber: 509,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!deleteConfirmId,
        onOpenChange: (open) => !open && setDeleteConfirmId(null),
        title: "确认永久删除该附件吗？",
        description: "附件记录及其在 D1/R2 中的关联将尝试移除。此操作不可撤销。",
        onConfirm: () => {
          const id = deleteConfirmId;
          if (!id) return;
          if (!canManageMedia) return;
          fetch(`/api/v1/media/${id}`, { method: "DELETE" }).then((res) => res.ok && setItems((prev) => prev.filter((i) => i.id !== id))).finally(() => setDeleteConfirmId(null));
        },
        onCancel: () => setDeleteConfirmId(null),
        confirmText: "执行删除",
        variant: "destructive"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
        lineNumber: 517,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MediaPicker.tsx",
    lineNumber: 508,
    columnNumber: 5
  }, void 0);
};
function dataURItoBlob(dataURI) {
  try {
    const parts = dataURI.split(",");
    const byteString = atob(parts[1]);
    const mimeString = parts[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  } catch (e) {
    console.error("[dataURItoBlob] Parse failed:", e);
    return new Blob([], { type: "application/octet-stream" });
  }
}
async function compressImageBlob(blob, maxWidth = 1024, maxHeight = 1024, quality = 0.85) {
  if (!blob.type.startsWith("image/")) return blob;
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      let width = img.width;
      let height = img.height;
      if (width > maxWidth || height > maxHeight) {
        if (width > height) {
          height = Math.round(height * maxWidth / width);
          width = maxWidth;
        } else {
          width = Math.round(width * maxHeight / height);
          height = maxHeight;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((compressedBlob) => {
          resolve(compressedBlob || blob);
        }, "image/jpeg", quality);
      } else {
        resolve(blob);
      }
    };
    img.onerror = () => resolve(blob);
  });
}
async function valueToBlob(val) {
  if (typeof val !== "string") return null;
  if (val.startsWith("data:") && val.includes(";base64,")) {
    try {
      return dataURItoBlob(val);
    } catch {
      return null;
    }
  }
  if (val.startsWith("http://") || val.startsWith("https://")) {
    const looksLikeFile = val.match(/\.(png|jpg|jpeg|webp|gif|pdf|zip|docx?|xlsx?)$/i);
    if (looksLikeFile) {
      try {
        const res = await fetch(val);
        if (res.ok) {
          return await res.blob();
        }
      } catch (e) {
        console.warn("[valueToBlob] Failed to fetch file from URL:", val, e);
      }
    }
  }
  return null;
}
function parseDsmlToolCalls(content) {
  if (!content.includes("<｜｜DSML｜｜tool_calls>")) {
    return null;
  }
  const actionMsgs = [];
  const invokeRegex = /<｜｜DSML｜｜invoke name="([^"]+)">([\s\S]*?)<\/｜｜DSML｜｜invoke>/g;
  let match;
  while ((match = invokeRegex.exec(content)) !== null) {
    const methodName = match[1];
    const innerContent = match[2];
    const params = {};
    const paramRegex = /<｜｜DSML｜｜parameter name="([^"]+)"[^>]*>([\s\S]*?)<\/｜｜DSML｜｜parameter>/g;
    let pMatch;
    while ((pMatch = paramRegex.exec(innerContent)) !== null) {
      const paramName = pMatch[1];
      let paramVal = pMatch[2].trim();
      if (paramVal === "true") {
        paramVal = true;
      } else if (paramVal === "false") {
        paramVal = false;
      } else if (!isNaN(Number(paramVal)) && paramVal !== "") {
        paramVal = Number(paramVal);
      } else if (paramVal.startsWith("{") && paramVal.endsWith("}")) {
        try {
          paramVal = JSON.parse(paramVal);
        } catch (e) {
        }
      }
      params[paramName] = paramVal;
    }
    actionMsgs.push({
      id: `dsml_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      method: methodName,
      params
    });
  }
  return actionMsgs.length > 0 ? actionMsgs : null;
}
async function streamChat({
  employeeId,
  sessionId,
  history,
  isShadowFeedback = false,
  prepareEndpoint,
  preparePayload,
  signal,
  onChunk
}) {
  let aiReplyContent = "";
  let interceptedAction = null;
  let reasoningContent = "";
  const prepRes = await fetch(prepareEndpoint || `/api/v1/agents/${employeeId}/chat/prepare`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: signal || void 0,
    body: JSON.stringify({
      ...preparePayload || {},
      is_shadow_feedback: isShadowFeedback,
      sessionId,
      messages: (() => {
        const listToProcess = isShadowFeedback ? history.slice(-8) : history;
        const result = [];
        for (let i = 0; i < listToProcess.length; i++) {
          const m = listToProcess[i];
          if (m.role === "assistant" && !m.content.trim() && (!m.tool_calls || m.tool_calls.length === 0)) {
            continue;
          }
          if (m.role === "tool") {
            if (!m.tool_call_id) continue;
            const lastAssistant = [...result].reverse().find((msg) => msg.role === "assistant");
            if (!lastAssistant || !lastAssistant.tool_calls || !lastAssistant.tool_calls.some((tc) => tc.id === m.tool_call_id)) {
              continue;
            }
          }
          const base = { role: m.role, content: m.content || "" };
          if (m.reasoning_content) base.reasoning_content = m.reasoning_content;
          if (m.tool_calls) base.tool_calls = m.tool_calls;
          if (m.tool_call_id) base.tool_call_id = m.tool_call_id;
          if (m.name) base.name = m.name;
          if (m.attachments) base.attachments = m.attachments;
          result.push(base);
        }
        return result;
      })()
    })
  });
  const prepResult = await prepRes.json().catch(() => ({ success: false, error: "准备大模型调用失败", data: null }));
  if (!prepRes.ok || !prepResult.success) {
    throw new Error(prepResult.error || "准备大模型调用失败");
  }
  const { url, headers, body, providerType, activeSkills, collections } = prepResult.data || {};
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    signal
  });
  if (!response.ok || !response.body) {
    let errorMsg = `HTTP 异常: ${response.status}`;
    try {
      const errBody = await response.json();
      errorMsg = errBody.message || errBody.error || errorMsg;
    } catch (e) {
    }
    throw new Error(errorMsg);
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  const toolCallsMap = /* @__PURE__ */ new Map();
  let hasToolCall = false;
  const processLine = (line) => {
    if (!line.trim()) return;
    if (providerType === "workers-ai") {
      try {
        const parsed = JSON.parse(line);
        const content = parsed.response || "";
        if (content) {
          aiReplyContent += content;
          onChunk({ content });
        }
      } catch (e) {
      }
      return;
    }
    if (line.startsWith("data:") || line.startsWith("{")) {
      const dataStr = line.replace(/^data:\s*/, "").trim();
      if (!dataStr || dataStr === "[DONE]") return;
      try {
        const parsed = JSON.parse(dataStr);
        const toolCalls = parsed.choices?.[0]?.delta?.tool_calls;
        if (toolCalls && toolCalls.length > 0) {
          hasToolCall = true;
          for (const tc of toolCalls) {
            const index = tc.index ?? 0;
            if (!toolCallsMap.has(index)) {
              toolCallsMap.set(index, { id: "", name: "", arguments: "" });
            }
            const acc = toolCallsMap.get(index);
            if (tc.id) acc.id = tc.id;
            if (tc.function?.name) acc.name = tc.function.name;
            if (tc.function?.arguments) acc.arguments += tc.function.arguments;
          }
          return;
        }
        const reasoning = parsed.choices?.[0]?.delta?.reasoning_content || "";
        const content = parsed.choices?.[0]?.delta?.content || "";
        if (reasoning) {
          reasoningContent += reasoning;
          onChunk({ reasoning });
        }
        if (content) {
          aiReplyContent += content;
          onChunk({ content });
        }
      } catch (e) {
      }
    }
  };
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";
    for (const line of lines) {
      processLine(line);
    }
  }
  if (buffer.trim()) {
    processLine(buffer);
  }
  if (hasToolCall && toolCallsMap.size > 0) {
    const actionMsgs = [];
    for (const acc of toolCallsMap.values()) {
      if (!acc.name) continue;
      let params = {};
      try {
        if (acc.arguments) params = JSON.parse(acc.arguments);
      } catch (e) {
        params = { _raw_args: acc.arguments, _parse_error: true };
      }
      let originalSlug = acc.name;
      if (typeof fromAiSafeName === "function") {
        originalSlug = fromAiSafeName(acc.name);
      }
      const matchedSkill = (activeSkills || []).find((s) => s.slug === originalSlug);
      let method = originalSlug;
      if (!originalSlug.startsWith("system/") && matchedSkill) {
        method = matchedSkill.slug;
      }
      actionMsgs.push({
        id: acc.id || `call_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        method,
        params
      });
    }
    interceptedAction = actionMsgs;
  }
  let cleanedReplyContent = aiReplyContent;
  if (!interceptedAction) {
    const dsmlActions = parseDsmlToolCalls(aiReplyContent);
    if (dsmlActions) {
      interceptedAction = dsmlActions.map((act) => {
        let originalSlug = act.method;
        if (typeof fromAiSafeName === "function") {
          originalSlug = fromAiSafeName(act.method);
        }
        const matchedSkill = (activeSkills || []).find((s) => s.slug === originalSlug);
        let method = originalSlug;
        if (!originalSlug.startsWith("system/") && matchedSkill) {
          method = matchedSkill.slug;
        }
        return {
          id: act.id,
          method,
          params: act.params
        };
      });
    }
  }
  if (cleanedReplyContent.includes("<｜｜DSML｜｜tool_calls>")) {
    cleanedReplyContent = cleanedReplyContent.replace(/<｜｜DSML｜｜tool_calls>[\s\S]*?(<\/｜｜DSML｜｜tool_calls>|$)/g, "").trim();
  }
  return { aiReplyContent: cleanedReplyContent, reasoningContent, interceptedAction, activeSkills, collections };
}
const ACTION_VERB_ALIASES = {
  get: "GET",
  list: "GET",
  fetch: "GET",
  search: "GET",
  query: "GET",
  find: "GET",
  create: "POST",
  add: "POST",
  insert: "POST",
  save: "POST",
  publish: "POST",
  generate: "POST",
  update: "PATCH",
  edit: "PATCH",
  patch: "PATCH",
  delete: "DELETE",
  remove: "DELETE"
};
function singularizeResourceName(input) {
  if (!input) return "";
  if (input.endsWith("ies")) return `${input.slice(0, -3)}y`;
  if (input.endsWith("ses")) return input.slice(0, -2);
  if (input.endsWith("s") && !input.endsWith("ss")) return input.slice(0, -1);
  return input;
}
function normalizeResourceToken(input) {
  return singularizeResourceName(
    String(input || "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")
  );
}
function normalizeEntityMutationPayload(pathValue, methodValue, rawParams) {
  const params = rawParams && typeof rawParams === "object" ? { ...rawParams } : {};
  const isEntityMutation = pathValue.startsWith("/api/v1/entities/") && ["POST", "PATCH", "DELETE"].includes(String(methodValue || "").toUpperCase());
  if (!isEntityMutation) {
    return params;
  }
  const nestedPayload = params.data && typeof params.data === "object" && !Array.isArray(params.data) && params.data || params.payload && typeof params.payload === "object" && !Array.isArray(params.payload) && params.payload || params.body && typeof params.body === "object" && !Array.isArray(params.body) && params.body || params.dataJson && typeof params.dataJson === "object" && !Array.isArray(params.dataJson) && params.dataJson || null;
  const normalized = nestedPayload ? { ...nestedPayload } : { ...params };
  delete normalized.data;
  delete normalized.payload;
  delete normalized.body;
  delete normalized.params;
  delete normalized.collectionSlug;
  delete normalized.collection;
  delete normalized.method;
  delete normalized.format;
  delete normalized.path;
  return normalized;
}
function buildCollectionAliases(collection) {
  const base = /* @__PURE__ */ new Set();
  const slug = normalizeResourceToken(collection.slug);
  const modelSlug = normalizeResourceToken(collection.modelSlug || "");
  const name = normalizeResourceToken(collection.name || "");
  [slug, singularizeResourceName(slug), modelSlug, singularizeResourceName(modelSlug), name, singularizeResourceName(name)].filter(Boolean).forEach((v) => base.add(v));
  if (slug.endsWith("_category") || modelSlug.endsWith("_category")) {
    const root = (slug || modelSlug).replace(/_category$/, "");
    if (root) {
      base.add(root);
      base.add(`${root}_category`);
      base.add(`${root}_categories`);
    }
  }
  return Array.from(base);
}
function resolveCollectionByHint(collections, hint) {
  const normalizedHint = normalizeResourceToken(String(hint || ""));
  if (!normalizedHint || /^\d+$/.test(normalizedHint)) {
    return null;
  }
  return collections.find(
    (collection) => buildCollectionAliases(collection).includes(normalizedHint)
  ) || null;
}
function resolveCollectionFromEntityPath(pathValue, collections) {
  const match = String(pathValue || "").match(/^\/api\/v1\/entities\/([^/?#]+)(?:\/|$)/);
  if (!match) {
    return null;
  }
  return resolveCollectionByHint(collections, match[1]);
}
function guessPrimaryContentCollection(params, collections) {
  const payload = params?.data && typeof params.data === "object" && !Array.isArray(params.data) && params.data || params;
  const looksLikeContentWrite = ["title", "content", "body", "html", "summary", "excerpt", "seoTitle", "seoDescription"].some((key) => payload && Object.prototype.hasOwnProperty.call(payload, key));
  if (!looksLikeContentWrite) {
    return null;
  }
  return collections.find((collection) => {
    const aliases = buildCollectionAliases(collection);
    return aliases.some((alias) => ["article", "articles", "post", "posts"].includes(alias));
  }) || null;
}
function resolveContentManagerCollection(params, collections = []) {
  const normalizedParams = params && typeof params === "object" ? params : {};
  const explicitHints = [
    normalizedParams.slug,
    normalizedParams.collectionSlug,
    normalizedParams.collection,
    normalizedParams.resource,
    normalizedParams.resourceSlug,
    normalizedParams.entityType,
    normalizedParams.model,
    normalizedParams.modelSlug,
    normalizedParams.targetCollectionSlug,
    normalizedParams.relationCollectionSlug
  ];
  const pathCollection = resolveCollectionFromEntityPath(String(normalizedParams.path || ""), collections);
  if (pathCollection) {
    return {
      slug: pathCollection.slug,
      source: "path"
    };
  }
  for (const hint of explicitHints) {
    const matched = resolveCollectionByHint(collections, hint);
    if (matched) {
      return {
        slug: matched.slug,
        source: "hint"
      };
    }
  }
  const inferredContentCollection = guessPrimaryContentCollection(normalizedParams, collections);
  if (inferredContentCollection) {
    return {
      slug: inferredContentCollection.slug,
      source: "content_like"
    };
  }
  if (collections.length === 1) {
    return {
      slug: collections[0].slug,
      source: "single_collection"
    };
  }
  return null;
}
function buildAvailableSkillCatalog(skillMarketSkills = [], activeSkills = []) {
  const merged = /* @__PURE__ */ new Map();
  [...skillMarketSkills, ...activeSkills].forEach((skill) => {
    const slug = String(skill?.slug || "").trim();
    if (!slug) return;
    merged.set(slug, {
      ...merged.get(slug) || {},
      ...skill,
      slug
    });
  });
  return Array.from(merged.values());
}
function normalizeBuiltinToolAlias(rawMethod, rawParams, collections = [], availableSkills = []) {
  const params = rawParams && typeof rawParams === "object" ? { ...rawParams } : {};
  const normalizedMethod = String(rawMethod || "").toLowerCase().trim();
  const contentManagerAvailable = availableSkills.some((skill) => skill.slug === "content_manager");
  const normalizedContentAction = normalizeContentManagerAlias(rawMethod, params, collections);
  if (normalizedContentAction) {
    return normalizedContentAction;
  }
  if (!contentManagerAvailable) {
    return null;
  }
  const directPath = typeof params.path === "string" ? params.path.trim() : "";
  const hasDiscoveryPathHint = directPath.startsWith("/api/v1/p/") || Object.values(params).some(
    (value) => typeof value === "string" && (value.includes("/api/v1/p/schema/all") || value.includes("/api/v1/p/data-contract/all") || value.includes("/api/v1/p/languages"))
  );
  const hasCollectionHint = Boolean(resolveContentManagerCollection(params, collections));
  const hasCollectionKeys = ["slug", "collectionSlug", "collection", "resource", "resourceSlug", "targetCollectionSlug"].some((key) => params[key] !== void 0 && params[key] !== null && String(params[key]).trim() !== "");
  const looksLikeBuiltinContentAlias = normalizedMethod.includes("content") || normalizedMethod.includes("entity") || normalizedMethod.includes("crud") || normalizedMethod.includes("schema") || normalizedMethod.includes("contract") || normalizedMethod.includes("language");
  if (hasDiscoveryPathHint || hasCollectionHint || hasCollectionKeys || looksLikeBuiltinContentAlias) {
    return {
      method: "content_manager",
      params
    };
  }
  return null;
}
function normalizeContentManagerAlias(rawMethod, rawParams, collections = []) {
  const normalizedMethod = String(rawMethod || "").toLowerCase();
  const params = rawParams && typeof rawParams === "object" ? { ...rawParams } : {};
  const directPath = typeof params.path === "string" ? params.path.trim() : "";
  if (directPath.startsWith("/api/v1/")) {
    return {
      method: "content_manager",
      params: {
        ...params,
        path: directPath,
        method: String(params.method || "GET").toUpperCase(),
        format: params.format || "JSON"
      }
    };
  }
  const match = normalizedMethod.match(/^([a-z]+)[_\/]([a-z0-9_]+)$/);
  if (!match) return null;
  const [, rawVerb, rawResource] = match;
  const mappedHttpMethod = ACTION_VERB_ALIASES[rawVerb];
  if (!mappedHttpMethod) return null;
  const normalizedResource = normalizeResourceToken(rawResource);
  const matchedCollection = resolveCollectionByHint(collections, normalizedResource);
  if (!matchedCollection) return null;
  const payload = {
    path: `/api/v1/entities/${matchedCollection.slug}`,
    method: mappedHttpMethod,
    format: "JSON"
  };
  if (mappedHttpMethod === "GET") {
    const searchKeyword = params.search || params.keyword || params.query || params.name || params.title || "";
    if (searchKeyword && rawVerb !== "list" && rawVerb !== "get" && rawVerb !== "fetch") {
      payload.search = searchKeyword;
    }
    if (params.id !== void 0 && params.id !== null && params.id !== "") {
      payload.path = `/api/v1/entities/${matchedCollection.slug}/${params.id}`;
    }
  } else if ((mappedHttpMethod === "PATCH" || mappedHttpMethod === "DELETE") && params.id !== void 0 && params.id !== null && params.id !== "") {
    payload.path = `/api/v1/entities/${matchedCollection.slug}/${params.id}`;
  }
  const cleanedParams = { ...params };
  delete cleanedParams.path;
  delete cleanedParams.method;
  delete cleanedParams.format;
  if (mappedHttpMethod === "GET" && rawVerb !== "list" && rawVerb !== "get" && rawVerb !== "fetch") {
    delete cleanedParams.search;
    delete cleanedParams.keyword;
    delete cleanedParams.query;
    delete cleanedParams.name;
    delete cleanedParams.title;
  }
  return {
    method: "content_manager",
    params: {
      ...payload,
      ...cleanedParams
    }
  };
}
async function executeToolCall({
  act,
  idx,
  employee,
  skillMarketSkills,
  activeSkills = [],
  collections = [],
  currentHistory,
  requestUserConfirmation,
  signal,
  onStepUpdate
}) {
  let methodStr = act.method || "";
  if (isAiSafeName(methodStr)) {
    methodStr = fromAiSafeName(methodStr);
  }
  const availableSkills = buildAvailableSkillCatalog(skillMarketSkills, activeSkills);
  const normalizedBuiltinAlias = normalizeBuiltinToolAlias(
    methodStr,
    act.params,
    collections,
    availableSkills
  );
  if (normalizedBuiltinAlias) {
    methodStr = normalizedBuiltinAlias.method;
    act.params = normalizedBuiltinAlias.params;
  }
  let proxyUrl = "";
  let systemFeedbackName = "";
  let requestPayload = {};
  let useAgentActionGateway = false;
  let unresolvedCollectionReason = "";
  const parts = methodStr.split("/");
  let targetSlug = parts[0];
  let targetSkill = availableSkills.find((item) => item.slug === targetSlug);
  const directInternalPath = typeof act.params?.path === "string" ? String(act.params.path).trim() : "";
  const HARD_LOCKED_INTERNAL_PREFIXES = [
    "/api/v1/users",
    "/api/v1/rbac/permissions",
    "/api/v1/rbac/roles",
    "/api/v1/rbac/admins",
    "/api/v1/rbac/site-access",
    "/api/v1/settings/ai_config",
    "/api/v1/settings/ai_gateways",
    "/api/v1/agents"
  ];
  const isAllowedInternalTool = targetSlug === "web_search" || directInternalPath === "/api/v1/ai/search";
  const isHardLockedSystemAction = !methodStr.startsWith("system/") && !isAllowedInternalTool && HARD_LOCKED_INTERNAL_PREFIXES.some((prefix) => directInternalPath.startsWith(prefix));
  let pathValue = "";
  let methodValue = "POST";
  let formatValue = "JSON";
  if (targetSkill && !methodStr.startsWith("system/")) {
    const endpoints = (() => {
      if (Array.isArray(targetSkill.endpoints)) return targetSkill.endpoints;
      if (typeof targetSkill.endpoints === "string") {
        try {
          return JSON.parse(targetSkill.endpoints);
        } catch (e) {
        }
      }
      return [];
    })();
    if (act.params && typeof act.params === "object" && "path" in act.params && act.params.path) {
      pathValue = String(act.params.path).trim();
      methodValue = String(act.params.method || "").toUpperCase();
      const matchedEp = endpoints.find((ep) => ep.path === act.params.path);
      formatValue = act.params.format || matchedEp?.format || endpoints[0]?.format || "JSON";
      if (!methodValue) {
        methodValue = matchedEp?.method || endpoints[0]?.method || "POST";
      }
      if (act.params.params && typeof act.params.params === "object") {
        act.params = { ...act.params.params };
      } else {
        const cleanParams = { ...act.params };
        delete cleanParams.path;
        delete cleanParams.method;
        delete cleanParams.format;
        act.params = cleanParams;
      }
    } else {
      let bestEndpoint = endpoints[0] || null;
      if (endpoints.length > 1 && act.params) {
        let maxMatchCount = -1;
        for (const ep of endpoints) {
          const placeholders = /* @__PURE__ */ new Set();
          const pathMatches = (ep.path || "").match(/\{\{([^}]+)\}\}/g);
          if (pathMatches) {
            pathMatches.forEach((m) => placeholders.add(m.slice(2, -2).trim()));
          }
          const descMatches = (ep.description_example || "").match(/\{\{([^}]+)\}\}/g);
          if (descMatches) {
            descMatches.forEach((m) => placeholders.add(m.slice(2, -2).trim()));
          }
          let matchCount = 0;
          placeholders.forEach((p) => {
            if (act.params[p] !== void 0 && act.params[p] !== null) {
              matchCount++;
            }
          });
          if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            bestEndpoint = ep;
          }
        }
      }
      if (bestEndpoint) {
        pathValue = bestEndpoint.path || "";
        methodValue = bestEndpoint.method || "POST";
        formatValue = bestEndpoint.format || "JSON";
        if (pathValue.includes("{{") && act.params) {
          Object.keys(act.params).forEach((k) => {
            const val = act.params[k] !== void 0 && act.params[k] !== null ? String(act.params[k]) : "";
            pathValue = pathValue.replace(new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}`, "g"), val);
          });
        }
      }
    }
  }
  if (!isHardLockedSystemAction && !targetSkill && !methodStr.startsWith("system/") && act.params && typeof act.params.path === "string" && act.params.path.startsWith("/api/v1")) {
    pathValue = act.params.path;
    methodValue = String(act.params.method || "GET").toUpperCase();
    formatValue = act.params.format || "JSON";
    if (act.params.params && typeof act.params.params === "object") {
      act.params = { ...act.params.params };
    } else {
      const _cleanP = { ...act.params };
      delete _cleanP.path;
      delete _cleanP.method;
      delete _cleanP.format;
      act.params = _cleanP;
    }
  }
  if (!targetSkill && targetSlug === "db_admin" && !pathValue) {
    pathValue = "/api/v1/db-admin/execute";
    methodValue = "POST";
    formatValue = "JSON";
  } else if (!targetSkill && targetSlug === "web_search") {
    pathValue = "/api/v1/ai/search";
    methodValue = "POST";
    formatValue = "JSON";
    if (act.params) {
      const clean = { ...act.params };
      delete clean.path;
      delete clean.method;
      delete clean.format;
      if (clean.params && typeof clean.params === "object") {
        act.params = { ...clean.params };
      } else {
        act.params = clean;
      }
    }
  } else if (!isHardLockedSystemAction && !targetSkill && targetSlug === "content_manager") {
    const pathParam = act.params?.path;
    if (typeof pathParam === "string" && pathParam.startsWith("/api/v1")) {
      pathValue = pathParam;
      methodValue = String(act.params?.method || "GET").toUpperCase();
      const pathMatch = pathValue.match(/^\/api\/v1\/entities\/(\d+)$/);
      if (pathMatch) {
        const matchedCategoryId = parseInt(pathMatch[1], 10);
        const resolvedTarget = resolveContentManagerCollection(act.params, collections);
        if (resolvedTarget) {
          console.warn(`🤖 [content_manager 路径自愈] 检测到路径包含数字 ID "${pathValue}"，已根据当前参数修正到集合 "${resolvedTarget.slug}"`);
          pathValue = `/api/v1/entities/${resolvedTarget.slug}`;
        } else {
          unresolvedCollectionReason = `content_manager 收到了数字实体路径 "${pathValue}"，但无法从当前参数中解析真实 collectionSlug。请先通过 /api/v1/p/data-contract/all 或当前可用 collections 确认目标集合后再调用。`;
          pathValue = "";
        }
        if (resolvedTarget && act.params) {
          const dataObj = act.params.data || act.params;
          if (dataObj && typeof dataObj === "object") {
            const catKey = Object.keys(dataObj).find((k) => ["category", "categoryId", "taxonomy_ids", "taxonomyIds", "category_id"].includes(k));
            if (catKey) {
              console.log(`🤖 [content_manager 路径自愈] 将 category 属性 "${catKey}" 修正为分类 ID: ${matchedCategoryId}`);
              dataObj[catKey] = matchedCategoryId;
            }
          }
        }
      }
    } else {
      const keys = act.params ? Object.keys(act.params) : [];
      const isSchemaAll = keys.some((k) => String(act.params[k] || "").includes("schema/all")) || act.method && act.method.includes("schema");
      const isDataContractAll = keys.some((k) => String(act.params[k] || "").includes("data-contract/all")) || act.method && act.method.includes("data-contract");
      const isLanguages = keys.some((k) => String(act.params[k] || "").includes("/languages")) || act.method && act.method.includes("language");
      if (isSchemaAll) {
        pathValue = "/api/v1/p/schema/all";
        methodValue = "GET";
      } else if (isDataContractAll) {
        pathValue = "/api/v1/p/data-contract/all";
        methodValue = "GET";
      } else if (isLanguages) {
        pathValue = "/api/v1/p/languages";
        methodValue = "GET";
      } else {
        const resolvedTarget = resolveContentManagerCollection(act.params, collections);
        let finalSlug = resolvedTarget?.slug || "";
        let matchedCategoryId = null;
        const rawCollectionHint = act.params?.slug || act.params?.collectionSlug || act.params?.collection;
        if (rawCollectionHint && (!isNaN(Number(rawCollectionHint)) || String(rawCollectionHint).match(/^\d+$/))) {
          matchedCategoryId = parseInt(String(rawCollectionHint), 10);
          if (resolvedTarget) {
            console.warn(`🤖 [content_manager 集合名自愈] 检测到集合 Slug 错误地填为了数字 ID "${rawCollectionHint}"，已修正为 "${resolvedTarget.slug}"`);
            finalSlug = resolvedTarget.slug;
          } else {
            unresolvedCollectionReason = `content_manager 收到了数字 collection 标识 "${rawCollectionHint}"，但无法推断真实集合，已拒绝自动回退到默认文章集合。请显式提供 collectionSlug/path。`;
            finalSlug = "";
          }
          if (resolvedTarget && act.params) {
            const dataObj = act.params.data || act.params;
            if (dataObj && typeof dataObj === "object") {
              const catKey = Object.keys(dataObj).find((k) => ["category", "categoryId", "taxonomy_ids", "taxonomyIds", "category_id"].includes(k));
              if (catKey) {
                console.log(`🤖 [content_manager 集合名自愈] 将 category 属性 "${catKey}" 修正为物理分类 ID: ${matchedCategoryId}`);
                dataObj[catKey] = matchedCategoryId;
              }
            }
          }
        }
        if (!finalSlug && !unresolvedCollectionReason) {
          unresolvedCollectionReason = `content_manager 未能从当前参数中解析真实集合。当前已不再默认回退到 "articles"，以避免把分类/产品等请求误路由到文章集合。请显式提供 collectionSlug、collection 或 path。`;
        }
        const requestedMethod = String(act.params?.method || "").toUpperCase();
        const useBatchSave = Boolean(act.params?.locale || act.params?.dataJson || act.params?.items || act.params?.batch);
        const itemId = act.params?.id || act.params?.entityId || act.params?.recordId;
        if (!finalSlug) {
          pathValue = "";
          methodValue = requestedMethod || "GET";
        } else if (useBatchSave) {
          pathValue = `/api/v1/entities/${finalSlug}/batch-save`;
          methodValue = "POST";
        } else if (requestedMethod === "POST") {
          pathValue = `/api/v1/entities/${finalSlug}`;
          methodValue = "POST";
        } else if (requestedMethod === "PATCH" && itemId) {
          pathValue = `/api/v1/entities/${finalSlug}/${itemId}`;
          methodValue = "PATCH";
        } else if (requestedMethod === "DELETE" && itemId) {
          pathValue = `/api/v1/entities/${finalSlug}/${itemId}`;
          methodValue = "DELETE";
        } else if (requestedMethod === "GET" && itemId) {
          pathValue = `/api/v1/entities/${finalSlug}/${itemId}`;
          methodValue = "GET";
        } else {
          pathValue = `/api/v1/entities/${finalSlug}`;
          methodValue = requestedMethod || "GET";
        }
      }
    }
    formatValue = "JSON";
    if (act.params) {
      const clean = { ...act.params };
      delete clean.path;
      delete clean.method;
      delete clean.format;
      if (clean.params && typeof clean.params === "object") {
        act.params = { ...clean.params };
      } else {
        act.params = clean;
      }
    }
  }
  if (act.params && typeof act.params === "object") {
    const currentAttachments = [];
    const seenFileIds = /* @__PURE__ */ new Set();
    currentHistory.forEach((m) => {
      if (m.role === "user" && m.attachments) {
        const list = typeof m.attachments === "string" ? JSON.parse(m.attachments) : m.attachments;
        if (Array.isArray(list)) {
          list.forEach((file) => {
            if (file && file.id && !seenFileIds.has(String(file.id))) {
              seenFileIds.add(String(file.id));
              currentAttachments.push(file);
            }
          });
        }
      }
    });
    if (currentAttachments.length > 0) {
      let hasAnyPlaceholder = false;
      Object.keys(act.params).forEach((k) => {
        const val = String(act.params[k] || "");
        currentAttachments.forEach((attach, idx2) => {
          const fileIndex = idx2 + 1;
          const placeholders = [
            `{{file_${attach.id}.url}}`,
            `{{file_${attach.id}}}`,
            `{{${attach.id}.url}}`,
            `{{${attach.id}}}`,
            `{{file_${fileIndex}.url}}`,
            `{{file_${fileIndex}}}`,
            `{{${fileIndex}.url}}`,
            `{{${fileIndex}}}`
          ];
          if (placeholders.some((p) => val.includes(p)) || attach.url && val.includes(attach.url)) {
            hasAnyPlaceholder = true;
          }
        });
      });
      if (!hasAnyPlaceholder) {
        const targetKey = Object.keys(act.params).find(
          (k) => ["prompt", "content", "text", "q", "query", "url", "image", "imageUrl", "file", "fileUrl", "documentUrl", "attachmentUrl"].includes(k.toLowerCase())
        );
        if (targetKey && typeof act.params[targetKey] === "string") {
          const originalVal = act.params[targetKey];
          act.params[targetKey] = `${originalVal} 附件链接：{{file_1.url}}`;
          console.log(`💡 [Auto Interpolation] Smartly appended file placeholder to param "${targetKey}"`);
        }
      }
    }
    if (currentAttachments.length > 0) {
      Object.keys(act.params).forEach((k) => {
        let val = act.params[k];
        if (typeof val === "string") {
          currentAttachments.forEach((attach, idx2) => {
            const fileIndex = idx2 + 1;
            const possiblePlaceholders = [
              `{{file_${attach.id}.url}}`,
              `{{file_${attach.id}}}`,
              `{{${attach.id}.url}}`,
              `{{${attach.id}}}`,
              `{{file_${fileIndex}.url}}`,
              `{{file_${fileIndex}}}`,
              `{{${fileIndex}.url}}`,
              `{{${fileIndex}}}`
            ];
            let downloadUrl = attach.url || "";
            if (downloadUrl.startsWith("/")) {
              downloadUrl = `${window.location.origin}${downloadUrl}`;
            }
            possiblePlaceholders.forEach((placeholder) => {
              if (val.includes(placeholder)) {
                const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
                val = val.replace(regex, downloadUrl);
              }
            });
          });
          act.params[k] = val;
        }
      });
      if (pathValue && typeof pathValue === "string") {
        currentAttachments.forEach((attach, idx2) => {
          const fileIndex = idx2 + 1;
          const possiblePlaceholders = [
            `{{file_${attach.id}.url}}`,
            `{{file_${attach.id}}}`,
            `{{${attach.id}.url}}`,
            `{{${attach.id}}}`,
            `{{file_${fileIndex}.url}}`,
            `{{file_${fileIndex}}}`,
            `{{${fileIndex}.url}}`,
            `{{${fileIndex}}}`
          ];
          let downloadUrl = attach.url || "";
          if (downloadUrl.startsWith("/")) {
            downloadUrl = `${window.location.origin}${downloadUrl}`;
          }
          possiblePlaceholders.forEach((placeholder) => {
            if (pathValue.includes(placeholder)) {
              const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
              pathValue = pathValue.replace(regex, downloadUrl);
            }
          });
        });
      }
    }
  }
  if (act.params && typeof act.params === "object" && pathValue) {
    act.params = normalizeEntityMutationPayload(pathValue, methodValue, act.params);
  }
  if (typeof pathValue === "string" && pathValue.includes("{{")) {
    const collectionHints = collections.slice(0, 20).map((c) => `${c.slug}(${c.name})`).join(", ");
    unresolvedCollectionReason = `检测到未替换的内部路径占位符: ${pathValue}。禁止直接请求包含 {{...}} 的 path。 你必须先用真实 collectionSlug 重建路径，例如 /api/v1/entities/case_study；若不确定字段与枚举选项，请先调用 /api/v1/p/schema/case_study 或 /api/v1/p/schema/all。 当前可用 collections: ${collectionHints || "无"}`;
    pathValue = "";
  }
  if (methodValue === "GET" && act.params) {
    const isExplicitList = act.params.action === "list" || act.params.action === "get" || act.params.action === "find";
    const isQueryDataOnly = act.params.data && typeof act.params.data === "object" && Object.keys(act.params.data).every((k) => ["page", "pageSize", "search", "limit", "offset"].includes(k));
    const hasWritePayload = !isExplicitList && !isQueryDataOnly && (typeof act.params.content === "string" && act.params.content.length > 100 || typeof act.params.body === "string" && act.params.body.length > 100 || typeof act.params.text === "string" && act.params.text.length > 100 || typeof act.params.html === "string" && act.params.html.length > 100 || act.params.dataJson || act.params.items || act.params.batch || act.params.title && (act.params.content || act.params.body || act.params.data) || act.params.name && (act.params.description || act.params.content || act.params.data) || act.params.data && typeof act.params.data === "object");
    if (hasWritePayload) {
      console.warn(`⚠️ [HTTP 431 防熔断自愈] 检测到 GET 请求中包含写入载荷，强制将 method 提升为 POST`);
      methodValue = "POST";
      if (pathValue.startsWith("/api/v1/entities/") && !pathValue.endsWith("/batch-save")) {
        const parts2 = pathValue.split("/");
        const isBaseEntities = parts2.length === 5;
        if (isBaseEntities) {
          const finalSlug = parts2[4];
          const useBatchSave = act.params.locale || act.params.dataJson || act.params.items || act.params.batch;
          pathValue = useBatchSave ? `/api/v1/entities/${finalSlug}/batch-save` : `/api/v1/entities/${finalSlug}`;
          console.log(`🤖 [HTTP 431 路径自愈] 自动重定向物理路径为 ${pathValue}`);
        }
      }
    }
  }
  const isInternalApi = pathValue && pathValue.startsWith("/api/v1");
  const isPromptOnly = act.params && "prompt" in act.params && Object.keys(act.params).length === 1;
  const unresolvedUnknownTool = !isHardLockedSystemAction && !methodStr.startsWith("system/") && !targetSkill && !isInternalApi && !["db_admin", "web_search", "content_manager"].includes(targetSlug);
  if (methodStr.startsWith("system/")) {
    const subparts = methodStr.split("/");
    const submodelId = subparts[subparts.length - 1];
    const providerId = subparts.length > 2 ? subparts[1] : void 0;
    proxyUrl = `/api/v1/ai/image`;
    requestPayload = { ...act.params || {}, modelId: submodelId, providerId };
    systemFeedbackName = `[系统内建扩展模型 ${submodelId}]`;
  } else if (isInternalApi) {
    proxyUrl = `/api/v1/agents/${encodeURIComponent(employee.id)}/actions/execute`;
    requestPayload = {
      path: pathValue,
      method: methodValue,
      format: formatValue,
      params: act.params || {}
    };
    useAgentActionGateway = true;
    systemFeedbackName = `内部系统集成 [${targetSlug}]`;
  } else if (isPromptOnly && !targetSkill) {
    proxyUrl = `/api/v1/ai/image`;
    const imageModelId = employee?.loadedModels?.find((m) => m.includes("imagen") || m.includes("sd") || m.includes("flux")) || "imagen-3.0-generate-002";
    requestPayload = { ...act.params || {}, modelId: imageModelId };
    systemFeedbackName = `[系统自适应生图补正]`;
  } else {
    proxyUrl = `/api/v1/plugins/proxy/ai-skill-market/execute`;
    systemFeedbackName = `自动化物理技能 [${targetSlug}]`;
  }
  if (unresolvedUnknownTool) {
    systemFeedbackName = `动作解析失败 [${targetSlug}]`;
  }
  const toolCallId = act.id || `call_${Date.now()}_${idx}`;
  const cleanMethodName = toAiSafeName(methodStr);
  const needsConfirmation = methodValue !== "GET" && !methodStr.startsWith("system/log") && (methodStr.includes("create") || methodStr.includes("save") || methodStr.includes("update") || methodStr.includes("delete") || methodStr.includes("remove") || methodStr.includes("execute") || pathValue.includes("batch-save") || pathValue.includes("delete") || pathValue.includes("execute") || targetSkill?.requireAudit === true);
  let isApproved = true;
  if (needsConfirmation) {
    if (onStepUpdate) {
      onStepUpdate(idx, "running", (title) => `🛡️ 等待安全确认 [${title}]`);
    }
    isApproved = await requestUserConfirmation(
      toolCallId,
      `【高风险操作二次审计】
数字员工请求执行: ${methodValue} ${pathValue}
运行载荷: ${JSON.stringify(act.params || {})}`
    );
    if (onStepUpdate) {
      onStepUpdate(
        idx,
        isApproved ? "running" : "failed",
        isApproved ? (title) => title.replace("🛡️ 等待安全确认 ", "") : (title) => title.replace("🛡️ 等待安全确认 ", "")
      );
    }
  }
  let actionResult = null;
  let actionSuccess = true;
  if (isHardLockedSystemAction) {
    actionSuccess = false;
    actionResult = {
      success: false,
      error: `当前请求命中了系统硬锁安全边界，AI 员工无权直接执行该内部接口: ${directInternalPath || pathValue || methodStr}`
    };
  } else if (unresolvedUnknownTool) {
    actionSuccess = false;
    const collectionHints = collections.slice(0, 20).map((c) => `${c.slug}(${c.name})`).join(", ");
    const skillHints = skillMarketSkills.slice(0, 20).map((s) => s.slug).join(", ");
    actionResult = {
      success: false,
      error: `未识别的工具/动作名: ${methodStr}。请不要发明 create_xxx/list_xxx 这类动作名。若要调用系统接口，请使用当前 RBAC 审计角色与已挂载能力允许的真实 path/method；若要调用外部技能，请使用真实 skill slug。当前可用 collections: ${collectionHints || "无"}；当前可用 skills: ${skillHints || "无"}`
    };
  } else if (unresolvedCollectionReason) {
    actionSuccess = false;
    const collectionHints = collections.slice(0, 30).map((c) => `${c.slug}(${c.name})`).join(", ");
    actionResult = {
      success: false,
      error: `${unresolvedCollectionReason} 当前可用 collections: ${collectionHints || "无"}`
    };
  } else if (!isApproved) {
    actionSuccess = false;
    actionResult = {
      success: false,
      error: "高危写入/删除操作已被管理员在安全审计对话框中手动拦截拒绝。"
    };
  } else {
    const isImageGenCall = proxyUrl === "/api/v1/ai/image";
    const timeoutMs = isImageGenCall ? 9e4 : 15e3;
    const timeoutLabel = isImageGenCall ? "90s" : "15s";
    const actionController = new AbortController();
    const actionTimeoutId = setTimeout(() => actionController.abort(), timeoutMs);
    if (signal) {
      signal.addEventListener("abort", () => {
        actionController.abort();
      });
    }
    let fetchBody = null;
    const fetchHeaders = {};
    const isFormData = formatValue.toLowerCase() === "form-data" || formatValue.toLowerCase() === "form_data";
    if (isFormData && !methodStr.startsWith("system/") && !isInternalApi) {
      const fd = new FormData();
      fd.append("skillSlug", targetSlug);
      fd.append("path", pathValue);
      fd.append("method", methodValue);
      fd.append("format", formatValue);
      if (act.params) {
        for (const [key, val] of Object.entries(act.params)) {
          if (["skillSlug", "path", "method", "format"].includes(key)) continue;
          if (typeof val === "string") {
            const blob = await valueToBlob(val);
            if (blob) {
              let finalBlob = blob;
              if (blob.type.startsWith("image/") && blob.size > 200 * 1024) {
                console.log(`[Image Compressor] Compressing large image: ${key} (${(blob.size / 1024).toFixed(1)} KB)`);
                finalBlob = await compressImageBlob(blob);
                console.log(`[Image Compressor] Image compressed: ${(finalBlob.size / 1024).toFixed(1)} KB`);
              }
              fd.append(key, finalBlob, `file_${Date.now()}.${blob.type.split("/")[1] || "png"}`);
              continue;
            }
          }
          fd.append(key, String(val));
        }
      }
      fetchBody = fd;
    } else {
      if (useAgentActionGateway) {
        fetchHeaders["Content-Type"] = "application/json";
        fetchBody = JSON.stringify(requestPayload);
      } else {
        fetchHeaders["Content-Type"] = "application/json";
        if (methodStr.startsWith("system/")) {
          fetchBody = JSON.stringify(requestPayload);
        } else {
          fetchBody = JSON.stringify({
            skillSlug: targetSlug,
            path: pathValue,
            method: methodValue,
            format: formatValue,
            ...act.params || {}
          });
        }
      }
    }
    try {
      const actionResponse = await fetch(proxyUrl, {
        method: useAgentActionGateway ? "POST" : isInternalApi ? methodValue : "POST",
        headers: fetchHeaders,
        body: fetchBody,
        credentials: isInternalApi || useAgentActionGateway ? "include" : void 0,
        signal: actionController.signal
      });
      if (!actionResponse.ok) {
        let gatewayDetail = "";
        try {
          const errorJson = await actionResponse.clone().json();
          gatewayDetail = errorJson?.error || errorJson?.message || JSON.stringify(errorJson);
        } catch {
          try {
            gatewayDetail = (await actionResponse.clone().text()).trim();
          } catch {
            gatewayDetail = "";
          }
        }
        throw new Error(
          gatewayDetail ? `Proxy Gateway HTTP ${actionResponse.status}: ${gatewayDetail}` : `Proxy Gateway HTTP ${actionResponse.status}`
        );
      }
      const rawResult = await actionResponse.json();
      clearTimeout(actionTimeoutId);
      if (isInternalApi) {
        actionResult = {
          success: rawResult?.success !== false,
          data: rawResult
        };
        if (actionResult.success) {
          window.dispatchEvent(new CustomEvent("REFRESH_ENTITY_LIST", { detail: { path: pathValue, result: rawResult } }));
          console.log("🔄 [DigitalEmployees Autorefresh] Dispatched REFRESH_ENTITY_LIST for path:", pathValue);
        }
      } else {
        actionResult = rawResult;
      }
    } catch (err) {
      clearTimeout(actionTimeoutId);
      actionSuccess = false;
      const isTimeout = err.name === "AbortError";
      actionResult = {
        success: false,
        error: isTimeout ? `调用超时（${timeoutLabel}），服务未响应。如为图像生成任务，可能因 network 或服务繁忙，请稍后重试。` : err.message || "API 404/网关连接超时，物理执行通道关闭。"
      };
    }
  }
  const toolCallObj = {
    id: toolCallId,
    type: "function",
    function: {
      name: cleanMethodName,
      arguments: JSON.stringify(act.params || {})
    }
  };
  let pathErrorLabel = "";
  if (actionResult && actionResult.success === false && actionResult.error) {
    const errStr = String(actionResult.error).toLowerCase();
    if (errStr.includes("404") || errStr.includes("not found")) {
      const collectionHints = collections.slice(0, 20).map((c) => `${c.slug}(${c.name})`).join(", ");
      const skillHints = skillMarketSkills.slice(0, 20).map((s) => s.slug).join(", ");
      pathErrorLabel = `

[系统安全边界自愈提示] 本次调用发生 404 Not Found。
你下一轮必须先执行自纠而不是重复原调用：
1. 若当前方法名 ${fromAiSafeName(cleanMethodName)} 是 create_xxx / list_xxx / search_xxx / update_xxx / delete_xxx 这类“动作名”，请不要把它继续当作 skill slug。
2. 若目标是系统内部接口，请优先依据当前 RBAC 审计角色、已挂载技能与 data-contract/schema 结果，使用真实 path/method 重新构造调用；仅命中系统硬锁边界的接口才禁止执行。
3. 若目标是外部 AI 技能，请仅使用当前已挂载的真实 skill slug。
当前可用 collections: ${collectionHints || "无"}
当前可用 skills: ${skillHints || "无"}`;
    } else if (errStr.includes("400") || errStr.includes("数据格式不合法") || errStr.includes("选项校验不合法") || errStr.includes("字段 [")) {
      const targetCollectionFromPath = typeof pathValue === "string" ? pathValue.match(/\/api\/v1\/entities\/([^/]+)/)?.[1] || pathValue.match(/\/api\/v1\/p\/(?:schema|data|submit)\/([^/]+)/)?.[1] || "" : "";
      const schemaHint = targetCollectionFromPath ? `/api/v1/p/schema/${targetCollectionFromPath}` : "/api/v1/p/schema/all";
      pathErrorLabel = `

[系统数据校验自愈提示] 本次调用已命中业务字段校验或枚举校验错误。
你下一轮禁止继续盲猜字段值，必须按以下顺序自纠：
1. 先调用 GET ${schemaHint}（或 GET /api/v1/p/schema/all）读取该集合的真实必填字段、字段类型与可选枚举值。
2. 若上轮报错包含“字段 [xxx] 是必填项”，则必须补齐这些字段后再重试。
3. 若上轮报错包含“提交了非法的选项值”，则必须使用 schema 返回的真实 option key/value，不得自行发明如 published 之类的状态值。
4. 若 path 中出现 {{slug}}、{{id}} 之类占位符，必须先替换为真实值，禁止把模板 path 直接再次提交。`;
    }
  }
  let llmActionResult = { ...actionResult };
  const isBinaryResponse = actionResult && (actionResult.contentType && (actionResult.contentType.startsWith("image/") || actionResult.contentType.startsWith("video/") || actionResult.contentType.startsWith("audio/") || actionResult.contentType.includes("application/octet-stream") || actionResult.contentType.includes("application/pdf")) || typeof actionResult.data === "string" && actionResult.data.startsWith("data:"));
  if (isBinaryResponse) {
    const sizeBytes = typeof actionResult.data === "string" ? Math.round(actionResult.data.length * 3 / 4) : 0;
    const mimeType = actionResult.contentType || (typeof actionResult.data === "string" ? actionResult.data.split(";")[0].substring(5) : "application/octet-stream");
    llmActionResult.data = {
      fileMetadata: {
        fileName: `file_${Date.now()}_${idx}.${mimeType.split("/")[1] || "bin"}`,
        sizeBytes,
        type: mimeType,
        description: "Binary asset received and rendered successfully."
      }
    };
  }
  let uploadedFeedbackAttachment = null;
  if (isBinaryResponse && typeof actionResult.data === "string") {
    try {
      const mimeType = actionResult.contentType || (actionResult.data.startsWith("data:") ? actionResult.data.split(";")[0].substring(5) : "application/octet-stream");
      const extension = mimeType.split("/")[1] || "png";
      const filename = `generated_${Date.now()}_${idx}.${extension}`;
      let fileBlob = null;
      if (actionResult.data.startsWith("data:")) {
        const parts2 = actionResult.data.split(",");
        const byteString = atob(parts2[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let j = 0; j < byteString.length; j++) {
          ia[j] = byteString.charCodeAt(j);
        }
        fileBlob = new Blob([ab], { type: mimeType });
      } else if (actionResult.data.startsWith("http")) {
        const fetched = await fetch(actionResult.data);
        if (fetched.ok) {
          fileBlob = await fetched.blob();
        }
      }
      if (fileBlob) {
        const presignedRes = await fetch(
          `/api/v1/agents/storage/presigned?filename=${encodeURIComponent(filename)}&type=${encodeURIComponent(mimeType)}&size=${fileBlob.size}`
        );
        const presignedData = await presignedRes.json();
        if (presignedData.success) {
          const { presignedUrl, url, key } = presignedData;
          const r2UploadRes = await fetch(presignedUrl, {
            method: "PUT",
            headers: { "Content-Type": mimeType },
            body: fileBlob
          });
          if (r2UploadRes.ok) {
            uploadedFeedbackAttachment = {
              id: key,
              name: filename,
              url,
              type: mimeType,
              size: fileBlob.size
            };
            console.log("🎉 [Shadow Feedback File Autotransfer]: Transferred back to R2 successfully:", uploadedFeedbackAttachment);
          }
        }
      }
    } catch (err) {
      console.warn("[Feedback R2 Autotransfer Error]:", err.message);
    }
  }
  const systemFeedbackMsg = {
    id: "sys-feedback-" + Date.now() + "-" + idx + "-" + Math.random().toString(36).substring(2, 6),
    role: "tool",
    content: `[系统安全边界反馈] ${systemFeedbackName} 回调执行完毕。
响应负载：
\`\`\`json
${JSON.stringify(llmActionResult, null, 2)}
\`\`\`${pathErrorLabel}`,
    timestamp: /* @__PURE__ */ new Date(),
    tool_call_id: toolCallId,
    name: cleanMethodName,
    attachments: uploadedFeedbackAttachment ? [uploadedFeedbackAttachment] : void 0
  };
  if (onStepUpdate) {
    onStepUpdate(idx, actionSuccess ? "success" : "failed", void 0, actionResult);
  }
  return {
    toolCallObj,
    systemFeedbackMsg,
    actionSuccess,
    actionResult,
    idx,
    pathValue
  };
}
const DB_NAME = "ycz_agent_history";
const DB_VERSION = 1;
const STORE_SESSIONS = "sessions";
const STORE_MESSAGES = "messages";
class IndexedDBEngine {
  db = null;
  /**
   * 初始化并打开 IndexedDB 数据库
   * @returns 承诺在数据库连接就绪后解决
   */
  init() {
    return new Promise((resolve, reject) => {
      if (typeof window === "undefined" || !window.indexedDB) {
        console.warn("IndexedDB is not supported in this environment.");
        resolve();
        return;
      }
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = (e) => reject(e);
      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve();
      };
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_SESSIONS)) {
          db.createObjectStore(STORE_SESSIONS, { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains(STORE_MESSAGES)) {
          const msgStore = db.createObjectStore(STORE_MESSAGES, { keyPath: "id" });
          msgStore.createIndex("sessionId", "sessionId", { unique: false });
          msgStore.createIndex("agentId", "agentId", { unique: false });
        }
      };
    });
  }
  /**
   * 将会话对象写入/更新至 sessions 本地存储库中
   * @param session 会话信息对象
   * @returns 承诺在会话成功保存后解决
   */
  saveSession(session) {
    return this.runWithStore(STORE_SESSIONS, "readwrite", (store) => store.put(session));
  }
  /**
   * 获取指定数字员工助理的全部历史会话，并按更新时间进行降序排列
   * @param agentId 员工 ID
   * @returns 排序后的会话列表
   */
  getSessions(agentId) {
    if (!this.db) return Promise.resolve([]);
    return new Promise((resolve) => {
      this.runWithStore(STORE_SESSIONS, "readonly", (store) => {
        const req = store.getAll();
        req.onsuccess = () => {
          const all = req.result || [];
          const filtered = all.filter((s) => s.agentId === agentId);
          filtered.sort((a, b) => {
            const timeA = new Date(a.updatedAt || a.createdAt || 0).getTime();
            const timeB = new Date(b.updatedAt || b.createdAt || 0).getTime();
            return timeB - timeA;
          });
          resolve(filtered);
        };
        req.onerror = () => resolve([]);
      });
    });
  }
  /**
   * 物理删除本地缓存的特定会话，同时级联清除该会话底下的所有历史对话消息
   * @param id 需要删除的会话 ID
   * @returns 级联清理操作结束后解决
   */
  deleteSession(id) {
    return Promise.all([
      this.runWithStore(STORE_SESSIONS, "readwrite", (store) => store.delete(id)),
      this.deleteMessagesBySession(id)
    ]).then(() => {
    });
  }
  /**
   * 将单条对话消息缓存写入 messages 本地库
   * @param message 聊天消息对象 (含 role, content, attachments 等)
   * @returns 保存完毕后解决
   */
  saveMessage(message) {
    return this.runWithStore(STORE_MESSAGES, "readwrite", (store) => store.put(message));
  }
  /**
   * 批量快速将一组大模型交互消息更新至 messages 本地库中
   * @param messages 聊天消息对象数组
   * @returns 批量事务提交完毕后解决
   */
  saveMessagesBatch(messages) {
    return new Promise((resolve, reject) => {
      if (!this.db) return resolve();
      const tx = this.db.transaction(STORE_MESSAGES, "readwrite");
      const store = tx.objectStore(STORE_MESSAGES);
      messages.forEach((msg) => store.put(msg));
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e);
    });
  }
  /**
   * 查询加载特定会话 ID 底下的所有交互消息，并按创建时间正序升序排列
   * @param sessionId 会话 ID
   * @returns 排序后的消息数组
   */
  getMessages(sessionId) {
    if (!this.db) return Promise.resolve([]);
    return new Promise((resolve) => {
      this.runWithStore(STORE_MESSAGES, "readonly", (store) => {
        try {
          const index = store.index("sessionId");
          const req = index.getAll(IDBKeyRange.only(sessionId));
          req.onsuccess = () => {
            const list = req.result || [];
            list.sort((a, b) => new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime());
            resolve(list);
          };
          req.onerror = () => resolve([]);
        } catch {
          const req = store.getAll();
          req.onsuccess = () => {
            const all = req.result || [];
            const filtered = all.filter((m) => m.sessionId === sessionId);
            filtered.sort((a, b) => new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime());
            resolve(filtered);
          };
          req.onerror = () => resolve([]);
        }
      });
    });
  }
  /**
   * 物理清除该会话 ID 底下的所有历史对话消息
   * @param sessionId 会话 ID
   * @returns 事务操作完毕后解决
   */
  deleteMessagesBySession(sessionId) {
    return new Promise((resolve) => {
      if (!this.db) return resolve();
      const tx = this.db.transaction(STORE_MESSAGES, "readwrite");
      const store = tx.objectStore(STORE_MESSAGES);
      try {
        const index = store.index("sessionId");
        const req = index.openCursor(IDBKeyRange.only(sessionId));
        req.onsuccess = (e) => {
          const cursor = e.target.result;
          if (cursor) {
            cursor.delete();
            cursor.continue();
          } else {
            resolve();
          }
        };
        req.onerror = () => resolve();
      } catch {
        const req = store.openCursor();
        req.onsuccess = (e) => {
          const cursor = e.target.result;
          if (cursor) {
            if (cursor.value.sessionId === sessionId) {
              cursor.delete();
            }
            cursor.continue();
          } else {
            resolve();
          }
        };
        req.onerror = () => resolve();
      }
    });
  }
  /**
   * IndexedDB 物理读写/只读事务调度的高内聚封装
   * @param storeName 存储空间名
   * @param mode 事务读写模式 ('readonly' | 'readwrite')
   * @param callback 事务处理回调
   * @returns 事务请求返回值或 null
   */
  runWithStore(storeName, mode, callback) {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        resolve(null);
        return;
      }
      try {
        const tx = this.db.transaction(storeName, mode);
        const store = tx.objectStore(storeName);
        const request = callback(store);
        if (request && "onsuccess" in request) {
          request.onsuccess = () => resolve(request.result);
          request.onerror = (e) => reject(e);
        } else {
          tx.oncomplete = () => resolve(null);
          tx.onerror = (e) => reject(e);
        }
      } catch (e) {
        reject(e);
      }
    });
  }
}
const localDB = new IndexedDBEngine();
const ChatWorkspace = ({
  employee,
  sessionId,
  storageType = "memory",
  headerActions,
  onEnsureSession,
  onBeforeSend,
  onMessagesChange,
  className = "",
  enableTitleGenerate = false
}) => {
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const abortControllerRef = reactExports.useRef(null);
  const [collapsedLogs, setCollapsedLogs] = reactExports.useState({});
  const [collapsedReasonings, setCollapsedReasonings] = reactExports.useState({});
  const [collapsedUserMessages, setCollapsedUserMessages] = reactExports.useState({});
  const [uploadedAttachments, setUploadedAttachments] = reactExports.useState([]);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = reactExports.useState(false);
  const [confirmationQueue, setConfirmationQueue] = reactExports.useState([]);
  const requestUserConfirmation = (id, title) => {
    return new Promise((resolve) => {
      setConfirmationQueue((prev) => [...prev, {
        id,
        title,
        resolve: (confirmed) => {
          resolve(confirmed);
        }
      }]);
    });
  };
  const toggleLog = reactExports.useCallback((msgId) => {
    setCollapsedLogs((prev) => ({ ...prev, [msgId]: !prev[msgId] }));
  }, []);
  const toggleReasoning = reactExports.useCallback((msgId) => {
    setCollapsedReasonings((prev) => ({ ...prev, [msgId]: !prev[msgId] }));
  }, []);
  const toggleUserMessage = reactExports.useCallback((msgId) => {
    setCollapsedUserMessages((prev) => ({ ...prev, [msgId]: !prev[msgId] }));
  }, []);
  const toggleSteps = reactExports.useCallback((msgId) => {
    setMessages((prev) => prev.map((m) => m.id === msgId ? { ...m, stepsExpanded: !m.stepsExpanded } : m));
  }, []);
  reactExports.useEffect(() => {
    if (!sessionId || !employee) return;
    const loadHistory = async () => {
      if (storageType === "indexeddb") {
        try {
          const cached = await localDB.getMessages(sessionId);
          setMessages(cached || []);
        } catch (e) {
          setMessages([]);
        }
      } else if (storageType === "localstorage") {
        const saved = localStorage.getItem(`ai_chat_history_${employee.id}_${sessionId}`);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            const filtered = parsed.filter((m) => !(m.role === "assistant" && !m.content && (!m.steps || m.steps.length === 0)));
            setMessages(filtered);
          } catch (e) {
            setMessages([]);
          }
        } else {
          setMessages([]);
        }
      } else {
        setMessages([]);
      }
    };
    loadHistory();
  }, [sessionId, employee, storageType]);
  reactExports.useEffect(() => {
    if (!sessionId || !employee) return;
    const saveHistory = async () => {
      if (storageType === "indexeddb") {
        try {
          await localDB.saveMessagesBatch(
            messages.map((m) => ({ ...m, sessionId, agentId: employee.id }))
          );
        } catch (e) {
        }
      } else if (storageType === "localstorage") {
        if (messages.length > 0) {
          localStorage.setItem(`ai_chat_history_${employee.id}_${sessionId}`, JSON.stringify(messages));
        } else {
          localStorage.removeItem(`ai_chat_history_${employee.id}_${sessionId}`);
        }
      }
    };
    saveHistory();
    if (onMessagesChange) {
      onMessagesChange(messages);
    }
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 100);
  }, [messages, sessionId, employee, storageType]);
  const handleInterrupt = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
    }
  };
  const [skillMarketSkills, setSkillMarketSkills] = reactExports.useState([]);
  reactExports.useEffect(() => {
    fetch("/api/v1/plugins/proxy/ai-skill-market/skills").then((res) => res.json()).then((res) => {
      if (res.success && Array.isArray(res.data)) {
        setSkillMarketSkills(res.data);
      }
    }).catch(() => {
    });
  }, []);
  const triggerShadowTitleGenerate = (targetSessionId, firstPrompt, firstAnswer) => {
    if (!targetSessionId || !employee || !enableTitleGenerate) return;
    fetch(`/api/v1/agents/${employee.id}/sessions/${targetSessionId}/title-generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstPrompt, firstAnswer })
    }).then((r) => r.json()).then((data) => {
      if (data.success && data.title) {
        window.dispatchEvent(new CustomEvent("REFRESH_SESSION_TITLE", { detail: { sessionId: targetSessionId, title: data.title } }));
      }
    }).catch(() => {
    });
  };
  const handleSend = async () => {
    if (!input.trim() && uploadedAttachments.length === 0 || isLoading || !employee) return;
    let activeSessionId = await onEnsureSession?.() || sessionId;
    if (!activeSessionId) return;
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const beforePayload = onBeforeSend ? await onBeforeSend(input, uploadedAttachments) : true;
    if (beforePayload === false) return;
    if (typeof beforePayload === "object" && beforePayload?.cancel) {
      if (beforePayload.mockResponse) {
        setMessages((prev) => [...prev, beforePayload.mockResponse]);
      }
      setInput("");
      setUploadedAttachments([]);
      return;
    }
    const text = input;
    const requestText = typeof beforePayload === "object" && typeof beforePayload?.requestText === "string" ? beforePayload.requestText : text;
    const requestAttachments = typeof beforePayload === "object" && Array.isArray(beforePayload?.requestAttachments) ? beforePayload.requestAttachments : uploadedAttachments;
    setInput("");
    setIsLoading(true);
    const userMsg = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: /* @__PURE__ */ new Date(),
      attachments: uploadedAttachments.length > 0 ? uploadedAttachments : void 0
    };
    setUploadedAttachments([]);
    const currentHistory = [...messages, userMsg];
    const requestHistory = [
      ...messages,
      {
        ...userMsg,
        content: requestText,
        attachments: requestAttachments.length > 0 ? requestAttachments : void 0
      }
    ];
    setMessages(currentHistory);
    const aiMsgId = `ai-${Date.now()}`;
    const initialSteps = [
      { title: "提取意图解析并唤醒主控模型", status: "running", icon: "brain" },
      { title: "调用绑定的 Rest API 扩展技能", status: "pending", icon: "skill" },
      { title: "多维渲染核心响应内容", status: "pending", icon: "render" }
    ];
    const aiMsg = {
      id: aiMsgId,
      role: "assistant",
      content: "",
      timestamp: /* @__PURE__ */ new Date(),
      isStreaming: true,
      steps: initialSteps,
      stepsExpanded: false
    };
    setMessages([...currentHistory, aiMsg]);
    const runStreamReader = async (historyForCall, targetAiMsgId, isShadowFeedback = false) => {
      let aiReplyContent = "";
      let reasoningContent = "";
      return streamChat({
        employeeId: employee.id,
        sessionId: activeSessionId,
        history: historyForCall,
        isShadowFeedback,
        signal: abortControllerRef.current?.signal,
        onChunk: ({ content, reasoning }) => {
          if (content) {
            aiReplyContent += content;
            setMessages((prev) => prev.map((m) => m.id === targetAiMsgId ? { ...m, content: aiReplyContent } : m));
          }
          if (reasoning) {
            reasoningContent += reasoning;
            setMessages((prev) => prev.map((m) => m.id === targetAiMsgId ? { ...m, reasoning_content: reasoningContent } : m));
          }
        }
      });
    };
    try {
      const { aiReplyContent, reasoningContent, interceptedAction, collections, activeSkills } = await runStreamReader(requestHistory, aiMsgId);
      let finalStepsFirst = aiMsg.steps?.map((s, idx) => idx === 0 ? { ...s, status: "success" } : s) || [];
      setMessages((prev) => prev.map((m) => m.id === aiMsgId ? { ...m, steps: finalStepsFirst } : m));
      if (currentHistory.length === 1 && enableTitleGenerate) {
        triggerShadowTitleGenerate(activeSessionId, text, aiReplyContent);
      }
      if (interceptedAction) {
        let actionList = Array.isArray(interceptedAction) ? interceptedAction : [interceptedAction];
        const MAX_PARALLEL_TOOLS = 3;
        if (actionList.length > MAX_PARALLEL_TOOLS) {
          actionList = actionList.slice(0, MAX_PARALLEL_TOOLS);
        }
        const toolSteps = actionList.map((act) => {
          let mName = act.method || "";
          if (isAiSafeName(mName)) mName = fromAiSafeName(mName);
          const parts = mName.split("/");
          const cleanName = parts[parts.length - 1] || mName;
          const targetSlug = parts[0];
          const targetSkill = skillMarketSkills.find((item) => item.slug === targetSlug);
          return {
            title: `执行物理技能 [${cleanName}]`,
            status: "running",
            icon: "skill",
            outputType: targetSkill?.outputType || "json"
          };
        });
        const runningSteps = [
          { title: "提取意图解析并唤醒主控模型", status: "success", icon: "brain" },
          ...toolSteps,
          { title: "多维渲染核心响应内容", status: "pending", icon: "render" }
        ];
        setMessages((prev) => prev.map((m) => m.id === aiMsgId ? { ...m, steps: runningSteps } : m));
        const executionPromises = actionList.map(async (act, idx) => {
          return executeToolCall({
            act,
            idx,
            employee,
            skillMarketSkills,
            activeSkills,
            collections,
            currentHistory: requestHistory,
            requestUserConfirmation,
            signal: abortControllerRef.current?.signal,
            onStepUpdate: (sIdx, status, titleModifier, result) => {
              setMessages((prev) => prev.map((m) => m.id === aiMsgId ? {
                ...m,
                steps: m.steps?.map((step, stepIdx) => {
                  if (stepIdx === sIdx + 1) {
                    let newTitle = step.title;
                    if (titleModifier) {
                      newTitle = titleModifier(step.title);
                    }
                    return { ...step, title: newTitle, status, result };
                  }
                  return step;
                })
              } : m));
            }
          });
        });
        const executedResults = await Promise.all(executionPromises);
        const updatedToolSteps = toolSteps.map((step, idx) => {
          const res = executedResults.find((r) => r.idx === idx);
          let dynamicOutputType = step.outputType || "json";
          if (res?.actionResult) {
            const actRes = res.actionResult;
            const isImg = actRes.contentType && actRes.contentType.startsWith("image/") || typeof actRes.data === "string" && actRes.data.startsWith("data:image/");
            const isMd = actRes.contentType && actRes.contentType.includes("markdown") || typeof actRes.data === "string" && (actRes.data.includes("# ") || actRes.data.includes("**"));
            if (isImg) dynamicOutputType = "image";
            else if (isMd) dynamicOutputType = "markdown";
            else if (res?.pathValue && res.pathValue.includes("db-admin/execute")) dynamicOutputType = "table";
            else dynamicOutputType = "json";
          }
          return {
            ...step,
            status: res?.actionSuccess ? "success" : "failed",
            result: res?.actionResult,
            outputType: dynamicOutputType
          };
        });
        let postActionSteps = [
          { title: "提取意图解析并唤醒主控模型", status: "success", icon: "brain" },
          ...updatedToolSteps,
          { title: "多维渲染核心响应内容", status: "pending", icon: "render" }
        ];
        setMessages((prev) => prev.map((m) => m.id === aiMsgId ? { ...m, steps: postActionSteps } : m));
        const toolCallObjs = executedResults.map((r) => r.toolCallObj);
        const systemFeedbackMsgs = executedResults.map((r) => r.systemFeedbackMsg);
        const historyWithFeedback = [
          ...currentHistory,
          {
            ...aiMsg,
            content: aiReplyContent,
            reasoning_content: reasoningContent || void 0,
            steps: postActionSteps,
            tool_calls: toolCallObjs
          },
          ...systemFeedbackMsgs
        ];
        setMessages(historyWithFeedback);
        let renderingSteps = postActionSteps.map((s, idx) => idx === postActionSteps.length - 1 ? { ...s, status: "running" } : s);
        setMessages((prev) => prev.map((m) => m.id === aiMsgId ? { ...m, steps: renderingSteps } : m));
        const MAX_AGENT_LOOPS = 50;
        const calledToolsCount = /* @__PURE__ */ new Map();
        let agentLoopCount = 0;
        let agentHistory = [
          ...requestHistory,
          {
            ...aiMsg,
            content: aiReplyContent,
            reasoning_content: reasoningContent || void 0,
            steps: postActionSteps,
            tool_calls: toolCallObjs
          },
          ...systemFeedbackMsgs
        ];
        let lastLoopMsgId = aiMsgId;
        try {
          let continueLoop = true;
          while (continueLoop && agentLoopCount < MAX_AGENT_LOOPS) {
            agentLoopCount++;
            console.log(`Round ${agentLoopCount}/${MAX_AGENT_LOOPS}`);
            const loopMsgId = `ai-loop-${agentLoopCount}-${Date.now()}`;
            const loopMsg = {
              id: loopMsgId,
              role: "assistant",
              content: agentLoopCount === 1 ? "助手正在执行工具处理中..." : `助手正在执行第 ${agentLoopCount} 步...`,
              timestamp: /* @__PURE__ */ new Date(),
              isStreaming: true
            };
            lastLoopMsgId = loopMsgId;
            setMessages((prev) => [...prev, loopMsg]);
            const loopTrimThreshold = 30;
            const loopTrimredHistory = agentHistory.length > loopTrimThreshold ? agentHistory.slice(-loopTrimThreshold) : agentHistory;
            const loopResult = await runStreamReader(loopTrimredHistory, loopMsgId, false);
            setMessages((prev) => prev.map((m) => m.id === loopMsgId ? { ...m, isStreaming: false } : m));
            if (loopResult.interceptedAction) {
              let loopActionList = Array.isArray(loopResult.interceptedAction) ? loopResult.interceptedAction : [loopResult.interceptedAction];
              let isDeadlock = false;
              for (const act of loopActionList) {
                const methodStr = act.method || "";
                const count = (calledToolsCount.get(methodStr) || 0) + 1;
                calledToolsCount.set(methodStr, count);
                if (count > 5) {
                  isDeadlock = true;
                  break;
                }
              }
              if (isDeadlock) {
                toast({
                  title: "检测到死循环",
                  description: `AI 助手连续多次调用同一个技能，已强制安全熔断终止任务。`,
                  variant: "destructive"
                });
                continueLoop = false;
                break;
              }
              const LOOP_MAX_TOOLS = 3;
              if (loopActionList.length > LOOP_MAX_TOOLS) loopActionList = loopActionList.slice(0, LOOP_MAX_TOOLS);
              const loopToolSteps = loopActionList.map((act) => {
                let mName = act.method || "";
                if (isAiSafeName(mName)) mName = fromAiSafeName(mName);
                const np = mName.split("/");
                return { title: `执行: ${np[np.length - 1] || mName}`, status: "running", icon: "tool" };
              });
              setMessages((prev) => prev.map((m) => m.id === loopMsgId ? { ...m, steps: [{ title: "解析指令", status: "success", icon: "brain" }, ...loopToolSteps] } : m));
              const loopExecPromises = loopActionList.map(async (act, idx) => {
                return executeToolCall({
                  act,
                  idx,
                  employee,
                  skillMarketSkills,
                  activeSkills: loopResult.activeSkills || activeSkills,
                  collections: loopResult.collections || collections,
                  currentHistory: agentHistory,
                  requestUserConfirmation,
                  signal: abortControllerRef.current?.signal,
                  onStepUpdate: (sIdx, status, titleModifier, result) => {
                    setMessages((prev) => prev.map((m) => m.id === loopMsgId ? {
                      ...m,
                      steps: m.steps?.map((step, stepIdx) => {
                        if (stepIdx === sIdx + 1) {
                          let newTitle = step.title;
                          if (titleModifier) {
                            newTitle = titleModifier(step.title);
                          }
                          return { ...step, title: newTitle, status, result };
                        }
                        return step;
                      })
                    } : m));
                  }
                });
              });
              const loopExecResults = await Promise.all(loopExecPromises);
              setMessages((prev) => prev.map((m) => m.id === loopMsgId ? { ...m, steps: m.steps?.map((s, si) => si === 0 ? s : { ...s, status: loopExecResults[si - 1]?.actionSuccess ? "success" : "failed" }) } : m));
              const loopFbMsgs = loopExecResults.map((r) => r.systemFeedbackMsg);
              setMessages((prev) => [...prev, ...loopFbMsgs]);
              agentHistory = [...agentHistory, { ...loopMsg, content: loopResult.aiReplyContent, reasoning_content: loopResult.reasoningContent || void 0, tool_calls: loopExecResults.map((r) => r.toolCallObj) }, ...loopFbMsgs];
            } else {
              continueLoop = false;
              setMessages((prev) => prev.map((m) => m.id === loopMsgId ? {
                ...m,
                content: loopResult.aiReplyContent,
                reasoning_content: loopResult.reasoningContent || void 0,
                isStreaming: false,
                steps: m.steps?.map((s) => ({ ...s, status: "success" }))
              } : m));
            }
          }
        } catch (shadowErr) {
          const isAbort = shadowErr.name === "AbortError";
          setMessages((prev) => prev.map((m) => m.id === lastLoopMsgId ? {
            ...m,
            content: m.content + (isAbort ? `

🛑 **[会话已由用户手动中断]**` : `

⚠️ **[能力代理链路中断]** ${shadowErr.message || "分析超时"}`),
            isStreaming: false,
            steps: m.steps?.map((s, idx) => idx === m.steps.length - 1 ? { ...s, status: "failed" } : s)
          } : m));
        }
      } else {
        const finalStepsDirect = finalStepsFirst.map((s) => ({ ...s, status: s.status === "pending" || s.status === "running" ? "success" : s.status }));
        setMessages((prev) => prev.map((m) => m.id === aiMsgId ? {
          ...m,
          isStreaming: false,
          stepsExpanded: false,
          steps: finalStepsDirect
        } : m));
      }
    } catch (err) {
      const isAbort = err.name === "AbortError";
      setMessages((prev) => prev.map((m) => m.id === aiMsgId ? {
        ...m,
        content: m.content + (isAbort ? `

🛑 **[会话已由用户手动中断]**` : `

⚠️ **[能力代理链路中断]** ${err.message || "服务异常"}`),
        isStreaming: false,
        steps: m.steps?.map((s) => ({
          ...s,
          status: s.status === "running" || s.status === "pending" ? "failed" : s.status
        }))
      } : m));
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };
  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsLoading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const MAX_SIZE = 20 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
          toast({ title: "文件大小超限", description: "上传附件大小超过限制 20MB。", variant: "destructive" });
          continue;
        }
        const presignedRes = await fetch(
          `/api/v1/agents/storage/presigned?filename=${encodeURIComponent(file.name)}&type=${encodeURIComponent(file.type)}&size=${file.size}`
        );
        const presignedData = await presignedRes.json();
        if (!presignedData.success) throw new Error(presignedData.message || "R2预签名失败");
        const { presignedUrl, url, key } = presignedData;
        const uploadRes = await fetch(presignedUrl, {
          method: "PUT",
          headers: { "Content-Type": file.type || "application/octet-stream" },
          body: file
        });
        if (!uploadRes.ok) throw new Error("上传云端失败");
        const newAttachment = {
          id: key,
          name: file.name,
          url,
          type: file.type || "application/octet-stream",
          size: file.size
        };
        setUploadedAttachments((prev) => [...prev, newAttachment]);
        toast({ title: "文件上传成功", description: `附件 "${file.name}" 直传就绪。` });
      }
    } catch (err) {
      toast({ title: "上传失败", description: err.message || "网络或存储校验失败", variant: "destructive" });
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };
  const handleMediaPickerSelect = (item) => {
    setUploadedAttachments((prev) => {
      if (prev.some((att) => att.id === String(item.id))) return prev;
      return [...prev, {
        id: String(item.id),
        name: item.filename,
        url: item.url,
        type: item.mimeType || "application/octet-stream",
        size: item.size || 0
      }];
    });
    setIsMediaPickerOpen(false);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm ${className}`, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "input",
      {
        type: "file",
        ref: fileInputRef,
        onChange: handleFileUpload,
        multiple: true,
        style: { display: "none" }
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
        lineNumber: 631,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 flex-shrink-0", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 max-w-[50%]", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 flex-shrink-0", children: employee?.avatar ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-base", children: employee.avatar }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
          lineNumber: 643,
          columnNumber: 15
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bot, { size: 20 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
          lineNumber: 645,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
          lineNumber: 641,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col truncate", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-slate-800 dark:text-slate-200 text-sm truncate", children: employee?.name || "数字员工" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
            lineNumber: 649,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 truncate", children: employee?.description || "对接数字大脑系统" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
            lineNumber: 652,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
          lineNumber: 648,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
        lineNumber: 640,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 select-none", children: [
        headerActions,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            onClick: () => setMessages([]),
            className: "p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-500 hover:text-red-500 transition-colors flex-shrink-0",
            title: "清空当前对话记录",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 18 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
              lineNumber: 665,
              columnNumber: 13
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
            lineNumber: 660,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
        lineNumber: 658,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
      lineNumber: 639,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        ref: scrollRef,
        className: "flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-white/50 dark:bg-slate-900/50 min-h-0 pb-10",
        children: [
          messages.length === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-full flex flex-col items-center justify-center text-center p-8 select-none my-auto animate-fade-in text-slate-400", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative mb-6", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-14 h-14 bg-gradient-to-tr from-blue-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 mx-auto transform hover:rotate-12 transition-transform duration-300", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-2xl", children: employee?.avatar || "🤖" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
                lineNumber: 678,
                columnNumber: 17
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
                lineNumber: 677,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full animate-bounce" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
                lineNumber: 680,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
              lineNumber: 676,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-extrabold text-slate-700 dark:text-slate-300 text-sm mb-1.5", children: [
              "我是数字化助理：",
              employee?.name || "数字员工"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
              lineNumber: 682,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 max-w-[280px] leading-relaxed mx-auto mb-5", children: employee?.description || "输入任务、提问或派发指令，我将自动执行物理技能工具并为您呈递结果。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
              lineNumber: 685,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-2 max-w-[280px] w-full mx-auto", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "div",
                {
                  onClick: () => setInput("帮我查询一下系统当前的最新运行状态 and 日志详情"),
                  className: "p-2 text-[9px] text-slate-500 hover:text-blue-600 bg-white hover:bg-blue-50/50 dark:bg-slate-800 dark:hover:bg-slate-850 border border-slate-200/50 dark:border-slate-750 hover:border-blue-200 rounded-xl cursor-pointer transition-all duration-200 text-left font-medium shadow-xs",
                  children: "🔍 查询系统运行状态..."
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
                  lineNumber: 689,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "div",
                {
                  onClick: () => setInput("请生成一份关于AI数字员工群的工作周报草案模板"),
                  className: "p-2 text-[9px] text-slate-500 hover:text-blue-600 bg-white hover:bg-blue-50/50 dark:bg-slate-800 dark:hover:bg-slate-850 border border-slate-200/50 dark:border-slate-750 hover:border-blue-200 rounded-xl cursor-pointer transition-all duration-200 text-left font-medium shadow-xs",
                  children: "📝 起草工作周报模板..."
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
                  lineNumber: 695,
                  columnNumber: 15
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
              lineNumber: 688,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
            lineNumber: 675,
            columnNumber: 11
          }, void 0),
          messages.map((msg) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            ChatMessageItem,
            {
              msg,
              activeEmployee: employee,
              isLogCollapsed: collapsedLogs[msg.id] === true,
              isReasoningCollapsed: collapsedReasonings[msg.id] ?? !msg.isStreaming,
              isUserMsgCollapsed: collapsedUserMessages[msg.id] ?? (msg.content && msg.content.length > 300),
              onToggleLog: toggleLog,
              onToggleReasoning: toggleReasoning,
              onToggleUserMessage: toggleUserMessage,
              onToggleSteps: toggleSteps
            },
            msg.id,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
              lineNumber: 706,
              columnNumber: 11
            },
            void 0
          ))
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
        lineNumber: 670,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ChatComposer,
      {
        value: input,
        isLoading,
        attachments: uploadedAttachments,
        onChange: setInput,
        onSend: handleSend,
        onInterrupt: handleInterrupt,
        onAttachClick: () => setIsMediaPickerOpen(true),
        onRemoveAttachment: (id) => setUploadedAttachments((prev) => prev.filter((f) => f.id !== id))
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
        lineNumber: 721,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      MediaPicker,
      {
        isOpen: isMediaPickerOpen,
        onClose: () => setIsMediaPickerOpen(false),
        title: "选择聊天附件",
        onSelect: handleMediaPickerSelect
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
        lineNumber: 732,
        columnNumber: 7
      },
      void 0
    ),
    confirmationQueue.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: true,
        onOpenChange: () => {
          const current = confirmationQueue[0];
          current.resolve(false);
          setConfirmationQueue((prev) => prev.slice(1));
        },
        title: "系统高敏感操作安全确认",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          "数字助理正在请求执行高敏感度写入或删除操作。",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "my-3 max-h-[120px] overflow-y-auto rounded-xl border border-red-100 bg-red-50/50 p-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] font-bold text-red-700 font-mono break-all whitespace-pre-wrap", children: confirmationQueue[0].title }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
            lineNumber: 752,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
            lineNumber: 751,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
          lineNumber: 749,
          columnNumber: 13
        }, void 0),
        onConfirm: () => {
          const current = confirmationQueue[0];
          current.resolve(true);
          setConfirmationQueue((prev) => prev.slice(1));
        },
        onCancel: () => {
          const current = confirmationQueue[0];
          current.resolve(false);
          setConfirmationQueue((prev) => prev.slice(1));
        },
        cancelText: "拒绝 Block",
        confirmText: "授权 Approve",
        variant: "destructive",
        cancelClassName: "rounded-lg h-9 px-4 text-xs font-bold border-slate-200 text-slate-600 hover:bg-slate-50",
        confirmClassName: "rounded-lg h-9 px-4 text-xs font-bold bg-red-600 hover:bg-red-700 text-white"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
        lineNumber: 740,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-workspace.tsx",
    lineNumber: 629,
    columnNumber: 5
  }, void 0);
};
export {
  Bot as B,
  ChevronDown as C,
  FileText as F,
  Library as L,
  MediaPicker as M,
  Play as P,
  RichContentRenderer as R,
  Search as S,
  Upload as U,
  Shield as a,
  Send as b,
  ChatWorkspace as c,
  ChatMessageItem as d,
  Minimize2 as e,
  Maximize2 as f,
  Paperclip as g,
  Square as h,
  ChevronUp as i,
  File as j,
  FileDown as k,
  localDB as l,
  executeToolCall as m,
  streamChat as s
};
