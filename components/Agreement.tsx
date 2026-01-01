export default function Agreement() {
  return (
    <section id="agreement" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-700">Agreement</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Flexible Policies
          </h2>
          <p className="mt-4 text-slate-600">
            Clear expectations create a safe and professional coaching space.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PolicyCard
            title="Cancellation"
            items={[
              "24-hour notice for rescheduling",
              "Late cancellations may be charged",
              "You can request a new time based on availability",
            ]}
          />
          <PolicyCard
            title="Refund Policy"
            items={[
              "Unused sessions refundable within 30 days",
              "Packages are transferable upon request",
              "Refunds exclude already-delivered sessions",
            ]}
          />
          <PolicyCard
            title="Payment Methods"
            items={[
              "Credit card",
              "Bank transfer",
              "PayPal",
            ]}
          />
          <PolicyCard
            title="Sliding Scale"
            items={[
              "Limited spots for financial constraints",
              "Apply by email with a brief note",
              "Decision based on availability",
            ]}
          />
        </div>

        <div className="mt-12 rounded-2xl bg-white p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Confidentiality</h3>
          <p className="mt-3 text-sm text-slate-600">
            Coaching conversations are confidential. Your privacy and psychological safety are
            a non-negotiable priority.
          </p>
        </div>
      </div>
    </section>
  );
}

function PolicyCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {items.map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}
