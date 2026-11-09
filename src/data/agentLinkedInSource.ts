export type ArticleContentBlock = { kind: "heading" | "paragraph" | "listItem"; text: string };
export type AgentLinkedInSource = { title: string; publishedAt: string; blocks: ArticleContentBlock[] };
export const agentLinkedInSource: Record<string, AgentLinkedInSource> = {
  "ai-summary": {
    "title": "#14 AI Summary: Hunderte Aktivitäten. Ein kompakter Überblick.",
    "publishedAt": "2026-11-09",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Je länger eine Kundenbeziehung, ein Kandidatenprofil oder ein Recruiting-Projekt besteht, desto mehr Informationen sammeln sich im CRM an."
      },
      {
        "kind": "paragraph",
        "text": "E-Mails, Telefonate, Kommentare, Gesprächsnotizen, Interviews und Statusänderungen. Gerade bei langjährigen Kunden oder Kandidaten können schnell hunderte Einträge zusammenkommen."
      },
      {
        "kind": "paragraph",
        "text": "Wer sich einen Überblick verschaffen möchte, muss sich normalerweise erst einmal durch diese Historie arbeiten. Besonders dann, wenn man einen Kunden übernimmt, einen Kandidaten nach längerer Zeit wieder kontaktiert oder sich kurzfristig auf ein Gespräch vorbereiten muss."
      },
      {
        "kind": "paragraph",
        "text": "Genau dafür gibt es den AI Summary – Agent #14 von plyce."
      },
      {
        "kind": "heading",
        "text": "Die gesamte Historie auf wenige Zeilen reduziert"
      },
      {
        "kind": "paragraph",
        "text": "Der Agent aggregiert die vorhandenen Informationen und erstellt daraus eine kompakte Zusammenfassung der bisherigen Historie."
      },
      {
        "kind": "paragraph",
        "text": "Das funktioniert auf unterschiedlichen Ebenen: bei Kandidaten, Kundenkontakten, Unternehmen und Projekten. Dabei werden Aktivitäten, E-Mails, Kommentare, Gesprächsnotizen und weitere historische Informationen berücksichtigt."
      },
      {
        "kind": "paragraph",
        "text": "Statt hunderte Einträge einzeln durchzugehen, erhält der Recruiter eine verdichtete Übersicht darüber, was bisher passiert ist und welche Informationen für den aktuellen Kontext relevant sind."
      },
      {
        "kind": "heading",
        "text": "Kontext, ohne die gesamte Historie lesen zu müssen"
      },
      {
        "kind": "paragraph",
        "text": "Besonders hilfreich ist das beispielsweise bei der Übernahme eines bestehenden Kundenaccounts. Statt sich zunächst durch die gesamte Kommunikation der vergangenen Monate zu arbeiten, lässt sich die bisherige Zusammenarbeit schnell nachvollziehen."
      },
      {
        "kind": "paragraph",
        "text": "Dasselbe gilt für Kandidaten, mit denen man vielleicht vor einem Jahr zuletzt gesprochen hat, oder für Projekte mit einer langen und umfangreichen Prozesshistorie."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Summary Agent macht vorhandene Informationen schneller zugänglich und reduziert den Aufwand, sich immer wieder neu in bestehende Datensätze einzuarbeiten."
      },
      {
        "kind": "paragraph",
        "text": "Für uns ist das ein weiterer kleiner, aber sehr nützlicher Baustein: Je mehr Informationen im CRM entstehen, desto wichtiger wird es, diese auch effizient wieder nutzbar zu machen."
      },
      {
        "kind": "paragraph",
        "text": "Nicht jede Information muss manuell gesucht und gelesen werden. Manchmal reicht eine gute Zusammenfassung, um sofort wieder im Thema zu sein."
      }
    ]
  }
};
