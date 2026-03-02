// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import LangHtmlSync from "../components/LangHtmlSync";
import { ENABLE_BOTEH_BG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sara Mahmodi | Strategic Reinvention Architect",
  description:
    "Structured, outcome-driven coaching for Persian-speaking immigrants and future migrants seeking clarity, direction, and measurable progress.",
  openGraph: {
    title: "Sara Mahmodi | Strategic Reinvention Architect",
    description:
      "Structured, outcome-driven coaching for Persian-speaking immigrants and future migrants seeking clarity, direction, and measurable progress.",
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
      </body>
    </html>
  );
}
