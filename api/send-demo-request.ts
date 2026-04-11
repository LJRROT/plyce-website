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

/* ---------- validation ---------- */

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type DemoPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

function validateBody(body: unknown): DemoPayload | { error: string } {
  if (!body || typeof body !== "object") return { error: "Ungültige Anfrage." };
  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const company = typeof o.company === "string" ? o.company.trim() : "";
  const phone = typeof o.phone === "string" ? o.phone.trim() : "";
  const message = typeof o.message === "string" ? o.message.trim() : "";
  if (!name || !email) return { error: "Name und E-Mail sind erforderlich." };
  if (!emailRe.test(email)) return { error: "Ungültige E-Mail-Adresse." };
  return { name, email, company, phone, message };
}

/* ---------- handler ---------- */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "OPTIONS") {
      Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
      return res.status(204).end();
    }

    if (req.method !== "POST") {
      return json(res, 405, { ok: false, message: "Method not allowed" });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.RESEND_FROM_EMAIL?.trim();
    const to = process.env.DEMO_REQUEST_TO_EMAIL?.trim();

    if (!apiKey || !from || !to) {
      return json(res, 503, {
        ok: false,
        message: "Demo-Anfrage ist derzeit nicht konfiguriert.",
      });
    }

    const parsed = validateBody(req.body);
    if ("error" in parsed) {
      return json(res, 400, { ok: false, message: parsed.error });
    }

    const text = [
      "Demo-Anfrage über die plyce-Website",
      "",
      `Name: ${parsed.name}`,
      `E-Mail: ${parsed.email}`,
      `Firma: ${parsed.company || "—"}`,
      `Telefon: ${parsed.phone || "—"}`,
      "",
      "Nachricht:",
      parsed.message || "—",
    ].join("\n");

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: parsed.email,
        subject: `Demo-Anfrage plyce — ${parsed.name}`,
        text,
      }),
    });

    if (resendRes.ok) {
      return json(res, 200, { ok: true });
    }

    let message = "E-Mail konnte nicht gesendet werden.";
    try {
      const errJson = (await resendRes.json()) as { message?: string };
      if (typeof errJson.message === "string") message = errJson.message;
    } catch { /* ignore */ }

    const status = resendRes.status >= 400 && resendRes.status < 600 ? resendRes.status : 502;
    return json(res, status, { ok: false, message });
  } catch (err) {
    console.error("send-demo-request error:", err);
    return json(res, 500, {
      ok: false,
      message: "Interner Serverfehler. Bitte versuchen Sie es später erneut.",
    });
  }
}
