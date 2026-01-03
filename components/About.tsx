"use client";

import React, { useMemo } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const isFa = lang === "fa";
  const dir = isFa ? "rtl" : "ltr";

  const c = useMemo(() => {
    return {
      kicker: isFa ? "درباره سارا محمودی" : "About Sara Mahmodi",
      title: isFa ? "کوچینگ ساختارمند برای تغییر واقعی" : "Structured coaching for real change",
      p1: isFa
        ? "من سارا محمودی هستم؛ کوچِ رشد فردی و رهبری. کارم این است که از «حس گیرکردن» شما، یک مسیر روشن بسازم: هدف‌گذاری، تصمیم‌گیری، اقدام، و پیگیری."
        : "I’m Sara Mahmodi, a personal growth and leadership coach. I turn the “stuck” feeling into a clear path: goals, decisions, action, and follow-through.",
      p2: isFa
        ? "رویکرد من عملی و انسانی است: همزمان با کار روی ذهنیت و باورها، روی سیستم‌ها و عادت‌های قابل اجرا هم کار می‌کنیم—به‌جای انگیزه‌محوری کوتاه‌مدت."
        : "My approach is practical and human: we work on mindset and beliefs, while building executable systems and habits—beyond short-term motivation.",
      bulletsTitle: isFa ? "حوزه‌های رایج کار" : "Common focus areas",
      bullets: isFa
        ? [
            "تغییر باور و الگوهای ذهنی",
            "ساخت عادت‌های ثروت‌ساز و پایدار",
            "شفافیت مسیر، تصمیم‌گیری و اولویت‌بندی",
            "اعتمادبه‌نفس، مرزبندی و رهبری فردی",
          ]
        : [
            "Belief change and mindset patterns",
            "Sustainable, wealth-building habits",
            "Clarity, decision-making, prioritization",
            "Confidence, boundaries, personal leadership",
          ],
      local: isFa
        ? "مقیم فنلاند — کوچینگ آنلاین برای سراسر جهان"
        : "Based in Finland — Coaching worldwide (Online)",
    };
  }, [isFa]);

  return (
    <section id="about" className="section" dir={dir}>
      <div className="container">
        <div className="sectionHead">
          <div className="kicker">{c.kicker}</div>
          <h2 className="h2 brandTitleGradient">{c.title}</h2>
          <p className="muted">{c.p1}</p>
          <p className="muted">{c.p2}</p>
        </div>

        <div className="card">
          <h3 className="h3">{c.bulletsTitle}</h3>
          <ul className="list">
            {c.bullets.map((b) => (
              <li key={b} className="listItem">
                <span className="dot" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="trustStrip">
            <span className="pill">⭐ 4.9/5</span>
            <span className="pill">{isFa ? "پاسخ‌گویی زیر 24 ساعت" : "Response &lt; 24h"}</span>
            <span className="pill">{isFa ? "کاملاً محرمانه" : "Confidential"}</span>
            <span className="pill">{c.local}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
