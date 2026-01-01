"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

export default function Sessions() {
  const { t } = useLanguage();

  return (
    <Section eyebrow={t.sessions.eyebrow} title={t.sessions.title} intro={t.sessions.intro}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.sessions.cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="text-base font-semibold text-slate-900">{c.title}</div>
            <div className="mt-2 text-slate-600">{c.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
