import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-balance">Datenschutzerklärung</h1>
            <p className="text-sm text-muted-foreground mb-10">
              Stand: März 2026 · für die Website und die Nutzung von <strong className="text-foreground font-medium">plyce</strong>
              (Cloud-Software der WECO Experts GmbH)
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">1. Verantwortlicher und Kontakt</h2>
                <p className="mb-3">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) für diese Website und die
                  geschäftsbezogene Kommunikation zu plyce ist:
                </p>
                <p className="mb-3">
                  <strong className="text-foreground font-medium">WECO Experts GmbH</strong>
                  <br />
                  (Marke / Produkt: plyce)
                  <br />
                  Registergericht: Amtsgericht München, HRB 268248
                  <br />
                  Geschäftsführer: Lasse Rothfuss, Malin Behrens
                  <br />
                  Telefon:{" "}
                  <a href="tel:+498937040096" className="text-primary font-medium hover:underline">
                    +49 (0)89 370 400 96
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:info@plyce.app" className="text-primary font-medium hover:underline">
                    info@plyce.app
                  </a>
                  <br />
                  (Organisatorisch / technisch):{" "}
                  <a href="mailto:info@hse-experts.com" className="text-primary font-medium hover:underline">
                    info@hse-experts.com
                  </a>
                </p>
                <p>
                  Soweit Sie Anfragen zu Datenschutzrechten (z. B. Auskunft, Löschung) stellen, genügt eine Nachricht an
                  eine der genannten E-Mail-Adressen. Wir bearbeiten Ihr Anliegen unter Beachtung der gesetzlichen Fristen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">2. Welche Daten wir verarbeiten und wofür</h2>
                <p className="mb-3">
                  plyce ist ein ATS/CRM für Personalberatungen und Recruiter. Abhängig davon, ob Sie unsere Website
                  besuchen, mit uns in Kontakt treten oder plyce als Kunde nutzen, verarbeiten wir unterschiedliche Daten –
                  grundsätzlich nur, soweit ein Zweck besteht und eine Rechtsgrundlage nach Art. 6 DSGVO vorliegt.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground font-medium">Website-Besuch:</strong> Beim Aufruf unserer Website
                  verarbeitet der Hosting-Dienstleister technisch notwendige Daten (z. B. IP-Adresse, Zeitstempel,
                  angeforderter Inhalt), damit die Seite ausgeliefert wird und stabil bleibt. Ergänzend können — nur mit
                  Ihrer Einwilligung — Cookies oder ähnliche Technologien für Statistik oder Marketing eingesetzt werden.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground font-medium">Kontakt und Request Demo:</strong> Wenn Sie uns per
                  E-Mail, Telefon oder Formular kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B.
                  Name, Firma, Nachricht), um Ihr Anliegen zu bearbeiten.
                </p>
                <p>
                  <strong className="text-foreground font-medium">Nutzung von plyce als Kunde:</strong> Verarbeitet der
                  Kunde (z. B. Ihre Personalberatung) personenbezogene Daten von Kandidaten, Kontakten oder Mitarbeitenden in
                  plyce, ist der Kunde in der Regel der „Verantwortliche“ und wir verarbeiten diese Daten als{" "}
                  <strong className="text-foreground font-medium">Auftragsverarbeiter</strong> ausschließlich nach
                  Weisung des Kunden und auf Grundlage einer Vereinbarung zur Auftragsverarbeitung (Art. 28 DSGVO). Die
                  Einzelheiten (Zwecke, Dauer, Kategorien) ergeben sich aus dem Vertrag mit dem Kunden und ggf. der
                  Produktdokumentation.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">3. Rechtsgrundlagen</h2>
                <p className="mb-3">
                  Sofern wir für Website und Geschäftskommunikation Daten verarbeiten, stützen wir uns insbesondere auf:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground font-medium">Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertrag oder
                    vorvertragliche Maßnahmen), soweit Sie plyce anfragen oder nutzen möchten;
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes
                    Interesse), z. B. an sicherem Betrieb der Website, Missbrauchsabwehr, IT-Sicherheit und
                    Weiterentwicklung;
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">Art. 6 Abs. 1 lit. a DSGVO</strong> (Einwilligung),
                    soweit wir Cookies oder Marketing setzen, die nicht technisch erforderlich sind;
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">Art. 6 Abs. 1 lit. c DSGVO</strong>, soweit wir einer
                    gesetzlichen Pflicht unterliegen.
                  </li>
                </ul>
                <p className="mt-3">
                  Im Rahmen der Nutzung von plyce durch Kunden gelten die vom Kunden gewählten Rechtsgrundlagen
                  gegenüber Betroffenen; uns wird dabei nur der vertraglich vereinbarte Verarbeitungsumfang offen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">4. Hosting und Speicherort</h2>
                <p className="mb-3">
                  Unsere Website und plyce werden über professionelle Hosting- und Cloud-Infrastruktur betrieben. Soweit
                  nicht anders im Vertrag mit dem Kunden oder in Produktinformationen beschrieben, bemühen wir uns, Daten
                  in der <strong className="text-foreground font-medium">Europäischen Union</strong> oder im{" "}
                  <strong className="text-foreground font-medium">EWR</strong> zu verarbeiten.
                </p>
                <p>
                  Sofern in Einzelfällen Dienstleister außerhalb der EU/EWR eingesetzt werden (z. B. für E-Mail oder
                  KI-Dienste), erfolgt dies nur bei Vorliegen geeigneter Garantien im Sinne der DSGVO (z. B. EU-Standardvertragsklauseln)
                  und unter ergänzenden Schutzmaßnahmen, soweit erforderlich.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">5. KI und externe Dienste</h2>
                <p className="mb-3">
                  plyce kann optionale Funktionen nutzen, die auf Sprachmodellen beruhen (z. B. zur Textgenerierung oder
                  Analyse). Abhängig von Konfiguration und Vertrag können dabei Anbieter wie OpenAI oder Mistral eingebunden
                  sein. Es werden nur die für die jeweilige Funktion erforderlichen Inhalte übermittelt; der Umfang ist in
                  der Produktkonfiguration bzw. im Auftrag mit dem Kunden beschrieben.
                </p>
                <p>
                  Der Kunde bleibt dafür verantwortlich, die Nutzung solcher Funktionen mit den eigenen
                  Datenschutzpflichten und Informationspflichten gegenüber Betroffenen (z. B. Kandidaten) zu vereinbaren.
                  Weitere Informationen zu KI und Datenhaltung finden Sie auch auf unserer Seite{" "}
                  <Link to="/data-protection" className="text-primary font-medium hover:underline">
                    Data Protection
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">6. Cookies und ähnliche Technologien</h2>
                <p className="mb-3">
                  Wir setzen Cookies und ähnliche Technologien ein, soweit dies für den Betrieb der Website technisch
                  erforderlich ist (z. B. Sitzung, Sicherheit, Spracheinstellung). Darüber hinaus verwenden wir nur mit
                  Ihrer Einwilligung nach § 25 TTDSG / Art. 6 Abs. 1 lit. a DSGVO solche Technologien, die nicht streng
                  notwendig sind (z. B. Statistik, Marketing).
                </p>
                <p>
                  Sie können Ihre Einwilligungen über unser Cookie-Banner bzw. die{" "}
                  <button
                    type="button"
                    className="text-primary font-medium hover:underline"
                    onClick={() => window.dispatchEvent(new Event("plyce-open-cookie-settings"))}
                  >
                    Cookie-Einstellungen
                  </button>{" "}
                  anpassen oder widerrufen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">7. Weitergabe von Daten</h2>
                <p className="mb-3">
                  Eine Weitergabe an Dritte erfolgt nur, wenn sie zur Vertragserfüllung erforderlich ist, wir gesetzlich
                  dazu verpflichtet sind, Sie eingewilligt haben oder wir berechtigte Interessen haben und Ihre
                  Interessen nicht überwiegen.
                </p>
                <p>
                  Unterauftragsverarbeiter (z. B. Hosting, E-Mail-Versand, Analytik) werden vertraglich nach Art. 28 DSGVO
                  gebunden und erhalten nur den jeweils notwendigen Datenzugang.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">8. Speicherdauer</h2>
                <p className="mb-3">
                  Wir speichern personenbezogene Daten nur so lange, wie die Zwecke bestehen, für die sie erhoben wurden,
                  oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>
                <p>
                  Website- und Server-Logdaten werden in der Regel nach einem technisch sinnvollen Zeitraum gelöscht oder
                  anonymisiert, sofern kein berechtigter Sicherheits- oder Beweisbedarf entgegensteht. Daten im Rahmen
                  der plyce-Nutzung richten sich nach dem Kundenvertrag und den dort vereinbarten Aufbewahrungs- und
                  Löschfristen bzw. den Einstellungen des Kunden.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">9. Sicherheit</h2>
                <p>
                  Wir setzen technische und organisatorische Maßnahmen ein, die dem Stand der Technik entsprechen, um Ihre
                  Daten gegen Verlust, Missbrauch und unbefugten Zugriff zu schützen — etwa durch Zugriffskontrollen,
                  Verschlüsselung in der Übertragung (TLS) wo sinnvoll, Protokollierung und Schulung. Ein absoluter Schutz
                  ist nicht möglich; wir überprüfen unsere Maßnahmen regelmäßig.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">10. Ihre Rechte</h2>
                <p className="mb-3">Sie haben — soweit die gesetzlichen Voraussetzungen erfüllt sind — insbesondere:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Recht auf <strong className="text-foreground font-medium">Auskunft</strong> (Art. 15 DSGVO),</li>
                  <li>Recht auf <strong className="text-foreground font-medium">Berichtigung</strong> (Art. 16 DSGVO),</li>
                  <li>
                    Recht auf <strong className="text-foreground font-medium">Löschung</strong> („Recht auf Vergessenwerden“,
                    Art. 17 DSGVO),
                  </li>
                  <li>
                    Recht auf <strong className="text-foreground font-medium">Einschränkung der Verarbeitung</strong>{" "}
                    (Art. 18 DSGVO),
                  </li>
                  <li>
                    Recht auf <strong className="text-foreground font-medium">Datenübertragbarkeit</strong> (Art. 20 DSGVO),
                  </li>
                  <li>
                    Recht auf <strong className="text-foreground font-medium">Widerspruch</strong> gegen bestimmte
                    Verarbeitungen (Art. 21 DSGVO),
                  </li>
                  <li>
                    Recht, eine erteilte <strong className="text-foreground font-medium">Einwilligung</strong> mit Wirkung
                    für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO).
                  </li>
                </ul>
                <p className="mt-3">
                  <strong className="text-foreground font-medium">Hinweis für Kandidaten, die über eine Personalberatung in plyce
                  gespeichert sind:</strong> Wenden Sie sich für Auskunft oder Löschung in erster Linie an die
                  jeweilige Personalberatung bzw. den plyce-Kunden. Wir unterstützen unsere Kunden bei der technischen
                  Umsetzung von Betroffenenanfragen im Rahmen der Vereinbarung.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">11. Beschwerderecht</h2>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem
                  Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                  Verstoßes. Zuständige Aufsichtsbehörde für den Sitz der WECO Experts GmbH ist insbesondere das Bayerische
                  Landesamt für Datenschutzaufsicht (BayLDA), soweit Sie uns als Verantwortliche ansprechen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">12. Pflicht zur Bereitstellung von Daten</h2>
                <p>
                  Für die bloße Nutzung unserer öffentlichen Website sind Sie in der Regel nicht verpflichtet,
                  personenbezogene Daten anzugeben — mit Ausnahme der technisch automatisch übermittelten Verbindungsdaten.
                  Für Vertragsabschluss oder Demo-Anfragen können bestimmte Angaben erforderlich sein, damit wir Ihr Anliegen
                  bearbeiten können.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">13. Automatisierte Entscheidungen</h2>
                <p>
                  In der öffentlichen Website nutzen wir keine ausschließlich automatisierten Entscheidungsfindungen im
                  Sinne von Art. 22 DSGVO. Funktionen in plyce, die z. B. Vorschläge oder Priorisierungen liefern, dienen
                  der Entscheidungsunterstützung; letztlich bleibt der menschliche Nutzer des Kunden verantwortlich, sofern
                  nicht gesondert und transparent etwas anderes vereinbart ist.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">14. Änderung dieser Erklärung</h2>
                <p className="mb-3">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich Rechtslage, Dienste oder
                  Verarbeitungen ändern. Die jeweils aktuelle Fassung finden Sie auf dieser Seite mit Angabe des Stands.
                </p>
                <p>
                  Vertragliche Regelungen mit Kunden (inkl. Auftragsverarbeitung) werden ggf. gesondert aktualisiert. Die{" "}
                  <Link to="/agb" className="text-primary font-medium hover:underline">
                    AGB
                  </Link>{" "}
                  finden Sie separat.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DatenschutzPage;
