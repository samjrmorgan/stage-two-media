import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { collaborations } from "@/lib/collaborations";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Documentary, advocacy, corporate, wedding and photography production from Stage Two - full pipeline, any budget.",
};

const offerings = [
  {
    number: "01",
    title: "Humanitarian & NGO Stories",
    copy: "Stories of people, communities, impact, advocacy and change. We work with organisations who need footage and photography from the field - expeditions, programme visits, advocacy campaigns and fundraising appeals - told through the people living them, not stock-style production.",
    tags: ["Field documentation", "Advocacy & appeal films", "Photography", "Social-first cutdowns"],
    idealFor: "NGOs, humanitarian organisations, advocacy groups, charities.",
    caseStudy: "World Vision",
    caseStudyHref: "/work/world-vision-ghana",
    image: "/images/work/documentary-ghana/documentary-ghana-03.jpg",
    alt: "Silhouette of a woman in a doorway, Ghana",
  },
  {
    number: "02",
    title: "Documentary & Legacy Films",
    copy: "Personal, cinematic stories about real people and meaningful lives - founder stories, family legacy films, community heroes, athletes and artists. We're built to pull the best, most honest moments out of people and shape them into something worth preserving.",
    tags: ["Founder & legacy films", "Long-form documentary", "Interview-led storytelling", "Full video + photo package"],
    idealFor: "founders, families, athletes, artists, community figures.",
    caseStudy: "Zero to 100",
    caseStudyHref: "/work/zero-to-100",
    image: "/images/work/documentary-zero-to-100/documentary-zero-to-100-11.jpg",
    alt: "Rider giving a thumbs up mid-race",
  },
  {
    number: "03",
    title: "Weddings & Milestone Films",
    copy: "Emotionally crafted films for once-in-a-lifetime human moments - weddings, engagements, cultural ceremonies and multi-day destination celebrations. We shoot off-the-cuff and reactive, so what you get back feels like the day actually felt.",
    tags: ["Wedding films", "Destination weddings", "Engagement & milestone films", "Wedding photography"],
    idealFor: "couples who want a cinematic, emotionally-led film over a formulaic package.",
    caseStudy: "Ben & Mirjam",
    caseStudyHref: "/work/ben-and-mirjam",
    image: "/images/work/weddings/weddings-06.jpg",
    alt: "Bride and groom embracing in golden light",
  },
  {
    number: "04",
    title: "Campaign & Public Life Stories",
    copy: "Human-centred content for leaders, movements and campaigns where trust matters. We take these on case-by-case, where the cause or client aligns with the kind of work we want our name attached to.",
    tags: ["Campaign films", "Public issue content", "Community & leadership profiles"],
    idealFor: "community leaders, purpose-led public figures and campaigns.",
    caseStudy: "Topham Guerin",
    caseStudyHref: "/work/topham-guerin-dominican-republic",
    image: "/images/work/topham-guerin-dr/topham-guerin-dr-01.jpg",
    alt: "Aerial view of a coastal city in the Dominican Republic",
  },
  {
    number: "05",
    title: "Passion-led Brand Stories",
    copy: "Commercial work for brands who want more than a product reel - brand films, technical documentation and full asset libraries built around the people and operations behind the business, not just the pack shot.",
    tags: ["Brand films", "Technical documentation", "Asset libraries", "Drone & multi-camera coverage"],
    idealFor: "brands and operators who want their story told with craft, not just coverage.",
    caseStudy: "Nexus Logistics",
    caseStudyHref: "/work/nexus-logistics",
    image: "/images/work/nexus-logistics/nexus-logistics-02.jpg",
    alt: "A reach-stacker branded with the Nexus Logistics logo lifting a shipping container",
  },
  {
    number: "06",
    title: "Advocacy",
    copy: "Considered, well-sourced content for industry bodies and associations who need to be heard clearly and credibly - explainer films, multi-location shoots and campaign content built on real operators, not stock footage.",
    tags: ["Industry advocacy films", "Multi-location production", "Explainer content"],
    idealFor: "industry bodies, associations and advocacy groups who need credibility as much as polish.",
    caseStudy: "Minerals Council of Australia",
    caseStudyHref: "/work/mca-wallaroos",
    image: "/images/work/mca-wallaroos/mca-wallaroos-01.jpg",
    alt: "Three Wallaroos players on the pitch at GIO Stadium, Canberra",
  },
];

const process = [
  { step: "Brief", copy: "A short call to understand the story, the budget, and the deadline." },
  { step: "Plan", copy: "Locations, shot list, and a crew sized to the brief - often just our two-person team." },
  { step: "Shoot", copy: "On location, on schedule, with an eye for the moments you didn't storyboard." },
  { step: "Deliver", copy: "Graded, mixed, and exported to spec - with a fast first-cut turnaround." },
];

export default function ServicesPage() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Kicker>Services</Kicker>
          <h1 className="font-display text-5xl md:text-7xl text-offwhite max-w-3xl">
            One crew. Full pipeline.
          </h1>
          <p className="mt-6 max-w-xl text-offwhite/70">
            Stage Two covers pre-production through delivery in-house. For
            larger budgets, we scale up with trusted freelance crew - for
            everything else, it&apos;s our two-person crew end to end, which
            keeps costs down without cutting the quality.
          </p>
        </Reveal>

        <div className="mt-20 border-t border-white/10">
          {offerings.map((o, i) => (
            <Reveal key={o.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-16 md:py-24 border-b border-white/10">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-md ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={o.image}
                    alt={o.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-display text-6xl md:text-7xl text-white/10 leading-none block mb-4">
                    {o.number}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-6 bg-steel" aria-hidden />
                    <span className="text-xs uppercase tracking-[0.15em] text-steel">
                      Content Pillar
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-offwhite mb-4">
                    {o.title}
                  </h2>
                  <p className="text-offwhite/70 leading-relaxed max-w-md">{o.copy}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {o.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-offwhite/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-steel max-w-md">
                    Ideal for: {o.idealFor}{" "}
                    <Link
                      href={o.caseStudyHref}
                      className="text-offwhite font-medium hover:text-accent transition-colors cursor-pointer"
                    >
                      Case study - {o.caseStudy}.
                    </Link>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Process */}
      <section className="mt-24 md:mt-32 border-t border-white/10 pt-24 md:pt-32">
        <Container>
          <Reveal>
            <Kicker>How It Works</Kicker>
            <h2 className="font-display text-4xl md:text-6xl text-offwhite max-w-2xl mb-14">
              From brief to delivery.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-md overflow-hidden">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="bg-black p-8">
                <span className="font-display text-sm text-steel">0{i + 1}</span>
                <h3 className="font-display text-xl text-offwhite mt-4 mb-3">{p.step}</h3>
                <p className="text-sm text-offwhite/70">{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnerships & Collaborations */}
      <section className="mt-24 md:mt-32 border-t border-white/10 pt-24 md:pt-32">
        <Container>
          <Reveal>
            <Kicker>Partnerships &amp; Collaborations</Kicker>
            <h2 className="font-display text-4xl md:text-6xl text-offwhite max-w-2xl mb-6">
              We also lend a hand.
            </h2>
            <p className="max-w-xl text-offwhite/70 leading-relaxed mb-14">
              Beyond our own client work, we collaborate on other people&apos;s
              projects and films - bringing a specific skill to someone
              else&apos;s production rather than running the whole thing.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborations.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-warmnavy">
                    <Image
                      src={c.image.src}
                      alt={c.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
                    <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-offwhite/90">
                      {c.role}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-xl text-offwhite">{c.title}</h3>
                      <p className="mt-1.5 text-xs text-offwhite/70 leading-relaxed line-clamp-2">
                        {c.copy}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-offwhite/90 group-hover:gap-2.5 transition-all">
                        {c.linkLabel}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="mt-24 md:mt-32">
        <Container>
          <div className="rounded-lg bg-offwhite text-black p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <h2 className="font-display text-3xl md:text-5xl max-w-xl">
              <Reveal className="inline-block" delay={0}>
                Any budget.
              </Reveal>{" "}
              <Reveal className="inline-block" delay={150}>
                Any brief.
              </Reveal>{" "}
              <Reveal className="inline-block" delay={300}>
                Let&apos;s talk.
              </Reveal>
            </h2>
            <Reveal delay={450} className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-black text-offwhite px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer"
              >
                Start a project
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
