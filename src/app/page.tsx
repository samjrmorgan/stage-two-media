import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { WorkGridCard } from "@/components/WorkGridCard";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { workProjects } from "@/lib/work";
import { clientLogos } from "@/lib/clients";

export const metadata: Metadata = {
  title: {
    absolute: "Stage Two | Video Production & Photography Company, Auckland NZ",
  },
  description:
    "Auckland video production and photography studio specialising in documentary, advocacy, corporate and wedding films - shot on location worldwide. Get a quote today.",
};

const heroTags = [
  "Humanitarian & NGO",
  "Documentary & Legacy",
  "Weddings",
  "Campaigns",
  "Brand Stories",
];

const pillars = [
  {
    title: "Humanitarian & NGO Stories",
    copy: "Stories of people, communities, impact and change - told for organisations doing real-world good.",
    example: "World Vision",
  },
  {
    title: "Documentary & Legacy Films",
    copy: "Personal, cinematic stories about real people and meaningful lives worth preserving.",
    example: "Zero to 100",
    href: "/services/documentary",
  },
  {
    title: "Weddings & Milestone Films",
    copy: "Emotionally crafted films for once-in-a-lifetime moments, shot off-the-cuff and full of feeling.",
    example: "Ben & Mirjam",
    href: "/services/wedding-videography",
  },
  {
    title: "Campaign & Public Life Stories",
    copy: "Human-centred content for leaders, movements and campaigns where trust and authenticity matter.",
  },
  {
    title: "Passion-led Brand Stories",
    copy: "Commercial work - but only when there's a real human story or purpose behind it.",
    example: "Nexus Logistics",
    href: "/services/corporate-video",
  },
  {
    title: "Advocacy",
    copy: "Considered, well-sourced content for industry bodies and associations who need to be heard clearly and credibly.",
    example: "Minerals Council of Australia",
  },
];

const splitList = [
  "Video and photography captured simultaneously - one shoot, two deliverables.",
  "Full creative direction from concept through to final grade and sound.",
  "Off-the-cuff, reactive storytelling built for real moments, not storyboards.",
  "A calm, practised approach to making people comfortable on camera.",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
        </div>

        <Container className="relative h-full flex flex-col justify-end pb-20 md:pb-28 pt-32">
          <Reveal>
            <Kicker>Video Production &amp; Photography - Auckland, NZ &amp; Worldwide</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display font-bold text-[13vw] leading-[0.88] tracking-tight md:text-[7vw] lg:text-[6.5rem] text-offwhite max-w-5xl">
              Immortalise
              <br />
              the moment.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-offwhite/80">
              Stage Two is a human-centred production company creating
              cinematic film and photography for people, businesses and
              communities who care deeply about what they do, who they do
              it for, and why it matters.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-offwhite text-black px-7 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer"
              >
                View our work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-offwhite/40 text-offwhite px-7 py-3.5 text-sm font-medium transition-colors hover:border-offwhite cursor-pointer"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <Link
                  key={tag}
                  href="/work"
                  className="rounded-full border border-offwhite/25 px-4 py-1.5 text-xs uppercase tracking-[0.08em] text-offwhite/70 hover:border-offwhite/50 hover:text-offwhite transition-colors cursor-pointer"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy statement */}
      <section className="bg-offwhite text-black py-24 md:py-32">
        <Container>
          <Reveal>
            <Kicker>What We Believe</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.2] max-w-4xl">
              We&apos;re passionate about connecting with people and telling
              real, human stories. We know from experience that people
              connect with faces, emotion, and a journey they can see
              themselves in.{" "}
              <span className="text-steel">
                When storytelling is done well, it leads to better outcomes.
              </span>
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <p className="text-sm max-w-sm">
                We produce content that makes people feel, when people feel, they take action.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:gap-3 transition-all cursor-pointer shrink-0"
              >
                Meet Stage Two
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured work */}
      <section className="bg-black py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <Kicker>Selected Work</Kicker>
                <h2 className="font-display text-4xl md:text-6xl text-offwhite max-w-2xl">
                  Stories we&apos;re proud
                  <br />
                  to have told.
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden md:inline-flex items-center gap-2 text-sm text-offwhite/70 hover:text-offwhite transition-colors cursor-pointer shrink-0"
              >
                View full portfolio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProjects
              .filter((project) => project.featured)
              .map((project, i) => (
                <Reveal key={project.slug} delay={i * 80}>
                  <WorkGridCard project={project} priority={i === 0} />
                </Reveal>
              ))}
          </div>

          <Reveal>
            <Link
              href="/work"
              className="md:hidden mt-10 inline-flex items-center gap-2 text-sm text-offwhite/70 hover:text-offwhite transition-colors cursor-pointer"
            >
              View full portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Five pillars */}
      <section className="bg-black pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="mb-14">
              <Kicker>What We Produce</Kicker>
              <h2 className="font-display text-4xl md:text-6xl text-offwhite max-w-2xl">
                The kinds of stories
                <br />
                we&apos;re built for.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p, i) => {
              const cardContent = (
                <>
                  <span className="font-display text-sm text-steel">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl text-offwhite mt-4 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-offwhite/70 max-w-sm">{p.copy}</p>
                  {p.example && (
                    <p className="mt-4 text-xs uppercase tracking-[0.1em] text-steel">
                      Ex. {p.example}
                    </p>
                  )}
                </>
              );
              return (
                <Reveal key={p.title} delay={i * 70}>
                  {p.href ? (
                    <Link
                      href={p.href}
                      className="block rounded-md border border-white/10 bg-black p-8 md:p-10 transition-colors duration-300 hover:bg-navy cursor-pointer"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="rounded-md border border-white/10 bg-black p-8 md:p-10 transition-colors duration-300 hover:bg-navy">
                      {cardContent}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Stage Two */}
      <section className="bg-offwhite text-black py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <Kicker>Why Stage Two</Kicker>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">
                A full-scale content
                <br />
                house, run by two.
              </h2>
              <p className="mt-5 text-steel leading-relaxed max-w-md">
                Sam and Ellie shoot, direct, edit, colour grade and deliver
                video and photography together, moving fast and getting close
                enough to a story to make it real. This means your experience
                is intimate - you work directly with us throughout the entire
                project.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {splitList.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-steel">
                    <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:gap-3 transition-all cursor-pointer"
              >
                Learn more about Sam and Ellie here
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src="/images/about/sam-and-ellie-poolside-italy.jpg"
                  alt="Sam Morgan and Ellie Harwood sitting poolside beneath a striped umbrella, framed by cypress trees in Italy"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Trusted collaborators */}
      <section className="bg-black py-20 md:py-24 border-y border-white/10">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-steel text-center mb-12">
              Clients we&apos;ve worked with
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="relative h-8 md:h-9 opacity-60 hover:opacity-100 transition-opacity"
                  style={{ width: `${(client.aspect * 32).toFixed(0)}px` }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative bg-warmnavy py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/work/documentary-bangladesh/bangladesh-cta-cover.jpg"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-warmnavy via-warmnavy/70 to-warmnavy/40" />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-7xl text-offwhite max-w-4xl mx-auto">
              Have a story worth immortalising?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-offwhite/80 max-w-xl mx-auto">
              Tell us about your project, your people, and what you want your
              audience to feel. We&apos;ll take it from there.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-offwhite text-black px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer"
            >
              Start a project
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
