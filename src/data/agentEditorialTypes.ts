export type EditorialSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type EditorialWorkflow = { heading: string; context: string; steps: string[]; outcome: string };
export type EditorialFaq = { question: string; answer: string };
export type EditorialLocale = {
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  sections: EditorialSection[];
  workflow: EditorialWorkflow;
  faqs: EditorialFaq[];
};
export type AgentEditorial = { de: EditorialLocale; en: EditorialLocale; related: string[] };
