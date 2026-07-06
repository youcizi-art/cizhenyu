globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { q as addAttribute, r as renderTemplate, bh as createTransitionScope, ab as renderSlot, aa as Fragment, a as renderHead, b as defineScriptVars } from "./sequence_B081Vtkc.mjs";
import { R as React, r as reactExports, a as renderComponent } from "./worker-entry_DQAyehZh.mjs";
import { r as renderScript } from "./global_kq5dr5Jp.mjs";
import { p as createLucideIcon, G as Globe, L as Loader2, T as Trash2, X, j as jsxDevRuntimeExports, U as UI_LAYER, u as useToast, E as Toaster } from "./useAdminPermissions_CAR-Xq1O.mjs";
import { b as Activity, A as AlertCircle, C as ChevronLeft, E as Eye, f as EyeOff, L as Layers, a as Link2, M as MessageSquare, P as Pen, e as PenLine, S as Sparkles, c as createAgentSessionRecord, s as syncAgentSessionRemote, g as EmployeeTaskDialog } from "./agent-session-utils_Bd5uE09j.mjs";
import { A as AlertTriangle, B as Bot, b as Check, g as CheckCircle2, C as ChevronDown, a as ChevronRight, o as ChevronUp, e as Copy, E as ExternalLink, p as File, q as FileDown, F as FileText, I as Info, L as Library, k as Maximize2, j as Minimize2, m as Paperclip, P as Play, R as RefreshCw, S as Search, f as Send, d as Shield, n as Square, U as Upload, r as localDB, s as executeToolCall, t as streamChat } from "./chat-workspace_D3zVFcLO.mjs";
import { C as Circle, a as Clock, L as Lock, M as MonitorSmartphone, S as ShieldCheck } from "./shield-check_CiONMVXR.mjs";
import { F as Facebook, S as Save } from "./save_B_xHweMU.mjs";
import { K as Key, P as Plus, S as Settings } from "./settings_Dtra946-.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
import { i as isAiSafeName, f as fromAiSafeName } from "./slug-utils_BUZMJBew.mjs";
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/ycz_me/cizhenyu/node_modules/.pnpm/astro@6.1.8_@types+node@25._4c21af3ffec89e4ed1b9a9b84e4650d5/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/ycz_me/cizhenyu/node_modules/.pnpm/astro@6.1.8_@types+node@25._4c21af3ffec89e4ed1b9a9b84e4650d5/node_modules/astro/components/ClientRouter.astro", void 0);
const AArrowDown = createLucideIcon("AArrowDown", [
  ["path", { d: "M3.5 13h6", key: "p1my2r" }],
  ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
  ["path", { d: "M18 7v9", key: "pknjwm" }],
  ["path", { d: "m14 12 4 4 4-4", key: "buelq4" }]
]);
const AArrowUp = createLucideIcon("AArrowUp", [
  ["path", { d: "M3.5 13h6", key: "p1my2r" }],
  ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
  ["path", { d: "M18 16V7", key: "ty0viw" }],
  ["path", { d: "m14 11 4-4 4 4", key: "1pu57t" }]
]);
const ALargeSmall = createLucideIcon("ALargeSmall", [
  ["path", { d: "M21 14h-5", key: "1vh23k" }],
  ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16", key: "1wh10o" }],
  ["path", { d: "M4.5 13h6", key: "dfilno" }],
  ["path", { d: "m3 16 4.5-9 4.5 9", key: "2dxa0e" }]
]);
const Accessibility = createLucideIcon("Accessibility", [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
]);
const ActivitySquare = createLucideIcon("ActivitySquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7", key: "15hlnc" }]
]);
const AirVent = createLucideIcon("AirVent", [
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2"
    }
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12", key: "1bo8pg" }],
  ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5", key: "t9h90c" }]
]);
const Airplay = createLucideIcon("Airplay", [
  [
    "path",
    {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
      key: "ns4c3b"
    }
  ],
  ["polygon", { points: "12 15 17 21 7 21 12 15", key: "1sy95i" }]
]);
const AlarmClockCheck = createLucideIcon("AlarmClockCheck", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
]);
const AlarmClockMinus = createLucideIcon("AlarmClockMinus", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
]);
const AlarmClockOff = createLucideIcon("AlarmClockOff", [
  ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26", key: "3on8tj" }],
  ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15", key: "15ghsc" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.26 18.67 4 21", key: "yzmioq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M4 4 2 6", key: "1ycko6" }]
]);
const AlarmClockPlus = createLucideIcon("AlarmClockPlus", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
]);
const AlarmClock = createLucideIcon("AlarmClock", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
]);
const AlarmSmoke = createLucideIcon("AlarmSmoke", [
  ["path", { d: "M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z", key: "2c4fvq" }],
  ["path", { d: "m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8", key: "1vrndv" }],
  ["path", { d: "M16 21c0-2.5 2-2.5 2-5", key: "1o3eny" }],
  ["path", { d: "M11 21c0-2.5 2-2.5 2-5", key: "1sicvv" }],
  ["path", { d: "M6 21c0-2.5 2-2.5 2-5", key: "i3w1gp" }]
]);
const Album = createLucideIcon("Album", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
]);
const AlertOctagon = createLucideIcon("AlertOctagon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const AlignCenterHorizontal = createLucideIcon("AlignCenterHorizontal", [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" }],
  ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" }],
  ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" }],
  ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" }]
]);
const AlignCenterVertical = createLucideIcon("AlignCenterVertical", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" }],
  ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" }],
  ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" }],
  ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" }]
]);
const AlignCenter = createLucideIcon("AlignCenter", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
  ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }]
]);
const AlignEndHorizontal = createLucideIcon("AlignEndHorizontal", [
  ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2", key: "z5wdxg" }],
  ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2", key: "um7a8w" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }]
]);
const AlignEndVertical = createLucideIcon("AlignEndVertical", [
  ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2", key: "10wcwx" }],
  ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2", key: "4p5bwg" }],
  ["path", { d: "M22 22V2", key: "12ipfv" }]
]);
const AlignHorizontalDistributeCenter = createLucideIcon("AlignHorizontalDistributeCenter", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M17 22v-5", key: "4b6g73" }],
  ["path", { d: "M17 7V2", key: "hnrr36" }],
  ["path", { d: "M7 22v-3", key: "1r4jpn" }],
  ["path", { d: "M7 5V2", key: "liy1u9" }]
]);
const AlignHorizontalDistributeEnd = createLucideIcon("AlignHorizontalDistributeEnd", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M10 2v20", key: "uyc634" }],
  ["path", { d: "M20 2v20", key: "1tx262" }]
]);
const AlignHorizontalDistributeStart = createLucideIcon("AlignHorizontalDistributeStart", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M4 2v20", key: "gtpd5x" }],
  ["path", { d: "M14 2v20", key: "tg6bpw" }]
]);
const AlignHorizontalJustifyCenter = createLucideIcon("AlignHorizontalJustifyCenter", [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
]);
const AlignHorizontalJustifyEnd = createLucideIcon("AlignHorizontalJustifyEnd", [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2", key: "1ht384" }],
  ["path", { d: "M22 2v20", key: "40qfg1" }]
]);
const AlignHorizontalJustifyStart = createLucideIcon("AlignHorizontalJustifyStart", [
  ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2", key: "hsirpf" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
]);
const AlignHorizontalSpaceAround = createLucideIcon("AlignHorizontalSpaceAround", [
  ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2", key: "yn7j0q" }],
  ["path", { d: "M4 22V2", key: "tsjzd3" }],
  ["path", { d: "M20 22V2", key: "1bnhr8" }]
]);
const AlignHorizontalSpaceBetween = createLucideIcon("AlignHorizontalSpaceBetween", [
  ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2", key: "j77dae" }],
  ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2", key: "bq30hj" }],
  ["path", { d: "M3 2v20", key: "1d2pfg" }],
  ["path", { d: "M21 2v20", key: "p059bm" }]
]);
const AlignJustify = createLucideIcon("AlignJustify", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }]
]);
const AlignLeft = createLucideIcon("AlignLeft", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
]);
const AlignRight = createLucideIcon("AlignRight", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }]
]);
const AlignStartHorizontal = createLucideIcon("AlignStartHorizontal", [
  ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2", key: "1n4dg1" }],
  ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2", key: "17khns" }],
  ["path", { d: "M22 2H2", key: "fhrpnj" }]
]);
const AlignStartVertical = createLucideIcon("AlignStartVertical", [
  ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" }],
  ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
]);
const AlignVerticalDistributeCenter = createLucideIcon("AlignVerticalDistributeCenter", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M22 7h-5", key: "o2endc" }],
  ["path", { d: "M7 7H1", key: "105l6j" }],
  ["path", { d: "M22 17h-3", key: "1lwga1" }],
  ["path", { d: "M5 17H2", key: "1gx9xc" }]
]);
const AlignVerticalDistributeEnd = createLucideIcon("AlignVerticalDistributeEnd", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
]);
const AlignVerticalDistributeStart = createLucideIcon("AlignVerticalDistributeStart", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M2 4h20", key: "mda7wb" }]
]);
const AlignVerticalJustifyCenter = createLucideIcon("AlignVerticalJustifyCenter", [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
const AlignVerticalJustifyEnd = createLucideIcon("AlignVerticalJustifyEnd", [
  ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2", key: "4l4tp2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 22h20", key: "272qi7" }]
]);
const AlignVerticalJustifyStart = createLucideIcon("AlignVerticalJustifyStart", [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2", key: "13squh" }],
  ["path", { d: "M2 2h20", key: "1ennik" }]
]);
const AlignVerticalSpaceAround = createLucideIcon("AlignVerticalSpaceAround", [
  ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2", key: "b1zbii" }],
  ["path", { d: "M22 20H2", key: "1p1f7z" }],
  ["path", { d: "M22 4H2", key: "1b7qnq" }]
]);
const AlignVerticalSpaceBetween = createLucideIcon("AlignVerticalSpaceBetween", [
  ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2", key: "1w91an" }],
  ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2", key: "17wqzy" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M2 3h20", key: "91anmk" }]
]);
const Ambulance = createLucideIcon("Ambulance", [
  ["path", { d: "M10 10H6", key: "1bsnug" }],
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
      key: "lrkjwd"
    }
  ],
  ["path", { d: "M8 8v4", key: "1fwk8c" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
]);
const Ampersand = createLucideIcon("Ampersand", [
  [
    "path",
    {
      d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
      key: "1o9ehi"
    }
  ],
  ["path", { d: "M16 12h3", key: "4uvgyw" }]
]);
const Ampersands = createLucideIcon("Ampersands", [
  [
    "path",
    {
      d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "12lh1k"
    }
  ],
  [
    "path",
    {
      d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "173c68"
    }
  ]
]);
const Anchor = createLucideIcon("Anchor", [
  ["path", { d: "M12 22V8", key: "qkxhtm" }],
  ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3", key: "1hv3nh" }],
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }]
]);
const Angry = createLucideIcon("Angry", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["path", { d: "M7.5 8 10 9", key: "olxxln" }],
  ["path", { d: "m14 9 2.5-1", key: "1j6cij" }],
  ["path", { d: "M9 10h0", key: "1vxvly" }],
  ["path", { d: "M15 10h0", key: "1j6oav" }]
]);
const Annoyed = createLucideIcon("Annoyed", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M14 9h2", key: "116p9w" }]
]);
const Antenna = createLucideIcon("Antenna", [
  ["path", { d: "M2 12 7 2", key: "117k30" }],
  ["path", { d: "m7 12 5-10", key: "1tvx22" }],
  ["path", { d: "m12 12 5-10", key: "ev1o1a" }],
  ["path", { d: "m17 12 5-10", key: "1e4ti3" }],
  ["path", { d: "M4.5 7h15", key: "vlsxkz" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);
const Anvil = createLucideIcon("Anvil", [
  ["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4", key: "1hjpb6" }],
  [
    "path",
    { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z", key: "1qn45f" }
  ],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  [
    "path",
    { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1", key: "1fi4x8" }
  ]
]);
const Aperture = createLucideIcon("Aperture", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14.31 8 5.74 9.94", key: "1y6ab4" }],
  ["path", { d: "M9.69 8h11.48", key: "1wxppr" }],
  ["path", { d: "m7.38 12 5.74-9.94", key: "1grp0k" }],
  ["path", { d: "M9.69 16 3.95 6.06", key: "libnyf" }],
  ["path", { d: "M14.31 16H2.83", key: "x5fava" }],
  ["path", { d: "m16.62 12-5.74 9.94", key: "1vwawt" }]
]);
const AppWindow = createLucideIcon("AppWindow", [
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ["path", { d: "M10 4v4", key: "pp8u80" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["path", { d: "M6 4v4", key: "1svtjw" }]
]);
const Apple = createLucideIcon("Apple", [
  [
    "path",
    {
      d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
      key: "3s7exb"
    }
  ],
  ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }]
]);
const ArchiveRestore = createLucideIcon("ArchiveRestore", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }],
  ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }],
  ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }],
  ["path", { d: "M12 12v9", key: "192myk" }]
]);
const ArchiveX = createLucideIcon("ArchiveX", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "m9.5 17 5-5", key: "nakeu6" }],
  ["path", { d: "m9.5 12 5 5", key: "1hccrj" }]
]);
const Archive = createLucideIcon("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
const AreaChart = createLucideIcon("AreaChart", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M7 12v5h12V8l-5 5-4-4Z", key: "zxz28u" }]
]);
const Armchair = createLucideIcon("Armchair", [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
  [
    "path",
    {
      d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",
      key: "1e01m0"
    }
  ],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);
const ArrowBigDownDash = createLucideIcon("ArrowBigDownDash", [
  ["path", { d: "M15 5H9", key: "1tp3ed" }],
  ["path", { d: "M15 9v3h4l-7 7-7-7h4V9z", key: "ncdc4b" }]
]);
const ArrowBigDown = createLucideIcon("ArrowBigDown", [
  ["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z", key: "1thax2" }]
]);
const ArrowBigLeftDash = createLucideIcon("ArrowBigLeftDash", [
  ["path", { d: "M19 15V9", key: "1hci5f" }],
  ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z", key: "16tjna" }]
]);
const ArrowBigLeft = createLucideIcon("ArrowBigLeft", [
  ["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z", key: "lbrdak" }]
]);
const ArrowBigRightDash = createLucideIcon("ArrowBigRightDash", [
  ["path", { d: "M5 9v6", key: "158jrl" }],
  ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z", key: "1sg2xn" }]
]);
const ArrowBigRight = createLucideIcon("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
const ArrowBigUpDash = createLucideIcon("ArrowBigUpDash", [
  ["path", { d: "M9 19h6", key: "456am0" }],
  ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z", key: "1r2uve" }]
]);
const ArrowBigUp = createLucideIcon("ArrowBigUp", [
  ["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z", key: "1x06kx" }]
]);
const ArrowDown01 = createLucideIcon("ArrowDown01", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
]);
const ArrowDown10 = createLucideIcon("ArrowDown10", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
]);
const ArrowDownAZ = createLucideIcon("ArrowDownAZ", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
]);
const ArrowDownCircle = createLucideIcon("ArrowDownCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
]);
const ArrowDownFromLine = createLucideIcon("ArrowDownFromLine", [
  ["path", { d: "M19 3H5", key: "1236rx" }],
  ["path", { d: "M12 21V7", key: "gj6g52" }],
  ["path", { d: "m6 15 6 6 6-6", key: "h15q88" }]
]);
const ArrowDownLeftFromCircle = createLucideIcon("ArrowDownLeftFromCircle", [
  ["path", { d: "M2 12a10 10 0 1 1 10 10", key: "1yn6ov" }],
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "M8 22H2v-6", key: "sulq54" }]
]);
const ArrowDownLeftFromSquare = createLucideIcon("ArrowDownLeftFromSquare", [
  ["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6", key: "14qz4y" }],
  ["path", { d: "m3 21 9-9", key: "1jfql5" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
]);
const ArrowDownLeftSquare = createLucideIcon("ArrowDownLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 8-8 8", key: "166keh" }],
  ["path", { d: "M16 16H8V8", key: "1w2ppm" }]
]);
const ArrowDownLeft = createLucideIcon("ArrowDownLeft", [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
]);
const ArrowDownNarrowWide = createLucideIcon("ArrowDownNarrowWide", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h4", key: "6d7r33" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h10", key: "1438ji" }]
]);
const ArrowDownRightFromCircle = createLucideIcon("ArrowDownRightFromCircle", [
  ["path", { d: "M12 22a10 10 0 1 1 10-10", key: "130bv5" }],
  ["path", { d: "M22 22 12 12", key: "131aw7" }],
  ["path", { d: "M22 16v6h-6", key: "1gvm70" }]
]);
const ArrowDownRightFromSquare = createLucideIcon("ArrowDownRightFromSquare", [
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }],
  ["path", { d: "m21 21-9-9", key: "1et2py" }],
  ["path", { d: "M21 15v6h-6", key: "1jko0i" }]
]);
const ArrowDownRightSquare = createLucideIcon("ArrowDownRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "M16 8v8H8", key: "1lbpgo" }]
]);
const ArrowDownRight = createLucideIcon("ArrowDownRight", [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
]);
const ArrowDownSquare = createLucideIcon("ArrowDownSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
]);
const ArrowDownToDot = createLucideIcon("ArrowDownToDot", [
  ["path", { d: "M12 2v14", key: "jyx4ut" }],
  ["path", { d: "m19 9-7 7-7-7", key: "1oe3oy" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
]);
const ArrowDownToLine = createLucideIcon("ArrowDownToLine", [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
]);
const ArrowDownUp = createLucideIcon("ArrowDownUp", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
  ["path", { d: "M17 4v16", key: "7dpous" }]
]);
const ArrowDownWideNarrow = createLucideIcon("ArrowDownWideNarrow", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
]);
const ArrowDownZA = createLucideIcon("ArrowDownZA", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
]);
const ArrowDown = createLucideIcon("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const ArrowLeftCircle = createLucideIcon("ArrowLeftCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }]
]);
const ArrowLeftFromLine = createLucideIcon("ArrowLeftFromLine", [
  ["path", { d: "m9 6-6 6 6 6", key: "7v63n9" }],
  ["path", { d: "M3 12h14", key: "13k4hi" }],
  ["path", { d: "M21 19V5", key: "b4bplr" }]
]);
const ArrowLeftRight = createLucideIcon("ArrowLeftRight", [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
]);
const ArrowLeftSquare = createLucideIcon("ArrowLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }]
]);
const ArrowLeftToLine = createLucideIcon("ArrowLeftToLine", [
  ["path", { d: "M3 19V5", key: "rwsyhb" }],
  ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
  ["path", { d: "M7 12h14", key: "uoisry" }]
]);
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const ArrowRightCircle = createLucideIcon("ArrowRightCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
]);
const ArrowRightFromLine = createLucideIcon("ArrowRightFromLine", [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
]);
const ArrowRightLeft = createLucideIcon("ArrowRightLeft", [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);
const ArrowRightSquare = createLucideIcon("ArrowRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
]);
const ArrowRightToLine = createLucideIcon("ArrowRightToLine", [
  ["path", { d: "M17 12H3", key: "8awo09" }],
  ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
]);
const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const ArrowUp01 = createLucideIcon("ArrowUp01", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
]);
const ArrowUp10 = createLucideIcon("ArrowUp10", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
]);
const ArrowUpAZ = createLucideIcon("ArrowUpAZ", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
]);
const ArrowUpCircle = createLucideIcon("ArrowUpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
]);
const ArrowUpDown = createLucideIcon("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const ArrowUpFromDot = createLucideIcon("ArrowUpFromDot", [
  ["path", { d: "m5 9 7-7 7 7", key: "1hw5ic" }],
  ["path", { d: "M12 16V2", key: "ywoabb" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
]);
const ArrowUpFromLine = createLucideIcon("ArrowUpFromLine", [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
]);
const ArrowUpLeftFromCircle = createLucideIcon("ArrowUpLeftFromCircle", [
  ["path", { d: "M2 8V2h6", key: "hiwtdz" }],
  ["path", { d: "m2 2 10 10", key: "1oh8rs" }],
  ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }]
]);
const ArrowUpLeftFromSquare = createLucideIcon("ArrowUpLeftFromSquare", [
  ["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6", key: "14mv1t" }],
  ["path", { d: "m3 3 9 9", key: "rks13r" }],
  ["path", { d: "M3 9V3h6", key: "ira0h2" }]
]);
const ArrowUpLeftSquare = createLucideIcon("ArrowUpLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 16V8h8", key: "19xb1h" }],
  ["path", { d: "M16 16 8 8", key: "1qdy8n" }]
]);
const ArrowUpLeft = createLucideIcon("ArrowUpLeft", [
  ["path", { d: "M7 17V7h10", key: "11bw93" }],
  ["path", { d: "M17 17 7 7", key: "2786uv" }]
]);
const ArrowUpNarrowWide = createLucideIcon("ArrowUpNarrowWide", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
]);
const ArrowUpRightFromCircle = createLucideIcon("ArrowUpRightFromCircle", [
  ["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }],
  ["path", { d: "M22 2 12 12", key: "yg2myt" }],
  ["path", { d: "M16 2h6v6", key: "zan5cs" }]
]);
const ArrowUpRightFromSquare = createLucideIcon("ArrowUpRightFromSquare", [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
  ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
]);
const ArrowUpRightSquare = createLucideIcon("ArrowUpRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 8h8v8", key: "b65dnt" }],
  ["path", { d: "m8 16 8-8", key: "13b9ih" }]
]);
const ArrowUpRight = createLucideIcon("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
const ArrowUpSquare = createLucideIcon("ArrowUpSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
]);
const ArrowUpToLine = createLucideIcon("ArrowUpToLine", [
  ["path", { d: "M5 3h14", key: "7usisc" }],
  ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
  ["path", { d: "M12 7v14", key: "1akyts" }]
]);
const ArrowUpWideNarrow = createLucideIcon("ArrowUpWideNarrow", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h4", key: "1krc32" }]
]);
const ArrowUpZA = createLucideIcon("ArrowUpZA", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
]);
const ArrowUp = createLucideIcon("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const ArrowsUpFromLine = createLucideIcon("ArrowsUpFromLine", [
  ["path", { d: "m4 6 3-3 3 3", key: "9aidw8" }],
  ["path", { d: "M7 17V3", key: "19qxw1" }],
  ["path", { d: "m14 6 3-3 3 3", key: "6iy689" }],
  ["path", { d: "M17 17V3", key: "o0fmgi" }],
  ["path", { d: "M4 21h16", key: "1h09gz" }]
]);
const AsteriskSquare = createLucideIcon("AsteriskSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8.5 14 7-4", key: "12hpby" }],
  ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }]
]);
const Asterisk = createLucideIcon("Asterisk", [
  ["path", { d: "M12 6v12", key: "1vza4d" }],
  ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
  ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]
]);
const AtSign = createLucideIcon("AtSign", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
]);
const Atom = createLucideIcon("Atom", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
      key: "1l2ple"
    }
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
      key: "1wam0m"
    }
  ]
]);
const AudioLines = createLucideIcon("AudioLines", [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
]);
const AudioWaveform = createLucideIcon("AudioWaveform", [
  [
    "path",
    {
      d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
      key: "57tc96"
    }
  ]
]);
const Award = createLucideIcon("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
]);
const Axe = createLucideIcon("Axe", [
  ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9", key: "csbz4o" }],
  ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z", key: "113wfo" }]
]);
const Axis3d = createLucideIcon("Axis3d", [
  ["path", { d: "M4 4v16h16", key: "1s015l" }],
  ["path", { d: "m4 20 7-7", key: "17qe9y" }]
]);
const Baby = createLucideIcon("Baby", [
  ["path", { d: "M9 12h.01", key: "157uk2" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  [
    "path",
    {
      d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "5yv0yz"
    }
  ]
]);
const Backpack = createLucideIcon("Backpack", [
  [
    "path",
    { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z", key: "wvr1b5" }
  ],
  ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }],
  ["path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5", key: "xk3gvk" }],
  ["path", { d: "M8 10h8", key: "c7uz4u" }],
  ["path", { d: "M8 18h8", key: "1no2b1" }]
]);
const BadgeAlert = createLucideIcon("BadgeAlert", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const BadgeCent = createLucideIcon("BadgeCent", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M15.4 10a4 4 0 1 0 0 4", key: "2eqtx8" }]
]);
const BadgeCheck = createLucideIcon("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const BadgeDollarSign = createLucideIcon("BadgeDollarSign", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
]);
const BadgeEuro = createLucideIcon("BadgeEuro", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M7 12h5", key: "gblrwe" }],
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]
]);
const BadgeHelp = createLucideIcon("BadgeHelp", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17", key: "io3f8k" }]
]);
const BadgeIndianRupee = createLucideIcon("BadgeIndianRupee", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 8h8", key: "1bis0t" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }]
]);
const BadgeInfo = createLucideIcon("BadgeInfo", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }],
  ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }]
]);
const BadgeJapaneseYen = createLucideIcon("BadgeJapaneseYen", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 8 3 3v7", key: "17yadx" }],
  ["path", { d: "m12 11 3-3", key: "p4cfq1" }],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M9 16h6", key: "8wimt3" }]
]);
const BadgeMinus = createLucideIcon("BadgeMinus", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
const BadgePercent = createLucideIcon("BadgePercent", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
const BadgePlus = createLucideIcon("BadgePlus", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
const BadgePoundSterling = createLucideIcon("BadgePoundSterling", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 12h4", key: "qz6y1c" }],
  ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0", key: "3mlbjk" }],
  ["path", { d: "M8 16h7", key: "sbedsn" }]
]);
const BadgeRussianRuble = createLucideIcon("BadgeRussianRuble", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9 16h5", key: "1syiyw" }],
  ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9", key: "1ge9c1" }]
]);
const BadgeSwissFranc = createLucideIcon("BadgeSwissFranc", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M11 17V8h4", key: "1bfq6y" }],
  ["path", { d: "M11 12h3", key: "2eqnfz" }],
  ["path", { d: "M9 16h4", key: "1skf3a" }]
]);
const BadgeX = createLucideIcon("BadgeX", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
]);
const Badge = createLucideIcon("Badge", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ]
]);
const BaggageClaim = createLucideIcon("BaggageClaim", [
  ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" }],
  ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" }],
  ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1", key: "o6oiis" }],
  ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }],
  ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }]
]);
const Ban = createLucideIcon("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
]);
const Banana = createLucideIcon("Banana", [
  ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5", key: "1cscit" }],
  [
    "path",
    {
      d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
      key: "1y1nbv"
    }
  ]
]);
const Banknote = createLucideIcon("Banknote", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]);
const BarChart2 = createLucideIcon("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
]);
const BarChart3 = createLucideIcon("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const BarChart4 = createLucideIcon("BarChart4", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M13 17V9", key: "1fwyjl" }],
  ["path", { d: "M18 17V5", key: "sfb6ij" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const BarChartBig = createLucideIcon("BarChartBig", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["rect", { width: "4", height: "7", x: "7", y: "10", rx: "1", key: "14u6mf" }],
  ["rect", { width: "4", height: "12", x: "15", y: "5", rx: "1", key: "b3pek6" }]
]);
const BarChartHorizontalBig = createLucideIcon("BarChartHorizontalBig", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["rect", { width: "12", height: "4", x: "7", y: "5", rx: "1", key: "936jl1" }],
  ["rect", { width: "7", height: "4", x: "7", y: "13", rx: "1", key: "jqfkpy" }]
]);
const BarChartHorizontal = createLucideIcon("BarChartHorizontal", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M7 16h8", key: "srdodz" }],
  ["path", { d: "M7 11h12", key: "127s9w" }],
  ["path", { d: "M7 6h3", key: "w9rmul" }]
]);
const BarChart = createLucideIcon("BarChart", [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
]);
const Barcode = createLucideIcon("Barcode", [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M8 5v14", key: "1ybrkv" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "M17 5v14", key: "ycjyhj" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
]);
const Baseline = createLucideIcon("Baseline", [
  ["path", { d: "M4 20h16", key: "14thso" }],
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
const Bath = createLucideIcon("Bath", [
  [
    "path",
    {
      d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
      key: "1r8yf5"
    }
  ],
  ["line", { x1: "10", x2: "8", y1: "5", y2: "7", key: "h5g8z4" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "7", x2: "7", y1: "19", y2: "21", key: "16jp00" }],
  ["line", { x1: "17", x2: "17", y1: "19", y2: "21", key: "1pxrnk" }]
]);
const BatteryCharging = createLucideIcon("BatteryCharging", [
  ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1sdynx" }],
  ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1", key: "1gkd3k" }],
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);
const BatteryFull = createLucideIcon("BatteryFull", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }]
]);
const BatteryLow = createLucideIcon("BatteryLow", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }]
]);
const BatteryMedium = createLucideIcon("BatteryMedium", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }]
]);
const BatteryWarning = createLucideIcon("BatteryWarning", [
  ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2", key: "1if82c" }],
  ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2", key: "2pdlyl" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "10", x2: "10", y1: "7", y2: "13", key: "1uzyus" }],
  ["line", { x1: "10", x2: "10", y1: "17", y2: "17.01", key: "1y8k4g" }]
]);
const Battery = createLucideIcon("Battery", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);
const Beaker = createLucideIcon("Beaker", [
  ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }]
]);
const BeanOff = createLucideIcon("BeanOff", [
  [
    "path",
    {
      d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
      key: "bq3udt"
    }
  ],
  ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66", key: "17ccse" }],
  [
    "path",
    {
      d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
      key: "18zqgq"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Bean = createLucideIcon("Bean", [
  [
    "path",
    {
      d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
      key: "1tvzk7"
    }
  ],
  ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28", key: "2cyri2" }]
]);
const BedDouble = createLucideIcon("BedDouble", [
  ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
  ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
  ["path", { d: "M12 4v6", key: "1dcgq2" }],
  ["path", { d: "M2 18h20", key: "ajqnye" }]
]);
const BedSingle = createLucideIcon("BedSingle", [
  ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8", key: "1wm6mi" }],
  ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4", key: "4k93s5" }],
  ["path", { d: "M3 18h18", key: "1h113x" }]
]);
const Bed = createLucideIcon("Bed", [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }]
]);
const Beef = createLucideIcon("Beef", [
  ["circle", { cx: "12.5", cy: "8.5", r: "2.5", key: "9738u8" }],
  [
    "path",
    {
      d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",
      key: "o0f6za"
    }
  ],
  [
    "path",
    {
      d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
      key: "k7p6i0"
    }
  ]
]);
const Beer = createLucideIcon("Beer", [
  ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1", key: "1yp76v" }],
  ["path", { d: "M9 12v6", key: "1u1cab" }],
  ["path", { d: "M13 12v6", key: "1sugkk" }],
  [
    "path",
    {
      d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
      key: "1510fo"
    }
  ],
  ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "19jb7n" }]
]);
const BellDot = createLucideIcon("BellDot", [
  [
    "path",
    {
      d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",
      key: "xcehk"
    }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["circle", { cx: "18", cy: "8", r: "3", key: "1g0gzu" }]
]);
const BellElectric = createLucideIcon("BellElectric", [
  ["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9", key: "xve1fh" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["rect", { width: "10", height: "6", x: "4", y: "16", rx: "2", key: "17f3te" }],
  ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6", key: "n7odp6" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }]
]);
const BellMinus = createLucideIcon("BellMinus", [
  [
    "path",
    { d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2", key: "eck70s" }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }]
]);
const BellOff = createLucideIcon("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const BellPlus = createLucideIcon("BellPlus", [
  [
    "path",
    {
      d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",
      key: "guizqy"
    }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }],
  ["path", { d: "M18 5v6", key: "g5ayrv" }]
]);
const BellRing = createLucideIcon("BellRing", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }]
]);
const Bell = createLucideIcon("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
const BetweenHorizontalEnd = createLucideIcon("BetweenHorizontalEnd", [
  ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1", key: "11xb64" }],
  ["path", { d: "m22 15-3-3 3-3", key: "26chmm" }],
  ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1", key: "k6ky7n" }]
]);
const BetweenHorizontalStart = createLucideIcon("BetweenHorizontalStart", [
  ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1", key: "pkso9a" }],
  ["path", { d: "m2 9 3 3-3 3", key: "1agib5" }],
  ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1", key: "1q5fc1" }]
]);
const BetweenVerticalEnd = createLucideIcon("BetweenVerticalEnd", [
  ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1", key: "1fdu0f" }],
  ["path", { d: "m9 22 3-3 3 3", key: "17z65a" }],
  ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1", key: "1squn4" }]
]);
const BetweenVerticalStart = createLucideIcon("BetweenVerticalStart", [
  ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1", key: "1fjrkv" }],
  ["path", { d: "m15 2-3 3-3-3", key: "1uh6eb" }],
  ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1", key: "w3fjg8" }]
]);
const Bike = createLucideIcon("Bike", [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
]);
const Binary = createLucideIcon("Binary", [
  ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2", key: "p02svl" }],
  ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2", key: "xm4xkj" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 10h4", key: "ru81e7" }],
  ["path", { d: "M6 14h2v6", key: "16z9wg" }],
  ["path", { d: "M14 4h2v6", key: "1idq9u" }]
]);
const Biohazard = createLucideIcon("Biohazard", [
  ["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }],
  ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6", key: "17bolr" }],
  ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }],
  ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5", key: "wtwa5u" }],
  ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }],
  ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2", key: "m7qszh" }],
  ["path", { d: "M12 13.9v1.6", key: "zfyyim" }],
  ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }],
  ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }],
  ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }]
]);
const Bird = createLucideIcon("Bird", [
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }],
  ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
  ["path", { d: "M10 18v3", key: "1yea0a" }],
  ["path", { d: "M14 17.75V21", key: "1pymcb" }],
  ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]
]);
const Bitcoin = createLucideIcon("Bitcoin", [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
      key: "yr8idg"
    }
  ]
]);
const Blend = createLucideIcon("Blend", [
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["circle", { cx: "15", cy: "15", r: "7", key: "19ennj" }]
]);
const Blinds = createLucideIcon("Blinds", [
  ["path", { d: "M3 3h18", key: "o7r712" }],
  ["path", { d: "M20 7H8", key: "gd2fo2" }],
  ["path", { d: "M20 11H8", key: "1ynp89" }],
  ["path", { d: "M10 19h10", key: "19hjk5" }],
  ["path", { d: "M8 15h12", key: "1yqzne" }],
  ["path", { d: "M4 3v14", key: "fggqzn" }],
  ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }]
]);
const Blocks = createLucideIcon("Blocks", [
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  [
    "path",
    {
      d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
      key: "1fpvtg"
    }
  ]
]);
const BluetoothConnected = createLucideIcon("BluetoothConnected", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "12", key: "1rsjjs" }],
  ["line", { x1: "3", x2: "6", y1: "12", y2: "12", key: "11yl8c" }]
]);
const BluetoothOff = createLucideIcon("BluetoothOff", [
  ["path", { d: "m17 17-5 5V12l-5 5", key: "v5aci6" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M14.5 9.5 17 7l-5-5v4.5", key: "1kddfz" }]
]);
const BluetoothSearching = createLucideIcon("BluetoothSearching", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66", key: "k8tn1j" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }]
]);
const Bluetooth = createLucideIcon("Bluetooth", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }]
]);
const Bold = createLucideIcon("Bold", [
  ["path", { d: "M14 12a4 4 0 0 0 0-8H6v8", key: "v2sylx" }],
  ["path", { d: "M15 20a4 4 0 0 0 0-8H6v8Z", key: "1ef5ya" }]
]);
const Bolt = createLucideIcon("Bolt", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
]);
const Bomb = createLucideIcon("Bomb", [
  ["circle", { cx: "11", cy: "13", r: "9", key: "hd149" }],
  [
    "path",
    {
      d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
      key: "jp4j1b"
    }
  ],
  ["path", { d: "m22 2-1.5 1.5", key: "ay92ug" }]
]);
const Bone = createLucideIcon("Bone", [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
      key: "w610uw"
    }
  ]
]);
const BookA = createLucideIcon("BookA", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m8 13 4-7 4 7", key: "4rari8" }],
  ["path", { d: "M9.1 11h5.7", key: "1gkovt" }]
]);
const BookAudio = createLucideIcon("BookAudio", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M8 8v3", key: "1qzp49" }],
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M16 8v3", key: "gejaml" }]
]);
const BookCheck = createLucideIcon("BookCheck", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]
]);
const BookCopy = createLucideIcon("BookCopy", [
  ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11", key: "spzkk5" }],
  ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1", key: "16gqf9" }],
  ["path", { d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12", key: "1owzki" }]
]);
const BookDashed = createLucideIcon("BookDashed", [
  ["path", { d: "M20 22h-2", key: "1rpnb6" }],
  ["path", { d: "M20 15v2h-2", key: "fph276" }],
  ["path", { d: "M4 19.5V15", key: "6gr39e" }],
  ["path", { d: "M20 8v3", key: "deu0bs" }],
  ["path", { d: "M18 2h2v2", key: "180o53" }],
  ["path", { d: "M4 11V9", key: "v3xsx8" }],
  ["path", { d: "M12 2h2", key: "cvn524" }],
  ["path", { d: "M12 22h2", key: "kn7ki6" }],
  ["path", { d: "M12 17h2", key: "13u4lk" }],
  ["path", { d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8", key: "fiseg2" }],
  ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8", key: "wywhs9" }]
]);
const BookDown = createLucideIcon("BookDown", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3 3 3-3", key: "zt5b4y" }]
]);
const BookHeadphones = createLucideIcon("BookHeadphones", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2", key: "1vsqkj" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }]
]);
const BookHeart = createLucideIcon("BookHeart", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  [
    "path",
    {
      d: "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",
      key: "1dlbw1"
    }
  ]
]);
const BookImage = createLucideIcon("BookImage", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "10", cy: "8", r: "2", key: "2qkj4p" }],
  ["path", { d: "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17", key: "160say" }]
]);
const BookKey = createLucideIcon("BookKey", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14", key: "1gfsgw" }],
  ["path", { d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20", key: "zb0ngp" }],
  ["circle", { cx: "14", cy: "8", r: "2", key: "u49eql" }],
  ["path", { d: "m20 2-4.5 4.5", key: "1sppr8" }],
  ["path", { d: "m19 3 1 1", key: "ze14oc" }]
]);
const BookLock = createLucideIcon("BookLock", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10", key: "18wgow" }],
  ["path", { d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20", key: "dpch1j" }],
  ["rect", { width: "8", height: "5", x: "12", y: "6", rx: "1", key: "9nqwug" }],
  ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2", key: "1aquzs" }]
]);
const BookMarked = createLucideIcon("BookMarked", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["polyline", { points: "10 2 10 10 13 7 16 10 16 2", key: "13o6vz" }]
]);
const BookMinus = createLucideIcon("BookMinus", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
const BookOpenCheck = createLucideIcon("BookOpenCheck", [
  ["path", { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z", key: "1i8u0n" }],
  ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
  ["path", { d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3", key: "jb5l51" }]
]);
const BookOpenText = createLucideIcon("BookOpenText", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
  ["path", { d: "M6 8h2", key: "30oboj" }],
  ["path", { d: "M6 12h2", key: "32wvfc" }],
  ["path", { d: "M16 8h2", key: "msurwy" }],
  ["path", { d: "M16 12h2", key: "7q9ll5" }]
]);
const BookOpen = createLucideIcon("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
const BookPlus = createLucideIcon("BookPlus", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }]
]);
const BookText = createLucideIcon("BookText", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M8 7h6", key: "1f0q6e" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }]
]);
const BookType = createLucideIcon("BookType", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M16 8V6H8v2", key: "x8j6u4" }],
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M10 13h4", key: "ytezjc" }]
]);
const BookUp2 = createLucideIcon("BookUp2", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2", key: "1lorq7" }],
  ["path", { d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "1nfm9i" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
]);
const BookUp = createLucideIcon("BookUp", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
]);
const BookUser = createLucideIcon("BookUser", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }]
]);
const BookX = createLucideIcon("BookX", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m14.5 7-5 5", key: "dy991v" }],
  ["path", { d: "m9.5 7 5 5", key: "s45iea" }]
]);
const Book = createLucideIcon("Book", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }]
]);
const BookmarkCheck = createLucideIcon("BookmarkCheck", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
]);
const BookmarkMinus = createLucideIcon("BookmarkMinus", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
  ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
]);
const BookmarkPlus = createLucideIcon("BookmarkPlus", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
  ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }],
  ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
]);
const BookmarkX = createLucideIcon("BookmarkX", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
]);
const Bookmark = createLucideIcon("Bookmark", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
]);
const BoomBox = createLucideIcon("BoomBox", [
  ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "vvzvr1" }],
  ["path", { d: "M8 8v1", key: "xcqmfk" }],
  ["path", { d: "M12 8v1", key: "1rj8u4" }],
  ["path", { d: "M16 8v1", key: "1q12zr" }],
  ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2", key: "igpb89" }],
  ["circle", { cx: "8", cy: "15", r: "2", key: "fa4a8s" }],
  ["circle", { cx: "16", cy: "15", r: "2", key: "14c3ya" }]
]);
const BotMessageSquare = createLucideIcon("BotMessageSquare", [
  ["path", { d: "M12 6V2H8", key: "1155em" }],
  ["path", { d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z", key: "w2lp3e" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M9 11v2", key: "1ueba0" }],
  ["path", { d: "M15 11v2", key: "i11awn" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }]
]);
const BoxSelect = createLucideIcon("BoxSelect", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }]
]);
const Box = createLucideIcon("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
const Boxes = createLucideIcon("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
]);
const Braces = createLucideIcon("Braces", [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
]);
const Brackets = createLucideIcon("Brackets", [
  ["path", { d: "M16 3h3v18h-3", key: "1yor1f" }],
  ["path", { d: "M8 21H5V3h3", key: "1qrfwo" }]
]);
const BrainCircuit = createLucideIcon("BrainCircuit", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
]);
const BrainCog = createLucideIcon("BrainCog", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",
      key: "1kgmhc"
    }
  ],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m15.7 10.4-.9.4", key: "ayzo6p" }],
  ["path", { d: "m9.2 13.2-.9.4", key: "1uzb3g" }],
  ["path", { d: "m13.6 15.7-.4-.9", key: "11ifqf" }],
  ["path", { d: "m10.8 9.2-.4-.9", key: "1pmk2v" }],
  ["path", { d: "m15.7 13.5-.9-.4", key: "7ng02m" }],
  ["path", { d: "m9.2 10.9-.9-.4", key: "1x66zd" }],
  ["path", { d: "m10.5 15.7.4-.9", key: "3js94g" }],
  ["path", { d: "m13.1 9.2.4-.9", key: "18n7mc" }]
]);
const Brain = createLucideIcon("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);
const BrickWall = createLucideIcon("BrickWall", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 9v6", key: "199k2o" }],
  ["path", { d: "M16 15v6", key: "8rj2es" }],
  ["path", { d: "M16 3v6", key: "1j6rpj" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M8 15v6", key: "1stoo3" }],
  ["path", { d: "M8 3v6", key: "vlvjmk" }]
]);
const Briefcase = createLucideIcon("Briefcase", [
  ["rect", { width: "20", height: "14", x: "2", y: "7", rx: "2", ry: "2", key: "eto64e" }],
  ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }]
]);
const BringToFront = createLucideIcon("BringToFront", [
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2", key: "yj20xf" }],
  ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2", key: "1ltk23" }],
  ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2", key: "1q24h9" }]
]);
const Brush = createLucideIcon("Brush", [
  ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
  [
    "path",
    {
      d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      key: "z0l1mu"
    }
  ]
]);
const BugOff = createLucideIcon("BugOff", [
  ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2", key: "vl8zik" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3", key: "1ou0bd" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13", key: "1njkjs" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }]
]);
const BugPlay = createLucideIcon("BugPlay", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5", key: "1tjixy" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "m12 12 8 5-8 5Z", key: "1ydf81" }]
]);
const Bug = createLucideIcon("Bug", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
]);
const Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
const Building = createLucideIcon("Building", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
]);
const BusFront = createLucideIcon("BusFront", [
  ["path", { d: "M4 6 2 7", key: "1mqr15" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "m22 7-2-1", key: "1umjhc" }],
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 21v-2", key: "sqyl04" }]
]);
const Bus = createLucideIcon("Bus", [
  ["path", { d: "M8 6v6", key: "18i7km" }],
  ["path", { d: "M15 6v6", key: "1sg6z9" }],
  ["path", { d: "M2 12h19.6", key: "de5uta" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
      key: "1wwztk"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
]);
const CableCar = createLucideIcon("CableCar", [
  ["path", { d: "M10 3h.01", key: "lbucoy" }],
  ["path", { d: "M14 2h.01", key: "1k8aa1" }],
  ["path", { d: "m2 9 20-5", key: "1kz0j5" }],
  ["path", { d: "M12 12V6.5", key: "1vbrij" }],
  ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3", key: "if91er" }],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);
const Cable = createLucideIcon("Cable", [
  ["path", { d: "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z", key: "1s6oa5" }],
  ["path", { d: "M3 5V3", key: "1k5hjh" }],
  ["path", { d: "M7 5V3", key: "1t1388" }],
  ["path", { d: "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9", key: "1ytv72" }],
  ["path", { d: "M17 21v-2", key: "ds4u3f" }],
  ["path", { d: "M21 21v-2", key: "eo0ou" }],
  ["path", { d: "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z", key: "sdz6o8" }]
]);
const CakeSlice = createLucideIcon("CakeSlice", [
  ["circle", { cx: "9", cy: "7", r: "2", key: "1305pl" }],
  [
    "path",
    { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6", key: "xle13f" }
  ],
  ["path", { d: "M16 13H3", key: "1wpj08" }],
  ["path", { d: "M16 17H3", key: "3lvfcd" }]
]);
const Cake = createLucideIcon("Cake", [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h0.01", key: "hsw7lv" }],
  ["path", { d: "M12 4h0.01", key: "1e3d8f" }],
  ["path", { d: "M17 4h0.01", key: "p7cxgy" }]
]);
const Calculator = createLucideIcon("Calculator", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
const CalendarCheck2 = createLucideIcon("CalendarCheck2", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
]);
const CalendarCheck = createLucideIcon("CalendarCheck", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
]);
const CalendarClock = createLucideIcon("CalendarClock", [
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
]);
const CalendarDays = createLucideIcon("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
const CalendarFold = createLucideIcon("CalendarFold", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z", key: "kg77oy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M15 22v-4a2 2 0 0 1 2-2h4", key: "1gnbqr" }]
]);
const CalendarHeart = createLucideIcon("CalendarHeart", [
  ["path", { d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7", key: "136lmk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "path",
    {
      d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
      key: "1t7hil"
    }
  ]
]);
const CalendarMinus2 = createLucideIcon("CalendarMinus2", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M10 16h4", key: "17e571" }]
]);
const CalendarMinus = createLucideIcon("CalendarMinus", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);
const CalendarOff = createLucideIcon("CalendarOff", [
  ["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18", key: "16swn3" }],
  ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h7", key: "1wap6i" }],
  ["path", { d: "M21 10h-5.5", key: "quycpq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const CalendarPlus2 = createLucideIcon("CalendarPlus2", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M10 16h4", key: "17e571" }],
  ["path", { d: "M12 14v4", key: "1thi36" }]
]);
const CalendarPlus = createLucideIcon("CalendarPlus", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }]
]);
const CalendarRange = createLucideIcon("CalendarRange", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
]);
const CalendarSearch = createLucideIcon("CalendarSearch", [
  ["path", { d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5", key: "1e09qw" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
]);
const CalendarX2 = createLucideIcon("CalendarX2", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m17 22 5-5", key: "1k6ppv" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }]
]);
const CalendarX = createLucideIcon("CalendarX", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m14 14-4 4", key: "rymu2i" }],
  ["path", { d: "m10 14 4 4", key: "3sz06r" }]
]);
const Calendar = createLucideIcon("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const CameraOff = createLucideIcon("CameraOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16", key: "qmtpty" }],
  ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5", key: "1ufyfc" }],
  ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88", key: "11zox6" }]
]);
const Camera = createLucideIcon("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
const CandlestickChart = createLucideIcon("CandlestickChart", [
  ["path", { d: "M9 5v4", key: "14uxtq" }],
  ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" }],
  ["path", { d: "M9 15v2", key: "r5rk32" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" }],
  ["path", { d: "M17 13v3", key: "5l0wba" }],
  ["path", { d: "M3 3v18h18", key: "1s2lah" }]
]);
const CandyCane = createLucideIcon("CandyCane", [
  [
    "path",
    {
      d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",
      key: "isaq8g"
    }
  ],
  ["path", { d: "M17.75 7 15 2.1", key: "12x7e8" }],
  ["path", { d: "M10.9 4.8 13 9", key: "100a87" }],
  ["path", { d: "m7.9 9.7 2 4.4", key: "ntfhaj" }],
  ["path", { d: "M4.9 14.7 7 18.9", key: "1x43jy" }]
]);
const CandyOff = createLucideIcon("CandyOff", [
  ["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1", key: "1ff4ui" }],
  [
    "path",
    { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657", key: "1sbrv4" }
  ],
  ["path", { d: "M14 16.5V14", key: "1maf8j" }],
  ["path", { d: "M14 6.5v1.843", key: "1a6u6t" }],
  ["path", { d: "M10 10v7.5", key: "80pj65" }],
  [
    "path",
    {
      d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",
      key: "11a9mt"
    }
  ],
  [
    "path",
    {
      d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",
      key: "3mjmon"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Candy = createLucideIcon("Candy", [
  ["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z", key: "ue6khb" }],
  ["path", { d: "M14 6.5v10", key: "5xnk7c" }],
  ["path", { d: "M10 7.5v10", key: "1uew51" }],
  [
    "path",
    { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1", key: "b9cp6k" }
  ],
  [
    "path",
    { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1", key: "5lney8" }
  ]
]);
const CaptionsOff = createLucideIcon("CaptionsOff", [
  ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5", key: "jqtk4d" }],
  ["path", { d: "M17 11h-.5", key: "1961ue" }],
  ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2", key: "1keqsi" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M7 11h4", key: "1o1z6v" }],
  ["path", { d: "M7 15h2.5", key: "1ina1g" }]
]);
const Captions = createLucideIcon("Captions", [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
]);
const CarFront = createLucideIcon("CarFront", [
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);
const CarTaxiFront = createLucideIcon("CarTaxiFront", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);
const Car = createLucideIcon("Car", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
]);
const Caravan = createLucideIcon("Caravan", [
  ["rect", { width: "4", height: "4", x: "2", y: "9", key: "1vcvhd" }],
  ["rect", { width: "4", height: "10", x: "10", y: "9", key: "1b7ev2" }],
  ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2", key: "19jm3t" }],
  ["circle", { cx: "8", cy: "19", r: "2", key: "t8fc5s" }],
  ["path", { d: "M10 19h12v-2", key: "1yu2qx" }]
]);
const Carrot = createLucideIcon("Carrot", [
  [
    "path",
    {
      d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
      key: "rfqxbe"
    }
  ],
  ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z", key: "6b25w4" }],
  ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z", key: "fn65lo" }]
]);
const CaseLower = createLucideIcon("CaseLower", [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }]
]);
const CaseSensitive = createLucideIcon("CaseSensitive", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["circle", { cx: "18", cy: "12", r: "3", key: "1kchzo" }],
  ["path", { d: "M21 9v6", key: "anns31" }]
]);
const CaseUpper = createLucideIcon("CaseUpper", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4", key: "1sqfas" }]
]);
const CassetteTape = createLucideIcon("CassetteTape", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["circle", { cx: "8", cy: "10", r: "2", key: "1xl4ub" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "10", r: "2", key: "r14t7q" }],
  ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3", key: "l01ucn" }]
]);
const Cast = createLucideIcon("Cast", [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
]);
const Castle = createLucideIcon("Castle", [
  ["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "109fe4" }],
  ["path", { d: "M18 11V4H6v7", key: "mon5oj" }],
  ["path", { d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4", key: "jdggr9" }],
  ["path", { d: "M22 11V9", key: "3zbp94" }],
  ["path", { d: "M2 11V9", key: "1x5rnq" }],
  ["path", { d: "M6 4V2", key: "1rsq15" }],
  ["path", { d: "M18 4V2", key: "1jsdo1" }],
  ["path", { d: "M10 4V2", key: "75d9ly" }],
  ["path", { d: "M14 4V2", key: "8nj3z6" }]
]);
const Cat = createLucideIcon("Cat", [
  [
    "path",
    {
      d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
      key: "x6xyqk"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }]
]);
const Cctv = createLucideIcon("Cctv", [
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M16.75 12H22l-3.5 7-3.09-4.32", key: "1h9vqe" }],
  [
    "path",
    {
      d: "M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",
      key: "q5d122"
    }
  ],
  ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }],
  ["path", { d: "M2 21v-4", key: "l40lih" }]
]);
const CheckCheck = createLucideIcon("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const CheckCircle = createLucideIcon("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
const CheckSquare2 = createLucideIcon("CheckSquare2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const CheckSquare = createLucideIcon("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
const ChefHat = createLucideIcon("ChefHat", [
  [
    "path",
    {
      d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",
      key: "z3ra2g"
    }
  ],
  ["line", { x1: "6", x2: "18", y1: "17", y2: "17", key: "12q60k" }]
]);
const Cherry = createLucideIcon("Cherry", [
  ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "cvxqlc" }],
  ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "1ostrc" }],
  ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12", key: "hqx58h" }],
  ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z", key: "eykp1o" }]
]);
const ChevronDownCircle = createLucideIcon("ChevronDownCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]);
const ChevronDownSquare = createLucideIcon("ChevronDownSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]);
const ChevronFirst = createLucideIcon("ChevronFirst", [
  ["path", { d: "m17 18-6-6 6-6", key: "1yerx2" }],
  ["path", { d: "M7 6v12", key: "1p53r6" }]
]);
const ChevronLast = createLucideIcon("ChevronLast", [
  ["path", { d: "m7 18 6-6-6-6", key: "lwmzdw" }],
  ["path", { d: "M17 6v12", key: "1o0aio" }]
]);
const ChevronLeftCircle = createLucideIcon("ChevronLeftCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
]);
const ChevronLeftSquare = createLucideIcon("ChevronLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
]);
const ChevronRightCircle = createLucideIcon("ChevronRightCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]);
const ChevronRightSquare = createLucideIcon("ChevronRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]);
const ChevronUpCircle = createLucideIcon("ChevronUpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
]);
const ChevronUpSquare = createLucideIcon("ChevronUpSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
]);
const ChevronsDownUp = createLucideIcon("ChevronsDownUp", [
  ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
  ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
]);
const ChevronsDown = createLucideIcon("ChevronsDown", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
]);
const ChevronsLeftRight = createLucideIcon("ChevronsLeftRight", [
  ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
  ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]
]);
const ChevronsLeft = createLucideIcon("ChevronsLeft", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const ChevronsRightLeft = createLucideIcon("ChevronsRightLeft", [
  ["path", { d: "m20 17-5-5 5-5", key: "30x0n2" }],
  ["path", { d: "m4 17 5-5-5-5", key: "16spf4" }]
]);
const ChevronsRight = createLucideIcon("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const ChevronsUpDown = createLucideIcon("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const ChevronsUp = createLucideIcon("ChevronsUp", [
  ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
  ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
]);
const Chrome = createLucideIcon("Chrome", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
  ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
  ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }]
]);
const Church = createLucideIcon("Church", [
  ["path", { d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2", key: "gy5gyo" }],
  ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
  ["path", { d: "M18 22V5l-6-3-6 3v17", key: "1hsnhq" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M10 9h4", key: "u4k05v" }]
]);
const CigaretteOff = createLucideIcon("CigaretteOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M12 12H2v4h14", key: "91gsaq" }],
  ["path", { d: "M22 12v4", key: "142cbu" }],
  ["path", { d: "M18 12h-.5", key: "12ymji" }],
  ["path", { d: "M7 12v4", key: "jqww69" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
]);
const Cigarette = createLucideIcon("Cigarette", [
  ["path", { d: "M18 12H2v4h16", key: "2rt1hm" }],
  ["path", { d: "M22 12v4", key: "142cbu" }],
  ["path", { d: "M7 12v4", key: "jqww69" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
]);
const CircleDashed = createLucideIcon("CircleDashed", [
  ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
  ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
  ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
  ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
  ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
  ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
  ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
  ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }]
]);
const CircleDollarSign = createLucideIcon("CircleDollarSign", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
]);
const CircleDotDashed = createLucideIcon("CircleDotDashed", [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
const CircleDot = createLucideIcon("CircleDot", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
const CircleEllipsis = createLucideIcon("CircleEllipsis", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);
const CircleEqual = createLucideIcon("CircleEqual", [
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const CircleFadingPlus = createLucideIcon("CircleFadingPlus", [
  ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }],
  ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }],
  ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }],
  ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }]
]);
const CircleOff = createLucideIcon("CircleOff", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
]);
const CircleSlash2 = createLucideIcon("CircleSlash2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }]
]);
const CircleSlash = createLucideIcon("CircleSlash", [
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const CircleUserRound = createLucideIcon("CircleUserRound", [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const CircleUser = createLucideIcon("CircleUser", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
]);
const CircuitBoard = createLucideIcon("CircuitBoard", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }],
  ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }]
]);
const Citrus = createLucideIcon("Citrus", [
  [
    "path",
    {
      d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
      key: "4ite01"
    }
  ],
  ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }],
  ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }],
  ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }]
]);
const Clapperboard = createLucideIcon("Clapperboard", [
  [
    "path",
    { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
  ],
  ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
  ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
]);
const ClipboardCheck = createLucideIcon("ClipboardCheck", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
]);
const ClipboardCopy = createLucideIcon("ClipboardCopy", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
]);
const ClipboardList = createLucideIcon("ClipboardList", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
const ClipboardMinus = createLucideIcon("ClipboardMinus", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 14h6", key: "159ibu" }]
]);
const ClipboardPaste = createLucideIcon("ClipboardPaste", [
  [
    "path",
    { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z", key: "1pp7kr" }
  ],
  [
    "path",
    {
      d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",
      key: "2ik1ml"
    }
  ],
  ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }]
]);
const ClipboardPenLine = createLucideIcon("ClipboardPenLine", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5", key: "1but9f" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1", key: "1p8n7l" }],
  ["path", { d: "M8 18h1", key: "13wk12" }],
  ["path", { d: "M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z", key: "yg2pdb" }]
]);
const ClipboardPen = createLucideIcon("ClipboardPen", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }],
  ["path", { d: "M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z", key: "hnx206" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" }],
  ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }]
]);
const ClipboardPlus = createLucideIcon("ClipboardPlus", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 14h6", key: "159ibu" }],
  ["path", { d: "M12 17v-6", key: "1y8rbf" }]
]);
const ClipboardType = createLucideIcon("ClipboardType", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 12v-1h6v1", key: "iehl6m" }],
  ["path", { d: "M11 17h2", key: "12w5me" }],
  ["path", { d: "M12 11v6", key: "1bwqyc" }]
]);
const ClipboardX = createLucideIcon("ClipboardX", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m15 11-6 6", key: "1toa9n" }],
  ["path", { d: "m9 11 6 6", key: "wlibny" }]
]);
const Clipboard = createLucideIcon("Clipboard", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
]);
const Clock1 = createLucideIcon("Clock1", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 14.5 8", key: "12zbmj" }]
]);
const Clock10 = createLucideIcon("Clock10", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 8 10", key: "atfzqc" }]
]);
const Clock11 = createLucideIcon("Clock11", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 9.5 8", key: "l5bg6f" }]
]);
const Clock12 = createLucideIcon("Clock12", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12", key: "1fub01" }]
]);
const Clock2 = createLucideIcon("Clock2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 10", key: "1g230d" }]
]);
const Clock3 = createLucideIcon("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
const Clock4 = createLucideIcon("Clock4", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
const Clock5 = createLucideIcon("Clock5", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 14.5 16", key: "1pcbox" }]
]);
const Clock6 = createLucideIcon("Clock6", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 12 16.5", key: "hb2qv6" }]
]);
const Clock7 = createLucideIcon("Clock7", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 9.5 16", key: "ka3394" }]
]);
const Clock8 = createLucideIcon("Clock8", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 8 14", key: "tmc9b4" }]
]);
const Clock9 = createLucideIcon("Clock9", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 7.5 12", key: "1k60p0" }]
]);
const CloudCog = createLucideIcon("CloudCog", [
  ["circle", { cx: "12", cy: "17", r: "3", key: "1spfwm" }],
  ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2", key: "zaobp" }],
  ["path", { d: "m15.7 18.4-.9-.3", key: "4qxpbn" }],
  ["path", { d: "m9.2 15.9-.9-.3", key: "17q7o2" }],
  ["path", { d: "m10.6 20.7.3-.9", key: "1pf4s2" }],
  ["path", { d: "m13.1 14.2.3-.9", key: "1mnuqm" }],
  ["path", { d: "m13.6 20.7-.4-1", key: "1jpd1m" }],
  ["path", { d: "m10.8 14.3-.4-1", key: "17ugyy" }],
  ["path", { d: "m8.3 18.6 1-.4", key: "s42vdx" }],
  ["path", { d: "m14.7 15.8 1-.4", key: "2wizun" }]
]);
const CloudDrizzle = createLucideIcon("CloudDrizzle", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 19v1", key: "1dk2by" }],
  ["path", { d: "M8 14v1", key: "84yxot" }],
  ["path", { d: "M16 19v1", key: "v220m7" }],
  ["path", { d: "M16 14v1", key: "g12gj6" }],
  ["path", { d: "M12 21v1", key: "q8vafk" }],
  ["path", { d: "M12 16v1", key: "1mx6rx" }]
]);
const CloudFog = createLucideIcon("CloudFog", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 17H7", key: "pygtm1" }],
  ["path", { d: "M17 21H9", key: "1u2q02" }]
]);
const CloudHail = createLucideIcon("CloudHail", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v2", key: "a1is7l" }],
  ["path", { d: "M8 14v2", key: "1e9m6t" }],
  ["path", { d: "M16 20h.01", key: "xwek51" }],
  ["path", { d: "M8 20h.01", key: "1vjney" }],
  ["path", { d: "M12 16v2", key: "z66u1j" }],
  ["path", { d: "M12 22h.01", key: "1urd7a" }]
]);
const CloudLightning = createLucideIcon("CloudLightning", [
  ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
  ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
]);
const CloudMoonRain = createLucideIcon("CloudMoonRain", [
  [
    "path",
    {
      d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
      key: "u82z8m"
    }
  ],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
]);
const CloudMoon = createLucideIcon("CloudMoon", [
  ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z", key: "p44pc9" }],
  ["path", { d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197", key: "16nha0" }]
]);
const CloudOff = createLucideIcon("CloudOff", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }],
  [
    "path",
    { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }
  ]
]);
const CloudRainWind = createLucideIcon("CloudRainWind", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m9.2 22 3-7", key: "sb5f6j" }],
  ["path", { d: "m9 13-3 7", key: "500co5" }],
  ["path", { d: "m17 13-3 7", key: "8t2fiy" }]
]);
const CloudRain = createLucideIcon("CloudRain", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);
const CloudSnow = createLucideIcon("CloudSnow", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M8 19h.01", key: "puxtts" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M12 21h.01", key: "h35vbk" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M16 19h.01", key: "1vcnzz" }]
]);
const CloudSunRain = createLucideIcon("CloudSunRain", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
]);
const CloudSun = createLucideIcon("CloudSun", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]
]);
const Cloud = createLucideIcon("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
const Cloudy = createLucideIcon("Cloudy", [
  ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "gqqjvc" }],
  ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5", key: "1p2s76" }]
]);
const Clover = createLucideIcon("Clover", [
  ["path", { d: "M16.17 7.83 2 22", key: "t58vo8" }],
  [
    "path",
    {
      d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",
      key: "17k36q"
    }
  ],
  ["path", { d: "m7.83 7.83 8.34 8.34", key: "1d7sxk" }]
]);
const Club = createLucideIcon("Club", [
  [
    "path",
    {
      d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
      key: "27yuqz"
    }
  ],
  ["path", { d: "M12 17.66L12 22", key: "ogfahf" }]
]);
const Code2 = createLucideIcon("Code2", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);
const CodeSquare = createLucideIcon("CodeSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }]
]);
const Code = createLucideIcon("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
const Codepen = createLucideIcon("Codepen", [
  ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2", key: "srzb37" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5", key: "1t73f2" }],
  ["polyline", { points: "22 8.5 12 15.5 2 8.5", key: "ajlxae" }],
  ["polyline", { points: "2 15.5 12 8.5 22 15.5", key: "susrui" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5", key: "2cldga" }]
]);
const Codesandbox = createLucideIcon("Codesandbox", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }],
  ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }],
  ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }],
  ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" }],
  ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" }]
]);
const Coffee = createLucideIcon("Coffee", [
  ["path", { d: "M17 8h1a4 4 0 1 1 0 8h-1", key: "jx4kbh" }],
  ["path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z", key: "1bxrl0" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "4", key: "1cr9l3" }],
  ["line", { x1: "10", x2: "10", y1: "2", y2: "4", key: "170wym" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "4", key: "1c5f70" }]
]);
const Cog = createLucideIcon("Cog", [
  ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
  ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
]);
const Coins = createLucideIcon("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
]);
const Columns2 = createLucideIcon("Columns2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
]);
const Columns3 = createLucideIcon("Columns3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
const Columns4 = createLucideIcon("Columns4", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7.5 3v18", key: "w0wo6v" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M16.5 3v18", key: "10tjh1" }]
]);
const Combine = createLucideIcon("Combine", [
  ["rect", { width: "8", height: "8", x: "2", y: "2", rx: "2", key: "z1hh3n" }],
  ["path", { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "83orz6" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "k86dmt" }],
  ["path", { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1", key: "6vokjl" }],
  ["polyline", { points: "7 21 10 18 7 15", key: "1k02g0" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
]);
const Command = createLucideIcon("Command", [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
]);
const Compass = createLucideIcon("Compass", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76", key: "m9r19z" }]
]);
const Component = createLucideIcon("Component", [
  ["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z", key: "1kciei" }],
  ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z", key: "1ome0g" }],
  ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z", key: "vbupec" }],
  ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z", key: "16csic" }]
]);
const Computer = createLucideIcon("Computer", [
  ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2", key: "wc9tft" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h2", key: "rwmk9e" }],
  ["path", { d: "M12 18h6", key: "aqd8w3" }]
]);
const ConciergeBell = createLucideIcon("ConciergeBell", [
  [
    "path",
    { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z", key: "1pvr1r" }
  ],
  ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }],
  ["path", { d: "M12 4v4", key: "1bq03y" }],
  ["path", { d: "M10 4h4", key: "1xpv9s" }]
]);
const Cone = createLucideIcon("Cone", [
  ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98", key: "53pte7" }],
  ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3", key: "1ji25f" }]
]);
const Construction = createLucideIcon("Construction", [
  ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }],
  ["path", { d: "M17 14v7", key: "7m2elx" }],
  ["path", { d: "M7 14v7", key: "1cm7wv" }],
  ["path", { d: "M17 3v3", key: "1v4jwn" }],
  ["path", { d: "M7 3v3", key: "7o6guu" }],
  ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
  ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
  ["path", { d: "m8 6 8 8", key: "hl96qh" }]
]);
const Contact2 = createLucideIcon("Contact2", [
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }],
  ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
]);
const Contact = createLucideIcon("Contact", [
  ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
]);
const Container = createLucideIcon("Container", [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }]
]);
const Contrast = createLucideIcon("Contrast", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }]
]);
const Cookie = createLucideIcon("Cookie", [
  ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
  ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
  ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
  ["path", { d: "M12 12v.01", key: "u5ubse" }],
  ["path", { d: "M11 17v.01", key: "1hyl5a" }],
  ["path", { d: "M7 14v.01", key: "uct60s" }]
]);
const CookingPot = createLucideIcon("CookingPot", [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "u0tga0" }],
  ["path", { d: "m4 8 16-4", key: "16g0ng" }],
  [
    "path",
    {
      d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
      key: "12cejc"
    }
  ]
]);
const CopyCheck = createLucideIcon("CopyCheck", [
  ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const CopyMinus = createLucideIcon("CopyMinus", [
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const CopyPlus = createLucideIcon("CopyPlus", [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const CopySlash = createLucideIcon("CopySlash", [
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const CopyX = createLucideIcon("CopyX", [
  ["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }],
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const Copyleft = createLucideIcon("Copyleft", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66", key: "1sveal" }]
]);
const Copyright = createLucideIcon("Copyright", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66", key: "1i56pz" }]
]);
const CornerDownLeft = createLucideIcon("CornerDownLeft", [
  ["polyline", { points: "9 10 4 15 9 20", key: "r3jprv" }],
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }]
]);
const CornerDownRight = createLucideIcon("CornerDownRight", [
  ["polyline", { points: "15 10 20 15 15 20", key: "1q7qjw" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
]);
const CornerLeftDown = createLucideIcon("CornerLeftDown", [
  ["polyline", { points: "14 15 9 20 4 15", key: "nkc4i" }],
  ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12", key: "nbpdq2" }]
]);
const CornerLeftUp = createLucideIcon("CornerLeftUp", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);
const CornerRightDown = createLucideIcon("CornerRightDown", [
  ["polyline", { points: "10 15 15 20 20 15", key: "axus6l" }],
  ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }]
]);
const CornerRightUp = createLucideIcon("CornerRightUp", [
  ["polyline", { points: "10 9 15 4 20 9", key: "1lr6px" }],
  ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }]
]);
const CornerUpLeft = createLucideIcon("CornerUpLeft", [
  ["polyline", { points: "9 14 4 9 9 4", key: "881910" }],
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }]
]);
const CornerUpRight = createLucideIcon("CornerUpRight", [
  ["polyline", { points: "15 14 20 9 15 4", key: "1tbx3s" }],
  ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]
]);
const Cpu = createLucideIcon("Cpu", [
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", key: "o3kz5p" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
]);
const CreativeCommons = createLucideIcon("CreativeCommons", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1ss3eq" }
  ],
  [
    "path",
    { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1od56t" }
  ]
]);
const CreditCard = createLucideIcon("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
const Croissant = createLucideIcon("Croissant", [
  [
    "path",
    {
      d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
      key: "1ozxlb"
    }
  ],
  [
    "path",
    {
      d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
      key: "ffuyb5"
    }
  ],
  ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4", key: "osnpzi" }],
  [
    "path",
    {
      d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
      key: "1vubaw"
    }
  ],
  ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5", key: "wxr772" }]
]);
const Crop = createLucideIcon("Crop", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
]);
const Cross = createLucideIcon("Cross", [
  [
    "path",
    {
      d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
      key: "1t5g7j"
    }
  ]
]);
const Crosshair = createLucideIcon("Crosshair", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
]);
const Crown = createLucideIcon("Crown", [
  ["path", { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14", key: "zkxr6b" }]
]);
const Cuboid = createLucideIcon("Cuboid", [
  [
    "path",
    {
      d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",
      key: "1u2ovd"
    }
  ],
  ["path", { d: "M10 22v-8L2.25 9.15", key: "11pn4q" }],
  ["path", { d: "m10 14 11.77-6.87", key: "1kt1wh" }]
]);
const CupSoda = createLucideIcon("CupSoda", [
  ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8", key: "8166m8" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "yjz344" }],
  ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }]
]);
const Currency = createLucideIcon("Currency", [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["line", { x1: "3", x2: "6", y1: "3", y2: "6", key: "1jkytn" }],
  ["line", { x1: "21", x2: "18", y1: "3", y2: "6", key: "14zfjt" }],
  ["line", { x1: "3", x2: "6", y1: "21", y2: "18", key: "iusuec" }],
  ["line", { x1: "21", x2: "18", y1: "21", y2: "18", key: "yj2dd7" }]
]);
const Cylinder = createLucideIcon("Cylinder", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", key: "aqi0yr" }]
]);
const DatabaseBackup = createLucideIcon("DatabaseBackup", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }],
  ["path", { d: "M21 9.3V5", key: "6k6cib" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }],
  ["path", { d: "M12 12v4h4", key: "1bxaet" }],
  [
    "path",
    {
      d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
      key: "1f4ei9"
    }
  ]
]);
const DatabaseZap = createLucideIcon("DatabaseZap", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84", key: "14ibmq" }],
  ["path", { d: "M21 5V8", key: "1marbg" }],
  ["path", { d: "M21 12L18 17H22L19 22", key: "zafso" }],
  ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87", key: "1y4wr8" }]
]);
const Database = createLucideIcon("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
const Delete = createLucideIcon("Delete", [
  ["path", { d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z", key: "1oy587" }],
  ["line", { x1: "18", x2: "12", y1: "9", y2: "15", key: "1olkx5" }],
  ["line", { x1: "12", x2: "18", y1: "9", y2: "15", key: "1n50pc" }]
]);
const Dessert = createLucideIcon("Dessert", [
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }],
  [
    "path",
    {
      d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",
      key: "lfo06j"
    }
  ],
  ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0", key: "12xarc" }]
]);
const Diameter = createLucideIcon("Diameter", [
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
  ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86", key: "xr8kdq" }],
  ["path", { d: "m6.41 6.41 11.18 11.18", key: "uhpjw7" }],
  ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86", key: "cldpwv" }]
]);
const Diamond = createLucideIcon("Diamond", [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
      key: "1f1r0c"
    }
  ]
]);
const Dice1 = createLucideIcon("Dice1", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
const Dice2 = createLucideIcon("Dice2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }],
  ["path", { d: "M9 15h.01", key: "fzyn71" }]
]);
const Dice3 = createLucideIcon("Dice3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
const Dice4 = createLucideIcon("Dice4", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }]
]);
const Dice5 = createLucideIcon("Dice5", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
const Dice6 = createLucideIcon("Dice6", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
const Dices = createLucideIcon("Dices", [
  ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2", key: "6agr2n" }],
  [
    "path",
    { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6", key: "1o487t" }
  ],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 14h.01", key: "ssrbsk" }],
  ["path", { d: "M15 6h.01", key: "cblpky" }],
  ["path", { d: "M18 9h.01", key: "2061c0" }]
]);
const Diff = createLucideIcon("Diff", [
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
]);
const Disc2 = createLucideIcon("Disc2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
const Disc3 = createLucideIcon("Disc3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
]);
const DiscAlbum = createLucideIcon("DiscAlbum", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "5", key: "nd82uf" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
const Disc = createLucideIcon("Disc", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const DivideCircle = createLucideIcon("DivideCircle", [
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const DivideSquare = createLucideIcon("DivideSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }]
]);
const Divide = createLucideIcon("Divide", [
  ["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }],
  ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
  ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }]
]);
const DnaOff = createLucideIcon("DnaOff", [
  ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5", key: "sxiaad" }],
  ["path", { d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5", key: "yn4bs1" }],
  ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
  ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
  ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
  ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
  ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Dna = createLucideIcon("Dna", [
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
  ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
  ["path", { d: "m14 8-1-1", key: "15nbz5" }],
  ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
  ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
  ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }]
]);
const Dog = createLucideIcon("Dog", [
  [
    "path",
    {
      d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",
      key: "19br0u"
    }
  ],
  [
    "path",
    {
      d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
      key: "11n1an"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }],
  [
    "path",
    {
      d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",
      key: "wsu29d"
    }
  ]
]);
const DollarSign = createLucideIcon("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
const Donut = createLucideIcon("Donut", [
  [
    "path",
    {
      d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
      key: "19sr3x"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const DoorClosed = createLucideIcon("DoorClosed", [
  ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }],
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "M14 12v.01", key: "xfcn54" }]
]);
const DoorOpen = createLucideIcon("DoorOpen", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4"
    }
  ]
]);
const DotSquare = createLucideIcon("DotSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
const Dot = createLucideIcon("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
const DownloadCloud = createLucideIcon("DownloadCloud", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m8 17 4 4 4-4", key: "1ul180" }]
]);
const Download = createLucideIcon("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const DraftingCompass = createLucideIcon("DraftingCompass", [
  ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }],
  ["path", { d: "m3 21 8.02-14.26", key: "1ssaw4" }],
  ["path", { d: "m12.99 6.74 1.93 3.44", key: "iwagvd" }],
  ["path", { d: "M19 12c-3.87 4-10.13 4-14 0", key: "1tsu18" }],
  ["path", { d: "m21 21-2.16-3.84", key: "vylbct" }]
]);
const Drama = createLucideIcon("Drama", [
  ["path", { d: "M10 11h.01", key: "d2at3l" }],
  ["path", { d: "M14 6h.01", key: "k028ub" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6.5 13.1h.01", key: "1748ia" }],
  ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3", key: "172yzv" }],
  ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0", key: "1obv0w" }],
  [
    "path",
    {
      d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
      key: "rqjl8i"
    }
  ],
  ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4", key: "1mr6wy" }]
]);
const Dribbble = createLucideIcon("Dribbble", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" }],
  ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" }],
  ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }]
]);
const Drill = createLucideIcon("Drill", [
  [
    "path",
    { d: "M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z", key: "b6nnkj" }
  ],
  ["path", { d: "M18 6h4", key: "66u95g" }],
  ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3", key: "105ega" }],
  ["path", { d: "m5 10-2 8", key: "xt2lic" }],
  ["path", { d: "M12 10v3c0 .6-.4 1-1 1H8", key: "mwpjnk" }],
  ["path", { d: "m7 18 2-8", key: "1bzku2" }],
  [
    "path",
    { d: "M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z", key: "117add" }
  ]
]);
const Droplet = createLucideIcon("Droplet", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
]);
const Droplets = createLucideIcon("Droplets", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
]);
const Drum = createLucideIcon("Drum", [
  ["path", { d: "m2 2 8 8", key: "1v6059" }],
  ["path", { d: "m22 2-8 8", key: "173r8a" }],
  ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5", key: "liohsx" }],
  ["path", { d: "M7 13.4v7.9", key: "1yi6u9" }],
  ["path", { d: "M12 14v8", key: "1tn2tj" }],
  ["path", { d: "M17 13.4v7.9", key: "eqz2v3" }],
  ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9", key: "1750ul" }]
]);
const Drumstick = createLucideIcon("Drumstick", [
  [
    "path",
    {
      d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",
      key: "1o96s0"
    }
  ],
  [
    "path",
    {
      d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",
      key: "14vv5h"
    }
  ]
]);
const Dumbbell = createLucideIcon("Dumbbell", [
  ["path", { d: "m6.5 6.5 11 11", key: "f7oqzb" }],
  ["path", { d: "m21 21-1-1", key: "cpc6if" }],
  ["path", { d: "m3 3 1 1", key: "d3rpuf" }],
  ["path", { d: "m18 22 4-4", key: "1e32o6" }],
  ["path", { d: "m2 6 4-4", key: "189tqz" }],
  ["path", { d: "m3 10 7-7", key: "1bxui2" }],
  ["path", { d: "m14 21 7-7", key: "16x78n" }]
]);
const EarOff = createLucideIcon("EarOff", [
  ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46", key: "1qngmn" }],
  ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14", key: "b06bma" }],
  ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76", key: "g10hsz" }],
  ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18", key: "ygzou7" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Ear = createLucideIcon("Ear", [
  ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }],
  ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }]
]);
const EarthLock = createLucideIcon("EarthLock", [
  ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3", key: "w732o8" }],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "f02343" }],
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  ["path", { d: "M12 2a10 10 0 1 0 9.54 13", key: "zjsr6q" }],
  ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }],
  ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1", key: "1fmf51" }]
]);
const Earth = createLucideIcon("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",
      key: "1fi5u6"
    }
  ],
  [
    "path",
    { d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "xsiumc" }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const Eclipse = createLucideIcon("Eclipse", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a7 7 0 1 0 10 10", key: "1yuj32" }]
]);
const EggFried = createLucideIcon("EggFried", [
  ["circle", { cx: "11.5", cy: "12.5", r: "3.5", key: "1cl1mi" }],
  [
    "path",
    {
      d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
      key: "165ef9"
    }
  ]
]);
const EggOff = createLucideIcon("EggOff", [
  [
    "path",
    {
      d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",
      key: "6et380"
    }
  ],
  [
    "path",
    {
      d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",
      key: "gcdc3f"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Egg = createLucideIcon("Egg", [
  [
    "path",
    {
      d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",
      key: "1c39pg"
    }
  ]
]);
const EqualNot = createLucideIcon("EqualNot", [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
]);
const EqualSquare = createLucideIcon("EqualSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }]
]);
const Equal = createLucideIcon("Equal", [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
]);
const Eraser = createLucideIcon("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);
const Euro = createLucideIcon("Euro", [
  ["path", { d: "M4 10h12", key: "1y6xl8" }],
  ["path", { d: "M4 14h9", key: "1loblj" }],
  [
    "path",
    {
      d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
      key: "1j6lzo"
    }
  ]
]);
const Expand = createLucideIcon("Expand", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
]);
const Factory = createLucideIcon("Factory", [
  [
    "path",
    {
      d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "159hny"
    }
  ],
  ["path", { d: "M17 18h1", key: "uldtlt" }],
  ["path", { d: "M12 18h1", key: "s9uhes" }],
  ["path", { d: "M7 18h1", key: "1neino" }]
]);
const Fan = createLucideIcon("Fan", [
  [
    "path",
    {
      d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
      key: "484a7f"
    }
  ],
  ["path", { d: "M12 12v.01", key: "u5ubse" }]
]);
const FastForward = createLucideIcon("FastForward", [
  ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
  ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }]
]);
const Feather = createLucideIcon("Feather", [
  ["path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z", key: "u4sw5n" }],
  ["line", { x1: "16", x2: "2", y1: "8", y2: "22", key: "1c47m2" }],
  ["line", { x1: "17.5", x2: "9", y1: "15", y2: "15", key: "2fj3pr" }]
]);
const Fence = createLucideIcon("Fence", [
  ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "1n2rgs" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M6 18h4", key: "12yh4b" }],
  ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "3ha7mj" }],
  ["path", { d: "M14 8h4", key: "1r8wg2" }],
  ["path", { d: "M14 18h4", key: "1t3kbu" }],
  ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "dfd4e2" }]
]);
const FerrisWheel = createLucideIcon("FerrisWheel", [
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m6.8 15-3.5 2", key: "hjy98k" }],
  ["path", { d: "m20.7 7-3.5 2", key: "f08gto" }],
  ["path", { d: "M6.8 9 3.3 7", key: "1aevh4" }],
  ["path", { d: "m20.7 17-3.5-2", key: "1liqo3" }],
  ["path", { d: "m9 22 3-8 3 8", key: "wees03" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M18 18.7a9 9 0 1 0-12 0", key: "dhzg4g" }]
]);
const Figma = createLucideIcon("Figma", [
  ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }],
  ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
  ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }],
  ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }],
  ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }]
]);
const FileArchive = createLucideIcon("FileArchive", [
  ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18", key: "1oywqq" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }],
  ["path", { d: "M10 7V6", key: "dljcrl" }],
  ["path", { d: "M10 12v-1", key: "v7bkov" }],
  ["path", { d: "M10 18v-2", key: "1cjy8d" }]
]);
const FileAudio2 = createLucideIcon("FileAudio2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2", key: "17k7jt" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "3", cy: "17", r: "1", key: "vo6nti" }],
  ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3", key: "1ggdre" }],
  ["circle", { cx: "9", cy: "17", r: "1", key: "bc1fq4" }]
]);
const FileAudio = createLucideIcon("FileAudio", [
  ["path", { d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "rslqgf" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    {
      d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",
      key: "9f7x3i"
    }
  ]
]);
const FileAxis3d = createLucideIcon("FileAxis3d", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m8 18 4-4", key: "12zab0" }],
  ["path", { d: "M8 10v8h8", key: "tlaukw" }]
]);
const FileBadge2 = createLucideIcon("FileBadge2", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5", key: "14xlky" }]
]);
const FileBadge = createLucideIcon("FileBadge", [
  ["path", { d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "12ixgl" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "u0c8gj" }],
  ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5", key: "5gm2nr" }]
]);
const FileBarChart2 = createLucideIcon("FileBarChart2", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 18v-1", key: "zg0ygc" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "M16 18v-3", key: "j5jt4h" }]
]);
const FileBarChart = createLucideIcon("FileBarChart", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["path", { d: "M12 18v-4", key: "q1q25u" }],
  ["path", { d: "M16 18v-6", key: "15y0np" }]
]);
const FileBox = createLucideIcon("FileBox", [
  ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "16lz6z" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    {
      d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",
      key: "99pj1s"
    }
  ],
  ["path", { d: "M7 17v5", key: "1yj1jh" }],
  ["path", { d: "M11.7 14.2 7 17l-4.7-2.8", key: "1yk8tc" }]
]);
const FileCheck2 = createLucideIcon("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
const FileCheck = createLucideIcon("FileCheck", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
]);
const FileClock = createLucideIcon("FileClock", [
  ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "37hlfg" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }],
  ["path", { d: "M9.5 17.5 8 16.25V14", key: "1o80t2" }]
]);
const FileCode2 = createLucideIcon("FileCode2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
]);
const FileCode = createLucideIcon("FileCode", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m10 13-2 2 2 2", key: "17smn8" }],
  ["path", { d: "m14 17 2-2-2-2", key: "14mezr" }]
]);
const FileCog = createLucideIcon("FileCog", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2", key: "17k7jt" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "6", cy: "14", r: "3", key: "a1xfv6" }],
  ["path", { d: "M6 10v1", key: "xs0f9j" }],
  ["path", { d: "M6 17v1", key: "idyhc0" }],
  ["path", { d: "M10 14H9", key: "m5fm2q" }],
  ["path", { d: "M3 14H2", key: "19ot09" }],
  ["path", { d: "m9 11-.88.88", key: "lhul2b" }],
  ["path", { d: "M3.88 16.12 3 17", key: "169z9n" }],
  ["path", { d: "m9 17-.88-.88", key: "5io96w" }],
  ["path", { d: "M3.88 11.88 3 11", key: "1ynhy1" }]
]);
const FileDiff = createLucideIcon("FileDiff", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }]
]);
const FileDigit = createLucideIcon("FileDigit", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2", key: "jm304g" }],
  ["path", { d: "M10 12h2v6", key: "12zw74" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
const FileHeart = createLucideIcon("FileHeart", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2", key: "17k7jt" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    {
      d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
      key: "1c1fso"
    }
  ]
]);
const FileImage = createLucideIcon("FileImage", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
]);
const FileInput = createLucideIcon("FileInput", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
]);
const FileJson2 = createLucideIcon("FileJson2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "fq0c9t" }
  ],
  [
    "path",
    { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "4gibmv" }
  ]
]);
const FileJson = createLucideIcon("FileJson", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
const FileKey2 = createLucideIcon("FileKey2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6", key: "rc0qvx" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
  ["path", { d: "m10 10-4.5 4.5", key: "7fwrp6" }],
  ["path", { d: "m9 11 1 1", key: "wa6s5q" }]
]);
const FileKey = createLucideIcon("FileKey", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["circle", { cx: "10", cy: "16", r: "2", key: "4ckbqe" }],
  ["path", { d: "m16 10-4.5 4.5", key: "7p3ebg" }],
  ["path", { d: "m15 11 1 1", key: "1bsyx3" }]
]);
const FileLineChart = createLucideIcon("FileLineChart", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m16 13-3.5 3.5-2-2L8 17", key: "zz7yod" }]
]);
const FileLock2 = createLucideIcon("FileLock2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1", key: "jmtmu2" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1", key: "10y5wo" }],
  ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2", key: "1pdxzg" }]
]);
const FileLock = createLucideIcon("FileLock", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1", key: "3yr8at" }],
  ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2", key: "j4i8d" }]
]);
const FileMinus2 = createLucideIcon("FileMinus2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }]
]);
const FileMinus = createLucideIcon("FileMinus", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }]
]);
const FileMusic = createLucideIcon("FileMusic", [
  ["circle", { cx: "14", cy: "16", r: "2", key: "1bzzi3" }],
  ["circle", { cx: "6", cy: "18", r: "2", key: "1fncim" }],
  ["path", { d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5", key: "skc018" }],
  ["path", { d: "M8 18v-7.7L16 9v7", key: "1oie6o" }]
]);
const FileOutput = createLucideIcon("FileOutput", [
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2", key: "1vk7w2" }],
  ["path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6", key: "1jink5" }],
  ["path", { d: "m5 11-3 3", key: "1dgrs4" }],
  ["path", { d: "m5 17-3-3h10", key: "1mvvaf" }]
]);
const FilePenLine = createLucideIcon("FilePenLine", [
  ["path", { d: "m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2", key: "h0fsxq" }],
  ["path", { d: "M8 18h1", key: "13wk12" }],
  ["path", { d: "M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z", key: "dyo8mm" }]
]);
const FilePen = createLucideIcon("FilePen", [
  ["path", { d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10", key: "x7tsz2" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z", key: "o3xyfb" }]
]);
const FilePieChart = createLucideIcon("FilePieChart", [
  ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "37hlfg" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M4 11.5a6.02 6.02 0 1 0 8.5 8.5", key: "unkkko" }],
  ["path", { d: "M14 16c0-3.3-2.7-6-6-6v6Z", key: "bym002" }]
]);
const FilePlus2 = createLucideIcon("FilePlus2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }],
  ["path", { d: "M6 12v6", key: "1u72j0" }]
]);
const FilePlus = createLucideIcon("FilePlus", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }]
]);
const FileQuestion = createLucideIcon("FileQuestion", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  [
    "path",
    {
      d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
      key: "1umxtm"
    }
  ],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const FileScan = createLucideIcon("FileScan", [
  ["path", { d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4", key: "1rdf37" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M16 14a2 2 0 0 0-2 2", key: "ceaadl" }],
  ["path", { d: "M20 14a2 2 0 0 1 2 2", key: "1ny6zw" }],
  ["path", { d: "M20 22a2 2 0 0 0 2-2", key: "1l9q4k" }],
  ["path", { d: "M16 22a2 2 0 0 1-2-2", key: "1wqh5n" }]
]);
const FileSearch2 = createLucideIcon("FileSearch2", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
  ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }]
]);
const FileSearch = createLucideIcon("FileSearch", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "1vg67v" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "5", cy: "14", r: "3", key: "ufru5t" }],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }]
]);
const FileSliders = createLucideIcon("FileSliders", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M10 11v2", key: "1s651w" }],
  ["path", { d: "M8 17h8", key: "wh5c61" }],
  ["path", { d: "M14 16v2", key: "12fp5e" }]
]);
const FileSpreadsheet = createLucideIcon("FileSpreadsheet", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);
const FileStack = createLucideIcon("FileStack", [
  ["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2", key: "9rb54x" }],
  [
    "path",
    {
      d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",
      key: "1059l0"
    }
  ],
  ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" }],
  ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" }]
]);
const FileSymlink = createLucideIcon("FileSymlink", [
  ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    {
      d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
      key: "50q2rw"
    }
  ]
]);
const FileTerminal = createLucideIcon("FileTerminal", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }],
  ["path", { d: "M12 18h4", key: "1wd2n7" }]
]);
const FileType2 = createLucideIcon("FileType2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M2 13v-1h6v1", key: "1dh9dg" }],
  ["path", { d: "M5 12v6", key: "150t9c" }],
  ["path", { d: "M4 18h2", key: "1xrofg" }]
]);
const FileType = createLucideIcon("FileType", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M9 13v-1h6v1", key: "1bb014" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "M11 18h2", key: "12mj7e" }]
]);
const FileUp = createLucideIcon("FileUp", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
]);
const FileVideo2 = createLucideIcon("FileVideo2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1", key: "1a6c1e" }],
  ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5", key: "t7cp39" }]
]);
const FileVideo = createLucideIcon("FileVideo", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m10 11 5 3-5 3v-6Z", key: "7ntvm4" }]
]);
const FileVolume2 = createLucideIcon("FileVolume2", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3", key: "1fccat" }],
  ["path", { d: "M15 12a5 5 0 0 1 0 6", key: "ps46cm" }]
]);
const FileVolume = createLucideIcon("FileVolume", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "1vg67v" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m7 10-3 2H2v4h2l3 2Z", key: "fiq8l4" }],
  ["path", { d: "M11 11a5 5 0 0 1 0 6", key: "193qb2" }]
]);
const FileWarning = createLucideIcon("FileWarning", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const FileX2 = createLucideIcon("FileX2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m8 12.5-5 5", key: "b853mi" }],
  ["path", { d: "m3 12.5 5 5", key: "1qls4r" }]
]);
const FileX = createLucideIcon("FileX", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m14.5 12.5-5 5", key: "b62r18" }],
  ["path", { d: "m9.5 12.5 5 5", key: "1rk7el" }]
]);
const Files = createLucideIcon("Files", [
  ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2", key: "x099mo" }],
  ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z", key: "18t6ie" }],
  ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8", key: "1nja0z" }]
]);
const Film = createLucideIcon("Film", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
]);
const FilterX = createLucideIcon("FilterX", [
  ["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055", key: "1fi1da" }],
  ["path", { d: "m22 3-5 5", key: "12jva0" }],
  ["path", { d: "m17 3 5 5", key: "k36vhe" }]
]);
const Filter = createLucideIcon("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
const Fingerprint = createLucideIcon("Fingerprint", [
  ["path", { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4", key: "1jc9o5" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2", key: "1mxgy1" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2", key: "1fgabc" }]
]);
const FireExtinguisher = createLucideIcon("FireExtinguisher", [
  ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5", key: "sqyvz" }],
  ["path", { d: "M9 18h8", key: "i7pszb" }],
  ["path", { d: "M18 3h-3", key: "7idoqj" }],
  ["path", { d: "M11 3a6 6 0 0 0-6 6v11", key: "1v5je3" }],
  ["path", { d: "M5 13h4", key: "svpcxo" }],
  ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z", key: "vsjego" }]
]);
const FishOff = createLucideIcon("FishOff", [
  [
    "path",
    {
      d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
      key: "1j1hse"
    }
  ],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
      key: "1q46z8"
    }
  ],
  [
    "path",
    {
      d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
      key: "1407gh"
    }
  ]
]);
const FishSymbol = createLucideIcon("FishSymbol", [
  ["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8", key: "h4oh4o" }]
]);
const Fish = createLucideIcon("Fish", [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      key: "15baut"
    }
  ],
  ["path", { d: "M18 12v.5", key: "18hhni" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      key: "l9di03"
    }
  ],
  [
    "path",
    { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }
  ],
  [
    "path",
    { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }
  ]
]);
const FlagOff = createLucideIcon("FlagOff", [
  ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11", key: "9rwyz9" }],
  ["path", { d: "M4 22V4", key: "1plyxx" }],
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2", key: "1myooe" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const FlagTriangleLeft = createLucideIcon("FlagTriangleLeft", [
  ["path", { d: "M17 22V2L7 7l10 5", key: "1rmf0r" }]
]);
const FlagTriangleRight = createLucideIcon("FlagTriangleRight", [
  ["path", { d: "M7 22V2l10 5-10 5", key: "17n18y" }]
]);
const Flag = createLucideIcon("Flag", [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
]);
const FlameKindling = createLucideIcon("FlameKindling", [
  [
    "path",
    {
      d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
      key: "1ir223"
    }
  ],
  ["path", { d: "m5 22 14-4", key: "1brv4h" }],
  ["path", { d: "m5 18 14 4", key: "lgyyje" }]
]);
const Flame = createLucideIcon("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
]);
const FlashlightOff = createLucideIcon("FlashlightOff", [
  ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4", key: "1r120k" }],
  ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1", key: "dz1920" }],
  ["line", { x1: "11", x2: "18", y1: "6", y2: "6", key: "bi1vpe" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Flashlight = createLucideIcon("Flashlight", [
  [
    "path",
    {
      d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
      key: "1orkel"
    }
  ],
  ["line", { x1: "6", x2: "18", y1: "6", y2: "6", key: "1z11jq" }],
  ["line", { x1: "12", x2: "12", y1: "12", y2: "12", key: "1f4yc1" }]
]);
const FlaskConicalOff = createLucideIcon("FlaskConicalOff", [
  [
    "path",
    {
      d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",
      key: "59ek9y"
    }
  ],
  ["path", { d: "M10 2v2.343", key: "15t272" }],
  ["path", { d: "M14 2v6.343", key: "sxr80q" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h9", key: "t5njau" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const FlaskConical = createLucideIcon("FlaskConical", [
  [
    "path",
    {
      d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
      key: "pzvekw"
    }
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);
const FlaskRound = createLucideIcon("FlaskRound", [
  ["path", { d: "M10 2v7.31", key: "5d1hyh" }],
  ["path", { d: "M14 9.3V1.99", key: "14k4l0" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0", key: "1r8fvy" }],
  ["path", { d: "M5.52 16h12.96", key: "46hh1i" }]
]);
const FlipHorizontal2 = createLucideIcon("FlipHorizontal2", [
  ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
  ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
]);
const FlipHorizontal = createLucideIcon("FlipHorizontal", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" }],
  ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
]);
const FlipVertical2 = createLucideIcon("FlipVertical2", [
  ["path", { d: "m17 3-5 5-5-5h10", key: "1ftt6x" }],
  ["path", { d: "m17 21-5-5-5 5h10", key: "1m0wmu" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);
const FlipVertical = createLucideIcon("FlipVertical", [
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3", key: "14bfxa" }],
  ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3", key: "14rx03" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);
const Flower2 = createLucideIcon("Flower2", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
]);
const Flower = createLucideIcon("Flower", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
      key: "14wa3c"
    }
  ],
  ["path", { d: "M12 7.5V9", key: "1oy5b0" }],
  ["path", { d: "M7.5 12H9", key: "eltsq1" }],
  ["path", { d: "M16.5 12H15", key: "vk5kw4" }],
  ["path", { d: "M12 16.5V15", key: "k7eayi" }],
  ["path", { d: "m8 8 1.88 1.88", key: "nxy4qf" }],
  ["path", { d: "M14.12 9.88 16 8", key: "1lst6k" }],
  ["path", { d: "m8 16 1.88-1.88", key: "h2eex1" }],
  ["path", { d: "M14.12 14.12 16 16", key: "uqkrx3" }]
]);
const Focus = createLucideIcon("Focus", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
const FoldHorizontal = createLucideIcon("FoldHorizontal", [
  ["path", { d: "M2 12h6", key: "1wqiqv" }],
  ["path", { d: "M22 12h-6", key: "1eg9hc" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 9-3 3 3 3", key: "12ol22" }],
  ["path", { d: "m5 15 3-3-3-3", key: "1kdhjc" }]
]);
const FoldVertical = createLucideIcon("FoldVertical", [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3-3-3 3", key: "e37ymu" }],
  ["path", { d: "m15 5-3 3-3-3", key: "19d6lf" }]
]);
const FolderArchive = createLucideIcon("FolderArchive", [
  ["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }],
  [
    "path",
    {
      d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
      key: "1jj40k"
    }
  ],
  ["path", { d: "M15 11v-1", key: "cntcp" }],
  ["path", { d: "M15 17v-2", key: "1279jj" }]
]);
const FolderCheck = createLucideIcon("FolderCheck", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
]);
const FolderClock = createLucideIcon("FolderClock", [
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
  [
    "path",
    {
      d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
      key: "1urifu"
    }
  ],
  ["path", { d: "M16 14v2l1 1", key: "xth2jh" }]
]);
const FolderClosed = createLucideIcon("FolderClosed", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
]);
const FolderCog = createLucideIcon("FolderCog", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  [
    "path",
    {
      d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",
      key: "1k8050"
    }
  ],
  ["path", { d: "m21.7 19.4-.9-.3", key: "1qgwi9" }],
  ["path", { d: "m15.2 16.9-.9-.3", key: "1t7mvx" }],
  ["path", { d: "m16.6 21.7.3-.9", key: "1j67ps" }],
  ["path", { d: "m19.1 15.2.3-.9", key: "18r7jp" }],
  ["path", { d: "m19.6 21.7-.4-1", key: "z2vh2" }],
  ["path", { d: "m16.8 15.3-.4-1", key: "1ei7r6" }],
  ["path", { d: "m14.3 19.6 1-.4", key: "11sv9r" }],
  ["path", { d: "m20.7 16.8 1-.4", key: "19m87a" }]
]);
const FolderDot = createLucideIcon("FolderDot", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "1", key: "49l61u" }]
]);
const FolderDown = createLucideIcon("FolderDown", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]
]);
const FolderGit2 = createLucideIcon("FolderGit2", [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
      key: "1w6njk"
    }
  ],
  ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
  ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8", key: "pkpw2h" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]
]);
const FolderGit = createLucideIcon("FolderGit", [
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M14 13h3", key: "1dgedf" }],
  ["path", { d: "M7 13h3", key: "1pygq7" }]
]);
const FolderHeart = createLucideIcon("FolderHeart", [
  [
    "path",
    {
      d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",
      key: "6hud8k"
    }
  ],
  [
    "path",
    {
      d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",
      key: "vgq86i"
    }
  ]
]);
const FolderInput = createLucideIcon("FolderInput", [
  [
    "path",
    {
      d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
      key: "fm4g5t"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
]);
const FolderKanban = createLucideIcon("FolderKanban", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M12 10v2", key: "hh53o1" }],
  ["path", { d: "M16 10v6", key: "1d6xys" }]
]);
const FolderKey = createLucideIcon("FolderKey", [
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
      key: "3hgo9p"
    }
  ],
  ["path", { d: "m22 14-4.5 4.5", key: "1ef6z8" }],
  ["path", { d: "m21 15 1 1", key: "1ejcpy" }]
]);
const FolderLock = createLucideIcon("FolderLock", [
  ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1", key: "19aais" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
      key: "1w6v7t"
    }
  ],
  ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }]
]);
const FolderMinus = createLucideIcon("FolderMinus", [
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
const FolderOpenDot = createLucideIcon("FolderOpenDot", [
  [
    "path",
    {
      d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
      key: "1nmvlm"
    }
  ],
  ["circle", { cx: "14", cy: "15", r: "1", key: "1gm4qj" }]
]);
const FolderOpen = createLucideIcon("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
const FolderOutput = createLucideIcon("FolderOutput", [
  [
    "path",
    {
      d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",
      key: "1yk7aj"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }]
]);
const FolderPen = createLucideIcon("FolderPen", [
  ["path", { d: "M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z", key: "dakro8" }],
  [
    "path",
    {
      d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
      key: "a8xqs0"
    }
  ]
]);
const FolderPlus = createLucideIcon("FolderPlus", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
const FolderRoot = createLucideIcon("FolderRoot", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  ["path", { d: "M12 15v5", key: "11xva1" }]
]);
const FolderSearch2 = createLucideIcon("FolderSearch2", [
  ["circle", { cx: "11.5", cy: "12.5", r: "2.5", key: "1ea5ju" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M13.3 14.3 15 16", key: "1y4v1n" }]
]);
const FolderSearch = createLucideIcon("FolderSearch", [
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  [
    "path",
    {
      d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
      key: "1bw5m7"
    }
  ],
  ["path", { d: "m21 21-1.5-1.5", key: "3sg1j" }]
]);
const FolderSymlink = createLucideIcon("FolderSymlink", [
  [
    "path",
    {
      d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
      key: "x1c07l"
    }
  ],
  ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }]
]);
const FolderSync = createLucideIcon("FolderSync", [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
      key: "1dkoa9"
    }
  ],
  ["path", { d: "M12 10v4h4", key: "1czhmt" }],
  ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "lvuxfi" }],
  ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }],
  ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "14ync0" }]
]);
const FolderTree = createLucideIcon("FolderTree", [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "hod4my"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "w4yl2u"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
]);
const FolderUp = createLucideIcon("FolderUp", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }]
]);
const FolderX = createLucideIcon("FolderX", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }],
  ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }]
]);
const Folder = createLucideIcon("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
const Folders = createLucideIcon("Folders", [
  [
    "path",
    {
      d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",
      key: "4u7rpt"
    }
  ],
  ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14", key: "1eicx1" }]
]);
const Footprints = createLucideIcon("Footprints", [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
]);
const Forklift = createLucideIcon("Forklift", [
  ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5", key: "7zsz91" }],
  ["circle", { cx: "13", cy: "19", r: "2", key: "wjnkru" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5", key: "13bk1p" }]
]);
const FormInput = createLucideIcon("FormInput", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);
const Forward = createLucideIcon("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
const Frame = createLucideIcon("Frame", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]
]);
const Framer = createLucideIcon("Framer", [
  ["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" }]
]);
const Frown = createLucideIcon("Frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Fuel = createLucideIcon("Fuel", [
  ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
  ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
  ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
  [
    "path",
    {
      d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
      key: "8ur5zv"
    }
  ]
]);
const Fullscreen = createLucideIcon("Fullscreen", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]
]);
const FunctionSquare = createLucideIcon("FunctionSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
  ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
]);
const GalleryHorizontalEnd = createLucideIcon("GalleryHorizontalEnd", [
  ["path", { d: "M2 7v10", key: "a2pl2d" }],
  ["path", { d: "M6 5v14", key: "1kq3d7" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
]);
const GalleryHorizontal = createLucideIcon("GalleryHorizontal", [
  ["path", { d: "M2 3v18", key: "pzttux" }],
  ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2", key: "btr8bg" }],
  ["path", { d: "M22 3v18", key: "6jf3v" }]
]);
const GalleryThumbnails = createLucideIcon("GalleryThumbnails", [
  ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2", key: "74y24f" }],
  ["path", { d: "M4 21h1", key: "16zlid" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M19 21h1", key: "edywat" }]
]);
const GalleryVerticalEnd = createLucideIcon("GalleryVerticalEnd", [
  ["path", { d: "M7 2h10", key: "nczekb" }],
  ["path", { d: "M5 6h14", key: "u2x4p" }],
  ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }]
]);
const GalleryVertical = createLucideIcon("GalleryVertical", [
  ["path", { d: "M3 2h18", key: "15qxfx" }],
  ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2", key: "1439r6" }],
  ["path", { d: "M3 22h18", key: "8prr45" }]
]);
const Gamepad2 = createLucideIcon("Gamepad2", [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }
  ]
]);
const Gamepad = createLucideIcon("Gamepad", [
  ["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" }],
  ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
const GanttChartSquare = createLucideIcon("GanttChartSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 8h7", key: "kbo1nt" }],
  ["path", { d: "M8 12h6", key: "ikassy" }],
  ["path", { d: "M11 16h5", key: "oq65wt" }]
]);
const GanttChart = createLucideIcon("GanttChart", [
  ["path", { d: "M8 6h10", key: "9lnwnk" }],
  ["path", { d: "M6 12h9", key: "1g9pqf" }],
  ["path", { d: "M11 18h7", key: "c8dzvl" }]
]);
const GaugeCircle = createLucideIcon("GaugeCircle", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }]
]);
const Gauge = createLucideIcon("Gauge", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
]);
const Gavel = createLucideIcon("Gavel", [
  ["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8", key: "15492f" }],
  ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
  ["path", { d: "m8 8 6-6", key: "18bi4p" }],
  ["path", { d: "m9 7 8 8", key: "5jnvq1" }],
  ["path", { d: "m21 11-8-8", key: "z4y7zo" }]
]);
const Gem = createLucideIcon("Gem", [
  ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
  ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
]);
const Ghost = createLucideIcon("Ghost", [
  ["path", { d: "M9 10h.01", key: "qbtxuw" }],
  ["path", { d: "M15 10h.01", key: "1qmjsl" }],
  [
    "path",
    {
      d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
      key: "uwwb07"
    }
  ]
]);
const Gift = createLucideIcon("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
]);
const GitBranchPlus = createLucideIcon("GitBranchPlus", [
  ["path", { d: "M6 3v12", key: "qpgusn" }],
  ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }],
  ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }],
  ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
]);
const GitBranch = createLucideIcon("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
const GitCommitHorizontal = createLucideIcon("GitCommitHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
  ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
]);
const GitCommitVertical = createLucideIcon("GitCommitVertical", [
  ["path", { d: "M12 3v6", key: "1holv5" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M12 15v6", key: "a9ows0" }]
]);
const GitCompareArrows = createLucideIcon("GitCompareArrows", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
  ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
]);
const GitCompare = createLucideIcon("GitCompare", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
]);
const GitFork = createLucideIcon("GitFork", [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
]);
const GitGraph = createLucideIcon("GitGraph", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v6", key: "158jrl" }],
  ["circle", { cx: "5", cy: "18", r: "3", key: "104gr9" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
  ["path", { d: "M16 15.7A9 9 0 0 0 19 9", key: "1e3vqb" }]
]);
const GitMerge = createLucideIcon("GitMerge", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
]);
const GitPullRequestArrow = createLucideIcon("GitPullRequestArrow", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]
]);
const GitPullRequestClosed = createLucideIcon("GitPullRequestClosed", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "m21 3-6 6", key: "16nqsk" }],
  ["path", { d: "m21 9-6-6", key: "9j17rh" }],
  ["path", { d: "M18 11.5V15", key: "65xf6f" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
]);
const GitPullRequestCreateArrow = createLucideIcon("GitPullRequestCreateArrow", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }],
  ["path", { d: "M19 15v6", key: "10aioa" }],
  ["path", { d: "M22 18h-6", key: "1d5gi5" }]
]);
const GitPullRequestCreate = createLucideIcon("GitPullRequestCreate", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", key: "1jb6z3" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
]);
const GitPullRequestDraft = createLucideIcon("GitPullRequestDraft", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M18 6V5", key: "1oao2s" }],
  ["path", { d: "M18 11v-1", key: "11c8tz" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);
const GitPullRequest = createLucideIcon("GitPullRequest", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);
const Github = createLucideIcon("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
const Gitlab = createLucideIcon("Gitlab", [
  [
    "path",
    {
      d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
      key: "148pdi"
    }
  ]
]);
const GlassWater = createLucideIcon("GlassWater", [
  [
    "path",
    { d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z", key: "48rfw3" }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
]);
const Glasses = createLucideIcon("Glasses", [
  ["circle", { cx: "6", cy: "15", r: "4", key: "vux9w4" }],
  ["circle", { cx: "18", cy: "15", r: "4", key: "18o8ve" }],
  ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2", key: "1ag4bs" }],
  ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2", key: "1hm1gs" }],
  ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2", key: "1r31ai" }]
]);
const GlobeLock = createLucideIcon("GlobeLock", [
  [
    "path",
    {
      d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
      key: "qkt0x6"
    }
  ],
  ["path", { d: "M2 12h8.5", key: "ovaggd" }],
  ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }],
  ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1", key: "1fmf51" }]
]);
const Goal = createLucideIcon("Goal", [
  ["path", { d: "M12 13V2l8 4-8 4", key: "5wlwwj" }],
  ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29", key: "1c0wjv" }],
  ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02", key: "gb1g7m" }]
]);
const Grab = createLucideIcon("Grab", [
  ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "n5nng" }],
  ["path", { d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "185i9d" }],
  ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "11pz95" }],
  ["path", { d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "16yk7l" }],
  [
    "path",
    { d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0", key: "nzvb1c" }
  ]
]);
const GraduationCap = createLucideIcon("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);
const Grape = createLucideIcon("Grape", [
  ["path", { d: "M22 5V2l-5.89 5.89", key: "1eenpo" }],
  ["circle", { cx: "16.6", cy: "15.89", r: "3", key: "xjtalx" }],
  ["circle", { cx: "8.11", cy: "7.4", r: "3", key: "u2fv6i" }],
  ["circle", { cx: "12.35", cy: "11.65", r: "3", key: "i6i8g7" }],
  ["circle", { cx: "13.91", cy: "5.85", r: "3", key: "6ye0dv" }],
  ["circle", { cx: "18.15", cy: "10.09", r: "3", key: "snx9no" }],
  ["circle", { cx: "6.56", cy: "13.2", r: "3", key: "17x4xg" }],
  ["circle", { cx: "10.8", cy: "17.44", r: "3", key: "1hogw9" }],
  ["circle", { cx: "5", cy: "19", r: "3", key: "1sn6vo" }]
]);
const Grid2x2 = createLucideIcon("Grid2x2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
]);
const Grid3x3 = createLucideIcon("Grid3x3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
const GripHorizontal = createLucideIcon("GripHorizontal", [
  ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
  ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
  ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
  ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
  ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
  ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
]);
const GripVertical = createLucideIcon("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
const Grip = createLucideIcon("Grip", [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }],
  ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
]);
const Group = createLucideIcon("Group", [
  ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
  ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
  ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
  ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
  ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }],
  ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]
]);
const Guitar = createLucideIcon("Guitar", [
  ["path", { d: "m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z", key: "15ixgv" }],
  ["path", { d: "m17 7-5.1 5.1", key: "l9guh7" }],
  ["circle", { cx: "11.5", cy: "12.5", r: ".5", fill: "currentColor", key: "16onso" }],
  [
    "path",
    {
      d: "M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",
      key: "x9fguj"
    }
  ],
  ["path", { d: "m6 16 2 2", key: "16qmzd" }]
]);
const Hammer = createLucideIcon("Hammer", [
  ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" }],
  ["path", { d: "m18 15 4-4", key: "16gjal" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
      key: "b7pghm"
    }
  ]
]);
const HandCoins = createLucideIcon("HandCoins", [
  ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17", key: "geh8rc" }],
  [
    "path",
    {
      d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "1fto5m"
    }
  ],
  ["path", { d: "m2 16 6 6", key: "1pfhp9" }],
  ["circle", { cx: "16", cy: "9", r: "2.9", key: "1n0dlu" }],
  ["circle", { cx: "6", cy: "5", r: "3", key: "151irh" }]
]);
const HandHeart = createLucideIcon("HandHeart", [
  ["path", { d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16", key: "1ifwr1" }],
  [
    "path",
    {
      d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "17abbs"
    }
  ],
  ["path", { d: "m2 15 6 6", key: "10dquu" }],
  [
    "path",
    {
      d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",
      key: "1h3036"
    }
  ]
]);
const HandHelping = createLucideIcon("HandHelping", [
  ["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14", key: "1j4xps" }],
  [
    "path",
    {
      d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "uospg8"
    }
  ],
  ["path", { d: "m2 13 6 6", key: "16e5sb" }]
]);
const HandMetal = createLucideIcon("HandMetal", [
  ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "7eki13" }],
  ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2", key: "94qvcw" }],
  ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9", key: "m1ah89" }],
  [
    "path",
    {
      d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
      key: "t1skq1"
    }
  ]
]);
const HandPlatter = createLucideIcon("HandPlatter", [
  ["path", { d: "M12 3V2", key: "ar7q03" }],
  ["path", { d: "M5 10a7.1 7.1 0 0 1 14 0", key: "1t9y3n" }],
  ["path", { d: "M4 10h16", key: "img6z1" }],
  ["path", { d: "M2 14h12a2 2 0 1 1 0 4h-2", key: "loyjft" }],
  [
    "path",
    {
      d: "m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",
      key: "1rixiy"
    }
  ],
  ["path", { d: "M5 14v7H2", key: "3mujks" }]
]);
const Hand = createLucideIcon("Hand", [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "aigmz7" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "1n6bmn" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8", key: "a9iiix" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
]);
const Handshake = createLucideIcon("Handshake", [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb"
    }
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }]
]);
const HardDriveDownload = createLucideIcon("HardDriveDownload", [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
]);
const HardDriveUpload = createLucideIcon("HardDriveUpload", [
  ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
]);
const HardDrive = createLucideIcon("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
]);
const HardHat = createLucideIcon("HardHat", [
  [
    "path",
    {
      d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
      key: "1dej2m"
    }
  ],
  ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }],
  ["path", { d: "M4 15v-3a6 6 0 0 1 6-6h0", key: "1uc279" }],
  ["path", { d: "M14 6h0a6 6 0 0 1 6 6v3", key: "1j9mnm" }]
]);
const Hash = createLucideIcon("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
const Haze = createLucideIcon("Haze", [
  ["path", { d: "m5.2 6.2 1.4 1.4", key: "17imol" }],
  ["path", { d: "M2 13h2", key: "13gyu8" }],
  ["path", { d: "M20 13h2", key: "16rner" }],
  ["path", { d: "m17.4 7.6 1.4-1.4", key: "t4xlah" }],
  ["path", { d: "M22 17H2", key: "1gtaj3" }],
  ["path", { d: "M22 21H2", key: "1gy6en" }],
  ["path", { d: "M16 13a4 4 0 0 0-8 0", key: "1dyczq" }],
  ["path", { d: "M12 5V2.5", key: "1vytko" }]
]);
const HdmiPort = createLucideIcon("HdmiPort", [
  [
    "path",
    {
      d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",
      key: "2128wb"
    }
  ],
  ["path", { d: "M7.5 12h9", key: "1t0ckc" }]
]);
const Heading1 = createLucideIcon("Heading1", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]);
const Heading2 = createLucideIcon("Heading2", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]);
const Heading3 = createLucideIcon("Heading3", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
]);
const Heading4 = createLucideIcon("Heading4", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 10v4h4", key: "13sv97" }],
  ["path", { d: "M21 10v8", key: "1kdml4" }]
]);
const Heading5 = createLucideIcon("Heading5", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
  [
    "path",
    { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
  ]
]);
const Heading6 = createLucideIcon("Heading6", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
  ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
]);
const Heading = createLucideIcon("Heading", [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
]);
const Headphones = createLucideIcon("Headphones", [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
]);
const Headset = createLucideIcon("Headset", [
  [
    "path",
    {
      d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
      key: "12oyoe"
    }
  ],
  ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5", key: "1x7m43" }]
]);
const HeartCrack = createLucideIcon("HeartCrack", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "m12 13-1-1 2-2-3-3 2-2", key: "xjdxli" }]
]);
const HeartHandshake = createLucideIcon("HeartHandshake", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "12sd6o"
    }
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }]
]);
const HeartOff = createLucideIcon("HeartOff", [
  ["line", { x1: "2", y1: "2", x2: "22", y2: "22", key: "1w4vcy" }],
  [
    "path",
    { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35", key: "3mpagl" }
  ],
  [
    "path",
    {
      d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
      key: "1gh3v3"
    }
  ]
]);
const HeartPulse = createLucideIcon("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
]);
const Heart = createLucideIcon("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
const Heater = createLucideIcon("Heater", [
  ["path", { d: "M11 8c2-3-2-3 0-6", key: "1ldv5m" }],
  ["path", { d: "M15.5 8c2-3-2-3 0-6", key: "1otqoz" }],
  ["path", { d: "M6 10h.01", key: "1lbq93" }],
  ["path", { d: "M6 14h.01", key: "zudwn7" }],
  ["path", { d: "M10 16v-4", key: "1c25yv" }],
  ["path", { d: "M14 16v-4", key: "1dkbt8" }],
  ["path", { d: "M18 16v-4", key: "1yg9me" }],
  [
    "path",
    { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3", key: "1ubg90" }
  ],
  ["path", { d: "M5 20v2", key: "1abpe8" }],
  ["path", { d: "M19 20v2", key: "kqn6ft" }]
]);
const HelpCircle = createLucideIcon("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const Hexagon = createLucideIcon("Hexagon", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ]
]);
const Highlighter = createLucideIcon("Highlighter", [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
]);
const History = createLucideIcon("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Home = createLucideIcon("Home", [
  ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
]);
const HopOff = createLucideIcon("HopOff", [
  ["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27", key: "qyzcap" }],
  [
    "path",
    {
      d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",
      key: "y078lb"
    }
  ],
  ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26", key: "1utre3" }],
  [
    "path",
    {
      d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",
      key: "17o9hm"
    }
  ],
  ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75", key: "1d1n4p" }],
  [
    "path",
    {
      d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",
      key: "9uv3tt"
    }
  ],
  [
    "path",
    {
      d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",
      key: "1292wz"
    }
  ],
  [
    "path",
    {
      d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",
      key: "7ozu9p"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const Hop = createLucideIcon("Hop", [
  [
    "path",
    {
      d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",
      key: "18lxf1"
    }
  ],
  [
    "path",
    {
      d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",
      key: "vtfxrw"
    }
  ],
  [
    "path",
    {
      d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",
      key: "13hl71"
    }
  ],
  [
    "path",
    {
      d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",
      key: "1sl8oj"
    }
  ],
  [
    "path",
    {
      d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",
      key: "19c6kt"
    }
  ],
  [
    "path",
    {
      d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",
      key: "85ghs3"
    }
  ],
  ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1", key: "x087yj" }],
  [
    "path",
    {
      d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",
      key: "11xdqo"
    }
  ]
]);
const Hotel = createLucideIcon("Hotel", [
  [
    "path",
    {
      d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
      key: "p9z69c"
    }
  ],
  ["path", { d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16", key: "1bvcvh" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M10 22v-6.5m4 0V22", key: "16gs4s" }]
]);
const Hourglass = createLucideIcon("Hourglass", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k"
    }
  ],
  [
    "path",
    { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
  ]
]);
const IceCream2 = createLucideIcon("IceCream2", [
  [
    "path",
    {
      d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
      key: "g86ewz"
    }
  ],
  ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0", key: "4k3m1s" }],
  ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0", key: "zmuahr" }]
]);
const IceCream = createLucideIcon("IceCream", [
  ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11", key: "1v6356" }],
  ["path", { d: "M17 7A5 5 0 0 0 7 7", key: "151p3v" }],
  ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4", key: "1sdaij" }]
]);
const ImageDown = createLucideIcon("ImageDown", [
  [
    "path",
    {
      d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
      key: "9csbqa"
    }
  ],
  ["path", { d: "m14 19 3 3v-5.5", key: "9ldu5r" }],
  ["path", { d: "m17 22 3-3", key: "1nkfve" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
]);
const ImageMinus = createLucideIcon("ImageMinus", [
  ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "m87ecr" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
const ImageOff = createLucideIcon("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]);
const ImagePlus = createLucideIcon("ImagePlus", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
const ImageUp = createLucideIcon("ImageUp", [
  [
    "path",
    {
      d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
      key: "9csbqa"
    }
  ],
  ["path", { d: "m14 19.5 3-3 3 3", key: "9vmjn0" }],
  ["path", { d: "M17 22v-5.5", key: "1aa6fl" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
]);
const Image = createLucideIcon("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
const Images = createLucideIcon("Images", [
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18", key: "nf6bnh" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2", key: "12espp" }]
]);
const Import = createLucideIcon("Import", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm"
    }
  ]
]);
const Inbox = createLucideIcon("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
]);
const Indent = createLucideIcon("Indent", [
  ["polyline", { points: "3 8 7 12 3 16", key: "f3rxhf" }],
  ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
  ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
  ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
]);
const IndianRupee = createLucideIcon("IndianRupee", [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
]);
const Infinity = createLucideIcon("Infinity", [
  [
    "path",
    {
      d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
      key: "1z0uae"
    }
  ]
]);
const InspectionPanel = createLucideIcon("InspectionPanel", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h.01", key: "7u93v4" }],
  ["path", { d: "M17 7h.01", key: "14a9sn" }],
  ["path", { d: "M7 17h.01", key: "19xn7k" }],
  ["path", { d: "M17 17h.01", key: "1sd3ek" }]
]);
const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
const Italic = createLucideIcon("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);
const IterationCcw = createLucideIcon("IterationCcw", [
  ["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8", key: "4znkd0" }],
  ["polyline", { points: "16 14 20 18 16 22", key: "11njsm" }]
]);
const IterationCw = createLucideIcon("IterationCw", [
  ["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4", key: "tuf4su" }],
  ["polyline", { points: "8 22 4 18 8 14", key: "evkj9s" }]
]);
const JapaneseYen = createLucideIcon("JapaneseYen", [
  ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3", key: "2ej80x" }],
  ["path", { d: "M6 15h12", key: "1hwgt5" }],
  ["path", { d: "M6 11h12", key: "wf4gp6" }]
]);
const Joystick = createLucideIcon("Joystick", [
  [
    "path",
    {
      d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
      key: "jg2n2t"
    }
  ],
  ["path", { d: "M6 15v-2", key: "gd6mvg" }],
  ["path", { d: "M12 15V9", key: "8c7uyn" }],
  ["circle", { cx: "12", cy: "6", r: "3", key: "1gm2ql" }]
]);
const KanbanSquareDashed = createLucideIcon("KanbanSquareDashed", [
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }]
]);
const KanbanSquare = createLucideIcon("KanbanSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }]
]);
const Kanban = createLucideIcon("Kanban", [
  ["path", { d: "M6 5v11", key: "mdvv1e" }],
  ["path", { d: "M12 5v6", key: "14ar3b" }],
  ["path", { d: "M18 5v14", key: "7ji314" }]
]);
const KeyRound = createLucideIcon("KeyRound", [
  ["path", { d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z", key: "167ctg" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
const KeySquare = createLucideIcon("KeySquare", [
  [
    "path",
    {
      d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",
      key: "9li5bk"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4", key: "1ym3zm" }]
]);
const KeyboardMusic = createLucideIcon("KeyboardMusic", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M6 12v4", key: "dy92yo" }],
  ["path", { d: "M10 12v4", key: "1fxnav" }],
  ["path", { d: "M14 12v4", key: "1hft58" }],
  ["path", { d: "M18 12v4", key: "tjjnbz" }]
]);
const Keyboard = createLucideIcon("Keyboard", [
  ["path", { d: "M10 8h.01", key: "1r9ogq" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M6 8h.01", key: "x9i8wu" }],
  ["path", { d: "M7 16h10", key: "wp8him" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
]);
const LampCeiling = createLucideIcon("LampCeiling", [
  ["path", { d: "M12 2v5", key: "nd4vlx" }],
  ["path", { d: "M6 7h12l4 9H2l4-9Z", key: "123d64" }],
  ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0", key: "1061mw" }]
]);
const LampDesk = createLucideIcon("LampDesk", [
  ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z", key: "1b0msb" }],
  ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z", key: "1uemms" }],
  ["path", { d: "M9.5 6.5 4 12l3 6", key: "1bx08v" }],
  ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z", key: "wap775" }]
]);
const LampFloor = createLucideIcon("LampFloor", [
  ["path", { d: "M9 2h6l3 7H6l3-7Z", key: "wcx6mj" }],
  ["path", { d: "M12 9v13", key: "3n1su1" }],
  ["path", { d: "M9 22h6", key: "1rlq3v" }]
]);
const LampWallDown = createLucideIcon("LampWallDown", [
  ["path", { d: "M11 13h6l3 7H8l3-7Z", key: "9n3qlo" }],
  ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8", key: "1hu4hb" }],
  ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z", key: "s053bc" }]
]);
const LampWallUp = createLucideIcon("LampWallUp", [
  ["path", { d: "M11 4h6l3 7H8l3-7Z", key: "11x1ee" }],
  ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8", key: "eutp5o" }],
  ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z", key: "1iuthr" }]
]);
const Lamp = createLucideIcon("Lamp", [
  ["path", { d: "M8 2h8l4 10H4L8 2Z", key: "9dma5w" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z", key: "mwf4oh" }]
]);
const LandPlot = createLucideIcon("LandPlot", [
  ["path", { d: "m12 8 6-3-6-3v10", key: "mvpnpy" }],
  [
    "path",
    {
      d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
      key: "ek95tt"
    }
  ],
  ["path", { d: "m6.49 12.85 11.02 6.3", key: "1kt42w" }],
  ["path", { d: "M17.51 12.85 6.5 19.15", key: "v55bdg" }]
]);
const Landmark = createLucideIcon("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]);
const Languages = createLucideIcon("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]);
const Laptop2 = createLucideIcon("Laptop2", [
  ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2", key: "1qhy41" }],
  ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }]
]);
const Laptop = createLucideIcon("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
]);
const LassoSelect = createLucideIcon("LassoSelect", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91", key: "ybbtv3" }],
  [
    "path",
    {
      d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
      key: "gt5e1w"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }],
  [
    "path",
    {
      d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",
      key: "1bawls"
    }
  ]
]);
const Lasso = createLucideIcon("Lasso", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  [
    "path",
    {
      d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
      key: "146dds"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }]
]);
const Laugh = createLucideIcon("Laugh", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z", key: "b2q4dd" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Layers2 = createLucideIcon("Layers2", [
  [
    "path",
    {
      d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",
      key: "1cuww1"
    }
  ],
  [
    "path",
    {
      d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",
      key: "pdlvxu"
    }
  ]
]);
const Layers3 = createLucideIcon("Layers3", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  [
    "path",
    {
      d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1e5n1m"
    }
  ],
  [
    "path",
    {
      d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1iwflc"
    }
  ]
]);
const LayoutDashboard = createLucideIcon("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
const LayoutList = createLucideIcon("LayoutList", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
]);
const LayoutPanelLeft = createLucideIcon("LayoutPanelLeft", [
  ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
]);
const LayoutPanelTop = createLucideIcon("LayoutPanelTop", [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
]);
const LayoutTemplate = createLucideIcon("LayoutTemplate", [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
]);
const Leaf = createLucideIcon("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
]);
const LeafyGreen = createLucideIcon("LeafyGreen", [
  [
    "path",
    {
      d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
      key: "1134nt"
    }
  ],
  ["path", { d: "M2 22 17 7", key: "1q7jp2" }]
]);
const LibraryBig = createLucideIcon("LibraryBig", [
  ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  [
    "path",
    {
      d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
      key: "1qboyk"
    }
  ]
]);
const LibrarySquare = createLucideIcon("LibrarySquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7v10", key: "d5nglc" }],
  ["path", { d: "M11 7v10", key: "pptsnr" }],
  ["path", { d: "m15 7 2 10", key: "1m7qm5" }]
]);
const LifeBuoy = createLucideIcon("LifeBuoy", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
]);
const Ligature = createLucideIcon("Ligature", [
  ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2", key: "1rtphz" }],
  ["path", { d: "M6 12h4", key: "a4o3ry" }],
  ["path", { d: "M14 12h2v8", key: "c1fccl" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 20h4", key: "lzx1xo" }]
]);
const LightbulbOff = createLucideIcon("LightbulbOff", [
  ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", key: "1fkcox" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", key: "10m8kw" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
const Lightbulb = createLucideIcon("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
const LineChart = createLucideIcon("LineChart", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
]);
const Link2Off = createLucideIcon("Link2Off", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Link = createLucideIcon("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
const ListChecks = createLucideIcon("ListChecks", [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);
const ListCollapse = createLucideIcon("ListCollapse", [
  ["path", { d: "m3 10 2.5-2.5L3 5", key: "i6eama" }],
  ["path", { d: "m3 19 2.5-2.5L3 14", key: "w2gmor" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }]
]);
const ListEnd = createLucideIcon("ListEnd", [
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M10 18H3", key: "13769t" }],
  ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5", key: "ilrcs8" }],
  ["path", { d: "m16 16-2 2 2 2", key: "kkc6pm" }]
]);
const ListFilter = createLucideIcon("ListFilter", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
const ListMinus = createLucideIcon("ListMinus", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
]);
const ListMusic = createLucideIcon("ListMusic", [
  ["path", { d: "M21 15V6", key: "h1cx4g" }],
  ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z", key: "8saifv" }],
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }]
]);
const ListOrdered = createLucideIcon("ListOrdered", [
  ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
  ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
  ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]);
const ListPlus = createLucideIcon("ListPlus", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M18 9v6", key: "1twb98" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
]);
const ListRestart = createLucideIcon("ListRestart", [
  ["path", { d: "M21 6H3", key: "1jwq7v" }],
  ["path", { d: "M7 12H3", key: "13ou7f" }],
  ["path", { d: "M7 18H3", key: "1sijw9" }],
  [
    "path",
    {
      d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
      key: "qth677"
    }
  ],
  ["path", { d: "M11 10v4h4", key: "172dkj" }]
]);
const ListStart = createLucideIcon("ListStart", [
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M10 6H3", key: "lf8lx7" }],
  ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5", key: "1hghli" }],
  ["path", { d: "m16 8-2-2 2-2", key: "160uvd" }]
]);
const ListTodo = createLucideIcon("ListTodo", [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);
const ListTree = createLucideIcon("ListTree", [
  ["path", { d: "M21 12h-8", key: "1bmf0i" }],
  ["path", { d: "M21 6H8", key: "1pqkrb" }],
  ["path", { d: "M21 18h-8", key: "1tm79t" }],
  ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3", key: "1ywdgy" }],
  ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3", key: "2wc746" }]
]);
const ListVideo = createLucideIcon("ListVideo", [
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }],
  ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }]
]);
const ListX = createLucideIcon("ListX", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "m19 10-4 4", key: "1tz659" }],
  ["path", { d: "m15 10 4 4", key: "1n7nei" }]
]);
const List = createLucideIcon("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);
const Loader = createLucideIcon("Loader", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "6", key: "gza1u7" }],
  ["line", { x1: "12", x2: "12", y1: "18", y2: "22", key: "1qhbu9" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "4.93", y2: "7.76", key: "xae44r" }],
  ["line", { x1: "16.24", x2: "19.07", y1: "16.24", y2: "19.07", key: "bxnmvf" }],
  ["line", { x1: "2", x2: "6", y1: "12", y2: "12", key: "89khin" }],
  ["line", { x1: "18", x2: "22", y1: "12", y2: "12", key: "pb8tfm" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "19.07", y2: "16.24", key: "1uxjnu" }],
  ["line", { x1: "16.24", x2: "19.07", y1: "7.76", y2: "4.93", key: "6duxfx" }]
]);
const LocateFixed = createLucideIcon("LocateFixed", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const LocateOff = createLucideIcon("LocateOff", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  [
    "path",
    {
      d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
      key: "1oh7ia"
    }
  ],
  [
    "path",
    {
      d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
      key: "3qdecy"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Locate = createLucideIcon("Locate", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }]
]);
const LockKeyhole = createLucideIcon("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
const LogIn = createLucideIcon("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
]);
const LogOut = createLucideIcon("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
const Lollipop = createLucideIcon("Lollipop", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0", key: "107gwy" }]
]);
const Luggage = createLucideIcon("Luggage", [
  [
    "path",
    {
      d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",
      key: "1h5fkc"
    }
  ],
  ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }],
  ["path", { d: "M10 20h4", key: "ni2waw" }],
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
]);
const MSquare = createLucideIcon("MSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 16V8l4 4 4-4v8", key: "141u4e" }]
]);
const Magnet = createLucideIcon("Magnet", [
  [
    "path",
    {
      d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
      key: "1i3lhw"
    }
  ],
  ["path", { d: "m5 8 4 4", key: "j6kj7e" }],
  ["path", { d: "m12 15 4 4", key: "lnac28" }]
]);
const MailCheck = createLucideIcon("MailCheck", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
]);
const MailMinus = createLucideIcon("MailMinus", [
  ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "fuxbkv" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);
const MailOpen = createLucideIcon("MailOpen", [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
]);
const MailPlus = createLucideIcon("MailPlus", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);
const MailQuestion = createLucideIcon("MailQuestion", [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  [
    "path",
    {
      d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
      key: "7z9rxb"
    }
  ],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
]);
const MailSearch = createLucideIcon("MailSearch", [
  ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5", key: "w80f2v" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z", key: "mgbru4" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
]);
const MailWarning = createLucideIcon("MailWarning", [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M20 14v4", key: "1hm744" }],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
]);
const MailX = createLucideIcon("MailX", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9", key: "1j9vog" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m17 17 4 4", key: "1b3523" }],
  ["path", { d: "m21 17-4 4", key: "uinynz" }]
]);
const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const Mailbox = createLucideIcon("Mailbox", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
      key: "1lbycx"
    }
  ],
  ["polyline", { points: "15,9 18,9 18,11", key: "1pm9c0" }],
  ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0", key: "n6nfvi" }],
  ["line", { x1: "6", x2: "7", y1: "10", y2: "10", key: "1e2scm" }]
]);
const Mails = createLucideIcon("Mails", [
  ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2", key: "1drq3f" }],
  ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7", key: "xn252p" }],
  ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14", key: "n13cji" }]
]);
const MapPinOff = createLucideIcon("MapPinOff", [
  [
    "path",
    { d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5", key: "12a8pk" }
  ],
  [
    "path",
    {
      d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",
      key: "1r9f6y"
    }
  ],
  [
    "path",
    { d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13", key: "erynq7" }
  ],
  ["path", { d: "M14.9 9.25a3 3 0 0 0-2.15-2.16", key: "1hwwmx" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const MapPin = createLucideIcon("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
const MapPinned = createLucideIcon("MapPinned", [
  ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0", key: "yrbn30" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",
      key: "112zkj"
    }
  ]
]);
const Map$1 = createLucideIcon("Map", [
  ["polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21", key: "ok2ie8" }],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "18", key: "w34qz5" }],
  ["line", { x1: "15", x2: "15", y1: "6", y2: "21", key: "volv9a" }]
]);
const Martini = createLucideIcon("Martini", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M12 11v11", key: "ur9y6a" }],
  ["path", { d: "m19 3-7 8-7-8Z", key: "1sgpiw" }]
]);
const Maximize = createLucideIcon("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]);
const Medal = createLucideIcon("Medal", [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza"
    }
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]
]);
const MegaphoneOff = createLucideIcon("MegaphoneOff", [
  ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14", key: "3429n" }],
  ["path", { d: "M21 15.34V6l-7.31 2.03", key: "4o1dh8" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Megaphone = createLucideIcon("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
]);
const Meh = createLucideIcon("Meh", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "8", x2: "16", y1: "15", y2: "15", key: "1xb1d9" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const MemoryStick = createLucideIcon("MemoryStick", [
  ["path", { d: "M6 19v-3", key: "1nvgqn" }],
  ["path", { d: "M10 19v-3", key: "iu8nkm" }],
  ["path", { d: "M14 19v-3", key: "kcehxu" }],
  ["path", { d: "M18 19v-3", key: "1vh91z" }],
  ["path", { d: "M8 11V9", key: "63erz4" }],
  ["path", { d: "M16 11V9", key: "fru6f3" }],
  ["path", { d: "M12 11V9", key: "ha00sb" }],
  ["path", { d: "M2 15h20", key: "16ne18" }],
  [
    "path",
    {
      d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
      key: "lhddv3"
    }
  ]
]);
const MenuSquare = createLucideIcon("MenuSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 8h10", key: "1jw688" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);
const Menu = createLucideIcon("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const Merge = createLucideIcon("Merge", [
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
  ["path", { d: "m20 22-5-5", key: "1m27yz" }]
]);
const MessageCircleCode = createLucideIcon("MessageCircleCode", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 10 2 2-2 2", key: "1kkmpt" }]
]);
const MessageCircleDashed = createLucideIcon("MessageCircleDashed", [
  ["path", { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1", key: "16ll65" }],
  ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1", key: "1nq77a" }],
  ["path", { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5", key: "1sf7wn" }],
  ["path", { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1", key: "x1hs5g" }],
  ["path", { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1", key: "19m18z" }],
  ["path", { d: "M3.5 17.5 2 22l4.5-1.5", key: "1f36qi" }],
  ["path", { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5", key: "1vz3ju" }],
  ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1", key: "19f9do" }]
]);
const MessageCircleHeart = createLucideIcon("MessageCircleHeart", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  [
    "path",
    {
      d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",
      key: "43lnbm"
    }
  ]
]);
const MessageCircleMore = createLucideIcon("MessageCircleMore", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
]);
const MessageCircleOff = createLucideIcon("MessageCircleOff", [
  ["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5", key: "1iebmn" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7", key: "1ov8ce" }]
]);
const MessageCirclePlus = createLucideIcon("MessageCirclePlus", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
const MessageCircleQuestion = createLucideIcon("MessageCircleQuestion", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const MessageCircleReply = createLucideIcon("MessageCircleReply", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
  ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1", key: "1gheu4" }]
]);
const MessageCircleWarning = createLucideIcon("MessageCircleWarning", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);
const MessageCircleX = createLucideIcon("MessageCircleX", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const MessageCircle = createLucideIcon("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const MessageSquareCode = createLucideIcon("MessageSquareCode", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m10 8-2 2 2 2", key: "19bv1o" }],
  ["path", { d: "m14 8 2 2-2 2", key: "1whylv" }]
]);
const MessageSquareDashed = createLucideIcon("MessageSquareDashed", [
  ["path", { d: "M3 6V5c0-1.1.9-2 2-2h2", key: "9usibi" }],
  ["path", { d: "M11 3h3", key: "1c3ji7" }],
  ["path", { d: "M18 3h1c1.1 0 2 .9 2 2", key: "19esxn" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M21 15c0 1.1-.9 2-2 2h-1", key: "1fo1j8" }],
  ["path", { d: "M14 17h-3", key: "1w4p2m" }],
  ["path", { d: "m7 17-4 4v-5", key: "ph9x1h" }],
  ["path", { d: "M3 12v-2", key: "856n1q" }]
]);
const MessageSquareDiff = createLucideIcon("MessageSquareDiff", [
  ["path", { d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", key: "1xuzuj" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }]
]);
const MessageSquareDot = createLucideIcon("MessageSquareDot", [
  ["path", { d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7", key: "uodpkb" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }]
]);
const MessageSquareHeart = createLucideIcon("MessageSquareHeart", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  [
    "path",
    {
      d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",
      key: "1blaws"
    }
  ]
]);
const MessageSquareMore = createLucideIcon("MessageSquareMore", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }]
]);
const MessageSquareOff = createLucideIcon("MessageSquareOff", [
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10", key: "pwpm4a" }]
]);
const MessageSquarePlus = createLucideIcon("MessageSquarePlus", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
const MessageSquareQuote = createLucideIcon("MessageSquareQuote", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8", key: "1jfesj" }],
  ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2", key: "1dq9mh" }]
]);
const MessageSquareReply = createLucideIcon("MessageSquareReply", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m10 7-3 3 3 3", key: "1eugdv" }],
  ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7", key: "ernfh3" }]
]);
const MessageSquareShare = createLucideIcon("MessageSquareShare", [
  ["path", { d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7", key: "tqtdkg" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "m16 8 5-5", key: "15mbrl" }]
]);
const MessageSquareText = createLucideIcon("MessageSquareText", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M13 8H7", key: "14i4kc" }],
  ["path", { d: "M17 12H7", key: "16if0g" }]
]);
const MessageSquareWarning = createLucideIcon("MessageSquareWarning", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v2", key: "stiyo7" }],
  ["path", { d: "M12 13h.01", key: "y0uutt" }]
]);
const MessageSquareX = createLucideIcon("MessageSquareX", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
]);
const MessagesSquare = createLucideIcon("MessagesSquare", [
  ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z", key: "16vlm8" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" }]
]);
const Mic2 = createLucideIcon("Mic2", [
  ["path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12", key: "zoua8r" }],
  ["circle", { cx: "17", cy: "7", r: "5", key: "1fomce" }]
]);
const MicOff = createLucideIcon("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const Mic = createLucideIcon("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const Microscope = createLucideIcon("Microscope", [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
]);
const Microwave = createLucideIcon("Microwave", [
  ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2", key: "2no95f" }],
  ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" }],
  ["path", { d: "M18 8v7", key: "o5zi4n" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 19v2", key: "1dawf0" }]
]);
const Milestone = createLucideIcon("Milestone", [
  ["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z", key: "1mp5s7" }],
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M12 3v3", key: "1n5kay" }]
]);
const MilkOff = createLucideIcon("MilkOff", [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
      key: "y0ejgx"
    }
  ],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435", key: "iaxqsy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Milk = createLucideIcon("Milk", [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
      key: "qtp12x"
    }
  ],
  ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "ygeh44" }]
]);
const Minimize = createLucideIcon("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]);
const MinusCircle = createLucideIcon("MinusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
const MinusSquare = createLucideIcon("MinusSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
const Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
const MonitorCheck = createLucideIcon("MonitorCheck", [
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const MonitorDot = createLucideIcon("MonitorDot", [
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
  ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9", key: "1fet9y" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const MonitorDown = createLucideIcon("MonitorDown", [
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m15 10-3 3-3-3", key: "lzhmyn" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const MonitorOff = createLucideIcon("MonitorOff", [
  ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2", key: "k0q8oc" }],
  ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9", key: "cp1ac0" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const MonitorPause = createLucideIcon("MonitorPause", [
  ["path", { d: "M10 13V7", key: "1u13u9" }],
  ["path", { d: "M14 13V7", key: "1vj9om" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const MonitorPlay = createLucideIcon("MonitorPlay", [
  ["path", { d: "m10 7 5 3-5 3Z", key: "29ljg6" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const MonitorSpeaker = createLucideIcon("MonitorSpeaker", [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
]);
const MonitorStop = createLucideIcon("MonitorStop", [
  ["rect", { x: "9", y: "7", width: "6", height: "6", key: "4xvc6r" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const MonitorUp = createLucideIcon("MonitorUp", [
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const MonitorX = createLucideIcon("MonitorX", [
  ["path", { d: "m14.5 12.5-5-5", key: "1jahn5" }],
  ["path", { d: "m9.5 12.5 5-5", key: "1k2t7b" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
const Monitor = createLucideIcon("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
const MoonStar = createLucideIcon("MoonStar", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }]
]);
const Moon = createLucideIcon("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
const MoreHorizontal = createLucideIcon("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
const MoreVertical = createLucideIcon("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const MountainSnow = createLucideIcon("MountainSnow", [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }],
  [
    "path",
    { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19", key: "1pvmmp" }
  ]
]);
const Mountain = createLucideIcon("Mountain", [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]
]);
const MousePointer2 = createLucideIcon("MousePointer2", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
const MousePointerClick = createLucideIcon("MousePointerClick", [
  ["path", { d: "m9 9 5 12 1.8-5.2L21 14Z", key: "1b76lo" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }]
]);
const MousePointerSquareDashed = createLucideIcon("MousePointerSquareDashed", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h2", key: "1qve2z" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M3 14v1", key: "vnatye" }]
]);
const MousePointerSquare = createLucideIcon("MousePointerSquare", [
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }],
  ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }]
]);
const MousePointer = createLucideIcon("MousePointer", [
  ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
  ["path", { d: "m13 13 6 6", key: "1nhxnf" }]
]);
const Mouse = createLucideIcon("Mouse", [
  ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" }],
  ["path", { d: "M12 6v4", key: "16clxf" }]
]);
const Move3d = createLucideIcon("Move3d", [
  ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
  ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
  ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
]);
const MoveDiagonal2 = createLucideIcon("MoveDiagonal2", [
  ["polyline", { points: "5 11 5 5 11 5", key: "ncfzxk" }],
  ["polyline", { points: "19 13 19 19 13 19", key: "1mk7hk" }],
  ["line", { x1: "5", x2: "19", y1: "5", y2: "19", key: "mcyte3" }]
]);
const MoveDiagonal = createLucideIcon("MoveDiagonal", [
  ["polyline", { points: "13 5 19 5 19 11", key: "11219e" }],
  ["polyline", { points: "11 19 5 19 5 13", key: "sfq3wq" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
]);
const MoveDownLeft = createLucideIcon("MoveDownLeft", [
  ["path", { d: "M11 19H5V13", key: "1akmht" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);
const MoveDownRight = createLucideIcon("MoveDownRight", [
  ["path", { d: "M19 13V19H13", key: "10vkzq" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
]);
const MoveDown = createLucideIcon("MoveDown", [
  ["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
]);
const MoveHorizontal = createLucideIcon("MoveHorizontal", [
  ["polyline", { points: "18 8 22 12 18 16", key: "1hqrds" }],
  ["polyline", { points: "6 8 2 12 6 16", key: "f0ernq" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }]
]);
const MoveLeft = createLucideIcon("MoveLeft", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
const MoveRight = createLucideIcon("MoveRight", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
const MoveUpLeft = createLucideIcon("MoveUpLeft", [
  ["path", { d: "M5 11V5H11", key: "3q78g9" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
]);
const MoveUpRight = createLucideIcon("MoveUpRight", [
  ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);
const MoveUp = createLucideIcon("MoveUp", [
  ["path", { d: "M8 6L12 2L16 6", key: "1yvkyx" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
]);
const MoveVertical = createLucideIcon("MoveVertical", [
  ["polyline", { points: "8 18 12 22 16 18", key: "1uutw3" }],
  ["polyline", { points: "8 6 12 2 16 6", key: "d60sxy" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
]);
const Move = createLucideIcon("Move", [
  ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
  ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
  ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
  ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
]);
const Music2 = createLucideIcon("Music2", [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
]);
const Music3 = createLucideIcon("Music3", [
  ["circle", { cx: "12", cy: "18", r: "4", key: "m3r9ws" }],
  ["path", { d: "M16 18V2", key: "40x2m5" }]
]);
const Music4 = createLucideIcon("Music4", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["path", { d: "m9 9 12-2", key: "1e64n2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);
const Music = createLucideIcon("Music", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);
const Navigation2Off = createLucideIcon("Navigation2Off", [
  ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17", key: "qoq2o2" }],
  ["path", { d: "M14.53 8.88 12 2l-1.17 3.17", key: "k3sjzy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Navigation2 = createLucideIcon("Navigation2", [
  ["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }]
]);
const NavigationOff = createLucideIcon("NavigationOff", [
  ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43", key: "1vdtb7" }],
  ["path", { d: "M17.39 11.73 22 2l-9.73 4.61", key: "tya3r6" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Navigation = createLucideIcon("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
]);
const Network = createLucideIcon("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);
const Newspaper = createLucideIcon("Newspaper", [
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
      key: "7pis2x"
    }
  ],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }]
]);
const Nfc = createLucideIcon("Nfc", [
  ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
  ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }],
  ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }],
  ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }]
]);
const NotebookPen = createLucideIcon("NotebookPen", [
  ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4", key: "re6nr2" }],
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["path", { d: "M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z", key: "1dba1m" }]
]);
const NotebookTabs = createLucideIcon("NotebookTabs", [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M15 2v20", key: "dcj49h" }],
  ["path", { d: "M15 7h5", key: "1xj5lc" }],
  ["path", { d: "M15 12h5", key: "w5shd9" }],
  ["path", { d: "M15 17h5", key: "1qaofu" }]
]);
const NotebookText = createLucideIcon("NotebookText", [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
]);
const Notebook = createLucideIcon("Notebook", [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M16 2v20", key: "rotuqe" }]
]);
const NotepadTextDashed = createLucideIcon("NotepadTextDashed", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "j91f56" }],
  ["path", { d: "M20 12v2", key: "w8o0tu" }],
  ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1", key: "1c9ggx" }],
  ["path", { d: "M13 22h-2", key: "191ugt" }],
  ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2", key: "1rt9px" }],
  ["path", { d: "M4 14v-2", key: "1v0sqh" }],
  ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2", key: "1mwabg" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
]);
const NotepadText = createLucideIcon("NotepadText", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2", key: "1u9h20" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
]);
const NutOff = createLucideIcon("NutOff", [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
      key: "1xcvy9"
    }
  ],
  ["path", { d: "M19 10v3.343", key: "163tfc" }],
  [
    "path",
    {
      d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
      key: "17914v"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Nut = createLucideIcon("Nut", [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
      key: "1tgyif"
    }
  ],
  [
    "path",
    {
      d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
      key: "tnsqj"
    }
  ]
]);
const Octagon = createLucideIcon("Octagon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ]
]);
const Option = createLucideIcon("Option", [
  ["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }],
  ["path", { d: "M14 3h7", key: "16f0ms" }]
]);
const Orbit = createLucideIcon("Orbit", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416", key: "eohfx2" }],
  ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416", key: "19pvbm" }]
]);
const Outdent = createLucideIcon("Outdent", [
  ["polyline", { points: "7 8 3 12 7 16", key: "2j60jr" }],
  ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
  ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
  ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
]);
const Package2 = createLucideIcon("Package2", [
  ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" }],
  ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9", key: "19h2x1" }],
  ["path", { d: "M12 3v6", key: "1holv5" }]
]);
const PackageCheck = createLucideIcon("PackageCheck", [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);
const PackageMinus = createLucideIcon("PackageMinus", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);
const PackageOpen = createLucideIcon("PackageOpen", [
  ["path", { d: "M12 22v-9", key: "x3hkom" }],
  [
    "path",
    {
      d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
      key: "2ntwy6"
    }
  ],
  [
    "path",
    {
      d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
      key: "1pmm1c"
    }
  ],
  [
    "path",
    {
      d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
      key: "12ttoo"
    }
  ]
]);
const PackagePlus = createLucideIcon("PackagePlus", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  ["path", { d: "M19 13v6", key: "85cyf1" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);
const PackageSearch = createLucideIcon("PackageSearch", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
]);
const PackageX = createLucideIcon("PackageX", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["path", { d: "m17 13 5 5m-5 0 5-5", key: "im3w4b" }]
]);
const Package = createLucideIcon("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
const PaintBucket = createLucideIcon("PaintBucket", [
  [
    "path",
    { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z", key: "irua1i" }
  ],
  ["path", { d: "m5 2 5 5", key: "1lls2c" }],
  ["path", { d: "M2 13h15", key: "1hkzvu" }],
  ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z", key: "xk76lq" }]
]);
const PaintRoller = createLucideIcon("PaintRoller", [
  ["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2", key: "jcyz7m" }],
  ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2", key: "1b9h7c" }],
  ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1", key: "d6e7yl" }]
]);
const Paintbrush2 = createLucideIcon("Paintbrush2", [
  [
    "path",
    { d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z", key: "1c8kta" }
  ],
  ["path", { d: "M6 12V2h12v10", key: "1esbnf" }],
  ["path", { d: "M14 2v4", key: "qmzblu" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }]
]);
const Paintbrush = createLucideIcon("Paintbrush", [
  [
    "path",
    {
      d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",
      key: "m6k5sh"
    }
  ],
  ["path", { d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7", key: "arzq70" }],
  ["path", { d: "M14.5 17.5 4.5 15", key: "s7fvrz" }]
]);
const Palette = createLucideIcon("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
]);
const Palmtree = createLucideIcon("Palmtree", [
  ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4", key: "foxbe7" }],
  [
    "path",
    { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3", key: "18arnh" }
  ],
  [
    "path",
    {
      d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",
      key: "epoumf"
    }
  ],
  ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14", key: "ft0feo" }]
]);
const PanelBottomClose = createLucideIcon("PanelBottomClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
]);
const PanelBottomDashed = createLucideIcon("PanelBottomDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 15h1", key: "171nev" }],
  ["path", { d: "M19 15h2", key: "1vnucp" }],
  ["path", { d: "M3 15h2", key: "8bym0q" }],
  ["path", { d: "M9 15h1", key: "1tg3ks" }]
]);
const PanelBottomOpen = createLucideIcon("PanelBottomOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
]);
const PanelBottom = createLucideIcon("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
const PanelLeftClose = createLucideIcon("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);
const PanelLeftDashed = createLucideIcon("PanelLeftDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 14v1", key: "askpd8" }],
  ["path", { d: "M9 19v2", key: "16tejx" }],
  ["path", { d: "M9 3v2", key: "1noubl" }],
  ["path", { d: "M9 9v1", key: "19ebxg" }]
]);
const PanelLeftOpen = createLucideIcon("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);
const PanelLeft = createLucideIcon("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
const PanelRightClose = createLucideIcon("PanelRightClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
]);
const PanelRightDashed = createLucideIcon("PanelRightDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 14v1", key: "ilsfch" }],
  ["path", { d: "M15 19v2", key: "1fst2f" }],
  ["path", { d: "M15 3v2", key: "z204g4" }],
  ["path", { d: "M15 9v1", key: "z2a8b1" }]
]);
const PanelRightOpen = createLucideIcon("PanelRightOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }]
]);
const PanelRight = createLucideIcon("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
const PanelTopClose = createLucideIcon("PanelTopClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m9 16 3-3 3 3", key: "1idcnm" }]
]);
const PanelTopDashed = createLucideIcon("PanelTopDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 9h1", key: "l0svgy" }],
  ["path", { d: "M19 9h2", key: "te2zfg" }],
  ["path", { d: "M3 9h2", key: "1h4ldw" }],
  ["path", { d: "M9 9h1", key: "15jzuz" }]
]);
const PanelTopOpen = createLucideIcon("PanelTopOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }]
]);
const PanelTop = createLucideIcon("PanelTop", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }]
]);
const PanelsLeftBottom = createLucideIcon("PanelsLeftBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M9 15h12", key: "5ijen5" }]
]);
const PanelsRightBottom = createLucideIcon("PanelsRightBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h12", key: "1wkqb3" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
const PanelsTopLeft = createLucideIcon("PanelsTopLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
]);
const Parentheses = createLucideIcon("Parentheses", [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }]
]);
const ParkingCircleOff = createLucideIcon("ParkingCircleOff", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m5 5 14 14", key: "11anup" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
  ["path", { d: "M9 17v-2.34", key: "a9qo08" }]
]);
const ParkingCircle = createLucideIcon("ParkingCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
]);
const ParkingMeter = createLucideIcon("ParkingMeter", [
  ["path", { d: "M9 9a3 3 0 1 1 6 0", key: "jdoeu8" }],
  ["path", { d: "M12 12v3", key: "158kv8" }],
  ["path", { d: "M11 15h2", key: "199qp6" }],
  [
    "path",
    {
      d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",
      key: "1l50wn"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
]);
const ParkingSquareOff = createLucideIcon("ParkingSquareOff", [
  ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41", key: "9l1ft6" }],
  ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3", key: "17knke" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
  ["path", { d: "M9 17v-2.3", key: "1jxgo2" }]
]);
const ParkingSquare = createLucideIcon("ParkingSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
]);
const PartyPopper = createLucideIcon("PartyPopper", [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "bpx1uq"
    }
  ],
  [
    "path",
    { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17", key: "1pd0s7" }
  ],
  [
    "path",
    { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7", key: "zq5xbz" }
  ],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks"
    }
  ]
]);
const PauseCircle = createLucideIcon("PauseCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
]);
const PauseOctagon = createLucideIcon("PauseOctagon", [
  ["path", { d: "M10 15V9", key: "1lckn7" }],
  ["path", { d: "M14 15V9", key: "1muqhk" }],
  [
    "path",
    { d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z", key: "1m7qra" }
  ]
]);
const Pause = createLucideIcon("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const PawPrint = createLucideIcon("PawPrint", [
  ["circle", { cx: "11", cy: "4", r: "2", key: "vol9p0" }],
  ["circle", { cx: "18", cy: "8", r: "2", key: "17gozi" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
  [
    "path",
    {
      d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
      key: "1ydw1z"
    }
  ]
]);
const PcCase = createLucideIcon("PcCase", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", key: "1uq1d7" }],
  ["path", { d: "M15 14h.01", key: "1kp3bh" }],
  ["path", { d: "M9 6h6", key: "dgm16u" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
const PenTool = createLucideIcon("PenTool", [
  ["path", { d: "m12 19 7-7 3 3-7 7-3-3z", key: "rklqx2" }],
  ["path", { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z", key: "1et58u" }],
  ["path", { d: "m2 2 7.586 7.586", key: "etlp93" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
]);
const PencilLine = createLucideIcon("PencilLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }],
  ["path", { d: "m15 5 3 3", key: "1w25hb" }]
]);
const PencilRuler = createLucideIcon("PencilRuler", [
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  [
    "path",
    { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13", key: "orapub" }
  ],
  ["path", { d: "m8 6 2-2", key: "115y1s" }],
  ["path", { d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z", key: "hes763" }],
  ["path", { d: "m18 16 2-2", key: "ee94s4" }],
  [
    "path",
    {
      d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
      key: "cfq27r"
    }
  ]
]);
const Pencil = createLucideIcon("Pencil", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
const Pentagon = createLucideIcon("Pentagon", [
  [
    "path",
    {
      d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",
      key: "hsj90r"
    }
  ]
]);
const PercentCircle = createLucideIcon("PercentCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
const PercentDiamond = createLucideIcon("PercentDiamond", [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
      key: "1tpxz2"
    }
  ],
  ["path", { d: "M9.2 9.2h.01", key: "1b7bvt" }],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "M14.7 14.8h.01", key: "17nsh4" }]
]);
const PercentSquare = createLucideIcon("PercentSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
const Percent = createLucideIcon("Percent", [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
]);
const PersonStanding = createLucideIcon("PersonStanding", [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
  ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }]
]);
const PhoneCall = createLucideIcon("PhoneCall", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ],
  ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
  ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]
]);
const PhoneForwarded = createLucideIcon("PhoneForwarded", [
  ["polyline", { points: "18 2 22 6 18 10", key: "6vjanh" }],
  ["line", { x1: "14", x2: "22", y1: "6", y2: "6", key: "1jsywh" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
const PhoneIncoming = createLucideIcon("PhoneIncoming", [
  ["polyline", { points: "16 2 16 8 22 8", key: "1ygljm" }],
  ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
const PhoneMissed = createLucideIcon("PhoneMissed", [
  ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
  ["line", { x1: "16", x2: "22", y1: "2", y2: "8", key: "13zxdn" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
const PhoneOff = createLucideIcon("PhoneOff", [
  [
    "path",
    {
      d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
      key: "z86iuo"
    }
  ],
  ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }]
]);
const PhoneOutgoing = createLucideIcon("PhoneOutgoing", [
  ["polyline", { points: "22 8 22 2 16 2", key: "1g204g" }],
  ["line", { x1: "16", x2: "22", y1: "8", y2: "2", key: "1ggias" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
const PiSquare = createLucideIcon("PiSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h10", key: "udp07y" }],
  ["path", { d: "M10 7v10", key: "i1d9ee" }],
  ["path", { d: "M16 17a2 2 0 0 1-2-2V7", key: "ftwdc7" }]
]);
const Pi = createLucideIcon("Pi", [
  ["line", { x1: "9", x2: "9", y1: "4", y2: "20", key: "ovs5a5" }],
  ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13", key: "10pag4" }],
  ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4", key: "1gaosr" }]
]);
const Piano = createLucideIcon("Piano", [
  [
    "path",
    {
      d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
      key: "lag0yf"
    }
  ],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M6 14v4", key: "9ng0ue" }],
  ["path", { d: "M10 14v4", key: "1v8uk5" }],
  ["path", { d: "M14 14v4", key: "1tqops" }],
  ["path", { d: "M18 14v4", key: "18uqwm" }]
]);
const Pickaxe = createLucideIcon("Pickaxe", [
  ["path", { d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912", key: "we99rg" }],
  [
    "path",
    {
      d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",
      key: "1w6hck"
    }
  ],
  [
    "path",
    {
      d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",
      key: "15hgfx"
    }
  ],
  [
    "path",
    {
      d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",
      key: "452b4h"
    }
  ]
]);
const PictureInPicture2 = createLucideIcon("PictureInPicture2", [
  ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4", key: "daa4of" }],
  ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2", key: "1nb8gs" }]
]);
const PictureInPicture = createLucideIcon("PictureInPicture", [
  [
    "path",
    {
      d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",
      key: "bcd8fb"
    }
  ],
  ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2", key: "136fx3" }]
]);
const PieChart = createLucideIcon("PieChart", [
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
  ["path", { d: "M22 12A10 10 0 0 0 12 2v10z", key: "1rfc4y" }]
]);
const PiggyBank = createLucideIcon("PiggyBank", [
  [
    "path",
    {
      d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",
      key: "uf6l00"
    }
  ],
  ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1", key: "nm575m" }],
  ["path", { d: "M16 11h0", key: "k2aug8" }]
]);
const PilcrowSquare = createLucideIcon("PilcrowSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17", key: "1l9586" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M16 7v10", key: "lavkr4" }]
]);
const Pilcrow = createLucideIcon("Pilcrow", [
  ["path", { d: "M13 4v16", key: "8vvj80" }],
  ["path", { d: "M17 4v16", key: "7dpous" }],
  ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }]
]);
const Pill = createLucideIcon("Pill", [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
]);
const PinOff = createLucideIcon("PinOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
  ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12", key: "13x2n8" }],
  ["path", { d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89", key: "reo3ki" }]
]);
const Pin = createLucideIcon("Pin", [
  ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
  [
    "path",
    {
      d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
      key: "13yl11"
    }
  ]
]);
const Pipette = createLucideIcon("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]);
const Pizza = createLucideIcon("Pizza", [
  ["path", { d: "M15 11h.01", key: "rns66s" }],
  ["path", { d: "M11 15h.01", key: "k85uqc" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
  ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" }]
]);
const PlaneLanding = createLucideIcon("PlaneLanding", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
      key: "1ma21e"
    }
  ]
]);
const PlaneTakeoff = createLucideIcon("PlaneTakeoff", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
      key: "fkigj9"
    }
  ]
]);
const Plane = createLucideIcon("Plane", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
]);
const PlayCircle = createLucideIcon("PlayCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
]);
const PlaySquare = createLucideIcon("PlaySquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }]
]);
const Plug2 = createLucideIcon("Plug2", [
  ["path", { d: "M9 2v6", key: "17ngun" }],
  ["path", { d: "M15 2v6", key: "s7yy2p" }],
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z", key: "nd4hoy" }]
]);
const PlugZap2 = createLucideIcon("PlugZap2", [
  ["path", { d: "m13 2-2 2.5h3L12 7", key: "1me98u" }],
  ["path", { d: "M10 14v-3", key: "1mllf3" }],
  ["path", { d: "M14 14v-3", key: "1l3fkq" }],
  ["path", { d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z", key: "jd5pat" }],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
]);
const PlugZap = createLucideIcon("PlugZap", [
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }]
]);
const Plug = createLucideIcon("Plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M9 8V2", key: "14iosj" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]
]);
const PlusCircle = createLucideIcon("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
const PlusSquare = createLucideIcon("PlusSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
const PocketKnife = createLucideIcon("PocketKnife", [
  ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2", key: "19w3oe" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z", key: "6fykxj" }],
  ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6", key: "1utzek" }]
]);
const Pocket = createLucideIcon("Pocket", [
  [
    "path",
    {
      d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
      key: "1mz881"
    }
  ],
  ["polyline", { points: "8 10 12 14 16 10", key: "w4mbv5" }]
]);
const Podcast = createLucideIcon("Podcast", [
  ["circle", { cx: "12", cy: "11", r: "1", key: "1gvufo" }],
  [
    "path",
    {
      d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",
      key: "1n5fvv"
    }
  ],
  ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }],
  ["path", { d: "M17 18.5a9 9 0 1 0-10 0", key: "jqtxkf" }]
]);
const PointerOff = createLucideIcon("PointerOff", [
  ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957", key: "jsi14n" }],
  ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295", key: "hirc7f" }],
  [
    "path",
    { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158", key: "1jxb2e" }
  ],
  [
    "path",
    {
      d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
      key: "10r7hm"
    }
  ],
  ["path", { d: "M6 6v8", key: "tv5xkp" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const Pointer = createLucideIcon("Pointer", [
  ["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }],
  ["path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "1pp0yd" }],
  ["path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1", key: "u654g" }],
  ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10", key: "1e2dtv" }],
  [
    "path",
    {
      d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "g6ys72"
    }
  ]
]);
const Popcorn = createLucideIcon("Popcorn", [
  [
    "path",
    {
      d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
      key: "10td1f"
    }
  ],
  ["path", { d: "M10 22 9 8", key: "yjptiv" }],
  ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
  [
    "path",
    {
      d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
      key: "1qo33t"
    }
  ]
]);
const Popsicle = createLucideIcon("Popsicle", [
  [
    "path",
    {
      d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
      key: "1o68ps"
    }
  ],
  ["path", { d: "m22 22-5.5-5.5", key: "17o70y" }]
]);
const PoundSterling = createLucideIcon("PoundSterling", [
  ["path", { d: "M18 7c0-5.333-8-5.333-8 0", key: "1prm2n" }],
  ["path", { d: "M10 7v14", key: "18tmcs" }],
  ["path", { d: "M6 21h12", key: "4dkmi1" }],
  ["path", { d: "M6 13h10", key: "ybwr4a" }]
]);
const PowerCircle = createLucideIcon("PowerCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 12V6", key: "30zewn" }],
  ["path", { d: "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5", key: "1r0tk2" }]
]);
const PowerOff = createLucideIcon("PowerOff", [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const PowerSquare = createLucideIcon("PowerSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8", key: "15eubv" }]
]);
const Power = createLucideIcon("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const Presentation = createLucideIcon("Presentation", [
  ["path", { d: "M2 3h20", key: "91anmk" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
  ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
]);
const Printer = createLucideIcon("Printer", [
  ["polyline", { points: "6 9 6 2 18 2 18 9", key: "1306q4" }],
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["rect", { width: "12", height: "8", x: "6", y: "14", key: "5ipwut" }]
]);
const Projector = createLucideIcon("Projector", [
  ["path", { d: "M5 7 3 5", key: "1yys58" }],
  ["path", { d: "M9 6V3", key: "1ptz9u" }],
  ["path", { d: "m13 7 2-2", key: "1w3vmq" }],
  ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }],
  [
    "path",
    {
      d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
      key: "2frwzc"
    }
  ],
  ["path", { d: "M16 16h2", key: "dnq2od" }]
]);
const Puzzle = createLucideIcon("Puzzle", [
  [
    "path",
    {
      d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
      key: "i0oyt7"
    }
  ]
]);
const Pyramid = createLucideIcon("Pyramid", [
  [
    "path",
    {
      d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
      key: "aenxs0"
    }
  ],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
]);
const QrCode = createLucideIcon("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
]);
const Quote = createLucideIcon("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e"
    }
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r"
    }
  ]
]);
const Rabbit = createLucideIcon("Rabbit", [
  ["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  [
    "path",
    {
      d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
      key: "ue9ozu"
    }
  ],
  ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }],
  ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }]
]);
const Radar = createLucideIcon("Radar", [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
]);
const Radiation = createLucideIcon("Radiation", [
  ["path", { d: "M12 12h0.01", key: "6ztbls" }],
  [
    "path",
    {
      d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",
      key: "wy49g3"
    }
  ],
  [
    "path",
    {
      d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",
      key: "vklnvr"
    }
  ],
  [
    "path",
    {
      d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",
      key: "wkdf1o"
    }
  ]
]);
const Radical = createLucideIcon("Radical", [["path", { d: "M3 12h4l3 9 4-17h7", key: "bpxjrx" }]]);
const RadioReceiver = createLucideIcon("RadioReceiver", [
  ["path", { d: "M5 16v2", key: "g5qcv5" }],
  ["path", { d: "M19 16v2", key: "1gbaio" }],
  ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2", key: "vjsjur" }],
  ["path", { d: "M18 12h0", key: "1ucjzd" }]
]);
const RadioTower = createLucideIcon("RadioTower", [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
  ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
  ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
]);
const Radio = createLucideIcon("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);
const Radius = createLucideIcon("Radius", [
  ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82", key: "fydyku" }],
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["path", { d: "m13.41 13.41 4.18 4.18", key: "1gqbwc" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const RailSymbol = createLucideIcon("RailSymbol", [
  ["path", { d: "M5 15h14", key: "m0yey3" }],
  ["path", { d: "M5 9h14", key: "7tsvo6" }],
  ["path", { d: "m14 20-5-5 6-6-5-5", key: "1jo42i" }]
]);
const Rainbow = createLucideIcon("Rainbow", [
  ["path", { d: "M22 17a10 10 0 0 0-20 0", key: "ozegv" }],
  ["path", { d: "M6 17a6 6 0 0 1 12 0", key: "5giftw" }],
  ["path", { d: "M10 17a2 2 0 0 1 4 0", key: "gnsikk" }]
]);
const Rat = createLucideIcon("Rat", [
  [
    "path",
    {
      d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",
      key: "16aj0u"
    }
  ],
  [
    "path",
    {
      d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",
      key: "1crdmb"
    }
  ],
  ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5", key: "1ol3lk" }],
  ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12", key: "bt3f23" }],
  ["path", { d: "M16 9h.01", key: "1bdo4e" }]
]);
const Ratio = createLucideIcon("Ratio", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
const ReceiptCent = createLucideIcon("ReceiptCent", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M12 6.5v11", key: "ecfhkf" }],
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]
]);
const ReceiptEuro = createLucideIcon("ReceiptEuro", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 12h5", key: "1g6qi8" }],
  ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2", key: "b2px4r" }]
]);
const ReceiptIndianRupee = createLucideIcon("ReceiptIndianRupee", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8", key: "grpkl4" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }]
]);
const ReceiptJapaneseYen = createLucideIcon("ReceiptJapaneseYen", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "m12 10 3-3", key: "1mc12w" }],
  ["path", { d: "m9 7 3 3v7.5", key: "39i0xv" }],
  ["path", { d: "M9 11h6", key: "1fldmi" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }]
]);
const ReceiptPoundSterling = createLucideIcon("ReceiptPoundSterling", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 13h5", key: "1k9z8w" }],
  ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0", key: "1dzgp0" }],
  ["path", { d: "M8 17h7", key: "8mjdqu" }]
]);
const ReceiptRussianRuble = createLucideIcon("ReceiptRussianRuble", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 15h5", key: "vxg57a" }],
  ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10", key: "1usi5u" }]
]);
const ReceiptSwissFranc = createLucideIcon("ReceiptSwissFranc", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M10 17V7h5", key: "k7jq18" }],
  ["path", { d: "M10 11h4", key: "1i0mka" }],
  ["path", { d: "M8 15h5", key: "vxg57a" }]
]);
const ReceiptText = createLucideIcon("ReceiptText", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M14 8H8", key: "1l3xfs" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "M13 16H8", key: "wsln4y" }]
]);
const Receipt = createLucideIcon("Receipt", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
]);
const RectangleHorizontal = createLucideIcon("RectangleHorizontal", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
const RectangleVertical = createLucideIcon("RectangleVertical", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]
]);
const Recycle = createLucideIcon("Recycle", [
  [
    "path",
    {
      d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
      key: "x6z5xu"
    }
  ],
  [
    "path",
    {
      d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
      key: "1x4zh5"
    }
  ],
  ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
  ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
  [
    "path",
    {
      d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
      key: "9tzpgr"
    }
  ],
  ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }]
]);
const Redo2 = createLucideIcon("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13", key: "19mnr4" }]
]);
const RedoDot = createLucideIcon("RedoDot", [
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
]);
const Redo = createLucideIcon("Redo", [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
]);
const RefreshCcwDot = createLucideIcon("RefreshCcwDot", [
  ["path", { d: "M3 2v6h6", key: "18ldww" }],
  ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8", key: "1pbrqz" }],
  ["path", { d: "M21 22v-6h-6", key: "usdfbe" }],
  ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7", key: "1hosoe" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
const RefreshCcw = createLucideIcon("RefreshCcw", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);
const RefreshCwOff = createLucideIcon("RefreshCwOff", [
  ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", key: "1krf6h" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", key: "ruvoct" }],
  ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", key: "19q130" }],
  ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", key: "4w8emr" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M22 22 2 2", key: "1r8tn9" }]
]);
const Refrigerator = createLucideIcon("Refrigerator", [
  [
    "path",
    { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z", key: "fpq118" }
  ],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M15 7v6", key: "1nx30x" }]
]);
const Regex = createLucideIcon("Regex", [
  ["path", { d: "M17 3v10", key: "15fgeh" }],
  ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
  ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
  [
    "path",
    { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }
  ]
]);
const RemoveFormatting = createLucideIcon("RemoveFormatting", [
  ["path", { d: "M4 7V4h16v3", key: "9msm58" }],
  ["path", { d: "M5 20h6", key: "1h6pxn" }],
  ["path", { d: "M13 4 8 20", key: "kqq6aj" }],
  ["path", { d: "m15 15 5 5", key: "me55sn" }],
  ["path", { d: "m20 15-5 5", key: "11p7ol" }]
]);
const Repeat1 = createLucideIcon("Repeat1", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
]);
const Repeat2 = createLucideIcon("Repeat2", [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
]);
const Repeat = createLucideIcon("Repeat", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
]);
const ReplaceAll = createLucideIcon("ReplaceAll", [
  ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
  ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
  ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
  ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }],
  ["path", { d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "1w9p8c" }],
  ["path", { d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "m45eaa" }]
]);
const Replace = createLucideIcon("Replace", [
  ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
  ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
  ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
  ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }]
]);
const ReplyAll = createLucideIcon("ReplyAll", [
  ["polyline", { points: "7 17 2 12 7 7", key: "t83bqg" }],
  ["polyline", { points: "12 17 7 12 12 7", key: "1g4ajm" }],
  ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }]
]);
const Reply = createLucideIcon("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
const Rewind = createLucideIcon("Rewind", [
  ["polygon", { points: "11 19 2 12 11 5 11 19", key: "14yba5" }],
  ["polygon", { points: "22 19 13 12 22 5 22 19", key: "1pi1cj" }]
]);
const Ribbon = createLucideIcon("Ribbon", [
  [
    "path",
    {
      d: "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",
      key: "1njedg"
    }
  ],
  [
    "path",
    {
      d: "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",
      key: "10len7"
    }
  ],
  ["path", { d: "m9.35 14.53 2.64-3.31", key: "1wfi09" }],
  ["path", { d: "m11.97 18.04 2.99 4 3.54-2.54-3.93-5", key: "1ezyge" }],
  ["path", { d: "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0", key: "aw0zq5" }]
]);
const Rocket = createLucideIcon("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
]);
const RockingChair = createLucideIcon("RockingChair", [
  ["polyline", { points: "3.5 2 6.5 12.5 18 12.5", key: "y3iy52" }],
  ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20", key: "19vg5i" }],
  ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20", key: "1inpmv" }],
  ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0", key: "1nquas" }]
]);
const RollerCoaster = createLucideIcon("RollerCoaster", [
  ["path", { d: "M6 19V5", key: "1r845m" }],
  ["path", { d: "M10 19V6.8", key: "9j2tfs" }],
  ["path", { d: "M14 19v-7.8", key: "10s8qv" }],
  ["path", { d: "M18 5v4", key: "1tajlv" }],
  ["path", { d: "M18 19v-6", key: "ielfq3" }],
  ["path", { d: "M22 19V9", key: "158nzp" }],
  ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65", key: "1930oh" }]
]);
const Rotate3d = createLucideIcon("Rotate3d", [
  [
    "path",
    {
      d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
      key: "10n0gc"
    }
  ],
  ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" }],
  [
    "path",
    {
      d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
      key: "1lxi77"
    }
  ]
]);
const RotateCcw = createLucideIcon("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const RotateCw = createLucideIcon("RotateCw", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);
const RouteOff = createLucideIcon("RouteOff", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2", key: "1effex" }],
  ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12", key: "k9y2ds" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3", key: "11nlu2" }],
  ["path", { d: "M15 5h-4.3", key: "6537je" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);
const Route = createLucideIcon("Route", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);
const Router = createLucideIcon("Router", [
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6.01 18H6", key: "19vcac" }],
  ["path", { d: "M10.01 18H10", key: "uamcmx" }],
  ["path", { d: "M15 10v4", key: "qjz1xs" }],
  ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
  ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]
]);
const Rows2 = createLucideIcon("Rows2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }]
]);
const Rows3 = createLucideIcon("Rows3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
]);
const Rows4 = createLucideIcon("Rows4", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 7.5H3", key: "1hm9pq" }],
  ["path", { d: "M21 12H3", key: "2avoz0" }],
  ["path", { d: "M21 16.5H3", key: "n7jzkj" }]
]);
const Rss = createLucideIcon("Rss", [
  ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
]);
const Ruler = createLucideIcon("Ruler", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
]);
const RussianRuble = createLucideIcon("RussianRuble", [
  ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18", key: "18ai8t" }],
  ["path", { d: "M6 15h8", key: "1y8f6l" }]
]);
const Sailboat = createLucideIcon("Sailboat", [
  ["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z", key: "1404fh" }],
  ["path", { d: "M21 14 10 2 3 14h18Z", key: "1nzg7v" }],
  ["path", { d: "M10 2v16", key: "1labyt" }]
]);
const Salad = createLucideIcon("Salad", [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  [
    "path",
    {
      d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
      key: "10xrj0"
    }
  ],
  ["path", { d: "m13 12 4-4", key: "1hckqy" }],
  ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" }]
]);
const Sandwich = createLucideIcon("Sandwich", [
  ["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3", key: "34v9d7" }],
  [
    "path",
    {
      d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",
      key: "1k5vfb"
    }
  ],
  ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z", key: "1oe7l6" }],
  ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z", key: "1ts2ri" }]
]);
const SatelliteDish = createLucideIcon("SatelliteDish", [
  ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z", key: "1fzpp3" }],
  ["path", { d: "m9 15 3-3", key: "88sc13" }],
  ["path", { d: "M17 13a6 6 0 0 0-6-6", key: "15cc6u" }],
  ["path", { d: "M21 13A10 10 0 0 0 11 3", key: "11nf8s" }]
]);
const Satellite = createLucideIcon("Satellite", [
  ["path", { d: "M13 7 9 3 5 7l4 4", key: "vyckw6" }],
  ["path", { d: "m17 11 4 4-4 4-4-4", key: "rchckc" }],
  ["path", { d: "m8 12 4 4 6-6-4-4Z", key: "1sshf7" }],
  ["path", { d: "m16 8 3-3", key: "x428zp" }],
  ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }]
]);
const SaveAll = createLucideIcon("SaveAll", [
  ["path", { d: "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z", key: "1unput" }],
  ["path", { d: "M10 2v4h6", key: "1p5sg6" }],
  ["path", { d: "M18 18v-7h-8v7", key: "1oniuk" }],
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }]
]);
const Scale3d = createLucideIcon("Scale3d", [
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
  ["path", { d: "M5 7v12h12", key: "vtaa4r" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }]
]);
const Scale = createLucideIcon("Scale", [
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
]);
const Scaling = createLucideIcon("Scaling", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
]);
const ScanBarcode = createLucideIcon("ScanBarcode", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 7v10", key: "23sfjj" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M17 7v10", key: "578dap" }]
]);
const ScanEye = createLucideIcon("ScanEye", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["path", { d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5", key: "nhuolu" }]
]);
const ScanFace = createLucideIcon("ScanFace", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }]
]);
const ScanLine = createLucideIcon("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);
const ScanSearch = createLucideIcon("ScanSearch", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }]
]);
const ScanText = createLucideIcon("ScanText", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 8h8", key: "1jbsf9" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h6", key: "1vyc9m" }]
]);
const Scan = createLucideIcon("Scan", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
const ScatterChart = createLucideIcon("ScatterChart", [
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
  ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor", key: "lysivs" }],
  ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor", key: "byv1b8" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor", key: "nkw3mc" }],
  ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor", key: "1gjh6j" }],
  ["path", { d: "M3 3v18h18", key: "1s2lah" }]
]);
const School2 = createLucideIcon("School2", [
  ["circle", { cx: "12", cy: "10", r: "1", key: "1gnqs8" }],
  ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "8z0lq4" }],
  ["path", { d: "M6 17v.01", key: "roodi6" }],
  ["path", { d: "M6 13v.01", key: "67c122" }],
  ["path", { d: "M18 17v.01", key: "12ktxm" }],
  ["path", { d: "M18 13v.01", key: "tn1rt1" }],
  ["path", { d: "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "jfgdp0" }]
]);
const School = createLucideIcon("School", [
  ["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4", key: "hhkicm" }],
  ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw" }],
  ["path", { d: "M18 5v17", key: "1sw6gf" }],
  ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
  ["path", { d: "M6 5v17", key: "1xfsm0" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }]
]);
const ScissorsLineDashed = createLucideIcon("ScissorsLineDashed", [
  ["path", { d: "M5.42 9.42 8 12", key: "12pkuq" }],
  ["circle", { cx: "4", cy: "8", r: "2", key: "107mxr" }],
  ["path", { d: "m14 6-8.58 8.58", key: "gvzu5l" }],
  ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
  ["path", { d: "M10.8 14.8 14 18", key: "ax7m9r" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);
const ScissorsSquareDashedBottom = createLucideIcon("ScissorsSquareDashedBottom", [
  [
    "path",
    { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2", key: "1vzg26" }
  ],
  ["path", { d: "M10 22H8", key: "euku7a" }],
  ["path", { d: "M16 22h-2", key: "18d249" }],
  ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
  ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
  ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
  ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
  ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
]);
const ScissorsSquare = createLucideIcon("ScissorsSquare", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2", key: "1btzen" }],
  ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
  ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
  ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
  ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
  ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
]);
const Scissors = createLucideIcon("Scissors", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
]);
const ScreenShareOff = createLucideIcon("ScreenShareOff", [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m22 3-5 5", key: "12jva0" }],
  ["path", { d: "m17 3 5 5", key: "k36vhe" }]
]);
const ScreenShare = createLucideIcon("ScreenShare", [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m17 8 5-5", key: "fqif7o" }],
  ["path", { d: "M17 3h5v5", key: "1o3tu8" }]
]);
const ScrollText = createLucideIcon("ScrollText", [
  [
    "path",
    { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
  ],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M15 12h-5", key: "r7krc0" }]
]);
const Scroll = createLucideIcon("Scroll", [
  [
    "path",
    { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
  ],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }]
]);
const SearchCheck = createLucideIcon("SearchCheck", [
  ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const SearchCode = createLucideIcon("SearchCode", [
  ["path", { d: "m9 9-2 2 2 2", key: "17gsfh" }],
  ["path", { d: "m13 13 2-2-2-2", key: "186z8k" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const SearchSlash = createLucideIcon("SearchSlash", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const SearchX = createLucideIcon("SearchX", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const SendHorizontal = createLucideIcon("SendHorizontal", [
  ["path", { d: "m3 3 3 9-3 9 19-9Z", key: "1aobqy" }],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
]);
const SendToBack = createLucideIcon("SendToBack", [
  ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", key: "1b0bso" }],
  ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" }],
  ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1", key: "pao6x6" }],
  ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1", key: "19tdru" }]
]);
const SeparatorHorizontal = createLucideIcon("SeparatorHorizontal", [
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["polyline", { points: "8 8 12 4 16 8", key: "zo8t4w" }],
  ["polyline", { points: "16 16 12 20 8 16", key: "1oyrid" }]
]);
const SeparatorVertical = createLucideIcon("SeparatorVertical", [
  ["line", { x1: "12", x2: "12", y1: "3", y2: "21", key: "1efggb" }],
  ["polyline", { points: "8 8 4 12 8 16", key: "bnfmv4" }],
  ["polyline", { points: "16 16 20 12 16 8", key: "u90052" }]
]);
const ServerCog = createLucideIcon("ServerCog", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
      key: "tn8das"
    }
  ],
  [
    "path",
    {
      d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
      key: "1g2pve"
    }
  ],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m15.7 13.4-.9-.3", key: "1jwmzr" }],
  ["path", { d: "m9.2 10.9-.9-.3", key: "qapnim" }],
  ["path", { d: "m10.6 15.7.3-.9", key: "quwk0k" }],
  ["path", { d: "m13.6 15.7-.4-1", key: "cb9xp7" }],
  ["path", { d: "m10.8 9.3-.4-1", key: "1uaiz5" }],
  ["path", { d: "m8.3 13.6 1-.4", key: "s6srou" }],
  ["path", { d: "m14.7 10.8 1-.4", key: "4d31cq" }],
  ["path", { d: "m13.4 8.3-.3.9", key: "1bm987" }]
]);
const ServerCrash = createLucideIcon("ServerCrash", [
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
      key: "4b9dqc"
    }
  ],
  [
    "path",
    {
      d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
      key: "22nnkd"
    }
  ],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }]
]);
const ServerOff = createLucideIcon("ServerOff", [
  ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5", key: "bt2siv" }],
  ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z", key: "1hjrv1" }],
  ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1", key: "1iynyr" }],
  ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z", key: "161ggg" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const Server = createLucideIcon("Server", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);
const Settings2 = createLucideIcon("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const Shapes = createLucideIcon("Shapes", [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
]);
const Share2 = createLucideIcon("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);
const Share = createLucideIcon("Share", [
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }]
]);
const Sheet = createLucideIcon("Sheet", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
  ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
  ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }],
  ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }]
]);
const Shell = createLucideIcon("Shell", [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
]);
const ShieldAlert = createLucideIcon("ShieldAlert", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);
const ShieldBan = createLucideIcon("ShieldBan", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m4.243 5.21 14.39 12.472", key: "1c9a7c" }]
]);
const ShieldEllipsis = createLucideIcon("ShieldEllipsis", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
]);
const ShieldHalf = createLucideIcon("ShieldHalf", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 22V2", key: "zs6s6o" }]
]);
const ShieldMinus = createLucideIcon("ShieldMinus", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }]
]);
const ShieldOff = createLucideIcon("ShieldOff", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
      key: "1jlk70"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
      key: "18rp1v"
    }
  ]
]);
const ShieldPlus = createLucideIcon("ShieldPlus", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M12 9v6", key: "199k2o" }]
]);
const ShieldQuestion = createLucideIcon("ShieldQuestion", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const ShieldX = createLucideIcon("ShieldX", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]
]);
const ShipWheel = createLucideIcon("ShipWheel", [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["path", { d: "M12 2v7.5", key: "1e5rl5" }],
  ["path", { d: "m19 5-5.23 5.23", key: "1ezxxf" }],
  ["path", { d: "M22 12h-7.5", key: "le1719" }],
  ["path", { d: "m19 19-5.23-5.23", key: "p3fmgn" }],
  ["path", { d: "M12 14.5V22", key: "dgcmos" }],
  ["path", { d: "M10.23 13.77 5 19", key: "qwopd4" }],
  ["path", { d: "M9.5 12H2", key: "r7bup8" }],
  ["path", { d: "M10.23 10.23 5 5", key: "k2y7lj" }],
  ["circle", { cx: "12", cy: "12", r: "2.5", key: "ix0uyj" }]
]);
const Ship = createLucideIcon("Ship", [
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "iegodh"
    }
  ],
  [
    "path",
    { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76", key: "fp8vka" }
  ],
  ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }],
  ["path", { d: "M12 2v3", key: "qbqxhf" }]
]);
const Shirt = createLucideIcon("Shirt", [
  [
    "path",
    {
      d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
      key: "1wgbhj"
    }
  ]
]);
const ShoppingBag = createLucideIcon("ShoppingBag", [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
]);
const ShoppingBasket = createLucideIcon("ShoppingBasket", [
  ["path", { d: "m15 11-1 9", key: "5wnq3a" }],
  ["path", { d: "m19 11-4-7", key: "cnml18" }],
  ["path", { d: "M2 11h20", key: "3eubbj" }],
  ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4", key: "yiazzp" }],
  ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
  ["path", { d: "m5 11 4-7", key: "116ra9" }],
  ["path", { d: "m9 11 1 9", key: "1ojof7" }]
]);
const ShoppingCart = createLucideIcon("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
const Shovel = createLucideIcon("Shovel", [
  ["path", { d: "M2 22v-5l5-5 5 5-5 5z", key: "1fh25c" }],
  ["path", { d: "M9.5 14.5 16 8", key: "1smz5x" }],
  [
    "path",
    { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2", key: "1q8uv5" }
  ]
]);
const ShowerHead = createLucideIcon("ShowerHead", [
  ["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }],
  ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }],
  ["path", { d: "M15 5 5 15", key: "1ag8rq" }],
  ["path", { d: "M14 17v.01", key: "eokfpp" }],
  ["path", { d: "M10 16v.01", key: "14uyyl" }],
  ["path", { d: "M13 13v.01", key: "1v1k97" }],
  ["path", { d: "M16 10v.01", key: "5169yg" }],
  ["path", { d: "M11 20v.01", key: "cj92p8" }],
  ["path", { d: "M17 14v.01", key: "11cswd" }],
  ["path", { d: "M20 11v.01", key: "19e0od" }]
]);
const Shrink = createLucideIcon("Shrink", [
  ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8", key: "17vawe" }],
  ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6", key: "chjx8e" }],
  ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6", key: "lav6yq" }],
  ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3", key: "1pxi2q" }]
]);
const Shrub = createLucideIcon("Shrub", [
  ["path", { d: "M12 22v-7l-2-2", key: "eqv9mc" }],
  [
    "path",
    { d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z", key: "12jcau" }
  ],
  ["path", { d: "m14 14-2 2", key: "847xa2" }]
]);
const Shuffle = createLucideIcon("Shuffle", [
  ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22", key: "1wmou1" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
  ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" }],
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }]
]);
const SigmaSquare = createLucideIcon("SigmaSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9", key: "9nih0i" }]
]);
const Sigma = createLucideIcon("Sigma", [
  ["path", { d: "M18 7V4H6l6 8-6 8h12v-3", key: "zis8ev" }]
]);
const SignalHigh = createLucideIcon("SignalHigh", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
]);
const SignalLow = createLucideIcon("SignalLow", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
]);
const SignalMedium = createLucideIcon("SignalMedium", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
]);
const SignalZero = createLucideIcon("SignalZero", [["path", { d: "M2 20h.01", key: "4haj6o" }]]);
const Signal = createLucideIcon("Signal", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
]);
const SignpostBig = createLucideIcon("SignpostBig", [
  ["path", { d: "M10 9H4L2 7l2-2h6", key: "1hq7x2" }],
  ["path", { d: "M14 5h6l2 2-2 2h-6", key: "bv62ej" }],
  ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18", key: "eqpcf2" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }]
]);
const Signpost = createLucideIcon("Signpost", [
  ["path", { d: "M12 3v3", key: "1n5kay" }],
  ["path", { d: "M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z", key: "27os56" }],
  ["path", { d: "M12 13v8", key: "1l5pq0" }]
]);
const Siren = createLucideIcon("Siren", [
  ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
  [
    "path",
    { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z", key: "1b4s83" }
  ],
  ["path", { d: "M21 12h1", key: "jtio3y" }],
  ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }]
]);
const SkipBack = createLucideIcon("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
const SkipForward = createLucideIcon("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
const Skull = createLucideIcon("Skull", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["path", { d: "M8 20v2h8v-2", key: "ded4og" }],
  ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
  ["path", { d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20", key: "xq9p5u" }]
]);
const Slack = createLucideIcon("Slack", [
  ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5", key: "diqz80" }],
  ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }],
  ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5", key: "hqg7r1" }],
  ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }],
  ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5", key: "1kmz0a" }],
  ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" }],
  ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5", key: "1omvl4" }],
  ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }]
]);
const SlashSquare = createLucideIcon("SlashSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]
]);
const Slash = createLucideIcon("Slash", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]);
const Slice = createLucideIcon("Slice", [
  ["path", { d: "m8 14-6 6h9v-3", key: "zo3j9a" }],
  ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z", key: "1dzx0j" }]
]);
const SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
const Sliders = createLucideIcon("Sliders", [
  ["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }],
  ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }],
  ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }],
  ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }],
  ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }],
  ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }],
  ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }],
  ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }]
]);
const SmartphoneCharging = createLucideIcon("SmartphoneCharging", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12.667 8 10 12h4l-2.667 4", key: "h9lk2d" }]
]);
const SmartphoneNfc = createLucideIcon("SmartphoneNfc", [
  ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1", key: "5nje8w" }],
  ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36", key: "1g306n" }],
  ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "uqvjvo" }],
  ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "ujntz3" }]
]);
const Smartphone = createLucideIcon("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
const SmilePlus = createLucideIcon("SmilePlus", [
  ["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }]
]);
const Smile = createLucideIcon("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Snail = createLucideIcon("Snail", [
  ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0", key: "hneq2s" }],
  ["circle", { cx: "10", cy: "13", r: "8", key: "194lz3" }],
  ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6", key: "ixqyt7" }],
  ["path", { d: "M18 3 19.1 5.2", key: "9tjm43" }],
  ["path", { d: "M22 3 20.9 5.2", key: "j3odrs" }]
]);
const Snowflake = createLucideIcon("Snowflake", [
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "m20 16-4-4 4-4", key: "rquw4f" }],
  ["path", { d: "m4 8 4 4-4 4", key: "12s3z9" }],
  ["path", { d: "m16 4-4 4-4-4", key: "1tumq1" }],
  ["path", { d: "m8 20 4-4 4 4", key: "9p200w" }]
]);
const Sofa = createLucideIcon("Sofa", [
  ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
  [
    "path",
    {
      d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
      key: "u5qfb7"
    }
  ],
  ["path", { d: "M4 18v2", key: "jwo5n2" }],
  ["path", { d: "M20 18v2", key: "1ar1qi" }],
  ["path", { d: "M12 4v9", key: "oqhhn3" }]
]);
const Soup = createLucideIcon("Soup", [
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M19.5 12 22 6", key: "shfsr5" }],
  [
    "path",
    {
      d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
      key: "rpc6vp"
    }
  ],
  [
    "path",
    {
      d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
      key: "1lf63m"
    }
  ],
  [
    "path",
    { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62", key: "97tijn" }
  ]
]);
const Space = createLucideIcon("Space", [
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
]);
const Spade = createLucideIcon("Spade", [
  [
    "path",
    {
      d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",
      key: "40bo9n"
    }
  ],
  ["path", { d: "M12 18v4", key: "jadmvz" }]
]);
const Sparkle = createLucideIcon("Sparkle", [
  [
    "path",
    {
      d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",
      key: "nraa5p"
    }
  ]
]);
const Speaker = createLucideIcon("Speaker", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
]);
const Speech = createLucideIcon("Speech", [
  [
    "path",
    {
      d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
      key: "11atix"
    }
  ],
  ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" }],
  ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }]
]);
const SpellCheck2 = createLucideIcon("SpellCheck2", [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  [
    "path",
    {
      d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
      key: "8mdmtu"
    }
  ]
]);
const SpellCheck = createLucideIcon("SpellCheck", [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
]);
const Spline = createLucideIcon("Spline", [
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }]
]);
const SplitSquareHorizontal = createLucideIcon("SplitSquareHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
const SplitSquareVertical = createLucideIcon("SplitSquareVertical", [
  ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3", key: "1pi83i" }],
  ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3", key: "ido5k7" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
]);
const Split = createLucideIcon("Split", [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M8 3H3v5", key: "15dfkv" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }]
]);
const SprayCan = createLucideIcon("SprayCan", [
  ["path", { d: "M3 3h.01", key: "159qn6" }],
  ["path", { d: "M7 5h.01", key: "1hq22a" }],
  ["path", { d: "M11 7h.01", key: "1osv80" }],
  ["path", { d: "M3 7h.01", key: "1xzrh3" }],
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M3 11h.01", key: "1eifu7" }],
  ["rect", { width: "4", height: "4", x: "15", y: "5", key: "mri9e4" }],
  ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2", key: "aib6hk" }],
  ["path", { d: "m13 14 8-2", key: "1d7bmk" }],
  ["path", { d: "m13 19 8-2", key: "1y2vml" }]
]);
const Sprout = createLucideIcon("Sprout", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
]);
const SquareDashedBottomCode = createLucideIcon("SquareDashedBottomCode", [
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }],
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }]
]);
const SquareDashedBottom = createLucideIcon("SquareDashedBottom", [
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }]
]);
const SquarePen = createLucideIcon("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
const SquareRadical = createLucideIcon("SquareRadical", [
  ["path", { d: "M7 12h2l2 5 2-10h4", key: "1fxv6h" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
]);
const SquareStack = createLucideIcon("SquareStack", [
  ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "4i38lg" }],
  ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "mlte4a" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
]);
const SquareUserRound = createLucideIcon("SquareUserRound", [
  ["path", { d: "M18 21a6 6 0 0 0-12 0", key: "kaz2du" }],
  ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const SquareUser = createLucideIcon("SquareUser", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" }]
]);
const Squircle = createLucideIcon("Squircle", [
  ["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9", key: "garfkc" }]
]);
const Squirrel = createLucideIcon("Squirrel", [
  ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5", key: "21bitc" }],
  ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4", key: "oh0fg0" }],
  ["path", { d: "M18 13h.01", key: "9veqaj" }],
  [
    "path",
    {
      d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
      key: "980v8a"
    }
  ]
]);
const Stamp = createLucideIcon("Stamp", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  [
    "path",
    {
      d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",
      key: "1sy9ra"
    }
  ],
  [
    "path",
    { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13", key: "cnxgux" }
  ]
]);
const StarHalf = createLucideIcon("StarHalf", [
  ["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2", key: "nare05" }]
]);
const StarOff = createLucideIcon("StarOff", [
  ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43", key: "16m0ql" }],
  ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91", key: "1vt8nq" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Star = createLucideIcon("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
const StepBack = createLucideIcon("StepBack", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["polygon", { points: "14,20 4,12 14,4", key: "ypakod" }]
]);
const StepForward = createLucideIcon("StepForward", [
  ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
  ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
]);
const Stethoscope = createLucideIcon("Stethoscope", [
  [
    "path",
    {
      d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
      key: "1jd90r"
    }
  ],
  ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
]);
const Sticker = createLucideIcon("Sticker", [
  [
    "path",
    { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z", key: "1wis1t" }
  ],
  ["path", { d: "M14 3v4a2 2 0 0 0 2 2h4", key: "36rjfy" }],
  ["path", { d: "M8 13h0", key: "jdup5h" }],
  ["path", { d: "M16 13h0", key: "l4i2ga" }],
  ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1", key: "1vvgv3" }]
]);
const StickyNote = createLucideIcon("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
const StopCircle = createLucideIcon("StopCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", key: "1wrtvo" }]
]);
const Store = createLucideIcon("Store", [
  ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]);
const StretchHorizontal = createLucideIcon("StretchHorizontal", [
  ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2", key: "qdearl" }],
  ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2", key: "1xrn6j" }]
]);
const StretchVertical = createLucideIcon("StretchVertical", [
  ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2", key: "19qu7m" }],
  ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2", key: "24v0nk" }]
]);
const Strikethrough = createLucideIcon("Strikethrough", [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
]);
const Subscript = createLucideIcon("Subscript", [
  ["path", { d: "m4 5 8 8", key: "1eunvl" }],
  ["path", { d: "m12 5-8 8", key: "1ah0jp" }],
  [
    "path",
    {
      d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
      key: "e8ta8j"
    }
  ]
]);
const SunDim = createLucideIcon("SunDim", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M20 12h.01", key: "1ykeid" }],
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M4 12h.01", key: "158zrr" }],
  ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }],
  ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }],
  ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }],
  ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }]
]);
const SunMedium = createLucideIcon("SunMedium", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]
]);
const SunMoon = createLucideIcon("SunMoon", [
  ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
  ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
  ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }]
]);
const SunSnow = createLucideIcon("SunSnow", [
  ["path", { d: "M10 9a3 3 0 1 0 0 6", key: "6zmtdl" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M14 21V3", key: "1llu3z" }],
  ["path", { d: "M10 4V3", key: "pkzwkn" }],
  ["path", { d: "M10 21v-1", key: "1u8rkd" }],
  ["path", { d: "m3.64 18.36.7-.7", key: "105rm9" }],
  ["path", { d: "m4.34 6.34-.7-.7", key: "d3unjp" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "m17 4-3 3", key: "15jcng" }],
  ["path", { d: "m14 17 3 3", key: "6tlq38" }],
  ["path", { d: "m21 15-3-3 3-3", key: "1nlnje" }]
]);
const Sun = createLucideIcon("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
const Sunrise = createLucideIcon("Sunrise", [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);
const Sunset = createLucideIcon("Sunset", [
  ["path", { d: "M12 10V2", key: "16sf7g" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);
const Superscript = createLucideIcon("Superscript", [
  ["path", { d: "m4 19 8-8", key: "hr47gm" }],
  ["path", { d: "m12 19-8-8", key: "1dhhmo" }],
  [
    "path",
    {
      d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
      key: "1dfcux"
    }
  ]
]);
const SwatchBook = createLucideIcon("SwatchBook", [
  ["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z", key: "1ldrpk" }],
  ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7", key: "11i5po" }],
  ["path", { d: "M 7 17h0.01", key: "10821z" }],
  [
    "path",
    {
      d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",
      key: "o2gii7"
    }
  ]
]);
const SwissFranc = createLucideIcon("SwissFranc", [
  ["path", { d: "M10 21V3h8", key: "br2l0g" }],
  ["path", { d: "M6 16h9", key: "2py0wn" }],
  ["path", { d: "M10 9.5h7", key: "13dmhz" }]
]);
const SwitchCamera = createLucideIcon("SwitchCamera", [
  ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5", key: "mtk2lu" }],
  ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5", key: "120jsl" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m18 22-3-3 3-3", key: "kgdoj7" }],
  ["path", { d: "m6 2 3 3-3 3", key: "1fnbkv" }]
]);
const Sword = createLucideIcon("Sword", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }]
]);
const Swords = createLucideIcon("Swords", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
  ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
  ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
  ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
  ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]
]);
const Syringe = createLucideIcon("Syringe", [
  ["path", { d: "m18 2 4 4", key: "22kx64" }],
  ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
  ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }],
  ["path", { d: "m9 11 4 4", key: "rovt3i" }],
  ["path", { d: "m5 19-3 3", key: "59f2uf" }],
  ["path", { d: "m14 4 6 6", key: "yqp9t2" }]
]);
const Table2 = createLucideIcon("Table2", [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
]);
const TableCellsMerge = createLucideIcon("TableCellsMerge", [
  ["path", { d: "M12 21v-6", key: "lihzve" }],
  ["path", { d: "M12 9V3", key: "da5inc" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const TableCellsSplit = createLucideIcon("TableCellsSplit", [
  ["path", { d: "M12 15V9", key: "8c7uyn" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const TableColumnsSplit = createLucideIcon("TableColumnsSplit", [
  ["path", { d: "M14 14v2", key: "w2a1xv" }],
  ["path", { d: "M14 20v2", key: "1lq872" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  ["path", { d: "M14 8v2", key: "i67w9a" }],
  ["path", { d: "M2 15h8", key: "82wtch" }],
  ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2", key: "up0l64" }],
  ["path", { d: "M2 9h8", key: "yelfik" }],
  ["path", { d: "M22 15h-4", key: "1es58f" }],
  ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2", key: "pdjoqf" }],
  ["path", { d: "M22 9h-4", key: "1luja7" }],
  ["path", { d: "M5 3v18", key: "14hmio" }]
]);
const TableProperties = createLucideIcon("TableProperties", [
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
]);
const TableRowsSplit = createLucideIcon("TableRowsSplit", [
  ["path", { d: "M14 10h2", key: "1lstlu" }],
  ["path", { d: "M15 22v-8", key: "1fwwgm" }],
  ["path", { d: "M15 2v4", key: "1044rn" }],
  ["path", { d: "M2 10h2", key: "1r8dkt" }],
  ["path", { d: "M20 10h2", key: "1ug425" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }],
  ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6", key: "ibqhof" }],
  ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2", key: "1uenja" }],
  ["path", { d: "M8 10h2", key: "66od0" }],
  ["path", { d: "M9 22v-8", key: "fmnu31" }],
  ["path", { d: "M9 2v4", key: "j1yeou" }]
]);
const Table = createLucideIcon("Table", [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
const TabletSmartphone = createLucideIcon("TabletSmartphone", [
  ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
  ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
const Tablet = createLucideIcon("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);
const Tablets = createLucideIcon("Tablets", [
  ["circle", { cx: "7", cy: "7", r: "5", key: "x29byf" }],
  ["circle", { cx: "17", cy: "17", r: "5", key: "1op1d2" }],
  ["path", { d: "M12 17h10", key: "ls21zv" }],
  ["path", { d: "m3.46 10.54 7.08-7.08", key: "1rehiu" }]
]);
const Tag = createLucideIcon("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
]);
const Tags = createLucideIcon("Tags", [
  ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }],
  [
    "path",
    {
      d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",
      key: "135mg7"
    }
  ],
  ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor", key: "5pm5xn" }]
]);
const Tally1 = createLucideIcon("Tally1", [["path", { d: "M4 4v16", key: "6qkkli" }]]);
const Tally2 = createLucideIcon("Tally2", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }]
]);
const Tally3 = createLucideIcon("Tally3", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }]
]);
const Tally4 = createLucideIcon("Tally4", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }]
]);
const Tally5 = createLucideIcon("Tally5", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }],
  ["path", { d: "M22 6 2 18", key: "h9moai" }]
]);
const Tangent = createLucideIcon("Tangent", [
  ["circle", { cx: "17", cy: "4", r: "2", key: "y5j2s2" }],
  ["path", { d: "M15.59 5.41 5.41 15.59", key: "l0vprr" }],
  ["circle", { cx: "4", cy: "17", r: "2", key: "9p4efm" }],
  ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12", key: "1twk4o" }]
]);
const Target = createLucideIcon("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const Telescope = createLucideIcon("Telescope", [
  [
    "path",
    {
      d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
      key: "k4qptu"
    }
  ],
  ["path", { d: "m13.56 11.747 4.332-.924", key: "19l80z" }],
  ["path", { d: "m16 21-3.105-6.21", key: "7oh9d" }],
  [
    "path",
    {
      d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
      key: "m7xp4m"
    }
  ],
  ["path", { d: "m6.158 8.633 1.114 4.456", key: "74o979" }],
  ["path", { d: "m8 21 3.105-6.21", key: "1fvxut" }],
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }]
]);
const TentTree = createLucideIcon("TentTree", [
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ["path", { d: "m14 5 3-3 3 3", key: "1sorif" }],
  ["path", { d: "m14 10 3-3 3 3", key: "1jyi9h" }],
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  ["path", { d: "M17 14H7l-5 8h20Z", key: "13ar7p" }],
  ["path", { d: "M8 14v8", key: "1ghmqk" }],
  ["path", { d: "m9 14 5 8", key: "13pgi6" }]
]);
const Tent = createLucideIcon("Tent", [
  ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
  ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
  ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }]
]);
const TerminalSquare = createLucideIcon("TerminalSquare", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
]);
const Terminal = createLucideIcon("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
]);
const TestTube2 = createLucideIcon("TestTube2", [
  [
    "path",
    { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3", key: "dg8b2p" }
  ],
  ["path", { d: "m16 2 6 6", key: "1gw87d" }],
  ["path", { d: "M12 16H4", key: "1cjfip" }]
]);
const TestTube = createLucideIcon("TestTube", [
  ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2", key: "187lwq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14.5 16h-5", key: "1ox875" }]
]);
const TestTubes = createLucideIcon("TestTubes", [
  ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2", key: "12z67u" }],
  ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2", key: "1q2nfy" }],
  ["path", { d: "M3 2h7", key: "7s29d5" }],
  ["path", { d: "M14 2h7", key: "7sicin" }],
  ["path", { d: "M9 16H4", key: "1bfye3" }],
  ["path", { d: "M20 16h-5", key: "ddnjpe" }]
]);
const TextCursorInput = createLucideIcon("TextCursorInput", [
  ["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1", key: "18xjzo" }],
  ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5", key: "fj48gi" }],
  ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
  ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
  ["path", { d: "M9 7v10", key: "1vc8ob" }]
]);
const TextCursor = createLucideIcon("TextCursor", [
  ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1", key: "uvaxm9" }],
  ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1", key: "11xy8d" }],
  ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1", key: "1uw06m" }]
]);
const TextQuote = createLucideIcon("TextQuote", [
  ["path", { d: "M17 6H3", key: "16j9eg" }],
  ["path", { d: "M21 12H8", key: "scolzb" }],
  ["path", { d: "M21 18H8", key: "1wfozv" }],
  ["path", { d: "M3 12v6", key: "fv4c87" }]
]);
const TextSearch = createLucideIcon("TextSearch", [
  ["path", { d: "M21 6H3", key: "1jwq7v" }],
  ["path", { d: "M10 12H3", key: "1ulcyk" }],
  ["path", { d: "M10 18H3", key: "13769t" }],
  ["circle", { cx: "17", cy: "15", r: "3", key: "1upz2a" }],
  ["path", { d: "m21 19-1.9-1.9", key: "dwi7p8" }]
]);
const TextSelect = createLucideIcon("TextSelect", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["line", { x1: "7", x2: "15", y1: "8", y2: "8", key: "1758g8" }],
  ["line", { x1: "7", x2: "17", y1: "12", y2: "12", key: "197423" }],
  ["line", { x1: "7", x2: "13", y1: "16", y2: "16", key: "37cgm6" }]
]);
const Text = createLucideIcon("Text", [
  ["path", { d: "M17 6.1H3", key: "wptmhv" }],
  ["path", { d: "M21 12.1H3", key: "1j38uz" }],
  ["path", { d: "M15.1 18H3", key: "1nb16a" }]
]);
const Theater = createLucideIcon("Theater", [
  ["path", { d: "M2 10s3-3 3-8", key: "3xiif0" }],
  ["path", { d: "M22 10s-3-3-3-8", key: "ioaa5q" }],
  ["path", { d: "M10 2c0 4.4-3.6 8-8 8", key: "16fkpi" }],
  ["path", { d: "M14 2c0 4.4 3.6 8 8 8", key: "b9eulq" }],
  ["path", { d: "M2 10s2 2 2 5", key: "1au1lb" }],
  ["path", { d: "M22 10s-2 2-2 5", key: "qi2y5e" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "1vsc2m" }],
  ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "hrha4u" }]
]);
const ThermometerSnowflake = createLucideIcon("ThermometerSnowflake", [
  ["path", { d: "M2 12h10", key: "19562f" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "m3 9 3 3-3 3", key: "1sas0l" }],
  ["path", { d: "M12 6 9 9 6 6", key: "pfrgxu" }],
  ["path", { d: "m6 18 3-3 1.5 1.5", key: "1e277p" }],
  ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }]
]);
const ThermometerSun = createLucideIcon("ThermometerSun", [
  ["path", { d: "M12 9a4 4 0 0 0-2 7.5", key: "1jvsq6" }],
  ["path", { d: "M12 3v2", key: "1w22ol" }],
  ["path", { d: "m6.6 18.4-1.4 1.4", key: "w2yidj" }],
  ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }],
  ["path", { d: "M4 13H2", key: "118le4" }],
  ["path", { d: "M6.34 7.34 4.93 5.93", key: "1brd51" }]
]);
const Thermometer = createLucideIcon("Thermometer", [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
]);
const ThumbsDown = createLucideIcon("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]);
const ThumbsUp = createLucideIcon("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]);
const TicketCheck = createLucideIcon("TicketCheck", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const TicketMinus = createLucideIcon("TicketMinus", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }]
]);
const TicketPercent = createLucideIcon("TicketPercent", [
  [
    "path",
    {
      d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "1l48ns"
    }
  ],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
const TicketPlus = createLucideIcon("TicketPlus", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M12 9v6", key: "199k2o" }]
]);
const TicketSlash = createLucideIcon("TicketSlash", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }]
]);
const TicketX = createLucideIcon("TicketX", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }],
  ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]
]);
const Ticket = createLucideIcon("Ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
const TimerOff = createLucideIcon("TimerOff", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }],
  ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M12 12v-2", key: "fwoke6" }]
]);
const TimerReset = createLucideIcon("TimerReset", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M12 14v-4", key: "1evpnu" }],
  ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6", key: "1ts96g" }],
  ["path", { d: "M9 17H4v5", key: "8t5av" }]
]);
const Timer = createLucideIcon("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]);
const ToggleLeft = createLucideIcon("ToggleLeft", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
  ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }]
]);
const ToggleRight = createLucideIcon("ToggleRight", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
  ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }]
]);
const Tornado = createLucideIcon("Tornado", [
  ["path", { d: "M21 4H3", key: "1hwok0" }],
  ["path", { d: "M18 8H6", key: "41n648" }],
  ["path", { d: "M19 12H9", key: "1g4lpz" }],
  ["path", { d: "M16 16h-6", key: "1j5d54" }],
  ["path", { d: "M11 20H9", key: "39obr8" }]
]);
const Torus = createLucideIcon("Torus", [
  ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", key: "1b2qxu" }],
  ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5", key: "h8emeu" }]
]);
const TouchpadOff = createLucideIcon("TouchpadOff", [
  ["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16", key: "lnt0bk" }],
  ["path", { d: "M2 14h12", key: "d8icqz" }],
  ["path", { d: "M22 14h-2", key: "jrx26d" }],
  ["path", { d: "M12 20v-6", key: "1rm09r" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10", key: "11y8e4" }]
]);
const Touchpad = createLucideIcon("Touchpad", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M12 20v-6", key: "1rm09r" }]
]);
const TowerControl = createLucideIcon("TowerControl", [
  [
    "path",
    { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z", key: "1pledb" }
  ],
  ["path", { d: "M8 13v9", key: "hmv0ci" }],
  ["path", { d: "M16 22v-9", key: "ylnf1u" }],
  ["path", { d: "m9 6 1 7", key: "dpdgam" }],
  ["path", { d: "m15 6-1 7", key: "ls7zgu" }],
  ["path", { d: "M12 6V2", key: "1pj48d" }],
  ["path", { d: "M13 2h-2", key: "mj6ths" }]
]);
const ToyBrick = createLucideIcon("ToyBrick", [
  ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
  ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
  ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
]);
const Tractor = createLucideIcon("Tractor", [
  ["path", { d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1", key: "2w242w" }],
  ["path", { d: "M16 18h-5", key: "bq60fd" }],
  ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573", key: "1kv8ia" }],
  ["path", { d: "M3 4h9l1 7.246", key: "d639it" }],
  ["path", { d: "M4 11V4", key: "9ft8pt" }],
  ["path", { d: "M7 15h.01", key: "k5ht0j" }],
  ["path", { d: "M8 10.1V4", key: "1jgyzo" }],
  ["circle", { cx: "18", cy: "18", r: "2", key: "1emm8v" }],
  ["circle", { cx: "7", cy: "15", r: "5", key: "ddtuc" }]
]);
const TrafficCone = createLucideIcon("TrafficCone", [
  ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0", key: "flyxqv" }],
  ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3", key: "1nlxxg" }],
  [
    "path",
    {
      d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",
      key: "vz7x1l"
    }
  ],
  [
    "path",
    {
      d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",
      key: "1xfzlw"
    }
  ]
]);
const TrainFrontTunnel = createLucideIcon("TrainFrontTunnel", [
  ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10", key: "o0fyp0" }],
  ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8", key: "m8q3n9" }],
  ["path", { d: "M10 15h.01", key: "44in9x" }],
  ["path", { d: "M14 15h.01", key: "5mohn5" }],
  ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z", key: "hckbmu" }],
  ["path", { d: "m9 19-2 3", key: "iij7hm" }],
  ["path", { d: "m15 19 2 3", key: "npx8sa" }]
]);
const TrainFront = createLucideIcon("TrainFront", [
  ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }],
  ["path", { d: "m9 15-1-1", key: "1yrq24" }],
  ["path", { d: "m15 15 1-1", key: "1t0d6s" }],
  ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z", key: "1p0hjs" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m16 19 2 3", key: "xo31yx" }]
]);
const TrainTrack = createLucideIcon("TrainTrack", [
  ["path", { d: "M2 17 17 2", key: "18b09t" }],
  ["path", { d: "m2 14 8 8", key: "1gv9hu" }],
  ["path", { d: "m5 11 8 8", key: "189pqp" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "m11 5 8 8", key: "ummqn6" }],
  ["path", { d: "m14 2 8 8", key: "1vk7dn" }],
  ["path", { d: "M7 22 22 7", key: "15mb1i" }]
]);
const TramFront = createLucideIcon("TramFront", [
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
  ["path", { d: "M8 15h0", key: "q9eq1f" }],
  ["path", { d: "M16 15h0", key: "pzrbjg" }]
]);
const Trash = createLucideIcon("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
const TreeDeciduous = createLucideIcon("TreeDeciduous", [
  [
    "path",
    {
      d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
      key: "oadzkq"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
]);
const TreePine = createLucideIcon("TreePine", [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      key: "cpyugq"
    }
  ],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
]);
const Trees = createLucideIcon("Trees", [
  [
    "path",
    { d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "yh07w9" }
  ],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
]);
const Trello = createLucideIcon("Trello", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["rect", { width: "3", height: "9", x: "7", y: "7", key: "14n3xi" }],
  ["rect", { width: "3", height: "5", x: "14", y: "7", key: "s4azjd" }]
]);
const TrendingDown = createLucideIcon("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
const TrendingUp = createLucideIcon("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
const TriangleRight = createLucideIcon("TriangleRight", [
  [
    "path",
    {
      d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
      key: "183wce"
    }
  ]
]);
const Triangle = createLucideIcon("Triangle", [
  [
    "path",
    { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
  ]
]);
const Trophy = createLucideIcon("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);
const Truck = createLucideIcon("Truck", [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
]);
const Turtle = createLucideIcon("Turtle", [
  [
    "path",
    {
      d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
      key: "1lbbv7"
    }
  ],
  ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }],
  ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }],
  ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }]
]);
const Tv2 = createLucideIcon("Tv2", [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
]);
const Tv = createLucideIcon("Tv", [
  ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2", key: "10ag99" }],
  ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }]
]);
const Twitch = createLucideIcon("Twitch", [
  ["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7", key: "c0yzno" }]
]);
const Twitter = createLucideIcon("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);
const Type = createLucideIcon("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
const UmbrellaOff = createLucideIcon("UmbrellaOff", [
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575", key: "eki10q" }],
  ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455", key: "n2ayka" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const Umbrella = createLucideIcon("Umbrella", [
  ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z", key: "1teyop" }],
  ["path", { d: "M12 12v8a2 2 0 0 0 4 0", key: "ulpmoc" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }]
]);
const Underline = createLucideIcon("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]);
const Undo2 = createLucideIcon("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
const UndoDot = createLucideIcon("UndoDot", [
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
]);
const Undo = createLucideIcon("Undo", [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
]);
const UnfoldHorizontal = createLucideIcon("UnfoldHorizontal", [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
]);
const UnfoldVertical = createLucideIcon("UnfoldVertical", [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
]);
const Ungroup = createLucideIcon("Ungroup", [
  ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" }],
  ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1", key: "4tytwb" }]
]);
const Unlink2 = createLucideIcon("Unlink2", [
  ["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2", key: "1re2ne" }]
]);
const Unlink = createLucideIcon("Unlink", [
  [
    "path",
    {
      d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
      key: "yqzxt4"
    }
  ],
  [
    "path",
    {
      d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
      key: "4qinb0"
    }
  ],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }],
  ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }],
  ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }],
  ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }]
]);
const UnlockKeyhole = createLucideIcon("UnlockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }]
]);
const Unlock = createLucideIcon("Unlock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
const Unplug = createLucideIcon("Unplug", [
  ["path", { d: "m19 5 3-3", key: "yk6iyv" }],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  [
    "path",
    { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z", key: "1snsnr" }
  ]
]);
const UploadCloud = createLucideIcon("UploadCloud", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m16 16-4-4-4 4", key: "119tzi" }]
]);
const Usb = createLucideIcon("Usb", [
  ["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }],
  ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }],
  ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }],
  ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }],
  ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }],
  ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }],
  ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }]
]);
const UserCheck = createLucideIcon("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
]);
const UserCog = createLucideIcon("UserCog", [
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
  ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
  ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
  ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
  ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
  ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
  ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
  ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }]
]);
const UserMinus = createLucideIcon("UserMinus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
const UserPlus = createLucideIcon("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
const UserRoundCheck = createLucideIcon("UserRoundCheck", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
]);
const UserRoundCog = createLucideIcon("UserRoundCog", [
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m19.5 14.3-.4.9", key: "1eb35c" }],
  ["path", { d: "m16.9 20.8-.4.9", key: "dfjc4z" }],
  ["path", { d: "m21.7 19.5-.9-.4", key: "q4dx6b" }],
  ["path", { d: "m15.2 16.9-.9-.4", key: "1r0w5f" }],
  ["path", { d: "m21.7 16.5-.9.4", key: "1knoei" }],
  ["path", { d: "m15.2 19.1-.9.4", key: "j188fs" }],
  ["path", { d: "m19.5 21.7-.4-.9", key: "1tonu5" }],
  ["path", { d: "m16.9 15.2-.4-.9", key: "699xu" }]
]);
const UserRoundMinus = createLucideIcon("UserRoundMinus", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
]);
const UserRoundPlus = createLucideIcon("UserRoundPlus", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
]);
const UserRoundSearch = createLucideIcon("UserRoundSearch", [
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.9-1.9", key: "1e5ubv" }]
]);
const UserRoundX = createLucideIcon("UserRoundX", [
  ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
  ["path", { d: "m22 17-5 5", key: "gqnmv0" }]
]);
const UserRound = createLucideIcon("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
const UserSearch = createLucideIcon("UserSearch", [
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
  ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }]
]);
const UserX = createLucideIcon("UserX", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
]);
const User = createLucideIcon("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const UsersRound = createLucideIcon("UsersRound", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
]);
const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
const UtensilsCrossed = createLucideIcon("UtensilsCrossed", [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
]);
const Utensils = createLucideIcon("Utensils", [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "1ogz0v" }]
]);
const UtilityPole = createLucideIcon("UtilityPole", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M2 5h20", key: "1fs1ex" }],
  ["path", { d: "M3 3v2", key: "9imdir" }],
  ["path", { d: "M7 3v2", key: "n0os7" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["path", { d: "M21 3v2", key: "1duuac" }],
  ["path", { d: "m19 5-7 7-7-7", key: "133zxf" }]
]);
const Variable = createLucideIcon("Variable", [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
]);
const Vault = createLucideIcon("Vault", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
  ["path", { d: "m7.9 7.9 2.7 2.7", key: "hpeyl3" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }],
  ["path", { d: "m13.4 10.6 2.7-2.7", key: "264c1n" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor", key: "nkw3mc" }],
  ["path", { d: "m7.9 16.1 2.7-2.7", key: "p81g5e" }],
  ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor", key: "fubopw" }],
  ["path", { d: "m13.4 13.4 2.7 2.7", key: "abhel3" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const Vegan = createLucideIcon("Vegan", [
  ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14", key: "qiv7li" }],
  ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6", key: "n7eohy" }],
  ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3", key: "1dion0" }]
]);
const VenetianMask = createLucideIcon("VenetianMask", [
  [
    "path",
    {
      d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",
      key: "1g6z3j"
    }
  ],
  ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z", key: "c2lwnf" }],
  ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z", key: "njd9zo" }]
]);
const VibrateOff = createLucideIcon("VibrateOff", [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2", key: "1hbad5" }],
  ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34", key: "1x5tf0" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Vibrate = createLucideIcon("Vibrate", [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1", key: "1oyrl4" }]
]);
const VideoOff = createLucideIcon("VideoOff", [
  ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8", key: "ubwiq0" }],
  ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z", key: "1l10zd" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Video = createLucideIcon("Video", [
  ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
  ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2", key: "1rqjg6" }]
]);
const Videotape = createLucideIcon("Videotape", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["circle", { cx: "8", cy: "14", r: "2", key: "1k2qr5" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "14", r: "2", key: "14k7lr" }]
]);
const View = createLucideIcon("View", [
  [
    "path",
    { d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z", key: "vptub8" }
  ],
  ["path", { d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", key: "10lhjs" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2", key: "mrq65r" }],
  ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2", key: "be3xqs" }]
]);
const Voicemail = createLucideIcon("Voicemail", [
  ["circle", { cx: "6", cy: "12", r: "4", key: "1ehtga" }],
  ["circle", { cx: "18", cy: "12", r: "4", key: "4vafl8" }],
  ["line", { x1: "6", x2: "18", y1: "16", y2: "16", key: "pmt8us" }]
]);
const Volume1 = createLucideIcon("Volume1", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }]
]);
const Volume2 = createLucideIcon("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]);
const VolumeX = createLucideIcon("VolumeX", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]);
const Volume = createLucideIcon("Volume", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }]
]);
const Vote = createLucideIcon("Vote", [
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z", key: "1ezoue" }],
  ["path", { d: "M22 19H2", key: "nuriw5" }]
]);
const Wallet2 = createLucideIcon("Wallet2", [
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  [
    "path",
    {
      d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
      key: "u1rqew"
    }
  ]
]);
const WalletCards = createLucideIcon("WalletCards", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
  [
    "path",
    {
      d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
      key: "1dpki6"
    }
  ]
]);
const Wallet = createLucideIcon("Wallet", [
  ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
  ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
]);
const Wallpaper = createLucideIcon("Wallpaper", [
  ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }],
  [
    "path",
    {
      d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
      key: "69xh40"
    }
  ],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }]
]);
const Wand2 = createLucideIcon("Wand2", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
const Wand = createLucideIcon("Wand", [
  ["path", { d: "M15 4V2", key: "z1p9b7" }],
  ["path", { d: "M15 16v-2", key: "px0unx" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
  ["path", { d: "M15 9h0", key: "kg5t1u" }],
  ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
  ["path", { d: "m3 21 9-9", key: "1jfql5" }],
  ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]
]);
const Warehouse = createLucideIcon("Warehouse", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg"
    }
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }]
]);
const WashingMachine = createLucideIcon("WashingMachine", [
  ["path", { d: "M3 6h3", key: "155dbl" }],
  ["path", { d: "M17 6h.01", key: "e2y6kg" }],
  ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2", key: "od3kk9" }],
  ["circle", { cx: "12", cy: "13", r: "5", key: "nlbqau" }],
  ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5", key: "17lach" }]
]);
const Watch = createLucideIcon("Watch", [
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["polyline", { points: "12 10 12 12 13 13", key: "19dquz" }],
  [
    "path",
    { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }
  ],
  ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }]
]);
const Waves = createLucideIcon("Waves", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
]);
const Waypoints = createLucideIcon("Waypoints", [
  ["circle", { cx: "12", cy: "4.5", r: "2.5", key: "r5ysbb" }],
  ["path", { d: "m10.2 6.3-3.9 3.9", key: "1nzqf6" }],
  ["circle", { cx: "4.5", cy: "12", r: "2.5", key: "jydg6v" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["circle", { cx: "19.5", cy: "12", r: "2.5", key: "1piiel" }],
  ["path", { d: "m13.8 17.7 3.9-3.9", key: "1wyg1y" }],
  ["circle", { cx: "12", cy: "19.5", r: "2.5", key: "13o1pw" }]
]);
const Webcam = createLucideIcon("Webcam", [
  ["circle", { cx: "12", cy: "10", r: "8", key: "1gshiw" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 22h10", key: "10w4w3" }],
  ["path", { d: "M12 22v-4", key: "1utk9m" }]
]);
const WebhookOff = createLucideIcon("WebhookOff", [
  ["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15", key: "1tvl6x" }],
  ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66", key: "q04jfq" }],
  ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05", key: "azowf0" }],
  ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7", key: "5joiws" }],
  ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414", key: "cangb8" }],
  ["path", { d: "m12 6 .6 1", key: "tpjl1n" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const Webhook = createLucideIcon("Webhook", [
  [
    "path",
    {
      d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
      key: "q3hayz"
    }
  ],
  ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06", key: "1go1hn" }],
  ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8", key: "qlwsc0" }]
]);
const Weight = createLucideIcon("Weight", [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh"
    }
  ]
]);
const WheatOff = createLucideIcon("WheatOff", [
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "m16 8-1.17 1.17", key: "1qqm82" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97", key: "4wz8re" }
  ],
  [
    "path",
    { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62", key: "rves66" }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
      key: "ak46r"
    }
  ],
  [
    "path",
    {
      d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
      key: "1tw520"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Wheat = createLucideIcon("Wheat", [
  ["path", { d: "M2 22 16 8", key: "60hf96" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    {
      d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1sdzmb"
    }
  ],
  [
    "path",
    {
      d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "eoatbi"
    }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "2m8kc5"
    }
  ],
  [
    "path",
    {
      d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "vex3ng"
    }
  ]
]);
const WholeWord = createLucideIcon("WholeWord", [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }],
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
]);
const WifiOff = createLucideIcon("WifiOff", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const Wifi = createLucideIcon("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
]);
const Wind = createLucideIcon("Wind", [
  ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
  ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
  ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }]
]);
const WineOff = createLucideIcon("WineOff", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h3m7 0h-1.343", key: "v48bem" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    {
      d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
      key: "1ymjlu"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Wine = createLucideIcon("Wine", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z", key: "10ffi3" }
  ]
]);
const Workflow = createLucideIcon("Workflow", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);
const WrapText = createLucideIcon("WrapText", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4", key: "1cl7v7" }],
  ["polyline", { points: "16 16 14 18 16 20", key: "1jznyi" }],
  ["line", { x1: "3", x2: "10", y1: "18", y2: "18", key: "1h33wv" }]
]);
const Wrench = createLucideIcon("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
]);
const XCircle = createLucideIcon("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const XOctagon = createLucideIcon("XOctagon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const XSquare = createLucideIcon("XSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Youtube = createLucideIcon("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
]);
const ZapOff = createLucideIcon("ZapOff", [
  ["polyline", { points: "12.41 6.75 13 2 10.57 4.92", key: "122m05" }],
  ["polyline", { points: "18.57 12.91 21 10 15.66 10", key: "16r43o" }],
  ["polyline", { points: "8 8 3 14 12 14 11 22 16 16", key: "tmh4bc" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
const Zap = createLucideIcon("Zap", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
const ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
const ZoomOut = createLucideIcon("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AArrowDown,
  AArrowUp,
  ALargeSmall,
  Accessibility,
  Activity,
  ActivitySquare,
  AirVent,
  Airplay,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockMinus,
  AlarmClockOff,
  AlarmClockPlus,
  AlarmSmoke,
  Album,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenter,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  Ambulance,
  Ampersand,
  Ampersands,
  Anchor,
  Angry,
  Annoyed,
  Antenna,
  Anvil,
  Aperture,
  AppWindow,
  Apple,
  Archive,
  ArchiveRestore,
  ArchiveX,
  AreaChart,
  Armchair,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownCircle,
  ArrowDownFromLine,
  ArrowDownLeft,
  ArrowDownLeftFromCircle,
  ArrowDownLeftFromSquare,
  ArrowDownLeftSquare,
  ArrowDownNarrowWide,
  ArrowDownRight,
  ArrowDownRightFromCircle,
  ArrowDownRightFromSquare,
  ArrowDownRightSquare,
  ArrowDownSquare,
  ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftSquare,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightCircle,
  ArrowRightFromLine,
  ArrowRightLeft,
  ArrowRightSquare,
  ArrowRightToLine,
  ArrowUp,
  ArrowUp01,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpCircle,
  ArrowUpDown,
  ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpLeft,
  ArrowUpLeftFromCircle,
  ArrowUpLeftFromSquare,
  ArrowUpLeftSquare,
  ArrowUpNarrowWide,
  ArrowUpRight,
  ArrowUpRightFromCircle,
  ArrowUpRightFromSquare,
  ArrowUpRightSquare,
  ArrowUpSquare,
  ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUpZA,
  ArrowsUpFromLine,
  Asterisk,
  AsteriskSquare,
  AtSign,
  Atom,
  AudioLines,
  AudioWaveform,
  Award,
  Axe,
  Axis3d,
  Baby,
  Backpack,
  Badge,
  BadgeAlert,
  BadgeCent,
  BadgeCheck,
  BadgeDollarSign,
  BadgeEuro,
  BadgeHelp,
  BadgeIndianRupee,
  BadgeInfo,
  BadgeJapaneseYen,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BadgePoundSterling,
  BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeX,
  BaggageClaim,
  Ban,
  Banana,
  Banknote,
  BarChart,
  BarChart2,
  BarChart3,
  BarChart4,
  BarChartBig,
  BarChartHorizontal,
  BarChartHorizontalBig,
  Barcode,
  Baseline,
  Bath,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  Beaker,
  Bean,
  BeanOff,
  Bed,
  BedDouble,
  BedSingle,
  Beef,
  Beer,
  Bell,
  BellDot,
  BellElectric,
  BellMinus,
  BellOff,
  BellPlus,
  BellRing,
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  Bike,
  Binary,
  Biohazard,
  Bird,
  Bitcoin,
  Blend,
  Blinds,
  Blocks,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Bold,
  Bolt,
  Bomb,
  Bone,
  Book,
  BookA,
  BookAudio,
  BookCheck,
  BookCopy,
  BookDashed,
  BookDown,
  BookHeadphones,
  BookHeart,
  BookImage,
  BookKey,
  BookLock,
  BookMarked,
  BookMinus,
  BookOpen,
  BookOpenCheck,
  BookOpenText,
  BookPlus,
  BookText,
  BookType,
  BookUp,
  BookUp2,
  BookUser,
  BookX,
  Bookmark,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
  BookmarkX,
  BoomBox,
  Bot,
  BotMessageSquare,
  Box,
  BoxSelect,
  Boxes,
  Braces,
  Brackets,
  Brain,
  BrainCircuit,
  BrainCog,
  BrickWall,
  Briefcase,
  BringToFront,
  Brush,
  Bug,
  BugOff,
  BugPlay,
  Building,
  Building2,
  Bus,
  BusFront,
  Cable,
  CableCar,
  Cake,
  CakeSlice,
  Calculator,
  Calendar,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CalendarFold,
  CalendarHeart,
  CalendarMinus,
  CalendarMinus2,
  CalendarOff,
  CalendarPlus,
  CalendarPlus2,
  CalendarRange,
  CalendarSearch,
  CalendarX,
  CalendarX2,
  Camera,
  CameraOff,
  CandlestickChart,
  Candy,
  CandyCane,
  CandyOff,
  Captions,
  CaptionsOff,
  Car,
  CarFront,
  CarTaxiFront,
  Caravan,
  Carrot,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  CassetteTape,
  Cast,
  Castle,
  Cat,
  Cctv,
  Check,
  CheckCheck,
  CheckCircle,
  CheckCircle2,
  CheckSquare,
  CheckSquare2,
  ChefHat,
  Cherry,
  ChevronDown,
  ChevronDownCircle,
  ChevronDownSquare,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronLeftCircle,
  ChevronLeftSquare,
  ChevronRight,
  ChevronRightCircle,
  ChevronRightSquare,
  ChevronUp,
  ChevronUpCircle,
  ChevronUpSquare,
  ChevronsDown,
  ChevronsDownUp,
  ChevronsLeft,
  ChevronsLeftRight,
  ChevronsRight,
  ChevronsRightLeft,
  ChevronsUp,
  ChevronsUpDown,
  Chrome,
  Church,
  Cigarette,
  CigaretteOff,
  Circle,
  CircleDashed,
  CircleDollarSign,
  CircleDot,
  CircleDotDashed,
  CircleEllipsis,
  CircleEqual,
  CircleFadingPlus,
  CircleOff,
  CircleSlash,
  CircleSlash2,
  CircleUser,
  CircleUserRound,
  CircuitBoard,
  Citrus,
  Clapperboard,
  Clipboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardMinus,
  ClipboardPaste,
  ClipboardPen,
  ClipboardPenLine,
  ClipboardPlus,
  ClipboardType,
  ClipboardX,
  Clock,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Cloud,
  CloudCog,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudOff,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Clover,
  Club,
  Code,
  Code2,
  CodeSquare,
  Codepen,
  Codesandbox,
  Coffee,
  Cog,
  Coins,
  Columns2,
  Columns3,
  Columns4,
  Combine,
  Command,
  Compass,
  Component,
  Computer,
  ConciergeBell,
  Cone,
  Construction,
  Contact,
  Contact2,
  Container,
  Contrast,
  Cookie,
  CookingPot,
  Copy,
  CopyCheck,
  CopyMinus,
  CopyPlus,
  CopySlash,
  CopyX,
  Copyleft,
  Copyright,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreativeCommons,
  CreditCard,
  Croissant,
  Crop,
  Cross,
  Crosshair,
  Crown,
  Cuboid,
  CupSoda,
  Currency,
  Cylinder,
  Database,
  DatabaseBackup,
  DatabaseZap,
  Delete,
  Dessert,
  Diameter,
  Diamond,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Diff,
  Disc,
  Disc2,
  Disc3,
  DiscAlbum,
  Divide,
  DivideCircle,
  DivideSquare,
  Dna,
  DnaOff,
  Dog,
  DollarSign,
  Donut,
  DoorClosed,
  DoorOpen,
  Dot,
  DotSquare,
  Download,
  DownloadCloud,
  DraftingCompass,
  Drama,
  Dribbble,
  Drill,
  Droplet,
  Droplets,
  Drum,
  Drumstick,
  Dumbbell,
  Ear,
  EarOff,
  Earth,
  EarthLock,
  Eclipse,
  Egg,
  EggFried,
  EggOff,
  Equal,
  EqualNot,
  EqualSquare,
  Eraser,
  Euro,
  Expand,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  Factory,
  Fan,
  FastForward,
  Feather,
  Fence,
  FerrisWheel,
  Figma,
  File,
  FileArchive,
  FileAudio,
  FileAudio2,
  FileAxis3d,
  FileBadge,
  FileBadge2,
  FileBarChart,
  FileBarChart2,
  FileBox,
  FileCheck,
  FileCheck2,
  FileClock,
  FileCode,
  FileCode2,
  FileCog,
  FileDiff,
  FileDigit,
  FileDown,
  FileHeart,
  FileImage,
  FileInput,
  FileJson,
  FileJson2,
  FileKey,
  FileKey2,
  FileLineChart,
  FileLock,
  FileLock2,
  FileMinus,
  FileMinus2,
  FileMusic,
  FileOutput,
  FilePen,
  FilePenLine,
  FilePieChart,
  FilePlus,
  FilePlus2,
  FileQuestion,
  FileScan,
  FileSearch,
  FileSearch2,
  FileSliders,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileText,
  FileType,
  FileType2,
  FileUp,
  FileVideo,
  FileVideo2,
  FileVolume,
  FileVolume2,
  FileWarning,
  FileX,
  FileX2,
  Files,
  Film,
  Filter,
  FilterX,
  Fingerprint,
  FireExtinguisher,
  Fish,
  FishOff,
  FishSymbol,
  Flag,
  FlagOff,
  FlagTriangleLeft,
  FlagTriangleRight,
  Flame,
  FlameKindling,
  Flashlight,
  FlashlightOff,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  FlipHorizontal,
  FlipHorizontal2,
  FlipVertical,
  FlipVertical2,
  Flower,
  Flower2,
  Focus,
  FoldHorizontal,
  FoldVertical,
  Folder,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderClosed,
  FolderCog,
  FolderDot,
  FolderDown,
  FolderGit,
  FolderGit2,
  FolderHeart,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinus,
  FolderOpen,
  FolderOpenDot,
  FolderOutput,
  FolderPen,
  FolderPlus,
  FolderRoot,
  FolderSearch,
  FolderSearch2,
  FolderSymlink,
  FolderSync,
  FolderTree,
  FolderUp,
  FolderX,
  Folders,
  Footprints,
  Forklift,
  FormInput,
  Forward,
  Frame,
  Framer,
  Frown,
  Fuel,
  Fullscreen,
  FunctionSquare,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  Gamepad,
  Gamepad2,
  GanttChart,
  GanttChartSquare,
  Gauge,
  GaugeCircle,
  Gavel,
  Gem,
  Ghost,
  Gift,
  GitBranch,
  GitBranchPlus,
  GitCommitHorizontal,
  GitCommitVertical,
  GitCompare,
  GitCompareArrows,
  GitFork,
  GitGraph,
  GitMerge,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestClosed,
  GitPullRequestCreate,
  GitPullRequestCreateArrow,
  GitPullRequestDraft,
  Github,
  Gitlab,
  GlassWater,
  Glasses,
  Globe,
  GlobeLock,
  Goal,
  Grab,
  GraduationCap,
  Grape,
  Grid2x2,
  Grid3x3,
  Grip,
  GripHorizontal,
  GripVertical,
  Group,
  Guitar,
  Hammer,
  Hand,
  HandCoins,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  Handshake,
  HardDrive,
  HardDriveDownload,
  HardDriveUpload,
  HardHat,
  Hash,
  Haze,
  HdmiPort,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Headphones,
  Headset,
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartOff,
  HeartPulse,
  Heater,
  HelpCircle,
  Hexagon,
  Highlighter,
  History,
  Home,
  Hop,
  HopOff,
  Hotel,
  Hourglass,
  IceCream,
  IceCream2,
  Image,
  ImageDown,
  ImageMinus,
  ImageOff,
  ImagePlus,
  ImageUp,
  Images,
  Import,
  Inbox,
  Indent,
  IndianRupee,
  Infinity,
  Info,
  InspectionPanel,
  Instagram,
  Italic,
  IterationCcw,
  IterationCw,
  JapaneseYen,
  Joystick,
  Kanban,
  KanbanSquare,
  KanbanSquareDashed,
  Key,
  KeyRound,
  KeySquare,
  Keyboard,
  KeyboardMusic,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  LandPlot,
  Landmark,
  Languages,
  Laptop,
  Laptop2,
  Lasso,
  LassoSelect,
  Laugh,
  Layers,
  Layers2,
  Layers3,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  Leaf,
  LeafyGreen,
  Library,
  LibraryBig,
  LibrarySquare,
  LifeBuoy,
  Ligature,
  Lightbulb,
  LightbulbOff,
  LineChart,
  Link,
  Link2,
  Link2Off,
  Linkedin,
  List,
  ListChecks,
  ListCollapse,
  ListEnd,
  ListFilter,
  ListMinus,
  ListMusic,
  ListOrdered,
  ListPlus,
  ListRestart,
  ListStart,
  ListTodo,
  ListTree,
  ListVideo,
  ListX,
  Loader,
  Loader2,
  Locate,
  LocateFixed,
  LocateOff,
  Lock,
  LockKeyhole,
  LogIn,
  LogOut,
  Lollipop,
  Luggage,
  MSquare,
  Magnet,
  Mail,
  MailCheck,
  MailMinus,
  MailOpen,
  MailPlus,
  MailQuestion,
  MailSearch,
  MailWarning,
  MailX,
  Mailbox,
  Mails,
  Map: Map$1,
  MapPin,
  MapPinOff,
  MapPinned,
  Martini,
  Maximize,
  Maximize2,
  Medal,
  Megaphone,
  MegaphoneOff,
  Meh,
  MemoryStick,
  Menu,
  MenuSquare,
  Merge,
  MessageCircle,
  MessageCircleCode,
  MessageCircleDashed,
  MessageCircleHeart,
  MessageCircleMore,
  MessageCircleOff,
  MessageCirclePlus,
  MessageCircleQuestion,
  MessageCircleReply,
  MessageCircleWarning,
  MessageCircleX,
  MessageSquare,
  MessageSquareCode,
  MessageSquareDashed,
  MessageSquareDiff,
  MessageSquareDot,
  MessageSquareHeart,
  MessageSquareMore,
  MessageSquareOff,
  MessageSquarePlus,
  MessageSquareQuote,
  MessageSquareReply,
  MessageSquareShare,
  MessageSquareText,
  MessageSquareWarning,
  MessageSquareX,
  MessagesSquare,
  Mic,
  Mic2,
  MicOff,
  Microscope,
  Microwave,
  Milestone,
  Milk,
  MilkOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Monitor,
  MonitorCheck,
  MonitorDot,
  MonitorDown,
  MonitorOff,
  MonitorPause,
  MonitorPlay,
  MonitorSmartphone,
  MonitorSpeaker,
  MonitorStop,
  MonitorUp,
  MonitorX,
  Moon,
  MoonStar,
  MoreHorizontal,
  MoreVertical,
  Mountain,
  MountainSnow,
  Mouse,
  MousePointer,
  MousePointer2,
  MousePointerClick,
  MousePointerSquare,
  MousePointerSquareDashed,
  Move,
  Move3d,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDown,
  MoveDownLeft,
  MoveDownRight,
  MoveHorizontal,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveUpLeft,
  MoveUpRight,
  MoveVertical,
  Music,
  Music2,
  Music3,
  Music4,
  Navigation,
  Navigation2,
  Navigation2Off,
  NavigationOff,
  Network,
  Newspaper,
  Nfc,
  Notebook,
  NotebookPen,
  NotebookTabs,
  NotebookText,
  NotepadText,
  NotepadTextDashed,
  Nut,
  NutOff,
  Octagon,
  Option,
  Orbit,
  Outdent,
  Package,
  Package2,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  PaintBucket,
  PaintRoller,
  Paintbrush,
  Paintbrush2,
  Palette,
  Palmtree,
  PanelBottom,
  PanelBottomClose,
  PanelBottomDashed,
  PanelBottomOpen,
  PanelLeft,
  PanelLeftClose,
  PanelLeftDashed,
  PanelLeftOpen,
  PanelRight,
  PanelRightClose,
  PanelRightDashed,
  PanelRightOpen,
  PanelTop,
  PanelTopClose,
  PanelTopDashed,
  PanelTopOpen,
  PanelsLeftBottom,
  PanelsRightBottom,
  PanelsTopLeft,
  Paperclip,
  Parentheses,
  ParkingCircle,
  ParkingCircleOff,
  ParkingMeter,
  ParkingSquare,
  ParkingSquareOff,
  PartyPopper,
  Pause,
  PauseCircle,
  PauseOctagon,
  PawPrint,
  PcCase,
  Pen,
  PenLine,
  PenTool,
  Pencil,
  PencilLine,
  PencilRuler,
  Pentagon,
  Percent,
  PercentCircle,
  PercentDiamond,
  PercentSquare,
  PersonStanding,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  Pi,
  PiSquare,
  Piano,
  Pickaxe,
  PictureInPicture,
  PictureInPicture2,
  PieChart,
  PiggyBank,
  Pilcrow,
  PilcrowSquare,
  Pill,
  Pin,
  PinOff,
  Pipette,
  Pizza,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Play,
  PlayCircle,
  PlaySquare,
  Plug,
  Plug2,
  PlugZap,
  PlugZap2,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  PocketKnife,
  Podcast,
  Pointer,
  PointerOff,
  Popcorn,
  Popsicle,
  PoundSterling,
  Power,
  PowerCircle,
  PowerOff,
  PowerSquare,
  Presentation,
  Printer,
  Projector,
  Puzzle,
  Pyramid,
  QrCode,
  Quote,
  Rabbit,
  Radar,
  Radiation,
  Radical,
  Radio,
  RadioReceiver,
  RadioTower,
  Radius,
  RailSymbol,
  Rainbow,
  Rat,
  Ratio,
  Receipt,
  ReceiptCent,
  ReceiptEuro,
  ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptRussianRuble,
  ReceiptSwissFranc,
  ReceiptText,
  RectangleHorizontal,
  RectangleVertical,
  Recycle,
  Redo,
  Redo2,
  RedoDot,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCw,
  RefreshCwOff,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat,
  Repeat1,
  Repeat2,
  Replace,
  ReplaceAll,
  Reply,
  ReplyAll,
  Rewind,
  Ribbon,
  Rocket,
  RockingChair,
  RollerCoaster,
  Rotate3d,
  RotateCcw,
  RotateCw,
  Route,
  RouteOff,
  Router,
  Rows2,
  Rows3,
  Rows4,
  Rss,
  Ruler,
  RussianRuble,
  Sailboat,
  Salad,
  Sandwich,
  Satellite,
  SatelliteDish,
  Save,
  SaveAll,
  Scale,
  Scale3d,
  Scaling,
  Scan,
  ScanBarcode,
  ScanEye,
  ScanFace,
  ScanLine,
  ScanSearch,
  ScanText,
  ScatterChart,
  School,
  School2,
  Scissors,
  ScissorsLineDashed,
  ScissorsSquare,
  ScissorsSquareDashedBottom,
  ScreenShare,
  ScreenShareOff,
  Scroll,
  ScrollText,
  Search,
  SearchCheck,
  SearchCode,
  SearchSlash,
  SearchX,
  Send,
  SendHorizontal,
  SendToBack,
  SeparatorHorizontal,
  SeparatorVertical,
  Server,
  ServerCog,
  ServerCrash,
  ServerOff,
  Settings,
  Settings2,
  Shapes,
  Share,
  Share2,
  Sheet,
  Shell,
  Shield,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  ShieldEllipsis,
  ShieldHalf,
  ShieldMinus,
  ShieldOff,
  ShieldPlus,
  ShieldQuestion,
  ShieldX,
  Ship,
  ShipWheel,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Shovel,
  ShowerHead,
  Shrink,
  Shrub,
  Shuffle,
  Sigma,
  SigmaSquare,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Signpost,
  SignpostBig,
  Siren,
  SkipBack,
  SkipForward,
  Skull,
  Slack,
  Slash,
  SlashSquare,
  Slice,
  Sliders,
  SlidersHorizontal,
  Smartphone,
  SmartphoneCharging,
  SmartphoneNfc,
  Smile,
  SmilePlus,
  Snail,
  Snowflake,
  Sofa,
  Soup,
  Space,
  Spade,
  Sparkle,
  Sparkles,
  Speaker,
  Speech,
  SpellCheck,
  SpellCheck2,
  Spline,
  Split,
  SplitSquareHorizontal,
  SplitSquareVertical,
  SprayCan,
  Sprout,
  Square,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquarePen,
  SquareRadical,
  SquareStack,
  SquareUser,
  SquareUserRound,
  Squircle,
  Squirrel,
  Stamp,
  Star,
  StarHalf,
  StarOff,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  StopCircle,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subscript,
  Sun,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sunrise,
  Sunset,
  Superscript,
  SwatchBook,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table,
  Table2,
  TableCellsMerge,
  TableCellsSplit,
  TableColumnsSplit,
  TableProperties,
  TableRowsSplit,
  Tablet,
  TabletSmartphone,
  Tablets,
  Tag,
  Tags,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Tangent,
  Target,
  Telescope,
  Tent,
  TentTree,
  Terminal,
  TerminalSquare,
  TestTube,
  TestTube2,
  TestTubes,
  Text,
  TextCursor,
  TextCursorInput,
  TextQuote,
  TextSearch,
  TextSelect,
  Theater,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  TicketX,
  Timer,
  TimerOff,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  Tornado,
  Torus,
  Touchpad,
  TouchpadOff,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFront,
  TrainFrontTunnel,
  TrainTrack,
  TramFront,
  Trash,
  Trash2,
  TreeDeciduous,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  TriangleRight,
  Trophy,
  Truck,
  Turtle,
  Tv,
  Tv2,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  UmbrellaOff,
  Underline,
  Undo,
  Undo2,
  UndoDot,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  Unlink,
  Unlink2,
  Unlock,
  UnlockKeyhole,
  Unplug,
  Upload,
  UploadCloud,
  Usb,
  User,
  UserCheck,
  UserCog,
  UserMinus,
  UserPlus,
  UserRound,
  UserRoundCheck,
  UserRoundCog,
  UserRoundMinus,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundX,
  UserSearch,
  UserX,
  Users,
  UsersRound,
  Utensils,
  UtensilsCrossed,
  UtilityPole,
  Variable,
  Vault,
  Vegan,
  VenetianMask,
  Vibrate,
  VibrateOff,
  Video,
  VideoOff,
  Videotape,
  View,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Vote,
  Wallet,
  Wallet2,
  WalletCards,
  Wallpaper,
  Wand,
  Wand2,
  Warehouse,
  WashingMachine,
  Watch,
  Waves,
  Waypoints,
  Webcam,
  Webhook,
  WebhookOff,
  Weight,
  Wheat,
  WheatOff,
  WholeWord,
  Wifi,
  WifiOff,
  Wind,
  Wine,
  WineOff,
  Workflow,
  WrapText,
  Wrench,
  X,
  XCircle,
  XOctagon,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut
}, Symbol.toStringTag, { value: "Module" }));
const LucideIcons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AArrowDown,
  AArrowDownIcon: AArrowDown,
  AArrowUp,
  AArrowUpIcon: AArrowUp,
  ALargeSmall,
  ALargeSmallIcon: ALargeSmall,
  Accessibility,
  AccessibilityIcon: Accessibility,
  Activity,
  ActivityIcon: Activity,
  ActivitySquare,
  ActivitySquareIcon: ActivitySquare,
  AirVent,
  AirVentIcon: AirVent,
  Airplay,
  AirplayIcon: Airplay,
  AlarmCheck: AlarmClockCheck,
  AlarmCheckIcon: AlarmClockCheck,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockCheckIcon: AlarmClockCheck,
  AlarmClockIcon: AlarmClock,
  AlarmClockMinus,
  AlarmClockMinusIcon: AlarmClockMinus,
  AlarmClockOff,
  AlarmClockOffIcon: AlarmClockOff,
  AlarmClockPlus,
  AlarmClockPlusIcon: AlarmClockPlus,
  AlarmMinus: AlarmClockMinus,
  AlarmMinusIcon: AlarmClockMinus,
  AlarmPlus: AlarmClockPlus,
  AlarmPlusIcon: AlarmClockPlus,
  AlarmSmoke,
  AlarmSmokeIcon: AlarmSmoke,
  Album,
  AlbumIcon: Album,
  AlertCircle,
  AlertCircleIcon: AlertCircle,
  AlertOctagon,
  AlertOctagonIcon: AlertOctagon,
  AlertTriangle,
  AlertTriangleIcon: AlertTriangle,
  AlignCenter,
  AlignCenterHorizontal,
  AlignCenterHorizontalIcon: AlignCenterHorizontal,
  AlignCenterIcon: AlignCenter,
  AlignCenterVertical,
  AlignCenterVerticalIcon: AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndHorizontalIcon: AlignEndHorizontal,
  AlignEndVertical,
  AlignEndVerticalIcon: AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeCenterIcon: AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeEndIcon: AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalDistributeStartIcon: AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyCenterIcon: AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyEndIcon: AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyStartIcon: AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceAroundIcon: AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignHorizontalSpaceBetweenIcon: AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignJustifyIcon: AlignJustify,
  AlignLeft,
  AlignLeftIcon: AlignLeft,
  AlignRight,
  AlignRightIcon: AlignRight,
  AlignStartHorizontal,
  AlignStartHorizontalIcon: AlignStartHorizontal,
  AlignStartVertical,
  AlignStartVerticalIcon: AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeCenterIcon: AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeEndIcon: AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalDistributeStartIcon: AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyCenterIcon: AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyEndIcon: AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyStartIcon: AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceAroundIcon: AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  AlignVerticalSpaceBetweenIcon: AlignVerticalSpaceBetween,
  Ambulance,
  AmbulanceIcon: Ambulance,
  Ampersand,
  AmpersandIcon: Ampersand,
  Ampersands,
  AmpersandsIcon: Ampersands,
  Anchor,
  AnchorIcon: Anchor,
  Angry,
  AngryIcon: Angry,
  Annoyed,
  AnnoyedIcon: Annoyed,
  Antenna,
  AntennaIcon: Antenna,
  Anvil,
  AnvilIcon: Anvil,
  Aperture,
  ApertureIcon: Aperture,
  AppWindow,
  AppWindowIcon: AppWindow,
  Apple,
  AppleIcon: Apple,
  Archive,
  ArchiveIcon: Archive,
  ArchiveRestore,
  ArchiveRestoreIcon: ArchiveRestore,
  ArchiveX,
  ArchiveXIcon: ArchiveX,
  AreaChart,
  AreaChartIcon: AreaChart,
  Armchair,
  ArmchairIcon: Armchair,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigDownDashIcon: ArrowBigDownDash,
  ArrowBigDownIcon: ArrowBigDown,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigLeftDashIcon: ArrowBigLeftDash,
  ArrowBigLeftIcon: ArrowBigLeft,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigRightDashIcon: ArrowBigRightDash,
  ArrowBigRightIcon: ArrowBigRight,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowBigUpDashIcon: ArrowBigUpDash,
  ArrowBigUpIcon: ArrowBigUp,
  ArrowDown,
  ArrowDown01,
  ArrowDown01Icon: ArrowDown01,
  ArrowDown10,
  ArrowDown10Icon: ArrowDown10,
  ArrowDownAZ,
  ArrowDownAZIcon: ArrowDownAZ,
  ArrowDownAz: ArrowDownAZ,
  ArrowDownAzIcon: ArrowDownAZ,
  ArrowDownCircle,
  ArrowDownCircleIcon: ArrowDownCircle,
  ArrowDownFromLine,
  ArrowDownFromLineIcon: ArrowDownFromLine,
  ArrowDownIcon: ArrowDown,
  ArrowDownLeft,
  ArrowDownLeftFromCircle,
  ArrowDownLeftFromCircleIcon: ArrowDownLeftFromCircle,
  ArrowDownLeftFromSquare,
  ArrowDownLeftFromSquareIcon: ArrowDownLeftFromSquare,
  ArrowDownLeftIcon: ArrowDownLeft,
  ArrowDownLeftSquare,
  ArrowDownLeftSquareIcon: ArrowDownLeftSquare,
  ArrowDownNarrowWide,
  ArrowDownNarrowWideIcon: ArrowDownNarrowWide,
  ArrowDownRight,
  ArrowDownRightFromCircle,
  ArrowDownRightFromCircleIcon: ArrowDownRightFromCircle,
  ArrowDownRightFromSquare,
  ArrowDownRightFromSquareIcon: ArrowDownRightFromSquare,
  ArrowDownRightIcon: ArrowDownRight,
  ArrowDownRightSquare,
  ArrowDownRightSquareIcon: ArrowDownRightSquare,
  ArrowDownSquare,
  ArrowDownSquareIcon: ArrowDownSquare,
  ArrowDownToDot,
  ArrowDownToDotIcon: ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownToLineIcon: ArrowDownToLine,
  ArrowDownUp,
  ArrowDownUpIcon: ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownWideNarrowIcon: ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowDownZAIcon: ArrowDownZA,
  ArrowDownZa: ArrowDownZA,
  ArrowDownZaIcon: ArrowDownZA,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowLeftCircleIcon: ArrowLeftCircle,
  ArrowLeftFromLine,
  ArrowLeftFromLineIcon: ArrowLeftFromLine,
  ArrowLeftIcon: ArrowLeft,
  ArrowLeftRight,
  ArrowLeftRightIcon: ArrowLeftRight,
  ArrowLeftSquare,
  ArrowLeftSquareIcon: ArrowLeftSquare,
  ArrowLeftToLine,
  ArrowLeftToLineIcon: ArrowLeftToLine,
  ArrowRight,
  ArrowRightCircle,
  ArrowRightCircleIcon: ArrowRightCircle,
  ArrowRightFromLine,
  ArrowRightFromLineIcon: ArrowRightFromLine,
  ArrowRightIcon: ArrowRight,
  ArrowRightLeft,
  ArrowRightLeftIcon: ArrowRightLeft,
  ArrowRightSquare,
  ArrowRightSquareIcon: ArrowRightSquare,
  ArrowRightToLine,
  ArrowRightToLineIcon: ArrowRightToLine,
  ArrowUp,
  ArrowUp01,
  ArrowUp01Icon: ArrowUp01,
  ArrowUp10,
  ArrowUp10Icon: ArrowUp10,
  ArrowUpAZ,
  ArrowUpAZIcon: ArrowUpAZ,
  ArrowUpAz: ArrowUpAZ,
  ArrowUpAzIcon: ArrowUpAZ,
  ArrowUpCircle,
  ArrowUpCircleIcon: ArrowUpCircle,
  ArrowUpDown,
  ArrowUpDownIcon: ArrowUpDown,
  ArrowUpFromDot,
  ArrowUpFromDotIcon: ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpFromLineIcon: ArrowUpFromLine,
  ArrowUpIcon: ArrowUp,
  ArrowUpLeft,
  ArrowUpLeftFromCircle,
  ArrowUpLeftFromCircleIcon: ArrowUpLeftFromCircle,
  ArrowUpLeftFromSquare,
  ArrowUpLeftFromSquareIcon: ArrowUpLeftFromSquare,
  ArrowUpLeftIcon: ArrowUpLeft,
  ArrowUpLeftSquare,
  ArrowUpLeftSquareIcon: ArrowUpLeftSquare,
  ArrowUpNarrowWide,
  ArrowUpNarrowWideIcon: ArrowUpNarrowWide,
  ArrowUpRight,
  ArrowUpRightFromCircle,
  ArrowUpRightFromCircleIcon: ArrowUpRightFromCircle,
  ArrowUpRightFromSquare,
  ArrowUpRightFromSquareIcon: ArrowUpRightFromSquare,
  ArrowUpRightIcon: ArrowUpRight,
  ArrowUpRightSquare,
  ArrowUpRightSquareIcon: ArrowUpRightSquare,
  ArrowUpSquare,
  ArrowUpSquareIcon: ArrowUpSquare,
  ArrowUpToLine,
  ArrowUpToLineIcon: ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUpWideNarrowIcon: ArrowUpWideNarrow,
  ArrowUpZA,
  ArrowUpZAIcon: ArrowUpZA,
  ArrowUpZa: ArrowUpZA,
  ArrowUpZaIcon: ArrowUpZA,
  ArrowsUpFromLine,
  ArrowsUpFromLineIcon: ArrowsUpFromLine,
  Asterisk,
  AsteriskIcon: Asterisk,
  AsteriskSquare,
  AsteriskSquareIcon: AsteriskSquare,
  AtSign,
  AtSignIcon: AtSign,
  Atom,
  AtomIcon: Atom,
  AudioLines,
  AudioLinesIcon: AudioLines,
  AudioWaveform,
  AudioWaveformIcon: AudioWaveform,
  Award,
  AwardIcon: Award,
  Axe,
  AxeIcon: Axe,
  Axis3D: Axis3d,
  Axis3DIcon: Axis3d,
  Axis3d,
  Axis3dIcon: Axis3d,
  Baby,
  BabyIcon: Baby,
  Backpack,
  BackpackIcon: Backpack,
  Badge,
  BadgeAlert,
  BadgeAlertIcon: BadgeAlert,
  BadgeCent,
  BadgeCentIcon: BadgeCent,
  BadgeCheck,
  BadgeCheckIcon: BadgeCheck,
  BadgeDollarSign,
  BadgeDollarSignIcon: BadgeDollarSign,
  BadgeEuro,
  BadgeEuroIcon: BadgeEuro,
  BadgeHelp,
  BadgeHelpIcon: BadgeHelp,
  BadgeIcon: Badge,
  BadgeIndianRupee,
  BadgeIndianRupeeIcon: BadgeIndianRupee,
  BadgeInfo,
  BadgeInfoIcon: BadgeInfo,
  BadgeJapaneseYen,
  BadgeJapaneseYenIcon: BadgeJapaneseYen,
  BadgeMinus,
  BadgeMinusIcon: BadgeMinus,
  BadgePercent,
  BadgePercentIcon: BadgePercent,
  BadgePlus,
  BadgePlusIcon: BadgePlus,
  BadgePoundSterling,
  BadgePoundSterlingIcon: BadgePoundSterling,
  BadgeRussianRuble,
  BadgeRussianRubleIcon: BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeSwissFrancIcon: BadgeSwissFranc,
  BadgeX,
  BadgeXIcon: BadgeX,
  BaggageClaim,
  BaggageClaimIcon: BaggageClaim,
  Ban,
  BanIcon: Ban,
  Banana,
  BananaIcon: Banana,
  Banknote,
  BanknoteIcon: Banknote,
  BarChart,
  BarChart2,
  BarChart2Icon: BarChart2,
  BarChart3,
  BarChart3Icon: BarChart3,
  BarChart4,
  BarChart4Icon: BarChart4,
  BarChartBig,
  BarChartBigIcon: BarChartBig,
  BarChartHorizontal,
  BarChartHorizontalBig,
  BarChartHorizontalBigIcon: BarChartHorizontalBig,
  BarChartHorizontalIcon: BarChartHorizontal,
  BarChartIcon: BarChart,
  Barcode,
  BarcodeIcon: Barcode,
  Baseline,
  BaselineIcon: Baseline,
  Bath,
  BathIcon: Bath,
  Battery,
  BatteryCharging,
  BatteryChargingIcon: BatteryCharging,
  BatteryFull,
  BatteryFullIcon: BatteryFull,
  BatteryIcon: Battery,
  BatteryLow,
  BatteryLowIcon: BatteryLow,
  BatteryMedium,
  BatteryMediumIcon: BatteryMedium,
  BatteryWarning,
  BatteryWarningIcon: BatteryWarning,
  Beaker,
  BeakerIcon: Beaker,
  Bean,
  BeanIcon: Bean,
  BeanOff,
  BeanOffIcon: BeanOff,
  Bed,
  BedDouble,
  BedDoubleIcon: BedDouble,
  BedIcon: Bed,
  BedSingle,
  BedSingleIcon: BedSingle,
  Beef,
  BeefIcon: Beef,
  Beer,
  BeerIcon: Beer,
  Bell,
  BellDot,
  BellDotIcon: BellDot,
  BellElectric,
  BellElectricIcon: BellElectric,
  BellIcon: Bell,
  BellMinus,
  BellMinusIcon: BellMinus,
  BellOff,
  BellOffIcon: BellOff,
  BellPlus,
  BellPlusIcon: BellPlus,
  BellRing,
  BellRingIcon: BellRing,
  BetweenHorizonalEnd: BetweenHorizontalEnd,
  BetweenHorizonalEndIcon: BetweenHorizontalEnd,
  BetweenHorizonalStart: BetweenHorizontalStart,
  BetweenHorizonalStartIcon: BetweenHorizontalStart,
  BetweenHorizontalEnd,
  BetweenHorizontalEndIcon: BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenHorizontalStartIcon: BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalEndIcon: BetweenVerticalEnd,
  BetweenVerticalStart,
  BetweenVerticalStartIcon: BetweenVerticalStart,
  Bike,
  BikeIcon: Bike,
  Binary,
  BinaryIcon: Binary,
  Biohazard,
  BiohazardIcon: Biohazard,
  Bird,
  BirdIcon: Bird,
  Bitcoin,
  BitcoinIcon: Bitcoin,
  Blend,
  BlendIcon: Blend,
  Blinds,
  BlindsIcon: Blinds,
  Blocks,
  BlocksIcon: Blocks,
  Bluetooth,
  BluetoothConnected,
  BluetoothConnectedIcon: BluetoothConnected,
  BluetoothIcon: Bluetooth,
  BluetoothOff,
  BluetoothOffIcon: BluetoothOff,
  BluetoothSearching,
  BluetoothSearchingIcon: BluetoothSearching,
  Bold,
  BoldIcon: Bold,
  Bolt,
  BoltIcon: Bolt,
  Bomb,
  BombIcon: Bomb,
  Bone,
  BoneIcon: Bone,
  Book,
  BookA,
  BookAIcon: BookA,
  BookAudio,
  BookAudioIcon: BookAudio,
  BookCheck,
  BookCheckIcon: BookCheck,
  BookCopy,
  BookCopyIcon: BookCopy,
  BookDashed,
  BookDashedIcon: BookDashed,
  BookDown,
  BookDownIcon: BookDown,
  BookHeadphones,
  BookHeadphonesIcon: BookHeadphones,
  BookHeart,
  BookHeartIcon: BookHeart,
  BookIcon: Book,
  BookImage,
  BookImageIcon: BookImage,
  BookKey,
  BookKeyIcon: BookKey,
  BookLock,
  BookLockIcon: BookLock,
  BookMarked,
  BookMarkedIcon: BookMarked,
  BookMinus,
  BookMinusIcon: BookMinus,
  BookOpen,
  BookOpenCheck,
  BookOpenCheckIcon: BookOpenCheck,
  BookOpenIcon: BookOpen,
  BookOpenText,
  BookOpenTextIcon: BookOpenText,
  BookPlus,
  BookPlusIcon: BookPlus,
  BookTemplate: BookDashed,
  BookTemplateIcon: BookDashed,
  BookText,
  BookTextIcon: BookText,
  BookType,
  BookTypeIcon: BookType,
  BookUp,
  BookUp2,
  BookUp2Icon: BookUp2,
  BookUpIcon: BookUp,
  BookUser,
  BookUserIcon: BookUser,
  BookX,
  BookXIcon: BookX,
  Bookmark,
  BookmarkCheck,
  BookmarkCheckIcon: BookmarkCheck,
  BookmarkIcon: Bookmark,
  BookmarkMinus,
  BookmarkMinusIcon: BookmarkMinus,
  BookmarkPlus,
  BookmarkPlusIcon: BookmarkPlus,
  BookmarkX,
  BookmarkXIcon: BookmarkX,
  BoomBox,
  BoomBoxIcon: BoomBox,
  Bot,
  BotIcon: Bot,
  BotMessageSquare,
  BotMessageSquareIcon: BotMessageSquare,
  Box,
  BoxIcon: Box,
  BoxSelect,
  BoxSelectIcon: BoxSelect,
  Boxes,
  BoxesIcon: Boxes,
  Braces,
  BracesIcon: Braces,
  Brackets,
  BracketsIcon: Brackets,
  Brain,
  BrainCircuit,
  BrainCircuitIcon: BrainCircuit,
  BrainCog,
  BrainCogIcon: BrainCog,
  BrainIcon: Brain,
  BrickWall,
  BrickWallIcon: BrickWall,
  Briefcase,
  BriefcaseIcon: Briefcase,
  BringToFront,
  BringToFrontIcon: BringToFront,
  Brush,
  BrushIcon: Brush,
  Bug,
  BugIcon: Bug,
  BugOff,
  BugOffIcon: BugOff,
  BugPlay,
  BugPlayIcon: BugPlay,
  Building,
  Building2,
  Building2Icon: Building2,
  BuildingIcon: Building,
  Bus,
  BusFront,
  BusFrontIcon: BusFront,
  BusIcon: Bus,
  Cable,
  CableCar,
  CableCarIcon: CableCar,
  CableIcon: Cable,
  Cake,
  CakeIcon: Cake,
  CakeSlice,
  CakeSliceIcon: CakeSlice,
  Calculator,
  CalculatorIcon: Calculator,
  Calendar,
  CalendarCheck,
  CalendarCheck2,
  CalendarCheck2Icon: CalendarCheck2,
  CalendarCheckIcon: CalendarCheck,
  CalendarClock,
  CalendarClockIcon: CalendarClock,
  CalendarDays,
  CalendarDaysIcon: CalendarDays,
  CalendarFold,
  CalendarFoldIcon: CalendarFold,
  CalendarHeart,
  CalendarHeartIcon: CalendarHeart,
  CalendarIcon: Calendar,
  CalendarMinus,
  CalendarMinus2,
  CalendarMinus2Icon: CalendarMinus2,
  CalendarMinusIcon: CalendarMinus,
  CalendarOff,
  CalendarOffIcon: CalendarOff,
  CalendarPlus,
  CalendarPlus2,
  CalendarPlus2Icon: CalendarPlus2,
  CalendarPlusIcon: CalendarPlus,
  CalendarRange,
  CalendarRangeIcon: CalendarRange,
  CalendarSearch,
  CalendarSearchIcon: CalendarSearch,
  CalendarX,
  CalendarX2,
  CalendarX2Icon: CalendarX2,
  CalendarXIcon: CalendarX,
  Camera,
  CameraIcon: Camera,
  CameraOff,
  CameraOffIcon: CameraOff,
  CandlestickChart,
  CandlestickChartIcon: CandlestickChart,
  Candy,
  CandyCane,
  CandyCaneIcon: CandyCane,
  CandyIcon: Candy,
  CandyOff,
  CandyOffIcon: CandyOff,
  Captions,
  CaptionsIcon: Captions,
  CaptionsOff,
  CaptionsOffIcon: CaptionsOff,
  Car,
  CarFront,
  CarFrontIcon: CarFront,
  CarIcon: Car,
  CarTaxiFront,
  CarTaxiFrontIcon: CarTaxiFront,
  Caravan,
  CaravanIcon: Caravan,
  Carrot,
  CarrotIcon: Carrot,
  CaseLower,
  CaseLowerIcon: CaseLower,
  CaseSensitive,
  CaseSensitiveIcon: CaseSensitive,
  CaseUpper,
  CaseUpperIcon: CaseUpper,
  CassetteTape,
  CassetteTapeIcon: CassetteTape,
  Cast,
  CastIcon: Cast,
  Castle,
  CastleIcon: Castle,
  Cat,
  CatIcon: Cat,
  Cctv,
  CctvIcon: Cctv,
  Check,
  CheckCheck,
  CheckCheckIcon: CheckCheck,
  CheckCircle,
  CheckCircle2,
  CheckCircle2Icon: CheckCircle2,
  CheckCircleIcon: CheckCircle,
  CheckIcon: Check,
  CheckSquare,
  CheckSquare2,
  CheckSquare2Icon: CheckSquare2,
  CheckSquareIcon: CheckSquare,
  ChefHat,
  ChefHatIcon: ChefHat,
  Cherry,
  CherryIcon: Cherry,
  ChevronDown,
  ChevronDownCircle,
  ChevronDownCircleIcon: ChevronDownCircle,
  ChevronDownIcon: ChevronDown,
  ChevronDownSquare,
  ChevronDownSquareIcon: ChevronDownSquare,
  ChevronFirst,
  ChevronFirstIcon: ChevronFirst,
  ChevronLast,
  ChevronLastIcon: ChevronLast,
  ChevronLeft,
  ChevronLeftCircle,
  ChevronLeftCircleIcon: ChevronLeftCircle,
  ChevronLeftIcon: ChevronLeft,
  ChevronLeftSquare,
  ChevronLeftSquareIcon: ChevronLeftSquare,
  ChevronRight,
  ChevronRightCircle,
  ChevronRightCircleIcon: ChevronRightCircle,
  ChevronRightIcon: ChevronRight,
  ChevronRightSquare,
  ChevronRightSquareIcon: ChevronRightSquare,
  ChevronUp,
  ChevronUpCircle,
  ChevronUpCircleIcon: ChevronUpCircle,
  ChevronUpIcon: ChevronUp,
  ChevronUpSquare,
  ChevronUpSquareIcon: ChevronUpSquare,
  ChevronsDown,
  ChevronsDownIcon: ChevronsDown,
  ChevronsDownUp,
  ChevronsDownUpIcon: ChevronsDownUp,
  ChevronsLeft,
  ChevronsLeftIcon: ChevronsLeft,
  ChevronsLeftRight,
  ChevronsLeftRightIcon: ChevronsLeftRight,
  ChevronsRight,
  ChevronsRightIcon: ChevronsRight,
  ChevronsRightLeft,
  ChevronsRightLeftIcon: ChevronsRightLeft,
  ChevronsUp,
  ChevronsUpDown,
  ChevronsUpDownIcon: ChevronsUpDown,
  ChevronsUpIcon: ChevronsUp,
  Chrome,
  ChromeIcon: Chrome,
  Church,
  ChurchIcon: Church,
  Cigarette,
  CigaretteIcon: Cigarette,
  CigaretteOff,
  CigaretteOffIcon: CigaretteOff,
  Circle,
  CircleDashed,
  CircleDashedIcon: CircleDashed,
  CircleDollarSign,
  CircleDollarSignIcon: CircleDollarSign,
  CircleDot,
  CircleDotDashed,
  CircleDotDashedIcon: CircleDotDashed,
  CircleDotIcon: CircleDot,
  CircleEllipsis,
  CircleEllipsisIcon: CircleEllipsis,
  CircleEqual,
  CircleEqualIcon: CircleEqual,
  CircleFadingPlus,
  CircleFadingPlusIcon: CircleFadingPlus,
  CircleIcon: Circle,
  CircleOff,
  CircleOffIcon: CircleOff,
  CircleSlash,
  CircleSlash2,
  CircleSlash2Icon: CircleSlash2,
  CircleSlashIcon: CircleSlash,
  CircleSlashed: CircleSlash2,
  CircleSlashedIcon: CircleSlash2,
  CircleUser,
  CircleUserIcon: CircleUser,
  CircleUserRound,
  CircleUserRoundIcon: CircleUserRound,
  CircuitBoard,
  CircuitBoardIcon: CircuitBoard,
  Citrus,
  CitrusIcon: Citrus,
  Clapperboard,
  ClapperboardIcon: Clapperboard,
  Clipboard,
  ClipboardCheck,
  ClipboardCheckIcon: ClipboardCheck,
  ClipboardCopy,
  ClipboardCopyIcon: ClipboardCopy,
  ClipboardEdit: ClipboardPen,
  ClipboardEditIcon: ClipboardPen,
  ClipboardIcon: Clipboard,
  ClipboardList,
  ClipboardListIcon: ClipboardList,
  ClipboardMinus,
  ClipboardMinusIcon: ClipboardMinus,
  ClipboardPaste,
  ClipboardPasteIcon: ClipboardPaste,
  ClipboardPen,
  ClipboardPenIcon: ClipboardPen,
  ClipboardPenLine,
  ClipboardPenLineIcon: ClipboardPenLine,
  ClipboardPlus,
  ClipboardPlusIcon: ClipboardPlus,
  ClipboardSignature: ClipboardPenLine,
  ClipboardSignatureIcon: ClipboardPenLine,
  ClipboardType,
  ClipboardTypeIcon: ClipboardType,
  ClipboardX,
  ClipboardXIcon: ClipboardX,
  Clock,
  Clock1,
  Clock10,
  Clock10Icon: Clock10,
  Clock11,
  Clock11Icon: Clock11,
  Clock12,
  Clock12Icon: Clock12,
  Clock1Icon: Clock1,
  Clock2,
  Clock2Icon: Clock2,
  Clock3,
  Clock3Icon: Clock3,
  Clock4,
  Clock4Icon: Clock4,
  Clock5,
  Clock5Icon: Clock5,
  Clock6,
  Clock6Icon: Clock6,
  Clock7,
  Clock7Icon: Clock7,
  Clock8,
  Clock8Icon: Clock8,
  Clock9,
  Clock9Icon: Clock9,
  ClockIcon: Clock,
  Cloud,
  CloudCog,
  CloudCogIcon: CloudCog,
  CloudDrizzle,
  CloudDrizzleIcon: CloudDrizzle,
  CloudFog,
  CloudFogIcon: CloudFog,
  CloudHail,
  CloudHailIcon: CloudHail,
  CloudIcon: Cloud,
  CloudLightning,
  CloudLightningIcon: CloudLightning,
  CloudMoon,
  CloudMoonIcon: CloudMoon,
  CloudMoonRain,
  CloudMoonRainIcon: CloudMoonRain,
  CloudOff,
  CloudOffIcon: CloudOff,
  CloudRain,
  CloudRainIcon: CloudRain,
  CloudRainWind,
  CloudRainWindIcon: CloudRainWind,
  CloudSnow,
  CloudSnowIcon: CloudSnow,
  CloudSun,
  CloudSunIcon: CloudSun,
  CloudSunRain,
  CloudSunRainIcon: CloudSunRain,
  Cloudy,
  CloudyIcon: Cloudy,
  Clover,
  CloverIcon: Clover,
  Club,
  ClubIcon: Club,
  Code,
  Code2,
  Code2Icon: Code2,
  CodeIcon: Code,
  CodeSquare,
  CodeSquareIcon: CodeSquare,
  Codepen,
  CodepenIcon: Codepen,
  Codesandbox,
  CodesandboxIcon: Codesandbox,
  Coffee,
  CoffeeIcon: Coffee,
  Cog,
  CogIcon: Cog,
  Coins,
  CoinsIcon: Coins,
  Columns: Columns2,
  Columns2,
  Columns2Icon: Columns2,
  Columns3,
  Columns3Icon: Columns3,
  Columns4,
  Columns4Icon: Columns4,
  ColumnsIcon: Columns2,
  Combine,
  CombineIcon: Combine,
  Command,
  CommandIcon: Command,
  Compass,
  CompassIcon: Compass,
  Component,
  ComponentIcon: Component,
  Computer,
  ComputerIcon: Computer,
  ConciergeBell,
  ConciergeBellIcon: ConciergeBell,
  Cone,
  ConeIcon: Cone,
  Construction,
  ConstructionIcon: Construction,
  Contact,
  Contact2,
  Contact2Icon: Contact2,
  ContactIcon: Contact,
  Container,
  ContainerIcon: Container,
  Contrast,
  ContrastIcon: Contrast,
  Cookie,
  CookieIcon: Cookie,
  CookingPot,
  CookingPotIcon: CookingPot,
  Copy,
  CopyCheck,
  CopyCheckIcon: CopyCheck,
  CopyIcon: Copy,
  CopyMinus,
  CopyMinusIcon: CopyMinus,
  CopyPlus,
  CopyPlusIcon: CopyPlus,
  CopySlash,
  CopySlashIcon: CopySlash,
  CopyX,
  CopyXIcon: CopyX,
  Copyleft,
  CopyleftIcon: Copyleft,
  Copyright,
  CopyrightIcon: Copyright,
  CornerDownLeft,
  CornerDownLeftIcon: CornerDownLeft,
  CornerDownRight,
  CornerDownRightIcon: CornerDownRight,
  CornerLeftDown,
  CornerLeftDownIcon: CornerLeftDown,
  CornerLeftUp,
  CornerLeftUpIcon: CornerLeftUp,
  CornerRightDown,
  CornerRightDownIcon: CornerRightDown,
  CornerRightUp,
  CornerRightUpIcon: CornerRightUp,
  CornerUpLeft,
  CornerUpLeftIcon: CornerUpLeft,
  CornerUpRight,
  CornerUpRightIcon: CornerUpRight,
  Cpu,
  CpuIcon: Cpu,
  CreativeCommons,
  CreativeCommonsIcon: CreativeCommons,
  CreditCard,
  CreditCardIcon: CreditCard,
  Croissant,
  CroissantIcon: Croissant,
  Crop,
  CropIcon: Crop,
  Cross,
  CrossIcon: Cross,
  Crosshair,
  CrosshairIcon: Crosshair,
  Crown,
  CrownIcon: Crown,
  Cuboid,
  CuboidIcon: Cuboid,
  CupSoda,
  CupSodaIcon: CupSoda,
  CurlyBraces: Braces,
  CurlyBracesIcon: Braces,
  Currency,
  CurrencyIcon: Currency,
  Cylinder,
  CylinderIcon: Cylinder,
  Database,
  DatabaseBackup,
  DatabaseBackupIcon: DatabaseBackup,
  DatabaseIcon: Database,
  DatabaseZap,
  DatabaseZapIcon: DatabaseZap,
  Delete,
  DeleteIcon: Delete,
  Dessert,
  DessertIcon: Dessert,
  Diameter,
  DiameterIcon: Diameter,
  Diamond,
  DiamondIcon: Diamond,
  Dice1,
  Dice1Icon: Dice1,
  Dice2,
  Dice2Icon: Dice2,
  Dice3,
  Dice3Icon: Dice3,
  Dice4,
  Dice4Icon: Dice4,
  Dice5,
  Dice5Icon: Dice5,
  Dice6,
  Dice6Icon: Dice6,
  Dices,
  DicesIcon: Dices,
  Diff,
  DiffIcon: Diff,
  Disc,
  Disc2,
  Disc2Icon: Disc2,
  Disc3,
  Disc3Icon: Disc3,
  DiscAlbum,
  DiscAlbumIcon: DiscAlbum,
  DiscIcon: Disc,
  Divide,
  DivideCircle,
  DivideCircleIcon: DivideCircle,
  DivideIcon: Divide,
  DivideSquare,
  DivideSquareIcon: DivideSquare,
  Dna,
  DnaIcon: Dna,
  DnaOff,
  DnaOffIcon: DnaOff,
  Dog,
  DogIcon: Dog,
  DollarSign,
  DollarSignIcon: DollarSign,
  Donut,
  DonutIcon: Donut,
  DoorClosed,
  DoorClosedIcon: DoorClosed,
  DoorOpen,
  DoorOpenIcon: DoorOpen,
  Dot,
  DotIcon: Dot,
  DotSquare,
  DotSquareIcon: DotSquare,
  Download,
  DownloadCloud,
  DownloadCloudIcon: DownloadCloud,
  DownloadIcon: Download,
  DraftingCompass,
  DraftingCompassIcon: DraftingCompass,
  Drama,
  DramaIcon: Drama,
  Dribbble,
  DribbbleIcon: Dribbble,
  Drill,
  DrillIcon: Drill,
  Droplet,
  DropletIcon: Droplet,
  Droplets,
  DropletsIcon: Droplets,
  Drum,
  DrumIcon: Drum,
  Drumstick,
  DrumstickIcon: Drumstick,
  Dumbbell,
  DumbbellIcon: Dumbbell,
  Ear,
  EarIcon: Ear,
  EarOff,
  EarOffIcon: EarOff,
  Earth,
  EarthIcon: Earth,
  EarthLock,
  EarthLockIcon: EarthLock,
  Eclipse,
  EclipseIcon: Eclipse,
  Edit: SquarePen,
  Edit2: Pen,
  Edit2Icon: Pen,
  Edit3: PenLine,
  Edit3Icon: PenLine,
  EditIcon: SquarePen,
  Egg,
  EggFried,
  EggFriedIcon: EggFried,
  EggIcon: Egg,
  EggOff,
  EggOffIcon: EggOff,
  Equal,
  EqualIcon: Equal,
  EqualNot,
  EqualNotIcon: EqualNot,
  EqualSquare,
  EqualSquareIcon: EqualSquare,
  Eraser,
  EraserIcon: Eraser,
  Euro,
  EuroIcon: Euro,
  Expand,
  ExpandIcon: Expand,
  ExternalLink,
  ExternalLinkIcon: ExternalLink,
  Eye,
  EyeIcon: Eye,
  EyeOff,
  EyeOffIcon: EyeOff,
  Facebook,
  FacebookIcon: Facebook,
  Factory,
  FactoryIcon: Factory,
  Fan,
  FanIcon: Fan,
  FastForward,
  FastForwardIcon: FastForward,
  Feather,
  FeatherIcon: Feather,
  Fence,
  FenceIcon: Fence,
  FerrisWheel,
  FerrisWheelIcon: FerrisWheel,
  Figma,
  FigmaIcon: Figma,
  File,
  FileArchive,
  FileArchiveIcon: FileArchive,
  FileAudio,
  FileAudio2,
  FileAudio2Icon: FileAudio2,
  FileAudioIcon: FileAudio,
  FileAxis3D: FileAxis3d,
  FileAxis3DIcon: FileAxis3d,
  FileAxis3d,
  FileAxis3dIcon: FileAxis3d,
  FileBadge,
  FileBadge2,
  FileBadge2Icon: FileBadge2,
  FileBadgeIcon: FileBadge,
  FileBarChart,
  FileBarChart2,
  FileBarChart2Icon: FileBarChart2,
  FileBarChartIcon: FileBarChart,
  FileBox,
  FileBoxIcon: FileBox,
  FileCheck,
  FileCheck2,
  FileCheck2Icon: FileCheck2,
  FileCheckIcon: FileCheck,
  FileClock,
  FileClockIcon: FileClock,
  FileCode,
  FileCode2,
  FileCode2Icon: FileCode2,
  FileCodeIcon: FileCode,
  FileCog,
  FileCog2: FileCog,
  FileCog2Icon: FileCog,
  FileCogIcon: FileCog,
  FileDiff,
  FileDiffIcon: FileDiff,
  FileDigit,
  FileDigitIcon: FileDigit,
  FileDown,
  FileDownIcon: FileDown,
  FileEdit: FilePen,
  FileEditIcon: FilePen,
  FileHeart,
  FileHeartIcon: FileHeart,
  FileIcon: File,
  FileImage,
  FileImageIcon: FileImage,
  FileInput,
  FileInputIcon: FileInput,
  FileJson,
  FileJson2,
  FileJson2Icon: FileJson2,
  FileJsonIcon: FileJson,
  FileKey,
  FileKey2,
  FileKey2Icon: FileKey2,
  FileKeyIcon: FileKey,
  FileLineChart,
  FileLineChartIcon: FileLineChart,
  FileLock,
  FileLock2,
  FileLock2Icon: FileLock2,
  FileLockIcon: FileLock,
  FileMinus,
  FileMinus2,
  FileMinus2Icon: FileMinus2,
  FileMinusIcon: FileMinus,
  FileMusic,
  FileMusicIcon: FileMusic,
  FileOutput,
  FileOutputIcon: FileOutput,
  FilePen,
  FilePenIcon: FilePen,
  FilePenLine,
  FilePenLineIcon: FilePenLine,
  FilePieChart,
  FilePieChartIcon: FilePieChart,
  FilePlus,
  FilePlus2,
  FilePlus2Icon: FilePlus2,
  FilePlusIcon: FilePlus,
  FileQuestion,
  FileQuestionIcon: FileQuestion,
  FileScan,
  FileScanIcon: FileScan,
  FileSearch,
  FileSearch2,
  FileSearch2Icon: FileSearch2,
  FileSearchIcon: FileSearch,
  FileSignature: FilePenLine,
  FileSignatureIcon: FilePenLine,
  FileSliders,
  FileSlidersIcon: FileSliders,
  FileSpreadsheet,
  FileSpreadsheetIcon: FileSpreadsheet,
  FileStack,
  FileStackIcon: FileStack,
  FileSymlink,
  FileSymlinkIcon: FileSymlink,
  FileTerminal,
  FileTerminalIcon: FileTerminal,
  FileText,
  FileTextIcon: FileText,
  FileType,
  FileType2,
  FileType2Icon: FileType2,
  FileTypeIcon: FileType,
  FileUp,
  FileUpIcon: FileUp,
  FileVideo,
  FileVideo2,
  FileVideo2Icon: FileVideo2,
  FileVideoIcon: FileVideo,
  FileVolume,
  FileVolume2,
  FileVolume2Icon: FileVolume2,
  FileVolumeIcon: FileVolume,
  FileWarning,
  FileWarningIcon: FileWarning,
  FileX,
  FileX2,
  FileX2Icon: FileX2,
  FileXIcon: FileX,
  Files,
  FilesIcon: Files,
  Film,
  FilmIcon: Film,
  Filter,
  FilterIcon: Filter,
  FilterX,
  FilterXIcon: FilterX,
  Fingerprint,
  FingerprintIcon: Fingerprint,
  FireExtinguisher,
  FireExtinguisherIcon: FireExtinguisher,
  Fish,
  FishIcon: Fish,
  FishOff,
  FishOffIcon: FishOff,
  FishSymbol,
  FishSymbolIcon: FishSymbol,
  Flag,
  FlagIcon: Flag,
  FlagOff,
  FlagOffIcon: FlagOff,
  FlagTriangleLeft,
  FlagTriangleLeftIcon: FlagTriangleLeft,
  FlagTriangleRight,
  FlagTriangleRightIcon: FlagTriangleRight,
  Flame,
  FlameIcon: Flame,
  FlameKindling,
  FlameKindlingIcon: FlameKindling,
  Flashlight,
  FlashlightIcon: Flashlight,
  FlashlightOff,
  FlashlightOffIcon: FlashlightOff,
  FlaskConical,
  FlaskConicalIcon: FlaskConical,
  FlaskConicalOff,
  FlaskConicalOffIcon: FlaskConicalOff,
  FlaskRound,
  FlaskRoundIcon: FlaskRound,
  FlipHorizontal,
  FlipHorizontal2,
  FlipHorizontal2Icon: FlipHorizontal2,
  FlipHorizontalIcon: FlipHorizontal,
  FlipVertical,
  FlipVertical2,
  FlipVertical2Icon: FlipVertical2,
  FlipVerticalIcon: FlipVertical,
  Flower,
  Flower2,
  Flower2Icon: Flower2,
  FlowerIcon: Flower,
  Focus,
  FocusIcon: Focus,
  FoldHorizontal,
  FoldHorizontalIcon: FoldHorizontal,
  FoldVertical,
  FoldVerticalIcon: FoldVertical,
  Folder,
  FolderArchive,
  FolderArchiveIcon: FolderArchive,
  FolderCheck,
  FolderCheckIcon: FolderCheck,
  FolderClock,
  FolderClockIcon: FolderClock,
  FolderClosed,
  FolderClosedIcon: FolderClosed,
  FolderCog,
  FolderCog2: FolderCog,
  FolderCog2Icon: FolderCog,
  FolderCogIcon: FolderCog,
  FolderDot,
  FolderDotIcon: FolderDot,
  FolderDown,
  FolderDownIcon: FolderDown,
  FolderEdit: FolderPen,
  FolderEditIcon: FolderPen,
  FolderGit,
  FolderGit2,
  FolderGit2Icon: FolderGit2,
  FolderGitIcon: FolderGit,
  FolderHeart,
  FolderHeartIcon: FolderHeart,
  FolderIcon: Folder,
  FolderInput,
  FolderInputIcon: FolderInput,
  FolderKanban,
  FolderKanbanIcon: FolderKanban,
  FolderKey,
  FolderKeyIcon: FolderKey,
  FolderLock,
  FolderLockIcon: FolderLock,
  FolderMinus,
  FolderMinusIcon: FolderMinus,
  FolderOpen,
  FolderOpenDot,
  FolderOpenDotIcon: FolderOpenDot,
  FolderOpenIcon: FolderOpen,
  FolderOutput,
  FolderOutputIcon: FolderOutput,
  FolderPen,
  FolderPenIcon: FolderPen,
  FolderPlus,
  FolderPlusIcon: FolderPlus,
  FolderRoot,
  FolderRootIcon: FolderRoot,
  FolderSearch,
  FolderSearch2,
  FolderSearch2Icon: FolderSearch2,
  FolderSearchIcon: FolderSearch,
  FolderSymlink,
  FolderSymlinkIcon: FolderSymlink,
  FolderSync,
  FolderSyncIcon: FolderSync,
  FolderTree,
  FolderTreeIcon: FolderTree,
  FolderUp,
  FolderUpIcon: FolderUp,
  FolderX,
  FolderXIcon: FolderX,
  Folders,
  FoldersIcon: Folders,
  Footprints,
  FootprintsIcon: Footprints,
  Forklift,
  ForkliftIcon: Forklift,
  FormInput,
  FormInputIcon: FormInput,
  Forward,
  ForwardIcon: Forward,
  Frame,
  FrameIcon: Frame,
  Framer,
  FramerIcon: Framer,
  Frown,
  FrownIcon: Frown,
  Fuel,
  FuelIcon: Fuel,
  Fullscreen,
  FullscreenIcon: Fullscreen,
  FunctionSquare,
  FunctionSquareIcon: FunctionSquare,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryHorizontalEndIcon: GalleryHorizontalEnd,
  GalleryHorizontalIcon: GalleryHorizontal,
  GalleryThumbnails,
  GalleryThumbnailsIcon: GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  GalleryVerticalEndIcon: GalleryVerticalEnd,
  GalleryVerticalIcon: GalleryVertical,
  Gamepad,
  Gamepad2,
  Gamepad2Icon: Gamepad2,
  GamepadIcon: Gamepad,
  GanttChart,
  GanttChartIcon: GanttChart,
  GanttChartSquare,
  GanttChartSquareIcon: GanttChartSquare,
  GanttSquare: GanttChartSquare,
  GanttSquareIcon: GanttChartSquare,
  Gauge,
  GaugeCircle,
  GaugeCircleIcon: GaugeCircle,
  GaugeIcon: Gauge,
  Gavel,
  GavelIcon: Gavel,
  Gem,
  GemIcon: Gem,
  Ghost,
  GhostIcon: Ghost,
  Gift,
  GiftIcon: Gift,
  GitBranch,
  GitBranchIcon: GitBranch,
  GitBranchPlus,
  GitBranchPlusIcon: GitBranchPlus,
  GitCommit: GitCommitHorizontal,
  GitCommitHorizontal,
  GitCommitHorizontalIcon: GitCommitHorizontal,
  GitCommitIcon: GitCommitHorizontal,
  GitCommitVertical,
  GitCommitVerticalIcon: GitCommitVertical,
  GitCompare,
  GitCompareArrows,
  GitCompareArrowsIcon: GitCompareArrows,
  GitCompareIcon: GitCompare,
  GitFork,
  GitForkIcon: GitFork,
  GitGraph,
  GitGraphIcon: GitGraph,
  GitMerge,
  GitMergeIcon: GitMerge,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestArrowIcon: GitPullRequestArrow,
  GitPullRequestClosed,
  GitPullRequestClosedIcon: GitPullRequestClosed,
  GitPullRequestCreate,
  GitPullRequestCreateArrow,
  GitPullRequestCreateArrowIcon: GitPullRequestCreateArrow,
  GitPullRequestCreateIcon: GitPullRequestCreate,
  GitPullRequestDraft,
  GitPullRequestDraftIcon: GitPullRequestDraft,
  GitPullRequestIcon: GitPullRequest,
  Github,
  GithubIcon: Github,
  Gitlab,
  GitlabIcon: Gitlab,
  GlassWater,
  GlassWaterIcon: GlassWater,
  Glasses,
  GlassesIcon: Glasses,
  Globe,
  Globe2: Earth,
  Globe2Icon: Earth,
  GlobeIcon: Globe,
  GlobeLock,
  GlobeLockIcon: GlobeLock,
  Goal,
  GoalIcon: Goal,
  Grab,
  GrabIcon: Grab,
  GraduationCap,
  GraduationCapIcon: GraduationCap,
  Grape,
  GrapeIcon: Grape,
  Grid: Grid3x3,
  Grid2X2: Grid2x2,
  Grid2X2Icon: Grid2x2,
  Grid2x2,
  Grid2x2Icon: Grid2x2,
  Grid3X3: Grid3x3,
  Grid3X3Icon: Grid3x3,
  Grid3x3,
  Grid3x3Icon: Grid3x3,
  GridIcon: Grid3x3,
  Grip,
  GripHorizontal,
  GripHorizontalIcon: GripHorizontal,
  GripIcon: Grip,
  GripVertical,
  GripVerticalIcon: GripVertical,
  Group,
  GroupIcon: Group,
  Guitar,
  GuitarIcon: Guitar,
  Hammer,
  HammerIcon: Hammer,
  Hand,
  HandCoins,
  HandCoinsIcon: HandCoins,
  HandHeart,
  HandHeartIcon: HandHeart,
  HandHelping,
  HandHelpingIcon: HandHelping,
  HandIcon: Hand,
  HandMetal,
  HandMetalIcon: HandMetal,
  HandPlatter,
  HandPlatterIcon: HandPlatter,
  Handshake,
  HandshakeIcon: Handshake,
  HardDrive,
  HardDriveDownload,
  HardDriveDownloadIcon: HardDriveDownload,
  HardDriveIcon: HardDrive,
  HardDriveUpload,
  HardDriveUploadIcon: HardDriveUpload,
  HardHat,
  HardHatIcon: HardHat,
  Hash,
  HashIcon: Hash,
  Haze,
  HazeIcon: Haze,
  HdmiPort,
  HdmiPortIcon: HdmiPort,
  Heading,
  Heading1,
  Heading1Icon: Heading1,
  Heading2,
  Heading2Icon: Heading2,
  Heading3,
  Heading3Icon: Heading3,
  Heading4,
  Heading4Icon: Heading4,
  Heading5,
  Heading5Icon: Heading5,
  Heading6,
  Heading6Icon: Heading6,
  HeadingIcon: Heading,
  Headphones,
  HeadphonesIcon: Headphones,
  Headset,
  HeadsetIcon: Headset,
  Heart,
  HeartCrack,
  HeartCrackIcon: HeartCrack,
  HeartHandshake,
  HeartHandshakeIcon: HeartHandshake,
  HeartIcon: Heart,
  HeartOff,
  HeartOffIcon: HeartOff,
  HeartPulse,
  HeartPulseIcon: HeartPulse,
  Heater,
  HeaterIcon: Heater,
  HelpCircle,
  HelpCircleIcon: HelpCircle,
  HelpingHand: HandHelping,
  HelpingHandIcon: HandHelping,
  Hexagon,
  HexagonIcon: Hexagon,
  Highlighter,
  HighlighterIcon: Highlighter,
  History,
  HistoryIcon: History,
  Home,
  HomeIcon: Home,
  Hop,
  HopIcon: Hop,
  HopOff,
  HopOffIcon: HopOff,
  Hotel,
  HotelIcon: Hotel,
  Hourglass,
  HourglassIcon: Hourglass,
  IceCream,
  IceCream2,
  IceCream2Icon: IceCream2,
  IceCreamIcon: IceCream,
  Image,
  ImageDown,
  ImageDownIcon: ImageDown,
  ImageIcon: Image,
  ImageMinus,
  ImageMinusIcon: ImageMinus,
  ImageOff,
  ImageOffIcon: ImageOff,
  ImagePlus,
  ImagePlusIcon: ImagePlus,
  ImageUp,
  ImageUpIcon: ImageUp,
  Images,
  ImagesIcon: Images,
  Import,
  ImportIcon: Import,
  Inbox,
  InboxIcon: Inbox,
  Indent,
  IndentIcon: Indent,
  IndianRupee,
  IndianRupeeIcon: IndianRupee,
  Infinity,
  InfinityIcon: Infinity,
  Info,
  InfoIcon: Info,
  Inspect: MousePointerSquare,
  InspectIcon: MousePointerSquare,
  InspectionPanel,
  InspectionPanelIcon: InspectionPanel,
  Instagram,
  InstagramIcon: Instagram,
  Italic,
  ItalicIcon: Italic,
  IterationCcw,
  IterationCcwIcon: IterationCcw,
  IterationCw,
  IterationCwIcon: IterationCw,
  JapaneseYen,
  JapaneseYenIcon: JapaneseYen,
  Joystick,
  JoystickIcon: Joystick,
  Kanban,
  KanbanIcon: Kanban,
  KanbanSquare,
  KanbanSquareDashed,
  KanbanSquareDashedIcon: KanbanSquareDashed,
  KanbanSquareIcon: KanbanSquare,
  Key,
  KeyIcon: Key,
  KeyRound,
  KeyRoundIcon: KeyRound,
  KeySquare,
  KeySquareIcon: KeySquare,
  Keyboard,
  KeyboardIcon: Keyboard,
  KeyboardMusic,
  KeyboardMusicIcon: KeyboardMusic,
  Lamp,
  LampCeiling,
  LampCeilingIcon: LampCeiling,
  LampDesk,
  LampDeskIcon: LampDesk,
  LampFloor,
  LampFloorIcon: LampFloor,
  LampIcon: Lamp,
  LampWallDown,
  LampWallDownIcon: LampWallDown,
  LampWallUp,
  LampWallUpIcon: LampWallUp,
  LandPlot,
  LandPlotIcon: LandPlot,
  Landmark,
  LandmarkIcon: Landmark,
  Languages,
  LanguagesIcon: Languages,
  Laptop,
  Laptop2,
  Laptop2Icon: Laptop2,
  LaptopIcon: Laptop,
  Lasso,
  LassoIcon: Lasso,
  LassoSelect,
  LassoSelectIcon: LassoSelect,
  Laugh,
  LaughIcon: Laugh,
  Layers,
  Layers2,
  Layers2Icon: Layers2,
  Layers3,
  Layers3Icon: Layers3,
  LayersIcon: Layers,
  Layout: PanelsTopLeft,
  LayoutDashboard,
  LayoutDashboardIcon: LayoutDashboard,
  LayoutGrid,
  LayoutGridIcon: LayoutGrid,
  LayoutIcon: PanelsTopLeft,
  LayoutList,
  LayoutListIcon: LayoutList,
  LayoutPanelLeft,
  LayoutPanelLeftIcon: LayoutPanelLeft,
  LayoutPanelTop,
  LayoutPanelTopIcon: LayoutPanelTop,
  LayoutTemplate,
  LayoutTemplateIcon: LayoutTemplate,
  Leaf,
  LeafIcon: Leaf,
  LeafyGreen,
  LeafyGreenIcon: LeafyGreen,
  Library,
  LibraryBig,
  LibraryBigIcon: LibraryBig,
  LibraryIcon: Library,
  LibrarySquare,
  LibrarySquareIcon: LibrarySquare,
  LifeBuoy,
  LifeBuoyIcon: LifeBuoy,
  Ligature,
  LigatureIcon: Ligature,
  Lightbulb,
  LightbulbIcon: Lightbulb,
  LightbulbOff,
  LightbulbOffIcon: LightbulbOff,
  LineChart,
  LineChartIcon: LineChart,
  Link,
  Link2,
  Link2Icon: Link2,
  Link2Off,
  Link2OffIcon: Link2Off,
  LinkIcon: Link,
  Linkedin,
  LinkedinIcon: Linkedin,
  List,
  ListChecks,
  ListChecksIcon: ListChecks,
  ListCollapse,
  ListCollapseIcon: ListCollapse,
  ListEnd,
  ListEndIcon: ListEnd,
  ListFilter,
  ListFilterIcon: ListFilter,
  ListIcon: List,
  ListMinus,
  ListMinusIcon: ListMinus,
  ListMusic,
  ListMusicIcon: ListMusic,
  ListOrdered,
  ListOrderedIcon: ListOrdered,
  ListPlus,
  ListPlusIcon: ListPlus,
  ListRestart,
  ListRestartIcon: ListRestart,
  ListStart,
  ListStartIcon: ListStart,
  ListTodo,
  ListTodoIcon: ListTodo,
  ListTree,
  ListTreeIcon: ListTree,
  ListVideo,
  ListVideoIcon: ListVideo,
  ListX,
  ListXIcon: ListX,
  Loader,
  Loader2,
  Loader2Icon: Loader2,
  LoaderIcon: Loader,
  Locate,
  LocateFixed,
  LocateFixedIcon: LocateFixed,
  LocateIcon: Locate,
  LocateOff,
  LocateOffIcon: LocateOff,
  Lock,
  LockIcon: Lock,
  LockKeyhole,
  LockKeyholeIcon: LockKeyhole,
  LogIn,
  LogInIcon: LogIn,
  LogOut,
  LogOutIcon: LogOut,
  Lollipop,
  LollipopIcon: Lollipop,
  LucideAArrowDown: AArrowDown,
  LucideAArrowUp: AArrowUp,
  LucideALargeSmall: ALargeSmall,
  LucideAccessibility: Accessibility,
  LucideActivity: Activity,
  LucideActivitySquare: ActivitySquare,
  LucideAirVent: AirVent,
  LucideAirplay: Airplay,
  LucideAlarmCheck: AlarmClockCheck,
  LucideAlarmClock: AlarmClock,
  LucideAlarmClockCheck: AlarmClockCheck,
  LucideAlarmClockMinus: AlarmClockMinus,
  LucideAlarmClockOff: AlarmClockOff,
  LucideAlarmClockPlus: AlarmClockPlus,
  LucideAlarmMinus: AlarmClockMinus,
  LucideAlarmPlus: AlarmClockPlus,
  LucideAlarmSmoke: AlarmSmoke,
  LucideAlbum: Album,
  LucideAlertCircle: AlertCircle,
  LucideAlertOctagon: AlertOctagon,
  LucideAlertTriangle: AlertTriangle,
  LucideAlignCenter: AlignCenter,
  LucideAlignCenterHorizontal: AlignCenterHorizontal,
  LucideAlignCenterVertical: AlignCenterVertical,
  LucideAlignEndHorizontal: AlignEndHorizontal,
  LucideAlignEndVertical: AlignEndVertical,
  LucideAlignHorizontalDistributeCenter: AlignHorizontalDistributeCenter,
  LucideAlignHorizontalDistributeEnd: AlignHorizontalDistributeEnd,
  LucideAlignHorizontalDistributeStart: AlignHorizontalDistributeStart,
  LucideAlignHorizontalJustifyCenter: AlignHorizontalJustifyCenter,
  LucideAlignHorizontalJustifyEnd: AlignHorizontalJustifyEnd,
  LucideAlignHorizontalJustifyStart: AlignHorizontalJustifyStart,
  LucideAlignHorizontalSpaceAround: AlignHorizontalSpaceAround,
  LucideAlignHorizontalSpaceBetween: AlignHorizontalSpaceBetween,
  LucideAlignJustify: AlignJustify,
  LucideAlignLeft: AlignLeft,
  LucideAlignRight: AlignRight,
  LucideAlignStartHorizontal: AlignStartHorizontal,
  LucideAlignStartVertical: AlignStartVertical,
  LucideAlignVerticalDistributeCenter: AlignVerticalDistributeCenter,
  LucideAlignVerticalDistributeEnd: AlignVerticalDistributeEnd,
  LucideAlignVerticalDistributeStart: AlignVerticalDistributeStart,
  LucideAlignVerticalJustifyCenter: AlignVerticalJustifyCenter,
  LucideAlignVerticalJustifyEnd: AlignVerticalJustifyEnd,
  LucideAlignVerticalJustifyStart: AlignVerticalJustifyStart,
  LucideAlignVerticalSpaceAround: AlignVerticalSpaceAround,
  LucideAlignVerticalSpaceBetween: AlignVerticalSpaceBetween,
  LucideAmbulance: Ambulance,
  LucideAmpersand: Ampersand,
  LucideAmpersands: Ampersands,
  LucideAnchor: Anchor,
  LucideAngry: Angry,
  LucideAnnoyed: Annoyed,
  LucideAntenna: Antenna,
  LucideAnvil: Anvil,
  LucideAperture: Aperture,
  LucideAppWindow: AppWindow,
  LucideApple: Apple,
  LucideArchive: Archive,
  LucideArchiveRestore: ArchiveRestore,
  LucideArchiveX: ArchiveX,
  LucideAreaChart: AreaChart,
  LucideArmchair: Armchair,
  LucideArrowBigDown: ArrowBigDown,
  LucideArrowBigDownDash: ArrowBigDownDash,
  LucideArrowBigLeft: ArrowBigLeft,
  LucideArrowBigLeftDash: ArrowBigLeftDash,
  LucideArrowBigRight: ArrowBigRight,
  LucideArrowBigRightDash: ArrowBigRightDash,
  LucideArrowBigUp: ArrowBigUp,
  LucideArrowBigUpDash: ArrowBigUpDash,
  LucideArrowDown: ArrowDown,
  LucideArrowDown01: ArrowDown01,
  LucideArrowDown10: ArrowDown10,
  LucideArrowDownAZ: ArrowDownAZ,
  LucideArrowDownAz: ArrowDownAZ,
  LucideArrowDownCircle: ArrowDownCircle,
  LucideArrowDownFromLine: ArrowDownFromLine,
  LucideArrowDownLeft: ArrowDownLeft,
  LucideArrowDownLeftFromCircle: ArrowDownLeftFromCircle,
  LucideArrowDownLeftFromSquare: ArrowDownLeftFromSquare,
  LucideArrowDownLeftSquare: ArrowDownLeftSquare,
  LucideArrowDownNarrowWide: ArrowDownNarrowWide,
  LucideArrowDownRight: ArrowDownRight,
  LucideArrowDownRightFromCircle: ArrowDownRightFromCircle,
  LucideArrowDownRightFromSquare: ArrowDownRightFromSquare,
  LucideArrowDownRightSquare: ArrowDownRightSquare,
  LucideArrowDownSquare: ArrowDownSquare,
  LucideArrowDownToDot: ArrowDownToDot,
  LucideArrowDownToLine: ArrowDownToLine,
  LucideArrowDownUp: ArrowDownUp,
  LucideArrowDownWideNarrow: ArrowDownWideNarrow,
  LucideArrowDownZA: ArrowDownZA,
  LucideArrowDownZa: ArrowDownZA,
  LucideArrowLeft: ArrowLeft,
  LucideArrowLeftCircle: ArrowLeftCircle,
  LucideArrowLeftFromLine: ArrowLeftFromLine,
  LucideArrowLeftRight: ArrowLeftRight,
  LucideArrowLeftSquare: ArrowLeftSquare,
  LucideArrowLeftToLine: ArrowLeftToLine,
  LucideArrowRight: ArrowRight,
  LucideArrowRightCircle: ArrowRightCircle,
  LucideArrowRightFromLine: ArrowRightFromLine,
  LucideArrowRightLeft: ArrowRightLeft,
  LucideArrowRightSquare: ArrowRightSquare,
  LucideArrowRightToLine: ArrowRightToLine,
  LucideArrowUp: ArrowUp,
  LucideArrowUp01: ArrowUp01,
  LucideArrowUp10: ArrowUp10,
  LucideArrowUpAZ: ArrowUpAZ,
  LucideArrowUpAz: ArrowUpAZ,
  LucideArrowUpCircle: ArrowUpCircle,
  LucideArrowUpDown: ArrowUpDown,
  LucideArrowUpFromDot: ArrowUpFromDot,
  LucideArrowUpFromLine: ArrowUpFromLine,
  LucideArrowUpLeft: ArrowUpLeft,
  LucideArrowUpLeftFromCircle: ArrowUpLeftFromCircle,
  LucideArrowUpLeftFromSquare: ArrowUpLeftFromSquare,
  LucideArrowUpLeftSquare: ArrowUpLeftSquare,
  LucideArrowUpNarrowWide: ArrowUpNarrowWide,
  LucideArrowUpRight: ArrowUpRight,
  LucideArrowUpRightFromCircle: ArrowUpRightFromCircle,
  LucideArrowUpRightFromSquare: ArrowUpRightFromSquare,
  LucideArrowUpRightSquare: ArrowUpRightSquare,
  LucideArrowUpSquare: ArrowUpSquare,
  LucideArrowUpToLine: ArrowUpToLine,
  LucideArrowUpWideNarrow: ArrowUpWideNarrow,
  LucideArrowUpZA: ArrowUpZA,
  LucideArrowUpZa: ArrowUpZA,
  LucideArrowsUpFromLine: ArrowsUpFromLine,
  LucideAsterisk: Asterisk,
  LucideAsteriskSquare: AsteriskSquare,
  LucideAtSign: AtSign,
  LucideAtom: Atom,
  LucideAudioLines: AudioLines,
  LucideAudioWaveform: AudioWaveform,
  LucideAward: Award,
  LucideAxe: Axe,
  LucideAxis3D: Axis3d,
  LucideAxis3d: Axis3d,
  LucideBaby: Baby,
  LucideBackpack: Backpack,
  LucideBadge: Badge,
  LucideBadgeAlert: BadgeAlert,
  LucideBadgeCent: BadgeCent,
  LucideBadgeCheck: BadgeCheck,
  LucideBadgeDollarSign: BadgeDollarSign,
  LucideBadgeEuro: BadgeEuro,
  LucideBadgeHelp: BadgeHelp,
  LucideBadgeIndianRupee: BadgeIndianRupee,
  LucideBadgeInfo: BadgeInfo,
  LucideBadgeJapaneseYen: BadgeJapaneseYen,
  LucideBadgeMinus: BadgeMinus,
  LucideBadgePercent: BadgePercent,
  LucideBadgePlus: BadgePlus,
  LucideBadgePoundSterling: BadgePoundSterling,
  LucideBadgeRussianRuble: BadgeRussianRuble,
  LucideBadgeSwissFranc: BadgeSwissFranc,
  LucideBadgeX: BadgeX,
  LucideBaggageClaim: BaggageClaim,
  LucideBan: Ban,
  LucideBanana: Banana,
  LucideBanknote: Banknote,
  LucideBarChart: BarChart,
  LucideBarChart2: BarChart2,
  LucideBarChart3: BarChart3,
  LucideBarChart4: BarChart4,
  LucideBarChartBig: BarChartBig,
  LucideBarChartHorizontal: BarChartHorizontal,
  LucideBarChartHorizontalBig: BarChartHorizontalBig,
  LucideBarcode: Barcode,
  LucideBaseline: Baseline,
  LucideBath: Bath,
  LucideBattery: Battery,
  LucideBatteryCharging: BatteryCharging,
  LucideBatteryFull: BatteryFull,
  LucideBatteryLow: BatteryLow,
  LucideBatteryMedium: BatteryMedium,
  LucideBatteryWarning: BatteryWarning,
  LucideBeaker: Beaker,
  LucideBean: Bean,
  LucideBeanOff: BeanOff,
  LucideBed: Bed,
  LucideBedDouble: BedDouble,
  LucideBedSingle: BedSingle,
  LucideBeef: Beef,
  LucideBeer: Beer,
  LucideBell: Bell,
  LucideBellDot: BellDot,
  LucideBellElectric: BellElectric,
  LucideBellMinus: BellMinus,
  LucideBellOff: BellOff,
  LucideBellPlus: BellPlus,
  LucideBellRing: BellRing,
  LucideBetweenHorizonalEnd: BetweenHorizontalEnd,
  LucideBetweenHorizonalStart: BetweenHorizontalStart,
  LucideBetweenHorizontalEnd: BetweenHorizontalEnd,
  LucideBetweenHorizontalStart: BetweenHorizontalStart,
  LucideBetweenVerticalEnd: BetweenVerticalEnd,
  LucideBetweenVerticalStart: BetweenVerticalStart,
  LucideBike: Bike,
  LucideBinary: Binary,
  LucideBiohazard: Biohazard,
  LucideBird: Bird,
  LucideBitcoin: Bitcoin,
  LucideBlend: Blend,
  LucideBlinds: Blinds,
  LucideBlocks: Blocks,
  LucideBluetooth: Bluetooth,
  LucideBluetoothConnected: BluetoothConnected,
  LucideBluetoothOff: BluetoothOff,
  LucideBluetoothSearching: BluetoothSearching,
  LucideBold: Bold,
  LucideBolt: Bolt,
  LucideBomb: Bomb,
  LucideBone: Bone,
  LucideBook: Book,
  LucideBookA: BookA,
  LucideBookAudio: BookAudio,
  LucideBookCheck: BookCheck,
  LucideBookCopy: BookCopy,
  LucideBookDashed: BookDashed,
  LucideBookDown: BookDown,
  LucideBookHeadphones: BookHeadphones,
  LucideBookHeart: BookHeart,
  LucideBookImage: BookImage,
  LucideBookKey: BookKey,
  LucideBookLock: BookLock,
  LucideBookMarked: BookMarked,
  LucideBookMinus: BookMinus,
  LucideBookOpen: BookOpen,
  LucideBookOpenCheck: BookOpenCheck,
  LucideBookOpenText: BookOpenText,
  LucideBookPlus: BookPlus,
  LucideBookTemplate: BookDashed,
  LucideBookText: BookText,
  LucideBookType: BookType,
  LucideBookUp: BookUp,
  LucideBookUp2: BookUp2,
  LucideBookUser: BookUser,
  LucideBookX: BookX,
  LucideBookmark: Bookmark,
  LucideBookmarkCheck: BookmarkCheck,
  LucideBookmarkMinus: BookmarkMinus,
  LucideBookmarkPlus: BookmarkPlus,
  LucideBookmarkX: BookmarkX,
  LucideBoomBox: BoomBox,
  LucideBot: Bot,
  LucideBotMessageSquare: BotMessageSquare,
  LucideBox: Box,
  LucideBoxSelect: BoxSelect,
  LucideBoxes: Boxes,
  LucideBraces: Braces,
  LucideBrackets: Brackets,
  LucideBrain: Brain,
  LucideBrainCircuit: BrainCircuit,
  LucideBrainCog: BrainCog,
  LucideBrickWall: BrickWall,
  LucideBriefcase: Briefcase,
  LucideBringToFront: BringToFront,
  LucideBrush: Brush,
  LucideBug: Bug,
  LucideBugOff: BugOff,
  LucideBugPlay: BugPlay,
  LucideBuilding: Building,
  LucideBuilding2: Building2,
  LucideBus: Bus,
  LucideBusFront: BusFront,
  LucideCable: Cable,
  LucideCableCar: CableCar,
  LucideCake: Cake,
  LucideCakeSlice: CakeSlice,
  LucideCalculator: Calculator,
  LucideCalendar: Calendar,
  LucideCalendarCheck: CalendarCheck,
  LucideCalendarCheck2: CalendarCheck2,
  LucideCalendarClock: CalendarClock,
  LucideCalendarDays: CalendarDays,
  LucideCalendarFold: CalendarFold,
  LucideCalendarHeart: CalendarHeart,
  LucideCalendarMinus: CalendarMinus,
  LucideCalendarMinus2: CalendarMinus2,
  LucideCalendarOff: CalendarOff,
  LucideCalendarPlus: CalendarPlus,
  LucideCalendarPlus2: CalendarPlus2,
  LucideCalendarRange: CalendarRange,
  LucideCalendarSearch: CalendarSearch,
  LucideCalendarX: CalendarX,
  LucideCalendarX2: CalendarX2,
  LucideCamera: Camera,
  LucideCameraOff: CameraOff,
  LucideCandlestickChart: CandlestickChart,
  LucideCandy: Candy,
  LucideCandyCane: CandyCane,
  LucideCandyOff: CandyOff,
  LucideCaptions: Captions,
  LucideCaptionsOff: CaptionsOff,
  LucideCar: Car,
  LucideCarFront: CarFront,
  LucideCarTaxiFront: CarTaxiFront,
  LucideCaravan: Caravan,
  LucideCarrot: Carrot,
  LucideCaseLower: CaseLower,
  LucideCaseSensitive: CaseSensitive,
  LucideCaseUpper: CaseUpper,
  LucideCassetteTape: CassetteTape,
  LucideCast: Cast,
  LucideCastle: Castle,
  LucideCat: Cat,
  LucideCctv: Cctv,
  LucideCheck: Check,
  LucideCheckCheck: CheckCheck,
  LucideCheckCircle: CheckCircle,
  LucideCheckCircle2: CheckCircle2,
  LucideCheckSquare: CheckSquare,
  LucideCheckSquare2: CheckSquare2,
  LucideChefHat: ChefHat,
  LucideCherry: Cherry,
  LucideChevronDown: ChevronDown,
  LucideChevronDownCircle: ChevronDownCircle,
  LucideChevronDownSquare: ChevronDownSquare,
  LucideChevronFirst: ChevronFirst,
  LucideChevronLast: ChevronLast,
  LucideChevronLeft: ChevronLeft,
  LucideChevronLeftCircle: ChevronLeftCircle,
  LucideChevronLeftSquare: ChevronLeftSquare,
  LucideChevronRight: ChevronRight,
  LucideChevronRightCircle: ChevronRightCircle,
  LucideChevronRightSquare: ChevronRightSquare,
  LucideChevronUp: ChevronUp,
  LucideChevronUpCircle: ChevronUpCircle,
  LucideChevronUpSquare: ChevronUpSquare,
  LucideChevronsDown: ChevronsDown,
  LucideChevronsDownUp: ChevronsDownUp,
  LucideChevronsLeft: ChevronsLeft,
  LucideChevronsLeftRight: ChevronsLeftRight,
  LucideChevronsRight: ChevronsRight,
  LucideChevronsRightLeft: ChevronsRightLeft,
  LucideChevronsUp: ChevronsUp,
  LucideChevronsUpDown: ChevronsUpDown,
  LucideChrome: Chrome,
  LucideChurch: Church,
  LucideCigarette: Cigarette,
  LucideCigaretteOff: CigaretteOff,
  LucideCircle: Circle,
  LucideCircleDashed: CircleDashed,
  LucideCircleDollarSign: CircleDollarSign,
  LucideCircleDot: CircleDot,
  LucideCircleDotDashed: CircleDotDashed,
  LucideCircleEllipsis: CircleEllipsis,
  LucideCircleEqual: CircleEqual,
  LucideCircleFadingPlus: CircleFadingPlus,
  LucideCircleOff: CircleOff,
  LucideCircleSlash: CircleSlash,
  LucideCircleSlash2: CircleSlash2,
  LucideCircleSlashed: CircleSlash2,
  LucideCircleUser: CircleUser,
  LucideCircleUserRound: CircleUserRound,
  LucideCircuitBoard: CircuitBoard,
  LucideCitrus: Citrus,
  LucideClapperboard: Clapperboard,
  LucideClipboard: Clipboard,
  LucideClipboardCheck: ClipboardCheck,
  LucideClipboardCopy: ClipboardCopy,
  LucideClipboardEdit: ClipboardPen,
  LucideClipboardList: ClipboardList,
  LucideClipboardMinus: ClipboardMinus,
  LucideClipboardPaste: ClipboardPaste,
  LucideClipboardPen: ClipboardPen,
  LucideClipboardPenLine: ClipboardPenLine,
  LucideClipboardPlus: ClipboardPlus,
  LucideClipboardSignature: ClipboardPenLine,
  LucideClipboardType: ClipboardType,
  LucideClipboardX: ClipboardX,
  LucideClock: Clock,
  LucideClock1: Clock1,
  LucideClock10: Clock10,
  LucideClock11: Clock11,
  LucideClock12: Clock12,
  LucideClock2: Clock2,
  LucideClock3: Clock3,
  LucideClock4: Clock4,
  LucideClock5: Clock5,
  LucideClock6: Clock6,
  LucideClock7: Clock7,
  LucideClock8: Clock8,
  LucideClock9: Clock9,
  LucideCloud: Cloud,
  LucideCloudCog: CloudCog,
  LucideCloudDrizzle: CloudDrizzle,
  LucideCloudFog: CloudFog,
  LucideCloudHail: CloudHail,
  LucideCloudLightning: CloudLightning,
  LucideCloudMoon: CloudMoon,
  LucideCloudMoonRain: CloudMoonRain,
  LucideCloudOff: CloudOff,
  LucideCloudRain: CloudRain,
  LucideCloudRainWind: CloudRainWind,
  LucideCloudSnow: CloudSnow,
  LucideCloudSun: CloudSun,
  LucideCloudSunRain: CloudSunRain,
  LucideCloudy: Cloudy,
  LucideClover: Clover,
  LucideClub: Club,
  LucideCode: Code,
  LucideCode2: Code2,
  LucideCodeSquare: CodeSquare,
  LucideCodepen: Codepen,
  LucideCodesandbox: Codesandbox,
  LucideCoffee: Coffee,
  LucideCog: Cog,
  LucideCoins: Coins,
  LucideColumns: Columns2,
  LucideColumns2: Columns2,
  LucideColumns3: Columns3,
  LucideColumns4: Columns4,
  LucideCombine: Combine,
  LucideCommand: Command,
  LucideCompass: Compass,
  LucideComponent: Component,
  LucideComputer: Computer,
  LucideConciergeBell: ConciergeBell,
  LucideCone: Cone,
  LucideConstruction: Construction,
  LucideContact: Contact,
  LucideContact2: Contact2,
  LucideContainer: Container,
  LucideContrast: Contrast,
  LucideCookie: Cookie,
  LucideCookingPot: CookingPot,
  LucideCopy: Copy,
  LucideCopyCheck: CopyCheck,
  LucideCopyMinus: CopyMinus,
  LucideCopyPlus: CopyPlus,
  LucideCopySlash: CopySlash,
  LucideCopyX: CopyX,
  LucideCopyleft: Copyleft,
  LucideCopyright: Copyright,
  LucideCornerDownLeft: CornerDownLeft,
  LucideCornerDownRight: CornerDownRight,
  LucideCornerLeftDown: CornerLeftDown,
  LucideCornerLeftUp: CornerLeftUp,
  LucideCornerRightDown: CornerRightDown,
  LucideCornerRightUp: CornerRightUp,
  LucideCornerUpLeft: CornerUpLeft,
  LucideCornerUpRight: CornerUpRight,
  LucideCpu: Cpu,
  LucideCreativeCommons: CreativeCommons,
  LucideCreditCard: CreditCard,
  LucideCroissant: Croissant,
  LucideCrop: Crop,
  LucideCross: Cross,
  LucideCrosshair: Crosshair,
  LucideCrown: Crown,
  LucideCuboid: Cuboid,
  LucideCupSoda: CupSoda,
  LucideCurlyBraces: Braces,
  LucideCurrency: Currency,
  LucideCylinder: Cylinder,
  LucideDatabase: Database,
  LucideDatabaseBackup: DatabaseBackup,
  LucideDatabaseZap: DatabaseZap,
  LucideDelete: Delete,
  LucideDessert: Dessert,
  LucideDiameter: Diameter,
  LucideDiamond: Diamond,
  LucideDice1: Dice1,
  LucideDice2: Dice2,
  LucideDice3: Dice3,
  LucideDice4: Dice4,
  LucideDice5: Dice5,
  LucideDice6: Dice6,
  LucideDices: Dices,
  LucideDiff: Diff,
  LucideDisc: Disc,
  LucideDisc2: Disc2,
  LucideDisc3: Disc3,
  LucideDiscAlbum: DiscAlbum,
  LucideDivide: Divide,
  LucideDivideCircle: DivideCircle,
  LucideDivideSquare: DivideSquare,
  LucideDna: Dna,
  LucideDnaOff: DnaOff,
  LucideDog: Dog,
  LucideDollarSign: DollarSign,
  LucideDonut: Donut,
  LucideDoorClosed: DoorClosed,
  LucideDoorOpen: DoorOpen,
  LucideDot: Dot,
  LucideDotSquare: DotSquare,
  LucideDownload: Download,
  LucideDownloadCloud: DownloadCloud,
  LucideDraftingCompass: DraftingCompass,
  LucideDrama: Drama,
  LucideDribbble: Dribbble,
  LucideDrill: Drill,
  LucideDroplet: Droplet,
  LucideDroplets: Droplets,
  LucideDrum: Drum,
  LucideDrumstick: Drumstick,
  LucideDumbbell: Dumbbell,
  LucideEar: Ear,
  LucideEarOff: EarOff,
  LucideEarth: Earth,
  LucideEarthLock: EarthLock,
  LucideEclipse: Eclipse,
  LucideEdit: SquarePen,
  LucideEdit2: Pen,
  LucideEdit3: PenLine,
  LucideEgg: Egg,
  LucideEggFried: EggFried,
  LucideEggOff: EggOff,
  LucideEqual: Equal,
  LucideEqualNot: EqualNot,
  LucideEqualSquare: EqualSquare,
  LucideEraser: Eraser,
  LucideEuro: Euro,
  LucideExpand: Expand,
  LucideExternalLink: ExternalLink,
  LucideEye: Eye,
  LucideEyeOff: EyeOff,
  LucideFacebook: Facebook,
  LucideFactory: Factory,
  LucideFan: Fan,
  LucideFastForward: FastForward,
  LucideFeather: Feather,
  LucideFence: Fence,
  LucideFerrisWheel: FerrisWheel,
  LucideFigma: Figma,
  LucideFile: File,
  LucideFileArchive: FileArchive,
  LucideFileAudio: FileAudio,
  LucideFileAudio2: FileAudio2,
  LucideFileAxis3D: FileAxis3d,
  LucideFileAxis3d: FileAxis3d,
  LucideFileBadge: FileBadge,
  LucideFileBadge2: FileBadge2,
  LucideFileBarChart: FileBarChart,
  LucideFileBarChart2: FileBarChart2,
  LucideFileBox: FileBox,
  LucideFileCheck: FileCheck,
  LucideFileCheck2: FileCheck2,
  LucideFileClock: FileClock,
  LucideFileCode: FileCode,
  LucideFileCode2: FileCode2,
  LucideFileCog: FileCog,
  LucideFileCog2: FileCog,
  LucideFileDiff: FileDiff,
  LucideFileDigit: FileDigit,
  LucideFileDown: FileDown,
  LucideFileEdit: FilePen,
  LucideFileHeart: FileHeart,
  LucideFileImage: FileImage,
  LucideFileInput: FileInput,
  LucideFileJson: FileJson,
  LucideFileJson2: FileJson2,
  LucideFileKey: FileKey,
  LucideFileKey2: FileKey2,
  LucideFileLineChart: FileLineChart,
  LucideFileLock: FileLock,
  LucideFileLock2: FileLock2,
  LucideFileMinus: FileMinus,
  LucideFileMinus2: FileMinus2,
  LucideFileMusic: FileMusic,
  LucideFileOutput: FileOutput,
  LucideFilePen: FilePen,
  LucideFilePenLine: FilePenLine,
  LucideFilePieChart: FilePieChart,
  LucideFilePlus: FilePlus,
  LucideFilePlus2: FilePlus2,
  LucideFileQuestion: FileQuestion,
  LucideFileScan: FileScan,
  LucideFileSearch: FileSearch,
  LucideFileSearch2: FileSearch2,
  LucideFileSignature: FilePenLine,
  LucideFileSliders: FileSliders,
  LucideFileSpreadsheet: FileSpreadsheet,
  LucideFileStack: FileStack,
  LucideFileSymlink: FileSymlink,
  LucideFileTerminal: FileTerminal,
  LucideFileText: FileText,
  LucideFileType: FileType,
  LucideFileType2: FileType2,
  LucideFileUp: FileUp,
  LucideFileVideo: FileVideo,
  LucideFileVideo2: FileVideo2,
  LucideFileVolume: FileVolume,
  LucideFileVolume2: FileVolume2,
  LucideFileWarning: FileWarning,
  LucideFileX: FileX,
  LucideFileX2: FileX2,
  LucideFiles: Files,
  LucideFilm: Film,
  LucideFilter: Filter,
  LucideFilterX: FilterX,
  LucideFingerprint: Fingerprint,
  LucideFireExtinguisher: FireExtinguisher,
  LucideFish: Fish,
  LucideFishOff: FishOff,
  LucideFishSymbol: FishSymbol,
  LucideFlag: Flag,
  LucideFlagOff: FlagOff,
  LucideFlagTriangleLeft: FlagTriangleLeft,
  LucideFlagTriangleRight: FlagTriangleRight,
  LucideFlame: Flame,
  LucideFlameKindling: FlameKindling,
  LucideFlashlight: Flashlight,
  LucideFlashlightOff: FlashlightOff,
  LucideFlaskConical: FlaskConical,
  LucideFlaskConicalOff: FlaskConicalOff,
  LucideFlaskRound: FlaskRound,
  LucideFlipHorizontal: FlipHorizontal,
  LucideFlipHorizontal2: FlipHorizontal2,
  LucideFlipVertical: FlipVertical,
  LucideFlipVertical2: FlipVertical2,
  LucideFlower: Flower,
  LucideFlower2: Flower2,
  LucideFocus: Focus,
  LucideFoldHorizontal: FoldHorizontal,
  LucideFoldVertical: FoldVertical,
  LucideFolder: Folder,
  LucideFolderArchive: FolderArchive,
  LucideFolderCheck: FolderCheck,
  LucideFolderClock: FolderClock,
  LucideFolderClosed: FolderClosed,
  LucideFolderCog: FolderCog,
  LucideFolderCog2: FolderCog,
  LucideFolderDot: FolderDot,
  LucideFolderDown: FolderDown,
  LucideFolderEdit: FolderPen,
  LucideFolderGit: FolderGit,
  LucideFolderGit2: FolderGit2,
  LucideFolderHeart: FolderHeart,
  LucideFolderInput: FolderInput,
  LucideFolderKanban: FolderKanban,
  LucideFolderKey: FolderKey,
  LucideFolderLock: FolderLock,
  LucideFolderMinus: FolderMinus,
  LucideFolderOpen: FolderOpen,
  LucideFolderOpenDot: FolderOpenDot,
  LucideFolderOutput: FolderOutput,
  LucideFolderPen: FolderPen,
  LucideFolderPlus: FolderPlus,
  LucideFolderRoot: FolderRoot,
  LucideFolderSearch: FolderSearch,
  LucideFolderSearch2: FolderSearch2,
  LucideFolderSymlink: FolderSymlink,
  LucideFolderSync: FolderSync,
  LucideFolderTree: FolderTree,
  LucideFolderUp: FolderUp,
  LucideFolderX: FolderX,
  LucideFolders: Folders,
  LucideFootprints: Footprints,
  LucideForklift: Forklift,
  LucideFormInput: FormInput,
  LucideForward: Forward,
  LucideFrame: Frame,
  LucideFramer: Framer,
  LucideFrown: Frown,
  LucideFuel: Fuel,
  LucideFullscreen: Fullscreen,
  LucideFunctionSquare: FunctionSquare,
  LucideGalleryHorizontal: GalleryHorizontal,
  LucideGalleryHorizontalEnd: GalleryHorizontalEnd,
  LucideGalleryThumbnails: GalleryThumbnails,
  LucideGalleryVertical: GalleryVertical,
  LucideGalleryVerticalEnd: GalleryVerticalEnd,
  LucideGamepad: Gamepad,
  LucideGamepad2: Gamepad2,
  LucideGanttChart: GanttChart,
  LucideGanttChartSquare: GanttChartSquare,
  LucideGanttSquare: GanttChartSquare,
  LucideGauge: Gauge,
  LucideGaugeCircle: GaugeCircle,
  LucideGavel: Gavel,
  LucideGem: Gem,
  LucideGhost: Ghost,
  LucideGift: Gift,
  LucideGitBranch: GitBranch,
  LucideGitBranchPlus: GitBranchPlus,
  LucideGitCommit: GitCommitHorizontal,
  LucideGitCommitHorizontal: GitCommitHorizontal,
  LucideGitCommitVertical: GitCommitVertical,
  LucideGitCompare: GitCompare,
  LucideGitCompareArrows: GitCompareArrows,
  LucideGitFork: GitFork,
  LucideGitGraph: GitGraph,
  LucideGitMerge: GitMerge,
  LucideGitPullRequest: GitPullRequest,
  LucideGitPullRequestArrow: GitPullRequestArrow,
  LucideGitPullRequestClosed: GitPullRequestClosed,
  LucideGitPullRequestCreate: GitPullRequestCreate,
  LucideGitPullRequestCreateArrow: GitPullRequestCreateArrow,
  LucideGitPullRequestDraft: GitPullRequestDraft,
  LucideGithub: Github,
  LucideGitlab: Gitlab,
  LucideGlassWater: GlassWater,
  LucideGlasses: Glasses,
  LucideGlobe: Globe,
  LucideGlobe2: Earth,
  LucideGlobeLock: GlobeLock,
  LucideGoal: Goal,
  LucideGrab: Grab,
  LucideGraduationCap: GraduationCap,
  LucideGrape: Grape,
  LucideGrid: Grid3x3,
  LucideGrid2X2: Grid2x2,
  LucideGrid2x2: Grid2x2,
  LucideGrid3X3: Grid3x3,
  LucideGrid3x3: Grid3x3,
  LucideGrip: Grip,
  LucideGripHorizontal: GripHorizontal,
  LucideGripVertical: GripVertical,
  LucideGroup: Group,
  LucideGuitar: Guitar,
  LucideHammer: Hammer,
  LucideHand: Hand,
  LucideHandCoins: HandCoins,
  LucideHandHeart: HandHeart,
  LucideHandHelping: HandHelping,
  LucideHandMetal: HandMetal,
  LucideHandPlatter: HandPlatter,
  LucideHandshake: Handshake,
  LucideHardDrive: HardDrive,
  LucideHardDriveDownload: HardDriveDownload,
  LucideHardDriveUpload: HardDriveUpload,
  LucideHardHat: HardHat,
  LucideHash: Hash,
  LucideHaze: Haze,
  LucideHdmiPort: HdmiPort,
  LucideHeading: Heading,
  LucideHeading1: Heading1,
  LucideHeading2: Heading2,
  LucideHeading3: Heading3,
  LucideHeading4: Heading4,
  LucideHeading5: Heading5,
  LucideHeading6: Heading6,
  LucideHeadphones: Headphones,
  LucideHeadset: Headset,
  LucideHeart: Heart,
  LucideHeartCrack: HeartCrack,
  LucideHeartHandshake: HeartHandshake,
  LucideHeartOff: HeartOff,
  LucideHeartPulse: HeartPulse,
  LucideHeater: Heater,
  LucideHelpCircle: HelpCircle,
  LucideHelpingHand: HandHelping,
  LucideHexagon: Hexagon,
  LucideHighlighter: Highlighter,
  LucideHistory: History,
  LucideHome: Home,
  LucideHop: Hop,
  LucideHopOff: HopOff,
  LucideHotel: Hotel,
  LucideHourglass: Hourglass,
  LucideIceCream: IceCream,
  LucideIceCream2: IceCream2,
  LucideImage: Image,
  LucideImageDown: ImageDown,
  LucideImageMinus: ImageMinus,
  LucideImageOff: ImageOff,
  LucideImagePlus: ImagePlus,
  LucideImageUp: ImageUp,
  LucideImages: Images,
  LucideImport: Import,
  LucideInbox: Inbox,
  LucideIndent: Indent,
  LucideIndianRupee: IndianRupee,
  LucideInfinity: Infinity,
  LucideInfo: Info,
  LucideInspect: MousePointerSquare,
  LucideInspectionPanel: InspectionPanel,
  LucideInstagram: Instagram,
  LucideItalic: Italic,
  LucideIterationCcw: IterationCcw,
  LucideIterationCw: IterationCw,
  LucideJapaneseYen: JapaneseYen,
  LucideJoystick: Joystick,
  LucideKanban: Kanban,
  LucideKanbanSquare: KanbanSquare,
  LucideKanbanSquareDashed: KanbanSquareDashed,
  LucideKey: Key,
  LucideKeyRound: KeyRound,
  LucideKeySquare: KeySquare,
  LucideKeyboard: Keyboard,
  LucideKeyboardMusic: KeyboardMusic,
  LucideLamp: Lamp,
  LucideLampCeiling: LampCeiling,
  LucideLampDesk: LampDesk,
  LucideLampFloor: LampFloor,
  LucideLampWallDown: LampWallDown,
  LucideLampWallUp: LampWallUp,
  LucideLandPlot: LandPlot,
  LucideLandmark: Landmark,
  LucideLanguages: Languages,
  LucideLaptop: Laptop,
  LucideLaptop2: Laptop2,
  LucideLasso: Lasso,
  LucideLassoSelect: LassoSelect,
  LucideLaugh: Laugh,
  LucideLayers: Layers,
  LucideLayers2: Layers2,
  LucideLayers3: Layers3,
  LucideLayout: PanelsTopLeft,
  LucideLayoutDashboard: LayoutDashboard,
  LucideLayoutGrid: LayoutGrid,
  LucideLayoutList: LayoutList,
  LucideLayoutPanelLeft: LayoutPanelLeft,
  LucideLayoutPanelTop: LayoutPanelTop,
  LucideLayoutTemplate: LayoutTemplate,
  LucideLeaf: Leaf,
  LucideLeafyGreen: LeafyGreen,
  LucideLibrary: Library,
  LucideLibraryBig: LibraryBig,
  LucideLibrarySquare: LibrarySquare,
  LucideLifeBuoy: LifeBuoy,
  LucideLigature: Ligature,
  LucideLightbulb: Lightbulb,
  LucideLightbulbOff: LightbulbOff,
  LucideLineChart: LineChart,
  LucideLink: Link,
  LucideLink2: Link2,
  LucideLink2Off: Link2Off,
  LucideLinkedin: Linkedin,
  LucideList: List,
  LucideListChecks: ListChecks,
  LucideListCollapse: ListCollapse,
  LucideListEnd: ListEnd,
  LucideListFilter: ListFilter,
  LucideListMinus: ListMinus,
  LucideListMusic: ListMusic,
  LucideListOrdered: ListOrdered,
  LucideListPlus: ListPlus,
  LucideListRestart: ListRestart,
  LucideListStart: ListStart,
  LucideListTodo: ListTodo,
  LucideListTree: ListTree,
  LucideListVideo: ListVideo,
  LucideListX: ListX,
  LucideLoader: Loader,
  LucideLoader2: Loader2,
  LucideLocate: Locate,
  LucideLocateFixed: LocateFixed,
  LucideLocateOff: LocateOff,
  LucideLock: Lock,
  LucideLockKeyhole: LockKeyhole,
  LucideLogIn: LogIn,
  LucideLogOut: LogOut,
  LucideLollipop: Lollipop,
  LucideLuggage: Luggage,
  LucideMSquare: MSquare,
  LucideMagnet: Magnet,
  LucideMail: Mail,
  LucideMailCheck: MailCheck,
  LucideMailMinus: MailMinus,
  LucideMailOpen: MailOpen,
  LucideMailPlus: MailPlus,
  LucideMailQuestion: MailQuestion,
  LucideMailSearch: MailSearch,
  LucideMailWarning: MailWarning,
  LucideMailX: MailX,
  LucideMailbox: Mailbox,
  LucideMails: Mails,
  LucideMap: Map$1,
  LucideMapPin: MapPin,
  LucideMapPinOff: MapPinOff,
  LucideMapPinned: MapPinned,
  LucideMartini: Martini,
  LucideMaximize: Maximize,
  LucideMaximize2: Maximize2,
  LucideMedal: Medal,
  LucideMegaphone: Megaphone,
  LucideMegaphoneOff: MegaphoneOff,
  LucideMeh: Meh,
  LucideMemoryStick: MemoryStick,
  LucideMenu: Menu,
  LucideMenuSquare: MenuSquare,
  LucideMerge: Merge,
  LucideMessageCircle: MessageCircle,
  LucideMessageCircleCode: MessageCircleCode,
  LucideMessageCircleDashed: MessageCircleDashed,
  LucideMessageCircleHeart: MessageCircleHeart,
  LucideMessageCircleMore: MessageCircleMore,
  LucideMessageCircleOff: MessageCircleOff,
  LucideMessageCirclePlus: MessageCirclePlus,
  LucideMessageCircleQuestion: MessageCircleQuestion,
  LucideMessageCircleReply: MessageCircleReply,
  LucideMessageCircleWarning: MessageCircleWarning,
  LucideMessageCircleX: MessageCircleX,
  LucideMessageSquare: MessageSquare,
  LucideMessageSquareCode: MessageSquareCode,
  LucideMessageSquareDashed: MessageSquareDashed,
  LucideMessageSquareDiff: MessageSquareDiff,
  LucideMessageSquareDot: MessageSquareDot,
  LucideMessageSquareHeart: MessageSquareHeart,
  LucideMessageSquareMore: MessageSquareMore,
  LucideMessageSquareOff: MessageSquareOff,
  LucideMessageSquarePlus: MessageSquarePlus,
  LucideMessageSquareQuote: MessageSquareQuote,
  LucideMessageSquareReply: MessageSquareReply,
  LucideMessageSquareShare: MessageSquareShare,
  LucideMessageSquareText: MessageSquareText,
  LucideMessageSquareWarning: MessageSquareWarning,
  LucideMessageSquareX: MessageSquareX,
  LucideMessagesSquare: MessagesSquare,
  LucideMic: Mic,
  LucideMic2: Mic2,
  LucideMicOff: MicOff,
  LucideMicroscope: Microscope,
  LucideMicrowave: Microwave,
  LucideMilestone: Milestone,
  LucideMilk: Milk,
  LucideMilkOff: MilkOff,
  LucideMinimize: Minimize,
  LucideMinimize2: Minimize2,
  LucideMinus: Minus,
  LucideMinusCircle: MinusCircle,
  LucideMinusSquare: MinusSquare,
  LucideMonitor: Monitor,
  LucideMonitorCheck: MonitorCheck,
  LucideMonitorDot: MonitorDot,
  LucideMonitorDown: MonitorDown,
  LucideMonitorOff: MonitorOff,
  LucideMonitorPause: MonitorPause,
  LucideMonitorPlay: MonitorPlay,
  LucideMonitorSmartphone: MonitorSmartphone,
  LucideMonitorSpeaker: MonitorSpeaker,
  LucideMonitorStop: MonitorStop,
  LucideMonitorUp: MonitorUp,
  LucideMonitorX: MonitorX,
  LucideMoon: Moon,
  LucideMoonStar: MoonStar,
  LucideMoreHorizontal: MoreHorizontal,
  LucideMoreVertical: MoreVertical,
  LucideMountain: Mountain,
  LucideMountainSnow: MountainSnow,
  LucideMouse: Mouse,
  LucideMousePointer: MousePointer,
  LucideMousePointer2: MousePointer2,
  LucideMousePointerClick: MousePointerClick,
  LucideMousePointerSquare: MousePointerSquare,
  LucideMousePointerSquareDashed: MousePointerSquareDashed,
  LucideMove: Move,
  LucideMove3D: Move3d,
  LucideMove3d: Move3d,
  LucideMoveDiagonal: MoveDiagonal,
  LucideMoveDiagonal2: MoveDiagonal2,
  LucideMoveDown: MoveDown,
  LucideMoveDownLeft: MoveDownLeft,
  LucideMoveDownRight: MoveDownRight,
  LucideMoveHorizontal: MoveHorizontal,
  LucideMoveLeft: MoveLeft,
  LucideMoveRight: MoveRight,
  LucideMoveUp: MoveUp,
  LucideMoveUpLeft: MoveUpLeft,
  LucideMoveUpRight: MoveUpRight,
  LucideMoveVertical: MoveVertical,
  LucideMusic: Music,
  LucideMusic2: Music2,
  LucideMusic3: Music3,
  LucideMusic4: Music4,
  LucideNavigation: Navigation,
  LucideNavigation2: Navigation2,
  LucideNavigation2Off: Navigation2Off,
  LucideNavigationOff: NavigationOff,
  LucideNetwork: Network,
  LucideNewspaper: Newspaper,
  LucideNfc: Nfc,
  LucideNotebook: Notebook,
  LucideNotebookPen: NotebookPen,
  LucideNotebookTabs: NotebookTabs,
  LucideNotebookText: NotebookText,
  LucideNotepadText: NotepadText,
  LucideNotepadTextDashed: NotepadTextDashed,
  LucideNut: Nut,
  LucideNutOff: NutOff,
  LucideOctagon: Octagon,
  LucideOption: Option,
  LucideOrbit: Orbit,
  LucideOutdent: Outdent,
  LucidePackage: Package,
  LucidePackage2: Package2,
  LucidePackageCheck: PackageCheck,
  LucidePackageMinus: PackageMinus,
  LucidePackageOpen: PackageOpen,
  LucidePackagePlus: PackagePlus,
  LucidePackageSearch: PackageSearch,
  LucidePackageX: PackageX,
  LucidePaintBucket: PaintBucket,
  LucidePaintRoller: PaintRoller,
  LucidePaintbrush: Paintbrush,
  LucidePaintbrush2: Paintbrush2,
  LucidePalette: Palette,
  LucidePalmtree: Palmtree,
  LucidePanelBottom: PanelBottom,
  LucidePanelBottomClose: PanelBottomClose,
  LucidePanelBottomDashed: PanelBottomDashed,
  LucidePanelBottomInactive: PanelBottomDashed,
  LucidePanelBottomOpen: PanelBottomOpen,
  LucidePanelLeft: PanelLeft,
  LucidePanelLeftClose: PanelLeftClose,
  LucidePanelLeftDashed: PanelLeftDashed,
  LucidePanelLeftInactive: PanelLeftDashed,
  LucidePanelLeftOpen: PanelLeftOpen,
  LucidePanelRight: PanelRight,
  LucidePanelRightClose: PanelRightClose,
  LucidePanelRightDashed: PanelRightDashed,
  LucidePanelRightInactive: PanelRightDashed,
  LucidePanelRightOpen: PanelRightOpen,
  LucidePanelTop: PanelTop,
  LucidePanelTopClose: PanelTopClose,
  LucidePanelTopDashed: PanelTopDashed,
  LucidePanelTopInactive: PanelTopDashed,
  LucidePanelTopOpen: PanelTopOpen,
  LucidePanelsLeftBottom: PanelsLeftBottom,
  LucidePanelsLeftRight: Columns3,
  LucidePanelsRightBottom: PanelsRightBottom,
  LucidePanelsTopBottom: Rows3,
  LucidePanelsTopLeft: PanelsTopLeft,
  LucidePaperclip: Paperclip,
  LucideParentheses: Parentheses,
  LucideParkingCircle: ParkingCircle,
  LucideParkingCircleOff: ParkingCircleOff,
  LucideParkingMeter: ParkingMeter,
  LucideParkingSquare: ParkingSquare,
  LucideParkingSquareOff: ParkingSquareOff,
  LucidePartyPopper: PartyPopper,
  LucidePause: Pause,
  LucidePauseCircle: PauseCircle,
  LucidePauseOctagon: PauseOctagon,
  LucidePawPrint: PawPrint,
  LucidePcCase: PcCase,
  LucidePen: Pen,
  LucidePenBox: SquarePen,
  LucidePenLine: PenLine,
  LucidePenSquare: SquarePen,
  LucidePenTool: PenTool,
  LucidePencil: Pencil,
  LucidePencilLine: PencilLine,
  LucidePencilRuler: PencilRuler,
  LucidePentagon: Pentagon,
  LucidePercent: Percent,
  LucidePercentCircle: PercentCircle,
  LucidePercentDiamond: PercentDiamond,
  LucidePercentSquare: PercentSquare,
  LucidePersonStanding: PersonStanding,
  LucidePhone: Phone,
  LucidePhoneCall: PhoneCall,
  LucidePhoneForwarded: PhoneForwarded,
  LucidePhoneIncoming: PhoneIncoming,
  LucidePhoneMissed: PhoneMissed,
  LucidePhoneOff: PhoneOff,
  LucidePhoneOutgoing: PhoneOutgoing,
  LucidePi: Pi,
  LucidePiSquare: PiSquare,
  LucidePiano: Piano,
  LucidePickaxe: Pickaxe,
  LucidePictureInPicture: PictureInPicture,
  LucidePictureInPicture2: PictureInPicture2,
  LucidePieChart: PieChart,
  LucidePiggyBank: PiggyBank,
  LucidePilcrow: Pilcrow,
  LucidePilcrowSquare: PilcrowSquare,
  LucidePill: Pill,
  LucidePin: Pin,
  LucidePinOff: PinOff,
  LucidePipette: Pipette,
  LucidePizza: Pizza,
  LucidePlane: Plane,
  LucidePlaneLanding: PlaneLanding,
  LucidePlaneTakeoff: PlaneTakeoff,
  LucidePlay: Play,
  LucidePlayCircle: PlayCircle,
  LucidePlaySquare: PlaySquare,
  LucidePlug: Plug,
  LucidePlug2: Plug2,
  LucidePlugZap: PlugZap,
  LucidePlugZap2: PlugZap2,
  LucidePlus: Plus,
  LucidePlusCircle: PlusCircle,
  LucidePlusSquare: PlusSquare,
  LucidePocket: Pocket,
  LucidePocketKnife: PocketKnife,
  LucidePodcast: Podcast,
  LucidePointer: Pointer,
  LucidePointerOff: PointerOff,
  LucidePopcorn: Popcorn,
  LucidePopsicle: Popsicle,
  LucidePoundSterling: PoundSterling,
  LucidePower: Power,
  LucidePowerCircle: PowerCircle,
  LucidePowerOff: PowerOff,
  LucidePowerSquare: PowerSquare,
  LucidePresentation: Presentation,
  LucidePrinter: Printer,
  LucideProjector: Projector,
  LucidePuzzle: Puzzle,
  LucidePyramid: Pyramid,
  LucideQrCode: QrCode,
  LucideQuote: Quote,
  LucideRabbit: Rabbit,
  LucideRadar: Radar,
  LucideRadiation: Radiation,
  LucideRadical: Radical,
  LucideRadio: Radio,
  LucideRadioReceiver: RadioReceiver,
  LucideRadioTower: RadioTower,
  LucideRadius: Radius,
  LucideRailSymbol: RailSymbol,
  LucideRainbow: Rainbow,
  LucideRat: Rat,
  LucideRatio: Ratio,
  LucideReceipt: Receipt,
  LucideReceiptCent: ReceiptCent,
  LucideReceiptEuro: ReceiptEuro,
  LucideReceiptIndianRupee: ReceiptIndianRupee,
  LucideReceiptJapaneseYen: ReceiptJapaneseYen,
  LucideReceiptPoundSterling: ReceiptPoundSterling,
  LucideReceiptRussianRuble: ReceiptRussianRuble,
  LucideReceiptSwissFranc: ReceiptSwissFranc,
  LucideReceiptText: ReceiptText,
  LucideRectangleHorizontal: RectangleHorizontal,
  LucideRectangleVertical: RectangleVertical,
  LucideRecycle: Recycle,
  LucideRedo: Redo,
  LucideRedo2: Redo2,
  LucideRedoDot: RedoDot,
  LucideRefreshCcw: RefreshCcw,
  LucideRefreshCcwDot: RefreshCcwDot,
  LucideRefreshCw: RefreshCw,
  LucideRefreshCwOff: RefreshCwOff,
  LucideRefrigerator: Refrigerator,
  LucideRegex: Regex,
  LucideRemoveFormatting: RemoveFormatting,
  LucideRepeat: Repeat,
  LucideRepeat1: Repeat1,
  LucideRepeat2: Repeat2,
  LucideReplace: Replace,
  LucideReplaceAll: ReplaceAll,
  LucideReply: Reply,
  LucideReplyAll: ReplyAll,
  LucideRewind: Rewind,
  LucideRibbon: Ribbon,
  LucideRocket: Rocket,
  LucideRockingChair: RockingChair,
  LucideRollerCoaster: RollerCoaster,
  LucideRotate3D: Rotate3d,
  LucideRotate3d: Rotate3d,
  LucideRotateCcw: RotateCcw,
  LucideRotateCw: RotateCw,
  LucideRoute: Route,
  LucideRouteOff: RouteOff,
  LucideRouter: Router,
  LucideRows: Rows2,
  LucideRows2: Rows2,
  LucideRows3: Rows3,
  LucideRows4: Rows4,
  LucideRss: Rss,
  LucideRuler: Ruler,
  LucideRussianRuble: RussianRuble,
  LucideSailboat: Sailboat,
  LucideSalad: Salad,
  LucideSandwich: Sandwich,
  LucideSatellite: Satellite,
  LucideSatelliteDish: SatelliteDish,
  LucideSave: Save,
  LucideSaveAll: SaveAll,
  LucideScale: Scale,
  LucideScale3D: Scale3d,
  LucideScale3d: Scale3d,
  LucideScaling: Scaling,
  LucideScan: Scan,
  LucideScanBarcode: ScanBarcode,
  LucideScanEye: ScanEye,
  LucideScanFace: ScanFace,
  LucideScanLine: ScanLine,
  LucideScanSearch: ScanSearch,
  LucideScanText: ScanText,
  LucideScatterChart: ScatterChart,
  LucideSchool: School,
  LucideSchool2: School2,
  LucideScissors: Scissors,
  LucideScissorsLineDashed: ScissorsLineDashed,
  LucideScissorsSquare: ScissorsSquare,
  LucideScissorsSquareDashedBottom: ScissorsSquareDashedBottom,
  LucideScreenShare: ScreenShare,
  LucideScreenShareOff: ScreenShareOff,
  LucideScroll: Scroll,
  LucideScrollText: ScrollText,
  LucideSearch: Search,
  LucideSearchCheck: SearchCheck,
  LucideSearchCode: SearchCode,
  LucideSearchSlash: SearchSlash,
  LucideSearchX: SearchX,
  LucideSend: Send,
  LucideSendHorizonal: SendHorizontal,
  LucideSendHorizontal: SendHorizontal,
  LucideSendToBack: SendToBack,
  LucideSeparatorHorizontal: SeparatorHorizontal,
  LucideSeparatorVertical: SeparatorVertical,
  LucideServer: Server,
  LucideServerCog: ServerCog,
  LucideServerCrash: ServerCrash,
  LucideServerOff: ServerOff,
  LucideSettings: Settings,
  LucideSettings2: Settings2,
  LucideShapes: Shapes,
  LucideShare: Share,
  LucideShare2: Share2,
  LucideSheet: Sheet,
  LucideShell: Shell,
  LucideShield: Shield,
  LucideShieldAlert: ShieldAlert,
  LucideShieldBan: ShieldBan,
  LucideShieldCheck: ShieldCheck,
  LucideShieldClose: ShieldX,
  LucideShieldEllipsis: ShieldEllipsis,
  LucideShieldHalf: ShieldHalf,
  LucideShieldMinus: ShieldMinus,
  LucideShieldOff: ShieldOff,
  LucideShieldPlus: ShieldPlus,
  LucideShieldQuestion: ShieldQuestion,
  LucideShieldX: ShieldX,
  LucideShip: Ship,
  LucideShipWheel: ShipWheel,
  LucideShirt: Shirt,
  LucideShoppingBag: ShoppingBag,
  LucideShoppingBasket: ShoppingBasket,
  LucideShoppingCart: ShoppingCart,
  LucideShovel: Shovel,
  LucideShowerHead: ShowerHead,
  LucideShrink: Shrink,
  LucideShrub: Shrub,
  LucideShuffle: Shuffle,
  LucideSidebar: PanelLeft,
  LucideSidebarClose: PanelLeftClose,
  LucideSidebarOpen: PanelLeftOpen,
  LucideSigma: Sigma,
  LucideSigmaSquare: SigmaSquare,
  LucideSignal: Signal,
  LucideSignalHigh: SignalHigh,
  LucideSignalLow: SignalLow,
  LucideSignalMedium: SignalMedium,
  LucideSignalZero: SignalZero,
  LucideSignpost: Signpost,
  LucideSignpostBig: SignpostBig,
  LucideSiren: Siren,
  LucideSkipBack: SkipBack,
  LucideSkipForward: SkipForward,
  LucideSkull: Skull,
  LucideSlack: Slack,
  LucideSlash: Slash,
  LucideSlashSquare: SlashSquare,
  LucideSlice: Slice,
  LucideSliders: Sliders,
  LucideSlidersHorizontal: SlidersHorizontal,
  LucideSmartphone: Smartphone,
  LucideSmartphoneCharging: SmartphoneCharging,
  LucideSmartphoneNfc: SmartphoneNfc,
  LucideSmile: Smile,
  LucideSmilePlus: SmilePlus,
  LucideSnail: Snail,
  LucideSnowflake: Snowflake,
  LucideSofa: Sofa,
  LucideSortAsc: ArrowUpNarrowWide,
  LucideSortDesc: ArrowDownWideNarrow,
  LucideSoup: Soup,
  LucideSpace: Space,
  LucideSpade: Spade,
  LucideSparkle: Sparkle,
  LucideSparkles: Sparkles,
  LucideSpeaker: Speaker,
  LucideSpeech: Speech,
  LucideSpellCheck: SpellCheck,
  LucideSpellCheck2: SpellCheck2,
  LucideSpline: Spline,
  LucideSplit: Split,
  LucideSplitSquareHorizontal: SplitSquareHorizontal,
  LucideSplitSquareVertical: SplitSquareVertical,
  LucideSprayCan: SprayCan,
  LucideSprout: Sprout,
  LucideSquare: Square,
  LucideSquareAsterisk: AsteriskSquare,
  LucideSquareCode: CodeSquare,
  LucideSquareDashedBottom: SquareDashedBottom,
  LucideSquareDashedBottomCode: SquareDashedBottomCode,
  LucideSquareDot: DotSquare,
  LucideSquareEqual: EqualSquare,
  LucideSquareGantt: GanttChartSquare,
  LucideSquareKanban: KanbanSquare,
  LucideSquareKanbanDashed: KanbanSquareDashed,
  LucideSquarePen: SquarePen,
  LucideSquareRadical: SquareRadical,
  LucideSquareSlash: SlashSquare,
  LucideSquareStack: SquareStack,
  LucideSquareUser: SquareUser,
  LucideSquareUserRound: SquareUserRound,
  LucideSquircle: Squircle,
  LucideSquirrel: Squirrel,
  LucideStamp: Stamp,
  LucideStar: Star,
  LucideStarHalf: StarHalf,
  LucideStarOff: StarOff,
  LucideStars: Sparkles,
  LucideStepBack: StepBack,
  LucideStepForward: StepForward,
  LucideStethoscope: Stethoscope,
  LucideSticker: Sticker,
  LucideStickyNote: StickyNote,
  LucideStopCircle: StopCircle,
  LucideStore: Store,
  LucideStretchHorizontal: StretchHorizontal,
  LucideStretchVertical: StretchVertical,
  LucideStrikethrough: Strikethrough,
  LucideSubscript: Subscript,
  LucideSubtitles: Captions,
  LucideSun: Sun,
  LucideSunDim: SunDim,
  LucideSunMedium: SunMedium,
  LucideSunMoon: SunMoon,
  LucideSunSnow: SunSnow,
  LucideSunrise: Sunrise,
  LucideSunset: Sunset,
  LucideSuperscript: Superscript,
  LucideSwatchBook: SwatchBook,
  LucideSwissFranc: SwissFranc,
  LucideSwitchCamera: SwitchCamera,
  LucideSword: Sword,
  LucideSwords: Swords,
  LucideSyringe: Syringe,
  LucideTable: Table,
  LucideTable2: Table2,
  LucideTableCellsMerge: TableCellsMerge,
  LucideTableCellsSplit: TableCellsSplit,
  LucideTableColumnsSplit: TableColumnsSplit,
  LucideTableProperties: TableProperties,
  LucideTableRowsSplit: TableRowsSplit,
  LucideTablet: Tablet,
  LucideTabletSmartphone: TabletSmartphone,
  LucideTablets: Tablets,
  LucideTag: Tag,
  LucideTags: Tags,
  LucideTally1: Tally1,
  LucideTally2: Tally2,
  LucideTally3: Tally3,
  LucideTally4: Tally4,
  LucideTally5: Tally5,
  LucideTangent: Tangent,
  LucideTarget: Target,
  LucideTelescope: Telescope,
  LucideTent: Tent,
  LucideTentTree: TentTree,
  LucideTerminal: Terminal,
  LucideTerminalSquare: TerminalSquare,
  LucideTestTube: TestTube,
  LucideTestTube2: TestTube2,
  LucideTestTubes: TestTubes,
  LucideText: Text,
  LucideTextCursor: TextCursor,
  LucideTextCursorInput: TextCursorInput,
  LucideTextQuote: TextQuote,
  LucideTextSearch: TextSearch,
  LucideTextSelect: TextSelect,
  LucideTextSelection: TextSelect,
  LucideTheater: Theater,
  LucideThermometer: Thermometer,
  LucideThermometerSnowflake: ThermometerSnowflake,
  LucideThermometerSun: ThermometerSun,
  LucideThumbsDown: ThumbsDown,
  LucideThumbsUp: ThumbsUp,
  LucideTicket: Ticket,
  LucideTicketCheck: TicketCheck,
  LucideTicketMinus: TicketMinus,
  LucideTicketPercent: TicketPercent,
  LucideTicketPlus: TicketPlus,
  LucideTicketSlash: TicketSlash,
  LucideTicketX: TicketX,
  LucideTimer: Timer,
  LucideTimerOff: TimerOff,
  LucideTimerReset: TimerReset,
  LucideToggleLeft: ToggleLeft,
  LucideToggleRight: ToggleRight,
  LucideTornado: Tornado,
  LucideTorus: Torus,
  LucideTouchpad: Touchpad,
  LucideTouchpadOff: TouchpadOff,
  LucideTowerControl: TowerControl,
  LucideToyBrick: ToyBrick,
  LucideTractor: Tractor,
  LucideTrafficCone: TrafficCone,
  LucideTrain: TramFront,
  LucideTrainFront: TrainFront,
  LucideTrainFrontTunnel: TrainFrontTunnel,
  LucideTrainTrack: TrainTrack,
  LucideTramFront: TramFront,
  LucideTrash: Trash,
  LucideTrash2: Trash2,
  LucideTreeDeciduous: TreeDeciduous,
  LucideTreePine: TreePine,
  LucideTrees: Trees,
  LucideTrello: Trello,
  LucideTrendingDown: TrendingDown,
  LucideTrendingUp: TrendingUp,
  LucideTriangle: Triangle,
  LucideTriangleRight: TriangleRight,
  LucideTrophy: Trophy,
  LucideTruck: Truck,
  LucideTurtle: Turtle,
  LucideTv: Tv,
  LucideTv2: Tv2,
  LucideTwitch: Twitch,
  LucideTwitter: Twitter,
  LucideType: Type,
  LucideUmbrella: Umbrella,
  LucideUmbrellaOff: UmbrellaOff,
  LucideUnderline: Underline,
  LucideUndo: Undo,
  LucideUndo2: Undo2,
  LucideUndoDot: UndoDot,
  LucideUnfoldHorizontal: UnfoldHorizontal,
  LucideUnfoldVertical: UnfoldVertical,
  LucideUngroup: Ungroup,
  LucideUnlink: Unlink,
  LucideUnlink2: Unlink2,
  LucideUnlock: Unlock,
  LucideUnlockKeyhole: UnlockKeyhole,
  LucideUnplug: Unplug,
  LucideUpload: Upload,
  LucideUploadCloud: UploadCloud,
  LucideUsb: Usb,
  LucideUser: User,
  LucideUser2: UserRound,
  LucideUserCheck: UserCheck,
  LucideUserCheck2: UserRoundCheck,
  LucideUserCircle: CircleUser,
  LucideUserCircle2: CircleUserRound,
  LucideUserCog: UserCog,
  LucideUserCog2: UserRoundCog,
  LucideUserMinus: UserMinus,
  LucideUserMinus2: UserRoundMinus,
  LucideUserPlus: UserPlus,
  LucideUserPlus2: UserRoundPlus,
  LucideUserRound: UserRound,
  LucideUserRoundCheck: UserRoundCheck,
  LucideUserRoundCog: UserRoundCog,
  LucideUserRoundMinus: UserRoundMinus,
  LucideUserRoundPlus: UserRoundPlus,
  LucideUserRoundSearch: UserRoundSearch,
  LucideUserRoundX: UserRoundX,
  LucideUserSearch: UserSearch,
  LucideUserSquare: SquareUser,
  LucideUserSquare2: SquareUserRound,
  LucideUserX: UserX,
  LucideUserX2: UserRoundX,
  LucideUsers: Users,
  LucideUsers2: UsersRound,
  LucideUsersRound: UsersRound,
  LucideUtensils: Utensils,
  LucideUtensilsCrossed: UtensilsCrossed,
  LucideUtilityPole: UtilityPole,
  LucideVariable: Variable,
  LucideVault: Vault,
  LucideVegan: Vegan,
  LucideVenetianMask: VenetianMask,
  LucideVerified: BadgeCheck,
  LucideVibrate: Vibrate,
  LucideVibrateOff: VibrateOff,
  LucideVideo: Video,
  LucideVideoOff: VideoOff,
  LucideVideotape: Videotape,
  LucideView: View,
  LucideVoicemail: Voicemail,
  LucideVolume: Volume,
  LucideVolume1: Volume1,
  LucideVolume2: Volume2,
  LucideVolumeX: VolumeX,
  LucideVote: Vote,
  LucideWallet: Wallet,
  LucideWallet2: Wallet2,
  LucideWalletCards: WalletCards,
  LucideWallpaper: Wallpaper,
  LucideWand: Wand,
  LucideWand2: Wand2,
  LucideWarehouse: Warehouse,
  LucideWashingMachine: WashingMachine,
  LucideWatch: Watch,
  LucideWaves: Waves,
  LucideWaypoints: Waypoints,
  LucideWebcam: Webcam,
  LucideWebhook: Webhook,
  LucideWebhookOff: WebhookOff,
  LucideWeight: Weight,
  LucideWheat: Wheat,
  LucideWheatOff: WheatOff,
  LucideWholeWord: WholeWord,
  LucideWifi: Wifi,
  LucideWifiOff: WifiOff,
  LucideWind: Wind,
  LucideWine: Wine,
  LucideWineOff: WineOff,
  LucideWorkflow: Workflow,
  LucideWrapText: WrapText,
  LucideWrench: Wrench,
  LucideX: X,
  LucideXCircle: XCircle,
  LucideXOctagon: XOctagon,
  LucideXSquare: XSquare,
  LucideYoutube: Youtube,
  LucideZap: Zap,
  LucideZapOff: ZapOff,
  LucideZoomIn: ZoomIn,
  LucideZoomOut: ZoomOut,
  Luggage,
  LuggageIcon: Luggage,
  MSquare,
  MSquareIcon: MSquare,
  Magnet,
  MagnetIcon: Magnet,
  Mail,
  MailCheck,
  MailCheckIcon: MailCheck,
  MailIcon: Mail,
  MailMinus,
  MailMinusIcon: MailMinus,
  MailOpen,
  MailOpenIcon: MailOpen,
  MailPlus,
  MailPlusIcon: MailPlus,
  MailQuestion,
  MailQuestionIcon: MailQuestion,
  MailSearch,
  MailSearchIcon: MailSearch,
  MailWarning,
  MailWarningIcon: MailWarning,
  MailX,
  MailXIcon: MailX,
  Mailbox,
  MailboxIcon: Mailbox,
  Mails,
  MailsIcon: Mails,
  Map: Map$1,
  MapIcon: Map$1,
  MapPin,
  MapPinIcon: MapPin,
  MapPinOff,
  MapPinOffIcon: MapPinOff,
  MapPinned,
  MapPinnedIcon: MapPinned,
  Martini,
  MartiniIcon: Martini,
  Maximize,
  Maximize2,
  Maximize2Icon: Maximize2,
  MaximizeIcon: Maximize,
  Medal,
  MedalIcon: Medal,
  Megaphone,
  MegaphoneIcon: Megaphone,
  MegaphoneOff,
  MegaphoneOffIcon: MegaphoneOff,
  Meh,
  MehIcon: Meh,
  MemoryStick,
  MemoryStickIcon: MemoryStick,
  Menu,
  MenuIcon: Menu,
  MenuSquare,
  MenuSquareIcon: MenuSquare,
  Merge,
  MergeIcon: Merge,
  MessageCircle,
  MessageCircleCode,
  MessageCircleCodeIcon: MessageCircleCode,
  MessageCircleDashed,
  MessageCircleDashedIcon: MessageCircleDashed,
  MessageCircleHeart,
  MessageCircleHeartIcon: MessageCircleHeart,
  MessageCircleIcon: MessageCircle,
  MessageCircleMore,
  MessageCircleMoreIcon: MessageCircleMore,
  MessageCircleOff,
  MessageCircleOffIcon: MessageCircleOff,
  MessageCirclePlus,
  MessageCirclePlusIcon: MessageCirclePlus,
  MessageCircleQuestion,
  MessageCircleQuestionIcon: MessageCircleQuestion,
  MessageCircleReply,
  MessageCircleReplyIcon: MessageCircleReply,
  MessageCircleWarning,
  MessageCircleWarningIcon: MessageCircleWarning,
  MessageCircleX,
  MessageCircleXIcon: MessageCircleX,
  MessageSquare,
  MessageSquareCode,
  MessageSquareCodeIcon: MessageSquareCode,
  MessageSquareDashed,
  MessageSquareDashedIcon: MessageSquareDashed,
  MessageSquareDiff,
  MessageSquareDiffIcon: MessageSquareDiff,
  MessageSquareDot,
  MessageSquareDotIcon: MessageSquareDot,
  MessageSquareHeart,
  MessageSquareHeartIcon: MessageSquareHeart,
  MessageSquareIcon: MessageSquare,
  MessageSquareMore,
  MessageSquareMoreIcon: MessageSquareMore,
  MessageSquareOff,
  MessageSquareOffIcon: MessageSquareOff,
  MessageSquarePlus,
  MessageSquarePlusIcon: MessageSquarePlus,
  MessageSquareQuote,
  MessageSquareQuoteIcon: MessageSquareQuote,
  MessageSquareReply,
  MessageSquareReplyIcon: MessageSquareReply,
  MessageSquareShare,
  MessageSquareShareIcon: MessageSquareShare,
  MessageSquareText,
  MessageSquareTextIcon: MessageSquareText,
  MessageSquareWarning,
  MessageSquareWarningIcon: MessageSquareWarning,
  MessageSquareX,
  MessageSquareXIcon: MessageSquareX,
  MessagesSquare,
  MessagesSquareIcon: MessagesSquare,
  Mic,
  Mic2,
  Mic2Icon: Mic2,
  MicIcon: Mic,
  MicOff,
  MicOffIcon: MicOff,
  Microscope,
  MicroscopeIcon: Microscope,
  Microwave,
  MicrowaveIcon: Microwave,
  Milestone,
  MilestoneIcon: Milestone,
  Milk,
  MilkIcon: Milk,
  MilkOff,
  MilkOffIcon: MilkOff,
  Minimize,
  Minimize2,
  Minimize2Icon: Minimize2,
  MinimizeIcon: Minimize,
  Minus,
  MinusCircle,
  MinusCircleIcon: MinusCircle,
  MinusIcon: Minus,
  MinusSquare,
  MinusSquareIcon: MinusSquare,
  Monitor,
  MonitorCheck,
  MonitorCheckIcon: MonitorCheck,
  MonitorDot,
  MonitorDotIcon: MonitorDot,
  MonitorDown,
  MonitorDownIcon: MonitorDown,
  MonitorIcon: Monitor,
  MonitorOff,
  MonitorOffIcon: MonitorOff,
  MonitorPause,
  MonitorPauseIcon: MonitorPause,
  MonitorPlay,
  MonitorPlayIcon: MonitorPlay,
  MonitorSmartphone,
  MonitorSmartphoneIcon: MonitorSmartphone,
  MonitorSpeaker,
  MonitorSpeakerIcon: MonitorSpeaker,
  MonitorStop,
  MonitorStopIcon: MonitorStop,
  MonitorUp,
  MonitorUpIcon: MonitorUp,
  MonitorX,
  MonitorXIcon: MonitorX,
  Moon,
  MoonIcon: Moon,
  MoonStar,
  MoonStarIcon: MoonStar,
  MoreHorizontal,
  MoreHorizontalIcon: MoreHorizontal,
  MoreVertical,
  MoreVerticalIcon: MoreVertical,
  Mountain,
  MountainIcon: Mountain,
  MountainSnow,
  MountainSnowIcon: MountainSnow,
  Mouse,
  MouseIcon: Mouse,
  MousePointer,
  MousePointer2,
  MousePointer2Icon: MousePointer2,
  MousePointerClick,
  MousePointerClickIcon: MousePointerClick,
  MousePointerIcon: MousePointer,
  MousePointerSquare,
  MousePointerSquareDashed,
  MousePointerSquareDashedIcon: MousePointerSquareDashed,
  MousePointerSquareIcon: MousePointerSquare,
  Move,
  Move3D: Move3d,
  Move3DIcon: Move3d,
  Move3d,
  Move3dIcon: Move3d,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDiagonal2Icon: MoveDiagonal2,
  MoveDiagonalIcon: MoveDiagonal,
  MoveDown,
  MoveDownIcon: MoveDown,
  MoveDownLeft,
  MoveDownLeftIcon: MoveDownLeft,
  MoveDownRight,
  MoveDownRightIcon: MoveDownRight,
  MoveHorizontal,
  MoveHorizontalIcon: MoveHorizontal,
  MoveIcon: Move,
  MoveLeft,
  MoveLeftIcon: MoveLeft,
  MoveRight,
  MoveRightIcon: MoveRight,
  MoveUp,
  MoveUpIcon: MoveUp,
  MoveUpLeft,
  MoveUpLeftIcon: MoveUpLeft,
  MoveUpRight,
  MoveUpRightIcon: MoveUpRight,
  MoveVertical,
  MoveVerticalIcon: MoveVertical,
  Music,
  Music2,
  Music2Icon: Music2,
  Music3,
  Music3Icon: Music3,
  Music4,
  Music4Icon: Music4,
  MusicIcon: Music,
  Navigation,
  Navigation2,
  Navigation2Icon: Navigation2,
  Navigation2Off,
  Navigation2OffIcon: Navigation2Off,
  NavigationIcon: Navigation,
  NavigationOff,
  NavigationOffIcon: NavigationOff,
  Network,
  NetworkIcon: Network,
  Newspaper,
  NewspaperIcon: Newspaper,
  Nfc,
  NfcIcon: Nfc,
  Notebook,
  NotebookIcon: Notebook,
  NotebookPen,
  NotebookPenIcon: NotebookPen,
  NotebookTabs,
  NotebookTabsIcon: NotebookTabs,
  NotebookText,
  NotebookTextIcon: NotebookText,
  NotepadText,
  NotepadTextDashed,
  NotepadTextDashedIcon: NotepadTextDashed,
  NotepadTextIcon: NotepadText,
  Nut,
  NutIcon: Nut,
  NutOff,
  NutOffIcon: NutOff,
  Octagon,
  OctagonIcon: Octagon,
  Option,
  OptionIcon: Option,
  Orbit,
  OrbitIcon: Orbit,
  Outdent,
  OutdentIcon: Outdent,
  Package,
  Package2,
  Package2Icon: Package2,
  PackageCheck,
  PackageCheckIcon: PackageCheck,
  PackageIcon: Package,
  PackageMinus,
  PackageMinusIcon: PackageMinus,
  PackageOpen,
  PackageOpenIcon: PackageOpen,
  PackagePlus,
  PackagePlusIcon: PackagePlus,
  PackageSearch,
  PackageSearchIcon: PackageSearch,
  PackageX,
  PackageXIcon: PackageX,
  PaintBucket,
  PaintBucketIcon: PaintBucket,
  PaintRoller,
  PaintRollerIcon: PaintRoller,
  Paintbrush,
  Paintbrush2,
  Paintbrush2Icon: Paintbrush2,
  PaintbrushIcon: Paintbrush,
  Palette,
  PaletteIcon: Palette,
  Palmtree,
  PalmtreeIcon: Palmtree,
  PanelBottom,
  PanelBottomClose,
  PanelBottomCloseIcon: PanelBottomClose,
  PanelBottomDashed,
  PanelBottomDashedIcon: PanelBottomDashed,
  PanelBottomIcon: PanelBottom,
  PanelBottomInactive: PanelBottomDashed,
  PanelBottomInactiveIcon: PanelBottomDashed,
  PanelBottomOpen,
  PanelBottomOpenIcon: PanelBottomOpen,
  PanelLeft,
  PanelLeftClose,
  PanelLeftCloseIcon: PanelLeftClose,
  PanelLeftDashed,
  PanelLeftDashedIcon: PanelLeftDashed,
  PanelLeftIcon: PanelLeft,
  PanelLeftInactive: PanelLeftDashed,
  PanelLeftInactiveIcon: PanelLeftDashed,
  PanelLeftOpen,
  PanelLeftOpenIcon: PanelLeftOpen,
  PanelRight,
  PanelRightClose,
  PanelRightCloseIcon: PanelRightClose,
  PanelRightDashed,
  PanelRightDashedIcon: PanelRightDashed,
  PanelRightIcon: PanelRight,
  PanelRightInactive: PanelRightDashed,
  PanelRightInactiveIcon: PanelRightDashed,
  PanelRightOpen,
  PanelRightOpenIcon: PanelRightOpen,
  PanelTop,
  PanelTopClose,
  PanelTopCloseIcon: PanelTopClose,
  PanelTopDashed,
  PanelTopDashedIcon: PanelTopDashed,
  PanelTopIcon: PanelTop,
  PanelTopInactive: PanelTopDashed,
  PanelTopInactiveIcon: PanelTopDashed,
  PanelTopOpen,
  PanelTopOpenIcon: PanelTopOpen,
  PanelsLeftBottom,
  PanelsLeftBottomIcon: PanelsLeftBottom,
  PanelsLeftRight: Columns3,
  PanelsLeftRightIcon: Columns3,
  PanelsRightBottom,
  PanelsRightBottomIcon: PanelsRightBottom,
  PanelsTopBottom: Rows3,
  PanelsTopBottomIcon: Rows3,
  PanelsTopLeft,
  PanelsTopLeftIcon: PanelsTopLeft,
  Paperclip,
  PaperclipIcon: Paperclip,
  Parentheses,
  ParenthesesIcon: Parentheses,
  ParkingCircle,
  ParkingCircleIcon: ParkingCircle,
  ParkingCircleOff,
  ParkingCircleOffIcon: ParkingCircleOff,
  ParkingMeter,
  ParkingMeterIcon: ParkingMeter,
  ParkingSquare,
  ParkingSquareIcon: ParkingSquare,
  ParkingSquareOff,
  ParkingSquareOffIcon: ParkingSquareOff,
  PartyPopper,
  PartyPopperIcon: PartyPopper,
  Pause,
  PauseCircle,
  PauseCircleIcon: PauseCircle,
  PauseIcon: Pause,
  PauseOctagon,
  PauseOctagonIcon: PauseOctagon,
  PawPrint,
  PawPrintIcon: PawPrint,
  PcCase,
  PcCaseIcon: PcCase,
  Pen,
  PenBox: SquarePen,
  PenBoxIcon: SquarePen,
  PenIcon: Pen,
  PenLine,
  PenLineIcon: PenLine,
  PenSquare: SquarePen,
  PenSquareIcon: SquarePen,
  PenTool,
  PenToolIcon: PenTool,
  Pencil,
  PencilIcon: Pencil,
  PencilLine,
  PencilLineIcon: PencilLine,
  PencilRuler,
  PencilRulerIcon: PencilRuler,
  Pentagon,
  PentagonIcon: Pentagon,
  Percent,
  PercentCircle,
  PercentCircleIcon: PercentCircle,
  PercentDiamond,
  PercentDiamondIcon: PercentDiamond,
  PercentIcon: Percent,
  PercentSquare,
  PercentSquareIcon: PercentSquare,
  PersonStanding,
  PersonStandingIcon: PersonStanding,
  Phone,
  PhoneCall,
  PhoneCallIcon: PhoneCall,
  PhoneForwarded,
  PhoneForwardedIcon: PhoneForwarded,
  PhoneIcon: Phone,
  PhoneIncoming,
  PhoneIncomingIcon: PhoneIncoming,
  PhoneMissed,
  PhoneMissedIcon: PhoneMissed,
  PhoneOff,
  PhoneOffIcon: PhoneOff,
  PhoneOutgoing,
  PhoneOutgoingIcon: PhoneOutgoing,
  Pi,
  PiIcon: Pi,
  PiSquare,
  PiSquareIcon: PiSquare,
  Piano,
  PianoIcon: Piano,
  Pickaxe,
  PickaxeIcon: Pickaxe,
  PictureInPicture,
  PictureInPicture2,
  PictureInPicture2Icon: PictureInPicture2,
  PictureInPictureIcon: PictureInPicture,
  PieChart,
  PieChartIcon: PieChart,
  PiggyBank,
  PiggyBankIcon: PiggyBank,
  Pilcrow,
  PilcrowIcon: Pilcrow,
  PilcrowSquare,
  PilcrowSquareIcon: PilcrowSquare,
  Pill,
  PillIcon: Pill,
  Pin,
  PinIcon: Pin,
  PinOff,
  PinOffIcon: PinOff,
  Pipette,
  PipetteIcon: Pipette,
  Pizza,
  PizzaIcon: Pizza,
  Plane,
  PlaneIcon: Plane,
  PlaneLanding,
  PlaneLandingIcon: PlaneLanding,
  PlaneTakeoff,
  PlaneTakeoffIcon: PlaneTakeoff,
  Play,
  PlayCircle,
  PlayCircleIcon: PlayCircle,
  PlayIcon: Play,
  PlaySquare,
  PlaySquareIcon: PlaySquare,
  Plug,
  Plug2,
  Plug2Icon: Plug2,
  PlugIcon: Plug,
  PlugZap,
  PlugZap2,
  PlugZap2Icon: PlugZap2,
  PlugZapIcon: PlugZap,
  Plus,
  PlusCircle,
  PlusCircleIcon: PlusCircle,
  PlusIcon: Plus,
  PlusSquare,
  PlusSquareIcon: PlusSquare,
  Pocket,
  PocketIcon: Pocket,
  PocketKnife,
  PocketKnifeIcon: PocketKnife,
  Podcast,
  PodcastIcon: Podcast,
  Pointer,
  PointerIcon: Pointer,
  PointerOff,
  PointerOffIcon: PointerOff,
  Popcorn,
  PopcornIcon: Popcorn,
  Popsicle,
  PopsicleIcon: Popsicle,
  PoundSterling,
  PoundSterlingIcon: PoundSterling,
  Power,
  PowerCircle,
  PowerCircleIcon: PowerCircle,
  PowerIcon: Power,
  PowerOff,
  PowerOffIcon: PowerOff,
  PowerSquare,
  PowerSquareIcon: PowerSquare,
  Presentation,
  PresentationIcon: Presentation,
  Printer,
  PrinterIcon: Printer,
  Projector,
  ProjectorIcon: Projector,
  Puzzle,
  PuzzleIcon: Puzzle,
  Pyramid,
  PyramidIcon: Pyramid,
  QrCode,
  QrCodeIcon: QrCode,
  Quote,
  QuoteIcon: Quote,
  Rabbit,
  RabbitIcon: Rabbit,
  Radar,
  RadarIcon: Radar,
  Radiation,
  RadiationIcon: Radiation,
  Radical,
  RadicalIcon: Radical,
  Radio,
  RadioIcon: Radio,
  RadioReceiver,
  RadioReceiverIcon: RadioReceiver,
  RadioTower,
  RadioTowerIcon: RadioTower,
  Radius,
  RadiusIcon: Radius,
  RailSymbol,
  RailSymbolIcon: RailSymbol,
  Rainbow,
  RainbowIcon: Rainbow,
  Rat,
  RatIcon: Rat,
  Ratio,
  RatioIcon: Ratio,
  Receipt,
  ReceiptCent,
  ReceiptCentIcon: ReceiptCent,
  ReceiptEuro,
  ReceiptEuroIcon: ReceiptEuro,
  ReceiptIcon: Receipt,
  ReceiptIndianRupee,
  ReceiptIndianRupeeIcon: ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptJapaneseYenIcon: ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptPoundSterlingIcon: ReceiptPoundSterling,
  ReceiptRussianRuble,
  ReceiptRussianRubleIcon: ReceiptRussianRuble,
  ReceiptSwissFranc,
  ReceiptSwissFrancIcon: ReceiptSwissFranc,
  ReceiptText,
  ReceiptTextIcon: ReceiptText,
  RectangleHorizontal,
  RectangleHorizontalIcon: RectangleHorizontal,
  RectangleVertical,
  RectangleVerticalIcon: RectangleVertical,
  Recycle,
  RecycleIcon: Recycle,
  Redo,
  Redo2,
  Redo2Icon: Redo2,
  RedoDot,
  RedoDotIcon: RedoDot,
  RedoIcon: Redo,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCcwDotIcon: RefreshCcwDot,
  RefreshCcwIcon: RefreshCcw,
  RefreshCw,
  RefreshCwIcon: RefreshCw,
  RefreshCwOff,
  RefreshCwOffIcon: RefreshCwOff,
  Refrigerator,
  RefrigeratorIcon: Refrigerator,
  Regex,
  RegexIcon: Regex,
  RemoveFormatting,
  RemoveFormattingIcon: RemoveFormatting,
  Repeat,
  Repeat1,
  Repeat1Icon: Repeat1,
  Repeat2,
  Repeat2Icon: Repeat2,
  RepeatIcon: Repeat,
  Replace,
  ReplaceAll,
  ReplaceAllIcon: ReplaceAll,
  ReplaceIcon: Replace,
  Reply,
  ReplyAll,
  ReplyAllIcon: ReplyAll,
  ReplyIcon: Reply,
  Rewind,
  RewindIcon: Rewind,
  Ribbon,
  RibbonIcon: Ribbon,
  Rocket,
  RocketIcon: Rocket,
  RockingChair,
  RockingChairIcon: RockingChair,
  RollerCoaster,
  RollerCoasterIcon: RollerCoaster,
  Rotate3D: Rotate3d,
  Rotate3DIcon: Rotate3d,
  Rotate3d,
  Rotate3dIcon: Rotate3d,
  RotateCcw,
  RotateCcwIcon: RotateCcw,
  RotateCw,
  RotateCwIcon: RotateCw,
  Route,
  RouteIcon: Route,
  RouteOff,
  RouteOffIcon: RouteOff,
  Router,
  RouterIcon: Router,
  Rows: Rows2,
  Rows2,
  Rows2Icon: Rows2,
  Rows3,
  Rows3Icon: Rows3,
  Rows4,
  Rows4Icon: Rows4,
  RowsIcon: Rows2,
  Rss,
  RssIcon: Rss,
  Ruler,
  RulerIcon: Ruler,
  RussianRuble,
  RussianRubleIcon: RussianRuble,
  Sailboat,
  SailboatIcon: Sailboat,
  Salad,
  SaladIcon: Salad,
  Sandwich,
  SandwichIcon: Sandwich,
  Satellite,
  SatelliteDish,
  SatelliteDishIcon: SatelliteDish,
  SatelliteIcon: Satellite,
  Save,
  SaveAll,
  SaveAllIcon: SaveAll,
  SaveIcon: Save,
  Scale,
  Scale3D: Scale3d,
  Scale3DIcon: Scale3d,
  Scale3d,
  Scale3dIcon: Scale3d,
  ScaleIcon: Scale,
  Scaling,
  ScalingIcon: Scaling,
  Scan,
  ScanBarcode,
  ScanBarcodeIcon: ScanBarcode,
  ScanEye,
  ScanEyeIcon: ScanEye,
  ScanFace,
  ScanFaceIcon: ScanFace,
  ScanIcon: Scan,
  ScanLine,
  ScanLineIcon: ScanLine,
  ScanSearch,
  ScanSearchIcon: ScanSearch,
  ScanText,
  ScanTextIcon: ScanText,
  ScatterChart,
  ScatterChartIcon: ScatterChart,
  School,
  School2,
  School2Icon: School2,
  SchoolIcon: School,
  Scissors,
  ScissorsIcon: Scissors,
  ScissorsLineDashed,
  ScissorsLineDashedIcon: ScissorsLineDashed,
  ScissorsSquare,
  ScissorsSquareDashedBottom,
  ScissorsSquareDashedBottomIcon: ScissorsSquareDashedBottom,
  ScissorsSquareIcon: ScissorsSquare,
  ScreenShare,
  ScreenShareIcon: ScreenShare,
  ScreenShareOff,
  ScreenShareOffIcon: ScreenShareOff,
  Scroll,
  ScrollIcon: Scroll,
  ScrollText,
  ScrollTextIcon: ScrollText,
  Search,
  SearchCheck,
  SearchCheckIcon: SearchCheck,
  SearchCode,
  SearchCodeIcon: SearchCode,
  SearchIcon: Search,
  SearchSlash,
  SearchSlashIcon: SearchSlash,
  SearchX,
  SearchXIcon: SearchX,
  Send,
  SendHorizonal: SendHorizontal,
  SendHorizonalIcon: SendHorizontal,
  SendHorizontal,
  SendHorizontalIcon: SendHorizontal,
  SendIcon: Send,
  SendToBack,
  SendToBackIcon: SendToBack,
  SeparatorHorizontal,
  SeparatorHorizontalIcon: SeparatorHorizontal,
  SeparatorVertical,
  SeparatorVerticalIcon: SeparatorVertical,
  Server,
  ServerCog,
  ServerCogIcon: ServerCog,
  ServerCrash,
  ServerCrashIcon: ServerCrash,
  ServerIcon: Server,
  ServerOff,
  ServerOffIcon: ServerOff,
  Settings,
  Settings2,
  Settings2Icon: Settings2,
  SettingsIcon: Settings,
  Shapes,
  ShapesIcon: Shapes,
  Share,
  Share2,
  Share2Icon: Share2,
  ShareIcon: Share,
  Sheet,
  SheetIcon: Sheet,
  Shell,
  ShellIcon: Shell,
  Shield,
  ShieldAlert,
  ShieldAlertIcon: ShieldAlert,
  ShieldBan,
  ShieldBanIcon: ShieldBan,
  ShieldCheck,
  ShieldCheckIcon: ShieldCheck,
  ShieldClose: ShieldX,
  ShieldCloseIcon: ShieldX,
  ShieldEllipsis,
  ShieldEllipsisIcon: ShieldEllipsis,
  ShieldHalf,
  ShieldHalfIcon: ShieldHalf,
  ShieldIcon: Shield,
  ShieldMinus,
  ShieldMinusIcon: ShieldMinus,
  ShieldOff,
  ShieldOffIcon: ShieldOff,
  ShieldPlus,
  ShieldPlusIcon: ShieldPlus,
  ShieldQuestion,
  ShieldQuestionIcon: ShieldQuestion,
  ShieldX,
  ShieldXIcon: ShieldX,
  Ship,
  ShipIcon: Ship,
  ShipWheel,
  ShipWheelIcon: ShipWheel,
  Shirt,
  ShirtIcon: Shirt,
  ShoppingBag,
  ShoppingBagIcon: ShoppingBag,
  ShoppingBasket,
  ShoppingBasketIcon: ShoppingBasket,
  ShoppingCart,
  ShoppingCartIcon: ShoppingCart,
  Shovel,
  ShovelIcon: Shovel,
  ShowerHead,
  ShowerHeadIcon: ShowerHead,
  Shrink,
  ShrinkIcon: Shrink,
  Shrub,
  ShrubIcon: Shrub,
  Shuffle,
  ShuffleIcon: Shuffle,
  Sidebar: PanelLeft,
  SidebarClose: PanelLeftClose,
  SidebarCloseIcon: PanelLeftClose,
  SidebarIcon: PanelLeft,
  SidebarOpen: PanelLeftOpen,
  SidebarOpenIcon: PanelLeftOpen,
  Sigma,
  SigmaIcon: Sigma,
  SigmaSquare,
  SigmaSquareIcon: SigmaSquare,
  Signal,
  SignalHigh,
  SignalHighIcon: SignalHigh,
  SignalIcon: Signal,
  SignalLow,
  SignalLowIcon: SignalLow,
  SignalMedium,
  SignalMediumIcon: SignalMedium,
  SignalZero,
  SignalZeroIcon: SignalZero,
  Signpost,
  SignpostBig,
  SignpostBigIcon: SignpostBig,
  SignpostIcon: Signpost,
  Siren,
  SirenIcon: Siren,
  SkipBack,
  SkipBackIcon: SkipBack,
  SkipForward,
  SkipForwardIcon: SkipForward,
  Skull,
  SkullIcon: Skull,
  Slack,
  SlackIcon: Slack,
  Slash,
  SlashIcon: Slash,
  SlashSquare,
  SlashSquareIcon: SlashSquare,
  Slice,
  SliceIcon: Slice,
  Sliders,
  SlidersHorizontal,
  SlidersHorizontalIcon: SlidersHorizontal,
  SlidersIcon: Sliders,
  Smartphone,
  SmartphoneCharging,
  SmartphoneChargingIcon: SmartphoneCharging,
  SmartphoneIcon: Smartphone,
  SmartphoneNfc,
  SmartphoneNfcIcon: SmartphoneNfc,
  Smile,
  SmileIcon: Smile,
  SmilePlus,
  SmilePlusIcon: SmilePlus,
  Snail,
  SnailIcon: Snail,
  Snowflake,
  SnowflakeIcon: Snowflake,
  Sofa,
  SofaIcon: Sofa,
  SortAsc: ArrowUpNarrowWide,
  SortAscIcon: ArrowUpNarrowWide,
  SortDesc: ArrowDownWideNarrow,
  SortDescIcon: ArrowDownWideNarrow,
  Soup,
  SoupIcon: Soup,
  Space,
  SpaceIcon: Space,
  Spade,
  SpadeIcon: Spade,
  Sparkle,
  SparkleIcon: Sparkle,
  Sparkles,
  SparklesIcon: Sparkles,
  Speaker,
  SpeakerIcon: Speaker,
  Speech,
  SpeechIcon: Speech,
  SpellCheck,
  SpellCheck2,
  SpellCheck2Icon: SpellCheck2,
  SpellCheckIcon: SpellCheck,
  Spline,
  SplineIcon: Spline,
  Split,
  SplitIcon: Split,
  SplitSquareHorizontal,
  SplitSquareHorizontalIcon: SplitSquareHorizontal,
  SplitSquareVertical,
  SplitSquareVerticalIcon: SplitSquareVertical,
  SprayCan,
  SprayCanIcon: SprayCan,
  Sprout,
  SproutIcon: Sprout,
  Square,
  SquareAsterisk: AsteriskSquare,
  SquareAsteriskIcon: AsteriskSquare,
  SquareCode: CodeSquare,
  SquareCodeIcon: CodeSquare,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedBottomCodeIcon: SquareDashedBottomCode,
  SquareDashedBottomIcon: SquareDashedBottom,
  SquareDot: DotSquare,
  SquareDotIcon: DotSquare,
  SquareEqual: EqualSquare,
  SquareEqualIcon: EqualSquare,
  SquareGantt: GanttChartSquare,
  SquareGanttIcon: GanttChartSquare,
  SquareIcon: Square,
  SquareKanban: KanbanSquare,
  SquareKanbanDashed: KanbanSquareDashed,
  SquareKanbanDashedIcon: KanbanSquareDashed,
  SquareKanbanIcon: KanbanSquare,
  SquarePen,
  SquarePenIcon: SquarePen,
  SquareRadical,
  SquareRadicalIcon: SquareRadical,
  SquareSlash: SlashSquare,
  SquareSlashIcon: SlashSquare,
  SquareStack,
  SquareStackIcon: SquareStack,
  SquareUser,
  SquareUserIcon: SquareUser,
  SquareUserRound,
  SquareUserRoundIcon: SquareUserRound,
  Squircle,
  SquircleIcon: Squircle,
  Squirrel,
  SquirrelIcon: Squirrel,
  Stamp,
  StampIcon: Stamp,
  Star,
  StarHalf,
  StarHalfIcon: StarHalf,
  StarIcon: Star,
  StarOff,
  StarOffIcon: StarOff,
  Stars: Sparkles,
  StarsIcon: Sparkles,
  StepBack,
  StepBackIcon: StepBack,
  StepForward,
  StepForwardIcon: StepForward,
  Stethoscope,
  StethoscopeIcon: Stethoscope,
  Sticker,
  StickerIcon: Sticker,
  StickyNote,
  StickyNoteIcon: StickyNote,
  StopCircle,
  StopCircleIcon: StopCircle,
  Store,
  StoreIcon: Store,
  StretchHorizontal,
  StretchHorizontalIcon: StretchHorizontal,
  StretchVertical,
  StretchVerticalIcon: StretchVertical,
  Strikethrough,
  StrikethroughIcon: Strikethrough,
  Subscript,
  SubscriptIcon: Subscript,
  Subtitles: Captions,
  SubtitlesIcon: Captions,
  Sun,
  SunDim,
  SunDimIcon: SunDim,
  SunIcon: Sun,
  SunMedium,
  SunMediumIcon: SunMedium,
  SunMoon,
  SunMoonIcon: SunMoon,
  SunSnow,
  SunSnowIcon: SunSnow,
  Sunrise,
  SunriseIcon: Sunrise,
  Sunset,
  SunsetIcon: Sunset,
  Superscript,
  SuperscriptIcon: Superscript,
  SwatchBook,
  SwatchBookIcon: SwatchBook,
  SwissFranc,
  SwissFrancIcon: SwissFranc,
  SwitchCamera,
  SwitchCameraIcon: SwitchCamera,
  Sword,
  SwordIcon: Sword,
  Swords,
  SwordsIcon: Swords,
  Syringe,
  SyringeIcon: Syringe,
  Table,
  Table2,
  Table2Icon: Table2,
  TableCellsMerge,
  TableCellsMergeIcon: TableCellsMerge,
  TableCellsSplit,
  TableCellsSplitIcon: TableCellsSplit,
  TableColumnsSplit,
  TableColumnsSplitIcon: TableColumnsSplit,
  TableIcon: Table,
  TableProperties,
  TablePropertiesIcon: TableProperties,
  TableRowsSplit,
  TableRowsSplitIcon: TableRowsSplit,
  Tablet,
  TabletIcon: Tablet,
  TabletSmartphone,
  TabletSmartphoneIcon: TabletSmartphone,
  Tablets,
  TabletsIcon: Tablets,
  Tag,
  TagIcon: Tag,
  Tags,
  TagsIcon: Tags,
  Tally1,
  Tally1Icon: Tally1,
  Tally2,
  Tally2Icon: Tally2,
  Tally3,
  Tally3Icon: Tally3,
  Tally4,
  Tally4Icon: Tally4,
  Tally5,
  Tally5Icon: Tally5,
  Tangent,
  TangentIcon: Tangent,
  Target,
  TargetIcon: Target,
  Telescope,
  TelescopeIcon: Telescope,
  Tent,
  TentIcon: Tent,
  TentTree,
  TentTreeIcon: TentTree,
  Terminal,
  TerminalIcon: Terminal,
  TerminalSquare,
  TerminalSquareIcon: TerminalSquare,
  TestTube,
  TestTube2,
  TestTube2Icon: TestTube2,
  TestTubeIcon: TestTube,
  TestTubes,
  TestTubesIcon: TestTubes,
  Text,
  TextCursor,
  TextCursorIcon: TextCursor,
  TextCursorInput,
  TextCursorInputIcon: TextCursorInput,
  TextIcon: Text,
  TextQuote,
  TextQuoteIcon: TextQuote,
  TextSearch,
  TextSearchIcon: TextSearch,
  TextSelect,
  TextSelectIcon: TextSelect,
  TextSelection: TextSelect,
  TextSelectionIcon: TextSelect,
  Theater,
  TheaterIcon: Theater,
  Thermometer,
  ThermometerIcon: Thermometer,
  ThermometerSnowflake,
  ThermometerSnowflakeIcon: ThermometerSnowflake,
  ThermometerSun,
  ThermometerSunIcon: ThermometerSun,
  ThumbsDown,
  ThumbsDownIcon: ThumbsDown,
  ThumbsUp,
  ThumbsUpIcon: ThumbsUp,
  Ticket,
  TicketCheck,
  TicketCheckIcon: TicketCheck,
  TicketIcon: Ticket,
  TicketMinus,
  TicketMinusIcon: TicketMinus,
  TicketPercent,
  TicketPercentIcon: TicketPercent,
  TicketPlus,
  TicketPlusIcon: TicketPlus,
  TicketSlash,
  TicketSlashIcon: TicketSlash,
  TicketX,
  TicketXIcon: TicketX,
  Timer,
  TimerIcon: Timer,
  TimerOff,
  TimerOffIcon: TimerOff,
  TimerReset,
  TimerResetIcon: TimerReset,
  ToggleLeft,
  ToggleLeftIcon: ToggleLeft,
  ToggleRight,
  ToggleRightIcon: ToggleRight,
  Tornado,
  TornadoIcon: Tornado,
  Torus,
  TorusIcon: Torus,
  Touchpad,
  TouchpadIcon: Touchpad,
  TouchpadOff,
  TouchpadOffIcon: TouchpadOff,
  TowerControl,
  TowerControlIcon: TowerControl,
  ToyBrick,
  ToyBrickIcon: ToyBrick,
  Tractor,
  TractorIcon: Tractor,
  TrafficCone,
  TrafficConeIcon: TrafficCone,
  Train: TramFront,
  TrainFront,
  TrainFrontIcon: TrainFront,
  TrainFrontTunnel,
  TrainFrontTunnelIcon: TrainFrontTunnel,
  TrainIcon: TramFront,
  TrainTrack,
  TrainTrackIcon: TrainTrack,
  TramFront,
  TramFrontIcon: TramFront,
  Trash,
  Trash2,
  Trash2Icon: Trash2,
  TrashIcon: Trash,
  TreeDeciduous,
  TreeDeciduousIcon: TreeDeciduous,
  TreePine,
  TreePineIcon: TreePine,
  Trees,
  TreesIcon: Trees,
  Trello,
  TrelloIcon: Trello,
  TrendingDown,
  TrendingDownIcon: TrendingDown,
  TrendingUp,
  TrendingUpIcon: TrendingUp,
  Triangle,
  TriangleIcon: Triangle,
  TriangleRight,
  TriangleRightIcon: TriangleRight,
  Trophy,
  TrophyIcon: Trophy,
  Truck,
  TruckIcon: Truck,
  Turtle,
  TurtleIcon: Turtle,
  Tv,
  Tv2,
  Tv2Icon: Tv2,
  TvIcon: Tv,
  Twitch,
  TwitchIcon: Twitch,
  Twitter,
  TwitterIcon: Twitter,
  Type,
  TypeIcon: Type,
  Umbrella,
  UmbrellaIcon: Umbrella,
  UmbrellaOff,
  UmbrellaOffIcon: UmbrellaOff,
  Underline,
  UnderlineIcon: Underline,
  Undo,
  Undo2,
  Undo2Icon: Undo2,
  UndoDot,
  UndoDotIcon: UndoDot,
  UndoIcon: Undo,
  UnfoldHorizontal,
  UnfoldHorizontalIcon: UnfoldHorizontal,
  UnfoldVertical,
  UnfoldVerticalIcon: UnfoldVertical,
  Ungroup,
  UngroupIcon: Ungroup,
  Unlink,
  Unlink2,
  Unlink2Icon: Unlink2,
  UnlinkIcon: Unlink,
  Unlock,
  UnlockIcon: Unlock,
  UnlockKeyhole,
  UnlockKeyholeIcon: UnlockKeyhole,
  Unplug,
  UnplugIcon: Unplug,
  Upload,
  UploadCloud,
  UploadCloudIcon: UploadCloud,
  UploadIcon: Upload,
  Usb,
  UsbIcon: Usb,
  User,
  User2: UserRound,
  User2Icon: UserRound,
  UserCheck,
  UserCheck2: UserRoundCheck,
  UserCheck2Icon: UserRoundCheck,
  UserCheckIcon: UserCheck,
  UserCircle: CircleUser,
  UserCircle2: CircleUserRound,
  UserCircle2Icon: CircleUserRound,
  UserCircleIcon: CircleUser,
  UserCog,
  UserCog2: UserRoundCog,
  UserCog2Icon: UserRoundCog,
  UserCogIcon: UserCog,
  UserIcon: User,
  UserMinus,
  UserMinus2: UserRoundMinus,
  UserMinus2Icon: UserRoundMinus,
  UserMinusIcon: UserMinus,
  UserPlus,
  UserPlus2: UserRoundPlus,
  UserPlus2Icon: UserRoundPlus,
  UserPlusIcon: UserPlus,
  UserRound,
  UserRoundCheck,
  UserRoundCheckIcon: UserRoundCheck,
  UserRoundCog,
  UserRoundCogIcon: UserRoundCog,
  UserRoundIcon: UserRound,
  UserRoundMinus,
  UserRoundMinusIcon: UserRoundMinus,
  UserRoundPlus,
  UserRoundPlusIcon: UserRoundPlus,
  UserRoundSearch,
  UserRoundSearchIcon: UserRoundSearch,
  UserRoundX,
  UserRoundXIcon: UserRoundX,
  UserSearch,
  UserSearchIcon: UserSearch,
  UserSquare: SquareUser,
  UserSquare2: SquareUserRound,
  UserSquare2Icon: SquareUserRound,
  UserSquareIcon: SquareUser,
  UserX,
  UserX2: UserRoundX,
  UserX2Icon: UserRoundX,
  UserXIcon: UserX,
  Users,
  Users2: UsersRound,
  Users2Icon: UsersRound,
  UsersIcon: Users,
  UsersRound,
  UsersRoundIcon: UsersRound,
  Utensils,
  UtensilsCrossed,
  UtensilsCrossedIcon: UtensilsCrossed,
  UtensilsIcon: Utensils,
  UtilityPole,
  UtilityPoleIcon: UtilityPole,
  Variable,
  VariableIcon: Variable,
  Vault,
  VaultIcon: Vault,
  Vegan,
  VeganIcon: Vegan,
  VenetianMask,
  VenetianMaskIcon: VenetianMask,
  Verified: BadgeCheck,
  VerifiedIcon: BadgeCheck,
  Vibrate,
  VibrateIcon: Vibrate,
  VibrateOff,
  VibrateOffIcon: VibrateOff,
  Video,
  VideoIcon: Video,
  VideoOff,
  VideoOffIcon: VideoOff,
  Videotape,
  VideotapeIcon: Videotape,
  View,
  ViewIcon: View,
  Voicemail,
  VoicemailIcon: Voicemail,
  Volume,
  Volume1,
  Volume1Icon: Volume1,
  Volume2,
  Volume2Icon: Volume2,
  VolumeIcon: Volume,
  VolumeX,
  VolumeXIcon: VolumeX,
  Vote,
  VoteIcon: Vote,
  Wallet,
  Wallet2,
  Wallet2Icon: Wallet2,
  WalletCards,
  WalletCardsIcon: WalletCards,
  WalletIcon: Wallet,
  Wallpaper,
  WallpaperIcon: Wallpaper,
  Wand,
  Wand2,
  Wand2Icon: Wand2,
  WandIcon: Wand,
  Warehouse,
  WarehouseIcon: Warehouse,
  WashingMachine,
  WashingMachineIcon: WashingMachine,
  Watch,
  WatchIcon: Watch,
  Waves,
  WavesIcon: Waves,
  Waypoints,
  WaypointsIcon: Waypoints,
  Webcam,
  WebcamIcon: Webcam,
  Webhook,
  WebhookIcon: Webhook,
  WebhookOff,
  WebhookOffIcon: WebhookOff,
  Weight,
  WeightIcon: Weight,
  Wheat,
  WheatIcon: Wheat,
  WheatOff,
  WheatOffIcon: WheatOff,
  WholeWord,
  WholeWordIcon: WholeWord,
  Wifi,
  WifiIcon: Wifi,
  WifiOff,
  WifiOffIcon: WifiOff,
  Wind,
  WindIcon: Wind,
  Wine,
  WineIcon: Wine,
  WineOff,
  WineOffIcon: WineOff,
  Workflow,
  WorkflowIcon: Workflow,
  WrapText,
  WrapTextIcon: WrapText,
  Wrench,
  WrenchIcon: Wrench,
  X,
  XCircle,
  XCircleIcon: XCircle,
  XIcon: X,
  XOctagon,
  XOctagonIcon: XOctagon,
  XSquare,
  XSquareIcon: XSquare,
  Youtube,
  YoutubeIcon: Youtube,
  Zap,
  ZapIcon: Zap,
  ZapOff,
  ZapOffIcon: ZapOff,
  ZoomIn,
  ZoomInIcon: ZoomIn,
  ZoomOut,
  ZoomOutIcon: ZoomOut,
  createLucideIcon,
  icons: index
}, Symbol.toStringTag, { value: "Module" }));
function buildTree(data, options = {}) {
  const {
    idKey = "id",
    parentKey = "parent_id",
    childrenKey = "children"
  } = options;
  const tree = [];
  const map = /* @__PURE__ */ new Map();
  data.forEach((item) => {
    map.set(item[idKey], { ...item, [childrenKey]: [], level: 0 });
  });
  data.forEach((item) => {
    const node = map.get(item[idKey]);
    const parentId = item[parentKey];
    if (parentId !== null && parentId !== void 0 && map.has(parentId)) {
      const parentNode = map.get(parentId);
      parentNode[childrenKey].push(node);
    } else {
      tree.push(node);
    }
  });
  const setLevel = (nodes, level) => {
    nodes.forEach((node) => {
      node.level = level;
      if (node[childrenKey] && node[childrenKey].length > 0) {
        setLevel(node[childrenKey], level + 1);
      }
    });
  };
  setLevel(tree, 0);
  return tree;
}
function flattenTreeWithPrefix(tree, displayKey = "name", prefix = "|- ") {
  const result = [];
  const traverse = (nodes) => {
    nodes.forEach((node) => {
      const indent = "　".repeat(node.level);
      result.push({
        ...node,
        displayLabel: node.level > 0 ? `${indent}${prefix}${node[displayKey]}` : node[displayKey]
      });
      if (node.children && node.children.length > 0) {
        traverse(node.children);
      }
    });
  };
  traverse(tree);
  return result;
}
const getIcon = (name) => {
  if (!name) return Layers;
  return LucideIcons[name] || Layers;
};
const Sidebar = ({ permissions, currentPath, username, collections = [] }) => {
  const [dynamicCollections, setDynamicCollections] = reactExports.useState(collections);
  const [isCollapsed, setIsCollapsed] = reactExports.useState(false);
  const [expandedMenus, setExpandedMenus] = reactExports.useState(["内容管理"]);
  const [isMounted, setIsMounted] = reactExports.useState(false);
  const [optimisticPath, setOptimisticPath] = reactExports.useState(null);
  const [activeFlyout, setActiveFlyout] = reactExports.useState(null);
  const [pluginItems, setPluginItems] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const savedCollapsed = localStorage.getItem("admin_sidebar_collapsed");
    if (savedCollapsed !== null) {
      setIsCollapsed(savedCollapsed === "true");
    }
    const savedExpanded = localStorage.getItem("admin_sidebar_expanded_menus");
    if (savedExpanded !== null) {
      try {
        setExpandedMenus(JSON.parse(savedExpanded));
      } catch (e) {
        console.warn("Failed to parse expanded menus from localStorage");
      }
    }
    setIsMounted(true);
  }, []);
  reactExports.useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem("admin_sidebar_collapsed", String(isCollapsed));
  }, [isCollapsed, isMounted]);
  reactExports.useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem("admin_sidebar_expanded_menus", JSON.stringify(expandedMenus));
  }, [expandedMenus, isMounted]);
  const refreshCollections = reactExports.useCallback(async () => {
    try {
      const res = await fetch("/api/v1/rbac/collections");
      if (res.ok) {
        const data = await res.json();
        setDynamicCollections(data);
      }
    } catch (e) {
      console.warn("⚠️ [Sidebar] Failed to refresh collections:", e);
    }
  }, []);
  const refreshPlugins = reactExports.useCallback(async () => {
    try {
      const res = await fetch("/api/v1/plugins/menu");
      if (res.ok) {
        const { data } = await res.json();
        const formattedItems = data.map((p) => ({
          menuKey: `plugin:${p.path}`,
          title: p.title,
          href: p.path,
          icon: getIcon(p.icon),
          requiredPermission: p.path === "/admin/plugins/ai-skill-market" ? ["skill.view", "skill.manage", "plugins.view", "plugins.manage"] : ["plugins.view", "plugins.manage"]
        }));
        setPluginItems(formattedItems);
      }
    } catch (e) {
      console.warn("⚠️ [Sidebar] Failed to load plugins:", e);
    }
  }, []);
  reactExports.useEffect(() => {
    const handlePluginUpdate = () => {
      if (hasPermission(permissions, ["plugins.view", "plugins.manage", "skill.view", "skill.manage"])) {
        refreshPlugins();
      }
    };
    window.addEventListener("plugins-updated", handlePluginUpdate);
    return () => window.removeEventListener("plugins-updated", handlePluginUpdate);
  }, [permissions, refreshPlugins]);
  reactExports.useEffect(() => {
    const handleCollectionsUpdate = () => refreshCollections();
    window.addEventListener("collections-updated", handleCollectionsUpdate);
    return () => window.removeEventListener("collections-updated", handleCollectionsUpdate);
  }, [refreshCollections]);
  reactExports.useEffect(() => {
    if (hasPermission(permissions, ["plugins.view", "plugins.manage", "skill.view", "skill.manage"])) {
      refreshPlugins();
    }
  }, [permissions, refreshPlugins]);
  reactExports.useEffect(() => {
    if (!activeFlyout) return;
    const handleClickOutside = () => setActiveFlyout(null);
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [activeFlyout]);
  const groupedCollections = dynamicCollections.reduce((acc, c) => {
    const groupName = c.menuGroup || "其它内容";
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(c);
    return acc;
  }, {});
  const dynamicGroups = Object.entries(groupedCollections).map(([groupName, items]) => {
    const tree = buildTree(items, { idKey: "id", parentKey: "parentId" });
    const groupViewPermissions = items.map((item) => `collection:${item.slug}:view`);
    const mapTreeToMenuItems = (nodes) => {
      return nodes.map((node) => ({
        menuKey: `collection:${node.slug}`,
        title: node.name,
        href: `/admin/collections/${node.slug}`,
        icon: getIcon(node.icon),
        requiredPermission: `collection:${node.slug}:view`,
        menuOrder: node.menuOrder || 0,
        subItems: node.children && node.children.length > 0 ? mapTreeToMenuItems(node.children) : void 0
      })).filter((item) => hasPermission(permissions, item.requiredPermission)).sort((a, b) => a.menuOrder - b.menuOrder);
    };
    return {
      menuKey: `group:${groupName}`,
      title: groupName,
      icon: getIcon(items[0]?.icon),
      requiredPermission: groupViewPermissions,
      subItems: mapTreeToMenuItems(tree)
    };
  }).filter((group) => group.subItems.length > 0);
  const MENU_ITEMS = [
    { menuKey: "dashboard", title: "概览", href: "/admin", icon: LayoutDashboard, requiredPermission: "dashboard.view" },
    {
      menuKey: "user-center",
      title: "用户中心",
      icon: Users,
      requiredPermission: ["user.view", "translations.view"],
      subItems: [
        { menuKey: "users", title: "用户管理", href: "/admin/users", icon: CircleUserRound, requiredPermission: "user.view" },
        { menuKey: "translation-fields", title: "翻译字段", href: "/admin/user-center/translation-fields", icon: Languages, requiredPermission: "translations.view" }
      ]
    },
    ...dynamicGroups,
    {
      menuKey: "model-management",
      title: "模型管理",
      icon: Database,
      requiredPermission: [
        "models.view",
        "models.manage",
        "collections.manage.view",
        "collections.manage",
        "api.manage.view",
        "api.manage",
        "database.view",
        "database.manage",
        "sites.view",
        "sites.manage",
        "role.manage"
      ],
      subItems: [
        { menuKey: "models", title: "模型引擎", href: "/admin/models", icon: Database, requiredPermission: ["models.view", "models.manage", "role.manage"] },
        { menuKey: "collections", title: "业务集合管理", href: "/admin/collections", icon: Layers, requiredPermission: ["collections.manage.view", "collections.manage", "role.manage"] },
        { menuKey: "api-management", title: "API 管理", href: "/admin/api-management", icon: Code2, requiredPermission: ["api.manage.view", "api.manage", "role.manage"] },
        { menuKey: "database-management", title: "数据库管理", href: "/admin/database", icon: Database, requiredPermission: ["database.view", "database.manage", "role.manage"] }
      ]
    },
    {
      menuKey: "permission-management",
      title: "权限管理",
      icon: ShieldCheck,
      requiredPermission: "role.manage",
      subItems: [
        { menuKey: "roles", title: "角色权限", href: "/admin/roles", icon: ShieldCheck, requiredPermission: "role.manage" },
        { menuKey: "managers", title: "操作员管理", href: "/admin/managers", icon: CircleUserRound, requiredPermission: "admin.manage" }
      ]
    },
    {
      menuKey: "system-management",
      title: "系统管理",
      icon: Settings,
      requiredPermission: [
        "media.view",
        "media.manage",
        "settings.general.view",
        "settings.general",
        "languages.view",
        "settings.mail.view",
        "settings.mail",
        "settings.ai.view",
        "settings.ai",
        "role.manage"
      ],
      subItems: [
        { menuKey: "media", title: "附件管理", href: "/admin/media", icon: Package, requiredPermission: ["media.view", "media.manage"] },
        { menuKey: "settings-general", title: "常规设置", href: "/admin/settings/general", icon: Settings, requiredPermission: ["settings.general.view", "settings.general", "role.manage"] },
        { menuKey: "languages", title: "语言设置", href: "/admin/languages", icon: Languages, requiredPermission: ["languages.view", "languages.manage", "role.manage"] },
        { menuKey: "settings-mail", title: "邮件服务", href: "/admin/settings/mail", icon: Mail, requiredPermission: ["settings.mail.view", "settings.mail", "role.manage"] },
        { menuKey: "settings-ai", title: "AI 网关", href: "/admin/settings/ai", icon: Wand2, requiredPermission: ["settings.ai.view", "settings.ai", "role.manage"] },
        { menuKey: "settings-seo-geo", title: "SEO/GEO 增强", href: "/admin/seo-geo", icon: Globe, requiredPermission: ["seo_geo.view", "seo_geo.manage", "role.manage"] }
      ]
    },
    ...pluginItems.length > 0 ? [{
      menuKey: "plugin-management",
      title: "扩展功能",
      icon: Plug,
      requiredPermission: ["plugins.view", "plugins.manage", "skill.view", "skill.manage"],
      subItems: pluginItems
    }] : []
  ];
  reactExports.useEffect(() => {
    const toExpand = [];
    MENU_ITEMS.forEach((menu) => {
      const hasActiveSub = menu.subItems?.some((sub) => currentPath === sub.href);
      if (hasActiveSub && !expandedMenus.includes(menu.menuKey)) {
        toExpand.push(menu.menuKey);
      }
    });
    if (toExpand.length > 0) {
      setExpandedMenus((prev) => {
        const next = [...prev];
        toExpand.forEach((menuKey) => {
          if (!next.includes(menuKey)) next.push(menuKey);
        });
        return next;
      });
    }
  }, [currentPath]);
  reactExports.useEffect(() => {
    setOptimisticPath(null);
  }, [currentPath]);
  const handleSidebarMenuToggle = (menuKey, title, subItems, rect) => {
    if (isCollapsed && subItems && rect) {
      setActiveFlyout({
        title,
        items: subItems,
        top: rect.top
      });
      return;
    }
    setExpandedMenus(
      (prev) => prev.includes(menuKey) ? prev.filter((t) => t !== menuKey) : [...prev, menuKey]
    );
  };
  reactExports.useEffect(() => {
    setDynamicCollections(collections);
  }, [collections]);
  reactExports.useEffect(() => {
    const handleUpdate = () => {
      refreshCollections();
    };
    window.addEventListener("collections-updated", handleUpdate);
    return () => window.removeEventListener("collections-updated", handleUpdate);
  }, [refreshCollections]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ErrorBoundary, { fallback: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 text-xs text-red-500 bg-red-950/20 rounded m-4 border border-red-900/50", children: "侧边栏组件渲染异常" }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
    lineNumber: 336,
    columnNumber: 30
  }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `transition-all duration-300 ease-in-out flex flex-col border-r border-slate-800 h-screen bg-slate-900 text-slate-300 ${isCollapsed ? "w-20" : "w-64"}`, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `p-6 border-b border-slate-800 flex items-center ${isCollapsed ? "justify-center px-0" : "justify-between"}`, children: [
      !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-xl font-bold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-xs text-white", children: "C" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
          lineNumber: 344,
          columnNumber: 17
        }, void 0),
        "磁帧鱼"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 343,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 342,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => {
            setIsCollapsed(!isCollapsed);
            setActiveFlyout(null);
          },
          className: `p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white ${isCollapsed ? "" : "ml-2"}`,
          children: isCollapsed ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PanelLeftOpen, { size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 357,
            columnNumber: 28
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PanelLeftClose, { size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 357,
            columnNumber: 70
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
          lineNumber: 350,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
      lineNumber: 340,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "flex-1 p-4 space-y-1 overflow-y-auto mt-2 overflow-x-hidden relative", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      RecursiveMenu,
      {
        items: MENU_ITEMS,
        permissions,
        currentPath: optimisticPath || currentPath,
        expandedMenus,
        onToggle: handleSidebarMenuToggle,
        isCollapsed,
        onLinkClick: (href) => setOptimisticPath(href)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 363,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
      lineNumber: 362,
      columnNumber: 9
    }, void 0),
    hasPermission(permissions, ["sites.view", "sites.manage", "role.manage"]) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `px-4 mb-4 transition-all duration-300 ${isCollapsed ? "px-2" : ""}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: "/admin/sites",
        title: "模块模板注入",
        className: `flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl shadow-lg transition-all duration-300 group ${isCollapsed ? "w-12 h-12 p-0 mx-auto" : "w-full px-4 py-3 gap-2"}`,
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wand2, { size: 16, className: "group-hover:rotate-12 transition-transform" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 382,
            columnNumber: 15
          }, void 0),
          !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm font-semibold", children: "模块模板注入" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 383,
            columnNumber: 32
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 377,
        columnNumber: 13
      },
      void 0
    ) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
      lineNumber: 376,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `p-4 border-t border-slate-800 bg-slate-900/50 transition-all duration-300 ${isCollapsed ? "px-0" : ""}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex items-center gap-3 ${isCollapsed ? "justify-center" : "px-2"}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-inner", children: username?.[0].toUpperCase() || "A" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 391,
        columnNumber: 13
      }, void 0),
      !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-medium text-white truncate", children: username || "Administrator" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
          lineNumber: 396,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-500 capitalize", children: permissions.includes("all") ? "Super Admin" : "Manager" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
          lineNumber: 397,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 395,
        columnNumber: 15
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
      lineNumber: 390,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
      lineNumber: 389,
      columnNumber: 9
    }, void 0),
    isCollapsed && activeFlyout && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        className: `fixed left-[80px] ${UI_LAYER.page.flyout} bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-2 min-w-[200px] animate-in slide-in-from-left-2 duration-200`,
        style: { top: Math.min(activeFlyout.top, window.innerHeight - 300) },
        onMouseDown: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "px-3 py-2 border-b border-slate-700/50 mb-1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-widest", children: activeFlyout.title }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 413,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 412,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: activeFlyout.items.map((sub, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "a",
            {
              href: sub.href,
              "data-astro-prefetch": "hover",
              onClick: () => {
                setActiveFlyout(null);
                setOptimisticPath(sub.href);
              },
              className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${(optimisticPath || currentPath) === sub.href ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`,
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(sub.icon, { size: 14 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
                  lineNumber: 428,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: sub.title }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
                  lineNumber: 429,
                  columnNumber: 19
                }, void 0)
              ]
            },
            sub.menuKey || sub.href || `${activeFlyout.title}:${i}`,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
              lineNumber: 417,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 415,
            columnNumber: 13
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 407,
        columnNumber: 11
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
    lineNumber: 337,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
    lineNumber: 336,
    columnNumber: 5
  }, void 0);
};
const RecursiveMenu = ({ items, permissions, currentPath, expandedMenus, onToggle, onLinkClick, isCollapsed = false, level = 0 }) => {
  const hasActiveChild = (item) => {
    if (item.href && currentPath === item.href) return true;
    if (item.subItems) {
      return item.subItems.some((sub) => hasActiveChild(sub));
    }
    return false;
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: items.map((item) => {
    if (!hasPermission(permissions, item.requiredPermission)) return null;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const itemKey = item.menuKey || item.href || `${level}:${item.title}`;
    const isExpanded = expandedMenus.includes(itemKey) && !isCollapsed;
    const isParentActive = hasSubItems && item.subItems.some((sub) => hasActiveChild(sub));
    const isActive = item.href && currentPath === item.href;
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
      hasSubItems ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          type: "button",
          onClick: (e) => onToggle(itemKey, item.title, item.subItems, e.currentTarget.getBoundingClientRect()),
          title: isCollapsed ? item.title : void 0,
          className: `w-full flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group ${isParentActive ? "bg-slate-800/50 text-white" : "hover:bg-slate-800 hover:text-white"} ${level > 0 ? "ml-2 pr-2" : ""} ${isCollapsed ? "justify-center" : "justify-between"}`,
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`, children: [
              level === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(item.icon, { size: 18, className: isParentActive ? "text-blue-400" : "text-slate-400 group-hover:text-blue-400" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
                lineNumber: 481,
                columnNumber: 21
              }, void 0) : !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-1.5 h-1.5 rounded-full ${isParentActive ? "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" : "bg-slate-600 group-hover:bg-blue-400"} transition-all` }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
                lineNumber: 483,
                columnNumber: 37
              }, void 0),
              !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `${level === 0 ? "font-medium" : "text-xs"} truncate`, children: item.title }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
                lineNumber: 485,
                columnNumber: 36
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
              lineNumber: 479,
              columnNumber: 17
            }, void 0),
            !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              ChevronRight,
              {
                size: 14,
                className: `transition-transform duration-200 ${isExpanded ? "rotate-90 text-blue-400" : "text-slate-50"}`
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
                lineNumber: 488,
                columnNumber: 19
              },
              void 0
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
          lineNumber: 472,
          columnNumber: 15
        },
        void 0
      ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: item.href,
          "data-astro-prefetch": "hover",
          title: isCollapsed ? item.title : void 0,
          onClick: () => onLinkClick(item.href),
          className: `flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "hover:bg-slate-800 hover:text-white"} ${level > 0 ? "ml-2 pr-2" : ""} ${isCollapsed ? "justify-center" : "justify-between"}`,
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`, children: [
            level === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(item.icon, { size: 18, className: isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
              lineNumber: 507,
              columnNumber: 21
            }, void 0) : !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-1.5 h-1.5 rounded-full ${isActive ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-slate-700"} group-hover:bg-blue-400 transition-all` }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
              lineNumber: 509,
              columnNumber: 37
            }, void 0),
            !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `${level === 0 ? "font-medium" : "text-xs"} truncate`, children: item.title }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
              lineNumber: 511,
              columnNumber: 36
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
            lineNumber: 505,
            columnNumber: 17
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
          lineNumber: 495,
          columnNumber: 15
        },
        void 0
      ),
      hasSubItems && isExpanded && !isCollapsed && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `border-l border-slate-800 space-y-1 mt-1 ${level === 0 ? "ml-4" : "ml-4"}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        RecursiveMenu,
        {
          items: item.subItems,
          permissions,
          currentPath,
          expandedMenus,
          onToggle,
          onLinkClick,
          isCollapsed,
          level: level + 1
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
          lineNumber: 518,
          columnNumber: 17
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
        lineNumber: 517,
        columnNumber: 15
      }, void 0)
    ] }, itemKey, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
      lineNumber: 470,
      columnNumber: 11
    }, void 0);
  }) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/Sidebar.tsx",
    lineNumber: 459,
    columnNumber: 5
  }, void 0);
};
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("🚨 [ErrorBoundary] Caught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
function shouldApplyHydratedSessionMessages(currentMessages, incomingMessages) {
  if (!Array.isArray(incomingMessages) || incomingMessages.length === 0) {
    return currentMessages.length === 0;
  }
  if (currentMessages.some((message) => message.isStreaming)) {
    return false;
  }
  if (currentMessages.length === 0) {
    return true;
  }
  const currentIds = new Set(currentMessages.map((message) => String(message.id)));
  const incomingIds = new Set(incomingMessages.map((message) => String(message.id)));
  const incomingIsSubsetOfCurrent = incomingMessages.every((message) => currentIds.has(String(message.id)));
  const incomingHasNewMessage = incomingMessages.some((message) => !currentIds.has(String(message.id)));
  const currentHasMessagesMissingFromIncoming = currentMessages.some((message) => !incomingIds.has(String(message.id)));
  if (incomingHasNewMessage) {
    return true;
  }
  if (incomingIsSubsetOfCurrent && currentHasMessagesMissingFromIncoming) {
    return false;
  }
  return incomingMessages.length >= currentMessages.length;
}
const useDigitalEmployees = ({
  providers,
  initialEmployees,
  initialMessages
}) => {
  const { toast } = useToast();
  const [employees, setEmployees] = reactExports.useState(initialEmployees || []);
  const [activeEmpId, setActiveEmpId] = reactExports.useState(initialEmployees?.[0]?.id || "");
  const [inputText, setInputText] = reactExports.useState("");
  const [isSending, setIsSending] = reactExports.useState(false);
  const [isPreviewMode, setIsPreviewMode] = reactExports.useState(false);
  const [isInputExpanded, setIsInputExpanded] = reactExports.useState(false);
  const [uploadedAttachments, setUploadedAttachments] = reactExports.useState([]);
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const textareaRef = reactExports.useRef(null);
  const chatContainerRef = reactExports.useRef(null);
  const abortControllerRef = reactExports.useRef(null);
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
  reactExports.useEffect(() => {
    if (textareaRef.current) {
      if (isInputExpanded) {
        textareaRef.current.style.height = "350px";
      } else {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
      }
    }
  }, [inputText, isInputExpanded]);
  const insertMarkdown = (syntax) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    let replacement = "";
    let cursorOffset = 0;
    switch (syntax) {
      case "bold":
        replacement = `**${selectedText || "粗体文字"}**`;
        cursorOffset = selectedText ? replacement.length : 2;
        break;
      case "italic":
        replacement = `*${selectedText || "斜体文字"}*`;
        cursorOffset = selectedText ? replacement.length : 1;
        break;
      case "code":
        replacement = `\`\`\`
${selectedText || "代码内容"}
\`\`\``;
        cursorOffset = selectedText ? replacement.length : 4;
        break;
      case "link":
        replacement = `[${selectedText || "链接文本"}](https://)`;
        cursorOffset = selectedText ? replacement.length + 11 : 1;
        break;
      case "table":
        replacement = `
| 表头1 | 表头2 |
| --- | --- |
| 内容1 | 内容2 |
`;
        cursorOffset = replacement.length;
        break;
      default:
        return;
    }
    const newValue = text.substring(0, start) + replacement + text.substring(end);
    setInputText(newValue);
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + cursorOffset;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };
  const [sessions, setSessions] = reactExports.useState([]);
  const [activeSessionId, setActiveSessionId] = reactExports.useState("");
  const [isRenamingSessionId, setIsRenamingSessionId] = reactExports.useState("");
  const [renamingTitle, setRenamingTitle] = reactExports.useState("");
  const [loadingSessions, setLoadingSessions] = reactExports.useState(false);
  const persistSession = async (session) => {
    await localDB.saveSession(session);
    setSessions((prev) => [session, ...prev.filter((item) => item.id !== session.id)]);
    void syncAgentSessionRemote(session, { logPrefix: "[Cloud Session Sync Failed]" });
  };
  const buildSessionRecord = (agentId, sessionId, customTitle) => createAgentSessionRecord({
    agentId,
    sessionId,
    customTitle,
    buildTitle: (input, fallbackTitle) => input || fallbackTitle || "新会话",
    fallbackTitle: `新会话 ${(/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
  });
  const handleCreateNewSession = async (customTitle, options) => {
    if (!activeEmpId) return;
    const newSession = buildSessionRecord(activeEmpId, void 0, customTitle);
    setActiveSessionId(newSession.id);
    if (options?.persist) {
      await persistSession(newSession);
    }
    return newSession.id;
  };
  const [deleteConfirmOpen, setDeleteConfirmOpen] = reactExports.useState(false);
  const [sessionToDeleteId, setSessionToDeleteId] = reactExports.useState("");
  const handleDeleteSession = (sessionId, event) => {
    if (event) event.stopPropagation();
    setSessionToDeleteId(sessionId);
    setDeleteConfirmOpen(true);
  };
  const confirmDeleteSession = async () => {
    if (!sessionToDeleteId) return;
    const targetId = sessionToDeleteId;
    setDeleteConfirmOpen(false);
    setSessionToDeleteId("");
    await localDB.deleteSession(targetId);
    const nextSessions = sessions.filter((s) => s.id !== targetId);
    setSessions(nextSessions);
    setMessages((prev) => {
      const next = { ...prev };
      delete next[targetId];
      return next;
    });
    if (activeSessionId === targetId) {
      if (nextSessions.length > 0) {
        setActiveSessionId(nextSessions[0].id);
      } else {
        setActiveSessionId("");
      }
    }
    fetch(`/api/v1/agents/${activeEmpId}/sessions/${targetId}`, {
      method: "DELETE"
    }).catch((err) => console.warn("[Cloud Session Delete Sync Failed]:", err));
    toast({
      title: "会话已删除",
      description: "本地缓存和云端存储已完成清扫。"
    });
  };
  const handleRenameSession = async (sessionId, newTitle) => {
    if (!newTitle.trim()) {
      setIsRenamingSessionId("");
      return;
    }
    const updated = sessions.map((s) => s.id === sessionId ? { ...s, title: newTitle, updatedAt: /* @__PURE__ */ new Date() } : s);
    setSessions(updated);
    setIsRenamingSessionId("");
    const target = updated.find((s) => s.id === sessionId);
    if (target) {
      await localDB.saveSession(target);
    }
    fetch(`/api/v1/agents/${activeEmpId}/sessions/${sessionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle })
    }).catch((err) => console.warn("[Cloud Session Rename Sync Failed]:", err));
  };
  reactExports.useEffect(() => {
    localDB.init().then(() => {
      console.log("⚡ [IndexedDB Engine]: Successfully initialized browser history db.");
    }).catch((err) => {
      console.error("❌ [IndexedDB Engine]: Init failed:", err);
    });
  }, []);
  reactExports.useEffect(() => {
    if (!activeEmpId) return;
    const syncEmployeeSessions = async () => {
      setLoadingSessions(true);
      try {
        const cached = await localDB.getSessions(activeEmpId);
        if (cached.length > 0) {
          setSessions(cached);
          setActiveSessionId(cached[0].id);
        }
        const response = await fetch(`/api/v1/agents/${activeEmpId}/sessions`);
        const json = await response.json();
        if (json.success && Array.isArray(json.data)) {
          const apiSessions = json.data;
          setSessions(apiSessions);
          for (const s of apiSessions) {
            await localDB.saveSession(s);
          }
          if (apiSessions.length > 0) {
            const stillExists = apiSessions.some((s) => s.id === activeSessionId);
            if (!stillExists) {
              setActiveSessionId(apiSessions[0].id);
            }
          } else {
            setActiveSessionId("");
          }
        } else if (cached.length === 0) {
          setSessions([]);
          setActiveSessionId("");
        }
      } catch (err) {
        console.warn("[Sync Employee Sessions Error]:", err);
      } finally {
        setLoadingSessions(false);
      }
    };
    syncEmployeeSessions();
  }, [activeEmpId]);
  reactExports.useEffect(() => {
    if (!activeSessionId) return;
    const syncSessionMessages = async () => {
      const targetSessionId = activeSessionId;
      const targetEmpId = activeEmpId;
      const syncSeq = ++sessionMessageSyncSeqRef.current;
      try {
        const cachedMsgs = await localDB.getMessages(targetSessionId);
        if (sessionMessageSyncSeqRef.current !== syncSeq || activeSessionId !== targetSessionId) {
          return;
        }
        if (cachedMsgs.length > 0) {
          setMessages((prev) => {
            const current = prev[targetSessionId] || [];
            if (!shouldApplyHydratedSessionMessages(current, cachedMsgs)) {
              return prev;
            }
            return {
              ...prev,
              [targetSessionId]: cachedMsgs
            };
          });
        }
        const response = await fetch(`/api/v1/agents/${targetEmpId}/sessions/${targetSessionId}/messages`);
        const json = await response.json();
        if (sessionMessageSyncSeqRef.current !== syncSeq || activeSessionId !== targetSessionId) {
          return;
        }
        if (json.success && Array.isArray(json.data)) {
          const apiMsgs = json.data.map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content,
            createdAt: m.createdAt,
            steps: m.steps || [],
            attachments: m.attachments || []
          }));
          setMessages((prev) => {
            const current = prev[targetSessionId] || [];
            if (!shouldApplyHydratedSessionMessages(current, apiMsgs)) {
              return prev;
            }
            return {
              ...prev,
              [targetSessionId]: apiMsgs
            };
          });
          await localDB.saveMessagesBatch(
            apiMsgs.map((m) => ({
              ...m,
              sessionId: targetSessionId,
              agentId: targetEmpId
            }))
          );
        }
      } catch (err) {
        console.warn("[Sync Messages Error]:", err);
      }
    };
    syncSessionMessages();
  }, [activeSessionId]);
  const [systemRoles, setSystemRoles] = reactExports.useState([]);
  const [skillMarketSkills, setSkillMarketSkills] = reactExports.useState([]);
  const [pluginEnabled, setPluginEnabled] = reactExports.useState(true);
  const [messages, setMessages] = reactExports.useState(initialMessages || {});
  const [collapsedLogs, setCollapsedLogs] = reactExports.useState({});
  const sessionMessageSyncSeqRef = reactExports.useRef(0);
  const activeSessionMessages = messages[activeSessionId] || [];
  reactExports.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [activeSessionMessages, activeSessionId]);
  const [employeeModalOpen, setEmployeeModalOpen] = reactExports.useState(false);
  const [modalMode, setModalMode] = reactExports.useState("create");
  const [collapsedReasonings, setCollapsedReasonings] = reactExports.useState({});
  const [collapsedUserMessages, setCollapsedUserMessages] = reactExports.useState({});
  const toggleLog = reactExports.useCallback((msgId) => {
    setCollapsedLogs((prev) => ({
      ...prev,
      [msgId]: !prev[msgId]
    }));
  }, []);
  const toggleReasoning = reactExports.useCallback((msgId) => {
    setCollapsedReasonings((prev) => ({
      ...prev,
      [msgId]: !prev[msgId]
    }));
  }, []);
  const toggleUserMessage = reactExports.useCallback((msgId) => {
    setCollapsedUserMessages((prev) => ({
      ...prev,
      [msgId]: !prev[msgId]
    }));
  }, []);
  const [employeeToDelete, setEmployeeToDelete] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (typeof fetch !== "undefined") {
      try {
        fetch("/api/v1/rbac/roles").then((res) => res.json()).then((res) => {
          if (res.success && Array.isArray(res.data)) {
            setSystemRoles(res.data);
          } else {
            setSystemRoles([
              { id: "1", name: "SuperAdmin (超级系统管理员)", description: "允许调用所有核心功能 API" }
            ]);
          }
        }).catch(() => {
          setSystemRoles([
            { id: "1", name: "SuperAdmin (超级系统管理员)", description: "允许调用所有核心功能 API" }
          ]);
        });
        fetch("/api/v1/plugins/proxy/ai-skill-market/skills").then((res) => res.json()).then((res) => {
          if (res.success && Array.isArray(res.data)) {
            setSkillMarketSkills(res.data);
            setPluginEnabled(true);
          } else {
            setPluginEnabled(false);
          }
        }).catch(() => {
          setPluginEnabled(false);
        });
        fetch("/api/v1/agents").then((res) => res.json()).then((res) => {
          if (res.success && Array.isArray(res.data) && res.data.length > 0) {
            setEmployees(res.data);
            const alreadyActive = res.data.some((e) => e.id === activeEmpId);
            if (!alreadyActive) {
              setActiveEmpId(res.data[0].id);
            }
          }
        }).catch((e) => console.warn("Failed to load agents from db:", e));
      } catch (e) {
        setPluginEnabled(false);
      }
    } else {
      setSystemRoles([
        { id: "1", name: "SuperAdmin (超级系统管理员)", description: "允许调用所有核心功能 API" }
      ]);
      setPluginEnabled(false);
    }
  }, []);
  const activeEmployee = employees.find((e) => e.id === activeEmpId) || employees[0];
  const toggleSteps = reactExports.useCallback((msgId) => {
    setMessages((prev) => {
      const activeMessages = prev[activeSessionId] || [];
      const updated = activeMessages.map((m) => m.id === msgId ? { ...m, stepsExpanded: !m.stepsExpanded } : m);
      return { ...prev, [activeSessionId]: updated };
    });
  }, [activeSessionId]);
  const allAvailableModels = reactExports.useMemo(() => {
    return providers.flatMap((p) => p.models.map((m) => ({
      id: m.id,
      name: m.name,
      providerName: p.name
    })));
  }, [providers]);
  const handleOpenCreate = () => {
    setModalMode("create");
    setEmployeeModalOpen(true);
  };
  const handleOpenEdit = () => {
    setModalMode("edit");
    setEmployeeModalOpen(true);
  };
  const applySaveEmployee = (payload) => {
    const applySaveLocally = () => {
      if (modalMode === "create") {
        setEmployees((prev) => [...prev, payload]);
        setMessages((prev) => ({
          ...prev,
          [payload.id]: [
            {
              id: `m-init-${Date.now()}`,
              role: "assistant",
              content: `您好！新入职的数字员工 **${payload.name}** 报到。我的系统提示词已初始化装载，主控决策模型为 **${payload.masterModelId}**。请随时派发任务给我！`,
              timestamp: /* @__PURE__ */ new Date()
            }
          ]
        }));
        setActiveEmpId(payload.id);
        toast({ title: "入职合同签署成功", description: `AI 数字员工 "${payload.name}" 成功完成配置并入职！` });
      } else {
        setEmployees((prev) => prev.map((e) => e.id === payload.id ? payload : e));
        toast({ title: "大脑参数已更新", description: `数字员工 "${payload.name}" 心智重构完成。` });
      }
    };
    const savePromise = fetch("/api/v1/agents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (savePromise && typeof savePromise.then === "function") {
      savePromise.then((res) => res.json()).then((res) => {
        if (res.success) {
          applySaveLocally();
        } else {
          throw new Error(res.error);
        }
      }).catch((err) => {
        toast({ title: "保存失败", description: err.message || "网络连接异常，未能写入数据库。", variant: "destructive" });
      });
    } else {
      applySaveLocally();
    }
    setEmployeeModalOpen(false);
  };
  const confirmDeleteEmployee = (id, name) => {
    const applyDeleteLocally = () => {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
      toast({ title: "员工离职手续完成", description: `AI 数字员工 "${name}" 已注销离职。` });
      if (activeEmpId === id) {
        const remaining = employees.filter((e) => e.id !== id);
        if (remaining.length > 0) {
          setActiveEmpId(remaining[0].id);
        } else {
          setActiveEmpId("");
          setSessions([]);
          setMessages({});
        }
      }
    };
    const deletePromise = fetch(`/api/v1/agents/${id}`, { method: "DELETE" });
    if (deletePromise && typeof deletePromise.then === "function") {
      deletePromise.then((res) => res.json()).then((res) => {
        if (res.success) {
          applyDeleteLocally();
        } else {
          throw new Error(res.error);
        }
      }).catch((err) => {
        toast({ title: "删除失败", description: err.message || "网络连接异常，未能删除数据。", variant: "destructive" });
      });
    } else {
      applyDeleteLocally();
    }
  };
  const handleDeleteEmployee = (id, name) => {
    setEmployeeToDelete({ id, name });
  };
  const triggerShadowTitleGenerate = (sessionId, firstPrompt, firstAnswer) => {
    if (!sessionId || !activeEmpId) return;
    fetch(`/api/v1/agents/${activeEmpId}/sessions/${sessionId}/title-generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstPrompt, firstAnswer })
    }).then((r) => r.json()).then((data) => {
      if (data.success && data.title) {
        const targetSession = sessions.find((s) => s.id === sessionId);
        const nextSession = {
          id: sessionId,
          agentId: activeEmpId,
          title: data.title,
          summary: targetSession?.summary || "",
          createdAt: targetSession?.createdAt || /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        setSessions((prev) => prev.map((s) => s.id === sessionId ? { ...s, title: data.title, updatedAt: /* @__PURE__ */ new Date() } : s));
        localDB.saveSession(nextSession);
        toast({
          title: "会话标题已自动生成",
          description: `“${data.title}”`
        });
      }
    }).catch((err) => console.warn("[Title Generate Failed]:", err));
  };
  const handleInterrupt = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsSending(false);
      toast({
        title: "思考已手动中断",
        description: "已成功手动中止 AI 数字员工的当前任务执行与回复生成。"
      });
    }
  };
  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const MAX_SIZE = 20 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
          toast({
            title: "文件大小超限",
            description: `文件 "${file.name}" 大小超过了 20MB 限制。`,
            variant: "destructive"
          });
          continue;
        }
        const presignedRes = await fetch(
          `/api/v1/agents/storage/presigned?filename=${encodeURIComponent(file.name)}&type=${encodeURIComponent(file.type)}&size=${file.size}`
        );
        const presignedData = await presignedRes.json();
        if (!presignedData.success) {
          throw new Error(presignedData.message || "获取预签名链接失败");
        }
        const { presignedUrl, url, key } = presignedData;
        const uploadRes = await fetch(presignedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": file.type || "application/octet-stream"
          },
          body: file
        });
        if (!uploadRes.ok) {
          throw new Error(`直传 R2 失败, HTTP 状态码: ${uploadRes.status}`);
        }
        const newAttachment = {
          id: key,
          name: file.name,
          url,
          type: file.type || "application/octet-stream",
          size: file.size
        };
        setUploadedAttachments((prev) => [...prev, newAttachment]);
        toast({
          title: "文件上传成功",
          description: `文件 "${file.name}" 已成功直传至云端存储。`
        });
      }
    } catch (err) {
      console.error("[File Upload Error]:", err);
      toast({
        title: "上传失败",
        description: err.message || "网络或安全校验失败，请检查 R2 配置与 D1 连接。",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };
  const handleSendMessage = async () => {
    if (!inputText.trim() || isSending) return;
    let sessionId = activeSessionId;
    const hasPersistedSession = !!sessionId && sessions.some((session) => session.id === sessionId);
    if (!activeEmpId) return;
    if (!hasPersistedSession) {
      const draftSession = buildSessionRecord(activeEmpId, sessionId || void 0);
      sessionId = draftSession.id;
      setActiveSessionId(sessionId);
      await persistSession(draftSession);
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const text = inputText;
    setInputText("");
    setIsSending(true);
    const activeMessages = messages[sessionId] || [];
    const isFirstTurn = activeMessages.length === 0;
    const currentSession = sessions.find((s) => s.id === sessionId);
    const isGenericTitle = (title) => {
      const t = (title || "").trim();
      return t === "新对话" || t === "新会话" || t === "初始会话" || t.startsWith("新对话") || t.startsWith("新会话") || t.startsWith("初始会话");
    };
    const shouldGenTitle = isFirstTurn || currentSession && !!isGenericTitle(currentSession.title);
    const userMsg = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: /* @__PURE__ */ new Date(),
      attachments: uploadedAttachments.length > 0 ? uploadedAttachments : void 0
    };
    setUploadedAttachments([]);
    const currentHistory = [...activeMessages, userMsg];
    setMessages((prev) => ({ ...prev, [sessionId]: currentHistory }));
    await localDB.saveMessage({
      id: userMsg.id,
      sessionId,
      agentId: activeEmpId,
      role: "user",
      content: userMsg.content,
      attachments: userMsg.attachments,
      createdAt: userMsg.timestamp || /* @__PURE__ */ new Date()
    });
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
    setMessages((prev) => ({ ...prev, [sessionId]: [...currentHistory, aiMsg] }));
    const runStreamReader = async (historyForCall, targetAiMsgId, isShadowFeedback = false) => {
      let aiReplyContent = "";
      let reasoningContent = "";
      return streamChat({
        employeeId: activeEmpId,
        sessionId,
        history: historyForCall,
        isShadowFeedback,
        signal: abortControllerRef.current?.signal,
        onChunk: ({ content, reasoning }) => {
          if (content) {
            aiReplyContent += content;
            setMessages((prev) => {
              const list = prev[sessionId] || [];
              return {
                ...prev,
                [sessionId]: list.map((m) => m.id === targetAiMsgId ? { ...m, content: aiReplyContent } : m)
              };
            });
          }
          if (reasoning) {
            reasoningContent += reasoning;
            setMessages((prev) => {
              const list = prev[sessionId] || [];
              return {
                ...prev,
                [sessionId]: list.map((m) => m.id === targetAiMsgId ? { ...m, reasoning_content: reasoningContent } : m)
              };
            });
          }
        }
      });
    };
    try {
      const { aiReplyContent, reasoningContent, interceptedAction, collections, activeSkills } = await runStreamReader(currentHistory, aiMsgId);
      const finalStepsFirst = aiMsg.steps?.map((s, idx) => idx === 0 ? { ...s, status: "success" } : s) || [];
      setMessages((prev) => {
        const list = prev[sessionId] || [];
        return {
          ...prev,
          [sessionId]: list.map((m) => m.id === aiMsgId ? {
            ...m,
            steps: finalStepsFirst
          } : m)
        };
      });
      if (interceptedAction) {
        let actionList = [];
        if (Array.isArray(interceptedAction)) {
          actionList = interceptedAction;
        } else if (interceptedAction && typeof interceptedAction === "object") {
          actionList = [interceptedAction];
        }
        const MAX_PARALLEL_TOOLS = 3;
        if (actionList.length > MAX_PARALLEL_TOOLS) {
          console.warn(`[Parallel Fuse] Intercepted ${actionList.length} tools, truncating to ${MAX_PARALLEL_TOOLS} to prevent hallucination storm.`);
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
        setMessages((prev) => {
          const list = prev[sessionId] || [];
          return {
            ...prev,
            [sessionId]: list.map((m) => m.id === aiMsgId ? {
              ...m,
              steps: runningSteps
            } : m)
          };
        });
        const executionPromises = actionList.map(async (act, idx) => {
          return executeToolCall({
            act,
            idx,
            employee: activeEmployee,
            skillMarketSkills,
            activeSkills,
            collections,
            currentHistory,
            requestUserConfirmation,
            signal: abortControllerRef.current?.signal,
            onStepUpdate: (sIdx, status, titleModifier, result) => {
              setMessages((prev) => {
                const list = prev[sessionId] || [];
                return {
                  ...prev,
                  [sessionId]: list.map((m) => m.id === aiMsgId ? {
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
                  } : m)
                };
              });
            }
          });
        });
        const completedResults = await Promise.all(executionPromises);
        let agentLoopCount = 1;
        const MAX_AGENT_LOOPS = 20;
        let continueLoop = true;
        const calledToolsCount = /* @__PURE__ */ new Map();
        let loopHistory = [...currentHistory, {
          id: aiMsgId,
          role: "assistant",
          content: aiReplyContent,
          reasoning_content: reasoningContent || void 0,
          steps: runningSteps,
          tool_calls: completedResults.map((r) => r.toolCallObj),
          timestamp: /* @__PURE__ */ new Date()
        }];
        for (const item of completedResults) {
          loopHistory.push(item.systemFeedbackMsg);
          await localDB.saveMessage({
            id: item.systemFeedbackMsg.id,
            sessionId,
            agentId: activeEmpId,
            role: item.systemFeedbackMsg.role,
            content: item.systemFeedbackMsg.content,
            tool_call_id: item.systemFeedbackMsg.tool_call_id,
            name: item.systemFeedbackMsg.name,
            attachments: item.systemFeedbackMsg.attachments,
            createdAt: item.systemFeedbackMsg.timestamp || /* @__PURE__ */ new Date()
          });
        }
        let lastSteps = [...runningSteps];
        for (const item of completedResults) {
          lastSteps = lastSteps.map(
            (step, sIdx) => sIdx === item.idx + 1 ? { ...step, status: item.actionSuccess ? "success" : "failed", result: item.actionResult } : step
          );
        }
        setMessages((prev) => {
          const list = prev[sessionId] || [];
          return {
            ...prev,
            [sessionId]: list.map((m) => m.id === aiMsgId ? { ...m, content: aiReplyContent, steps: lastSteps } : m)
          };
        });
        await localDB.saveMessage({
          id: aiMsgId,
          sessionId,
          agentId: activeEmpId,
          role: "assistant",
          content: aiReplyContent,
          reasoning_content: reasoningContent || void 0,
          taskSteps: JSON.stringify(lastSteps),
          createdAt: /* @__PURE__ */ new Date()
        });
        for (const act of actionList) {
          const mStr = act.method || "";
          calledToolsCount.set(mStr, (calledToolsCount.get(mStr) || 0) + 1);
        }
        let lastLoopMsgId = aiMsgId;
        while (continueLoop && agentLoopCount < MAX_AGENT_LOOPS) {
          agentLoopCount++;
          console.log(`[AgentRunner] Multi-turn loop round: ${agentLoopCount}/${MAX_AGENT_LOOPS}`);
          const loopMsgId = `ai-loop-${agentLoopCount}-${Date.now()}`;
          lastLoopMsgId = loopMsgId;
          const loopSteps = [
            { title: "提取意图解析并唤醒主控模型", status: "success", icon: "brain" },
            { title: `执行第 ${agentLoopCount} 步自主分析与编排`, status: "running", icon: "render" }
          ];
          const loopMsg = {
            id: loopMsgId,
            role: "assistant",
            content: "",
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: true,
            steps: loopSteps,
            stepsExpanded: false
          };
          setMessages((prev) => {
            const list = prev[sessionId] || [];
            return { ...prev, [sessionId]: [...list, loopMsg] };
          });
          try {
            const loopResult = await runStreamReader(loopHistory, loopMsgId, true);
            setMessages((prev) => {
              const list = prev[sessionId] || [];
              return {
                ...prev,
                [sessionId]: list.map((m) => m.id === loopMsgId ? { ...m, content: loopResult.aiReplyContent, isStreaming: false } : m)
              };
            });
            if (loopResult.interceptedAction) {
              let loopActionList = [];
              if (Array.isArray(loopResult.interceptedAction)) {
                loopActionList = loopResult.interceptedAction;
              } else if (loopResult.interceptedAction && typeof loopResult.interceptedAction === "object") {
                loopActionList = [loopResult.interceptedAction];
              }
              let isDeadlock = false;
              for (const act of loopActionList) {
                const mStr = act.method || "";
                const count = (calledToolsCount.get(mStr) || 0) + 1;
                calledToolsCount.set(mStr, count);
                if (count > 5) {
                  isDeadlock = true;
                  break;
                }
              }
              if (isDeadlock) {
                toast({
                  title: "🛡️ 安全自愈网关熔断",
                  description: `检测到 AI 员工在任务中连续多次重复调用同一接口，已强制实施安全拦截熔断以防止死循环破坏系统。`,
                  variant: "destructive"
                });
                continueLoop = false;
                setMessages((prev) => {
                  const list = prev[sessionId] || [];
                  return {
                    ...prev,
                    [sessionId]: list.map((m) => m.id === loopMsgId ? {
                      ...m,
                      content: m.content + `

🛑 **[安全自愈网关已强制熔断死循环]**`,
                      steps: loopSteps.map((s) => s.status === "running" ? { ...s, status: "failed" } : s)
                    } : m)
                  };
                });
                break;
              }
              const LOOP_MAX_TOOLS = 3;
              if (loopActionList.length > LOOP_MAX_TOOLS) {
                loopActionList = loopActionList.slice(0, LOOP_MAX_TOOLS);
              }
              const loopToolSteps = loopActionList.map((act) => {
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
              const loopRunningSteps = [
                { title: "提取意图解析并唤醒主控模型", status: "success", icon: "brain" },
                ...loopToolSteps,
                { title: "多维渲染核心响应内容", status: "pending", icon: "render" }
              ];
              setMessages((prev) => {
                const list = prev[sessionId] || [];
                return {
                  ...prev,
                  [sessionId]: list.map((m) => m.id === loopMsgId ? { ...m, steps: loopRunningSteps } : m)
                };
              });
              const loopExecPromises = loopActionList.map(async (act, idx) => {
                return executeToolCall({
                  act,
                  idx,
                  employee: activeEmployee,
                  skillMarketSkills,
                  activeSkills: loopResult.activeSkills || activeSkills,
                  collections: loopResult.collections || collections,
                  currentHistory: loopHistory,
                  requestUserConfirmation,
                  signal: abortControllerRef.current?.signal,
                  onStepUpdate: (sIdx, status, titleModifier, result) => {
                    setMessages((prev) => {
                      const list = prev[sessionId] || [];
                      return {
                        ...prev,
                        [sessionId]: list.map((m) => m.id === loopMsgId ? {
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
                        } : m)
                      };
                    });
                  }
                });
              });
              const loopCompletedResults = await Promise.all(loopExecPromises);
              let loopStepsSecond = [...loopRunningSteps];
              for (const item of loopCompletedResults) {
                loopStepsSecond = loopStepsSecond.map(
                  (step, sIdx) => sIdx === item.idx + 1 ? { ...step, status: item.actionSuccess ? "success" : "failed", result: item.actionResult } : step
                );
              }
              setMessages((prev) => {
                const list = prev[sessionId] || [];
                return {
                  ...prev,
                  [sessionId]: list.map((m) => m.id === loopMsgId ? { ...m, steps: loopStepsSecond } : m)
                };
              });
              await localDB.saveMessage({
                id: loopMsgId,
                sessionId,
                agentId: activeEmpId,
                role: "assistant",
                content: loopResult.aiReplyContent,
                reasoning_content: loopResult.reasoningContent || void 0,
                taskSteps: JSON.stringify(loopStepsSecond),
                createdAt: /* @__PURE__ */ new Date()
              });
              const thisAssistantMsg = {
                id: loopMsgId,
                role: "assistant",
                content: loopResult.aiReplyContent,
                reasoning_content: loopResult.reasoningContent || void 0,
                steps: loopStepsSecond,
                tool_calls: loopCompletedResults.map((r) => r.toolCallObj),
                timestamp: /* @__PURE__ */ new Date()
              };
              for (const item of loopCompletedResults) {
                await localDB.saveMessage({
                  id: item.systemFeedbackMsg.id,
                  sessionId,
                  agentId: activeEmpId,
                  role: item.systemFeedbackMsg.role,
                  content: item.systemFeedbackMsg.content,
                  tool_call_id: item.systemFeedbackMsg.tool_call_id,
                  name: item.systemFeedbackMsg.name,
                  attachments: item.systemFeedbackMsg.attachments,
                  createdAt: item.systemFeedbackMsg.timestamp || /* @__PURE__ */ new Date()
                });
              }
              loopHistory = [
                ...loopHistory,
                thisAssistantMsg,
                ...loopCompletedResults.map((r) => r.systemFeedbackMsg)
              ];
            } else {
              continueLoop = false;
              const finalStepsDirect = loopSteps.map((s) => ({ ...s, status: s.status === "pending" || s.status === "running" ? "success" : s.status }));
              setMessages((prev) => {
                const list = prev[sessionId] || [];
                return {
                  ...prev,
                  [sessionId]: list.map((m) => m.id === loopMsgId ? {
                    ...m,
                    content: loopResult.aiReplyContent,
                    reasoning_content: loopResult.reasoningContent || void 0,
                    steps: finalStepsDirect
                  } : m)
                };
              });
              await localDB.saveMessage({
                id: loopMsgId,
                sessionId,
                agentId: activeEmpId,
                role: "assistant",
                content: loopResult.aiReplyContent,
                reasoning_content: loopResult.reasoningContent || void 0,
                taskSteps: JSON.stringify(finalStepsDirect),
                createdAt: /* @__PURE__ */ new Date()
              });
              loopHistory = [
                ...loopHistory,
                {
                  id: loopMsgId,
                  role: "assistant",
                  content: loopResult.aiReplyContent,
                  reasoning_content: loopResult.reasoningContent || void 0,
                  steps: finalStepsDirect,
                  timestamp: /* @__PURE__ */ new Date()
                }
              ];
              if (shouldGenTitle) {
                triggerShadowTitleGenerate(sessionId, userMsg.content, loopResult.aiReplyContent);
              }
            }
          } catch (shadowErr) {
            console.error("[AgentRunner] Shadow stream run failed inside loop:", shadowErr);
            const isAbort = shadowErr.name === "AbortError";
            setMessages((prev) => {
              const list = prev[sessionId] || [];
              return {
                ...prev,
                [sessionId]: list.map((m) => m.id === loopMsgId ? {
                  ...m,
                  content: m.content + (isAbort ? `

🛑 **[会话已由用户手动中断]**` : `

⚠️ **[能力代理链路中断]** ${shadowErr.message || "大模型二次分析异常。"}`),
                  isStreaming: false,
                  steps: m.steps?.map((s, idx) => idx === m.steps.length - 1 ? { ...s, status: "failed" } : s)
                } : m)
              };
            });
            return;
          }
        }
        const newMessages = [
          {
            id: userMsg.id,
            role: userMsg.role,
            content: userMsg.content,
            attachments: userMsg.attachments,
            steps: [],
            timestamp: userMsg.timestamp || /* @__PURE__ */ new Date()
          },
          ...loopHistory.slice(currentHistory.length).map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content || "",
            reasoning_content: m.reasoning_content,
            tool_calls: m.tool_calls,
            tool_call_id: m.tool_call_id,
            name: m.name,
            attachments: m.attachments,
            steps: m.steps || [],
            timestamp: m.timestamp || /* @__PURE__ */ new Date()
          }))
        ];
        await fetch(`/api/v1/agents/${activeEmpId}/sessions/${sessionId}/messages/batch`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages })
        });
      } else {
        const finalStepsDirect = finalStepsFirst.map((s) => ({ ...s, status: s.status === "pending" || s.status === "running" ? "success" : s.status }));
        setMessages((prev) => {
          const list = prev[sessionId] || [];
          return {
            ...prev,
            [sessionId]: list.map((m) => m.id === aiMsgId ? {
              ...m,
              content: aiReplyContent,
              isStreaming: false,
              stepsExpanded: false,
              steps: finalStepsDirect
            } : m)
          };
        });
        const aiDbMsg = {
          id: aiMsgId,
          sessionId,
          agentId: activeEmpId,
          role: "assistant",
          content: aiReplyContent,
          reasoning_content: reasoningContent || void 0,
          taskSteps: JSON.stringify(finalStepsDirect),
          createdAt: /* @__PURE__ */ new Date()
        };
        await localDB.saveMessage(aiDbMsg);
        const roundMessages = [
          { id: userMsg.id, role: "user", content: userMsg.content, steps: [], attachments: userMsg.attachments, createdAt: userMsg.timestamp || /* @__PURE__ */ new Date() },
          { id: aiMsgId, role: "assistant", content: aiReplyContent, reasoning_content: reasoningContent || void 0, steps: finalStepsDirect, createdAt: /* @__PURE__ */ new Date() }
        ];
        await fetch(`/api/v1/agents/${activeEmpId}/sessions/${sessionId}/messages/batch`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: roundMessages })
        });
        if (shouldGenTitle) {
          triggerShadowTitleGenerate(sessionId, userMsg.content, aiReplyContent);
        }
      }
    } catch (err) {
      console.error("[AgentRunner] Stream processing failed:", err);
      const isAbort = err.name === "AbortError";
      setMessages((prev) => {
        const list = prev[sessionId] || [];
        return {
          ...prev,
          [sessionId]: list.map((m) => m.id === aiMsgId ? {
            ...m,
            content: m.content + (isAbort ? `

🛑 **[会话已由用户手动中断]**` : `

⚠️ **[能力代理链路中断]** ${err.message || "大模型连接超时，请重试。"}`),
            isStreaming: false,
            steps: m.steps?.map((s) => ({
              ...s,
              status: s.status === "running" || s.status === "pending" ? "failed" : s.status
            }))
          } : m)
        };
      });
    } finally {
      setIsSending(false);
      abortControllerRef.current = null;
    }
  };
  return {
    employees,
    activeEmpId,
    setActiveEmpId,
    inputText,
    setInputText,
    isSending,
    isPreviewMode,
    setIsPreviewMode,
    isInputExpanded,
    setIsInputExpanded,
    uploadedAttachments,
    setUploadedAttachments,
    isUploading,
    isMediaPickerOpen,
    setIsMediaPickerOpen,
    fileInputRef,
    textareaRef,
    chatContainerRef,
    confirmationQueue,
    setConfirmationQueue,
    sessions,
    activeSessionId,
    setActiveSessionId,
    isRenamingSessionId,
    setIsRenamingSessionId,
    renamingTitle,
    setRenamingTitle,
    loadingSessions,
    deleteConfirmOpen,
    setDeleteConfirmOpen,
    systemRoles,
    skillMarketSkills,
    pluginEnabled,
    messages,
    collapsedLogs,
    collapsedReasonings,
    collapsedUserMessages,
    employeeModalOpen,
    setEmployeeModalOpen,
    modalMode,
    activeEmployee,
    allAvailableModels,
    employeeToDelete,
    setEmployeeToDelete,
    handleCreateNewSession,
    handleDeleteSession,
    confirmDeleteSession,
    handleRenameSession,
    handleOpenCreate,
    handleOpenEdit,
    applySaveEmployee,
    confirmDeleteEmployee,
    handleDeleteEmployee,
    handleInterrupt,
    handleFileUpload,
    handleSendMessage,
    toggleLog,
    toggleReasoning,
    toggleUserMessage,
    toggleSteps,
    insertMarkdown
  };
};
const GlobalEmployeeTaskWindow = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const {
    employees,
    activeEmpId,
    setActiveEmpId
  } = useDigitalEmployees({
    providers: [],
    // 不需要在全局窗口配置模型，仅使用当前后端状态
    initialEmployees: []
  });
  reactExports.useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-employee-task-window", handleOpen);
    return () => {
      window.removeEventListener("open-employee-task-window", handleOpen);
    };
  }, []);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    EmployeeTaskDialog,
    {
      isOpen,
      onClose: () => setIsOpen(false),
      employees,
      selectedEmployeeId: activeEmpId || (employees.length > 0 ? employees[0].id : ""),
      onSelectEmployee: setActiveEmpId,
      sessionId: "global-session-temp",
      sessions: [],
      loadingSessions: false,
      onSelectSession: () => {
      },
      onCreateSession: () => {
      },
      onRenameSession: () => {
      },
      onDeleteSession: () => {
      },
      onBeforeSend: async (text) => {
        return true;
      },
      onMessagesChange: () => {
      },
      title: "全局 AI 生成",
      description: "在不支持自动回填的页面，您可以与我进行自由对话获取灵感。"
    },
    void 0,
    false,
    {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/GlobalEmployeeTaskWindow.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    void 0
  );
};
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$DashboardLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title } = Astro2.props;
  const user = Astro2.locals.user;
  const currentPath = Astro2.url.pathname;
  if (!user) {
    return Astro2.redirect("/login");
  }
  const permissions = Array.isArray(Astro2.locals.adminPermissions) ? Astro2.locals.adminPermissions : [];
  const sidebarCollections = Array.isArray(Astro2.locals.sidebarCollections) ? Astro2.locals.sidebarCollections : [];
  return renderTemplate(_a || (_a = __template(['<html lang="zh-CN"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', " - 管理系统</title>", "<!-- 将服务端权限数据注入到客户端 --><script>(function(){", "\n      window.__ADMIN_PERMISSIONS__ = permissions;\n      window.__ADMIN_USERNAME__ = username;\n    })();<\/script>", '</head> <body class="bg-slate-50 text-slate-900 overflow-hidden h-screen flex"> <div id="global-loader"></div> ', " <!-- 侧边栏 (React 组件) --> ", ' <!-- 主内容区域 --> <div class="flex-1 flex flex-col h-full overflow-hidden"> <!-- 头部导航 --> <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 shadow-sm"', '> <div class="flex items-center gap-4"> <h1 class="text-lg font-semibold text-slate-800">', '</h1> </div> <div class="flex items-center gap-6"> <span class="text-sm text-slate-500 flex items-center gap-2"> <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>\n系统已连接\n</span> ', ' <button id="logout-btn" class="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors cursor-pointer">\n退出登录\n</button> </div> </header> ', ' <!-- 动态内容渲染区 --> <main class="flex-1 overflow-y-auto p-8 relative"> <div class="mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500"> ', " </div> </main> ", " ", " </div> </body></html>"])), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), defineScriptVars({ permissions, username: user?.username }), renderHead(), renderScript($$result, "D:/ycz_me/cizhenyu/src/layouts/DashboardLayout.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "Sidebar", Sidebar, { "client:load": true, "permissions": permissions, "currentPath": currentPath, "username": user?.username, "collections": sidebarCollections, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/Sidebar", "client:component-export": "Sidebar", "data-astro-transition-persist": createTransitionScope($$result, "amt4byta") }), addAttribute(createTransitionScope($$result, "fbkggrb3"), "data-astro-transition-persist"), title, hasPermission(permissions, "plugins.manage") && renderTemplate`<a href="/admin/plugins" class="text-sm font-medium text-slate-800 hover:text-blue-600 flex items-center gap-1.5 transition-colors no-underline group"> <div class="p-1.5 bg-slate-800 text-white rounded-lg group-hover:bg-blue-600 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <path d="M12 2v8"></path> <path d="M18 12V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5"></path> <path d="M6 12h12"></path> <path d="M12 22v-6.5"></path> <path d="M9 12v2.5"></path> <path d="M15 12v2.5"></path> ` })} </svg> </div>
插件管理
</a>`, renderScript($$result, "D:/ycz_me/cizhenyu/src/layouts/DashboardLayout.astro?astro&type=script&index=1&lang.ts"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Toaster", Toaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/ui/Toaster", "client:component-export": "Toaster", "data-astro-transition-persist": createTransitionScope($$result, "s4yaekcf") }), renderComponent($$result, "GlobalEmployeeTaskWindow", GlobalEmployeeTaskWindow, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/GlobalEmployeeTaskWindow", "client:component-export": "GlobalEmployeeTaskWindow", "data-astro-transition-persist": createTransitionScope($$result, "ymoyh43p") }));
}, "D:/ycz_me/cizhenyu/src/layouts/DashboardLayout.astro", "self");
export {
  $$DashboardLayout as $,
  ArrowRight as A,
  Braces as B,
  Code as C,
  Database as D,
  Camera as E,
  FolderOpen as F,
  GripVertical as G,
  Hash as H,
  Image as I,
  List as L,
  Mail as M,
  PlusCircle as P,
  RefreshCcw as R,
  ShieldAlert as S,
  Terminal as T,
  UserPlus as U,
  Wand2 as W,
  Zap as Z,
  LayoutTemplate as a,
  buildTree as b,
  FolderClosed as c,
  Pencil as d,
  LucideIcons as e,
  flattenTreeWithPrefix as f,
  Settings2 as g,
  Puzzle as h,
  Link as i,
  PanelsTopLeft as j,
  ArrowUpRight as k,
  Server as l,
  Languages as m,
  Download as n,
  BookOpen as o,
  Bold as p,
  Italic as q,
  Table as r,
  Cpu as s,
  Code2 as t,
  useDigitalEmployees as u,
  User as v,
  CircleUser as w,
  Wallet as x,
  Coins as y,
  SquarePen as z
};
