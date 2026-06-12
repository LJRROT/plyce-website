import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BellRing,
  Briefcase,
  Building2,
  Clock,
  Database,
  FileSignature,
  FolderOpen,
  ListChecks,
  MailCheck,
  ReceiptEuro,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Tag,
  UserCircle,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const openDemo = () => window.dispatchEvent(new Event("plyce-open-demo-modal"));

type Tile = { icon: LucideIcon; label: string };

const crmTiles: Tile[] = [
  { icon: Users, label: "Kandidaten" },
  { icon: Building2, label: "Kunden" },
  { icon: Briefcase, label: "Freelancer" },
  { icon: FolderOpen, label: "Projekte" },
  { icon: FileSignature, label: "Verträge & Konditionen" },
  { icon: UserCircle, label: "Ansprechpartner" },
];

const middleTiles: Tile[] = [
  { icon: Users, label: "Stammdaten" },
  { icon: FolderOpen, label: "Projektdaten" },
  { icon: Tag, label: "Konditionen" },
];

const timeTiles: Tile[] = [
  { icon: UserCircle, label: "Freelancer Login im Timesheet Portal" },
  { icon: MailCheck, label: "Kundenfreigabe per E-Mail-Link" },
  { icon: ReceiptEuro, label: "Credit Notes & Invoices" },
  { icon: BellRing, label: "Automatische Reminder" },
  { icon: BarChart3, label: "Analytics & Forecasts" },
  { icon: ListChecks, label: "Projektmanagement" },
];

const features = [
  {
    icon: Clock,
    title: "Automatisierte Zeiterfassung & Freigabe",
    text: "Freelancer erfassen ihre Zeiten direkt im Timesheet Portal. Die Freigabe durch den Kunden erfolgt automatisch über definierte Approval-Prozesse.",
  },
  {
    icon: ReceiptEuro,
    title: "Integriertes Invoicing",
    text: "Credit Notes und Invoices werden automatisch generiert und versendet. Abrechnung, Gutschriften und Rechnungsprozesse laufen direkt aus dem System heraus.",
  },
  {
    icon: BellRing,
    title: "Automatische Erinnerungen",
    text: "Projektmanager, Freelancer und Kunden erhalten automatisierte Reminder für offene Timesheets, ausstehende Freigaben oder anstehende Abrechnungsschritte.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Forecasts",
    text: "Integrierte Auswertungen und Forecasts geben jederzeit Transparenz über laufende Projekte, Umsätze, offene Freigaben und erwartete Abrechnungen.",
  },
  {
    icon: Workflow,
    title: "Nahtlose CRM/ATS-Integration",
    text: "Kandidaten, Kunden, Projekte, Konditionen und Ansprechpartner werden direkt aus plyce CRM/ATS übernommen, ohne doppelte Datenpflege.",
  },
];

const workflowSteps: { icon: LucideIcon; title: string }[] = [
  { icon: FolderOpen, title: "Projekt in plyce CRM/ATS anlegen" },
  { icon: Database, title: "Daten automatisch an plyce time übergeben" },
  { icon: Clock, title: "Freelancer erfassen Zeiten im Portal" },
  { icon: MailCheck, title: "Kunde gibt Timesheets frei" },
  { icon: ReceiptEuro, title: "Credit Notes & Invoices automatisch erstellt und versendet" },
  { icon: BarChart3, title: "Analytics & Forecasts liefern Transparenz" },
];

const TileCard = ({ icon: Icon, label }: Tile) => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border/60 bg-background px-3 py-4 text-center shadow-sm">
    <Icon className="h-5 w-5 text-primary" aria-hidden />
    <span className="text-xs font-medium leading-tight text-foreground">{label}</span>
  </div>
);

const PlyceTimePage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Teil der plyce Plattform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug pb-2 mb-4 text-gradient-hero text-balance">
                plyce time
              </h1>
              <p className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed mb-5">
                Freelancer & Project Management, Timesheet Portal und Invoicing — nahtlos integriert in plyce CRM/ATS.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty mx-auto max-w-2xl">
                plyce time verbindet Projektverwaltung, Zeiterfassung, Kundenfreigabe und Abrechnung in einem schlanken,
                intuitiven Workflow. Alle relevanten Daten werden automatisch aus plyce CRM/ATS übernommen. So entstehen
                Projekte, Freelancer-Zugänge, Timesheets, Freigaben und Abrechnungen ohne doppelte Datenpflege.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" type="button" onClick={openDemo}>
                  Demo anfragen
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link to="/features">plyce CRM/ATS Features</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Integration visual */}
      <section className="pb-8 section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                So arbeiten <span className="text-primary">plyce CRM/ATS</span> und{" "}
                <span className="text-primary">plyce time</span> zusammen
              </h2>
              <p className="text-base text-muted-foreground mt-3 leading-relaxed text-pretty">
                Von Projektstart über Timesheets und Kundenfreigabe bis zur automatisierten Abrechnung — alles in einem
                integrierten Workflow.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-5 lg:gap-3 items-stretch">
              {/* CRM/ATS column */}
              <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
                <div className="flex items-center gap-2 mb-1">
                  <img src="/plyce-logo-mark.png" alt="" className="h-6 w-auto" />
                  <h3 className="text-lg md:text-xl font-bold text-foreground">plyce CRM/ATS</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Recruiting, Kunden und Projekte steuern</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {crmTiles.map((t) => (
                    <TileCard key={t.label} {...t} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-3 py-2.5">
                  <Database className="h-4 w-4 text-primary" aria-hidden />
                  <span className="text-xs font-semibold text-primary">Zentrale Datenbasis</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background shadow-sm">
                  <ArrowRight className="hidden h-5 w-5 text-primary lg:block" aria-hidden />
                  <ArrowDown className="h-5 w-5 text-primary lg:hidden" aria-hidden />
                </div>
              </div>

              {/* Middle: automatic data handover */}
              <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-background p-5 md:p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light mb-2">
                    <RefreshCw className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground">Automatische Datenübernahme</h3>
                </div>
                <div className="space-y-2">
                  {middleTiles.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 px-3 py-2.5"
                    >
                      <t.icon className="h-4 w-4 text-primary shrink-0" aria-hidden />
                      <span className="text-sm font-medium text-foreground">{t.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/40 px-3 py-2.5">
                  <RefreshCw className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden />
                  <span className="text-xs text-muted-foreground leading-snug">
                    Status, Freigaben, Abrechnung und Forecasts fließen zurück ins System.
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background shadow-sm">
                  <ArrowRight className="hidden h-5 w-5 text-primary lg:block" aria-hidden />
                  <ArrowDown className="h-5 w-5 text-primary lg:hidden" aria-hidden />
                </div>
              </div>

              {/* plyce time column */}
              <div className="rounded-2xl border-2 border-secondary/30 bg-secondary/[0.04] p-5 md:p-6">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                    <Clock className="h-3.5 w-3.5 text-secondary-foreground" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">plyce time</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Freelancer & Project Management, Timesheet Portal und Invoicing
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeTiles.map((t) => (
                    <TileCard key={t.label} {...t} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-secondary/10 px-3 py-2.5">
                  <Sparkles className="h-4 w-4 text-secondary" aria-hidden />
                  <span className="text-xs font-semibold text-secondary">Schlank, intuitiv und nahtlos integriert</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kernfunktionen */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">Kernfunktionen</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-balance">
                Alles, was Freelancer Management heute braucht
              </h2>
              <p className="text-base text-muted-foreground mt-3 leading-relaxed text-pretty">
                Zeiterfassung, Freigaben, Abrechnung und Analytics in einem System — direkt verzahnt mit Ihrem
                Recruiting.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, idx) => (
              <ScrollReveal key={f.title} delay={idx * 70} className="h-full">
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light mb-4">
                    <f.icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow stepper */}
      <section className="pb-16 md:pb-24 section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">Workflow</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-balance">
                In sechs Schritten von Projektstart bis Abrechnung
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-3">
              {workflowSteps.map((step, idx) => (
                <li key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-background shadow-sm">
                    <step.icon className="h-6 w-6 text-primary" aria-hidden />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-foreground leading-snug max-w-[14rem]">{step.title}</p>
                  {idx < workflowSteps.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px border-t border-dashed border-primary/40"
                    />
                  )}
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* Positionierung / Closing banner */}
      <section className="pb-20 md:pb-28 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-secondary p-8 md:p-12 text-secondary-foreground shadow-xl">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 mb-5">
                  <ShieldCheck className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-4">
                  Ein System. Kein Doppelaufwand. Mehr Automatisierung.
                </h2>
                <p className="text-base md:text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl text-pretty">
                  plyce time macht Freelancer Management einfach: von Projektstart über Zeiterfassung und Approval bis
                  zur automatisierten Abrechnung. Schlank, intuitiv und vollständig integriert in plyce CRM/ATS.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <Button size="lg" type="button" onClick={openDemo}>
                    <Rocket className="mr-2 h-4 w-4" /> Demo anfragen
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    asChild
                    className="text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
                  >
                    <Link to="/pricing">Preise ansehen</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PlyceTimePage;
