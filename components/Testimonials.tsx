export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-700">
            Client Success Stories
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            What My Clients Say
          </h2>
          <p className="mt-4 text-slate-600">
            Real transformations from real people who invested in their growth.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            quote="Sara understood my cultural and language challenges instantly. Her bilingual coaching helped me build confidence and finally speak up in international meetings."
            name="Fatima Al-Rashid"
            role="Marketing Manager, Dubai"
            result="Promoted to Regional Director"
          />
          <TestimonialCard
            quote="Working with Sara helped me overcome imposter syndrome and communicate clearly with global teams. The transformation was fast and real."
            name="Ahmed Hassan"
            role="Tech Entrepreneur, Egypt"
            result="Secured $500K funding"
          />
          <TestimonialCard
            quote="Sara helped me adapt professionally in a new country without losing myself. I finally found balance between career and personal life."
            name="Layla Mansour"
            role="Healthcare Professional, UK"
            result="Achieved work-life balance"
          />
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            ⭐ <span className="font-medium text-slate-900">4.9/5</span> Client Rating
          </div>
          <div className="flex items-center gap-2">
            🔒 <span className="font-medium text-slate-900">100%</span> Confidential
          </div>
          <div className="flex items-center gap-2">
            💬 <span className="font-medium text-slate-900">24h</span> Response Time
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  result,
}: {
  quote: string;
  name: string;
  role: string;
  result: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm text-slate-700">“{quote}”</p>

      <div className="mt-6">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{role}</div>
        <div className="mt-2 text-sm font-medium text-blue-700">
          Result: {result}
        </div>
      </div>
    </div>
  );
}
