export const metadata = {
  title: "Mindshift for Lifeshift | Multilingual Coaching",
  description:
    "Transform your mindset, transform your life. Multilingual coaching (English & Persian) for international professionals, expats, and ESL leaders.",
};

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
