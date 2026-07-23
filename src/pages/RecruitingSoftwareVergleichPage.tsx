import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";

const openDemo = () => window.dispatchEvent(new Event("plyce-open-demo-modal"));

type Row = { feature: string; plyce: string; traditional: string; generic: string };

const comparison: Row[] = [
  {
    feature: "Zielgruppe",
    plyce: "Personalberatungen, Recruiting Agenturen, Headhunter für Festanstellung und Freelance.",
    traditional: "Meist Inhouse Recruiting in Unternehmen mit eigenem HR Team.",
    generic: "Breite Zielgruppe von KMU bis Großunternehmen ohne Agenturfokus.",
  },
  {
    feature: "KI Funktionsumfang",
    plyce: "11 spezialisierte AI Agents für CV Parsing, Matching, Dossiers, Sourcing, Kommunikation und Reporting.",
    traditional: "Einzelne KI Add-ons, oft als Zusatzmodul mit Aufpreis.",
    generic: "Basisfunktionen wie CV Parsing und einfache Suchvorschläge.",
  },
  {
    feature: "CRM und ATS in einem System",
    plyce: "Kandidaten, Kunden, Projekte, Verträge und Kommunikation in einer Plattform.",
    traditional: "ATS und CRM häufig getrennt, oft mit separater Lizenz.",
    generic: "Fokus auf Bewerbermanagement, Kundenverwaltung nur rudimentär.",
  },
  {
    feature: "Freelancer und Festanstellung",
    plyce: "Vollständiger Workflow für Freelance und Perm inklusive plyce time mit Timesheet Portal und Invoicing.",
    traditional: "Meist auf Festanstellung ausgelegt, Freelance nur eingeschränkt.",
    generic: "Kein integriertes Freelancer Management oder Abrechnung.",
  },
  {
    feature: "Datenhaltung und DSGVO",
    plyce: "EU Hosting in Frankfurt, DSGVO konform, Mandantentrennung.",
    traditional: "Häufig internationale Cloud, EU Option teils gegen Aufpreis.",
    generic: "Standort abhängig vom Anbieter, oft US Cloud.",
  },
  {
    feature: "Preismodell",
    plyce: "Ein Produkt, ein Preis, alle Features und AI Agents inklusive.",
    traditional: "Grundlizenz plus Module und KI Add-ons.",
    generic: "Staffelmodelle mit vielen Editionen und Zusatzpaketen.",
  },
  {
    feature: "Einführung",
    plyce: "Strukturiertes Onboarding mit Datenübernahme in wenigen Wochen.",
    traditional: "Projekt Implementierung mit Beratungspartner über mehrere Monate.",
    generic: "Self Service Setup, tiefere Anpassung auf eigenes Risiko.",
  },
];

const criteria = [
  {
    title: "Passt die Software zu Ihrem Geschäftsmodell",
    body:
      "Eine Recruiting Software für Agenturen muss Kandidaten, Kunden und Projekte gleichzeitig abbilden. Prüfen Sie, ob das System CRM und ATS in einer Oberfläche verbindet und ob Freelance sowie Festanstellung sauber abgebildet werden.",
  },
  {
    title: "Wie tief ist KI integriert",
    body:
      "KI ist heute Standard, aber der Unterschied liegt in der Tiefe. Achten Sie darauf, ob KI nur einzelne Funktionen wie CV Parsing abdeckt oder ob spezialisierte AI Agents entlang des gesamten Recruiting Prozesses arbeiten, von Sourcing über Matching bis Reporting.",
  },
  {
    title: "Wo liegen Ihre Daten",
    body:
      "Für Personalberatungen in der DACH Region ist EU Hosting entscheidend. Klären Sie Serverstandort, Auftragsverarbeitung und ob personenbezogene Daten die EU verlassen, wenn KI genutzt wird.",
  },
  {
    title: "Wie transparent ist das Pricing",
    body:
      "Viele Anbieter arbeiten mit Editionen und Zusatzmodulen. Ein transparentes Preismodell mit allen Features und AI Agents in einem Paket vermeidet spätere Diskussionen im Team und mit dem Einkauf.",
  },
  {
    title: "Wie schnell sind Sie produktiv",
    body:
      "Recruiting Teams verlieren Umsatz, wenn Implementierung Monate dauert. Fragen Sie nach einem klaren Onboarding Prozess, Datenmigration aus dem Altsystem und einer realistischen Time to Value.",
  },
];

const faqs = [
  {
    q: "Was unterscheidet Recruiting Software für Agenturen von klassischer HR Software",
    a: "Recruiting Software für Personalberatungen und Headhunter bildet nicht nur den Bewerbungsprozess ab, sondern verbindet Kandidaten, Kunden, Suchmandate und Freelance Projekte. Klassische HR Software zielt auf Inhouse Recruiting in einem einzelnen Unternehmen und deckt Kundenmanagement, Projektpipelines und Freelancer Workflows in der Regel nicht ab.",
  },
  {
    q: "Warum ist ein AI natives ATS und CRM für Agenturen relevant",
    a: "In einer Personalberatung entstehen täglich große Mengen an Kandidatendaten, Anschreiben und Kommunikationsereignissen. Spezialisierte AI Agents entlasten das Team bei Parsing, Matching, Dossierstellung, Sourcing und Reporting und schaffen Kapazität für mehr Placements bei gleichbleibendem Adminaufwand.",
  },
  {
    q: "Können wir mit plyce Freelance und Festanstellung parallel abbilden",
    a: "Ja. plyce bildet Suchmandate für Festanstellung und Freelance Projekte in einem System ab. Mit plyce time steht zusätzlich ein Timesheet Portal für Freelancer inklusive Freigabe per E-Mail und automatischer Rechnungsstellung bereit.",
  },
  {
    q: "Wie steht plyce zu Datenschutz und EU Hosting",
    a: "Die Daten werden bei AWS in der Region eu-central-1 in Frankfurt gehostet und in einer DSGVO konformen Umgebung verarbeitet. Für KI Funktionen kann bei Bedarf ein EU Verarbeitungspfad vereinbart werden.",
  },
];

const RecruitingSoftwareVergleichPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-5xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Ratgeber für Personalberatungen und Headhunter
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Recruiting Software Vergleich für Agenturen und Headhunter
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Recruiting Software ist heute Standard, aber die Anforderungen einer Personalberatung unterscheiden sich deutlich vom Inhouse Recruiting. Dieser Vergleich zeigt, worauf Agenturen und Headhunter bei der Auswahl einer modernen Recruiting Plattform achten sollten und wie sich AI native Systeme wie plyce von klassischen CRM und ATS Lösungen unterscheiden.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 section-padding bg-muted/30">
        <div className="container-tight max-w-5xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Was macht Recruiting Software für Agenturen aus
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Eine Personalberatung arbeitet gleichzeitig an Kandidaten, Kunden und Projekten. Anders als Inhouse Recruiting Teams verwalten Agenturen mehrere Mandate parallel, koordinieren Freelance und Festanstellung und rechnen erbrachte Leistungen ab. Die passende Recruiting Software muss diesen Dreiklang aus CRM, ATS und Projektmanagement in einer Oberfläche abbilden und dabei DSGVO konform arbeiten.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {criteria.map((c) => (
              <ScrollReveal key={c.title} delay={60}>
                <div className="rounded-2xl border border-border bg-background p-6 h-full">
                  <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-5xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              plyce im Vergleich zu klassischen Recruiting Systemen
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Die folgende Übersicht stellt den AI nativen Ansatz von plyce klassischen ATS und CRM Systemen sowie generischer HR Software gegenüber. Sie ersetzt keine individuelle Auswahlberatung, gibt aber einen strukturierten Rahmen für die eigene Entscheidung.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr>
                    <th className="p-4 font-semibold">Kriterium</th>
                    <th className="p-4 font-semibold text-primary">plyce</th>
                    <th className="p-4 font-semibold">Klassisches ATS/CRM</th>
                    <th className="p-4 font-semibold">Generische HR Software</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="p-4 font-medium align-top">{row.feature}</td>
                      <td className="p-4 align-top">
                        <div className="flex gap-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{row.plyce}</span>
                        </div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="flex gap-2">
                          <Minus className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="flex gap-2">
                          <Minus className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{row.generic}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding bg-muted/30">
        <div className="container-tight max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Warum ein AI natives ATS und CRM für Agenturen den Unterschied macht
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Klassische Recruiting Software wurde in einer Zeit entwickelt, in der KI ein Zusatzfeature war. plyce dreht dieses Verhältnis um. Elf spezialisierte AI Agents arbeiten entlang des gesamten Recruiting Prozesses, vom Parsing eines Lebenslaufs über Matching und Dossiererstellung bis zu Reporting und Sourcing. Das reduziert Adminaufwand deutlich und verschafft Beratern mehr Zeit für Gespräche mit Kandidaten und Kunden.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Für Agenturen, die Freelance und Festanstellung parallel vermitteln, kommt mit plyce time ein integrierter Workflow für Projektverträge, Timesheets und Invoicing hinzu. Damit entsteht ein durchgängiger Prozess von der Kandidatengewinnung bis zur Rechnungsstellung, ohne Wechsel in ein zweites Tool.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Summe entsteht eine Recruiting Plattform, die sich in Anspruch und Bedienung an modernen SaaS Produkten orientiert und gleichzeitig die regulatorischen Anforderungen der DACH Region erfüllt.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Häufige Fragen zum Recruiting Software Vergleich
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((f) => (
              <ScrollReveal key={f.q} delay={60}>
                <div className="rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding bg-primary/5">
        <div className="container-tight max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Sehen Sie plyce in einer persönlichen Demo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wir zeigen Ihnen live, wie plyce als AI natives ATS und CRM die täglichen Prozesse in Ihrer Personalberatung unterstützt und wo im Vergleich zu Ihrem heutigen System die größten Hebel liegen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" onClick={openDemo}>
                Demo anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/ai-agents">AI Agents entdecken</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default RecruitingSoftwareVergleichPage;
