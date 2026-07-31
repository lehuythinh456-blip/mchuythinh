import Image from "next/image";
import { Award } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { achievements, bio } from "@/lib/data";

export default function About() {
  return (
    <section id="gioi-thieu" className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[1.75rem] border border-border lg:sticky lg:top-28 lg:max-w-none lg:justify-self-start">
          <Image
            src="/images/portrait/about.jpg"
            alt="Chân dung Huy Thịnh"
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 60vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="Giới thiệu" title={bio.heading} />

          <div className="flex flex-col gap-5">
            {bio.paragraphs.map((p) => (
              <p key={p} className="text-foreground-soft leading-relaxed text-pretty">
                {p}
              </p>
            ))}
          </div>

          <div className="hairline" />

          <div className="grid gap-5 sm:grid-cols-2">
            {achievements.map((item) => (
              <div key={item.title} className="flex gap-3 rounded-2xl bg-card border border-border p-5">
                <Award className="size-5 shrink-0 text-accent" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-foreground leading-snug">
                    {item.title}
                  </span>
                  <span className="text-sm text-foreground-soft leading-snug">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
