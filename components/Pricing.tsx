"use client";

import React from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function Pricing() {
  const { lang } = useLanguage();
  const isFa = lang === "fa";

  const title = isFa ? "پکیج‌ها و تعرفه‌ها" : "Pricing & Packages";
  const subtitle = isFa
    ? "پکیجی را انتخاب کن که با مسیر رشد تو هماهنگ است."
    : "Choose the plan that fits your growth journey.";

  const cards = isFa
    ? [
        {
          badge: "Best Value",
          name: "پکیج سه‌ماهه",
          price: "$1,350",
          note: "برای ۳ ماه",
          items: [
            "۱۲ جلسه ۶۰ دقیقه‌ای",
            "جلسه هدف‌گذاری عمیق",
            "بررسی پیشرفت در میانه مسیر",
            "پشتیبانی ایمیلی اولویت‌دار",
            "منابع و ابزارهای اختصاصی",
            "۲۵٪ صرفه‌جویی نسبت به تک‌جلسه",
          ],
          primary: false,
        },
        {
          badge: "Most Popular",
          name: "پکیج ماهانه",
          price: "$500",
          note: "در ماه",
          items: [
            "۴ جلسه ۶۰ دقیقه‌ای",
            "فرم آماده‌سازی قبل جلسه",
            "پشتیبانی ایمیلی بین جلسات",
            "پیگیری پیشرفت",
            "۱۵٪ صرفه‌جویی نسبت به تک‌جلسه",
          ],
          primary: true,
        },
        {
          badge: "",
          name: "جلسه تکی",
          price: "$150",
          note: "هر جلسه",
          items: ["جلسه ۶۰ دقیقه‌ای", "فرم آماده‌سازی قبل جلسه", "خلاصه پس از جلسه"],
          primary: false,
        },
      ]
    : [
        {
          badge: "Best Value",
          name: "3-Month Package",
          price: "$1,350",
          note: "for 3 months",
          items: [
            "12× 60-min sessions",
            "Deep goal-setting intensive",
            "Mid-point progress review",
            "Priority email support",
            "Custom resources & tools",
            "25% savings vs single sessions",
          ],
          primary: false,
        },
        {
          badge: "Most Popular",
          name: "Monthly Package",
          price: "$500",
          note: "per month",
          items: [
            "4× 60-min sessions",
            "Pre-session preparation form",
            "Email support between sessions",
            "Progress tracking",
            "15% savings vs single sessions",
          ],
          primary: true,
        },
        {
          badge: "",
          name: "Single Session",
          price: "$150",
          note: "per session",
          items: ["60-min coaching session", "Pre-session form", "Post-session summary"],
          primary: false,
        },
      ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{title}</h2>
          <p className="muted">{subtitle}</p>
        </div>

        <div className="pricingGrid">
          {cards.map((c) => (
            <div key={c.name} className={`priceCard ${c.primary ? "isPopular" : ""}`}>
              {c.badge ? <div className="pill">{c.badge}</div> : <div style={{ height: 28 }} />}
              <h3 className="h3">{c.name}</h3>
              <div className="priceRow">
                <div className="price">{c.price}</div>
                <div className="muted">{c.note}</div>
              </div>

              <ul className="list">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>

              <a className={`btn ${c.primary ? "btnPrimary" : "btnGhost"}`} href="#booking">
                {isFa ? "رزرو" : "Book"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
