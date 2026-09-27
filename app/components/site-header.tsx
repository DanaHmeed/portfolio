"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/app/lib/content";
import { messages } from "@/app/lib/i18n";
import { FoldIcon, ThemeIcon } from "./icons";
import { usePreferences } from "./preferences-provider";

export function SiteHeader() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const copy = messages[locale];
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id ? `#${entry.target.id}` : "");
      }
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    document.querySelectorAll(".hero, #work, #capabilities, #about, footer").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);
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
          <Link href={isHome ? item.href : `/${item.href}`} key={item.href} aria-current={isHome && activeSection === item.href ? "location" : undefined} onClick={() => setActiveSection(item.href)}>
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
        <Link className="header-contact" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>{copy.nav.contact}</Link>
      </div>
    </header>
  );
}
