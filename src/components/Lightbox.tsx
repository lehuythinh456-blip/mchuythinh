"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  title,
  images,
  initialIndex = 0,
  onClose,
}: {
  title: string;
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const [outgoing, setOutgoing] = useState<{ index: number; dir: 1 | -1 } | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (targetIndex: number, dir: 1 | -1) => {
      if (targetIndex === current) return;
      setOutgoing({ index: current, dir });
      setCurrent(targetIndex);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setOutgoing(null), 460);
    },
    [current]
  );

  const goPrev = useCallback(
    () => go((current - 1 + images.length) % images.length, -1),
    [current, images.length, go]
  );
  const goNext = useCallback(
    () => go((current + 1) % images.length, 1),
    [current, images.length, go]
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-white">{title}</span>
          <span className="text-xs text-white/50">
            {current + 1} / {images.length}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="inline-flex size-11 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex-1 px-4 pb-4 sm:px-6 sm:pb-6">
        <div
          className="relative mx-auto h-full max-w-5xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {outgoing ? (
            <div
              key={`out-${outgoing.index}`}
              className={`absolute inset-0 ${outgoing.dir === 1 ? "lightbox-exit-left" : "lightbox-exit-right"}`}
            >
              <Image
                src={images[outgoing.index]}
                alt=""
                fill
                sizes="100vw"
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          ) : null}
          <div
            key={`cur-${current}`}
            className={`absolute inset-0 ${
              outgoing ? (outgoing.dir === 1 ? "lightbox-enter-right" : "lightbox-enter-left") : ""
            }`}
          >
            <Image
              src={images[current]}
              alt={`${title} — ảnh ${current + 1}/${images.length}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Ảnh trước"
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer sm:left-6"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Ảnh tiếp theo"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer sm:right-6"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div
          className="flex items-center justify-center gap-2 overflow-x-auto p-4 sm:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => go(i, i > current ? 1 : -1)}
              aria-label={`Xem ảnh ${i + 1}`}
              aria-current={i === current}
              className={`relative size-14 shrink-0 overflow-hidden rounded-lg border-2 transition-colors duration-200 cursor-pointer ${
                i === current ? "border-white" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
