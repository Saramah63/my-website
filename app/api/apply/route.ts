import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { EMAIL_PASS, EMAIL_USER, NOTIFICATION_EMAIL, SITE_NAME } from "@/lib/siteConfig";

const STORE_PATH = path.join(process.cwd(), "data", "submissions.json");
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;

function sanitize(input: string, max: number) {
  return String(input || "").trim().slice(0, max);
}

function jsonError(
  error: string,
  status: number,
  extras?: Record<string, string | boolean | number | null | undefined>
) {
  return NextResponse.json({ ok: false, error, ...extras }, { status });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function localize(lang: "fa" | "en", en: string, fa: string) {
  return lang === "fa" ? fa : en;
}

function getMailTransport() {
  const smtpHost = process.env.SMTP_HOST || "";
  const smtpPort = Number(process.env.SMTP_PORT || "");
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER || EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || EMAIL_PASS;

  if (smtpHost && smtpPort && smtpUser && smtpPass) {
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      }),
      fromEmail: smtpUser,
      configMode: "smtp",
    };
  }

  if (EMAIL_USER && EMAIL_PASS) {
    return {
      transporter: nodemailer.createTransport({
        service: "gmail",
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      }),
      fromEmail: EMAIL_USER,
      configMode: "gmail",
    };
  }

  return null;
}

export async function POST(req: Request) {
  const hdrs = await headers();
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const requestId = crypto.randomUUID();
  const now = Date.now();
  const record = rateMap.get(ip);
  if (!record || now - record.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
  } else {
    if (record.count >= RATE_LIMIT) {
      console.warn(`[apply:${requestId}] Rate limit exceeded`, { ip });
      return jsonError("Too many requests. Please try again later.", 429, {
        code: "RATE_LIMITED",
        requestId,
      });
    }
    record.count += 1;
    rateMap.set(ip, record);
  }

  const body = await req.json().catch((error) => {
    console.error(`[apply:${requestId}] Invalid JSON body`, error);
    return null;
  });

  if (!body || typeof body !== "object") {
    return jsonError("Invalid request body.", 400, { code: "INVALID_JSON", requestId });
  }

  const lang: "fa" | "en" = body?.lang === "fa" ? "fa" : "en";
  const payload = {
    name: sanitize(body?.name, 120),
    email: sanitize(body?.email, 254),
    location: sanitize(body?.location, 40),
    currentSituation: sanitize(body?.currentSituation, 1200),
    biggestConstraint: sanitize(body?.biggestConstraint, 2000),
    triedSoFar: sanitize(body?.triedSoFar, 2000),
    desiredChange: sanitize(body?.desiredChange, 2000),
    progressBlocker: sanitize(body?.progressBlocker, 2000),
    preferredFormat: sanitize(body?.preferredFormat, 40),
    investmentReadiness: sanitize(body?.investmentReadiness, 120),
    additionalContext: sanitize(body?.additionalContext, 2000),
    companyWebsite: sanitize(body?.companyWebsite, 120),
    lang,
    createdAt: new Date().toISOString(),
  };

  console.info(`[apply:${requestId}] Submission received`, {
    lang: payload.lang,
    location: payload.location,
    preferredFormat: payload.preferredFormat,
    hasAdditionalContext: Boolean(payload.additionalContext),
    hasHoneypot: Boolean(payload.companyWebsite),
  });

  if (payload.companyWebsite) {
    console.warn(`[apply:${requestId}] Honeypot triggered`);
    return NextResponse.json({ ok: true, message: "Submitted successfully", requestId });
  }

  const requiredFields = [
    ["name", payload.name],
    ["email", payload.email],
    ["location", payload.location],
    ["currentSituation", payload.currentSituation],
    ["biggestConstraint", payload.biggestConstraint],
    ["triedSoFar", payload.triedSoFar],
    ["desiredChange", payload.desiredChange],
    ["progressBlocker", payload.progressBlocker],
    ["preferredFormat", payload.preferredFormat],
  ] as const;

  const missingField = requiredFields.find(([, value]) => !value)?.[0];
  if (missingField) {
    console.warn(`[apply:${requestId}] Missing required field`, { missingField });
    return jsonError(localize(payload.lang, "Please complete all required fields.", "لطفاً تمام فیلدهای ضروری را تکمیل کنید."), 400, {
      code: "VALIDATION_ERROR",
      field: missingField,
      requestId,
    });
  }

  if (!isValidEmail(payload.email)) {
    console.warn(`[apply:${requestId}] Invalid email`, { email: payload.email });
    return jsonError(localize(payload.lang, "Please enter a valid email address.", "لطفاً یک آدرس ایمیل معتبر وارد کنید."), 400, {
      code: "INVALID_EMAIL",
      field: "email",
      requestId,
    });
  }

  try {
    const mailer = getMailTransport();
    if (!mailer || !NOTIFICATION_EMAIL) {
      console.error(`[apply:${requestId}] Email config missing`, {
        hasNotificationEmail: Boolean(NOTIFICATION_EMAIL),
        hasEmailUser: Boolean(EMAIL_USER),
        hasEmailPass: Boolean(EMAIL_PASS),
        hasSmtpHost: Boolean(process.env.SMTP_HOST),
        hasSmtpPort: Boolean(process.env.SMTP_PORT),
        hasSmtpUser: Boolean(process.env.SMTP_USER),
        hasSmtpPass: Boolean(process.env.SMTP_PASS),
      });
      return jsonError(
        localize(
          payload.lang,
          "Submission is temporarily unavailable. Please contact me directly or try again later.",
          "ارسال درخواست موقتاً در دسترس نیست. لطفاً مستقیم با من در ارتباط باشید یا بعداً دوباره تلاش کنید."
        ),
        503,
        {
          code: "EMAIL_CONFIG_MISSING",
          requestId,
        }
      );
    }

    try {
      await mailer.transporter.sendMail({
        from: `${SITE_NAME} <${mailer.fromEmail}>`,
        to: NOTIFICATION_EMAIL,
        replyTo: payload.email,
        subject: `New Application – SaraMahmodi.com${payload.lang === "fa" ? " [FA]" : ""}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Location: ${payload.location}`,
          `Current situation: ${payload.currentSituation}`,
          `What feels unclear or stuck: ${payload.biggestConstraint}`,
          `Tried so far: ${payload.triedSoFar}`,
          `Desired change (1-3 months): ${payload.desiredChange}`,
          `What has been preventing progress: ${payload.progressBlocker}`,
          `Preferred format: ${payload.preferredFormat}`,
          `Investment readiness: ${payload.investmentReadiness}`,
          `Additional context: ${payload.additionalContext}`,
          `Language: ${payload.lang}`,
          `Created: ${payload.createdAt}`,
          "",
          "JSON:",
          JSON.stringify(payload, null, 2),
        ].join("\n"),
      });

      console.info(`[apply:${requestId}] Notification email sent`, { mode: mailer.configMode });

      try {
        await mailer.transporter.sendMail({
          from: `${SITE_NAME} <${mailer.fromEmail}>`,
          to: payload.email,
          subject: payload.lang === "fa" ? "دریافت درخواست همکاری" : "Application received",
          text:
            payload.lang === "fa"
              ? [
                  `سلام ${payload.name}،`,
                  "",
                  "از ارسال درخواست شما متشکرم.",
                  "",
                  "پاسخ‌های شما را بررسی می‌کنم و طی ۲ تا ۳ روز کاری به شما برمی‌گردم.",
                  "",
                  "اگر در این فاصله نکته مهمی به وضعیت شما اضافه شد، می‌توانید همین ایمیل را reply کنید.",
                  "",
                  "با احترام،",
                  "Sara",
                ].join("\n")
              : [
                  `Hi ${payload.name},`,
                  "",
                  "Thanks for your application.",
                  "",
                  "I’ll review your responses and get back to you within 2–3 business days.",
                  "",
                  "In the meantime, if anything important changes in your situation, feel free to reply and add context.",
                  "",
                  "Best,",
                  "Sara",
                ].join("\n"),
        });
        console.info(`[apply:${requestId}] Applicant confirmation email sent`);
      } catch (confirmationError) {
        console.error(`[apply:${requestId}] Applicant confirmation email failed`, confirmationError);
      }
    } catch (err) {
      console.error(`[apply:${requestId}] Notification email failed`, err);
      return jsonError(
        localize(
          payload.lang,
          "The submission could not be delivered right now. Please try again shortly.",
          "در حال حاضر ارسال درخواست انجام نشد. لطفاً کمی بعد دوباره تلاش کنید."
        ),
        502,
        {
          code: "EMAIL_SEND_FAILED",
          requestId,
        }
      );
    }

    // NOTE: File-based storage is intended for local dev only.
    // Vercel/production file system is read-only, so skip it there.
    if (!process.env.VERCEL) {
      try {
        let current: unknown[] = [];
        try {
          const raw = await fs.readFile(STORE_PATH, "utf8");
          current = JSON.parse(raw) as unknown[];
        } catch {
          current = [];
        }

        current.push(payload);
        await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
        await fs.writeFile(STORE_PATH, JSON.stringify(current, null, 2));
      } catch (err) {
        console.error(`[apply:${requestId}] Local storage failed`, err);
      }
    }

    console.info(`[apply:${requestId}] Submission completed successfully`);
    return NextResponse.json({
      ok: true,
      message: payload.lang === "fa" ? "ارسال با موفقیت انجام شد" : "Submitted successfully",
      requestId,
    });
  } catch (error) {
    console.error(`[apply:${requestId}] Unexpected apply route failure`, error);
    return jsonError(
      localize(
        payload.lang,
        "Something went wrong on the server. Please try again later.",
        "در سمت سرور مشکلی پیش آمد. لطفاً بعداً دوباره تلاش کنید."
      ),
      500,
      {
        code: "UNEXPECTED_SERVER_ERROR",
        requestId,
      }
    );
  }
}
