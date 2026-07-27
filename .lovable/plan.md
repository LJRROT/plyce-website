## Änderungen auf `/migration`

### 1. Varianten als klickbare Tabs
- Die drei Vergleichs-Cards (Quickstart, Soft Migration, Enterprise Migration) werden interaktive Buttons.
- State `selectedVariant` (Default: `quickstart`).
- Aktive Card: farblich hervorgehoben (Border in `primary`, dezenter `bg-primary-light`, stärkerer Ring). Inaktive Cards behalten neutrale Optik.
- Unterhalb wird nur noch der Ablauf der aktiven Variante angezeigt (die anderen Timeline-Blöcke werden ausgeblendet).
- Cards behalten Tastatur-Fokus (als `<button>` gerendert, `aria-pressed`).

### 2. Wording: „der Kunde" → direkte Ansprache
Der Text richtet sich an den Leser (= Kunde). Vorschlag: durchgehend direkte Ansprache in der Sie-Form, konsistent zum restlichen Wording der Seite.

Konkrete Ersetzungen:
- Soft Migration, Schritt „Onboarding & Setup": „…werden gemeinsam mit dem Kunden aufgesetzt…" → „…richten wir gemeinsam mit Ihnen ein…"
- Soft Migration, Schritt „Bereitstellung des Backups": „Der Kunde stellt das Backup…" → „Sie stellen das Backup Ihres Bestandssystems zum vereinbarten Termin unverschlüsselt und zugänglich bereit."
- Enterprise Migration, Schritt „Konfiguration & Einrichtung": „…gemeinsam mit dem Kunden vollständig konfiguriert…" → „…richten wir gemeinsam mit Ihnen vollständig ein…"

(Restliche Copy bleibt unverändert.)

### 3. Doppeltes „Schritt"-Wording in Variante 3
Enterprise hat oberhalb bereits die Meta-Zeile „Schritt 1", „Schritt 2" … und zusätzlich enthalten Titel 4 und 6 nochmal „Schritt 1 – Probemigration" bzw. „Schritt 2 – Produktive Migration am Stichtag X". Die `timing`-Badges wiederholen das ebenfalls.

Vorschlag – „Schritt" aus Titeln und Badges entfernen, Phasen-Wording nutzen:
- Titel „Schritt 1 – Probemigration" → „Probemigration (Testlauf)", Badge `timing`: „Testlauf"
- Titel „Schritt 2 – Produktive Migration am Stichtag X" → „Produktive Migration am Stichtag X", Badge `timing`: „Stichtag X"

Damit bleibt die Zwei-Schritt-Logik durch die Ablauf-Nummerierung oben klar erkennbar, ohne Dopplung.

### Technische Details
- Datei: `src/pages/MigrationPage.tsx`.
- `useState` für aktive Variante hinzufügen, Cards als `<button>` mit Klick-Handler, konditionales Rendering der Timeline-Section (nur aktive Variante).
- Keine neuen Abhängigkeiten.
