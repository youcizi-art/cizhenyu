globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, c as cn, D as DialogFooter, B as Button } from "./useAdminPermissions_BNA5PeGD.mjs";
function FormDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  layer = "base",
  contentClassName,
  overlayClassName,
  bodyClassName,
  footerClassName,
  cancelText = "取消",
  confirmText = "确认",
  onCancel,
  onConfirm,
  confirmType = "button",
  confirmForm,
  confirmLoading = false,
  confirmDisabled = false,
  confirmClassName,
  cancelClassName,
  hideCancel = false,
  confirmHint,
  footer
}) {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: contentClassName, overlayClassName, layer, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: title }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      description ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: description }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
        lineNumber: 75,
        columnNumber: 26
      }, this) : null
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("max-h-[calc(100vh-180px)] overflow-y-auto pr-1", bodyClassName), children }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    footer ?? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      confirmHint ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t px-1 pt-3 text-xs text-slate-500", children: confirmHint }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
        lineNumber: 83,
        columnNumber: 15
      }, this) : null,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: cn(confirmHint ? "pt-3" : "border-t pt-4", footerClassName), children: [
        !hideCancel && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", onClick: handleCancel, className: cancelClassName, children: cancelText }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            type: confirmType,
            form: confirmForm,
            onClick: confirmType === "button" ? onConfirm : void 0,
            loading: confirmLoading,
            disabled: confirmDisabled,
            className: cn("bg-blue-600 text-white", confirmClassName),
            children: confirmText
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
            lineNumber: 93,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/FormDialog.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
export {
  FormDialog as F
};
