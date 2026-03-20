import ScrollReveal from "@/components/ScrollReveal";

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-2xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Datenschutzerklärung</h1>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">1. Verantwortlicher</h2>
                <p>
                  WECO Experts GmbH<br />
                  Registergericht: Amtsgericht München, HRB 268248<br />
                  Geschäftsführer: Lasse Rothfuss, Malin Behrens<br />
                  E-Mail: info@hse-experts.com<br />
                  Telefon: +49 (0)89 370 400 96
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
                <p>
                  Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website und unserer Dienstleistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">3. Cookies</h2>
                <p>
                  Unsere Website verwendet Cookies. Notwendige Cookies sind für den Betrieb der Website erforderlich. Analyse- und Marketing-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt. Sie können Ihre Einwilligung jederzeit widerrufen.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">4. Ihre Rechte</h2>
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Kontaktieren Sie uns unter info@hse-experts.com.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">5. Hosting</h2>
                <p>
                  Unsere Website wird innerhalb der Europäischen Union gehostet. Alle Daten werden DSGVO-konform verarbeitet und gespeichert.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DatenschutzPage;
