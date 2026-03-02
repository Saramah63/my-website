import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Sara Mahmodi",
  description: "Migration mindset, habit architecture, and execution systems.",
  openGraph: {
    title: "Resources | Sara Mahmodi",
    description: "Migration mindset, habit architecture, and execution systems.",
    type: "website",
  },
};

export default async function ResourcesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";

  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{isFa ? "منابع" : "Resources"}</p>
          <h1 className="h1">{isFa ? "منابع ساختارمند" : "Structured resources"}</h1>
          <p className="muted">
            {isFa ? "مطالب کوتاه و کاربردی برای مسیر بازآفرینی." : "Short, executive resources for strategic reinvention."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid3">
          <div className="card">
            <h2 className="h3">{isFa ? "ذهنیت مهاجرت" : "Migration Mindset"}</h2>
            <div className="list">
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: نقشه ذهنی مهاجرت" : "Coming soon: Migration clarity map"}</div>
                  <p className="small">{isFa ? "چارچوب ساده برای شفاف‌سازی مسیر، اولویت‌ها و ریسک‌ها." : "A simple framework to clarify direction, priorities, and risks."}</p>
                </div>
              </div>
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: مدیریت شوک فرهنگی" : "Coming soon: Cultural adaptation strategy"}</div>
                  <p className="small">{isFa ? "مدل اجرایی برای عبور از مرحله انتقال و تثبیت." : "A practical model to move from transition to stability."}</p>
                </div>
              </div>
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: تصمیم‌گیری مهاجرتی" : "Coming soon: Migration decision framework"}</div>
                  <p className="small">{isFa ? "قالب تصمیم‌گیری با وزن‌دهی شفاف به گزینه‌ها." : "A decision template with clear weighting of options."}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "معماری عادت‌ها" : "Habit Architecture"}</h2>
            <div className="list">
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: طراحی عادت پایدار" : "Coming soon: Sustainable habit design"}</div>
                  <p className="small">{isFa ? "طراحی عادت‌هایی که با محدودیت‌های واقعی هم‌خوان است." : "Design habits that fit real constraints."}</p>
                </div>
              </div>
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: ردیابی پیشرفت" : "Coming soon: Progress tracking"}</div>
                  <p className="small">{isFa ? "روش‌های سبک برای اندازه‌گیری پیشرفت بدون فشار." : "Lightweight tracking without friction."}</p>
                </div>
              </div>
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: معماری محیط" : "Coming soon: Environment architecture"}</div>
                  <p className="small">{isFa ? "طراحی محیط برای کاهش اصطکاک و افزایش اجرا." : "Environment design to reduce friction and improve execution."}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "سیستم‌های اجرا" : "Execution Systems"}</h2>
            <div className="list">
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: سیستم تمرکز هفتگی" : "Coming soon: Weekly execution system"}</div>
                  <p className="small">{isFa ? "ساختار ساده برای تمرکز هفتگی و اولویت‌ها." : "Simple structure for weekly focus and priorities."}</p>
                </div>
              </div>
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: اولویت‌گذاری" : "Coming soon: Priority framework"}</div>
                  <p className="small">{isFa ? "چارچوب سریع برای انتخاب کارهای پراثر." : "Quick framework for high-impact choices."}</p>
                </div>
              </div>
              <div className="listItem">
                <span className="dot" aria-hidden="true" />
                <div>
                  <div>{isFa ? "به‌زودی: بازبینی و اصلاح" : "Coming soon: Review and recalibration"}</div>
                  <p className="small">{isFa ? "بازبینی کوتاه برای اصلاح مسیر بدون آشفتگی." : "Short review cycles to recalibrate without noise."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
