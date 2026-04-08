

# Pricing-Seite komplett überarbeiten

## Änderungen im Überblick

### 1. Trust-Points (oberer Bereich)
- Punkt 2 ändern: "Keine versteckten Zusatzkosten — ein Produkt, ein Preis, volle Transparenz."
- Neuen Punkt 5 hinzufügen: "Alle Features und AI-Agenten sind im Produkt inkludiert — ohne Aufpreis."

### 2. Market-Entry-Banner
- 30 % → **20 %** Rabatt
- Beschreibungstext: "20 % Rabatt in 2026 auf Nutzergebühren, Onboarding, Setup und Datenmigration."

### 3. Preise-Sektion
- Rabatt-Faktor von `0.7` auf `0.8` ändern, Text überall auf "20 %" anpassen
- Beschreibungstext unter "Preise" anpassen auf "20 % auf alles"

### 4. Pricing-Karten: Von 3 Karten → 1 zentrale Karte
Die drei Karten (Einstieg / Wachstum / Pro) werden ersetzt durch **eine einzige, prominente Karte** (zentriert, max-width, mit primary-Border wie bisher "Beliebteste Wahl"):

**Inhalt der Karte:**
- Listenpreis: **125 €** / Nutzer / Monat
- Rabattpreis: **100 €** (125 × 0.8) mit durchgestrichenem Listenpreis und "20 % Rabatt in 2026"
- Bulletpoints mit CheckCircle-Icons:
  1. "Komplettes Produkt — ATS & CRM in einer Plattform"
  2. "Alle Features inklusive" → Link zu `/features`
  3. "Alle AI-Agenten inklusive" → Link zu `/ai-agents`
  4. "Nutzer jederzeit flexibel hinzufügen oder reduzieren"
  5. "Monatsgenaue Abrechnung — nur aktive Nutzer zahlen"
  6. "Mindestlaufzeit: 12 Monate"
- Trennlinie, dann Zusatz-Infos:
  - "Flexible Datenmigration nach Absprache möglich"
  - "Individuelles Customizing nach Absprache möglich"

### 5. Technische Umsetzung
- Alles in **einer Datei**: `src/pages/Pricing3fRsPage.tsx`
- Nicht mehr benötigte Konstanten entfernen (`launchFeatures`, `scaleExtra`, `scaleSetupIncludes`, `proExtra`)
- `OFF_2026_FACTOR` auf `0.8` setzen
- Grid von `lg:grid-cols-3` auf zentrierte Einzelkarte (`max-w-lg mx-auto`) ändern
- Links als React Router `<Link>` zu `/features` und `/ai-agents`

