import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { journalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the field, the edit suite, and everywhere between - from Stage Two.",
};

export default function JournalPage() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Kicker>Journal</Kicker>
          <h1 className="font-display text-5xl md:text-7xl text-offwhite max-w-3xl">
            Notes from the field.
          </h1>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {journalPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link href={`/journal/${post.slug}`} className="group block cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-steel">
                  {post.tag}
                </p>
                <h2 className="mt-2 font-display text-2xl text-offwhite group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-offwhite/70">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
