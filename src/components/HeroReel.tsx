"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowRight, Pause, Play } from "lucide-react";
import { heroReel } from "@/lib/data";

// Thời lượng mỗi cảnh (ms). Khai báo cả ở CSS qua biến --reel-ms để thanh tiến trình khớp.
const SCENE_MS = 3000;

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function HeroReel() {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(true);
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const total = heroReel.length;
  // Tự chạy khi: không bị người dùng tạm dừng, không rê chuột/focus vào, đang nằm trong màn hình,
  // và người dùng không bật "giảm chuyển động".
  const playing = !reduced && !userPaused && !hovering && visible;

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div
      ref={frameRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Teaser hình ảnh các chương trình đã dẫn"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={(e) => setHovering(e.target.matches(":focus-visible"))}
      onBlur={() => setHovering(false)}
      className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[1.75rem] border border-border bg-foreground shadow-2xl shadow-foreground/10 lg:max-h-[calc(100svh-11rem)] lg:min-h-[28rem] lg:max-w-none"
      style={{ ["--reel-ms" as string]: `${SCENE_MS}ms` }}
    >
      {heroReel.map((scene, i) => {
        const active = i === index;
        return (
          <div
            key={scene.src}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 ease-linear ${
                active
                  ? "scale-[1.07] transition-transform duration-[3600ms]"
                  : "scale-100 transition-transform duration-0 delay-700"
              }`}
            >
              <Image
                src={scene.src}
                alt={scene.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 60vw, 90vw"
                className="object-cover"
                style={{ objectPosition: scene.position ?? "50% 50%" }}
              />
            </div>
          </div>
        );
      })}

      {/* Lớp tối để chữ luôn đọc được */}
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/10 to-black/35"
        aria-hidden="true"
      />

      {/* Thanh tiến trình kiểu story */}
      <div className="absolute inset-x-4 top-4 z-30 flex gap-1.5">
        {heroReel.map((scene, i) => (
          <button
            key={scene.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Xem cảnh ${i + 1}: ${scene.title}`}
            aria-current={i === index}
            className="group relative h-4 flex-1 cursor-pointer"
          >
            <span className="absolute inset-x-0 top-1/2 block h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/30 group-hover:bg-white/45">
              <span
                className={`absolute inset-0 block origin-left rounded-full bg-white ${
                  i < index ? "scale-x-100" : i === index ? (reduced ? "scale-x-100" : "reel-bar") : "scale-x-0"
                }`}
                style={i === index && !reduced ? { animationPlayState: playing ? "running" : "paused" } : undefined}
                onAnimationEnd={i === index && !reduced ? next : undefined}
              />
            </span>
          </button>
        ))}
      </div>

      {/* Nhãn + nút tạm dừng */}
      <div className="absolute inset-x-4 top-9 z-30 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-red-500 opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-red-500" />
          </span>
          Showreel
        </span>
        {!reduced ? (
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? "Phát teaser" : "Tạm dừng teaser"}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/60"
          >
            {userPaused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
          </button>
        ) : null}
      </div>

      {/* Chữ chạy theo từng cảnh */}
      <div className="absolute inset-x-0 bottom-0 z-30 p-6 sm:p-8" aria-live={playing ? "off" : "polite"}>
        <div key={index} className="reel-caption flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {heroReel[index].eyebrow}
          </span>
          <p className="font-display text-3xl leading-tight text-white text-balance sm:text-4xl">
            {heroReel[index].title}
          </p>
          {heroReel[index].cta ? (
            <a
              href={heroReel[index].cta.href}
              className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-accent hover:text-white"
            >
              {heroReel[index].cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
