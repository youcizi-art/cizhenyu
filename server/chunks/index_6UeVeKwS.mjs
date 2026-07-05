globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, a as renderHead, b as defineScriptVars } from "./sequence_B081Vtkc.mjs";
import { a as renderComponent } from "./worker-entry_BAuVhjGk.mjs";
import { env } from "cloudflare:workers";
import { f as createDbClient } from "./index_C8hkm3Ad.mjs";
import { PluginService } from "./PluginService_htICt3ZK.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const title = "会员中心 - 参考实现";
  const db = await createDbClient(env.DB);
  const enabledPlugins = await PluginService.getEnabledPlugins(db);
  const activeSlugs = enabledPlugins.map((p) => p.slug);
  const isLocal = Astro2.url.hostname === "localhost" || Astro2.url.hostname === "127.0.0.1";
  const siteKey = isLocal ? "1x00000000000000000000AA" : env?.TURNSTILE_SITE_KEY || "";
  return renderTemplate(_a || (_a = __template(['<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description" content="Member Center Reference Implementation"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>', "</title><script>(function(){", '\n      window.TURNSTILE_SITE_KEY = siteKey;\n    })();<\/script><script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer><\/script>', '</head> <body> <div id="member-root"> ', " </div> </body></html>"])), title, defineScriptVars({ siteKey }), renderHead(), renderComponent($$result, "App", null, { "activePlugins": activeSlugs, "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/ycz_me/cizhenyu/src/member-app/App", "client:component-export": "App" }));
}, "D:/ycz_me/cizhenyu/src/pages/member/index.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/member/index.astro";
const $$url = "/member";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
