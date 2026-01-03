"use client";

import React from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function Sessions() {
  const { lang } = useLanguage();
  const isFa = lang === "fa";

  return (
    <section id="sessions" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{isFa ? "جلسات و پکیج‌ها" : "Sessions & Packages"}</h2>
          <p className="muted">
            {isFa
              ? "هم جلسه تکی داریم، هم پکیج‌های ماهانه/سه‌ماهه برای نتیجه‌گیری واقعی."
              : "Choose single sessions or structured packages for real momentum."}
          </p>
        </div>

        <div className="grid2">
          <div className="card">
            <h3 className="h3">{isFa ? "این جلسات برای چه کسانی است؟" : "Who is this for?"}</h3>
            <ul className="list">
              <li>{isFa ? "کسانی که گیر ذهنی دارند و نیاز به مسیر روشن دارند" : "People stuck in loops who need clarity"}</li>
              <li>{isFa ? "رشد شغلی، تصمیم‌گیری، اعتمادبه‌نفس، مرزگذاری" : "Career growth, decisions, confidence, boundaries"}</li>
              <li>{isFa ? "ساخت عادت‌ها و تغییر ذهنیت برای نتایج پایدار" : "Habits & mindset shifts for sustainable results"}</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3">{isFa ? "رزرو سریع" : "Quick booking"}</h3>
            <p className="muted">
              {isFa ? "برای شروع، یک جلسه آشنایی کوتاه رزرو کن." : "Start with a short intro session."}
            </p>
            <a className="btn btnPrimary" href="#booking">
              {isFa ? "رفتن به بخش رزرو" : "Go to booking"}
            </a>

            <div className="divider" />

            <h4 className="h4">{isFa ? "پکیج‌ها" : "Packages"}</h4>
            <div className="miniGrid">
              <div className="miniCard">
                <div className="miniTitle">{isFa ? "تکی" : "Single"}</div>
                <div className="miniMeta">{isFa ? "$150 / جلسه" : "$150 / session"}</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">{isFa ? "ماهانه" : "Monthly"}</div>
                <div className="miniMeta">{isFa ? "$500 / ماه" : "$500 / month"}</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">{isFa ? "سه‌ماهه" : "3-Month"}</div>
                <div className="miniMeta">{isFa ? "$1,350 / ۳ ماه" : "$1,350 / 3 months"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
