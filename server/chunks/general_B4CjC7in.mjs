globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_DDBDk8oL.mjs";
import { Z as Zap, i as Link, j as PanelsTopLeft, I as Image, $ as $$DashboardLayout } from "./DashboardLayout_Dga_YKQx.mjs";
import { u as useToast, h as useAdminPermissions, j as jsxDevRuntimeExports, L as Loader2, G as Globe, B as Button, I as Input } from "./useAdminPermissions_CfFJqDvL.mjs";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./Card_8dYLdZ7_.mjs";
import { A as AdminSettingsHeader, a as AdminPillTabs, b as AdminSettingsField } from "./AdminSettingsPrimitives_DzGXtBnL.mjs";
import { S as Save } from "./save_Dg5TOohH.mjs";
import { R as RefreshCw } from "./chat-workspace_DyCtoeYY.mjs";
import { S as ShieldCheck } from "./shield-check_SRrW4R9e.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const GeneralSettings = () => {
  const [activeTab, setActiveTab] = reactExports.useState("general");
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const { toast } = useToast();
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canViewGeneral = hasPermission2(["settings.general.view", "settings.general", "role.manage"]);
  const canManageGeneral = hasPermission2(["settings.general", "role.manage"]);
  const [form, setForm] = reactExports.useState({
    canonical_domain: "",
    site_name: "",
    site_description: ""
  });
  const [dns, setDns] = reactExports.useState({
    main_domain: "",
    admin_domain: "",
    api_domain: "",
    img_domain: "",
    member_domain: ""
  });
  const [originalDns, setOriginalDns] = reactExports.useState({});
  const [checkStatus, setCheckStatus] = reactExports.useState({});
  const [accountId, setAccountId] = reactExports.useState("");
  reactExports.useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("/api/v1/settings/site_settings").then((r) => r.json()),
      fetch("/api/v1/settings/site_domains").then((r) => r.json())
    ]).then(([siteSettings, dnsData]) => {
      if (siteSettings) setForm((prev) => ({ ...prev, ...siteSettings }));
      if (dnsData) {
        const main = dnsData.main_domain || "";
        const fullDnsData = {
          main_domain: main,
          admin_domain: dnsData.admin_domain || (main ? `admin.${main}` : ""),
          api_domain: dnsData.api_domain || (main ? `api.${main}` : ""),
          member_domain: dnsData.member_domain || (main ? `my.${main}` : ""),
          img_domain: dnsData.img_domain || (main ? `media.${main}` : "")
        };
        setOriginalDns(fullDnsData);
        setDns(fullDnsData);
      }
      setLoading(false);
    }).catch(() => {
      toast({ variant: "destructive", title: "数据获取失败", description: "后台服务可能尚未启动" });
      setLoading(false);
    });
  }, [toast]);
  const handleSave = async (key, data) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/v1/settings/${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      toast({ title: "配置已同步", description: "边缘缓存已全量清理", className: "bg-emerald-50" });
    } catch (e) {
      toast({ variant: "destructive", title: "保存失败", description: "请检查网络连接或联系技术支持" });
    } finally {
      setSaving(false);
    }
  };
  const runCloudflareOp = async (type, op) => {
    const domain = dns[`${type}_domain`] || "";
    const oldDomain = originalDns[`${type}_domain`] || "";
    setCheckStatus((prev) => ({ ...prev, [type]: "loading" }));
    try {
      if (op === "check") {
        const endpoint = `/api/v1/infra/dns-check?type=${type}`;
        const res = await fetch(endpoint);
        const result = await res.json();
        let hasCloudBinding = false;
        let bestMatch = "";
        if (result.discovered_domains && result.discovered_domains.length > 0) {
          if (type === "img") {
            bestMatch = result.discovered_domains[0];
          } else {
            const prefixMap = {
              admin: ["admin."],
              api: ["api."],
              member: ["my.", "member."]
            };
            const prefixes = prefixMap[type] || [`${type}.`];
            bestMatch = result.discovered_domains.find(
              (d) => prefixes.some((p) => d.startsWith(p))
            ) || "";
          }
          if (bestMatch) {
            hasCloudBinding = true;
            setDns((prev) => ({ ...prev, [`${type}_domain`]: bestMatch }));
            setCheckStatus((prev) => ({ ...prev, [type]: "ok" }));
            toast({ title: "检测到云端绑定", description: `该模块已成功物理绑定至: ${bestMatch}，已自动同步到输入框。`, className: "bg-emerald-50" });
            return true;
          }
        }
        setCheckStatus((prev) => ({ ...prev, [type]: "err" }));
        toast({ variant: "destructive", title: "未检出云端绑定", description: "在云端未检测到任何属于该模块的绑定，请输入域名后点击“一键绑定至云端”。" });
        return false;
      } else {
        if (!domain) {
          setCheckStatus((prev) => ({ ...prev, [type]: "err" }));
          toast({ variant: "destructive", title: "域名不能为空", description: "请先输入欲绑定的域名。" });
          return false;
        }
        const checkRes = await fetch(`/api/v1/infra/dns-check?domain=${domain}&type=${type}`);
        const checkResult = await checkRes.json();
        if (checkResult.is_physically_bound || checkResult.cname_correct) {
          setCheckStatus((prev) => ({ ...prev, [type]: "ok" }));
          toast({ title: "域名已绑定", description: `检测到域名 ${domain} 已经在云端处于正常绑定状态，跳过部署步骤。`, className: "bg-emerald-50" });
          return true;
        }
        toast({ title: "开始一键部署", description: `正在提交部署任务：${domain}...` });
        const bindRes = await fetch("/api/v1/infra/bind-domain", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ domain, type, oldDomain })
        });
        const bindResult = await bindRes.json();
        if (bindResult.success) {
          setCheckStatus((prev) => ({ ...prev, [type]: "ok" }));
          toast({ title: "部署成功", description: `域名 ${domain} 已成功与云端 [${type}] 模块关联。`, className: "bg-emerald-50" });
          return true;
        } else {
          setCheckStatus((prev) => ({ ...prev, [type]: "err" }));
          toast({ variant: "destructive", title: "部署失败", description: bindResult.recommendation || bindResult.error });
          return false;
        }
      }
    } catch (e) {
      setCheckStatus((prev) => ({ ...prev, [type]: "err" }));
      toast({ variant: "destructive", title: "系统错误", description: "与后台通信异常，请稍后再试。" });
      return false;
    }
  };
  const checkMainDomain = async () => {
    if (!dns.main_domain) {
      return false;
    }
    setCheckStatus((prev) => ({ ...prev, main: "loading" }));
    try {
      const res = await fetch(`/api/v1/infra/dns-check?domain=${dns.main_domain}`);
      const data = await res.json();
      if (data.zone_found) {
        setCheckStatus((prev) => ({ ...prev, main: "ok" }));
        if (data.accountId) setAccountId(data.accountId);
        toast({ title: "托管验证通过", description: `Zone ID: ${data.zone_id}`, className: "bg-emerald-50" });
        return true;
      } else {
        setCheckStatus((prev) => ({ ...prev, main: "err" }));
        const accId = data.accountId || "";
        if (accId) setAccountId(accId);
        const link = accId ? `https://dash.cloudflare.com/${accId}/add-site?type=onboard` : "https://dash.cloudflare.com/";
        toast({
          variant: "destructive",
          title: "未找到托管记录",
          description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "请确保该域名已添加至您的 Cloudflare 账户。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: link, target: "_blank", style: { color: "#fff" }, rel: "noopener noreferrer", className: "inline-block text-xs font-bold underline text-rose-500 hover:text-rose-600", children: "点击此处前往 Cloudflare 添加主域名 ↗" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 200,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, void 0)
        });
        return false;
      }
    } catch (e) {
      setCheckStatus((prev) => ({ ...prev, main: "err" }));
      return false;
    }
  };
  const syncAllToCloud = async (currentDns) => {
    if (!dns.main_domain) {
      return;
    }
    setSaving(true);
    toast({ title: "全量同步已启动", description: "正在验证主域名托管状态..." });
    try {
      const res = await fetch(`/api/v1/infra/dns-check?domain=${dns.main_domain}`);
      const data = await res.json();
      if (!data.zone_found) {
        setCheckStatus((prev) => ({ ...prev, main: "err" }));
        const accId = data.accountId || "";
        if (accId) setAccountId(accId);
        const link = accId ? `https://dash.cloudflare.com/${accId}/add-site?type=onboard` : "https://dash.cloudflare.com/";
        toast({
          variant: "destructive",
          title: "主域名未绑定",
          description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "请先完成主域名托管。全量同步已中止。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 241,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "inline-block text-xs font-bold underline text-rose-500 hover:text-rose-600", children: "前往 Cloudflare 添加主域名 ↗" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 242,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 240,
            columnNumber: 13
          }, void 0)
        });
        setSaving(false);
        return;
      }
      setCheckStatus((prev) => ({ ...prev, main: "ok" }));
      if (data.accountId) setAccountId(data.accountId);
      await handleSave("site_domains", currentDns);
      const types = ["admin", "api", "member", "img"];
      const targets = types.filter((t) => currentDns[`${t}_domain`]);
      if (targets.length === 0) {
        toast({ title: "全量同步已完成", description: "主域名验证通过，无子域名需要绑定。", className: "bg-emerald-50" });
        setSaving(false);
        return;
      }
      toast({ title: "主域名验证成功", description: `开始依次同步 ${targets.length} 个二级域名集群部署...` });
      for (const type of targets) {
        await runCloudflareOp(type, "bind");
      }
      toast({ title: "二级域名集群全量部署完毕", description: "所有已配置的子域均已同步到云端。", className: "bg-emerald-50" });
    } catch (e) {
      toast({ variant: "destructive", title: "同步失败", description: "网络连接异常，全量同步中止。" });
    } finally {
      setSaving(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 p-20 text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "mx-auto animate-spin text-blue-500", size: 32 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 286,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: "进入中控台..." }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 287,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
      lineNumber: 285,
      columnNumber: 7
    }, void 0);
  }
  const mainDomainRequiredReason = !dns.main_domain.trim() ? "请先输入主域名后再执行检测或全量同步。" : "";
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto space-y-6 pb-20", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      AdminSettingsHeader,
      {
        title: "站点全局设置",
        description: "统一维护 system_settings 中的站点基础配置与云端域名映射。",
        icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { className: "text-blue-600", size: 24 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 301,
          columnNumber: 15
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 298,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      AdminPillTabs,
      {
        value: activeTab,
        onChange: setActiveTab,
        className: "rounded-2xl border border-slate-200 shadow-inner",
        items: [
          { value: "general", label: "站点基础信息", icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 309,
            columnNumber: 54
          }, void 0) },
          { value: "ops", label: "自动化运维 & 域名集群", icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Zap, { size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 310,
            columnNumber: 56
          }, void 0) }
        ]
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 304,
        columnNumber: 7
      },
      void 0
    ),
    !loadingPermissions && canViewGeneral && !canManageGeneral ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号处于只读模式，可以查看系统设置，但不能修改或同步配置。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
      lineNumber: 315,
      columnNumber: 9
    }, void 0) : null,
    activeTab === "general" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `animate-in fade-in slide-in-from-left-4 duration-500 space-y-6 ${!canManageGeneral ? "pointer-events-none opacity-70" : ""}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-100 shadow-xl shadow-slate-200/50", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "border-b bg-slate-50/50 flex flex-row items-center justify-between p-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-lg font-black text-slate-800", children: "站点基础信息" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-400 font-medium tracking-wide", children: "直接写入 `system_settings.site_settings` 配置项" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 326,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 324,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => handleSave("site_settings", form), disabled: saving || !canManageGeneral, className: "bg-blue-600 hover:bg-blue-700 text-white px-8 h-11 font-black shadow-lg shadow-blue-500/20", children: [
          saving ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin mr-2" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 329,
            columnNumber: 27
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { className: "mr-2", size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 329,
            columnNumber: 71
          }, void 0),
          " 保存信息"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 328,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 323,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-8 space-y-8", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            AdminSettingsField,
            {
              label: "前端主域名",
              icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { size: 16, className: "text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 336,
                columnNumber: 25
              }, void 0),
              className: "space-y-3",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: form.canonical_domain, onChange: (e) => setForm({ ...form, canonical_domain: e.target.value }), className: "h-14 font-mono text-lg border-2 focus:border-blue-500 shadow-sm", placeholder: "https://www.mysite.com" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 339,
                columnNumber: 19
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 334,
              columnNumber: 17
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            AdminSettingsField,
            {
              label: "站点全名 (Site Name)",
              icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PanelsTopLeft, { size: 16, className: "text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 343,
                columnNumber: 25
              }, void 0),
              className: "space-y-3",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: form.site_name, onChange: (e) => setForm({ ...form, site_name: e.target.value }), className: "h-14 text-lg border-2 focus:border-blue-500 shadow-sm", placeholder: "我的交易平台" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 346,
                columnNumber: 19
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 341,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 333,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          AdminSettingsField,
          {
            label: "站点描述 (Site Description)",
            icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Image, { size: 16, className: "text-blue-500" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 351,
              columnNumber: 23
            }, void 0),
            className: "space-y-3",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: form.site_description, onChange: (e) => setForm({ ...form, site_description: e.target.value }), className: "h-14 text-lg border-2 focus:border-blue-500 shadow-sm", placeholder: "用于站点简介、默认文案和基础展示说明" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 354,
              columnNumber: 17
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 349,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 332,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
      lineNumber: 322,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
      lineNumber: 321,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `animate-in fade-in slide-in-from-right-4 duration-500 space-y-6 ${!canManageGeneral ? "pointer-events-none opacity-70" : ""}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-blue-100 shadow-2xl shadow-blue-500/5 overflow-hidden", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "bg-slate-900 text-white p-8 flex flex-row items-center justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-2xl font-black flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 28, className: "text-blue-400" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 365,
                columnNumber: 84
              }, void 0),
              " 托管集群根节点 (Primary Root)"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 365,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-400 text-sm font-medium", children: "输入您在 Cloudflare 绑定的主域名。点击“更新映射”将批量同步所有已配置的子域。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 366,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 364,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              onClick: () => syncAllToCloud(dns),
              disabled: saving || !!mainDomainRequiredReason || !canManageGeneral,
              className: "bg-blue-600 hover:bg-blue-700 text-white h-12 px-10 font-black shadow-lg shadow-blue-500/40",
              children: [
                saving ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin mr-2" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 373,
                  columnNumber: 27
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { className: "mr-2", size: 18 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 373,
                  columnNumber: 71
                }, void 0),
                " 更新映射并全量同步"
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 368,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 363,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-10 space-y-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              placeholder: "例如: yourdomain.com",
              value: dns.main_domain,
              onChange: (e) => {
                const newMain = e.target.value.trim();
                setDns((prev) => {
                  const updated = { ...prev, main_domain: newMain };
                  if (newMain) {
                    const replaceDomain = (key, defPrefix) => {
                      const cur = prev[key];
                      if (!cur || prev.main_domain && cur === `${defPrefix}.${prev.main_domain}` || prev.main_domain && cur.endsWith(`.${prev.main_domain}`)) {
                        const prefix = cur ? cur.replace(`.${prev.main_domain}`, "") : defPrefix;
                        updated[key] = prefix ? `${prefix}.${newMain}` : "";
                      }
                    };
                    replaceDomain("admin_domain", "admin");
                    replaceDomain("api_domain", "api");
                    replaceDomain("member_domain", "my");
                    replaceDomain("img_domain", "media");
                  }
                  return updated;
                });
              },
              className: "h-20 text-4xl font-black text-blue-600 border-x-0 border-t-0 border-b-4 border-blue-100 focus:border-blue-600 rounded-none text-center tracking-tighter shadow-none bg-transparent"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 377,
              columnNumber: 15
            },
            void 0
          ),
          mainDomainRequiredReason && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center text-sm text-slate-500", children: mainDomainRequiredReason }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 403,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              onClick: checkMainDomain,
              disabled: !!mainDomainRequiredReason || !canManageGeneral,
              variant: "outline",
              className: `h-10 px-6 font-black border-2 transition-all ${checkStatus.main === "ok" ? "bg-emerald-50 border-emerald-500 text-emerald-600" : ""}`,
              children: [
                checkStatus.main === "loading" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin mr-2", size: 16 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 414,
                  columnNumber: 53
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 16, className: "mr-2" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 414,
                  columnNumber: 107
                }, void 0),
                checkStatus.main === "ok" ? "Cloudflare 托管验证通过" : "检测主域名托管状态"
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 408,
              columnNumber: 17
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 407,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 376,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 362,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
        { id: "admin", label: "管理控制台 (Admin)", icon: ShieldCheck, desc: "后台登录、数据管理与系统配置入口", default: "admin" },
        { id: "api", label: "业务 API 网关 (Public)", icon: Zap, desc: "前端数据收集、提交与分发公开入口", default: "api" },
        { id: "member", label: "会员中心门户 (Member)", icon: ShieldCheck, desc: "映射 /member 路由至专属二级域名", default: "my" },
        { id: "img", label: "多媒体加速 (Image)", icon: Image, desc: "流式资源代理、R2 内容边缘加速入口", default: "media" }
      ].map((item) => {
        const fullDomain = dns[`${item.id}_domain`] || "";
        let displayPrefix = fullDomain;
        if (dns.main_domain && fullDomain.endsWith(`.${dns.main_domain}`)) {
          displayPrefix = fullDomain.replace(`.${dns.main_domain}`, "");
        }
        const st = checkStatus[item.id] || "idle";
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: `border-slate-100 transition-all duration-300 ${st === "ok" ? "ring-4 ring-emerald-500/20 bg-emerald-50/10" : "hover:shadow-2xl hover:border-blue-100"}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-8 flex items-center gap-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex-shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center transition-all ${st === "ok" ? "bg-emerald-500 text-white shadow-xl shadow-emerald-200" : "bg-slate-100 text-slate-400"}`, children: st === "loading" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin", size: 32 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 440,
            columnNumber: 43
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(item.icon, { size: 40 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 440,
            columnNumber: 92
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 439,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-xl font-black text-slate-800", children: item.label }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 445,
                columnNumber: 25
              }, void 0),
              st === "ok" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1 px-3 py-1 bg-emerald-500 text-white text-[12px] font-black rounded-full uppercase italic tracking-wider shadow-md shadow-emerald-200", children: "ACTIVE & BOUND" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 446,
                columnNumber: 41
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 444,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-400 font-medium", children: item.desc }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 448,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 flex items-stretch", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    placeholder: item.default,
                    value: displayPrefix,
                    onChange: (e) => {
                      const val = e.target.value.trim();
                      const newFull = val ? dns.main_domain ? `${val}.${dns.main_domain}` : val : "";
                      setDns({ ...dns, [`${item.id}_domain`]: newFull });
                    },
                    className: `h-12 font-mono text-blue-600 bg-slate-50 border-slate-200 font-bold ${dns.main_domain ? "text-right rounded-r-none pr-1 border-r-0 focus:ring-0 focus:border-slate-200" : ""}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                    lineNumber: 451,
                    columnNumber: 27
                  },
                  void 0
                ),
                dns.main_domain && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center h-12 bg-slate-100 border border-slate-200 px-4 rounded-r-md text-slate-500 font-mono font-bold", children: [
                  ".",
                  dns.main_domain
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 462,
                  columnNumber: 29
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 450,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-400 font-bold w-48 truncate", children: [
                "目标: ",
                fullDomain || "未配置"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 467,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => runCloudflareOp(item.id, "check"), disabled: st === "loading" || !fullDomain || !canManageGeneral, variant: "outline", className: "h-12 px-6 font-black border-2", children: st === "loading" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "animate-spin", size: 16 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 470,
                  columnNumber: 49
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 16 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                    lineNumber: 470,
                    columnNumber: 139
                  }, void 0),
                  " 检测解析"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 470,
                  columnNumber: 98
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 469,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => runCloudflareOp(item.id, "bind"), disabled: st === "loading" || !fullDomain || !canManageGeneral, className: "h-12 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow-lg shadow-emerald-200", children: "一键绑定至云端" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                  lineNumber: 472,
                  columnNumber: 27
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
                lineNumber: 468,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
              lineNumber: 449,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
            lineNumber: 443,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 438,
          columnNumber: 19
        }, void 0) }, item.id, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
          lineNumber: 437,
          columnNumber: 17
        }, void 0);
      }) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
        lineNumber: 422,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
      lineNumber: 361,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings.tsx",
    lineNumber: 297,
    columnNumber: 5
  }, void 0);
};
const $$General = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$General;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["settings.general.view", "settings.general", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "常规设置" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-6"> <div class="flex items-center gap-2 text-sm text-slate-500 mb-2"> <a href="/admin" class="hover:text-blue-600">管理后台</a> <span>/</span> <span class="text-slate-800 font-medium">配置中心</span> <span>/</span> <span class="text-slate-800 font-medium">常规设置</span> </div> </div> ${renderComponent($$result2, "GeneralSettings", GeneralSettings, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/GeneralSettings", "client:component-export": "GeneralSettings" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/settings/general.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/settings/general.astro";
const $$url = "/admin/settings/general";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$General,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
