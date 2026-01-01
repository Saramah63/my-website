"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en, { type Dictionary } from "./i18n/en";
import fa from "./i18n/fa";

type Lang = "en" | "fa";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useMemo<Dictionary>(() => (lang === "fa" ? (fa as Dictionary) : en), [lang]);

  // Sync <html lang> and direction globally
  useEffect(() => {
    const isFa = lang === "fa";
    document.documentElement.lang = isFa ? "fa" : "en";
    document.documentElement.dir = isFa ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
