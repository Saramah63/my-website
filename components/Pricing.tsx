export default function Pricing() {
  return (
    <section id="pricing" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-700">
            Investment in Your Growth
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Choose the coaching package that fits your journey
          </h2>
          <p className="mt-4 text-slate-600">
            All packages include the same high-quality coaching experience.
            Choose the level of support that matches your commitment.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PriceCard
            title="Single Session"
            price="$150"
            subtitle="per session"
            description="Perfect for trying coaching or occasional support"
            features={[
              "60-minute coaching session",
              "Pre-session preparation form",
              "Post-session summary",
            ]}
            cta="Get Started"
          />

          <PriceCard
            title="Monthly Package"
            price="$500"
            subtitle="per month"
            highlight
            badge="Most Popular"
            description="Best choice for consistent growth and momentum"
            features={[
              "4 coaching sessions (60 min each)",
              "Pre-session preparation forms",
              "Email support between sessions",
              "Progress tracking",
              "15% savings vs single sessions",
            ]}
            cta="Get Started"
          />

          <PriceCard
            title="Quarterly Package"
            price="$1,350"
            subtitle="for 3 months"
            badge="Best Value"
            description="Deep, lasting transformation with full support"
            features={[
              "12 coaching sessions (60 min each)",
              "Initial goal-setting intensive",
              "Mid-point progress review",
              "Priority email support",
              "Custom resources & tools",
              "25% savings vs single sessions",
            ]}
            cta="Get Started"
          />
        </div>

        {/* Policies */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Flexible Policies</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• 24-hour notice for rescheduling</li>
              <li>• Unused sessions refundable within 30 days</li>
              <li>• Sliding scale options available</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Payment Methods</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Credit card</li>
              <li>• Bank transfer</li>
              <li>• PayPal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  subtitle,
  description,
  features,
  cta,
  highlight,
  badge,
}: {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 ${
        highlight
          ? "border-blue-600 bg-white shadow-lg"
          : "border-slate-200 bg-white"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
          {badge}
        </div>
      )}

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <div className="mt-3">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        <span className="ml-1 text-sm text-slate-500">{subtitle}</span>
      </div>

      <p className="mt-3 text-sm text-slate-600">{description}</p>

      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <a
        href="#get-started"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold ${
          highlight
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-200 text-slate-900 hover:bg-slate-50"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
