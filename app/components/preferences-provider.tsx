"use client";

import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import type { Locale } from "@/app/lib/i18n";

type Theme = "dark" | "light";

interface PreferencesContextValue {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export function PreferencesProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark");
    setLocaleState(localStorage.getItem("portfolio-locale") === "ar" ? "ar" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const value = useMemo<PreferencesContextValue>(() => ({ locale, theme, setLocale: setLocaleState, toggleTheme: () => setTheme((current) => current === "dark" ? "light" : "dark") }), [locale, theme]);
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences must be used inside PreferencesProvider");
  return value;
}
