import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Users, FileSearch, BarChart3, Mail, Zap, Target,
  Briefcase, Calendar, Globe, MessageSquare, Settings,
  ArrowRight, CheckCircle2, Layers, PieChart, FolderOpen
} from "lucide-react";

const allFeatures = [
  {
    category: "Kandidatenmanagement",
    items: [
      { icon: Users, title: "Candidate Dossiers", desc: "Strukturierte Kandidatenprofile mit Skills, Erfahrung, Gehaltsvorstellungen und Verfügbarkeit. Professionelle Dossiers auf Knopfdruck generieren.", highlights: ["Automatische Profilanalyse", "Exportierbare Dossiers", "Skill-Tagging"] },
      { icon: FileSearch, title: "CV Parsing", desc: "Automatische Extraktion aller relevanten Daten aus Lebensläufen. PDFs, Word-Dokumente und LinkedIn-Profile werden in Sekunden analysiert.", highlights: ["Multi-Format Support", "95%+ Genauigkeit", "Batch-Import"] },
      { icon: Layers, title: "Talentpool", desc: "Aufbau und Pflege eines strukturierten Talentpools. Kandidaten segmentieren, taggen und bei passenden Vakanzen sofort matchen.", highlights: ["Smart Tags", "Automatisches Matching", "Wiedervorlage-System"] },
    ],
  },
  {
    category: "Projekte & Vakanzen",
    items: [
      { icon: Briefcase, title: "Vakanzmanagement", desc: "Alle offenen Positionen im Überblick. Anforderungsprofile definieren, Kunden zuordnen und den Besetzungsprozess transparent abbilden.", highlights: ["Anforderungsprofile", "Kundenzuordnung", "Deadline-Tracking"] },
      { icon: Target, title: "Pipeline Management", desc: "Visuelles Kanban-Board für jeden Recruiting-Prozess. Von Longlist über Shortlist bis Placement – volle Kontrolle.", highlights: ["Drag & Drop Kanban", "Status-Automatisierung", "Deal Value Tracking"] },
      { icon: PieChart, title: "Deal Tracking", desc: "Umsatzprognosen, Platzierungswahrscheinlichkeiten und Pipeline-Werte auf einen Blick. Für bessere Forecasts und mehr Placements.", highlights: ["Revenue Forecasting", "Wahrscheinlichkeiten", "Provision-Tracking"] },
    ],
  },
  {
    category: "Kommunikation & Outreach",
    items: [
      { icon: Mail, title: "E-Mail Integration", desc: "Nahtlose Integration mit Google Workspace und Microsoft 365. E-Mails direkt aus dem System senden, empfangen und tracken.", highlights: ["Gmail & Outlook", "E-Mail Templates", "Tracking & Analytics"] },
      { icon: MessageSquare, title: "WhatsApp Integration", desc: "Kandidaten dort erreichen, wo sie sind. WhatsApp-Nachrichten direkt aus plyce senden und empfangen.", highlights: ["Direkte Kommunikation", "Template-Nachrichten", "Verlauf im System"] },
      { icon: Globe, title: "Stellenanzeigen", desc: "KI-generierte Stellenanzeigen in Sekunden. Automatische Veröffentlichung auf relevanten Plattformen.", highlights: ["KI-Generierung", "Multi-Channel Posting", "Performance Tracking"] },
    ],
  },
  {
    category: "Analytics & Automatisierung",
    items: [
      { icon: BarChart3, title: "Reporting & KPIs", desc: "Echtzeit-Dashboards mit allen relevanten KPIs. Time-to-Fill, Placement-Rate, Pipeline-Velocity und mehr.", highlights: ["Live Dashboards", "Custom Reports", "Team-Performance"] },
      { icon: Zap, title: "Workflow-Automatisierung", desc: "Repetitive Aufgaben automatisieren. Trigger-basierte Workflows für Follow-ups, Statusänderungen und Benachrichtigungen.", highlights: ["Trigger & Actions", "Auto-Follow-ups", "Benachrichtigungen"] },
      { icon: Calendar, title: "Kalender & Termine", desc: "Interview-Scheduling und Terminmanagement direkt im System. Synchronisation mit Google & Microsoft Kalender.", highlights: ["Kalender-Sync", "Interview-Scheduling", "Reminder"] },
    ],
  },
  {
    category: "System & Verwaltung",
    items: [
      { icon: FolderOpen, title: "Kundenverwaltung (CRM)", desc: "Kunden, Ansprechpartner und Rahmenverträge zentral verwalten. Vollständige Kundenhistorie und Kontaktmanagement.", highlights: ["Kontaktmanagement", "Vertragsübersicht", "Kundenhistorie"] },
      { icon: Settings, title: "Flexibles Setup", desc: "Schnelle Einrichtung und Anpassung an Ihre Prozesse. Eigene Felder, Workflows und Rollen definieren.", highlights: ["Custom Fields", "Rollen & Rechte", "API-Zugang"] },
    ],
  },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-6">
              Alle Features im Überblick
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              plyce bildet den gesamten Recruiting-Prozess ab – von der Kandidatensuche bis zum Placement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <Button variant="hero" size="xl">
              Kostenlos testen <ArrowRight className="h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature categories */}
      {allFeatures.map((category, ci) => (
        <section
          key={category.category}
          className={`py-16 md:py-24 section-padding ${ci % 2 === 0 ? "" : "bg-muted/30"}`}
        >
          <div className="container-tight">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">{category.category}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 100}>
                  <div className="group h-full p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light mb-4 group-hover:bg-primary/10 transition-colors">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-primary p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
                Überzeugt? Starten Sie jetzt.
              </h2>
              <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
                Testen Sie plyce kostenlos oder lassen Sie sich persönlich beraten.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Kostenlos starten <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
