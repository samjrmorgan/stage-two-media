import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { WorldMap } from "@/components/WorldMap";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stage Two is a boutique production house founded to make high-end video and photography accessible to any business, on any budget.",
};

const stats = [
  { value: 1200, suffix: "+", label: "Video projects exported" },
  { value: 500, suffix: "M+", label: "Video views generated, over 15 years" },
  { value: 405000, suffix: "km+", label: "Distance travelled to produce content" },
];

const values = [
  {
    title: "Quality",
    copy: "Every deliverable is graded, mixed and finished to the same standard, whatever the budget behind it.",
  },
  {
    title: "Minimal",
    copy: "A small footprint on set and a restrained edit - the story leads, not the production.",
  },
  {
    title: "Passionate",
    copy: "Zero to 100 exists because we'll make things nobody asked for, just to prove they're worth making.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Kicker>About</Kicker>
          <h1 className="font-display text-5xl md:text-7xl text-offwhite max-w-3xl">
            Stage: the set.
            <br />
            Two: what we shoot.
          </h1>
          <p className="mt-6 max-w-2xl text-offwhite/70 text-lg leading-relaxed">
            The name is literal. &ldquo;Stage&rdquo; for the sound stage, &ldquo;Two&rdquo;
            for the two disciplines we operate across - video production and
            photography. Everything else is built around one idea: high-end
            production shouldn&apos;t only be available to businesses with
            high-end budgets.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/work/documentary-zero-to-100/documentary-zero-to-100-05.jpg"
                alt="A production crew setting up a shot trackside"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-2xl md:text-3xl leading-[1.3] text-offwhite mb-6">
              Founder and director Sam Morgan has spent a decade in video
              production and photography, teaching himself every pillar of
              the craft along the way. Today the studio is run by two - Sam
              and Ellie Harwood.
            </p>
            <p className="text-offwhite/70 leading-relaxed mb-4">
              That means Stage Two can run lean from pre-production through
              final delivery - a huge cost saving for clients who&apos;d
              otherwise need to hire an entire crew. For larger productions,
              we bring on trusted freelance talent and scale up without
              losing the studio&apos;s standards.
            </p>
            <p className="text-offwhite/70 leading-relaxed">
              The goal is simple: make world-class content production
              available to businesses of any size, then keep proving it with
              our own work - like{" "}
              <Link href="/work/zero-to-100" className="text-offwhite underline underline-offset-4 hover:text-accent transition-colors">
                Zero to 100
              </Link>
              , a documentary we made because we wanted to, not
              because a client asked.
            </p>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <Kicker>What We Value</Kicker>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-md overflow-hidden mt-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-black p-8">
                <h3 className="font-display text-2xl text-offwhite mb-3">{v.title}</h3>
                <p className="text-sm text-offwhite/70">{v.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* World map */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <Kicker>Where We&apos;ve Worked</Kicker>
            <h2 className="font-display text-3xl md:text-5xl text-offwhite max-w-xl mb-4">
              Auckland based. Not Auckland bound.
            </h2>
            <p className="text-offwhite/70 max-w-xl mb-10">
              Hover or tap a pin to see the project behind it.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <WorldMap />
          </Reveal>
        </div>

        {/* Stat bar */}
        <div className="mt-24 md:mt-32 py-16 border-y border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center sm:text-left">
                <p className="font-display text-4xl md:text-6xl text-offwhite">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-steel max-w-[16rem] mx-auto sm:mx-0">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Quote / signature */}
        <div className="mt-24 md:mt-32 border-t border-white/10 pt-24 md:pt-32">
          <Reveal>
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.25] text-offwhite max-w-4xl">
              &ldquo;We want clients to feel pumped, excited, and euphoric about
              what we made together - then leave wanting more.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/brand/signature/sam-morgan-white.png"
                alt="Sam Morgan signature"
                width={140}
                height={60}
                className="h-10 w-auto opacity-90"
              />
              <div>
                <p className="text-offwhite">Sam Morgan</p>
                <p className="text-steel text-sm">Director, Stage Two</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="rounded-lg bg-offwhite text-black p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <h2 className="font-display text-3xl md:text-5xl max-w-xl">
                Want to work with us?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-black text-offwhite px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer shrink-0"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
