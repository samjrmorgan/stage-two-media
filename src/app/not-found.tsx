import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="bg-black pt-40 pb-24 md:pb-32 min-h-[70vh] flex items-center">
      <Container>
        <Reveal>
          <Kicker>404</Kicker>
          <h1 className="font-display text-4xl md:text-6xl text-offwhite max-w-2xl">
            Doh! Sorry, this page must be lost in the interwebs somewhere...
          </h1>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-offwhite text-black px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer"
          >
            Return home
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
