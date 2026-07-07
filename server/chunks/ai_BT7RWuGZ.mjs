globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, R as React, a as renderComponent } from "./worker-entry_DwrWQjkq.mjs";
import { W as Wand2, r as Bold, s as Italic, C as Code, j as Link, t as Table, u as useDigitalEmployees, v as Cpu, h as Settings2, w as Code2, $ as $$DashboardLayout } from "./DashboardLayout_Cf3rFJx6.mjs";
import { u as useToast, j as jsxDevRuntimeExports, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, B as Button, I as Input, U as UI_LAYER, D as DialogFooter, S as Settings, P as Plus, h as useAdminPermissions, T as Trash2, K as Key, L as Loader2, G as Globe } from "./useAdminPermissions_BNA5PeGD.mjs";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./Card_BAe1fqp7.mjs";
import { S as Switch } from "./Switch_CGCSYOwZ.mjs";
import { L as Label } from "./Label_DDxL_qjz.mjs";
import { a as AdminPillTabs, b as AdminSettingsField, c as AdminDialogActions } from "./AdminSettingsPrimitives_DFn8uRyW.mjs";
import { T as Table$1, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./Table_TAa6-Uik.mjs";
import { B as Bot, S as Sparkles, A as AlertCircle, e as Search, b as Check, a as ChevronRight, R as RefreshCw, F as FileText, C as ChevronDown, v as MessageSquare, x as ChatMessageItem, p as EyeOff, E as Eye, y as Minimize2, z as Maximize2, D as RichContentRenderer, G as Paperclip, H as Square, i as Send, f as Shield, J as SessionHistory, d as ConfirmDialog, M as MediaPicker, P as Pen, q as CheckCircle2, I as Info } from "./agent-session-utils_Ct7fJQ5O.mjs";
import { S as Save } from "./save_Dz03pA3C.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const EMOJI_POOL = [
  "🤖",
  "✍️",
  "📊",
  "🌍",
  "🎨",
  "🎤",
  "💼",
  "💻",
  "📈",
  "🚀",
  "💡",
  "🛡️",
  "🔍",
  "📝",
  "🗣️",
  "🎓",
  "🧩",
  "🎯",
  "⚖️",
  "🛠️",
  "📞",
  "📅",
  "✉️",
  "📢"
];
const EmployeeModal = ({
  isOpen,
  onClose,
  mode,
  employee,
  systemRoles,
  allAvailableModels,
  skillMarketSkills,
  pluginEnabled,
  onSave
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = reactExports.useState({
    id: "",
    name: "",
    avatar: "🤖",
    description: "高级 AI 数字化员工助理",
    systemPrompt: "",
    loadedModels: [],
    masterModelId: "",
    systemRoleId: "",
    subModels: [],
    skills: [],
    isActive: true,
    manualInstructions: "",
    capabilityOverrides: {}
  });
  const [emojiPickerOpen, setEmojiPickerOpen] = reactExports.useState(false);
  const [skillSearch, setSkillSearch] = reactExports.useState("");
  const [skillPage, setSkillPage] = reactExports.useState(1);
  const skillsPerPage = 3;
  const [autoInstructions, setAutoInstructions] = reactExports.useState("");
  const [isGeneratingInstructions, setIsGeneratingInstructions] = reactExports.useState(false);
  const [showMergedPreview, setShowMergedPreview] = reactExports.useState(false);
  const [isPolishing, setIsPolishing] = reactExports.useState(false);
  const [aiGenModalOpen, setAiGenModalOpen] = reactExports.useState(false);
  const [aiGenDescription, setAiGenDescription] = reactExports.useState("");
  const [isAiGenerating, setIsAiGenerating] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isOpen) {
      if (mode === "edit" && employee) {
        setFormData({
          id: employee.id,
          name: employee.name,
          avatar: employee.avatar || "🤖",
          description: employee.description || "高级 AI 数字化员工助理",
          systemPrompt: employee.systemPrompt || "",
          loadedModels: employee.loadedModels || [employee.masterModelId],
          masterModelId: employee.masterModelId,
          systemRoleId: employee.systemRoleId || (systemRoles[0]?.id || ""),
          subModels: employee.subModels || [],
          skills: employee.skills || [],
          isActive: employee.isActive ?? true,
          manualInstructions: employee.manualInstructions || "",
          capabilityOverrides: employee.capabilityOverrides || {}
        });
      } else {
        setFormData({
          id: "",
          name: "",
          avatar: "🤖",
          description: "高级 AI 数字化员工助理",
          systemPrompt: "",
          loadedModels: [],
          masterModelId: "",
          systemRoleId: systemRoles[0]?.id || "",
          subModels: [],
          skills: [],
          isActive: true,
          manualInstructions: "",
          capabilityOverrides: {}
        });
      }
      setSkillSearch("");
      setSkillPage(1);
      setEmojiPickerOpen(false);
    }
  }, [isOpen, mode, employee, systemRoles]);
  const mergedSkills = reactExports.useMemo(() => {
    return pluginEnabled ? [
      ...skillMarketSkills.map((s) => ({
        ...s,
        isInvalid: s.isActive === false || s.isActive === 0
      })),
      ...formData.skills.filter((slug) => !skillMarketSkills.some((s) => s.slug === slug)).map((slug) => ({
        id: `ghost-${slug}`,
        slug,
        name: slug,
        description: "该扩展技能已被物理卸载或彻底删除，数据感知断开。",
        isInvalid: true
      }))
    ] : [];
  }, [pluginEnabled, skillMarketSkills, formData.skills]);
  const filteredSkills = reactExports.useMemo(() => {
    return mergedSkills.filter(
      (skill) => skill.name.toLowerCase().includes(skillSearch.toLowerCase()) || skill.slug.toLowerCase().includes(skillSearch.toLowerCase()) || skill.description.toLowerCase().includes(skillSearch.toLowerCase())
    );
  }, [mergedSkills, skillSearch]);
  const totalPages = Math.max(1, Math.ceil(filteredSkills.length / skillsPerPage));
  const paginatedSkills = filteredSkills.slice((skillPage - 1) * skillsPerPage, skillPage * skillsPerPage);
  reactExports.useEffect(() => {
    if (isOpen) {
      setIsGeneratingInstructions(true);
      if (typeof fetch !== "undefined") {
        try {
          const promise = fetch("/api/v1/ai/instructions/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemRoleId: formData.systemRoleId,
              skills: formData.skills
            })
          });
          if (promise && typeof promise.then === "function") {
            promise.then((res) => res.json()).then((res) => {
              if (res && res.success && res.markdown) {
                setAutoInstructions(res.markdown);
              } else {
                throw new Error();
              }
              setIsGeneratingInstructions(false);
            }).catch(() => {
              fallbackInstructions();
            });
          } else {
            fallbackInstructions();
          }
        } catch (e) {
          fallbackInstructions();
        }
      } else {
        fallbackInstructions();
      }
    }
    function fallbackInstructions() {
      const selectedRole = systemRoles.find((r) => r.id === formData.systemRoleId);
      const roleName = selectedRole ? selectedRole.name : `角色 ID: ${formData.systemRoleId}`;
      const skillDetails = pluginEnabled ? formData.skills.map((s) => {
        const sk = skillMarketSkills.find((item) => item.slug === s);
        return `* **\`${s}\`**${sk ? ` (技能名称: **${sk.name}**)` : ""}`;
      }).join("\n") || "（暂无绑定技能）" : "（AI 技能与连接器管理插件已被关闭，已有的扩展技能均已失效且无法调用）";
      setAutoInstructions(`### 🛠️ 你拥有的可用扩展物理技能工具：
${skillDetails}

### 🛡️ 你拥有的系统运行与安全审计管理权限边界：
* 绑定的运行审计角色为: **${roleName}**`);
      setIsGeneratingInstructions(false);
    }
  }, [formData.systemRoleId, formData.skills, isOpen, systemRoles, skillMarketSkills, pluginEnabled]);
  const handleAiGenerateEmployeeData = async () => {
    if (!aiGenDescription.trim()) return;
    setIsAiGenerating(true);
    try {
      const response = await fetch("/api/v1/ai/agent-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: aiGenDescription })
      });
      const res = await response.json();
      if (res && res.success && res.data) {
        const { name, avatar, systemPrompt, manualInstructions, recommendedSkills, recommendedModelId } = res.data;
        let nextLoadedModels = [...formData.loadedModels];
        let nextMasterModelId = formData.masterModelId;
        if (recommendedModelId) {
          const exists = allAvailableModels.some((m) => m.id === recommendedModelId);
          if (exists) {
            if (!nextLoadedModels.includes(recommendedModelId)) {
              nextLoadedModels.push(recommendedModelId);
            }
            nextMasterModelId = recommendedModelId;
          } else {
            if (allAvailableModels.length > 0 && !nextMasterModelId) {
              const firstModelId = allAvailableModels[0].id;
              nextLoadedModels.push(firstModelId);
              nextMasterModelId = firstModelId;
            }
          }
        } else if (allAvailableModels.length > 0 && !nextMasterModelId) {
          const firstModelId = allAvailableModels[0].id;
          nextLoadedModels.push(firstModelId);
          nextMasterModelId = firstModelId;
        }
        const nextSkills = Array.isArray(recommendedSkills) ? recommendedSkills.filter((slug) => skillMarketSkills.some((s) => s.slug === slug)) : [];
        setFormData((prev) => ({
          ...prev,
          name: name || prev.name,
          avatar: avatar || prev.avatar,
          systemPrompt: systemPrompt || prev.systemPrompt,
          manualInstructions: manualInstructions || prev.manualInstructions,
          loadedModels: nextLoadedModels,
          masterModelId: nextMasterModelId,
          skills: nextSkills
        }));
        toast({ title: "AI 智能规划成功！", description: "员工姓名、头像、提示词、SOP 守则及技能勾选已自动补齐完成。" });
        setAiGenModalOpen(false);
      } else {
        throw new Error(res?.error || "生成失败");
      }
    } catch (err) {
      toast({ title: "一键生成规划失败", description: err.message || "网络连接异常，未能完成智能大脑生成。", variant: "destructive" });
    } finally {
      setIsAiGenerating(false);
    }
  };
  const handleSave = () => {
    if (!formData.name) {
      toast({ title: "无法保存", description: "请输入员工姓名或岗位职能", variant: "destructive" });
      return;
    }
    if (formData.loadedModels.length === 0) {
      toast({ title: "参数无效", description: "请先在下方“模型装载”中勾选至少一个可用模型", variant: "destructive" });
      return;
    }
    if (!formData.masterModelId) {
      toast({ title: "主控模型缺失", description: "请指定大脑中的核心“主控模型”", variant: "destructive" });
      return;
    }
    onSave({
      id: mode === "create" ? `emp-${Date.now()}` : formData.id,
      name: formData.name,
      avatar: formData.avatar,
      description: "高级 AI 数字化员工助理",
      systemPrompt: formData.systemPrompt,
      loadedModels: formData.loadedModels,
      masterModelId: formData.masterModelId,
      systemRoleId: formData.systemRoleId,
      subModels: formData.subModels,
      skills: formData.skills,
      isActive: formData.isActive,
      manualInstructions: formData.manualInstructions,
      capabilityOverrides: formData.capabilityOverrides
    });
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-2xl bg-white rounded-3xl shadow-2xl p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { className: "p-6 border-b border-slate-100 bg-slate-50/50", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2 text-slate-800", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bot, { className: "text-blue-600", size: 18 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 321,
            columnNumber: 15
          }, void 0),
          mode === "create" ? "录用全新数字员工入职" : "编辑数字员工大脑设定"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-slate-500 text-xs", children: "配置 AI 员工的职能属性、主控智脑、扩展技能库及底层运行安全权限隔离边界。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 324,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
        lineNumber: 319,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-4 max-h-[60vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-3 space-y-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500", children: "员工名称 / 岗位职能" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 334,
                columnNumber: 19
              }, void 0),
              mode === "create" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  onClick: () => setAiGenModalOpen(true),
                  className: "h-7 text-[12px] text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg px-2 border border-purple-100/50 flex items-center font-medium gap-1 shadow-sm transition-all",
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 11, className: "text-purple-500 animate-pulse" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 342,
                      columnNumber: 23
                    }, void 0),
                    "AI 智能补齐大脑"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 336,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 333,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "例如: 智能文案创作专家 (Aria)",
                value: formData.name,
                onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                className: "rounded-xl border-slate-200"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 347,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 332,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500", children: "个性头像" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 357,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => setEmojiPickerOpen(!emojiPickerOpen),
                  className: "w-full h-10 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-2xl shadow-sm transition-all duration-200",
                  title: "选择个性头像",
                  children: formData.avatar
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 359,
                  columnNumber: 19
                },
                void 0
              ),
              emojiPickerOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    className: `fixed inset-0 ${UI_LAYER.local.backdrop}`,
                    onClick: () => setEmojiPickerOpen(false)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 370,
                    columnNumber: 23
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `absolute top-12 right-0 ${UI_LAYER.local.panel} bg-white border border-slate-200 p-3 rounded-2xl shadow-xl w-60 grid grid-cols-6 gap-2 scale-in-center`, children: EMOJI_POOL.map((emoji) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setFormData({ ...formData, avatar: emoji });
                      setEmojiPickerOpen(false);
                    },
                    className: `w-8 h-8 rounded-lg flex items-center justify-center text-lg hover:bg-blue-50 transition-colors ${formData.avatar === emoji ? "bg-blue-50 ring-2 ring-blue-500/50" : ""}`,
                    children: emoji
                  },
                  emoji,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 376,
                    columnNumber: 27
                  },
                  void 0
                )) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 374,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 369,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 358,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 356,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500", children: "系统提示词 (System Prompt)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 398,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `text-[12px] font-mono ${formData.systemPrompt.length > 900 ? "text-red-500 font-bold" : "text-slate-400"}`, children: [
              formData.systemPrompt.length,
              " / 1000 字"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 399,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 397,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "textarea",
            {
              placeholder: "设定该员工的身份背景、回复风格、推理规则约束等主控核心指令...",
              value: formData.systemPrompt,
              onChange: (e) => {
                const sliced = e.target.value.slice(0, 1e3);
                setFormData({ ...formData, systemPrompt: sliced });
              },
              rows: 4,
              className: "w-full rounded-xl border border-slate-200 p-3 text-xs focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50/20"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 403,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 396,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500", children: "模型装载 (Mount Models)" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 417,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border border-slate-150 rounded-2xl p-3 bg-slate-50/30 max-h-[140px] overflow-y-auto space-y-1.5", children: allAvailableModels.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 text-center", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertCircle, { size: 14, className: "text-slate-400 mx-auto mb-1" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 421,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400", children: "提供商管理中尚未添加任何模型，列表为空。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 422,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 420,
            columnNumber: 19
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: allAvailableModels.map((m) => {
            const isLoaded = formData.loadedModels.includes(m.id);
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "label",
              {
                className: `flex items-center gap-2 p-2 rounded-xl border cursor-pointer hover:bg-slate-50 transition-all text-xs ${isLoaded ? "bg-blue-50/20 border-blue-200" : "bg-white border-slate-100"}`,
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      checked: isLoaded,
                      onChange: () => {
                        const next = isLoaded ? formData.loadedModels.filter((id) => id !== m.id) : [...formData.loadedModels, m.id];
                        let nextMaster = formData.masterModelId;
                        if (isLoaded && formData.masterModelId === m.id) {
                          nextMaster = next[0] || "";
                        } else if (!isLoaded && !formData.masterModelId) {
                          nextMaster = m.id;
                        }
                        setFormData({ ...formData, loadedModels: next, masterModelId: nextMaster });
                      },
                      className: "rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 434,
                      columnNumber: 27
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-slate-700 truncate leading-tight", children: m.name || m.id }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 454,
                      columnNumber: 29
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[8px] text-slate-400 font-mono mt-0.5", children: m.providerName }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 455,
                      columnNumber: 29
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 453,
                    columnNumber: 27
                  }, void 0)
                ]
              },
              m.id,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 429,
                columnNumber: 25
              },
              void 0
            );
          }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 425,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 418,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 416,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500", children: "主控智脑模型" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 468,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "select",
              {
                className: "w-full h-10 rounded-xl border px-3 text-xs focus:ring-2 focus:ring-blue-500 outline-none bg-white border-slate-200 disabled:bg-slate-50 disabled:text-slate-400",
                value: formData.masterModelId,
                onChange: (e) => setFormData({ ...formData, masterModelId: e.target.value }),
                disabled: formData.loadedModels.length === 0,
                children: formData.loadedModels.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "", children: "(请先在上方勾选装载模型)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 476,
                  columnNumber: 21
                }, void 0) : formData.loadedModels.map((id) => {
                  const modelInfo = allAvailableModels.find((m) => m.id === id);
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: id, children: modelInfo ? `${modelInfo.name}` : id }, id, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 481,
                    columnNumber: 25
                  }, void 0);
                })
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 469,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 467,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500", children: "运行审计角色 (RBAC Role)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 491,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "select",
              {
                className: "w-full h-10 rounded-xl border px-3 text-xs focus:ring-2 focus:ring-blue-500 outline-none bg-white border-slate-200",
                value: formData.systemRoleId,
                onChange: (e) => setFormData({ ...formData, systemRoleId: e.target.value }),
                children: systemRoles.map((role) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: role.id, children: role.name }, role.id, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 498,
                  columnNumber: 21
                }, void 0))
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 492,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[12px] text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 p-2.5 rounded-xl border border-blue-100 dark:border-blue-900/30 font-semibold flex items-center gap-1.5 mt-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bot, { size: 12, className: "shrink-0 text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 502,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "已自动激活岗位权限对应的内置能力（根据 RBAC 角色动态分配）" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 503,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 501,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 490,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 466,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wand2, { size: 13, className: "text-purple-500 animate-pulse" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 511,
                columnNumber: 59
              }, void 0),
              " 扩展技能列表"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 511,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[9px] text-slate-400 font-normal", children: "基于 AI 技能市场扩展" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 512,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 510,
            columnNumber: 15
          }, void 0),
          !pluginEnabled ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50 text-center scale-in-center", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertCircle, { size: 14, className: "text-red-500 mx-auto mb-1.5 animate-pulse" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 517,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-500 font-bold", children: "无 (AI 技能与连接器管理插件已被关闭)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 518,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] text-slate-400 mt-1", children: "您之前选中的扩展技能已全部失效、不可调用且无法展示。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 519,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 516,
            columnNumber: 17
          }, void 0) : filteredSkills.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 border border-dashed border-slate-200 rounded-2xl bg-slate-50 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 font-medium", children: "目前技能仓库中暂无登记技能，列表为空。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 523,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 522,
            columnNumber: 17
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  type: "text",
                  placeholder: "检索技能名称 / 描述 / 标识符...",
                  value: skillSearch,
                  onChange: (e) => {
                    setSkillSearch(e.target.value);
                    setSkillPage(1);
                  },
                  className: "pl-8 text-xs h-8.5 rounded-xl border-slate-200 bg-slate-50/50"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 528,
                  columnNumber: 21
                },
                void 0
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { size: 11, className: "absolute left-3 top-2.5 text-slate-400" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 538,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 527,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: paginatedSkills.map((skill) => {
              const isBound = formData.skills.includes(skill.slug);
              const isInvalid = skill.isInvalid === true;
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "div",
                {
                  onClick: () => {
                    let next;
                    if (isInvalid) {
                      next = formData.skills.filter((s) => s !== skill.slug);
                    } else {
                      next = isBound ? formData.skills.filter((s) => s !== skill.slug) : [...formData.skills, skill.slug];
                    }
                    setFormData({ ...formData, skills: next });
                  },
                  className: `p-2.5 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${isInvalid ? "bg-slate-50/80 border-slate-200 opacity-60 hover:bg-slate-100/60" : isBound ? "bg-purple-50/40 border-purple-200 hover:bg-purple-50/60" : "bg-white border-slate-100 hover:bg-slate-50"}`,
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "pr-4 flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold text-slate-700 flex items-center gap-1.5 flex-wrap", children: [
                        skill.name,
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[8px] bg-slate-100 text-slate-400 font-mono px-1 py-0.5 rounded leading-none", children: skill.slug }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                          lineNumber: 570,
                          columnNumber: 31
                        }, void 0),
                        isInvalid && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[8px] bg-red-50 text-red-500 border border-red-100 px-1.5 py-0.5 rounded leading-none font-bold animate-pulse", children: skill.id?.startsWith("ghost-") ? "已失效 / 插件已删除" : "已停用" }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                          lineNumber: 574,
                          columnNumber: 33
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                        lineNumber: 568,
                        columnNumber: 29
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 truncate mt-0.5", children: skill.description }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                        lineNumber: 579,
                        columnNumber: 29
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 567,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-4 h-4 rounded-full flex items-center justify-center shrink-0 border ${isInvalid ? "bg-slate-200 border-slate-300 text-slate-400" : isBound ? "bg-purple-600 border-purple-600 text-white" : "border-slate-200"}`, children: isBound && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { size: 10 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 587,
                      columnNumber: 41
                    }, void 0) }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 581,
                      columnNumber: 27
                    }, void 0)
                  ]
                },
                skill.slug,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 547,
                  columnNumber: 25
                },
                void 0
              );
            }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 541,
              columnNumber: 19
            }, void 0),
            totalPages > 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center px-1.5 pt-1.5 text-[12px] text-slate-400 border-t border-slate-50", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                "共搜到 ",
                filteredSkills.length,
                " 项"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 596,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    size: "icon",
                    variant: "ghost",
                    onClick: () => setSkillPage((p) => Math.max(1, p - 1)),
                    disabled: skillPage === 1,
                    className: "w-6 h-6 rounded-lg border border-slate-100 p-0 hover:bg-slate-50",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 11, className: "rotate-180" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 605,
                      columnNumber: 27
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 598,
                    columnNumber: 25
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                  "第 ",
                  skillPage,
                  " / ",
                  totalPages,
                  " 页"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 607,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    size: "icon",
                    variant: "ghost",
                    onClick: () => setSkillPage((p) => Math.min(totalPages, p + 1)),
                    disabled: skillPage === totalPages,
                    className: "w-6 h-6 rounded-lg border border-slate-100 p-0 hover:bg-slate-50",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 11 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 615,
                      columnNumber: 27
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 608,
                    columnNumber: 25
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 597,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 595,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 526,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 509,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold uppercase text-slate-500 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 13, className: "text-blue-500" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 627,
                columnNumber: 61
              }, void 0),
              " 认知构建与自动化指令边界"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 627,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[9px] text-slate-400 font-normal", children: "自动感知与 SOP 微调" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 628,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 626,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center px-0.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 flex items-center gap-1", children: "自动说明书预览" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 633,
                columnNumber: 19
              }, void 0),
              isGeneratingInstructions && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-blue-500 animate-pulse flex items-center gap-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 10, className: "animate-spin" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 634,
                  columnNumber: 130
                }, void 0),
                " 计算生成中..."
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 634,
                columnNumber: 48
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 632,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative rounded-2xl border border-slate-150 bg-slate-950 text-slate-200 p-4 font-mono text-[12px] leading-relaxed max-h-[160px] overflow-y-auto shadow-inner", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute top-3.5 right-3.5 text-[8px] bg-slate-900 text-slate-400 font-sans px-2 py-0.5 rounded-full border border-slate-800 flex items-center gap-1 select-none", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 9, className: "text-yellow-400 animate-pulse" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 638,
                  columnNumber: 21
                }, void 0),
                " 自愈式感知"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 637,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "whitespace-pre-wrap select-text font-mono text-slate-300", children: autoInstructions }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 640,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 636,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 631,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600", children: "额外指令 (手动微调 SOP / 设定)" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 647,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  disabled: isPolishing,
                  onClick: () => {
                    const promptToPolish = formData.manualInstructions || formData.systemPrompt;
                    if (!promptToPolish.trim()) {
                      toast({ title: "无法润色", description: "请先在系统提示词或额外指令中输入基础设定内容。", variant: "destructive" });
                      return;
                    }
                    if (!formData.masterModelId) {
                      toast({ title: "主控模型缺失", description: "请先在上部勾选并选择主控智脑模型。", variant: "destructive" });
                      return;
                    }
                    setIsPolishing(true);
                    toast({ title: "正在启动 AI 智能润色...", description: `调用主控模型 ${formData.masterModelId} 进行设定重构，请稍候。` });
                    fetch("/api/v1/ai/polish", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ prompt: promptToPolish, modelId: formData.masterModelId })
                    }).then((res) => res.json()).then((res) => {
                      if (res && res.success && res.polished) {
                        setFormData((prev) => ({ ...prev, manualInstructions: res.polished }));
                        toast({ title: "AI 智能润色成功！", description: "SOP 与微调约束已自动强化并填入下方输入框。" });
                      } else {
                        throw new Error(res?.error || "润色返回数据异常");
                      }
                    }).catch((err) => {
                      toast({ title: "AI 润色失败", description: err.message || "网络连接异常，未能完成润色请求。", variant: "destructive" });
                    }).finally(() => {
                      setIsPolishing(false);
                    });
                  },
                  className: "h-7 text-[12px] text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg px-2 border border-blue-100 flex items-center font-medium disabled:opacity-50",
                  children: [
                    isPolishing ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 10, className: "mr-1 text-blue-500 animate-spin" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 689,
                      columnNumber: 36
                    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wand2, { size: 10, className: "mr-1 text-blue-500" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 689,
                      columnNumber: 106
                    }, void 0),
                    isPolishing ? "AI 智能润色中..." : "AI 智能润色"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                  lineNumber: 648,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 646,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "textarea",
              {
                placeholder: "请输入特定的运营 SOP、工作守则或该 AI 员工特定的性格微调约束...",
                value: formData.manualInstructions,
                onChange: (e) => setFormData({ ...formData, manualInstructions: e.target.value }),
                rows: 3,
                className: "w-full rounded-xl border border-slate-200 p-3 text-xs focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50/20"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 693,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 645,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-slate-100 bg-slate-50/30 overflow-hidden", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setShowMergedPreview(!showMergedPreview),
                className: "w-full px-3.5 py-2.5 flex items-center justify-between text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1.5 text-[11px]", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileText, { size: 12, className: "text-slate-400" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                      lineNumber: 709,
                      columnNumber: 75
                    }, void 0),
                    " 最终合并效果总览 (自动 + 手动)"
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 709,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 14, className: `text-slate-400 transition-transform ${showMergedPreview ? "rotate-180" : ""}` }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                    lineNumber: 710,
                    columnNumber: 19
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 704,
                columnNumber: 17
              },
              void 0
            ),
            showMergedPreview && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3.5 border-t border-slate-100 bg-slate-50 text-[12px] leading-relaxed text-slate-600 max-h-[180px] overflow-y-auto font-mono whitespace-pre-wrap", children: [
              autoInstructions,
              formData.manualInstructions ? `

### 📝 额外追加的手动微调指令：
${formData.manualInstructions}` : ""
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 713,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 703,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 625,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
        lineNumber: 329,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "bg-slate-50 p-4 border-t border-slate-100 mt-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", className: "rounded-xl h-9 text-xs font-semibold", onClick: onClose, children: "取消" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 723,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: handleSave,
            className: "bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-9 text-xs font-semibold min-w-[120px] shadow-sm",
            children: mode === "create" ? "签署合同并入职" : "保存大脑设定"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 724,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
        lineNumber: 722,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
      lineNumber: 318,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: aiGenModalOpen, onOpenChange: (open) => {
      if (!isAiGenerating) {
        setAiGenModalOpen(open);
        if (!open) setAiGenDescription("");
      }
    }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md bg-white rounded-3xl shadow-2xl p-6", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2 text-slate-800 text-sm font-bold", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wand2, { className: "text-purple-600 animate-pulse", size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 744,
            columnNumber: 15
          }, void 0),
          "AI 一键智能规划大脑设定"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 743,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-slate-500 text-xs", children: "简单输入您对该数字员工岗位的职责期望，系统将自动使用全局系统大模型为您生成岗位名、匹配 Emoji 头像、创作专业的提示词与 SOP 工作规范并智能关联可用技能。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 747,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
        lineNumber: 742,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "my-4 space-y-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "textarea",
        {
          placeholder: "例如：我需要一个精通小红书各领域爆款写作规则的高级文案大师，能根据主题自动拟定吸睛标题、生成分段文案，并带有丰富 Emoji 和热门 Tag 标签...",
          value: aiGenDescription,
          onChange: (e) => setAiGenDescription(e.target.value),
          disabled: isAiGenerating,
          rows: 4,
          className: "w-full rounded-xl border border-slate-200 p-3 text-xs focus:ring-2 focus:ring-purple-500 outline-none bg-slate-50/20 resize-none leading-relaxed transition-all duration-200"
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
          lineNumber: 753,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
        lineNumber: 752,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: "ghost",
            disabled: isAiGenerating,
            className: "rounded-xl h-9 text-xs font-semibold",
            onClick: () => setAiGenModalOpen(false),
            children: "取消"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 764,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            disabled: isAiGenerating || !aiGenDescription.trim(),
            onClick: handleAiGenerateEmployeeData,
            className: "bg-purple-600 hover:bg-purple-700 text-white rounded-xl h-9 text-xs font-semibold shadow-sm min-w-[100px] flex items-center justify-center gap-1.5",
            children: isAiGenerating ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 12, className: "animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 779,
                columnNumber: 19
              }, void 0),
              "智能规划中..."
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 778,
              columnNumber: 17
            }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
                lineNumber: 784,
                columnNumber: 19
              }, void 0),
              "开始一键生成"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
              lineNumber: 783,
              columnNumber: 17
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
            lineNumber: 772,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
        lineNumber: 763,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
      lineNumber: 741,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
      lineNumber: 735,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/employee-modal.tsx",
    lineNumber: 316,
    columnNumber: 5
  }, void 0);
};
const ChatPanel = ({
  employees,
  activeEmpId,
  setActiveEmpId,
  activeEmployee,
  messages,
  activeSessionId,
  inputText,
  setInputText,
  isSending,
  isPreviewMode,
  setIsPreviewMode,
  isInputExpanded,
  setIsInputExpanded,
  uploadedAttachments,
  setUploadedAttachments,
  isUploading,
  setIsMediaPickerOpen,
  fileInputRef,
  textareaRef,
  chatContainerRef,
  systemRoles,
  collapsedLogs,
  collapsedReasonings,
  collapsedUserMessages,
  handleOpenCreate,
  handleOpenEdit,
  handleDeleteEmployee,
  handleInterrupt,
  handleFileUpload,
  handleSendMessage,
  toggleLog,
  toggleReasoning,
  toggleUserMessage,
  toggleSteps,
  insertMarkdown
}) => {
  const currentMessages = messages[activeSessionId] || [];
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0 flex flex-col bg-slate-50/20 overflow-hidden relative max-h-[calc(100vh-140px)]", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "input",
      {
        type: "file",
        ref: fileInputRef,
        onChange: handleFileUpload,
        multiple: true,
        style: { display: "none" }
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 95,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-14 border-b border-slate-100 dark:border-slate-800 px-6 flex justify-between items-center bg-white dark:bg-slate-900 shrink-0", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-2xl leading-none", children: activeEmployee?.avatar }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "select",
              {
                value: activeEmpId,
                onChange: (e) => setActiveEmpId(e.target.value),
                className: "font-extrabold text-xs text-slate-800 dark:text-slate-200 bg-transparent border-none p-0 pr-5 focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors appearance-none",
                style: { backgroundImage: "none" },
                children: employees.map((emp) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: emp.id, className: "text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900", children: [
                  emp.avatar,
                  " ",
                  emp.name
                ] }, emp.id, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 116,
                  columnNumber: 19
                }, void 0))
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 109,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { size: 11, className: "text-slate-400 pointer-events-none absolute right-0" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 121,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-1.5" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 truncate max-w-[200px] sm:max-w-[350px] mt-0.5", children: activeEmployee?.description }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: handleOpenCreate,
            className: "rounded-lg h-8 gap-1.5 text-xs font-semibold hover:bg-slate-50 text-slate-650 border-slate-200",
            children: "配置录用"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 131,
            columnNumber: 11
          },
          void 0
        ),
        employees.length > 0 && activeEmployee && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => handleDeleteEmployee(activeEmployee.id, activeEmployee.name),
            className: "rounded-lg h-8 gap-1.5 text-xs font-semibold hover:bg-red-50 text-red-650 border-red-200 hover:text-red-700",
            children: "辞退注销"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 140,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: handleOpenEdit,
            className: "rounded-lg h-8 gap-1.5 text-xs font-semibold hover:bg-slate-50 text-slate-650 border-slate-200",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { size: 13 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 155,
                columnNumber: 13
              }, void 0),
              "员工配置"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 149,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        ref: chatContainerRef,
        className: "flex-1 min-h-0 overflow-y-auto p-6 space-y-4 pb-6",
        children: currentMessages.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-full flex flex-col items-center justify-center text-center p-8 select-none my-auto animate-fade-in", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative mb-6", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-14 h-14 bg-gradient-to-tr from-blue-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 mx-auto transform hover:rotate-12 transition-transform duration-300", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { size: 24, className: "animate-pulse" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 170,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 169,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full animate-bounce" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 172,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h5", { className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-2", children: [
            "开启与 ",
            activeEmployee?.name || "数字员工",
            " 的智慧对话"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 174,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-slate-400 dark:text-slate-500 max-w-[280px] leading-relaxed mx-auto mb-6", children: "支持接收复杂的 Markdown 任务、物理 API 技能扩展卡自决调用，并提供受审计隔离的执行保障。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-2 max-w-[280px] w-full mx-auto", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "div",
              {
                onClick: () => setInputText("帮我查询一下系统当前的最新运行状态和日志详情"),
                className: "p-2 text-[9px] text-slate-500 hover:text-blue-600 bg-white hover:bg-blue-50/50 dark:bg-slate-800 dark:hover:bg-slate-850 border border-slate-100 dark:border-slate-750 hover:border-blue-200 rounded-xl cursor-pointer transition-all duration-200 text-left font-medium shadow-sm",
                children: "🔍 查询系统运行状态..."
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 181,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "div",
              {
                onClick: () => setInputText("请生成一份关于AI数字员工群的工作周报草案模板"),
                className: "p-2 text-[9px] text-slate-500 hover:text-blue-600 bg-white hover:bg-blue-50/50 dark:bg-slate-800 dark:hover:bg-slate-850 border border-slate-100 dark:border-slate-750 hover:border-blue-200 rounded-xl cursor-pointer transition-all duration-200 text-left font-medium shadow-sm",
                children: "📝 起草工作周报模板..."
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 187,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 180,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, void 0) : currentMessages.map((msg) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          ChatMessageItem,
          {
            msg,
            activeEmployee,
            isLogCollapsed: collapsedLogs[msg.id] === true,
            isReasoningCollapsed: collapsedReasonings[msg.id] ?? !msg.isStreaming,
            isUserMsgCollapsed: collapsedUserMessages[msg.id] ?? (msg.content && msg.content.length > 300),
            onToggleLog: toggleLog,
            onToggleReasoning: toggleReasoning,
            onToggleUserMessage: toggleUserMessage,
            onToggleSteps: toggleSteps
          },
          msg.id,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 197,
            columnNumber: 13
          },
          void 0
        ))
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 162,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "sticky bottom-0 left-0 right-0 p-4 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur border-t border-slate-200/70 dark:border-slate-800/70 z-10 shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-4xl mx-auto w-full", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between mb-2 px-1.5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: isSending || isPreviewMode,
              onClick: () => insertMarkdown("bold"),
              className: "p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors disabled:opacity-30",
              title: "粗体 (Bold)",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bold, { size: 13 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 225,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 218,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: isSending || isPreviewMode,
              onClick: () => insertMarkdown("italic"),
              className: "p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors disabled:opacity-30",
              title: "斜体 (Italic)",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Italic, { size: 13 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 234,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 227,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: isSending || isPreviewMode,
              onClick: () => insertMarkdown("code"),
              className: "p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors disabled:opacity-30",
              title: "代码块 (Code Block)",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Code, { size: 13 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 243,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 236,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: isSending || isPreviewMode,
              onClick: () => insertMarkdown("link"),
              className: "p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors disabled:opacity-30",
              title: "链接 (Link)",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { size: 13 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 252,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 245,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: isSending || isPreviewMode,
              onClick: () => insertMarkdown("table"),
              className: "p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors disabled:opacity-30",
              title: "表格 (Table)",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { size: 13 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 261,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 254,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 217,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 bg-slate-100 dark:bg-slate-850 p-0.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setIsPreviewMode(false),
              className: `px-2 py-0.5 text-[12px] font-bold rounded-md transition-all flex items-center gap-1 ${!isPreviewMode ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-500 hover:text-slate-700 dark:text-slate-400"}`,
              children: "编辑"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 266,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              disabled: !inputText.trim(),
              onClick: () => setIsPreviewMode(true),
              className: `px-2 py-0.5 text-[12px] font-bold rounded-md transition-all flex items-center gap-1 ${isPreviewMode ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 disabled:opacity-40"}`,
              children: [
                isPreviewMode ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(EyeOff, { size: 11 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 279,
                  columnNumber: 32
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Eye, { size: 11 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 279,
                  columnNumber: 55
                }, void 0),
                "预览 Markdown"
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 273,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-[1px] h-3 bg-slate-200 dark:bg-slate-700 mx-1" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setIsInputExpanded(!isInputExpanded),
              className: "px-1.5 py-0.5 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-md transition-all flex items-center justify-center",
              title: isInputExpanded ? "收缩输入框" : "展开输入框查看更多",
              children: isInputExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Minimize2, { size: 11 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 290,
                columnNumber: 34
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Maximize2, { size: 11 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 290,
                columnNumber: 60
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 284,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 265,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex flex-col gap-2 bg-slate-100/90 dark:bg-slate-850/90 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-transparent transition-all shadow-sm", children: [
        isUploading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 p-2 text-[12px] text-blue-600 bg-blue-50/50 border border-blue-100/30 dark:bg-blue-950/20 dark:border-blue-900/30 rounded-xl animate-pulse font-bold", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 11, className: "animate-spin" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 298,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "文件正在直传安全 R2 存储底座中，请稍候..." }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 299,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 297,
          columnNumber: 13
        }, void 0),
        uploadedAttachments.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2 p-2 bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-200/40 dark:border-slate-850/40 rounded-t-xl", children: uploadedAttachments.map((file) => {
          const isImage = file.type && file.type.startsWith("image/");
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: "group relative flex items-center gap-2 p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm max-w-[150px] truncate",
              children: [
                isImage ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: file.url, className: "w-8 h-8 rounded object-cover", alt: file.name }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 313,
                  columnNumber: 23
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-8 h-8 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-[9px] uppercase shrink-0", children: file.name.split(".").pop()?.toUpperCase() || "FILE" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 315,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0 pr-4", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[9px] font-bold text-slate-700 dark:text-slate-350 truncate", children: file.name }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                    lineNumber: 320,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[8px] text-slate-400", children: [
                    (file.size / 1024 / 1024).toFixed(2),
                    " MB"
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                    lineNumber: 321,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 319,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => setUploadedAttachments((prev) => prev.filter((f) => f.id !== file.id)),
                    className: "absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold shadow opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity",
                    children: "✕"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                    lineNumber: 323,
                    columnNumber: 21
                  },
                  void 0
                )
              ]
            },
            file.id,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 308,
              columnNumber: 19
            },
            void 0
          );
        }) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 304,
          columnNumber: 13
        }, void 0),
        isPreviewMode ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            style: { height: isInputExpanded ? "350px" : "auto", minHeight: "44px", maxHeight: isInputExpanded ? "350px" : "240px" },
            className: "overflow-y-auto px-3 py-2 text-xs leading-relaxed bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-xl select-text",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RichContentRenderer, { content: inputText }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 341,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 337,
            columnNumber: 13
          },
          void 0
        ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "textarea",
          {
            ref: textareaRef,
            placeholder: `向 ${activeEmployee?.name} 派发多行/Markdown任务...`,
            value: inputText,
            onChange: (e) => setInputText(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            },
            disabled: isSending,
            rows: 1,
            style: { minHeight: isInputExpanded ? "350px" : "38px", maxHeight: isInputExpanded ? "350px" : "180px" },
            className: "flex-1 bg-transparent border-none text-xs text-slate-900 dark:text-slate-100 font-medium focus:ring-0 focus-visible:ring-0 shadow-none px-2 py-1 placeholder-slate-400 dark:placeholder-slate-500 resize-none leading-relaxed transition-all outline-none"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 344,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/40 pt-1.5 px-1 bg-transparent", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400", children: isPreviewMode ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-blue-500 dark:text-blue-400 font-medium", children: "预览模式已开启" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 365,
            columnNumber: 17
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Enter 发送，Shift+Enter 换行" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 367,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 363,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] font-mono text-slate-400 mr-1", children: [
              inputText.length,
              " 字"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
              lineNumber: 372,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                disabled: isSending || isUploading,
                onClick: () => setIsMediaPickerOpen(true),
                className: "p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg transition-colors flex items-center justify-center shrink-0 disabled:opacity-40",
                title: "选择/上传附件",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Paperclip, { size: 12 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 383,
                  columnNumber: 17
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 376,
                columnNumber: 15
              },
              void 0
            ),
            isSending ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                size: "icon",
                type: "button",
                onClick: handleInterrupt,
                className: "w-8 h-8 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center bg-red-500 hover:bg-red-650 text-white animate-pulse",
                title: "中断任务/停止生成",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Square, { size: 10, fill: "currentColor" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 394,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 387,
                columnNumber: 17
              },
              void 0
            ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                size: "icon",
                onClick: () => {
                  setIsPreviewMode(false);
                  handleSendMessage();
                },
                disabled: !inputText.trim() && uploadedAttachments.length === 0,
                className: `w-8 h-8 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center ${inputText.trim() || uploadedAttachments.length > 0 ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-100 text-slate-400 dark:bg-slate-800/50"}`,
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { size: 12 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                  lineNumber: 409,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
                lineNumber: 397,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
            lineNumber: 371,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 362,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 295,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4 mt-2 px-1 text-[9px] text-slate-400", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Shield, { size: 10, className: "text-blue-500" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 418,
          columnNumber: 13
        }, void 0),
        " 本次对话将受 ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("b", { children: systemRoles.find((r) => r.id === activeEmployee?.systemRoleId)?.name?.split(" ")[0] || "系统默认" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
          lineNumber: 418,
          columnNumber: 67
        }, void 0),
        " 角色严格审计隔离"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 417,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
        lineNumber: 416,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/digital-employees/chat-panel.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, void 0);
};
const DigitalEmployees = ({
  providers,
  initialEmployees,
  initialMessages
}) => {
  const {
    employees,
    activeEmpId,
    setActiveEmpId,
    inputText,
    setInputText,
    isSending,
    isPreviewMode,
    setIsPreviewMode,
    isInputExpanded,
    setIsInputExpanded,
    uploadedAttachments,
    setUploadedAttachments,
    isUploading,
    isMediaPickerOpen,
    setIsMediaPickerOpen,
    fileInputRef,
    textareaRef,
    chatContainerRef,
    confirmationQueue,
    setConfirmationQueue,
    sessions,
    activeSessionId,
    setActiveSessionId,
    isRenamingSessionId,
    setIsRenamingSessionId,
    renamingTitle,
    setRenamingTitle,
    loadingSessions,
    deleteConfirmOpen,
    setDeleteConfirmOpen,
    systemRoles,
    skillMarketSkills,
    pluginEnabled,
    messages,
    collapsedLogs,
    collapsedReasonings,
    collapsedUserMessages,
    employeeModalOpen,
    setEmployeeModalOpen,
    modalMode,
    activeEmployee,
    allAvailableModels,
    employeeToDelete,
    setEmployeeToDelete,
    handleCreateNewSession,
    handleDeleteSession,
    confirmDeleteSession,
    handleRenameSession,
    handleOpenCreate,
    handleOpenEdit,
    applySaveEmployee,
    confirmDeleteEmployee,
    handleDeleteEmployee,
    handleInterrupt,
    handleFileUpload,
    handleSendMessage,
    toggleLog,
    toggleReasoning,
    toggleUserMessage,
    toggleSteps,
    insertMarkdown
  } = useDigitalEmployees({ providers, initialEmployees, initialMessages });
  const [historyExpanded, setHistoryExpanded] = React.useState(true);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex w-full h-full overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 rounded-3xl shadow-md h-[79vh]", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      SessionHistory,
      {
        sessions,
        activeSessionId,
        setActiveSessionId,
        loadingSessions,
        historyExpanded,
        setHistoryExpanded,
        isRenamingSessionId,
        setIsRenamingSessionId,
        renamingTitle,
        setRenamingTitle,
        handleCreateNewSession,
        handleRenameSession,
        handleDeleteSession,
        employeesLength: employees.length
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 93,
        columnNumber: 7
      },
      void 0
    ),
    employees.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 flex flex-col justify-center items-center bg-slate-50/30 p-12 text-center select-none dark:bg-slate-900/30", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-16 h-16 bg-blue-50 dark:bg-blue-950/30 text-blue-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/10 mb-6 scale-up-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bot, { size: 32 }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-sm font-extrabold text-slate-800 dark:text-slate-200 mb-2", children: "构建您的企业级 AI 数字化员工群" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-400 max-w-md leading-relaxed mb-6", children: "数字员工系统是您的自主助理核心。您可以按需定制各岗位的专属提示词智脑、绑定安全审计角色与外部 API 技能扩展卡。" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          onClick: handleOpenCreate,
          className: "bg-blue-600 hover:bg-blue-700 text-white rounded-2xl h-10 px-6 text-xs font-bold shadow-md shadow-blue-500/20 gap-2 flex items-center justify-center scale-95 hover:scale-100 transition-all duration-300 animate-pulse",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 15 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
              lineNumber: 126,
              columnNumber: 13
            }, void 0),
            "录用第一位数字员工入职"
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
          lineNumber: 122,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ChatPanel,
      {
        employees,
        activeEmpId,
        setActiveEmpId,
        activeEmployee,
        messages,
        activeSessionId,
        inputText,
        setInputText,
        isSending,
        isPreviewMode,
        setIsPreviewMode,
        isInputExpanded,
        setIsInputExpanded,
        uploadedAttachments,
        setUploadedAttachments,
        isUploading,
        setIsMediaPickerOpen,
        fileInputRef,
        textareaRef,
        chatContainerRef,
        systemRoles,
        collapsedLogs,
        collapsedReasonings,
        collapsedUserMessages,
        handleOpenCreate,
        handleOpenEdit,
        handleDeleteEmployee,
        handleInterrupt,
        handleFileUpload,
        handleSendMessage,
        toggleLog,
        toggleReasoning,
        toggleUserMessage,
        toggleSteps,
        insertMarkdown
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 131,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      EmployeeModal,
      {
        isOpen: employeeModalOpen,
        onClose: () => setEmployeeModalOpen(false),
        mode: modalMode,
        employee: modalMode === "edit" ? activeEmployee : void 0,
        systemRoles,
        allAvailableModels,
        skillMarketSkills,
        pluginEnabled,
        onSave: applySaveEmployee
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 171,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: deleteConfirmOpen,
        onOpenChange: (open) => {
          setDeleteConfirmOpen(open);
        },
        title: "确认删除该对话历史吗？",
        description: "确定要删除这个会话及其全部聊天记录吗？该操作将同时清理云端和本地缓存，且不可恢复。",
        onConfirm: confirmDeleteSession,
        onCancel: () => setDeleteConfirmOpen(false),
        confirmText: "确认删除",
        variant: "destructive",
        confirmClassName: "px-4 py-2 text-xs rounded-xl font-semibold shadow-md shadow-red-500/10",
        cancelClassName: "px-4 py-2 text-xs rounded-xl font-semibold border border-slate-100"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 183,
        columnNumber: 7
      },
      void 0
    ),
    confirmationQueue.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: true,
        onOpenChange: () => {
          const current = confirmationQueue[0];
          current.resolve(false);
          setConfirmationQueue((prev) => prev.slice(1));
        },
        title: "🛡️ 高敏感操作安全确认审计",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          "数字员工正在尝试执行具有高风险或物理写入的操作。为了确保系统安全，该操作已被安全网关拦截，需要您进行手动审计确认。",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "my-4 max-h-[150px] overflow-y-auto rounded-2xl border border-red-100 bg-red-50/50 p-3 dark:border-red-900/30 dark:bg-red-950/10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] font-bold leading-normal text-red-700 dark:text-red-455 font-mono break-all whitespace-pre-wrap", children: confirmationQueue[0].title }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, void 0),
        onConfirm: () => {
          const current = confirmationQueue[0];
          current.resolve(true);
          setConfirmationQueue((prev) => prev.slice(1));
        },
        onCancel: () => {
          const current = confirmationQueue[0];
          current.resolve(false);
          setConfirmationQueue((prev) => prev.slice(1));
        },
        cancelText: "拒绝执行 (Block)",
        confirmText: "授权执行 (Approve)",
        variant: "destructive",
        dialogClassName: "sm:max-w-[450px] rounded-3xl border border-red-100 bg-white p-0 shadow-2xl dark:border-red-950/40 dark:bg-slate-900",
        footerClassName: "mt-5 items-center gap-2 sm:justify-center p-6 pt-0",
        cancelClassName: "rounded-xl h-10 px-5 text-xs font-bold border-slate-200 text-slate-650 hover:bg-slate-50 hover:text-slate-800",
        confirmClassName: "rounded-xl h-10 px-5 text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-500/20"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 200,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!employeeToDelete,
        onOpenChange: (open) => !open && setEmployeeToDelete(null),
        title: "确认辞退数字员工",
        description: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          "此操作将永久注销离职该 AI 数字员工，并断开其关联的所有业务能力与提示词设定。",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
            lineNumber: 246,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
            lineNumber: 247,
            columnNumber: 13
          }, void 0),
          "您确定要解除与数字员工 ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("b", { children: employeeToDelete?.name }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
            lineNumber: 248,
            columnNumber: 25
          }, void 0),
          " 的入职聘用合同吗？注销后该岗位的所有专属记忆与设定将不可恢复。"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, void 0),
        onConfirm: () => {
          if (employeeToDelete) {
            confirmDeleteEmployee(employeeToDelete.id, employeeToDelete.name);
            setEmployeeToDelete(null);
          }
        },
        onCancel: () => setEmployeeToDelete(null),
        confirmText: "确认辞退",
        variant: "destructive",
        dialogClassName: "max-w-md rounded-3xl bg-white p-0 overflow-hidden shadow-2xl",
        footerClassName: "bg-slate-50 p-4 border-t border-slate-100 mt-0",
        cancelClassName: "rounded-xl h-9 text-xs font-semibold",
        confirmClassName: "rounded-xl h-9 text-xs font-semibold shadow-sm"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 239,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      MediaPicker,
      {
        isOpen: isMediaPickerOpen,
        onClose: () => setIsMediaPickerOpen(false),
        title: "选择或上传聊天附件",
        onSelect: (item) => {
          setUploadedAttachments((prev) => {
            if (prev.some((att) => att.id === String(item.id))) return prev;
            return [...prev, {
              id: String(item.id),
              name: item.filename,
              url: item.url,
              type: item.mimeType || "application/octet-stream",
              size: item.sizeBytes || 0
            }];
          });
          setIsMediaPickerOpen(false);
        }
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
        lineNumber: 267,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/DigitalEmployees.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, void 0);
};
const AiSettings = () => {
  const [activeTab, setActiveTab] = reactExports.useState("providers");
  const [loading, setLoading] = reactExports.useState(false);
  const { hasPermission: hasPermission2, loading: loadingPermissions } = useAdminPermissions();
  const canViewAi = hasPermission2(["settings.ai.view", "settings.ai", "role.manage"]);
  const canManageAi = hasPermission2(["settings.ai", "role.manage"]);
  const [config, setConfig] = reactExports.useState({
    enabled: true,
    providers: [],
    assignments: {
      text: { providerId: "", modelId: "" },
      image: { providerId: "", modelId: "" }
    }
  });
  const [searchConfig, setSearchConfig] = reactExports.useState({ provider: "tavily", tavily_api_key: "" });
  const [searchConfigLoading, setSearchConfigLoading] = reactExports.useState(false);
  const [searchKeyConfigured, setSearchKeyConfigured] = reactExports.useState(false);
  const [isEditingKey, setIsEditingKey] = reactExports.useState(false);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingProvider, setEditingProvider] = reactExports.useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = reactExports.useState(false);
  const [deleteTargetId, setDeleteTargetId] = reactExports.useState(null);
  const [gateways, setGateways] = reactExports.useState([]);
  const [isGatewayModalOpen, setIsGatewayModalOpen] = reactExports.useState(false);
  const [isQuickCreateOpen, setIsQuickCreateOpen] = reactExports.useState(false);
  const [gatewayInputId, setGatewayInputId] = reactExports.useState("");
  const [isGatewayLoading, setIsGatewayLoading] = reactExports.useState(false);
  const [employeePreviews, setEmployeePreviews] = reactExports.useState([]);
  const [loadingEmployeePreviews, setLoadingEmployeePreviews] = reactExports.useState(false);
  const [gatewayDeleteConfirmOpen, setGatewayDeleteConfirmOpen] = reactExports.useState(false);
  const [gatewayDeleteTargetId, setGatewayDeleteTargetId] = reactExports.useState(null);
  const { toast } = useToast();
  const fetchGateways = () => {
    fetch("/api/v1/settings/ai_gateways").then((res) => res.json()).then((data) => {
      if (data.success && data.result) {
        setGateways(data.result);
      }
    }).catch(() => {
    });
  };
  const fetchEmployeePreviews = async () => {
    setLoadingEmployeePreviews(true);
    try {
      const res = await fetch("/api/v1/agents");
      const data = await res.json().catch(() => ({}));
      setEmployeePreviews(data?.success && Array.isArray(data?.data) ? data.data : []);
    } catch {
      setEmployeePreviews([]);
    } finally {
      setLoadingEmployeePreviews(false);
    }
  };
  const sanitizeConfig = (rawConfig) => {
    const parsed = { ...rawConfig };
    if (!parsed.providers) {
      parsed.providers = [];
    }
    if (!parsed.assignments) {
      parsed.assignments = {
        text: { providerId: "", modelId: "" },
        image: { providerId: "", modelId: "" }
      };
    }
    parsed.assignments = {
      text: parsed.assignments.text || { providerId: "", modelId: "" },
      image: parsed.assignments.image || { providerId: "", modelId: "" }
    };
    parsed.providers = parsed.providers.map((p) => {
      const provider = { ...p };
      if (provider.models && Array.isArray(provider.models)) {
        provider.models = provider.models.map((m) => {
          const model = { ...m };
          if (!model.types) {
            model.types = model.type ? Array.isArray(model.type) ? model.type : [model.type] : ["general"];
          }
          return model;
        });
      } else {
        provider.models = [];
      }
      return provider;
    });
    return parsed;
  };
  const fetchSearchConfig = () => {
    fetch("/api/v1/settings/search_api_config").then((res) => res.json()).then((data) => {
      if (data.success && data.value) {
        const parsed = JSON.parse(data.value);
        setSearchConfig((prev) => ({ ...prev, provider: parsed.provider || "tavily", tavily_api_key: "" }));
        setSearchKeyConfigured(!!parsed.has_key);
      }
    }).catch(() => {
    });
  };
  const handleSaveSearchConfig = async () => {
    if (!searchConfig.tavily_api_key.trim() && !searchKeyConfigured) {
      return;
    }
    setSearchConfigLoading(true);
    try {
      const payload = { provider: searchConfig.provider };
      if (searchConfig.tavily_api_key.trim()) {
        payload.tavily_api_key = searchConfig.tavily_api_key.trim();
      }
      const res = await fetch("/api/v1/settings/search_api_config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: JSON.stringify(payload) })
      });
      if (res.ok) {
        toast({ title: "联网搜索配置已保存", description: "Tavily API Key 已安全落库，数字员工联网能力即刻生效。" });
        setSearchKeyConfigured(true);
        setIsEditingKey(false);
        setSearchConfig((prev) => ({ ...prev, tavily_api_key: "" }));
      } else {
        const errData = await res.json().catch(() => ({}));
        toast({ title: "保存失败", description: errData.message || "联网搜索配置保存失败。", variant: "destructive" });
      }
    } catch {
      toast({ title: "错误", description: "连接超时或保存失败", variant: "destructive" });
    } finally {
      setSearchConfigLoading(false);
    }
  };
  const refreshConfigAndGateways = () => {
    fetch("/api/v1/settings/ai_config").then((res) => res.json()).then((data) => {
      if (data.success && data.value) {
        setConfig(sanitizeConfig(JSON.parse(data.value)));
      }
    });
    fetchGateways();
  };
  reactExports.useEffect(() => {
    fetch("/api/v1/settings/ai_config").then((res) => res.json()).then((data) => {
      if (data.success && data.value) {
        setConfig(sanitizeConfig(JSON.parse(data.value)));
      }
    }).catch(() => {
    });
    fetchGateways();
    fetchSearchConfig();
  }, []);
  reactExports.useEffect(() => {
    if (activeTab !== "assignments" || canManageAi || !canViewAi) return;
    fetchEmployeePreviews();
  }, [activeTab, canManageAi, canViewAi]);
  const handleSave = async (newConfig) => {
    const targetConfig = newConfig || config;
    setLoading(true);
    try {
      const response = await fetch("/api/v1/settings/ai_config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: JSON.stringify(targetConfig) })
      });
      if (response.ok) {
        toast({ title: "保存成功", description: "配置已更新。" });
        if (newConfig) setConfig(newConfig);
        return true;
      } else {
        const errData = await response.json().catch(() => ({}));
        toast({ title: "保存并同步失败", description: errData.message || "配置保存失败。", variant: "destructive" });
        return false;
      }
    } catch (err) {
      toast({ title: "错误", description: "连接超时或保存失败", variant: "destructive" });
      return false;
    } finally {
      setLoading(false);
    }
  };
  const openProviderModal = (provider) => {
    setEditingProvider(provider || {
      id: crypto.randomUUID(),
      name: "",
      type: "workers-ai",
      gatewayId: "",
      models: []
    });
    setIsModalOpen(true);
  };
  const saveProvider = async () => {
    if (!editingProvider) return;
    if (!editingProvider.name.trim()) {
      return;
    }
    const updatedProviders = config.providers.some((p) => p.id === editingProvider.id) ? config.providers.map((p) => p.id === editingProvider.id ? editingProvider : p) : [...config.providers, editingProvider];
    const newConfig = { ...config, providers: updatedProviders };
    const success = await handleSave(newConfig);
    if (success) {
      setIsModalOpen(false);
    }
  };
  const executeDeleteProvider = () => {
    if (!deleteTargetId) return;
    const id = deleteTargetId;
    const newConfig = { ...config, providers: config.providers.filter((p) => p.id !== id) };
    handleSave(newConfig);
    setDeleteConfirmOpen(false);
    setDeleteTargetId(null);
  };
  const deleteProvider = (id) => {
    setDeleteTargetId(id);
    setDeleteConfirmOpen(true);
  };
  const providerSaveDisabledReason = !editingProvider?.name.trim() ? "请先填写提供商名称。" : "";
  const executeDeleteGateway = async () => {
    if (!gatewayDeleteTargetId) return;
    setIsGatewayLoading(true);
    try {
      const res = await fetch(`/api/v1/settings/ai_gateways/${gatewayDeleteTargetId}`, {
        method: "DELETE"
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        toast({ title: "网关删除成功", description: "云端网关及本地供应商关联已被物理清除。" });
        refreshConfigAndGateways();
      } else {
        toast({ title: "删除失败", description: data.message || "操作失败", variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "错误", description: "连接网关服务超时", variant: "destructive" });
    } finally {
      setIsGatewayLoading(false);
      setGatewayDeleteConfirmOpen(false);
      setGatewayDeleteTargetId(null);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        AdminPillTabs,
        {
          value: activeTab,
          onChange: setActiveTab,
          className: "dark:bg-slate-800",
          items: [
            { value: "providers", label: "提供商管理" },
            { value: "assignments", label: "数字员工" },
            { value: "docs", label: "开发者文档" }
          ]
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 355,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          className: "flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-2xl shadow-md text-xs cursor-pointer hover:bg-slate-850 transition-all select-none self-end md:self-auto",
          title: "系统将自动从 wrangler.toml 读取 CF_ACCOUNT_ID 进行网关自动化操作",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Cpu, { size: 12 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 372,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 371,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-extrabold tracking-wide", children: "CF Runtime 注入" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 375,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "success", children: "已连接" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 376,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 374,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-4 w-[1px] bg-slate-800 mx-1" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 378,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Switch,
              {
                checked: config.enabled,
                disabled: !canManageAi,
                onCheckedChange: (val) => handleSave({ ...config, enabled: val }),
                className: "scale-75 origin-right"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 379,
                columnNumber: 11
              },
              void 0
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 367,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 354,
      columnNumber: 7
    }, void 0),
    !loadingPermissions && canViewAi && !canManageAi ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号处于 AI 设置只读模式，可以查看提供商、数字员工与联网搜索配置，但不能保存或执行变更。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 389,
      columnNumber: 9
    }, void 0) : null,
    activeTab === "providers" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: `border-none shadow-sm overflow-hidden rounded-2xl ${!canManageAi ? "pointer-events-none opacity-70" : ""}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "flex flex-row items-center justify-between bg-white dark:bg-slate-900 border-b", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-lg", children: "已挂载的 API 提供商" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 398,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => {
            fetchGateways();
            setIsGatewayModalOpen(true);
          }, size: "sm", variant: "outline", disabled: !canManageAi, className: "gap-2 rounded-lg border-blue-200 text-blue-600 hover:bg-blue-50", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings2, { size: 16 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 401,
              columnNumber: 17
            }, void 0),
            " 网关管理"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 400,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => openProviderModal(), size: "sm", disabled: !canManageAi, className: "gap-2 rounded-lg", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 404,
              columnNumber: 17
            }, void 0),
            " 新增供应商"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 403,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 399,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 397,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table$1, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "名称" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 412,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "类型" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 413,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "网关 / 地址" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 414,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: "模型数量" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 415,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-right", children: "操作" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 416,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 411,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 410,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: config.providers.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 5, className: "h-32 text-center text-slate-400", children: "暂无数据，请点击上方按钮添加。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 422,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 421,
          columnNumber: 21
        }, void 0) : config.providers.map((p) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "font-medium", children: p.name }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 426,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: p.type === "workers-ai" ? "default" : p.type === "openai" ? "outline" : "secondary", children: p.type.toUpperCase() }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 428,
            columnNumber: 26
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 427,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "max-w-[200px] truncate text-xs text-slate-500", children: p.type === "custom" ? p.baseUrl : p.gatewayId }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 432,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: p.models.length }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 435,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right flex justify-end gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", onClick: () => openProviderModal(p), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { size: 14 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 437,
              columnNumber: 96
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 437,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", onClick: () => deleteProvider(p.id), className: "text-red-500", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 438,
              columnNumber: 121
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 438,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 436,
            columnNumber: 23
          }, void 0)
        ] }, p.id, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 425,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 419,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 409,
        columnNumber: 14
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 408,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 396,
      columnNumber: 9
    }, void 0),
    activeTab === "providers" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: `border-none shadow-sm overflow-hidden rounded-2xl ${!canManageAi ? "pointer-events-none opacity-70" : ""}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "flex flex-row items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-emerald-100/80 dark:border-emerald-900/30", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-500/20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { size: 16, className: "text-white" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 454,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 453,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-base", children: "全球实时联网搜索增强（Web Search RAG Server）" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 457,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5", children: "配置 Tavily API Key 后，所有 AI 数字员工默认获得实时联网搜索工具能力" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 458,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 456,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 452,
          columnNumber: 13
        }, void 0),
        searchKeyConfigured && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1 text-[12px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-full", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CheckCircle2, { size: 11 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 465,
            columnNumber: 17
          }, void 0),
          " API Key 已配置"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 464,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 451,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-6 space-y-5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-3 p-3.5 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { size: 15, className: "text-blue-500 shrink-0 mt-0.5" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 472,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-slate-700 dark:text-slate-300", children: "两层成本防线：" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 474,
              columnNumber: 17
            }, void 0),
            "系统优先撞击 Cloudflare KV 全球边缘缓存（24h TTL），命中则 0 费用 5ms 响应； 未命中时调用 Tavily 获取纯净摘要，结果自动回写边缘节点。单次请求限 5 条摘要， 有效控制 Token 账单并守住 CF 免费版 CPU 预算。"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 473,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 471,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider", children: "搜索服务商" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 484,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "select",
              {
                id: "search-provider-select",
                className: "w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white dark:bg-slate-900",
                value: searchConfig.provider,
                onChange: (e) => setSearchConfig((prev) => ({ ...prev, provider: e.target.value })),
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "tavily", children: "Tavily（推荐 · 大模型优化搜索）" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 493,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 487,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 483,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { size: 11 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 500,
                columnNumber: 19
              }, void 0),
              " Tavily API Key",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "a",
                {
                  href: "https://app.tavily.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-[9px] text-blue-500 hover:underline font-normal normal-case tracking-normal",
                  children: "前往获取免费 Key →"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 501,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 499,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                id: "tavily-api-key-input",
                type: "password",
                placeholder: searchKeyConfigured ? "已配置，输入新 Key 可覆盖更新..." : "tvly-xxxxxxxxxxxxxxxxxxxxxxxx",
                value: searchKeyConfigured && !isEditingKey ? "••••••••••••••••••••••••••••••••" : searchConfig.tavily_api_key,
                onChange: (e) => setSearchConfig((prev) => ({ ...prev, tavily_api_key: e.target.value })),
                onFocus: () => {
                  if (searchKeyConfigured && !isEditingKey) {
                    setIsEditingKey(true);
                    setSearchConfig((prev) => ({ ...prev, tavily_api_key: "" }));
                  }
                },
                onBlur: () => {
                  if (!searchConfig.tavily_api_key.trim()) {
                    setIsEditingKey(false);
                  }
                },
                className: "font-mono text-xs"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 510,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 498,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 481,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            id: "save-search-config-btn",
            onClick: handleSaveSearchConfig,
            disabled: searchConfigLoading || !searchConfig.tavily_api_key.trim() && !searchKeyConfigured,
            className: "gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/20 disabled:opacity-50",
            size: "sm",
            children: [
              searchConfigLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { size: 14, className: "animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 541,
                columnNumber: 40
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 541,
                columnNumber: 91
              }, void 0),
              "保存联网搜索配置"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 534,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 533,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 469,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 450,
      columnNumber: 9
    }, void 0),
    activeTab === "assignments" && (canManageAi ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "scale-in-center space-y-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DigitalEmployees, { providers: config.providers }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 552,
      columnNumber: 13
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 551,
      columnNumber: 11
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-none shadow-sm overflow-hidden rounded-2xl", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "border-b bg-slate-50/80", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-lg", children: "数字员工工作台" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 557,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm text-slate-500", children: "当前账号为查看模式，仅展示已配置的数字员工与能力概览；聊天、编辑、测试和会话管理仍需 `settings.ai` 管理权限。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 558,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 556,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "space-y-6 p-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-slate-200 bg-white p-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500", children: "AI 提供商" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 565,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-2xl font-semibold text-slate-900", children: config.providers.length }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 566,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 564,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-slate-200 bg-white p-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500", children: "AI 网关" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 569,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-2xl font-semibold text-slate-900", children: gateways.length }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 570,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 568,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-slate-200 bg-white p-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500", children: "数字员工" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 573,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-2xl font-semibold text-slate-900", children: employeePreviews.length }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 574,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 572,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 563,
          columnNumber: 15
        }, void 0),
        loadingEmployeePreviews ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-12 text-sm text-slate-500", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "mr-2 animate-spin", size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 580,
            columnNumber: 19
          }, void 0),
          "正在加载数字员工概览..."
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 579,
          columnNumber: 17
        }, void 0) : employeePreviews.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 md:grid-cols-2", children: employeePreviews.map((employee) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-sm font-semibold text-slate-900", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: employee.avatar || "🤖" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 590,
                  columnNumber: 29
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "truncate", children: employee.name }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 591,
                  columnNumber: 29
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 589,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1 text-xs leading-6 text-slate-500", children: employee.description || "未设置岗位说明" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 593,
                columnNumber: 27
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 588,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `rounded-full px-2 py-0.5 text-[12px] font-medium ${employee.isActive === false ? "bg-slate-100 text-slate-500" : "bg-emerald-100 text-emerald-700"}`, children: employee.isActive === false ? "停用" : "启用" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 597,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 587,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-slate-50 px-3 py-2", children: [
              "模型数量：",
              Array.isArray(employee.loadedModels) && employee.loadedModels.length > 0 ? employee.loadedModels.length : employee.masterModelId ? 1 : 0
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 602,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-slate-50 px-3 py-2", children: [
              "技能数量：",
              Array.isArray(employee.skills) ? employee.skills.length : 0
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 605,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 601,
            columnNumber: 23
          }, void 0)
        ] }, employee.id, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 586,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 584,
          columnNumber: 17
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-12 text-center text-sm text-slate-500", children: "当前尚未配置数字员工。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 613,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 562,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 555,
      columnNumber: 11
    }, void 0)),
    activeTab === "docs" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DocsView, {}, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 622,
      columnNumber: 32
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isModalOpen, onOpenChange: (open) => {
      if (!canManageAi && open) return;
      setIsModalOpen(open);
    }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-2xl sm:rounded-3xl max-h-[90vh] flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { className: "shrink-0 pb-2 border-b", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: editingProvider?.name ? `编辑: ${editingProvider.name}` : "添加新提供商" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 631,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 630,
        columnNumber: 11
      }, void 0),
      editingProvider && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 overflow-y-auto py-4 pr-1 space-y-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "供应商名称", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              placeholder: "例如: 阿里云 Qwen",
              value: editingProvider.name,
              onChange: (e) => setEditingProvider({ ...editingProvider, name: e.target.value })
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 638,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 637,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "连接类型", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "select",
            {
              className: "w-full h-10 rounded-xl border px-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white",
              value: editingProvider.type,
              onChange: (e) => setEditingProvider({ ...editingProvider, type: e.target.value }),
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "workers-ai", children: "Workers AI (CF 原生)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 650,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "openai", children: "OpenAI (官方/中转)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 651,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "gemini", children: "Gemini (谷歌/自建)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 652,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "custom", children: "Custom (通用模式)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 653,
                  columnNumber: 21
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 645,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 644,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 636,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 bg-slate-50 dark:bg-slate-800/20 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 font-bold text-xs text-blue-600 uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 662,
                columnNumber: 23
              }, void 0),
              " 连接链路配置"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 661,
              columnNumber: 21
            }, void 0),
            editingProvider.type !== "workers-ai" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 bg-slate-200 dark:bg-slate-700 p-1 rounded-lg", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => setEditingProvider({ ...editingProvider, routingMode: "standard" }),
                  className: `px-2 py-0.5 text-[12px] rounded ${!editingProvider.routingMode || editingProvider.routingMode === "standard" ? "bg-white shadow-sm text-blue-600" : "text-slate-500"}`,
                  children: "标准模式"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 666,
                  columnNumber: 25
                },
                void 0
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => setEditingProvider({ ...editingProvider, routingMode: "manual" }),
                  className: `px-2 py-0.5 text-[12px] rounded ${editingProvider.routingMode === "manual" ? "bg-white shadow-sm text-blue-600" : "text-slate-500"}`,
                  children: "原生地址"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 670,
                  columnNumber: 25
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 665,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 660,
            columnNumber: 19
          }, void 0),
          editingProvider.type !== "workers-ai" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            AdminSettingsField,
            {
              label: editingProvider.routingMode === "manual" ? "最终请求地址 (Full Endpoint)" : "API 基地址 (Base URL)",
              hint: editingProvider.type === "gemini" ? "💡 若留空，将自动使用 Gemini 默认 OpenAI 兼容端点：https://generativelanguage.googleapis.com/v1beta/openai" : editingProvider.routingMode === "manual" ? "⚠️ 系统将直接、逐字请求此完整地址，不进行任何路径拼接。" : "系统将基于此地址自动拼接 /chat/completions (兼容 v1)。",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  placeholder: editingProvider.type === "gemini" ? "https://generativelanguage.googleapis.com/v1beta/openai (默认)" : editingProvider.routingMode === "manual" ? "https://ai.gitee.com/v1/chat/completions" : "https://ai.gitee.com/v1",
                  value: editingProvider.baseUrl || "",
                  onChange: (e) => setEditingProvider({ ...editingProvider, baseUrl: e.target.value })
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 689,
                  columnNumber: 23
                },
                void 0
              )
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 679,
              columnNumber: 21
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            AdminSettingsField,
            {
              label: "Cloudflare AI Gateway ID (对该链路进行审计/中转)",
              hint: "💡 推荐绑定网关中转以防密钥泄露，且可在 Cloudflare 后台实时观察完整链路耗时与计费日志。",
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setGatewayInputId("");
                      setIsQuickCreateOpen(true);
                    },
                    className: "text-[12px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-all",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 10 }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                        lineNumber: 713,
                        columnNumber: 25
                      }, void 0),
                      " 快速新建网关"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                    lineNumber: 708,
                    columnNumber: 23
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 707,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "select",
                  {
                    className: "w-full h-10 rounded-xl border px-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white",
                    value: editingProvider.gatewayId || "",
                    onChange: (e) => setEditingProvider({ ...editingProvider, gatewayId: e.target.value }),
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "", children: "不使用网关中转 / 审计 (直接请求 API)" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                        lineNumber: 721,
                        columnNumber: 23
                      }, void 0),
                      gateways.map((gw) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: gw.id, children: [
                        gw.id,
                        " (",
                        gw.collect_logs ? "保存日志" : "无日志",
                        ")"
                      ] }, gw.id, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                        lineNumber: 723,
                        columnNumber: 25
                      }, void 0))
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                    lineNumber: 716,
                    columnNumber: 21
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 703,
              columnNumber: 19
            },
            void 0
          ),
          (editingProvider.type === "openai" || editingProvider.type === "gemini" || editingProvider.type === "custom") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AdminSettingsField, { label: "接口密钥 (API Key)", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              type: "password",
              placeholder: "Bearer Token...",
              value: editingProvider.apiKey || "",
              onChange: (e) => setEditingProvider({ ...editingProvider, apiKey: e.target.value })
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 730,
              columnNumber: 23
            },
            void 0
          ) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 729,
            columnNumber: 21
          }, void 0),
          (editingProvider.baseUrl || editingProvider.type === "gemini") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 p-2 bg-white dark:bg-slate-900 rounded-lg border border-dashed text-[12px] text-slate-500 font-mono break-all animate-in fade-in zoom-in-95 duration-200", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-blue-500 font-bold", children: "最终请求路径预览:" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 741,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 741,
              columnNumber: 81
            }, void 0),
            (() => {
              const base = (editingProvider.baseUrl || "").trim() || (editingProvider.type === "gemini" ? "https://generativelanguage.googleapis.com/v1beta/openai" : "");
              if (!base) return "";
              return editingProvider.routingMode === "manual" ? base : `${base.replace(/\/+$/, "")}${base.includes("/v1") ? "/chat/completions" : "/v1/chat/completions"}`;
            })()
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 740,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 659,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 658,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between border-t pt-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "font-bold", children: "模型列表矩阵" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 756,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => {
              setEditingProvider({
                ...editingProvider,
                models: [...editingProvider.models, { id: "", name: "", type: "general", types: ["general"], description: "" }]
              });
            }, className: "h-8 rounded-lg gap-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 14 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 763,
                columnNumber: 21
              }, void 0),
              " 快捷添加"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 757,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 755,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-h-[300px] overflow-y-auto space-y-3 pr-2 border border-dashed rounded-2xl p-2 bg-slate-50/50", children: editingProvider.models.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-6 text-xs text-slate-400", children: "暂无挂载模型，请点击右上方快捷添加。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 769,
            columnNumber: 21
          }, void 0) : editingProvider.models.map((m, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 rounded-2xl space-y-3 shadow-sm relative group transition-all", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-12 gap-2 items-center", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  placeholder: "模型 ID (如 gpt-4o)",
                  className: "h-9 text-xs",
                  value: m.id,
                  onChange: (e) => {
                    const models = [...editingProvider.models];
                    models[i].id = e.target.value;
                    setEditingProvider({ ...editingProvider, models });
                  }
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 775,
                  columnNumber: 27
                },
                void 0
              ) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 774,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  placeholder: "显示名称 (如 GPT-4o 旗舰)",
                  className: "h-9 text-xs",
                  value: m.name,
                  onChange: (e) => {
                    const models = [...editingProvider.models];
                    models[i].name = e.target.value;
                    setEditingProvider({ ...editingProvider, models });
                  }
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 787,
                  columnNumber: 27
                },
                void 0
              ) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 786,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                MultiSelect,
                {
                  value: m.types || [m.type || "general"],
                  options: TYPE_OPTIONS,
                  onChange: (newTypes) => {
                    const models = [...editingProvider.models];
                    models[i].types = newTypes;
                    models[i].type = newTypes[0] || "general";
                    setEditingProvider({ ...editingProvider, models });
                  }
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 799,
                  columnNumber: 27
                },
                void 0
              ) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 798,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-1 flex justify-end", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Button,
                {
                  variant: "ghost",
                  className: "h-9 w-9 text-red-500 hover:text-white hover:bg-red-500 rounded-xl transition-all flex items-center justify-center p-0 shrink-0",
                  title: "移除该模型",
                  onClick: () => {
                    setEditingProvider({
                      ...editingProvider,
                      models: editingProvider.models.filter((_, idx) => idx !== i)
                    });
                  },
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 16 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                    lineNumber: 822,
                    columnNumber: 29
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 811,
                  columnNumber: 27
                },
                void 0
              ) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 810,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 773,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "textarea",
              {
                placeholder: "填写该模型的额外描述信息 (如支持的最大 token、上下文长度或推荐用途)...",
                className: "w-full h-14 text-[11px] rounded-xl border border-slate-100 dark:border-slate-800 p-2 bg-slate-50/30 dark:bg-slate-900/50 outline-none focus:ring-2 focus:ring-blue-500/50 resize-none leading-relaxed transition-all",
                value: m.description || "",
                onChange: (e) => {
                  const models = [...editingProvider.models];
                  models[i].description = e.target.value;
                  setEditingProvider({ ...editingProvider, models });
                }
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 829,
                columnNumber: 25
              },
              void 0
            ) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 828,
              columnNumber: 23
            }, void 0)
          ] }, i, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 771,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 767,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 754,
          columnNumber: 15
        }, void 0),
        providerSaveDisabledReason && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600", children: providerSaveDisabledReason }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 845,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 635,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        AdminDialogActions,
        {
          onCancel: () => setIsModalOpen(false),
          onConfirm: saveProvider,
          cancelText: "取消",
          confirmText: "确认部署",
          confirmLoading: loading,
          confirmDisabled: loading || !!providerSaveDisabledReason,
          className: "shrink-0 mt-auto pt-2",
          confirmClassName: "shadow-lg shadow-blue-500/20"
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 852,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 629,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 625,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isGatewayModalOpen, onOpenChange: setIsGatewayModalOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-3xl sm:rounded-3xl max-h-[90vh] flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { className: "shrink-0 pb-2 border-b", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings2, { size: 20, className: "text-blue-600" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 870,
          columnNumber: 15
        }, void 0),
        " Cloudflare AI 网关管理中心"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 869,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 868,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 overflow-y-auto py-4 space-y-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h5", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "新建云端网关" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 877,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                placeholder: "网关 ID (例如: main-gateway，限英文小写/数字/连字符)",
                className: "h-10 text-xs flex-1 bg-white",
                value: gatewayInputId,
                onChange: (e) => setGatewayInputId(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 879,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                disabled: isGatewayLoading || !gatewayInputId,
                onClick: async () => {
                  setIsGatewayLoading(true);
                  try {
                    const res = await fetch("/api/v1/settings/ai_gateways", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ id: gatewayInputId })
                    });
                    const data = await res.json().catch(() => ({}));
                    if (res.ok) {
                      toast({ title: "创建成功", description: `网关 '${gatewayInputId}' 已在 Cloudflare 成功部署。` });
                      setGatewayInputId("");
                      fetchGateways();
                    } else {
                      toast({ title: "创建失败", description: data.message || "网关创建失败", variant: "destructive" });
                    }
                  } catch (e) {
                    toast({ title: "错误", description: "请求超时", variant: "destructive" });
                  } finally {
                    setIsGatewayLoading(false);
                  }
                },
                className: "h-10 px-6 bg-blue-600 text-white rounded-xl shadow-md shrink-0",
                children: [
                  isGatewayLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { className: "animate-spin mr-2", size: 14 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                    lineNumber: 911,
                    columnNumber: 39
                  }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 14, className: "mr-1" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                    lineNumber: 911,
                    columnNumber: 95
                  }, void 0),
                  "一键创建网关"
                ]
              },
              void 0,
              true,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 885,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 878,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 876,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h5", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: [
            "Cloudflare 线上网关清单 (",
            gateways.length,
            ")"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 919,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border rounded-2xl overflow-hidden bg-white", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table$1, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-xs font-bold py-3", children: "网关 ID" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 924,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-xs font-bold py-3", children: "关联提供商与挂载模型" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 925,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-xs font-bold py-3", children: "日志审计" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 926,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { className: "text-xs font-bold py-3 text-right", children: "操作" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 927,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 923,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 922,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: gateways.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { colSpan: 4, className: "h-32 text-center text-slate-400 text-xs", children: "云端无可用网关。请在上方输入一键创建。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 933,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 932,
              columnNumber: 23
            }, void 0) : gateways.map((gw) => {
              const linkedProviders = config.providers.filter((p) => p.gatewayId === gw.id);
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { className: "hover:bg-slate-50/50", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "font-mono text-xs font-semibold text-blue-600", children: gw.id }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 941,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-xs max-w-[280px]", children: linkedProviders.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-slate-400", children: "闲置无关联" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 944,
                  columnNumber: 31
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: linkedProviders.map((lp) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-slate-700 font-medium", children: [
                  "🔗 ",
                  lp.name,
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 block pl-3", children: [
                    "已挂载: ",
                    lp.models.length > 0 ? lp.models.map((m) => m.name || m.id).join(", ") : "无模型"
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                    lineNumber: 950,
                    columnNumber: 37
                  }, void 0)
                ] }, lp.id, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 948,
                  columnNumber: 35
                }, void 0)) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 946,
                  columnNumber: 31
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 942,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: gw.collect_logs ? "success" : "secondary", children: gw.collect_logs ? "已开通" : "未开启" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 959,
                  columnNumber: 29
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 958,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "h-8 text-red-500 hover:text-white hover:bg-red-500 rounded-lg transition-all",
                    onClick: () => {
                      setGatewayDeleteTargetId(gw.id);
                      setGatewayDeleteConfirmOpen(true);
                    },
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 14 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                      lineNumber: 973,
                      columnNumber: 31
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                    lineNumber: 964,
                    columnNumber: 29
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                  lineNumber: 963,
                  columnNumber: 27
                }, void 0)
              ] }, gw.id, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 940,
                columnNumber: 25
              }, void 0);
            }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 930,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 921,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 920,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 918,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 874,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "shrink-0 pt-2 border-t mt-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", onClick: () => setIsGatewayModalOpen(false), className: "px-6", children: "关闭管理中心" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 986,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 985,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 867,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 866,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isQuickCreateOpen, onOpenChange: setIsQuickCreateOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md sm:rounded-3xl", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 18, className: "text-blue-600" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 996,
          columnNumber: 15
        }, void 0),
        " 快速新建 AI 网关"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 995,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 994,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "py-4 space-y-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        AdminSettingsField,
        {
          label: "网关唯一标识 ID (英文小写或连字符)",
          hint: "系统将直接调用 Cloudflare 官方 API 一键为您在云端部署该网关并开启高吞吐量日志审计。",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              placeholder: "例如: test-gateway-openai",
              value: gatewayInputId,
              onChange: (e) => setGatewayInputId(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
              lineNumber: 1004,
              columnNumber: 15
            },
            void 0
          )
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 1e3,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 999,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        AdminDialogActions,
        {
          onCancel: () => setIsQuickCreateOpen(false),
          onConfirm: async () => {
            setIsGatewayLoading(true);
            try {
              const res = await fetch("/api/v1/settings/ai_gateways", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: gatewayInputId })
              });
              const data = await res.json().catch(() => ({}));
              if (res.ok) {
                toast({ title: "网关创建成功", description: `已在 Cloudflare 成功开通网关 '${gatewayInputId}'。` });
                fetchGateways();
                if (editingProvider) {
                  setEditingProvider({ ...editingProvider, gatewayId: gatewayInputId });
                }
                setIsQuickCreateOpen(false);
              } else {
                toast({ title: "网关创建失败", description: data.message || "请检查 Cloudflare 权限。", variant: "destructive" });
              }
            } catch (e) {
              toast({ title: "错误", description: "连接网关服务超时", variant: "destructive" });
            } finally {
              setIsGatewayLoading(false);
            }
          },
          confirmText: "立即在云端创建",
          confirmLoading: isGatewayLoading,
          confirmDisabled: isGatewayLoading || !gatewayInputId
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 1011,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 993,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 992,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: deleteConfirmOpen,
        onOpenChange: setDeleteConfirmOpen,
        title: "移除 AI 提供商",
        description: "确定要删除该模型提供商吗？删除后，所有基于该供应商的模型分配（包括文本、绘图引擎及场景映射）将立即失效且不可找回。",
        onConfirm: executeDeleteProvider,
        variant: "destructive",
        confirmText: "确认彻底删除",
        isLoading: loading
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1045,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: gatewayDeleteConfirmOpen,
        onOpenChange: setGatewayDeleteConfirmOpen,
        title: "物理清除 Cloudflare 网关",
        description: `确定要彻底删除网关 '${gatewayDeleteTargetId || ""}' 吗？
删除将调用 Cloudflare API 物理清除云端网关，并且所有本地绑定了该网关的供应商关联会自动解绑自愈！`,
        onConfirm: executeDeleteGateway,
        variant: "destructive",
        confirmText: "确认物理清除",
        isLoading: isGatewayLoading
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1056,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
    lineNumber: 352,
    columnNumber: 5
  }, void 0);
};
const TYPE_OPTIONS = [
  { value: "general", label: "通用模型", color: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/50" },
  { value: "text", label: "文本模型", color: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50" },
  { value: "image", label: "图片模型", color: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900/50" },
  { value: "audio", label: "语音模型", color: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50" },
  { value: "video", label: "视频模型", color: "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/50" },
  { value: "other", label: "其它模型", color: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900/40 dark:text-slate-400 dark:border-slate-800" }
];
const MultiSelect = ({ value, onChange, options, placeholder = "选择类型" }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const toggleOption = (optVal) => {
    if (value.includes(optVal)) {
      const filtered = value.filter((v) => v !== optVal);
      onChange(filtered.length > 0 ? filtered : ["general"]);
    } else {
      onChange([...value, optVal]);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full min-h-[36px] py-1 px-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all outline-none cursor-pointer flex flex-wrap gap-1 items-center justify-between",
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1 items-center", children: value.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-400 pl-1", children: placeholder }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 1106,
            columnNumber: 13
          }, void 0) : value.map((val) => {
            const opt = options.find((o) => o.value === val);
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "span",
              {
                className: `px-2 py-0.5 rounded-lg text-[12px] font-bold border leading-tight transition-all scale-in-center ${opt?.color || "bg-slate-100 text-slate-700"}`,
                children: opt?.label || val
              },
              val,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 1111,
                columnNumber: 17
              },
              void 0
            );
          }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 1104,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-slate-400 dark:text-slate-600 text-[9px] pr-1 select-none", children: "▼" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 1121,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1100,
        columnNumber: 7
      },
      void 0
    ),
    isOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `fixed inset-0 ${UI_LAYER.local.backdrop}`, onClick: () => setIsOpen(false) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1126,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `absolute left-0 right-0 mt-1 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl ${UI_LAYER.local.panel} py-1 max-h-[220px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150`, children: options.map((opt) => {
        const selected = value.includes(opt.value);
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            onClick: () => toggleOption(opt.value),
            className: `flex items-center justify-between px-3 py-2 text-xs cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-900/50 ${selected ? "font-bold text-blue-600 dark:text-blue-400 bg-blue-50/20" : "text-slate-600 dark:text-slate-400"}`,
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: opt.label }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 1136,
                columnNumber: 19
              }, void 0),
              selected && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-blue-500 font-bold text-[12px]", children: "✓" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
                lineNumber: 1137,
                columnNumber: 32
              }, void 0)
            ]
          },
          opt.value,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
            lineNumber: 1131,
            columnNumber: 17
          },
          void 0
        );
      }) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1127,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 1125,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
    lineNumber: 1099,
    columnNumber: 5
  }, void 0);
};
const Badge = ({ children, variant = "default" }) => {
  const styles = {
    default: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    outline: "border border-slate-200 text-slate-600",
    secondary: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `px-2 py-0.5 rounded-full text-[12px] font-bold ${styles[variant]}`, children }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
    lineNumber: 1156,
    columnNumber: 10
  }, void 0);
};
const DocsView = () => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border-none shadow-sm overflow-hidden rounded-2xl", children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardHeader, { className: "bg-slate-50 dark:bg-slate-800/20 border-b", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardTitle, { className: "text-lg flex items-center gap-2", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Code2, { size: 18, className: "text-green-500" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 1161,
      columnNumber: 126
    }, void 0),
    " API 调用指南"
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
    lineNumber: 1161,
    columnNumber: 71
  }, void 0) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
    lineNumber: 1161,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "flex items-center gap-2 font-bold text-sm mb-3 text-slate-700", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CheckCircle2, { size: 16, className: "text-green-500" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 1166,
          columnNumber: 15
        }, void 0),
        " 用户侧接口 (Public Stream)"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1165,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "bg-slate-900 text-slate-300 p-5 rounded-2xl text-[11px] overflow-x-auto leading-relaxed border border-slate-800", children: `// 请求 /api/v1/p/ai/chat
fetch('/api/v1/p/ai/chat', {
  method: 'POST',
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'hello' }],
    role: 'frontend' // 后端将使用当前公开对话链路的默认文本模型
  })
});` }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1168,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 1164,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-2xl flex gap-3 text-amber-800 dark:text-amber-400", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertCircle, { size: 18, className: "shrink-0" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1180,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs leading-relaxed", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "提示：" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
          lineNumber: 1182,
          columnNumber: 15
        }, void 0),
        " 自定义驱动同样支持流式输出。只要供应商符合 OpenAI 基准协议，系统将自动透传所有数据块并在前端流式渲染。"
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
        lineNumber: 1181,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
      lineNumber: 1179,
      columnNumber: 11
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
    lineNumber: 1163,
    columnNumber: 8
  }, void 0) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
    lineNumber: 1162,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AiSettings.tsx",
  lineNumber: 1160,
  columnNumber: 3
}, void 0);
const $$Ai = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Ai;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["settings.ai.view", "settings.ai", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "AI 网关配置" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AiSettings", AiSettings, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/AiSettings", "client:component-export": "AiSettings" })} ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/settings/ai.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/settings/ai.astro";
const $$url = "/admin/settings/ai";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Ai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
