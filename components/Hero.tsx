"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="border-b bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
            {t.hero.badge}
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-slate-600">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#get-started"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              {t.common.startYourJourney}
            </a>
            <a
              href="#what-is-coaching"
              className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {t.common.learnMore}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-slate-900">{t.hero.stats.clientsValue}</div>
              <div className="text-sm text-slate-600">{t.hero.stats.clients}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{t.hero.stats.yearsValue}</div>
              <div className="text-sm text-slate-600">{t.hero.stats.years}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{t.hero.stats.successValue}</div>
              <div className="text-sm text-slate-600">{t.hero.stats.success}</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg" />
          <div className="pointer-events-none absolute right-6 top-6 rounded-xl bg-white/90 px-4 py-3 text-sm shadow">
            <div className="font-medium text-slate-900">{t.hero.clientSuccess}</div>
            <div className="text-slate-700">⭐ {t.hero.rating}</div>
          </div>
          <div className="pointer-events-none absolute bottom-6 left-6 rounded-xl bg-white/90 px-4 py-3 text-sm shadow">
            <div className="text-slate-600">{t.hero.nextAvailable}</div>
            <div className="font-medium text-slate-900">{t.hero.thisWeek}</div>
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl bg-white/10 px-6 py-4 text-center text-white">
              <div className="text-lg font-semibold">{t.hero.rightCardTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
