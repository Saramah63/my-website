import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply | Sara Mahmodi",
  description: "Apply to work together through a selective, structured application process.",
  openGraph: {
    title: "Apply | Sara Mahmodi",
    description: "Apply to work together through a selective, structured application process.",
    type: "website",
  },
};

export default async function ApplyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";
  return (
    <main>
      <section className="section">
        <div className="container">
          <ApplyForm lang={isFa ? "fa" : "en"} />
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <p className="eyebrow">{isFa ? "جایگاه" : "Positioning"}</p>
            <h3 className="h3">{isFa ? "این کار ساختارمند و اجرایی است." : "Structured work, designed for execution."}</h3>
          </div>
          <div className="card">
            <p className="eyebrow">{isFa ? "ظرفیت" : "Capacity"}</p>
            <h3 className="h3">{isFa ? "ظرفیت محدود." : "Limited capacity."}</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
