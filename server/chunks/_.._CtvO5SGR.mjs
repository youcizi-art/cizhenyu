globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as app } from "./app_DchV5w2Z.mjs";
const __vite_import_meta_env__ = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": true, "MODE": "production", "PROD": false, "SITE": void 0, "SSR": true, "WRANGLER_ADMIN_PATTERN": "admin.example.com" };
const ALL = async (context) => {
  const { request, locals } = context;
  let cfEnv = {};
  try {
    const { env: env2 } = await import("cloudflare:workers");
    cfEnv = env2;
  } catch (e) {
    cfEnv = locals.runtime || locals;
  }
  const env = {
    ...globalThis.process?.env,
    ...Object.assign(__vite_import_meta_env__, {}),
    ...cfEnv,
    DB: cfEnv.DB,
    SESSION: cfEnv.SESSION,
    IMAGES: cfEnv.IMAGES
  };
  return app.fetch(request, env, locals.cfContext);
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
