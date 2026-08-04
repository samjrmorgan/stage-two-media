import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { PrintsGrid } from "@/components/PrintsGrid";
import { prints } from "@/lib/prints";

const PRINTS_PAGE_ENABLED = false;

export const metadata: Metadata = {
  title: "Fine Art Photography Prints",
  description:
    "Fine art photography prints from Stage Two, Auckland - enquire about sizing, paper and framing for any piece in the collection.",
};

export default function PrintsPage() {
  if (!PRINTS_PAGE_ENABLED) {
    notFound();
  }

  return (
    <div className="bg-black pt-40 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Kicker>Prints</Kicker>
          <h1 className="font-display text-5xl md:text-7xl text-offwhite max-w-3xl">
            Shop the prints.
          </h1>
          <p className="mt-6 max-w-xl text-offwhite/70">
            A selection of our favourite frames, available as fine art
            prints. Get in touch and we&apos;ll sort sizing, paper and
            framing for you.
          </p>
        </Reveal>

        <PrintsGrid prints={prints} />
      </Container>
    </div>
  );
}
