export default function About() {
  return (
    <section id="about" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-700">About Your Coach</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Meet Sara</h2>
          <p className="mt-2 text-slate-600">
            Your partner in transformation and personal growth
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Story */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">My Story</h3>
            <div className="mt-4 space-y-4 text-slate-600">
              <p>
                I'm Sara, a mindset and life transformation coach, passionate about personal
                growth.
              </p>
              <p>
                My own journey of transformation inspires me to guide others on theirs.
              </p>
              <p>
                I help you uncover your values, talents, and inner strengths. I believe that
                shifting your mind transforms your life. Together, we'll begin from within,
                shift your mindset, and build a life aligned with your true desires.
              </p>
              <p>
                I am here to guide you in discovering and creating the best version of
                yourself.
              </p>
            </div>
          </div>

          {/* Traits */}
          <div className="grid gap-4 sm:grid-cols-2">
            <TraitCard title="Passionate" subtitle="About your personal growth and transformation" />
            <TraitCard title="Focused" subtitle="On uncovering your values and strengths" />
            <TraitCard title="Certified" subtitle="Life Coach" />
            <TraitCard title="Transformative" subtitle="Supportive" />
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-slate-900">My Coaching Philosophy</h3>
            <p className="text-slate-600">
              <span className="font-medium text-slate-900">"Shifting your mind transforms your life"</span>
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step
              emoji="🧠"
              title="Begin Within"
              text="Real transformation starts from the inside. We explore your values, beliefs, and inner strengths first."
            />
            <Step
              emoji="🔄"
              title="Shift Your Mindset"
              text="Change limiting beliefs and thought patterns that hold you back. Create new empowering perspectives."
            />
            <Step
              emoji="🌟"
              title="Transform Your Life"
              text="Build a life aligned with your true desires. Become the best version of yourself."
            />
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-blue-50 p-5 md:flex-row md:items-center">
            <p className="text-slate-700">
              Ready to start your transformation journey?
            </p>
            <a
              href="#get-started"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Book Your Free Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TraitCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{subtitle}</div>
    </div>
  );
}

function Step({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-2xl">{emoji}</div>
      <div className="mt-3 text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}
