"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import type { Print } from "@/lib/prints";

export function PrintsGrid({ prints }: { prints: Print[] }) {
  const [activePrint, setActivePrint] = useState<Print | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function closeModal() {
    setActivePrint(null);
    setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!activePrint) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/print-enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          printName: activePrint.title,
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prints.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <div className="rounded-md border border-white/10 bg-black overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <h2 className="font-display text-xl text-offwhite">{p.title}</h2>
                <button
                  type="button"
                  onClick={() => {
                    setActivePrint(p);
                    setStatus("idle");
                  }}
                  className="shrink-0 inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.1em] text-offwhite hover:bg-offwhite hover:text-black transition-colors cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {activePrint && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-lg border border-white/10 bg-black p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <h2 className="font-display text-2xl text-offwhite">
                Enquire about {activePrint.title}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="shrink-0 text-offwhite/60 hover:text-offwhite transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {status === "sent" ? (
              <p className="text-offwhite/80">
                Thanks! We&apos;ve got your enquiry and will be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm text-offwhite/70 mb-2">
                    Your email
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
                <div>
                  <label htmlFor="message" className="block text-sm text-offwhite/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-offwhite placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-offwhite/40"
                    placeholder="Tell us the size and finish you're after."
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-accent">
                    Something went wrong sending that. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-offwhite text-black px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 cursor-pointer"
                >
                  {status === "sending" ? "Sending..." : "Send enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
