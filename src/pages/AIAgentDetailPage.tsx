import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { agents } from "./AIAgentsPage";
import { agentArticles } from "@/data/agentArticles";
import { agentLinkedInSource, type ArticleContentBlock } from "@/data/agentLinkedInSource";
import { agentSourceInsightsEn } from "@/data/agentSourceInsightsEn";
import { additionalAgentArticle } from "@/data/additionalAgentArticle";
import { dossierArticle } from "@/data/dossierArticle";
import ScrollReveal from "@/components/ScrollReveal";

const imageFiles: Record<string, string> = {
  "ai-cv-analyzer": "ai-cv-analyzer.webp",
  "ai-candidate-match": "ai-candidate-match.webp",
  "ai-outreach-messages": "ai-outreach-messages.webp",
  "ai-cv-formatter": "ai-cv-formatter.webp",
  "ai-project-brief": "ai-project-brief.webp",
  "ai-project-report": "ai-project-report.webp",
  "ai-company-status-report": "ai-company-status-report.webp",
  "ai-job-post-builder": "ai-job-post-builder.webp",
  "ai-company-enricher": "ai-company-enricher.webp",
  "ai-signature-parser": "ai-signature-parser.webp",
  "ai-meeting-tracker": "ai-meeting-tracker.webp",
  "ai-recorder": "ai-recorder.webp",
  "ai-summary": "ai-summary.webp",
};


const imageSizes: Record<string, { width: number; height: number }> = {
  "ai-cv-analyzer": { width: 1500, height: 783 },
  "ai-candidate-match": { width: 1736, height: 906 },
  "ai-outreach-messages": { width: 1279, height: 720 },
  "ai-cv-formatter": { width: 1122, height: 1402 },
  "ai-project-brief": { width: 1122, height: 1402 },
  "ai-project-report": { width: 1122, height: 1402 },
  "ai-company-status-report": { width: 1122, height: 1402 },
  "ai-job-post-builder": { width: 1122, height: 1402 },
  "ai-company-enricher": { width: 1122, height: 1402 },
  "ai-signature-parser": { width: 1672, height: 941 },
  "ai-meeting-tracker": { width: 1122, height: 1402 },
  "ai-recorder": { width: 1491, height: 1055 },
  "ai-summary": { width: 1491, height: 1055 },
};

const ArticleBody = ({ blocks }: { blocks: ArticleContentBlock[] }) => (
  <div className="mx-auto w-full max-w-3xl space-y-5 text-base md:text-lg leading-8 text-foreground/85">
    {blocks.map((part, index) => part.kind === "heading" ? (
      <h2 key={index} className="pt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl leading-snug">{part.text}</h2>
    ) : part.kind === "listItem" ? (
      <div key={index} className="flex items-start gap-3 pl-1"><span className="mt-1 font-bold text-primary" aria-hidden="true">•</span><p>{part.text}</p></div>
    ) : (
      <p key={index}>{part.text}</p>
    ))}
  </div>
);

const ArticleImage = ({ id, name }: { id: string; name: string }) => {
  const file = imageFiles[id];
  if (!file) return null;
  const size = imageSizes[id];
  return (
    <figure className="mx-auto mb-10 w-full max-w-5xl md:mb-14">
      <img
        src={`/images/ai-agents/${file}`}
        alt={`${name}: Visualisierung des Ablaufs und der Ergebnisse in plyce`}
        width={size.width}
        height={size.height}
        loading="eager"
        decoding="async"
        className="block h-auto w-full rounded-2xl border border-border/30 bg-white object-contain"
      />
    </figure>
  );
};

const AIAgentDetailPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const en = pathname.startsWith("/en/");
  const lang = en ? "en" : "de";
  const prefix = en ? "/en" : "";
  const agent = agents.find((item) => item.id === id);

  if (!agent) {
    return <main className="container-tight min-h-screen pt-32 section-padding">
      <h1 className="text-3xl font-bold">{en ? "Agent not found" : "Agent nicht gefunden"}</h1>
      <Link to={prefix + "/ai-agents"} className="mt-4 inline-flex text-primary underline">{en ? "Back to all AI Agents" : "Zurück zu allen AI Agents"}</Link>
    </main>;
  }

  const article = agentLinkedInSource[agent.id];
  const originalLink = agentArticles[agent.id];
  const englishContent = agentSourceInsightsEn[agent.id];
  const isDossier = agent.id === "ai-dossier-highlights";
  const secondArticle = agent.id === additionalAgentArticle.agentId ? additionalAgentArticle : null;
  const related = agents.filter(item => item.id !== agent.id).sort((a, b) => Math.abs(a.number - agent.number) - Math.abs(b.number - agent.number)).slice(0, 3);
  const articleTitle = isDossier ? dossierArticle[lang].title : en ? agent.name : article?.title.replace(/^#?\d+\s*[:.\-–]?\s*/, "") ?? agent.name;

  return <main className="min-h-screen pt-24">
    <section className="section-padding py-12 md:py-16">
      <div className="container-tight">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link to={prefix + "/ai-agents"} className="hover:text-primary">AI Agents</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span aria-current="page">{agent.name}</span>
        </nav>

        <header className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-primary">AI Agent #{agent.number}</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">{articleTitle}</h1>
        </header>

        <ArticleImage id={agent.id} name={agent.name} />

        {en ? (
          <ScrollReveal>
            <article className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-foreground/85 md:text-lg">
              {isDossier ? <ArticleBody blocks={dossierArticle.en.blocks} /> : englishContent ? (
                <>
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">{englishContent.title}</h2>
                  {englishContent.paragraphs.map(text => <p key={text}>{text}</p>)}
                </>
              ) : null}
            </article>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            {isDossier ? (
              <article className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-foreground/85 md:text-lg">
                <ArticleBody blocks={dossierArticle.de.blocks} />
              </article>
            ) : article ? <ArticleBody blocks={article.blocks} /> : null}
          </ScrollReveal>
        )}

        {secondArticle && <ScrollReveal>
          <section className="mx-auto mt-16 max-w-3xl border-t border-border pt-12">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">{en ? "Job descriptions and job advertisements" : secondArticle.title}</h2>
            {en ? (
              <p className="text-base leading-8 text-foreground/85 md:text-lg">The AI Job Post Builder also supports turning client briefs into structured, reviewable job descriptions. The same workflow was previously described on LinkedIn under the name AI Job Description Generator.</p>
            ) : <ArticleBody blocks={secondArticle.blocks} />}
            <a href={secondArticle.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              {en ? "Original LinkedIn article" : "Originalbeitrag auf LinkedIn"} <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </section>
        </ScrollReveal>}

        {originalLink && <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-6">
          <a href={originalLink.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            {en ? "Read the original article on LinkedIn" : "Originalartikel auf LinkedIn"} <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>}

        <div className="mx-auto mt-16 max-w-5xl border-t border-border pt-10 md:mt-20">
          <h2 className="mb-6 text-2xl font-bold text-foreground">{en ? "More AI Agents" : "Weitere AI Agents"}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map(item => <Link key={item.id} to={prefix + "/ai-agents/" + item.id} className="group rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/50">
              <span className="mb-2 block text-xs font-semibold text-primary">Agent #{item.number}</span>
              <h3 className="mb-2 font-bold text-foreground">{item.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item[lang].tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                {en ? "Read article" : "Artikel lesen"} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>)}
          </div>
          <Link to={prefix + "/ai-agents"} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />{en ? "All AI Agents" : "Alle AI Agents"}
          </Link>
        </div>
      </div>
    </section>
  </main>;
};

export default AIAgentDetailPage;
