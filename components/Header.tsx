"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const isFa = lang === "fa";

  const switchTo = (target: "en" | "fa") => {
    // تبدیل /en/... یا /fa/... به زبان جدید
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return router.push(`/${target}`);
    parts[0] = target;
    router.push("/" + parts.join("/"));
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-slate-900">
          Mindshift for Lifeshift
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-900">{t.nav.about}</a>
          <a href="#sessions" className="hover:text-slate-900">{t.nav.sessions}</a>
          <a href="#pricing" className="hover:text-slate-900">{t.nav.pricing}</a>
          <a href="#agreement" className="hover:text-slate-900">{t.nav.agreement}</a>
          <a href="#what-is-coaching" className="hover:text-slate-900">{t.nav.coaching}</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => switchTo(isFa ? "en" : "fa")}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            {isFa ? "English" : "فارسی"}
          </button>

          <a
            href="#get-started"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {t.common.getStarted}
          </a>
        </div>
      </div>
    </header>
  );
}
