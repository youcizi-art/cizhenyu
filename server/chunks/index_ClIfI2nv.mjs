globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxDevRuntimeExports, B as Button, T as Trash2, L as Loader2, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, D as DialogFooter } from "./Button_BI0VYNyM.mjs";
import { r as reactExports } from "./worker-entry_DhHjvv2h.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./Card_Bcuf39jp.mjs";
import { u as useToast, G as Globe, I as Input } from "./Input_B7IXRXvt.mjs";
import { L as Label } from "./Label_BkYsVD_P.mjs";
import { S as Switch } from "./Switch_CxxBFXdl.mjs";
import { u as useAdminPermissions } from "./useAdminPermissions_DIK-OUdi.mjs";
import { K as Key, P as Plus, S as Settings } from "./settings_CVqNjo3K.mjs";
import { F as Facebook, S as Save } from "./save_iUHUJVl7.mjs";
const SUPPORTED_PLATFORMS = [
  { id: "google", name: "Google", icon: Globe },
  { id: "facebook", name: "Facebook", icon: Facebook }
];
const OAuthLoginAdmin = () => {
  const { toast } = useToast();
  const { hasPermission, loading: loadingPermissions } = useAdminPermissions();
  const canViewOauth = hasPermission(["oauth.manage", "plugins.view", "plugins.manage", "role.manage"]);
  const canManageOauth = hasPermission(["oauth.manage", "plugins.manage", "role.manage"]);
  const [loading, setLoading] = reactExports.useState(false);
  const [savingPlatformId, setSavingPlatformId] = reactExports.useState(null);
  const [platforms, setPlatforms] = reactExports.useState([]);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = reactExports.useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = reactExports.useState(false);
  const [platformToDelete, setPlatformToDelete] = reactExports.useState(null);
  const [deleting, setDeleting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchConfig = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/v1/plugins/proxy/oauth-login/settings");
        const json = await res.json();
        if (json.success && json.data) {
          const savedSettings = typeof json.data === "string" ? JSON.parse(json.data) : json.data;
          if (Array.isArray(savedSettings)) {
            setPlatforms(savedSettings);
          }
        }
      } catch (err) {
        console.warn("获取配置失败，可能尚未初始化:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchConfig();
  }, []);
  const handleOpenModal = () => {
    if (!canManageOauth) return;
    setSelectedPlatforms([]);
    setIsModalOpen(true);
  };
  const handleAddConfirm = () => {
    if (!canManageOauth) return;
    const newPlatforms = [];
    selectedPlatforms.forEach((id) => {
      const platform = SUPPORTED_PLATFORMS.find((p) => p.id === id);
      if (platform && !platforms.some((p) => p.id === id)) {
        newPlatforms.push({
          id: platform.id,
          name: platform.name,
          isEnabled: true,
          clientId: "",
          clientSecret: ""
        });
      }
    });
    setPlatforms([...platforms, ...newPlatforms]);
    setIsModalOpen(false);
    toast({
      title: "添加成功",
      description: "已成功添加登录平台。请在卡片中录入 Client ID 与 Secret 并点击卡片底部的「保存配置」按钮完成持久化。"
    });
  };
  const handleDeleteCard = (id, name) => {
    if (!canManageOauth) return;
    setPlatformToDelete({ id, name });
    setIsDeleteModalOpen(true);
  };
  const executeDeleteCard = async () => {
    if (!canManageOauth) return;
    if (!platformToDelete) return;
    const { id, name } = platformToDelete;
    setDeleting(true);
    const updatedPlatforms = platforms.filter((p) => p.id !== id);
    setPlatforms(updatedPlatforms);
    try {
      const res = await fetch("/api/v1/plugins/proxy/oauth-login/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: "plugin:oauth-login:settings",
          value: JSON.stringify(updatedPlatforms)
        })
      });
      const json = await res.json();
      if (json.success) {
        toast({
          title: "删除成功",
          description: `已永久移除 [${name}] 平台的登录配置。`,
          variant: "destructive"
        });
      } else {
        throw new Error(json.error || "删除失败");
      }
    } catch (err) {
      setPlatforms(platforms);
      toast({
        title: "删除失败",
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setDeleting(false);
      setIsDeleteModalOpen(false);
      setPlatformToDelete(null);
    }
  };
  const updatePlatform = (id, field, value) => {
    if (!canManageOauth) return;
    setPlatforms(platforms.map(
      (p) => p.id === id ? { ...p, [field]: value } : p
    ));
  };
  const handleSaveConfig = async (platformId) => {
    if (!canManageOauth) return;
    setSavingPlatformId(platformId);
    try {
      const configData = platforms;
      const res = await fetch("/api/v1/plugins/proxy/oauth-login/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: "plugin:oauth-login:settings",
          value: JSON.stringify(configData)
        })
      });
      const json = await res.json();
      if (json.success) {
        toast({
          title: "保存成功",
          description: `平台 [${platforms.find((p) => p.id === platformId)?.name}] 的配置已成功保存。`
        });
      } else {
        toast({
          title: "保存失败",
          description: json.error || "未知错误",
          variant: "destructive"
        });
      }
    } catch (err) {
      toast({
        title: "保存异常",
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setSavingPlatformId(null);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6 animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { className: "w-5 h-5 text-blue-600" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 211,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl font-black tracking-tight text-slate-900", children: "第三方登录配置" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500 mt-0.5", children: "管理和配置第三方平台的一键登录功能，支持动态开启与密钥管理。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 215,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 208,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          onClick: handleOpenModal,
          variant: "outline",
          disabled: !canManageOauth,
          className: "border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl px-5 h-11 font-bold text-xs",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16, className: "mr-2 text-blue-600" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 226,
              columnNumber: 13
            }, void 0),
            "添加登录平台"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 220,
          columnNumber: 11
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, void 0),
    !loadingPermissions && canViewOauth && !canManageOauth ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看第三方登录配置，平台增删、状态切换和密钥保存已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 233,
      columnNumber: 9
    }, void 0) : null,
    loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 md:grid-cols-2", children: [1, 2].map((n) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-slate-150 rounded-2xl p-6 space-y-4 animate-pulse", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-6 bg-slate-100 rounded-lg w-1/3" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 243,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-10 bg-slate-50 rounded-lg w-full" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 244,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-10 bg-slate-50 rounded-lg w-full" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 245,
        columnNumber: 15
      }, void 0)
    ] }, n, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 242,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 240,
      columnNumber: 9
    }, void 0) : platforms.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl py-16 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { className: "w-10 h-10 text-slate-300 mb-3" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-400 text-sm font-medium", children: "暂无配置的平台，点击右上角“添加登录平台”开始配置。" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 252,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 250,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 md:grid-cols-2", children: platforms.map((platform) => {
      const IconComponent = SUPPORTED_PLATFORMS.find((p) => p.id === platform.id)?.icon || Globe;
      const isSaving = savingPlatformId === platform.id;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-white", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "flex flex-row items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(IconComponent, { className: "w-4 h-4 text-slate-600" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 265,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 264,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-lg font-bold text-slate-800", children: platform.name }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 267,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 263,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-500 font-medium", children: platform.isEnabled ? "已开启" : "已关闭" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 271,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Switch,
                {
                  checked: platform.isEnabled,
                  disabled: !canManageOauth,
                  onCheckedChange: async (checked) => {
                    if (!canManageOauth) return;
                    const updatedPlatforms = platforms.map(
                      (p) => p.id === platform.id ? { ...p, isEnabled: checked } : p
                    );
                    setPlatforms(updatedPlatforms);
                    try {
                      const res = await fetch("/api/v1/plugins/proxy/oauth-login/settings", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          key: "plugin:oauth-login:settings",
                          value: JSON.stringify(updatedPlatforms)
                        })
                      });
                      const json = await res.json();
                      if (json.success) {
                        toast({
                          title: checked ? "平台已开启" : "平台已关闭",
                          description: `[${platform.name}] 的开启状态已成功同步保存。`
                        });
                      } else {
                        throw new Error(json.error || "保存失败");
                      }
                    } catch (err) {
                      setPlatforms(platforms);
                      toast({
                        title: "状态同步失败",
                        description: err.message,
                        variant: "destructive"
                      });
                    }
                  }
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                  lineNumber: 274,
                  columnNumber: 23
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 270,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => handleDeleteCard(platform.id, platform.name),
                disabled: !canManageOauth,
                className: "h-8 w-8 p-0 border-slate-200 text-rose-500 hover:bg-rose-50 hover:border-rose-100",
                title: "移除平台",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                  lineNumber: 322,
                  columnNumber: 23
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 314,
                columnNumber: 21
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 269,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 262,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold text-slate-700", children: "Client ID (账户ID)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 328,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: `请输入 ${platform.name} 的 Client ID`,
                value: platform.clientId,
                onChange: (e) => updatePlatform(platform.id, "clientId", e.target.value),
                disabled: !canManageOauth,
                className: "h-10 rounded-xl border-slate-200 text-sm focus-visible:ring-blue-500"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 329,
                columnNumber: 21
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 327,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold text-slate-700", children: "Client Secret (密钥Key)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 338,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                type: "password",
                placeholder: `请输入 ${platform.name} 的 Client Secret`,
                value: platform.clientSecret,
                onChange: (e) => updatePlatform(platform.id, "clientSecret", e.target.value),
                disabled: !canManageOauth,
                className: "h-10 rounded-xl border-slate-200 text-sm focus-visible:ring-blue-500"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 339,
                columnNumber: 21
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 337,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              onClick: () => handleSaveConfig(platform.id),
              disabled: isSaving || !canManageOauth,
              className: "w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-10 font-bold text-xs mt-2",
              children: [
                isSaving ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 16, className: "mr-2 animate-spin" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                  lineNumber: 356,
                  columnNumber: 23
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { size: 16, className: "mr-2" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                  lineNumber: 358,
                  columnNumber: 23
                }, void 0),
                "保存配置"
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
              lineNumber: 350,
              columnNumber: 19
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 326,
          columnNumber: 17
        }, void 0)
      ] }, platform.id, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 261,
        columnNumber: 15
      }, void 0);
    }) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isModalOpen, onOpenChange: (open) => {
      if (open && !canManageOauth) return;
      setIsModalOpen(open);
    }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "sm:max-w-md rounded-2xl", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-bold text-slate-900", children: "添加登录平台" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 376,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-sm text-slate-500", children: "请选择您想要支持的第三方一键登录平台。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 377,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 375,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-3 py-4", children: SUPPORTED_PLATFORMS.map((platform) => {
        const isAdded = platforms.some((p) => p.id === platform.id);
        const isSelected = selectedPlatforms.includes(platform.id);
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            onClick: () => {
              if (!canManageOauth) return;
              if (isAdded) return;
              setSelectedPlatforms(
                (prev) => isSelected ? prev.filter((id) => id !== platform.id) : [...prev, platform.id]
              );
            },
            className: `flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${isAdded ? "bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed" : isSelected ? "border-blue-500 bg-blue-50/50" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`,
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(platform.icon, { className: `w-5 h-5 ${isSelected ? "text-blue-600" : "text-slate-600"}` }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                  lineNumber: 404,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `font-bold text-sm ${isSelected ? "text-blue-700" : "text-slate-800"}`, children: platform.name }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                  lineNumber: 405,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 403,
                columnNumber: 19
              }, void 0),
              isAdded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-400 font-medium", children: "已添加" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 410,
                columnNumber: 21
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-blue-500 bg-blue-600 text-white" : "border-slate-300"}`, children: isSelected && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-1.5 h-1.5 bg-white rounded-full" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 414,
                columnNumber: 38
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
                lineNumber: 412,
                columnNumber: 21
              }, void 0)
            ]
          },
          platform.id,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 387,
            columnNumber: 17
          },
          void 0
        );
      }) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 381,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: "outline",
            onClick: () => setIsModalOpen(false),
            className: "border-slate-200 text-slate-700 rounded-xl",
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 422,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: handleAddConfirm,
            disabled: !canManageOauth || selectedPlatforms.length === 0,
            className: "bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5",
            children: "确认添加"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 429,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 421,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 374,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 370,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isDeleteModalOpen, onOpenChange: (open) => {
      if (open && !canManageOauth) return;
      setIsDeleteModalOpen(open);
    }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "sm:max-w-md rounded-2xl", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-bold text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-6 bg-rose-500 rounded-full inline-block" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 448,
            columnNumber: 15
          }, void 0),
          "确认删除登录配置"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 447,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-sm text-slate-500 mt-2", children: [
          "您确定要永久删除平台 ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-slate-900", children: [
            "[",
            platformToDelete?.name,
            "]"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 452,
            columnNumber: 26
          }, void 0),
          " 的配置吗？此操作将立即持久化删除，且不可逆！"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
          lineNumber: 451,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 446,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "flex gap-2 mt-4 justify-end", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: "outline",
            onClick: () => setIsDeleteModalOpen(false),
            className: "border-slate-200 text-slate-700 rounded-xl",
            disabled: deleting,
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 456,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: executeDeleteCard,
            className: "bg-rose-600 hover:bg-rose-700 text-white rounded-xl px-5",
            disabled: deleting,
            children: deleting ? "正在删除..." : "确认永久删除"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
            lineNumber: 464,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 445,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
      lineNumber: 441,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/oauth-login/admin/index.tsx",
    lineNumber: 205,
    columnNumber: 5
  }, void 0);
};
export {
  OAuthLoginAdmin,
  OAuthLoginAdmin as default
};
