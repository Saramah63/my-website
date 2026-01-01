"use client";

import { useLanguage } from "../lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">
            {t.hero.badge}
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            {t.hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-slate-600">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#get-started"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              {t.hero.primaryCta}
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10">
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-blue-600 text-white">
            <span className="text-lg">Your transformation starts here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
