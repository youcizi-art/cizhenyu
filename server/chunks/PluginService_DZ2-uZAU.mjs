globalThis.process ??= {};
globalThis.process.env ??= {};
import { p as plugins, e as eq } from "./index_Bs1dLHcd.mjs";
import { P as PLUGIN_CODE_REGISTRY } from "./auto-registry.gen_DOKA7CHR.mjs";
class PluginService {
  /**
   * 检查插件状态
   * @param db 数据库实例
   * @param slug 插件标识符
   * @returns 插件详细信息或 null
   */
  static async checkPluginStatus(db, slug) {
    if (!slug) {
      throw new Error("插件 Slug 不能为空");
    }
    const cached = await this.cacheGet(slug);
    if (cached) return cached;
    const result = await db.select().from(plugins).where(eq(plugins.slug, slug)).get();
    if (result) {
      await this.cacheSet(slug, result);
    }
    return result;
  }
  /**
   * 获取所有已启用的插件
   * @param db 数据库实例
   */
  static async getEnabledPlugins(db) {
    return await db.select().from(plugins).where(eq(plugins.isEnabled, true)).all();
  }
  /**
   * 获取所有注册的插件 (包含禁用的)
   */
  static async getAllPlugins(db) {
    return await db.select().from(plugins).all();
  }
  /**
   * 更新插件启用状态
   */
  static async updatePluginStatus(db, id, isEnabled) {
    return await db.update(plugins).set({ isEnabled, updatedAt: /* @__PURE__ */ new Date() }).where(eq(plugins.id, id)).run();
  }
  /**
   * 安装插件 (首发安装)
   */
  static async installPlugin(db, slug, metadata) {
    const bundle = PLUGIN_CODE_REGISTRY[slug];
    if (bundle) {
      const initFn = await bundle.getInit();
      if (typeof initFn === "function") {
        try {
          await initFn(db);
          console.log(`🔌 [PluginService] 安装插件 ${slug}: 自动数据库热同步成功.`);
        } catch (err) {
          console.error(`❌ [PluginService] 安装插件 ${slug} 数据库热同步失败:`, err);
        }
      }
    }
    return await this.registerPlugin(db, {
      slug,
      name: metadata.name,
      description: metadata.description || "",
      version: "1.0.0",
      author: metadata.author || "",
      isEnabled: true
      // 默认安装即激活
    });
  }
  /**
   * 卸载插件 (仅删除元数据)
   */
  static async uninstallPlugin(db, slug) {
    await db.delete(plugins).where(eq(plugins.slug, slug)).run();
    await this.clearCache();
    return true;
  }
  static async togglePlugin(db, slug, enabled) {
    await db.update(plugins).set({ isEnabled: enabled, updatedAt: /* @__PURE__ */ new Date() }).where(eq(plugins.slug, slug)).run();
    if (enabled) {
      const bundle = PLUGIN_CODE_REGISTRY[slug];
      if (bundle) {
        const manifest = await bundle.getManifest();
        if (manifest && manifest.permissions) {
          const { registry } = await import("./permission-registry_DdQ4KSyV.mjs");
          registry.registerPluginPermissions({ slug, name: manifest.name }, manifest.permissions);
          await registry.syncToDb(db, true);
        }
      }
    }
    await this.clearCache();
    return true;
  }
  /**
   * 获取所有已启用插件的管理后台菜单
   */
  static async getAdminMenus(db) {
    const enabledPlugins = await this.getEnabledPlugins(db);
    const menus = [];
    for (const p of enabledPlugins) {
      const bundle = PLUGIN_CODE_REGISTRY[p.slug];
      if (bundle) {
        const manifest = await bundle.getManifest();
        if (manifest && manifest.adminMenu) {
          menus.push({
            ...manifest.adminMenu,
            slug: p.slug
          });
        }
      }
    }
    return menus;
  }
  /**
   * 手动登记新插件 (供管理后台使用)
   */
  static async registerPluginManually(db, data) {
    const bundle = PLUGIN_CODE_REGISTRY[data.slug];
    if (!bundle) {
      throw new Error(`[代码认证失败] 在 src/plugins/ 未找到 slug 为 "${data.slug}" 的插件代码。请先在代码层面完成导入。`);
    }
    const manifest = await bundle.getManifest();
    if (!manifest) {
      throw new Error(`[元数据获取失败] 插件 ${data.slug} 的定义文件缺失或已损坏。`);
    }
    const initFn = await bundle.getInit();
    if (typeof initFn === "function") {
      try {
        await initFn(db);
        console.log(`🔌 [PluginService] 手动登记插件 ${data.slug}: 自动数据库热同步成功.`);
      } catch (initErr) {
        console.error(`❌ [PluginService] 手动登记插件 ${data.slug} 数据库热同步失败:`, initErr);
      }
    }
    const result = await this.registerPlugin(db, {
      slug: data.slug,
      name: data.name || manifest.name,
      description: data.description || manifest.description,
      version: manifest.version,
      author: manifest.author,
      isEnabled: false,
      // 初始默认为停用，需手动激活
      config: data.config
    });
    return result;
  }
  /**
   * 注册/更新插件元数据 (内部调用)
   */
  static async registerPlugin(db, data) {
    const existing = await db.select().from(plugins).where(eq(plugins.slug, data.slug)).get();
    if (existing) {
      await db.update(plugins).set({
        name: data.name,
        description: data.description,
        version: data.version,
        author: data.author,
        isEnabled: data.isEnabled ?? existing.isEnabled,
        config: data.config ?? existing.config,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(plugins.slug, data.slug)).run();
    } else {
      await db.insert(plugins).values({
        slug: data.slug,
        name: data.name,
        description: data.description,
        version: data.version,
        author: data.author,
        isEnabled: data.isEnabled ?? true,
        config: data.config || {},
        configSchema: {}
      }).run();
    }
    await this.clearCache();
    return true;
  }
  static async clearCache() {
    this.cache = null;
  }
  /**
   * 更新插件全量元数据 (名称、描述、配置)
   */
  static async updatePluginMetadataBySlug(db, slug, data) {
    await db.update(plugins).set({
      name: data.name,
      description: data.description,
      config: data.config,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(plugins.slug, slug)).run();
    await this.clearCache();
  }
  /**
   * 更新插件配置 (含 Schema 容错与脏数据检测)
   * @param db 数据库实例
   * @param id 插件 ID
   * @param config 配置对象
   */
  static async updatePluginConfig(db, id, config) {
    try {
      let finalConfig = config;
      if (typeof config === "string") {
        finalConfig = JSON.parse(config);
      }
      if (finalConfig === null || typeof finalConfig !== "object" || Array.isArray(finalConfig)) {
        throw new Error("配置必须是一个合法的 JSON 对象");
      }
      const result = await db.update(plugins).set({
        config: finalConfig,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(plugins.id, id)).run();
      return result;
    } catch (err) {
      console.error(`❌ [PluginService] Update Config Error for ID ${id}:`, err);
      throw new Error(`配置保存失败: ${err.message}`);
    }
  }
  /**
   * 从缓存读取 (桩函数)
   * // TODO: Cloudflare KV Implementation
   */
  static async cacheGet(slug) {
    return null;
  }
  /**
   * 写入缓存 (桩函数)
   * // TODO: Cloudflare KV Implementation
   */
  static async cacheSet(slug, data) {
    return;
  }
}
export {
  PluginService
};
