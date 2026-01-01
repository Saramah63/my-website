import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Agreement from "@/components/Agreement";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      <section id="about">
        <About />
      </section>

      {/* FIX: اگر Sessions کلیک می‌شود و چیزی نمی‌آید، حتماً باید یک section با id=sessions وجود داشته باشد */}
      <section id="sessions" className="mx-auto max-w-6xl px-6 py-16">
        {/* اگر کامپوننت Sessions داری اینجا بگذار: <Sessions /> */}
        <h2 className="text-2xl font-bold text-slate-900">Sessions</h2>
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="agreement">
        <Agreement />
      </section>

      <section id="get-started">
        <Footer />
      </section>
    </main>
  );
}
