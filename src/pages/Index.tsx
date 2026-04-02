import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Mail,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Heart,
  MessagesSquare,
  PieChart,
  Plug,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  tagline: string;
  bullets: string[];
}[] = [
  {
    icon: MessagesSquare,
    title: "WhatsApp Integration",
    tagline: "WhatsApp als Kanal mit hoher Response-Rate bei Kandidaten",
    bullets: [
      "Direkte Kommunikation, schnellere Rückmeldungen, höhere Response-Raten",
      "Nahtlose Einbindung in Recruiting-Workflows",
    ],
  },
  {
    icon: Mail,
    title: "E-Mail Konnektivität (Microsoft 365 & Google)",
    tagline: "Volle Synchronisation aller ein- und ausgehenden E-Mails",
    bullets: [
      "Keine Weiterleitungen, keine Copy-Paste-Prozesse",
      "Alle Kommunikation zentral im System dokumentiert",
    ],
  },
  {
    icon: Zap,
    title: "Business Development Automatisierung",
    tagline: "Automatisierte mehrstufige Kampagnen über Wochen oder Monate",
    bullets: [
      "Vorkonfigurierte Touchpoints für nachhaltigen Kundenaufbau",
      "Skalierung des BD ohne zusätzlichen manuellen Aufwand",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Performance Tracking",
    tagline: "Alle KPIs in Echtzeit und direkt vergleichbar",
    bullets: [
      "Vom einzelnen Recruiter bis zur gesamten Pipeline",
      "Transparenz, die echte Steuerung ermöglicht",
    ],
  },
  {
    icon: PieChart,
    title: "Analytics & Teamsteuerung",
    tagline: "Maximale Übersicht über Prozesse, Auslastung und Fortschritt",
    bullets: [
      "Bessere Planbarkeit für Teams und Projekte",
      "Alle relevanten Daten an einem Ort",
    ],
  },
  {
    icon: Plug,
    title: "Jobboard & API Schnittstellen",
    tagline: "Eigene Karriereseite inklusive",
    bullets: [
      "Jobs automatisch veröffentlichen und synchronisieren",
      "Offen für Integrationen in bestehende Systemlandschaften",
    ],
  },
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
                    <span className="text-gradient-hero my-0 py-[5px]">plyce</span>
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
              <div className="mx-auto max-w-xl text-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  AI-native ATS & CRM für Recruiting-Agenturen<br />
                  Mehr Placements. Weniger Admin.
                </p>

                <div className="mx-auto mt-9 max-w-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px flex-1 bg-border/60" aria-hidden />
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                      Powered by
                    </span>
                    <span className="h-px flex-1 bg-border/60" aria-hidden />
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-border/50 overflow-hidden rounded-xl border border-border/55 bg-card/80 shadow-[0_1px_0_0_hsl(var(--border)/0.4)] backdrop-blur-[2px]">
                    <Link
                      to="/ai-agents"
                      className="group flex min-h-[4.25rem] items-center justify-center px-3 py-4 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/30"
                      aria-label="OpenAI — KI-Modelle"
                    >
                      <img
                        src="/logos/openai-wordmark.svg"
                        alt=""
                        className="h-7 w-auto max-w-[min(118px,28vw)] object-contain opacity-90 transition-opacity group-hover:opacity-100"
                        width={118}
                        height={28}
                      />
                    </Link>
                    <Link
                      to="/ai-agents"
                      className="group flex min-h-[4.25rem] items-center justify-center px-3 py-4 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/30"
                      aria-label="Mistral AI — KI-Modelle"
                    >
                      <img
                        src="/logos/mistral-wordmark.svg"
                        alt=""
                        className="h-7 w-auto max-w-[min(138px,30vw)] object-contain opacity-90 transition-opacity group-hover:opacity-100"
                        width={138}
                        height={28}
                      />
                    </Link>
                  </div>
                </div>
              </div>
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
                10 AI Agents arbeiten für dich
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {[
              { title: "AI CV Analyzer", desc: "Analysiert CVs strukturiert mit Tags und Skills; anonymisiert Kandidaten-, Unternehmens- und Branchenangaben im CV." },
              { title: "AI Candidate Match", desc: "Bewertet und rankt Kandidaten nach Passung zu einem Projekt (Score 0–100 mit Begründung)." },
              { title: "AI Dossier Highlights", desc: "Highlights aus Kandidat und Projekt, mit Fokus auf die Passung zur Rolle." },
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
              <Button variant="hero" size="lg" asChild className="whitespace-normal text-center max-sm:px-4 sm:whitespace-nowrap">
                <Link to="/ai-agents">
                  Alle AI Agents entdecken <ArrowRight className="h-4 w-4 shrink-0" />
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
                Infrastruktur für skalierbares Recruiting
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Vom ersten Kontakt bis zum Placement: plyce begleitet den gesamten Recruitment Lifecycle und verbindet Kommunikation, Vertrieb und Delivery in einem AI-native System.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80} className="h-full min-h-0">
                <Link
                  to="/features"
                  className="group flex h-full min-h-0 flex-col gap-5 rounded-2xl border border-border/50 bg-card p-6 text-inherit no-underline shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light transition-colors group-hover:bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex min-h-0 flex-col gap-2">
                    <h3 className="text-base font-semibold leading-snug">{f.title}</h3>
                    <p className="text-sm text-foreground/90 font-medium leading-relaxed">{f.tagline}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {f.bullets.map((line) => (
                      <li key={line} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="mt-12 w-full">
              <div className="mx-auto w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
                <Button
                  variant="secondary"
                  size="xl"
                  asChild
                  className="w-full shadow-md ring-1 ring-border/60 hover:shadow-lg hover:ring-border"
                >
                  <Link to="/features">
                    Alle Features entdecken <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </Button>
              </div>
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
                  Ihre Daten sind sicher.
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  DSGVO-konform, Ende-zu-Ende verschlüsselt, gehostet in der EU. Volle Kontrolle über Ihre Daten – jederzeit exportierbar, jederzeit löschbar.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "DSGVO-konforme Verarbeitung",
                    "End-to-End-Verschlüsselung",
                    "EU-Hosting (Frankfurt)",
                    "Vollständiger Audit Trail",
                    "Frei wählbare KI: US (OpenAI) oder EU (Mistral AI)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="lg" asChild className="whitespace-normal text-center max-sm:px-4 sm:whitespace-nowrap">
                  <Link to="/data-protection">
                    Mehr erfahren <ArrowRight className="h-4 w-4 shrink-0" />
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
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-semibold sm:text-right tabular-nums">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
