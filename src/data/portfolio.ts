export type SkillGroup = {
  title: string;
  levelNote: string;
  items: string[];
};

export type ProjectStatus = "In development" | "Tested" | "In progress";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  statusNote: string;
  /** Flagship project rendered as the full-width feature panel. */
  featured?: boolean;
  /**
   * Full https URL of the project's public repository.
   * Set only to a real, user-supplied URL — never guessed or placeholder.
   * When absent, no repository link is rendered on the card.
   */
  repoUrl?: string;
  /**
   * Confirmed public demo/frontend deployment URL.
   * Set only to a real, user-supplied URL — never guessed.
   */
  demoUrl?: string;
  /**
   * Route slug for the project's case-study page (`/projects/[slug]`).
   * Set only when verified case-study content exists.
   * When absent, no details link is rendered on the card.
   */
  slug?: string;
};

export type LabEntry = {
  title: string;
  kind: "Lesson learned" | "Experiment" | "Next exploration";
  detail: string;
};

export const navLinks = [
  { num: "01", label: "Approach", href: "/#about" },
  { num: "02", label: "Work", href: "/#projects" },
  { num: "03", label: "Notes", href: "/#lab" },
  { num: "04", label: "Contact", href: "/#contact" },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    levelNote: "Foundations I'm actively using",
    items: ["Python", "TypeScript", "JavaScript", "SQL basics"],
  },
  {
    title: "Web development",
    levelNote: "Building with, still refining",
    items: ["React", "Next.js", "HTML & CSS", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Backend & data",
    levelNote: "Early practical experience",
    items: ["FastAPI", "PostgreSQL", "SQLite", "Basic data modeling"],
  },
  {
    title: "Tools & automation",
    levelNote: "In regular use",
    items: ["Git & GitHub", "Docker basics", "n8n", "Linux / WSL", "npm"],
  },
];

export const projects: Project[] = [
  {
    name: "CareerCraft AI",
    description:
      "AI-powered resume analysis and career guidance platform. Exploring document parsing, structured feedback, and a clean separation between the React frontend and Python API.",
    stack: ["React", "Vite", "FastAPI", "Python", "SQLite / PostgreSQL", "Google Gemini"],
    status: "In development",
    statusNote: "Frontend deployed; production backend connectivity unverified.",
    featured: true,
    repoUrl: "https://github.com/NS-2563/CareerCraftAI",
    demoUrl: "https://career-craft-ai-swart.vercel.app",
    slug: "careercraft-ai",
  },
  {
    name: "Daily Learning Reminder",
    description:
      "Automation workflow that sends a daily learning prompt by email. Built to practice reliable scheduling, credentials handling, and notification design.",
    stack: ["n8n", "Docker", "Gmail"],
    status: "Tested",
    statusNote: "Workflow tested successfully with scheduled Gmail delivery.",
  },
  {
    name: "Technology Portfolio",
    description:
      "This portfolio site. A Next.js App Router project focused on accessible, responsive design, system-aware theming, and maintainable components.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4"],
    status: "In progress",
    statusNote: "Currently being built — this homepage is the first milestone.",
  },
];

export const labEntries: LabEntry[] = [
  {
    title: "Testing an n8n schedule end to end",
    kind: "Lesson learned",
    detail:
      "Confirmed that a scheduled Gmail workflow runs reliably in Docker, and that testing credentials and timing separately saves debugging time.",
  },
  {
    title: "Separating AI logic from the web API",
    kind: "Experiment",
    detail:
      "Trying a FastAPI structure where analysis helpers stay independent of routes, so resume scoring can be tested without starting the server.",
  },
  {
    title: "System-aware theming without a toggle",
    kind: "Lesson learned",
    detail:
      "Using prefers-color-scheme with shared design tokens keeps light and dark modes consistent without extra client state.",
  },
  {
    title: "Retrieval and evaluation for career guidance",
    kind: "Next exploration",
    detail:
      "Next I want to explore simple retrieval over my own notes and how to compare prompt changes methodically.",
  },
];
