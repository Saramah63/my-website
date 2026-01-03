import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = new URL(process.env.FEEDBACK_WEBHOOK_URL!);
    url.searchParams.set("mode", "public");
    url.searchParams.set("limit", "6");

    const res = await fetch(url.toString(), { cache: "no-store" });
    const json = await res.json();

    if (!res.ok || json.ok === false) {
      return NextResponse.json({ ok: false, rows: [] }, { status: 500 });
    }

    return NextResponse.json({ ok: true, rows: json.rows || [] });
  } catch {
    return NextResponse.json({ ok: false, rows: [] }, { status: 500 });
  }
}
