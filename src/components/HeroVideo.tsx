"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const VIDEO_SRC = "/video/huythinh-teaser.mp4";
const POSTER_SRC = "/video/huythinh-teaser-poster.jpg";

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

// Teaser 15 giây ở Hero: tự chạy (tắt tiếng) khi nằm trong màn hình, lặp lại.
// Người dùng có thể tạm dừng và bật tiếng; nếu bật "giảm chuyển động" thì chỉ hiện ảnh poster
// cho tới khi bấm phát.
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [userStarted, setUserStarted] = useState(false);
  const [muted, setMuted] = useState(true);
  const reduced = useReducedMotion();

  // Chạy khi: đang nằm trong màn hình, không bị người dùng tạm dừng,
  // và (không bật giảm chuyển động hoặc người dùng chủ động bấm phát).
  const shouldPlay = visible && !userPaused && (!reduced || userStarted);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldPlay) {
      // Trình duyệt có thể từ chối phát tự động; khi đó người dùng vẫn bấm nút phát được.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  const showPlay = userPaused || (reduced && !userStarted);

  function togglePlay() {
    if (showPlay) {
      setUserPaused(false);
      setUserStarted(true);
    } else {
      setUserPaused(true);
    }
  }

  return (
    <div
      ref={frameRef}
      role="group"
      aria-label="Teaser giới thiệu Huy Thịnh"
      className="relative aspect-video w-full overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-2xl shadow-foreground/10"
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Teaser 15 giây: các sự kiện, livestream, voice talent và giảng dạy của Huy Thịnh"
        className="absolute inset-0 size-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-2 p-3 sm:p-4">
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Bật tiếng teaser" : "Tắt tiếng teaser"}
          aria-pressed={!muted}
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {muted ? <VolumeX className="size-4" aria-hidden="true" /> : <Volume2 className="size-4" aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={showPlay ? "Phát teaser" : "Tạm dừng teaser"}
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {showPlay ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
