import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sara Mahmodi",
  description:
    "Executive bio and approach: structured reinvention using strategy, coaching, design thinking, and modern digital systems.",
  openGraph: {
    title: "About | Sara Mahmodi",
    description:
      "Executive bio and approach: structured reinvention using strategy, coaching, design thinking, and modern digital systems.",
    type: "website",
  },
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">{isFa ? "دربارهٔ من" : "About"}</h1>
          <div className="card">
            {isFa ? (
              <>
                <p>من یک معمار بازآفرینی استراتژیک هستم.</p>
                <p>برای فارسی‌زبانان مقیم اروپا و افرادی که آمادهٔ مهاجرت هستند کار می‌کنم تا مسیر جدیدشان را با شفافیت و ساختار بسازند.</p>
                <p>با زندگی در سه کشور اروپایی در دوره‌های ۵ ماه تا ۱۰ سال، پیچیدگی بازآفرینی واقعی را از درون درک کرده‌ام — از لحاظ حرفه‌ای، فرهنگی و روانی.</p>
                <p>رویکرد من انگیزشی نیست. ساختارمند است.</p>
                <p>من تحول ساختارمند را با ترکیب:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />بازتعریف هویت</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />معماری عادت‌ها</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />سیستم‌های اجرایی استراتژیک</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />ابزارهای مدرن دیجیتال و چارچوب‌های پشتیبانی‌شده با AI</li>
                </ul>
                <p>طراحی می‌کنم.</p>
                <p>زیرا پیشرفت پایدار فقط بینش نیست. ساختار است.</p>
                <p>برای کارآفرینانی که آمادهٔ قدم بعدی هستند، من سیستم‌های بنیاد دیجیتال را از طریق Donepage ارائه می‌دهم — که موقعیت دیجیتال چندزبانه در انگلیسی، فنلاندی، فارسی و عربی را ممکن می‌سازد.</p>
                <p>از طریق Lumi، من تجربه‌های دیجیتال با هوش هیجانی را به‌عنوان مسیر نوآوری توسعه می‌دهم — که رشد آگاهانه را از طریق فناوری حمایت می‌کند.</p>
                <p>اگر آماده‌اید از عدم قطعیت به گسترش ساختارمند بروید، ما آن را با روش‌شناسی می‌سازیم.</p>
              </>
            ) : (
              <>
                <p>I am a Strategic Reinvention Architect.</p>
                <p>
                  I work with Persian-speaking immigrants in Europe and individuals preparing for migration who want to
                  rebuild their direction with clarity and structure.
                </p>
                <p>
                  Having lived across three European countries for periods ranging from five months to ten years, I
                  understand the complexity of reinvention — professionally, culturally, and psychologically.
                </p>
                <p>My approach is not motivational. It is architectural.</p>
                <p>I design structured transformation by integrating:</p>
                <ul className="list">
                  <li className="listItem"><span className="dot" aria-hidden="true" />Identity recalibration</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />Habit architecture</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />Strategic execution systems</li>
                  <li className="listItem"><span className="dot" aria-hidden="true" />Modern digital tools and AI-supported frameworks</li>
                </ul>
                <p>Because sustainable progress requires more than insight. It requires structure.</p>
                <p>
                  For entrepreneurs ready to formalize their next step, I also provide digital foundation systems through
                  Donepage — enabling fast, multilingual business positioning in English, Finnish, Persian, and Arabic.
                </p>
                <p>
                  Through Lumi, I develop emotionally intelligent digital experiences as an innovation track — supporting
                  conscious growth through technology.
                </p>
                <p>If you are ready to move from uncertainty to structured expansion, we build it systematically.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
