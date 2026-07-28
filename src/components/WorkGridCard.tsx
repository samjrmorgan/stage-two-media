import Image from "next/image";
import Link from "next/link";
import { WorkProject } from "@/lib/work";

export function WorkGridCard({ project, priority = false }: { project: WorkProject; priority?: boolean }) {
  const cover = project.gridCover ?? project.cover;
  return (
    <Link href={`/work/${project.slug}`} className="group block cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-warmnavy">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />

        <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-offwhite/90">
          {project.filter}
        </span>

        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full border border-offwhite/50 text-offwhite backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${
              project.kind === "film" ? "bg-black/20" : "opacity-0"
            }`}
            aria-hidden={project.kind !== "film"}
          >
            {project.kind === "film" && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-xl text-offwhite">{project.title}</h3>
          <p className="mt-1.5 text-xs text-offwhite/70 leading-relaxed line-clamp-2">
            {project.cardCopy}
          </p>
        </div>
      </div>
    </Link>
  );
}
