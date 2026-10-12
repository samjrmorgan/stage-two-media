import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 3000;
const MIN_FILL_MS = 3000;
const SKILLS = [
  "Pre-production & planning",
  "Directing & shooting video",
  "Editing & colour",
  "Sound & delivery",
  "Photography",
  "Drone",
  "Animation",
  "Motion graphics",
  "Solo fieldwork",
];

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Applications aren't configured yet - missing RESEND_API_KEY." },
      { status: 503 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    location?: string;
    portfolio?: string;
    skills?: unknown;
    message?: string;
    company?: string;
    startedAt?: number;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Bots fill the hidden field or submit instantly - pretend it worked.
  const tooFast =
    typeof body.startedAt !== "number" || Date.now() - body.startedAt < MIN_FILL_MS;
  if (body.company || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = clean(body.name).replace(/[\r\n]+/g, " ");
  const email = clean(body.email);
  const location = clean(body.location);
  const portfolio = clean(body.portfolio);
  const message = clean(body.message);
  const skills = Array.isArray(body.skills)
    ? body.skills.filter((s): s is string => typeof s === "string" && SKILLS.includes(s))
    : [];

  if (
    !name ||
    !EMAIL_RE.test(email) ||
    !location ||
    !isHttpUrl(portfolio) ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH ||
    skills.length === 0
  ) {
    return NextResponse.json({ error: "Invalid application details." }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Stage Two Enquiries <enquiries@stagetwo.media>",
      to: ["sam@stagetwo.media"],
      reply_to: email,
      subject: `Producer application from ${name} (${location})`,
      text: `Name: ${name}\nEmail: ${email}\nBased in: ${location}\nPortfolio: ${portfolio}\nSkills: ${skills.join(", ")}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Couldn't send the application. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
