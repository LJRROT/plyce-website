import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bell,
  Binary,
  Briefcase,
  Building2,
  Calendar,
  CheckSquare,
  ClipboardList,
  Contact,
  Copy,
  Database,
  FileBarChart,
  FileSearch,
  FileText,
  Filter,
  Fingerprint,
  FolderOpen,
  GitMerge,
  Globe,
  Image,
  Inbox,
  KeyRound,
  LayoutDashboard,
  LayoutGrid,
  Mail,
  MapPin,
  MessageSquare,
  Mic,
  PieChart,
  Radar,
  Search,
  History,
  Send,
  Settings2,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Tags,
  Target,
  Timer,
  Upload,
  UserCog,
  UserRoundSearch,
  Users,
  Wand2,
  Zap,
} from "lucide-react";

export type FeatureTile = {
  title: string;
  tagline: string;
  bullets: string[];
  icon: LucideIcon;
};

export type FeatureSectionDef = {
  id: string;
  title: string;
  subtitle: string;
  tiles: FeatureTile[];
};

const i = (
  icon: LucideIcon,
  title: string,
  tagline: string,
  bullets: [string, string, string],
): FeatureTile => ({
  icon,
  title,
  tagline,
  bullets: [...bullets],
});

export const featureSections: FeatureSectionDef[] = [
  {
    id: "kandidaten",
    title: "Kandidaten",
    subtitle: "Vom ersten Kontakt bis zur sauberen Datenbasis.",
    tiles: [
      i(Users, "Kandidatenmanagement", "Zentrale Plattform für alle Kandidaten", [
        "Strukturierte Profile mit allen Daten",
        "Dokumente und Historie gebündelt",
        "Schneller Zugriff für Recruiter",
      ]),
      i(FileSearch, "CV Parsing", "Lebensläufe automatisch verstehen", [
        "KI extrahiert Daten aus PDFs",
        "Automatische Profilanlage",
        "Minimiert manuellen Aufwand",
      ]),
      i(Sparkles, "Kandidatenanalyse", "Schnelle Bewertung von Profilen", [
        "Automatische Zusammenfassungen",
        "Skill- und Erfahrungsanalyse",
        "Bessere Vorauswahl",
      ]),
      i(Upload, "Multi-CV Upload", "Mehrere Profile gleichzeitig verarbeiten", [
        "Batch Upload von Dokumenten",
        "Automatische Verarbeitung",
        "Massive Zeitersparnis",
      ]),
      i(FileText, "Dossier Generierung", "Professionelle Profile per Klick", [
        "Automatisch erstellte PDFs",
        "Einheitliches Format",
        "Direkt versandbereit",
      ]),
      i(Wand2, "CV Generierung", "Optimierte Lebensläufe erstellen", [
        "KI strukturiert Inhalte",
        "Konsistente Darstellung",
        "Schnell verfügbar",
      ]),
      i(Target, "Kandidaten Matching", "Die besten Kandidaten automatisch finden", [
        "Abgleich mit Anforderungen",
        "Ranking nach Relevanz",
        "Schnellere Shortlists",
      ]),
      i(Database, "Kandidaten Enrichment", "Profile intelligent erweitern", [
        "Ergänzung fehlender Infos",
        "KI-basierte Datenanreicherung",
        "Höhere Datenqualität",
      ]),
      i(FolderOpen, "Dokumentenmanagement", "Alle Dateien zentral verwalten", [
        "Upload von CVs und Dokumenten",
        "Strukturierte Ablage",
        "Schneller Zugriff",
      ]),
      i(Image, "Avatar Extraktion", "Profilbilder automatisch erkennen", [
        "Extraktion aus Dokumenten",
        "Einheitliche Darstellung",
        "Kein manueller Aufwand",
      ]),
      i(MapPin, "Umkreissuche", "Regionale Kandidatensuche", [
        "Suche nach Radius",
        "Standortfilter",
        "Ideal für lokale Rollen",
      ]),
      i(Binary, "Boolean Suche", "Präzise Kandidatensuche", [
        "AND, OR, NOT Logik",
        "Exakte Ergebnisse",
        "Schneller Zugriff",
      ]),
      i(Tags, "Bulk Tagging", "Mehrere Kandidaten gleichzeitig organisieren", [
        "Tags im Batch setzen",
        "Strukturierte Segmente",
        "Effizienter Workflow",
      ]),
      i(Copy, "Duplikaterkennung Kandidaten", "Saubere Datenbasis sicherstellen", [
        "Automatische Erkennung",
        "Zusammenführung möglich",
        "Keine Doppelarbeit",
      ]),
      i(ShieldCheck, "DSGVO Einwilligung", "Rechtssicheres Arbeiten", [
        "Digitaler Consent",
        "Token-basierte Bestätigung",
        "Voll dokumentiert",
      ]),
      i(Activity, "Aktivitätenhistorie Kandidaten", "Alle Interaktionen im Blick", [
        "Lückenloses Tracking",
        "E-Mail Historie",
        "Transparenz im Prozess",
      ]),
    ],
  },
  {
    id: "projekte",
    title: "Projekte & Mandate",
    subtitle: "Suchmandate, Pipeline und Projektakte in einem System.",
    tiles: [
      i(Briefcase, "Projektmanagement", "Alle Suchmandate zentral steuern", [
        "Strukturierte Projektübersicht",
        "Status und Fortschritt sichtbar",
        "Effiziente Steuerung",
      ]),
      i(LayoutGrid, "Kanban Pipeline", "Recruiting visuell organisieren", [
        "Klare Prozessphasen",
        "Drag & Drop Workflow",
        "Volle Transparenz",
      ]),
      i(ClipboardList, "Bewerbungsmanagement", "Kandidatenstatus jederzeit im Blick", [
        "Von Longlist bis Placement",
        "Strukturierte Statuslogik",
        "Einfaches Tracking",
      ]),
      i(MessageSquare, "Anschreiben Generierung", "Texte automatisch erstellen", [
        "KI-basierte Inhalte",
        "Schnell individualisierbar",
        "Zeitersparnis",
      ]),
      i(FileBarChart, "Projekt Reports", "Fortschritt automatisch zusammengefasst", [
        "KI-generierte Reports",
        "Klar strukturierte Insights",
        "Schnell teilbar",
      ]),
      i(Sparkles, "Projekt Highlights", "Wichtige Infos sofort sichtbar", [
        "Automatische Zusammenfassungen",
        "Fokus auf relevante Punkte",
        "Bessere Kommunikation",
      ]),
      i(Calendar, "Interview Planung", "Interviews einfach koordinieren", [
        "Terminverwaltung",
        "Übersicht aller Gespräche",
        "Strukturierte Planung",
      ]),
      i(Target, "Platzierungsmanagement", "Placements sauber dokumentieren", [
        "Gehalt und Startdatum",
        "Historische Übersicht",
        "Reportingfähig",
      ]),
      i(Filter, "Ablehnungsgründe", "Strukturierte Absagen", [
        "Standardisierte Gründe",
        "Auswertbar",
        "Verbesserte Prozesse",
      ]),
      i(FolderOpen, "Projektdokumente", "Alle Dateien pro Projekt", [
        "Zentrale Ablage",
        "Schnell zugänglich",
        "Saubere Struktur",
      ]),
      i(History, "Aktivitätenhistorie Projekte", "Alle Aktionen nachvollziehbar", [
        "Lückenlose Dokumentation",
        "Historische Übersicht",
        "Transparenz",
      ]),
    ],
  },
  {
    id: "unternehmen",
    title: "Unternehmen & Kunden",
    subtitle: "Firmendaten, Dokumente und Beziehungen sauber abbilden.",
    tiles: [
      i(Building2, "Unternehmensmanagement", "Kunden zentral verwalten", [
        "Strukturierte Firmendaten",
        "Alle Infos gebündelt",
        "Einfach zugänglich",
      ]),
      i(Sparkles, "Unternehmensanalyse KI", "Firmen automatisch verstehen", [
        "Daten von Website extrahiert",
        "Impressum Parsing",
        "Schnelle Insights",
      ]),
      i(FileBarChart, "Unternehmensreports", "Automatische Firmenanalysen", [
        "KI-generierte Reports",
        "Strukturierte Infos",
        "Direkt nutzbar",
      ]),
      i(Bell, "Kontaktkadenz", "Follow-ups automatisieren", [
        "Erinnerungen bei Inaktivität",
        "Bessere Kundenpflege",
        "Kein Lead geht verloren",
      ]),
      i(Image, "Logo Management", "Firmenbranding verwalten", [
        "Logos hochladen",
        "Einheitliche Darstellung",
        "Schnell verfügbar",
      ]),
      i(Tags, "Klassifikation", "Kunden priorisieren", [
        "A/B/C Einstufung",
        "Direkt editierbar",
        "Bessere Steuerung",
      ]),
      i(Contact, "Kontakte je Unternehmen", "Alle Ansprechpartner bündeln", [
        "Strukturierte Zuordnung",
        "Übersicht je Kunde",
        "Einfacher Zugriff",
      ]),
      i(Briefcase, "Projekte je Unternehmen", "Mandate pro Kunde sichtbar", [
        "Übersicht aller Projekte",
        "Historische Daten",
        "Bessere Betreuung",
      ]),
      i(FolderOpen, "Dokumente Unternehmen", "Dateien pro Kunde verwalten", [
        "Zentrale Ablage",
        "Schnell abrufbar",
        "Saubere Struktur",
      ]),
      i(Copy, "Duplikaterkennung Unternehmen", "Doppelte Firmen vermeiden", [
        "Automatische Erkennung",
        "Zusammenführung",
        "Saubere Daten",
      ]),
    ],
  },
  {
    id: "kontakte",
    title: "Kontakte",
    subtitle: "Personen, Signaturen und Historie im Griff.",
    tiles: [
      i(Users, "Kontaktmanagement", "Alle Kontakte zentral", [
        "Strukturierte Profile",
        "Verknüpft mit Firmen",
        "Schnell zugänglich",
      ]),
      i(Fingerprint, "Signatur Extraktion", "Kontaktdaten automatisch erkennen", [
        "Aus E-Mail Signaturen",
        "KI-gestützt",
        "Spart Zeit",
      ]),
      i(Tags, "Kontakt Tags", "Kontakte segmentieren", [
        "Flexible Tags",
        "Filterbar",
        "Zielgerichtete Ansprache",
      ]),
      i(Activity, "Aktivitätenhistorie Kontakte", "Alle Interaktionen sichtbar", [
        "Lückenloses Tracking",
        "E-Mail Historie",
        "Transparenz",
      ]),
      i(GitMerge, "Duplikaterkennung Kontakte", "Saubere Kontaktbasis", [
        "Automatische Erkennung",
        "Merge Funktion",
        "Kein Chaos",
      ]),
    ],
  },
  {
    id: "email",
    title: "E-Mail, Aufgaben & Automatisierung",
    subtitle: "Kommunikation und To-dos ohne Medienbruch.",
    tiles: [
      i(Send, "E-Mail Versand", "Direkte Kommunikation im System", [
        "Versand aus Plyce",
        "Kein Toolwechsel",
        "Schnell & einfach",
      ]),
      i(Mail, "Multi-Mail", "Massenmails personalisiert", [
        "Mehrere Empfänger",
        "Individuelle Inhalte",
        "Skalierbar",
      ]),
      i(FileText, "E-Mail Templates", "Vorlagen effizient nutzen", [
        "Wiederverwendbare Templates",
        "Dynamische Variablen",
        "Konsistenz",
      ]),
      i(MessageSquare, "Signaturen", "Individuelle Absenderprofile", [
        "Persönliche Signaturen",
        "Einheitlicher Auftritt",
        "Einfach verwaltbar",
      ]),
      i(Inbox, "Posteingang Sync", "E-Mails automatisch zugeordnet", [
        "Gmail & Microsoft",
        "Aktivitäten verknüpft",
        "Voll integriert",
      ]),
      i(KeyRound, "OAuth Integration", "Sichere Verbindung", [
        "Google & Microsoft Login",
        "Einfache Einrichtung",
        "Hohe Sicherheit",
      ]),
      i(Zap, "Mail Automationen", "Follow-ups automatisieren", [
        "Mehrstufige Sequenzen",
        "Bis zu 10 Touchpoints",
        "Zeitgesteuert",
      ]),
      i(CheckSquare, "Aufgaben Touchpoints", "Tasks und Mails kombinieren", [
        "Strukturierte Abläufe",
        "Klare To-Dos",
        "Effizienter Workflow",
      ]),
      i(ClipboardList, "Aufgabenübersicht", "Alles im Blick behalten", [
        "Zentrale To-Do Liste",
        "Fälligkeiten sichtbar",
        "Priorisierung",
      ]),
      i(Share2, "Template Sharing", "Teamweit nutzen", [
        "Vorlagen teilen",
        "Standardisierung",
        "Effizienz",
      ]),
    ],
  },
  {
    id: "jobs",
    title: "Karriereseite & Jobs",
    subtitle: "Öffentliche Jobs, Bewerbungen und SEO aus einer Hand.",
    tiles: [
      i(Globe, "Jobboard", "Eigene Karriereseite", [
        "White Label Lösung",
        "Eigene Domain",
        "Professioneller Auftritt",
      ]),
      i(Briefcase, "Stellenanzeigen", "Jobs einfach veröffentlichen", [
        "Strukturierte Anzeigen",
        "Anforderungen & Benefits",
        "Schnell live",
      ]),
      i(Sparkles, "KI Job Erstellung", "Jobs automatisch generieren", [
        "Aus Projektdaten",
        "KI-optimiert",
        "Zeitersparnis",
      ]),
      i(FileText, "Bewerbungssystem", "Direkte Bewerbungen erhalten", [
        "Online Formular",
        "Dokument Upload",
        "Einfacher Prozess",
      ]),
      i(Filter, "Job Filter", "Bessere Nutzerführung", [
        "Remote / Hybrid / Onsite",
        "Anstellungsarten",
        "Schnelle Suche",
      ]),
      i(Search, "SEO Optimierung", "Mehr Sichtbarkeit", [
        "Open Graph Tags",
        "Social Sharing",
        "Besseres Ranking",
      ]),
      i(Timer, "Ablaufsteuerung Jobs", "Automatische Deaktivierung", [
        "Ablaufdatum setzen",
        "Kein manueller Aufwand",
        "Saubere Jobliste",
      ]),
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Arbeitsalltag",
    subtitle: "Zahlen, Übersichten und schnelle Aktionen.",
    tiles: [
      i(BarChart3, "Analytics Dashboard", "Performance verstehen", [
        "KPI Übersicht",
        "Echtzeit Daten",
        "Individuell",
      ]),
      i(PieChart, "Pipeline Analyse", "Recruiting sichtbar machen", [
        "Funnel Analyse",
        "Engpässe erkennen",
        "Optimieren",
      ]),
      i(Radar, "Sourcing Übersicht", "Fortschritt tracken", [
        "Kandidaten je Projekt",
        "Status sichtbar",
        "Effizienz steigern",
      ]),
      i(UserRoundSearch, "User Reporting", "Leistung messen", [
        "Pro Berater",
        "Vergleichbar",
        "Transparent",
      ]),
      i(Building2, "Tenant Reporting", "Unternehmensweite Daten", [
        "Gesamtübersicht",
        "KPIs aggregiert",
        "Management Insights",
      ]),
      i(Activity, "Zeitreihen Analyse", "Trends erkennen", [
        "Historische Daten",
        "Entwicklung sichtbar",
        "Planung verbessern",
      ]),
      i(Mic, "Telefon Integration", "Anrufer sofort erkennen", [
        "Caller Lookup",
        "Kandidatenzuordnung",
        "Schnell reagieren",
      ]),
      i(Zap, "Quick Actions", "Direkt reagieren", [
        "Kontakte anlegen",
        "Kandidaten erstellen",
        "Sofort nutzbar",
      ]),
      i(LayoutDashboard, "Dashboard", "Alles auf einen Blick", [
        "KPIs",
        "Aufgaben",
        "Fortschritt",
      ]),
      i(Activity, "Aktivitäts Feed", "Live Überblick", [
        "Aktuelle Aktionen",
        "Echtzeit Updates",
        "Transparenz",
      ]),
      i(Calendar, "Interview Übersicht", "Termine im Blick", [
        "Alle Interviews",
        "Planungssicherheit",
        "Struktur",
      ]),
    ],
  },
  {
    id: "admin",
    title: "Administration & Sicherheit",
    subtitle: "Rechte, Branding, Compliance und Import.",
    tiles: [
      i(UserCog, "Benutzerverwaltung", "User zentral steuern", [
        "Anlegen und bearbeiten",
        "Sperren möglich",
        "Einfach administrieren",
      ]),
      i(Shield, "Rollenmodell", "Zugriffe steuern", [
        "5 Rollen",
        "Klar definiert",
        "Sicher",
      ]),
      i(Settings2, "Rechtesystem", "Granulare Kontrolle", [
        "Individuelle Rechte",
        "Flexibel",
        "Sicher",
      ]),
      i(FileText, "Dossier Templates", "Individuelle Vorlagen", [
        "HTML basiert",
        "Anpassbar",
        "Brandingfähig",
      ]),
      i(Sparkles, "KI Prompt Steuerung", "AI individuell konfigurieren", [
        "Prompts anpassen",
        "Optimieren",
        "Kontrolle behalten",
      ]),
      i(LayoutGrid, "Design Anpassung", "Branding integrieren", [
        "Logo",
        "Farben",
        "White Label",
      ]),
      i(ShieldCheck, "Sicherheit", "Maximaler Schutz", [
        "Row Level Security",
        "Login Schutz",
        "Zugriffskontrolle",
      ]),
      i(ClipboardList, "Audit Log", "Alles nachvollziehbar", [
        "Aktivitäten protokolliert",
        "Revisionssicher",
        "Transparenz",
      ]),
      i(Timer, "Rate Limiting", "System schützen", [
        "API Schutz",
        "Missbrauch verhindern",
        "Stabilität sichern",
      ]),
      i(Search, "Globale Suche", "Alles sofort finden", [
        "Systemweite Suche",
        "Schnelle Navigation",
        "Effizient",
      ]),
      i(Database, "Datenimport", "Einfach migrieren", [
        "JSON Upload",
        "Feld Mapping",
        "Validierung",
      ]),
    ],
  },
];
