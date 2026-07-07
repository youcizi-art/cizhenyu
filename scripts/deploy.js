const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Decode Payload
const payloadStr = process.env.DEPLOY_PAYLOAD;
if (!payloadStr) {
  console.error("No DEPLOY_PAYLOAD provided");
  process.exit(1);
}

const payload = JSON.parse(Buffer.from(payloadStr, 'base64').toString('utf-8'));
const {
  cf_account_id,
  cf_api_token,
  target_domain,
  admin_domain,
  member_domain,
  image_domain,
  d1_database_name,
  r2_bucket_name,
  default_admin_user,
  default_admin_password,
  admin_verification,
  webhook_url,
  webhook_secret,
  deploy_id
} = payload;

// Setup global fetch headers
const CF_API = 'https://api.cloudflare.com/client/v4';
const headers = {
  'Authorization': `Bearer ${cf_api_token}`,
  'Content-Type': 'application/json'
};

const runtimeBootstrapPath = path.join(__dirname, 'runtime-bootstrap.json');

function normalizeHost(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .split(':')[0];
}

function isUnsafeWebhookUrl(value) {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i.test(String(value || '').trim());
}

function collectAllowedDomains() {
  const domains = [
    normalizeHost(target_domain),
    normalizeHost(admin_domain),
    normalizeHost(member_domain),
    normalizeHost(image_domain),
  ].filter(Boolean);

  return Array.from(new Set(domains));
}

function getTurnstileWidgetNames() {
  return {
    member: `Member Login site-${deploy_id}`,
    admin: `Admin Login site-${deploy_id}`
  };
}

function loadRuntimeBootstrap() {
  if (!fs.existsSync(runtimeBootstrapPath)) {
    throw new Error(`Missing runtime bootstrap artifact: ${runtimeBootstrapPath}`);
  }

  const parsed = JSON.parse(fs.readFileSync(runtimeBootstrapPath, 'utf8'));
  const requiredKeys = ['essentials', 'reconcileCreates', 'reconcileAlters', 'reconcileSeeds', 'pluginCreates', 'pluginAlters', 'pluginSeeds'];
  for (const key of requiredKeys) {
    if (!Array.isArray(parsed[key])) {
      throw new Error(`Invalid runtime bootstrap artifact: ${key} must be an array`);
    }
  }

  return parsed;
}

const runtimeBootstrap = loadRuntimeBootstrap();

async function fetchWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) {
        return res;
      }
      const errText = await res.text();
      console.error(`Attempt ${i + 1} failed for ${url}: ${res.status} ${errText}`);
      if (i === maxRetries - 1) throw new Error(`HTTP ${res.status}: ${errText}`);
    } catch (err) {
      console.error(`Attempt ${i + 1} network error for ${url}: ${err.message}`);
      if (i === maxRetries - 1) throw err;
    }
    // Wait before retry (exponential backoff)
    await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
  }
}

async function sendWebhook(status, log) {
  if (!webhook_url) return;
  if (isUnsafeWebhookUrl(webhook_url)) {
    console.warn(`Skip webhook because callback url is unsafe for CI runner: ${webhook_url}`);
    return;
  }
  try {
    await fetchWithRetry(webhook_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${webhook_secret}` },
      body: JSON.stringify({ deployId: deploy_id, status, log, currentStep: status === 'success' ? 6 : 3, totalSteps: 6, webhookSecret: webhook_secret })
    });
  } catch (err) {
    console.error("Webhook failed after retries:", err.message);
  }
}

async function getOrCreateD1(name) {
  // List
  let res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/d1/database`, { headers });
  let data = await res.json();
  let db = data.result?.find(d => d.name === name);
  if (db) return db.uuid;
  
  // Create
  res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/d1/database`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name })
  });
  data = await res.json();
  if (!data.success) throw new Error(`D1 Create Error: ${JSON.stringify(data.errors)}`);
  return data.result.uuid;
}

async function getOrCreateR2(name) {
  let res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/r2/buckets`, { headers });
  let data = await res.json();
  
  // R2 API list response structure: data.result.buckets array OR data.result directly as an array.
  // We should also handle the case where data.result is undefined.
  let bucketList = [];
  if (data && data.result) {
    if (Array.isArray(data.result)) {
      bucketList = data.result;
    } else if (Array.isArray(data.result.buckets)) {
      bucketList = data.result.buckets;
    }
  }
  
  let bucket = bucketList.find(b => b.name === name);
  if (bucket) return bucket.name;

  res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/r2/buckets`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name })
  });
  data = await res.json();
  if (!data.success) throw new Error(`R2 Create Error: ${JSON.stringify(data.errors)}`);
  return name;
}

async function getOrCreateKV(title) {
  let res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/storage/kv/namespaces`, { headers });
  let data = await res.json();
  let ns = data.result?.find(n => n.title === title);
  if (ns) return ns.id;

  res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/storage/kv/namespaces`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ title })
  });
  data = await res.json();
  if (!data.success) throw new Error(`KV Create Error: ${JSON.stringify(data.errors)}`);
  return data.result.id;
}

async function queryD1(databaseId, sqlText) {
  const res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/d1/database/${databaseId}/query`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ sql: sqlText })
  });
  const data = await res.json();
  if (!data.success) throw new Error(`D1 Query Error: ${JSON.stringify(data.errors)}`);
  return data;
}

async function applySqlStatements(databaseId, statements) {
  for (const statement of statements) {
    await queryD1(databaseId, statement);
  }
}

async function applyRuntimeBootstrap(databaseId) {
  console.log(`Applying runtime bootstrap version ${runtimeBootstrap.version || 'unknown'}...`);
  await applySqlStatements(databaseId, runtimeBootstrap.essentials);
  await applySqlStatements(databaseId, runtimeBootstrap.reconcileCreates);
  await applySqlStatements(databaseId, runtimeBootstrap.reconcileAlters);
  await applySqlStatements(databaseId, runtimeBootstrap.reconcileSeeds);
  await applySqlStatements(databaseId, runtimeBootstrap.pluginCreates);
  await applySqlStatements(databaseId, runtimeBootstrap.pluginAlters);
  await applySqlStatements(databaseId, runtimeBootstrap.pluginSeeds);
}

async function seedSiteDomains(databaseId) {
  const siteDomains = {
    main_domain: normalizeHost(target_domain),
    admin_domain: normalizeHost(admin_domain),
    member_domain: normalizeHost(member_domain),
    img_domain: normalizeHost(image_domain),
    public_domains: []
  };

  const valueStr = JSON.stringify(siteDomains).replace(/'/g, "''");
  const query = `
    INSERT INTO system_settings (key, value, updated_at)
    VALUES ('site_domains', '${valueStr}', strftime('%s','now') * 1000)
    ON CONFLICT(key) DO UPDATE SET
      value = excluded.value,
      updated_at = excluded.updated_at
  `;

  await queryD1(databaseId, query);
}

async function ensureTurnstileWidget(name, domains) {
  let res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/challenges/widgets`, { headers });
  let data = await res.json();

  if (!data.success) {
    if (res.status === 403) {
      throw new Error('Cloudflare Token 缺少 Turnstile/Challenges Widgets 管理权限，无法为子站自动创建验证组件。');
    }
    throw new Error(`Turnstile List Error: ${JSON.stringify(data.errors)}`);
  }

  const existing = data.result?.find(widget => widget.name === name);
  const payload = {
    name,
    domains,
    mode: 'managed'
  };

  if (existing) {
    res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/challenges/widgets/${existing.sitekey}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(payload)
    });
    data = await res.json();
    if (res.status === 403) {
      throw new Error('Cloudflare Token 缺少 Turnstile/Challenges Widgets 管理权限，无法更新子站验证组件。');
    }
    if (!data.success) throw new Error(`Turnstile Update Error: ${JSON.stringify(data.errors)}`);
    return {
      siteKey: data.result?.sitekey || existing.sitekey,
      secretKey: data.result?.secret || existing.secret
    };
  }

  res = await fetchWithRetry(`${CF_API}/accounts/${cf_account_id}/challenges/widgets`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });
  data = await res.json();
  if (res.status === 403) {
    throw new Error('Cloudflare Token 缺少 Turnstile/Challenges Widgets 管理权限，无法创建子站验证组件。');
  }
  if (!data.success) throw new Error(`Turnstile Create Error: ${JSON.stringify(data.errors)}`);

  return {
    siteKey: data.result.sitekey,
    secretKey: data.result.secret
  };
}

async function run() {
  try {
    await sendWebhook('deploying', 'Starting deployment process in external engine...');
    
    // 1. Prepare resources
    await sendWebhook('deploying', 'Checking and creating Cloudflare resources (D1, KV, R2)...');
    const d1_id = await getOrCreateD1(d1_database_name);
    await getOrCreateR2(r2_bucket_name);
    const kv_rate_limiter = await getOrCreateKV(`site_${deploy_id}_rate_limiter`);
    const kv_config = await getOrCreateKV(`site_${deploy_id}_config`);
    const kv_session = await getOrCreateKV(`site_${deploy_id}_session`);
    const allowedDomains = collectAllowedDomains();
    const widgetNames = getTurnstileWidgetNames();
    const memberTurnstile = await ensureTurnstileWidget(widgetNames.member, allowedDomains);
    const adminTurnstile = await ensureTurnstileWidget(widgetNames.admin, allowedDomains);
    await sendWebhook('deploying', `Applying shared runtime bootstrap (${runtimeBootstrap.version || 'unknown'})...`);
    await applyRuntimeBootstrap(d1_id);
    await seedSiteDomains(d1_id);

    // 2. Generate wrangler.toml
    await sendWebhook('deploying', 'Generating wrangler.toml...');
    const tomlContent = `
name = "site-${deploy_id}"
compatibility_date = "2024-11-01"
compatibility_flags = ["nodejs_compat"]
find_additional_modules = true
base_dir = "server"
main = "server/entry.mjs"

assets = { directory = "client", binding = "ASSETS" }

[[rules]]
type = "ESModule"
globs = ["./**/*.mjs"]
fallthrough = true

[[routes]]
pattern = "${target_domain}"
custom_domain = true

[[routes]]
pattern = "${admin_domain}"
custom_domain = true

[[routes]]
pattern = "${member_domain}"
custom_domain = true

[[routes]]
pattern = "${image_domain}"
custom_domain = true

[vars]
ENABLE_RUNTIME_SCHEMA_SYNC = "true"
MEDIA_BUCKET_NAME = "${r2_bucket_name}"
TURNSTILE_SITE_KEY = "${memberTurnstile.siteKey}"
TURNSTILE_SECRET_KEY = "${memberTurnstile.secretKey}"
TURNSTILE_ADMIN_SITE_KEY = "${adminTurnstile.siteKey}"
TURNSTILE_ADMIN_SECRET_KEY = "${adminTurnstile.secretKey}"
CF_ACCOUNT_ID = "${cf_account_id}"
CF_API_TOKEN = "${cf_api_token}"
DEFAULT_ADMIN_USER = "${default_admin_user}"
DEFAULT_ADMIN_PASSWORD = "${default_admin_password}"
ADMIN_VERIFICATION = "${admin_verification}"

[[d1_databases]]
binding = "DB"
database_name = "${d1_database_name}"
database_id = "${d1_id}"

[[r2_buckets]]
binding = "MEDIA_BUCKET"
bucket_name = "${r2_bucket_name}"

[[kv_namespaces]]
binding = "RATE_LIMITER"
id = "${kv_rate_limiter}"

[[kv_namespaces]]
binding = "NS_CONFIG"
id = "${kv_config}"

[[kv_namespaces]]
binding = "SESSION"
id = "${kv_session}"
`;

    fs.writeFileSync(path.join(__dirname, '..', 'wrangler.toml'), tomlContent.trim());

    // 3. Deploy
    await sendWebhook('deploying', 'Running wrangler deploy...');
    process.env.CLOUDFLARE_API_TOKEN = cf_api_token;
    process.env.CLOUDFLARE_ACCOUNT_ID = cf_account_id;

    execSync('npx wrangler deploy', { stdio: 'inherit', cwd: path.join(__dirname, '..') });

    await sendWebhook('success', 'Deployment successful!');
  } catch (err) {
    console.error(err);
    await sendWebhook('failed', `Deployment failed: ${err.message}`);
    process.exit(1);
  }
}

run();
