import type { ProjectStatus } from "./portfolio";

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudySection = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  projectName: string;
  tagline: string;
  status: ProjectStatus;
  statusNote: string;
  stack: string[];
  /** Layer-by-layer stack for the case-study page. */
  stackGroups: CaseStudySection[];
  /** The problem and intended users. */
  overview: string[];
  /** Features confirmed working in the browser. No quality/accuracy claims. */
  features: CaseStudyFeature[];
  /** Request-flow steps, front to back. */
  architecture: CaseStudySection[];
  architectureNote: string;
  /** Concrete implementation evidence found in the public source. */
  engineering: CaseStudySection[];
  limitations: string[];
  repoUrl: string;
  deploymentUrl?: string;
  deploymentLabel?: string;
};

const careercraftAi: CaseStudy = {
  slug: "careercraft-ai",
  projectName: "CareerCraft AI",
  tagline: "Resume analysis and career guidance for students, freshers, and job seekers.",
  status: "In development",
  statusNote: "Frontend deployed; production backend connectivity unverified.",
  stack: ["React", "Vite", "FastAPI", "Python", "SQLite / PostgreSQL", "Google Gemini"],
  stackGroups: [
    { title: "Frontend", description: "React 19 · Vite 8 · React Router · Tailwind CSS v4" },
    { title: "Backend", description: "Python · FastAPI · SQLAlchemy" },
    { title: "Database", description: "SQLite by default · PostgreSQL supported" },
    { title: "AI", description: "Google Gemini via the google-genai SDK" },
    { title: "Auth", description: "JWT access and refresh tokens" },
  ],
  overview: [
    "CareerCraft AI is a platform for students, freshers, and job seekers who want structured feedback on their resumes and guidance on what to learn next. Instead of generic tips, it analyzes an uploaded resume, scores it against practical checks, and connects the results to job descriptions, skill gaps, interview practice, and a learning roadmap.",
    "The project is built as two decoupled parts: a React single-page frontend and a Python FastAPI backend, so each side can be developed, tested, and deployed independently.",
  ],
  features: [
    {
      title: "Login and registration",
      description:
        "Create an account and log in. Protected pages require authentication, with short-lived access tokens and a refresh flow.",
    },
    {
      title: "Resume upload and parsing",
      description:
        "Upload a PDF resume. Text is extracted and parsed into structured sections such as experience, education, skills, and projects.",
    },
    {
      title: "Resume analysis and ATS score",
      description:
        "Deterministic checks score completeness, keyword coverage, formatting, and section balance; AI-assisted deep analysis is available when a Gemini key is configured.",
    },
    {
      title: "Dashboard and resume management",
      description:
        "A central dashboard with health scores, milestones, and resume history, plus pages to manage uploaded resumes.",
    },
    {
      title: "Job-description matching",
      description:
        "Compare a resume against a pasted job description to surface skill overlap and gaps.",
    },
    {
      title: "Career roadmap and skill-gap analysis",
      description:
        "Learning roadmaps with trackable tasks, alongside analytics on readiness signals and skill gaps.",
    },
    {
      title: "Interview preparation",
      description:
        "Practice sessions with results, session history, and progress tracking.",
    },
    {
      title: "Cover-letter generation",
      description:
        "Generate tailored cover letters and keep them in a library; generation metadata records how each letter was produced.",
    },
    {
      title: "Job tracker",
      description:
        "Track applications and suggested next actions. View/Edit/Delete wiring in the frontend is listed as incomplete in the project's TODO.",
    },
    {
      title: "Communication hub",
      description:
        "Log inbound and outbound application messages, draft replies, and review thread summaries.",
    },
  ],
  architecture: [
    {
      title: "Browser loads the React SPA",
      description:
        "The Vite-built single-page app is served as static files from its Vercel deployment, with client-side routing for all pages.",
    },
    {
      title: "Axios client calls the API",
      description:
        "A central client sends requests to a configured API base URL. In local development a Vite proxy forwards /api traffic to the backend on localhost:8000.",
    },
    {
      title: "FastAPI handles auth and routing",
      description:
        "The backend validates JWT access tokens, applies rate limits and security headers, and routes requests across 19 module routers.",
    },
    {
      title: "Services read and write data",
      description:
        "Module services persist to SQLite by default, with PostgreSQL supported through configuration. Schema is created at startup with incremental hand-rolled migrations.",
    },
    {
      title: "AI calls go through one provider",
      description:
        "Analysis features call a single provider interface backed by Google Gemini. Model responses are validated and repaired before being returned as structured JSON.",
    },
  ],
  architectureNote:
    "This flow is verified from the public source and local configuration. Which backend the deployed frontend talks to in production has not been verified — without a configured API base URL, its status badge reports Offline.",
  engineering: [
    {
      title: "REST API integration",
      description:
        "19 backend routers behind JWT auth, consumed by an axios client with automatic token refresh-and-retry, request timeouts, and a visible backend health indicator.",
    },
    {
      title: "Resume parsing pipeline",
      description:
        "PDF text extraction feeds a section detector and per-section parsers, with an AI-assisted structured parse whose JSON output is validated and repaired before display.",
    },
    {
      title: "Deterministic ATS analyzers",
      description:
        "Around a dozen rule-based analyzers (skills, keyword density, completeness, bullet quality, section balance, and more) run without any AI call, so core scoring is testable without API keys.",
    },
    {
      title: "Authentication and hardening",
      description:
        "JWT access and refresh tokens, bcrypt password hashing, login lockout, per-endpoint rate limits, security headers, and request body-size limits are all present in the source.",
    },
    {
      title: "Backend testing and CI",
      description:
        "Roughly 35 backend test files run in a GitHub Actions workflow on SQLite. The project's own log documents two JD-matching failures as pre-existing exclusions, so a fully green run is not claimed here.",
    },
  ],
  limitations: [
    "AI features require a valid Gemini API key and quota; without one, analysis falls back to graceful failure states.",
    "Google OAuth credentials in the source are placeholders — Google login is not wired up.",
    "Job Tracker View/Edit/Delete frontend wiring is listed as incomplete in the project's TODO list.",
    "The two documented JD-matching test exclusions mean the suite's pass count comes with a caveat.",
    "The production backend connection is unverified: no live backend URL is documented, and the deployed frontend has no API proxy of its own.",
    "There is no root README or verified local run guide in the repository.",
  ],
  repoUrl: "https://github.com/NS-2563/CareerCraftAI",
  deploymentUrl: "https://career-craft-ai-swart.vercel.app",
  deploymentLabel: "Frontend deployment — backend connectivity unverified",
};

export const caseStudies: Record<string, CaseStudy> = {
  [careercraftAi.slug]: careercraftAi,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
