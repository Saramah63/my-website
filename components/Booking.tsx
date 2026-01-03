"use client";

import { usePathname } from "next/navigation";

const CALENDLY = "https://calendly.com/saramah63/30min";

export default function Booking() {
  const pathname = usePathname();
  const isFa = pathname === "/fa" || pathname.startsWith("/fa/");
  const dir = isFa ? "rtl" : "ltr";

  return (
    <section className="section" id="booking" dir={dir}>
      <div className="container">
        <div className="sectionHead">
          <div className="kicker">{isFa ? "رزرو" : "Booking"}</div>
          <h2 className="h2">{isFa ? "رزرو جلسه" : "Book a Session"}</h2>
          <p className="muted">
            {isFa
              ? "برای رزرو جلسه ۳۰ دقیقه‌ای رایگان، روی دکمه زیر کلیک کن."
              : "Use the button below to book your free 30-minute intro session."}
          </p>
        </div>

        <div className="card">
          <a
            className="btn btnPrimary"
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "fit-content" }}
          >
            {isFa ? "رزرو در Calendly" : "Book on Calendly"}
          </a>

          <p className="muted" style={{ marginTop: 12 }}>
            {isFa
              ? "اگر پنجره باز نشد، تنظیمات Pop-up مرورگر را بررسی کن."
              : "If a new tab does not open, please check your browser pop-up settings."}
          </p>
        </div>
      </div>
    </section>
  );
}
