globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, a as renderComponent } from "./worker-entry_DhHjvv2h.mjs";
import { m as Languages, n as Download, $ as $$DashboardLayout } from "./DashboardLayout_COgjawil.mjs";
import { j as jsxDevRuntimeExports, B as Button } from "./Button_BI0VYNyM.mjs";
import { C as Card, b as CardHeader, a as CardContent } from "./Card_Bcuf39jp.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./Tabs_CV9MXHxO.mjs";
import { u as useToast } from "./Input_B7IXRXvt.mjs";
import { S as Skeleton } from "./Skeleton_D0CXjfgA.mjs";
import { L as Label } from "./Label_BkYsVD_P.mjs";
import { F as FormDialog } from "./FormDialog_CIEtWQy5.mjs";
import { A as AdvancedJSONEditor } from "./AdvancedJSONEditor_DpFr-Hwh.mjs";
import { u as useAdminPermissions } from "./useAdminPermissions_DIK-OUdi.mjs";
import { S as Save } from "./save_iUHUJVl7.mjs";
import { S as Sparkles } from "./agent-session-utils_2wsYcmbS.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const DEFAULT_MEMBER_TRANSLATIONS = {
  "zh-CN": {
    app: {
      loading: "正在接入身份验证系统..."
    },
    plugin: {
      loading: "正在安全加载插件控制台..."
    },
    login: {
      title: "欢迎回来",
      description: "请输入您的凭据以访问会员中心",
      email: "邮箱账号",
      password: "登录密码",
      forgot: "忘记密码？",
      submit: "立即登录",
      loading: "身份校验中...",
      captcha: "请完成人机验证",
      placeholders: {
        email: "name@company.com",
        password: "••••••••"
      },
      footer: {
        prefix: "还没有账号？",
        label: "立即加入会员"
      }
    },
    register: {
      title: "加入我们",
      description: "仅需几秒钟，开启您的会员之旅",
      email: "电子邮箱",
      code: "验证码",
      password: "设置密码",
      confirmPassword: "确认密码",
      submit: "立即注册",
      loading: "正在注册...",
      sendCode: "发送验证码",
      sending: "发送中...",
      placeholders: {
        email: "name@company.com",
        code: "6位验证码",
        password: "••••••••",
        confirmPassword: "••••••••"
      },
      footer: {
        prefix: "已有账号？",
        label: "返回登录"
      },
      errors: {
        emailRequired: "请先输入邮箱",
        passwordMismatch: "两次输入的密码不一致",
        codeRequired: "请输入验证码"
      },
      success: {
        register: "注册成功，请登录"
      }
    },
    forgotPassword: {
      title: "找回密码",
      description: "我们将向您的注册邮箱发送验证码以验证您的身份",
      email: "注册邮箱",
      code: "邮箱验证码",
      password: "设置新密码",
      confirmPassword: "确认新密码",
      submit: "确认重置密码",
      loading: "正在重置...",
      sendCode: "发送验证码",
      sending: "发送中...",
      placeholders: {
        email: "name@company.com",
        code: "6位验证码",
        password: "••••••••",
        confirmPassword: "••••••••"
      },
      footer: {
        prefix: "记起密码了？",
        label: "返回登录"
      },
      errors: {
        emailRequired: "请先输入邮箱",
        passwordMismatch: "两次输入的密码不一致",
        codeRequired: "请输入验证码"
      },
      success: {
        reset: "密码重置成功，请使用新密码登录",
        codeSent: "验证码发送成功，请查收邮件"
      }
    },
    sidebar: {
      dashboard: "控制台概览",
      profile: "个人资料",
      security: "安全设置",
      logout: "安全退出",
      header: "会员中心"
    },
    dashboard: {
      greeting: "，欢迎回来！",
      memberLevel: "会员等级",
      memberLevelText: "尊贵会员",
      stats: {
        points: "活跃积分",
        balance: "账户余额",
        status: "认证状态",
        statusActive: "已认证",
        statusInactive: "待激活"
      },
      profile: {
        title: "基本档案",
        email: "电子邮箱",
        phone: "联系电话",
        phoneNotSet: "未绑定",
        gender: "性别",
        male: "男",
        female: "女",
        secret: "保密",
        birthday: "生日",
        birthdayNotSet: "未设置"
      },
      bio: {
        title: "个人简介",
        placeholder: "该用户很懒，还没有写下任何介绍..."
      }
    },
    profile: {
      title: "个人基本资料",
      description: "管理您的公开信息与账户设置",
      accountId: "账号 ID",
      memberStatus: "已激活会员",
      fields: {
        email: "登录邮箱",
        nickname: "昵称 / 姓名",
        nicknamePlaceholder: "尚未设置",
        gender: "性别",
        phone: "联系电话",
        phonePlaceholder: "尚未绑定",
        birthday: "生日",
        bio: "个人简介",
        bioPlaceholder: "介绍一下你自己..."
      },
      genders: {
        secret: "保密",
        male: "男",
        female: "女"
      },
      button: {
        update: "更新资料",
        saving: "正在保存..."
      },
      success: "资料更新成功！"
    },
    security: {
      title: "账号安全",
      description: "定期更换密码以保障您的账户安全",
      changePassword: "修改登录密码",
      fields: {
        oldPassword: "当前旧密码",
        newPassword: "设置新密码",
        confirmPassword: "确认新密码",
        forgot: "忘记密码？"
      },
      button: {
        submit: "确认修改密码",
        loading: "正在保存..."
      },
      errors: {
        passwordMismatch: "新密码两次输入不一致"
      },
      success: {
        password: "密码修改成功！"
      }
    }
  },
  "en-US": {
    app: {
      loading: "Connecting to authentication system..."
    },
    plugin: {
      loading: "Loading plugin console securely..."
    },
    login: {
      title: "Welcome back",
      description: "Enter your credentials to access the member center",
      email: "Email",
      password: "Password",
      forgot: "Forgot password?",
      submit: "Sign in",
      loading: "Authenticating...",
      captcha: "Please complete the captcha",
      placeholders: {
        email: "name@company.com",
        password: "••••••••"
      },
      footer: {
        prefix: "Don't have an account?",
        label: "Join now"
      }
    },
    register: {
      title: "Join us",
      description: "Start your membership journey in just a few seconds",
      email: "Email",
      code: "Verification code",
      password: "Set password",
      confirmPassword: "Confirm password",
      submit: "Sign up",
      loading: "Registering...",
      sendCode: "Send code",
      sending: "Sending...",
      placeholders: {
        email: "name@company.com",
        code: "6-digit code",
        password: "••••••••",
        confirmPassword: "••••••••"
      },
      footer: {
        prefix: "Already have an account?",
        label: "Back to login"
      },
      errors: {
        emailRequired: "Please enter your email first",
        passwordMismatch: "Passwords do not match",
        codeRequired: "Please enter verification code"
      },
      success: {
        register: "Registration successful, please login"
      }
    },
    forgotPassword: {
      title: "Reset password",
      description: "We will send a verification code to your registered email",
      email: "Registered email",
      code: "Email verification code",
      password: "Set new password",
      confirmPassword: "Confirm new password",
      submit: "Reset password",
      loading: "Resetting...",
      sendCode: "Send code",
      sending: "Sending...",
      placeholders: {
        email: "name@company.com",
        code: "6-digit code",
        password: "••••••••",
        confirmPassword: "••••••••"
      },
      footer: {
        prefix: "Remember your password?",
        label: "Back to login"
      },
      errors: {
        emailRequired: "Please enter your email first",
        passwordMismatch: "Passwords do not match",
        codeRequired: "Please enter verification code"
      },
      success: {
        reset: "Password reset successful, please login with new password",
        codeSent: "Verification code sent, please check your email"
      }
    },
    sidebar: {
      dashboard: "Dashboard overview",
      profile: "Profile",
      security: "Security settings",
      logout: "Logout",
      header: "Member center"
    },
    dashboard: {
      greeting: ", welcome back!",
      memberLevel: "Member level",
      memberLevelText: "Premium member",
      stats: {
        points: "Active points",
        balance: "Account balance",
        status: "Verification status",
        statusActive: "Verified",
        statusInactive: "Pending activation"
      },
      profile: {
        title: "Basic profile",
        email: "Email",
        phone: "Phone",
        phoneNotSet: "Not bound",
        gender: "Gender",
        male: "Male",
        female: "Female",
        secret: "Secret",
        birthday: "Birthday",
        birthdayNotSet: "Not set"
      },
      bio: {
        title: "About me",
        placeholder: "This user is too lazy to write an introduction..."
      }
    },
    profile: {
      title: "Personal profile",
      description: "Manage your public information and account settings",
      accountId: "Account ID",
      memberStatus: "Active member",
      fields: {
        email: "Login email",
        nickname: "Nickname / Name",
        nicknamePlaceholder: "Not set yet",
        gender: "Gender",
        phone: "Phone number",
        phonePlaceholder: "Not bound yet",
        birthday: "Birthday",
        bio: "About me",
        bioPlaceholder: "Introduce yourself..."
      },
      genders: {
        secret: "Secret",
        male: "Male",
        female: "Female"
      },
      button: {
        update: "Update profile",
        saving: "Saving..."
      },
      success: "Profile updated successfully!"
    },
    security: {
      title: "Account security",
      description: "Change password regularly to protect your account",
      changePassword: "Change login password",
      fields: {
        oldPassword: "Current password",
        newPassword: "New password",
        confirmPassword: "Confirm new password",
        forgot: "Forgot password?"
      },
      button: {
        submit: "Confirm change password",
        loading: "Saving..."
      },
      errors: {
        passwordMismatch: "New passwords do not match"
      },
      success: {
        password: "Password changed successfully!"
      }
    }
  }
};
function cloneMemberTranslations(value) {
  return JSON.parse(JSON.stringify(value ?? {}));
}
cloneMemberTranslations(DEFAULT_MEMBER_TRANSLATIONS);
function deepMergeTranslations(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = deepMergeTranslations(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
const normalizeLocaleTranslations = (languages, stored) => {
  const next = {};
  const orderedLanguages = Array.isArray(languages) ? languages : [];
  orderedLanguages.forEach((language) => {
    const locale = language?.code;
    if (!locale) {
      return;
    }
    const defaultLocaleData = cloneMemberTranslations(DEFAULT_MEMBER_TRANSLATIONS[locale] || {});
    const storedLocaleData = stored?.[locale] || {};
    next[locale] = deepMergeTranslations(defaultLocaleData, storedLocaleData);
  });
  return next;
};
const MemberTranslationManagement = () => {
  const { hasPermission: hasPermission2 } = useAdminPermissions();
  const canManage = hasPermission2(["settings.general", "role.manage"]);
  const { toast } = useToast();
  const [languages, setLanguages] = reactExports.useState([]);
  const [translations, setTranslations] = reactExports.useState({});
  const [activeLocale, setActiveLocale] = reactExports.useState("");
  const [sourceLocale, setSourceLocale] = reactExports.useState("");
  const [isTranslateOpen, setIsTranslateOpen] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [translating, setTranslating] = reactExports.useState(false);
  const availableSourceLocales = reactExports.useMemo(
    () => languages.map((item) => item.code).filter((code) => code && code !== activeLocale),
    [languages, activeLocale]
  );
  reactExports.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [languagesRes, translationsRes] = await Promise.all([
          fetch("/api/v1/settings/languages"),
          fetch("/api/v1/settings/translations")
        ]);
        const languagesJson = await languagesRes.json();
        const translationsJson = await translationsRes.json();
        const systemLanguages = Array.isArray(languagesJson?.data) ? languagesJson.data : [];
        const activeLanguages = systemLanguages.filter((item) => item?.status !== "inactive");
        const normalized = normalizeLocaleTranslations(activeLanguages, translationsJson?.data || null);
        const defaultLocale = activeLanguages.find((item) => item?.isDefault)?.code || activeLanguages[0]?.code || "zh-CN";
        setLanguages(activeLanguages);
        setTranslations(normalized);
        setActiveLocale(defaultLocale);
        const initialSourceLocale = activeLanguages.find((item) => item?.code !== defaultLocale)?.code || "";
        setSourceLocale(initialSourceLocale);
      } catch (err) {
        toast({
          variant: "destructive",
          title: "加载失败",
          description: err?.message || "无法获取系统语种或翻译配置"
        });
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, [toast]);
  reactExports.useEffect(() => {
    if (!availableSourceLocales.length) {
      setSourceLocale("");
      return;
    }
    if (!availableSourceLocales.includes(sourceLocale)) {
      setSourceLocale(availableSourceLocales[0]);
    }
  }, [availableSourceLocales, sourceLocale]);
  const handleSave = async () => {
    try {
      setSaving(true);
      const res = await fetch("/api/v1/settings/translations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(translations)
      });
      if (!res.ok) {
        const result = await res.json().catch(() => ({}));
        throw new Error(result?.message || "保存失败");
      }
      toast({ title: "保存成功", description: "翻译配置已写入系统设置" });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "保存失败",
        description: err?.message || "翻译配置保存失败"
      });
    } finally {
      setSaving(false);
    }
  };
  const openTranslateDialog = () => {
    if (!activeLocale) {
      toast({
        variant: "destructive",
        title: "无法翻译",
        description: "请先选择当前目标语种"
      });
      return;
    }
    if (!availableSourceLocales.length) {
      toast({
        variant: "destructive",
        title: "无法翻译",
        description: "当前没有可用的源语种"
      });
      return;
    }
    setIsTranslateOpen(true);
  };
  const handleStartTranslate = async () => {
    if (!activeLocale || !sourceLocale || sourceLocale === activeLocale) {
      toast({
        variant: "destructive",
        title: "无法翻译",
        description: "请先选择一个不同的源语种"
      });
      return;
    }
    const sourceData = translations[sourceLocale] || {};
    if (!sourceData || typeof sourceData !== "object" || !Object.keys(sourceData).length) {
      toast({
        variant: "destructive",
        title: "暂无可翻译内容",
        description: "源语种当前没有可翻译的 JSON 内容"
      });
      return;
    }
    try {
      setTranslating(true);
      const res = await fetch("/api/v1/settings/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: translations[sourceLocale] || {},
          sourceLang: sourceLocale,
          targetLang: activeLocale
        })
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result?.success || !result?.data || typeof result.data !== "object") {
        const errorMessage = result?.message || "AI 翻译失败";
        if (errorMessage.includes("AI 配置未初始化")) {
          throw new Error("当前系统尚未完成 AI 配置，无法执行智能翻译。请先前往 AI 设置页面完成模型与提供商配置后再试。");
        }
        throw new Error(errorMessage);
      }
      setTranslations((prev) => ({
        ...prev,
        [activeLocale]: deepMergeTranslations(prev[activeLocale] || {}, result.data)
      }));
      setIsTranslateOpen(false);
      toast({
        title: "翻译完成",
        description: `${sourceLocale} 已同步翻译到 ${activeLocale}`
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "翻译失败",
        description: err?.message || "AI 翻译失败"
      });
    } finally {
      setTranslating(false);
    }
  };
  const handleExport = () => {
    if (!activeLocale) {
      return;
    }
    const content = JSON.stringify(translations[activeLocale] || {}, null, 2);
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `member-translations.${activeLocale}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Languages, { className: "text-blue-600", size: 24 }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, void 0),
        "翻译字段管理"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: "outline",
            onClick: handleExport,
            disabled: loading || !activeLocale,
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { size: 16, className: "mr-2" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
                lineNumber: 247,
                columnNumber: 13
              }, void 0),
              "导出当前语种"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
            lineNumber: 242,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: handleSave,
            disabled: !canManage || loading || saving,
            className: "bg-blue-600 hover:bg-blue-700 text-white",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { size: 16, className: "mr-2" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
                lineNumber: 255,
                columnNumber: 13
              }, void 0),
              saving ? "保存中..." : "保存全部"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
            lineNumber: 250,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, void 0),
    !loading && !canManage ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看翻译 JSON，编辑与保存已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
      lineNumber: 262,
      columnNumber: 9
    }, void 0) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-slate-200/60 shadow-sm overflow-hidden bg-white/50", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "border-b border-slate-100 bg-slate-50/50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          variant: "outline",
          onClick: openTranslateDialog,
          disabled: !canManage || loading || translating || !activeLocale || !availableSourceLocales.length,
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 14, className: "mr-2" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
              lineNumber: 277,
              columnNumber: 17
            }, void 0),
            "AI 翻译"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 272,
          columnNumber: 15
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 271,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 269,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-0", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-4", children: Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-5 w-40" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 288,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Skeleton, { className: "h-32 w-full" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 289,
          columnNumber: 19
        }, void 0)
      ] }, index, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 287,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, void 0) : languages.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-10 text-center text-sm text-slate-500", children: "系统中尚未配置可用语种，请先前往 `/admin/languages` 添加语种。" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 294,
        columnNumber: 13
      }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tabs, { value: activeLocale, onValueChange: setActiveLocale, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-b border-slate-100", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsList, { className: "border-0 bg-transparent p-0 h-auto flex flex-wrap", children: languages.map((language) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          TabsTrigger,
          {
            value: language.code,
            className: "border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-4 py-3 text-sm",
            children: language.name || language.code
          },
          language.code,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
            lineNumber: 302,
            columnNumber: 21
          },
          void 0
        )) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 300,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 299,
          columnNumber: 15
        }, void 0),
        languages.map((language) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContent, { value: language.code, className: "m-0 p-6 space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs text-slate-600", children: [
            "当前语种：",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { children: language.code }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
              lineNumber: 316,
              columnNumber: 26
            }, void 0),
            "。源码模式可直接粘贴外部 JSON，结构推荐为",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("code", { className: "mx-1", children: '{"login":{"submit":"..."}}' }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
              lineNumber: 317,
              columnNumber: 21
            }, void 0),
            "这种多层级对象。"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
            lineNumber: 315,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            AdvancedJSONEditor,
            {
              value: translations[language.code] || {},
              onChange: (value) => {
                if (!canManage) {
                  return;
                }
                setTranslations((prev) => ({
                  ...prev,
                  [language.code]: value
                }));
              }
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
              lineNumber: 320,
              columnNumber: 19
            },
            void 0
          )
        ] }, language.code, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 314,
          columnNumber: 17
        }, void 0))
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 298,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 283,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
      lineNumber: 267,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: isTranslateOpen,
        onOpenChange: setIsTranslateOpen,
        title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Languages, { className: "text-blue-600", size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
            lineNumber: 344,
            columnNumber: 13
          }, void 0),
          " AI 智能翻译"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
          lineNumber: 343,
          columnNumber: 11
        }, void 0),
        layer: "nested",
        contentClassName: "max-w-md sm:rounded-3xl",
        bodyClassName: "py-4 space-y-4",
        cancelText: "取消",
        confirmText: "开始翻译",
        onCancel: () => setIsTranslateOpen(false),
        onConfirm: handleStartTranslate,
        confirmLoading: translating,
        confirmDisabled: translating || !sourceLocale || !activeLocale || sourceLocale === activeLocale,
        cancelClassName: "border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        confirmClassName: "px-6 hover:bg-blue-700",
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "源语种 (基础语种)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
              lineNumber: 360,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "select",
              {
                value: sourceLocale,
                onChange: (e) => setSourceLocale(e.target.value),
                className: "w-full h-10 rounded-xl border px-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white",
                disabled: translating || !availableSourceLocales.length,
                children: availableSourceLocales.map((locale) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: locale, children: languages.find((item) => item.code === locale)?.name || locale }, locale, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
                  lineNumber: 368,
                  columnNumber: 15
                }, void 0))
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
                lineNumber: 361,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
            lineNumber: 359,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600", children: [
            "当前目标语种：",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-slate-900", children: languages.find((item) => item.code === activeLocale)?.name || activeLocale }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
              lineNumber: 375,
              columnNumber: 18
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
            lineNumber: 374,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
        lineNumber: 339,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement.tsx",
    lineNumber: 232,
    columnNumber: 5
  }, void 0);
};
const $$TranslationFields = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TranslationFields;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["translations.view", "translations.manage", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "翻译字段管理" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-page-container mx-auto"> <main> ${renderComponent($$result2, "MemberTranslationManagement", MemberTranslationManagement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/MemberTranslationManagement", "client:component-export": "MemberTranslationManagement" })} </main> </div> ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/user-center/translation-fields.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/user-center/translation-fields.astro";
const $$url = "/admin/user-center/translation-fields";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TranslationFields,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
