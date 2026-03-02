import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sara Mahmodi | Strategic Reinvention Architect",
  description:
    "Structured coaching for Persian-speaking immigrants in Europe and individuals preparing for migration — built on clarity, habit architecture, and execution systems.",
  openGraph: {
    title: "Sara Mahmodi | Strategic Reinvention Architect",
    description:
      "Structured coaching for Persian-speaking immigrants in Europe and individuals preparing for migration — built on clarity, habit architecture, and execution systems.",
    type: "website",
  },
};

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";
  const base = isFa ? "/fa" : "/en";
  return (
    <main>
      <section className="section">
        <div className="container hero">
          <div>
            <p className="eyebrow">{isFa ? "معمار بازآفرینی استراتژیک" : "Strategic Reinvention Architect"}</p>
            <h1 className="h1">
              {isFa ? "تحول هدفمند آینده‌ات را طراحی کن." : "Design Your Reinvention Strategically."}
            </h1>
            <p className="muted">
              {isFa
                ? "کوچینگ استراتژیک برای فارسی‌زبانان مقیم اروپا و افرادی که آماده مهاجرت هستند — مبتنی بر شفافیت، ساختار و نظام اجرایی."
                : "Structured coaching for Persian-speaking immigrants in Europe and individuals preparing for migration — built on clarity, habit architecture, and execution systems."}
            </p>
            <div className="heroActions">
              <Link className="btn btnPrimary" href={`${base}/apply`}>
                {isFa ? "رزرو جلسهٔ استراتژیک" : "Book a Strategic Session"}
              </Link>
              <a className="btn btnGhost" href="#framework">
                {isFa ? "آشنایی با متد" : "Explore the Method"}
              </a>
            </div>
            <div className="heroMeta">
              {isFa ? "ساختارمند. نتیجه‌گرا. حرفه‌ای." : "Strategy-led. Outcome-focused. Confidential."}
            </div>
          </div>
          <div className="heroCard">
            <p className="eyebrow">{isFa ? "جلسهٔ شفاف‌سازی" : "Clarity Session"}</p>
            <h2 className="h2">
              {isFa ? "تشخیص دقیق برای بازتنظیم مسیر." : "A focused diagnostic to reset direction."}
            </h2>
            <p className="muted">
              {isFa
                ? "محدودیت‌ها را مشخص کنید، اولویت‌ها را شفاف کنید و با یک برنامهٔ اجرایی دقیق خارج شوید."
                : "Identify constraints, clarify priorities, and leave with a structured next-step plan you can execute immediately."}
            </p>
            <div className="heroActions">
              <Link className="btn" href={`${base}/work-with-me`}>
                {isFa ? "مشاهدهٔ خدمات" : "See Offers"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">{isFa ? "چه کسانی را همراهی می‌کنم" : "Who I Help"}</h2>
          </div>
          <ul className="list">
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>
                {isFa
                  ? "فارسی‌زبانان مقیم اروپا که با چالش‌های هویتی، حرفه‌ای و سازگاری روبه‌رو هستند"
                  : "Persian-speaking immigrants in Europe navigating identity, career, and adaptation challenges"}
              </span>
            </li>
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>
                {isFa
                  ? "افرادی در ایران که در مسیر آماده‌سازی برای مهاجرت می‌خواهند جهت‌گیری استراتژیک داشته باشند"
                  : "Individuals in Iran preparing for migration who want strategic direction and readiness."}
              </span>
            </li>
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>
                {isFa
                  ? "افراد با پتانسیل بالا که بین آرزو و اجرا گیر کرده‌اند و به ساختار نیاز دارند"
                  : "High-potential individuals stuck between ambition and uncertainty who want structure."}
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div>
            <p className="eyebrow">{isFa ? "تمایز" : "What Makes This Different"}</p>
            <h2 className="h2">{isFa ? "تمایز رویکرد" : "Architectural, not motivational."}</h2>
            <p className="muted">
              {isFa
                ? "این یک کوچینگ ساختارمند و مهندسی‌شده است، نه انگیزشیِ ساده. ما هویت، عادت‌ها و سیستم اجرا را طراحی می‌کنیم تا پیشرفت قابل اندازه‌گیری شود."
                : "This is architectural coaching — not motivational talk. We design identity, habits, and execution systems so progress becomes measurable."}
            </p>
          </div>
          <div className="card">
            {isFa ? (
              <ul className="list">
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>بازتعریف هویت</span>
                </li>
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>معماری عادت‌ها</span>
                </li>
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>سیستم‌های اجرا</span>
                </li>
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>ابزارهای مدرن دیجیتال و پشتیبانی AI</span>
                </li>
              </ul>
            ) : (
              <ul className="list">
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>Identity recalibration</span>
                </li>
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>Habit architecture</span>
                </li>
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>Strategic execution systems</span>
                </li>
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>Modern digital + AI-supported tools as enablers</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

      <section id="framework" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">{isFa ? "چارچوب معماری بازآفرینی™" : "The Reinvention Architecture™"}</h2>
            <p className="muted">
              {isFa
                ? "یک روش روشن برای گذار از عدم قطعیت به پیشرفت ساختارمند."
                : "A clear method to move from uncertainty to structured progress."}
            </p>
          </div>
          <div className="grid4">
            <div className="card frameworkCard">
              <p className="eyebrow">{isFa ? "۱. تشخیص" : "1. Diagnose"}</p>
              <h3 className="h3">
                {isFa ? "شفاف‌سازی هویت، محدودیت‌ها و اولویت‌ها" : "Clarify identity, constraints, priorities."}
              </h3>
            </div>
            <div className="card frameworkCard">
              <p className="eyebrow">{isFa ? "۲. بازطراحی" : "2. Redesign"}</p>
              <h3 className="h3">
                {isFa ? "تعریف جهت‌گیری و اهداف" : "Define direction, decisions, goals."}
              </h3>
            </div>
            <div className="card frameworkCard">
              <p className="eyebrow">{isFa ? "۳. ساختاردهی" : "3. Structure"}</p>
              <h3 className="h3">
                {isFa ? "نصب عادت‌ها و سیستم اجرا" : "Install habits and an execution system."}
              </h3>
            </div>
            <div className="card frameworkCard">
              <p className="eyebrow">{isFa ? "۴. گسترش" : "4. Expand"}</p>
              <h3 className="h3">
                {isFa ? "توسعه توانمندی‌ها و فرصت‌ها" : "Scale capability and opportunity."}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">{isFa ? "مسیرهای همکاری" : "Ways to Work Together"}</h2>
          </div>
          <div className="grid3">
            <div className="card offerCard">
              <p className="eyebrow">{isFa ? "اصلی" : "Primary"}</p>
              <h3 className="h3">{isFa ? "کوچینگ 1:1 معماری بازآفرینی" : "1:1 Strategic Reinvention"}</h3>
              <p className="muted">{isFa ? "تحول ساختارمند و حرفه‌ای (۱:۱)." : "High-touch structured transformation."}</p>
              <Link className="btn btnPrimary" href={`${base}/apply`}>
                {isFa ? "رزرو جلسهٔ استراتژیک" : "Book a Strategic Session"}
              </Link>
            </div>
            <div className="card offerCard">
              <p className="eyebrow">{isFa ? "گروهی" : "Secondary"}</p>
              <h3 className="h3">
                {isFa ? "برنامهٔ گروهی: آزمایشگاه بازآفرینی" : "Group Program: Reinvention Lab"}
              </h3>
              <p className="muted">
                {isFa ? "برنامه گروهی با ساختار و پیگیری." : "Cohort-based execution and accountability."}
              </p>
              <Link className="btn" href={`${base}/apply`}>
                {isFa ? "لیست انتظار" : "Join the Waitlist"}
              </Link>
            </div>
            <div className="card offerCard">
              <p className="eyebrow">{isFa ? "ارتقا" : "Supporting"}</p>
              <h3 className="h3">{isFa ? "ارتقای بنیاد دیجیتال" : "Digital Foundation Upgrade"}</h3>
              <p className="muted">
                {isFa
                  ? "برای کارآفرینان؛ ساخت حضور دیجیتال چندزبانه. ارائه از طریق Donepage."
                  : "For entrepreneurs ready to formalize and launch. Delivered via Donepage."}
              </p>
              <Link className="btn" href={`${base}/digital-foundation`}>
                {isFa ? "ببینید" : "See Digital Foundation"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">{isFa ? "خروجی‌هایی که می‌توانید انتظار داشته باشید" : "Outcomes you can expect"}</h2>
          </div>
          <ul className="list">
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>{isFa ? "شفافیت مسیر و چارچوب تصمیم‌گیری" : "Clear direction and decision framework"}</span>
            </li>
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>{isFa ? "سیستم عادت همسو با اهداف" : "Habit system aligned with goals"}</span>
            </li>
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>{isFa ? "کاهش پراکندگی با ساختار اجرایی" : "Reduced overwhelm via execution structure"}</span>
            </li>
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>{isFa ? "اعتماد به‌نفس از طریق پیشرفت قابل اندازه‌گیری" : "Confidence through measurable progress"}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div>
            <p className="eyebrow">{isFa ? "درباره" : "About"}</p>
            <h2 className="h2">{isFa ? "درباره" : "Strategic, structured, outcome-driven."}</h2>
            <p className="muted">
              {isFa
                ? "من یک معمار بازآفرینی استراتژیک هستم… تجربه زندگی در ۳ کشور اروپایی (از ۵ ماه تا ۱۰ سال)… استراتژیک، ساختارمند و نتیجه‌محور."
                : "I am a Strategic Reinvention Architect… lived across three European countries (five months to ten years)… strategic, structured, outcome-driven."}
            </p>
            <div className="heroActions">
              <Link className="btn" href={`${base}/about`}>
                {isFa ? "داستان کامل را بخوانید" : "Read the full story"}
              </Link>
            </div>
          </div>
          <div className="card">
            <p className="eyebrow">{isFa ? "مسیر نوآوری" : "Innovation Track"}</p>
            <h3 className="h3">Lumi</h3>
            <p className="muted">
              {isFa
                ? "مسیر تحقیق و توسعه برای تجربه‌های دیجیتال با هوش هیجانی."
                : "An R&D track exploring emotionally intelligent digital experiences to support conscious growth through technology."}
            </p>
            <div className="heroActions">
              <Link className="btn" href={`${base}/lumi`}>
                {isFa ? "بیشتر بدانید" : "Learn more"}
              </Link>
            </div>
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
              <summary>{isFa ? "جلسهٔ استراتژیک چیست؟" : "What happens in the Strategic Session?"}</summary>
              <p className="muted">
                {isFa
                  ? "نقشهٔ شفاف، تحلیل محدودیت‌ها و برنامهٔ قدم‌های بعدی."
                  : "A focused diagnostic: clarity map, constraints analysis, and next-step plan."}
              </p>
            </details>
            <details className="faqItem">
              <summary>{isFa ? "آیا این برنامه برای اروپا مناسب است یا ایران؟" : "Is it for Europe or Iran?"}</summary>
              <p className="muted">
                {isFa
                  ? "هر دو. هم برای مهاجران فارسی‌زبان در اروپا و هم افراد در ایران."
                  : "Both. I work with Persian-speaking immigrants in Europe and future migrants in Iran."}
              </p>
            </details>
            <details className="faqItem">
              <summary>{isFa ? "به چه زبان‌هایی برگزار می‌شود؟" : "Do you offer Persian and English?"}</summary>
              <p className="muted">{isFa ? "فارسی و انگلیسی." : "Persian-first, English available if needed."}</p>
            </details>
            <details className="faqItem">
              <summary>{isFa ? "برنامهٔ گروهی چگونه است؟" : "How does the group program work?"}</summary>
              <p className="muted">
                {isFa ? "۸ هفته با ساختار اجرا و پیگیری." : "An 8-week cohort with execution structure and accountability."}
              </p>
            </details>
            <details className="faqItem">
              <summary>{isFa ? "آیا می‌توانم برای کسب‌وکار هم کمک بگیرم؟" : "Can you help with business/landing page?"}</summary>
              <p className="muted">
                {isFa ? "بله، به‌عنوان ارتقا از طریق Donepage." : "Yes, as an upgrade via Donepage for multilingual positioning."}
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2 className="h2">
            {isFa ? "از عدم قطعیت به گسترش ساختارمند برسید." : "Move from uncertainty to structured expansion."}
          </h2>
          <div className="heroActions">
            <Link className="btn btnPrimary" href={`${base}/apply`}>
              {isFa ? "رزرو / درخواست" : "Apply / Book"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
