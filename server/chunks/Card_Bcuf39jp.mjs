globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, c as cn } from "./Button_BI0VYNyM.mjs";
import { r as reactExports } from "./worker-entry_DhHjvv2h.mjs";
const Card = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Card.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  void 0
));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Card.tsx",
    lineNumber: 23,
    columnNumber: 3
  },
  void 0
));
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "h3",
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Card.tsx",
    lineNumber: 35,
    columnNumber: 3
  },
  void 0
));
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Card.tsx",
    lineNumber: 50,
    columnNumber: 3
  },
  void 0
));
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Card.tsx",
  lineNumber: 62,
  columnNumber: 3
}, void 0));
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Card.tsx",
    lineNumber: 70,
    columnNumber: 3
  },
  void 0
));
CardFooter.displayName = "CardFooter";
export {
  Card as C,
  CardContent as a,
  CardHeader as b,
  CardTitle as c,
  CardDescription as d,
  CardFooter as e
};
