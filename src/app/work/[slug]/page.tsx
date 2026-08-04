import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { WorkGridCard } from "@/components/WorkGridCard";
import { VimeoEmbed, extractVimeoId } from "@/components/VimeoEmbed";
import { CaseStudyFloatNav } from "@/components/CaseStudyFloatNav";
import { getWorkProject, workProjects } from "@/lib/work";

const BASE_URL = "https://stagetwo.media";

export function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.cover.src }],
    },
  };
}

export default async function WorkCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  const related = workProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const currentIndex = workProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = workProjects[(currentIndex - 1 + workProjects.length) % workProjects.length];
  const nextProject = workProjects[(currentIndex + 1) % workProjects.length];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${BASE_URL}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${BASE_URL}/work/${project.slug}`,
      },
    ],
  };

  const videoJsonLd = project.vimeoId
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: project.title,
        description: project.summary,
        thumbnailUrl: [`${BASE_URL}${project.cover.src}`],
        uploadDate: `${project.year}-01-01`,
        ...(project.videoDuration ? { duration: project.videoDuration } : {}),
        embedUrl: `https://player.vimeo.com/video/${extractVimeoId(project.vimeoId)}`,
        publisher: {
          "@type": "Organization",
          name: "Stage Two Media",
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/brand/logo/primary-offwhite.svg`,
          },
        },
      }
    : null;

  return (
    <div className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {videoJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      )}
      <CaseStudyFloatNav prevHref={`/work/${prevProject.slug}`} nextHref={`/work/${nextProject.slug}`} />

      {/* Hero */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
        <Container className="relative h-full flex flex-col justify-end pb-16 pt-32">
          <Reveal>
            <Kicker>{project.category}</Kicker>
            <h1 className="font-display text-4xl md:text-7xl text-offwhite max-w-3xl">
              {project.title}
            </h1>
            {project.vimeoId && (
              <a
                href="#film"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-offwhite/40 bg-black/30 backdrop-blur-sm px-5 py-2.5 text-sm text-offwhite hover:bg-offwhite hover:text-black hover:border-offwhite transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch the film
              </a>
            )}
          </Reveal>
        </Container>
      </section>

      {/* Film */}
      {project.vimeoId && (
        <section id="film" className="pt-16 md:pt-24 scroll-mt-24">
          <Container>
            <Reveal>
              <VimeoEmbed idOrUrl={project.vimeoId} title={`${project.title} - Stage Two`} />
            </Reveal>
          </Container>
        </section>
      )}

      {/* Meta + summary */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <Reveal>
                <dl className="flex flex-col gap-6 text-sm">
                  <div>
                    <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                      Client
                    </dt>
                    <dd className="text-offwhite">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                      Year
                    </dt>
                    <dd className="text-offwhite">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                      Location
                    </dt>
                    <dd className="text-offwhite">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                      Services
                    </dt>
                    <dd className="flex flex-wrap gap-2 mt-1">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-offwhite/80"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={100}>
                <p className="font-display text-2xl md:text-4xl leading-[1.2] text-offwhite max-w-2xl">
                  {project.summary}
                </p>
              </Reveal>
              <div className="mt-10 flex flex-col gap-5 max-w-2xl">
                {project.description.map((para, i) => (
                  <Reveal key={i} delay={150 + i * 60}>
                    <p className="text-offwhite/70 leading-relaxed">{para}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {project.gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 4) * 60}
                className={i % 5 === 0 ? "sm:col-span-2" : ""}
              >
                <div className="relative aspect-[21/9] overflow-hidden rounded-md bg-warmnavy">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Prev / Next */}
      <section id="case-study-prev-next" className="border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center gap-4 py-8 sm:pr-8 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="shrink-0 transition-transform group-hover:-translate-x-1"
              >
                <path d="M17 7L7 17M7 17H15M7 17V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-steel mb-1">Previous</p>
                <p className="font-display text-lg text-offwhite group-hover:text-offwhite/80 transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center justify-between gap-4 py-8 sm:pl-8 cursor-pointer sm:text-right"
            >
              <div className="sm:order-1 sm:ml-auto">
                <p className="text-xs uppercase tracking-[0.15em] text-steel mb-1">Next</p>
                <p className="font-display text-lg text-offwhite group-hover:text-offwhite/80 transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="shrink-0 sm:order-2 transition-transform group-hover:translate-x-1"
              >
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="border-t border-white/10 py-24 md:py-32">
          <Container>
            <Reveal>
              <Kicker>More Work</Kicker>
              <h2 className="font-display text-3xl md:text-5xl text-offwhite mb-12">
                Keep exploring.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <WorkGridCard project={p} />
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link
                href="/work"
                className="mt-10 inline-flex items-center gap-2 text-sm text-offwhite/70 hover:text-offwhite transition-colors cursor-pointer"
              >
                View all work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}
    </div>
  );
}
