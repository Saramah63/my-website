export default function Section({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium text-slate-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
      {intro ? <p className="mt-3 max-w-3xl text-slate-600">{intro}</p> : null}
      <div className="mt-10">{children}</div>
    </div>
  );
}
