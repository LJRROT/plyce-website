import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/plyce-logo-mark.png"
                alt=""
                width={32}
                height={40}
                className="h-8 w-auto object-contain object-left"
                decoding="async"
              />
              <span className="text-xl font-bold tracking-tight">plyce</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-native ATS & CRM für Personalberatungen und Recruiter. Mehr Placements. Weniger Admin.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2.5">
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preise
                </Link>
              </li>
              <li><Link to="/ai-agents" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link to="/data-protection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Protection</Link></li>
            </ul>
          </div>

          {/* Informationen */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Informationen</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/data-protection" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz EU-DSGVO
                </Link>
              </li>
              <li>
                <Link to="/implementierung" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Implementierung
                </Link>
              </li>
              <li>
                <Link to="/partnerprogramm" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Partnerprogramm
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                  onClick={() => window.dispatchEvent(new Event("plyce-open-cookie-settings"))}
                >
                  Cookie-Einstellungen
                </button>
              </li>
              <li>
                <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Noch kein Kunde?</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-muted-foreground">
                <a href="tel:+498937040096" className="hover:text-primary transition-colors">
                  +49 89 370 400 96
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <button
                  type="button"
                  className="text-inherit hover:text-primary transition-colors text-left w-full"
                  onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}
                >
                  Request Demo
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground leading-relaxed sm:text-left">
            © {new Date().getFullYear()} plyce · Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
