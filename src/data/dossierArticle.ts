import type { ArticleContentBlock } from "./agentLinkedInSource";

export const dossierArticle = {
  de: {
    title: "AI Dossier Highlights: Die wichtigsten Argumente für die Kandidatenvorstellung",
    blocks: [
      { kind: "paragraph", text: "Ein Lebenslauf zeigt, welche Stationen ein Kandidat durchlaufen hat. Er beantwortet aber nicht automatisch die wichtigste Frage im Recruiting: Warum passt genau diese Person zu diesem Mandat?" },
      { kind: "paragraph", text: "Gerade bei der Vorstellung gegenüber einem Kunden müssen relevante Erfahrung, fachliche Schwerpunkte und die Verbindung zu den Projektanforderungen schnell erkennbar sein. Eine bloße Zusammenfassung des gesamten CVs hilft dabei nur bedingt." },
      { kind: "paragraph", text: "Hier setzt AI Dossier Highlights von plyce an." },
      { kind: "heading", text: "Relevanz statt Lebenslauf-Zusammenfassung" },
      { kind: "paragraph", text: "Der Agent erstellt kompakte Highlights, die sich gezielt auf die Passung zwischen einem Kandidaten und dem jeweiligen Projekt beziehen. Im Fokus stehen die Erfahrungen, Kompetenzen und beruflichen Stationen, die für die konkrete Rolle wichtig sind." },
      { kind: "paragraph", text: "Dabei kann die Formulierung den fachlichen Kontext, die Branche und die Zielrolle berücksichtigen. So entstehen Aussagen, mit denen Recruiter eine Kandidatenvorstellung begründen können, ohne für jedes Mandat dieselben Informationen erneut manuell aufzubereiten." },
      { kind: "heading", text: "Eine nachvollziehbare Grundlage für die Vorstellung" },
      { kind: "paragraph", text: "Die Highlights sollen dem Kunden nicht noch einmal den ganzen CV erzählen. Sie sollen auf einen Blick zeigen, welche Erfahrungen besonders relevant sind und welche Argumente für ein vertiefendes Gespräch sprechen." },
      { kind: "paragraph", text: "Aufbau, Länge und Tonalität lassen sich an die Arbeitsweise der Personalberatung anpassen. Die KI bereitet einen Entwurf vor, den der Recruiter fachlich kontrolliert, ergänzt und für die Kandidatenvorstellung nutzt." },
      { kind: "paragraph", text: "Das Ergebnis ist eine kürzere, verständlichere und stärker mandatsbezogene Darstellung. Die abschließende Bewertung und Entscheidung bleiben beim Recruiter und beim Kunden." }
    ] satisfies ArticleContentBlock[],
  },
  en: {
    title: "AI Dossier Highlights: Present the strongest reasons a candidate fits",
    blocks: [
      { kind: "paragraph", text: "A CV documents someone's career. It does not necessarily answer the question a client cares about most: why does this candidate fit this particular assignment?" },
      { kind: "paragraph", text: "A useful candidate presentation highlights relevant experience, professional strengths and the connection to the client's requirements rather than repeating every detail of the CV." },
      { kind: "paragraph", text: "That is the role of AI Dossier Highlights in plyce." },
      { kind: "heading", text: "Relevant experience, not another generic CV summary" },
      { kind: "paragraph", text: "The agent creates concise highlights based on a candidate's fit with the project, focusing on career stages, competencies and relevant achievements for the specific role." },
      { kind: "paragraph", text: "It can consider the industry and role context, helping recruiters prepare clear arguments for a client submission without rewriting the same information for every assignment." },
      { kind: "heading", text: "A reviewable basis for presenting candidates" },
      { kind: "paragraph", text: "The format, length and tone can be adapted to an agency's preferred style. AI prepares a draft that recruiters review and refine before using it externally." },
      { kind: "paragraph", text: "The result is a more focused and understandable candidate introduction. Final assessment and selection remain human decisions." }
    ] satisfies ArticleContentBlock[],
  },
};
