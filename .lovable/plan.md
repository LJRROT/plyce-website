

## Analyse: Zwei Probleme gefunden

### Problem 1: Vercel-Funktion crasht (500 FUNCTION_INVOCATION_FAILED)

Ich habe `https://www.plyce.app/api/send-demo-request` direkt im Browser aufgerufen. Ergebnis:

> **500: INTERNAL_SERVER_ERROR** — Code: FUNCTION_INVOCATION_FAILED

Die Serverless Function stuerzt ab, bevor sie ueberhaupt antwortet. Dadurch werden auch keine CORS-Header gesendet, und der Browser meldet "Failed to fetch" statt eine nuetzliche Fehlermeldung.

**Wahrscheinliche Ursache:** Vercel kann den TypeScript-Code nicht korrekt kompilieren oder ausfuehren. Die Datei `api/send-demo-request.ts` importiert aus `../server/sendDemoViaResend` — dieser relative Import kann bei Vercels Bundler Probleme machen. Ausserdem fehlt eine `vercel.json` mit expliziter Node.js-Version.

### Problem 2: Resend Sandbox-Modus

Du nutzt `onboarding@resend.dev` als Absender. Im Sandbox-Modus gilt:
- **Absender** muss `onboarding@resend.dev` sein
- **Empfaenger** darf **nur** die E-Mail-Adresse sein, mit der du dich bei Resend registriert hast
- An andere Adressen (z.B. `mail@plyce.app`) wird NICHT zugestellt

Solange deine Domain nicht in Resend verifiziert ist, funktioniert der Versand nur an dich selbst.

---

## Plan: Schritt fuer Schritt zur funktionierenden Demo-Anfrage

### Schritt 1: `vercel.json` erstellen

Eine Konfigurationsdatei im Projekt-Root, die Vercel mitteilt, welche Node.js-Version und welche Einstellungen genutzt werden sollen. Das verhindert Laufzeitfehler.

### Schritt 2: API-Route robuster machen

Die Datei `api/send-demo-request.ts` wird vereinfacht: Statt aus einer separaten Datei zu importieren, wird die gesamte Logik (Validierung + Resend-Aufruf) direkt in die eine Datei geschrieben. Das eliminiert den problematischen `../server/`-Import und macht die Funktion eigenstaendig. Zusaetzlich wird ein aeusserer try/catch ergaenzt, damit bei einem Crash trotzdem CORS-Header und eine lesbare Fehlermeldung zurueckkommen.

### Schritt 3: Resend-Domain verifizieren (von dir manuell)

Du musst in deinem Resend-Dashboard die Domain `plyce.app` verifizieren:
1. Gehe zu resend.com > Domains > Add Domain
2. Trage `plyce.app` ein
3. Resend zeigt dir DNS-Records (MX, TXT/SPF, DKIM) — diese traegst du bei deinem Domain-Provider ein
4. Warte auf Verifizierung (meist Minuten, max 48h)

Erst danach kannst du E-Mails von z.B. `noreply@plyce.app` an beliebige Empfaenger senden.

### Schritt 4: Vercel Environment Variables pruefen

Stelle sicher, dass in deinem Vercel-Dashboard unter Settings > Environment Variables diese drei Werte korrekt gesetzt sind:

| Variable | Wert (Beispiel) |
|---|---|
| `RESEND_API_KEY` | `re_...` (dein API Key aus Resend) |
| `RESEND_FROM_EMAIL` | Vor Domain-Verifizierung: `onboarding@resend.dev` / Danach: `plyce <noreply@plyce.app>` |
| `DEMO_REQUEST_TO_EMAIL` | Vor Domain-Verifizierung: **deine Resend-Account-E-Mail** / Danach: beliebige Adresse |

**Wichtig:** Nach dem Aendern der Vars in Vercel musst du ein **Redeployment** ausloesen (Redeploy-Button im Vercel-Dashboard).

### Schritt 5: Testen

Nach dem Deployment und der Domain-Verifizierung den Button erneut testen.

---

## Technische Details (was im Code geaendert wird)

### Neue Datei: `vercel.json`
```json
{
  "functions": {
    "api/**/*.ts": {
      "runtime": "@vercel/node@3"
    }
  }
}
```

### Geaenderte Datei: `api/send-demo-request.ts`
- Gesamte Logik (Validierung + Resend-API-Aufruf) wird direkt in die Datei geschrieben — kein Import aus `../server/` mehr
- Aeusserer try/catch um die gesamte Handler-Funktion, damit CORS-Header auch bei unerwarteten Fehlern gesendet werden
- CORS-Header bleiben wie bisher (`Access-Control-Allow-Origin: *`)

### Keine Aenderung noetig: `src/components/DemoBookingModal.tsx`
Die URL `https://www.plyce.app/api/send-demo-request` ist bereits korrekt gesetzt.

### Datei `server/sendDemoViaResend.ts` bleibt bestehen
Wird weiterhin vom Vite-Dev-Server genutzt (lokale Entwicklung), aber nicht mehr von der Vercel-Funktion importiert.

