"use client";

import { useRef, useState, FormEvent } from "react";

const skillOptions = [
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

const fieldClass =
  "w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-offwhite placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-offwhite/40";

export function WorkWithUsForm() {
  const [skills, setSkills] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "missing-skills">("idle");
  const startedAt = useRef(Date.now());

  function toggleSkill(skill: string) {
    setSkills((current) =>
      current.includes(skill) ? current.filter((s) => s !== skill) : [...current, skill]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (skills.length === 0) {
      setStatus("missing-skills");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/work-with-us", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          location: data.get("location"),
          portfolio: data.get("portfolio"),
          skills,
          message: data.get("message"),
          company: data.get("company"),
          startedAt: startedAt.current,
        }),
      });
      if (res.ok) {
        form.reset();
        setSkills([]);
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
          <label htmlFor="wwu-name" className="block text-sm text-offwhite/70 mb-2">
            Name
          </label>
          <input
            id="wwu-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="wwu-email" className="block text-sm text-offwhite/70 mb-2">
            Email
          </label>
          <input
            id="wwu-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="wwu-location" className="block text-sm text-offwhite/70 mb-2">
            Where are you based?
          </label>
          <input
            id="wwu-location"
            name="location"
            type="text"
            required
            className={fieldClass}
            placeholder="City, country"
          />
        </div>
        <div>
          <label htmlFor="wwu-portfolio" className="block text-sm text-offwhite/70 mb-2">
            Portfolio or showreel link
          </label>
          <input
            id="wwu-portfolio"
            name="portfolio"
            type="url"
            required
            className={fieldClass}
            placeholder="https://vimeo.com/..."
          />
        </div>
      </div>

      <div>
        <span className="block text-sm text-offwhite/70 mb-2">What can you take on?</span>
        <div className="flex flex-wrap gap-2">
          {skillOptions.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => toggleSkill(s)}
              aria-pressed={skills.includes(s)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer ${
                skills.includes(s)
                  ? "bg-offwhite text-black border-offwhite"
                  : "border-white/15 text-offwhite/70 hover:border-offwhite/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {status === "missing-skills" && (
          <p className="mt-2 text-sm text-accent" role="status">
            Pick at least one so we know where you fit.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="wwu-message" className="block text-sm text-offwhite/70 mb-2">
          Tell us about yourself
        </label>
        <textarea
          id="wwu-message"
          name="message"
          required
          rows={6}
          className={fieldClass}
          placeholder="Your experience, the kind of stories you tell, the kit you shoot on, languages you speak, and when you're usually available."
        />
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="wwu-company">Company</label>
        <input id="wwu-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent" role="status">
          Something went wrong sending that. Please try again, or email us
          directly at{" "}
          <a href="mailto:enquiries@stagetwo.media" className="underline underline-offset-4">
            enquiries@stagetwo.media
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start inline-flex items-center justify-center rounded-lg bg-offwhite text-black px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send application"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-offwhite/70" role="status">
          Thanks! We&apos;ve got your details and will be in touch if there&apos;s a fit.
        </p>
      )}
    </form>
  );
}
