"use client";

import { useState } from "react";
import {
  WORLD_MAP_WIDTH,
  WORLD_MAP_HEIGHT,
  WORLD_MAP_PATH,
  worldMapMarkers,
} from "@/lib/world-map-data";

export function WorldMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative w-full" style={{ aspectRatio: `${WORLD_MAP_WIDTH} / ${WORLD_MAP_HEIGHT}` }}>
      <svg
        viewBox={`0 0 ${WORLD_MAP_WIDTH} ${WORLD_MAP_HEIGHT}`}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="World map showing the countries Stage Two has worked in"
      >
        <path d={WORLD_MAP_PATH} className="fill-white/10" />

        {worldMapMarkers.map((m, i) => (
          <g
            key={m.name}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive((cur) => (cur === i ? null : cur))}
            onClick={() => setActive((cur) => (cur === i ? null : i))}
            className="cursor-pointer"
          >
            {m.home && (
              <circle
                cx={m.x}
                cy={m.y}
                r={9}
                className="fill-none stroke-offwhite/40 motion-safe:animate-ping"
                style={{ transformOrigin: `${m.x}px ${m.y}px` }}
              />
            )}
            <circle
              cx={m.x}
              cy={m.y}
              r={m.home ? 6 : 5}
              className={
                m.home
                  ? "fill-offwhite stroke-black/40"
                  : "fill-accent stroke-black/40 transition-transform duration-200"
              }
              strokeWidth={1.5}
              style={{
                transform: active === i ? "scale(1.4)" : "scale(1)",
                transformOrigin: `${m.x}px ${m.y}px`,
              }}
            />
          </g>
        ))}
      </svg>

      {worldMapMarkers.map((m, i) => {
        const leftPct = (m.x / WORLD_MAP_WIDTH) * 100;
        const topPct = (m.y / WORLD_MAP_HEIGHT) * 100;
        const nearRight = leftPct > 78;
        const nearLeft = leftPct < 12;
        const nearTop = topPct < 12;

        return (
          <div
            key={m.name}
            className={`absolute pointer-events-none transition-opacity duration-150 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transform: `translate(${nearRight ? "-100%" : nearLeft ? "0%" : "-50%"}, ${
                nearTop ? "10px" : "-100%"
              }) translateY(${nearTop ? "0" : "-10px"})`,
            }}
          >
            <div className="whitespace-nowrap rounded-md border border-white/15 bg-black px-3 py-2 text-xs shadow-lg">
              <p className="text-offwhite font-medium">{m.name}</p>
              <p className="text-steel">{m.tag}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
