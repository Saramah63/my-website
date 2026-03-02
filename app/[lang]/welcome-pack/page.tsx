import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import BodyClass from "@/components/BodyClass";

export const metadata: Metadata = {
  title: "Welcome Pack | Sara Mahmodi",
  description: "Onboarding and operating principles for coaching engagements.",
  openGraph: {
    title: "Welcome Pack | Sara Mahmodi",
    description: "Onboarding and operating principles for coaching engagements.",
    type: "website",
  },
};

export default async function WelcomePackPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";

  return (
    <main className="welcome">
      <BodyClass className="bg-motif--soft" />
      <section className="section">
        <div className="container">
          <h1 className="h1">{isFa ? "بستهٔ خوش‌آمد" : "Welcome Pack"}</h1>
          <PrintButton label={isFa ? "دانلود / چاپ" : "Download / Print"} />
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2 className="h2">{isFa ? "یادداشت خوش‌آمد" : "Welcome note"}</h2>
          <p className="muted">
            {isFa ? "خوش آمدید. این همکاری ساختارمند است: شفافیت، اجرا، محرمانگی." : "Welcome. This is a structured engagement. Clarity, execution, confidentiality."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h3">{isFa ? "انتظارها" : "What to expect"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "ساختار جلسات" : "Session structure"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "قواعد ارتباطی" : "Communication rules"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "محرمانگی" : "Confidentiality"}</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "پیش‌نیاز" : "Pre-work"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "وضعیت فعلی در ۵ نکته" : "Current situation in 5 bullets"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "۳ هدف اصلی (۹۰ روز)" : "Top 3 goals (90 days)"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "۳ محدودیت اصلی" : "Top 3 constraints"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "غیرقابل مذاکره‌ها" : "Non-negotiables"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "نمای کلی برنامه روزانه" : "Daily schedule snapshot"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2 className="h2">{isFa ? "اصول عملیاتی" : "Operating principles"}</h2>
          <ul className="list">
            <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "بدون سرگردانی: تصمیم می‌گیریم، سپس اجرا." : "No drift: we decide, then execute."}</li>
            <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "اقدامات کوچک و مستمر > جهش‌های مقطعی" : "Small consistent actions > bursts."}</li>
            <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "پیشرفت را هفتگی اندازه‌گیری می‌کنیم" : "Measure progress weekly."}</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h3">{isFa ? "لجستیک" : "Logistics"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "هماهنگی منطقه زمانی" : "Timezone handling"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "قواعد تغییر زمان" : "Rescheduling / cancellation policy"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "سیاست پرداخت (به‌روزرسانی می‌شود)" : "Payment policy placeholder"}</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "شروع سریع — ۷ روز" : "Quick start — 7 days"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "روز ۱: خط مبنا + اهداف" : "Day 1: baseline + goals"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "روز ۲: نقشه محدودیت‌ها" : "Day 2: constraints map"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "روز ۳: ممیزی عادت‌ها" : "Day 3: habit audit"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "روز ۴: تقویم اجرا" : "Day 4: execution calendar"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "روز ۵: طراحی محیط" : "Day 5: environment design"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "روز ۶: الگوی مرور هفتگی" : "Day 6: weekly review template"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "روز ۷: برنامه هفته بعد" : "Day 7: plan next week"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h3">{isFa ? "قالب مرور هفتگی" : "Weekly review template"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "چه چیزی پیش رفت؟" : "What moved?"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "چه چیزی مانع بود؟" : "What blocked?"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "گام بعدی چیست؟" : "Next step?"}</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "چارچوب تصمیم" : "Decision framework"}</h2>
            <ul className="list">
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "آیا با هدف همسو است؟" : "Is it aligned with the goal?"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "هزینه فرصت چیست؟" : "What’s the opportunity cost?"}</li>
              <li className="listItem"><span className="dot" aria-hidden="true" />{isFa ? "گام اجرایی بعدی؟" : "Immediate next action?"}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
