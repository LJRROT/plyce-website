

## Analyse: Update-Log vs. Webseite

Ich habe alle ~30 Features aus deinen Update-Logs gegen `src/data/featuresTiles.ts` (Features-Seite) und `src/pages/AIAgentsPage.tsx` abgeglichen.

### Bereits vorhanden (kein Handlungsbedarf)
Kandidaten-Matching (Tile "Kandidaten Matching"), Avatar-Extraktion, VoIP/Caller Lookup ("Telefon Integration"), DSGVO-Einwilligung, Multimail, Posteingang Sync, Mail Automationen, Duplikat-Erkennung (3x), Multi-CV Upload, KI Enrichment ("Kandidaten Enrichment"), Bulk Tagging, Boolean Suche, Dossier Generierung, Projekt Reports, Unternehmensreports ("Status-Report Unternehmen"), SEO/Open-Graph Jobs, KI Job Erstellung.

### FEHLT auf der Webseite — wird ergaenzt

**Features-Seite (`src/data/featuresTiles.ts`) — 11 neue Tiles:**

| # | Section | Icon | Title | Tagline | Bullets |
|---|---|---|---|---|---|
| 1 | email | `MessageSquare` (oder `Smartphone`) | WhatsApp Versand | Direkte WhatsApp-Nachrichten aus dem Kandidatenprofil | Vorlagen mit Variablen / Personalisierte Ansprache / Oeffnung in WhatsApp Web |
| 2 | kandidaten | `ScanLine` | OCR fuer Bild-PDFs | Eingescannte Lebenslaeufe zuverlaessig verarbeiten | Automatische Texterkennung / Auch fotografierte CVs / Strukturierte Uebernahme |
| 3 | kandidaten | `RefreshCw` | Nachtraegliche CV-Analyse | Bestehende Profile erneut analysieren | Nur leere Felder werden ergaenzt / Skills intelligent erweitert / Bestehende Daten bleiben |
| 4 | kandidaten | `SplitSquareHorizontal` | Lebenslauf neben Dossier | CV und Dossier-Editor parallel im Blick | Direkte Inhaltsuebernahme / Kein Tab-Wechsel / Schnellere Dossier-Erstellung |
| 5 | kandidaten | `Link2` | Direkte Projektzuweisung beim Upload | Kandidat und Bewerbung in einem Schritt anlegen | Projektauswahl beim Upload / Bewerbung wird automatisch erstellt / Saubere Zuordnung |
| 6 | projekte | `MessagesSquare` | Strukturiertes Bewerber-Feedback | Feedback direkt am Bewerbungsprozess erfassen | Strukturierte Felder statt Freitext / Zentral verfuegbar / Auswertbar |
| 7 | projekte | `Pin` | Angepinnte Aktivitaeten | Wichtige Aktivitaeten oben halten | Pin-Funktion je Aktivitaet / Schneller Zugriff / Klare Priorisierung |
| 8 | projekte | `CalendarClock` | Aktivitaetstyp Meeting | Meetings mit Datum und Uhrzeit erfassen | Eigener Aktivitaetstyp / Datums- und Uhrzeit-Picker / Bei Kandidaten und Kontakten |
| 9 | analytics | `TrendingUp` | Pipeline Snapshots | Pipeline-Entwicklung im Zeitverlauf | Snapshots pro Recruiter / Tendenz-Analyse / Historische Daten |
| 10 | admin | `Columns3` | Individuelle Spalten | Spaltenkonfiguration pro Nutzer | Pro User gespeichert / Listen individuell anpassbar / Konsistent ueber alle Bereiche |
| 11 | admin | `LifeBuoy` | Helpdesk im Profil | Direkter Support-Zugang aus dem Profil | Jederzeit erreichbar / Im Profil integriert / Schnelle Hilfe |

Zusaetzlich werde ich diese bestehenden Tiles leicht ergaenzen (Bullet-Update, kein neues Tile):
- "Mail Automationen": neue UI erwaehnen — Bullet anpassen auf "Uebersichtliche neue UI"
- Bestehender E-Mail-Editor — neuer Rich-Text-Editor — Tile "E-Mail Versand" Bullets anpassen
- "Telefon Integration" Tagline klarer auf VoIP-Lookup-URL formulieren

### AI Agents-Seite (`src/pages/AIAgentsPage.tsx`)

**Neuer Agent #11 — AI Meeting Tracker (BETA):**

```
id: "ai-meeting-tracker"
icon: Video (lucide-react)
name: "AI Meeting Tracker"
tagline: "Meetings aus Google Meet und Microsoft Teams werden automatisch
          erkannt, analysiert und dem richtigen Kandidaten oder Kontakt zugeordnet (BETA)"
capabilities:
  - Automatische Erkennung von Notizen und Transkripten in Google Drive und OneDrive
  - KI-Analyse extrahiert relevante Inhalte und Kernaussagen
  - Automatische Zuordnung zum passenden Kandidaten oder Kontakt
  - Speicherung als Aktivitaet inklusive Zusammenfassung im Profil
  - Drive- oder OneDrive-Verbindung im Nutzerprofil
  - Prompt im Bereich Prompt Engineering anpassbar
```
Der Agent wird am Ende der `agents`-Liste eingefuegt. Da `agents.length` dynamisch in der H1 steht ("11 AI Agents erledigen den Rest"), aktualisiert sich die Headline automatisch. Ein dezentes "BETA"-Label wird neben dem Namen ergaenzt (analog zur bestehenden "Agent #N"-Pille, in einer zweiten Pille).

### Geaenderte Dateien
- `src/data/featuresTiles.ts` — 11 neue Tiles in den passenden Sections, neue Lucide-Icons importieren
- `src/pages/AIAgentsPage.tsx` — neuer Agent-Eintrag + Beta-Pille im Markup

### Formulierungsregel
Alle Tiles folgen dem bestehenden Schema (Tagline = ein Satz, 3 kurze Bullets, Tonalitaet wie Memory `style/content-tone`: keine Marketing-Floskeln, ganze Aussagen mit Punkt). Die AI-Agent-Capabilities sind volle Saetze ohne Aufzaehlungslogik.

