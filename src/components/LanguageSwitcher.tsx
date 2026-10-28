"use client";

import { useEffect, useRef, useState } from "react";
import { getCurrentLanguage, languages, setLanguage } from "@/lib/languages";
import { Flag } from "./Flag";

export function LanguageSwitcher({ variant = "menu" }: { variant?: "menu" | "pills" }) {
  const [current, setCurrent] = useState("en");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(getCurrentLanguage());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(code: string) {
    if (code === current) {
      setOpen(false);
      return;
    }
    setLanguage(code);
  }

  if (variant === "pills") {
    return (
      <div translate="no" className="notranslate flex flex-wrap gap-2" role="group" aria-label="Language">
        {languages.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => choose(l.code)}
            aria-pressed={l.code === current}
            lang={l.code}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors cursor-pointer ${
              l.code === current
                ? "border-offwhite bg-offwhite text-black"
                : "border-white/15 text-offwhite/70 hover:border-offwhite/40"
            }`}
          >
            <Flag code={l.code} />
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} translate="no" className="notranslate relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm text-offwhite/80 transition-colors hover:text-offwhite cursor-pointer"
      >
        <Flag code={current} />
        <span className="uppercase">{current}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-lg border border-white/10 bg-black/95 py-1 shadow-xl backdrop-blur-sm"
        >
          {languages.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === current}>
              <button
                type="button"
                onClick={() => choose(l.code)}
                lang={l.code}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5 cursor-pointer ${
                  l.code === current ? "text-offwhite" : "text-offwhite/70"
                }`}
              >
                <Flag code={l.code} />
                <span className="flex-1">{l.label}</span>
                {l.code === current && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
