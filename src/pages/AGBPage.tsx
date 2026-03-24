import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const AGBPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-balance">
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Stand: März 2026 · für die Nutzung der Cloud-Software <strong className="text-foreground font-medium">plyce</strong>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 1 Geltungsbereich und Vertragspartner</h2>
                <p className="mb-3">
                  (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge zwischen der{" "}
                  <strong className="text-foreground font-medium">WECO Experts GmbH</strong> (nachfolgend „Anbieter“) und
                  Unternehmern, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen
                  (nachfolgend „Kunde“) über die Bereitstellung und Nutzung der Software-as-a-Service-Lösung{" "}
                  <strong className="text-foreground font-medium">plyce</strong> (nachfolgend „plyce“ oder „Leistung“).
                </p>
                <p className="mb-3">
                  (2) plyce ist ein cloudbasiertes ATS/CRM-System für Personalberatungen und Recruiting-Agenturen mit
                  Funktionen u. a. für Kandidaten-, Projekt- und Unternehmensverwaltung, Kommunikation, Reporting sowie
                  optional KI-gestützte Assistenzfunktionen.
                </p>
                <p>
                  (3) Abweichende oder entgegenstehende Bedingungen des Kunden finden keine Anwendung, es sei denn, der
                  Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu. Einzelvereinbarungen (z. B. im Angebot oder
                  Leistungsbeschreibung) haben Vorrang vor diesen AGB.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 2 Vertragsgegenstand</h2>
                <p className="mb-3">
                  (1) Gegenstand des Vertrages ist die entgeltliche oder – sofern vereinbart – zeitlich begrenzte
                  unentgeltliche Bereitstellung von plyce als Software-as-a-Service über das Internet in der jeweils
                  vereinbarten Ausprägung (z. B. Paket, Nutzerzahl, Module).
                </p>
                <p className="mb-3">
                  (2) Der Anbieter stellt die vereinbarte aktuelle Version von plyce auf eigenen oder eingesetzten
                  Infrastruktur-Ressourcen bereit. Ein Anspruch auf Einzelanpassung der Software oder auf bestimmte
                  Releases besteht nur, soweit dies ausdrücklich vereinbart ist.
                </p>
                <p>
                  (3) Dokumentation, Hilfetexte und Schnittstellenbeschreibungen werden – soweit vorhanden – in
                  elektronischer Form bereitgestellt und können aktualisiert werden.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 3 Vertragsschluss, Onboarding und Zugang</h2>
                <p className="mb-3">
                  (1) Angebote des Anbieters sind freibleibend, sofern nicht ausdrücklich etwas anderes vereinbart ist.
                  Mit der Bestellung oder Unterzeichnung eines Angebots durch den Kunden gibt dieser ein verbindliches
                  Angebot zum Abschluss des Vertrages ab. Der Vertrag kommt mit Annahmeerklärung des Anbieters (z. B.
                  Auftragsbestätigung, Bereitstellung von Zugangsdaten oder Freischaltung des Mandanten) zustande.
                </p>
                <p className="mb-3">
                  (2) Der Kunde benennt Ansprechpersonen für technische und organisatorische Fragen. Zugangsdaten sind
                  vertraulich zu behandeln und dürfen nur berechtigten Nutzern des Kunden überlassen werden.
                </p>
                <p>
                  (3) Der Kunde ist verpflichtet, bei Registrierung und während der Vertragslaufzeit wahrheitsgemäße
                  Angaben zu machen und Änderungen mitzuteilen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 4 Nutzungsrechte</h2>
                <p className="mb-3">
                  (1) Der Anbieter räumt dem Kunden für die Dauer des Vertrages das einfache, nicht übertragbare,
                  nicht unterlizenzierbare Recht ein, plyce im vereinbarten Umfang durch eigene Nutzer ausschließlich zu
                  den vertraglich vorgesehenen Zwecken im eigenen Geschäftsbetrieb zu nutzen.
                </p>
                <p className="mb-3">
                  (2) Eine Weitergabe an Dritte, eine öffentliche Zurverfügungstellung, Reverse Engineering (soweit
                  gesetzlich nicht zwingend erlaubt), Umgehung technischer Schutzmaßnahmen oder Nutzung zur Entwicklung
                  eines konkurrierenden Produkts ist untersagt.
                </p>
                <p>
                  (3) Der Kunde darf Schnittstellen und Exportfunktionen im Rahmen der vereinbarten Leistung nutzen.
                  Missbräuchliche oder übermäßige automatisierte Abfragen, die Stabilität oder Sicherheit beeinträchtigen,
                  sind untersagt.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 5 Pflichten des Kunden</h2>
                <p className="mb-3">
                  (1) Der Kunde stellt sicher, dass die Nutzung von plyce und die in plyce verarbeiteten Daten (insbesondere
                  personenbezogene Daten von Kandidaten und Kontakten) mit geltendem Recht, insbesondere Datenschutz- und
                  Arbeitsrecht, vereinbar sind. Der Kunde ist für Inhalte, die er oder seine Nutzer einstellen oder
                  verarbeiten, allein verantwortlich.
                </p>
                <p className="mb-3">
                  (2) Der Kunde hält den Anbieter von Ansprüchen Dritter frei, die aus einer rechtswidrigen Nutzung durch
                  den Kunden oder seine Nutzer entstehen, es sei denn, der Anbieter hat die Rechtsverletzung zu vertreten.
                </p>
                <p>
                  (3) Der Kunde unterstützt den Anbieter bei der Erfüllung gesetzlicher Pflichten (z. B. Auskünfte bei
                  Betroffenenrechten), soweit dies erforderlich ist und der Kunde hierfür zuständig ist.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 6 Entgelte, Abrechnung und Zahlung</h2>
                <p className="mb-3">
                  (1) Die Höhe der Entgelte ergibt sich aus dem jeweiligen Angebot, der Bestellung oder dem
                  Leistungsverzeichnis. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht
                  ausdrücklich als „netto“ gekennzeichnet und anders vereinbart.
                </p>
                <p className="mb-3">
                  (2) Sofern nicht anders vereinbart, erfolgt die Abrechnung im Voraus für die jeweilige Abrechnungsperiode
                  (z. B. monatlich oder jährlich). Zahlungen sind innerhalb der auf der Rechnung genannten Frist fällig.
                </p>
                <p>
                  (3) Bei Zahlungsverzug ist der Anbieter berechtigt, nach angemessener Nachfrist die Leistung zu sperren
                  und – vorbehaltlich weitergehender Rechte – den Vertrag zu kündigen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 7 Test- und Pilotphasen</h2>
                <p>
                  Sofern eine Test- oder Pilotphase vereinbart ist, gelten die Regelungen dieser AGB entsprechend, soweit
                  nicht ausdrücklich abweichend vereinbart. Nach Ende der Testphase kann der Zugang automatisch enden oder
                  in ein kostenpflichtiges Abonnement übergehen, je nach individueller Vereinbarung.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 8 Verfügbarkeit, Wartung und Weiterentwicklung</h2>
                <p className="mb-3">
                  (1) Der Anbieter bemüht sich um eine hohe Verfügbarkeit von plyce. Zeitweise Einschränkungen können
                  insbesondere durch Wartung, Updates, Sicherheitsmaßnahmen oder höhere Gewalt auftreten. Soweit möglich,
                  werden planbare Wartungsfenster angekündigt.
                </p>
                <p>
                  (2) Der Anbieter ist berechtigt, plyce weiterzuentwickeln und Funktionen anzupassen oder zu ersetzen,
                  soweit der vertraglich geschuldete Gesamtzweck im Wesentlichen erhalten bleibt und der Kunde nicht
                  unzumutbar benachteiligt wird.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 9 Support</h2>
                <p>
                  Umfang und Kanäle des Supports (z. B. E-Mail, Ticket, Telefon) sowie Reaktionszeiten ergeben sich aus dem
                  jeweiligen Leistungsumfang oder einer gesonderten Servicevereinbarung. Kein Support ist für reine
                  Drittanbieter-Produkte oder vom Kunden verursachte Konfigurationsfehler geschuldet, sofern nicht
                  vertraglich anders geregelt.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 10 Daten, Auftragsverarbeitung und Sicherheit</h2>
                <p className="mb-3">
                  (1) Soweit der Anbieter im Auftrag des Kunden personenbezogene Daten im Sinne der DSGVO verarbeitet,
                  schließen die Parteien eine Vereinbarung zur Auftragsverarbeitung (AV-Vertrag). Die Einzelheiten ergeben
                  sich aus der Datenschutzerklärung und – sofern bereitgestellt – einem separaten AV-Dokument.
                </p>
                <p className="mb-3">
                  (2) Weitere Informationen zur Datenverarbeitung finden sich in der{" "}
                  <Link to="/datenschutz" className="text-primary font-medium hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
                <p>
                  (3) Der Kunde ist für die Rechtmäßigkeit der Übermittlung von Daten an plyce und für die Einholung
                  erforderlicher Einwilligungen oder Rechtsgrundlagen verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 11 Vertraulichkeit</h2>
                <p>
                  Beide Parteien behandeln vertrauliche Informationen der jeweils anderen Partei streng vertraulich und
                  nutzen sie ausschließlich zur Vertragserfüllung, sofern keine gesetzliche Offenlegungspflicht entgegensteht.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 12 KI-gestützte Funktionen</h2>
                <p className="mb-3">
                  (1) Soweit plyce KI-gestützte Funktionen (z. B. Textgenerierung, Analyse, Matching-Vorschläge)
                  bereitstellt, dienen diese der Unterstützung des Kunden. Der Kunde bleibt verantwortlich für die
                  inhaltliche Prüfung, Freigabe und rechtmäßige Verwendung der Ergebnisse gegenüber Dritten.
                </p>
                <p>
                  (2) Eine Garantie für die Richtigkeit, Vollständigkeit oder Eignung KI-generierter Inhalte besteht nicht.
                  Technische oder inhaltliche Eigenschaften Drittanbieter-Modelle können sich ändern, soweit der Anbieter
                  diese einbindet.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 13 Gewährleistung</h2>
                <p className="mb-3">
                  (1) Der Anbieter gewährleistet, dass plyce im Wesentlichen der vereinbarten Leistungsbeschreibung
                  entspricht. Mängel sind dem Anbieter unter angemessener Schilderung mitzuteilen.
                </p>
                <p>
                  (2) Ansprüche des Kunden wegen Mängeln verjähren in einem Jahr ab gesetzlichem Verjährungsbeginn, soweit
                  nicht gesetzlich eine kürzere oder längere Frist zwingend vorgeschrieben ist oder Vorsatz oder arglistiges
                  Verschweigen eines Mangels vorliegt.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 14 Haftung</h2>
                <p className="mb-3">
                  (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung von Leben,
                  Körper oder Gesundheit, nach dem Produkthaftungsgesetz und bei Übernahme einer Garantie.
                </p>
                <p className="mb-3">
                  (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten
                  (Kardinalpflichten); die Haftung ist der Höhe nach begrenzt auf den typischerweise vorhersehbaren Schaden.
                </p>
                <p>
                  (3) Eine Haftung für entgangenen Gewinn, mittelbare Schäden oder Datenverluste über die in § 10 und der
                  AV-Vereinbarung geregelten Sicherungsmaßnahmen hinaus ist – soweit gesetzlich zulässig – ausgeschlossen,
                  es sei denn, es liegt Vorsatz oder grobe Fahrlässigkeit vor.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 15 Laufzeit und Kündigung</h2>
                <p className="mb-3">
                  (1) Die Laufzeit und Kündigungsfristen ergeben sich aus dem jeweiligen Vertrag (z. B. Abonnementlaufzeit,
                  Verlängerung, Kündigungsfrist). Sofern nichts anderes vereinbart ist, kann ein Abonnement mit der
                  vereinbarten Frist zum Ende der Abrechnungsperiode gekündigt werden.
                </p>
                <p className="mb-3">
                  (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund
                  liegt für den Anbieter insbesondere vor bei erheblichen Vertragsverletzungen des Kunden, Zahlungsverzug
                  trotz Mahnung oder rechtswidriger Nutzung.
                </p>
                <p>
                  (3) Nach Vertragsende werden Zugänge deaktiviert. Über die Herausgabe oder Löschung von Daten gelten die
                  Datenschutzerklärung und die AV-Vereinbarung.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 16 Änderungen der AGB</h2>
                <p>
                  Der Anbieter kann diese AGB mit Wirkung für die Zukunft anpassen, soweit dies für den Kunden zumutbar
                  ist (z. B. bei Rechtsänderungen oder Weiterentwicklung der Leistung). Der Kunde wird rechtzeitig
                  informiert. Widerspricht der Kunde nicht innerhalb einer mitgeteilten Frist, gelten die neuen AGB als
                  angenommen; hierauf wird der Kunde hingewiesen. Bei Widerspruch kann der Anbieter das Vertragsverhältnis
                  zum Zeitpunkt des Inkrafttretens der Änderung kündigen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 17 Höhere Gewalt</h2>
                <p>
                  Bei Ereignissen höherer Gewalt (z. B. Naturkatastrophen, behördliche Anordnungen, Ausfall wesentlicher
                  Infrastruktur Dritter) werden Leistungspflichten für die Dauer und im Umfang des Hindernisses ausgesetzt.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 18 Urheber- und Leistungsschutzrechte</h2>
                <p>
                  Sämtliche Rechte an plyce, der Dokumentation und Marken stehen beim Anbieter oder seinen Lizenzgebern.
                  Der Kunde erwirbt keine darüber hinausgehenden Rechte als die in § 4 genannten Nutzungsrechte.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">§ 19 Schlussbestimmungen</h2>
                <p className="mb-3">
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="mb-3">
                  (2) Ist der Kunde Kaufmann im Sinne des HGB, juristische Person des öffentlichen Rechts oder
                  öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus
                  diesem Vertrag der Sitz des Anbieters, sofern nicht zwingend etwas anderes gilt.
                </p>
                <p className="mb-3">
                  (3) Sollten einzelne Bestimmungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
                  Bestimmungen unberührt. An die Stelle der unwirksamen Regelung tritt die gesetzlich zulässige Regelung,
                  die dem wirtschaftlichen Zweck am nächsten kommt.
                </p>
                <p>
                  (4) Kontakt zum Anbieter: siehe{" "}
                  <Link to="/impressum" className="text-primary font-medium hover:underline">
                    Impressum
                  </Link>
                  . Für vertragliche und organisatorische Anfragen:{" "}
                  <a href="mailto:info@plyce.io" className="text-primary font-medium hover:underline">
                    info@plyce.io
                  </a>
                  .
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AGBPage;
