import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { faqGroups } from "@/lib/faq";
import { getLocaleFromPath, localizePath } from "@/lib/locale";

const FaqPage = () => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const en = locale === "en";

  return (
    <div className="min-h-screen pt-24">
      <section className="py-14 md:py-20 section-padding border-b border-border/40">
        <div className="container-tight text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] pt-1 pb-1 mb-5 text-balance text-gradient-hero">
              {en ? "Frequently asked questions" : "FAQ"}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {en ? "Answers about the product, implementation, data, AI, pricing and contracts for recruitment agencies and recruiters." : "Antworten zu Produkt, Einführung, Daten, KI, Preisen und Vertrag, speziell für Personalberatungen und Recruiter."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-20 section-padding">
        <div className="container-tight max-w-3xl space-y-14">
          {faqGroups.map((group, gi) => (
            <ScrollReveal key={group.id} delay={Math.min(gi * 40, 120)}>
              <div id={group.id} className="scroll-mt-28">
                <h2 className="text-lg font-semibold text-foreground mb-4">{group.title[locale]}</h2>
                <div className="w-full">
                  {group.items.map((item) => (
                    <details key={item.id} id={`faq-${item.id}`} {...{ name: `faq-${group.id}` }} className="group border-b border-border/60">
                      <summary className="flex flex-1 cursor-pointer list-none items-center justify-between gap-3 py-4 text-left text-sm font-medium text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                        <h3 className="flex w-full items-center justify-between gap-3">
                          <span>{item.question[locale]}</span>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                        </h3>
                      </summary>
                      <div className="pb-4 pr-4 text-sm text-muted-foreground leading-relaxed" data-faq-answer={item.id}>
                        <p>{item.answer[locale]}</p>
                        {item.links && (
                          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                            {item.links.map((link) => <Link key={link.path} to={localizePath(link.path, locale)} className="text-primary font-medium hover:underline">{link.label[locale]}</Link>)}
                          </p>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-border/60 bg-muted/25 px-6 py-8 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {en ? "Still have a question? Write to us or book a short introduction." : "Deine Frage ist nicht dabei? Schreib uns oder buche eine kurze Vorstellung."}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-stretch sm:items-center">
                <a href={`mailto:info@plyce.app?subject=${encodeURIComponent(en ? "Question about plyce" : "Frage zu plyce")}`} className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-primary hover:underline sm:min-h-0">info@plyce.app</a>
                <span className="hidden sm:inline text-muted-foreground/50" aria-hidden>·</span>
                <button type="button" className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-primary hover:underline sm:min-h-0" onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}>Request Demo</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
