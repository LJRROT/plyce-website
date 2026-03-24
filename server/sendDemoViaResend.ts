export type DemoPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
};

export function buildDemoEmailText(payload: DemoPayload): string {
  const { name, email, company, phone, message } = payload;
  return [
    "Demo-Anfrage über die plyce-Website",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Firma: ${company?.trim() || "—"}`,
    `Telefon: ${phone?.trim() || "—"}`,
    "",
    "Nachricht:",
    message?.trim() || "—",
  ].join("\n");
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateDemoPayload(body: unknown): DemoPayload | { error: string } {
  if (!body || typeof body !== "object") return { error: "Ungültige Anfrage." };
  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const company = typeof o.company === "string" ? o.company : "";
  const phone = typeof o.phone === "string" ? o.phone : "";
  const message = typeof o.message === "string" ? o.message : "";
  if (!name || !email) return { error: "Name und E-Mail sind erforderlich." };
  if (!emailRe.test(email)) return { error: "Ungültige E-Mail-Adresse." };
  return { name, email, company, phone, message };
}

export type ResendEnv = {
  apiKey: string;
  from: string;
  to: string;
};

export async function sendDemoViaResend(
  payload: DemoPayload,
  env: ResendEnv,
): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const text = buildDemoEmailText(payload);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.from,
      to: [env.to],
      reply_to: payload.email,
      subject: `Demo-Anfrage plyce — ${payload.name}`,
      text,
    }),
  });

  if (res.ok) return { ok: true };

  let message = "E-Mail konnte nicht gesendet werden.";
  try {
    const errJson = (await res.json()) as { message?: string };
    if (typeof errJson.message === "string") message = errJson.message;
  } catch {
    /* ignore */
  }
  return { ok: false, status: res.status, message };
}
