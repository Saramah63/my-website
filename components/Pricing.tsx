"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

function PlanCard({
  label,
  name,
  price,
  period,
  bullets,
  primary,
  cta,
}: {
  label?: string;
  name: string;
  price: string;
  period: string;
  bullets: string[];
  primary?: boolean;
  cta: string;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border p-6",
        primary ? "border-blue-600 shadow-md" : "border-slate-200",
      ].join(" ")}
    >
      {label ? (
        <div className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {label}
        </div>
      ) : null}

      <div className="text-sm font-semibold text-slate-500">{name}</div>
      <div className="mt-2 text-3xl font-bold text-slate-900">{price}</div>
      <div className="mt-1 text-sm text-slate-600">{period}</div>

      <ul className="mt-6 space-y-2 text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href="#get-started"
        className={[
          "mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium",
          primary
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-200 text-slate-700 hover:bg-slate-50",
        ].join(" ")}
      >
        {cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  const { t } = useLanguage();

  const { single, monthly, quarterly } = t.pricing.plans;

  return (
    <Section eyebrow={t.pricing.eyebrow} title={t.pricing.title} intro={t.pricing.intro}>
      <div className="grid gap-6 md:grid-cols-3">
        <PlanCard
          name={quarterly.name}
          price={quarterly.price}
          period={quarterly.period}
          bullets={quarterly.bullets}
          label={t.pricing.labels.bestValue}
          cta={quarterly.cta}
        />

        <PlanCard
          name={monthly.name}
          price={monthly.price}
          period={monthly.period}
          bullets={monthly.bullets}
          label={t.pricing.labels.mostPopular}
          primary
          cta={monthly.cta}
        />

        <PlanCard
          name={single.name}
          price={single.price}
          period={single.period}
          bullets={single.bullets}
          cta={single.cta}
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="text-lg font-semibold text-slate-900">{t.pricing.paymentsTitle}</div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
            {t.pricing.payments.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="text-lg font-semibold text-slate-900">{t.pricing.policiesTitle}</div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
            {t.pricing.policy.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
