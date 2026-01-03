"use client";

import React from "react";
import { useLanguage } from "../lib/LanguageContext";

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 17.27l5.18 3.18-1.64-5.81L20 10.9l-5.9-.45L12 5l-2.1 5.45-5.9.45 4.46 3.74-1.64 5.81z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const { lang } = useLanguage();
  const isFa = lang === "fa";

  const items = isFa
    ? [
        {
          name: "زهره",
          title: "کوچ",
          text: `سارا به طور شگفت انگیزی پذیرش بالایی داره. فکر می‌کنم هر موقعیت به ظاهر عجیبی رو به سرعت هضم می‌کنه و مراجع رو در فضای امنی می‌پذیره.
همدلی بالایی داره و همیشه هم سعی می‌کنه خودش رو اپدیت کنه.
اینها و سوالات تحلیلی خوبش باعث شد من در شرایطی که بودم جهت بگیرم و راهم قابل پذیرش‌تر و روشن‌تر بشه.`,
        },
        {
          name: "فاطمه رضایی",
          title: "دکترای مدیریت کسب‌وکار | لایف کوچ",
          text: `ممنون سارا جانم تو جلسات کوچینگی که باهات دارم خیلی قشنگ با من می‌رقصی و خیلی به جلساتی که باهات دارم معنا می‌دی و از تشبیه و استعاره خیلی خوب استفاده می‌کنی و پایان تمام جلساتم به آگاهی می‌رسم و اقدام بر می‌داریم ❤️❤️
واقعاً ممنونم ازت`,
        },
        {
          name: "فاطمه",
          title: "روان‌شناس و کوچ والدگری",
          text: `من تونستم با همراهی شما سارای عزیز به عنوان کوچ موضوع دغدغه‌ی نظم در کارهای آشپزخونه رو مدیریت کنم.
همیشه فکر می‌کردم مشکل از بی‌نظمی منه. ولی تو جلسات تونستم توانمندی‌هام رو ببینم و به‌جای دنبال‌کردن نظم‌های کلیشه‌ای، مدل نظم مخصوص خودم رو پیدا کنم.
بعد از چند جلسه، به نظمی رسیدم که واقعی، قابل اجرا و موندگاره
و ممنونم ازت
من روان‌شناس و کوچ والدگری هستم 🩵`,
        },
      ]
    : [
        {
          name: "Zahra",
          title: "Coach",
          text: `Sara has an exceptionally high level of acceptance. I think she quickly processes even seemingly unusual situations and welcomes the client in a safe space.
She has strong empathy and always tries to keep herself up to date.
These qualities, together with her strong analytical questions, helped me find direction in the situation I was in and made my path more acceptable and clearer.`,
        },
        {
          name: "Fatemeh Rezaei",
          title: "DBA | Life Coach",
          text: `Thank you, dear Sara. In the coaching sessions I have with you, you move with me so beautifully and give deep meaning to our sessions.
You use metaphors and analogies very effectively, and at the end of every session I reach awareness and we take action ❤️❤️
I am truly grateful to you.`,
        },
        {
          name: "Fatemeh",
          title: "Psychologist & Parenting Coach",
          text: `With your support, dear Sara, as my coach, I was able to manage my concern about organization in kitchen tasks.
I always thought the problem was my lack of order. But during the sessions, I was able to see my capabilities and instead of following stereotypical systems of organization, I found my own personal model of order.
After a few sessions, I reached an order that is real, practical, and sustainable.
Thank you.
I am a psychologist and a parenting coach 🩵`,
        },
      ];

  return (
    <section id="testimonials" className="section" dir={isFa ? "rtl" : "ltr"}>
      <div className="container">
        <h2 className="h2">{isFa ? "نظرات مراجعان" : "Client Testimonials"}</h2>

        <div className="grid2">
          {items.map((t) => (
            <div key={t.name} className="reviewCard">
              <div className="reviewTop">
                <div>
                  <strong>{t.name}</strong>
                  <div className="muted">{t.title}</div>
                </div>
                <div className="reviewStars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
              <p style={{ whiteSpace: "pre-line" }}>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
