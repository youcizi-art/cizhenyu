globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, B as Button, c as cn } from "./Button_BI0VYNyM.mjs";
import { R as RefreshCw } from "./refresh-cw_BDTLwcEs.mjs";
function ListRefreshButton({
  onClick,
  loading = false,
  title = "刷新当前列表",
  className
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    Button,
    {
      type: "button",
      variant: "outline",
      size: "icon",
      onClick,
      disabled: loading,
      title,
      "aria-label": title,
      className: cn(
        "h-10 w-10 shrink-0 border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-blue-600",
        className
      ),
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { className: cn("h-4 w-4", loading && "animate-spin") }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ui/ListRefreshButton.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/ListRefreshButton.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
export {
  ListRefreshButton as L
};
