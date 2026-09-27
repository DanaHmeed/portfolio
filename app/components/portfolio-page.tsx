"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/app/lib/content";
import { motionTiming } from "@/app/lib/motion";
import { messages } from "@/app/lib/i18n";
import { usePreferences } from "./preferences-provider";
import { ArrowOutIcon } from "./icons";
import { ProjectVisual } from "./project-visual";
import { Reveal } from "./reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const technologyMarks: Readonly<Record<string, string>> = {
  React: "R", "Next.js": "N", Angular: "A", TypeScript: "TS", "Tailwind CSS": "TW",
  "Node.js": "ND", NestJS: "NS", PostgreSQL: "PG", MySQL: "MY", Prisma: "PR", SQL: "SQ",
  Python: "PY", "Scikit-learn": "SK", Pandas: "PD", Groq: "GQ", LLaMA: "LM",
};

export function PortfolioPage() {
  const { locale } = usePreferences();
  const copy = messages[locale];
  const reduceMotion = useReducedMotion();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? copy.projects : copy.projects.slice(0, 4);

  return (
    <main id="top">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy page-enter">
          <div className="availability">
            <span aria-hidden="true" />{copy.hero.status}
          </div>
          <p className="hero-eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="hero-title">
            {copy.hero.title}
          </h1>
          <p className="hero-body">{copy.hero.body}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">{copy.hero.primary}<ArrowOutIcon size={17} /></a>
            <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">{copy.hero.secondary}</a>
          </div>
        </div>
        <div className="hero-system page-enter page-enter-follow" aria-hidden="true">
          <div className="system-top"><span>DH / ENGINEERING</span><span>2026</span></div>
          <svg viewBox="0 0 520 390" role="presentation">
            <path className="system-grid" d="M20 50H500M20 130H500M20 210H500M20 290H500M100 20V370M220 20V370M340 20V370M460 20V370" />
            <motion.path className="signal-path" d="M20 290H100V210H220V130H340V210H460V50H500" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : .8, delay: reduceMotion ? 0 : .12, ease: motionTiming.ease }} />
            <circle cx="460" cy="50" r="7" className="signal-node" />
            <text x="30" y="278">SYSTEMS</text><text x="110" y="198">PRODUCT</text><text x="230" y="118">DATA</text><text x="350" y="198">AI</text>
          </svg>
          <div className="system-bottom"><span>BUILD</span><span>CONNECT</span><span>REFINE</span></div>
        </div>
        <p className="hero-detail">{copy.hero.detail}</p>
      </section>

      <section className="work" id="work">
        <Reveal className="section-intro" variant="slide"><h2>{copy.work.title}</h2><p>{copy.work.intro}</p></Reveal>
        <div className="project-list" id="project-list">
          {visibleProjects.map((project, index) => (
            <Reveal className="project-record" variant="settle" key={project.slug}>
              <div className="project-heading"><span>0{index + 1}</span><span>{project.year}</span><p>{project.category}</p><h3>{project.title}</h3></div>
              <ProjectVisual image={project.image} priority={index === 0} />
              <div className="project-info">
                <p className="project-summary">{project.summary}</p>
                <div><span className="info-label">{copy.work.contribution}</span><p>{project.detail}</p></div>
                <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{copy.work.live}<ArrowOutIcon size={15} /></a>}
                  {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">{copy.work.source}<ArrowOutIcon size={15} /></a>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {copy.projects.length > 4 && (
          <button
            type="button"
            className="project-toggle primary-link"
            aria-expanded={showAllProjects}
            aria-controls="project-list"
            onClick={() => setShowAllProjects((current) => !current)}
          >
            {showAllProjects ? copy.work.fewer : copy.work.more}
            <span aria-hidden="true">{showAllProjects ? "−" : "+"}</span>
          </button>
        )}
      </section>

      <section className="capabilities" id="capabilities">
        <Reveal className="section-intro"><h2>{copy.capabilities.title}</h2><p>{copy.capabilities.intro}</p></Reveal>
        <div className="capability-list">
          {copy.capabilityGroups.map((group, index) => (
            <div className="capability-row" key={group.title}>
              <span>0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p>
              <ul>{group.tools.map((tool, toolIndex) => (
                <Reveal as="li" variant="rise" delay={toolIndex * motionTiming.stagger} key={tool}>
                  <span className="technology-mark" aria-hidden="true">{technologyMarks[tool] ?? tool.slice(0, 2).toUpperCase()}</span><span>{tool}</span>
                </Reveal>
              ))}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <Reveal className="about-layout" variant="slide"><span className="about-mark">DH / 02</span><h2>{copy.about.title}</h2><div className="about-copy"><p>{copy.about.body}</p><p>{copy.about.detail}</p></div></Reveal>
      </section>
      <SiteFooter />
    </main>
  );
}
