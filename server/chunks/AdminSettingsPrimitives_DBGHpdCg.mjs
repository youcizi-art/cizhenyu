globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, c as cn, D as DialogFooter, B as Button } from "./Button_BI0VYNyM.mjs";
function AdminSettingsHeader({
  title,
  description,
  icon
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-end justify-between gap-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900", children: [
      icon,
      title
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-slate-500", children: description }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function AdminPillTabs({
  value,
  onChange,
  items,
  className
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("flex w-fit items-center gap-0 rounded-xl bg-slate-100 p-1", className), children: items.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "button",
    {
      type: "button",
      onClick: () => onChange(item.value),
      className: cn(
        "rounded-lg px-8 py-2 text-sm font-medium transition-all",
        value === item.value ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
      ),
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2", children: [
        item.icon,
        item.label
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    },
    item.value,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
      lineNumber: 42,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function AdminSettingsField({
  label,
  icon,
  hint,
  className,
  children
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("space-y-2", className), children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "flex items-center gap-2 text-sm font-bold text-slate-700", children: [
      icon,
      label
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    children,
    hint ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] leading-relaxed text-slate-400", children: hint }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
      lineNumber: 83,
      columnNumber: 15
    }, this) : null
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function AdminDialogActions({
  onCancel,
  cancelText = "取消",
  confirmText,
  confirmLoading = false,
  confirmDisabled = false,
  onConfirm,
  confirmClassName,
  className
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: cn("border-t pt-4", className), children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", onClick: onCancel, children: cancelText }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Button,
      {
        onClick: onConfirm,
        loading: confirmLoading,
        disabled: confirmDisabled,
        className: cn("bg-blue-600 px-8 text-white", confirmClassName),
        children: confirmText
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
        lineNumber: 112,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminSettingsPrimitives.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}
export {
  AdminSettingsHeader as A,
  AdminPillTabs as a,
  AdminSettingsField as b,
  AdminDialogActions as c
};
