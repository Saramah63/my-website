type Stat = {
  value: string;
  label: string;
};

export default function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6 text-sm">
      {items.map((s) => (
        <div key={s.label}>
          <div className="text-2xl font-bold text-blue-700">{s.value}</div>
          <div className="text-slate-500">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
