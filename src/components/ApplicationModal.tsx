import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AlertCircle, CheckCircle, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getLocaleFromPath } from "@/lib/locale";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  role: string;
};

const MAX_FILE_BYTES = 2_500_000;
const allowedExtensions = ["pdf", "doc", "docx"];

function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const ApplicationModal = ({ open, onOpenChange, role }: Props) => {
  const locale = getLocaleFromPath(useLocation().pathname);
  const en = locale === "en";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const reset = () => {
    setName(""); setEmail(""); setLinkedin(""); setMessage(""); setFile(null); setError(""); setSuccess(false); setSending(false);
  };

  const changeOpen = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const chooseFile = (next: File | null) => {
    setError("");
    if (!next) { setFile(null); return; }
    const ext = next.name.split(".").pop()?.toLowerCase() || "";
    if (!allowedExtensions.includes(ext)) {
      setError(en ? "Please upload a PDF, DOC or DOCX file." : "Bitte lade eine PDF-, DOC- oder DOCX-Datei hoch.");
      return;
    }
    if (next.size > MAX_FILE_BYTES) {
      setError(en ? "The CV may be up to 2.5 MB." : "Der Lebenslauf darf maximal 2,5 MB groß sein.");
      return;
    }
    setFile(next);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError(en ? "Name and email are required." : "Name und E-Mail sind erforderlich.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(en ? "Please enter a valid email address." : "Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    setSending(true);
    try {
      const attachment = file ? { filename: file.name, content: await fileToBase64(file), contentType: file.type || "application/octet-stream" } : null;
      const res = await fetch("/api/send-career-application", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ role, name: name.trim(), email: email.trim(), linkedin: linkedin.trim(), message: message.trim(), attachment }),
      });
      const data = await res.json().catch(() => ({})) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) throw new Error(data.message || (en ? "Application could not be sent." : "Bewerbung konnte nicht gesendet werden."));
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : (en ? "Application could not be sent." : "Bewerbung konnte nicht gesendet werden."));
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {success ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3"><CheckCircle className="h-10 w-10 text-primary" /></div>
            <DialogHeader className="items-center">
              <DialogTitle>{en ? "Application sent" : "Bewerbung gesendet"}</DialogTitle>
              <DialogDescription>{en ? "Thank you. We will get back to you as soon as possible." : "Vielen Dank. Wir melden uns so schnell wie möglich bei dir."}</DialogDescription>
            </DialogHeader>
            <Button onClick={() => changeOpen(false)}>{en ? "Close" : "Schließen"}</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{en ? "Apply now" : "Jetzt bewerben"}</DialogTitle>
              <DialogDescription>{role}</DialogDescription>
            </DialogHeader>
            <form id="career-application" onSubmit={submit} className="space-y-4">
              <div className="space-y-2"><Label htmlFor="career-name">{en ? "Name" : "Name"}</Label><Input id="career-name" value={name} onChange={(e) => setName(e.target.value)} required /></div>
              <div className="space-y-2"><Label htmlFor="career-email">{en ? "Email" : "E-Mail"}</Label><Input id="career-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
              <div className="space-y-2"><Label htmlFor="career-linkedin">LinkedIn {en ? "or portfolio (optional)" : "oder Portfolio (optional)"}</Label><Input id="career-linkedin" type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://" /></div>
              <div className="space-y-2"><Label htmlFor="career-message">{en ? "Message (optional)" : "Nachricht (optional)"}</Label><Textarea id="career-message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={en ? "Tell us briefly why you would like to join plyce." : "Erzähl uns kurz, warum du zu plyce möchtest."} /></div>
              <div className="space-y-2">
                <Label htmlFor="career-file">{en ? "CV (PDF, DOC, DOCX, max. 2.5 MB)" : "Lebenslauf (PDF, DOC, DOCX, max. 2,5 MB)"}</Label>
                <label htmlFor="career-file" className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-muted/30 p-4 hover:border-primary/40 transition-colors">
                  <Upload className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground truncate">{file ? file.name : (en ? "Choose file" : "Datei auswählen")}</span>
                </label>
                <input id="career-file" className="sr-only" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e) => chooseFile(e.target.files?.[0] || null)} />
              </div>
              {error && <div className="flex gap-2 rounded-lg bg-destructive/10 p-3"><AlertCircle className="h-5 w-5 text-destructive shrink-0"/><p className="text-sm text-destructive" role="alert">{error}</p></div>}
            </form>
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => changeOpen(false)}>{en ? "Cancel" : "Abbrechen"}</Button>
              <Button type="submit" form="career-application" disabled={sending}>{sending ? (en ? "Sending…" : "Wird gesendet…") : (en ? "Send application" : "Bewerbung senden")}</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
