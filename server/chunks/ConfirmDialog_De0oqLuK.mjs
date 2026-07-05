globalThis.process ??= {};
globalThis.process.env ??= {};
import { g as createLucideIcon, j as jsxDevRuntimeExports, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, D as DialogFooter, B as Button, c as cn } from "./Button_BI0VYNyM.mjs";
const AlertTriangle = createLucideIcon("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Info = createLucideIcon("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
const ConfirmDialog = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "确定操作",
  cancelText = "取消",
  variant = "default",
  isLoading = false,
  confirmDisabled = false,
  hideCancel = false,
  layer = "base",
  dialogClassName,
  overlayClassName,
  footerClassName,
  confirmClassName,
  cancelClassName
}) => {
  const handleConfirm = (e) => {
    e.preventDefault();
    onConfirm();
  };
  const handleCancel = () => {
    if (onCancel) onCancel();
    onOpenChange(false);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    DialogContent,
    {
      className: cn("sm:max-w-[420px] rounded-2xl shadow-2xl border-none p-0 overflow-hidden", dialogClassName),
      overlayClassName,
      layer,
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { className: "p-6 pb-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: [
            variant === "destructive" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { className: "text-red-500", size: 20 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { className: "text-blue-500", size: 20 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
              lineNumber: 85,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-bold tracking-tight text-slate-800", children: title }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { asChild: true, className: "text-slate-500 leading-relaxed pt-1 whitespace-pre-line", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: description }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: cn("p-6 bg-slate-50/50 flex flex-col-reverse sm:flex-row gap-2 mt-2", footerClassName), children: [
          !hideCancel && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: "ghost",
              onClick: handleCancel,
              disabled: isLoading,
              className: cn("sm:flex-1 rounded-xl text-slate-500 hover:bg-slate-100", cancelClassName),
              children: cancelText
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
              lineNumber: 101,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              variant: variant === "destructive" ? "destructive" : "default",
              onClick: handleConfirm,
              disabled: isLoading || confirmDisabled,
              className: cn(
                variant === "destructive" ? "sm:flex-1 rounded-xl bg-red-600 hover:bg-red-700 shadow-lg shadow-red-100" : "sm:flex-1 rounded-xl bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-200",
                confirmClassName
              ),
              children: isLoading ? "正在处理..." : confirmText
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
              lineNumber: 110,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
      lineNumber: 72,
      columnNumber: 7
    },
    void 0
  ) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/ConfirmDialog.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, void 0);
};
export {
  AlertTriangle as A,
  Check as C,
  Info as I,
  ConfirmDialog as a
};
