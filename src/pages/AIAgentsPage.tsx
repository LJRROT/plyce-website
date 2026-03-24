import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Contact2,
  Database,
  FileChartColumn,
  FileSearch,
  FileText,
  Mail,
  Newspaper,
  Signature,
  Sparkles,
  UserRoundSearch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AgentDef = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  capabilities: string[];
};

const agents: AgentDef[] = [
  {
    icon: FileSearch,
    name: "CV Intelligence Agent",
    tagline: "Versteht Kandidatenprofile automatisch",
    capabilities: [
      "Extrahiert strukturierte Daten aus CVs (Skills, Erfahrung, Ausbildung)",
      "Erkennt relevante Keywords und Kompetenzen",
      "Standardisiert uneinheitliche Lebensläufe",
      "Reduziert manuelle Datenerfassung drastisch",
      "Unterstützt mehrere Formate (PDF, DOC etc.)",
      "Liefert sofort verwertbare Kandidatenprofile",
    ],
  },
  {
    icon: UserRoundSearch,
    name: "Matching Agent",
    tagline: "Findet die besten Kandidaten für jede Position",
    capabilities: [
      "Bewertet Kandidaten mit Score (0–100)",
      "Liefert nachvollziehbare Begründungen",
      "Vergleicht Skills mit Projektanforderungen",
      "Erstellt sofort Shortlists",
      "Reduziert Screening-Aufwand massiv",
      "Verbessert Qualität der Vorschläge",
    ],
  },
  {
    icon: FileText,
    name: "CV Creation Agent",
    tagline: "Erstellt professionelle Kandidatenprofile",
    capabilities: [
      "Generiert formatierte CVs auf Knopfdruck",
      "Unterstützt Anonymisierung für Kundenvorstellungen",
      "Übersetzt Profile automatisch (DE/EN)",
      "Optimiert Inhalte für bessere Lesbarkeit",
      "Vereinheitlicht Darstellung aller Kandidaten",
      "Perfekt für schnelle Dossier-Erstellung",
    ],
  },
  {
    icon: Mail,
    name: "Sourcing Agent",
    tagline: "Gewinnt Kandidaten effizient und personalisiert",
    capabilities: [
      "Erstellt individuelle Active-Sourcing-Nachrichten für LinkedIn & Xing",
      "Passt Tonalität automatisch an Rolle und Seniorität an",
      "Nutzt Projektdaten für hochrelevante Ansprache",
      "Reduziert den manuellen Aufwand im Outreach deutlich",
      "Erhöht Antwortquoten durch personalisierte Inhalte",
      "Skalierbar für Multi-Mail-Kampagnen",
    ],
  },
  {
    icon: Sparkles,
    name: "Dossier Agent",
    tagline: "Bereitet Kandidaten perfekt für Kunden auf",
    capabilities: [
      "Generiert prägnante Kandidaten-Highlights",
      "Verdichtet Profile auf das Wesentliche",
      "Hebt relevante Projekterfahrung hervor",
      "Optimiert Präsentation für Entscheider",
      "Spart Zeit bei der Kandidatenvorstellung",
      "Erhöht Überzeugungskraft beim Kunden",
    ],
  },
  {
    icon: Building2,
    name: "Company Intelligence Agent",
    tagline: "Liefert wertvolle Unternehmensdaten automatisch",
    capabilities: [
      "Extrahiert Firmendaten von Websites",
      "Erkennt Geschäftsmodell und Struktur",
      "Unterstützt Vertrieb und Lead-Generierung",
      "Spart manuelle Recherchezeit",
      "Liefert Kontext für bessere Ansprache",
      "Verbessert Targeting im Business Development",
    ],
  },
  {
    icon: FileChartColumn,
    name: "Reporting Agent",
    tagline: "Hält Kunden jederzeit auf dem neuesten Stand",
    capabilities: [
      "Erstellt professionelle Projekt-Reports",
      "Zeigt Kandidatenstatus und Pipeline",
      "Integriert Interview- und KPI-Daten",
      "Export als sofort versendbares HTML",
      "Schafft maximale Transparenz",
      "Stärkt Kundenbindung durch klare Kommunikation",
    ],
  },
  {
    icon: Newspaper,
    name: "Job Posting Agent",
    tagline: "Erstellt hochwertige Stellenanzeigen automatisch",
    capabilities: [
      "Wandelt Projektdaten in Jobanzeigen um",
      "Anonymisiert sensible Kundendaten",
      "Optimiert Texte für Jobbörsen",
      "Spart Zeit bei der Erstellung",
      "Konsistente Qualität über alle Jobs",
      "Schnell einsatzbereit für Multiposting",
    ],
  },
  {
    icon: Contact2,
    name: "Data Capture Agent",
    tagline: "Erfasst Kontaktdaten automatisch",
    capabilities: [
      "Extrahiert Daten aus E-Mail-Signaturen",
      "Erkennt Namen, Positionen und Kontaktdaten",
      "Übernimmt Daten direkt ins System",
      "Vermeidet manuelle Eingabefehler",
      "Beschleunigt CRM-Pflege",
      "Funktioniert im laufenden Mailverkehr",
    ],
  },
  {
    icon: Signature,
    name: "Signatur-Kontakt Agent",
    tagline: "Von der Signatur zum fertigen Kontakt – übersichtlich einspeichern und weiterverwenden",
    capabilities: [
      "Erkennt und zerlegt E-Mail-Signaturen in strukturierte Kontaktfelder",
      "Rendert eine klare Vorschau (Name, Rolle, erreichbar, Socials) vor der Übernahme",
      "Speichert freigegebene Kontakte direkt in plyce im richtigen Datensatz",
      "Generiert konsistente Kontaktstammdaten für ATS/CRM (ohne Copy-Paste)",
      "Ordnet Kontakte Kandidaten oder Unternehmen zu, wo es fachlich passt",
      "Reduziert Lücken in der Datenbasis nach E-Mail-Korrespondenz",
    ],
  },
  {
    icon: Database,
    name: "Datenqualitäts-Agent",
    tagline: "Bereinigt und bereichert Ihren Bestand – damit Matching und Reports verlässlich werden",
    capabilities: [
      "Erkennt Dubletten und ähnliche Datensätze mit transparenter Trefferlogik",
      "Schlägt Zusammenführungen, Abgleich oder manuelle Prüfung sinnvoll vor",
      "Reichert Standortdaten an und harmonisiert Orte, Regionen und Formate (Location Enrichment)",
      "Setzt konsistente Tags und Klassifikationen für bessere Segmentierung und Suche",
      "Verbessert die Treffsicherheit von Matching, Listen und Auswertungen",
      "Reduziert manuelle Datenpflege durch intelligente Vorschläge im Hintergrund",
    ],
  },
];

const AIAgentsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight text-center">
          <ScrollReveal delay={80}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-6 text-gradient-hero">
              {agents.length} spezialisierte KI-Agenten.
              <br />
              Ein System: plyce.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-14 md:mt-20 max-w-4xl mx-auto text-left">
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
                OpenAI oder Mistral — Sie wählen das Modell, das zu Datenstandort, Compliance und Performance passt.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border/60 bg-card/80 p-8 md:p-9 shadow-sm hover:border-primary/25 transition-colors">
                  <div className="flex items-center justify-center md:justify-start h-10 mb-5">
                    <img
                      src="/logos/openai-wordmark.svg"
                      alt="OpenAI"
                      className="h-8 w-auto max-w-[160px] object-contain object-left"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    US-amerikanisches High-Performance-Sprachmodell — starke Ergebnisse bei komplexen Texten, Analysen und
                    Generierung im Agenten-Alltag.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/80 p-8 md:p-9 shadow-sm hover:border-primary/25 transition-colors">
                  <div className="flex items-center justify-center md:justify-start h-10 mb-5">
                    <img
                      src="/logos/mistral-wordmark.svg"
                      alt="Mistral AI"
                      className="h-8 w-auto max-w-[200px] object-contain object-left"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Europäische Option mit Fokus auf transparente, regulierungsnahe Nutzung — ideal, wenn Sie DSGVO und
                    EU-Datenverarbeitung priorisieren.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 section-padding">
        <div className="container-tight space-y-6 md:space-y-8">
          {agents.map((agent, i) => (
            <ScrollReveal key={agent.name} delay={0}>
              <article className="rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                        <agent.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h2 className="text-xl font-bold tracking-tight">{agent.name}</h2>
                        <span className="text-xs font-medium text-primary bg-primary-light px-2 py-0.5 rounded-full">
                          Agent #{i + 1}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground mb-5">{agent.tagline}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {agent.capabilities.map((cap) => (
                          <div key={cap} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-foreground p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
                Alle Agenten live erleben
              </h2>
              <p className="text-primary-foreground/60 max-w-md mx-auto mb-8">
                In einer persönlichen Demo zeigen wir, wie Sourcing, CV-Intelligence, Matching und Reporting in plyce
                zusammenspielen.
              </p>
              <Button
                variant="hero"
                size="lg"
                type="button"
                className="border-2 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 whitespace-normal text-center max-sm:px-4 sm:whitespace-nowrap"
                onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}
              >
                Request Demo <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AIAgentsPage;
