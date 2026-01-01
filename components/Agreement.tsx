"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

export default function Agreement() {
  const { t } = useLanguage();

  return (
    <Section eyebrow={t.agreement.eyebrow} title={t.agreement.title} intro={t.agreement.intro}>
      <div className="rounded-2xl border border-slate-200 p-6">
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {t.agreement.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <a
          href="/api/agreement"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          {t.agreement.downloadBtn}
        </a>
      </div>
    </Section>
  );
}
