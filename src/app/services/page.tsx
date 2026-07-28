import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Documentary, advocacy, corporate, wedding and photography production from Stage Two - full pipeline, any budget.",
};

const offerings = [
  {
    number: "01",
    title: "Documentary & Advocacy",
    copy: "Field-produced long-form and campaign films for NGOs, charities and organisations who need the real story told with care. On-location filming, interviews, and full post-production.",
    image: "/images/work/documentary-sierra-leone/documentary-sierra-leone-08.jpg",
    alt: "Close portrait of a child's eyes, documentary photography from Sierra Leone",
  },
  {
    number: "02",
    title: "Corporate & Commercial",
    copy: "Brand films, internal comms, product photography and technical documentation. Shot to match your brand guidelines, delivered on a schedule that matches your launch.",
    image: "/images/work/nexus-logistics/nexus-01.jpg",
    alt: "Technical reference photography of transport equipment",
  },
  {
    number: "03",
    title: "Weddings & Events",
    copy: "Cinematic, unobtrusive coverage for weddings and events - a same-week highlight edit, with a full feature film to follow. Photography available alongside video.",
    image: "/images/work/weddings/weddings-06.jpg",
    alt: "Bride and groom embracing in golden light",
  },
  {
    number: "04",
    title: "Photography",
    copy: "Editorial, product and behind-the-scenes stills - shot solo or alongside a video crew, so you get a full stills library from every production day.",
    image: "/images/work/documentary-zero-to-100/documentary-zero-to-100-09.jpg",
    alt: "Portrait in a workshop, evening light",
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

        <div className="mt-20 flex flex-col gap-16 md:gap-24">
          {offerings.map((o, i) => (
            <Reveal key={o.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
                  <span className="font-display text-sm text-steel">{o.number}</span>
                  <h2 className="font-display text-3xl md:text-4xl text-offwhite mt-3 mb-4">
                    {o.title}
                  </h2>
                  <p className="text-offwhite/70 leading-relaxed max-w-md">{o.copy}</p>
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

      {/* CTA */}
      <section className="mt-24 md:mt-32">
        <Container>
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
        </Container>
      </section>
    </div>
  );
}
