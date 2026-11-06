"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Headphones, Images, Play } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Lightbox from "../Lightbox";
import MediaModal from "../MediaModal";
import { portfolio, portfolioCategories, type PortfolioCategory, type PortfolioItem } from "@/lib/data";

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null);

  // Tab "Tất cả" chỉ hiện các dự án tiêu biểu (thứ tự trong data.ts: mới nhất lên trên);
  // voice talent và livestream bán hàng nằm trong thư mục riêng.
  const filtered =
    active === "all"
      ? portfolio.filter((item) => !item.hideInAll)
      : portfolio.filter((item) => item.category === active);

  const openImages = openItem?.images ?? (openItem?.image ? [openItem.image] : []);
  const openMedia = openItem?.media ?? [];

  return (
    <section id="du-an" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Dự án tiêu biểu"
            title="Những chương trình đã đồng hành"
            description="Một số sự kiện, phiên livestream, dự án voice talent và chương trình đào tạo tiêu biểu. Bấm vào một dự án có ảnh để xem đầy đủ hình ảnh."
          />
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Lọc dự án theo lĩnh vực">
          <button
            type="button"
            role="tab"
            aria-selected={active === "all"}
            onClick={() => setActive("all")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer ${
              active === "all"
                ? "bg-foreground text-background"
                : "bg-card border border-border text-foreground-soft hover:border-accent hover:text-accent"
            }`}
          >
            Tất cả
          </button>
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                active === cat.id
                  ? "bg-foreground text-background"
                  : "bg-card border border-border text-foreground-soft hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const images = item.images ?? (item.image ? [item.image] : []);
            const media = item.media ?? [];
            const clickable = images.length > 0 || media.length > 0;
            const isVoice = item.category === "voice-talent";
            const CardTag = clickable ? "button" : "div";

            return (
              <CardTag
                key={item.title}
                type={clickable ? "button" : undefined}
                onClick={clickable ? () => setOpenItem(item) : undefined}
                className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 ${
                  clickable ? "cursor-pointer" : ""
                }`}
              >
                {item.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {images.length > 1 ? (
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                        <Images className="size-3.5" aria-hidden="true" />
                        {images.length} ảnh
                      </span>
                    ) : null}
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col justify-between gap-8 p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="section-label">
                      {portfolioCategories.find((c) => c.id === item.category)?.label}
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-foreground-soft transition-colors duration-200 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg leading-snug text-foreground">{item.title}</h3>
                    {item.meta ? (
                      <span className="text-sm text-foreground-soft">{item.meta}</span>
                    ) : null}
                    {item.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-foreground-soft/90">{item.description}</p>
                    ) : null}
                    {isVoice ? (
                      media.length > 0 ? (
                        <span className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                          {media[0].kind === "video" ? (
                            <Play className="size-3.5" aria-hidden="true" />
                          ) : (
                            <Headphones className="size-3.5" aria-hidden="true" />
                          )}
                          {media[0].kind === "video"
                            ? media.length > 1
                              ? `Xem ${media.length} video đã lồng tiếng`
                              : "Xem video đã lồng tiếng"
                            : "Nghe file voice"}
                        </span>
                      ) : (
                        <span className="mt-3 inline-flex items-center self-start rounded-full border border-border px-3 py-1.5 text-xs text-foreground-soft">
                          Đang cập nhật
                        </span>
                      )
                    ) : null}
                  </div>
                </div>
              </CardTag>
            );
          })}
        </div>
      </Container>

      {openItem && openImages.length > 0 ? (
        <Lightbox title={openItem.title} images={openImages} onClose={() => setOpenItem(null)} />
      ) : null}
      {openItem && openImages.length === 0 && openMedia.length > 0 ? (
        <MediaModal title={openItem.title} media={openMedia} onClose={() => setOpenItem(null)} />
      ) : null}
    </section>
  );
}
