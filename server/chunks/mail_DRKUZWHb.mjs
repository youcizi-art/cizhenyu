globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_DhHjvv2h.mjs";
import { M as Mail, C as Code, k as ArrowUpRight, l as Server, H as Hash, $ as $$DashboardLayout } from "./DashboardLayout_COgjawil.mjs";
import { j as jsxDevRuntimeExports, L as Loader2, B as Button, T as Trash2 } from "./Button_BI0VYNyM.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./Card_Bcuf39jp.mjs";
import { u as useToast, I as Input } from "./Input_B7IXRXvt.mjs";
import { A as AdminSettingsHeader, a as AdminPillTabs, b as AdminSettingsField, c as AdminDialogActions } from "./AdminSettingsPrimitives_DBGHpdCg.mjs";
import { a as ConfirmDialog } from "./ConfirmDialog_De0oqLuK.mjs";
import { F as FormDialog } from "./FormDialog_CIEtWQy5.mjs";
import { u as useAdminPermissions } from "./useAdminPermissions_DIK-OUdi.mjs";
import { K as Key, P as Plus } from "./settings_CVqNjo3K.mjs";
import { S as Save } from "./save_iUHUJVl7.mjs";
import { F as FileText } from "./chat-workspace_D0_ebyMN.mjs";
import { P as Pen } from "./pen_LkYkZcfW.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const MailSettings = () => {
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const { toast } = useToast();
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canViewMail = hasPermission2(["settings.mail.view", "settings.mail", "role.manage"]);
  const canManageMail = hasPermission2(["settings.mail", "role.manage"]);
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("config");
  const [form, setForm] = reactExports.useState({
    provider_type: "resend",
    resend_api_key: "",
    sender_email: "",
    smtp_config: { host: "", port: 465, user: "", pass: "" }
  });
  const [templates, setTemplates] = reactExports.useState([]);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = reactExports.useState(false);
  const [editingTemplate, setEditingTemplate] = reactExports.useState(null);
  const [templateToDelete, setTemplateToDelete] = reactExports.useState(null);
  const [templateForm, setTemplateForm] = reactExports.useState({
    slug: "",
    name: "",
    subject: "",
    content: "",
    vars: ""
  });
  const fetchData = async () => {
    setLoading(true);
    try {
      const [configRes, templatesRes] = await Promise.all([
        fetch("/api/v1/settings/mail_config"),
        fetch("/api/v1/settings/mail_templates")
      ]);
      const configData = await configRes.json();
      const templatesData = await templatesRes.json();
      if (configData.success) {
        const val = configData.data;
        setForm({
          provider_type: val.provider_type || "resend",
          resend_api_key: val.resend_api_key || "",
          sender_email: val.sender_email || "",
          smtp_config: {
            host: val.smtp_config?.host || "",
            port: val.smtp_config?.port || 465,
            user: val.smtp_config?.user || "",
            pass: val.smtp_config?.pass || ""
          }
        });
      }
      if (templatesData.success) setTemplates(templatesData.data);
    } catch (e) {
      toast({ variant: "destructive", title: "加载失败" });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchData();
  }, []);
  const handleSaveConfig = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/v1/settings/mail_config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setShowSuccess(true);
      } else {
        throw new Error("保存失败");
      }
    } catch (e) {
      toast({ variant: "destructive", title: "保存失败", description: e.message });
    } finally {
      setSaving(false);
    }
  };
  const handleSaveTemplate = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/v1/settings/mail_templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...templateForm, id: editingTemplate?.id })
      });
      if (res.ok) {
        setIsTemplateModalOpen(false);
        fetchData();
        toast({ title: "模板已保存" });
      }
    } catch (e) {
      toast({ variant: "destructive", title: "保存失败" });
    } finally {
      setSaving(false);
    }
  };
  const handleDeleteTemplate = async () => {
    if (!templateToDelete) return;
    try {
      await fetch(`/api/v1/settings/mail_templates/${templateToDelete}`, { method: "DELETE" });
      fetchData();
      toast({ title: "模板已删除" });
    } catch (e) {
      toast({ variant: "destructive", title: "删除失败" });
    } finally {
      setTemplateToDelete(null);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-12 text-center text-slate-500", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "mx-auto animate-spin" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-5xl space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      AdminSettingsHeader,
      {
        title: "系统邮件服务",
        description: "配置全局邮件渠道与动态通知模板。",
        icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "text-blue-600", size: 24 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 144,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      AdminPillTabs,
      {
        value: activeTab,
        onChange: setActiveTab,
        items: [
          { value: "config", label: "服务渠道配置" },
          { value: "templates", label: "邮件内容模板" }
        ]
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 150,
        columnNumber: 7
      },
      void 0
    ),
    !loadingPermissions && canViewMail && !canManageMail ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看邮件服务配置，新增、编辑、删除和保存操作已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
      lineNumber: 160,
      columnNumber: 9
    }, void 0) : null,
    activeTab === "config" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: `border-slate-100 shadow-sm overflow-hidden ${!canManageMail ? "pointer-events-none opacity-70" : ""}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "border-b bg-slate-50/80 px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-base font-semibold", children: "服务商选择" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 169,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2 p-1 bg-slate-200/50 rounded-lg", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setForm({ ...form, provider_type: "resend" }),
              className: `px-4 py-1.5 text-sm rounded-md font-medium transition-all ${form.provider_type === "resend" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"}`,
              children: "Resend API"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 171,
              columnNumber: 19
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setForm({ ...form, provider_type: "smtp" }),
              className: `px-4 py-1.5 text-sm rounded-md font-medium transition-all ${form.provider_type === "smtp" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"}`,
              children: "自定义 SMTP"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 175,
              columnNumber: 19
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 168,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 167,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-6 flex items-start gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-sm text-blue-800", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-0.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Code, { size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 184,
            columnNumber: 41
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold mb-1", children: [
              "当前生效模式：",
              form.provider_type === "resend" ? "Resend API" : "自定义 SMTP"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 186,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "opacity-80", children: "系统将仅使用您下方选中的配置项进行发送。推荐在 Cloudflare Workers 环境中使用 Resend。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, void 0),
            form.provider_type === "resend" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: "https://resend.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline",
                children: [
                  "进入 Resend",
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpRight, { size: 12 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
                    lineNumber: 196,
                    columnNumber: 23
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
                lineNumber: 189,
                columnNumber: 21
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, void 0),
        form.provider_type === "resend" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "API Key", icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 205,
            columnNumber: 63
          }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: form.resend_api_key, onChange: (e) => setForm({ ...form, resend_api_key: e.target.value }), placeholder: "re_xxxxxxxxxxxxxxxxx", className: "font-mono bg-slate-50/50" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 206,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 205,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "发件人邮箱", icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 208,
            columnNumber: 61
          }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: form.sender_email, onChange: (e) => setForm({ ...form, sender_email: e.target.value }), placeholder: "no-reply@yourdomain.com", className: "bg-slate-50/50" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 209,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 208,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 204,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 203,
          columnNumber: 17
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "SMTP 主机 (Host)", icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Server, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 216,
            columnNumber: 70
          }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: form.smtp_config.host, onChange: (e) => setForm({ ...form, smtp_config: { ...form.smtp_config, host: e.target.value } }), placeholder: "smtp.example.com" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 217,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 216,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "端口 (Port)", icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Hash, { size: 14 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 219,
            columnNumber: 65
          }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { type: "number", value: form.smtp_config.port, onChange: (e) => setForm({ ...form, smtp_config: { ...form.smtp_config, port: parseInt(e.target.value) || 465 } }), placeholder: "465" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 220,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 219,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "认证账号", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: form.smtp_config.user, onChange: (e) => setForm({ ...form, smtp_config: { ...form.smtp_config, user: e.target.value } }), placeholder: "no-reply@example.com" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 223,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 222,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "认证密码", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { type: "password", value: form.smtp_config.pass, onChange: (e) => setForm({ ...form, smtp_config: { ...form.smtp_config, pass: e.target.value } }), placeholder: "********" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 226,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 225,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 215,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-10 flex justify-end border-t pt-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: handleSaveConfig, loading: saving, disabled: !canManageMail, className: "bg-blue-600 text-white px-8 h-11 rounded-xl", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { className: "mr-2", size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 234,
            columnNumber: 19
          }, void 0),
          " 保存渠道配置"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 233,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 232,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
      lineNumber: 166,
      columnNumber: 11
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `space-y-4 ${!canManageMail ? "pointer-events-none opacity-70" : ""}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center mb-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-lg font-bold text-slate-800", children: "邮件业务模板" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => {
          setEditingTemplate(null);
          setTemplateForm({ slug: "", name: "", subject: "", content: "", vars: "" });
          setIsTemplateModalOpen(true);
        }, disabled: !canManageMail, className: "bg-slate-900 text-white rounded-xl h-10", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16, className: "mr-2" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, void 0),
          " 新增模板"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 241,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: templates.map((tpl) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-200 hover:border-blue-300 transition-colors group shadow-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-start mb-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileText, { size: 20 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 255,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 254,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-bold text-slate-900", children: tpl.name }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
                lineNumber: 258,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "text-[12px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase", children: tpl.slug }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
                lineNumber: 259,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 257,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 253,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => {
              setEditingTemplate(tpl);
              setTemplateForm({ slug: tpl.slug, name: tpl.name, subject: tpl.subject, content: tpl.content, vars: tpl.vars || "" });
              setIsTemplateModalOpen(true);
            }, className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { size: 14 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 263,
              columnNumber: 277
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 263,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => setTemplateToDelete(tpl.id), className: "h-8 w-8 p-0 text-rose-500 hover:bg-rose-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 264,
              columnNumber: 158
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 264,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 262,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 252,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-600 line-clamp-2 bg-slate-50 p-2 rounded-lg border border-slate-100 italic", children: [
          "主题：",
          tpl.subject
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
          lineNumber: 267,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 251,
        columnNumber: 17
      }, void 0) }, tpl.id, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 250,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
      lineNumber: 240,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: showSuccess,
        onOpenChange: setShowSuccess,
        title: "保存成功",
        description: "邮件服务配置已更新，即刻生效。",
        onConfirm: () => setShowSuccess(false),
        confirmText: "知道了",
        hideCancel: true,
        dialogClassName: "max-w-sm",
        confirmClassName: "w-full bg-slate-900 h-11 rounded-xl"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 278,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: isTemplateModalOpen,
        onOpenChange: (open) => {
          if (!canManageMail && open) return;
          setIsTemplateModalOpen(open);
        },
        title: editingTemplate ? "编辑邮件模板" : "新建邮件模板",
        description: '使用 HTML 编写邮件内容，支持使用双大括号嵌入变量，如 `{"{{code}}"}`。',
        contentClassName: "max-w-3xl max-h-[90vh] overflow-y-auto",
        bodyClassName: "space-y-6 py-4",
        footer: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          AdminDialogActions,
          {
            onCancel: () => setIsTemplateModalOpen(false),
            onConfirm: handleSaveTemplate,
            confirmText: "保存模板",
            confirmLoading: saving,
            confirmDisabled: !canManageMail,
            className: "sticky bottom-0 bg-white",
            confirmClassName: "h-10 rounded-xl"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 302,
            columnNumber: 11
          },
          void 0
        ),
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "模板标识 (Slug)", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: templateForm.slug, onChange: (e) => setTemplateForm({ ...templateForm, slug: e.target.value }), placeholder: "例如：register_code", disabled: !!editingTemplate }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 315,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 314,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "模板名称", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: templateForm.name, onChange: (e) => setTemplateForm({ ...templateForm, name: e.target.value }), placeholder: "例如：注册验证码通知" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 318,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 317,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 313,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "邮件主题 (Subject)", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: templateForm.subject, onChange: (e) => setTemplateForm({ ...templateForm, subject: e.target.value }), placeholder: "输入邮件标题" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 322,
            columnNumber: 11
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 321,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "HTML 内容 (Content)", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "textarea",
            {
              className: "w-full min-h-[300px] p-4 font-mono text-xs bg-slate-900 text-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500",
              value: templateForm.content,
              onChange: (e) => setTemplateForm({ ...templateForm, content: e.target.value }),
              placeholder: "<html>...</html>"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
              lineNumber: 325,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 324,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "可用变量说明 (JSON Format)", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: templateForm.vars, onChange: (e) => setTemplateForm({ ...templateForm, vars: e.target.value }), placeholder: '{"code": "验证码"}' }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 333,
            columnNumber: 11
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
            lineNumber: 332,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 291,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: templateToDelete !== null,
        onOpenChange: (open) => {
          if (!open) setTemplateToDelete(null);
        },
        title: "确认删除模板？",
        description: "删除后该邮件模板将从系统中移除，且无法自动恢复。",
        confirmText: "确认删除",
        variant: "destructive",
        onConfirm: handleDeleteTemplate,
        onCancel: () => setTemplateToDelete(null)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
        lineNumber: 337,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MailSettings.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, void 0);
};
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Mail;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["settings.mail.view", "settings.mail", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "邮件服务" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-6"> <div class="flex items-center gap-2 text-sm text-slate-500 mb-2"> <a href="/admin" class="hover:text-blue-600">管理后台</a> <span>/</span> <span class="text-slate-800 font-medium">配置中心</span> <span>/</span> <span class="text-slate-800 font-medium">邮件服务</span> </div> </div> ${renderComponent($$result2, "MailSettings", MailSettings, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/MailSettings", "client:component-export": "MailSettings" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/settings/mail.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/settings/mail.astro";
const $$url = "/admin/settings/mail";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Mail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
