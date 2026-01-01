import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />

      {/* placeholders */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">About Your Coach</h2>
      </section>

      <section id="sessions" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Sessions</h2>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Pricing</h2>
      </section>

      <section id="agreement" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Agreement</h2>
      </section>

      <section id="get-started" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Get Started</h2>
      </section>
    </main>
  );
}
import About from "@/components/About";

