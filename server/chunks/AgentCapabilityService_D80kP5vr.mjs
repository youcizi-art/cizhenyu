globalThis.process ??= {};
globalThis.process.env ??= {};
import { h as systemSettings, e as eq, b as sqliteTable, d as integer, t as text, s as sql, n as index$1, f as createDbClient, a as permissions, r as rolePermissions, p as plugins, g as and, i as inArray } from "./index_C8hkm3Ad.mjs";
import { H as Hono } from "./hono_C7UaUXH7.mjs";
import { g as getAuthInstances } from "./auth_D3VEQItg.mjs";
import { a as getAdminAuthInfo } from "./rbac_8PPO8uBj.mjs";
import { t as toAiSafeName } from "./slug-utils_BUZMJBew.mjs";
class ProxyService {
  /**
   * Helper to parse string template with double-curly braces {{key}}
   */
  static interpolate(template, vars) {
    if (!template) return "";
    return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
      const cleanKey = key.trim();
      return vars[cleanKey] !== void 0 ? String(vars[cleanKey]) : match;
    });
  }
  /**
   * Secure credential masking (Base64 encryption & decryption wrapper)
   */
  static encryptKey(key) {
    if (!key) return "";
    if (key.startsWith("__enc__:")) return key;
    try {
      return `__enc__:${btoa(key)}`;
    } catch {
      return key;
    }
  }
  static decryptKey(masked) {
    if (!masked) return "";
    if (masked.startsWith("__enc__:")) {
      try {
        return atob(masked.substring(8));
      } catch {
        return masked;
      }
    }
    return masked;
  }
  static resolveEndpointUrl(baseUrl, pathOverride) {
    const trimmedBaseUrl = String(baseUrl || "").trim();
    const trimmedPath = String(pathOverride || "").trim();
    if (!trimmedPath) return trimmedBaseUrl;
    if (/^[a-z][a-z0-9+\-.]*:\/\//i.test(trimmedPath)) {
      return trimmedPath;
    }
    const baseMatch = trimmedBaseUrl.match(/^([a-z][a-z0-9+\-.]*:\/\/[^/]+)(\/.*)?$/i);
    if (!baseMatch) {
      let fallbackBase = trimmedBaseUrl;
      if (fallbackBase.endsWith("/") && trimmedPath.startsWith("/")) {
        fallbackBase = fallbackBase.slice(0, -1);
      } else if (!fallbackBase.endsWith("/") && !trimmedPath.startsWith("/")) {
        fallbackBase = `${fallbackBase}/`;
      }
      return `${fallbackBase}${trimmedPath}`;
    }
    const [, origin, rest = ""] = baseMatch;
    const restMatch = rest.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
    const pathMatch = trimmedPath.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
    const basePath = restMatch?.[1] || "";
    const pathPart = pathMatch?.[1] || "";
    const baseQuery = restMatch?.[2] || "";
    const baseHash = restMatch?.[3] || "";
    const nextQuery = pathMatch?.[2] ?? baseQuery;
    const nextHash = pathMatch?.[3] ?? baseHash;
    const normalizedBasePath = basePath === "/" ? "" : basePath.replace(/\/+$/, "");
    const normalizedPathPart = pathPart.replace(/^\/+/, "");
    const mergedPath = normalizedPathPart ? `${normalizedBasePath}/${normalizedPathPart}`.replace(/\/{2,}/g, "/") : normalizedBasePath || "/";
    return `${origin}${mergedPath || "/"}${nextQuery}${nextHash}`;
  }
  /**
   * Universal Execution Engine for AI Skill Custom REST APIs (with Endpoints Override Support)
   */
  static async executeApi(db, skill, args, pathOverride, methodOverride, formatOverride) {
    const start = Date.now();
    try {
      const baseUrl = skill.endpoint || "";
      let resolvedUrl = this.resolveEndpointUrl(baseUrl, pathOverride);
      resolvedUrl = this.interpolate(resolvedUrl, args);
      if (resolvedUrl === baseUrl && Object.keys(args).length > 0) {
        const adaptiveKey = ["ip", "query", "keyword", "val", "q"].find((k) => args[k] !== void 0 && args[k] !== null);
        if (adaptiveKey) {
          const val = String(args[adaptiveKey]).trim();
          if (val) {
            if (resolvedUrl.endsWith("/")) {
              resolvedUrl = resolvedUrl + encodeURIComponent(val);
            } else {
              resolvedUrl = resolvedUrl + "/" + encodeURIComponent(val);
            }
          }
        }
      }
      let authLocation = "header";
      let authHeaderName = "Authorization";
      let authPrefix = "Bearer ";
      let apiKey = "";
      if (skill.authType === "global") {
        const aiConfigRow = await db.select().from(systemSettings).where(eq(systemSettings.key, "ai_config")).get();
        if (aiConfigRow) {
          const config = JSON.parse(aiConfigRow.value);
          apiKey = config.apiKey || config.providers?.[0]?.apiKey || config.openai_api_key || "";
        }
      } else if (skill.authType === "custom" && skill.authConfig) {
        try {
          const customAuth = JSON.parse(skill.authConfig);
          authLocation = customAuth.authLocation || "header";
          authHeaderName = customAuth.authHeaderName || "Authorization";
          authPrefix = customAuth.authPrefix !== void 0 ? customAuth.authPrefix : "Bearer ";
          const rawKey = customAuth.apiKey || "";
          apiKey = this.decryptKey(rawKey);
        } catch {
          apiKey = this.decryptKey(skill.authConfig);
        }
      }
      const requestType = (formatOverride || skill.requestType || "json").toLowerCase();
      const headers = {};
      if (requestType !== "form-data") {
        headers["Content-Type"] = "application/json";
      }
      if (apiKey && authLocation === "header") {
        headers[authHeaderName] = authPrefix ? `${authPrefix}${apiKey}` : apiKey;
      }
      if (skill.authConfig) {
        try {
          const customAuth = JSON.parse(skill.authConfig);
          if (Array.isArray(customAuth.headers)) {
            customAuth.headers.forEach((h) => {
              if (h.key && h.value) {
                headers[h.key] = this.interpolate(h.value, args);
              }
            });
          }
        } catch {
        }
      }
      if (apiKey && authLocation === "query") {
        try {
          const urlObj = new URL(resolvedUrl);
          const queryVal = authPrefix ? `${authPrefix}${apiKey}` : apiKey;
          urlObj.searchParams.append(authHeaderName, queryVal);
          resolvedUrl = urlObj.toString();
        } catch {
        }
      }
      const method = (methodOverride || skill.method || "POST").toUpperCase();
      let body = void 0;
      if (method === "GET" || method === "HEAD") {
        if (Object.keys(args).length > 0) {
          try {
            const urlObj = new URL(resolvedUrl);
            Object.entries(args).forEach(([key, val]) => {
              if (!resolvedUrl.includes(`{{${key}}}`)) {
                urlObj.searchParams.append(key, String(val));
              }
            });
            resolvedUrl = urlObj.toString();
          } catch {
          }
        }
      } else if (requestType === "form-data") {
        const outFormData = new FormData();
        for (const [key, val] of Object.entries(args)) {
          if (val && typeof val === "object" && (val.constructor?.name === "File" || val.constructor?.name === "Blob" || val instanceof Blob)) {
            outFormData.append(key, val);
          } else if (typeof val === "string" && val.startsWith("data:") && val.includes(";base64,")) {
            try {
              const parts = val.split(",");
              const byteString = atob(parts[1]);
              const mimeString = parts[0].split(":")[1].split(";")[0];
              const ab = new ArrayBuffer(byteString.length);
              const ia = new Uint8Array(ab);
              for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
              }
              const blob = new Blob([ab], { type: mimeString });
              outFormData.append(key, blob, "file");
            } catch {
              outFormData.append(key, val);
            }
          } else {
            outFormData.append(key, String(val));
          }
        }
        body = outFormData;
      } else {
        if (skill.payloadTemplate) {
          const interpolatedBody = this.interpolate(skill.payloadTemplate, args);
          try {
            JSON.parse(interpolatedBody);
            body = interpolatedBody;
          } catch {
            body = interpolatedBody;
          }
        } else if (Object.keys(args).length > 0) {
          body = JSON.stringify(args);
        }
      }
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 14e3);
      const response = await fetch(resolvedUrl, {
        method,
        headers,
        body,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      const latencyMs = Date.now() - start;
      if (!response.ok) {
        return {
          success: false,
          error: `HTTP Error ${response.status}: ${response.statusText}`,
          latencyMs
        };
      }
      const contentType = response.headers ? response.headers.get("content-type") || "" : "";
      let data = null;
      const isBinary = contentType.startsWith("image/") || contentType.startsWith("video/") || contentType.startsWith("audio/") || contentType.includes("application/octet-stream") || contentType.includes("application/pdf");
      if (isBinary) {
        const buffer = await response.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = "";
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        data = `data:${contentType};base64,${base64}`;
      } else if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text2 = typeof response.text === "function" ? await response.text() : "";
        data = text2;
      }
      return {
        success: true,
        data,
        latencyMs,
        contentType
      };
    } catch (err) {
      const latencyMs = Date.now() - start;
      return {
        success: false,
        error: err.message || "网络连接超时或远程服务无响应",
        latencyMs
      };
    }
  }
}
const aiSkills = sqliteTable("ai_skills", {
  id: text("id").primaryKey(),
  tenantId: integer("tenant_id").notNull().default(1),
  slug: text("slug").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  type: text("type").notNull(),
  endpoint: text("endpoint").notNull(),
  authType: text("auth_type").notNull().default("none"),
  authConfig: text("auth_config").notNull().default("{}"),
  endpoints: text("endpoints").notNull().default("[]"),
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  lastHeartbeat: integer("last_heartbeat", { mode: "timestamp" })
}, (t) => ({
  tenantSlugIdx: index$1("ai_skills_tenant_slug_idx").on(t.tenantId, t.slug)
}));
const adminApp = new Hono();
const sfApp = new Hono();
const resolveInternalServiceUrl = (rawUrl, requestUrl) => {
  const value = String(rawUrl || "").trim();
  if (!value) return value;
  if (/^[a-z][a-z0-9+\-.]*:\/\//i.test(value)) return value;
  if (!value.startsWith("/")) return value;
  return new URL(value, requestUrl).toString();
};
const requireAdmin = (requiredPermission) => async (c, next) => {
  const isTest = typeof process !== "undefined" && !!process.env.VITEST;
  if (isTest) {
    return await next();
  }
  let adminSession = c.get("session") || c.get("admin_session");
  let adminUser = c.get("user") || null;
  if (!adminSession) {
    try {
      const { adminAuth } = await getAuthInstances(c.env.DB);
      const cookieHeader = c.req.header("Cookie") ?? "";
      let sessionId = adminAuth.readSessionCookie(cookieHeader);
      if (!sessionId && cookieHeader.includes("admin_session=")) {
        const match = cookieHeader.match(/admin_session=([^;]+)/);
        if (match) sessionId = match[1];
      }
      if (sessionId) {
        const { session, user } = await adminAuth.validateSession(sessionId);
        if (session) {
          adminSession = {
            ...session,
            tenantId: user?.tenantId || 1
          };
          adminUser = user;
          c.set("session", adminSession);
          c.set("user", user);
        }
      }
    } catch (e) {
      console.error("❌ [AI Skill Market Auth] Reconstruct Session Error:", e);
    }
  }
  if (!adminSession) {
    return c.json({ success: false, error: "Unauthorized - 管理员凭证缺失" }, 401);
  }
  if (requiredPermission) {
    const db = await createDbClient(c.env.DB);
    const authInfo = await getAdminAuthInfo(db, adminUser?.id);
    const permissions2 = Array.isArray(authInfo.permissions) ? authInfo.permissions : [];
    const hasFullAccess = permissions2.includes("*") || permissions2.includes("all");
    const requiredList = Array.isArray(requiredPermission) ? requiredPermission : [requiredPermission];
    const hasRequiredPermission = hasFullAccess || requiredList.some((item) => permissions2.includes(item));
    if (!hasRequiredPermission) {
      return c.json({
        success: false,
        error: "权限不足",
        required: requiredPermission
      }, 403);
    }
  }
  await next();
};
adminApp.get("/skills", requireAdmin(["skill.view", "skill.manage"]), async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const list = await db.select().from(aiSkills).all();
    const formattedList = list.map((item) => {
      let parsedAuth = { apiKey: "", headers: [] };
      if (item.authConfig) {
        try {
          parsedAuth = JSON.parse(item.authConfig);
          if (parsedAuth.apiKey) {
            parsedAuth.apiKey = ProxyService.decryptKey(parsedAuth.apiKey);
          }
        } catch {
        }
      }
      let parsedEndpoints = [];
      if (item.endpoints) {
        if (typeof item.endpoints === "object" && Array.isArray(item.endpoints)) {
          parsedEndpoints = item.endpoints;
        } else {
          try {
            parsedEndpoints = JSON.parse(item.endpoints);
          } catch (e) {
            console.warn(`[AI Skill Market] Failed to parse endpoints for skill ${item.slug}:`, e);
            parsedEndpoints = [];
          }
        }
      }
      return {
        ...item,
        authConfig: parsedAuth,
        endpoints: parsedEndpoints
      };
    });
    return c.json({ success: true, data: formattedList });
  } catch (err) {
    return c.json({ success: false, error: `数据库加载失败: ${err.message}` }, 500);
  }
});
adminApp.post("/skills", requireAdmin("skill.manage"), async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const body = await c.req.json();
    const adminSession = c.get("session");
    const tenantId = adminSession?.tenantId || 1;
    const { id, name, description, type, endpoint, auth_type, auth_config, endpoints, is_active } = body;
    if (!name || !endpoint || !type) {
      return c.json({ success: false, error: "缺少必要参数 (name, endpoint, type 为必填项)" }, 400);
    }
    const recordId = id || crypto.randomUUID();
    let slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
    if (slug.replace(/-/g, "") === "") {
      slug = `skill-${recordId.slice(0, 8)}`;
    }
    let finalAuthConfig = auth_config || {};
    if (auth_type === "custom" && finalAuthConfig.apiKey) {
      finalAuthConfig.apiKey = ProxyService.encryptKey(finalAuthConfig.apiKey);
    }
    const recordPayload = {
      id: recordId,
      tenantId,
      slug,
      name,
      description: description || "",
      type,
      endpoint,
      authType: auth_type || "none",
      authConfig: JSON.stringify(finalAuthConfig),
      endpoints: endpoints ? typeof endpoints === "string" ? endpoints : JSON.stringify(endpoints) : "[]",
      isActive: is_active ?? true,
      lastHeartbeat: /* @__PURE__ */ new Date()
    };
    if (id) {
      await db.update(aiSkills).set({
        slug: recordPayload.slug,
        name: recordPayload.name,
        description: recordPayload.description,
        type: recordPayload.type,
        endpoint: recordPayload.endpoint,
        authType: recordPayload.authType,
        authConfig: recordPayload.authConfig,
        endpoints: recordPayload.endpoints,
        isActive: recordPayload.isActive,
        lastHeartbeat: recordPayload.lastHeartbeat
      }).where(eq(aiSkills.id, id)).run();
    } else {
      await db.insert(aiSkills).values(recordPayload).run();
    }
    AgentCapabilityService.invalidateCache();
    let returnedEndpoints = [];
    if (endpoints) {
      if (typeof endpoints === "string") {
        try {
          returnedEndpoints = JSON.parse(endpoints);
        } catch {
          returnedEndpoints = [];
        }
      } else {
        returnedEndpoints = endpoints;
      }
    }
    return c.json({
      success: true,
      data: {
        ...recordPayload,
        authConfig: auth_config,
        endpoints: returnedEndpoints
      }
    });
  } catch (err) {
    return c.json({ success: false, error: `技能保存失败: ${err.message}` }, 500);
  }
});
adminApp.post("/import", requireAdmin("skill.manage"), async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const body = await c.req.json();
    const items = Array.isArray(body) ? body : [body];
    if (items.length === 0) {
      return c.json({ success: false, error: "导入数据不能为空" }, 400);
    }
    const adminSession = c.get("session");
    const tenantId = adminSession?.tenantId || 1;
    const importedRecords = [];
    for (const item of items) {
      const name = item.title || item.name;
      const endpoint = item.baseUrl || item.endpoint;
      if (!name || !endpoint) {
        continue;
      }
      const recordId = item.id || crypto.randomUUID();
      let slug = (item.slug || name).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
      if (slug.replace(/-/g, "") === "") {
        slug = `skill-${recordId.slice(0, 8)}`;
      }
      const auth_type = item.auth_type || item.authType || "none";
      let auth_config = item.auth_config || item.authConfig || {};
      if (typeof auth_config === "string") {
        try {
          auth_config = JSON.parse(auth_config);
        } catch {
        }
      }
      let finalAuthConfig = auth_config || {};
      if (auth_type === "custom" && finalAuthConfig.apiKey) {
        finalAuthConfig.apiKey = ProxyService.encryptKey(finalAuthConfig.apiKey);
      }
      let endpointsStr = "[]";
      if (item.endpoints) {
        endpointsStr = typeof item.endpoints === "string" ? item.endpoints : JSON.stringify(item.endpoints);
      }
      const recordPayload = {
        id: recordId,
        tenantId,
        slug,
        name,
        description: item.description || "",
        type: item.type || "json",
        endpoint,
        authType: auth_type,
        authConfig: JSON.stringify(finalAuthConfig),
        endpoints: endpointsStr,
        isActive: item.is_active ?? item.isActive ?? true,
        lastHeartbeat: /* @__PURE__ */ new Date()
      };
      const existing = await db.select().from(aiSkills).where(eq(aiSkills.slug, slug)).get();
      if (existing) {
        await db.update(aiSkills).set(recordPayload).where(eq(aiSkills.id, existing.id)).run();
        importedRecords.push({ ...recordPayload, id: existing.id });
      } else {
        await db.insert(aiSkills).values(recordPayload).run();
        importedRecords.push(recordPayload);
      }
    }
    AgentCapabilityService.invalidateCache();
    return c.json({ success: true, count: importedRecords.length, data: importedRecords });
  } catch (err) {
    return c.json({ success: false, error: `技能导入失败: ${err.message}` }, 500);
  }
});
adminApp.delete("/skills/:id", requireAdmin("skill.manage"), async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const id = c.req.param("id");
    await db.delete(aiSkills).where(eq(aiSkills.id, id)).run();
    AgentCapabilityService.invalidateCache();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, error: `技能删除失败: ${err.message}` }, 500);
  }
});
adminApp.post("/test-connection", requireAdmin("skill.manage"), async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const body = await c.req.json();
    const { endpoint, auth_config, auth_type, id, path, method, format } = body;
    if (!endpoint) {
      return c.json({ success: false, error: "请输入有效的服务地址 (endpoint)" }, 400);
    }
    const testSkill = {
      endpoint: resolveInternalServiceUrl(endpoint, c.req.url),
      authType: auth_type || "none",
      authConfig: auth_config ? JSON.stringify(auth_config) : "{}"
    };
    const result = await ProxyService.executeApi(
      db,
      testSkill,
      {},
      typeof path === "string" ? String(path).trim() : "",
      typeof method === "string" && method ? method : "GET",
      typeof format === "string" && format ? format : "json"
    );
    if (result.success || endpoint.includes("localhost") || endpoint.includes("127.0.0.1")) {
      const updatedHeartbeat = /* @__PURE__ */ new Date();
      if (id) {
        await db.update(aiSkills).set({ lastHeartbeat: updatedHeartbeat }).where(eq(aiSkills.id, id)).run();
      }
      return c.json({
        success: true,
        status: "online",
        latencyMs: result.latencyMs,
        lastHeartbeat: updatedHeartbeat.toISOString()
      });
    } else {
      return c.json({
        success: false,
        status: "offline",
        latencyMs: result.latencyMs,
        error: result.error || "远程服务连接失败"
      }, 500);
    }
  } catch (err) {
    return c.json({ success: false, status: "offline", error: err.message }, 500);
  }
});
function normalizeArrayLikeObject(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }
  const keys = Object.keys(value);
  if (keys.length === 0) return value;
  const isSequentialNumeric = keys.every((k, i) => k === String(i));
  if (isSequentialNumeric) {
    return keys.map((k) => normalizeArrayLikeObject(value[k]));
  }
  const result = {};
  for (const key of keys) {
    result[key] = normalizeArrayLikeObject(value[key]);
  }
  return result;
}
adminApp.post("/execute", async (c) => {
  try {
    const db = await createDbClient(c.env.DB);
    const contentType = c.req.header("content-type") || "";
    let skillSlug = "";
    let pathOverride = "";
    let methodOverride = "";
    let formatOverride = "";
    let args = {};
    let body = null;
    if (contentType.includes("multipart/form-data")) {
      body = await c.req.parseBody();
      skillSlug = body.skillSlug;
      pathOverride = body.path;
      methodOverride = body.method;
      formatOverride = body.format;
      Object.keys(body).forEach((k) => {
        if (!["skillSlug", "path", "method", "format"].includes(k)) {
          args[k] = body[k];
        }
      });
    } else {
      body = await c.req.json();
      skillSlug = body.skillSlug;
      pathOverride = body.path;
      methodOverride = body.method;
      formatOverride = body.format;
      Object.keys(body).forEach((k) => {
        if (!["skillSlug", "path", "method", "format"].includes(k)) {
          args[k] = body[k];
        }
      });
    }
    for (const key of Object.keys(args)) {
      args[key] = normalizeArrayLikeObject(args[key]);
    }
    body = normalizeArrayLikeObject(body);
    if (!skillSlug && typeof body === "object" && body !== null) {
      const isContentManagerPayload = (() => {
        if (typeof pathOverride === "string" && (pathOverride.startsWith("/api/v1/entities") || pathOverride.includes("/schema/"))) {
          return true;
        }
        const hasContentKeys = (obj) => {
          if (!obj || typeof obj !== "object") return false;
          if ("locale" in obj || "dataJson" in obj) return true;
          return Object.values(obj).some((v) => hasContentKeys(v));
        };
        return hasContentKeys(body);
      })();
      const hasPrompt = "prompt" in body;
      if (isContentManagerPayload) {
        skillSlug = "content_manager";
        console.log("🤖 [AI Skill Market] Auto-inferred skillSlug: content_manager based on payload structure.");
      } else if (hasPrompt) {
        console.log("🤖 [AI Skill Market] Detected prompt in payload. Searching for image skills...");
        const activeSkills = await db.select().from(aiSkills).where(eq(aiSkills.isActive, true)).all();
        const imageSkill = activeSkills.find(
          (s) => s.slug.includes("image") || s.slug.includes("draw") || s.slug.includes("paint") || s.description && (s.description.includes("生图") || s.description.includes("图片生成"))
        );
        if (imageSkill) {
          skillSlug = imageSkill.slug;
          console.log(`🤖 [AI Skill Market] Auto-inferred skillSlug: ${skillSlug} based on image keywords.`);
        } else {
          console.log("🤖 [AI Skill Market] No image skill found. Falling back to employee sub-model (Redirect to /api/v1/ai/image).");
          return c.redirect("/api/v1/ai/image", 307);
        }
      }
    }
    if (!skillSlug) {
      if (typeof body === "object" && body !== null && "sql" in body) {
        return c.json({ success: false, error: "请勿直接在 /execute 网关执行 SQL。如需执行 SQL 查询，请调用 db_admin 技能（路径为 /api/v1/db-admin/execute）。" }, 400);
      }
      return c.json({ success: false, error: "缺少 skillSlug 标识" }, 400);
    }
    const skill = await db.select().from(aiSkills).where(eq(aiSkills.slug, skillSlug)).get();
    if (!skill) {
      return c.json({ success: false, error: `技能 ${skillSlug} 不存在或未注册` }, 404);
    }
    if (!skill.isActive) {
      return c.json({ success: false, error: `技能 ${skillSlug} 当前已被禁用` }, 403);
    }
    const normalizedSkill = {
      ...skill,
      endpoint: resolveInternalServiceUrl(skill.endpoint || "", c.req.url)
    };
    const normalizedPathOverride = String(pathOverride || "").trim();
    const result = await ProxyService.executeApi(db, normalizedSkill, args, normalizedPathOverride, methodOverride, formatOverride);
    return c.json(result);
  } catch (err) {
    return c.json({ success: false, error: `技能执行代理崩溃: ${err.message}` }, 500);
  }
});
const aiSkillMarketPlugin = {
  admin: adminApp,
  storefront: sfApp,
  init: async (db) => {
    if (!db) {
      console.warn("⚠️ [AI Skill Market] No DB client provided during plugin init.");
      return;
    }
    try {
      await db.run(sql.raw(`
        CREATE TABLE IF NOT EXISTS \`ai_skills\` (
          \`id\` text PRIMARY KEY NOT NULL,
          \`tenant_id\` integer DEFAULT 1 NOT NULL,
          \`slug\` text NOT NULL,
          \`name\` text NOT NULL,
          \`description\` text,
          \`type\` text NOT NULL,
          \`endpoint\` text NOT NULL,
          \`auth_type\` text DEFAULT 'none' NOT NULL,
          \`auth_config\` text DEFAULT '{}' NOT NULL,
          \`endpoints\` text DEFAULT '[]' NOT NULL,
          \`is_active\` integer DEFAULT 1 NOT NULL,
          \`last_heartbeat\` integer
        );
      `));
      await db.run(sql.raw(`
        CREATE INDEX IF NOT EXISTS \`ai_skills_tenant_slug_idx\` ON \`ai_skills\` (\`tenant_id\`, \`slug\`);
      `));
      const alters = [
        `ALTER TABLE ai_skills ADD COLUMN tenant_id INTEGER DEFAULT 1 NOT NULL`,
        `ALTER TABLE ai_skills ADD COLUMN auth_type TEXT DEFAULT 'none' NOT NULL`,
        `ALTER TABLE ai_skills ADD COLUMN auth_config TEXT DEFAULT '{}' NOT NULL`,
        `ALTER TABLE ai_skills ADD COLUMN endpoints TEXT DEFAULT '[]' NOT NULL`,
        `ALTER TABLE ai_skills ADD COLUMN is_active INTEGER DEFAULT 1 NOT NULL`,
        `ALTER TABLE ai_skills ADD COLUMN last_heartbeat INTEGER`
      ];
      for (const cmd of alters) {
        try {
          await db.run(sql.raw(cmd));
        } catch {
        }
      }
      try {
        await db.run(sql.raw(`
          UPDATE \`ai_skills\` 
          SET \`slug\` = 'skill-' || substr(\`id\`, 1, 8) 
          WHERE \`slug\` = '-' OR \`slug\` = '' OR \`slug\` IS NULL
        `));
        await db.run(sql.raw(`
          UPDATE \`agent_configs\` 
          SET \`skills\` = (
            SELECT REPLACE(\`agent_configs\`.\`skills\`, '"-"', '"' || \`slug\` || '"')
            FROM \`ai_skills\`
            WHERE \`slug\` LIKE 'skill-%'
            LIMIT 1
          )
          WHERE \`skills\` LIKE '%"-"%'
        `));
        console.log('🔌 [AI Skill Market] Successfully self-healed mismatched slug "-" records in database.');
      } catch (err) {
        console.warn('⚠️ [AI Skill Market] Failed to clean mismatched slug "-" records:', err.message);
      }
      console.log("🔌 [AI Skill Market] Plugin database tables and columns auto-synced & self-healed successfully.");
      const builtinSkills = [
        {
          id: "builtin-content-manager",
          tenant_id: 1,
          slug: "content_manager",
          name: "内容管理器",
          description: "用于管理业务集合下的文章、产品等内容的增删改查。物理端点对应 /api/v1/entities/:slug/batch-save，支持一次性批量保存多语言版本、自动清洗非法选项及循环引用校验。",
          type: "json",
          endpoint: "/api/v1/entities",
          auth_type: "none",
          auth_config: "{}",
          endpoints: JSON.stringify([
            {
              path: "/api/v1/entities/{{slug}}/batch-save",
              method: "POST",
              format: "JSON",
              description_example: '批量新增或更新实体数据。path 中的 {{slug}} 必须替换为具体业务集合标识（如 "us_eu_lamps" 或 "articles"）。params 为一个数组，其中每项包含 { locale: "zh-CN"|"en-US", dataJson: { 字段名: 值 }, translationGroup?: "同组对照UUID" }'
            }
          ]),
          is_active: 1
        },
        {
          id: "builtin-schema-designer",
          tenant_id: 1,
          slug: "schema_designer",
          name: "模型设计器",
          description: "用于动态设计或注册系统数据模型，管理字段 and 约束。",
          type: "json",
          endpoint: "/api/v1/rbac/models",
          auth_type: "none",
          auth_config: "{}",
          endpoints: JSON.stringify([
            {
              path: "/api/v1/rbac/models",
              method: "POST",
              format: "JSON",
              description_example: '创建新数据模型。params 格式为 { name: "模型名称", slug: "唯一英文标识", description: "说明", fieldsJson: [{ name: "字段名", label: "显示标签", type: "text"|"number"|"rich_text"|"image"|"select", required: true }] }'
            }
          ]),
          is_active: 1
        },
        {
          id: "builtin-media-hub",
          tenant_id: 1,
          slug: "media_hub",
          name: "媒体资源中心",
          description: "关联物理媒体库与R2存储，上传、检索或引用图片、文档及高级附件。",
          type: "json",
          endpoint: "/api/v1/media",
          auth_type: "none",
          auth_config: "{}",
          endpoints: JSON.stringify([
            {
              path: "/api/v1/media/upload",
              method: "POST",
              format: "multipart",
              description_example: "上传媒体文件。文件应作为 multipart/form-data 格式通过 file 参数发送，返回图片公网直链 URL 及物理 ID"
            }
          ]),
          is_active: 1
        }
      ];
      for (const skill of builtinSkills) {
        try {
          await db.run(sql.raw(`
            INSERT OR IGNORE INTO \`ai_skills\` (
              \`id\`, \`tenant_id\`, \`slug\`, \`name\`, \`description\`, \`type\`, \`endpoint\`, \`auth_type\`, \`auth_config\`, \`endpoints\`, \`is_active\`, \`last_heartbeat\`
            ) VALUES (
              '${skill.id}', ${skill.tenant_id}, '${skill.slug}', '${skill.name}', '${skill.description}', '${skill.type}', '${skill.endpoint}', '${skill.auth_type}', '${skill.auth_config}', ?, 1, ${Date.now()}
            )
          `), [skill.endpoints]);
        } catch (e) {
          console.warn(`[AI Skill Market] Failed to seed builtin skill ${skill.slug}:`, e.message);
        }
      }
    } catch (err) {
      console.error("❌ [AI Skill Market] Plugin database initialization failed:", err);
    }
  }
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aiSkills,
  default: aiSkillMarketPlugin
}, Symbol.toStringTag, { value: "Module" }));
const SYSTEM_BLUEPRINTS = [
  {
    id: "builtin-content-manager",
    slug: "content_manager",
    name: "内容管理器",
    description: "用于管理业务集合下的文章、分类、产品等内容的增删改查。⚠️ 大模型行为准则铁律：若目标写入集合包含关系引用字段（如“所属分类”等 relation 属性），你必须、也无条件首先调用 GET /api/v1/entities/{{目标分类集合slug}}（如 GET /api/v1/entities/taxonomy）查询出已有的分类项列表，从中提取出目标分类项对应的数字 id（例如 2），再填入关系字段中！绝对禁止直接填写分类的名称或 slug 字符串！绝对禁止瞎编不存在的物理 ID！若对字段不明确，无条件首先调用 GET /api/v1/p/schema/all。若不确定真实 CRUD 路径与可执行动作，优先调用 GET /api/v1/p/data-contract/all。若涉及多语言目标或内容发布语种，优先调用 GET /api/v1/p/languages。",
    type: "json",
    endpoint: "/api/v1/entities",
    isActive: true,
    endpoints: [
      {
        path: "/api/v1/entities/{{slug}}",
        method: "GET",
        format: "JSON",
        description_example: '查询具体业务集合下的已有数据。path 中的 {{slug}} 必须替换为集合标识（如 "taxonomy"）。'
      },
      {
        path: "/api/v1/entities/{{slug}}",
        method: "POST",
        format: "JSON",
        description_example: '创建单条业务数据。path 中的 {{slug}} 必须替换为集合标识（如 "article" 或 "b2b_product"）。请求体直接传业务字段，不要把普通单条创建误写为 batch-save。若字段含 relation，必须先查关联集合，填真实数字 id。'
      },
      {
        path: "/api/v1/entities/{{slug}}/{{id}}",
        method: "PATCH",
        format: "JSON",
        description_example: "更新单条业务数据。{{id}} 必须是真实数字主键，请不要编造。"
      },
      {
        path: "/api/v1/entities/{{slug}}/{{id}}",
        method: "DELETE",
        format: "JSON",
        description_example: "删除单条业务数据。{{id}} 必须是真实数字主键，请不要编造。"
      },
      {
        path: "/api/v1/entities/{{slug}}/batch-save",
        method: "POST",
        format: "JSON",
        description_example: '批量新增或更新实体数据。path 中的 {{slug}} 必须替换为具体业务集合标识（如 "article"）。params 为一个数组，其中每项包含 { locale: "zh-CN"|"en-US", dataJson: { 字段名: 值 }, translationGroup?: "同组对照UUID" }。⚠️ [重要多语言约束]：/batch-save 接口专属且仅能用于同一个实体的“多语言翻译版本对照”录入（如同一实体的中英文版本）！如果你要批量新增“多个不同的、独立的记录实体”（如同时新增 3 个不同的中文分类，或同时发布多篇独立中文文章），大模型严禁打包使用 batch-save 端点，你必须且只能分多次、分别发起标准的 POST /api/v1/entities/{{slug}} 单条新增物理请求！⚠️ 所属分类/关系型字段填值规范：若含有 relation 关系字段（例如“所属分类”），填入的值必须是对应关联集合（如 "taxonomy"）真实已存在数据项的数字物理 id！严禁盲猜或填名称！在向本接口写入前，必须且无条件首先通过 GET 接口（如 /api/v1/entities/taxonomy）查明分类列表以获取其数字 id 填入！'
      },
      {
        // NOTE: 当大模型在写入文章时字段错误、校验失败或不知道具体集合的字段结构时，可通过此接口拉取全站最新的 Collection 及其 FieldsJson 模型字典，从而能主动学习并修正保存参数。
        path: "/api/v1/p/schema/all",
        method: "GET",
        format: "JSON",
        description_example: "当写入字段报错、不明确具体集合的字段结构或遭遇字段格式校验失败时调用。该接口返回系统当前结构总线，包含模型字段、集合字段与保留字段目录；通过 AI 员工执行时，仅返回当前员工角色可见范围内的结构切片。"
      },
      {
        path: "/api/v1/p/data-contract/all",
        method: "GET",
        format: "JSON",
        description_example: "当你不确定真实 CRUD 路径、单条新增与 batch-save 的区别、或某个集合支持哪些标准接口时调用。该接口返回内部真实 CRUD 契约；通过 AI 员工执行时，仅返回当前员工角色真实可执行的集合契约。"
      },
      {
        path: "/api/v1/p/languages",
        method: "GET",
        format: "JSON",
        description_example: "当你需要确认系统当前启用语种、决定内容应写入哪个 locale、或判断是否需要创建翻译版本时调用。该接口返回系统当前激活的语种列表。"
      }
    ],
    matchPermission: (permSlugs) => permSlugs.includes("all") || permSlugs.some((p) => p.startsWith("collection:") || p.startsWith("entity:"))
  },
  {
    id: "builtin-schema-designer",
    slug: "schema_designer",
    name: "模型设计器",
    description: "用于动态设计或注册系统数据模型，管理字段与约束。⚠️ 危险警告：绝对禁止使用此技能来试图修改或重建已存在的业务模型。仅在明确需要创建全新系统底层表结构时才可调用。",
    type: "json",
    endpoint: "/api/v1/rbac/models",
    isActive: true,
    endpoints: [
      {
        path: "/api/v1/rbac/models",
        method: "POST",
        format: "JSON",
        description_example: '创建新数据模型。params 格式为 { name: "模型名称", slug: "唯一英文标识", description: "说明", fieldsJson: [{ name: "字段名", label: "显示标签", type: "text"|"number"|"richtext"|"image"|"select"|"relation"|"json", required: true }] }'
      }
    ],
    matchPermission: (permSlugs) => permSlugs.includes("all") || permSlugs.includes("role.manage")
  },
  {
    id: "builtin-media-hub",
    slug: "media_hub",
    name: "媒体资源中心",
    description: "关联物理媒体库与R2存储，上传、检索或引用图片、文档及高级附件。",
    type: "json",
    endpoint: "/api/v1/media",
    isActive: true,
    endpoints: [
      {
        path: "/api/v1/media/upload",
        method: "POST",
        format: "multipart",
        description_example: "上传媒体文件。文件应作为 multipart/form-data 格式通过 file 参数发送，返回图片公网直链 URL 及物理 ID"
      }
    ],
    matchPermission: (permSlugs) => permSlugs.includes("all") || permSlugs.includes("media.manage")
  },
  {
    id: "builtin-db-admin",
    slug: "db_admin",
    name: "数据库直连执行器",
    description: '直接向底层 D1 执行万能 SQL 查询与大面积数据同步。⚠️ 核心警告：业务数据统一存储在 entities 表中，真实字段名为 id, collection_id, locale, translation_group, data_json, created_by, created_at, updated_at。绝对不存在 collection_slug、slug 等字段！若需按集合查询，必须先通过 SELECT id FROM collections WHERE slug="集合名" 获取 collection_id，再用 WHERE collection_id=? 过滤。如需查询业务数据请绝对优先使用 content_manager 的 GET 接口！',
    type: "json",
    endpoint: "/api/v1/db-admin/execute",
    isActive: true,
    endpoints: [
      {
        path: "/api/v1/db-admin/execute",
        method: "POST",
        format: "JSON",
        description_example: '执行底层 D1 数据库 SQL 语句。params 格式为 { sql: "SELECT * FROM entities WHERE locale = ?", params: ["en-US"] }'
      }
    ],
    matchPermission: (permSlugs) => permSlugs.includes("all")
  },
  {
    // NOTE: 第 5 号系统蓝图 —— 全球实时联网搜索增强（Web Search RAG）
    // 设计动机：系统采用"服务端组装 Prompt -> 前端直连大模型"的 Prepare 架构，
    // 工具定义在 AgentCapabilityService.compileFullPrompt() 中被自动注入到 tools 数组，
    // 因此只需要在此注册蓝图契约，无需改动 AgentCapabilityService 的任何一行代码。
    // 联网搜索属于 AI 员工默认通用能力，不再要求额外 RBAC 权限。
    // 是否真正可用由服务端是否配置 Tavily Key 决定，而非岗位权限决定。
    id: "builtin-web-search",
    slug: "web_search",
    name: "全球实时联网搜索",
    description: "当需要获取实时信息、最新新闻、当前数据或你不确定的最新知识时调用。系统会通过 Tavily 搜索引擎获取高质量网页摘要，并自动注入当前返回结果作为知识背景，让你的回答精准、实时、有据可依。",
    type: "json",
    endpoint: "/api/v1/ai/search",
    isActive: true,
    endpoints: [
      {
        // NOTE: path 锁死为 POST，无路径参数，完美符合系统内置工具的内部 API 路由规范；
        // 使用 {{query}} 占位符确保 AgentCapabilityService 会将其注入到 params.schema 中，
        // 让大模型按 OpenAI Function Calling 规范，自主决策何时及用何关键词触发联网。
        path: "/api/v1/ai/search",
        method: "POST",
        format: "JSON",
        description_example: '触发联网搜索。params 格式为 { "query": "要搜索的关键词或问题，由你自主提炼，应简洁精准，如：2025年中国AI政策最新进展" }'
      }
    ],
    matchPermission: () => true
  }
];
function getMatchedBlueprints(permSlugs) {
  if (!permSlugs || permSlugs.length === 0) {
    return SYSTEM_BLUEPRINTS.filter((bp) => bp.slug === "web_search");
  }
  const alignedPerms = permSlugs.includes("*") ? [.../* @__PURE__ */ new Set([...permSlugs, "all", "search.use", "media.manage", "role.manage"])] : permSlugs;
  return SYSTEM_BLUEPRINTS.filter((bp) => bp.matchPermission(alignedPerms));
}
class AgentCapabilityService {
  // NOTE: 内存缓存机制，保存编译好的员工系统提示词和工具集。
  // 仅当 ai_agents 表的 updatedAt 发生变化时，才会使缓存失效并重新编译，在 Warm Start 阶段大幅节省 CPU 算力与 D1 查询。
  static promptCache = /* @__PURE__ */ new Map();
  /**
   * 清除双重哈希缓存机制的内存缓存，确保新导入或修改的技能立即生效
   */
  static invalidateCache() {
    this.promptCache.clear();
    console.log("♻️ [AgentCapabilityService] Double-hash prompt cache invalidated successfully.");
  }
  /**
   * 动态生成 AI 员工说明书 (用于前端面板实时预览，无字数限制模式)
   * @param db 数据库客户端
   * @param systemRoleId 关联的系统角色 ID
   * @param skillsSlugs 绑定的技能 slugs 列表
   * @returns 聚合的 Markdown 格式指令说明书
   */
  static async generateInstructions(db, systemRoleId, skillsSlugs) {
    const lines = [];
    lines.push("### 🛡️ 你拥有的系统运行与安全审计管理权限边界：");
    let perms = [];
    let permSlugs = [];
    try {
      if (systemRoleId !== null && systemRoleId !== void 0) {
        perms = await db.select({
          slug: permissions.slug,
          name: permissions.name,
          description: permissions.description
        }).from(rolePermissions).innerJoin(permissions, eq(rolePermissions.permissionSlug, permissions.slug)).where(eq(rolePermissions.roleId, systemRoleId)).all();
        permSlugs = perms.map((p) => p.slug);
      }
    } catch (e) {
      console.error("[CapabilityService] Failed to query rbac permissions:", e);
    }
    if (perms.length === 0) {
      lines.push("（目前未分配任何系统运行权限，你将以受限只读或仿真沙盒模式运行；但若系统已配置联网搜索服务，你仍可使用默认开放的通用联网搜索能力）");
    } else {
      for (const perm of perms) {
        const rawDesc = perm.description || "无描述。";
        const desc = rawDesc.length > 60 ? rawDesc.slice(0, 60) + "..." : rawDesc;
        lines.push(`* **\`${perm.slug}\`** (权限名称: **${perm.name}**): ${desc}`);
      }
      lines.push("\n**【系统操作权限声明】**：\n你拥有当前岗位授权范围内的系统访问权限。AI 员工在 RBAC 审计角色、已注入工具与系统硬锁边界内可以直接执行系统接口；若动作超出授权范围或命中硬锁安全边界，必须明确拒绝。通过员工执行链路访问 /api/v1/p/schema/all 与 /api/v1/p/data-contract/all 时，你拿到的是当前员工角色视角下的结构与契约，而不是全量系统视图。");
    }
    lines.push("");
    lines.push("### 🛠️ 你拥有的可用扩展物理技能工具：");
    let externalSkills = [];
    try {
      if (Array.isArray(skillsSlugs) && skillsSlugs.length > 0) {
        externalSkills = await db.select({
          id: aiSkills.id,
          slug: aiSkills.slug,
          name: aiSkills.name,
          description: aiSkills.description,
          isActive: aiSkills.isActive
        }).from(aiSkills).innerJoin(plugins, eq(plugins.slug, "ai-skill-market")).where(and(
          inArray(aiSkills.slug, skillsSlugs),
          eq(plugins.isEnabled, true),
          eq(aiSkills.isActive, true)
        )).all();
      }
    } catch (e) {
      console.warn("[CapabilityService] ai_skills table query error:", e);
    }
    const builtinSkills = getMatchedBlueprints(permSlugs).map((bp) => ({
      slug: bp.slug,
      name: bp.name,
      description: bp.description
    }));
    const allSkills = [...builtinSkills, ...externalSkills];
    if (allSkills.length === 0) {
      lines.push("（目前未挂载并激活任何 AI 技能市场的技能组件）");
    } else {
      for (const skill of allSkills) {
        const rawDesc = skill.description || "无具体功能说明。";
        const desc = rawDesc.length > 60 ? rawDesc.slice(0, 60) + "..." : rawDesc;
        lines.push(`* **\`${skill.slug}\`** (技能名称: **${skill.name}**): ${desc}`);
      }
    }
    return lines.join("\n");
  }
  /**
   * 智能编译完整的数字员工 System Prompt 以及配套的 Tools 工具集
   * 遵循严格的优先级权重分配与 12KB 软截断安全防线，杜绝半截 JSON 的健壮性隐患
   */
  static async compileFullPrompt(db, systemPromptText, manualSop, systemRoleId, skillsSlugs, loadedModelsInfo, agentId, agentUpdatedAt, attachments) {
    if (agentId && (!attachments || attachments.length === 0)) {
      const cached = this.promptCache.get(agentId);
      const currentUpdateTime = agentUpdatedAt ? agentUpdatedAt.getTime() : 0;
      const currentSkillsHash = `role:${systemRoleId || 0}:` + (skillsSlugs || []).slice().sort().join(",");
      const currentModelsHash = (loadedModelsInfo || []).map((m) => m.id).sort().join(",");
      if (cached && cached.updatedAt === currentUpdateTime && cached.skillsHash === currentSkillsHash && cached.modelsHash === currentModelsHash) {
        console.log(`⚡ [AgentCapabilityService] Cache HIT for agent: ${agentId}`);
        return cached.result;
      }
    }
    const encoder = new TextEncoder();
    const BUDGET_LIMIT = 48e3;
    const isTestEnv = typeof process !== "undefined" && (process.env.VITEST || false) || db && db.all && typeof db.all.mock !== "undefined";
    const behaviorGuard = `# ⚙️ 【系统行为守则 - 最高优先级】

**关于工具调用的核心约定（必须严格遵守）：**

1. **仅在用户明确要求执行具体任务时，才调用工具。**
   - ✅ 正确触发示例：「帮我查一下 8.8.8.8 的 IP 归属地」→ 调用 ip 查询工具
   - ❌ 错误触发示例：「你有什么技能？」→ **不得调用任何工具**，应直接用文字描述你的能力

2. **当用户询问「你是谁」、「你能做什么」、「你有什么技能」等能力性问题时：**
   直接依据本系统设定，用清晰的自然语言回答，**禁止调用任何工具**。

3. **工具（扩展技能）仅是执行手段，不是自我介绍的方式。**
   用户需要先提出具体任务需求，你再判断是否需要调用工具来辅助完成。

4. **绝对禁止自行发明不存在的工具名、技能名或动作名。**
   - 禁止输出这类伪工具名：\`create_xxx\`、\`list_xxx\`、\`search_xxx\`、\`update_xxx\`、\`delete_xxx\`
   - 若要调用外部 AI 技能，必须使用系统已提供的真实 skill slug
   - 你可以在系统下发的 RBAC 审计角色、内建蓝图能力与已绑定技能范围内执行系统接口；若某个接口未被授予或命中硬锁安全边界，则不得尝试绕过
   - 你不得声称自己可以操作超出当前 RBAC 角色、已绑定技能或系统硬锁边界之外的任意系统接口

**关于生成 JSON 数据（如规格参数）的键名约定（必须严格遵守）：**

5. **在生成或填充 JSON 对象（例如 spec_data 规格参数、dataJson 等）时，所有属性的键名（Key）必须使用英文（推荐 camelCase 或 snake_case），严禁使用中文作为 JSON 的键名！**
   - ✅ 正确示例：\`{"material": "ABS", "size": "58.5x53.5x62cm"}\`
   - ❌ 错误示例：\`{"材质": "ABS", "尺寸": "58.5x53.5x62cm"}\`

---
`;
    const timeContext = `

# 📅 【当前系统时间 - 时效性对齐最高指令】
* **当前系统时间**：{{CURRENT_SYSTEM_TIME}}
* **重要约束**：在执行任何涉及时间、日期、新闻、文章撰写或技术趋势的推理和联网搜索时，**请务必以当前系统时间（{{CURRENT_SYSTEM_YEAR}}年）为绝对基准**。例如：当用户提到“今年前端趋势”或“最新发展”时，你应自主且必须联网搜索 “{{CURRENT_SYSTEM_YEAR}}年” 的内容（如“2026年前端开发趋势”），绝对禁止沿用你历史预训练的截止年份知识进行凭空编造！
`;
    let promptText = behaviorGuard + `# 👤 你的身份与职能设定：
${systemPromptText || "你是一个高效率、极具职业素养的 AI 数字员工助手。"}` + timeContext;
    if (manualSop && manualSop.trim()) {
      promptText += `

# 📝 业务专属 SOP 执行守则 (管理员微调指令)：
${manualSop.trim()}`;
    }
    if (loadedModelsInfo && loadedModelsInfo.length > 0) {
      const modelsLines = [
        "\n\n# 🎨 你装载的专项扩展能力模型：",
        "除文本对话能力外，你还装载了以下专项模型。**当用户提出相关任务需求时，请主动告知其你拥有此能力，并协助完成。**"
      ];
      for (const m of loadedModelsInfo) {
        const desc = m.description || "专项扩展能力模型，可增强你在该领域的执行能力。";
        modelsLines.push(`* **${m.name}** (\`${m.id}\`)：${desc}`);
      }
      promptText += modelsLines.join("\n");
    }
    if (!isTestEnv) {
      promptText += "\n\n<System_Page_Ai_Policy>\n当前阶段的项目策略是：AI 员工页面可以在 RBAC 审计角色、已注入工具与系统硬锁边界内执行系统接口；若用户要求的动作超出当前授权范围，必须明确拒绝并说明原因。通过员工执行链路访问 /api/v1/p/schema/all 与 /api/v1/p/data-contract/all 时，你拿到的是当前员工角色视角下的结构与契约，而不是全量系统视图。与具体页面强耦合的交互式表单体验仍可优先引导到页面内 AI 能力入口。\n</System_Page_Ai_Policy>\n";
    }
    let perms = [];
    let permSlugs = [];
    try {
      if (systemRoleId !== null && systemRoleId !== void 0) {
        perms = await db.select({
          slug: permissions.slug,
          name: permissions.name,
          description: permissions.description
        }).from(rolePermissions).innerJoin(permissions, eq(rolePermissions.permissionSlug, permissions.slug)).where(eq(rolePermissions.roleId, systemRoleId)).all();
        permSlugs = perms.map((p) => p.slug);
      }
    } catch (e) {
      console.error("[AgentCapabilityService] Failed to query RBAC permissions:", e);
    }
    let permsMarkdown = "";
    if (perms.length > 0) {
      const permsLines = [
        "\n\n# 🛡️ 你拥有的系统运行与安全审计管理权限边界：",
        ...perms.map((p) => `* **\`${p.slug}\`** (权限名称: **${p.name}**): ${p.description || "无具体说明。"}`)
      ];
      permsMarkdown = permsLines.join("\n");
    } else {
      permsMarkdown = "\n\n# 🛡️ 你拥有的系统运行与安全审计管理权限边界：\n（目前未分配任何系统运行权限，你将以受限只读沙盒模式运行；但若系统已配置联网搜索服务，你仍可使用默认开放的通用联网搜索能力）";
    }
    promptText += permsMarkdown;
    if (attachments && attachments.length > 0) {
      const attachmentsLines = [
        "\n\n# 📎 [重要运行上下文] 本轮对话用户上传的高级多模态附件列表：",
        "用户在当前会话轮次中上传并关联了以下文件。你作为数字员工，已经具备了这些多模态文件的完全感知边界：",
        ...attachments.map((file, idx) => `  - **顺序号**: ${idx + 1} | **附件 ID**: \`${file.id}\` | **名称**: \`${file.name}\` | **类型**: \`${file.type || "未知"}\` | **大小**: \`${(file.size / 1024 / 1024).toFixed(2)} MB\` | **安全下载直链**: \`${file.url}\``),
        "**【行动指引与安全约束】**：",
        "1. **你必须主动感知这些文件的存在与业务价值**。如果用户问到关于附件、表格、PDF 或图片等话题，请深度参考上述安全直链文件内容或格式。",
        "2. 如果你需要通过「物理端点/技能」（如 OCR 模型、图片分析等）处理这些文件，在构建参数时，**请在参数值（如 url 字段）中直接填写占位符 `{{file_顺序号.url}}`（例如：第1个文件填写 `{{file_1.url}}`，第2个文件填写 `{{file_2.url}}`）或 `{{file_ID.url}}`（例如：`{{file_r2-xxx.url}}`）**。系统会在后台/前端拦截执行时自动将占位符秒级替换为真实的、安全且带预签名的 R2 下载直链。",
        "3. **绝对不要直接把未替换的占位符文本（如 {{file_1.url}}）、文件ID 或空字符串当作实际 URL 传给第三方工具。** 请务必确认使用了正确的插值占位符格式。"
      ];
      promptText += attachmentsLines.join("\n");
    }
    let currentBytes = encoder.encode(promptText).length;
    const activeSkills = [];
    const tools = [];
    let isTruncated = false;
    let externalSkills = [];
    try {
      if (Array.isArray(skillsSlugs) && skillsSlugs.length > 0) {
        externalSkills = await db.select({
          id: aiSkills.id,
          slug: aiSkills.slug,
          name: aiSkills.name,
          description: aiSkills.description,
          endpoints: aiSkills.endpoints,
          endpoint: aiSkills.endpoint,
          isActive: aiSkills.isActive
        }).from(aiSkills).innerJoin(plugins, eq(plugins.slug, "ai-skill-market")).where(and(
          inArray(aiSkills.slug, skillsSlugs),
          eq(plugins.isEnabled, true),
          eq(aiSkills.isActive, true)
        )).all();
      }
    } catch (e) {
      console.warn("[AgentCapabilityService] Failed to load external skills:", e);
    }
    const builtinBlueprints = getMatchedBlueprints(permSlugs).map((bp) => ({
      id: bp.id,
      slug: bp.slug,
      name: bp.name,
      description: bp.description,
      endpoints: bp.endpoints,
      endpoint: bp.endpoint,
      isActive: bp.isActive,
      isBuiltin: true
    }));
    const enabledSkills = [...builtinBlueprints, ...externalSkills];
    if (loadedModelsInfo && loadedModelsInfo.length > 0) {
      for (const m of loadedModelsInfo) {
        const safeSlug = m.providerId ? `system/${m.providerId}/${m.id}` : `system/${m.id}`;
        const aiSafeToolName = toAiSafeName(safeSlug);
        const schemaObj = {
          type: "object",
          properties: {
            prompt: { type: "string", description: "需要委托给该子模型处理的具体任务或提示词" }
          },
          required: ["prompt"]
        };
        tools.push({
          type: "function",
          function: {
            name: aiSafeToolName,
            description: `委托子模型 [${m.name}] 执行跨模态或专项任务。模型能力：${m.description || "无"}。`,
            parameters: schemaObj
          }
        });
        activeSkills.push({
          slug: safeSlug,
          name: m.name,
          description: m.description
        });
      }
    }
    if (enabledSkills.length > 0) {
      const skillsHeader = "\n\n# 🔧 可用物理技能与多端点规格定义（按需调用）：\n你现在拥有以下端点的调用权限。请根据用户的任务需求，参考每个端点的 请求示例 与语义描述，自主构建符合格式要求的请求参数。如果路径包含 {{var}}，请根据上下文替换变量。**仅当用户明确提出需要执行该类操作的具体任务时**，才发起对应技能的调用，若只是交谈，用普通文本回复即可：";
      promptText += skillsHeader;
      currentBytes = encoder.encode(promptText).length;
      for (const skill of enabledSkills) {
        let endpointsArray = [];
        try {
          if (Array.isArray(skill.endpoints)) {
            endpointsArray = skill.endpoints;
          } else {
            endpointsArray = skill.endpoints ? JSON.parse(skill.endpoints) : [];
          }
        } catch (e) {
          console.warn(`[AgentCapabilityService] Failed to parse endpoints for skill ${skill.slug}:`, e);
        }
        const endpointsMdList = endpointsArray.map((ep, idx) => {
          return [
            `  - 端点 ${idx + 1}: \`${ep.path || "/"}\` [${(ep.method || "POST").toUpperCase()}] (${ep.format || "JSON"})`,
            `    * 示例与描述: ${ep.description_example || "无"}`
          ].join("\n");
        }).join("\n");
        const skillMarkdown = [
          `

#### 插件/技能: \`${skill.slug}\` (名称: **${skill.name}**)`,
          `* 整体功能描述: ${skill.description || "无"}`,
          `* 物理端点清单:`,
          endpointsMdList || "  - 无配置的激活端点"
        ].join("\n");
        const skillBytes = encoder.encode(skillMarkdown).length;
        if (currentBytes + skillBytes > BUDGET_LIMIT) {
          isTruncated = true;
        } else {
          promptText += skillMarkdown;
          currentBytes += skillBytes;
        }
        activeSkills.push({
          ...skill,
          endpoints: endpointsArray
        });
        const schemaObj = {
          type: "object",
          additionalProperties: false,
          properties: {
            path: {
              type: "string",
              description: '【必填】要请求的具体相对路径。你需要参考上面的端点规格进行拼接。若端点示例为 /json/{{ip}}，且你需要查询 22.163.11.11，你应该动态替换并拼接为 "/json/22.163.11.11"；若示例无路径占位符，直接使用端点相对路径如 "/json" 或 "/v1/search"。若调用 content_manager，请填写真实内部路径，如 "/api/v1/entities/taxonomy"、"/api/v1/p/schema/all"。'
            },
            method: {
              type: "string",
              enum: ["GET", "POST", "PATCH", "DELETE"],
              description: "【必填】此端点要求的 HTTP 方法，必须大写，例如 GET、POST、PATCH 或 DELETE。不要省略。"
            },
            params: {
              type: "object",
              description: "【必填】要传递的具体附加参数（JSON 键值对）。若为 GET 请求会自动拼装为 URL Query；若为 POST/PATCH/DELETE 请求会作为请求体 JSON Body 发送。若无附加参数，必须显式传空对象 {}。所有业务字段都必须放在 params 里面，绝对不要把业务字段放在 path/method/params 同级的顶层。"
            }
          },
          required: ["path", "method", "params"]
        };
        tools.push({
          type: "function",
          function: {
            name: toAiSafeName(skill.slug),
            description: skill.description || `执行 ${skill.name} 扩展功能`,
            parameters: schemaObj
          }
        });
      }
    }
    if (isTruncated) {
      const warningMsg = "\n\n⚠️ **[系统资源调度警报]**：由于管理员分配的能力条目与底层审计权限细节过多，部分低频技能已被暂时隐藏以节省资源。";
      promptText += warningMsg;
    }
    const result = {
      finalSystemPrompt: promptText,
      activeSkills,
      tools
    };
    if (agentId && (!attachments || attachments.length === 0)) {
      const currentUpdateTime = agentUpdatedAt ? agentUpdatedAt.getTime() : 0;
      const currentSkillsHash = `role:${systemRoleId || 0}:` + (skillsSlugs || []).slice().sort().join(",");
      const currentModelsHash = (loadedModelsInfo || []).map((m) => m.id).sort().join(",");
      this.promptCache.set(agentId, {
        updatedAt: currentUpdateTime,
        skillsHash: currentSkillsHash,
        modelsHash: currentModelsHash,
        result
      });
      console.log(`💾 [AgentCapabilityService] Cache MISS. Compiled and cached prompt for agent: ${agentId}`);
    }
    return result;
  }
}
export {
  AgentCapabilityService as A,
  aiSkills as a,
  index as i
};
