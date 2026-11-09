import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight, ExternalLink } from "lucide-react";
import { agents } from "./AIAgentsPage";
import { agentArticles } from "@/data/agentArticles";
import { agentLinkedInSource, type ArticleContentBlock } from "@/data/agentLinkedInSource";
import { agentSourceInsightsEn } from "@/data/agentSourceInsightsEn";
import { additionalAgentArticle } from "@/data/additionalAgentArticle";
import { agentArticleImages } from "@/data/agentArticleImages";
import { dossierArticle } from "@/data/dossierArticle";

type BlockGroup =
  | { kind: "heading" | "paragraph"; text: string }
  | { kind: "list"; items: string[] };

const groupBlocks = (blocks: ArticleContentBlock[]): BlockGroup[] => {
  const grouped: BlockGroup[] = [];
  for (const block of blocks) {
    if (block.kind === "listItem") {
      const last = grouped[grouped.length - 1];
      if (last && last.kind === "list") last.items.push(block.text);
      else grouped.push({ kind: "list", items: [block.text] });
    } else {
      grouped.push({ kind: block.kind, text: block.text });
    }
  }
  return grouped;
};

const ArticleText = ({ blocks, secondary = false }: { blocks: ArticleContentBlock[]; secondary?: boolean }) => (
  <div className="space-y-5 md:space-y-6">
    {groupBlocks(blocks).map((block, index) => block.kind === "heading" ? (
      secondary
        ? <h3 key={index} className="pt-5 text-xl md:text-2xl font-bold leading-snug tracking-tight text-foreground">{block.text}</h3>
        : <h2 key={index} className="pt-6 text-2xl md:text-[1.65rem] font-bold leading-snug tracking-tight text-foreground">{block.text}</h2>
    ) : block.kind === "list" ? (
      <ul key={index} className="list-disc pl-6 space-y-2 marker:text-primary text-foreground/85">{block.items.map((item, i) => <li key={i} className="pl-1 leading-relaxed">{item}</li>)}</ul>
    ) : (
      <p key={index} className="leading-[1.85] text-foreground/85">{block.text}</p>
    ))}
  </div>
);

const AIAgentDetailPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const isEnglish = pathname.startsWith("/en/");
  const prefix = isEnglish ? "/en" : "";
  const agent = agents.find((item) => item.id === id);

  if (!agent) return (
    <main className="container-tight section-padding min-h-screen pt-36">
      <h1 className="text-3xl font-bold">{isEnglish ? "Agent not found" : "Agent nicht gefunden"}</h1>
      <Link className="inline-flex items-center gap-2 mt-5 text-primary font-semibold" to={prefix + "/ai-agents"}><ArrowLeft className="w-4 h-4" />{isEnglish ? "Back to AI Agents" : "Zur AI-Agent-Übersicht"}</Link>
    </main>
  );

  const original = agentLinkedInSource[agent.id];
  const english = agentSourceInsightsEn[agent.id];
  const isDossier = agent.id === "ai-dossier-highlights";
  const title = isDossier
    ? dossierArticle[isEnglish ? "en" : "de"].title
    : isEnglish
      ? (english?.title || agent.name)
      : (original?.title || agent.name);
  const blocks: ArticleContentBlock[] = isDossier
    ? dossierArticle[isEnglish ? "en" : "de"].blocks
    : isEnglish
      ? (english?.paragraphs.map((text) => ({ kind: "paragraph" as const, text })) || [])
      : (original?.blocks || []);
  const graphic = agentArticleImages[agent.id];
  const linkedin = agentArticles[agent.id];
  const additional = agent.id === additionalAgentArticle.agentId ? additionalAgentArticle : null;

  return <main className="min-h-screen pt-24 pb-20">
    <div className="container-tight section-padding">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground py-7 md:py-10">
        <Link className="hover:text-primary transition-colors" to={prefix + "/ai-agents"}>AI Agents</Link>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span aria-current="page">{agent.name}</span>
      </nav>
      <article className="max-w-6xl mx-auto">
        <header className="mx-auto max-w-4xl text-center mb-10 md:mb-14">
          <p className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary-light text-primary font-semibold text-sm mb-5">AI Agent #{agent.number}</p>
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-[3.35rem] leading-[1.15] tracking-tight text-foreground text-balance">{title}</h1>
        </header>
        {graphic && <figure key={agent.id} className="mx-auto flex justify-center mb-11 md:mb-16 max-w-5xl">
          <img
            src={graphic.src}
            width={graphic.width}
            height={graphic.height}
            alt={isEnglish ? graphic.altEn : graphic.altDe}
            loading="eager"
            decoding="async"
            onError={(event) => { const figure = event.currentTarget.closest("figure"); if (figure) figure.style.display = "none"; }}
            className="block max-w-full w-auto h-auto max-h-[880px] object-contain rounded-xl"
          />
        </figure>}
        <div className="mx-auto max-w-3xl text-base md:text-lg">
          <ArticleText blocks={blocks} />
          {additional && !isEnglish && <section className="mt-14 pt-12 border-t border-border/70" aria-label="Stellenbeschreibung mit KI">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-7">{additional.title}</h2>
            <ArticleText blocks={additional.blocks} secondary />
          </section>}
          {(linkedin || additional) && <footer className="mt-12 pt-8 border-t border-border/60 text-sm text-muted-foreground">
            <p className="font-medium mb-3">{isEnglish ? "Original articles" : "Originalartikel"}</p>
            {linkedin && <a className="inline-flex items-center gap-1.5 text-primary hover:underline" href={linkedin.url} target="_blank" rel="noopener noreferrer">{linkedin.title}<ExternalLink aria-hidden="true" className="w-3.5 h-3.5 shrink-0" /></a>}
            {additional && <p className="mt-3"><a className="inline-flex items-center gap-1.5 text-primary hover:underline" href={additional.url} target="_blank" rel="noopener noreferrer">{additional.title}<ExternalLink aria-hidden="true" className="w-3.5 h-3.5 shrink-0" /></a></p>}
          </footer>}
          <div className="mt-12 pt-8 border-t border-border/60">
            <Link className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline" to={prefix + "/ai-agents"}><ArrowLeft className="w-4 h-4" />{isEnglish ? "All AI Agents" : "Alle AI Agents"}</Link>
          </div>
        </div>
      </article>
    </div>
  </main>;
};
export default AIAgentDetailPage;
