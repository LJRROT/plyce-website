import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const links = [
  { to: "/", label: "Startseite" },
  { to: "/features", label: "Features" },
  { to: "/ai-agents", label: "AI Agents" },
  { to: "/data-protection", label: "Data Protection" },
  { to: "/faq", label: "FAQ" },
  { to: "/implementierung", label: "Implementierungsprozess" },
  { to: "/partnerprogramm", label: "Partnerprogramme" },
  { to: "/agb", label: "AGB" },
  { to: "/datenschutz", label: "Datenschutzerklärung" },
  { to: "/impressum", label: "Impressum" },
  { to: "/sitemap", label: "Site Map" },
];

const SitemapPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-2xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Site Map</h1>
            <p className="text-sm text-muted-foreground mb-10">Übersicht aller Hauptseiten.</p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <ul className="space-y-1">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex min-h-11 items-center text-sm font-medium text-foreground hover:text-primary transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="flex min-h-11 w-full items-center text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-1"
                  onClick={() => window.dispatchEvent(new Event("plyce-open-cookie-settings"))}
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
