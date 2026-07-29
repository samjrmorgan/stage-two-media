"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { teamTimelines } from "@/lib/team-timeline";

export function TeamTimeline() {
  const [openNames, setOpenNames] = useState<string[]>([]);

  function toggle(name: string) {
    setOpenNames((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }

  return (
    <div className="rounded-md border border-white/10 overflow-hidden">
      {teamTimelines.map((person) => {
        const open = openNames.includes(person.name);
        return (
          <div key={person.name} className="border-b border-white/10 last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(person.name)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left cursor-pointer hover:bg-white/5 transition-colors"
            >
              <span>
                <span className="font-display text-2xl md:text-3xl text-offwhite">
                  {person.name}
                </span>
                <span className="block text-sm text-steel mt-1">{person.title}</span>
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className={`shrink-0 text-offwhite/60 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                {person.timeline.length > 0 ? (
                  <div className="relative pl-8 pr-6 pb-10">
                    <div className="absolute left-[calc(2rem-1px)] top-2 bottom-10 w-px bg-white/10" />
                    <div className="flex flex-col gap-9">
                      {person.timeline.map((y, i) => (
                        <Reveal key={y.year} delay={open ? i * 100 : 0} className="relative">
                          <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                          <p className="font-display text-xl text-offwhite mb-2">{y.year}</p>
                          <ul className="flex flex-col gap-1.5">
                            {y.items.map((item) => (
                              <li key={item} className="text-sm text-offwhite/70 leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="px-6 pb-10 text-sm text-offwhite/50 italic">
                    {person.name.split(" ")[0]}&apos;s timeline is coming soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
