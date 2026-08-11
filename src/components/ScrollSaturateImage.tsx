"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

export function ScrollSaturateImage(props: ImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;

    const el = ref.current;
    if (!el) return;

    let frame: number | null = null;

    function update() {
      frame = null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress = how much of the image's own height is currently visible.
      // Ramps up while entering from below, plateaus at 1 while fully on
      // screen, then ramps back down as it exits off the top.
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, vh);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const progress = rect.height > 0 ? Math.min(1, visibleHeight / rect.height) : 0;

      // Parallax: shift the image within its frame based on how far its
      // centre sits from the viewport centre, so it pans slowly as the
      // page scrolls past. Scaled up 1.15x first so panning never reveals
      // an edge.
      const elementCenter = rect.top + rect.height / 2;
      const offsetRatio = Math.max(-0.5, Math.min(0.5, (vh / 2 - elementCenter) / vh));
      const maxShift = rect.height * 0.08;
      const translateY = offsetRatio * 2 * maxShift;

      setStyle({
        filter: `grayscale(${Math.round((1 - progress) * 100)}%)`,
        transform: `scale(1.15) translateY(${translateY.toFixed(1)}px)`,
        transition: "none",
      });
    }

    function onScroll() {
      if (frame == null) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, []);

  return <Image ref={ref} {...props} style={{ ...props.style, ...style }} />;
}
