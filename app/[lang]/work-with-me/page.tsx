import Link from "next/link";
import type { Metadata } from "next";
import { formatDurationOrRequest, formatPriceOrRequest, STRATEGIC_SESSION_PRICE, SESSION_DURATION } from "@/lib/siteConfig";

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
            <p className="eyebrow">{isFa ? "جلسهٔ استراتژیک" : "Strategic Session"}</p>
            <h2 className="h2">{isFa ? "جلسهٔ استراتژیک" : "Strategic Session"}</h2>
            <p className="muted">{isFa ? "۶۰ تا ۹۰ دقیقه" : "60–90 minutes (paid)"}</p>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "نقشهٔ شفاف (جهت‌گیری + اولویت‌ها)" : "Clarity map (direction + priorities)"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "تحلیل محدودیت‌ها" : "Constraints analysis"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "برنامهٔ اجرای قدم بعدی (۷–۱۴ روز)" : "Next-step execution plan (7–14 days)"}</li>
            </ul>
            <Link className="btn btnPrimary" href={`${base}/apply`}>
              {isFa ? "رزرو" : "Book"}
            </Link>
          </div>

          <div className="card offerCard">
            <p className="eyebrow">{isFa ? "کوچینگ 1:1 معماری بازآفرینی — ۳ ماه" : "1:1 Reinvention Architecture — 3 months"}</p>
            <h2 className="h2">{isFa ? "کوچینگ 1:1 معماری بازآفرینی — ۳ ماه" : "1:1 Reinvention Architecture — 3 months"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "نقاط عطف ساختارمند (ماهانه)" : "Milestones (monthly)"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "برنامهٔ منظم (هفتگی یا دو‌هفته‌یک‌بار)" : "Cadence (weekly or biweekly)"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "وظایف بین جلسات (سبک اما مستمر)" : "Between-session tasks (light but consistent)"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "مرزبندی و دامنهٔ روشن" : "Clear boundaries and scope"}</li>
            </ul>
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
            <p className="eyebrow">{isFa ? "برنامهٔ گروهی: آزمایشگاه بازآفرینی — ۸ هفته" : "Group Program: Reinvention Lab — 8 weeks"}</p>
            <h2 className="h2">{isFa ? "برنامهٔ گروهی: آزمایشگاه بازآفرینی — ۸ هفته" : "Reinvention Lab — 8 weeks"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "اندازهٔ گروه: ۶ تا ۱۲ نفر" : "Cohort 6–12"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "جلسه هفتگی زنده + تمرین ساختارمند" : "Weekly live session + structured assignments"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "سیستم پیگیری و پاسخ‌گویی" : "Accountability system"}</li>
            </ul>
            <Link className="btn" href={`${base}/apply`}>
              {isFa ? "لیست انتظار" : "Join Waitlist"}
            </Link>
          </div>

          <div className="card offerCard">
            <p className="eyebrow">{isFa ? "ارتقای بنیاد دیجیتال" : "Upgrade: Digital Foundation"}</p>
            <h2 className="h2">{isFa ? "ارتقای بنیاد دیجیتال" : "Digital Foundation"}</h2>
            <p className="muted">
              {isFa
                ? "برای کارآفرینان؛ ساخت حضور دیجیتال چندزبانه. ارائه از طریق Donepage."
                : "For entrepreneurs ready to formalize and launch. Delivered via Donepage."}
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
            <h2 className="h2">{isFa ? "معماری قیمت‌گذاری" : "Pricing architecture"}</h2>
          </div>
          <div className="grid2">
            <div className="card">
              <h3 className="h3">{isFa ? "جلسهٔ استراتژیک" : "Strategic Session"}</h3>
              <p className="muted">
                {isFa ? "مدت" : "Duration"}: {SESSION_DURATION ? SESSION_DURATION : isFa ? "درخواست جزئیات" : "Request details"}
              </p>
              <p className="muted">
                {isFa ? "هزینه" : "Starting at"}: {STRATEGIC_SESSION_PRICE ? STRATEGIC_SESSION_PRICE : isFa ? "درخواست جزئیات" : "Request details"}
              </p>
            </div>
            <div className="card">
              <h3 className="h3">{isFa ? "کوچینگ 1:1 — ۳ ماه" : "1:1 — 3 months"}</h3>
              <p className="muted">{isFa ? "بر اساس درخواست" : "By application"} · {isFa ? "ظرفیت محدود" : "Limited slots"}</p>
            </div>
            <div className="card">
              <h3 className="h3">{isFa ? "برنامهٔ گروهی" : "Group Program"}</h3>
              <p className="muted">{isFa ? "قیمت‌گذاری گروهی" : "Cohort pricing"} · {isFa ? "لیست انتظار" : "Waitlist"}</p>
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
