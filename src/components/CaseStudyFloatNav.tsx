"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function CaseStudyFloatNav({
  prevHref,
  nextHref,
}: {
  prevHref: string;
  nextHref: string;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("case-study-prev-next");
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Link
        href={prevHref}
        aria-label="Previous project"
        className={`hidden md:flex fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-sm text-offwhite transition-all duration-300 hover:border-white/40 hover:bg-black/60 cursor-pointer ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Link
        href={nextHref}
        aria-label="Next project"
        className={`hidden md:flex fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-sm text-offwhite transition-all duration-300 hover:border-white/40 hover:bg-black/60 cursor-pointer ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </>
  );
}
