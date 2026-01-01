import type { Metadata } from "next";
import "../globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

type Lang = "en" | "fa";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const isFa = params.lang === "fa";

  const base = new URL("https://www.saramahmodi.com");
  const canonical = new URL(`/${params.lang}`, base);

  const title = isFa
    ? "Mindshift for Lifeshift | کوچینگ تحول ذهن و زندگی"
    : "Mindshift for Lifeshift | Mindset & Life Coaching";

  const description = isFa
    ? "کوچینگ حرفه‌ای دو‌زبانه برای تغییر ذهنیت، رشد فردی و پیشرفت شغلی. جلسات آنلاین جهانی."
    : "Bilingual coaching to transform your mindset, accelerate personal growth, and advance your career. Global online sessions.";

  return {
    metadataBase: base,
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: new URL("/en", base),
        fa: new URL("/fa", base),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Mindshift for Lifeshift",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const isFa = params.lang === "fa";

  return (
    <html lang={params.lang} dir={isFa ? "rtl" : "ltr"}>
      <body>
        <LanguageProvider initialLang={params.lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
