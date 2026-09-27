"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/app/lib/content";
import { messages } from "@/app/lib/i18n";
import { FoldIcon, ThemeIcon } from "./icons";
import { usePreferences } from "./preferences-provider";

export function SiteHeader() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const copy = messages[locale];
  const isHome = usePathname() === "/";
  const navigation = [
    { href: "#work", label: copy.nav.work },
    { href: "#capabilities", label: copy.nav.capabilities },
    { href: "#about", label: copy.nav.about },
  ] as const;

  return (
    <header className="site-header">
      <Link className="brand" href={isHome ? "#top" : "/"} aria-label={`${profile.name}, home`}>
        <FoldIcon size={18} />
        <span>DANA / SE</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link href={isHome ? item.href : `/${item.href}`} key={item.href}>
            {item.label}
          </Link>
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
        <Link className="header-contact" href="/contact" aria-current={isHome ? undefined : "page"}>{copy.nav.contact}</Link>
      </div>
    </header>
  );
}
