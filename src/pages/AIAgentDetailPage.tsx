import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { agents } from "./AIAgentsPage";
import { agentArticles } from "@/data/agentArticles";
import { agentEditorial } from "@/data/agentEditorial";
import type { EditorialLocale } from "@/data/agentEditorialTypes";
import { additionalAgentArticle } from "@/data/additionalAgentArticle";

const imageFiles: Record<string, { file: string; width: number; height: number; de: string; en: string }> = {
  "ai-cv-analyzer": { file:"ai-cv-analyzer.webp", width:1500, height:783, de:"AI CV Analyzer: sieben Schritte vom hochgeladenen Lebenslauf zum strukturierten Kandidatenprofil", en:"AI CV Analyzer: seven steps from CV upload to a structured candidate profile" },
  "ai-candidate-match": { file:"ai-candidate-match.webp", width:1736, height:906, de:"KI-Kandidatenmatching: Kandidatenprofile und Projektanforderungen ergeben Match Score, Begründung und Shortlist", en:"AI candidate matching combines candidate profiles and project requirements into a score and shortlist" },
  "ai-outreach-messages": { file:"ai-outreach-messages.webp", width:1279, height:720, de:"AI Outreach Messages: Projektdaten und Stellenbeschreibung werden zu individuellen Recruiting-Nachrichten", en:"AI outreach workflow from project brief and job description to candidate messages" },
  "ai-cv-formatter": { file:"ai-cv-formatter.webp", width:1122, height:1402, de:"CV Formatter: uneinheitliche Lebensläufe in ein formatiertes, anonymisiertes Kandidatenprofil überführen", en:"CV Formatter: turning inconsistent resumes into formatted and anonymised candidate profiles" },
  "ai-project-brief": { file:"ai-project-brief.webp", width:1122, height:1402, de:"AI Project Brief: Kunden-, Freelancer- und Projektdaten zu Vertragsentwürfen zusammenführen", en:"AI Project Brief brings together client, freelancer and project data for contract drafts" },
  "ai-project-report": { file:"ai-project-report.webp", width:1122, height:1402, de:"Recruiting-Projektreport: Kandidaten, Interviews, Feedback und Projektkennzahlen werden zusammengefasst", en:"Recruitment project report summarises candidates, interviews, feedback and KPIs" },
  "ai-company-status-report": { file:"ai-company-status-report.webp", width:1122, height:1402, de:"AI Company Status Report: Übersicht mehrerer Mandate mit Kandidatenstatus, Interviews und offenem Feedback", en:"Company status report with multiple recruitment projects, candidate stages and feedback" },
  "ai-job-post-builder": { file:"ai-job-post-builder.webp", width:1122, height:1402, de:"AI Job Post Builder: aus Projektinformationen entsteht eine strukturierte, überprüfbare Stellenanzeige", en:"AI Job Post Builder turns assignment details into a reviewable job advertisement" },
  "ai-company-enricher": { file:"ai-company-enricher.webp", width:1122, height:1402, de:"AI Company Enricher: Firmenwebsite recherchieren und Unternehmensdaten im CRM anreichern", en:"AI Company Enricher uses company website details to enrich a CRM record" },
  "ai-signature-parser": { file:"ai-signature-parser.webp", width:1672, height:941, de:"AI Signature Parser: E-Mail-Signatur mit Position und Telefonnummern wird zu einem strukturierten CRM-Kontakt", en:"AI Signature Parser turns email signature details into a structured CRM contact" },
  "ai-meeting-tracker": { file:"ai-meeting-tracker.webp", width:1122, height:1402, de:"AI Meeting Tracker: Gesprächsnotizen werden mit dem passenden Kandidaten als CRM-Aktivität dokumentiert", en:"AI Meeting Tracker turns meeting notes into a candidate CRM activity" },
  "ai-recorder": { file:"ai-recorder.webp", width:1491, height:1055, de:"AI Recorder: gesprochene Notizen werden kontextbezogen als Recruiting-CRM-Aktivität aufbereitet", en:"AI Recorder converts spoken notes into contextual recruiting CRM activities" },
  "ai-summary": { file:"ai-summary.webp", width:1491, height:1055, de:"AI Summary: E-Mails, Anrufe, Kommentare und CRM-Aktivitäten werden zu einer kompakten Historie", en:"AI Summary condenses emails, calls, comments and CRM activities into one concise overview" },
};

const AIAgentDetailPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const en = pathname.startsWith("/en/");
  const locale = en ? "en" : "de";
  const prefix = en ? "/en" : "";
  const agent = agents.find(item => item.id === id);
  const editorial = id ? agentEditorial[id] : undefined;

  if (!agent || !editorial) {
    return <main className="container-tight min-h-screen pt-32 section-padding">
      <h1 className="text-3xl font-bold">{en ? "Agent not found" : "Agent nicht gefunden"}</h1>
      <Link to={prefix + "/ai-agents"} className="mt-4 inline-flex text-primary underline">{en ? "Back to all AI Agents" : "Zurück zu allen AI Agents"}</Link>
    </main>;
  }

  const content: EditorialLocale = editorial[locale];
  const picture = imageFiles[agent.id];
  const originalLink = agentArticles[agent.id];
  const otherLinkedInArticle = agent.id === additionalAgentArticle.agentId ? additionalAgentArticle : null;
  const related = editorial.related.map(relatedId => agents.find(item => item.id === relatedId)).filter((item): item is typeof agents[number] => Boolean(item));

  return <main className="min-h-screen pt-24">
    <section className="section-padding pb-20 pt-12 md:pt-16">
      <div className="container-tight">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link to={prefix + "/ai-agents"} className="hover:text-primary">AI Agents</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true"/>
          <span aria-current="page">{agent.name}</span>
        </nav>

        <article>
          <header className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">plyce · AI Agent #{agent.number}</p>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">{content.h1}</h1>
            <p className="mt-5 text-sm text-muted-foreground">{en ? "An in-depth product guide from plyce" : "Praxiswissen für Personalberatungen und Recruiting-Teams"}</p>
          </header>

          {picture && (
            <figure className="mx-auto mb-12 w-full max-w-5xl md:mb-16">
              <img
                src={`/images/ai-agents/${picture.file}`}
                alt={picture[locale]}
                width={picture.width}
                height={picture.height}
                loading="eager"
                decoding="async"
                className="block h-auto w-full rounded-2xl border border-border/40 bg-white object-contain"
              />
            </figure>
          )}

          <div className="mx-auto max-w-3xl">
            <div className="mb-10 space-y-5 text-lg leading-8 text-foreground/90 md:text-xl">
              {content.intro.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>

            {content.sections.map((section, sectionIndex) => (
              <section key={section.heading} className="mb-12">
                <h2 className="mb-5 text-balance text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">{section.heading}</h2>
                <div className="space-y-5 text-base leading-8 text-foreground/85 md:text-lg">
                  {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-6 space-y-3 pl-6 text-base leading-7 text-foreground/85 md:text-lg">
                    {section.bullets.map(item => <li key={item} className="list-disc pl-1 marker:text-primary">{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="my-14 rounded-3xl border border-primary/20 bg-primary/[0.04] px-6 py-8 md:px-9 md:py-10">
              <h2 className="mb-4 text-balance text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">{content.workflow.heading}</h2>
              <p className="mb-6 leading-8 text-foreground/85">{content.workflow.context}</p>
              <ol className="space-y-5">
                {content.workflow.steps.map((step, index) => <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{index + 1}</span>
                  <p className="pt-0.5 leading-7 text-foreground/90">{step}</p>
                </li>)}
              </ol>
              <p className="mt-7 border-t border-primary/15 pt-5 leading-8 text-foreground/85">{content.workflow.outcome}</p>
            </section>

            <section aria-labelledby="agent-faq-title" className="my-14">
              <h2 id="agent-faq-title" className="mb-7 text-2xl font-bold tracking-tight text-foreground md:text-3xl">{en ? "Frequently asked questions" : "Häufige Fragen"}</h2>
              <div className="divide-y divide-border/70 border-y border-border/70">
                {content.faqs.map(faq => (
                  <div key={faq.question} className="py-5">
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground">{faq.question}</h3>
                    <p className="leading-7 text-foreground/80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {(originalLink || otherLinkedInArticle) && (
              <aside className="mt-12 border-t border-border pt-6 text-sm leading-7 text-muted-foreground">
                <p className="mb-3">{en ? "Further reading in our original LinkedIn series:" : "Weiterführende Beiträge aus unserer LinkedIn-Serie:"}</p>
                {originalLink && <a href={originalLink.url} target="_blank" rel="noopener noreferrer" className="mb-2 flex w-fit items-center gap-2 font-medium text-primary hover:underline">
                  {originalLink.title} <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true"/>
                </a>}
                {otherLinkedInArticle && <a href={otherLinkedInArticle.url} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-2 font-medium text-primary hover:underline">
                  {otherLinkedInArticle.title} <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true"/>
                </a>}
              </aside>
            )}
          </div>
        </article>

        <aside className="mx-auto mt-16 max-w-5xl border-t border-border pt-10 md:mt-20">
          <h2 className="mb-6 text-2xl font-bold text-foreground">{en ? "Related AI Agents" : "Thematisch passende AI Agents"}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map(item => (
              <Link key={item.id} to={prefix + "/ai-agents/" + item.id} className="group rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/50">
                <span className="mb-2 block text-xs font-semibold text-primary">Agent #{item.number}</span>
                <h3 className="mb-2 font-bold text-foreground">{item.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item[locale].tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                  {en ? "Learn more" : "Mehr erfahren"} <ArrowRight className="h-4 w-4" aria-hidden="true"/>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold">
            <Link to={prefix + "/ai-agents"} className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true"/>{en ? "All AI Agents" : "Alle AI Agents"}
            </Link>
            <Link to={prefix + "/features"} className="inline-flex items-center gap-2 text-primary hover:underline">
              {en ? "Explore plyce features" : "Weitere plyce Funktionen"}<ArrowRight className="h-4 w-4" aria-hidden="true"/>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  </main>;
};

export default AIAgentDetailPage;
