import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(process.env.FEEDBACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        token: process.env.WEBHOOK_TOKEN,
        ip: req.headers.get("x-forwarded-for") || "",
        userAgent: req.headers.get("user-agent") || "",
      }),
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok || json.ok === false) {
      return NextResponse.json({ ok: false, error: json.error || "Webhook failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Error" }, { status: 500 });
  }
}
