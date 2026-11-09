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
  },
  "ai-company-enricher": {
    "title": "AI Company Enricher: Wer legt Unternehmen heute noch manuell im CRM an?",
    "publishedAt": "October 7, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein vollständiger und sauber gepflegter Datenbestand im CRM ist für gutes Business Development enorm wichtig. Gerade bei Kundenunternehmen entscheidet die Qualität der Informationen darüber, wie schnell man sich ein Bild machen kann, wie gezielt die Ansprache ist und wie professionell der weitere Prozess läuft."
      },
      {
        "kind": "paragraph",
        "text": "Trotzdem werden Unternehmensdaten heute oft noch manuell recherchiert und eingetragen. Website öffnen, Branche verstehen, Mitarbeiterzahl suchen, Geschäftsmodell einordnen, Unternehmensbeschreibung formulieren und anschließend alles ins CRM übertragen. Für ein einzelnes Unternehmen ist das überschaubar. Bei vielen neuen Accounts summiert sich daraus aber schnell viel Recherche- und Admin-Aufwand."
      },
      {
        "kind": "paragraph",
        "text": "Genau diesen Prozess übernimmt in plyce der AI Company Enricher – Agent #10."
      },
      {
        "kind": "paragraph",
        "text": "Der Enricher braucht im Grunde nur die URL des Unternehmens. Von dort aus startet die Recherche automatisch. Er analysiert unter anderem die Unternehmenswebsite, sammelt öffentlich verfügbare Informationen und bereitet diese strukturiert für das CRM auf."
      },
      {
        "kind": "paragraph",
        "text": "Dabei kann er zum Beispiel erkennen, in welcher Branche ein Unternehmen tätig ist, wie groß es ungefähr ist, welches Geschäftsmodell dahintersteht und womit sich das Unternehmen konkret beschäftigt. Die gefundenen Informationen werden anschließend direkt den passenden Feldern im Unternehmensprofil zugeordnet."
      },
      {
        "kind": "paragraph",
        "text": "Der entscheidende Vorteil: Es entsteht nicht einfach nur eine Recherche-Zusammenfassung irgendwo außerhalb des Systems. Die Daten landen direkt dort, wo sie gebraucht werden – im CRM."
      },
      {
        "kind": "paragraph",
        "text": "Damit kann aus einer einfachen Unternehmens-URL mit wenigen Klicks ein deutlich vollständigeres Kundenprofil entstehen, ohne dass ein Recruiter oder Business Developer jede Information einzeln recherchieren und übertragen muss."
      },
      {
        "kind": "paragraph",
        "text": "Das spart nicht nur Zeit, sondern verbessert auch die Datenqualität. Gerade wenn mehrere Personen mit Kunden arbeiten, ist ein einheitlicher und strukturierter Informationsstand viel wertvoller als einzelne Notizen oder lose Rechercheergebnisse."
      },
      {
        "kind": "paragraph",
        "text": "Spannend wird es zusätzlich in Verbindung mit dem plyce MCP."
      },
      {
        "kind": "paragraph",
        "text": "Damit lässt sich der Enricher nicht nur manuell aus dem Unternehmensprofil heraus nutzen, sondern auch über eine angebundene KI ansteuern. So können beispielsweise wiederkehrende Automatisierungen aufgebaut werden, bei denen Unternehmensdaten regelmäßig geprüft, ergänzt oder angereichert werden."
      },
      {
        "kind": "paragraph",
        "text": "Aus klassischer CRM-Pflege wird damit ein deutlich automatisierterer Prozess."
      },
      {
        "kind": "paragraph",
        "text": "Der Recruiter oder Business Developer entscheidet weiterhin, welche Daten übernommen werden und wie sie genutzt werden. Die zeitaufwendige Recherche und Aufbereitung übernimmt im Hintergrund der Agent."
      },
      {
        "kind": "paragraph",
        "text": "Genau so stellen wir uns moderne CRM-Arbeit vor: weniger manuelle Dateneingabe, bessere Informationen und mehr Zeit für den eigentlichen Kundenkontakt."
      }
    ]
  },
  "ai-job-post-builder": {
    "title": "#9 AI Job Post Builder: Von den Projektdaten zur fertigen Stellenanzeige",
    "publishedAt": "September 29, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Mittlerweile nutzt vermutlich fast jeder Recruiter KI unterstützend bei der Erstellung von Stellenanzeigen. Der Mehrwert ist klar: Texte entstehen schneller, Anforderungen lassen sich besser strukturieren und aus einem internen Briefing wird deutlich einfacher eine veröffentlichbare Anzeige."
      },
      {
        "kind": "paragraph",
        "text": "Der eigentliche Aufwand liegt heute oft nicht mehr in der Texterstellung, sondern im Prozess drumherum. Projektdaten kopieren, externes KI-Tool öffnen, Prompt schreiben, Ergebnis übernehmen, zurück ins ATS, formatieren und veröffentlichen."
      },
      {
        "kind": "paragraph",
        "text": "Genau diesen Toolbruch beseitigt der AI Job Post Builder – Agent #9 von plyce."
      },
      {
        "kind": "paragraph",
        "text": "Die relevanten Informationen sind im Projekt bereits vorhanden. Rolle, Anforderungen, Standort und Rahmenbedingungen fließen direkt in die Generierung ein. Auch sensible Kundeninformationen können berücksichtigt und anonymisiert werden."
      },
      {
        "kind": "paragraph",
        "text": "Der Workflow ist bewusst einfach:"
      },
      {
        "kind": "paragraph",
        "text": "Stellenanzeige generieren. Prüfen. Veröffentlichen."
      },
      {
        "kind": "paragraph",
        "text": "Zwei Klicks, fertig."
      },
      {
        "kind": "paragraph",
        "text": "Der große Vorteil ist dabei nicht nur die KI selbst. Gute Stellenanzeigen können heute viele Modelle erzeugen. Entscheidend ist, dass die Funktion vollständig in den Recruiting-Workflow integriert ist und genau dort zur Verfügung steht, wo die Informationen bereits vorhanden sind."
      },
      {
        "kind": "paragraph",
        "text": "Kein zusätzliches Tool. Kein Copy & Paste. Keine doppelte Datenpflege."
      },
      {
        "kind": "paragraph",
        "text": "Gleichzeitig können Struktur, Tonalität und Aufbau so definiert werden, dass über das gesamte Team hinweg ein einheitlicher Qualitätsstandard entsteht."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Job Post Builder macht aus vorhandenen Projektdaten direkt eine publikationsreife Stellenanzeige."
      },
      {
        "kind": "paragraph",
        "text": "Genau so sollte KI im Recruiting funktionieren: nicht als zusätzliches Tool, sondern als integrierter Teil des Workflows."
      }
    ]
  },
  "ai-company-status-report": {
    "title": "#8 AI Company Status Report: Alle Kundenprojekte auf einen Blick",
    "publishedAt": "September 29, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Wenn ein Kunde mehrere Recruiting-Projekte gleichzeitig laufen hat, wird der Überblick schnell komplex."
      },
      {
        "kind": "paragraph",
        "text": "Ein Projekt ist noch in der Suche. Beim nächsten stehen Kandidaten im Interview. Bei einem dritten fehlt Feedback. Ein weiteres Mandat wurde gerade neu gestartet."
      },
      {
        "kind": "paragraph",
        "text": "Die Informationen dazu liegen oft verteilt über einzelne Projekte, Kandidatenprofile, Aktivitäten und Notizen."
      },
      {
        "kind": "paragraph",
        "text": "Genau hier setzt der AI Company Status Report – Agent #8 von plyce an."
      },
      {
        "kind": "heading",
        "text": "Eine zentrale Sicht auf den Kunden"
      },
      {
        "kind": "paragraph",
        "text": "Der Agent bündelt die relevanten Informationen aus allen laufenden Projekten eines Kunden."
      },
      {
        "kind": "paragraph",
        "text": "Dazu gehören:"
      },
      {
        "kind": "paragraph",
        "text": "Aktive Mandate. Kandidaten und aktuelle Stati. Interviews und Interviewhistorie. Offenes Feedback. Absagen und relevante Statusänderungen. Projektbezogene Kennzahlen."
      },
      {
        "kind": "paragraph",
        "text": "So entsteht eine zentrale Account-Sicht über mehrere Suchmandate hinweg."
      },
      {
        "kind": "heading",
        "text": "Bessere Vorbereitung auf Kundentermine"
      },
      {
        "kind": "paragraph",
        "text": "Gerade vor regelmäßigen Kundenupdates stellt sich oft die gleiche Frage:"
      },
      {
        "kind": "paragraph",
        "text": "Was läuft aktuell bei diesem Kunden?"
      },
      {
        "kind": "paragraph",
        "text": "Welche Projekte sind aktiv? Wo stehen die Kandidaten? Welche Interviews haben stattgefunden? Wo fehlt noch Feedback? Bei welchen Mandaten gibt es Verzögerungen?"
      },
      {
        "kind": "paragraph",
        "text": "Der AI Company Status Report bereitet diese Informationen automatisch auf."
      },
      {
        "kind": "paragraph",
        "text": "Statt mehrere Projekte einzeln zu öffnen, steht eine konsolidierte Übersicht direkt auf Kundenebene zur Verfügung."
      },
      {
        "kind": "heading",
        "text": "Einheitlicher Informationsstand im Team"
      },
      {
        "kind": "paragraph",
        "text": "Der Report ist nicht nur für Kundentermine relevant."
      },
      {
        "kind": "paragraph",
        "text": "Er schafft auch intern Transparenz."
      },
      {
        "kind": "paragraph",
        "text": "Wenn mehrere Recruiter oder Account Manager an einem Kunden arbeiten, entsteht schnell ein unterschiedlicher Informationsstand."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Company Status Report bringt die relevanten Informationen zusammen und schafft eine gemeinsame Grundlage für interne Abstimmungen."
      },
      {
        "kind": "heading",
        "text": "Direkt aus den vorhandenen Daten"
      },
      {
        "kind": "paragraph",
        "text": "Auch hier gilt:"
      },
      {
        "kind": "paragraph",
        "text": "Die Informationen müssen nicht doppelt gepflegt werden."
      },
      {
        "kind": "paragraph",
        "text": "Projektstatus, Kandidaten, Interviews, Aktivitäten und Feedback entstehen ohnehin im täglichen Recruiting-Prozess."
      },
      {
        "kind": "paragraph",
        "text": "Der Agent aggregiert diese Daten auf Kundenebene und macht daraus einen strukturierten Überblick."
      },
      {
        "kind": "paragraph",
        "text": "Weniger manuelles Zusammenkopieren. Mehr Transparenz über den Account. Bessere Vorbereitung auf Kundengespräche."
      },
      {
        "kind": "paragraph",
        "text": "So wird aus einzelnen Recruiting-Projekten ein klarer Blick auf die gesamte Kundenbeziehung."
      },
      {
        "kind": "paragraph",
        "text": "Genau dafür bauen wir plyce."
      }
    ]
  },
  "ai-cv-formatter": {
    "title": "Agent #5 – AI CV Formatter",
    "publishedAt": "August 5, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein guter Kandidat sollte nicht an einem schlecht aufbereiteten CV scheitern."
      },
      {
        "kind": "paragraph",
        "text": "In der Personalberatung geht es nicht nur darum, passende Kandidaten zu finden."
      },
      {
        "kind": "paragraph",
        "text": "Es geht auch darum, sie professionell, einheitlich und kundengerecht vorzustellen."
      },
      {
        "kind": "paragraph",
        "text": "Und genau hier entsteht oft unnötiger Aufwand."
      },
      {
        "kind": "paragraph",
        "text": "CVs kommen in unterschiedlichen Formaten. Berufsstationen sind uneinheitlich beschrieben. Ausbildung und Projekterfahrung sind nicht sauber strukturiert. Kandidateninformationen müssen anonymisiert werden. Unternehmensnamen oder Branchenangaben sollen entfernt werden. Profile müssen teilweise auf Deutsch oder Englisch vorbereitet werden."
      },
      {
        "kind": "paragraph",
        "text": "Das kostet Zeit."
      },
      {
        "kind": "paragraph",
        "text": "Vor allem dann, wenn mehrere Kandidaten für ein Mandat vorgestellt werden und alle Profile denselben Qualitätsstandard haben sollen."
      },
      {
        "kind": "paragraph",
        "text": "Genau hier setzt der AI CV Formatter – Agent #5 von plyce an."
      },
      {
        "kind": "paragraph",
        "text": "Der Agent unterstützt dabei, Lebensläufe in ein einheitliches, professionelles Format zu überführen."
      },
      {
        "kind": "paragraph",
        "text": "Dazu gehören:"
      },
      {
        "kind": "paragraph",
        "text": "Standardisierte Berufserfahrung. Strukturierte Ausbildung. Einheitliche Kandidatenvorstellungen. Anonymisierung von Kandidateninformationen. Anonymisierung von Unternehmen und Branchen. Übersetzung des CVs ins Deutsche oder Englische. Anreicherung von Berufsstationen. Schneller Übergang von Rohdaten zur versandfertigen Fassung."
      },
      {
        "kind": "paragraph",
        "text": "Der Vorteil:"
      },
      {
        "kind": "paragraph",
        "text": "Recruiter müssen nicht jedes Profil manuell neu formatieren."
      },
      {
        "kind": "paragraph",
        "text": "Sie können sich stärker auf die inhaltliche Bewertung konzentrieren:"
      },
      {
        "kind": "paragraph",
        "text": "Passt der Kandidat zum Mandat? Welche Erfahrung ist wirklich relevant? Wie sollte das Profil beim Kunden positioniert werden? Welche Argumente sprechen für die Vorstellung?"
      },
      {
        "kind": "paragraph",
        "text": "Der AI CV Formatter sorgt für mehr Geschwindigkeit, mehr Einheitlichkeit und einen professionellen Qualitätsstandard über alle Profile hinweg."
      },
      {
        "kind": "paragraph",
        "text": "Nicht als Ersatz für die finale Prüfung."
      },
      {
        "kind": "paragraph",
        "text": "Sondern als Unterstützung auf dem Weg vom Roh-CV zur sauberen Kandidatenvorstellung."
      },
      {
        "kind": "paragraph",
        "text": "Genau dafür bauen wir plyce."
      }
    ]
  },
  "ai-project-brief": {
    "title": "AI Project Brief – Agent #6: Vom Placement zum Vertragsentwurf",
    "publishedAt": "September 9, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Wenn ein Freelancer platziert wird, ist der wichtigste Teil im Recruiting geschafft."
      },
      {
        "kind": "paragraph",
        "text": "Aber operativ beginnt genau dann der nächste kritische Schritt:"
      },
      {
        "kind": "paragraph",
        "text": "Die Vertragsunterlagen müssen erstellt werden."
      },
      {
        "kind": "paragraph",
        "text": "Für den Kunden. Für den Freelancer. Mit den richtigen Konditionen. Mit der richtigen Laufzeit. Mit den richtigen Raten. Mit dem passenden Einsatzort. Mit sauberer Projektbeschreibung. Mit klar definiertem Scope. Und idealerweise ohne jedes Mal alles manuell aus verschiedenen Quellen zusammenzutragen."
      },
      {
        "kind": "paragraph",
        "text": "Genau hier entsteht in vielen Personalberatungen unnötiger Aufwand."
      },
      {
        "kind": "paragraph",
        "text": "Denn die relevanten Informationen sind meistens bereits vorhanden."
      },
      {
        "kind": "paragraph",
        "text": "Das Projekt ist angelegt. Der Kunde ist verknüpft. Der Kandidat beziehungsweise Freelancer ist verknüpft. Laufzeit, Auslastung, Einsatzort, Raten und Rahmenbedingungen sind im System dokumentiert."
      },
      {
        "kind": "paragraph",
        "text": "Trotzdem werden Vertragsdaten häufig noch manuell übertragen, geprüft, kopiert und in Vorlagen eingefügt."
      },
      {
        "kind": "paragraph",
        "text": "Das kostet Zeit. Es ist fehleranfällig. Und es bindet Ressourcen genau an der Stelle, an der Geschwindigkeit und Genauigkeit besonders wichtig sind."
      },
      {
        "kind": "heading",
        "text": "AI Project Brief – Agent #6"
      },
      {
        "kind": "paragraph",
        "text": "Der AI Project Brief von plyce aggregiert alle vertragsrelevanten Informationen aus Projekt, Kandidat und Kunde und erstellt daraus versandfertige Vertragsentwürfe für Freelance-Einsätze."
      },
      {
        "kind": "paragraph",
        "text": "Dazu gehören insbesondere:"
      },
      {
        "kind": "paragraph",
        "text": "Projekt-, Kandidaten- und Kundendaten. Laufzeit und Projektzeitraum. Auslastung und Einsatzmodell. Einsatzort und Remote-Anteil. Kundenrate und Beraterkonditionen. Projektbeschreibung und Scope. Rollenbeschreibung und Aufgaben. Compliance-relevante Hinweise und Formulierungen. Sprache Deutsch oder Englisch. Kundenspezifische Vertragsvorlagen."
      },
      {
        "kind": "paragraph",
        "text": "Der Agent erstellt auf dieser Basis wahlweise einen Projektvertrag für den Kunden und einen Beratervertrag für den Freelancer."
      },
      {
        "kind": "heading",
        "text": "Warum das im Freelance-Geschäft so wichtig ist"
      },
      {
        "kind": "paragraph",
        "text": "Im Freelance-Recruiting entscheidet nicht nur die Qualität des Matchings."
      },
      {
        "kind": "paragraph",
        "text": "Entscheidend ist auch, wie sauber und schnell der operative Prozess nach dem Placement läuft."
      },
      {
        "kind": "paragraph",
        "text": "Wenn Vertragsunterlagen manuell erstellt werden, entstehen typische Risiken:"
      },
      {
        "kind": "paragraph",
        "text": "Daten werden falsch übertragen. Raten werden verwechselt. Laufzeiten stimmen nicht exakt überein. Projektbeschreibungen sind uneinheitlich. Scope und Aufgaben bleiben zu unscharf. Kundenindividuelle Vorlagen werden nicht sauber berücksichtigt. Compliance-relevante Punkte werden zu spät geprüft."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Project Brief reduziert genau diese Reibung."
      },
      {
        "kind": "paragraph",
        "text": "Nicht, indem er den Menschen aus dem Prozess nimmt."
      },
      {
        "kind": "paragraph",
        "text": "Sondern indem er die vorhandenen Informationen strukturiert zusammenführt und daraus einen prüfbaren, professionellen Vertragsentwurf vorbereitet."
      },
      {
        "kind": "heading",
        "text": "Vertragsvorlagen bleiben kundenspezifisch"
      },
      {
        "kind": "paragraph",
        "text": "Ein wichtiger Punkt:"
      },
      {
        "kind": "paragraph",
        "text": "Jede Personalberatung und jeder Kunde arbeitet mit eigenen Vertragsstandards."
      },
      {
        "kind": "paragraph",
        "text": "Deshalb geht es nicht darum, generische Verträge aus dem Nichts zu erzeugen."
      },
      {
        "kind": "paragraph",
        "text": "In plyce können kundenspezifische Vertragsvorlagen hinterlegt werden."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Project Brief nutzt diese Vorlagen und befüllt sie mit den passenden Informationen aus dem Projekt, dem Kundenprofil und dem Freelancer-Profil."
      },
      {
        "kind": "paragraph",
        "text": "So entsteht ein Vertragsentwurf, der zur eigenen Struktur, zum eigenen Prozess und zu den individuellen Kundenanforderungen passt."
      },
      {
        "kind": "heading",
        "text": "Mehr als nur Stammdaten"
      },
      {
        "kind": "paragraph",
        "text": "Der Agent berücksichtigt nicht nur Rahmendaten und Konditionen."
      },
      {
        "kind": "paragraph",
        "text": "Er unterstützt auch bei der Formulierung einer passenden Project Description und eines klaren Project Scope."
      },
      {
        "kind": "paragraph",
        "text": "Gerade im Freelance-Umfeld ist das wichtig."
      },
      {
        "kind": "paragraph",
        "text": "Denn eine gute Projektbeschreibung sollte nicht nur formal korrekt sein, sondern auch fachlich nachvollziehbar und compliance-sensibel formuliert werden."
      },
      {
        "kind": "paragraph",
        "text": "Dazu gehören unter anderem klare Aufgabenbeschreibungen, projektbezogene Zielsetzungen und eine saubere Abgrenzung der Tätigkeit."
      },
      {
        "kind": "paragraph",
        "text": "Auch Themen wie Scheinselbstständigkeit und weitere compliance-relevante Aspekte müssen im Prozess mitgedacht werden."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Project Brief hilft dabei, diese Punkte frühzeitig strukturiert zu berücksichtigen."
      },
      {
        "kind": "heading",
        "text": "Das Ziel"
      },
      {
        "kind": "paragraph",
        "text": "Der Anspruch ist nicht, Vertragsprüfung oder rechtliche Verantwortung vollständig zu ersetzen."
      },
      {
        "kind": "paragraph",
        "text": "Der Anspruch ist, den Weg vom Placement zum Vertragsentwurf deutlich effizienter, strukturierter und sicherer zu machen."
      },
      {
        "kind": "paragraph",
        "text": "Für Personalberatungen bedeutet das:"
      },
      {
        "kind": "paragraph",
        "text": "Weniger manuelles Kopieren. Weniger Fehlerquellen. Schnellere Vertragserstellung. Einheitlichere Vertragsqualität. Bessere Nutzung vorhandener Projektdaten. Mehr Sicherheit im operativen Freelance-Prozess."
      },
      {
        "kind": "paragraph",
        "text": "Der Recruiter oder die verantwortliche Fachperson prüft den Entwurf final."
      },
      {
        "kind": "paragraph",
        "text": "Aber die Vorarbeit entsteht automatisch aus den Informationen, die ohnehin bereits in plyce vorhanden sind."
      },
      {
        "kind": "heading",
        "text": "Vom Recruiting-System zum operativen Workflow-System"
      },
      {
        "kind": "paragraph",
        "text": "Genau das ist der Unterschied zwischen klassischer Verwaltung und moderner Recruiting-Software."
      },
      {
        "kind": "paragraph",
        "text": "Ein ATS oder CRM sollte nicht nur Daten speichern."
      },
      {
        "kind": "paragraph",
        "text": "Es sollte aus vorhandenen Daten operative Arbeitsschritte vorbereiten."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Project Brief ist dafür ein gutes Beispiel:"
      },
      {
        "kind": "paragraph",
        "text": "Aus Projekt, Kunde und Freelancer wird nicht nur ein Datensatz."
      },
      {
        "kind": "paragraph",
        "text": "Es entsteht ein konkreter nächster Arbeitsschritt."
      },
      {
        "kind": "paragraph",
        "text": "Ein prüfbarer Vertragsentwurf."
      },
      {
        "kind": "paragraph",
        "text": "Für den Kunden. Für den Freelancer. Auf Deutsch oder Englisch. Auf Basis der passenden Vorlage. Mit den relevanten Konditionen und Projektinformationen."
      },
      {
        "kind": "paragraph",
        "text": "So wird aus einem Placement schneller ein sauber gestarteter Freelance-Einsatz."
      },
      {
        "kind": "paragraph",
        "text": "Genau dafür bauen wir plyce."
      }
    ]
  },
  "ai-project-report": {
    "title": "#7 AI Project Report: Vom Recruiting-Prozess zum strukturierten Kundenupdate",
    "publishedAt": "September 24, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein laufendes Recruiting-Projekt produziert ständig neue Informationen: Kandidaten werden geprüft, Interviews geführt, Status geändert, Feedback dokumentiert und Absagen ausgesprochen."
      },
      {
        "kind": "paragraph",
        "text": "Spätestens vor dem nächsten Kundencall beginnt häufig das Zusammensuchen dieser Informationen aus ATS, E-Mails, Gesprächsnotizen und Kandidatenprofilen."
      },
      {
        "kind": "paragraph",
        "text": "Genau hier setzt der AI Project Report – Agent #7 von plyce an."
      },
      {
        "kind": "heading",
        "text": "Alle Projektinformationen auf einen Blick"
      },
      {
        "kind": "paragraph",
        "text": "Der Agent erstellt aus den vorhandenen Projektdaten automatisch einen strukturierten Report mit:"
      },
      {
        "kind": "paragraph",
        "text": "Kandidaten und aktuellen Stati. Interviews und Interviewterminen. Feedback und Statusänderungen. Absagen und Absagegründen. Projektbezogenen Kennzahlen."
      },
      {
        "kind": "paragraph",
        "text": "So entsteht ein aktueller Überblick über das gesamte Mandat, ohne Informationen manuell zusammenkopieren zu müssen."
      },
      {
        "kind": "heading",
        "text": "Eine bessere Grundlage für Kundenupdates"
      },
      {
        "kind": "paragraph",
        "text": "Was ist seit dem letzten Gespräch passiert? Wer wurde vorgestellt? Wer befindet sich im Interview? Wo fehlt Feedback? Warum sind Kandidaten ausgeschieden?"
      },
      {
        "kind": "paragraph",
        "text": "Der AI Project Report bereitet diese Informationen direkt aus dem laufenden Recruiting-Prozess auf."
      },
      {
        "kind": "paragraph",
        "text": "Zusätzlich werden projektbezogene KPIs sichtbar. So lässt sich beispielsweise erkennen, wie viele Kandidaten geprüft und vorgestellt wurden, wie sich die Pipeline entwickelt und an welchen Stellen Kandidaten aus dem Prozess ausscheiden."
      },
      {
        "kind": "paragraph",
        "text": "Dadurch wird aus einem Statusbericht eine fundierte Gesprächsgrundlage für den Kunden."
      },
      {
        "kind": "heading",
        "text": "Direkt aus dem Projekt in plyce"
      },
      {
        "kind": "paragraph",
        "text": "Der entscheidende Punkt: Die Informationen müssen nicht zusätzlich gepflegt werden."
      },
      {
        "kind": "paragraph",
        "text": "Kandidatenstatus, Interviews, Feedback, Aktivitäten und Absagegründe entstehen ohnehin während der täglichen Arbeit in plyce."
      },
      {
        "kind": "paragraph",
        "text": "Der AI Project Report aggregiert diese Daten und macht daraus einen strukturierten, aktuellen Projektüberblick."
      },
      {
        "kind": "paragraph",
        "text": "Weniger Reporting-Aufwand. Mehr Transparenz. Bessere Kundenupdates."
      },
      {
        "kind": "paragraph",
        "text": "Statt vor jedem Kundencall Informationen zusammenzusuchen, steht die Gesprächsgrundlage direkt im Projekt zur Verfügung."
      },
      {
        "kind": "paragraph",
        "text": "Genau dafür bauen wir plyce."
      }
    ]
  }
};
