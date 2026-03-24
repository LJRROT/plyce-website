import ScrollReveal from "@/components/ScrollReveal";

const FaqPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight max-w-2xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">FAQ</h1>
            <p className="text-sm text-muted-foreground mb-12">Häufige Fragen zu plyce – Inhalt folgt in Kürze.</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bei Fragen erreichen Sie uns unter{" "}
              <a href="mailto:info@plyce.io" className="text-primary hover:underline">
                info@plyce.io
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
