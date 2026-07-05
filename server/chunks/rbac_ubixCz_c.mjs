globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createMiddleware } from "./index_D5ANNvI6.mjs";
import { k as roles, l as adminsToRoles, e as eq, g as and, o as or, r as rolePermissions, i as inArray, f as createDbClient } from "./index_Bs1dLHcd.mjs";
class RbacService {
  /**
   * 校验管理员在特定租户下是否具备某项权限
   * @param db 数据库客户端
   * @param adminId 管理员 ID
   * @param action 权限标识 (Slug)
   * @param tenantId 租户 ID (对应 sites.id 或 0)
   */
  static async checkPermission(db, adminId, action, tenantId) {
    const activeRoles = await db.select({
      id: roles.id,
      name: roles.name,
      scope: roles.scope
    }).from(adminsToRoles).innerJoin(roles, eq(adminsToRoles.roleId, roles.id)).where(and(
      eq(adminsToRoles.adminId, adminId),
      or(
        eq(adminsToRoles.tenantId, tenantId),
        eq(roles.scope, "system")
      )
    )).all();
    if (activeRoles.length === 0) return false;
    if (activeRoles.some((r) => r.name === "SuperAdmin")) return true;
    const roleIds = activeRoles.map((r) => r.id);
    const perms = await db.select({ slug: rolePermissions.permissionSlug }).from(rolePermissions).where(inArray(rolePermissions.roleId, roleIds)).all();
    const slugs = perms.map((p) => p.slug);
    return slugs.includes("*") || slugs.includes("all") || slugs.includes(action);
  }
  /**
   * 获取用户在特定租户下的所有权限列表
   */
  static async getPermissions(db, adminId, tenantId) {
    const activeRoles = await db.select({
      id: roles.id
    }).from(adminsToRoles).innerJoin(roles, eq(adminsToRoles.roleId, roles.id)).where(and(
      eq(adminsToRoles.adminId, adminId),
      or(
        eq(adminsToRoles.tenantId, tenantId),
        eq(roles.scope, "system")
      )
    )).all();
    if (activeRoles.length === 0) return [];
    const roleIds = activeRoles.map((r) => r.id);
    const perms = await db.select({ slug: rolePermissions.permissionSlug }).from(rolePermissions).where(inArray(rolePermissions.roleId, roleIds)).all();
    return Array.from(new Set(perms.map((p) => p.slug)));
  }
}
const getAdminAuthInfo = async (db, adminId) => {
  const userRoles = await db.select({
    roleId: roles.id,
    roleName: roles.name
  }).from(adminsToRoles).innerJoin(roles, eq(adminsToRoles.roleId, roles.id)).where(eq(adminsToRoles.adminId, adminId));
  const roleNames = userRoles.map((role) => role.roleName);
  if (roleNames.length === 0) {
    return { permissions: [], roles: [] };
  }
  if (roleNames.includes("SuperAdmin")) {
    return { permissions: ["*"], roles: roleNames };
  }
  const roleIds = userRoles.map((role) => role.roleId);
  const permissions = await db.select({ slug: rolePermissions.permissionSlug }).from(rolePermissions).where(inArray(rolePermissions.roleId, roleIds));
  return {
    permissions: Array.from(new Set(permissions.map((item) => item.slug))),
    roles: roleNames
  };
};
const getAdminPermissions = async (db, adminId) => {
  const authInfo = await getAdminAuthInfo(db, adminId);
  return authInfo.permissions;
};
const requirePermission = (action) => {
  return createMiddleware(async (c, next) => {
    const user = c.get("user");
    const agentProxyAuth = c.get("agentProxyAuth");
    if (!user) {
      const isTest = c.env.NODE_ENV === "test" || !!process.env.VITEST;
      if (isTest && c.req.header("X-Test-Bypass") === "true") {
        return await next();
      }
      console.warn(`🔒 [RBAC] 拦截未登录访问: Path: ${c.req.path}`);
      return c.json({ error: "未授权访问: 请先登录" }, 401);
    }
    let tenantId = 0;
    const domains = c.get("domains") || c.get("site_domains");
    if (domains && domains.tenant_id) {
      tenantId = Number(domains.tenant_id);
    }
    const paramId = c.req.param("tenantId");
    if (paramId) {
      tenantId = Number(paramId);
    }
    const actions = Array.isArray(action) ? action : [action];
    let hasAccess = false;
    if (agentProxyAuth) {
      const granted = Array.isArray(agentProxyAuth.permissions) ? agentProxyAuth.permissions : [];
      hasAccess = actions.some((a) => granted.includes("*") || granted.includes("all") || granted.includes(a));
      c.set("userPermissions", granted);
      c.set("userRoles", agentProxyAuth.roles || []);
      c.set("isAdmin", !!agentProxyAuth.isAdmin);
    } else {
      const db = await createDbClient(c.env.DB);
      const authInfo = await getAdminAuthInfo(db, user.id);
      c.set("userPermissions", authInfo.permissions);
      c.set("userRoles", authInfo.roles);
      c.set("isAdmin", authInfo.roles.includes("SuperAdmin"));
      for (const a of actions) {
        if (await RbacService.checkPermission(db, user.id, a, tenantId)) {
          hasAccess = true;
          break;
        }
      }
    }
    if (hasAccess) {
      c.set("activeTenantId", tenantId);
      await next();
    } else {
      console.warn(`🔒 [RBAC] 越权拦截: 用户 ${user.username || user.id} 尝试访问 [${action}]，租户ID: [${tenantId}]`);
      return c.json({
        error: "权限不足",
        required: action,
        tenantId
      }, 403);
    }
  });
};
export {
  getAdminAuthInfo,
  getAdminPermissions,
  requirePermission
};
