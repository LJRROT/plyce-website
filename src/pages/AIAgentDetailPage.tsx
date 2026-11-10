import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { agents } from "./AIAgentsPage";
import { agentArticles } from "@/data/agentArticles";
import { agentLinkedInSource, type ArticleContentBlock } from "@/data/agentLinkedInSource";
import { agentSourceInsightsEn } from "@/data/agentSourceInsightsEn";
import { additionalAgentArticle } from "@/data/additionalAgentArticle";

const agentImages: Record<string, string> = {
  "ai-cv-analyzer": "/images/ai-agents/ai-cv-analyzer.webp",
  "ai-candidate-match": "/images/ai-agents/ai-candidate-match.webp",
  "ai-outreach-messages": "/images/ai-agents/ai-outreach-messages.webp",
  "ai-cv-formatter": "/images/ai-agents/ai-cv-formatter.webp",
  "ai-project-brief": "/images/ai-agents/ai-project-brief.webp",
  "ai-project-report": "/images/ai-agents/ai-project-report.webp",
  "ai-company-status-report": "/images/ai-agents/ai-company-status-report.webp",
  "ai-job-post-builder": "/images/ai-agents/ai-job-post-builder.webp",
  "ai-company-enricher": "/images/ai-agents/ai-company-enricher.webp",
  "ai-signature-parser": "/images/ai-agents/ai-signature-parser.webp",
  "ai-meeting-tracker": "/images/ai-agents/ai-meeting-tracker.webp",
  "ai-recorder": "/images/ai-agents/ai-recorder.webp",
  "ai-summary": "/images/ai-agents/ai-summary.webp",
};

const dossierContentDe: ArticleContentBlock[] = [
  { kind: "paragraph", text: "Ein guter Kandidat braucht mehr als einen aussagekräftigen Lebenslauf. Für die Vorstellung beim Kunden ist entscheidend, warum seine Erfahrung zum konkreten Mandat passt." },
  { kind: "paragraph", text: "Im Recruiting entsteht diese Einordnung häufig manuell: Projekterfahrung prüfen, fachliche Schwerpunkte heraussuchen, relevante Stationen gewichten und die wichtigsten Argumente für die Kandidatenvorstellung formulieren." },
  { kind: "paragraph", text: "Hier unterstützt AI Dossier Highlights von plyce. Der Agent fasst die relevanten Stärken eines Kandidaten im Kontext der offenen Position zusammen und bereitet daraus kompakte, nachvollziehbare Profil-Highlights auf." },
  { kind: "heading", text: "Relevanz statt vollständiger CV-Nacherzählung" },
  { kind: "paragraph", text: "Nicht jede Station im Lebenslauf ist für jedes Mandat relevant. AI Dossier Highlights fokussiert auf die Erfahrung, Kenntnisse und fachlichen Schwerpunkte, die für die konkrete Rolle entscheidend sind." },
  { kind: "paragraph", text: "Rolle, Branche und Projektanforderungen können in die Formulierung einfließen. Aufbau, Länge und Tonalität lassen sich an den gewünschten Stil der Personalberatung anpassen." },
  { kind: "heading", text: "Eine bessere Grundlage für Kandidatenvorstellungen" },
  { kind: "paragraph", text: "Die generierten Highlights unterstützen Recruiter bei der Vorbereitung von Kandidatenprofilen, Shortlists und Kundenpräsentationen. Sie ersetzen nicht die fachliche Prüfung, sondern machen die entscheidenden Argumente schneller sichtbar." },
  { kind: "paragraph", text: "Das Ergebnis: weniger manuelles Zusammenfassen, ein konsistenterer Qualitätsstandard und eine klarere Einordnung der Kandidatenpassung." },
];

const renderBlocks = (blocks: ArticleContentBlock[]) =>
  blocks.map((part, index) =>
    part.kind === "heading" ? (
      <h2 key={index} className="text-2xl md:text-[1.8rem] font-bold tracking-tight text-foreground pt-6 pb-1">{part.text}</h2>
    ) : part.kind === "listItem" ? (
      <p key={index} className="flex items-start gap-3 text-[1.05rem] leading-8 text-muted-foreground">
        <span aria-hidden="true" className="text-primary font-bold">•</span><span>{part.text}</span>
      </p>
    ) : (
      <p key={index} className="text-[1.05rem] leading-8 text-muted-foreground">{part.text}</p>
    )
  );

const AIAgentDetailPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const en = pathname.startsWith("/en/");
  const lang = en ? "en" : "de";
  const prefix = en ? "/en" : "";
  const agent = agents.find((item) => item.id === id);
  if (!agent) {
    return <main className="min-h-screen pt-32 section-padding container-tight">
      <h1 className="text-3xl font-bold">{en ? "Agent not found" : "Agent nicht gefunden"}</h1>
      <Link className="text-primary underline" to={prefix + "/ai-agents"}>{en ? "Back to AI Agents" : "Zurück zur Übersicht"}</Link>
    </main>;
  }

  const article = agentArticles[agent.id];
  const source = agentLinkedInSource[agent.id];
  const english = agentSourceInsightsEn[agent.id];
  const relatedArticle = agent.id === additionalAgentArticle.agentId ? additionalAgentArticle : null;
  const imagePath = agentImages[agent.id];
  const title = agent.name;
  const related = agents.filter((item) => item.id !== agent.id)
    .sort((a, b) => Math.abs(a.number - agent.number) - Math.abs(b.number - agent.number))
    .slice(0, 3);

  return <main className="min-h-screen pt-24">
    <article className="section-padding py-12 md:py-20">
      <div className="container-tight">
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground mb-10">
          <Link to={prefix + "/ai-agents"} className="hover:text-primary">AI Agents</Link>
          <ChevronRight aria-hidden="true" className="w-4 h-4" />
          <span aria-current="page">{agent.name}</span>
        </nav>
        <header className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary mb-5">Agent #{agent.number}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance leading-tight">{title}</h1>
        </header>

        {imagePath && (
          <figure className="mt-9 md:mt-12 max-w-5xl mx-auto">
            <img src={imagePath} alt={en ? `${agent.name} workflow illustration` : `Ablauf und Funktionen des ${agent.name}`} className="block w-full h-auto rounded-2xl border border-border/40" loading="eager" decoding="async" />
          </figure>
        )}

        <div className="mx-auto max-w-3xl mt-12 md:mt-16 space-y-5">
          {en ? (
            english ? <>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">{english.title}</h2>
              {english.paragraphs.map((paragraph, index) => <p key={index} className="text-[1.05rem] leading-8 text-muted-foreground">{paragraph}</p>)}
            </> : <>
              <p className="text-[1.05rem] leading-8 text-muted-foreground">{agent.en.tagline}</p>
              <ul className="space-y-3 list-disc pl-6">{agent.en.capabilities.map((item) => <li key={item} className="text-[1.05rem] leading-8 text-muted-foreground">{item}</li>)}</ul>
            </>
          ) : renderBlocks(source?.blocks ?? dossierContentDe)}

          {relatedArticle && <>
            <h2 className="text-2xl md:text-[1.8rem] font-bold tracking-tight pt-8">{en ? "From client brief to structured job description" : "Vom Kundenbriefing zur professionellen Stellenbeschreibung"}</h2>
            {en
              ? <p className="text-[1.05rem] leading-8 text-muted-foreground">The AI Job Post Builder also covers the first step of creating structured role descriptions from client briefs, project details and requirements. The text can be adjusted for tone, length, permanent positions or freelance assignments and checked before publication.</p>
              : renderBlocks(relatedArticle.blocks)}
          </>}

          {(article || relatedArticle) && <div className="pt-8 mt-8 border-t border-border/60">
            <p className="text-sm text-muted-foreground mb-3">{en ? "Original publication" : "Originalveröffentlichung"}</p>
            <div className="flex flex-col gap-3">
              {article && <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 font-semibold text-primary hover:underline">
                <span>{article.title}</span><ExternalLink aria-hidden="true" className="w-4 h-4 mt-1 shrink-0" />
              </a>}
              {relatedArticle && <a href={relatedArticle.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 font-semibold text-primary hover:underline">
                <span>{relatedArticle.title}</span><ExternalLink aria-hidden="true" className="w-4 h-4 mt-1 shrink-0" />
              </a>}
            </div>
          </div>}
        </div>
      </div>
    </article>

    <section className="section-padding py-12 md:py-16 border-t border-border/60" aria-labelledby="related-agent-heading">
      <div className="container-tight">
        <h2 id="related-agent-heading" className="text-2xl font-bold tracking-tight mb-6">{en ? "Explore related AI Agents" : "Weitere passende AI Agents"}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => <Link key={item.id} to={prefix + "/ai-agents/" + item.id} className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-all">
            <p className="text-xs font-semibold text-primary mb-2">Agent #{item.number}</p>
            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">{en ? "Learn more" : "Mehr erfahren"} <ArrowRight aria-hidden="true" className="w-4 h-4" /></span>
          </Link>)}
        </div>
        <Link to={prefix + "/ai-agents"} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />{en ? "All AI Agents" : "Alle AI Agents"}
        </Link>
      </div>
    </section>
  </main>;
};

export default AIAgentDetailPage;
