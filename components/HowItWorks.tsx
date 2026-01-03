"use client";

import React, { useMemo } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function HowitWorks() {
  const { lang } = useLanguage();
  const isFa = lang === "fa";
  const dir = isFa ? "rtl" : "ltr";

  const c = useMemo(() => {
    return {
      kicker: isFa ? "چطور کار می‌کنیم" : "How it works",
      title: isFa ? "سه مرحله ساده، نتیجه واقعی" : "Three simple steps, real outcomes",
      steps: isFa
        ? [
            {
              t: "۱) شفاف‌سازی هدف",
              d: "با چند سوال دقیق، مسئله اصلی، هدف واقعی و معیار موفقیت را مشخص می‌کنیم.",
            },
            {
              t: "۲) برنامه اقدام",
              d: "یک نقشه سبک اما قابل‌اجرا می‌سازیم: کارهای هفته، عادت‌ها، و نقاط کنترل.",
            },
            {
              t: "۳) پیگیری و اصلاح مسیر",
              d: "جلسه به جلسه پیشرفت را اندازه می‌گیریم و مسیر را بر اساس واقعیت تنظیم می‌کنیم.",
            },
          ]
        : [
            {
              t: "1) Clarity & goal definition",
              d: "We pinpoint the real problem, the true goal, and the success metrics.",
            },
            {
              t: "2) Action plan",
              d: "We build a lightweight but executable plan: weekly actions, habits, and checkpoints.",
            },
            {
              t: "3) Track & iterate",
              d: "We measure progress and adjust based on what’s actually happening in your life.",
            },
          ],
      note: isFa
        ? "هدف: شما بعد از هر جلسه دقیقاً می‌دانید گام بعدی چیست."
        : "Outcome: after each session you know exactly what to do next.",
      cta: isFa ? "رزرو جلسه" : "Book a session",
    };
  }, [isFa]);

  return (
    <section id="how-it-works" className="section" dir={dir}>
      <div className="container">
        <div className="sectionHead">
          <div className="kicker">{c.kicker}</div>
          <h2 className="h2">{c.title}</h2>
          <p className="muted">{c.note}</p>
        </div>

        <div className="grid3">
          {c.steps.map((s) => (
            <div key={s.t} className="card stepCard">
              <div className="stepIcon" aria-hidden="true" />
              <h3 className="h3">{s.t}</h3>
              <p className="muted">{s.d}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <a className="btn btnPrimary" href="#booking">
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
