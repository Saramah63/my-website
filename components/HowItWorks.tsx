export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-700">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            A simple, proven process designed to create lasting transformation
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <Step
            number="01"
            title="Free Consultation"
            text="We discuss your goals, challenges, and see if we’re a good fit."
          />
          <Step
            number="02"
            title="Choose Your Package"
            text="Select the coaching package that matches your commitment level."
          />
          <Step
            number="03"
            title="Start Your Sessions"
            text="Begin your transformation with regular 60-minute coaching sessions."
          />
          <Step
            number="04"
            title="Track Your Progress"
            text="Celebrate wins, refine strategies, and achieve meaningful results."
          />
        </div>

        {/* Session Details */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              What to Expect in Each Session
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• 60-minute focused coaching sessions</li>
              <li>• Weekly or bi-weekly scheduling</li>
              <li>• Video call, phone, or in-person</li>
              <li>• Action steps and follow-up support</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Typical Session Flow
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>5 min — Check-in & review progress</li>
              <li>15 min — Explore current challenges</li>
              <li>20 min — Insight & breakthrough work</li>
              <li>15 min — Action plan & next steps</li>
              <li>5 min — Commitment & accountability</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-blue-600 px-6 py-8 text-white md:flex-row md:items-center">
          <p className="text-lg font-medium">
            Ready to take the first step toward real change?
          </p>
          <a
            href="#get-started"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-slate-100"
          >
            Book Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-sm font-semibold text-blue-700">{number}</div>
      <h4 className="mt-2 font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
