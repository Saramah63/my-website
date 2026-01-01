"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

export default function Multilingual() {
  const { t, lang } = useLanguage();
  const isFa = lang === "fa";

  return (
    <Section eyebrow={t.multilingual.eyebrow} title={t.multilingual.title} intro={t.multilingual.intro}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900">{t.multilingual.languagesTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
              🇬🇧 {t.multilingual.english}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
              🇮🇷 {t.multilingual.farsi}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
              {isFa ? "RTL" : "LTR"}
            </span>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-slate-900">{t.multilingual.whyTitle}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
            {t.multilingual.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900">{t.multilingual.focusTitle}</h3>
          <div className="mt-4 grid gap-4">
            {t.multilingual.focus.map((f) => (
              <div key={f.title} className="rounded-xl bg-slate-50 p-4">
                <div className="font-semibold text-slate-900">{f.title}</div>
                <div className="mt-1 text-slate-600">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4">
            <div className="font-semibold text-slate-900">{t.multilingual.servingTitle}</div>
            <div className="mt-2 text-slate-600">{t.multilingual.serving}</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
