globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, c as cn } from "./useAdminPermissions_BNA5PeGD.mjs";
import { r as reactExports } from "./worker-entry_DwrWQjkq.mjs";
const TabsContext = reactExports.createContext(null);
const Tabs = ({ defaultValue, value, onValueChange, className, children }) => {
  const [activeTab, setActiveTab] = reactExports.useState(value || defaultValue || "");
  const handleValueChange = (v) => {
    if (!value) setActiveTab(v);
    onValueChange?.(v);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContext.Provider, { value: { value: value || activeTab, onValueChange: handleValueChange }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("w-full", className), children }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Tabs.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Tabs.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, void 0);
};
const TabsList = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      ref,
      className: cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/Tabs.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    void 0
  )
);
TabsList.displayName = "TabsList";
const TabsTrigger = reactExports.forwardRef(({ className, value, ...props }, ref) => {
  const context = reactExports.useContext(TabsContext);
  const isActive = context?.value === value;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "button",
    {
      ref,
      type: "button",
      role: "tab",
      "aria-selected": isActive,
      onClick: () => context?.onValueChange(value),
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50 text-slate-500",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/Tabs.tsx",
      lineNumber: 61,
      columnNumber: 5
    },
    void 0
  );
});
TabsTrigger.displayName = "TabsTrigger";
const TabsContent = reactExports.forwardRef(({ className, value, ...props }, ref) => {
  const context = reactExports.useContext(TabsContext);
  if (context?.value !== value) return null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      ref,
      role: "tabpanel",
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in-50 duration-300",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/ui/Tabs.tsx",
      lineNumber: 88,
      columnNumber: 5
    },
    void 0
  );
});
TabsContent.displayName = "TabsContent";
export {
  Tabs as T,
  TabsList as a,
  TabsTrigger as b,
  TabsContent as c
};
