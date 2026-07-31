import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import Container from "../Container";
import { site, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-alt">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-tint blur-3xl opacity-70"
        aria-hidden="true"
      />
      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-7">
          <span className="section-label">{site.role}</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground text-balance">
            Xin chào, tôi là{" "}
            <span className="text-accent">Huy Thịnh</span>
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-foreground-soft leading-relaxed text-pretty">
            {site.tagline}. Đồng hành cùng thương hiệu trên sóng truyền hình, sân khấu sự kiện,
            phiên livestream bán hàng và những dự án lồng tiếng chuyên nghiệp.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:bg-accent transition-colors duration-200"
            >
              Liên hệ hợp tác
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#du-an"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <PlayCircle className="size-4" aria-hidden="true" />
              Xem dự án tiêu biểu
            </a>
          </div>

          <dl className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 border-l-2 border-accent/30 pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl text-foreground">{stat.value}</dd>
                <dd className="text-xs text-foreground-soft leading-snug">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[1.75rem] border border-border lg:max-w-none">
          <Image
            src="/images/portrait/hero.jpg"
            alt="Huy Thịnh — MC / Host Livestream / Voice Talent"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 60vw, 90vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
