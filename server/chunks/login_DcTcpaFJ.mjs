globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, a as renderHead, b as defineScriptVars } from "./sequence_B081Vtkc.mjs";
import { r as renderScript } from "./global_Ct6o9Iph.mjs";
import { env } from "cloudflare:workers";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.locals.user) {
    return Astro2.redirect("/admin");
  }
  const isLocal = Astro2.url.hostname === "localhost" || Astro2.url.hostname === "127.0.0.1";
  const siteKey = isLocal ? "1x00000000000000000000AA" : env?.TURNSTILE_ADMIN_SITE_KEY || "";
  return renderTemplate(_a || (_a = __template(['<html lang="zh-CN"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>登录 - 管理后台</title><script>(function(){', '\n      window.TURNSTILE_SITE_KEY = siteKey;\n    })();<\/script><script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer><\/script>', '</head> <body class="bg-gray-50 flex items-center justify-center min-h-screen"> <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold text-gray-900 mb-2">管理后台登录</h1> <p class="text-gray-500 text-sm">请输入您的凭据以继续</p> </div> <form id="login-form" class="space-y-6"> <div> <label for="username" class="block text-sm font-medium text-gray-700 mb-1">用户名</label> <input type="text" id="username" name="username" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="请输入用户名"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-1">密码</label> <input type="password" id="password" name="password" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="请输入密码"> </div> <div> <label for="verificationCode" class="block text-sm font-medium text-gray-700 mb-1">后台验证码 (Security Code)</label> <input type="password" id="verificationCode" name="verificationCode" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="请输入后台安全校验码"> </div> <div id="turnstile-container" class="flex items-center justify-center"> <div id="turnstile-widget"></div> </div> <div id="error-msg" class="text-red-500 text-sm hidden bg-red-50 p-2 rounded border border-red-100 italic"></div> <button id="submit-btn" type="submit" class="w-full bg-black text-white py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-md active:scale-[0.98]">\n立即登录\n</button> </form> <p class="mt-8 text-center text-xs text-gray-400">\n&copy; 2026 全自动外贸系统 - 安全连接\n</p> </div> ', " </body> </html>"])), defineScriptVars({ siteKey }), renderHead(), renderScript($$result, "D:/ycz_me/cizhenyu/src/pages/login.astro?astro&type=script&index=0&lang.ts"));
}, "D:/ycz_me/cizhenyu/src/pages/login.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/login.astro";
const $$url = "/login";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
