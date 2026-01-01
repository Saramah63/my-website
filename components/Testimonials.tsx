"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <Section eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} intro={t.testimonials.intro}>
      <div className="grid gap-6 md:grid-cols-3">
        {t.testimonials.items.map((x) => (
          <div key={x.name} className="rounded-2xl border border-slate-200 p-6">
            <p className="text-slate-700">“{x.quote}”</p>
            <div className="mt-5 font-semibold text-slate-900">{x.name}</div>
            <div className="text-sm text-slate-600">{x.role}</div>
            <div className="mt-3 text-sm font-medium text-blue-700">{x.result}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
