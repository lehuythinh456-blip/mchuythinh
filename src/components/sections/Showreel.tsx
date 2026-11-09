"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import MediaModal from "../MediaModal";
import { showreel, type ShowreelItem } from "@/lib/data";

export default function Showreel() {
  const [active, setActive] = useState<ShowreelItem | null>(null);

  return (
    <section id="showreel" className="py-20 sm:py-28 bg-background-alt">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Showreel"
          title="Clip dẫn & khoảnh khắc trên sóng"
          description="Một số đoạn video thực tế từ các chương trình, sự kiện và phiên dẫn dắt đã thực hiện."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showreel.map((item) => (
            <button
              key={item.driveId}
              type="button"
              onClick={() => setActive(item)}
              className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-foreground text-left cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-accent/20 transition-opacity duration-300 group-hover:opacity-80" />
              <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full bg-background/15 text-background backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-foreground">
                <Play className="size-5 translate-x-0.5" aria-hidden="true" fill="currentColor" />
              </span>
              <span className="absolute inset-x-0 bottom-0 z-10 p-4">
                <span className="font-display text-base leading-snug text-background">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
      </Container>

      {active ? (
        <MediaModal
          title={active.title}
          subtitle="Showreel"
          media={[{ kind: "video", id: active.driveId }]}
          onClose={() => setActive(null)}
        />
      ) : null}
    </section>
  );
}
