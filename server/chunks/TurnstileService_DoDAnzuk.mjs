globalThis.process ??= {};
globalThis.process.env ??= {};
class TurnstileService {
  /**
   * 验证 Turnstile Token
   */
  static async verifyToken(secretKey, token, ip) {
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
    return data.success;
  }
}
export {
  TurnstileService
};
