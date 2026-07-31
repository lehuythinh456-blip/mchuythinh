"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { portfolio, portfolioCategories, type PortfolioCategory } from "@/lib/data";

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");

  const filtered =
    active === "all" ? portfolio : portfolio.filter((item) => item.category === active);

  return (
    <section id="du-an" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Dự án tiêu biểu"
            title="Những chương trình đã đồng hành"
            description="Một số sự kiện, phiên livestream, dự án voice talent và chương trình đào tạo tiêu biểu."
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
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
