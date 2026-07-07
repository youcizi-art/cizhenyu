globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as generateId } from "./node_CRCzDpXu.mjs";
import { C, L, b, S, T, c } from "./node_CRCzDpXu.mjs";
function verifyRequestOrigin(origin, allowedDomains) {
  if (!origin || allowedDomains.length === 0) {
    return false;
  }
  const originHost = safeURL(origin)?.host ?? null;
  if (!originHost) {
    return false;
  }
  for (const domain of allowedDomains) {
    let host;
    if (domain.startsWith("http://") || domain.startsWith("https://")) {
      host = safeURL(domain)?.host ?? null;
    } else {
      host = safeURL("https://" + domain)?.host ?? null;
    }
    if (originHost === host) {
      return true;
    }
  }
  return false;
}
function safeURL(url) {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}
export {
  C as Cookie,
  L as LegacyScrypt,
  b as Lucia,
  S as Scrypt,
  T as TimeSpan,
  generateId,
  c as generateIdFromEntropySize,
  verifyRequestOrigin
};
