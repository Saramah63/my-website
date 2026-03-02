import Link from "next/link";
import type { Metadata } from "next";
import { STRATEGIC_SESSION_PRICE, SESSION_DURATION } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Work With Me | Sara Mahmodi",
  description:
    "Strategic, structured coaching offers designed for clarity, execution, and measurable progress.",
  openGraph: {
    title: "Work With Me | Sara Mahmodi",
    description:
      "Strategic, structured coaching offers designed for clarity, execution, and measurable progress.",
    type: "website",
  },
};

export default async function WorkWithMePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";
  const base = isFa ? "/fa" : "/en";
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{isFa ? "با من کار کنید" : "Work With Me"}</p>
          <h1 className="h1">
            {isFa ? "با من کار کنید" : "Structured paths for strategic reinvention."}
          </h1>
          <p className="muted">
            {isFa
              ? "مسیرهای ساختارمند برای بازآفرینی استراتژیک."
              : "Choose the level of support that fits your timeline, constraints, and ambition."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card offerCard">
            <p className="eyebrow">{isFa ? "جلسه استراتژیک بازآفرینی" : "Strategic Reinvention Session"}</p>
            <h2 className="h2">{isFa ? "جلسه استراتژیک بازآفرینی" : "Strategic Reinvention Session"}</h2>
            <p className="muted">
              {isFa
                ? "این جلسه برای افرادی مناسب است که:"
                : "For individuals facing an important decision point or experiencing direction uncertainty."}
            </p>
            {isFa ? (
              <ul className="list">
                <li className="listItem"><span className="dot" aria-hidden="true" />در نقطه تصمیم‌گیری مهمی قرار دارند</li>
                <li className="listItem"><span className="dot" aria-hidden="true" />بین چند مسیر مردد هستند</li>
                <li className="listItem"><span className="dot" aria-hidden="true" />یا احساس می‌کنند پراکندگی ذهنی مانع پیشرفتشان شده است</li>
              </ul>
            ) : (
              <p className="muted">Includes clarity mapping, constraint analysis, and a 14-day execution plan.</p>
            )}
            {isFa && (
              <>
                <p className="muted">در این جلسه ۶۰ تا ۹۰ دقیقه‌ای:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />وضعیت فعلی شما به‌صورت ساختارمند تحلیل می‌شود</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />مهم‌ترین محدودیت‌ها و گلوگاه‌ها مشخص می‌شود</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />یک نقشه روشن برای ۱۴ روز آینده طراحی می‌شود</li>
                </ul>
                <p className="muted">نتیجه: شما جلسه را با وضوح، اولویت‌بندی مشخص و برنامه اجرایی کوتاه‌مدت ترک می‌کنید.</p>
              </>
            )}
            <Link className="btn btnPrimary" href={`${base}/apply`}>
              {isFa ? "رزرو" : "Book"}
            </Link>
          </div>

          <div className="card offerCard">
            <p className="eyebrow">{isFa ? "برنامه سه‌ماهه معماری بازآفرینی (۱:۱)" : "Three-Month Reinvention Architecture (1:1)"}</p>
            <h2 className="h2">{isFa ? "برنامه سه‌ماهه معماری بازآفرینی (۱:۱)" : "Three-Month Reinvention Architecture (1:1)"}</h2>
            {isFa ? (
              <>
                <p className="muted">برای چه کسانی مناسب است:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />افرادی که به تحول سطحی قانع نیستند</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />مهاجرانی که می‌خواهند مسیر حرفه‌ای و هویتی خود را بازطراحی کنند</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />کسانی که به ساختار، پیگیری و اجرا نیاز دارند</li>
                </ul>
                <p className="muted">ساختار برنامه:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />همکاری منظم هفتگی یا دو‌هفته‌ای</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />نقاط عطف ماهانه</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />تمرین‌ها و پیگیری بین جلسات</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />طراحی سیستم عادت و چارچوب تصمیم‌گیری</li>
                </ul>
                <p className="muted">تمرکز برنامه:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />بازتعریف هویت</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />معماری عادت‌ها</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />طراحی سیستم اجرایی</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />تثبیت جهت حرفه‌ای یا مهاجرتی</li>
                </ul>
                <p className="muted">نتیجه نهایی: در پایان سه ماه، شما دارای مسیر شفاف، سیستم اجرایی پایدار و الگوی تصمیم‌گیری ساختارمند خواهید بود.</p>
                <p className="muted">این برنامه برای افرادی طراحی شده که آماده اجرای واقعی هستند، نه صرفاً الهام گرفتن.</p>
              </>
            ) : (
              <>
                <p className="muted">Structured engagement with defined milestones, habit architecture, and execution system.</p>
                <p className="muted">Outcome: clarity, structure, and sustainable forward movement.</p>
                <p className="muted">This program is designed for execution, not inspiration.</p>
              </>
            )}
            <Link className="btn" href={`${base}/apply`}>
              {isFa ? "درخواست" : "Apply"}
            </Link>
            <Link className="btn btnGhost" href={`${base}/1-1`}>
              {isFa ? "جزئیات برنامه" : "1:1 details"}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card offerCard">
            <p className="eyebrow">{isFa ? "آزمایشگاه بازآفرینی – برنامه گروهی ۸ هفته‌ای" : "Group Program — Reinvention Lab"}</p>
            <h2 className="h2">{isFa ? "آزمایشگاه بازآفرینی – برنامه گروهی ۸ هفته‌ای" : "Reinvention Lab — 8 weeks"}</h2>
            {isFa ? (
              <>
                <p className="muted">مناسب برای:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />افرادی که از انرژی جمعی و پاسخگویی گروهی انگیزه می‌گیرند</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />کسانی که می‌خواهند با هزینه متعادل‌تر، ساختار حرفه‌ای داشته باشند</li>
                </ul>
                <p className="muted">شامل:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />جلسات هفتگی گروهی</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />تمرین‌های ساختارمند</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />سیستم پیگیری</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />چارچوب اجرایی مشترک</li>
                </ul>
                <p className="muted">نتیجه: حرکت پیوسته با حمایت جمعی و ساختار مشخص.</p>
              </>
            ) : (
              <p className="muted">Cohort-based execution and accountability with weekly sessions and structured assignments.</p>
            )}
            <Link className="btn" href={`${base}/apply`}>
              {isFa ? "لیست انتظار" : "Join Waitlist"}
            </Link>
          </div>

          <div className="card offerCard">
            <p className="eyebrow">{isFa ? "ارتقای بنیاد دیجیتال" : "Digital Foundation Upgrade"}</p>
            <h2 className="h2">{isFa ? "ارتقای بنیاد دیجیتال" : "Digital Foundation"}</h2>
            <p className="muted">
              {isFa
                ? "ارتقای اختیاری برای کارآفرینان. ارائه از طریق Donepage."
                : "Optional upgrade for entrepreneurs. Delivered via Donepage."}
            </p>
            <Link className="btn" href={`${base}/digital-foundation`}>
              {isFa ? "جزئیات" : "View details"}
            </Link>
            <a className="btn btnGhost" href="https://donepage.co" target="_blank" rel="noreferrer">
              {isFa ? "ورود به Donepage" : "Go to Donepage"}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">{isFa ? "سرمایه‌گذاری" : "Investment"}</h2>
          </div>
          <div className="grid2">
            <div className="card">
              <h3 className="h3">{isFa ? "جلسه استراتژیک" : "Strategic Session"}</h3>
              <p className="muted">{isFa ? "مدت" : "Duration"}: {SESSION_DURATION || (isFa ? "۶۰ تا ۹۰ دقیقه" : "60–90 minutes")}</p>
              <p className="muted">{isFa ? "سرمایه‌گذاری: مبلغ ثابت" : "Investment: fixed fee"}</p>
              <p className="muted">{STRATEGIC_SESSION_PRICE ? STRATEGIC_SESSION_PRICE : isFa ? "مبلغ در زمان رزرو اعلام می‌شود." : "Fee shared at booking."}</p>
            </div>
            <div className="card">
              <h3 className="h3">{isFa ? "برنامه ۱:۱ سه‌ماهه" : "1:1 Three-Month Program"}</h3>
              <p className="muted">{isFa ? "سرمایه‌گذاری: بر اساس ارزیابی و سطح تعهد" : "Investment: based on assessment and commitment level"}</p>
              <p className="muted">{isFa ? "ظرفیت محدود برای حفظ کیفیت همکاری." : "Limited capacity to protect quality."}</p>
            </div>
            <div className="card">
              <h3 className="h3">{isFa ? "برنامه گروهی" : "Group Program"}</h3>
              <p className="muted">{isFa ? "هزینه هر دوره اعلام می‌شود." : "Cohort pricing announced per intake."}</p>
              <p className="muted">{isFa ? "ثبت در لیست انتظار" : "Join the waitlist."}</p>
            </div>
            <div className="card">
              <h3 className="h3">{isFa ? "ارتقای بنیاد دیجیتال" : "Digital Foundation"}</h3>
              <p className="muted">{isFa ? "پکیج‌ها از طریق Donepage" : "Packages via Donepage"}</p>
              <a className="btn" href="https://donepage.co" target="_blank" rel="noreferrer">
                {isFa ? "ورود به Donepage" : "Go to Donepage"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <p className="eyebrow">{isFa ? "جایگاه" : "Positioning"}</p>
            <h3 className="h3">{isFa ? "این یک بازآفرینی ساختارمند و اجرایی است." : "This is structured reinvention, designed for execution."}</h3>
          </div>
          <div className="card">
            <p className="eyebrow">{isFa ? "ظرفیت" : "Capacity"}</p>
            <h3 className="h3">{isFa ? "ظرفیت محدود برای حفظ کیفیت." : "Limited capacity to protect quality."}</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
