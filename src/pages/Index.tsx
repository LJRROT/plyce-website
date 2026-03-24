import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Users, FileSearch, BarChart3, Mail, Zap, Target,
  Shield, ArrowRight, CheckCircle2, Heart,
} from "lucide-react";

const features = [
  { icon: Users, title: "Candidate Dossiers", desc: "Strukturierte Kandidatenprofile mit allen relevanten Daten auf einen Blick." },
  { icon: FileSearch, title: "CV Parsing", desc: "Automatische Extraktion von Lebenslaufdaten – in Sekunden statt Stunden." },
  { icon: Target, title: "Pipeline Management", desc: "Von Longlist bis Placement – volle Transparenz über jeden Prozessschritt." },
  { icon: Mail, title: "E-Mail Integration", desc: "Google & Microsoft Integration. Kommunikation direkt im System." },
  { icon: BarChart3, title: "Reporting & KPIs", desc: "Echtzeit-Analytics für fundierte Entscheidungen und mehr Umsatz." },
  { icon: Zap, title: "Automatisierung", desc: "Workflows automatisieren und repetitive Aufgaben eliminieren." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero — headline & tagline */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal delay={80}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-center">
                <span className="inline-flex flex-col items-center gap-2 md:gap-2.5">
                  <span className="inline-flex items-center justify-center gap-x-2 md:gap-x-2.5">
                    <span className="text-gradient-hero">plyce</span>
                    <Heart
                      className="shrink-0 inline-block h-[0.84em] w-[0.84em] text-black fill-black stroke-black"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                  <span className="text-gradient-hero text-balance">AI &amp; Automation</span>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-0 leading-relaxed">
                ATS/CRM für kleine bis mittlere Recruting Agenturen.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Section — directly under ATS/CRM tagline */}
      <section className="py-20 md:py-28 section-padding bg-foreground text-primary-foreground">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                11 vollintegrierte KI Agenten arbeiten für dich
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {[
              { title: "CV Parser Agent", desc: "Analysiert Lebensläufe automatisch und extrahiert strukturierte Daten." },
              { title: "Matching Agent", desc: "Gleicht Kandidatenprofile mit offenen Positionen ab." },
              { title: "Dossier Agent", desc: "Erstellt professionelle Kandidaten-Dossiers auf Knopfdruck." },
            ].map((agent, i) => (
              <ScrollReveal key={agent.title} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-sm font-semibold mb-2">{agent.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{agent.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={350}>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-agents">
                  Alle AI Agents entdecken <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features overview */}
      <section className="py-20 md:py-28 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Alles, was Recruiter brauchen
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Ein System für den gesamten Recruiting-Prozess – von Kandidatenaufnahme bis Placement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="group p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light mb-4 group-hover:bg-primary/10 transition-colors">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">
                  Alle Features entdecken <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust / Data Protection teaser */}
      <section className="py-20 md:py-28 section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-light border border-primary/20 px-4 py-1.5 mb-6">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium text-primary">Enterprise-Level Sicherheit</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Ihre Daten sind sicher. Punkt.
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  DSGVO-konform, Ende-zu-Ende verschlüsselt, gehostet in der EU. Volle Kontrolle über Ihre Daten – jederzeit exportierbar, jederzeit löschbar.
                </p>
                <ul className="space-y-3 mb-8">
                  {["DSGVO-konforme Verarbeitung", "Ende-zu-Ende-Verschlüsselung", "EU-Hosting (Frankfurt)", "Vollständiger Audit Trail"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/data-protection">
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="right">
              <div className="rounded-2xl bg-muted/50 border border-border p-8 md:p-12">
                <div className="space-y-6">
                  {[
                    { label: "Datenverschlüsselung", value: "AES-256" },
                    { label: "Uptime SLA", value: "99.9%" },
                    { label: "Backup-Frequenz", value: "Täglich" },
                    { label: "Standort", value: "Frankfurt, DE" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-primary p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
                Bereit, effizienter zu recruiten?
              </h2>
              <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
                Starten Sie kostenlos oder buchen Sie eine persönliche Demo mit unserem Team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
                  Demo buchen
                </Button>
                <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Kostenlos starten <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
