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
  let bucket = data.result?.find(b => b.name === name);
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

    // 2. Generate wrangler.toml
    await sendWebhook('deploying', 'Generating wrangler.toml...');
    const tomlContent = `
name = "site-${deploy_id}"
compatibility_date = "2024-11-01"
compatibility_flags = ["nodejs_compat"]
main = "server/entry.mjs"

assets = { directory = "client", binding = "ASSETS" }

[[routes]]
pattern = "${target_domain}"
custom_domain = true

[[routes]]
pattern = "${admin_domain}"
custom_domain = true

[[routes]]
pattern = "${member_domain}"
custom_domain = true

[vars]
ENABLE_RUNTIME_SCHEMA_SYNC = "true"
MEDIA_BUCKET_NAME = "${r2_bucket_name}"
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
    
    // Install wrangler if not installed
    execSync('npm install wrangler --no-save', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    
    execSync('npx wrangler deploy', { stdio: 'inherit', cwd: path.join(__dirname, '..') });

    await sendWebhook('success', 'Deployment successful!');
  } catch (err) {
    console.error(err);
    await sendWebhook('failed', `Deployment failed: ${err.message}`);
    process.exit(1);
  }
}

run();
