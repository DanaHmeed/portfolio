"use client";

import { profile } from "@/app/lib/content";
import { messages } from "@/app/lib/i18n";
import { FoldIcon, ThemeIcon } from "./icons";
import { usePreferences } from "./preferences-provider";

export function SiteHeader() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const copy = messages[locale];
  const navigation = [
    { href: "#work", label: copy.nav.work },
    { href: "#capabilities", label: copy.nav.capabilities },
    { href: "#about", label: copy.nav.about },
  ] as const;

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
        <FoldIcon size={18} />
        <span>DANA / SE</span>
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <div className="language-switch" aria-label="Language">
          <button className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")} lang="en">EN</button>
          <span>/</span>
          <button className={locale === "ar" ? "active" : ""} onClick={() => setLocale("ar")} lang="ar">AR</button>
        </div>
        <button className="theme-switch" onClick={toggleTheme} aria-label={theme === "dark" ? "Use light theme" : "Use dark theme"}>
          <ThemeIcon isLight={theme === "dark"} size={18} />
        </button>
        <a className="header-contact" href={`mailto:${profile.email}`}>{copy.nav.contact}</a>
      </div>
    </header>
  );
}
