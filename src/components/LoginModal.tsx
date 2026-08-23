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

type LoginModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const scrollLockGapProps = ["margin-right", "padding-right", "padding-left", "padding-top", "margin-left", "margin-top"] as const;
function undoBodyScrollLockGap() { const body = document.body; scrollLockGapProps.forEach((prop) => body.style.setProperty(prop, "0", "important")); }
function clearUndoBodyScrollLockGap() { const body = document.body; scrollLockGapProps.forEach((prop) => body.style.removeProperty(prop)); }

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const { pathname } = useLocation();
  const en = pathname === "/en" || pathname.startsWith("/en/");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useLayoutEffect(() => {
    if (!open) return;
    undoBodyScrollLockGap();
    const id = requestAnimationFrame(() => undoBodyScrollLockGap());
    return () => { cancelAnimationFrame(id); clearUndoBodyScrollLockGap(); };
  }, [open]);

  const handleOpenChange = (next: boolean) => {
    if (!next) { setError(""); setUsername(""); setPassword(""); }
    onOpenChange(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(en ? "Invalid username" : "Benutzername ungültig");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{en ? "Sign in" : "Anmelden"}</DialogTitle>
          <DialogDescription>{en ? "Enter your username and password." : "Gib deinen Benutzernamen und dein Passwort ein."}</DialogDescription>
        </DialogHeader>
        <form id="login-dummy-form" onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-username">{en ? "Username" : "Benutzername"}</Label>
            <Input id="login-username" name="username" type="text" autoComplete="username" value={username} onChange={(e) => { setUsername(e.target.value); if (error) setError(""); }} aria-invalid={!!error} aria-describedby={error ? "login-error" : undefined} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">{en ? "Password" : "Passwort"}</Label>
            <Input id="login-password" name="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error ? <p id="login-error" role="alert" className="text-sm font-medium text-destructive">{error}</p> : null}
        </form>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>{en ? "Cancel" : "Abbrechen"}</Button>
          <Button type="submit" form="login-dummy-form">{en ? "Sign in" : "Anmelden"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
