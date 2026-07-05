globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as reactExports } from "./worker-entry_DhHjvv2h.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
function useAdminPermissions() {
  const [state, setState] = reactExports.useState(() => {
    return { permissions: [], roles: [], loading: true };
  });
  reactExports.useEffect(() => {
    let cancelled = false;
    const injected = typeof window !== "undefined" ? window.__ADMIN_PERMISSIONS__ : void 0;
    if (Array.isArray(injected)) {
      setState({ permissions: injected, roles: [], loading: false });
    }
    fetch("/api/auth/admin/me").then((res) => res.json().catch(() => ({}))).then((data) => {
      if (cancelled) return;
      setState({
        permissions: Array.isArray(data?.permissions) ? data.permissions : [],
        roles: Array.isArray(data?.roles) ? data.roles : [],
        loading: false
      });
    }).catch(() => {
      if (cancelled) return;
      setState({
        permissions: [],
        roles: [],
        loading: false
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);
  return reactExports.useMemo(() => ({
    permissions: state.permissions,
    roles: state.roles,
    loading: state.loading,
    hasPermission: (required) => hasPermission(state.permissions, required)
  }), [state]);
}
export {
  useAdminPermissions as u
};
