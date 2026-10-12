import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { WorkWithUsForm } from "@/components/WorkWithUsForm";

export const metadata: Metadata = {
  title: "Work With Us | Freelance Producers Worldwide",
  description:
    "Stage Two is building a network of producers around the world - people who can take a story from pre-production through shooting, editing and delivery, and who make stunning photographs.",
};

const lookingFor = [
  {
    number: "01",
    title: "The whole story",
    copy: "You can plan it, shoot it, edit it and deliver it - pre-production through to the final file, often solo and on location.",
  },
  {
    number: "02",
    title: "A photographer's eye",
    copy: "Your stills are as strong as your motion. We capture video and photography together on one shoot.",
  },
  {
    number: "03",
    title: "People first",
    copy: "You're calm and respectful with the people in front of your lens, especially in humanitarian and community settings.",
  },
  {
    number: "04",
    title: "Based anywhere",
    copy: "We're Auckland-based and film worldwide. Local producers who know their place beat a flight every time.",
  },
];

export default function WorkWithUsPage() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <Kicker>Work with us</Kicker>
              <h1 className="font-display text-5xl md:text-6xl text-offwhite">
                Producers wanted. Worldwide.
              </h1>
              <p className="mt-6 text-offwhite/70 max-w-md leading-relaxed">
                We&apos;re building a network of producers around the world
                who can tell a story from start to finish - and make
                stunning photographs while they&apos;re at it. Send us a
                little about who you are and what you&apos;ve made.
              </p>
              <p className="mt-4 text-offwhite/70 max-w-md leading-relaxed">
                We read every application. If there&apos;s a fit for an
                upcoming project, we&apos;ll be in touch.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                What we&apos;re looking for
              </p>
              <div className="mt-4 border-t border-white/10">
                {lookingFor.map((s, i) => (
                  <div
                    key={s.number}
                    className={`flex gap-6 py-6 ${
                      i === lookingFor.length - 1 ? "" : "border-b border-white/10"
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
              <WorkWithUsForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
