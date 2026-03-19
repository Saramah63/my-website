// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LangHtmlSync from "../components/LangHtmlSync";
import { ENABLE_BOTEH_BG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sara Mahmodi | Product-Focused Designer, Founder, and Strategic Builder",
  description:
    "Sara Mahmodi builds structured digital products and human-centered systems across Donepage, Lumi, and strategic product work.",
  openGraph: {
    title: "Sara Mahmodi | Product-Focused Designer, Founder, and Strategic Builder",
    description:
      "Sara Mahmodi builds structured digital products and human-centered systems across Donepage, Lumi, and strategic product work.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Root layout MUST be the only place with <html> and <body>
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body suppressHydrationWarning className={ENABLE_BOTEH_BG ? "bg-motif" : undefined}>
        {/* Sync html lang/dir AFTER hydration to avoid mismatch */}
        <LangHtmlSync />
        <div id="app" className="app-root">
          {children}
        </div>
        {process.env.VERCEL ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
