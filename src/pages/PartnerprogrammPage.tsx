import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Headphones,
  Puzzle,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: BadgePercent,
    title: "Attraktive Vergütung",
    desc: "Klare, vertraglich geregelte Modelle – abgestimmt auf Ihren Kanal (Empfehlung, Beratung, gemeinsamer Vertrieb).",
  },
  {
    icon: Headphones,
    title: "Partnerbetreuung",
    desc: "Ansprechpartner für Produktfragen, Onboarding-Hilfen und gemeinsame Kundentermine nach Bedarf.",
  },
  {
    icon: GraduationCap,
    title: "Enablement & Wissen",
    desc: "Unterstützung bei Positionierung: Messaging, Einwandbehandlung, Demo-Storyline – passend zu plyce.",
  },
  {
    icon: Puzzle,
    title: "Zukunftssicher integrieren",
    desc: "Für Tech- und Service-Partner: sinnvolle Anknüpfungspunkte zu Email, Kalender und Ihrem Tech-Stack.",
  },
];

const models = [
  {
    title: "Referral & Empfehlung",
    desc: "Sie empfehlen plyce an Agenturen, die ein schlankes ATS/CRM mit KI-Automatisierung suchen – wir kümmern uns um Vertrieb und Einführung.",
    bullets: ["Ideal für Netzwerke und Berater mit Vertrauenszugang", "Geringer operativer Aufwand für Sie"],
  },
  {
    title: "Beratung & gemeinsames Arbeiten",
    desc: "Sie begleiten den Rollout (Prozess, Daten, Change) – plyce als Plattform. Gemeinsame Angebote für Ihre Kunden.",
    bullets: ["Perfekt für HR-/Recruiting-Beratungen", "Klare Rollen: Sie Prozess, wir Produkt"],
  },
  {
    title: "Technologie & Ökosystem",
    desc: "Tools, Datenanbindungen oder ergänzende Services, die Recruiting-Agenturen mit plyce produktiver machen.",
    bullets: ["Integrations- und Use-Case-Fokus", "Gemeinsame Roadmap je nach Relevanz"],
  },
];

const steps = [
  {
    step: "1",
    title: "Kennenlernen",
    desc: "Kurzes Gespräch zu Passthrough, Zielgruppe und wie wir plyce gemeinsam positionieren.",
  },
  {
    step: "2",
    title: "Freigabe & Rahmen",
    desc: "Abstimmung des Partnermodells, rechtlicher Rahmen und nächste Schritte.",
  },
  {
    step: "3",
    title: "Enablement",
    desc: "Onboarding-Inhalte, Demo-Flow und Materialien – damit Sie sicher im Gespräch sind.",
  },
  {
    step: "4",
    title: "Go-to-Market",
    desc: "Gemeinsame Opportunities, nachvollziehbare Pipeline und laufender Austausch.",
  },
];

const audiences = [
  "Personal- und Recruiting-Beratungen mit Fokus auf KMU-Agenturen",
  "Freelancer und Boutique-Shops, die Kunden bei Tooling begleiten",
  "Technologie- und Service-Partner mit klarer Nutzenstory für Recruiting-Teams",
];

const PartnerprogrammPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-light border border-primary/20 px-4 py-1.5 mb-6">
                <Handshake className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Partnerprogramm</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Wachsen Sie mit plyce – gemeinsam mit Recruiting-Agenturen
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                plyce ist das ATS/CRM für kleine bis mittlere Recruiting-Agenturen – mit integrierter KI-Automatisierung.
                Als Partner begleiten Sie Kunden beim digitalen Recruiting und profitieren von einer strukturierten Zusammenarbeit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:info@plyce.io?subject=Partnerprogramm%20plyce">
                    Partner werden
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:info@plyce.io?subject=Rückfrage%20Partnerprogramm%20plyce">Fragen stellen</a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60} className="h-full">
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/25 hover:shadow-md transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-base font-semibold mb-2">{b.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 md:mt-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-primary mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">Kooperationsmodelle</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">So arbeiten wir mit Partnern</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Wählen Sie das Modell, das zu Ihrer Arbeit passt – von der einfachen Empfehlung bis zur tiefen Zusammenarbeit.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {models.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-border/60 bg-muted/20 p-6 md:p-7 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{m.desc}</p>
                  <ul className="space-y-2">
                    {m.bullets.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 md:mt-20 rounded-2xl border border-border/60 bg-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <ScrollReveal className="p-6 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">Ablauf: von der Anfrage zum gemeinsamen Go-to-Market</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  Transparente Schritte – ähnlich wie bei etablierten SaaS-Partnerprogrammen, aber auf die Realität von Agenturen und Beratungen zugeschnitten.
                </p>
                <ol className="space-y-6">
                  {steps.map((s) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="font-semibold mb-1">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </ScrollReveal>
              <ScrollReveal delay={80} className="p-6 md:p-10 bg-muted/30 border-t lg:border-t-0 lg:border-l border-border/60">
                <h3 className="text-lg font-semibold mb-4">Für wen ist das Programm gedacht?</h3>
                <ul className="space-y-3">
                  {audiences.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PartnerprogrammPage;
