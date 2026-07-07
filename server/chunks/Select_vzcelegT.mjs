globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, c as cn } from "./useAdminPermissions_BNA5PeGD.mjs";
import { r as reactExports } from "./worker-entry_DwrWQjkq.mjs";
import { C as ChevronDown } from "./agent-session-utils_Ct7fJQ5O.mjs";
const Select = reactExports.forwardRef(
  ({ className, children, onValueChange, onChange, ...props }, ref) => {
    const handleValueChange = (e) => {
      if (onChange) onChange(e);
      if (onValueChange) onValueChange(e.target.value);
    };
    const getOptions = (nodes) => {
      const options = [];
      reactExports.Children.forEach(nodes, (child) => {
        if (!reactExports.isValidElement(child)) return;
        if (child.type === SelectItem || child.type === "option") {
          options.push(child);
        } else if (child.type === SelectContent || child.type.displayName === "SelectContent") {
          options.push(...getOptions(child.props.children));
        }
      });
      return options;
    };
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative inline-block w-full", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "select",
        {
          className: cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-[6px] text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
            className
          ),
          ref,
          onChange: handleValueChange,
          ...props,
          children: getOptions(children)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/ui/Select.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/ui/Select.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/Select.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, void 0);
  }
);
Select.displayName = "Select";
const SelectTrigger = ({ children }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children }, void 0, false, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Select.tsx",
  lineNumber: 57,
  columnNumber: 46
}, void 0);
SelectTrigger.displayName = "SelectTrigger";
const SelectValue = ({ placeholder }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: placeholder }, void 0, false, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Select.tsx",
  lineNumber: 60,
  columnNumber: 47
}, void 0);
SelectValue.displayName = "SelectValue";
const SelectContent = ({ children }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children }, void 0, false, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Select.tsx",
  lineNumber: 63,
  columnNumber: 46
}, void 0);
SelectContent.displayName = "SelectContent";
const SelectItem = ({ children, value }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value, children }, void 0, false, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Select.tsx",
  lineNumber: 67,
  columnNumber: 3
}, void 0);
SelectItem.displayName = "SelectItem";
export {
  Select as S,
  SelectTrigger as a,
  SelectValue as b,
  SelectContent as c,
  SelectItem as d
};
