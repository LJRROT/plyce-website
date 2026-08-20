import { Link, useLocation } from "react-router-dom";
import { getLocaleFromPath, localizePath } from "@/lib/locale";

const Footer = () => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const en = locale === "en";
  const t = (de: string, enText: string) => en ? enText : de;
  const href = (path: string) => localizePath(path, locale);

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <Link to={href("/")} className="flex items-center gap-2.5 mb-4">
              <img src="/plyce-logo-mark.png" alt="" width={32} height={40} className="h-8 w-auto object-contain object-left" decoding="async" />
              <span className="text-xl font-bold tracking-tight">plyce</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("AI-native ATS & CRM für Personalberatungen und Recruiter. Mehr Placements. Weniger Admin.", "AI-native ATS & CRM for recruitment agencies and recruiters. More placements. Less admin.")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t("Produkt", "Product")}</h3>
            <ul className="space-y-2.5">
              <li><Link to={href("/features")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to={href("/plyce-time")} className="text-sm text-muted-foreground hover:text-primary transition-colors">plyce time</Link></li>
              <li><Link to={href("/pricing")} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("Preise", "Pricing")}</Link></li>
              <li><Link to={href("/ai-agents")} className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link to={href("/data-protection")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Protection</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t("Informationen", "Information")}</h3>
            <ul className="space-y-2.5">
              <li><Link to={href("/faq")} className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to={href("/data-protection")} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("Datenschutz EU-DSGVO", "GDPR & Data Protection")}</Link></li>
              <li><Link to={href("/implementierung")} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("Implementierung", "Implementation")}</Link></li>
              <li><Link to={href("/partnerprogramm")} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("Partnerprogramm", "Partner program")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t("Rechtliches", "Legal")}</h3>
            <ul className="space-y-2.5">
              <li><Link to={href("/agb")} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("AGB", "Terms & Conditions")}</Link></li>
              <li><button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full" onClick={() => window.dispatchEvent(new Event("plyce-open-cookie-settings"))}>{t("Cookie-Einstellungen", "Cookie settings")}</button></li>
              <li><Link to={href("/impressum")} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("Impressum", "Legal Notice")}</Link></li>
              <li><Link to={href("/sitemap")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t("Noch kein Kunde?", "Not a customer yet?")}</h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-muted-foreground"><a href="tel:+498937040096" className="hover:text-primary transition-colors">+49 89 370 400 96</a></li>
              <li className="text-sm text-muted-foreground"><button type="button" className="text-inherit hover:text-primary transition-colors text-left w-full" onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}>Request Demo</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border"><p className="text-center text-xs text-muted-foreground leading-relaxed sm:text-left">© {new Date().getFullYear()} plyce · {t("Alle Rechte vorbehalten", "All rights reserved")}</p></div>
      </div>
    </footer>
  );
};

export default Footer;
