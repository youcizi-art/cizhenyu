globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, c as cn, h as cva } from "./Button_BI0VYNyM.mjs";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn(badgeVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Badge.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  Badge as B
};
