import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { getJournalPost, journalPosts } from "@/lib/journal";

const BASE_URL = "https://stagetwo.media";

// These posts are each framed as a single question in the title, answered directly in the
// body - genuinely visible Q&A content, so an FAQPage entry is added for just these slugs.
const FAQ_POST_SLUGS = [
  "how-much-does-a-wedding-film-cost-in-nz",
  "how-much-does-a-corporate-video-cost-in-nz",
];

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover.src }],
    },
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${BASE_URL}/journal` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/journal/${post.slug}`,
      },
    ],
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${BASE_URL}${post.cover.src}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "Stage Two Media" },
    publisher: {
      "@type": "Organization",
      name: "Stage Two Media",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/brand/logo/primary-offwhite.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/journal/${post.slug}`,
    },
  };

  const faqJsonLd = FAQ_POST_SLUGS.includes(post.slug)
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: post.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: post.body.join(" "),
            },
          },
        ],
      }
    : null;

  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Container className="max-w-3xl">
        <Reveal>
          <Kicker>{post.tag}</Kicker>
          <h1 className="font-display text-4xl md:text-6xl text-offwhite">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-md mt-10">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={150 + i * 60}>
              <p className="text-offwhite/80 text-lg leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/journal"
            className="mt-14 inline-flex items-center gap-2 text-sm text-offwhite/70 hover:text-offwhite transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="rotate-180">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Journal
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
