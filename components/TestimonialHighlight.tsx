"use client";

type Lang = "fa" | "en";

const STARS = "★★★★★";

export default function TestimonialHighlight({ lang }: { lang: Lang }) {
  const isFa = lang === "fa";

  // هایلایت: «زهره - کوچ» (وفادار به متن اصلی برای FA)
  const quoteFa =
    "سارا به طور شگفت انگیزی پذیرش بالایی داره. فکر می کنم هر موقعیت به ظاهر عجیبی رو به سرعت هضم می کنه و مراجع رو در فضای امنی می پذیره. همدلی بالایی داره و همیشه هم سعی می کنه خودش رو اپدیت کنه. اینها و سوالات تحلیلی خوبش باعث شد من در شرایطی که بودم جهت بگیرم و راهم قابل پذیرش تر و روشن تر بشه.";
  const quoteEn =
    "Sara has an exceptionally high level of acceptance. I feel she quickly processes even seemingly unusual situations and welcomes the client in a safe space. She has strong empathy and always tries to keep herself updated. These qualities—along with her strong analytical questions—helped me find direction, and my path became more acceptable shown and clearer.";

  return (
    <section className="section" aria-label="Testimonial highlight">
      <div className="container">
        <div className="highlightCard">
          <div className="highlightTop">
            <div className="reviewName">{isFa ? "زهره — کوچ" : "Zohreh — Coach"}</div>
            <div className="highlightStars" aria-label="5 stars">
              {STARS}
            </div>
          </div>

          <p className="highlightQuote">{isFa ? quoteFa : quoteEn}</p>

          <div className="muted">
            {isFa ? "⭐ 4.9/5 — پاسخ‌گویی زیر ۲۴ ساعت — کاملاً محرمانه" : "⭐ 4.9/5 — Response < 24h — Fully confidential"}
          </div>

          <div className="highlightActions">
            <a className="btn btnPrimary" href="#booking">
              {isFa ? "رزرو جلسه رایگان" : "Book Free Session"}
            </a>
            <a className="btn" href="#testimonials">
              {isFa ? "دیدن نظرات بیشتر" : "View more testimonials"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
