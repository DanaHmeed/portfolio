"use client";

import Link from "next/link";
import { profile } from "@/app/lib/content";
import { messages } from "@/app/lib/i18n";
import { ArrowOutIcon } from "./icons";
import { usePreferences } from "./preferences-provider";

export function SiteFooter() {
  const { locale } = usePreferences();
  const copy = messages[locale].footer;
  return (
    <footer id="contact">
      <div className="footer-prompt">
        <p>{copy.availability}</p>
        <Link href="/contact">
          {copy.title} <ArrowOutIcon size={28} />
        </Link>
      </div>
      <div className="footer-meta">
        <span>{profile.name} / Software Engineer</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
        </div>
        <span>{copy.built}</span>
      </div>
    </footer>
  );
}
