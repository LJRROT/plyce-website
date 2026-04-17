import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  GitCompare,
  Globe,
  Highlighter,
  Kanban,
  LayoutTemplate,
  Presentation,
  ScanSearch,
  SendHorizontal,
  FileSignature,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AgentDef = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  capabilities: string[];
};

/** Reihenfolge: Kern-Recruiting & Delivery zuerst, dann Kommunikation/Reports, Marketing & BD, Produktivität. */
const agents: AgentDef[] = [
  {
    id: "ai-cv-analyzer",
    icon: ScanSearch,
    name: "AI CV Analyzer",
    tagline:
      "Strukturierte CV-Auswertung: Berufserfahrung, Ausbildung, Zusammenfassung, Highlight, Tags und Skills",
    capabilities: [
      "Tags und Skills sowie Kandidatentyp und Seniorität werden aus dem CV abgeleitet",
      "Berufserfahrung, Ausbildung, Zusammenfassung und Highlight als einheitliche Profilteile",
      "Anonymisierung von Kandidateninformationen sowie von Unternehmens- und Branchenangaben im CV",
      "Erkennung von Rollenbezeichnungen und fachlichen Schwerpunkten aus dem CV",
      "Überführung der Daten ins strukturierte Feldmodell statt in Freitext",
      "Direkte Nutzbarkeit der Profile für Suche, Listen und Matching",
    ],
  },
  {
    id: "ai-candidate-match",
    icon: GitCompare,
    name: "AI Candidate Match",
    tagline:
      "Relevanzbewertung von Kandidaten zum Mandat mit Score (0–100) und textlicher Begründung",
    capabilities: [
      "Score und Begründung bleiben am Kandidaten dokumentiert",
      "Muss-Skills und Projektanforderungen werden gegeneinander geprüft",
      "Shortlists nach Relevanz sortiert, nicht nur alphabetisch",
      "Erste Vorauswahl ohne Endlosscreening in Tabellen",
      "Direkte Übernahme der Match-Shortlist in Multimails und Folgeprozesse",
      "Direkte Verarbeitung auf Kandidaten- und Projektebene in plyce",
    ],
  },
  {
    id: "ai-outreach-messages",
    icon: SendHorizontal,
    name: "AI Outreach Messages",
    tagline:
      "Personalisierte, projektspezifische Active-Sourcing-Nachrichten für Xing, LinkedIn und Mailshots",
    capabilities: [
      "Ton, Länge und Aufbau pro Nachricht individuell einstellbar",
      "Mandats- und Projektinfos fließen in die Ansprache ein",
      "Entwürfe aus Kandidaten- und Projektbezug, ohne ständigen Wechsel zwischen Tools",
      "Automatische Projektreferenz in der Inhaltsgenerierung",
      "Planbare Serien bei weiterhin individuellem Inhalt je Kontakt",
      "Text als prüfbarer Entwurf vor dem Versand",
    ],
  },
  {
    id: "ai-dossier-highlights",
    icon: Highlighter,
    name: "AI Dossier Highlights",
    tagline:
      "Kompakte Highlights zur Passung von Kandidat und Projekt",
    capabilities: [
      "Kernaussagen statt vollständiger CV-Lektüre",
      "Schwerpunkt auf Erfahrung, die für dieses Mandat zählt",
      "Aufbereitete Tonalität und Länge für Entscheider",
      "Aufbau, Länge und Tonalität individuell einstellbar",
      "Vorbereitete Argumentationsspitzen für die Kandidatenvorstellung",
      "Branche und Rolle fließen in die Formulierung ein",
    ],
  },
  {
    id: "ai-cv-formatter",
    icon: LayoutTemplate,
    name: "AI CV Formatter",
    tagline:
      "Standardisiertes CV-Layout für Berufserfahrung und Ausbildung inklusive Anonymisierung und Übersetzung DE/EN",
    capabilities: [
      "Individuell einstellbare Struktur für Kandidatenvorstellungen",
      "Automatische Anonymisierung von CVs inklusive Unternehmen und Branchen",
      "Übersetzung des gesamten CV ins Deutsche und Englische per Klick",
      "Anreicherung von Berufsstationen im Lebenslauf",
      "Schneller Übergang von Rohdaten zur versandfertigen Fassung",
      "Gleicher Qualitätsstandard über alle Profile",
    ],
  },
  {
    id: "ai-project-report",
    icon: Presentation,
    name: "AI Project Report",
    tagline:
      "Projektreport aus dem Mandat mit Kandidaten, Interviews, Statusänderungen, Absagen inkl. Gründe und Kennzahlen",
    capabilities: [
      "Alle Kandidaten und Stati eines Projekts auf einer Seite",
      "Sichtbare Mitführung von Interviewterminen und Feedback",
      "Automatische Ausgabe projektbezogener KPIs",
      "Generiert HTML und Text zum Kopieren oder zum Versand per E-Mail",
      "Liefert aus den KPIs eine nachvollziehbare Argumentationsgrundlage für das Kundengespräch",
      "Inhalt folgt dem Recruiting-Projekt in plyce",
    ],
  },
  {
    id: "ai-company-status-report",
    icon: Kanban,
    name: "AI Company Status Report",
    tagline:
      "Zusammenfassung laufender Kundenprojekte: Kandidatenstati und Interviewlage auf einen Blick",
    capabilities: [
      "Account-Sicht über mehrere Suchmandate gleichzeitig",
      "Nachvollziehbar, wo welcher Kandidat im Prozess steht",
      "Interviewhistorie je Projekt gebündelt",
      "Vorbereitete Gesprächsgrundlage für den wöchentlichen Kundencall",
      "Einheitlicher Informationsstand in der internen Kundenabstimmung",
      "Kein manuelles Zusammenkopieren aus Einzelreports",
    ],
  },
  {
    id: "ai-job-post-builder",
    icon: Briefcase,
    name: "AI Job Post Builder",
    tagline: "Anonymisierte, publikationsreife Stellenanzeige aus Mandatsdaten",
    capabilities: [
      "Anzeigentext aus Rolle, Anforderungen und Rahmen im Projekt",
      "Sensible Kundendaten bleiben in der Ausschreibung ungenannt",
      "Angepasste Formulierungen für Jobbörsen und Karriereseite",
      "Von internem Briefing zur Ausschreibung in wenigen Schritten",
      "Einheitlicher Stil über alle offenen Rollen",
      "Aufbau, Struktur und Tonalität individuell einstellbar",
    ],
  },
  {
    id: "ai-company-enrichment",
    icon: Globe,
    name: "AI Company Enrichment",
    tagline:
      "Strukturierte Firmendaten aus der Unternehmenswebsite per URL im Profil",
    capabilities: [
      "Branche, Größe und Geschäftsmodell aus öffentlichen Quellen",
      "Befüllung von Profilfeldern statt manueller Recherche",
      "Ansprache im BD mit Fakten statt mit Floskeln",
      "Kurzrecherche vor dem Erstkontakt automatisiert",
      "Vollständigere Kundenakten ohne Fleißarbeit",
      "Strukturierte Firmendaten lassen sich direkt in Account und Stammdaten in plyce übernehmen",
    ],
  },
  {
    id: "ai-signature-parser",
    icon: FileSignature,
    name: "AI Signature Parser",
    tagline: "Strukturierte Kontaktdaten aus E-Mail-Signaturen mit Übernahmevorschlag",
    capabilities: [
      "Name, Rolle, Telefon, Mail und Socials strukturiert ausgelesen",
      "Vorschau vor dem Speichern statt unkontrollierter Übernahme",
      "Generierung des vollständigen Kontakts in plyce per Klick",
      "Automatisiert zu einer besseren Datenbasis aus der Korrespondenz",
    ],
  },
];

export const aiAgentsNav = agents.map(({ id, name }) => ({ id, title: name }));

const AIAgentsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight text-center">
          <ScrollReveal delay={80}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug pb-2 mb-3 text-gradient-hero text-balance">
              Konzentriere dich auf das Wesentliche
              <br />
              {agents.length} AI Agents erledigen den Rest
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-6 md:mt-8 max-w-4xl mx-auto text-left">
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
                Ihre Präferenz entscheidet. OpenAI oder Mistral, passend zu DSGVO, Datenstandort und Performance-Anforderungen.
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
                    AI-Agents-Alltag.
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
              <article
                id={agent.id}
                className="scroll-mt-28 rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                        <agent.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 flex-col gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-bold tracking-tight">{agent.name}</h2>
                        <span className="text-xs font-medium text-primary bg-primary-light px-2 py-0.5 rounded-full">
                          Agent #{i + 1}
                        </span>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed">{agent.tagline}</p>
                      </div>
                      <div className="mt-auto border-t border-border/50 pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
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
                Alle AI Agents live erleben
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
