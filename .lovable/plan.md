## Überarbeitung `/migration`

Alle Änderungen in `src/pages/MigrationPage.tsx`. Keine „Empfohlen"-Badges mehr, drei Varianten inhaltlich neu.

### Variante 1 – Quickstart / Migration nachgezogen
- **Name:** „Quickstart"
- **Tagline:** „Sofort starten, Daten optional später nachziehen."
- **Komplexität:** Niedrig
- **Dauer:** System in 48 Stunden nach Vertragsunterzeichnung
- **Best for:** Teams, die sofort mit einer sauberen Umgebung starten und Altdaten erst später (oder gar nicht) übernehmen wollen.
- **Ablauf:**
  1. Vertragsunterzeichnung (Tag 0)
  2. Systembereitstellung innerhalb von 48 Stunden inklusive Checkliste
  3. Kick-off Call zur Abstimmung von Konfiguration, Setup und Onboarding
  4. Konfiguration, Setup und Onboarding wie im Standardprozess
  5. Produktiver Start mit sauberer, leerer Umgebung (Clean-Start)
  6. Optionale Datenmigration zu einem späteren Zeitpunkt, falls Altdaten übernommen werden sollen
  7. Regulärer Support nach Hypercare

### Variante 2 – Soft Migration
- **Name:** „Soft Migration"
- **Tagline:** „Onboarding und Migration gemeinsam vorbereitet, Backup zum vereinbarten Zeitpunkt."
- **Komplexität:** Mittel
- **Dauer:** mehrere Wochen, Backup-Einspielung innerhalb einer Woche nach vereinbartem Termin
- **Best for:** Teams, die vorhandene Daten strukturiert übernehmen wollen und Onboarding parallel zur Migrationsvorbereitung durchlaufen.
- **Ablauf:**
  1. Vertrag & Kick-off
  2. Gemeinsames Onboarding und Setup (Pipelines, Rollen, Rechte, Schnittstellen)
  3. Vereinbarung eines konkreten Zeitpunkts für die Backup-Einspielung
  4. Bereitstellung des Backups durch den Kunden
  5. Einspielen der Daten innerhalb einer Woche nach Bereitstellung
  6. Go-Live mit migriertem Datenbestand, anschließend Hypercare & regulärer Support

### Variante 3 – Enterprise Migration
- **Name:** „Enterprise Migration"
- **Tagline:** „Zwei-Schritt-Migration mit Probelauf und geplantem Switch."
- **Komplexität:** Hoch
- **Dauer:** mehrere Wochen mit Vorlauf, finaler Switch an einem Tag
- **Best for:** Größere Organisationen mit umfangreichen Datenbeständen, mehreren Quellsystemen oder hohen Compliance-Anforderungen.
- **Ablauf (zwei Schritte hervorheben):**
  1. Vertrag & Kick-off, Migrationsstrategie
  2. Konfiguration & Einrichtung
  3. Backup des Bestandssystems (≥ 2 Wochen vor dem finalen Switch)
  4. **Schritt 1 – Probemigration:** Testlauf zur Validierung von Datenqualität, Mappings und Edge Cases
  5. Auswertung, Korrekturen, Freigabe
  6. **Schritt 2 – Produktive Migration am Stichtag X:** dank Testlauf an einem Tag durchführbar, Switch von Alt- auf Neusystem für alle Nutzer
  7. Go-Live mit erweiterter Hypercare, danach regulärer Support

### Weitere Anpassungen
- „Empfohlen"-Badge und `highlight`-Styling komplett entfernen; alle drei Karten identisch gestaltet.
- Komplexitäts-Indikator und Timing-Chips bleiben bestehen.
- Reihenfolge: Quickstart → Soft Migration → Enterprise Migration.
- Icons pro Schritt sinnvoll aus dem bestehenden Lucide-Set (`FileSignature`, `Rocket`, `PhoneCall`, `Settings2`, `Database`, `ShieldCheck`, `HardDriveDownload`, `GitMerge`, `LifeBuoy`, `CheckCircle2`).

Kein weiterer Datei-Change nötig (Route, SEO, Navigation bleiben wie sie sind – Seite ist weiterhin noindex).