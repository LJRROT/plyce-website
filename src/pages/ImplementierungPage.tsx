import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Rocket, Settings2, Shield, Users } from "lucide-react";

const phases = [
  {
    icon: Users,
    step: "Phase 1",
    title: "Kickoff & Zielbild",
    points: [
      "Kickoff mit Ihrem Team und Definition der Zielprozesse",
      "Festlegung von Rollen, Rechten und Pipeline-Struktur",
      "Ausarbeitung des Implementierungsplans mit klaren Verantwortlichkeiten",
    ],
  },
  {
    icon: Settings2,
    step: "Phase 2",
    title: "Setup & Datenmigration",
    points: [
      "Einrichtung von plyce nach Ihrem Recruiting-Workflow",
      "Import von Kandidaten-, Kunden- und Stellen-Daten",
      "Anbindung von E-Mail und zentralen Tools",
    ],
  },
  {
    icon: Shield,
    step: "Phase 3",
    title: "Qualität, DSGVO & Go-Live",
    points: [
      "Tests aller Kernprozesse inklusive Freigaben",
      "Durchführung von Datenschutz-Checks und Rechteprüfung",
      "Go-Live mit begleitetem Start im operativen Betrieb",
    ],
  },
];

const deliverables = [
  "Produktive ATS/CRM-Umgebung für Ihr Team",
  "Definierte Recruiting-Workflows inklusive Automatisierungen",
  "Geschulte Nutzer mit klaren Rollen und Best Practices",
  "Abnahmefähige Dokumentation für Prozesse und Datenschutz",
];

const ImplementierungPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-light border border-primary/20 px-4 py-1.5 mb-6">
                <Rocket className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Implementierung mit Plan</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug pb-2 mb-3 text-gradient-hero text-balance">
                Implementierungsprozess
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                Strukturiert. Transparent. Schnell produktiv. Vom Setup bis zum Go-Live.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {phases.map((phase, idx) => (
              <ScrollReveal key={phase.title} delay={idx * 80} className="h-full">
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">{phase.step}</span>
                  </div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="h-9 w-9 rounded-xl bg-primary-light flex items-center justify-center">
                      <phase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-base font-semibold">{phase.title}</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14">
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-5">Was Sie am Ende in der Hand haben</h3>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
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

export default ImplementierungPage;
