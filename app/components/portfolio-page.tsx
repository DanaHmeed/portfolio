"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/app/lib/content";
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

  return (
    <main id="top">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.div className="availability" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <span aria-hidden="true" />{copy.hero.status}
          </motion.div>
          <p className="hero-eyebrow">{copy.hero.eyebrow}</p>
          <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.16, 1, .3, 1] }}>
            {copy.hero.title}
          </motion.h1>
          <p className="hero-body">{copy.hero.body}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">{copy.hero.primary}<ArrowOutIcon size={17} /></a>
            <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">{copy.hero.secondary}</a>
          </div>
        </div>
        <div className="hero-system" aria-hidden="true">
          <div className="system-top"><span>DH / ENGINEERING</span><span>2026</span></div>
          <svg viewBox="0 0 520 390" role="presentation">
            <path className="system-grid" d="M20 50H500M20 130H500M20 210H500M20 290H500M100 20V370M220 20V370M340 20V370M460 20V370" />
            <motion.path className="signal-path" d="M20 290H100V210H220V130H340V210H460V50H500" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: .3, ease: [.16, 1, .3, 1] }} />
            <circle cx="460" cy="50" r="7" className="signal-node" />
            <text x="30" y="278">SYSTEMS</text><text x="110" y="198">PRODUCT</text><text x="230" y="118">DATA</text><text x="350" y="198">AI</text>
          </svg>
          <div className="system-bottom"><span>BUILD</span><span>CONNECT</span><span>REFINE</span></div>
        </div>
        <p className="hero-detail">{copy.hero.detail}</p>
      </section>

      <section className="work" id="work">
        <Reveal className="section-intro"><h2>{copy.work.title}</h2><p>{copy.work.intro}</p></Reveal>
        <div className="project-list">
          {copy.projects.map((project, index) => (
            <Reveal className="project-record" delay={index * .04} key={project.slug}>
              <div className="project-heading"><span>0{index + 1}</span><span>{project.year}</span><p>{project.category}</p><h3>{project.title}</h3></div>
              <ProjectVisual image={project.image} priority={index === 0} />
              <div className="project-info">
                <p className="project-summary">{project.summary}</p>
                <div><span className="info-label">{copy.work.contribution}</span><p>{project.detail}</p></div>
                <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{copy.work.live}<ArrowOutIcon size={15} /></a>}
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer">{copy.work.source}<ArrowOutIcon size={15} /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <Reveal className="section-intro"><h2>{copy.capabilities.title}</h2><p>{copy.capabilities.intro}</p></Reveal>
        <div className="capability-list">
          {copy.capabilityGroups.map((group, index) => <Reveal className="capability-row" delay={index * .06} key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p><ul>{group.tools.map((tool, toolIndex) => <motion.li key={tool} initial={reduceMotion ? false : { opacity: 0, scale: .88, y: 8 }} whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .42, delay: toolIndex * .045, ease: [.16, 1, .3, 1] }} whileHover={reduceMotion ? undefined : { y: -4 }}><span className="technology-mark" aria-hidden="true">{technologyMarks[tool] ?? tool.slice(0, 2).toUpperCase()}</span><span>{tool}</span></motion.li>)}</ul></Reveal>)}
        </div>
      </section>

      <section className="about" id="about">
        <Reveal className="about-layout"><span className="about-mark">DH / 02</span><h2>{copy.about.title}</h2><div className="about-copy"><p>{copy.about.body}</p><p>{copy.about.detail}</p></div></Reveal>
      </section>
      <SiteFooter />
    </main>
  );
}
