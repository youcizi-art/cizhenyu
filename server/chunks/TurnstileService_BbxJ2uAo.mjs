globalThis.process ??= {};
globalThis.process.env ??= {};
class TurnstileService {
  /**
   * 验证 Turnstile Token
   */
  static async verifyToken(secretKey, token, ip, expectedHostname) {
    if (!token) return false;
    const formData = new FormData();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (ip) formData.append("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    if (!data.success) return false;
    if (expectedHostname) {
      const normalizedExpected = String(expectedHostname).trim().toLowerCase();
      const normalizedActual = String(data.hostname || "").trim().toLowerCase();
      if (!normalizedActual || normalizedActual !== normalizedExpected) {
        return false;
      }
    }
    return true;
  }
}
export {
  TurnstileService
};
