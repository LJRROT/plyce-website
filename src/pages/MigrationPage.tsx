import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSignature,
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
  steps: Step[];
};

const variants: Variant[] = [
  {
    id: "quickstart",
    name: "Quickstart",
    tagline: "Sofort starten, Daten optional später nachziehen.",
    complexity: "Niedrig",
    complexityValue: 1,
    duration: "System in 48 Stunden nach Vertragsunterzeichnung",
    bestFor:
      "Geeignet für Teams, die sofort mit einer sauberen Umgebung starten und Altdaten erst zu einem späteren Zeitpunkt oder gar nicht übernehmen möchten.",
    steps: [
      {
        icon: FileSignature,
        title: "Vertragsunterzeichnung",
        description:
          "Mit der Unterzeichnung startet der Prozess und das Setup wird unmittelbar vorbereitet.",
        timing: "Tag 0",
      },
      {
        icon: Rocket,
        title: "Systembereitstellung",
        description:
          "Innerhalb von 48 Stunden nach Vertragsunterzeichnung erhalten Sie Zugang zum System inklusive einer Checkliste für Konfiguration und Onboarding.",
        timing: "innerhalb 48 Stunden",
      },
      {
        icon: PhoneCall,
        title: "Kick-off Call",
        description:
          "Im Kick-off stimmen wir Konfiguration, Setup und Onboarding ab und klären die ersten Schritte gemeinsam.",
      },
      {
        icon: Settings2,
        title: "Konfiguration, Setup & Onboarding",
        description:
          "Konfiguration, Setup und Onboarding werden wie im Standardprozess durchgeführt, damit das System vollständig einsatzbereit ist.",
      },
      {
        icon: Sparkles,
        title: "Clean-Start im produktiven Betrieb",
        description:
          "Sie starten produktiv mit einer sauberen, leeren Umgebung und legen neue Projekte, Kandidaten und Kunden direkt in plyce an.",
      },
      {
        icon: Database,
        title: "Optionale Datenmigration",
        description:
          "Bei Bedarf lassen sich Altdaten zu einem späteren Zeitpunkt nachziehen. Diese Migration ist optional und wird separat geplant.",
        timing: "optional, später",
      },
      {
        icon: LifeBuoy,
        title: "Hypercare & Support",
        description:
          "Nach der Hypercare-Phase erfolgt der Übergang in den regulären Support-Modus.",
      },
    ],
  },
  {
    id: "soft",
    name: "Soft Migration",
    tagline:
      "Onboarding und Migration gemeinsam vorbereitet, Backup zum vereinbarten Zeitpunkt.",
    complexity: "Mittel",
    complexityValue: 2,
    duration:
      "mehrere Wochen, Backup-Einspielung innerhalb einer Woche nach vereinbartem Termin",
    bestFor:
      "Geeignet für Teams, die vorhandene Daten strukturiert übernehmen wollen und das Onboarding parallel zur Migrationsvorbereitung durchlaufen möchten.",
    steps: [
      {
        icon: FileSignature,
        title: "Vertrag & Kick-off",
        description:
          "Nach Vertragsunterzeichnung startet der gemeinsame Kick-off mit Abstimmung von Zeitplan und Verantwortlichkeiten.",
        timing: "Tag 0",
      },
      {
        icon: Settings2,
        title: "Onboarding & Setup",
        description:
          "Pipelines, Rollen, Rechte und Schnittstellen richten wir gemeinsam mit Ihnen ein, sodass das System vollständig für die Migration vorbereitet ist.",
      },
      {
        icon: ClipboardCheck,
        title: "Terminvereinbarung Backup",
        description:
          "Es wird ein konkreter Zeitpunkt für die Bereitstellung und Einspielung des Backups vereinbart.",
      },
      {
        icon: HardDriveDownload,
        title: "Bereitstellung des Backups",
        description:
          "Sie stellen das Backup Ihres Bestandssystems zum vereinbarten Termin unverschlüsselt und zugänglich bereit.",
      },
      {
        icon: Database,
        title: "Einspielen der Daten",
        description:
          "Das Backup wird innerhalb einer Woche nach Bereitstellung migriert und in plyce eingespielt.",
        timing: "innerhalb 1 Woche",
      },
      {
        icon: Rocket,
        title: "Go-Live, Hypercare & Support",
        description:
          "Produktivstart mit migriertem Datenbestand, begleitet durch die Hypercare-Phase, anschließend Übergang in den regulären Support-Modus.",
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Migration",
    tagline: "Zwei-Schritt-Migration mit Probelauf und geplantem Switch.",
    complexity: "Hoch",
    complexityValue: 3,
    duration: "mehrere Wochen Vorlauf, finaler Switch an einem Tag",
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
          "Das System richten wir gemeinsam mit Ihnen vollständig ein, inklusive Rollen, Rechten, Pipelines und Schnittstellen.",
      },
      {
        icon: ShieldCheck,
        title: "Backup des Bestandssystems",
        description:
          "Mindestens zwei Wochen vor dem finalen Switch wird ein vollständiges Backup des Bestandssystems erstellt und abgesichert.",
        timing: "≥ 2 Wochen vor Switch",
      },
      {
        icon: HardDriveDownload,
        title: "Probemigration (Testlauf)",
        description:
          "Eine vollständige Testmigration prüft Datenqualität, Mappings und Edge Cases unter realen Bedingungen.",
        timing: "Testlauf",
      },
      {
        icon: ClipboardCheck,
        title: "Auswertung & Freigabe",
        description:
          "Ergebnisse der Probemigration werden ausgewertet, notwendige Korrekturen umgesetzt und die produktive Migration freigegeben.",
      },
      {
        icon: Database,
        title: "Produktive Migration am Stichtag X",
        description:
          "Dank des vorherigen Testlaufs erfolgt die finale Migration an einem einzigen Tag. Alle Nutzer wechseln zum Stichtag geschlossen vom Alt- auf das neue System.",
        timing: "Stichtag X",
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
  const [selectedId, setSelectedId] = useState<string>(variants[0].id);
  const selectedVariant = variants.find((v) => v.id === selectedId) ?? variants[0];

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
          <div
            role="tablist"
            aria-label="Migrationsvarianten"
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch"
          >
            {variants.map((variant, idx) => {
              const isActive = variant.id === selectedId;
              return (
                <ScrollReveal key={variant.id} delay={idx * 80} className="h-full">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`ablauf-${variant.id}`}
                    onClick={() => setSelectedId(variant.id)}
                    className={`h-full w-full text-left rounded-2xl border p-6 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                      isActive
                        ? "border-primary bg-primary-light/40 shadow-lg ring-1 ring-primary/30"
                        : "border-border/60 bg-card hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Variante {idx + 1}
                      </span>
                      {isActive && (
                        <span className="text-[11px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                          Ausgewählt
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
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline for selected variant */}
      <section className="py-12 md:py-16 section-padding">
        <div className="container-wide">
          <div
            id={`ablauf-${selectedVariant.id}`}
            role="tabpanel"
            className="rounded-2xl border border-border/60 bg-muted/20 p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ablauf – {selectedVariant.name}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">{selectedVariant.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground md:max-w-md md:text-right">{selectedVariant.tagline}</p>
            </div>

            {/* Timeline */}
            <ol className="relative">
              <span
                aria-hidden
                className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-border/40"
              />
              {selectedVariant.steps.map((step, sIdx) => (
                <li key={`${selectedVariant.id}-${sIdx}`} className="relative pl-14 pb-7 last:pb-0">
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
