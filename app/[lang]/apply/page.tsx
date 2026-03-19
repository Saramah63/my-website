import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";
import { EMAIL_ADDRESS, EMAIL_MAILTO_URL, reviewWindowText, APPLICATION_REVIEW_DAYS, WHATSAPP_URL } from "@/lib/siteConfig";

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
          <p className="eyebrow">{isFa ? "درخواست" : "Apply"}</p>
          <h1 className="h1">{isFa ? "درخواست همکاری" : "Apply to work together"}</h1>
          <p className="muted">
            {isFa
              ? "این فرم کوتاه برای درک وضعیت شما و بررسی تناسب همکاری است. پاسخ در ۲ تا ۳ روز کاری داده می‌شود."
              : `This is a short application to understand your situation and see if this work is a good fit. You will receive a response within ${reviewWindowText(APPLICATION_REVIEW_DAYS)} business days.`}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <p className="muted" style={{ marginBottom: 20 }}>
            {isFa
              ? "این همکاری برای افرادی طراحی شده که آماده حرکت رو به جلو هستند، نه فقط بررسی ایده‌ها. هرچه وضعیت خود را روشن‌تر توضیح دهید، فرایند مفیدتر خواهد بود."
              : "This work is designed for people who are ready to move forward — not just explore ideas. Please describe your situation clearly. This helps make the process more focused and useful from the start."}
          </p>
          <ApplyForm
            lang={isFa ? "fa" : "en"}
            labels={
              isFa
                ? {
                    name: "نام",
                    email: "ایمیل",
                    location: "موقعیت",
                    situation: "اکنون در حال مواجهه با چه وضعیتی هستید؟",
                    unclear: "در حال حاضر چه چیزی برای شما مبهم یا گیرکرده است؟",
                    tried: "تا الان برای جلو رفتن چه کارهایی انجام داده‌اید؟",
                    changeGoal: "یک تغییر معنادار برای شما در ۱ تا ۳ ماه آینده چه شکلی خواهد بود؟",
                    blockers: "چه چیزی تا الان جلوی پیشرفت را گرفته است؟",
                    preferredFormat: "فرمت ترجیحی",
                    investmentReadiness: "اگر تناسب خوبی وجود داشته باشد، آیا برای سرمایه‌گذاری روی حمایت ساختارمند باز هستید؟",
                    extraContext: "توضیحات تکمیلی (اختیاری)",
                    submit: "ارسال درخواست",
                    submitting: "در حال ارسال...",
                    success: "درخواست شما دریافت شد.",
                    direct: "پاسخ‌های شما بررسی می‌شود و طی ۲ تا ۳ روز کاری با شما در ارتباط خواهم بود.",
                    validationError: "لطفاً قبل از ارسال، همه فیلدهای ضروری را تکمیل کنید.",
                    errorTitle: "هنگام ارسال درخواست مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
                    errorHelp: `اگر مشکل ادامه داشت، می‌توانید مستقیم از طریق ${EMAIL_ADDRESS} یا واتساپ در ارتباط باشید.`,
                    directEmail: EMAIL_ADDRESS,
                    directWhatsapp: "واتساپ",
                    locationOptions: ["اروپا", "ایران", "سایر"],
                    formatOptions: [
                      { value: "Strategic Session", label: "Strategic Session" },
                      { value: "3-Month 1:1", label: "3-Month 1:1" },
                    ],
                    readinessOptions: ["بله", "هنوز نه"],
                  }
                : undefined
            }
          />
          <p className="small">
            {isFa
              ? "اطلاعات شما محرمانه است."
              : "Your information is confidential."}
          </p>
          <p className="small">
            {isFa
              ? "درخواست‌ها به‌صورت انتخابی بررسی می‌شوند تا کیفیت و تناسب حفظ شود."
              : "Applications are reviewed selectively to ensure quality and fit."}
          </p>
          <p className="small" style={{ marginTop: 18 }}>
            {isFa ? "اگر ترجیح می‌دهید سریع‌تر در ارتباط باشید:" : "If you prefer to connect more quickly:"}
          </p>
          <p className="small">
            {isFa
              ? "اگر فرم ارسال نشد، می‌توانید مستقیم از طریق ایمیل با من در ارتباط باشید:"
              : "If the form does not go through, you can contact directly at:"}
          </p>
          <p className="small">
            <a href={EMAIL_MAILTO_URL}>{EMAIL_ADDRESS}</a>
          </p>
          <p className="small">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {isFa ? "ارتباط در واتساپ" : "Message on WhatsApp"}
            </a>
          </p>
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
