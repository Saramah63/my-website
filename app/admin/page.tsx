export const dynamic = "force-dynamic";

async function getJSON(path: string) {
  const res = await fetch(path, { cache: "no-store" });
  return res.json();
}

export default async function AdminPage() {
  // NOTE: in dev, absolute URL might be needed; in production it works fine.
  const agreements = await getJSON("http://localhost:3000/api/admin/agreements").catch(() => ({ rows: [] }));
  const feedback = await getJSON("http://localhost:3000/api/admin/feedback").catch(() => ({ rows: [] }));

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Admin</h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Agreements</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="p-3 text-left">timestamp</th>
                <th className="p-3 text-left">fullName</th>
                <th className="p-3 text-left">email</th>
                <th className="p-3 text-left">package</th>
                <th className="p-3 text-left">notes</th>
              </tr>
            </thead>
            <tbody>
              {(agreements.rows || []).map((r: any, i: number) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{r.timestamp}</td>
                  <td className="p-3">{r.fullName}</td>
                  <td className="p-3">{r.email}</td>
                  <td className="p-3">{r.package}</td>
                  <td className="p-3">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Feedback</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="p-3 text-left">timestamp</th>
                <th className="p-3 text-left">fullName</th>
                <th className="p-3 text-left">rating</th>
                <th className="p-3 text-left">allowPublish</th>
                <th className="p-3 text-left">message</th>
              </tr>
            </thead>
            <tbody>
              {(feedback.rows || []).map((r: any, i: number) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{r.timestamp}</td>
                  <td className="p-3">{r.fullName}</td>
                  <td className="p-3">{r.rating}</td>
                  <td className="p-3">{String(r.allowPublish)}</td>
                  <td className="p-3">{r.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
