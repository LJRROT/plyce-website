import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight">plyce</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Das ATS/CRM für Personalberater und Recruiting-Teams. Mehr Placements, weniger Admin.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Eine Marke von WECO Experts GmbH
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2.5">
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/ai-agents" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link to="/data-protection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Protection</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2.5">
              <li><Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">Datenschutzerklärung</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-muted-foreground">
                <span className="block">Telefon:</span>
                <a href="tel:+498937040096" className="hover:text-primary transition-colors">+49 (0)89 370 400 96</a>
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="block">E-Mail:</span>
                <a href="mailto:info@plyce.io" className="hover:text-primary transition-colors">info@plyce.io</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} plyce – Eine Marke von WECO Experts GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
