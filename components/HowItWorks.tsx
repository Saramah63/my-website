"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <Section eyebrow={t.howItWorks.eyebrow} title={t.howItWorks.title} intro={t.howItWorks.intro}>
      <div className="grid gap-4 md:grid-cols-4">
        {t.howItWorks.steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-semibold text-slate-500">{s.n}</div>
            <div className="mt-2 font-semibold text-slate-900">{s.title}</div>
            <div className="mt-2 text-slate-600">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 p-6">
        <div className="text-lg font-semibold text-slate-900">{t.howItWorks.sessionFlowTitle}</div>
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {t.howItWorks.flow.map((f) => (
            <div key={f.t} className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-500">{f.m}</div>
              <div className="mt-1 font-semibold text-slate-900">{f.t}</div>
              <div className="mt-1 text-sm text-slate-600">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
