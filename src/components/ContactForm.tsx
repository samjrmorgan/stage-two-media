"use client";

import { useState, FormEvent } from "react";

const budgets = ["Under $2k", "$2k–$10k", "$10k–$50k", "$50k+", "Not sure yet"];

export function ContactForm() {
  const [budget, setBudget] = useState(budgets[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          budget,
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        form.reset();
        setBudget(budgets[0]);
      }
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-offwhite/70 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-offwhite placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-offwhite/40"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-offwhite/70 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-offwhite placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-offwhite/40"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <span className="block text-sm text-offwhite/70 mb-2">Budget range</span>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => setBudget(b)}
              aria-pressed={budget === b}
              className={`rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer ${
                budget === b
                  ? "bg-offwhite text-black border-offwhite"
                  : "border-white/15 text-offwhite/70 hover:border-offwhite/40"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-offwhite/70 mb-2">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-offwhite placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-offwhite/40"
          placeholder="What are you trying to make, and by when?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent" role="status">
          Something went wrong sending that. Please try again, or email us
          directly at{" "}
          <a href="mailto:sam@stagetwo.media" className="underline underline-offset-4">
            sam@stagetwo.media
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start inline-flex items-center justify-center rounded-lg bg-offwhite text-black px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-offwhite/70" role="status">
          Thanks! We&apos;ve got your enquiry and will be in touch soon.
        </p>
      )}
    </form>
  );
}
