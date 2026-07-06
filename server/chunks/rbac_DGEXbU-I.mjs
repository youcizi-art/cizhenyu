globalThis.process ??= {};
globalThis.process.env ??= {};
const hasPermission = (userPermissions, targetPermission) => {
  if (userPermissions.includes("all") || userPermissions.includes("*")) return true;
  if (Array.isArray(targetPermission)) {
    return targetPermission.some((p) => userPermissions.includes(p));
  }
  return userPermissions.includes(targetPermission);
};
export {
  hasPermission as h
};
