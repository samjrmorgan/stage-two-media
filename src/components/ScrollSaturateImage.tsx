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
      setStyle({
        filter: `grayscale(${Math.round((1 - progress) * 100)}%)`,
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
