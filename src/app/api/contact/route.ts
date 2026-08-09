import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2000;

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Enquiries aren't configured yet - missing RESEND_API_KEY." },
      { status: 503 }
    );
  }

  let body: { name?: string; email?: string; budget?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const budget = typeof body.budget === "string" ? body.budget.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name ||
    !EMAIL_RE.test(email) ||
    !budget ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
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
      subject: `New project enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Couldn't send the enquiry. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
