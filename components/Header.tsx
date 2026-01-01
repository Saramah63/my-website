"use client";

import { useLanguage } from "../lib/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "en" ? "fa" : "en");
    // برای RTL و lang روی html:
    document.documentElement.lang = lang === "en" ? "fa" : "en";
    document.documentElement.dir = lang === "en" ? "rtl" : "ltr";
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-slate-900">
          Mindshift for Lifeshift
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-900">
            {t.nav.about}
          </a>
          <a href="#sessions" className="hover:text-slate-900">
            {t.nav.sessions}
          </a>
          <a href="#pricing" className="hover:text-slate-900">
            {t.nav.pricing}
          </a>
          <a href="#agreement" className="hover:text-slate-900">
            {t.nav.agreement}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            {lang === "en" ? "فارسی" : "English"}
          </button>

          <a
            href="#get-started"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
