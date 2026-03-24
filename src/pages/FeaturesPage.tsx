import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { featureSections } from "@/data/featuresTiles";
import { ArrowRight } from "lucide-react";

const allFeatureTiles = featureSections.flatMap((section) => section.tiles);

const FeaturesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-14 md:py-20 section-padding border-b border-border/40">
        <div className="container-tight text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-5 text-balance text-gradient-hero">
              Alle Features im Überblick
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              plyce bündelt Kandidaten, Projekte, Kunden, E-Mail und Analytics — modular, aber aus einem Guss.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-20 section-padding">
        <div className="container-tight">
          <h2 className="sr-only">Vollständige Feature-Liste</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {allFeatureTiles.map((tile, ti) => (
              <ScrollReveal key={`${ti}-${tile.title}`} delay={Math.min(ti % 12, 8) * 25}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/22 hover:shadow-md hover:-translate-y-0.5">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.09] text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-primary/12">
                    <tile.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="text-[0.9375rem] font-semibold tracking-tight leading-snug text-foreground">
                    {tile.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{tile.tagline}</p>
                  <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
                    {tile.bullets.map((line) => (
                      <li key={line} className="flex gap-2 text-xs leading-snug text-muted-foreground">
                        <span
                          className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-primary/45"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/85 px-8 py-12 md:px-14 md:py-16 text-center shadow-lg shadow-primary/15">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight mb-3">
                Plyce live erleben
              </h2>
              <p className="text-primary-foreground/85 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
                Request a demo or get started — we’ll show you the modules that matter for your agency.
              </p>
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/92 font-semibold"
                asChild
              >
                <Link to="/">
                  Mehr erfahren <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
