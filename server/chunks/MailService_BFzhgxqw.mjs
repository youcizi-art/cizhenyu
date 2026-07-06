globalThis.process ??= {};
globalThis.process.env ??= {};
import { f as createDbClient, e as eq, h as systemSettings, j as mailTemplates } from "./index_C8hkm3Ad.mjs";
class MailService {
  /**
   * 发送系统邮件
   */
  static async sendMail(env, options) {
    const db = await createDbClient(env.DB);
    const record = await db.query.systemSettings.findFirst({
      where: eq(systemSettings.key, "mail_config")
    });
    if (!record) {
      throw new Error("系统尚未配置邮件发送功能（缺少 mail_config 设置）。");
    }
    const config = JSON.parse(record.value);
    console.log(`[MailService] Provider: ${config.provider_type}, To: ${options.to}`);
    const recipients = Array.isArray(options.to) ? options.to : [options.to];
    const senderEmail = config.sender_email || "onboarding@resend.dev";
    const from = options.senderName ? `${options.senderName} <${senderEmail}>` : senderEmail;
    if (config.provider_type === "resend") {
      if (!config.resend_api_key) {
        throw new Error("Resend API Key is missing.");
      }
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${config.resend_api_key}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from,
          to: recipients,
          subject: options.subject,
          html: options.html
        })
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Resend API failed: ${res.status} ${err}`);
      }
      return true;
    } else if (config.provider_type === "smtp") {
      if (!config.smtp_config || !config.smtp_config.host || !config.smtp_config.port || !config.smtp_config.user || !config.smtp_config.pass) {
        throw new Error("SMTP 邮件服务器配置不完整。");
      }
      const { connect } = await import("cloudflare:sockets");
      const smtpClient = new SMTPClient(
        config.smtp_config.host,
        config.smtp_config.port,
        config.smtp_config.user,
        config.smtp_config.pass,
        connect
      );
      await smtpClient.send(
        config.sender_email || config.smtp_config.user,
        recipients,
        options.subject,
        options.html,
        options.senderName
      );
      return true;
    }
    return false;
  }
  /**
   * 使用数据库模板发送邮件
   */
  static async sendWithTemplate(env, options) {
    const db = await createDbClient(env.DB);
    const template = await db.query.mailTemplates.findFirst({
      where: eq(mailTemplates.slug, options.templateSlug)
    });
    if (!template) {
      throw new Error(`邮件模板不存在: ${options.templateSlug}`);
    }
    let html = template.content;
    let subject = template.subject;
    Object.entries(options.vars).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, "g");
      html = html.replace(regex, value);
      subject = subject.replace(regex, value);
    });
    return this.sendMail(env, {
      to: options.to,
      subject,
      html,
      senderName: options.senderName
    });
  }
}
class SMTPClient {
  constructor(host, port, user, pass, connectFn) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.pass = pass;
    this.connectFn = connectFn;
  }
  host;
  port;
  user;
  pass;
  connectFn;
  socket;
  reader;
  writer;
  encoder = new TextEncoder();
  decoder = new TextDecoder();
  buffer = "";
  async send(from, to, subject, html, fromName) {
    const useTLS = this.port === 465;
    this.socket = this.connectFn(
      { hostname: this.host, port: this.port },
      useTLS ? { secureTransport: "on" } : {}
    );
    this.reader = this.socket.readable.getReader();
    this.writer = this.socket.writable.getWriter();
    try {
      let res = await this.readResponse();
      if (!res.startsWith("220")) throw new Error(`SMTP 问候失败: ${res}`);
      await this.sendCommand(`EHLO ${this.host}`);
      res = await this.readResponse();
      if (!res.startsWith("250")) throw new Error(`EHLO 失败: ${res}`);
      if (!useTLS && res.includes("STARTTLS")) {
        await this.sendCommand("STARTTLS");
        res = await this.readResponse();
        if (!res.startsWith("220")) throw new Error(`STARTTLS 失败: ${res}`);
        this.writer.releaseLock();
        this.reader.releaseLock();
        this.socket = this.socket.startTls();
        this.reader = this.socket.readable.getReader();
        this.writer = this.socket.writable.getWriter();
        await this.sendCommand(`EHLO ${this.host}`);
        res = await this.readResponse();
        if (!res.startsWith("250")) throw new Error(`STARTTLS 后 EHLO 失败: ${res}`);
      }
      await this.sendCommand("AUTH LOGIN");
      res = await this.readResponse();
      if (!res.startsWith("334")) throw new Error(`AUTH LOGIN 认证阶段失败: ${res}`);
      await this.sendCommand(btoa(this.user));
      res = await this.readResponse();
      if (!res.startsWith("334")) throw new Error(`SMTP 账户用户名校验失败: ${res}`);
      await this.sendCommand(btoa(this.pass));
      res = await this.readResponse();
      if (!res.startsWith("235")) throw new Error(`SMTP 账户密码校验失败: ${res}`);
      const fromEmail = from.includes("<") ? from.split("<")[1].split(">")[0] : from;
      await this.sendCommand(`MAIL FROM:<${fromEmail}>`);
      res = await this.readResponse();
      if (!res.startsWith("250")) throw new Error(`MAIL FROM 设定失败: ${res}`);
      for (const recipient of to) {
        await this.sendCommand(`RCPT TO:<${recipient}>`);
        res = await this.readResponse();
        if (!res.startsWith("250") && !res.startsWith("251")) {
          throw new Error(`RCPT TO <${recipient}> 设定失败: ${res}`);
        }
      }
      await this.sendCommand("DATA");
      res = await this.readResponse();
      if (!res.startsWith("354")) throw new Error(`DATA 初始化失败: ${res}`);
      const boundary = "----=_Part_" + Math.random().toString(36).substring(2, 15);
      const toHeader = to.join(", ");
      const mailHeaders = [
        `From: ${fromName ? `=?UTF-8?B?${btoa(unescape(encodeURIComponent(fromName)))}?= <${fromEmail}>` : fromEmail}`,
        `To: ${toHeader}`,
        `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
        `MIME-Version: 1.0`,
        `Content-Type: multipart/alternative; boundary="${boundary}"`,
        `Date: ${(/* @__PURE__ */ new Date()).toUTCString()}`,
        `Message-ID: <${crypto.randomUUID()}@${this.host}>`,
        ""
      ].join("\r\n");
      const mailBody = [
        `--${boundary}`,
        `Content-Type: text/html; charset="utf-8"`,
        `Content-Transfer-Encoding: base64`,
        "",
        btoa(unescape(encodeURIComponent(html))),
        "",
        `--${boundary}--`,
        ""
      ].join("\r\n");
      await this.sendRaw(mailHeaders + mailBody + ".\r\n");
      res = await this.readResponse();
      if (!res.startsWith("250")) throw new Error(`MIME 内容传输失败: ${res}`);
      await this.sendCommand("QUIT");
    } finally {
      if (this.writer) this.writer.releaseLock();
      if (this.reader) this.reader.releaseLock();
      if (this.socket) await this.socket.close();
    }
  }
  async sendCommand(cmd) {
    await this.writer.write(this.encoder.encode(cmd + "\r\n"));
  }
  async sendRaw(data) {
    await this.writer.write(this.encoder.encode(data));
  }
  async readResponse() {
    while (true) {
      const lines = this.buffer.split("\r\n");
      if (lines.length > 1) {
        for (let i = 0; i < lines.length - 1; i++) {
          const line = lines[i];
          if (/^\d{3} /.test(line)) {
            const response = lines.slice(0, i + 1).join("\r\n");
            this.buffer = lines.slice(i + 1).join("\r\n");
            return response;
          }
        }
      }
      const { value, done } = await this.reader.read();
      if (done) {
        if (this.buffer.length > 0) {
          const response = this.buffer;
          this.buffer = "";
          return response;
        }
        throw new Error("套接字连接意外中断");
      }
      this.buffer += this.decoder.decode(value);
    }
  }
}
export {
  MailService
};
