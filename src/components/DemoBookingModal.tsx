import { useLayoutEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type DemoBookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DEMO_EMAIL = "mail@plyce.app";

const demoApiUrl = (import.meta.env.VITE_DEMO_REQUEST_API_URL as string | undefined)?.trim() || "/api/send-demo-request";

const scrollLockGapProps = [
  "margin-right",
  "padding-right",
  "padding-left",
  "padding-top",
  "margin-left",
  "margin-top",
] as const;

function undoBodyScrollLockGap() {
  const body = document.body;
  scrollLockGapProps.forEach((prop) => body.style.setProperty(prop, "0", "important"));
}

function clearUndoBodyScrollLockGap() {
  const body = document.body;
  scrollLockGapProps.forEach((prop) => body.style.removeProperty(prop));
}

function buildMessageBody(
  name: string,
  email: string,
  company: string,
  phone: string,
  message: string,
) {
  return [
    "Demo-Anfrage über die plyce-Website",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Firma: ${company || "—"}`,
    `Telefon: ${phone || "—"}`,
    "",
    "Nachricht:",
    message || "—",
  ].join("\n");
}

const DemoBookingModal = ({ open, onOpenChange }: DemoBookingModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useLayoutEffect(() => {
    if (!open) return;
    undoBodyScrollLockGap();
    const id = requestAnimationFrame(() => undoBodyScrollLockGap());
    return () => {
      cancelAnimationFrame(id);
      clearUndoBodyScrollLockGap();
    };
  }, [open]);

  const reset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");
    setError("");
    setSuccess(false);
    setIsSubmitting(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const openMailto = () => {
    const subject = "Demo-Anfrage plyce";
    const body = buildMessageBody(name.trim(), email.trim(), company.trim(), phone.trim(), message.trim());
    window.location.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    handleOpenChange(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Bitte Name und E-Mail ausfüllen.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Bitte eine gültige E-Mail-Adresse eingeben.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(demoApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        const msg = typeof data.message === "string" ? data.message : "Senden ist fehlgeschlagen.";
        throw new Error(msg);
      }
      setSuccess(true);
      window.setTimeout(() => handleOpenChange(false), 2000);
    } catch (err) {
      if (err instanceof TypeError) {
        setError(
          "Verbindung zum Server fehlgeschlagen. Prüfen Sie die Netzwerkverbindung oder nutzen Sie die E-Mail-Alternative unten.",
        );
      } else {
        setError(err instanceof Error ? err.message : "Senden ist fehlgeschlagen. Bitte versuchen Sie es später erneut.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <DialogHeader>
            <DialogTitle>Vielen Dank</DialogTitle>
            <DialogDescription>
              Ihre Demo-Anfrage ist unterwegs. Wir melden uns bei Ihnen.
            </DialogDescription>
          </DialogHeader>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request Demo</DialogTitle>
              <DialogDescription className="text-pretty">
                Bitte hinterlassen Sie Ihre Kontaktdaten. Wir melden uns zeitnah bei Ihnen.
                <br />
                <br />
                Ihre Anfrage wird direkt an unser Team unter{" "}
                <a href={`mailto:${DEMO_EMAIL}`} className="font-medium text-primary hover:underline">
                  {DEMO_EMAIL}
                </a>{" "}
                weitergeleitet. Alternativ können Sie Ihr E-Mail-Programm mit einer vorgefertigten Nachricht öffnen.
              </DialogDescription>
            </DialogHeader>

            <form id="demo-booking-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="demo-name">Name</Label>
                <Input
                  id="demo-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Vor- und Nachname"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-email">E-Mail</Label>
                <Input
                  id="demo-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="name@firma.de"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-company">Firma (optional)</Label>
                <Input
                  id="demo-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-phone">Telefon (optional)</Label>
                <Input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-message">Ihre Nachricht (optional)</Label>
                <Textarea
                  id="demo-message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="z. B. Teamgröße, gewünschte Themen …"
                />
              </div>
              {error ? (
                <p role="alert" className="text-sm font-medium text-destructive">
                  {error}
                </p>
              ) : null}
            </form>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                Abbrechen
              </Button>
              <Button type="submit" form="demo-booking-form" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet …" : "Anfrage senden"}
              </Button>
            </DialogFooter>
            <p className="text-center text-sm text-muted-foreground -mt-1">
              <button type="button" className="text-primary underline underline-offset-4 hover:text-primary/90" onClick={openMailto}>
                Stattdessen E-Mail-App öffnen
              </button>
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoBookingModal;
