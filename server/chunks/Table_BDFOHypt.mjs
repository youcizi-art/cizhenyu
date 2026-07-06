globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, c as cn } from "./useAdminPermissions_CAR-Xq1O.mjs";
import { r as reactExports } from "./worker-entry_DQAyehZh.mjs";
const Table = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
    lineNumber: 9,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
  lineNumber: 8,
  columnNumber: 3
}, void 0));
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, false, {
  fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
  lineNumber: 22,
  columnNumber: 3
}, void 0));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
    lineNumber: 30,
    columnNumber: 3
  },
  void 0
));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  void 0
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
    lineNumber: 57,
    columnNumber: 3
  },
  void 0
));
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  void 0
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "D:/ycz_me/cizhenyu/src/components/ui/Table.tsx",
    lineNumber: 87,
    columnNumber: 3
  },
  void 0
));
TableCell.displayName = "TableCell";
export {
  Table as T,
  TableHeader as a,
  TableRow as b,
  TableHead as c,
  TableBody as d,
  TableCell as e
};
