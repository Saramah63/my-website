import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIsCoaching from "@/components/WhatIsCoaching";
import Multilingual from "@/components/Multilingual";
import Sessions from "@/components/Sessions";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Agreement from "@/components/Agreement";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="what-is-coaching">
        <WhatIsCoaching />
      </section>

      <section id="multilingual">
        <Multilingual />
      </section>

      {/* FIX: کلیک Sessions همیشه به بخش واقعی می‌آید */}
      <section id="sessions">
        <Sessions />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="agreement">
        <Agreement />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="get-started">
        <Footer />
      </section>
    </main>
  );
}
