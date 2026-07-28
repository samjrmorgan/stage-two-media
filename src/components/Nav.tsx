"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-sm border-b border-white/10 transition-opacity duration-300 ${
          scrolled || open ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
      <Container className="relative flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Stage Two - Home">
          <Logo variant="offwhite" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-offwhite/80">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-offwhite cursor-pointer ${
                  active ? "text-offwhite" : ""
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-lg bg-offwhite text-black px-5 py-2 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer"
        >
          Start a project
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex h-11 w-11 items-center justify-center -mr-2 text-offwhite cursor-pointer"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 overflow-y-auto border-t border-white/10 bg-black">
          <Container className="flex flex-col py-6 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-2xl font-display text-offwhite border-b border-white/10 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-offwhite text-black px-5 py-3 text-sm font-medium"
            >
              Start a project
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
