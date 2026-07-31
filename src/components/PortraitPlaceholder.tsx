export default function PortraitPlaceholder({
  className = "",
  label = "Ảnh chân dung sẽ được cập nhật",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-accent-tint via-background-alt to-background ${className}`}
    >
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" className="text-foreground" />
      </svg>

      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <span className="font-display text-[5rem] sm:text-[6.5rem] leading-none text-accent">
          HT
        </span>
        <span className="rounded-full border border-accent/30 bg-background/80 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground-soft">
          {label}
        </span>
      </div>
    </div>
  );
}
