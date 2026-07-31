import { ImageIcon, Video } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const placeholders = [
  { label: "Sự kiện & Truyền hình", icon: ImageIcon, span: "sm:col-span-2 sm:row-span-2" },
  { label: "Host Livestream", icon: Video, span: "" },
  { label: "Voice Talent", icon: ImageIcon, span: "" },
  { label: "Đào tạo", icon: ImageIcon, span: "" },
  { label: "Hậu trường", icon: Video, span: "" },
];

export default function Gallery() {
  return (
    <section id="thu-vien" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Thư viện"
          title="Hình ảnh & video"
          description="Thư viện hình ảnh và video sẽ sớm được cập nhật với các khoảnh khắc thực tế từ chương trình."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[10rem] gap-4">
          {placeholders.map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-background-alt text-foreground-soft/70 ${item.span}`}
            >
              <item.icon className="size-6" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-wide text-center px-3">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
