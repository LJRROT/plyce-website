import ScrollReveal from "@/components/ScrollReveal";
import {
  Shield, Lock, Server, RefreshCcw, Eye, Brain,
  Users as UsersIcon, Scale, Activity, CheckCircle2, Database
} from "lucide-react";

const sections = [
  {
    icon: Scale,
    title: "DSGVO & Compliance",
    items: [
      "DSGVO-konforme Verarbeitung aller Kandidaten- und Kundendaten",
      "Einwilligungsmanagement inkl. Dokumentation",
      "Unterstützung von Auskunft, Löschung und Berichtigung",
      "Rechtssichere Datenhaltung für Personalberater",
    ],
  },
  {
    icon: Lock,
    title: "Datensicherheit",
    items: [
      "Ende-zu-Ende-Verschlüsselung (in Transit & at Rest)",
      "Granulare Rollen- und Rechtevergabe",
      "Sichere Authentifizierung und Zugriffskontrollen",
      "Optional: Zwei-Faktor-Authentifizierung",
    ],
  },
  {
    icon: Server,
    title: "Hosting & Datenstandort",
    items: [
      "Hosting innerhalb der EU möglich",
      "Klare Datenisolierung pro Kunde (Multi-Tenant-Sicherheit)",
      "Wahl der AI-Verarbeitung: EU oder USA",
      "Keine Vermischung von Kundendaten",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Backup & Wiederherstellung",
    items: [
      "Automatisierte, regelmäßige Backups",
      "Schutz vor Datenverlust und Systemausfällen",
      "Schnelle Wiederherstellung im Notfall",
      "Hohe Verfügbarkeit der Plattform",
    ],
  },
  {
    icon: Eye,
    title: "Transparenz & Kontrolle",
    items: [
      "Vollständige Protokollierung aller Aktivitäten (Audit Trail)",
      "Nachvollziehbarkeit von Änderungen und Zugriffen",
      "Klare Datenstrukturen und jederzeitiger Überblick",
    ],
  },
  {
    icon: Brain,
    title: "AI & Datenverarbeitung",
    items: [
      "Volle Kontrolle über den Einsatz von AI",
      "Keine ungefragte Weitergabe sensibler Daten",
      "Transparente Datenverarbeitung",
      "Optionale Nutzung europäischer AI-Modelle",
    ],
  },
  {
    icon: Database,
    title: "Mandantentrennung",
    items: [
      "Strikte Trennung aller Kundendaten",
      "Kein Zugriff zwischen Mandanten",
      "Sichere, isolierte Datenräume",
    ],
  },
  {
    icon: UsersIcon,
    title: "Kandidatenrechte",
    items: [
      "DSGVO-konforme Einwilligungsprozesse",
      "Widerruf jederzeit möglich",
      "Transparente Kommunikation mit Kandidaten",
    ],
  },
  {
    icon: Scale,
    title: "Rechtliches",
    items: [
      "Auftragsverarbeitungsvertrag (AVV) verfügbar",
      "Standardvertragsklauseln (SCC) integriert",
      "Klare Rollenverteilung zwischen Kunde und Plattform",
    ],
  },
  {
    icon: Activity,
    title: "Betrieb & Monitoring",
    items: [
      "24/7 Systemüberwachung",
      "Schutz vor unbefugten Zugriffen",
      "Regelmäßige Sicherheitsupdates",
    ],
  },
];

const DataProtectionPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-light border border-primary/20 px-4 py-1.5 mb-6">
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Enterprise-Level Sicherheit</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-6">
              Datenschutz &<br />Datensicherheit
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir schützen Ihre sensibelsten Daten – von Kandidatenprofilen bis hin zu Geschäftsprozessen. Vollständig DSGVO-konform, transparent und sicher.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections grid */}
      <section className="pb-16 section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={(i % 2) * 100}>
                <div className="h-full p-6 md:p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light flex-shrink-0">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data ownership */}
      <section className="py-20 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-muted/50 border border-border px-6 py-10 sm:p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ihre Daten gehören Ihnen
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto mb-2">
                Jederzeit exportierbar. Jederzeit löschbar.
              </p>
              <p className="text-muted-foreground max-w-md mx-auto">
                Keine Abhängigkeiten. Volle Kontrolle.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DataProtectionPage;
