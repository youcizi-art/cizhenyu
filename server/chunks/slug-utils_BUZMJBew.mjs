globalThis.process ??= {};
globalThis.process.env ??= {};
function toAiSafeName(slug) {
  if (!slug) return "";
  return slug.replace(/_/g, "__u__").replace(/\//g, "__s__").replace(/-/g, "__h__").replace(/\./g, "__d__").replace(/:/g, "__c__").replace(/[^a-zA-Z0-9_]/g, "");
}
function fromAiSafeName(safeName) {
  if (!safeName) return "";
  return safeName.replace(/__h__/g, "-").replace(/__s__/g, "/").replace(/__d__/g, ".").replace(/__c__/g, ":").replace(/__u__/g, "_");
}
function isAiSafeName(name) {
  return /__(h|s|u|d|c)__/.test(name);
}
export {
  fromAiSafeName as f,
  isAiSafeName as i,
  toAiSafeName as t
};
