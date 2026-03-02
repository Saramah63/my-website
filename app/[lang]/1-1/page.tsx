import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1:1 Reinvention Architecture | Sara Mahmodi",
  description: "Three-month executive coaching engagement focused on clarity, structure, and execution.",
  openGraph: {
    title: "1:1 Reinvention Architecture | Sara Mahmodi",
    description: "Three-month executive coaching engagement focused on clarity, structure, and execution.",
    type: "website",
  },
};

export default async function OneToOnePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";
  const base = isFa ? "/fa" : "/en";

  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{isFa ? "کوچینگ 1:1" : "1:1 Program"}</p>
          <h1 className="h1">{isFa ? "بازآفرینی استراتژیک — ۳ ماه" : "Reinvention Architecture — 3 months"}</h1>
          <p className="muted">
            {isFa
              ? "وعده: شفافیت، ساختار و اجرای قابل پیگیری."
              : "Executive promise: clarity, structure, and execution you can measure."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h3">{isFa ? "مناسب برای" : "Who it’s for"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "افرادی که به ساختار و اجرای دقیق نیاز دارند" : "People who need structure and execution"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "افراد با مسئولیت و فشار تصمیم‌گیری" : "High-responsibility decision makers"}</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "مناسب نیست برای" : "Not for"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "کسانی که به دنبال انگیزه کوتاه‌مدت هستند" : "Short-term motivation seekers"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "کسانی که اجرای مستمر ندارند" : "People unwilling to execute consistently"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h3">{isFa ? "آنچه شامل می‌شود" : "What’s included"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "نقاط عطف ماهانه" : "Monthly milestones"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "جلسات هفتگی یا دو‌هفته‌یک‌بار" : "Weekly or biweekly cadence"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "وظایف سبک اما پیوسته" : "Light but consistent between-session tasks"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "مرزبندی و دامنهٔ روشن" : "Clear boundaries and scope"}</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "روش" : "Method"}</h2>
            <p className="muted">{isFa ? "چارچوب معماری بازآفرینی™" : "The Reinvention Architecture™"}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2 className="h2">{isFa ? "فرآیند" : "Process"}</h2>
          <ul className="list">
            <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "درخواست" : "Apply"}</li>
            <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "بررسی" : "Review"}</li>
            <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "شروع" : "Start"}</li>
          </ul>
          <div className="heroActions">
            <Link className="btn btnPrimary" href={`${base}/apply`}>{isFa ? "درخواست" : "Apply"}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">{isFa ? "پرسش‌های رایج" : "FAQ"}</h2>
          </div>
          <div className="faq">
            <details className="faqItem">
              <summary>{isFa ? "آیا جلسات آنلاین است؟" : "Is this remote?"}</summary>
              <p className="muted">{isFa ? "بله، آنلاین." : "Yes, fully remote."}</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
