import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
      {/* Left */}
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
          Mindshift for Lifeshift - Transform Your Life
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Unlock Your Full Potential
        </h1>

        <p className="mt-4 text-slate-600">
          Transform your mindset, transform your life. Professional multilingual coaching
          for sustainable personal and career growth. Begin your journey from within.
        </p>

        <div className="mt-7 flex gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>

        <Stats
          items={[
            { value: "500+", label: "Clients Coached" },
            { value: "10+", label: "Years Experience" },
            { value: "95%", label: "Success Rate" },
          ]}
        />
      </div>

      {/* Right */}
      <div className="relative">
        <div className="aspect-square w-full rounded-3xl bg-blue-700 flex items-center justify-center">
          <div className="text-center text-white/85">
            <div className="mx-auto mb-3 h-14 w-14 rounded-2xl bg-white/15" />
            <div className="text-sm font-medium">Your transformation starts here</div>
          </div>
        </div>

        <div className="absolute right-4 top-4 rounded-xl bg-white px-4 py-3 text-sm shadow">
          <div className="font-medium text-slate-900">Client Success</div>
          <div className="text-slate-600">⭐ 4.9/5</div>
        </div>

        <div className="absolute bottom-6 left-6 rounded-xl bg-white px-4 py-3 text-sm shadow">
          <div className="text-slate-500">Next Available</div>
          <div className="font-medium text-slate-900">This Week</div>
        </div>
      </div>
    </section>
  );
}
