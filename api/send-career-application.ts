import type { VercelRequest, VercelResponse } from "@vercel/node";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

function json(res: VercelResponse, status: number, body: object) {
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
  return res.status(status).json(body);
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BASE64_LENGTH = 3_500_000;
const allowedExtensions = ["pdf", "doc", "docx"];

type Attachment = { filename: string; content: string; contentType?: string } | null;
type Payload = { role: string; name: string; email: string; linkedin: string; message: string; attachment: Attachment };

function validateBody(body: unknown): Payload | { error: string } {
  if (!body || typeof body !== "object") return { error: "Invalid request." };
  const o = body as Record<string, unknown>;
  const role = typeof o.role === "string" ? o.role.trim().slice(0, 160) : "";
  const name = typeof o.name === "string" ? o.name.trim().slice(0, 160) : "";
  const email = typeof o.email === "string" ? o.email.trim().slice(0, 320) : "";
  const linkedin = typeof o.linkedin === "string" ? o.linkedin.trim().slice(0, 600) : "";
  const message = typeof o.message === "string" ? o.message.trim().slice(0, 5000) : "";
  if (!role || !name || !email) return { error: "Role, name and email are required." };
  if (!emailRe.test(email)) return { error: "Invalid email address." };

  let attachment: Attachment = null;
  if (o.attachment && typeof o.attachment === "object") {
    const a = o.attachment as Record<string, unknown>;
    const filename = typeof a.filename === "string" ? a.filename.trim().replace(/[\r\n]/g, "").slice(0, 180) : "";
    const content = typeof a.content === "string" ? a.content : "";
    const contentType = typeof a.contentType === "string" ? a.contentType.trim().slice(0, 120) : undefined;
    const ext = filename.split(".").pop()?.toLowerCase() || "";
    if (!filename || !content || !allowedExtensions.includes(ext)) return { error: "Invalid CV attachment." };
    if (content.length > MAX_BASE64_LENGTH) return { error: "CV attachment is too large." };
    attachment = { filename, content, contentType };
  }

  return { role, name, email, linkedin, message, attachment };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "OPTIONS") {
      Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
      return res.status(204).end();
    }
    if (req.method !== "POST") return json(res, 405, { ok: false, message: "Method not allowed" });

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.RESEND_FROM_EMAIL?.trim();
    const to = process.env.CAREER_APPLICATION_TO_EMAIL?.trim() || process.env.DEMO_REQUEST_TO_EMAIL?.trim();
    if (!apiKey || !from || !to) return json(res, 503, { ok: false, message: "Career applications are not configured." });

    const parsed = validateBody(req.body);
    if ("error" in parsed) return json(res, 400, { ok: false, message: parsed.error });

    const text = [
      "Neue Bewerbung über plyce.app",
      "",
      `Position: ${parsed.role}`,
      `Name: ${parsed.name}`,
      `E-Mail: ${parsed.email}`,
      `LinkedIn / Portfolio: ${parsed.linkedin || "—"}`,
      "",
      "Nachricht:",
      parsed.message || "—",
      "",
      parsed.attachment ? `Anhang: ${parsed.attachment.filename}` : "Anhang: —",
    ].join("\n");

    const payload: Record<string, unknown> = {
      from,
      to: [to],
      reply_to: parsed.email,
      subject: `Bewerbung plyce — ${parsed.role} — ${parsed.name}`,
      text,
    };
    if (parsed.attachment) {
      payload.attachments = [{ filename: parsed.attachment.filename, content: parsed.attachment.content, content_type: parsed.attachment.contentType }];
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (resendRes.ok) return json(res, 200, { ok: true });
    let message = "Application email could not be sent.";
    try {
      const errJson = (await resendRes.json()) as { message?: string };
      if (typeof errJson.message === "string") message = errJson.message;
    } catch { /* ignore */ }
    return json(res, resendRes.status >= 400 && resendRes.status < 600 ? resendRes.status : 502, { ok: false, message });
  } catch (err) {
    console.error("send-career-application error:", err);
    return json(res, 500, { ok: false, message: "Internal server error." });
  }
}
