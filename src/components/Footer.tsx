import { Mail, Phone, MapPin } from "lucide-react";
import Container from "./Container";
import { FacebookIcon, TikTokIcon } from "./icons/SocialIcons";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <Container className="py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <span className="font-display text-2xl">Huy Thịnh</span>
          <p className="text-sm text-background/70 leading-relaxed max-w-sm">
            {site.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center size-10 rounded-full border border-background/20 hover:border-accent-soft hover:text-accent-soft transition-colors duration-200"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center justify-center size-10 rounded-full border border-background/20 hover:border-accent-soft hover:text-accent-soft transition-colors duration-200"
            >
              <TikTokIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
            Điều hướng
          </span>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-background/80 hover:text-accent-soft transition-colors duration-200 w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
            Liên hệ
          </span>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm text-background/80 hover:text-accent-soft transition-colors duration-200"
          >
            <Phone className="size-4 shrink-0" /> {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-sm text-background/80 hover:text-accent-soft transition-colors duration-200"
          >
            <Mail className="size-4 shrink-0" /> {site.email}
          </a>
          <span className="flex items-center gap-2 text-sm text-background/80">
            <MapPin className="size-4 shrink-0" /> {site.region}
          </span>
        </div>
      </Container>

      <div className="border-t border-background/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/50">
          <span>© {year} Huy Thịnh. All rights reserved.</span>
          <span>MC · Host Livestream · Voice Talent</span>
        </Container>
      </div>
    </footer>
  );
}
