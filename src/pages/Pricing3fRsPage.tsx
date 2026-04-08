import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const OFF_2026_FACTOR = 0.8;
const LIST_PRICE = 125;
const SETUP_FEE = 380;

function formatEuro(value: number, withDecimals: boolean) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: withDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(value);
}

const trustPoints = [
  "AI-natives ATS und CRM vereint Kandidaten, Mandate und Kunden in einer Plattform statt eines fragmentierten Tool-Stacks.",
  "Keine versteckten Zusatzkosten. Ein Produkt, ein Preis, volle Transparenz.",
  "Routine mit KI entlasten bedeutet weniger Admin und mehr Zeit für Beratung, Sourcing und Placements.",
  "Datenmigration und Einstieg sind strukturiert. Kerndaten werden sicher übernommen, ohne monatelange Umstellungsprojekte.",
  "Alle Features und AI-Agenten sind im Produkt inkludiert, ohne Aufpreis.",
];

const Pricing3fRsPage = () => {
  const offerPrice = LIST_PRICE * OFF_2026_FACTOR;
  const setupOffer = SETUP_FEE * OFF_2026_FACTOR;

  return (
    <div className="min-h-screen pt-24">
      {/* Trust section */}
      <section className="py-14 md:py-16 section-padding border-b border-border/40 bg-muted/30">
        <div className="container-tight max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug pb-1 mb-8 text-balance text-gradient-hero">
              Warum wechseln Personalberatungen und Recruiter zu uns?
            </h1>
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
              {trustPoints.map((line) => (
                <li key={line} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Market-Entry Banner */}
      <section className="py-12 md:py-16 section-padding">
        <div className="container-tight max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl border-2 border-primary/35 bg-primary-light/50 p-8 md:p-12 text-center shadow-sm shadow-primary/10">
              <div className="mb-4 flex items-center justify-center gap-3">
                <Flame className="h-8 w-8 shrink-0 text-primary md:h-9 md:w-9" aria-hidden />
                <p className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                  Market-Entry-Angebot
                </p>
              </div>
              <p className="text-3xl font-black tracking-tight text-primary md:text-4xl lg:text-5xl">20 % Rabatt in 2026</p>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                20 % Rabatt in 2026 auf Nutzergebühren, Onboarding, Setup und Datenmigration.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing card */}
      <section className="pb-16 md:pb-24 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-3">Preise</h2>
            <p className="text-center text-sm text-muted-foreground mb-10 md:mb-14 max-w-xl mx-auto">
              Mit dem Market-Entry-Angebot erhalten Sie 20 % Rabatt in 2026 auf alles.
            </p>
          </ScrollReveal>

          <div className="max-w-lg mx-auto">
            <ScrollReveal>
              <article className="relative rounded-2xl border-2 border-primary bg-card p-8 md:p-10 shadow-lg shadow-primary/10">
                {/* Price */}
                <div className="mb-1">
                  <p className="mb-3">
                    <span className="inline-flex rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                      Einstieg 2026
                    </span>
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-foreground">
                    {formatEuro(offerPrice, false)}{" "}
                    <span className="text-lg font-semibold text-muted-foreground">/ Nutzer / Monat</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="line-through decoration-muted-foreground/70">{formatEuro(LIST_PRICE, false)}</span>
                    {" "}statt Listenpreis, 20 % Rabatt in 2026.
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>Komplettes Produkt mit ATS und CRM in einer Plattform.</span>
                  </li>
                  <li className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>
                      <Link to="/features" className="underline underline-offset-2 hover:text-primary transition-colors">
                        Alle Features
                      </Link>{" "}
                      inklusive.
                    </span>
                  </li>
                  <li className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>
                      <Link to="/ai-agents" className="underline underline-offset-2 hover:text-primary transition-colors">
                        Alle AI-Agenten
                      </Link>{" "}
                      inklusive.
                    </span>
                  </li>
                  <li className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>Nutzer jederzeit flexibel hinzufügen oder reduzieren.</span>
                  </li>
                  <li className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>Monatsgenaue Abrechnung, nur aktive Nutzer zahlen.</span>
                  </li>
                  <li className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>Mindestlaufzeit 12 Monate.</span>
                  </li>
                  <li className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>
                      Setup- und Onboarding-Fee einmalig {formatEuro(setupOffer, false)}{" "}
                      <span className="text-xs text-muted-foreground/70">
                        (statt <span className="line-through">{formatEuro(SETUP_FEE, false)}</span>, 20 % Rabatt in 2026).
                      </span>
                    </span>
                  </li>
                </ul>

                {/* Separator + extras */}
                <hr className="my-6 border-border/60" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Flexible Datenmigration nach Absprache möglich.<br />
                  Customizing ebenfalls nach Absprache möglich.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing3fRsPage;
