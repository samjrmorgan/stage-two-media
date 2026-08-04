import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { WorkGridCard } from "@/components/WorkGridCard";
import { getServicePage, servicePages } from "@/lib/service-pages";
import { getWorkProject } from "@/lib/work";

const BASE_URL = "https://stagetwo.media";

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: page.heroImage.src }],
    },
  };
}

export default async function ServiceSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const caseStudies = page.caseStudySlugs
    .map((s) => getWorkProject(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: page.h1,
        item: `${BASE_URL}/services/${page.slug}`,
      },
    ],
  };

  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Kicker>{page.kicker}</Kicker>
            <h1 className="font-display text-4xl md:text-6xl text-offwhite max-w-xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-xl text-offwhite/70 text-lg leading-relaxed">
              {page.intro}
            </p>
          </Reveal>
          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={page.heroImage.src}
              alt={page.heroImage.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-16 max-w-2xl flex flex-col gap-5">
          {page.body.map((para, i) => (
            <Reveal key={i} delay={150 + i * 60}>
              <p className="text-offwhite/70 leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap gap-2">
            {page.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-offwhite/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {caseStudies.length > 0 && (
          <div className="mt-24 md:mt-32 border-t border-white/10 pt-16 md:pt-24">
            <Reveal>
              <Kicker>Related Work</Kicker>
              <h2 className="font-display text-3xl md:text-5xl text-offwhite mb-12">
                See it in practice.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80}>
                  <WorkGridCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="rounded-lg bg-offwhite text-black p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <h2 className="font-display text-3xl md:text-5xl max-w-xl">
                Any budget. Any brief. Let&apos;s talk.
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-black text-offwhite px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer shrink-0"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
