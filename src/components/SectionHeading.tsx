export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-foreground text-balance">
        {title}
      </h2>
      {description ? (
        <p className="text-foreground-soft text-base sm:text-lg leading-relaxed text-pretty">{description}</p>
      ) : null}
    </div>
  );
}
