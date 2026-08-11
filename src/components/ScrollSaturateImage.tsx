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
      const start = vh; // top of image at bottom of viewport -> fully grayscale
      const end = vh * 0.35; // top of image near upper third -> fully saturated
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
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
