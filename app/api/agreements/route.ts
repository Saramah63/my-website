import { NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import { chromium as playwrightChromium } from "playwright-core";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

type Lang = "fa" | "en";

function agreementHtml(lang: Lang, fonts: { regular: string; bold?: string }) {
  const isFa = lang === "fa";

  const faBody = `
    <div class="header">
      <div>
        <div class="brand">MindShift for LifeShift</div>
        <div class="muted">Sara Mahmodi — www.saramahmodi.com</div>
      </div>
      <div class="pageNo">Page 1</div>
    </div>

    <h1>قرارداد کوچینگ</h1>
    <div class="muted">سارا محمودی — MindShift for LifeShift</div>
    <p class="intro">این سند برای شفاف‌سازی چارچوب همکاری در کوچینگ تهیه شده است.</p>

    <h2>اطلاعات مراجع</h2>
    <div class="grid">
      <div class="field">نام و نام خانوادگی: ______________________________</div>
      <div class="field">ایمیل: ______________________________</div>
      <div class="field">تلفن/واتساپ: ______________________________</div>
      <div class="field">شهر/کشور: ______________________________</div>
    </div>
    <div class="field">زبان ترجیحی: ☐ فارسی ☐ انگلیسی</div>
    <div class="field">تاریخ: ____ / ____ / ______</div>

    <h2>۱) تعریف و محدوده کوچینگ</h2>
    <p>
      کوچینگ یک فرآیند مشارکتی و رو به آینده برای شفاف‌سازی، تصمیم‌گیری، تغییر عادت،
      افزایش اعتمادبه‌نفس و رشد فردی/حرفه‌ای است. کوچینگ درمان روانشناختی، مراقبت پزشکی،
      مشاوره حقوقی یا مالی نیست. اگر نیاز به حمایت بالینی دارید، مسئولیت مراجعه به متخصص مربوطه با شماست.
    </p>

    <h2>۲) اهداف و مسئولیت‌ها</h2>
    <p>
      اهداف و قدم‌های عملی را با هم مشخص می‌کنیم. مسئولیت انتخاب‌ها، اقدامات و نتایج با شماست.
      کوچ ابزار، ساختار، سوال‌های قدرتمند و پاسخگویی ارائه می‌دهد اما نتیجه مشخص را تضمین نمی‌کند.
    </p>

    <h2>۳) قالب جلسات</h2>
    <p>
      جلسات استاندارد ۶۰ دقیقه و آنلاین است. پکیج‌ها ممکن است شامل پشتیبانی بین جلسات باشند
      (طبق صفحه تعرفه‌ها). بعد از هر جلسه ممکن است خلاصه کوتاه کتبی دریافت کنید.
    </p>

    <h2>۴) محرمانگی</h2>
    <p>
      تمام گفت‌وگوهای کوچینگ محرمانه است و بدون رضایت شما به اشتراک گذاشته نمی‌شود،
      مگر در موارد الزام قانونی (مثلاً خطر آسیب به خود/دیگران).
    </p>

    <h2>۵) زمان‌بندی، تغییر زمان و عدم حضور</h2>
    <p>
      برای تغییر زمان، حداقل ۲۴ ساعت قبل اطلاع دهید. لغو دیرهنگام یا عدم حضور ممکن است به‌طور کامل محاسبه شود.
      در صورت دیر رسیدن، جلسه طبق زمان تعیین‌شده پایان می‌یابد.
    </p>

    <h2>۶) پرداخت و بازپرداخت</h2>
    <p>
      پرداخت قبل از جلسه یا طبق شرایط پکیج انجام می‌شود. پکیج‌ها قابل انتقال به فرد دیگر نیست.
      بازپرداخت جلسات استفاده‌نشده فقط در ۳۰ روز و در صورت توافق کتبی امکان‌پذیر است.
    </p>

    <div class="pagebreak"></div>

    <div class="header">
      <div>
        <div class="brand">MindShift for LifeShift</div>
        <div class="muted">Sara Mahmodi — www.saramahmodi.com</div>
      </div>
      <div class="pageNo">Page 2</div>
    </div>

    <h2>۷) ارتباط بین جلسات</h2>
    <p>
      در صورت وجود پشتیبانی بین جلسات، این ارتباط محدود به چک‌این کوتاه و سوال‌های شفاف‌سازی است.
      پاسخ‌دهی معمولاً ۲۴ تا ۴۸ ساعت کاری زمان می‌برد.
    </p>

    <h2>۸) داده‌ها و یادداشت‌ها</h2>
    <p>
      کوچ ممکن است برای حمایت از پیشرفت شما یادداشت‌های کوتاه ثبت کند. این یادداشت‌ها محرمانه است.
      فرم‌های ارسال‌شده می‌تواند به‌صورت امن برای مدیریت فرآیند کوچینگ نگهداری شود.
    </p>

    <h2>۹) پایان همکاری</h2>
    <p>
      هر طرف می‌تواند در هر زمان همکاری را پایان دهد. تعهدات مالی و شرایط بازپرداخت طبق بند ۶ اعمال می‌شود.
    </p>

    <h2>۱۰) رضایت</h2>
    <p>
      با امضا، تأیید می‌کنید مفاد این قرارداد را درک کرده‌اید و با اختیار خود وارد فرآیند کوچینگ می‌شوید.
    </p>

    <h2>رزرو و ارتباط</h2>
    <p>
      وب‌سایت: www.saramahmodi.com | اینستاگرام: mindshift_for_lifeshift | واتساپ: +358 41 753 9326
      <br />
      لینکدین: www.linkedin.com/in/saramahmodi
    </p>

    <h2>امضا</h2>
    <div class="grid">
      <div class="field">نام مراجع: ______________________________</div>
      <div class="field">امضا: ______________________________</div>
      <div class="field">نام کوچ: سارا محمودی</div>
      <div class="field">امضا: ______________________________</div>
    </div>
    <div class="field">تاریخ: ____ / ____ / ______</div>

    <p class="muted">
      سلب مسئولیت: این سند برای شفافیت تهیه شده و مشاوره حقوقی محسوب نمی‌شود. در صورت نیاز، با وکیل مشورت کنید.
    </p>
  `;

  const enBody = `
    <div class="header">
      <div>
        <div class="brand">MindShift for LifeShift</div>
        <div class="muted">Sara Mahmodi — www.saramahmodi.com</div>
      </div>
      <div class="pageNo">Page 1</div>
    </div>

    <h1>Coaching Agreement</h1>
    <p class="intro">This document clarifies the framework for a coaching collaboration.</p>

    <p class="muted">
      Note: Replace this English body with your existing full English agreement content if you already have one.
    </p>
  `;

  return `<!doctype html>
<html lang="${lang}" dir="${isFa ? "rtl" : "ltr"}">
<head>
  <meta charset="utf-8" />
  <style>
    @font-face {
      font-family: "Vazirmatn";
      src: url(data:font/ttf;base64,${fonts.regular}) format("truetype");
      font-weight: 400;
      font-style: normal;
    }
    ${
      fonts.bold
        ? `@font-face {
            font-family: "Vazirmatn";
            src: url(data:font/ttf;base64,${fonts.bold}) format("truetype");
            font-weight: 700;
            font-style: normal;
          }`
        : ""
    }
    * { font-family: "Vazirmatn", Arial, sans-serif !important; }
    html, body {
      margin: 0;
      padding: 0;
      font-family: ${isFa ? `"Vazirmatn", Arial, sans-serif` : `Arial, sans-serif`};
      font-size: 12px;
      color: #0f172a;

      direction: ${isFa ? "rtl" : "ltr"};
      unicode-bidi: plaintext;
      text-rendering: geometricPrecision;
    }

    h1 { font-size: 20px; font-weight: 700; margin: 0 0 10px; }
    h2 { font-size: 14px; margin: 16px 0 6px; }
    p  { line-height: 1.8; margin: 6px 0; }

    .header { display:flex; justify-content:space-between; align-items:flex-start; margin: 0 0 10px; padding: 0 0 10px; border-bottom: 1px solid #e2e8f0; }
    .brand { font-weight: 700; font-size: 16px; }
    .pageNo { font-size: 11px; color: #334155; }
    .muted { color: #475569; font-size: 11.5px; }
    .intro { margin: 10px 0 14px; }

    .grid { display:grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 8px 0 12px; }
    .field { border-bottom: 1px dashed #94a3b8; padding: 6px 0; min-height: 18px; }

    .pagebreak { page-break-before: always; }
  </style>
</head>
<body>
  ${isFa ? faBody : enBody}
</body>
</html>`;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = (searchParams.get("lang") === "fa" ? "fa" : "en") as Lang;

    const regularPath = path.join(process.cwd(), "public/fonts/Vazirmatn-Regular.ttf");
    const boldPath = path.join(process.cwd(), "public/fonts/Vazirmatn-Bold.ttf");

    const fontRegular = fs.readFileSync(regularPath);

    let fontBoldBase64: string | undefined = undefined;
    if (fs.existsSync(boldPath)) {
      const fontBold = fs.readFileSync(boldPath);
      fontBoldBase64 = fontBold.toString("base64");
    }

    const fonts = {
      regular: fontRegular.toString("base64"),
      bold: fontBoldBase64,
    };

    const browser = await playwrightChromium.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
});

    const page = await browser.newPage();

    await page.setContent(agreementHtml(lang, fonts), { waitUntil: "networkidle" });

    await page.evaluate(async () => {
      // @ts-ignore
      await document.fonts.ready;
      // @ts-ignore
      if (document.fonts.status !== "loaded") {
        await new Promise((r) => setTimeout(r, 50));
      }
    });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "18mm", bottom: "18mm", left: "18mm", right: "18mm" },
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="agreement-${lang}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? String(err) }, { status: 500 });
  }
}
