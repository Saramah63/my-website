import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";
import { reviewWindowText, APPLICATION_REVIEW_DAYS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Apply | Sara Mahmodi",
  description: "Apply for a Strategic Session or coaching engagement.",
  openGraph: {
    title: "Apply | Sara Mahmodi",
    description: "Apply for a Strategic Session or coaching engagement.",
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
          <p className="eyebrow">{isFa ? "درخواست" : "Apply"}</p>
          <h1 className="h1">{isFa ? "رزرو جلسهٔ استراتژیک" : "Book a Strategic Session"}</h1>
          <p className="muted">
            {isFa
              ? "لطفاً اطلاعات و هدف‌تان را ارسال کنید. پاسخ در ۲ تا ۳ روز کاری داده می‌شود."
              : `Share your context and goals. You will receive a response within ${reviewWindowText(APPLICATION_REVIEW_DAYS)} business days.`}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <ApplyForm
            labels={
              isFa
                ? {
                    name: "نام",
                    email: "ایمیل",
                    location: "کشور",
                    primaryGoal: "هدف اصلی",
                    constraint: "بزرگ‌ترین چالش",
                    format: "فرمت ترجیحی (1:1 / گروهی)",
                    budget: "آمادگی بودجه",
                    submit: "ارسال",
                    submitting: "در حال ارسال...",
                    success: "از شما متشکریم! ما به‌زودی با شما تماس می‌گیریم.",
                    scheduling: "رزرو زمان",
                    direct: "در صورت تمایل، از فرم استفاده کنید. پاسخ در ۲ تا ۳ روز کاری داده می‌شود.",
                    locationOptions: ["اروپا", "ایران", "سایر"],
                    goalOptions: ["آمادگی مهاجرت", "جهت‌گیری شغلی", "هویت + عادت‌ها", "کارآفرینی", "سایر"],
                    formatOptions: [
                      { value: "1:1", label: "1:1" },
                      { value: "group", label: "گروهی" },
                    ],
                    budgetOptions: ["درخواست جزئیات", "کمتر از €1,000", "€1,000–€3,000", "€3,000–€7,000", "€7,000+"],
                  }
                : undefined
            }
          />
          <p className="small">
            {isFa
              ? "اطلاعات شما محرمانه است."
              : "Your information is confidential."}
          </p>
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
