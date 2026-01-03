// app/[lang]/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Sessions from "@/components/Sessions";
import Testimonials from "@/components/Testimonials";
import Agreement from "@/components/Agreement";
import FeedbackForm from "@/components/FeedbackForm";
import TestimonialHighlight from "@/components/TestimonialHighlight";
import Booking from "@/components/Booking";

type Lang = "fa" | "en";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = raw === "fa" ? "fa" : "en";

  return (
    <main>
      <Hero />
      <TestimonialHighlight lang={lang} />

      <section id="about">
        <About />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="booking">
        <Booking />
      </section>

      <section id="sessions">
        <Sessions />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="agreement">
        <Agreement />
      </section>

      <section id="feedback">
        <FeedbackForm />
      </section>
    </main>
  );
}
