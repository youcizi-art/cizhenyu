globalThis.process ??= {};
globalThis.process.env ??= {};
import { aM as like, o as or, aN as count, f as createDbClient, h as systemSettings, e as eq, aO as BaseName, D as Column, E as ColumnAliasProxyHandler, aP as ColumnBuilder, a3 as Columns, aQ as ConsoleLogWriter, ab as DefaultLogger, X as DrizzleError, a6 as DrizzleQueryError, aR as ExtraConfigBuilder, aS as ExtraConfigColumns, aT as FakePrimitiveParam, aU as IsAlias, Y as Many, aV as Name, aa as NoopLogger, W as One, aW as OriginalName, P as Param, aX as Placeholder, Q as QueryPromise, aY as Relation, aZ as RelationTableAliasProxyHandler, a_ as Relations, C as SQL, a$ as Schema, b0 as StringChunk, S as Subquery, G as Table, T as TableAliasProxyHandler, a7 as TransactionRollbackError, B as View, V as ViewBaseConfig, a2 as WithSubquery, b1 as aliasedRelation, Z as aliasedTable, K as aliasedTableColumn, g as and, a1 as applyMixins, b2 as arrayContained, b3 as arrayContains, b4 as arrayOverlaps, ah as asc, b5 as avg, b6 as avgDistinct, b7 as between, b8 as bindIfParam, b9 as cosineDistance, ba as countDistinct, bb as createMany, bc as createOne, ad as createTableRelationsHelpers, ak as desc, z as entityKind, bd as exists, ac as extractTablesRelationalConfig, a8 as fillPlaceholders, be as getColumnNameAndConfig, L as getOperators, O as getOrderByOperators, _ as getTableColumns, $ as getTableLikeName, I as getTableName, U as getTableUniqueName, bf as getViewName, bg as getViewSelectedFields, bh as gt, bi as gte, bj as hammingDistance, bk as hasOwnEntityKind, a0 as haveSameKeys, bl as ilike, i as inArray, bm as innerProduct, A as is, bn as isConfig, bo as isDriverValueEncoder, bp as isNotNull, bq as isNull, br as isSQLWrapper, bs as isTable, bt as isView, bu as jaccardDistance, bv as l1Distance, bw as l2Distance, bx as lt, q as lte, N as mapColumnsInAliasedSQLToAlias, M as mapColumnsInSQLToAlias, a5 as mapRelationalRow, a9 as mapResultRow, a4 as mapUpdateSet, by as max, bz as min, bA as name, bB as ne, bC as noopDecoder, bD as noopEncoder, bE as noopMapper, R as normalizeRelation, bF as not, bG as notBetween, bH as notExists, bI as notIlike, bJ as notInArray, bK as notLike, H as orderSelectedFields, bL as param, bM as placeholder, bN as relations, s as sql, bO as sum, bP as sumDistinct, bQ as textDecoder } from "./index_C8hkm3Ad.mjs";
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseName,
  Column,
  ColumnAliasProxyHandler,
  ColumnBuilder,
  Columns,
  ConsoleLogWriter,
  DefaultLogger,
  DrizzleError,
  DrizzleQueryError,
  ExtraConfigBuilder,
  ExtraConfigColumns,
  FakePrimitiveParam,
  IsAlias,
  Many,
  Name,
  NoopLogger,
  One,
  OriginalName,
  Param,
  Placeholder,
  QueryPromise,
  Relation,
  RelationTableAliasProxyHandler,
  Relations,
  get SQL() {
    return SQL;
  },
  Schema,
  StringChunk,
  Subquery,
  Table,
  TableAliasProxyHandler,
  TransactionRollbackError,
  View,
  ViewBaseConfig,
  WithSubquery,
  aliasedRelation,
  aliasedTable,
  aliasedTableColumn,
  and,
  applyMixins,
  arrayContained,
  arrayContains,
  arrayOverlaps,
  asc,
  avg,
  avgDistinct,
  between,
  bindIfParam,
  cosineDistance,
  count,
  countDistinct,
  createMany,
  createOne,
  createTableRelationsHelpers,
  desc,
  entityKind,
  eq,
  exists,
  extractTablesRelationalConfig,
  fillPlaceholders,
  getColumnNameAndConfig,
  getOperators,
  getOrderByOperators,
  getTableColumns,
  getTableLikeName,
  getTableName,
  getTableUniqueName,
  getViewName,
  getViewSelectedFields,
  gt,
  gte,
  hammingDistance,
  hasOwnEntityKind,
  haveSameKeys,
  ilike,
  inArray,
  innerProduct,
  is,
  isConfig,
  isDriverValueEncoder,
  isNotNull,
  isNull,
  isSQLWrapper,
  isTable,
  isView,
  jaccardDistance,
  l1Distance,
  l2Distance,
  like,
  lt,
  lte,
  mapColumnsInAliasedSQLToAlias,
  mapColumnsInSQLToAlias,
  mapRelationalRow,
  mapResultRow,
  mapUpdateSet,
  max,
  min,
  name,
  ne,
  noopDecoder,
  noopEncoder,
  noopMapper,
  normalizeRelation,
  not,
  notBetween,
  notExists,
  notIlike,
  notInArray,
  notLike,
  or,
  orderSelectedFields,
  param,
  placeholder,
  relations,
  get sql() {
    return sql;
  },
  sum,
  sumDistinct,
  textDecoder
}, Symbol.toStringTag, { value: "Module" }));
let RUNTIME_CACHE = null;
let CACHE_EXPIRY = 0;
const CACHE_TTL = 30 * 1e3;
const resetDomainCache = () => {
  RUNTIME_CACHE = null;
  CACHE_EXPIRY = 0;
};
async function getValidatedMapping(env) {
  const { DB, NS_CONFIG } = env || {};
  if (!DB && !NS_CONFIG) {
    console.warn("⚠️ [Domains] 缺失数据库绑定，返回基础默认配置。");
    return null;
  }
  const now = Date.now();
  if (RUNTIME_CACHE && now < CACHE_EXPIRY) return RUNTIME_CACHE;
  let config = null;
  try {
    if (env.NS_CONFIG) {
      config = await env.NS_CONFIG.get("site_domains", { type: "json" });
    }
  } catch (e) {
  }
  if (!config) {
    try {
      const db = await createDbClient(env.DB);
      const row = await db.select().from(systemSettings).where(eq(systemSettings.key, "site_domains")).get();
      if (row?.value) {
        config = JSON.parse(row.value);
        if (env.NS_CONFIG) await env.NS_CONFIG.put("site_domains", row.value);
      }
    } catch (e) {
    }
  }
  if (!config || !config.main_domain) return null;
  const processed = {
    ...config,
    admin_domain: config.admin_domain?.trim() || "",
    api_domain: config.api_domain?.trim() || "",
    img_domain: config.img_domain?.trim() || "",
    member_domain: config.member_domain?.trim() || "",
    public_domains: (config.public_domains || []).map((d) => d.trim()).filter(Boolean)
  };
  RUNTIME_CACHE = processed;
  CACHE_EXPIRY = now + CACHE_TTL;
  return processed;
}
function normalizeHost(d) {
  if (!d) return "";
  return d.trim().toLowerCase().replace(/^https?:\/\//, "").split(":")[0].split("/")[0];
}
function identifyTarget(hostname, config, env) {
  const host = normalizeHost(hostname);
  if (host === "localhost" || host === "127.0.0.1") return "admin";
  const envAdminPattern = env?.WRANGLER_ADMIN_PATTERN || "";
  let defaultAdminPattern = "";
  let defaultMain = "";
  if (envAdminPattern) {
    defaultAdminPattern = envAdminPattern.trim().toLowerCase();
    const parts = defaultAdminPattern.split(".");
    defaultMain = parts.length > 2 ? parts.slice(1).join(".") : defaultAdminPattern;
  } else {
    const hostParts = host.split(".");
    if (hostParts.length > 2) {
      defaultMain = hostParts.slice(1).join(".");
      defaultAdminPattern = "admin." + defaultMain;
    } else {
      defaultMain = host;
      defaultAdminPattern = "admin." + host;
    }
  }
  if (config) {
    if (config.admin_domain && host === normalizeHost(config.admin_domain)) return "admin";
    if (config.api_domain && host === normalizeHost(config.api_domain)) return "api";
    if (config.member_domain && host === normalizeHost(config.member_domain)) return "member";
    if (config.img_domain && host === normalizeHost(config.img_domain)) return "img";
  }
  if (host === normalizeHost(defaultAdminPattern)) return "admin";
  if (host === `api.${defaultMain}`) return "api";
  if (host === `my.${defaultMain}` || host === `member.${defaultMain}`) return "member";
  if (config) {
    if (config.public_domains?.some((d) => {
      const nd = normalizeHost(d);
      return host === nd || host.endsWith(`.${nd}`);
    })) return "public";
    if (host === normalizeHost(config.main_domain)) return "public";
  }
  if (host === normalizeHost(defaultMain)) return "public";
  if (defaultAdminPattern === defaultMain && host === normalizeHost(defaultMain)) {
    return "admin";
  }
  return "public";
}
export {
  index as a,
  getValidatedMapping as g,
  identifyTarget as i,
  resetDomainCache as r
};
