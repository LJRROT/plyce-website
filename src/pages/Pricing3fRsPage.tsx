import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Flame } from "lucide-react";

const OFF_2026_FACTOR = 0.7;

function formatEuro(value: number, withDecimals: boolean) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: withDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function MarketEntryPriceBlock({
  listUserPerMonth,
  listBase,
}: {
  listUserPerMonth: number;
  listBase?: number;
}) {
  const userOffer = listUserPerMonth * OFF_2026_FACTOR;
  const baseOffer = listBase != null ? listBase * OFF_2026_FACTOR : undefined;
  const userNeedsDecimals = !Number.isInteger(userOffer);
  const baseNeedsDecimals = baseOffer != null && !Number.isInteger(baseOffer);

  return (
    <div className="mb-1">
      <p className="mb-3">
        <span className="inline-flex rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
          Einstieg 2026
        </span>
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-foreground">
        {formatEuro(userOffer, userNeedsDecimals)}{" "}
        <span className="text-lg font-semibold text-muted-foreground">/ Nutzer / Monat</span>
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        <span className="line-through decoration-muted-foreground/70">{formatEuro(listUserPerMonth, false)}</span>
        <span className="mx-1.5 text-muted-foreground/50">·</span>
        <span>30 % Rabatt in 2026</span>
      </p>
      {listBase != null && baseOffer != null && (
        <div className="mt-3">
          <p className="text-sm font-semibold text-foreground">
            + {formatEuro(baseOffer, baseNeedsDecimals)} Basis
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="line-through decoration-muted-foreground/70">{formatEuro(listBase, false)}</span> Listenpreis
            Basis
          </p>
        </div>
      )}
    </div>
  );
}

const launchFeatures = ["ATS & Pipeline", "CV-Parsing", "KI-Dossiers", "Standard-Workflows"];

const scaleExtra = [
  "KI-Matching-Agent",
  "KI-Analytics",
  "Eigenes Jobboard (API)",
  "WhatsApp-Integration",
  "Besseres SLA",
];

const scaleSetupIncludes = [
  "Datenmigration (Kandidaten, Kunden, Firmen)",
  "Templates (Dossiers, E-Mails)",
  "Workflow Setup",
  "Onboarding",
];

const proExtra = [
  "Erweiterte Migration (Aktivitäten, Projekte, Skills)",
  "Datenbereinigung & Deduplizierung",
  "KI-CV-Nachverarbeitung",
  "Eigene Workflows & Felder",
  "Individuelle Integrationen",
];

const trustPoints = [
  "AI-natives ATS und CRM: Kandidaten, Mandate und Kunden in einer Plattform statt eines fragmentierten Tool-Stacks.",
  "Attraktive Gesamtkosten und klare Preise — weniger versteckte Zusatzmodule, mehr Transparenz für Ihr Budget.",
  "Routine mit KI entlasten: weniger Admin, mehr Zeit für Beratung, Sourcing und Placements.",
  "Datenmigration und Einstieg strukturiert: Kerndaten sicher übernommen, ohne monatelange Umstellungsprojekte.",
];

const Pricing3fRsPage = () => {
  return (
    <div className="min-h-screen pt-24">
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
              <p className="text-3xl font-black tracking-tight text-primary md:text-4xl lg:text-5xl">30 % Rabatt in 2026</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-3">Preise</h2>
            <p className="text-center text-sm text-muted-foreground mb-10 md:mb-14 max-w-xl mx-auto">
              Mit dem Market-Entry-Angebot: 30 % Rabatt in 2026 auf Nutzer- und Basispreise (siehe Karten unten).
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
            <ScrollReveal delay={0}>
              <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-colors hover:border-primary/25">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
                  <span className="text-sm font-semibold text-foreground">Einstieg</span>
                </div>
                <MarketEntryPriceBlock listUserPerMonth={75} />
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground mb-6">
                  <li>Max. 5 Nutzer</li>
                  <li>Monatlich kündbar</li>
                  <li>Keine Setup-Gebühr</li>
                </ul>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {launchFeatures.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-foreground/90 mb-0">Perfekt für den schnellen Einstieg</p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <article className="relative flex h-full flex-col rounded-2xl border-2 border-primary bg-card p-8 shadow-lg shadow-primary/10 transition-colors">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Beliebteste Wahl
                </span>
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500" aria-hidden />
                  <span className="text-sm font-semibold text-foreground">Wachstum</span>
                </div>
                <MarketEntryPriceBlock listUserPerMonth={90} />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 mt-4">Alles aus Einstieg +</p>
                <ul className="space-y-2.5 mb-6">
                  {scaleExtra.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Setup inklusive</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground mb-3 flex-1">
                  {scaleSetupIncludes.map((f) => (
                    <li key={f} className="flex gap-2 pl-1">
                      <span className="text-primary" aria-hidden>
                        ·
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-6">Setup Fee nach Aufwand</p>
                <p className="text-sm font-medium text-foreground/90">Für wachsende Personalberatungen</p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-colors hover:border-primary/25">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" aria-hidden />
                  <span className="text-sm font-semibold text-foreground">Pro</span>
                </div>
                <MarketEntryPriceBlock listUserPerMonth={95} listBase={220} />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 mt-3">Alles aus Wachstum +</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {proExtra.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Setup</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
                  <li className="flex gap-2 pl-1">
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span>Setup: 5.000–15.000 €</span>
                  </li>
                  <li className="flex gap-2 pl-1">
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span>Erweiterte Datenmigration nach Aufwand</span>
                  </li>
                  <li className="flex gap-2 pl-1">
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span>Individualisierung nach Aufwand</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-foreground/90">Maximale Flexibilität &amp; Individualisierung</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing3fRsPage;
