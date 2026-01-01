export default function Multilingual() {
  return (
    <section id="multilingual" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-700">
            Multilingual Coaching Services
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Coaching Without Language Barriers
          </h2>
          <p className="mt-4 text-slate-600">
            As a multilingual coach, I understand the unique challenges of working
            across cultures and languages. Whether English is your first or second
            language, you&apos;ll feel comfortable and understood.
          </p>
        </div>

        {/* Languages */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <LangCard title="English" subtitle="Professional" />
          <LangCard title="فارسی" subtitle="Native" />
        </div>

        {/* Audience */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Audience
            title="International Professionals"
            icon="🌍"
            text="Navigate career growth in new countries with cultural sensitivity and clarity."
          />
          <Audience
            title="Expats & Immigrants"
            icon="✈️"
            text="Adapt to new cultures while staying true to your values and identity."
          />
          <Audience
            title="ESL Professionals"
            icon="🎓"
            text="Build confidence in English-speaking environments and professional settings."
          />
          <Audience
            title="Cross-Cultural Leaders"
            icon="🌉"
            text="Bridge cultural differences and lead diverse, global teams effectively."
          />
        </div>

        {/* Countries */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Serving Clients From
          </h3>
          <p className="mt-3 text-slate-600">
            🇮🇷 🇦🇫 🇹🇯 &nbsp;&nbsp; 🇬🇧 🇩🇪 🇫🇷 🇸🇪 🇫🇮 &nbsp;&nbsp; 🇺🇸 🇨🇦 &nbsp;&nbsp; 🇦🇺 🇳🇿
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Virtual sessions available worldwide • All time zones welcome
          </p>
        </div>
      </div>
    </section>
  );
}

function LangCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-5 py-3">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="text-sm text-slate-500">{subtitle}</div>
    </div>
  );
}

function Audience({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-2xl">{icon}</div>
      <h4 className="mt-3 font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
