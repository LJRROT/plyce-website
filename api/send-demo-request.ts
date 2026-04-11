import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendDemoViaResend, validateDemoPayload } from "../server/sendDemoViaResend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

function json(res: VercelResponse, status: number, body: object) {
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
  return res.status(status).json(body);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

  const parsed = validateDemoPayload(req.body);
  if ("error" in parsed) {
    return json(res, 400, { ok: false, message: parsed.error });
  }

  const result = await sendDemoViaResend(parsed, { apiKey, from, to });
  if (!result.ok) {
    const status = result.status >= 400 && result.status < 600 ? result.status : 502;
    return json(res, status, { ok: false, message: result.message });
  }

  return json(res, 200, { ok: true });
}
