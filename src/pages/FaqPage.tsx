import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FaqItem = { q: string; a: ReactNode };
type FaqGroup = { title: string; items: FaqItem[] };

const faqGroups: FaqGroup[] = [
  {
    title: "Produkt & Einsatzbereich",
    items: [
      {
        q: "Was ist plyce?",
        a: "plyce ist ein cloudbasiertes ATS und CRM für Personalberatungen und kleinere bis mittlere Recruiting-Agenturen. Sie führen Kandidaten, Projekte, Kunden und Kommunikation in einem System – ergänzt um integrierte KI-Funktionen für Parsing, Matching, Texte und Reporting.",
      },
      {
        q: "Für wen eignet sich plyce?",
        a: "Für Teams, die strukturiert arbeiten möchten: von der Kandidatenakte über die Suchmandate bis zu E-Mail, Aufgaben und Auswertungen. plyce richtet sich an Agenturen, die weniger Tool-Wechsel und mehr durchgängige Prozesse wollen.",
      },
      {
        q: "Muss ich Software installieren?",
        a: "Nein. plyce läuft im Browser. Sie benötigen eine Internetverbindung und die Zugänge, die wir mit Ihnen einrichten. Updates und Wartung übernimmt der Betreiber im Rahmen des Dienstes.",
      },
      {
        q: "Was unterscheidet plyce von einem reinen ATS?",
        a: "plyce verbindet klassische ATS-Funktionen (Kandidaten, Pipeline, Jobs) mit CRM-Logik für Unternehmen und Kontakte, Kommunikationstools und optionalen KI-Agenten. So bleiben Daten und Aktivitäten über den gesamten Recruiting-Zyklus zusammenhängend.",
      },
      {
        q: "Kann ich plyce testen?",
        a: "Ja. Fordern Sie über „Request Demo“ eine persönliche Vorstellung an – wir zeigen Ihnen die Module, die für Ihre Agentur relevant sind, und besprechen den Einstieg.",
      },
    ],
  },
  {
    title: "Implementierung & Arbeit im Alltag",
    items: [
      {
        q: "Wie läuft der Einstieg typischerweise ab?",
        a: "Nach Vertragsabschluss richten wir Ihren Mandanten ein, legen Nutzer und Rollen an und unterstützen beim Import bestehender Daten. Umfang und Tempo stimmen wir mit Ihnen ab – von schlankem Start bis zu umfangreicher Migration.",
      },
      {
        q: "Kann ich bestehende Daten übernehmen?",
        a: "In der Regel ja. plyce bietet Möglichkeiten zum strukturierten Datenimport (z. B. über definierte Formate und Mapping). Welche Felder und Quellen möglich sind, klären wir im Projekt mit Ihnen.",
      },
      {
        q: "Wie viele Nutzer sind möglich?",
        a: "Die Nutzerzahl richtet sich nach Ihrem gebuchten Paket. Rollen und Rechte lassen sich granular vergeben, damit Berater, Backoffice und Führungskräfte nur sehen und bearbeiten, was sie brauchen.",
      },
      {
        q: "Gibt es Schulungen oder Dokumentation?",
        a: "Ja, Hilfetexte und Dokumentation sind in der Anwendung verfügbar. Darüber hinaus können Schulungen und Begleitung im Rahmen Ihres Vertrags vereinbart werden.",
      },
    ],
  },
  {
    title: "Daten, Sicherheit & Datenschutz",
    items: [
      {
        q: "Wo werden meine Daten gespeichert?",
        a: "Die Verarbeitung erfolgt in professioneller Cloud-Infrastruktur. Schwerpunkt ist die EU bzw. der EWR, soweit nicht im Einzelfall etwas anderes ausdrücklich vereinbart ist (z. B. bestimmte KI-Anbindungen). Details finden Sie in der Datenschutzerklärung und im Vertrag.",
      },
      {
        q: "Wie ist die DSGVO-Einordnung bei Kandidatendaten?",
        a: "Ihre Agentur ist in der Regel Verantwortliche für die Daten Ihrer Kandidaten und Kunden. plyce wird in diesem Kontext typischerweise als Auftragsverarbeiter eingesetzt – geregelt in einer Vereinbarung zur Auftragsverarbeitung. So können Sie Ihre Informationspflichten und Prozesse sauber abbilden.",
      },
      {
        q: "Wie sicher ist der Zugriff?",
        a: "Zugriff erfolgt über geschützte Anmeldung; technische und organisatorische Maßnahmen (z. B. Verschlüsselung bei der Übertragung, Rechte- und Rollenkonzept) entsprechen dem üblichen Standard für SaaS-Lösungen. Einzelheiten können im Sicherheitskontext Ihres Vertrags beschrieben sein.",
      },
      {
        q: "Was passiert bei Kündigung mit den Daten?",
        a: "Nach Ende des Vertrags werden Zugänge deaktiviert. Export, Löschung und Aufbewahrungsfristen ergeben sich aus dem Vertrag, der Datenschutzerklärung und der AV-Vereinbarung. Ggf. bestehen gesetzliche Aufbewahrungspflichten auf Ihrer Seite.",
      },
    ],
  },
  {
    title: "KI & Automatisierung",
    items: [
      {
        q: "Welche KI-Funktionen bietet plyce?",
        a: "plyce kann u. a. bei CV-Parsing, Zusammenfassungen, Matching-Vorschlägen, Textgenerierung (z. B. Anschreiben, Reports) und weiteren Agenten-Funktionen unterstützen. Der genaue Umfang hängt von Ihrer Buchung und Konfiguration ab.",
      },
      {
        q: "Kann ich zwischen Sprachmodellen wählen?",
        a: "Ja. plyce kann so konfiguriert werden, dass unterschiedliche Sprachmodell-Anbieter genutzt werden – z. B. mit Fokus auf Performance oder auf europäische Anbindung. Details besprechen wir im Rahmen von Vertrag und Datenschutz.",
      },
      {
        q: "Wer haftet für KI-generierte Inhalte?",
        a: "KI-Ausgaben dienen der Unterstützung. Ihr Team prüft und verantwortet die inhaltliche Nutzung gegenüber Kandidaten und Kunden. plyce übernimmt keine Garantie für die Richtigkeit automatisierter Vorschläge; sie ersetzen nicht die fachliche Bewertung.",
      },
    ],
  },
  {
    title: "Integrationen & Schnittstellen",
    items: [
      {
        q: "Gibt es E-Mail-Anbindung?",
        a: "Ja. plyce unterstützt die Anbindung gängiger E-Mail-Umgebungen (z. B. Google und Microsoft), damit Versand, Sync und Zuordnung zu Kandidaten und Projekten im System möglich sind – im Rahmen der technisch unterstützten Funktionen.",
      },
      {
        q: "Kann ich eigene Karriereseiten / Jobboards nutzen?",
        a: "plyce bietet Funktionen rund um Stellenanzeigen und Bewerbungseingang. Ob und wie eine eigene Domain oder White-Label-Auftritt genutzt wird, hängt von Ihrer Buchung und Einrichtung ab.",
      },
      {
        q: "Gibt es eine API?",
        a: "Schnittstellen und Integrationsmöglichkeiten können vertraglich geregelt sein. Sprechen Sie uns an, wenn Sie plyce an weitere Systeme anbinden möchten.",
      },
    ],
  },
  {
    title: "Vertrag, Abrechnung & Support",
    items: [
      {
        q: "Wie sind Laufzeit und Kündigung geregelt?",
        a: "Laufzeit, Kündigungsfristen und Preise ergeben sich aus Ihrem individuellen Angebot bzw. Vertrag. Regelmäßige Abrechnungsperioden (z. B. monatlich oder jährlich) sind üblich.",
      },
      {
        q: "Welchen Support erhalte ich?",
        a: "Der Supportumfang (Kanäle, Zeiten, ggf. Prioritäten) wird im Vertrag oder einer Servicevereinbarung festgelegt. Für allgemeine Fragen vor dem Kauf erreichen Sie uns unter info@plyce.io.",
      },
      {
        q: "Wo finde ich AGB und Datenschutz?",
        a: (
          <>
            Die{" "}
            <Link to="/agb" className="text-primary font-medium hover:underline">
              AGB
            </Link>{" "}
            und die{" "}
            <Link to="/datenschutz" className="text-primary font-medium hover:underline">
              Datenschutzerklärung
            </Link>{" "}
            sind auf dieser Website veröffentlicht. Ergänzend gibt es die Seite{" "}
            <Link to="/data-protection" className="text-primary font-medium hover:underline">
              Data Protection
            </Link>{" "}
            mit Überblick zu Sicherheit und Compliance rund um plyce.
          </>
        ),
      },
    ],
  },
];

const FaqPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-14 md:py-20 section-padding border-b border-border/40">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-gradient-hero">
              FAQ
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Antworten zu Produkt, Einführung, Daten, KI und Vertrag – speziell für Personalberatungen und
              Recruiting-Teams, die mit plyce arbeiten.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-20 section-padding">
        <div className="container-tight max-w-3xl space-y-14">
          {faqGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={Math.min(gi * 40, 120)}>
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-4">{group.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {group.items.map((item, i) => (
                    <AccordionItem key={item.q} value={`${group.title}-${i}`} className="border-border/60">
                      <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 text-foreground">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pr-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-border/60 bg-muted/25 px-6 py-8 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Ihre Frage ist nicht dabei? Schreiben Sie uns oder buchen Sie eine kurze Vorstellung.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-stretch sm:items-center">
                <a
                  href="mailto:info@plyce.io?subject=Frage%20zu%20plyce"
                  className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-primary hover:underline sm:min-h-0"
                >
                  info@plyce.io
                </a>
                <span className="hidden sm:inline text-muted-foreground/50" aria-hidden>
                  ·
                </span>
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-primary hover:underline sm:min-h-0"
                  onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}
                >
                  Request Demo
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
