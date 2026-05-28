import ScrollReveal from "@/components/ScrollReveal";
import {
  CheckCircle2,
  Database,
  FileSignature,
  GitMerge,
  HardDriveDownload,
  LifeBuoy,
  PhoneCall,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
  timing?: string;
};

type Variant = {
  id: string;
  name: string;
  tagline: string;
  complexity: "Niedrig" | "Mittel" | "Hoch";
  complexityValue: number; // 1-3
  duration: string;
  bestFor: string;
  highlight?: boolean;
  steps: Step[];
};

const variants: Variant[] = [
  {
    id: "soft",
    name: "Soft Migration",
    tagline: "Schnell starten, Daten parallel migrieren.",
    complexity: "Niedrig",
    complexityValue: 1,
    duration: "ca. 2 Tage bis Go-Live",
    bestFor:
      "Geeignet für Teams, die zügig starten wollen und während des laufenden Betriebs migrieren können.",
    highlight: true,
    steps: [
      {
        icon: FileSignature,
        title: "Vertrag unterzeichnen",
        description:
          "Mit der Unterzeichnung des Vertrags startet der Prozess und das Setup wird vorbereitet.",
        timing: "Tag 0",
      },
      {
        icon: Rocket,
        title: "System bereitgestellt",
        description:
          "Innerhalb von zwei Tagen nach Unterschrift erhalten Sie Zugang zum System inklusive einer Checkliste für Konfiguration und Onboarding.",
        timing: "innerhalb 2 Tagen",
      },
      {
        icon: PhoneCall,
        title: "Kick-off Call",
        description:
          "Gemeinsam gehen wir die Checkliste durch, klären erste Fragen und richten die wichtigsten Einstellungen ein.",
        timing: "parallel",
      },
      {
        icon: Database,
        title: "Datenmigration im laufenden Betrieb",
        description:
          "Sobald die Daten bereitgestellt werden, erfolgt die Migration im Hintergrund. Bis dahin legen Consultants und Agency aktuelle Projekte neu an und arbeiten direkt darin.",
        timing: "sobald Daten vorliegen",
      },
      {
        icon: GitMerge,
        title: "Automatischer Merge",
        description:
          "Nach der Migration werden entstandene Dubletten über eine automatische Merge-Funktion sauber zusammengeführt.",
      },
      {
        icon: LifeBuoy,
        title: "Hypercare & Support",
        description:
          "Zwei Wochen Hypercare-Phase mit engem Support, danach Übergang in den regulären Support-Modus.",
        timing: "2 Wochen Hypercare",
      },
    ],
  },
  {
    id: "standard",
    name: "Migration",
    tagline: "Strukturiert konfigurieren, dann sauber migrieren.",
    complexity: "Mittel",
    complexityValue: 2,
    duration: "mehrere Wochen",
    bestFor:
      "Geeignet für Teams, die ihre Konfiguration vor der Datenübernahme vollständig finalisieren möchten.",
    steps: [
      {
        icon: FileSignature,
        title: "Vertrag & Kick-off",
        description:
          "Nach Vertragsunterzeichnung erhält der Kunde eine Checkliste und richtet das System eigenständig ein, ohne bereits operativ darin zu arbeiten.",
        timing: "Tag 0",
      },
      {
        icon: Settings2,
        title: "Konfiguration & Einrichtung",
        description:
          "Pipelines, Rollen, Rechte und Schnittstellen werden vorbereitet, sodass das System zum Zeitpunkt der Datenmigration vollständig konfiguriert ist.",
        timing: "Woche 1",
      },
      {
        icon: LifeBuoy,
        title: "Hypercare für Konfiguration",
        description:
          "Eine Woche später beginnt die Hypercare-Phase, in der offene Fragen zu Konfiguration und Einstellungen gemeinsam geklärt werden.",
        timing: "ab Woche 2",
      },
      {
        icon: Database,
        title: "Datenmigration",
        description:
          "Die Datenmigration erfolgt, sobald die Daten unverschlüsselt und zugänglich bereitgestellt werden. Erst danach beginnt der operative Einsatz.",
        timing: "nach Bereitstellung der Daten",
      },
      {
        icon: Rocket,
        title: "Go-Live",
        description:
          "Das Team startet produktiv mit vollständig migriertem Datenbestand und finaler Konfiguration.",
      },
      {
        icon: LifeBuoy,
        title: "Hypercare im Betrieb & Support",
        description:
          "Begleitete Einführung im Tagesgeschäft, danach Übergang in den regulären Support-Modus.",
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Migration",
    tagline: "Maximale Sicherheit für komplexe Datenbestände.",
    complexity: "Hoch",
    complexityValue: 3,
    duration: "mehrere Wochen mit Vorlaufzeit",
    bestFor:
      "Geeignet für größere Organisationen mit umfangreichen Datenbeständen, mehreren Quellsystemen oder hohen Compliance-Anforderungen.",
    steps: [
      {
        icon: FileSignature,
        title: "Vertrag & Kick-off",
        description:
          "Vertragsunterzeichnung, Kick-off und Abstimmung der Migrationsstrategie inklusive Verantwortlichkeiten und Zeitplan.",
        timing: "Tag 0",
      },
      {
        icon: Settings2,
        title: "Konfiguration & Einrichtung",
        description:
          "Das System wird gemeinsam mit dem Kunden vollständig konfiguriert, inklusive Rollen, Rechten, Pipelines und Schnittstellen.",
      },
      {
        icon: ShieldCheck,
        title: "Backup vor der Migration",
        description:
          "Mindestens zwei Wochen vor der eigentlichen Migration wird ein vollständiges Backup des Bestandssystems erstellt und abgesichert.",
        timing: "≥ 2 Wochen vorher",
      },
      {
        icon: HardDriveDownload,
        title: "Probe-Migration & Validierung",
        description:
          "Eine Testmigration prüft Datenqualität, Mappings und Edge-Cases, bevor die Produktivmigration durchgeführt wird.",
      },
      {
        icon: Database,
        title: "Produktive Datenmigration",
        description:
          "Die finale Datenmigration erfolgt geplant und kontrolliert, mit Rollback-Option auf das vorab erstellte Backup.",
      },
      {
        icon: Rocket,
        title: "Go-Live & erweiterte Hypercare",
        description:
          "Begleiteter Go-Live mit verlängerter Hypercare-Phase, danach Übergang in den regulären Support-Modus.",
      },
    ],
  },
];

const complexityLabel = (v: Variant["complexityValue"]) => {
  const total = 3;
  return Array.from({ length: total }, (_, i) => i < v);
};

const MigrationPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-light border border-primary/20 px-4 py-1.5 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Migrationsoptionen</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug pb-2 mb-3 text-gradient-hero text-balance">
                Drei Wege, um zu plyce zu wechseln
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                Wir bieten drei Migrationsformen an, die sich in Komplexität, Dauer und Vorgehen unterscheiden. So
                finden wir gemeinsam den passenden Weg für Ihre Organisation und Ihren Datenbestand.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="pb-8 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {variants.map((variant, idx) => (
              <ScrollReveal key={variant.id} delay={idx * 80} className="h-full">
                <div
                  className={`h-full rounded-2xl border bg-card p-6 transition-all duration-300 ${
                    variant.highlight
                      ? "border-primary/40 shadow-lg shadow-primary/5"
                      : "border-border/60 hover:border-primary/30 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Variante {idx + 1}
                    </span>
                    {variant.highlight && (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-primary bg-primary-light px-2 py-0.5 rounded-full">
                        Empfohlen
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{variant.name}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{variant.tagline}</p>

                  <div className="space-y-3 border-t border-border/60 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Komplexität</span>
                      <div className="flex items-center gap-1">
                        {complexityLabel(variant.complexityValue).map((filled, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-5 rounded-full ${filled ? "bg-primary" : "bg-muted"}`}
                          />
                        ))}
                        <span className="ml-2 text-xs font-medium text-foreground">{variant.complexity}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-3 text-sm">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Timer className="h-3.5 w-3.5" /> Dauer
                      </span>
                      <span className="text-foreground text-right">{variant.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">{variant.bestFor}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines per variant */}
      <section className="py-12 md:py-16 section-padding">
        <div className="container-wide space-y-16">
          {variants.map((variant, vIdx) => (
            <ScrollReveal key={variant.id} delay={vIdx * 60}>
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Ablauf – {variant.name}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">{variant.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground md:max-w-md md:text-right">{variant.tagline}</p>
                </div>

                {/* Timeline */}
                <ol className="relative">
                  {/* vertical line */}
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-border/40"
                  />
                  {variant.steps.map((step, sIdx) => (
                    <li key={`${variant.id}-${sIdx}`} className="relative pl-14 pb-7 last:pb-0">
                      <span
                        className="absolute left-0 top-0 h-10 w-10 rounded-xl bg-background border border-primary/30 flex items-center justify-center shadow-sm"
                        aria-hidden
                      >
                        <step.icon className="h-5 w-5 text-primary" />
                      </span>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Schritt {sIdx + 1}
                        </span>
                        {step.timing && (
                          <span className="text-[11px] font-medium text-primary bg-primary-light px-2 py-0.5 rounded-full">
                            {step.timing}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Closing note */}
      <section className="py-12 md:py-16 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Welche Variante zu Ihnen passt, entscheiden wir gemeinsam im Kick-off. Maßgeblich sind Größe und
                  Qualität Ihres Datenbestands, Ihre Compliance-Anforderungen sowie der gewünschte Zeitpunkt für den
                  produktiven Start.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MigrationPage;
