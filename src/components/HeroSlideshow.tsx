"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/hero-slides";

const SLIDE_DURATION_MS = 11000;

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
  }, [index]);

  const awardSlideIndex = heroSlides.findIndex((s) => s.award);
  const award = awardSlideIndex >= 0 ? heroSlides[awardSlideIndex].award : undefined;
  const showAward = index === awardSlideIndex;

  return (
    <div className="absolute inset-0">
      {heroSlides.map((slide, i) => {
        const fadeClass = `object-cover animate-kenburns transition-opacity duration-[1500ms] ease-in-out ${
          i === index ? "opacity-100" : "opacity-0"
        }`;

        if (slide.mobileSrc) {
          return (
            <div key={slide.src} className="contents">
              <Image
                src={slide.mobileSrc}
                alt={slide.mobileAlt ?? slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={`md:hidden ${fadeClass}`}
              />
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={`hidden md:block ${fadeClass}`}
              />
            </div>
          );
        }

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={fadeClass}
          />
        );
      })}

      {award && (
        <div
          className={`absolute top-28 right-8 z-10 hidden items-end gap-3 transition-opacity duration-[1500ms] ease-in-out md:flex ${
            showAward ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {award.badges.map((badge, i) => (
            <div
              key={badge.src}
              className="relative h-20 w-20 animate-float"
              style={{
                filter: "drop-shadow(0 8px 14px rgba(0,0,0,0.5))",
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <Image src={badge.src} alt={badge.alt} fill sizes="80px" className="object-contain" />
            </div>
          ))}
        </div>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 z-20 flex items-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ease-out ${
              i === index
                ? "w-6 bg-offwhite"
                : "w-1.5 bg-offwhite/40 hover:bg-offwhite/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
