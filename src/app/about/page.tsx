import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { WorldMap } from "@/components/WorldMap";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { ScrollSaturateImage } from "@/components/ScrollSaturateImage";
import {
  googleReviews,
  googleReviewsAverage,
  googleReviewsCount,
  googleReviewsUrl,
} from "@/lib/reviews";

export const metadata: Metadata = {
  title: "About Our Auckland Video Production Studio",
  description:
    "Stage Two is an Auckland video production and photography studio making high-end content production accessible to any business, on any budget.",
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

const team = [
  {
    initials: "SM",
    name: "Sam Morgan",
    title: "Director & Creative Lead",
    bio: "Founder Sam Morgan has spent a decade developing expertise across every aspect of the craft. Sam leads creative direction, shooting, editing, colour and delivery on every Stage Two project - working off-the-cuff, reactive to what's actually happening in front of the camera, rather than a rigid storyboard.",
    image: "/images/team/sam-morgan-01.jpg",
    imageAlt: "Sam Morgan laughing while filming in the field, camera in hand",
  },
  {
    initials: "EH",
    name: "Ellie Harwood",
    title: "Executive Producer & Client Experience",
    bio: "Ellie has over 10 years of media and broadcasting experience and a psychology degree. She's been both on-camera and off-camera talent, hosts and produces multiple podcasts and has a passion for connecting with people and bringing their stories to life. Ellie leads client relationships, coordination and the business behind the work, bringing a psychology-informed approach to making people comfortable enough on camera to be genuinely themselves.",
    image: "/images/team/ellie-harwood-01.jpg",
    imageAlt: "Ellie Harwood holding a camera",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Kicker>About</Kicker>
          <h1 className="font-display text-5xl md:text-7xl text-offwhite max-w-3xl">
            Meet Stage Two
          </h1>
          <p className="mt-6 max-w-2xl text-offwhite/70 text-lg leading-relaxed">
            The studio operates as a two-person team - Sam and Ellie -
            allowing lean operations from pre-production through delivery.
            For larger projects, we scale with trusted freelance talent while
            maintaining quality standards.
          </p>
          <p className="mt-4 max-w-2xl text-offwhite/70 text-lg leading-relaxed">
            That means Stage Two can run lean from pre-production through
            final delivery - a huge cost saving for clients who&apos;d
            otherwise need to hire an entire crew. For larger productions,
            we bring on trusted freelance talent and scale up without
            losing the studio&apos;s standards.
          </p>
          <p className="mt-4 max-w-2xl text-offwhite/70 text-lg leading-relaxed">
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

        {/* Meet the team */}
        <div className="mt-20">
          <div className="mb-14">
            <Reveal>
              <Kicker>The Team</Kicker>
              <h2 className="font-display text-4xl md:text-6xl text-offwhite">
                Meet Stage Two.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="group rounded-md border border-white/10 bg-black overflow-hidden">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-black via-navy to-warmnavy overflow-hidden">
                    {p.image ? (
                      <ScrollSaturateImage
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover grayscale scale-100 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center font-display text-8xl text-white/10">
                        {p.initials}
                      </span>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-offwhite">{p.name}</h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-steel mt-1 mb-4">
                      {p.title}
                    </p>
                    <p className="text-sm text-offwhite/70 leading-relaxed">{p.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/about/sam-airport-departure.jpg"
              alt="Sam Morgan smiling at an airport, backpack loaded, departing on assignment"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-2xl md:text-3xl leading-[1.3] text-offwhite">
              Founder and director Sam Morgan started out teaching himself
              every pillar of video production and photography. Today the
              studio is run by two - Sam and Ellie - with over 15 years of
              combined experience between them.
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

        {/* Google reviews */}
        <div className="mt-24 md:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-14">
            <Reveal>
              <Kicker>Reviews</Kicker>
              <h2 className="font-display text-4xl md:text-6xl text-offwhite">
                What clients say.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-offwhite/70 leading-relaxed md:text-lg">
                {googleReviewsAverage.toFixed(1)} average across{" "}
                {googleReviewsCount} Google reviews.{" "}
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-offwhite underline underline-offset-4 hover:text-accent transition-colors cursor-pointer"
                >
                  Read them on Google.
                </a>
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 70}
                className="rounded-md border border-white/10 bg-black p-8 flex flex-col"
              >
                <div className="flex gap-1 text-accent mb-4" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-offwhite/80 leading-relaxed flex-1">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-offwhite text-sm font-medium">{r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Quote / signature */}
        <div className="mt-24 md:mt-32">
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
