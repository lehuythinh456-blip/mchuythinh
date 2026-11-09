"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import type { VoiceMedia } from "@/lib/data";

function embedUrls(item: VoiceMedia) {
  switch (item.source) {
    case "facebook":
      return {
        embed: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.id)}&show_text=false&t=0`,
        open: item.id,
        openLabel: "Mở trên Facebook nếu trình phát không chạy",
      };
    case "youtube":
      return {
        embed: `https://www.youtube-nocookie.com/embed/${item.id}`,
        open: `https://www.youtube.com/watch?v=${item.id}`,
        openLabel: "Mở trên YouTube nếu trình phát không chạy",
      };
    default:
      return {
        embed: `https://drive.google.com/file/d/${item.id}/preview`,
        open: `https://drive.google.com/file/d/${item.id}/view`,
        openLabel: "Mở trên Google Drive nếu trình phát không chạy",
      };
  }
}

export default function MediaModal({
  title,
  subtitle = "Voice Talent",
  media,
  onClose,
}: {
  title: string;
  subtitle?: string;
  media: VoiceMedia[];
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-4 p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-white">{title}</span>
          <span className="text-xs text-white/50">{subtitle}</span>
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

      <div className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6" onClick={onClose}>
        <div
          className="mx-auto flex w-full max-w-3xl flex-col gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {media.map((item) => {
            const { embed, open, openLabel } = embedUrls(item);
            const frameTitle = item.label ? `${title} — ${item.label}` : title;
            const frameClass =
              item.kind === "audio" ? "h-56 w-full" : item.portrait ? "aspect-[9/16]" : "aspect-video w-full";
            return (
              <div key={item.id} className="flex flex-col gap-3">
                {item.label ? <span className="text-sm text-white/80">{item.label}</span> : null}
                <div
                  className={`mx-auto overflow-hidden rounded-2xl bg-black ${frameClass}`}
                  style={item.portrait ? { width: "min(100%, calc(70vh * 0.5625))" } : undefined}
                >
                  <iframe
                    src={embed}
                    title={frameTitle}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="size-full border-0"
                  />
                </div>
                <a
                  href={open}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start text-xs text-white/60 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  {openLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
