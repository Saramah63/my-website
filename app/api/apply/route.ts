import { NextResponse } from "next/server";

type ApplyBody = {
  name?: unknown;
  email?: unknown;
  location?: unknown;
  situation?: unknown;
  unclear?: unknown;
  tried?: unknown;
  changeGoal?: unknown;
  blockers?: unknown;
  preferredFormat?: unknown;
  investmentReadiness?: unknown;
  extraContext?: unknown;
  lang?: unknown;
};

function sanitize(input: unknown, max: number) {
  return String(input ?? "").trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ApplyBody;

    const payload = {
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
      lang: body?.lang === "fa" ? "fa" : "en",
    };

    console.log("Apply form received:", {
      ...payload,
      email: payload.email || "[missing]",
    });

    if (!payload.name || !payload.email) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          payload.lang === "fa"
            ? "درخواست شما دریافت شد. طی ۲ تا ۳ روز کاری با شما در ارتباط خواهم بود."
            : "Your application has been received. I’ll get back to you within 2–3 business days.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Apply API error:", error);

    return NextResponse.json(
      { error: "Server error while processing application." },
      { status: 500 }
    );
  }
}
