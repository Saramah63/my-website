import { NextResponse } from "next/server";

function sanitize(input: unknown, max = 3000) {
  return String(input ?? "").trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = {
      timestamp: new Date().toISOString(),
      name: sanitize(body?.name, 120),
      email: sanitize(body?.email, 254),
      location: sanitize(body?.location, 120),
      situation: sanitize(body?.situation, 2000),
      unclear: sanitize(body?.unclear, 2000),
      tried: sanitize(body?.tried, 2000),
      changeGoal: sanitize(body?.changeGoal, 2000),
      blockers: sanitize(body?.blockers, 2000),
      preferredFormat: sanitize(body?.preferredFormat, 120),
      investmentReadiness: sanitize(body?.investmentReadiness, 120),
      extraContext: sanitize(body?.extraContext, 2000),
    };

    const requiredFields = [
      payload.name,
      payload.email,
      payload.location,
      payload.situation,
      payload.unclear,
      payload.preferredFormat,
      payload.investmentReadiness,
    ];

    if (requiredFields.some((value) => !value)) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        { error: "Missing Google Script URL." },
        { status: 500 }
      );
    }

    const googleRes = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const raw = await googleRes.text();
    let data: Record<string, unknown> | null = null;

    try {
      data = raw ? (JSON.parse(raw) as Record<string, unknown>) : null;
    } catch {
      data = { raw };
    }

    if (!googleRes.ok || !data?.success) {
      console.error("Google Sheets submission failed", {
        status: googleRes.status,
        response: data,
      });

      return NextResponse.json(
        { error: "Failed to store application." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Apply API error:", error);

    return NextResponse.json(
      { error: "Server error while processing application." },
      { status: 500 }
    );
  }
}
