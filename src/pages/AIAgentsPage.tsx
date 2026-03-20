import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Brain, FileSearch, Users, Target, PenTool, Globe,
  BarChart3, Mail, MessageSquare, Search, ArrowRight, Sparkles
} from "lucide-react";

const agents = [
  {
    icon: FileSearch,
    name: "CV Parser Agent",
    tagline: "Lebensläufe lesen? Erledigt.",
    description: "Analysiert eingehende Lebensläufe automatisch und extrahiert alle relevanten Daten: Berufserfahrung, Skills, Ausbildung, Sprachkenntnisse und Kontaktdaten. Unterstützt PDF, Word und LinkedIn-Profile.",
    capabilities: [
      "Automatische Datenextraktion aus allen gängigen Formaten",
      "Erkennung von Skills, Zertifizierungen und Branchenerfahrung",
      "Strukturierte Überführung in das Kandidatenprofil",
      "Batch-Import für große Mengen an Bewerbungen",
    ],
  },
  {
    icon: Target,
    name: "Matching Agent",
    tagline: "Der richtige Kandidat, sofort.",
    description: "Gleicht Kandidatenprofile mit offenen Vakanzen ab und liefert qualifizierte Vorschläge auf Basis von Skills, Erfahrung, Standort und Gehaltsvorstellung. Lernt aus Ihren Entscheidungen und wird mit der Zeit präziser.",
    capabilities: [
      "Multi-Faktor-Matching (Skills, Erfahrung, Gehalt, Standort)",
      "Selbstlernender Algorithmus basierend auf Ihren Entscheidungen",
      "Scoring-System mit Transparenz über Match-Gründe",
      "Proaktive Vorschläge bei neuen Vakanzen",
    ],
  },
  {
    icon: PenTool,
    name: "Dossier Agent",
    tagline: "Professionelle Dossiers in Sekunden.",
    description: "Erstellt auf Basis der Kandidatendaten professionelle, versandfertige Dossiers. Formatiert, strukturiert und mit allen relevanten Informationen – bereit für den Kunden.",
    capabilities: [
      "Automatische Erstellung aus Kandidatenprofil",
      "Anpassbare Templates für verschiedene Kunden",
      "PDF-Export in Ihrem Corporate Design",
      "Anonymisierung sensibler Daten auf Wunsch",
    ],
  },
  {
    icon: Globe,
    name: "Job Ad Agent",
    tagline: "Stellenanzeigen, die performen.",
    description: "Generiert ansprechende, zielgruppenspezifische Stellenanzeigen basierend auf dem Anforderungsprofil. Optimiert für verschiedene Plattformen und Zielgruppen.",
    capabilities: [
      "KI-generierte Texte basierend auf Anforderungsprofil",
      "Anpassung an Plattform (LinkedIn, StepStone, Indeed)",
      "A/B-Testing-Vorschläge für bessere Performance",
      "Automatische Veröffentlichung auf gewählten Kanälen",
    ],
  },
  {
    icon: Mail,
    name: "Outreach Agent",
    tagline: "Personalisierte Ansprache, skaliert.",
    description: "Verfasst individuelle Ansprache-Nachrichten für Kandidaten basierend auf deren Profil und der offenen Position. Personalisiert, professionell und in Ihrem Tonfall.",
    capabilities: [
      "Personalisierte E-Mails und Nachrichten",
      "Anpassung an Ihre Tonalität und Branche",
      "Follow-up-Sequenzen mit intelligentem Timing",
      "Performance-Tracking pro Kampagne",
    ],
  },
  {
    icon: BarChart3,
    name: "Analytics Agent",
    tagline: "Daten verstehen, besser entscheiden.",
    description: "Analysiert Ihre Recruiting-Daten und liefert actionable Insights. Von Pipeline-Velocity über Conversion-Rates bis hin zu Team-Performance.",
    capabilities: [
      "Echtzeit-KPI-Dashboards",
      "Trend-Erkennung und Anomalie-Warnungen",
      "Prognosen für Placement-Wahrscheinlichkeiten",
      "Benchmarking gegen Branchen-Standards",
    ],
  },
  {
    icon: MessageSquare,
    name: "Communication Agent",
    tagline: "Nie wieder Kandidaten verlieren.",
    description: "Automatisiert die Kandidatenkommunikation entlang des gesamten Prozesses. Status-Updates, Erinnerungen und Follow-ups – alles zur richtigen Zeit.",
    capabilities: [
      "Automatische Status-Updates an Kandidaten",
      "Intelligente Follow-up-Erinnerungen",
      "Multi-Channel: E-Mail, WhatsApp, SMS",
      "Personalisierte Absagen mit Wertschätzung",
    ],
  },
  {
    icon: Search,
    name: "Search Agent",
    tagline: "Finden statt suchen.",
    description: "Durchsucht Ihren gesamten Talentpool mit natürlicher Sprache. Stellen Sie Fragen wie 'Java-Entwickler in München mit 5+ Jahren Erfahrung' und erhalten Sie sofort Ergebnisse.",
    capabilities: [
      "Natural Language Search über alle Kandidaten",
      "Semantische Suche versteht Kontext und Synonyme",
      "Filter nach beliebigen Kriterien kombinierbar",
      "Gespeicherte Suchen mit automatischen Alerts",
    ],
  },
  {
    icon: Users,
    name: "Qualification Agent",
    tagline: "Kandidatenqualität automatisch bewerten.",
    description: "Bewertet eingehende Bewerbungen automatisch anhand Ihrer definierten Kriterien. Priorisiert die besten Kandidaten und spart Ihnen Zeit in der Vorauswahl.",
    capabilities: [
      "Automatisches Scoring nach Ihren Kriterien",
      "Must-Have vs. Nice-to-Have Gewichtung",
      "Skill-Gap-Analyse pro Kandidat",
      "Empfehlungen für nächste Schritte",
    ],
  },
  {
    icon: Sparkles,
    name: "Automation Agent",
    tagline: "Workflows, die sich selbst erledigen.",
    description: "Orchestriert komplexe Workflows über alle anderen Agenten hinweg. Trigger-basierte Automatisierung für den gesamten Recruiting-Prozess.",
    capabilities: [
      "If/Then-Workflows mit visueller Konfiguration",
      "Cross-Agent-Orchestrierung",
      "Event-basierte Trigger (Status, Zeit, Aktion)",
      "Audit-Trail für alle automatisierten Aktionen",
    ],
  },
];

const AIAgentsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-light border border-primary/20 px-4 py-1.5 mb-6">
              <Brain className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">KI-gestützte Automatisierung</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-6">
              10 KI-Agenten.<br />Ein Ziel: Ihre Effizienz.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jeder Agent ist auf eine zentrale Aufgabe im Recruiting spezialisiert. Zusammen verwandeln sie plyce in Ihren leistungsstärksten Mitarbeiter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Agents list */}
      <section className="pb-20 section-padding">
        <div className="container-tight space-y-8">
          {agents.map((agent, i) => (
            <ScrollReveal key={agent.name} delay={0}>
              <div className={`rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 ${i % 2 === 0 ? '' : ''}`}>
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                        <agent.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="text-xl font-bold">{agent.name}</h3>
                        <span className="text-xs font-medium text-primary bg-primary-light px-2 py-0.5 rounded-full">Agent #{i + 1}</span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground mb-3">{agent.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">{agent.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {agent.capabilities.map((cap) => (
                          <div key={cap} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-foreground p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
                KI, die für Sie arbeitet
              </h2>
              <p className="text-primary-foreground/60 max-w-md mx-auto mb-8">
                Erleben Sie in einer persönlichen Demo, wie unsere KI-Agenten Ihren Recruiting-Alltag transformieren.
              </p>
              <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Demo buchen <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AIAgentsPage;
