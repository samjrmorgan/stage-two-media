"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/hero-slides";

const SLIDE_DURATION_MS = 6000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion.current) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const activeAward = heroSlides[index].award;

  return (
    <div className="absolute inset-0">
      {heroSlides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover animate-kenburns transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        className={`absolute top-24 right-4 md:top-28 md:right-8 z-10 flex flex-col items-end gap-3 transition-opacity duration-[1500ms] ease-in-out ${
          activeAward ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {activeAward && (
          <>
            <div className="max-w-xs rounded-lg border border-white/15 bg-black/40 backdrop-blur-sm px-4 py-3 text-right">
              <p className="flex items-center justify-end gap-1.5 text-xs uppercase tracking-[0.1em] text-accent">
                {activeAward.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 2L14.6 8.6L21.5 9.2L16.3 13.7L17.9 20.5L12 16.8L6.1 20.5L7.7 13.7L2.5 9.2L9.4 8.6L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <p className="mt-1 text-sm text-offwhite/85">{activeAward.detail}</p>
            </div>
            <div className="flex items-end gap-3 pr-1">
              {activeAward.badges.map((badge, i) => (
                <div
                  key={badge.src}
                  className="relative h-16 w-16 md:h-20 md:w-20 animate-float"
                  style={{
                    filter: "drop-shadow(0 8px 14px rgba(0,0,0,0.5))",
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <Image src={badge.src} alt={badge.alt} fill sizes="80px" className="object-contain" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
