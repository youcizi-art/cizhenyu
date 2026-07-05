globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as permissions, c as collections, m as models, p as plugins, r as rolePermissions, i as inArray, e as eq } from "./index_Bs1dLHcd.mjs";
const CORE_PERMISSIONS = [
  { slug: "all", name: "超级权限", permCategory: "System", description: "拥有系统所有操作权限" },
  { slug: "dashboard.view", name: "查看概览", permCategory: "System", description: "允许查看后台首页概览" },
  { slug: "admin.manage", name: "管理员管理", permCategory: "System" },
  { slug: "role.manage", name: "角色权限管理", permCategory: "System" },
  { slug: "languages.view", name: "查看语言设置", permCategory: "系统设置", description: "允许查看系统语种配置，但不能新增、修改或删除语种" },
  { slug: "languages.manage", name: "多语言管理", permCategory: "System" },
  { slug: "plugins.view", name: "查看插件", permCategory: "System", description: "允许查看插件页面与扩展功能入口，但不能修改插件状态" },
  { slug: "plugins.manage", name: "插件管理", permCategory: "System" },
  { slug: "sites.view", name: "查看模块模板注入器", permCategory: "模型管理", description: "允许查看系统模块模板与批量注入能力，但不能执行注入或修改模块" },
  { slug: "sites.manage", name: "管理模块模板注入器", permCategory: "模型管理", description: "允许创建、编辑、同步和执行系统模块模板注入" },
  { slug: "models.view", name: "查看模型引擎", permCategory: "模型管理", description: "允许查看内容模型定义，但不能新增、编辑或删除模型" },
  { slug: "models.manage", name: "管理模型引擎", permCategory: "模型管理", description: "允许新增、编辑和删除内容模型定义" },
  { slug: "collections.manage.view", name: "查看业务集合管理", permCategory: "模型管理", description: "允许查看业务集合结构与分组配置，但不能修改集合定义" },
  { slug: "collections.manage", name: "管理业务集合", permCategory: "模型管理", description: "允许新增、编辑和删除业务集合定义" },
  { slug: "api.manage.view", name: "查看API管理", permCategory: "模型管理", description: "允许查看开放 API 策略与文档，但不能修改接口治理配置" },
  { slug: "api.manage", name: "管理API", permCategory: "模型管理", description: "允许修改业务集合 API 策略与公开访问配置" },
  { slug: "database.view", name: "查看数据库管理", permCategory: "模型管理", description: "允许查看数据库表结构与数据，但不能执行写入或 SQL 变更" },
  { slug: "database.manage", name: "管理数据库", permCategory: "模型管理", description: "允许执行数据库写入、删除与 SQL 调试操作" },
  // 附件管理
  { slug: "media.view", name: "查看附件", permCategory: "附件管理", description: "允许查看媒体库与附件详情，但不能上传、删除或清理附件" },
  { slug: "media.manage", name: "附件管理", permCategory: "附件管理" },
  // 系统设置
  { slug: "settings.general.view", name: "查看常规设置", permCategory: "系统设置", description: "允许查看站点常规配置，但不能修改站点参数" },
  { slug: "settings.general", name: "常规设置", permCategory: "系统设置", description: "读取和修改站点常规配置项" },
  { slug: "settings.mail.view", name: "查看邮件服务", permCategory: "系统设置", description: "允许查看邮件服务与模板配置，但不能修改内容" },
  { slug: "settings.mail", name: "邮件服务配置", permCategory: "系统设置", description: "配置 SMTP / SendGrid 等邮件发送服务" },
  { slug: "ai.employee.view", name: "查看AI员工入口", permCategory: "系统设置", description: "允许在业务集合等页面看到 AI 员工相关入口与能力说明，但不能实际发起生成或对话" },
  { slug: "settings.ai.view", name: "查看AI网关", permCategory: "系统设置", description: "允许查看 AI 提供商、网关与数字员工配置，但不能修改" },
  { slug: "settings.ai", name: "AI 网关配置", permCategory: "系统设置", description: "管理 AI 提供商及模型分发矩阵" },
  { slug: "ai.employee.use", name: "使用AI员工", permCategory: "系统设置", description: "允许在业务集合、技能插件等后台模块中发起 AI 员工对话、生成和工具调用" },
  { slug: "seo_geo.view", name: "查看 SEO/GEO 增强", permCategory: "系统设置", description: "允许查看 SEO/GEO 映射规则" },
  { slug: "seo_geo.manage", name: "管理 SEO/GEO 增强", permCategory: "系统设置", description: "允许创建和修改 SEO/GEO 映射规则" },
  // 用户管理 (Core Identity)
  { slug: "user.view", name: "查看用户", permCategory: "用户管理", description: "允许查看前台会员列表" },
  { slug: "user.create", name: "创建用户", permCategory: "用户管理", description: "允许添加新会员" },
  { slug: "user.update", name: "编辑用户", permCategory: "用户管理", description: "允许修改会员资料与状态" },
  { slug: "user.delete", name: "删除用户", permCategory: "用户管理", description: "允许移除会员账号" },
  { slug: "user.api_manage", name: "API 管理", permCategory: "用户管理", description: "允许管理会员的 API 访问权限" },
  { slug: "user.balance_manage", name: "余额管理", permCategory: "用户管理", description: "允许查看和调整会员余额" },
  { slug: "user.points_manage", name: "积分管理", permCategory: "用户管理", description: "允许查看和调整会员积分" },
  { slug: "translations.view", name: "查看翻译字段", permCategory: "用户管理", description: "允许查看多语言翻译字段" },
  { slug: "translations.manage", name: "管理翻译字段", permCategory: "用户管理", description: "允许修改和导入多语言翻译字段" }
];
const CORE_SLUGS = CORE_PERMISSIONS.map((p) => p.slug);
async function upsertPermissionDef(db, def) {
  const existing = await db.select().from(permissions).where(eq(permissions.slug, def.slug)).get();
  if (existing) {
    await db.update(permissions).set({
      name: def.name,
      description: def.description,
      permCategory: def.permCategory,
      pluginSlug: def.pluginSlug ?? existing.pluginSlug
    }).where(eq(permissions.slug, def.slug)).run();
  } else {
    await db.insert(permissions).values({
      slug: def.slug,
      name: def.name,
      description: def.description,
      permCategory: def.permCategory,
      pluginSlug: def.pluginSlug || null
    }).run();
  }
}
class PermissionRegistry {
  static instance;
  pendingPermissions = /* @__PURE__ */ new Map();
  constructor() {
  }
  static getInstance() {
    if (!PermissionRegistry.instance) {
      PermissionRegistry.instance = new PermissionRegistry();
    }
    return PermissionRegistry.instance;
  }
  /**
   * 注册权限定义 (暂存)
   */
  register(def) {
    if (!def.slug) {
      console.warn("⚠️ [Permission] 拒绝注册空 Slug 权限:", def);
      return;
    }
    this.pendingPermissions.set(def.slug, def);
  }
  /**
   * 同步到数据库
   * @param db Drizzle 数据库实例
   * @param authoritative 是否启用权威同步 (删除数据库中不在注册表范围内的权限)
   */
  async syncToDb(db, authoritative = false) {
    const defs = Array.from(this.pendingPermissions.values());
    const registeredSlugsInMem = defs.map((d) => d.slug);
    try {
      for (const def of defs) {
        try {
          await upsertPermissionDef(db, def);
        } catch (e) {
          console.warn(`⚠️ [Permission] 同步单个权限失败 (${def.slug}):`, e);
        }
      }
      if (authoritative) {
        const dbPermissions = await db.select().from(permissions).all();
        const activeCollections = await db.select({ slug: collections.slug }).from(collections).all();
        const activeModels = await db.select({ slug: models.slug }).from(models).all();
        const allPluginsInDb = await db.select({ slug: plugins.slug }).from(plugins).all();
        const pluginSlugsInDb = new Set(allPluginsInDb.map((p) => p.slug));
        const legalDynamicSlugs = [
          ...activeCollections.flatMap((c) => [`collection:${c.slug}:view`, `collection:${c.slug}:edit`, `collection:${c.slug}:delete`]),
          ...activeModels.flatMap((m) => [`entity:${m.slug}:view`, `entity:${m.slug}:edit`, `entity:${m.slug}:delete`])
        ];
        const allLegalSlugs = /* @__PURE__ */ new Set([...CORE_SLUGS, ...registeredSlugsInMem, ...legalDynamicSlugs]);
        const orphans = dbPermissions.filter((p) => {
          if (allLegalSlugs.has(p.slug)) return false;
          if (p.pluginSlug && pluginSlugsInDb.has(p.pluginSlug)) return false;
          return true;
        });
        console.log(`📡 [Permission] 权威同步审计: DB(${dbPermissions.length}), 合法池(${allLegalSlugs.size}), 命中孤儿(${orphans.length})`);
        if (orphans.length > 0) {
          const orphanSlugs = orphans.map((p) => p.slug);
          console.log(`🧹 [Permission] 即将清理 ${orphans.length} 条孤儿权限: ${orphanSlugs.slice(0, 3).join(", ")}...`);
          try {
            await db.delete(rolePermissions).where(inArray(rolePermissions.permissionSlug, orphanSlugs));
            await db.delete(permissions).where(inArray(permissions.slug, orphanSlugs));
            console.log(`✅ [Permission] 权威同步清理成功`);
          } catch (delError) {
            console.error(`❌ [Permission] 孤儿清理失败 (物理冲突):`, delError);
          }
        }
      }
      console.log(`✅ [Permission] 权限同步完成 (共登记 ${defs.length} 条)`);
    } catch (err) {
      console.error("❌ [Permission] 同步权限失败:", err);
    }
  }
  /**
   * 获取所有已登记权限
   */
  getAll() {
    return Array.from(this.pendingPermissions.values());
  }
  /**
   * 清空所有登记的权限
   */
  clear() {
    this.pendingPermissions.clear();
    console.log("🧹 [Permission] 注册表已清空");
  }
  /**
   * 取消注册权限
   */
  unregister(slug) {
    this.pendingPermissions.delete(slug);
    console.log(`🧹 [Permission] 已注销权限: ${slug}`);
  }
  /**
   * 检查权限是否存在 (用于测试结果验证)
   */
  has(slug) {
    return this.pendingPermissions.has(slug);
  }
  /**
   * 初始化核心权限
   */
  initCorePermissions() {
    this.clear();
    CORE_PERMISSIONS.forEach((p) => this.register(p));
  }
  /**
   * 注册插件预定义权限
   */
  registerPluginPermissions(plugin, manifestPerms) {
    manifestPerms.forEach((p) => {
      this.register({
        slug: p.slug,
        name: p.name,
        description: p.description,
        permCategory: `Plugin: ${plugin.name}`,
        pluginSlug: plugin.slug
        // 核心修复：注入归属插件标识
      });
    });
  }
  /**
   * 动态模型/集合权限映射器
   */
  registerDynamicPermissions(item, type) {
    const actions = [
      { action: "view", name: "查看" },
      { action: "edit", name: "编辑/保存" },
      { action: "delete", name: "删除" }
    ];
    actions.forEach((a) => {
      this.register({
        slug: `${type}:${item.slug}:${a.action}`,
        name: `${a.name}${item.name}`,
        permCategory: `${type === "entity" ? "模型" : "业务集合"}: ${item.name}`
      });
    });
  }
}
const registry = PermissionRegistry.getInstance();
const initCorePermissions = () => registry.initCorePermissions();
const syncCorePermissionsToDb = async (db) => {
  for (const def of CORE_PERMISSIONS) {
    registry.register(def);
    await upsertPermissionDef(db, def);
  }
};
export {
  PermissionRegistry,
  initCorePermissions,
  registry,
  syncCorePermissionsToDb
};
