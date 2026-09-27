export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly year: string;
  readonly category: string;
  readonly summary: string;
  readonly detail: string;
  readonly technologies: readonly string[];
  readonly sourceUrl?: string;
  readonly liveUrl?: string;
  readonly image: { readonly src: string; readonly alt: string; readonly width: number; readonly height: number };
}

export const profile = {
  name: "Dana Hmeed",
  role: "Software Engineer",
  email: "danahmeed44@gmail.com",
  github: "https://github.com/DanaHmeed",
  linkedin: "https://www.linkedin.com/in/dana-hmeed",
  resume:
    "https://drive.google.com/file/d/1TvTgiM38Z5o_vg_fheh7WNf9KViYe6fB/view?usp=sharing",
  introduction:
    "I design and engineer dependable web products—from typed interfaces to data-rich systems and AI-assisted workflows.",
  about:
    "With two years across front-end and full-stack development, I turn product ideas into structured, responsive software. I care about readable systems, fast interfaces, and the small interaction details that make complex products feel straightforward.",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "evenza",
    title: "Evenza",
    year: "2026",
    category: "Full-stack event operations",
    summary:
      "One platform for organizers, attendees, and administrators to run the complete event lifecycle.",
    detail:
      "Role-based dashboards connect event discovery, payment, access control, and check-in without splitting operations across disconnected tools.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Stripe",
      "Cloudinary",
      "Groq",
    ],
    sourceUrl:
      "https://github.com/DanaHmeed/Evenza-Enterprise-Event-Management-Operations-for-Organizations",
    liveUrl: "https://evenza-platform.vercel.app/",
    image: { src: "/projects/evenza.webp", alt: "Evenza event management platform interface", width: 1917, height: 872 },
  },
  {
    slug: "critiq",
    title: "Critiq",
    year: "2026",
    category: "Collaborative code review",
    summary:
      "A focused environment for developers to review code together in real time.",
    detail:
      "Live review threads and collaborative feedback are organized inside a quiet editorial interface built to keep technical discussion fast and legible.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express"],
    sourceUrl: "https://github.com/DanaHmeed/Critiq",
    liveUrl: "https://critiq-rho.vercel.app/",
    image: { src: "/projects/critiq.webp", alt: "Critiq collaborative code review interface", width: 1446, height: 1087 },
  },
  {
    slug: "ai-coding-agent",
    title: "AI Coding Agent",
    year: "2026",
    category: "AI & developer tooling",
    summary:
      "A Python command-line coding agent that uses an LLM to inspect files, reason about a codebase, and execute predefined development tools.",
    detail:
      "Built through Boot.dev's AI Agent project, with function calling, file-system operations, an iterative agent execution loop, and safety boundaries for tool access. Prompt engineering and environment-based API configuration support automated code analysis.",
    technologies: ["Python", "LLM integration", "AI agents", "Tool calling", "Prompt engineering", "CLI development"],
    image: { src: "/projects/ai-coding-agent.svg", alt: "AI Coding Agent placeholder: file inspection, LLM reasoning, and predefined tools", width: 1440, height: 1080 },
  },
  {
    slug: "gator",
    title: "Gator",
    year: "2026",
    category: "RSS blog aggregator CLI",
    summary:
      "A TypeScript command-line RSS aggregator backed by PostgreSQL, with user registration, login, and feed subscription management.",
    detail:
      "Built through Boot.dev's Gator project. Drizzle ORM and migrations manage users, feeds, and many-to-many subscriptions through feed_follows. Async commands add, follow, and unfollow feeds, fetch and parse RSS content, and save posts for terminal browsing.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "RSS / XML parsing", "CLI development", "Relational databases", "Database migrations", "Async programming"],
    sourceUrl: "https://github.com/DanaHmeed/blog_gator",
    image: { src: "/projects/gator.svg", alt: "Gator placeholder: RSS feeds, feed subscriptions, and PostgreSQL storage", width: 1440, height: 1080 },
  },
  {
    slug: "medidesk",
    title: "MediDesk",
    year: "2025",
    category: "Clinical operations desktop app",
    summary:
      "A Java application that consolidates the daily operations of a medical clinic.",
    detail:
      "Patient registration, appointments, doctor management, and medical records share one consistent desktop workflow for clearer day-to-day administration.",
    technologies: ["Java", "SQLite", "Swing"],
    sourceUrl: "https://github.com/DanaHmeed/Medical-Clinic",
    image: { src: "/projects/medidesk.webp", alt: "MediDesk medical clinic management application", width: 1448, height: 1086 },
  },
  {
    slug: "turnover-analytics",
    title: "Employee Turnover Analytics",
    year: "2025",
    category: "Machine learning",
    summary:
      "An analytical pipeline for identifying attrition patterns and classifying employee risk.",
    detail:
      "Exploratory analysis, clustering, class balancing, and multiple supervised models are combined into a reproducible workflow; Gradient Boosting produced the strongest result in the project comparison.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "K-Means",
      "SMOTE",
      "Gradient Boosting",
    ],
    sourceUrl: "https://github.com/DanaHmeed/Predicting-Employee-Turnover",
    image: { src: "/projects/turnover-analytics.webp", alt: "Employee turnover analytics visualizations", width: 1536, height: 1024 },
  },
] as const;

export const capabilityGroups = [
  {
    title: "Product interfaces",
    description:
      "Responsive application surfaces, reusable UI systems, accessible states, and clear information hierarchy.",
    tools: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Services & data",
    description:
      "Typed APIs, authentication, relational data models, and maintainable server-side application logic.",
    tools: ["Node.js", "NestJS", "PostgreSQL", "MySQL", "Prisma", "SQL"],
  },
  {
    title: "Applied intelligence",
    description:
      "Practical AI integrations and data workflows introduced where they make a product more useful—not noisier.",
    tools: ["Python", "Scikit-learn", "Pandas", "Groq", "LLaMA"],
  },
] as const;
