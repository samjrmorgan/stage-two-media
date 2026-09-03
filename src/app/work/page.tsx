import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { WorkGrid } from "@/components/WorkGrid";
import { workProjects, filterCategories } from "@/lib/work";

export const metadata: Metadata = {
  title: "Video Production & Photography Portfolio",
  description:
    "Video production and photography portfolio from Stage Two, Auckland - documentary, advocacy, corporate and wedding films shot across five continents.",
};

export default function WorkPage() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Kicker>Our Work</Kicker>
          <h1 className="font-display text-5xl md:text-7xl text-offwhite max-w-3xl">
            Stories we&apos;re proud of.
          </h1>
          <p className="mt-6 max-w-xl text-offwhite/70">
            A selection of the human stories we&apos;ve been trusted to tell -
            across humanitarian, documentary, weddings and brand work.
          </p>
        </Reveal>

        <div className="mt-16">
          <WorkGrid projects={workProjects} categories={filterCategories()} />
        </div>
      </Container>
    </div>
  );
}
