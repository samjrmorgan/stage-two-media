import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2000;

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Print enquiries aren't configured yet - missing RESEND_API_KEY." },
      { status: 503 }
    );
  }

  let body: { printName?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const printName = typeof body.printName === "string" ? body.printName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!printName || !EMAIL_RE.test(email) || !message || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Stage Two Prints <prints@stagetwo.media>",
      to: ["sam@stagetwo.media"],
      reply_to: email,
      subject: `I would like to enquire about ${printName} print`,
      text: `From: ${email}\n\nMessage:\n${message}`,
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
