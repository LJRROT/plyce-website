import ScrollReveal from "@/components/ScrollReveal";

const ImpressumPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-2xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Impressum</h1>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Angaben gemäß § 5 TMG</p>
                <p className="font-semibold text-lg">plyce</p>
                <p className="text-muted-foreground">Eine Marke von WECO Experts GmbH</p>
              </div>

              <div>
                <h2 className="text-base font-semibold mb-2">Kontakt</h2>
                <p className="text-sm text-muted-foreground">
                  Telefon: <a href="tel:+498937040096" className="hover:text-primary transition-colors">+49 (0)89 370 400 96</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  E-Mail: <a href="mailto:info@hse-experts.com" className="hover:text-primary transition-colors">info@hse-experts.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold mb-2">Registerangaben</h2>
                <p className="text-sm text-muted-foreground">Registergericht: Amtsgericht München</p>
                <p className="text-sm text-muted-foreground">Registernummer: HRB 268248</p>
                <p className="text-sm text-muted-foreground">Geschäftsführer: Lasse Rothfuss, Malin Behrens</p>
              </div>

              <div>
                <h2 className="text-base font-semibold mb-2">Umsatzsteuer-ID</h2>
                <p className="text-sm text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE325014415
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold mb-2">Haftungsausschluss</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage;
