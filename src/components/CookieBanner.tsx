import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { localizePath } from "@/lib/locale";

const CookieBanner = () => {
  const { pathname } = useLocation();
  const en = pathname === "/en" || pathname.startsWith("/en/");
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    const consent = localStorage.getItem("plyce-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openFromFooter = () => {
      const raw = localStorage.getItem("plyce-cookie-consent");
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as { analytics?: boolean; marketing?: boolean };
          setPreferences({ necessary: true, analytics: !!parsed.analytics, marketing: !!parsed.marketing });
        } catch {}
      }
      setVisible(true);
      setShowSettings(true);
    };
    window.addEventListener("plyce-open-cookie-settings", openFromFooter);
    return () => window.removeEventListener("plyce-open-cookie-settings", openFromFooter);
  }, []);

  const store = (value: { necessary: boolean; analytics: boolean; marketing: boolean }) => {
    localStorage.setItem("plyce-cookie-consent", JSON.stringify(value));
    setVisible(false);
    setShowSettings(false);
  };
  const acceptAll = () => store({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => store({ necessary: true, analytics: false, marketing: false });
  const saveSettings = () => store(preferences);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] animate-reveal-up" role="dialog" aria-modal="true" aria-labelledby="cookie-banner-title">
      <div className="container-tight max-h-[min(88dvh,calc(100dvh-0.75rem))] flex flex-col">
        <div className="rounded-2xl bg-background border border-border shadow-2xl flex flex-col min-h-0 overflow-hidden">
          <div className="overflow-y-auto overscroll-contain px-4 pt-4 pb-2 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
            <h3 id="cookie-banner-title" className="text-base sm:text-lg font-semibold mb-2">{en ? "Cookie settings" : "Cookie-Einstellungen"}</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              {en ? "We use cookies to optimise our website and service. You can choose which categories you allow." : "Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren. Sie können selbst entscheiden, welche Kategorien Sie zulassen."}
            </p>
            {showSettings && (
              <div className="mb-2 space-y-2 sm:space-y-3">
                <label className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 touch-manipulation">
                  <input type="checkbox" checked disabled className="rounded accent-primary h-4 w-4 mt-0.5 shrink-0" />
                  <div><span className="text-sm font-medium">{en ? "Necessary" : "Notwendig"}</span><span className="text-xs text-muted-foreground block leading-snug">{en ? "Essential for using the website" : "Essentiell für die Nutzung der Website"}</span></div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 cursor-pointer touch-manipulation">
                  <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} className="rounded accent-primary h-4 w-4 mt-0.5 shrink-0" />
                  <div><span className="text-sm font-medium">{en ? "Analytics" : "Analyse"}</span><span className="text-xs text-muted-foreground block leading-snug">{en ? "Helps us understand how the website is used" : "Hilft uns die Nutzung der Website zu verstehen"}</span></div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 cursor-pointer touch-manipulation">
                  <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} className="rounded accent-primary h-4 w-4 mt-0.5 shrink-0" />
                  <div><span className="text-sm font-medium">Marketing</span><span className="text-xs text-muted-foreground block leading-snug">{en ? "Personalised advertising and content" : "Personalisierte Werbung und Inhalte"}</span></div>
                </label>
              </div>
            )}
          </div>
          <div className="flex-shrink-0 border-t border-border/70 px-4 py-3 sm:px-6 sm:py-4 md:px-8 bg-muted/20">
            {!showSettings ? (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <Button variant="outline" className="w-full min-h-11 justify-center" onClick={rejectAll}>{en ? "Reject all" : "Alle ablehnen"}</Button>
                  <Button variant="default" className="w-full min-h-11 justify-center" onClick={acceptAll}>{en ? "Accept all" : "Alle akzeptieren"}</Button>
                </div>
                <Button variant="ghost" className="w-full min-h-11 justify-center" onClick={() => setShowSettings(true)}>{en ? "Settings" : "Einstellungen"}</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <Button variant="outline" className="w-full min-h-11 justify-center sm:order-1" onClick={() => setShowSettings(false)}>{en ? "Back" : "Zurück"}</Button>
                <Button variant="default" className="w-full min-h-11 justify-center sm:order-2" onClick={saveSettings}>{en ? "Save" : "Speichern"}</Button>
              </div>
            )}
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <Link to={localizePath("/datenschutz", en ? "en" : "de")} className="hover:text-primary transition-colors underline underline-offset-2 py-1.5 min-h-11 sm:min-h-0 inline-flex items-center">{en ? "Privacy Policy" : "Datenschutzerklärung"}</Link>
              <span className="text-border/80 hidden sm:inline" aria-hidden>|</span>
              <Link to={localizePath("/impressum", en ? "en" : "de")} className="hover:text-primary transition-colors underline underline-offset-2 py-1.5 min-h-11 sm:min-h-0 inline-flex items-center">{en ? "Legal Notice" : "Impressum"}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;