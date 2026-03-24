import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const ImpressumPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-balance">Impressum</h1>
            <p className="text-sm text-muted-foreground mb-10">
              Angaben für die Website und das Angebot <strong className="text-foreground font-medium">plyce</strong> ·
              Stand: März 2026
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
                <p className="mb-3">
                  <strong className="text-foreground font-medium">plyce</strong> ist eine Marke und ein Produkt der
                </p>
                <p className="mb-3">
                  <strong className="text-foreground font-medium">WECO Experts GmbH</strong>
                  <br />
                  Kellerstraße 29
                  <br />
                  81667 München
                  <br />
                  Deutschland
                </p>
                <p>
                  Vertreten durch die Geschäftsführer:{" "}
                  <strong className="text-foreground font-medium">Lasse Rothfuss</strong> und{" "}
                  <strong className="text-foreground font-medium">Malin Behrens</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Kontakt</h2>
                <p className="mb-3">
                  <strong className="text-foreground font-medium">plyce (Produkt &amp; Website plyce)</strong>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:info@plyce.io" className="text-primary font-medium hover:underline">
                    info@plyce.io
                  </a>
                </p>
                <p className="mb-3">
                  <strong className="text-foreground font-medium">WECO Experts GmbH (Gesellschaft)</strong>
                  <br />
                  Telefon:{" "}
                  <a href="tel:+498937040096" className="text-primary font-medium hover:underline">
                    +49 (0)89 370 400 96
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:mail@weco-experts.com" className="text-primary font-medium hover:underline">
                    mail@weco-experts.com
                  </a>
                  <br />
                  Web:{" "}
                  <a
                    href="https://weco-experts.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    weco-experts.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Registerangaben</h2>
                <p>Registergericht: Amtsgericht München</p>
                <p>Registernummer: HRB 268248</p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
                  <strong className="text-foreground font-medium">DE325014415</strong>
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">EU-Streitschlichtung</h2>
                <p className="mb-3">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline break-all"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Unsere E-Mail-Adresse finden Sie oben in diesem Impressum.
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Haftung für Inhalte</h2>
                <p className="mb-3">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                  Gesetzen bleiben unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                  einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir
                  diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Haftung für Links</h2>
                <p className="mb-3">
                  Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss
                  haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
                  rechtswidrige Inhalte waren nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                  Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Urheberrecht</h2>
                <p className="mb-3">
                  Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Soweit Inhalte nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen Hinweis.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-3">Hinweis zu weiteren Informationen</h2>
                <p>
                  Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
                  <Link to="/datenschutz" className="text-primary font-medium hover:underline">
                    Datenschutzerklärung
                  </Link>
                  . Vertragliche Bedingungen für die Nutzung von plyce regeln unsere{" "}
                  <Link to="/agb" className="text-primary font-medium hover:underline">
                    AGB
                  </Link>
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

export default ImpressumPage;
