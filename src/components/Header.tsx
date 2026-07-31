"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Container from "./Container";
import { navLinks, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-background/0 border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="#" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight text-foreground">
            Huy Thịnh
          </span>
          <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.2em] text-accent font-semibold">
            MC · Host · Voice
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-soft hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground-soft hover:text-accent transition-colors duration-200"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <a
            href="#lien-he"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:bg-accent transition-colors duration-200"
          >
            Liên hệ hợp tác
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center size-11 rounded-full text-foreground cursor-pointer"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open ? (
        <div className="lg:hidden border-t border-border bg-background">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-background-alt transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#lien-he"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
            >
              Liên hệ hợp tác
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
