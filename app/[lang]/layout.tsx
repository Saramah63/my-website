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
    ? "سارا محمودی | معمار بازآفرینی راهبردی"
    : "Sara Mahmodi | Strategic Reinvention Architect";

  const description = isFa
    ? "کوچینگ ساختارمند برای مهاجران فارسی‌زبان و افرادی که برای مهاجرت آماده می‌شوند؛ با تمرکز بر وضوح، جهت‌گیری و پیشرفت قابل سنجش."
    : "Structured coaching for Persian-speaking immigrants and individuals preparing for migration — built on clarity, direction, and measurable progress.";

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
