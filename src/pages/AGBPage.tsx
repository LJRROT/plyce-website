import ScrollReveal from "@/components/ScrollReveal";

const AGBPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-2xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Allgemeine Geschäftsbedingungen (AGB)</h1>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
              <p>
                Die nachfolgenden AGB regeln die vertragliche Nutzung von plyce. Der vollständige Vertragstext wird hier in Kürze ergänzt.
              </p>
              <p>
                Für Rückfragen wenden Sie sich bitte an{" "}
                <a href="mailto:info@plyce.io" className="text-primary hover:underline">
                  info@plyce.io
                </a>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AGBPage;
