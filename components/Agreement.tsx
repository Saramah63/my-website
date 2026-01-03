"use client";

import { usePathname } from "next/navigation";
import AgreementForm from "./AgreementForm";

export default function Agreement() {
  const pathname = usePathname();
  const isFa = pathname === "/fa" || pathname.startsWith("/fa/");
  const dir = isFa ? "rtl" : "ltr";

  const pdfHref = isFa
    ? "/agreements/agreement-fa.pdf"
    : "/agreements/agreement-en.pdf";

  return (
    <section className="section" id="agreement" dir={dir}>
      <div className="container">
        <div className="sectionHead">
          <div className="kicker">{isFa ? "قرارداد" : "Agreement"}</div>
          <h2 className="h2">{isFa ? "قرارداد کوچینگ" : "Coaching Agreement"}</h2>
          <p className="muted">
            {isFa
              ? "می‌تونی فایل قرارداد را دانلود/باز کنی و همین‌جا آنلاین هم اطلاعات را ثبت و امضا کنی."
              : "You can open/download the agreement PDF and also submit/sign online below."}
          </p>
        </div>

        <div className="card" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn" href={pdfHref} target="_blank" rel="noopener noreferrer">
            {isFa ? "باز کردن PDF قرارداد" : "Open Agreement PDF"}
          </a>

          <a className="btn" href={pdfHref} download>
            {isFa ? "دانلود PDF" : "Download PDF"}
          </a>
        </div>

        <div style={{ height: 18 }} />

        {/* فرم آنلاین */}
        <AgreementForm lang={isFa ? "fa" : "en"} />
      </div>
    </section>
  );
}
