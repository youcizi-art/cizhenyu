globalThis.process ??= {};
globalThis.process.env ??= {};
import { H as Hono } from "./hono_C7UaUXH7.mjs";
import { s as sql, f as createDbClient } from "./index_Bs1dLHcd.mjs";
import { m as memberAuth } from "./memberAuth_CYd6jWJH.mjs";
class CfApiService {
  static BASE_URL = "https://api.cloudflare.com/client/v4";
  /**
   * 构造通用的 Cloudflare 授权请求头
   */
  static getHeaders(token) {
    return {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    };
  }
  /**
   * 1. 验证 Cloudflare API Token 权能与有效性
   * 对应接口：GET /user/tokens/verify
   */
  static async verifyToken(token) {
    try {
      const res = await fetch(`${this.BASE_URL}/accounts`, {
        method: "GET",
        headers: this.getHeaders(token)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true, message: "Token 有效" };
      }
      return { success: false, message: data.errors?.[0]?.message || "Token 验证失败，请检查是否正确录入且未过期。" };
    } catch (err) {
      return { success: false, message: `网络连接异常: ${err.message}` };
    }
  }
  /**
   * 2. 校验指定 Account ID 是否存在且当前 Token 拥有访问权限
   * 对应接口：GET /accounts/{account_id}
   */
  static async checkAccountAccess(token, accountId) {
    try {
      const res = await fetch(`${this.BASE_URL}/accounts/${accountId}`, {
        method: "GET",
        headers: this.getHeaders(token)
      });
      const data = await res.json();
      return res.ok && data.success;
    } catch {
      return false;
    }
  }
  /**
   * 3. 在 Cloudflare 云端创建全新的 D1 数据库
   * 对应接口：POST /accounts/{account_id}/d1/database
   */
  static async createD1Database(token, accountId, name) {
    try {
      const res = await fetch(`${this.BASE_URL}/accounts/${accountId}/d1/database`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify({ name })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true, uuid: data.result.uuid };
      }
      return { success: false, error: data.errors?.[0]?.message || "创建 D1 数据库失败" };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
  /**
   * 4. 在 Cloudflare 云端创建全新 Workers KV 存储命名空间
   * 对应接口：POST /accounts/{account_id}/storage/kv/namespaces
   */
  static async createKvNamespace(token, accountId, title) {
    try {
      const res = await fetch(`${this.BASE_URL}/accounts/${accountId}/storage/kv/namespaces`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify({ title })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true, id: data.result.id };
      }
      return { success: false, error: data.errors?.[0]?.message || "创建 KV 命名空间失败" };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
  /**
   * 5. 在 Cloudflare 云端创建全新 R2 存储桶
   * 对应接口：POST /accounts/{account_id}/r2/buckets
   */
  static async createR2Bucket(token, accountId, name) {
    try {
      const res = await fetch(`${this.BASE_URL}/accounts/${accountId}/r2/buckets`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify({ name })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true };
      }
      return { success: false, error: data.errors?.[0]?.message || "创建 R2 存储桶失败" };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
  /**
   * 6. 远程初始化 D1 数据库结构，自动批量执行 SQL 建表语句
   * 对应接口：POST /accounts/{account_id}/d1/database/{database_id}/query
   */
  static async executeD1Sql(token, accountId, databaseId, sqlContent) {
    try {
      const res = await fetch(`${this.BASE_URL}/accounts/${accountId}/d1/database/${databaseId}/query`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify({
          sql: sqlContent
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true };
      }
      return { success: false, error: data.errors?.[0]?.message || "远程初始化 D1 SQL 失败" };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
  /**
   * 7. 根据目标主域名获取 Cloudflare Zone ID
   * 对应接口：GET /zones?name={domain}
   */
  static async getZoneId(token, mainDomain) {
    try {
      const res = await fetch(`${this.BASE_URL}/zones?name=${mainDomain}`, {
        method: "GET",
        headers: this.getHeaders(token)
      });
      const data = await res.json();
      if (res.ok && data.success && data.result?.length > 0) {
        return { success: true, zoneId: data.result[0].id };
      }
      return { success: false, error: `未能在当前 Cloudflare 账户中检索到托管域名 [${mainDomain}]，请先将该域名解析托管至 CF！` };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
  /**
   * 8. 绑定自定义子域名到指定的 Worker 脚本
   * 对应接口：POST /accounts/{account_id}/workers/domains
   */
  static async bindWorkerDomain(token, accountId, zoneId, mainDomain, targetSubDomain, scriptName) {
    try {
      const res = await fetch(`${this.BASE_URL}/accounts/${accountId}/workers/domains`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify({
          zone_id: zoneId,
          zone_name: mainDomain,
          hostname: targetSubDomain,
          service: scriptName,
          environment: "production"
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true };
      }
      return { success: false, error: data.errors?.[0]?.message || "绑定自定义域名失败，请确保该域名未被其他脚本占用。" };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
  /**
   * 9. 【核心高难】组装并上传 Worker 编译脚本，建立 D1/KV/R2 资源绑定关系
   * 接口路由：PUT /accounts/{account_id}/workers/scripts/{script_name}
   * 
   * 💡 实现原理：
   * 1. 采用 multipart/form-data 格式发送，分别追加 'metadata' JSON 段与 'script' JS 单文件段。
   * 2. 在 metadata 中精确指定主程序环境变量名称所绑定的真实 D1 UUID、KV ID 和 R2 名称，让子站获得与主站一致的读写映射。
   */
  static async uploadWorkerScript(token, accountId, scriptName, scriptContent, bindings, vars) {
    try {
      const metadata = {
        main_module: "index.js",
        bindings: [
          // 警告：D1、KV、R2 的字段名各不相同，严禁填错！
          ...bindings.d1.map((d) => ({
            type: "d1",
            name: d.binding,
            // 代码中访问的变量名，如 DB
            id: d.id
            // D1 的真实 UUID
          })),
          ...bindings.kv.map((k) => ({
            type: "kv_namespace",
            name: k.binding,
            // 变量名，如 KV_SRV
            namespace_id: k.id
            // KV 真实 Namespace ID
          })),
          ...bindings.r2.map((r) => ({
            type: "r2",
            name: r.binding,
            // 变量名，如 R2_BUCKET
            bucket_name: r.id
            // R2 真实存储桶名称
          })),
          // 💡 动态注入从 wrangler.toml.template 或卡片参数中提取的 plain_text 环境变量 vars
          ...Object.entries(vars || {}).map(([key, value]) => ({
            type: "plain_text",
            name: key,
            text: String(value)
          }))
        ]
      };
      const formData = new FormData();
      formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }), "metadata.json");
      formData.append("script", new Blob([scriptContent], { type: "application/javascript+module" }), "index.js");
      const res = await fetch(`${this.BASE_URL}/accounts/${accountId}/workers/scripts/${scriptName}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true };
      }
      return { success: false, error: data.errors?.[0]?.message || "上传 Worker 编译脚本失败" };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
}
class DeployService {
  /**
   * 基于 Web Crypto API 的 AES-GCM 对称加密，安全度极高
   */
  static async getCryptoKey(secret) {
    const enc = new TextEncoder();
    const keyData = enc.encode(secret.padEnd(32, "0").slice(0, 32));
    return await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "AES-GCM" },
      false,
      ["encrypt", "decrypt"]
    );
  }
  /**
   * 加密用户的 Cloudflare API Token
   */
  static async encryptToken(token, secret) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = new TextEncoder();
    const key = await this.getCryptoKey(secret);
    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      enc.encode(token)
    );
    const encryptedArray = new Uint8Array(encrypted);
    const payload = {
      iv: btoa(String.fromCharCode(...iv)),
      ciphertext: btoa(String.fromCharCode(...encryptedArray))
    };
    return btoa(JSON.stringify(payload));
  }
  /**
   * 解密用户的 Cloudflare API Token
   */
  static async decryptToken(encryptedStr, secret) {
    try {
      const payload = JSON.parse(atob(encryptedStr));
      const iv = new Uint8Array(atob(payload.iv).split("").map((c) => c.charCodeAt(0)));
      const ciphertext = new Uint8Array(atob(payload.ciphertext).split("").map((c) => c.charCodeAt(0)));
      const key = await this.getCryptoKey(secret);
      const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        ciphertext
      );
      return new TextDecoder().decode(decrypted);
    } catch (err) {
      throw new Error(`Cloudflare 凭证安全解密失败，密钥无效或已被破坏。`);
    }
  }
  /**
   * 🚀 驱动 Cloudflare 自动化站点克隆与异步部署流水线状态机
   */
  static async startDeployment(db, deploymentId, jwtSecret, env) {
    const totalSteps = 6;
    const updateProgress = async (step, log, status = "deploying") => {
      const stepInfo = JSON.stringify({ currentStep: step, totalSteps, log });
      try {
        await db.run(sql`
          UPDATE cf_deployments 
          SET status = ${status}, step_info = ${stepInfo}, updated_at = ${Date.now()} 
          WHERE id = ${deploymentId}
        `);
      } catch (progressErr) {
        console.error("⚠️ [Deploy] 写入部署进度异常:", progressErr);
      }
    };
    try {
      const deployment = await db.select({
        id: sql`id`,
        cf_account_id: sql`cf_account_id`,
        cf_token_encrypted: sql`cf_token_encrypted`,
        target_domain: sql`target_domain`,
        status: sql`status`,
        step_info: sql`step_info`,
        created_at: sql`created_at`,
        updated_at: sql`updated_at`,
        member_id: sql`member_id`
      }).from(sql`cf_deployments`).where(sql`id = ${deploymentId}`).get();
      if (!deployment) return;
      let accountId = deployment.cf_account_id;
      let encryptedToken = deployment.cf_token_encrypted;
      const { member_id: memberId, target_domain: targetDomain } = deployment;
      if (!accountId || !encryptedToken) {
        throw new Error("未检测到该站点绑定的 Cloudflare 凭证！请重新编辑并保存站点卡片。");
      }
      const token = await this.decryptToken(encryptedToken, jwtSecret);
      let customConfig = {};
      try {
        const stepInfoObj = typeof deployment.step_info === "string" ? JSON.parse(deployment.step_info) : deployment.step_info || {};
        customConfig = stepInfoObj.customConfig || {};
      } catch (e) {
        console.warn("解析 customConfig 失败，回退到默认设置");
      }
      const adminDomain = customConfig.adminDomain || `admin.${targetDomain}`;
      const memberDomain = customConfig.memberDomain || `my.${targetDomain}`;
      const imageDomain = customConfig.imageDomain || `media.${targetDomain}`;
      const defaultAdminUser = customConfig.defaultAdminUser || "admin";
      const defaultAdminPassword = String(customConfig.defaultAdminPassword || "").trim();
      if (!defaultAdminPassword) {
        throw new Error("请显式填写后台默认超级管理员密码，系统已移除内置默认密码。");
      }
      const deployPayload = {
        deploy_id: deploymentId,
        cf_account_id: accountId,
        cf_api_token: token,
        target_domain: targetDomain,
        admin_domain: customConfig.adminDomain || `admin.${targetDomain}`,
        member_domain: customConfig.memberDomain || `my.${targetDomain}`,
        image_domain: customConfig.imageDomain || `media.${targetDomain}`,
        d1_database_name: customConfig.d1DatabaseName || `site_d1_${deploymentId}`,
        r2_bucket_name: customConfig.r2BucketName || `site-r2-${deploymentId}`,
        default_admin_user: customConfig.defaultAdminUser || "admin",
        default_admin_password: defaultAdminPassword,
        admin_verification: String(customConfig.adminVerification || "").trim()
      };
      const keys = [
        "cf-deployer:runner_type",
        "cf-deployer:github_token",
        "cf-deployer:github_repo",
        "cf-deployer:github_workflow",
        "cf-deployer:custom_runner_url",
        "cf-deployer:webhook_secret"
      ];
      const settingsRows = await db.select({ key: sql`key`, value: sql`value` }).from(sql`system_settings`).where(sql.raw(`key IN (${keys.map((k) => `'${k}'`).join(",")})`)).all();
      const settings = keys.reduce((acc, key) => {
        const row = settingsRows.find((r) => r.key === key);
        acc[key.split(":")[1]] = row ? row.value : "";
        return acc;
      }, {});
      const runnerType = settings.runner_type || "github";
      const githubToken = settings.github_token || "";
      const githubRepo = settings.github_repo || "youcizi-art/cizhenyu";
      const githubWorkflow = settings.github_workflow || "deploy.yml";
      const webhookSecret = settings.webhook_secret || "antigravity-webhook-secret-2026";
      const actualDomain = env.DOMAIN || "admin.yourdomain.com";
      const webhookUrl = `https://${actualDomain}/api/v1/plugins/proxy/cf-deployer/webhook/deploy-status`;
      const finalPayload = {
        ...deployPayload,
        webhook_url: webhookUrl,
        webhook_secret: webhookSecret
      };
      await updateProgress(1, `正在将克隆指令派发至外部构建引擎 (${runnerType === "github" ? "GitHub Actions" : "Custom Server"})...`);
      if (runnerType === "github") {
        if (!githubToken || !githubRepo) {
          throw new Error("GitHub Actions 构建引擎未配置，请先在控制台配置 GitHub Token 与 Repo。");
        }
        const githubApiUrl = `https://api.github.com/repos/${githubRepo}/actions/workflows/${githubWorkflow}/dispatches`;
        const ghRes = await fetch(githubApiUrl, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${githubToken}`,
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "Cloudflare-Deployer-Plugin"
          },
          body: JSON.stringify({
            ref: "master",
            // 默认分支，也可在设置中配置
            inputs: {
              payload: btoa(JSON.stringify(finalPayload))
              // Base64 编码，避免特殊字符问题
            }
          })
        });
        if (!ghRes.ok) {
          const ghErr = await ghRes.text();
          throw new Error(`派发到 GitHub Actions 失败: [${ghRes.status}] ${ghErr}`);
        }
      } else if (runnerType === "custom") {
        const customRunnerUrl = settings.custom_runner_url;
        if (!customRunnerUrl) {
          throw new Error("自定义部署服务器 URL 未配置。");
        }
        const customRes = await fetch(customRunnerUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${webhookSecret}`
            // 复用 secret 作为简易鉴权
          },
          body: JSON.stringify(finalPayload)
        });
        if (!customRes.ok) {
          const customErr = await customRes.text();
          throw new Error(`派发到自定义服务器失败: [${customRes.status}] ${customErr}`);
        }
      } else {
        throw new Error(`未知的部署引擎类型: ${runnerType}`);
      }
      await updateProgress(2, "🚀 任务已成功派发至外部构建引擎，等待构建流返回状态...");
    } catch (err) {
      await updateProgress(0, `❌ 部署失败，流水线中断。失败原因: ${err.message}`, "failed");
    }
  }
}
const adminApp = new Hono();
const sfApp = new Hono();
function getSecret(c) {
  return c.env?.JWT_SECRET || c.env?.crypto_secret || "antigravity-default-vault-salt-key-2026";
}
function getMemberId(c) {
  const user = c.get("user") || c.get("member");
  if (user?.id) return String(user.id);
  throw new Error("未授权访问: 获取会员身份失败，请先登录");
}
function generateRandomCode() {
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@";
  const groups = [];
  for (let g = 0; g < 4; g++) {
    const groupLen = Math.floor(Math.random() * 3) + 8;
    let groupStr = "";
    for (let i = 0; i < groupLen; i++) {
      groupStr += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    groups.push(groupStr);
  }
  return groups.join("-");
}
async function ensureCodesTableExists(db) {
  try {
    await db.run(sql`
      CREATE TABLE IF NOT EXISTS cf_deploy_codes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT UNIQUE NOT NULL,
        status TEXT DEFAULT 'unused',
        bound_account_id TEXT,
        bound_member_id TEXT,
        expires_at INTEGER,
        used_at INTEGER,
        created_at INTEGER
      );
    `);
  } catch (err) {
    console.warn("自愈式初始化授权码表异常:", err);
  }
  try {
    await db.run(sql`ALTER TABLE cf_deployments ADD COLUMN deploy_type TEXT DEFAULT 'free'`);
  } catch (_) {
  }
  try {
    await db.run(sql`ALTER TABLE cf_deploy_codes ADD COLUMN expires_at INTEGER`);
  } catch (_) {
  }
  try {
    await db.run(sql`ALTER TABLE cf_deploy_codes ADD COLUMN bound_member_id TEXT`);
  } catch (_) {
  }
  try {
    await db.run(sql`
      CREATE TABLE IF NOT EXISTS cf_member_accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        member_id TEXT NOT NULL,
        account_alias TEXT NOT NULL DEFAULT '默认账号',
        cf_account_id TEXT NOT NULL,
        cf_token_encrypted TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        UNIQUE(member_id, cf_account_id)
      );
    `);
  } catch (err) {
    console.warn("自愈式初始化 cf_member_accounts 表异常:", err);
  }
}
sfApp.get("/p/chrome-extension", async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
  try {
    const row = await db.select({ value: sql`value` }).from(sql`system_settings`).where(sql`key = 'plugin:cf-deployer:chrome-ext'`).get();
    return c.json({ success: true, extensionId: row?.value || "" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.get("/p/accounts", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    await ensureCodesTableExists(db);
    const rows = await db.select({
      id: sql`id`,
      account_alias: sql`account_alias`,
      cf_account_id: sql`cf_account_id`,
      cf_token_encrypted: sql`cf_token_encrypted`,
      created_at: sql`created_at`
    }).from(sql`cf_member_accounts`).where(sql`member_id = ${memberId}`).orderBy(sql`created_at ASC`).all();
    const accounts = await Promise.all(rows.map(async (r) => {
      const token = await DeployService.decryptToken(r.cf_token_encrypted, secret);
      return {
        id: r.id,
        alias: r.account_alias,
        cfAccountId: r.cf_account_id,
        cfToken: token,
        createdAt: r.created_at
      };
    }));
    return c.json({ success: true, accounts, configured: accounts.length > 0 });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.post("/p/accounts", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const { cfAccountId, cfToken, alias } = await c.req.json();
    if (!cfAccountId || !cfToken) {
      return c.json({ success: false, error: "Account ID 和 API Token 均为必填项" }, 400);
    }
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    const encryptedToken = await DeployService.encryptToken(cfToken, secret);
    const accountAlias = alias?.trim() || `账号-${cfAccountId.slice(0, 8)}`;
    const now = Date.now();
    await ensureCodesTableExists(db);
    await db.run(sql`
      INSERT INTO cf_member_accounts (member_id, account_alias, cf_account_id, cf_token_encrypted, created_at, updated_at)
      VALUES (${memberId}, ${accountAlias}, ${cfAccountId}, ${encryptedToken}, ${now}, ${now})
      ON CONFLICT(member_id, cf_account_id) DO UPDATE SET 
        cf_token_encrypted = ${encryptedToken},
        account_alias = ${accountAlias},
        updated_at = ${now}
    `);
    return c.json({ success: true, message: `CF 账号「${accountAlias}」已安全保存！` });
  } catch (err) {
    return c.json({ success: false, error: `保存账号失败: ${err.message}` }, 500);
  }
});
sfApp.put("/p/accounts/:id", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const id = c.req.param("id");
    const { cfToken, alias } = await c.req.json();
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    const encryptedToken = await DeployService.encryptToken(cfToken, secret);
    const now = Date.now();
    await db.run(sql`
      UPDATE cf_member_accounts
      SET account_alias = ${alias}, cf_token_encrypted = ${encryptedToken}, updated_at = ${now}
      WHERE id = ${id} AND member_id = ${memberId}
    `);
    return c.json({ success: true, message: "CF 账号信息已更新！" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.delete("/p/accounts/:id", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const id = c.req.param("id");
    const memberId = getMemberId(c);
    await db.run(sql`DELETE FROM cf_member_accounts WHERE id = ${id} AND member_id = ${memberId}`);
    return c.json({ success: true, message: "CF 账号已删除！" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.post("/p/accounts/:id/test", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const id = c.req.param("id");
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    const row = await db.select({
      cf_account_id: sql`cf_account_id`,
      cf_token_encrypted: sql`cf_token_encrypted`
    }).from(sql`cf_member_accounts`).where(sql`id = ${id} AND member_id = ${memberId}`).get();
    if (!row) {
      return c.json({ success: false, error: "未找到该 CF 账号记录" }, 404);
    }
    const token = await DeployService.decryptToken(row.cf_token_encrypted, secret);
    const accountId = row.cf_account_id;
    const tokenCheck = await CfApiService.verifyToken(token);
    const accountCheck = tokenCheck.success ? await CfApiService.checkAccountAccess(token, accountId) : false;
    return c.json({
      success: true,
      data: {
        tokenValid: tokenCheck.success,
        accountAccess: accountCheck,
        hasD1Edit: tokenCheck.success,
        hasKvEdit: tokenCheck.success,
        hasR2Edit: tokenCheck.success,
        hasWorkersEdit: tokenCheck.success,
        hasZoneRead: tokenCheck.success,
        error: tokenCheck.success ? null : tokenCheck.message
      }
    });
  } catch (err) {
    return c.json({ success: false, error: `权限自检失败: ${err.message}` });
  }
});
sfApp.get("/p/settings", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
  try {
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    await ensureCodesTableExists(db);
    const row = await db.select({ id: sql`id`, cf_account_id: sql`cf_account_id`, cf_token_encrypted: sql`cf_token_encrypted` }).from(sql`cf_member_accounts`).where(sql`member_id = ${memberId}`).orderBy(sql`created_at ASC`).get();
    if (!row) return c.json({ success: true, configured: false });
    const token = await DeployService.decryptToken(row.cf_token_encrypted, secret);
    return c.json({ success: true, configured: true, cfAccountId: row.cf_account_id, cfToken: token });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.post("/p/settings", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
  try {
    const { cfAccountId, cfToken, alias } = await c.req.json();
    if (!cfAccountId || !cfToken) return c.json({ success: false, error: "所有配置字段均为必填项" }, 400);
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    const encryptedToken = await DeployService.encryptToken(cfToken, secret);
    const accountAlias = alias?.trim() || `账号-${cfAccountId.slice(0, 8)}`;
    const now = Date.now();
    await ensureCodesTableExists(db);
    await db.run(sql`
      INSERT INTO cf_member_accounts (member_id, account_alias, cf_account_id, cf_token_encrypted, created_at, updated_at)
      VALUES (${memberId}, ${accountAlias}, ${cfAccountId}, ${encryptedToken}, ${now}, ${now})
      ON CONFLICT(member_id, cf_account_id) DO UPDATE SET cf_token_encrypted = ${encryptedToken}, account_alias = ${accountAlias}, updated_at = ${now}
    `);
    return c.json({ success: true, message: "您的 Cloudflare 开发者凭证已安全加密归档存储！" });
  } catch (err) {
    return c.json({ success: false, error: `配置保存异常: ${err.message}` }, 500);
  }
});
sfApp.get("/p/sites", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const memberId = getMemberId(c);
    const records = await db.select({
      id: sql`id`,
      cf_account_id: sql`cf_account_id`,
      target_domain: sql`target_domain`,
      deploy_type: sql`deploy_type`,
      status: sql`status`,
      step_info: sql`step_info`,
      created_at: sql`created_at`,
      updated_at: sql`updated_at`
    }).from(sql`cf_deployments`).where(sql`member_id = ${memberId} AND target_domain != 'GLOBAL_CREDENTIALS'`).all();
    const formatted = records.map((r) => ({
      id: r.id,
      cfAccountId: r.cf_account_id || "",
      targetDomain: r.target_domain,
      deployType: r.deploy_type || "free",
      status: r.status || "pending",
      stepInfo: typeof r.step_info === "string" ? JSON.parse(r.step_info) : r.step_info,
      createdAt: r.created_at,
      updatedAt: r.updated_at
    }));
    return c.json({ success: true, list: formatted });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.post("/p/sites", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const {
      id,
      targetDomain,
      adminDomain,
      memberDomain,
      imageDomain,
      adminVerification,
      defaultAdminUser,
      defaultAdminPassword,
      d1DatabaseName,
      r2BucketName,
      deployType,
      cfAccountId
      // 🌟 新增多账号选择支持
    } = await c.req.json();
    if (!targetDomain) {
      return c.json({ success: false, error: "目标域名为必填项" }, 400);
    }
    const memberId = getMemberId(c);
    const resolvedDeployType = deployType || "free";
    let tokenEncrypted = "";
    let accountIdToSave = cfAccountId?.trim() || "";
    if (accountIdToSave) {
      const acct = await db.select({ cf_token_encrypted: sql`cf_token_encrypted` }).from(sql`cf_member_accounts`).where(sql`cf_account_id = ${accountIdToSave} AND member_id = ${memberId}`).get();
      if (acct) {
        tokenEncrypted = acct.cf_token_encrypted;
      }
    } else {
      const firstAccount = await db.select({ cf_account_id: sql`cf_account_id`, cf_token_encrypted: sql`cf_token_encrypted` }).from(sql`cf_member_accounts`).where(sql`member_id = ${memberId}`).orderBy(sql`created_at ASC`).get();
      if (firstAccount) {
        accountIdToSave = firstAccount.cf_account_id;
        tokenEncrypted = firstAccount.cf_token_encrypted;
      }
    }
    const customConfig = {
      adminDomain,
      memberDomain,
      imageDomain,
      adminVerification,
      defaultAdminUser,
      defaultAdminPassword,
      d1DatabaseName,
      r2BucketName
    };
    if (id) {
      const oldRecord = await db.select({ step_info: sql`step_info` }).from(sql`cf_deployments`).where(sql`id = ${id} AND member_id = ${memberId}`).get();
      let stepInfoObj = { currentStep: 0, totalSteps: 6, log: "卡片已更新" };
      try {
        if (oldRecord?.step_info) {
          stepInfoObj = JSON.parse(oldRecord.step_info);
        }
      } catch {
      }
      stepInfoObj.customConfig = { ...stepInfoObj.customConfig || {}, ...customConfig };
      const stepInfoStr = JSON.stringify(stepInfoObj);
      await db.run(sql`
        UPDATE cf_deployments 
        SET target_domain = ${targetDomain}, 
            cf_account_id = ${accountIdToSave}, 
            cf_token_encrypted = ${tokenEncrypted}, 
            deploy_type = ${resolvedDeployType}, 
            step_info = ${stepInfoStr}, 
            updated_at = ${Date.now()}
        WHERE id = ${id} AND member_id = ${memberId}
      `);
      return c.json({ success: true, message: "站点部署拓扑及卡片配置修改成功！" });
    } else {
      const stepInfoObj = {
        currentStep: 0,
        totalSteps: 6,
        log: "站点已创建，等待触发自动化部署。",
        customConfig
      };
      const stepInfoStr = JSON.stringify(stepInfoObj);
      await db.run(sql`
        INSERT INTO cf_deployments 
        (member_id, cf_account_id, cf_token_encrypted, target_domain, deploy_type, status, step_info, created_at, updated_at) 
        VALUES 
        (${memberId}, ${accountIdToSave}, ${tokenEncrypted}, ${targetDomain}, ${resolvedDeployType}, 'pending', ${stepInfoStr}, ${Date.now()}, ${Date.now()})
      `);
      return c.json({ success: true, message: "新增站点部署拓扑卡片成功！" });
    }
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.delete("/p/sites/:id", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const id = c.req.param("id");
    const memberId = getMemberId(c);
    await db.run(sql`
      DELETE FROM cf_deployments WHERE id = ${id} AND member_id = ${memberId}
    `);
    return c.json({ success: true, message: "站点卡片已安全移除！" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.post("/p/test-connection", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    await ensureCodesTableExists(db);
    const record = await db.select({
      id: sql`id`,
      cf_account_id: sql`cf_account_id`,
      cf_token_encrypted: sql`cf_token_encrypted`
    }).from(sql`cf_member_accounts`).where(sql`member_id = ${memberId}`).orderBy(sql`created_at ASC`).get();
    if (!record) {
      return c.json({ success: false, error: "未配置任何 Cloudflare 账号，请先添加账号后再进行自检。" });
    }
    const token = await DeployService.decryptToken(record.cf_token_encrypted, secret);
    const accountId = record.cf_account_id;
    const tokenCheck = await CfApiService.verifyToken(token);
    const accountCheck = tokenCheck.success ? await CfApiService.checkAccountAccess(token, accountId) : false;
    return c.json({
      success: true,
      data: {
        tokenValid: tokenCheck.success,
        accountAccess: accountCheck,
        hasD1Edit: tokenCheck.success,
        hasKvEdit: tokenCheck.success,
        hasR2Edit: tokenCheck.success,
        hasWorkersEdit: tokenCheck.success,
        hasZoneRead: tokenCheck.success,
        error: tokenCheck.success ? null : tokenCheck.message
      }
    });
  } catch (err) {
    return c.json({ success: false, error: `权限自检失败: ${err.message}` });
  }
});
sfApp.post("/p/deploy", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const { id } = await c.req.json();
    if (!id) {
      return c.json({ success: false, error: "必须指定待部署站点的卡片 ID" }, 400);
    }
    const memberId = getMemberId(c);
    const secret = getSecret(c);
    const record = await db.select({
      id: sql`id`,
      cf_account_id: sql`cf_account_id`,
      cf_token_encrypted: sql`cf_token_encrypted`,
      target_domain: sql`target_domain`,
      deploy_type: sql`deploy_type`,
      step_info: sql`step_info`
    }).from(sql`cf_deployments`).where(sql`id = ${id} AND member_id = ${memberId}`).get();
    if (!record) {
      return c.json({ success: false, error: "未找到指定站点部署卡片" }, 404);
    }
    if (record.deploy_type === "paid" && record.cf_account_id) {
      await ensureCodesTableExists(db);
      const boundCode = await db.select({
        code: sql`code`,
        expires_at: sql`expires_at`
      }).from(sql`cf_deploy_codes`).where(sql`bound_account_id = ${record.cf_account_id} AND status = 'used'`).get();
      if (!boundCode) {
        return c.json({
          success: false,
          error: "检测到当前站点采用 Paid 高级授权克隆模式，但您的 Cloudflare 账户未绑定任何有效的授权部署密钥！请重新核验绑定。"
        }, 403);
      }
      if (boundCode.expires_at && Date.now() > boundCode.expires_at) {
        const expireDateStr = new Date(boundCode.expires_at).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
        return c.json({
          success: false,
          error: `[授权限制] 您的付费部署授权码 (Key: ${boundCode.code}) 已于 ${expireDateStr} 过期失效，该账户已被受限部署！请联系管理员购买并重新绑定新的有效密钥。`
        }, 403);
      }
    }
    let stepInfoObj = { currentStep: 1, totalSteps: 6, log: "流水线就绪，正在引导自动化后台部署..." };
    try {
      if (record.step_info) {
        const parsed = typeof record.step_info === "string" ? JSON.parse(record.step_info) : record.step_info;
        stepInfoObj = { ...parsed, ...stepInfoObj };
      }
    } catch (e) {
    }
    await db.run(sql`
      UPDATE cf_deployments 
      SET status = 'pending', step_info = ${JSON.stringify(stepInfoObj)}, updated_at = ${Date.now()} 
      WHERE id = ${id}
    `);
    const executionContext = c.env?.__executionCtx || c.executionCtx;
    if (executionContext && typeof executionContext.waitUntil === "function") {
      try {
        executionContext.waitUntil(
          DeployService.startDeployment(db, record.id, secret, c.env)
        );
      } catch (waitErr) {
        console.warn("⚠️ [Deploy] executionContext.waitUntil 挂载异常，将直接降级为异步后台挂起执行:", waitErr.message);
        DeployService.startDeployment(db, record.id, secret, c.env);
      }
    } else {
      DeployService.startDeployment(db, record.id, secret, c.env);
    }
    return c.json({
      success: true,
      message: "Cloudflare 一键自动化部署流水线已在云端背景服务挂载启动！"
    });
  } catch (err) {
    return c.json({ success: false, error: `启动流水线异常: ${err.message}` }, 500);
  }
});
sfApp.post("/p/deploy/cancel", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const { id } = await c.req.json();
    if (!id) {
      return c.json({ success: false, error: "必须指定待部署站点的卡片 ID" }, 400);
    }
    const memberId = getMemberId(c);
    const record = await db.select({
      id: sql`id`,
      status: sql`status`,
      step_info: sql`step_info`
    }).from(sql`cf_deployments`).where(sql`id = ${id} AND member_id = ${memberId}`).get();
    if (!record) {
      return c.json({ success: false, error: "未找到指定站点部署卡片" }, 404);
    }
    if (record.status !== "deploying" && record.status !== "pending") {
      return c.json({ success: false, error: "当前站点不在部署状态，无需中止" }, 400);
    }
    let stepInfoObj = { currentStep: 0, totalSteps: 6, log: "用户手动终止了部署流水线" };
    try {
      if (record.step_info) {
        const parsed = typeof record.step_info === "string" ? JSON.parse(record.step_info) : record.step_info;
        stepInfoObj = { ...parsed, ...stepInfoObj };
      }
    } catch (e) {
    }
    await db.run(sql`
      UPDATE cf_deployments 
      SET status = 'failed', step_info = ${JSON.stringify(stepInfoObj)}, updated_at = ${Date.now()} 
      WHERE id = ${id}
    `);
    return c.json({ success: true, message: "部署流水线已成功中止" });
  } catch (err) {
    return c.json({ success: false, error: `中止部署异常: ${err.message}` }, 500);
  }
});
sfApp.post("/webhook/deploy-status", async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `数据库连接异常: ${dbErr.message}` }, 500);
  }
  try {
    const { deployId, status, currentStep, totalSteps, log, webhookSecret } = await c.req.json();
    const expectedSecretRow = await db.select({ value: sql`value` }).from(sql`system_settings`).where(sql`key = 'cf-deployer:webhook_secret'`).get();
    const expectedSecret = expectedSecretRow?.value || "antigravity-webhook-secret-2026";
    if (!expectedSecret || expectedSecret !== webhookSecret) {
      return c.json({ success: false, error: "Unauthorized: Invalid webhook secret" }, 401);
    }
    if (!deployId) {
      return c.json({ success: false, error: "deployId is required" }, 400);
    }
    const record = await db.select({ step_info: sql`step_info` }).from(sql`cf_deployments`).where(sql`id = ${deployId}`).get();
    let stepInfoObj = { currentStep: currentStep || 1, totalSteps: totalSteps || 6, log: log || "" };
    if (record?.step_info) {
      try {
        const parsed = typeof record.step_info === "string" ? JSON.parse(record.step_info) : record.step_info;
        stepInfoObj = { ...parsed, ...stepInfoObj };
      } catch (e) {
      }
    }
    await db.run(sql`
      UPDATE cf_deployments 
      SET status = ${status || "deploying"}, step_info = ${JSON.stringify(stepInfoObj)}, updated_at = ${Date.now()} 
      WHERE id = ${deployId}
    `);
    return c.json({ success: true, message: "Deployment status updated successfully" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
sfApp.post("/p/verify-code", memberAuth, async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    const { code, cfAccountId, memberId: clientMemberId } = await c.req.json();
    if (!code) {
      return c.json({ success: false, error: "请输入待验证激活的授权部署码！" }, 400);
    }
    const memberId = clientMemberId?.trim() || getMemberId(c);
    await ensureCodesTableExists(db);
    let accountId = cfAccountId?.trim();
    if (!accountId) {
      const firstAccount = await db.select({ cf_account_id: sql`cf_account_id` }).from(sql`cf_member_accounts`).where(sql`member_id = ${memberId}`).orderBy(sql`created_at ASC`).get();
      if (firstAccount) accountId = firstAccount.cf_account_id;
    }
    if (!accountId) {
      return c.json({ success: false, error: '未检测到您的 Cloudflare 账号。请先在"我的 CF 账号"中添加至少一个账号后再进行验证！' }, 400);
    }
    const match = await db.select({
      id: sql`id`,
      code: sql`code`,
      status: sql`status`,
      bound_account_id: sql`bound_account_id`
    }).from(sql`cf_deploy_codes`).where(sql`code = ${code.trim()}`).get();
    if (!match) {
      return c.json({ success: false, error: "对不起，您输入的部署码无效，请确认后重试！" }, 400);
    }
    if (match.status === "used") {
      if (match.bound_account_id === accountId) {
        return c.json({ success: true, message: "验证成功！该部署码已与当前账户绑定，可直接进行付费部署。" });
      } else {
        return c.json({ success: false, error: "此部署码已被其他 Cloudflare 账号绑定，无法重复激活！" }, 400);
      }
    }
    await db.run(sql`
      UPDATE cf_deploy_codes 
      SET status = 'used', bound_account_id = ${accountId}, bound_member_id = ${memberId}, used_at = ${Date.now()} 
      WHERE id = ${match.id}
    `);
    return c.json({ success: true, message: "恭喜！授权部署码激活成功，已与您的 Cloudflare 账户绑定，解锁付费应用一键克隆权限！" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
adminApp.get("/settings/engine", async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
  try {
    const keys = [
      "cf-deployer:runner_type",
      "cf-deployer:github_token",
      "cf-deployer:github_repo",
      "cf-deployer:github_workflow",
      "cf-deployer:custom_runner_url",
      "cf-deployer:webhook_secret"
    ];
    const rows = await db.select({ key: sql`key`, value: sql`value` }).from(sql`system_settings`).where(sql.raw(`key IN (${keys.map((k) => `'${k}'`).join(",")})`)).all();
    const settings = keys.reduce((acc, key) => {
      const row = rows.find((r) => r.key === key);
      const shortKey = key.split(":")[1];
      acc[shortKey] = row ? row.value : "";
      return acc;
    }, {});
    return c.json({ success: true, settings });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
adminApp.post("/settings/engine", async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
  try {
    const { runner_type, github_token, github_repo, github_workflow, custom_runner_url, webhook_secret } = await c.req.json();
    const updates = [
      { key: "cf-deployer:runner_type", value: runner_type || "github" },
      { key: "cf-deployer:github_token", value: github_token || "" },
      { key: "cf-deployer:github_repo", value: github_repo || "" },
      { key: "cf-deployer:github_workflow", value: github_workflow || "deploy.yml" },
      { key: "cf-deployer:custom_runner_url", value: custom_runner_url || "" },
      { key: "cf-deployer:webhook_secret", value: webhook_secret || "" }
    ];
    for (const update of updates) {
      await db.run(sql`
        INSERT OR REPLACE INTO system_settings (key, value, updated_at)
        VALUES (${update.key}, ${update.value}, ${Date.now()})
      `);
    }
    return c.json({ success: true, message: "部署引擎配置保存成功！" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
adminApp.post("/settings/chrome-extension", async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
  try {
    const { extensionId } = await c.req.json();
    await db.run(sql`
      INSERT OR REPLACE INTO system_settings (key, value, updated_at)
      VALUES ('plugin:cf-deployer:chrome-ext', ${extensionId || ""}, ${Date.now()})
    `);
    return c.json({ success: true, message: "Chrome 插件 ID 保存成功！" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
adminApp.get("/settings/chrome-extension", async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
  try {
    const row = await db.select({ value: sql`value` }).from(sql`system_settings`).where(sql`key = 'plugin:cf-deployer:chrome-ext'`).get();
    return c.json({ success: true, extensionId: row?.value || "" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
const handleGetCodes = async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    await ensureCodesTableExists(db);
    const page = Number(c.req.query("page")) || 1;
    const limit = Number(c.req.query("limit")) || 10;
    const offset = (page - 1) * limit;
    const list = await db.select({
      id: sql`id`,
      code: sql`code`,
      status: sql`status`,
      bound_account_id: sql`bound_account_id`,
      bound_member_id: sql`bound_member_id`,
      used_at: sql`used_at`,
      expires_at: sql`expires_at`,
      created_at: sql`created_at`
    }).from(sql`cf_deploy_codes`).limit(limit).offset(offset).orderBy(sql`created_at DESC`).all();
    const memberIds = list.map((item) => item.bound_member_id).filter(Boolean);
    const memberMap = {};
    if (memberIds.length > 0) {
      try {
        const placeholders = memberIds.map(() => "?").join(",");
        const d1 = c.env.DB;
        const userRows = await d1.prepare(`
          SELECT m.id AS member_id, u.email, m.nickname 
          FROM members m 
          LEFT JOIN users u ON u.id = m.id 
          WHERE m.id IN (${placeholders})
        `).bind(...memberIds).all();
        if (userRows.results) {
          userRows.results.forEach((row) => {
            memberMap[String(row.member_id)] = {
              email: row.email || "",
              nickname: row.nickname || ""
            };
          });
        }
      } catch (err) {
        console.warn("获取部署码绑定会员信息失败:", err);
      }
    }
    const formattedList = list.map((item) => {
      const memberId = item.bound_member_id ? String(item.bound_member_id) : null;
      const uInfo = memberId ? memberMap[memberId] : null;
      const boundUsername = uInfo ? uInfo.nickname ? `${uInfo.nickname} (${uInfo.email})` : uInfo.email : null;
      return {
        ...item,
        bound_username: boundUsername
      };
    });
    const now = Date.now();
    const countRes = await db.select({ total: sql`COUNT(1)` }).from(sql`cf_deploy_codes`).get();
    const total = Number(countRes?.total) || 0;
    const unusedRes = await db.select({ total: sql`COUNT(1)` }).from(sql`cf_deploy_codes`).where(sql`status = 'unused' AND (expires_at IS NULL OR expires_at >= ${now})`).get();
    const usedRes = await db.select({ total: sql`COUNT(1)` }).from(sql`cf_deploy_codes`).where(sql`status = 'used' AND (expires_at IS NULL OR expires_at >= ${now})`).get();
    const expiredRes = await db.select({ total: sql`COUNT(1)` }).from(sql`cf_deploy_codes`).where(sql`expires_at IS NOT NULL AND expires_at < ${now}`).get();
    return c.json({
      success: true,
      list: formattedList,
      pagination: {
        page,
        limit,
        total,
        unusedCount: Number(unusedRes?.total) || 0,
        usedCount: Number(usedRes?.total) || 0,
        expiredCount: Number(expiredRes?.total) || 0
      }
    });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
};
adminApp.get("/codes", handleGetCodes);
adminApp.get("/admin/codes", handleGetCodes);
const handleGenerateCodes = async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    await ensureCodesTableExists(db);
    const { count, expiresDays } = await c.req.json();
    const genCount = Number(count) || 1;
    let expiresAt = null;
    const days = Number(expiresDays);
    if (!isNaN(days) && days > 0) {
      expiresAt = Date.now() + days * 24 * 60 * 60 * 1e3;
    }
    const codes = [];
    for (let i = 0; i < genCount; i++) {
      const code = generateRandomCode();
      const now = Date.now();
      await db.run(sql`
        INSERT INTO cf_deploy_codes (code, status, bound_account_id, expires_at, used_at, created_at)
        VALUES (${code}, 'unused', NULL, ${expiresAt}, NULL, ${now})
      `);
      codes.push(code);
    }
    return c.json({ success: true, message: `成功批量生成了 ${genCount} 个授权部署码！`, codes });
  } catch (err) {
    return c.json({ success: false, error: `批量生成部署码失败: ${err.message}` }, 500);
  }
};
adminApp.post("/codes/generate", handleGenerateCodes);
adminApp.post("/admin/codes/generate", handleGenerateCodes);
const handleDeleteCode = async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    await ensureCodesTableExists(db);
    const id = c.req.param("id");
    await db.run(sql`
      DELETE FROM cf_deploy_codes WHERE id = ${id}
    `);
    return c.json({ success: true, message: "部署码已被彻底吊销删除！" });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
};
adminApp.delete("/codes/:id", handleDeleteCode);
adminApp.delete("/admin/codes/:id", handleDeleteCode);
const handleBatchDeleteCodes = async (c) => {
  let db;
  try {
    db = await createDbClient(c.env.DB);
  } catch (dbErr) {
    return c.json({ success: false, error: `系统数据库连接不可用: ${dbErr.message}` }, 500);
  }
  try {
    await ensureCodesTableExists(db);
    const { ids } = await c.req.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return c.json({ success: false, error: "请选择待吊销的授权部署码！" }, 400);
    }
    const d1 = c.env.DB;
    const placeholders = ids.map(() => "?").join(",");
    await d1.prepare(`DELETE FROM cf_deploy_codes WHERE id IN (${placeholders})`).bind(...ids).run();
    return c.json({ success: true, message: `成功批量注销了 ${ids.length} 个授权部署码！` });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
};
adminApp.post("/codes/batch-delete", handleBatchDeleteCodes);
adminApp.post("/admin/codes/batch-delete", handleBatchDeleteCodes);
const cfDeployerPlugin = {
  admin: adminApp,
  storefront: sfApp,
  init: async (db) => {
    if (!db) {
      console.warn("⚠️ [cf-deployer] 插件初始化失败，无数据库连接客户端。");
      return;
    }
    try {
      console.log("🚀 [cf-deployer] 正在运行插件数据库表自愈式初始化...");
      await db.run(sql`
        CREATE TABLE IF NOT EXISTS cf_deployments (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          member_id TEXT NOT NULL,
          cf_account_id TEXT NOT NULL,
          cf_token_encrypted TEXT NOT NULL,
          target_domain TEXT NOT NULL,
          status TEXT DEFAULT 'pending',
          step_info TEXT,
          created_at INTEGER,
          updated_at INTEGER
        );
      `);
      try {
        await db.run(sql`ALTER TABLE cf_deployments ADD COLUMN deploy_type TEXT DEFAULT 'free'`);
      } catch {
      }
      await db.run(sql`
        CREATE TABLE IF NOT EXISTS cf_deploy_codes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          code TEXT UNIQUE NOT NULL,
          status TEXT DEFAULT 'unused',
          bound_account_id TEXT,
          used_at INTEGER,
          created_at INTEGER
        );
      `);
      console.log("✅ [cf-deployer] 插件数据库表及授权码机制自愈式初始化成功，服务已就绪！");
    } catch (err) {
      console.error("❌ [cf-deployer] 插件自愈式建表失败:", err);
    }
  }
};
export {
  cfDeployerPlugin as default
};
