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
  },
  "ai-meeting-tracker": {
    "title": "#12 AI Meeting Tracker: Gespräche automatisch im CRM dokumentieren – ohne extra Klick",
    "publishedAt": "October 30, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Meetings sind im Recruiting oft eine der wichtigsten Informationsquellen überhaupt."
      },
      {
        "kind": "paragraph",
        "text": "Kundengespräche, Kandidateninterviews, Briefings, Feedback-Calls oder interne Abstimmungen enthalten genau die Informationen, die später im CRM gebraucht werden."
      },
      {
        "kind": "paragraph",
        "text": "Das Problem beginnt meistens direkt nach dem Termin."
      },
      {
        "kind": "paragraph",
        "text": "Notizen müssen übertragen werden, relevante Punkte werden aus dem Gedächtnis ergänzt und anschließend muss alles noch dem richtigen Kandidaten, Kontakt oder Projekt zugeordnet werden. Genau dabei gehen Informationen verloren oder landen gar nicht erst sauber im System."
      },
      {
        "kind": "paragraph",
        "text": "Hier setzt der AI Meeting Tracker – Agent #12 von plyce an."
      },
      {
        "kind": "heading",
        "text": "Das Meeting wird automatisch Teil des CRM"
      },
      {
        "kind": "paragraph",
        "text": "Wenn Meetings über Google Meet oder Microsoft Teams stattfinden, kann plyce vorhandene Notizen und Transkripte aus Google Drive beziehungsweise OneDrive erkennen und analysieren."
      },
      {
        "kind": "paragraph",
        "text": "Der Agent extrahiert daraus die relevanten Inhalte und Kernaussagen und ordnet das Meeting anschließend dem passenden Kandidaten oder Kontakt zu."
      },
      {
        "kind": "paragraph",
        "text": "Die Zusammenfassung wird direkt als Aktivität im jeweiligen Profil gespeichert."
      },
      {
        "kind": "paragraph",
        "text": "Der Recruiter muss also nicht nach jedem Call seine Notizen noch einmal in das CRM übertragen. Das Gespräch wird direkt dort dokumentiert, wo es später wieder gebraucht wird."
      },
      {
        "kind": "heading",
        "text": "Der eigentliche Vorteil ist der Kontext"
      },
      {
        "kind": "paragraph",
        "text": "Ein Transkript alleine ist noch kein CRM-Eintrag."
      },
      {
        "kind": "paragraph",
        "text": "Entscheidend ist, daraus die Informationen herauszufiltern, die für den weiteren Recruiting-Prozess relevant sind."
      },
      {
        "kind": "paragraph",
        "text": "Welche Erwartungen hat der Kunde? Welche Punkte wurden mit dem Kandidaten besprochen? Gibt es offene Fragen? Wurde ein nächster Schritt vereinbart?"
      },
      {
        "kind": "paragraph",
        "text": "Der AI Meeting Tracker bereitet diese Inhalte so auf, dass aus einem Gespräch eine nutzbare Aktivität im CRM entsteht."
      },
      {
        "kind": "paragraph",
        "text": "Das verbessert nicht nur die Dokumentation, sondern sorgt auch dafür, dass Kollegen später nachvollziehen können, was tatsächlich besprochen wurde."
      },
      {
        "kind": "heading",
        "text": "Weniger Nachbereitung, bessere Datenbasis"
      },
      {
        "kind": "paragraph",
        "text": "Für uns ist das wieder ein gutes Beispiel dafür, wo KI im CRM sinnvoll eingesetzt werden kann."
      },
      {
        "kind": "paragraph",
        "text": "Nicht als zusätzliches Tool neben dem eigentlichen Workflow, sondern dort, wo Informationen ohnehin entstehen."
      },
      {
        "kind": "paragraph",
        "text": "Das Meeting findet statt, die KI bereitet die relevanten Inhalte auf und plyce übernimmt sie in den passenden Datensatz."
      },
      {
        "kind": "paragraph",
        "text": "So reduziert sich die Nachbereitung und gleichzeitig wächst die Qualität der Daten im CRM."
      },
      {
        "kind": "paragraph",
        "text": "Der Prompt für die Analyse lässt sich individuell anpassen, sodass jede Personalberatung selbst definieren kann, welche Informationen aus ihren Meetings besonders relevant sind."
      },
      {
        "kind": "paragraph",
        "text": "Unser Ziel ist klar: Wichtige Informationen aus Gesprächen sollen nicht in Meeting-Notizen oder Transkripten verschwinden, sondern direkt Bestandteil des Recruiting-Prozesses werden."
      }
    ]
  },
  "ai-recorder": {
    "title": "#13 AI Recorder: Kleiner Helfer, richtig integriert, großer Nutzen",
    "publishedAt": "November 5, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sprache entwickelt sich zunehmend zu einer der natürlichsten Arten, mit Systemen zu arbeiten."
      },
      {
        "kind": "paragraph",
        "text": "Wir diktieren Nachrichten, sprechen mit Assistenten und nutzen Speech-to-Text längst selbstverständlich im Alltag. Für uns ist deshalb klar: Auch in einem modernen ATS & CRM sollte Sprache überall dort nutzbar sein, wo sie Klicks spart und Prozesse schneller macht."
      },
      {
        "kind": "paragraph",
        "text": "Genau dafür gibt es den AI Recorder – Agent #13 von plyce."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Recorder ist keine einzelne Speech-to-Text-Funktion irgendwo im System. Er ist an verschiedenen Stellen direkt in den Workflow integriert und versteht dabei den Kontext der Seite, auf der er gerade verwendet wird."
      },
      {
        "kind": "paragraph",
        "text": "Das heißt: Er transkribiert nicht einfach nur Gesprochenes, sondern kann den Output passend zum jeweiligen Anwendungsfall aufbereiten."
      },
      {
        "kind": "paragraph",
        "text": "Wenn ich beispielsweise gerade eine Aktivität bei einem Kandidaten erfasse, versteht der Recorder diesen Kontext und formuliert die Sprache entsprechend als nutzbare CRM-Aktivität."
      },
      {
        "kind": "paragraph",
        "text": "Das gleiche Prinzip nutzen wir an vielen weiteren Stellen in plyce: bei Recruiter-Kommentaren auf Frontsheets, beim Erstellen von Tasks oder überall dort, wo längere Texte oder Informationen sonst manuell eingetippt werden müssten."
      },
      {
        "kind": "paragraph",
        "text": "Der Gedanke dahinter ist simpel:"
      },
      {
        "kind": "paragraph",
        "text": "Warum mehrere Felder öffnen, klicken und tippen, wenn ich die Information auch einfach einsprechen kann?"
      },
      {
        "kind": "heading",
        "text": "Nicht nur Speech-to-Text"
      },
      {
        "kind": "paragraph",
        "text": "Der eigentliche Mehrwert entsteht durch die Kombination aus Sprache, KI und Kontext."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Recorder weiß, wo im System er gerade verwendet wird, und kann den gesprochenen Inhalt entsprechend strukturieren, kürzen oder sprachlich aufbereiten."
      },
      {
        "kind": "paragraph",
        "text": "Und wie bei unseren anderen AI Agents lässt sich auch dieses Verhalten je Agentur individuell einstellen."
      },
      {
        "kind": "paragraph",
        "text": "Über das Prompt Engineering im Admin-Bereich kann festgelegt werden, wie der Recorder formulieren soll, welche Informationen wichtig sind, wie ausführlich der Output sein soll und welche Tonalität verwendet wird."
      },
      {
        "kind": "paragraph",
        "text": "Damit passt sich der Agent an die Arbeitsweise der jeweiligen Personalberatung an und nicht umgekehrt."
      },
      {
        "kind": "heading",
        "text": "Kleine Helfer summieren sich"
      },
      {
        "kind": "paragraph",
        "text": "Der AI Recorder ist wahrscheinlich kein Feature, bei dem man sagt: Das verändert jetzt alleine die gesamte Recruiting-Branche."
      },
      {
        "kind": "paragraph",
        "text": "Aber genau das ist auch nicht der Punkt."
      },
      {
        "kind": "paragraph",
        "text": "Wenn ein Recruiter an zehn verschiedenen Stellen am Tag ein paar Klicks und ein paar Minuten spart, entsteht in Summe ein echter Produktivitätsgewinn."
      },
      {
        "kind": "paragraph",
        "text": "Und gleichzeitig steigt die Wahrscheinlichkeit, dass Informationen überhaupt sauber im CRM dokumentiert werden."
      },
      {
        "kind": "paragraph",
        "text": "Genau diese kleinen, gut integrierten Helfer sind für uns ein wichtiger Bestandteil von plyce."
      },
      {
        "kind": "paragraph",
        "text": "KI muss nicht immer spektakulär sein."
      },
      {
        "kind": "paragraph",
        "text": "Sie muss vor allem dort funktionieren, wo sie im Arbeitsalltag tatsächlich hilft."
      }
    ]
  },
  "ai-signature-parser": {
    "title": "#11 AI Signature Parser: Aus wenigen Informationen wird ein vollständiger CRM-Kontakt",
    "publishedAt": "October 14, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Kontakte sauber im CRM anzulegen klingt banal, ist im Alltag aber erstaunlich aufwendig."
      },
      {
        "kind": "paragraph",
        "text": "Vorname, Nachname, Titel, E-Mail-Adresse, Telefonnummer, zweite Telefonnummer, Fachabteilung, Zuordnung des Unternehmens, Ansprechpartner-Status – je vollständiger der Datensatz sein soll, desto mehr Felder müssen manuell befüllt werden."
      },
      {
        "kind": "paragraph",
        "text": "Genau hier setzt der AI Signature Parser – Agent #11 von plyce an."
      },
      {
        "kind": "paragraph",
        "text": "Der Agent verarbeitet im Grunde alle Informationen, die ihm zur Verfügung gestellt werden. Das kann nur eine E-Mail-Adresse sein oder eine komplette E-Mail-Signatur mit mehreren Informationsblöcken."
      },
      {
        "kind": "paragraph",
        "text": "Aus diesen Informationen erstellt plyce automatisch einen strukturierten Kontakt."
      },
      {
        "kind": "paragraph",
        "text": "Dabei werden relevante Daten erkannt, den passenden Feldern zugeordnet und der Kontakt direkt mit dem richtigen Unternehmen verknüpft. Zusätzlich kann der Agent den Kontakt nach Fachabteilung kategorisieren und einordnen, ob es sich um einen relevanten Ansprechpartner handelt."
      },
      {
        "kind": "paragraph",
        "text": "So werden aus unstrukturierten Informationen strukturierte CRM-Daten. Womit im Anschluss Beispielsweise unser integrierte Organigrammgenerator gefüttert werden kann."
      }
    ]
  }
};
