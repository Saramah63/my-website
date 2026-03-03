"use client";

import React, { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// اگر فایل‌هایت اینجاست (طبق اسکرین‌شات): lib/i18n/fa.ts و lib/i18n/en.ts
import fa from "@/lib/i18n/fa";
import en from "@/lib/i18n/en";

export type Lang = "fa" | "en";

type Dict = Record<string, any>;

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  isFa: boolean;
  t: Dict;
  setLang: (l: Lang) => void;
  switchLang: () => void;
};

const dictionaries: Record<Lang, Dict> = { fa, en };
const LANG_COOKIE = "lang";
const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// default context (Fail-safe): باعث می‌شود اگر Provider هم نبود کرش نکند
const LanguageContext = createContext<Ctx>({
  lang: "en",
  dir: "ltr",
  isFa: false,
  t: dictionaries.en,
  setLang: () => {},
  switchLang: () => {},
});

function detectLangFromPath(pathname: string | null): Lang {
  if (!pathname) return "en";
  return pathname.startsWith("/fa") ? "fa" : "en";
}

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const detected = detectLangFromPath(pathname);
  const [lang, setLangState] = useState<Lang>(initialLang ?? detected);

  // اگر کاربر از /fa به /en رفت، state هم sync شود
  useEffect(() => {
    const next = initialLang ?? detected;
    setLangState(next);
  }, [initialLang, detected]);

  useEffect(() => {
    document.cookie = `${LANG_COOKIE}=${lang};path=/;max-age=${LANG_COOKIE_MAX_AGE};samesite=lax`;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    router.push(l === "fa" ? "/fa" : "/en");
  };

  const switchLang = () => setLang(lang === "fa" ? "en" : "fa");

  const value = useMemo<Ctx>(() => {
    const isFa = lang === "fa";
    return {
      lang,
      isFa,
      dir: isFa ? "rtl" : "ltr",
      t: dictionaries[lang] ?? dictionaries.en,
      setLang,
      switchLang,
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  // دیگر throw نمی‌کند. حتی اگر Provider نباشد، default برمی‌گرداند.
  return useContext(LanguageContext);
}
