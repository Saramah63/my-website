import "./globals.css";
import { LanguageProvider } from "../lib/LanguageContext";

export const metadata = {
  title: "Mindshift for Lifeshift",
  description: "Transform your mindset, transform your life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
