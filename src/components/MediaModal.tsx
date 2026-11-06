"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import type { VoiceMedia } from "@/lib/data";

export default function MediaModal({
  title,
  media,
  onClose,
}: {
  title: string;
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
          <span className="text-xs text-white/50">Voice Talent</span>
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
          {media.map((item) => (
            <div key={item.driveId} className="flex flex-col gap-3">
              {item.label ? <span className="text-sm text-white/80">{item.label}</span> : null}
              <div
                className={`w-full overflow-hidden rounded-2xl bg-black ${
                  item.kind === "video" ? "aspect-video" : "h-56"
                }`}
              >
                <iframe
                  src={`https://drive.google.com/file/d/${item.driveId}/preview`}
                  title={item.label ? `${title} — ${item.label}` : title}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  className="size-full border-0"
                />
              </div>
              <a
                href={`https://drive.google.com/file/d/${item.driveId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-xs text-white/60 hover:text-white transition-colors duration-200"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                Mở trên Google Drive nếu trình phát không chạy
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
