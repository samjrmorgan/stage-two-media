"use client";

import { useMemo, useState } from "react";
import { FilterCategory, WorkProject } from "@/lib/work";
import { WorkGridCard } from "./WorkGridCard";
import { Reveal } from "./Reveal";

export function WorkGrid({
  projects,
  categories,
}: {
  projects: WorkProject[];
  categories: FilterCategory[];
}) {
  const [active, setActive] = useState<FilterCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.filter === active)),
    [projects, active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer ${
              active === c
                ? "bg-offwhite text-black border-offwhite"
                : "border-white/15 text-offwhite/70 hover:border-offwhite/40"
            }`}
          >
            {c === "All" ? "All work" : c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 6) * 60}>
            <WorkGridCard project={project} priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
