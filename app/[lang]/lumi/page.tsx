import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumi | Sara Mahmodi",
  description: "Innovation track for emotionally intelligent digital experiences.",
  openGraph: {
    title: "Lumi | Sara Mahmodi",
    description: "Innovation track for emotionally intelligent digital experiences.",
    type: "website",
  },
};

export default async function LumiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFa = lang === "fa";
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{isFa ? "مسیر نوآوری" : "Innovation Track"}</p>
          <h1 className="h1">Lumi</h1>
          <p className="muted">
            {isFa
              ? "Lumi مسیر نوآوری برای تجربه‌های دیجیتال با هوش هیجانی است."
              : "Lumi is an innovation track focused on emotionally intelligent digital experiences."}
          </p>
          <p className="muted">
            {isFa
              ? "تمرکز بر تجربه‌های انسانی برای کودکان و خانواده‌ها، با استفاده از صدا، تصویر و انیمیشن."
              : "It explores human-centered experiences for kids and families using voice, visual, and animation."}
          </p>
          <p className="muted">
            {isFa
              ? "هدف، حمایت از رشد آگاهانه از طریق فناوری است؛ بدون مسیر فروش مستقیم."
              : "The goal is conscious growth through technology, not a sales path."}
          </p>
        </div>
      </section>
    </main>
  );
}
