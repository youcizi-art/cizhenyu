globalThis.process ??= {};
globalThis.process.env ??= {};
const RESERVED_FIELD_DEFINITIONS = {
  status: {
    key: "status",
    label: "发布状态",
    type: "select",
    options: ["draft", "published"],
    defaultValue: "published",
    required: false,
    isListDisplay: true,
    capability: "public_visibility",
    publicVisibleValue: "published",
    description: "系统保留字段。用于控制公共 API 与站点地图中的发布可见性。",
    contractSummary: "固定结构：下拉单选，选项为 draft / published",
    capabilitySummary: "运行时能力：仅 published 可进入公共 API 与站点地图"
  },
  sort_order: {
    key: "sort_order",
    label: "排序",
    type: "number",
    defaultValue: 0,
    required: false,
    isListDisplay: true,
    validation: {
      numberMode: "integer",
      numberStep: 1,
      allowNegative: false
    },
    capability: "list_ordering",
    orderDirection: "desc",
    description: "系统保留字段。用于控制公共 API 与管理列表中的稳定排序，数值越大越靠前。",
    contractSummary: "固定结构：数字整数，默认值 0，不允许负数",
    capabilitySummary: "运行时能力：公共列表与管理列表按 sort_order 降序输出"
  }
};
const normalizeOptionKey = (option) => {
  if (option === null || option === void 0) return "";
  if (typeof option === "string") return option.trim();
  if (typeof option === "object") {
    return String(option.key ?? option.value ?? option.label ?? "").trim();
  }
  return String(option).trim();
};
const hasOwn = (target, key) => Object.prototype.hasOwnProperty.call(target, key);
const cloneDefinition = (definition) => ({
  ...definition,
  options: Array.isArray(definition.options) ? [...definition.options] : void 0,
  validation: definition.validation ? { ...definition.validation } : void 0
});
const isMeaningfulValue = (value) => {
  if (value === void 0 || value === null) return false;
  if (typeof value === "string") return value.trim() !== "";
  return true;
};
const hasValidationRules = (field) => {
  if (!field?.validation || typeof field.validation !== "object") {
    return false;
  }
  return Object.values(field.validation).some((value) => {
    if (value === void 0 || value === null) return false;
    if (typeof value === "string") return value.trim() !== "";
    if (typeof value === "number") return !Number.isNaN(value) && value !== 0;
    if (typeof value === "boolean") return value;
    return true;
  });
};
const isExactOptionList = (field, definition) => {
  const expected = Array.isArray(definition.options) ? definition.options : [];
  const actual = Array.isArray(field?.options) ? field.options.map(normalizeOptionKey) : [];
  if (expected.length === 0) {
    return actual.length === 0;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  return actual.every((value, index) => value === expected[index]);
};
const getReservedFieldDefinitions = () => Object.values(RESERVED_FIELD_DEFINITIONS).map(cloneDefinition);
const getReservedFieldDefinition = (fieldName) => {
  const normalizedName = String(fieldName || "").trim();
  const definition = RESERVED_FIELD_DEFINITIONS[normalizedName];
  if (!definition) {
    return null;
  }
  return cloneDefinition(definition);
};
const isReservedFieldName = (fieldName) => Boolean(getReservedFieldDefinition(fieldName));
const createReservedField = (fieldName) => {
  const definition = getReservedFieldDefinition(fieldName);
  if (!definition) {
    throw new Error(`未知的保留字段 [${fieldName}]`);
  }
  return {
    name: definition.key,
    type: definition.type,
    label: definition.label,
    options: Array.isArray(definition.options) ? [...definition.options] : void 0,
    defaultValue: definition.defaultValue,
    required: definition.required,
    isListDisplay: definition.isListDisplay,
    validation: definition.validation ? { ...definition.validation } : void 0
  };
};
const isExactValidationConfig = (field, definition) => {
  const expected = definition.validation || {};
  const actual = field?.validation && typeof field.validation === "object" ? field.validation : {};
  const actualKeys = Object.keys(actual).filter((key) => isMeaningfulValue(actual[key]));
  const keys = /* @__PURE__ */ new Set([...Object.keys(expected), ...actualKeys]);
  for (const key of keys) {
    if (!hasOwn(expected, key) || actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};
const validateReservedFieldDefinition = (field) => {
  const definition = getReservedFieldDefinition(field?.name);
  if (!definition) {
    return "";
  }
  if (field?.type !== definition.type) {
    return `保留字段 [${definition.key}] 的类型必须固定为 [${definition.type}]。`;
  }
  if (String(field?.label || "").trim() !== definition.label) {
    return `保留字段 [${definition.key}] 的显示名称必须固定为 [${definition.label}]。`;
  }
  if (!isExactOptionList(field, definition)) {
    const expectedOptions = Array.isArray(definition.options) ? definition.options.join(", ") : "无";
    return `保留字段 [${definition.key}] 的选项必须固定为 [${expectedOptions}]。`;
  }
  if (hasOwn(definition, "defaultValue") && field?.defaultValue !== definition.defaultValue) {
    return `保留字段 [${definition.key}] 的默认值必须固定为 [${definition.defaultValue}]。`;
  }
  if (Boolean(field?.required) !== definition.required) {
    return `保留字段 [${definition.key}] 的必填配置不可修改。`;
  }
  if (Boolean(field?.isListDisplay) !== definition.isListDisplay) {
    return `保留字段 [${definition.key}] 的列表展示配置不可修改。`;
  }
  if (String(field?.placeholder || "").trim()) {
    return `保留字段 [${definition.key}] 不允许设置占位提示。`;
  }
  if (Boolean(field?.multiple)) {
    return `保留字段 [${definition.key}] 不允许开启多值模式。`;
  }
  if (Boolean(field?.ui?.hidden)) {
    return `保留字段 [${definition.key}] 不允许被配置为隐藏字段。`;
  }
  if (!isExactValidationConfig(field, definition)) {
    return `保留字段 [${definition.key}] 的校验规则必须保持系统预设，不能手工改写。`;
  }
  if (!definition.validation && hasValidationRules(field)) {
    return `保留字段 [${definition.key}] 不允许追加自定义校验规则。`;
  }
  return "";
};
const resolveReservedFieldCapabilities = (fields = []) => {
  const capabilities = {};
  for (const field of Array.isArray(fields) ? fields : []) {
    const definition = getReservedFieldDefinition(field?.name);
    if (!definition) {
      continue;
    }
    if (validateReservedFieldDefinition(field)) {
      continue;
    }
    capabilities[definition.capability] = definition;
  }
  return capabilities;
};
const isReservedFieldPubliclyVisible = (data, fields = []) => {
  const capabilities = resolveReservedFieldCapabilities(fields);
  const definition = capabilities.public_visibility;
  if (!definition) {
    return true;
  }
  return String(data?.[definition.key] ?? "") === String(definition.publicVisibleValue ?? "");
};
const getReservedListOrdering = (fields = []) => {
  const capabilities = resolveReservedFieldCapabilities(fields);
  return capabilities.list_ordering || null;
};
export {
  getReservedListOrdering as a,
  isReservedFieldPubliclyVisible as b,
  createReservedField as c,
  getReservedFieldDefinition as d,
  getReservedFieldDefinitions as g,
  isReservedFieldName as i,
  resolveReservedFieldCapabilities as r,
  validateReservedFieldDefinition as v
};
