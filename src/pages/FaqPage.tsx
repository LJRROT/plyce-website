import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FaqItem = { q: string; a: ReactNode };
type FaqGroup = { id: string; title: string; items: FaqItem[] };

const faqGroups: FaqGroup[] = [
  {
    id: "produkt-einsatzbereich",
    title: "Produkt & Einsatzbereich",
    items: [
      {
        q: "Was ist plyce?",
        a: "plyce ist ein cloudbasiertes ATS und CRM für Personalberatungen und Recruiter. Sie führen Kandidaten, Projekte, Kunden und Kommunikation in einem System, ergänzt um integrierte KI-Funktionen z. B. für Parsing, Matching, Texte und Reporting sowie vieles mehr.",
      },
      {
        q: "Für wen eignet sich plyce?",
        a: "Für Teams, die strukturiert arbeiten möchten: von der Kandidatenakte über die Suchmandate bis zu E-Mail, Aufgaben und Auswertungen. plyce richtet sich an Personalberatungen und Recruiter, die weniger Tool-Wechsel, mehr durchgängige Prozesse und volle AI-Integration wollen.",
      },
      {
        q: "Muss ich Software installieren?",
        a: "Nein. plyce läuft im Browser. Sie benötigen eine Internetverbindung und die Zugänge, die wir mit Ihnen einrichten. Updates und Wartung übernimmt der Betreiber im Rahmen des Dienstes.",
      },
      {
        q: "Was unterscheidet plyce von einem reinen ATS?",
        a: "plyce verbindet klassische ATS-Funktionen (Kandidaten, Pipeline, Jobs) mit CRM-Logik für Unternehmen und Kontakte, Kommunikationstools und optional integrierten AI Agents. So bleiben Daten und Aktivitäten über den gesamten Recruiting-Zyklus zusammenhängend, und Sie können strukturiert sowie effizient arbeiten.",
      },
      {
        q: "Kann ich plyce testen?",
        a: "Ja. Fordern Sie über „Request Demo“ eine persönliche Vorstellung an, wir zeigen Ihnen die Module, die für Sie relevant sind, und besprechen den Einstieg.",
      },
    ],
  },
  {
    id: "implementierung-arbeit",
    title: "Implementierung & Arbeit im Alltag",
    items: [
      {
        q: "Wie läuft der Einstieg typischerweise ab?",
        a: "Nach Vertragsabschluss richten wir Ihren Mandanten ein, legen Nutzer und Rollen an und unterstützen beim Import bestehender Daten. Umfang und Tempo stimmen wir mit Ihnen ab, von schlankem Start bis zu umfangreicher Migration.",
      },
      {
        q: "Kann ich bestehende Daten übernehmen?",
        a: "Ja. plyce unterstützt strukturierten Datenimport, z. B. über definierte Formate und Mapping. In einer einfachen Migration übernehmen wir typischerweise Unternehmen, Kontakte und Kandidaten, je nach Anforderung sind aber auch umfangreichere und komplexere Migrationen möglich. Welche Felder und Quellen dafür infrage kommen, stimmen wir mit Ihnen im Projekt ab.",
      },
      {
        q: "Wie viele Nutzer sind möglich?",
        a: "Die Nutzerzahl richtet sich nach Ihrem gebuchten Paket. Rollen und Rechte lassen sich granular vergeben, damit Berater, Backoffice und Führungskräfte nur sehen und bearbeiten, was sie brauchen.",
      },
      {
        q: "Gibt es Schulungen oder Dokumentation?",
        a: "Ja. In plyce stehen Ihnen umfangreiche Dokumentation, Hilfetexte und kontextbezogene Hilfen direkt in der Anwendung zur Verfügung. Zusätzlich gibt es einen systeminternen Helpdesk, über den Nutzer Supportanfragen einreichen können. Schulungen und persönliche Begleitung vereinbaren wir bei Bedarf im Rahmen Ihres Vertrags.",
      },
    ],
  },
  {
    id: "daten-sicherheit-datenschutz",
    title: "Daten, Sicherheit & Datenschutz",
    items: [
      {
        q: "Wo werden meine Daten gespeichert?",
        a: "Ihre Daten werden bei Amazon Web Services (AWS) in der Region eu-central-1 (Frankfurt) gespeichert und verarbeitet. Der Standort liegt in der Europäischen Union und erfüllt damit die strengen Anforderungen an Speicherort und Auftragsverarbeitung nach EU-DSGVO. Soweit im Einzelfall etwas anderes ausdrücklich vereinbart ist (z. B. bestimmte KI-Anbindungen), bezieht sich das auf den jeweils beschriebenen Umfang. Details finden Sie in der Datenschutzerklärung und im Vertrag.",
      },
      {
        q: "Wie ist die DSGVO-Einordnung bei Kandidatendaten?",
        a: "Ihre Personalberatung ist in der Regel Verantwortliche für die Daten Ihrer Kandidaten und Kunden. plyce wird in diesem Kontext typischerweise als Auftragsverarbeiter eingesetzt, geregelt in einer Vereinbarung zur Auftragsverarbeitung. So können Sie Ihre Informationspflichten und Prozesse sauber abbilden.",
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
    id: "ki-automatisierung",
    title: "KI & Automatisierung",
    items: [
      {
        q: "Welche KI-Funktionen bietet plyce?",
        a: (
          <>
            plyce unterstützt u. a. CV-Parsing, Zusammenfassungen, Matching-Vorschläge, Textgenerierung (z. B. Anschreiben,
            Reports) und weitere Automatisierungen. Welche{" "}
            <Link to="/ai-agents" className="text-primary font-medium hover:underline">
              AI Agents
            </Link>{" "}
            dazu eingesetzt werden und was sie leisten, ist auf der zugehörigen Produktseite beschrieben. Technisch werden
            die KI-Funktionen u. a. über Anbindungen an die Sprachmodellanbieter{" "}
            <a
              href="https://openai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              OpenAI
            </a>{" "}
            und{" "}
            <a
              href="https://mistral.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Mistral AI
            </a>{" "}
            realisiert (u. a. Performance vs. europäischer Fokus).
          </>
        ),
      },
      {
        q: "Kann ich zwischen Sprachmodellen wählen?",
        a: (
          <>
            Ja. plyce kann so konfiguriert werden, dass unterschiedliche Sprachmodell-Anbieter genutzt werden, namentlich{" "}
            <a
              href="https://openai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              OpenAI
            </a>{" "}
            (stark bei anspruchsvollen Texten und breitem Modellangebot) sowie{" "}
            <a
              href="https://mistral.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Mistral AI
            </a>{" "}
            (Europa-Fokus, regulierungsnahe Nutzung). Welche Anbindung für Sie passt, klären wir im Rahmen von Vertrag und Datenschutz.
          </>
        ),
      },
      {
        q: "Wer haftet für KI-generierte Inhalte?",
        a: "KI-Ausgaben dienen der Unterstützung. Ihr Team prüft und verantwortet die inhaltliche Nutzung gegenüber Kandidaten und Kunden. plyce übernimmt keine Garantie für die Richtigkeit automatisierter Vorschläge; sie ersetzen nicht die fachliche Bewertung.",
      },
    ],
  },
  {
    id: "integrationen-schnittstellen",
    title: "Integrationen & Schnittstellen",
    items: [
      {
        q: "Gibt es E-Mail-Anbindung?",
        a: "Ja. plyce unterstützt die Anbindung gängiger E-Mail-Umgebungen (z. B. Google und Microsoft), damit Versand, Sync und Zuordnung zu Kandidaten und Projekten im System möglich sind, im Rahmen der technisch unterstützten Funktionen.",
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
    id: "vertrag-abrechnung-support",
    title: "Vertrag, Abrechnung & Support",
    items: [
      {
        q: "Wie sind Laufzeit und Kündigung geregelt?",
        a: "Laufzeit, Kündigungsfristen und Preise ergeben sich aus Ihrem individuellen Angebot bzw. Vertrag. Regelmäßige Abrechnungsperioden (z. B. monatlich oder jährlich) sind üblich.",
      },
      {
        q: "Welchen Support erhalte ich?",
        a: "Der Supportumfang (Kanäle, Zeiten, ggf. Prioritäten) wird im Vertrag oder einer Servicevereinbarung festgelegt. Für allgemeine Fragen vor dem Kauf erreichen Sie uns unter info@plyce.app.",
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

export const faqCategoryNav = faqGroups.map(({ id, title }) => ({ id, title }));

const FaqPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-14 md:py-20 section-padding border-b border-border/40">
        <div className="container-tight text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] pt-1 pb-1 mb-5 text-balance text-gradient-hero">
              FAQ
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Antworten zu Produkt, Einführung, Daten, KI und Vertrag, speziell für Personalberatungen und Recruiter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-20 section-padding">
        <div className="container-tight max-w-3xl space-y-14">
          {faqGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={Math.min(gi * 40, 120)}>
              <div id={group.id} className="scroll-mt-28">
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
                  href="mailto:info@plyce.app?subject=Frage%20zu%20plyce"
                  className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-primary hover:underline sm:min-h-0"
                >
                  info@plyce.app
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
