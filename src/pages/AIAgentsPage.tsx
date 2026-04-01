import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  ClipboardList,
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

/** Reihenfolge: Kern-Recruiting & Delivery zuerst, dann Kommunikation/Reports, Marketing & BD, Produktivität. */
const agents: AgentDef[] = [
  {
    icon: FileSearch,
    name: "AI CV Analyzer",
    tagline:
      "Analysiert CVs: strukturiert und einheitlich Berufserfahrung, Ausbildung, Zusammenfassung, Highlight sowie Tags und Skills",
    capabilities: [
      "Tags und Skills sowie Kandidatentyp und Seniorität werden aus dem CV abgeleitet",
      "Berufserfahrung, Ausbildung, Zusammenfassung und Highlight als einheitliche Profilteile",
      "Anonymisierung von Kandidateninformationen sowie von Unternehmens- und Branchenangaben im CV",
      "Rollenbezeichnungen und Schwerpunkte aus dem CV erkennen",
      "Uneinheitliche Layouts auf ein einheitliches Profil abbilden",
      "Daten landen im strukturierten Feldmodell, nicht nur im Freitext",
      "Profile sind direkt für Suche, Listen und Matching nutzbar",
    ],
  },
  {
    icon: UserRoundSearch,
    name: "AI Candidate Match",
    tagline:
      "Rankt Kandidaten zum Mandat mit Score von 0 bis 100 und einer klaren, textlichen Begründung",
    capabilities: [
      "Score und Begründung bleiben am Kandidaten dokumentiert",
      "Muss-Skills und Projektanforderungen werden gegeneinander geprüft",
      "Shortlists nach Relevanz sortiert, nicht nur alphabetisch",
      "Erste Vorauswahl ohne Endlosscreening in Tabellen",
      "Die Shortlist aus dem Match lässt sich direkt in Multimails übernehmen und weiterführen",
      "Arbeitet direkt auf Kandidaten und Projekten in plyce",
    ],
  },
  {
    icon: Mail,
    name: "AI Outreach Messages",
    tagline:
      "Schreibt personalisierte, projektspezifische Active-Sourcing-Ansprachen für Xing und LinkedIn oder den Mailshot",
    capabilities: [
      "Ton, Länge und Aufbau pro Nachricht individuell einstellbar",
      "Mandats- und Projektinfos fließen in die Ansprache ein",
      "Entwürfe aus Kandidaten- und Projektbezug, ohne ständigen Wechsel zwischen Tools",
      "Stellt automatisch Bezug zum Projekt her und generiert entsprechende Inhalte",
      "Serien planbar, Inhalt bleibt je Kontakt individuell",
      "Text als prüfbarer Entwurf vor dem Versand",
    ],
  },
  {
    icon: Sparkles,
    name: "AI Dossier Highlights",
    tagline:
      "Generiert aus der Kombination von Kandidat und Projekt die wichtigsten Highlights, die die Passung betonen",
    capabilities: [
      "Kernaussagen statt komplettes CV zum Durchlesen",
      "Schwerpunkt auf Erfahrung, die für dieses Mandat zählt",
      "Ton und Länge für Entscheider aufbereitet",
      "Aufbau, Länge und Tonalität individuell einstellbar",
      "Argumentationsspitzen für die Vorstellung vorbereitet",
      "Branche und Rolle fließen in die Formulierung ein",
    ],
  },
  {
    icon: FileText,
    name: "AI CV Formatter",
    tagline:
      "Bringt Berufserfahrung und Ausbildung in ein sauberes Standardlayout, inklusive Anonymisierung und Übersetzung Deutsch und Englisch",
    capabilities: [
      "Individuell einstellbare Struktur für Kandidatenvorstellungen",
      "Automatische Anonymisierung von CVs inklusive Unternehmen und Branchen",
      "Gesamten CV per Klick ins Deutsche und Englische übersetzen",
      "Berufsstationen im Lebenslauf können angereichert werden",
      "Schnell von Rohdaten zur versandfertigen Fassung",
      "Gleicher Qualitätsstandard über alle Profile",
    ],
  },
  {
    icon: FileChartColumn,
    name: "AI Project Report",
    tagline:
      "Erstellt einen professionellen Projektreport aus dem Mandat mit sauber aufgelisteten Kandidaten, Interviews, Statusänderungen, Absagen inklusive Gründen sowie Kennzahlen",
    capabilities: [
      "Alle Kandidaten und Stati eines Projekts auf einer Seite",
      "Interviewtermine und Feedback sichtbar mitgeführt",
      "KPIs aus dem Projekt automatisch mit ausgegeben",
      "Generiert HTML und Text zum Kopieren oder zum Versand per E-Mail",
      "Liefert aus den KPIs eine nachvollziehbare Argumentationsgrundlage für das Kundengespräch",
      "Inhalt folgt dem Recruiting-Projekt in plyce",
    ],
  },
  {
    icon: ClipboardList,
    name: "AI Company Status Report",
    tagline:
      "Fasst alle laufenden Projekte eines Kunden zusammen: Kandidatenstati und Interviewlage auf einen Blick",
    capabilities: [
      "Account-Sicht über mehrere Suchmandate gleichzeitig",
      "Nachvollziehbar, wo welcher Kandidat im Prozess steht",
      "Interviewhistorie je Projekt gebündelt",
      "Gespräch mit dem Kunden vor dem wöchentlichen Call vorbereitet",
      "Interne Abstimmung am gleichen Kunden auf einen Stand",
      "Kein manuelles Zusammenkopieren aus Einzelreports",
    ],
  },
  {
    icon: Newspaper,
    name: "AI Job Post Builder",
    tagline: "Wandelt Mandatsdaten in eine anonymisierte, publikationsreife Stellenanzeige um",
    capabilities: [
      "Anzeigentext aus Rolle, Anforderungen und Rahmen im Projekt",
      "Sensible Kundendaten bleiben in der Ausschreibung ungenannt",
      "Formulierungen für Jobbörsen und Karriereseite angepasst",
      "Von internem Briefing zur Ausschreibung in wenigen Schritten",
      "Einheitlicher Stil über alle offenen Rollen",
      "Aufbau, Struktur und Tonalität individuell einstellbar",
    ],
  },
  {
    icon: Building2,
    name: "AI Company Enrichment",
    tagline:
      "Nach Eingabe der URL analysiert die KI die Website des Unternehmens und übernimmt strukturierte Firmendaten ins Profil",
    capabilities: [
      "Branche, Größe und Geschäftsmodell aus öffentlichen Quellen",
      "Profilfelder füllen statt manuell zu recherchieren",
      "Ansprache im BD mit Fakten statt mit Floskeln",
      "Kurzrecherche vor dem Erstkontakt automatisiert",
      "Vollständigere Kundenakten ohne Fleißarbeit",
      "Strukturierte Firmendaten lassen sich direkt in Account und Stammdaten in plyce übernehmen",
    ],
  },
  {
    icon: Signature,
    name: "AI Signature Parser",
    tagline: "Liest Kontaktdaten aus E-Mail-Signaturen und schlägt einen sauberen Kontakt zum Übernehmen vor",
    capabilities: [
      "Name, Rolle, Telefon, Mail und Socials strukturiert ausgelesen",
      "Vorschau vor dem Speichern, kein Blindübernehmen",
      "Ein Klick generiert den vollständigen Kontakt in plyce",
      "Automatisiert zu einer besseren Datenbasis aus der Korrespondenz",
    ],
  },
];

const AIAgentsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight text-center">
          <ScrollReveal delay={80}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug pb-2 mb-3 text-gradient-hero text-balance">
              Konzentriere dich auf das Wesentliche.
              <br />
              {agents.length} AI Agents erledigen den Rest.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-6 md:mt-8 max-w-4xl mx-auto text-left">
              <p className="text-center text-lg md:text-xl font-semibold text-foreground/90 tracking-tight max-w-3xl mx-auto mb-10 leading-snug">
                OpenAI oder Mistral: Sie wählen das Modell passend zu Datenstandort, Compliance und Performance.
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
                    US-amerikanisches High-Performance-Sprachmodell. Stark bei komplexen Texten, Analysen und Generierung im
                    Agenten-Alltag.
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
                    Europäische Option mit Fokus auf transparente, regulierungsnahe Nutzung. Geeignet, wenn Sie DSGVO und
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight mb-8">
                Alle Agenten live erleben
              </h2>
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
