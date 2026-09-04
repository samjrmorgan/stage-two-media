import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Get a Video Production Quote",
  description:
    "Start a video production or photography project with Stage Two, Auckland - get a quote for documentary, advocacy, corporate or wedding content.",
};

const process = [
  {
    number: "01",
    title: "Enquiry",
    copy: "Tell us about your project, purpose, timeline and budget",
  },
  {
    number: "02",
    title: "Discovery call",
    copy: "We talk through what you want your audience to feel, and what it'll take to get there",
  },
  {
    number: "03",
    title: "Proposal & booking",
    copy: "A clear quote and scope, a 50% deposit, and a date locked in",
  },
  {
    number: "04",
    title: "Production & delivery",
    copy: "We shoot, edit and deliver - with feedback rounds built in along the way",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <Kicker>Contact</Kicker>
              <h1 className="font-display text-5xl md:text-6xl text-offwhite">
                Let&apos;s make something.
              </h1>
              <p className="mt-6 text-offwhite/70 max-w-sm">
                Tell us what you&apos;re trying to make and what you&apos;re
                working with - we typically reply within one business day.
              </p>

              <dl className="mt-12 flex flex-col gap-6">
                <div>
                  <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:enquiries@stagetwo.media"
                      className="text-offwhite hover:text-accent transition-colors cursor-pointer"
                    >
                      enquiries@stagetwo.media
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                    Phone / WhatsApp
                  </dt>
                  <dd>
                    <a
                      href="tel:+64212262822"
                      className="text-offwhite hover:text-accent transition-colors cursor-pointer"
                    >
                      +64 21 226 2822
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                    Based in
                  </dt>
                  <dd className="text-offwhite">Auckland, New Zealand - filming worldwide</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={150} className="mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                How a project starts
              </p>
              <div className="mt-4 border-t border-white/10">
                {process.map((s, i) => (
                  <div
                    key={s.number}
                    className={`flex gap-6 py-6 ${
                      i === process.length - 1 ? "" : "border-b border-white/10"
                    }`}
                  >
                    <span className="font-display text-lg text-steel shrink-0 w-8">
                      {s.number}
                    </span>
                    <div>
                      <h3 className="text-offwhite font-semibold text-lg mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-steel text-sm leading-relaxed">{s.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>

      <section className="mt-24 md:mt-32 bg-navy py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.15em] text-steel">
                What we believe
              </span>
            </div>
            <p className="font-display text-2xl md:text-4xl max-w-3xl leading-snug">
              <span className="text-offwhite font-semibold">
                We produce content that makes people feel,
              </span>{" "}
              <span className="text-offwhite/50">
                when people feel, they take action.
              </span>
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
