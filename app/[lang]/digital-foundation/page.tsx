import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Foundation | Sara Mahmodi",
  description: "Executive digital foundation for entrepreneurs via Donepage.",
  openGraph: {
    title: "Digital Foundation | Sara Mahmodi",
    description: "Executive digital foundation for entrepreneurs via Donepage.",
    type: "website",
  },
};

export default async function DigitalFoundationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{isFa ? "ارتقای بنیاد دیجیتال" : "Digital Foundation"}</p>
          <h1 className="h1">{isFa ? "زیرساخت حرفه‌ای برای کارآفرینان" : "Executive positioning for entrepreneurs"}</h1>
          <p className="muted">
            {isFa
              ? "برای کارآفرینانی که آماده رسمی‌سازی حضور دیجیتال هستند. ارائه از طریق Donepage."
              : "For entrepreneurs ready to formalize their digital presence. Delivered via Donepage."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h3">{isFa ? "مناسب برای" : "Who it’s for"}</h2>
            <p className="muted">
              {isFa
                ? "کارآفرینان و متخصصانی که به حضور دیجیتال چندزبانه و قابل تبدیل نیاز دارند."
                : "Entrepreneurs and professionals who need multilingual, conversion-focused positioning."}
            </p>
          </div>
          <div className="card">
            <h2 className="h3">{isFa ? "آنچه دریافت می‌کنید" : "What you get"}</h2>
            <p className="muted">
              {isFa
                ? "لندینگ چندزبانه، پیام‌محوری شفاف، و ساختار تبدیل."
                : "A multilingual landing page, clear messaging, and conversion structure."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2 className="h2">{isFa ? "زبان‌های پشتیبانی‌شده" : "Supported languages"}</h2>
          <p className="muted">EN / FI / FA / AR</p>
          <a className="btn btnPrimary" href="https://donepage.co" target="_blank" rel="noreferrer">
            {isFa ? "ورود به Donepage" : "Go to Donepage"}
          </a>
        </div>
      </section>
    </main>
  );
}
