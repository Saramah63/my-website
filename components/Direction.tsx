"use client";

import { useEffect } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function Direction() {
  const { lang } = useLanguage();

  useEffect(() => {
    const isFa = lang === "fa";
    document.documentElement.lang = isFa ? "fa" : "en";
    document.documentElement.dir = isFa ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
