globalThis.process ??= {};
globalThis.process.env ??= {};
import { u as useToast, h as useAdminPermissions, j as jsxDevRuntimeExports, B as Button, I as Input, L as Loader2, T as Trash2, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, D as DialogFooter } from "./useAdminPermissions_8aANvvWm.mjs";
import { r as reactExports } from "./worker-entry_BAuVhjGk.mjs";
import { C as Card } from "./Card_DzPhX3RV.mjs";
import { B as Badge } from "./Badge_CKfcU1_S.mjs";
import { L as Label } from "./Label_zq5CgPId.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./Tabs_B4bV57cE.mjs";
import { S as Switch } from "./Switch_PL3bAMIj.mjs";
import { S as Search, P as Play, A as AlertTriangle, a as ChevronRight, g as CheckCircle2, c as ConfirmDialog } from "./chat-workspace_BThR_WE3.mjs";
import { c as createAgentSessionRecord, s as syncAgentSessionRemote, w as writeStoredSessionId, u as updateAgentSessionRemote, d as deleteAgentSessionRemote, r as readStoredSessionId, L as Layers, S as Sparkles, a as Link2, b as Activity, e as PenLine, C as ChevronLeft, f as EyeOff, E as Eye, g as EmployeeTaskDialog } from "./agent-session-utils_DpT6INAb.mjs";
import { P as Plus, S as Settings, K as Key } from "./settings_CgFC4cr_.mjs";
const defaultDraftTitle = () => `新任务 ${(/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
const useLocalAgentSessions = ({
  agentId,
  sessionStorageKey,
  sessionsStorageKey,
  buildTitle,
  logPrefix,
  onDeleteSession
}) => {
  const [sessions, setSessions] = reactExports.useState([]);
  const [loadingSessions, setLoadingSessions] = reactExports.useState(false);
  const [sessionId, setSessionId] = reactExports.useState("");
  const syncedSessionIdsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const sessionsRef = reactExports.useRef([]);
  const sessionIdRef = reactExports.useRef("");
  const buildTitleRef = reactExports.useRef(buildTitle);
  const onDeleteSessionRef = reactExports.useRef(onDeleteSession);
  sessionsRef.current = sessions;
  sessionIdRef.current = sessionId;
  buildTitleRef.current = buildTitle;
  onDeleteSessionRef.current = onDeleteSession;
  const sortSessions = reactExports.useCallback((items) => [...items].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()), []);
  const persistSessions = reactExports.useCallback((items) => {
    const sortedSessions = sortSessions(items);
    setSessions(sortedSessions);
    try {
      localStorage.setItem(sessionsStorageKey, JSON.stringify(sortedSessions));
    } catch {
    }
    return sortedSessions;
  }, [sessionsStorageKey, sortSessions]);
  const loadSessions = reactExports.useCallback(() => {
    try {
      const raw = localStorage.getItem(sessionsStorageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      return sortSessions(parsed.map((item) => ({
        id: String(item?.id || ""),
        agentId: String(item?.agentId || agentId || ""),
        title: String(item?.title || "未命名任务"),
        summary: String(item?.summary || ""),
        createdAt: item?.createdAt ? new Date(item.createdAt) : /* @__PURE__ */ new Date(),
        updatedAt: item?.updatedAt ? new Date(item.updatedAt) : /* @__PURE__ */ new Date()
      })).filter((item) => item.id));
    } catch {
      return [];
    }
  }, [agentId, sessionsStorageKey, sortSessions]);
  const createSessionRecord = reactExports.useCallback((customTitle, nextSessionId) => createAgentSessionRecord({
    agentId,
    sessionId: nextSessionId,
    customTitle,
    buildTitle: (input, fallback) => buildTitleRef.current(input, fallback),
    fallbackTitle: defaultDraftTitle()
  }), [agentId]);
  const syncRemoteSession = reactExports.useCallback(async (session) => {
    if (!session.id || !session.agentId || syncedSessionIdsRef.current.has(session.id)) {
      return;
    }
    syncedSessionIdsRef.current.add(session.id);
    await syncAgentSessionRemote(session, { logPrefix });
  }, [logPrefix]);
  const persistSession = reactExports.useCallback(async (session, baseSessions) => {
    const sourceSessions = Array.isArray(baseSessions) ? baseSessions : sessionsRef.current;
    persistSessions([session, ...sourceSessions.filter((item) => item.id !== session.id)]);
    setSessionId(session.id);
    writeStoredSessionId(sessionStorageKey, session.id);
    await syncRemoteSession(session);
    return session.id;
  }, [persistSessions, sessionStorageKey, syncRemoteSession]);
  const createSession = reactExports.useCallback(async (customTitle, options) => {
    if (!agentId) return "";
    const nextSession = createSessionRecord(customTitle);
    setSessionId(nextSession.id);
    if (options?.persist) {
      return persistSession(nextSession, options.baseSessions);
    }
    writeStoredSessionId(sessionStorageKey, nextSession.id);
    return nextSession.id;
  }, [agentId, createSessionRecord, persistSession, sessionStorageKey]);
  const updateSession = reactExports.useCallback(async (targetSessionId, updater) => {
    if (!targetSessionId) return null;
    const currentSession = sessionsRef.current.find((item) => item.id === targetSessionId);
    if (!currentSession) return null;
    const nextSession = {
      ...currentSession,
      ...updater,
      updatedAt: updater.updatedAt || /* @__PURE__ */ new Date()
    };
    persistSessions(sessionsRef.current.map((item) => item.id === targetSessionId ? nextSession : item));
    await updateAgentSessionRemote(
      agentId,
      targetSessionId,
      {
        title: nextSession.title,
        summary: nextSession.summary
      },
      { logPrefix }
    );
    return nextSession;
  }, [agentId, logPrefix, persistSessions]);
  const ensureSessionPersisted = reactExports.useCallback(async (customTitle) => {
    if (!agentId) return "";
    if (sessionIdRef.current) {
      const existingSession = sessionsRef.current.find((item) => item.id === sessionIdRef.current);
      if (existingSession) {
        if (customTitle) {
          const nextTitle = buildTitleRef.current(customTitle, existingSession.title);
          if (nextTitle && nextTitle !== existingSession.title) {
            await updateSession(sessionIdRef.current, {
              title: nextTitle,
              updatedAt: /* @__PURE__ */ new Date()
            });
          }
        }
        return sessionIdRef.current;
      }
    }
    const draftSession = createSessionRecord(customTitle, sessionIdRef.current || void 0);
    return persistSession(draftSession);
  }, [agentId, createSessionRecord, persistSession, updateSession]);
  const renameSession = reactExports.useCallback(async (targetSessionId, title) => {
    const nextTitle = buildTitleRef.current(title);
    if (!nextTitle) return null;
    return updateSession(targetSessionId, {
      title: nextTitle,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }, [updateSession]);
  const deleteSession = reactExports.useCallback(async (targetSessionId) => {
    const targetSession = sessionsRef.current.find((item) => item.id === targetSessionId);
    if (!targetSession) return null;
    const remainingSessions = sessionsRef.current.filter((item) => item.id !== targetSessionId);
    persistSessions(remainingSessions);
    await onDeleteSessionRef.current?.(targetSessionId);
    if (sessionIdRef.current === targetSessionId) {
      if (remainingSessions.length > 0) {
        setSessionId(remainingSessions[0].id);
      } else {
        await createSession(void 0, { persist: false, baseSessions: remainingSessions });
      }
    }
    await deleteAgentSessionRemote(agentId, targetSessionId, { logPrefix });
    return targetSession;
  }, [agentId, createSession, logPrefix, persistSessions]);
  reactExports.useEffect(() => {
    syncedSessionIdsRef.current.clear();
    if (!agentId) {
      setSessions([]);
      setSessionId("");
      setLoadingSessions(false);
      return;
    }
    let disposed = false;
    setLoadingSessions(true);
    const persistedSessions = loadSessions();
    if (disposed) return;
    setSessions(persistedSessions);
    const storedSessionId = readStoredSessionId(sessionStorageKey);
    const nextSessionId = storedSessionId && persistedSessions.some((item) => item.id === storedSessionId) ? storedSessionId : persistedSessions[0]?.id || "";
    if (nextSessionId) {
      setSessionId(nextSessionId);
      setLoadingSessions(false);
    } else {
      setLoadingSessions(false);
      void createSession(void 0, { persist: false, baseSessions: persistedSessions });
    }
    return () => {
      disposed = true;
    };
  }, [agentId, createSession, loadSessions, sessionStorageKey]);
  reactExports.useEffect(() => {
    if (!sessionId) return;
    writeStoredSessionId(sessionStorageKey, sessionId);
  }, [sessionId, sessionStorageKey]);
  const activeSession = reactExports.useMemo(
    () => sessions.find((item) => item.id === sessionId) || null,
    [sessionId, sessions]
  );
  return {
    sessions,
    loadingSessions,
    sessionId,
    setSessionId,
    activeSession,
    createSession,
    ensureSessionPersisted,
    updateSession,
    renameSession,
    deleteSession
  };
};
function buildEmployeeSkillPackagePrompt(context) {
  const goal = String(context.userGoal || "").trim();
  const existingJsonText = String(context.existingJsonText || "").trim();
  return [
    "你是一个资深的 AI 技能市场配置工程师，请根据用户目标生成可直接导入到技能市场的一段 JSON。",
    "输出要求：",
    "1. 只能输出合法 JSON，不要输出 Markdown、解释、注释、代码块标记。",
    "2. 可以输出单个对象，或多个技能组成的数组。",
    "3. 每个技能至少包含以下核心字段：",
    "   - title 或 name: 技能名称",
    "   - baseUrl 或 endpoint: 服务根地址",
    "   - description: 技能说明",
    "   - type: 必须是 'rest-api' 或 'mcp'",
    "   - auth_type: 'none' | 'global' | 'custom'",
    "   - auth_config: 认证配置对象",
    "   - endpoints: 数组，元素包含 path、method、format、description_example",
    "   - is_active: true 或 false",
    "4. 如果是 REST API，请尽量补全 endpoints；如果是 MCP，请提供合理的 baseUrl/endpoint，并保留 endpoints 数组描述主要能力。",
    "5. 如果用户信息不足，请基于行业通用最佳实践补全合理字段，但保持 JSON 可导入。",
    "6. description_example 要写清楚接口用途、参数语义或请求示例，便于 AI 员工理解调用场景。",
    "",
    `用户需求：${goal || "请生成一个可导入的技能配置包。"}`,
    existingJsonText ? `当前导入框已有 JSON，请在其基础上补充或改写，返回完整的新 JSON：
${existingJsonText}` : "当前导入框为空，请直接生成完整可导入的 JSON。"
  ].join("\n");
}
function parseEmployeeSkillPackageResult(content) {
  const raw = String(content || "").trim();
  if (!raw) {
    throw new Error("AI 未返回任何内容");
  }
  const fencedMatch = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fencedMatch?.[1]?.trim() || raw;
  try {
    return JSON.parse(candidate);
  } catch (firstError) {
    const startIndex = Math.min(
      ...["[", "{"].map((token) => candidate.indexOf(token)).filter((index) => index >= 0)
    );
    if (!Number.isFinite(startIndex)) {
      throw firstError;
    }
    const sliced = candidate.slice(startIndex).trim();
    const objectEnd = sliced.lastIndexOf("}");
    const arrayEnd = sliced.lastIndexOf("]");
    const endIndex = Math.max(objectEnd, arrayEnd);
    if (endIndex < 0) {
      throw firstError;
    }
    return JSON.parse(sliced.slice(0, endIndex + 1));
  }
}
const AISkillMarket = () => {
  const { toast } = useToast();
  const { hasPermission, loading: loadingPermissions } = useAdminPermissions();
  const canViewSkills = hasPermission(["skill.view", "skill.manage", "plugins.view", "plugins.manage"]);
  const canManageSkills = hasPermission(["skill.manage", "plugins.manage"]);
  const canUseAiEmployee = hasPermission(["ai.employee.use", "settings.ai", "role.manage"]);
  const [skills, setSkills] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [importOpen, setImportOpen] = reactExports.useState(false);
  const [importJsonText, setImportJsonText] = reactExports.useState("");
  const [importing, setImporting] = reactExports.useState(false);
  const [aiGenerateOpen, setAiGenerateOpen] = reactExports.useState(false);
  const [generateEmployees, setGenerateEmployees] = reactExports.useState([]);
  const [selectedGenerateEmployeeId, setSelectedGenerateEmployeeId] = reactExports.useState("");
  const [aiSessionToDelete, setAiSessionToDelete] = reactExports.useState(null);
  const [isAiBusy, setIsAiBusy] = reactExports.useState(false);
  const [aiNotice, setAiNotice] = reactExports.useState(null);
  const processedAiMessageIdsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const processingAiMessageIdsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const skillTaskSessionStorageKey = `ai-skill-market:import-session:${selectedGenerateEmployeeId || "none"}`;
  const skillTaskSessionsStorageKey = `ai-skill-market:import-sessions:${selectedGenerateEmployeeId || "none"}`;
  const {
    sessions: aiSessions,
    loadingSessions: loadingAiSessions,
    sessionId: aiSessionId,
    setSessionId: setAiSessionId,
    activeSession: activeAiSession,
    createSession: createAiSession,
    ensureSessionPersisted: ensureAiSessionPersisted,
    updateSession: updateAiSession,
    renameSession: renameAiSession,
    deleteSession: deleteAiSession
  } = useLocalAgentSessions({
    agentId: selectedGenerateEmployeeId,
    sessionStorageKey: skillTaskSessionStorageKey,
    sessionsStorageKey: skillTaskSessionsStorageKey,
    buildTitle: (input, fallbackTitle) => buildSkillTaskTitle(input, fallbackTitle || "技能配置生成任务"),
    logPrefix: "[AISkillMarket]",
    onDeleteSession: async (sessionId) => {
      try {
        localStorage.removeItem(buildSkillTaskProcessedMessagesStorageKey(sessionId));
      } catch {
      }
    }
  });
  const skillTaskProcessedMessagesStorageKey = `ai-skill-market:import-processed:${selectedGenerateEmployeeId || "none"}:${aiSessionId || "none"}`;
  const buildSkillTaskProcessedMessagesStorageKey = (sessionId) => `ai-skill-market:import-processed:${selectedGenerateEmployeeId || "none"}:${sessionId || "none"}`;
  const buildSkillTaskTitle = (input, fallback = "未命名任务") => {
    const normalized = String(input || "").replace(/\s+/g, " ").replace(/[。！？!?,，；;：:]+$/g, "").trim();
    if (!normalized) return fallback;
    return normalized.length > 26 ? `${normalized.slice(0, 26)}...` : normalized;
  };
  const loadPersistedProcessedMessageIds = () => {
    try {
      const raw = localStorage.getItem(skillTaskProcessedMessagesStorageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string" && item) : []);
    } catch (error) {
      return /* @__PURE__ */ new Set();
    }
  };
  const persistProcessedMessageId = (messageId) => {
    if (!messageId) return;
    processedAiMessageIdsRef.current.add(messageId);
    try {
      localStorage.setItem(
        skillTaskProcessedMessagesStorageKey,
        JSON.stringify(Array.from(processedAiMessageIdsRef.current))
      );
    } catch (error) {
    }
  };
  const remindDoNotCloseAiDialog = (description) => {
    setAiNotice({
      type: "info",
      title: "技能配置生成中，请勿关闭页面",
      description: "数字员工正在生成技能配置 JSON，请勿关闭、刷新或离开当前页面。",
      timestamp: Date.now()
    });
  };
  const handleImportSubmit = async (e) => {
    e.preventDefault();
    if (!importJsonText.trim()) {
      toast({ title: "格式错误", description: "请输入有效的 JSON 文本", variant: "destructive" });
      return;
    }
    let parsedJson = null;
    try {
      parsedJson = JSON.parse(importJsonText);
    } catch (err) {
      toast({ title: "JSON 解析失败", description: `JSON 格式不正确: ${err.message}`, variant: "destructive" });
      return;
    }
    setImporting(true);
    try {
      const res = await fetch("/api/v1/plugins/proxy/ai-skill-market/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedJson)
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "导入成功",
          description: `成功导入 ${data.count} 个技能配置！`
        });
        setImportOpen(false);
        setImportJsonText("");
        fetchSkills();
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("REFRESH_ENTITY_LIST"));
        }
      } else {
        toast({ title: "导入失败", description: data.error, variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "导入异常", description: err.message, variant: "destructive" });
    } finally {
      setImporting(false);
    }
  };
  const [activeTab, setActiveTab] = reactExports.useState("MCP");
  const [name, setName] = reactExports.useState("");
  const [url, setUrl] = reactExports.useState("");
  const [desc, setDesc] = reactExports.useState("");
  const [authType, setAuthType] = reactExports.useState("none");
  const [apiKeyField, setApiKeyField] = reactExports.useState("");
  const [showApiKey, setShowApiKey] = reactExports.useState(false);
  const [authLocation, setAuthLocation] = reactExports.useState("header");
  const [authHeaderName, setAuthHeaderName] = reactExports.useState("Authorization");
  const [authPrefix, setAuthPrefix] = reactExports.useState("Bearer ");
  const [headers, setHeaders] = reactExports.useState([]);
  const [isTesting, setIsTesting] = reactExports.useState(false);
  const [testResult, setTestResult] = reactExports.useState(null);
  const [endpoints, setEndpoints] = reactExports.useState([
    { path: "", method: "POST", format: "JSON", description_example: "" }
  ]);
  const [expandedEndpoints, setExpandedEndpoints] = reactExports.useState({ 0: true });
  const addEndpoint = () => {
    const newIdx = endpoints.length;
    setEndpoints([...endpoints, { path: "", method: "POST", format: "JSON", description_example: "" }]);
    setExpandedEndpoints((prev) => ({ ...prev, [newIdx]: true }));
  };
  const removeEndpoint = (idx) => {
    const list = [...endpoints];
    list.splice(idx, 1);
    setEndpoints(list);
    setExpandedEndpoints((prev) => {
      const next = {};
      Object.keys(prev).forEach((k) => {
        const keyNum = parseInt(k, 10);
        if (keyNum < idx) {
          next[keyNum] = prev[keyNum];
        } else if (keyNum > idx) {
          next[keyNum - 1] = prev[keyNum];
        }
      });
      return next;
    });
  };
  const updateEndpoint = (idx, key, val) => {
    const list = [...endpoints];
    list[idx] = { ...list[idx], [key]: val };
    setEndpoints(list);
  };
  const toggleEndpointExpand = (idx) => {
    setExpandedEndpoints((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };
  const [deleteConfirmOpen, setDeleteConfirmOpen] = reactExports.useState(false);
  const [skillToDelete, setSkillToDelete] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const ITEMS_PER_PAGE = 6;
  const fetchSkills = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/plugins/proxy/ai-skill-market/skills");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const dbSkills = json.data.map((item) => ({
          id: item.id,
          name: item.name,
          type: item.type === "rest-api" ? "API" : "MCP",
          url: item.endpoint,
          status: item.isActive ? "online" : "offline",
          isEnabled: !!item.isActive,
          lastHeartbeat: item.lastHeartbeat ? new Date(item.lastHeartbeat).toLocaleTimeString() : "无记录",
          desc: item.description,
          authType: item.authType || "none",
          authConfig: item.authConfig || {},
          endpoints: item.endpoints || [],
          headers: item.authConfig?.headers || []
        }));
        setSkills(dbSkills);
      }
    } catch (e) {
      toast({ title: "加载失败", description: `获取技能中心出错: ${e.message}`, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchSkills();
  }, []);
  reactExports.useEffect(() => {
    const fetchEmployees = async () => {
      if (!canUseAiEmployee) {
        setGenerateEmployees([]);
        setSelectedGenerateEmployeeId("");
        return;
      }
      try {
        const res = await fetch("/api/v1/agents");
        const json = res.ok ? await res.json() : { data: [] };
        const employees = Array.isArray(json?.data) ? json.data : Array.isArray(json?.agents) ? json.agents : [];
        setGenerateEmployees(employees);
        if (!selectedGenerateEmployeeId && employees[0]?.id) {
          setSelectedGenerateEmployeeId(String(employees[0].id));
        }
      } catch (error) {
      }
    };
    fetchEmployees();
  }, [canUseAiEmployee, selectedGenerateEmployeeId]);
  reactExports.useEffect(() => {
    if (!loadingPermissions && !canUseAiEmployee) {
      setAiGenerateOpen(false);
    }
  }, [canUseAiEmployee, loadingPermissions]);
  reactExports.useEffect(() => {
    processedAiMessageIdsRef.current = loadPersistedProcessedMessageIds();
    processingAiMessageIdsRef.current.clear();
  }, [skillTaskProcessedMessagesStorageKey]);
  reactExports.useEffect(() => {
    if (!isAiBusy) return;
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isAiBusy]);
  const handleCloseAiDialog = () => {
    if (isAiBusy) {
      remindDoNotCloseAiDialog();
      toast({
        title: "任务仍在执行",
        description: "请等待技能配置 JSON 生成完成后再关闭 AI 窗口。",
        variant: "destructive"
      });
      return;
    }
    setAiGenerateOpen(false);
  };
  const handleOpenAiGenerateDialog = () => {
    if (!canUseAiEmployee) {
      return;
    }
    if (importOpen) {
      setImportOpen(false);
    }
    setAiGenerateOpen(true);
  };
  const handleAiBeforeSend = async (text) => {
    const goal = String(text || "").trim();
    if (!goal) return false;
    setIsAiBusy(true);
    remindDoNotCloseAiDialog();
    if (aiSessionId && activeAiSession && activeAiSession.title.startsWith("新任务 ")) {
      const nextTitle = buildSkillTaskTitle(goal, activeAiSession.title);
      void updateAiSession(aiSessionId, {
        title: nextTitle || activeAiSession.title,
        updatedAt: /* @__PURE__ */ new Date()
      });
    }
    return {
      requestText: buildEmployeeSkillPackagePrompt({
        userGoal: goal,
        existingJsonText: importJsonText
      }),
      requestAttachments: []
    };
  };
  const handleAiMessagesChange = async (messages) => {
    const assistantMessages = Array.isArray(messages) ? messages.filter((item) => item.role === "assistant" && String(item.content || "").trim()) : [];
    const latestMessage = assistantMessages[assistantMessages.length - 1];
    if (!latestMessage?.id) return;
    if (processedAiMessageIdsRef.current.has(latestMessage.id) || processingAiMessageIdsRef.current.has(latestMessage.id)) {
      return;
    }
    processingAiMessageIdsRef.current.add(latestMessage.id);
    try {
      const parsed = parseEmployeeSkillPackageResult(latestMessage.content || "");
      const prettyJson = JSON.stringify(parsed, null, 2);
      const generatedCount = Array.isArray(parsed) ? parsed.length : 1;
      const summary = `已生成 ${generatedCount} 个技能配置 JSON`;
      setImportJsonText(prettyJson);
      setIsAiBusy(false);
      setAiGenerateOpen(false);
      setImportOpen(true);
      setAiNotice({
        type: "success",
        title: "技能配置 JSON 已生成",
        description: `已回填到导入框，可直接检查后执行导入。${generatedCount > 1 ? ` 本次共生成 ${generatedCount} 个技能。` : ""}`,
        timestamp: Date.now()
      });
      persistProcessedMessageId(latestMessage.id);
      const sourceGoal = [...messages].reverse().find((item) => item.role === "user" && String(item.content || "").trim());
      const optimizedTitle = buildSkillTaskTitle(
        sourceGoal?.content || summary,
        activeAiSession?.title || "技能配置任务"
      );
      await updateAiSession(aiSessionId, {
        title: optimizedTitle,
        updatedAt: /* @__PURE__ */ new Date(),
        summary
      });
      await createAiSession(void 0, void 0, { persist: false });
    } catch (error) {
      setIsAiBusy(false);
      setAiNotice({
        type: "warning",
        title: "本轮结果未能自动解析为 JSON",
        description: "请继续补充要求，或明确要求数字员工只输出合法 JSON。",
        timestamp: Date.now()
      });
    } finally {
      processingAiMessageIdsRef.current.delete(latestMessage.id);
    }
  };
  const filteredSkills = skills.filter((skill) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return skill.name.toLowerCase().includes(q) || skill.desc.toLowerCase().includes(q) || skill.url.toLowerCase().includes(q);
  });
  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);
  const paginatedSkills = filteredSkills.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const isValidUrl = (testUrl) => {
    try {
      if (!testUrl) return false;
      const lower = testUrl.toLowerCase();
      return lower.startsWith("http://") || lower.startsWith("https://") || lower.startsWith("postgresql://");
    } catch {
      return false;
    }
  };
  const getPrimaryApiEndpoint = () => {
    if (activeTab !== "API") return null;
    return endpoints.find((item) => item.path.trim()) || endpoints[0] || null;
  };
  const getPrimaryApiEndpointFromSkill = (skill) => {
    if (!skill || skill.type !== "API") return null;
    const list = Array.isArray(skill.endpoints) ? skill.endpoints : [];
    return list.find((item) => String(item.path || "").trim()) || list[0] || null;
  };
  const isFormValid = name.trim().length > 0 && isValidUrl(url);
  const addHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };
  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };
  const updateHeader = (index, field, val) => {
    const updated = [...headers];
    updated[index][field] = val;
    setHeaders(updated);
  };
  const handleTestConnection = async (id) => {
    if (id) {
      setSkills((prev) => prev.map((s) => s.id === id ? { ...s, status: "testing" } : s));
      toast({ title: "正在连接服务...", description: "尝试与该技能接口执行三次握手..." });
      const targetSkill = skills.find((s) => s.id === id);
      const targetEndpoint = getPrimaryApiEndpointFromSkill(targetSkill);
      try {
        const res = await fetch("/api/v1/plugins/proxy/ai-skill-market/test-connection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id,
            endpoint: targetSkill?.url,
            auth_type: targetSkill?.authType || "none",
            auth_config: targetSkill?.authType === "custom" ? {
              apiKey: targetSkill.authConfig?.apiKey,
              authLocation: targetSkill.authConfig?.authLocation || "header",
              authHeaderName: targetSkill.authConfig?.authHeaderName || "Authorization",
              authPrefix: targetSkill.authConfig?.authPrefix !== void 0 ? targetSkill.authConfig?.authPrefix : "Bearer ",
              headers: targetSkill.headers
            } : void 0,
            path: targetEndpoint?.path?.trim() || void 0,
            method: targetEndpoint?.method || "GET",
            format: targetEndpoint?.format || "JSON"
          })
        });
        const data = await res.json();
        setSkills((prev) => prev.map((s) => {
          if (s.id === id) {
            const nextStatus = data.success ? "online" : "offline";
            toast({
              title: data.success ? "握手成功" : "握手失败",
              description: data.success ? `服务响应正常，延迟：${data.latencyMs}ms` : `无法连接服务: ${data.error}`,
              variant: data.success ? "default" : "destructive"
            });
            return {
              ...s,
              status: nextStatus,
              lastHeartbeat: data.success ? "刚刚" : "无记录"
            };
          }
          return s;
        }));
      } catch (err) {
        setSkills((prev) => prev.map((s) => s.id === id ? { ...s, status: "offline" } : s));
        toast({ title: "网络异常", description: `测试连接出错: ${err.message}`, variant: "destructive" });
      }
    } else {
      if (!isValidUrl(url)) {
        toast({ title: "连接测试失败", description: "请输入合法的服务地址", variant: "destructive" });
        return;
      }
      setIsTesting(true);
      setTestResult(null);
      try {
        const apiTestEndpoint = getPrimaryApiEndpoint();
        const requestBody = {
          endpoint: url,
          auth_type: authType,
          auth_config: authType === "custom" ? {
            apiKey: apiKeyField,
            authLocation,
            authHeaderName,
            authPrefix,
            headers
          } : void 0
        };
        if (apiTestEndpoint?.path?.trim()) {
          requestBody.path = apiTestEndpoint.path.trim();
          requestBody.method = apiTestEndpoint.method || "GET";
          requestBody.format = apiTestEndpoint.format || "JSON";
        }
        const res = await fetch("/api/v1/plugins/proxy/ai-skill-market/test-connection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody)
        });
        const data = await res.json();
        setTestResult(data.success ? "success" : "failed");
        toast({
          title: data.success ? "连通性测试通过" : "连通性测试失败",
          description: data.success ? `服务联通成功 (耗时 ${data.latencyMs}ms)！` : `连接失败: ${data.error}`,
          variant: data.success ? "default" : "destructive"
        });
      } catch (err) {
        setTestResult("failed");
        toast({ title: "连接测试错误", description: err.message, variant: "destructive" });
      } finally {
        setIsTesting(false);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({ title: "校验失败", description: "请填写技能名称", variant: "destructive" });
      return;
    }
    if (!isValidUrl(url)) {
      toast({ title: "校验失败", description: "请输入合法的服务地址", variant: "destructive" });
      return;
    }
    try {
      const payload = {
        id: editingId || void 0,
        name,
        description: desc || "这是一个注册的 AI 工具服务。",
        type: activeTab === "API" ? "rest-api" : "mcp",
        endpoint: url,
        auth_type: authType,
        auth_config: authType === "custom" ? {
          apiKey: apiKeyField,
          authLocation,
          authHeaderName,
          authPrefix,
          headers: headers.filter((h) => h.key)
        } : {},
        endpoints: activeTab === "API" ? endpoints : [
          { path: "/sse", method: "POST", format: "JSON", description_example: "MCP SSE Endpoint" }
        ],
        is_active: true
      };
      const res = await fetch("/api/v1/plugins/proxy/ai-skill-market/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: editingId ? "技能更新成功" : "技能挂载成功",
          description: `工具 [${name}] 已成功在 D1 数据库保存并处于活跃状态！`
        });
        fetchSkills();
        setIsOpen(false);
        setEditingId(null);
        setName("");
        setUrl("");
        setDesc("");
        setAuthType("none");
        setApiKeyField("");
        setShowApiKey(false);
        setAuthLocation("header");
        setAuthHeaderName("Authorization");
        setAuthPrefix("Bearer ");
        setHeaders([]);
        setTestResult(null);
        setEndpoints([{ path: "", method: "POST", format: "JSON", description_example: "" }]);
      } else {
        toast({ title: "同步失败", description: data.error, variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "同步失败", description: err.message, variant: "destructive" });
    }
  };
  const handleToggle = async (id, enabled) => {
    const skill = skills.find((s) => s.id === id);
    if (!skill) return;
    try {
      const payload = {
        id: skill.id,
        name: skill.name,
        description: skill.desc,
        type: skill.type === "API" ? "rest-api" : "mcp",
        endpoint: skill.url,
        auth_type: skill.authType,
        auth_config: skill.authConfig || {},
        endpoints: skill.endpoints || [],
        is_active: enabled
      };
      const res = await fetch("/api/v1/plugins/proxy/ai-skill-market/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: enabled ? "技能已启用" : "技能已停用",
          description: `该技能服务现已在 D1 数据库中${enabled ? "启用" : "禁用"}。`
        });
        fetchSkills();
      } else {
        toast({ title: "操作失败", description: data.error, variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "操作异常", description: err.message, variant: "destructive" });
    }
  };
  const handleEditClick = (skill) => {
    setEditingId(skill.id);
    setName(skill.name);
    setUrl(skill.url);
    setDesc(skill.desc);
    setActiveTab(skill.type);
    setAuthType(skill.authType || "none");
    const config = skill.authConfig || {};
    setApiKeyField(config.apiKey || "");
    setAuthLocation(config.authLocation || "header");
    setAuthHeaderName(config.authHeaderName || "Authorization");
    setAuthPrefix(config.authPrefix !== void 0 ? config.authPrefix : "Bearer ");
    setHeaders(config.headers || []);
    const eps = skill.endpoints && skill.endpoints.length > 0 ? skill.endpoints : [
      { path: "", method: "POST", format: "JSON", description_example: "" }
    ];
    setEndpoints(eps);
    const initialExpanded = {};
    eps.forEach((_, index) => {
      initialExpanded[index] = index === 0;
    });
    setExpandedEndpoints(initialExpanded);
    setTestResult(null);
    setIsOpen(true);
  };
  const handleDeleteClick = (id, sName) => {
    setSkillToDelete({ id, name: sName });
    setDeleteConfirmOpen(true);
  };
  const handleConfirmDelete = async () => {
    if (!skillToDelete) return;
    try {
      const res = await fetch(`/api/v1/plugins/proxy/ai-skill-market/skills/${skillToDelete.id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "工具已卸载",
          description: `技能 [${skillToDelete.name}] 已从 D1 数据库永久抹除。`,
          variant: "destructive"
        });
        fetchSkills();
      } else {
        toast({ title: "删除失败", description: data.error, variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "删除失败", description: err.message, variant: "destructive" });
    } finally {
      setSkillToDelete(null);
      setDeleteConfirmOpen(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-8 animate-in fade-in duration-500", children: [
    !loadingPermissions && canViewSkills && !canManageSkills ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800", children: "当前账号仅可查看 AI 技能插件配置，新增、测试、编辑、删除和导入操作已禁用。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 828,
      columnNumber: 9
    }, void 0) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm animate-in slide-in-from-top duration-300", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Layers, { className: "w-5 h-5 text-blue-600" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 838,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 837,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl font-black tracking-tight text-slate-900", children: "AI 技能与连接器管理" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 841,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-slate-500 mt-0.5", children: "登记、管理和配置 AI 员工所调用到的外部 Rest API 及标准 MCP 服务集。" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 842,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 840,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 836,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 835,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 shrink-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: handleOpenAiGenerateDialog,
            variant: "outline",
            disabled: !generateEmployees.length || !canManageSkills || !canUseAiEmployee,
            className: "border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl px-5 h-11 font-bold text-xs disabled:cursor-not-allowed disabled:opacity-60",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { size: 16, className: "mr-2 text-blue-600" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 853,
                columnNumber: 13
              }, void 0),
              "AI生成"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 847,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => setImportOpen(true),
            variant: "outline",
            disabled: !canManageSkills,
            className: "border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl px-5 h-11 font-bold text-xs",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16, className: "mr-2 text-blue-600" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 862,
                columnNumber: 13
              }, void 0),
              "一键导入"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 856,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: () => {
              setEditingId(null);
              setName("");
              setUrl("");
              setDesc("");
              setAuthType("none");
              setApiKeyField("");
              setHeaders([]);
              setTestResult(null);
              setEndpoints([
                { path: "", method: "POST", format: "JSON", description_example: "" }
              ]);
              setExpandedEndpoints({ 0: true });
              setIsOpen(true);
            },
            disabled: !canManageSkills,
            className: "bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-100 px-6 h-11 shrink-0 font-bold text-xs",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { size: 16, className: "mr-2" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 884,
                columnNumber: 13
              }, void 0),
              "添加新技能"
            ]
          },
          void 0,
          true,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 865,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 846,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 834,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative w-full sm:max-w-md", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 893,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Input,
          {
            placeholder: "搜索技能名称、描述或连接地址...",
            value: searchQuery,
            onChange: (e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            },
            className: "pl-10 h-10 rounded-xl border-slate-200 text-sm focus-visible:ring-blue-500 w-full"
          },
          void 0,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 894,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 892,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500 font-medium shrink-0", children: [
        "已过滤出 ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg", children: filteredSkills.length }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 905,
          columnNumber: 16
        }, void 0),
        " 个技能",
        totalPages > 1 && ` (当前展示第 ${currentPage}/${totalPages} 页)`
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 904,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 891,
      columnNumber: 7
    }, void 0),
    loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Card, { className: "border border-slate-150 rounded-2xl p-6 space-y-4 animate-pulse", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 flex-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-5 bg-slate-100 rounded-lg w-2/3" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 917,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-3 bg-slate-50 rounded w-1/2" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 918,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 916,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-8 h-8 rounded-full bg-slate-100" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 920,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 915,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-3 bg-slate-50 rounded w-full" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 923,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-3 bg-slate-50 rounded w-5/6" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 924,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 922,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-8 bg-slate-100 rounded-xl w-full pt-4" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 926,
        columnNumber: 15
      }, void 0)
    ] }, n, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 914,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 912,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${!canManageSkills ? "pointer-events-none opacity-70" : ""}`, children: [
      paginatedSkills.map((skill) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Card,
        {
          className: `border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300 ${!skill.isEnabled ? "opacity-75 bg-slate-50/50" : "bg-white"}`,
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-start gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-bold text-slate-900 flex items-center gap-1.5 truncate", children: [
                  skill.name,
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: `text-[12px] font-bold px-2 py-0 ${skill.type === "MCP" ? "border-indigo-100 bg-indigo-50 text-indigo-700" : "border-blue-100 bg-blue-50 text-blue-700"}`, children: skill.type }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 943,
                    columnNumber: 23
                  }, void 0),
                  skill.type === "API" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "outline", className: "text-[12px] font-bold px-1.5 py-0 border-amber-100 bg-amber-50 text-amber-700 font-mono", children: skill.method || "POST" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 947,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 941,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 text-xs text-slate-400 font-mono select-all truncate w-full", title: skill.url, children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link2, { size: 12, className: "shrink-0" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 953,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "truncate", children: skill.url }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 954,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 952,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 940,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: skill.status === "testing" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-2.5 w-2.5 relative", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 962,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 963,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 961,
                columnNumber: 23
              }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-2.5 h-2.5 rounded-full transition-all duration-700 ${skill.status === "online" ? "bg-gradient-to-tr from-green-400 to-emerald-600 shadow-sm shadow-emerald-200 animate-pulse" : "bg-slate-300"}` }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 967,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 font-medium", children: skill.status === "online" ? "在线" : "离线" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 971,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 966,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 959,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 939,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-slate-500 leading-relaxed min-h-[40px] line-clamp-2", children: skill.desc }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 980,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
              skill.authType && skill.authType !== "none" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "text-[9px] bg-amber-50 text-amber-700 border-amber-100 px-2 py-0.5 font-medium", children: [
                "认证: ",
                skill.authType === "global" ? "全局 Key" : "局部 Key"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 987,
                columnNumber: 21
              }, void 0),
              skill.payloadTemplate && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "text-[9px] bg-slate-100 text-slate-600 border-slate-200 px-2 py-0.5 font-medium", children: "已配变量映射模板" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 992,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 985,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center pt-3 border-t border-slate-100 text-[12px] text-slate-400", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Activity, { size: 10 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1001,
                  columnNumber: 21
                }, void 0),
                "更新时间：",
                skill.lastHeartbeat
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1e3,
                columnNumber: 19
              }, void 0),
              skill.type === "API" && skill.headers && skill.headers.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-blue-600 font-medium bg-blue-50/50 px-1.5 py-0.5 rounded", children: [
                "已配 ",
                skill.headers.length,
                " 项 Header"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1006,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 999,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center pt-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: `enabled-${skill.id}`, className: "text-xs text-slate-400 cursor-pointer", children: skill.isEnabled ? "已启用" : "已停用" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1015,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Switch,
                  {
                    id: `enabled-${skill.id}`,
                    checked: skill.isEnabled,
                    disabled: !canManageSkills,
                    onCheckedChange: (checked) => handleToggle(skill.id, checked)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1018,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1014,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    disabled: !skill.isEnabled || skill.status === "testing" || !canManageSkills,
                    onClick: () => handleTestConnection(skill.id),
                    className: "h-8 text-[11px] px-3 font-semibold text-slate-600 hover:bg-slate-50 border-slate-200",
                    children: [
                      skill.status === "testing" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 12, className: "animate-spin mr-1" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1035,
                        columnNumber: 25
                      }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Play, { size: 10, className: "mr-1 text-emerald-500" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1037,
                        columnNumber: 25
                      }, void 0),
                      "测试"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1027,
                    columnNumber: 21
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleEditClick(skill),
                    className: "h-8 w-8 p-0 border-slate-200 text-slate-500 hover:bg-slate-100",
                    title: "编辑配置",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PenLine, { size: 12 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1049,
                      columnNumber: 23
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1042,
                    columnNumber: 21
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleDeleteClick(skill.id, skill.name),
                    className: "h-8 w-8 p-0 border-slate-200 text-rose-500 hover:bg-rose-50 hover:border-rose-100",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 12 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1058,
                      columnNumber: 23
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1052,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1026,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1013,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 937,
            columnNumber: 15
          }, void 0)
        },
        skill.id,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 933,
          columnNumber: 13
        },
        void 0
      )),
      filteredSkills.length === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-full bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl py-16 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { className: "w-10 h-10 text-slate-300 mb-3" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1068,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-slate-400 text-sm font-medium", children: searchQuery.trim() ? "未找到符合检索条件的工具或 MCP 技能" : "暂无挂载的工具与 MCP，点击右上角添加新技能" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1069,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1067,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 931,
      columnNumber: 9
    }, void 0),
    totalPages > 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-center items-center gap-1.5 pt-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          variant: "outline",
          size: "sm",
          disabled: currentPage === 1,
          onClick: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
          className: "h-9 w-9 p-0 border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronLeft, { size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1087,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1080,
          columnNumber: 11
        },
        void 0
      ),
      Array.from({ length: totalPages }).map((_, idx) => {
        const pageNum = idx + 1;
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: currentPage === pageNum ? "default" : "outline",
            size: "sm",
            onClick: () => setCurrentPage(pageNum),
            className: `h-9 w-9 rounded-xl font-semibold transition-all duration-200 ${currentPage === pageNum ? "bg-slate-900 text-white hover:bg-slate-800 shadow-sm shadow-slate-200" : "border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`,
            children: pageNum
          },
          pageNum,
          false,
          {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1093,
            columnNumber: 15
          },
          void 0
        );
      }),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          variant: "outline",
          size: "sm",
          disabled: currentPage === totalPages,
          onClick: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
          className: "h-9 w-9 p-0 border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { size: 16 }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1115,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1108,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 1079,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isOpen, onOpenChange: (open) => {
      if (!canManageSkills && open) return;
      setIsOpen(open);
    }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-3xl rounded-2xl p-6 gap-6 max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-bold text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { className: "w-5 h-5 text-blue-600" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1128,
            columnNumber: 15
          }, void 0),
          editingId ? "编辑工具技能配置" : "添加新工具技能"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1127,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-slate-500", children: "您可以添加符合 AI 标准的 MCP SSE 终结点，或者是支持变量映射、授权认证的通用 REST API 路由，以便 AI 员工理解。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1131,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1126,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tabs, { value: activeTab, onValueChange: (v) => {
          setActiveTab(v);
          setUrl("");
          setTestResult(null);
        }, className: "w-full", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsList, { className: "grid grid-cols-2 bg-slate-100 p-1 rounded-xl", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "MCP", className: "rounded-lg text-xs font-bold py-2", children: "MCP 服务器 (SSE)" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1144,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "API", className: "rounded-lg text-xs font-bold py-2", children: "通用 REST API" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1147,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1143,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContent, { value: "MCP", className: "space-y-4 mt-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "mcp-name", className: "text-slate-600 font-bold text-xs", children: "MCP 服务名称" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1154,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  id: "mcp-name",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  placeholder: "例如: Google Search MCP",
                  className: "rounded-xl border-slate-200 h-11 text-xs"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1155,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1153,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "mcp-url", className: "text-slate-600 font-bold text-xs", children: "远程 SSE 连接地址" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1165,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  id: "mcp-url",
                  value: url,
                  onChange: (e) => {
                    setUrl(e.target.value);
                    setTestResult(null);
                  },
                  placeholder: "例如: http://localhost:3011/sse",
                  className: "rounded-xl border-slate-200 h-11 text-xs"
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1166,
                  columnNumber: 19
                },
                void 0
              ),
              !isValidUrl(url) && url.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-rose-500 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { size: 10 }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1178,
                  columnNumber: 23
                }, void 0),
                "请输入有效的连接地址 (支持 http://, https://, postgresql://)"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1177,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1164,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1152,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContent, { value: "API", className: "space-y-4 mt-4 animate-in fade-in duration-300", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "api-name", className: "text-slate-600 font-bold text-xs", children: "API 技能标题" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1188,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    id: "api-name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    placeholder: "例如: Jina Web Reader",
                    className: "rounded-xl border-slate-200 h-11 text-xs"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1189,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1187,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "api-url", className: "text-slate-600 font-bold text-xs", children: "API 基础连接地址 (Base URL)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1199,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    id: "api-url",
                    value: url,
                    onChange: (e) => {
                      setUrl(e.target.value);
                      setTestResult(null);
                    },
                    placeholder: "例如: https://api.jina.ai",
                    className: "rounded-xl border-slate-200 h-11 text-xs"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1200,
                    columnNumber: 21
                  },
                  void 0
                ),
                !isValidUrl(url) && url.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[12px] text-rose-500 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { size: 10 }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1212,
                    columnNumber: 25
                  }, void 0),
                  "请输入有效的 API 基础地址 (支持 http:// 或 https://)"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1211,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1198,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1186,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-600 font-bold text-xs", children: "鉴权授权模式" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1221,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tabs, { value: authType, onValueChange: (v) => {
                const nextVal = v;
                setAuthType(nextVal);
                if (nextVal === "custom") {
                  setAuthLocation("header");
                  setAuthHeaderName("Authorization");
                  setAuthPrefix("Bearer ");
                }
              }, className: "w-full", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsList, { className: "grid grid-cols-2 bg-slate-50 p-1 rounded-lg border border-slate-100", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "none", className: "rounded-md text-[11px] py-1.5 font-semibold", children: "无需凭证 (None)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1232,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "custom", className: "rounded-md text-[11px] py-1.5 font-semibold", children: "自定义安全凭证" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1235,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1231,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1222,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1220,
              columnNumber: 17
            }, void 0),
            authType === "custom" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 p-4 rounded-xl border border-blue-100 bg-blue-50/10 animate-in slide-in-from-top-1 duration-200", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-600 font-bold text-[11px]", children: "凭证携带位置" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1247,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tabs, { value: authLocation, onValueChange: (v) => {
                    const loc = v;
                    setAuthLocation(loc);
                    setAuthHeaderName(loc === "header" ? "Authorization" : "token");
                    setAuthPrefix(loc === "header" ? "Bearer " : "");
                  }, className: "w-full", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsList, { className: "grid grid-cols-2 bg-slate-50 p-1 rounded-lg border border-slate-100 h-9", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "header", className: "rounded-md text-[12px] font-bold", children: "Header (请求头)" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1255,
                      columnNumber: 29
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "query", className: "rounded-md text-[12px] font-bold", children: "Query (URL参数)" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1258,
                      columnNumber: 29
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1254,
                    columnNumber: 27
                  }, void 0) }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1248,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1246,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "auth-header-name", className: "text-slate-600 font-bold text-[11px]", children: authLocation === "header" ? "请求头参数名 (Header Name)" : "URL参数名 (Param Name)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1266,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      id: "auth-header-name",
                      value: authHeaderName,
                      onChange: (e) => setAuthHeaderName(e.target.value),
                      placeholder: authLocation === "header" ? "例如: Authorization" : "例如: token",
                      className: "rounded-xl border-slate-200 h-9 text-[11px]"
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1269,
                      columnNumber: 25
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1265,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1245,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-3 gap-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-1 space-y-1.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "auth-prefix", className: "text-slate-600 font-bold text-[11px]", children: "前缀 (Prefix)" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1281,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Input,
                    {
                      id: "auth-prefix",
                      value: authPrefix,
                      onChange: (e) => setAuthPrefix(e.target.value),
                      placeholder: "例如: Bearer ",
                      className: "rounded-xl border-slate-200 h-9 text-[11px]"
                    },
                    void 0,
                    false,
                    {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1282,
                      columnNumber: 25
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1280,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "col-span-2 space-y-1.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "api-key", className: "text-slate-600 font-bold text-[11px] flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { size: 11, className: "text-blue-500" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1293,
                      columnNumber: 27
                    }, void 0),
                    "安全密钥值 (Secret Key)"
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1292,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Input,
                      {
                        id: "api-key",
                        type: showApiKey ? "text" : "password",
                        value: apiKeyField,
                        onChange: (e) => setApiKeyField(e.target.value),
                        placeholder: "例如: cfat_...",
                        className: "rounded-xl border-slate-200 h-9 pr-10 text-[11px] text-slate-800"
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1297,
                        columnNumber: 27
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowApiKey(!showApiKey),
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none h-4 w-4 flex items-center justify-center transition-colors",
                        children: showApiKey ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(EyeOff, { size: 13 }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                          lineNumber: 1310,
                          columnNumber: 43
                        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Eye, { size: 13 }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                          lineNumber: 1310,
                          columnNumber: 66
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1305,
                        columnNumber: 27
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1296,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1291,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1279,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1244,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 pt-2 border-t border-slate-100", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-600 font-bold text-xs flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Key, { size: 12, className: "text-slate-400" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1322,
                    columnNumber: 23
                  }, void 0),
                  "其它请求头配置 (Custom Headers)"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1321,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: addHeader,
                    className: "h-7 text-[12px] rounded px-2",
                    children: "+ 添加 Header"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1325,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1320,
                columnNumber: 19
              }, void 0),
              headers.map((h, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2 items-center", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    value: h.key,
                    onChange: (e) => updateHeader(idx, "key", e.target.value),
                    placeholder: "Key (如 X-API-Key)",
                    className: "rounded-lg h-9 border-slate-200 text-xs flex-1"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1338,
                    columnNumber: 23
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Input,
                  {
                    value: h.value,
                    onChange: (e) => updateHeader(idx, "value", e.target.value),
                    placeholder: "Value (支持 {{variable}})",
                    className: "rounded-lg h-9 border-slate-200 text-xs flex-1"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1344,
                    columnNumber: 23
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    onClick: () => removeHeader(idx),
                    className: "h-8 w-8 text-rose-500 hover:bg-rose-50 hover:text-rose-600 rounded-lg shrink-0 flex items-center justify-center",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 16 }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1357,
                      columnNumber: 25
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1350,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, idx, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1337,
                columnNumber: 21
              }, void 0))
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1319,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pt-2 border-t border-slate-100 animate-in fade-in duration-300", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-700 font-extrabold text-xs flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Layers, { size: 13, className: "text-blue-500 animate-pulse" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1367,
                    columnNumber: 23
                  }, void 0),
                  "多端点管理列表 (REST API Endpoints)"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1366,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: addEndpoint,
                    className: "h-8 text-[11px] rounded px-3 border-blue-200 hover:bg-blue-50 text-blue-600 font-bold transition-colors",
                    children: "+ 添加请求路径"
                  },
                  void 0,
                  false,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1370,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1365,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 max-h-[400px] overflow-y-auto pr-1", children: endpoints.map((ep, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3.5 bg-slate-50/50 rounded-xl border border-slate-200/60 hover:border-blue-200/80 transition-all space-y-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    onClick: () => toggleEndpointExpand(idx),
                    className: "flex justify-between items-center pb-2 border-b border-slate-200/30 cursor-pointer select-none group",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          ChevronRight,
                          {
                            size: 14,
                            className: `text-slate-400 transition-transform duration-200 ${expandedEndpoints[idx] ? "rotate-90 text-blue-500" : ""}`
                          },
                          void 0,
                          false,
                          {
                            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                            lineNumber: 1389,
                            columnNumber: 29
                          },
                          void 0
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-black text-slate-700 group-hover:text-blue-600 transition-colors", children: ep.path ? `端点: ${ep.path}` : `端点 #${idx + 1}` }, void 0, false, {
                          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                          lineNumber: 1393,
                          columnNumber: 29
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1388,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", onClick: (e) => e.stopPropagation(), children: endpoints.length > 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        Button,
                        {
                          type: "button",
                          variant: "ghost",
                          size: "sm",
                          onClick: () => removeEndpoint(idx),
                          className: "h-8 w-8 text-rose-500 hover:bg-rose-50 rounded-lg shrink-0 flex items-center justify-center transition-colors",
                          title: "删除该端点",
                          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { size: 16 }, void 0, false, {
                            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                            lineNumber: 1408,
                            columnNumber: 33
                          }, void 0)
                        },
                        void 0,
                        false,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                          lineNumber: 1400,
                          columnNumber: 31
                        },
                        void 0
                      ) }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1398,
                        columnNumber: 27
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1384,
                    columnNumber: 25
                  },
                  void 0
                ),
                expandedEndpoints[idx] && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 pt-1 animate-in fade-in slide-in-from-top-1 duration-200", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-3", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "md:col-span-6 space-y-1.5", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-600 font-bold text-[12px]", children: "请求路径 (Path)" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1418,
                        columnNumber: 33
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        Input,
                        {
                          value: ep.path,
                          onChange: (e) => updateEndpoint(idx, "path", e.target.value),
                          placeholder: "如 /v1/search 或 /query/{{ip}}",
                          className: "rounded-lg h-9 border-slate-200 text-xs bg-white"
                        },
                        void 0,
                        false,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                          lineNumber: 1419,
                          columnNumber: 33
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1417,
                      columnNumber: 31
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "md:col-span-3 space-y-1.5", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-600 font-bold text-[12px]", children: "Method" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1428,
                        columnNumber: 33
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "select",
                        {
                          value: ep.method,
                          onChange: (e) => updateEndpoint(idx, "method", e.target.value),
                          className: "w-full h-9 px-2.5 text-xs bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-500 font-semibold",
                          children: [
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "POST", children: "POST" }, void 0, false, {
                              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                              lineNumber: 1434,
                              columnNumber: 35
                            }, void 0),
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "GET", children: "GET" }, void 0, false, {
                              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                              lineNumber: 1435,
                              columnNumber: 35
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                          lineNumber: 1429,
                          columnNumber: 33
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1427,
                      columnNumber: 31
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "md:col-span-3 space-y-1.5", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-600 font-bold text-[12px]", children: "请求格式 (Format)" }, void 0, false, {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1440,
                        columnNumber: 33
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "select",
                        {
                          value: ep.format,
                          onChange: (e) => updateEndpoint(idx, "format", e.target.value),
                          className: "w-full h-9 px-2.5 text-xs bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-500 font-semibold",
                          children: [
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "JSON", children: "JSON" }, void 0, false, {
                              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                              lineNumber: 1446,
                              columnNumber: 35
                            }, void 0),
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "FormData", children: "FormData" }, void 0, false, {
                              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                              lineNumber: 1447,
                              columnNumber: 35
                            }, void 0),
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "Raw", children: "Raw" }, void 0, false, {
                              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                              lineNumber: 1448,
                              columnNumber: 35
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                          lineNumber: 1441,
                          columnNumber: 33
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1439,
                      columnNumber: 31
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1416,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "text-slate-600 font-bold text-[12px]", children: "请求示例与语义描述 (Semantic Description & Request Example)" }, void 0, false, {
                      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                      lineNumber: 1454,
                      columnNumber: 31
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "textarea",
                      {
                        value: ep.description_example,
                        onChange: (e) => updateEndpoint(idx, "description_example", e.target.value),
                        placeholder: `支持多行，可输入 JSON 示例、OpenAPI 规范，并支持 {{variable}} 插值。例如：
{
  "ip": "{{ip}}",
  "lang": "zh-CN"
}`,
                        className: "w-full min-h-[80px] p-2.5 text-xs font-mono rounded-lg border border-slate-200 outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                      },
                      void 0,
                      false,
                      {
                        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                        lineNumber: 1455,
                        columnNumber: 31
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1453,
                    columnNumber: 29
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1415,
                  columnNumber: 27
                }, void 0)
              ] }, idx, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1383,
                columnNumber: 23
              }, void 0)) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1381,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1364,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1185,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1138,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "skill-desc", className: "text-slate-600 font-bold text-xs", children: "技能功能描述 (供 LLM 理解和执行规划)" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1473,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "textarea",
            {
              id: "skill-desc",
              value: desc,
              onChange: (e) => setDesc(e.target.value),
              placeholder: "在此描述该技能有哪些 Tools，可输入多行，以供大语言模型理解在什么场景下调度此服务...",
              className: "w-full min-h-[70px] p-3 text-xs rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-blue-500"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1474,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1472,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold text-slate-700 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Activity, { size: 12, className: "text-blue-500 animate-pulse" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1487,
                columnNumber: 19
              }, void 0),
              "接口连通性握手测试"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1486,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400", children: "在提交保存前，建议测试远程 SSE 端口或 API 状态。" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1490,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1485,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: [
            testResult === "success" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "bg-emerald-50 text-emerald-700 border-emerald-100 flex items-center gap-1 px-2.5 py-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CheckCircle2, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1495,
                columnNumber: 21
              }, void 0),
              "测试通过"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1494,
              columnNumber: 19
            }, void 0),
            testResult === "failed" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "bg-rose-50 text-rose-700 border-rose-100 flex items-center gap-1 px-2.5 py-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertTriangle, { size: 12 }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1501,
                columnNumber: 21
              }, void 0),
              "连接异常"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1500,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: isTesting || !isValidUrl(url),
                onClick: () => handleTestConnection(),
                className: "h-9 text-xs font-bold border-slate-200 hover:bg-slate-100",
                children: isTesting ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 12, className: "animate-spin mr-1.5" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                    lineNumber: 1515,
                    columnNumber: 23
                  }, void 0),
                  "连接中..."
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1514,
                  columnNumber: 21
                }, void 0) : "立即测试"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1505,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1492,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1484,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "pt-4 border-t border-slate-100", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => setIsOpen(false),
              className: "rounded-xl h-11 border-slate-200 text-slate-600 px-6",
              children: "取消"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1527,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "submit",
              disabled: !isFormValid || isTesting,
              className: "bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-11 px-8 font-bold text-xs",
              children: editingId ? "保存技能修改" : "确认挂载技能"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1535,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1526,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1136,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 1125,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 1121,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: importOpen, onOpenChange: setImportOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-2xl rounded-2xl p-6 gap-6", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-bold text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Layers, { className: "w-5 h-5 text-blue-600" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1552,
            columnNumber: 15
          }, void 0),
          "一键导入技能配置包"
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1551,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-slate-500", children: "请在此处粘贴符合规范的技能配置 JSON 字符串（支持单个配置对象或配置数组）。" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1555,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1550,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleImportSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "import-json", className: "text-slate-700 font-bold text-xs", children: "配置 JSON 文本" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
            lineNumber: 1562,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "textarea",
            {
              id: "import-json",
              value: importJsonText,
              onChange: (e) => setImportJsonText(e.target.value),
              placeholder: `[
  {
    "title": "系统核心能力包",
    "baseUrl": "/api/v1",
    "endpoints": [...]
  }
]`,
              className: "w-full min-h-[280px] p-3 text-xs font-mono rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-blue-500 bg-slate-50/50"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1563,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1561,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "pt-4 border-t border-slate-100", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => setImportOpen(false),
              className: "rounded-xl h-11 border-slate-200 text-slate-600 px-6 font-bold text-xs",
              children: "取消"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1573,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "submit",
              disabled: importing || !importJsonText.trim(),
              className: "bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11 px-8 font-bold text-xs shadow-md shadow-blue-100",
              children: importing ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { size: 16, className: "animate-spin mr-2" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                  lineNumber: 1588,
                  columnNumber: 21
                }, void 0),
                "导入中..."
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
                lineNumber: 1587,
                columnNumber: 19
              }, void 0) : "立即导入"
            },
            void 0,
            false,
            {
              fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
              lineNumber: 1581,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
          lineNumber: 1572,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1560,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 1549,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
      lineNumber: 1548,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: deleteConfirmOpen,
        onOpenChange: setDeleteConfirmOpen,
        title: "确定要卸载该技能吗？",
        description: `此操作将把 AI 技能 [${skillToDelete?.name || ""}] 从 D1 系统注册中心永久卸载，关联的 AI 员工将无法继续调度调用此工具。此操作不可撤销！`,
        confirmText: "确认永久卸载",
        cancelText: "我再想想",
        variant: "destructive",
        onConfirm: handleConfirmDelete
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1601,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      EmployeeTaskDialog,
      {
        isOpen: aiGenerateOpen,
        onClose: handleCloseAiDialog,
        employees: generateEmployees,
        selectedEmployeeId: selectedGenerateEmployeeId,
        onSelectEmployee: setSelectedGenerateEmployeeId,
        sessionId: aiSessionId,
        sessions: aiSessions,
        loadingSessions: loadingAiSessions,
        onSelectSession: setAiSessionId,
        onCreateSession: () => {
          void createAiSession();
        },
        onEnsureSession: () => ensureAiSessionPersisted(),
        onRenameSession: (id, title) => {
          void renameAiSession(id, title);
        },
        onDeleteSession: (id) => {
          const target = aiSessions.find((item) => item.id === id) || null;
          setAiSessionToDelete(target);
        },
        onBeforeSend: handleAiBeforeSend,
        onMessagesChange: handleAiMessagesChange,
        notice: aiNotice,
        isBusy: isAiBusy,
        title: "AI生成技能配置",
        description: "通过数字员工生成可导入的一键技能配置 JSON",
        settingsHref: "/admin/settings/ai",
        sizeStorageKey: "ai_skill_market_employee_task_dialog_size"
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1612,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ConfirmDialog,
      {
        open: !!aiSessionToDelete,
        onOpenChange: (open) => !open && setAiSessionToDelete(null),
        title: "确认删除任务记录？",
        description: aiSessionToDelete ? `删除后将不再显示“${aiSessionToDelete.title}”这条历史任务，是否继续？` : "删除后该条任务记录将不再显示。",
        confirmText: "删除任务",
        cancelText: "取消",
        variant: "destructive",
        layer: "nested",
        onConfirm: async () => {
          if (!aiSessionToDelete) return;
          const targetId = aiSessionToDelete.id;
          setAiSessionToDelete(null);
          const deletedSession = await deleteAiSession(targetId);
          if (deletedSession) {
            toast({
              title: "任务已删除",
              description: `已移除任务“${deletedSession.title}”。`
            });
          }
        }
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
        lineNumber: 1643,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/plugins/ai-skill-market/admin/index.tsx",
    lineNumber: 826,
    columnNumber: 5
  }, void 0);
};
export {
  AISkillMarket,
  AISkillMarket as default
};
