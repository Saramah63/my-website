"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

export default function WhatIsCoaching() {
  const { t } = useLanguage();

  return (
    <Section eyebrow={t.whatIsCoaching.eyebrow} title={t.whatIsCoaching.title} intro={t.whatIsCoaching.intro}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900">{t.whatIsCoaching.differsTitle}</h3>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><span className="font-semibold">Coaching:</span> {t.whatIsCoaching.coaching}</p>
            <p><span className="font-semibold">Therapy:</span> {t.whatIsCoaching.therapy}</p>
            <p><span className="font-semibold">Consulting:</span> {t.whatIsCoaching.consulting}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900">{t.whatIsCoaching.benefitsTitle}</h3>
          <div className="mt-4 grid gap-4">
            {t.whatIsCoaching.benefits.map((b) => (
              <div key={b.title} className="rounded-xl bg-slate-50 p-4">
                <div className="font-semibold text-slate-900">{b.title}</div>
                <div className="mt-1 text-slate-600">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="text-lg font-semibold text-slate-900">{t.whatIsCoaching.ctaTitle}</div>
        <a
          href="#get-started"
          className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          {t.whatIsCoaching.ctaButton}
        </a>
      </div>
    </Section>
  );
}
