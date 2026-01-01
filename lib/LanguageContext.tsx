"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import en from "./i18n/en";
import fa from "./i18n/fa";

type Lang = "en" | "fa";
type Dict = typeof en;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useMemo(() => (lang === "fa" ? (fa as Dict) : (en as Dict)), [lang]);

  const toggle = () => setLang((p) => (p === "en" ? "fa" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
