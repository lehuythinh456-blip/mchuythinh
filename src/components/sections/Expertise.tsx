import { Mic2, Radio, AudioLines, GraduationCap, Check } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { expertise } from "@/lib/data";

const icons = {
  "su-kien": Mic2,
  livestream: Radio,
  "voice-talent": AudioLines,
  "dao-tao": GraduationCap,
};

export default function Expertise() {
  return (
    <section id="linh-vuc" className="py-20 sm:py-28 bg-background-alt">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Lĩnh vực hoạt động"
          title="Bốn vai trò, một tiêu chuẩn chuyên nghiệp"
          description="Từ trường quay đến sân khấu, từ phòng thu đến phiên livestream — mỗi vai trò đều được đầu tư kỹ lưỡng."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((area) => {
            const Icon = icons[area.id as keyof typeof icons];
            return (
              <div
                key={area.id}
                className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent-tint text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl text-foreground leading-snug">{area.title}</h3>
                  <p className="text-sm text-foreground-soft leading-relaxed">{area.description}</p>
                </div>
                <ul className="flex flex-col gap-2 pt-2 mt-auto border-t border-border">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 pt-2 text-sm text-foreground-soft">
                      <Check className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
