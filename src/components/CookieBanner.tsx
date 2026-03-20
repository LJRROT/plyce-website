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

  const acceptAll = () => {
    localStorage.setItem("plyce-cookie-consent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("plyce-cookie-consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setVisible(false);
  };

  const saveSettings = () => {
    localStorage.setItem("plyce-cookie-consent", JSON.stringify(preferences));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-reveal-up">
      <div className="container-tight">
        <div className="rounded-2xl bg-background border border-border shadow-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-2">Cookie-Einstellungen</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
            Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren. Sie können selbst entscheiden, welche Kategorien Sie zulassen.
          </p>

          {showSettings && (
            <div className="mb-6 space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <input type="checkbox" checked disabled className="rounded accent-primary h-4 w-4" />
                <div>
                  <span className="text-sm font-medium">Notwendig</span>
                  <span className="text-xs text-muted-foreground block">Essentiell für die Nutzung der Website</span>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="rounded accent-primary h-4 w-4"
                />
                <div>
                  <span className="text-sm font-medium">Analyse</span>
                  <span className="text-xs text-muted-foreground block">Hilft uns die Nutzung der Website zu verstehen</span>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="rounded accent-primary h-4 w-4"
                />
                <div>
                  <span className="text-sm font-medium">Marketing</span>
                  <span className="text-xs text-muted-foreground block">Personalisierte Werbung und Inhalte</span>
                </div>
              </label>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex gap-2 text-xs text-muted-foreground mr-auto">
              <Link to="/datenschutz" className="hover:text-primary transition-colors underline underline-offset-2">Datenschutzerklärung</Link>
              <span>|</span>
              <Link to="/impressum" className="hover:text-primary transition-colors underline underline-offset-2">Impressum</Link>
            </div>
            <div className="flex gap-2">
              {!showSettings && (
                <Button variant="ghost" size="sm" onClick={() => setShowSettings(true)}>
                  Einstellungen
                </Button>
              )}
              {showSettings ? (
                <Button variant="default" size="sm" onClick={saveSettings}>Speichern</Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={rejectAll}>Alle ablehnen</Button>
                  <Button variant="default" size="sm" onClick={acceptAll}>Alle akzeptieren</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
