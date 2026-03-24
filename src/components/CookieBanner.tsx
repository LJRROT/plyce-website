import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

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
          setPreferences({
            necessary: true,
            analytics: !!parsed.analytics,
            marketing: !!parsed.marketing,
          });
        } catch {
          /* keep current preferences */
        }
      }
      setVisible(true);
      setShowSettings(true);
    };
    window.addEventListener("plyce-open-cookie-settings", openFromFooter);
    return () => window.removeEventListener("plyce-open-cookie-settings", openFromFooter);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("plyce-cookie-consent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setVisible(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    localStorage.setItem("plyce-cookie-consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setVisible(false);
    setShowSettings(false);
  };

  const saveSettings = () => {
    localStorage.setItem("plyce-cookie-consent", JSON.stringify(preferences));
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] animate-reveal-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="container-tight max-h-[min(88dvh,calc(100dvh-0.75rem))] flex flex-col">
        <div className="rounded-2xl bg-background border border-border shadow-2xl flex flex-col min-h-0 overflow-hidden">
          {/* Scrollable body (settings can grow on small screens) */}
          <div className="overflow-y-auto overscroll-contain px-4 pt-4 pb-2 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
            <h3 id="cookie-banner-title" className="text-base sm:text-lg font-semibold mb-2">
              Cookie-Einstellungen
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren. Sie können selbst entscheiden,
              welche Kategorien Sie zulassen.
            </p>

            {showSettings && (
              <div className="mb-2 space-y-2 sm:space-y-3">
                <label className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 touch-manipulation">
                  <input type="checkbox" checked disabled className="rounded accent-primary h-4 w-4 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-medium">Notwendig</span>
                    <span className="text-xs text-muted-foreground block leading-snug">
                      Essentiell für die Nutzung der Website
                    </span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 cursor-pointer touch-manipulation">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="rounded accent-primary h-4 w-4 mt-0.5 shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-sm font-medium">Analyse</span>
                    <span className="text-xs text-muted-foreground block leading-snug">
                      Hilft uns die Nutzung der Website zu verstehen
                    </span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 cursor-pointer touch-manipulation">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="rounded accent-primary h-4 w-4 mt-0.5 shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-sm font-medium">Marketing</span>
                    <span className="text-xs text-muted-foreground block leading-snug">
                      Personalisierte Werbung und Inhalte
                    </span>
                  </div>
                </label>
              </div>
            )}
          </div>

          {/* Fixed action bar: always visible, comfortable tap targets on mobile */}
          <div className="flex-shrink-0 border-t border-border/70 px-4 py-3 sm:px-6 sm:py-4 md:px-8 bg-muted/20">
            {!showSettings ? (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <Button variant="outline" className="w-full min-h-11 justify-center" onClick={rejectAll}>
                    Alle ablehnen
                  </Button>
                  <Button variant="default" className="w-full min-h-11 justify-center" onClick={acceptAll}>
                    Alle akzeptieren
                  </Button>
                </div>
                <Button variant="ghost" className="w-full min-h-11 justify-center" onClick={() => setShowSettings(true)}>
                  Einstellungen
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <Button variant="outline" className="w-full min-h-11 justify-center sm:order-1" onClick={() => setShowSettings(false)}>
                  Zurück
                </Button>
                <Button variant="default" className="w-full min-h-11 justify-center sm:order-2" onClick={saveSettings}>
                  Speichern
                </Button>
              </div>
            )}

            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <Link to="/datenschutz" className="hover:text-primary transition-colors underline underline-offset-2 py-1.5 min-h-11 sm:min-h-0 inline-flex items-center">
                Datenschutzerklärung
              </Link>
              <span className="text-border/80 hidden sm:inline" aria-hidden>
                |
              </span>
              <Link to="/impressum" className="hover:text-primary transition-colors underline underline-offset-2 py-1.5 min-h-11 sm:min-h-0 inline-flex items-center">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
