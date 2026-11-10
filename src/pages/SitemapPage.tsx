import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { aiAgentsNav } from "@/data/agentNav";

const links = [
  { to: "/", label: "Startseite" },
  { to: "/features", label: "Features" },
  { to: "/plyce-time", label: "plyce time" },
  { to: "/ai-agents", label: "AI Agents" },
  { to: "/pricing", label: "Preise" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Karriere" },
  { to: "/recruiting-software-vergleich", label: "Recruiting Software Vergleich" },
  { to: "/data-protection", label: "Data Protection" },
  { to: "/faq", label: "FAQ" },
  { to: "/implementierung", label: "Implementierungsprozess" },
  { to: "/partnerprogramm", label: "Partnerprogramm" },
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
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Seitenübersicht</h1>
            <p className="text-sm text-muted-foreground mb-10">Alle wichtigen Seiten und AI-Agent-Fachartikel von plyce auf einen Blick.</p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="mb-4 text-xl font-bold">Produkt und Informationen</h2>
            <ul className="space-y-1">
              {links.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="flex min-h-11 items-center text-sm font-medium text-foreground hover:text-primary transition-colors py-1">{item.label}</Link>
                </li>
              ))}
              <li>
                <button type="button" className="flex min-h-11 w-full items-center text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-1" onClick={() => window.dispatchEvent(new Event("plyce-open-cookie-settings"))}>Cookie-Einstellungen</button>
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <h2 className="mb-4 mt-10 text-xl font-bold">Alle 14 AI Agents</h2>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {aiAgentsNav.map(agent => (
                <li key={agent.id}>
                  <Link to={"/ai-agents/" + agent.id} className="flex min-h-11 items-center py-1 text-sm font-medium text-foreground hover:text-primary">
                    {agent.title}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
