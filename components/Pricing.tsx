"use client";

import { useLanguage } from "../lib/LanguageContext";

export default function Pricing() {
  const { t, lang } = useLanguage();
const isFa = lang === "fa";

  const plans = [
    {
      key: "single",
      highlight: false,
      badge: "",
      featuresEn: [
        "60-minute coaching session",
        "Pre-session preparation form",
        "Post-session summary",
      ],
      featuresFa: [
        "جلسه ۶۰ دقیقه‌ای کوچینگ",
        "فرم آماده‌سازی قبل از جلسه",
        "خلاصه جلسه بعد از پایان",
      ],
    },
    {
      key: "monthly",
      highlight: true,
      badge: "Most Popular",
      featuresEn: [
        "4 coaching sessions (60 min each)",
        "Pre-session preparation forms",
        "Email support between sessions",
        "Progress tracking",
        "15% savings vs single sessions",
      ],
      featuresFa: [
        "۴ جلسه کوچینگ (هر کدام ۶۰ دقیقه)",
        "فرم‌های آماده‌سازی قبل از جلسات",
        "پشتیبانی ایمیلی بین جلسات",
        "پیگیری پیشرفت",
        "۱۵٪ صرفه‌جویی نسبت به جلسه تکی",
      ],
    },
    {
      key: "quarterly",
      highlight: false,
      badge: "Best Value",
      featuresEn: [
        "12 coaching sessions (60 min each)",
        "Initial goal-setting intensive",
        "Mid-point progress review",
        "Priority email support",
        "Custom resources & tools",
        "25% savings vs single sessions",
      ],
      featuresFa: [
        "۱۲ جلسه کوچینگ (هر کدام ۶۰ دقیقه)",
        "جلسه فشرده تعیین هدف اولیه",
        "مرور پیشرفت در میانه مسیر",
        "پشتیبانی ایمیلی اولویت‌دار",
        "ابزارها و منابع اختصاصی",
        "۲۵٪ صرفه‌جویی نسبت به جلسه تکی",
      ],
    },
  ] as const;

  return (
    <section id="pricing" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-700">{t.pricing.title}</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {t.pricing.subtitle}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const plan =
              p.key === "single"
                ? t.pricing.plans.single
                : p.key === "monthly"
                ? t.pricing.plans.monthly
                : t.pricing.plans.quarterly;

            // If user is in Farsi mode, show FA features; otherwise EN
            const features = isFa ? p.featuresFa : p.featuresEn;


            return (
              <PriceCard
                key={p.key}
                title={plan.name}
                price={plan.price}
                subtitle={plan.note}
                highlight={p.highlight}
                badge={p.badge ? (isFa ? translateBadgeFa(p.badge) : p.badge) : undefined}
                features={features}
                cta={t.pricing.cta}
              />
            );
          })}
        </div>

        {/* Policies */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">
              {isRtl() ? "سیاست‌های انعطاف‌پذیر" : "Flexible Policies"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                • {isRtl() ? "امکان تغییر زمان با اطلاع ۲۴ ساعت قبل" : "24-hour notice for rescheduling"}
              </li>
              <li>
                • {isRtl() ? "بازپرداخت جلسات استفاده‌نشده تا ۳۰ روز" : "Unused sessions refundable within 30 days"}
              </li>
              <li>
                • {isRtl() ? "تعداد محدود اسلایدینگ‌اسکیل برای شرایط خاص" : "Sliding scale options available"}
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">
              {isRtl() ? "روش‌های پرداخت" : "Payment Methods"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• {isRtl() ? "کارت بانکی" : "Credit card"}</li>
              <li>• {isRtl() ? "انتقال بانکی" : "Bank transfer"}</li>
              <li>• PayPal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  subtitle,
  features,
  cta,
  highlight,
  badge,
}: {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 ${
        highlight ? "border-blue-600 bg-white shadow-lg" : "border-slate-200 bg-white"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
          {badge}
        </div>
      )}

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <div className="mt-3">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        <span className="ml-1 text-sm text-slate-500">{subtitle}</span>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <a
        href="#get-started"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold ${
          highlight
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-200 text-slate-900 hover:bg-slate-50"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function isRtl() {
  if (typeof document === "undefined") return false;
  return document.documentElement.dir === "rtl";
}

function translateBadgeFa(badge: string) {
  if (badge === "Most Popular") return "محبوب‌ترین";
  if (badge === "Best Value") return "به‌صرفه‌ترین";
  return badge;
}
