"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

export default function About() {
  const { t } = useLanguage();

  return (
    <Section eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.subtitle}>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900">{t.about.storyTitle}</h3>
          <p className="mt-4 whitespace-pre-line text-slate-600">{t.about.story}</p>
        </div>

        <div className="grid gap-4">
          {t.about.pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-base font-semibold text-slate-900">{p.title}</div>
              <div className="mt-2 text-slate-600">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
