import ScrollReveal from "@/components/ScrollReveal";
import {
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
    title: "Klare Vergütung",
    desc: "Modelle nach Empfehlung, Beratungseinbindung oder gemeinsamem Vertrieb. Konditionen und Regeln sind vertraglich festgelegt.",
  },
  {
    icon: Headphones,
    title: "Fester Ansprechpartner",
    desc: "Unterstützung bei Produktfragen, bei Bedarf gemeinsame Termine mit Ihren Kundinnen und Kunden.",
  },
  {
    icon: GraduationCap,
    title: "Unterlagen und Demo",
    desc: "Kernbotschaften, Einwandhilfen und ein nachvollziehbarer Demo-Ablauf für Ihre Gespräche.",
  },
  {
    icon: Puzzle,
    title: "Technische Ergänzung",
    desc: "Für Integratoren: sinnvolle Schnittstellen und Anknüpfung an E-Mail, Kalender und übliche Systeme.",
  },
];

const models = [
  {
    title: "Empfehlung",
    desc: "Weiterleitung von Interessentinnen und Interessenten an plyce. Angebot, Vertrag und Einführung liegen bei uns.",
    bullets: ["Geringer eigener Aufwand", "Geeignet bei Netzwerk und bestehendem Vertrauen"],
  },
  {
    title: "Projektbegleitung",
    desc: "Sie steuern Prozess, Daten und Change beim Kunden. plyce ist die eingesetzte Plattform.",
    bullets: ["Für Beratungen mit Rollout-Verantwortung", "Rollentrennung: Sie begleiten den Wechsel, wir liefern das Produkt"],
  },
  {
    title: "Technologiepartner",
    desc: "Ihr Tool, Ihre Datenanbindung oder Ihr Service ergänzt plyce für Personalberatungen und Recruiter.",
    bullets: ["Schwerpunkt auf Integration und Nutzen", "Priorisierung der Themen gemeinsam mit uns"],
  },
];

const audiences = [
  "Netzwerke und Beratungen mit Zugang zu Personalberatungen und Recruiter",
  "Einzelpersonen und kleine Teams bei Software- und Projektauswahl für Kunden",
  "Anbieter von Tools, Schnittstellen oder Dienstleistungen im Recruiting-Umfeld",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug pb-2 mb-3 text-gradient-hero text-balance">
                Partner für plyce
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                plyce ist das ATS und CRM für Personalberatungen und Recruiter, inklusive integrierter KI-Funktionen.
                Als Partner bringen Sie passende Kunden mit, wir liefern Produkt, Einführung und faire, verlässliche Regeln.
              </p>
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
                <span className="text-xs font-semibold uppercase tracking-wide">Zusammenarbeit</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Drei Wege zur Partnerschaft</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Einfache Empfehlung, begleiteter Rollout oder technische Ergänzung. Wir stimmen das Modell auf Ihre Rolle ab.
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

          <ScrollReveal className="mt-16 md:mt-20">
            <div className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-muted/25 px-6 py-8 md:p-10">
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 mb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">Für wen das Programm gedacht ist</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-prose mx-auto sm:mx-0">
                    Typische Partnerprofile rund um Personalberatungen und Recruiter.
                  </p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {audiences.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-muted-foreground leading-relaxed text-left">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PartnerprogrammPage;
