export const agentSourceInsightsEn: Record<string, { title: string; paragraphs: string[] }> = {
  "ai-cv-analyzer": {
    "title": "From unstructured CVs to searchable candidate profiles",
    "paragraphs": [
      "CVs arrive in different layouts and levels of detail. Storing them only as attachments makes candidate data difficult to compare and reuse. The AI CV Analyzer extracts employment history, education and profile highlights into consistent fields.",
      "It derives relevant skills, tags, role classifications, candidate type and seniority from the source document. Where appropriate, sensitive personal, employer and industry information can be anonymised.",
      "The resulting structured profile feeds search, lists and subsequent matching. Recruiters spend less time copying information and more time assessing actual suitability."
    ]
  },
  "ai-candidate-match": {
    "title": "Prioritise relevant candidates with explainable AI",
    "paragraphs": [
      "The challenge is not necessarily too few candidates, but identifying the most relevant ones against a particular assignment. The agent compares required skills, project experience, seniority and contextual requirements rather than relying on isolated keywords.",
      "AI Candidate Match provides a score from 0 to 100 with a written explanation. This creates a prioritised shortlist whose underlying reasoning can be reviewed by recruiters.",
      "Scores and explanations remain with the candidate record and can support shortlists, team discussions and outreach. Final selection remains a human recruiting decision."
    ]
  },
  "ai-outreach-messages": {
    "title": "Create personalised sourcing messages from the actual brief",
    "paragraphs": [
      "Effective active sourcing starts with understanding the role, project, required experience and the aspects that make an opportunity attractive. AI Outreach Messages works from the existing project description instead of generic templates.",
      "Recruiters can adapt tone, length and structure for LinkedIn, Xing or email campaigns, ranging from short and direct to more detailed and formal messages.",
      "The first draft appears directly in the recruiting workflow. It can be reviewed, refined and approved before sending, helping teams work consistently without repeatedly copying project details into external tools."
    ]
  },
  "ai-cv-formatter": {
    "title": "Prepare consistent, client-ready CVs",
    "paragraphs": [
      "Recruitment firms present candidates from many different sources. Inconsistent CV formats, unclear work histories and varying languages make it harder for clients to compare profiles.",
      "The AI CV Formatter standardises employment and education histories, supports anonymisation of individuals, employers and industries, and can prepare CVs in German or English.",
      "This reduces manual formatting and translation work while keeping recruiters responsible for reviewing the final candidate presentation and assessing which experience matters most."
    ]
  },
  "ai-project-brief": {
    "title": "From freelancer placement to contract draft",
    "paragraphs": [
      "A successful freelance placement is followed by operational work: preparing client project agreements and consultant contracts with the correct dates, rates, workload, location, scope and commercial conditions.",
      "AI Project Brief draws relevant information from the project, client and freelancer records, uses customer-specific templates, and can help formulate project descriptions and a clearer scope of work in German or English.",
      "The result is a reviewable contract draft, not a substitute for legal or compliance review. Its value lies in reducing transcription errors and making the transition from placement to assignment more consistent."
    ]
  },
  "ai-project-report": {
    "title": "Turn live recruiting activity into useful client updates",
    "paragraphs": [
      "An active search creates continuous changes in candidate stages, interviews, feedback and rejection reasons. Preparing an update often means collecting information from multiple places.",
      "AI Project Report brings candidates, current statuses, interview activity, feedback and project-level KPIs into one structured report. Recruiters can explain what changed and where client input is still required.",
      "Because the data already arises during day-to-day work in plyce, the agent reduces separate reporting effort and provides a clearer basis for client conversations."
    ]
  },
  "ai-company-status-report": {
    "title": "See every assignment for a client in one account view",
    "paragraphs": [
      "When a client runs several recruitment projects, each assignment may be at a different stage. Opening each project individually makes account reviews slow and team coordination inconsistent.",
      "AI Company Status Report consolidates active searches, candidate stages, interviews, outstanding feedback, rejections and relevant metrics across a client account.",
      "The shared overview supports recurring client calls and internal handovers. It is built from existing project and activity data rather than a second manually maintained report."
    ]
  },
  "ai-job-post-builder": {
    "title": "Generate publishable job ads without switching tools",
    "paragraphs": [
      "Many recruiters already use AI to draft job advertisements. The remaining friction lies in copying details into another tool, writing prompts and moving the result back into the ATS.",
      "The AI Job Post Builder uses role, requirements, location and other project conditions already stored in plyce, with options to anonymise sensitive client information.",
      "Recruiters can generate a draft, review it and prepare it for publication within the same workflow. Standardised tone and structure help maintain a consistent quality across the team."
    ]
  },
  "ai-company-enricher": {
    "title": "Build more complete CRM accounts from company websites",
    "paragraphs": [
      "Business development depends on reliable company context. Manually checking websites, identifying industries and company size, and then transferring details into a CRM adds up quickly.",
      "AI Company Enricher starts from a company URL, researches available public information and structures details such as industry, approximate size, business model and company activities into appropriate CRM fields.",
      "The article also describes how the agent can be invoked through the plyce MCP interface for recurring enrichment workflows. Teams remain responsible for reviewing the information and deciding how it is used."
    ]
  },
  "ai-signature-parser": {
    "title": "Turn email signatures into structured CRM contacts",
    "paragraphs": [
      "Creating complete contact records involves more than copying a name and email address. Additional numbers, job titles, departments and company associations all contribute to a useful CRM.",
      "AI Signature Parser can work with a full signature or limited information such as an email address, extracting and assigning relevant contact details to structured fields.",
      "The article also describes linking contacts to the right company, classifying their department and using structured data in an organisation-chart workflow, with review before details are adopted."
    ]
  },
  "ai-meeting-tracker": {
    "title": "Make every recruiting conversation part of the CRM",
    "paragraphs": [
      "Client calls, candidate interviews and feedback meetings often contain critical process information, but notes and transcripts are easily left in separate storage systems.",
      "AI Meeting Tracker can detect available Google Meet or Microsoft Teams notes and transcripts through Google Drive or OneDrive, extract relevant information and associate the resulting summary with the right candidate or contact as an activity.",
      "The analysis prompt can be adapted to an agency's priorities. The goal is less manual post-meeting documentation and a clearer, shared history of decisions and next steps."
    ]
  },
  "ai-recorder": {
    "title": "Context-aware voice input throughout the recruiting workflow",
    "paragraphs": [
      "Speech-to-text only becomes truly useful when it fits the task at hand. AI Recorder is designed to work within candidate activities, recruiter comments, task creation and other text-heavy areas of plyce.",
      "The agent can recognise the context in which it is used and turn dictated input into a structured CRM activity or another suitable text format rather than leaving it as a raw transcript.",
      "Agencies can adjust tone, detail and structure through administrator prompt settings. Small reductions in typing and clicking across many tasks can add up to meaningful daily time savings."
    ]
  },
  "ai-summary": {
    "title": "Understand extensive CRM histories at a glance",
    "paragraphs": [
      "Long-running client relationships and candidate records can accumulate hundreds of emails, activities, comments, interviews and status changes. Finding the relevant context before a call or a handover takes time.",
      "AI Summary condenses the existing history into a short, usable overview across candidates, contacts, companies and projects. It highlights the context needed without requiring a recruiter to read every historical entry.",
      "Typical use cases include taking over an established client account, contacting a candidate after a long gap and quickly reviewing a complex project before a meeting."
    ]
  }
};
