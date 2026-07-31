import Container from "../Container";
import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section id="doi-tac" className="py-16 sm:py-20 bg-background-alt">
      <Container className="flex flex-col gap-8">
        <span className="section-label text-center mx-auto">Thương hiệu & đối tác đã đồng hành</span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((name) => (
            <span
              key={name}
              className="font-display text-lg sm:text-xl text-foreground-soft/70 hover:text-accent transition-colors duration-200"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
