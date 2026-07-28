import Link from "next/link";
import { Mark } from "./Logo";
import { Container } from "./Container";

const columns = [
  {
    heading: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/journal", label: "Journal" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: "mailto:sam@stagetwo.media", label: "sam@stagetwo.media" },
      { href: "tel:+64212262822", label: "+64 21 226 2822" },
    ],
  },
  {
    heading: "Follow",
    links: [
      { href: "https://instagram.com/stagetwo.media", label: "Instagram" },
      { href: "https://www.facebook.com/stagetwomedia", label: "Facebook" },
      { href: "https://vimeo.com/stagetwomediahouse", label: "Vimeo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-offwhite border-t border-white/10">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_repeat(3,1fr)] gap-12">
          <div>
            <Mark variant="offwhite" className="h-8 w-8 mb-6" />
            <p className="font-display text-2xl leading-tight max-w-xs">
              Got a project? <br />
              <a href="mailto:sam@stagetwo.media" className="text-accent hover:underline">
                Let&apos;s talk.
              </a>
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs uppercase tracking-[0.15em] text-steel mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-offwhite/80 hover:text-offwhite transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-steel">
          <p>© {new Date().getFullYear()} Stage Two Productions Ltd. All rights reserved.</p>
          <p>Video Production &amp; Photography - Auckland, NZ &amp; worldwide.</p>
        </div>
      </Container>
    </footer>
  );
}
