import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
import { CheckCircle, AlertCircle } from "lucide-react";

type DemoBookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DEMO_EMAIL = "mail@plyce.app";
const demoApiUrl = (import.meta.env.VITE_DEMO_REQUEST_API_URL as string | undefined)?.trim() || "/api/send-demo-request";
const scrollLockGapProps = ["margin-right", "padding-right", "padding-left", "padding-top", "margin-left", "margin-top"] as const;
function undoBodyScrollLockGap() { const body = document.body; scrollLockGapProps.forEach((prop) => body.style.setProperty(prop, "0", "important")); }
function clearUndoBodyScrollLockGap() { const body = document.body; scrollLockGapProps.forEach((prop) => body.style.removeProperty(prop)); }

const DemoBookingModal = ({ open, onOpenChange }: DemoBookingModalProps) => {
  const { pathname } = useLocation();
  const en = pathname === "/en" || pathname.startsWith("/en/");
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
    return () => { cancelAnimationFrame(id); clearUndoBodyScrollLockGap(); };
  }, [open]);

  const reset = () => { setName(""); setEmail(""); setCompany(""); setPhone(""); setMessage(""); setError(""); setSuccess(false); setIsSubmitting(false); };
  const handleOpenChange = (next: boolean) => { if (!next) reset(); onOpenChange(next); };

  const buildMessageBody = () => [
    en ? "Demo request via the plyce website" : "Demo-Anfrage über die plyce-Website",
    "",
    `Name: ${name.trim()}`,
    `${en ? "Email" : "E-Mail"}: ${email.trim()}`,
    `${en ? "Company" : "Firma"}: ${company.trim() || "—"}`,
    `${en ? "Phone" : "Telefon"}: ${phone.trim() || "—"}`,
    "",
    en ? "Message:" : "Nachricht:",
    message.trim() || "—",
  ].join("\n");

  const openMailto = () => {
    const subject = en ? "plyce demo request" : "Demo-Anfrage plyce";
    window.location.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessageBody())}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) { setError(en ? "Please enter your name and email address." : "Bitte Name und E-Mail ausfüllen."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setError(en ? "Please enter a valid email address." : "Bitte eine gültige E-Mail-Adresse eingeben."); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch(demoApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), company: company.trim(), phone: phone.trim(), message: message.trim() }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        throw new Error(typeof data.message === "string" ? data.message : (en ? `Sending failed (status ${res.status}). Please try again later.` : `Senden fehlgeschlagen (Status ${res.status}). Bitte versuchen Sie es später erneut.`));
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : (en ? "Sending failed. Please try again later." : "Senden fehlgeschlagen. Bitte versuchen Sie es später erneut."));
    } finally { setIsSubmitting(false); }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
            <div className="rounded-full bg-green-100 p-3"><CheckCircle className="h-10 w-10 text-green-600" /></div>
            <DialogHeader className="items-center">
              <DialogTitle className="text-xl">{en ? "Request sent successfully!" : "Anfrage erfolgreich gesendet!"}</DialogTitle>
              <DialogDescription className="text-base">{en ? "Thank you. We will get back to you shortly." : "Vielen Dank — wir melden uns zeitnah bei Ihnen."}</DialogDescription>
            </DialogHeader>
            <Button className="mt-2" onClick={() => handleOpenChange(false)}>{en ? "Close" : "Schließen"}</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{en ? "Request a demo" : "Demo anfragen"}</DialogTitle>
              <DialogDescription className="text-pretty">{en ? "Leave your contact details and we will get back to you shortly." : "Bitte hinterlassen Sie Ihre Kontaktdaten. Wir melden uns zeitnah bei Ihnen."}</DialogDescription>
            </DialogHeader>
            <form id="demo-booking-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2"><Label htmlFor="demo-name">Name</Label><Input id="demo-name" name="name" type="text" autoComplete="name" required value={name} onChange={(e) => { setName(e.target.value); if (error) setError(""); }} placeholder={en ? "First and last name" : "Vor- und Nachname"} /></div>
              <div className="space-y-2"><Label htmlFor="demo-email">Email</Label><Input id="demo-email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }} placeholder="name@company.com" /></div>
              <div className="space-y-2"><Label htmlFor="demo-company">{en ? "Company (optional)" : "Firma (optional)"}</Label><Input id="demo-company" name="company" type="text" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} /></div>
              <div className="space-y-2"><Label htmlFor="demo-phone">{en ? "Phone (optional)" : "Telefon (optional)"}</Label><Input id="demo-phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
              <div className="space-y-2"><Label htmlFor="demo-message">{en ? "Your message (optional)" : "Ihre Nachricht (optional)"}</Label><Textarea id="demo-message" name="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={en ? "e.g. team size, topics you would like to cover…" : "z. B. Teamgröße, gewünschte Themen …"} /></div>
              {error && <div className="flex items-start gap-2 rounded-md bg-destructive/10 p-3"><AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" /><p role="alert" className="text-sm font-medium text-destructive">{error}</p></div>}
            </form>
            <DialogFooter className="gap-2 sm:gap-0">
              <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>{en ? "Cancel" : "Abbrechen"}</Button>
              <Button type="submit" form="demo-booking-form" disabled={isSubmitting}>{isSubmitting ? (en ? "Sending…" : "Wird gesendet …") : (en ? "Send request" : "Anfrage senden")}</Button>
            </DialogFooter>
            <p className="text-center text-sm text-muted-foreground -mt-1"><button type="button" className="text-primary underline underline-offset-4 hover:text-primary/90" onClick={openMailto}>{en ? "Open your email app instead" : "Stattdessen E-Mail-App öffnen"}</button></p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoBookingModal;
