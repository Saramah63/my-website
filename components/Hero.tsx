"use client";

import { usePathname } from "next/navigation";
import FadeUp from "./motion/FadeUp";

export default function Hero() {
  const pathname = usePathname();
  const isFa = pathname.startsWith("/fa");
  const CALENDLY = "https://calendly.com/saramah63/30min";
  const highlight = (isFa: boolean) => ({
  name: isFa ? "زهره - کوچ" : "Zohreh — Coach",
  quote: isFa
    ? "سارا به طور شگفت انگیزی پذیرش بالایی داره. فکر می کنم هر موقعیت به ظاهر عجیبی رو به سرعت هضم می کنه و مراجع رو در فضای امنی می پذیره. همدلی بالایی داره و همیشه هم سعی می کنه خودش رو اپدیت کنه. اینها و سوالات تحلیلی خوبش باعث شد من در شرایطی که بودم جهت بگیرم و راهم قابل پذیرش تر و روشن تر بشه."
    : "Sara has an amazingly high level of acceptance. I think she quickly processes any seemingly unusual situation and welcomes the client in a safe space. She has strong empathy and always tries to keep herself updated. These, along with her good analytical questions, helped me find direction in my situation and made my path more acceptable and clearer.",
});

  const t = isFa
    ? {
        badge: "کوچینگ حرفه‌ای | آنلاین و بین‌المللی",
        title: "تغییر ذهن = تغییر زندگی",
        subtitle:
          "جلسات کوچینگ نتیجه‌محور برای شفاف‌سازی هدف، ایجاد عادت‌های پایدار، و ساخت مسیر رشد شخصی و حرفه‌ای.",
        trust: "⭐ 4.9/5 — پاسخ‌گویی زیر ۲۴ ساعت — کاملاً محرمانه",
        cta: "رزرو جلسه رایگان",
        cta2: "مشاهده تعرفه‌ها",
      }
    : {
        badge: "Professional Coaching | Online Worldwide",
        title: "MindShift = LifeShift",
        subtitle:
          "Outcome-driven coaching to clarify goals, build sustainable habits, and accelerate personal & professional growth.",
        trust: "⭐ 4.9/5 — Response < 24h — Fully confidential",
        cta: "Book Free Session",
        cta2: "View Pricing",
      };

  return (
    <section className="hero">
      <div className="container heroInner">
        <div className="heroLeft">
          <FadeUp>
            <div className="pill">{t.badge}</div>
          </FadeUp>

          <FadeUp delay={80}>
            <h1 className="heroTitle">{t.title}</h1>
          </FadeUp>

          <FadeUp delay={140}>
            <p className="heroSubtitle">{t.subtitle}</p>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="trustStrip">{t.trust}</div>
          </FadeUp>

          <FadeUp delay={260}>
            <div className="heroActions">
              <a className="button buttonPrimary" href={CALENDLY} target="_blank" rel="noreferrer">
                {t.cta}
              </a>
              <a className="button buttonGhost" href="#pricing">
                {t.cta2}
              </a>
            </div>
          </FadeUp>
        </div>

        <div className="heroRight">
          <FadeUp delay={160}>
            <div className="heroCard">
              <div className="heroCardTitle">{isFa ? "رزرو سریع" : "Quick Booking"}</div>
              <div className="heroCardText">
                {isFa
                  ? "جلسه ۳۰ دقیقه‌ای رایگان برای شروع. از همین‌جا مستقیم وارد Calendly شو."
                  : "Free 30-min intro session. Jump directly to Calendly to book."}
              </div>
              <a
                className="btn btnPrimary"
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isFa ? "رزرو جلسه رایگان" : "Book Free Session"}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
