import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Stage Two - video production and photography, any budget.",
};

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
                      href="mailto:sam@stagetwo.media"
                      className="text-offwhite hover:text-accent transition-colors cursor-pointer"
                    >
                      sam@stagetwo.media
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-steel uppercase tracking-[0.15em] text-xs mb-1">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href="tel:+64212358273"
                      className="text-offwhite hover:text-accent transition-colors cursor-pointer"
                    >
                      +64 21 235 8273
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
          </div>

          <div className="md:col-span-7">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
