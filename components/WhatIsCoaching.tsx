export default function WhatIsCoaching() {
  return (
    <section id="what-is-coaching" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-blue-700">What Is Coaching?</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Coaching is a transformative partnership
            </h2>
            <p className="mt-4 text-slate-600">
              Coaching is a transformative partnership that empowers you to achieve your goals
              and unlock your full potential through powerful questions and structured support.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Your Partner in Growth</h3>
              <div className="mt-3 space-y-4 text-slate-600">
                <p>
                  Unlike therapy, which focuses on healing past wounds, or consulting, where
                  experts provide solutions, coaching empowers <span className="font-medium text-slate-900">you</span> to
                  find your own answers.
                </p>
                <p>
                  As your coach, I create a safe, non-judgmental space where you can explore
                  challenges, identify opportunities, and develop actionable strategies for
                  meaningful change.
                </p>
                <p>
                  Through active listening, powerful questioning, and strategic guidance, we&apos;ll
                  work together to remove obstacles and accelerate your progress toward the
                  life you envision.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Benefits You&apos;ll Experience</h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Benefit
                  title="Goal Clarity"
                  text="Define and refine your personal and professional objectives with precision"
                />
                <Benefit
                  title="Insight & Awareness"
                  text="Discover new perspectives and unlock hidden potential within yourself"
                />
                <Benefit
                  title="Accountability"
                  text="Stay committed to your growth with structured, consistent support"
                />
                <Benefit
                  title="Empowerment"
                  text="Build unshakeable confidence and take full ownership of your journey"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">How Coaching Differs</h3>

              <div className="mt-5 grid gap-4">
                <DiffRow
                  label="Coaching"
                  text="Future-focused, action-oriented, unlocks your answers"
                  accent="bg-blue-50 text-blue-700 border-blue-100"
                />
                <DiffRow
                  label="Therapy"
                  text="Past-focused, healing-oriented, clinical approach"
                  accent="bg-slate-50 text-slate-700 border-slate-200"
                />
                <DiffRow
                  label="Consulting"
                  text="Expert-driven, solution-oriented, tells you what to do"
                  accent="bg-slate-50 text-slate-700 border-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="font-medium text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{text}</div>
    </div>
  );
}

function DiffRow({
  label,
  text,
  accent,
}: {
  label: string;
  text: string;
  accent: string;
}) {
  return (
    <div className={`flex flex-col gap-1 rounded-xl border px-4 py-3 ${accent}`}>
      <div className="text-sm font-semibold">{label}:</div>
      <div className="text-sm">{text}</div>
    </div>
  );
}
