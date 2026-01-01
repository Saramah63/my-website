import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WhatIsCoaching from "../components/WhatIsCoaching";
import Multilingual from "../components/Multilingual";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Agreement from "../components/Agreement";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <WhatIsCoaching />
      <Multilingual />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Agreement />
      <FinalCTA />
<Footer />
  
    </main>
  );
}


