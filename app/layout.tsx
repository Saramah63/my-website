// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import LangHtmlSync from "../components/LangHtmlSync";

export const metadata: Metadata = {
  title: "MindShift for LifeShift",
  description: "Professional Coaching | Online Worldwide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Root layout MUST be the only place with <html> and <body>
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Sync html lang/dir AFTER hydration to avoid mismatch */}
        <LangHtmlSync />
        {children}
      </body>
    </html>
  );
}
