"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/lib/i18n/en";
import fa from "@/lib/i18n/fa";

type Lang = "en" | "fa";
type Dict = typeof en;

type Ctx = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  const t = useMemo(() => (lang === "fa" ? (fa as Dict) : (en as Dict)), [lang]);

  const value: Ctx = useMemo(() => ({ lang, t, setLang }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
