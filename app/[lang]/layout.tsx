// app/[lang]/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

type Lang = "fa" | "en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = raw === "fa" ? "fa" : "en";
  const isFa = lang === "fa";

  const title = isFa
    ? "سارا محمودی | کوچینگ رشد فردی و شفافیت (آنلاین)"
    : "Sara Mahmodi | Professional Coaching (Online)";

  const description = isFa
    ? "کوچینگ نتیجه‌محور برای شفاف‌سازی هدف‌ها، ساخت عادت‌های پایدار و رشد شخصی. رزرو جلسه معرفی ۳۰ دقیقه‌ای در کالندلی."
    : "Outcome-driven coaching to clarify goals, build sustainable habits, and accelerate personal growth. Book a 30-min intro via Calendly.";

  const url = `/${lang}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { fa: "/fa", en: "/en" },
    },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = raw === "fa" ? "fa" : "en";
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
        <LanguageProvider initialLang={lang}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
  );
}
