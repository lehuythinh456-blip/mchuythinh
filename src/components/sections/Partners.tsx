import Container from "../Container";
import { partners, partnerLogos } from "@/lib/data";

function Item({ name, hidden }: { name: string; hidden?: boolean }) {
  const logo = partnerLogos[name];
  return (
    <div className="logo-item" aria-hidden={hidden || undefined}>
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={hidden ? "" : name} loading="lazy" className="h-9 w-auto max-w-[9rem] object-contain" />
      ) : (
        <span className="font-display text-lg sm:text-xl">{name}</span>
      )}
    </div>
  );
}

export default function Partners() {
  // Lặp đủ dài để dải luôn phủ kín màn hình, sau đó nhân đôi để chạy vòng liền mạch
  const half = Array.from({ length: Math.ceil(10 / partners.length) }, () => partners).flat();
  return (
    <section id="doi-tac" className="py-16 sm:py-20 bg-background-alt">
      <Container className="flex flex-col gap-8">
        <span className="section-label text-center mx-auto">Thương hiệu & đối tác đã đồng hành</span>
      </Container>
      <div className="logo-strip mt-8" style={{ ["--dur" as string]: `${half.length * 3}s` }}>
        <div className="logo-track">
          {half.map((n, i) => (
            <Item key={`a${i}`} name={n} />
          ))}
          {half.map((n, i) => (
            <Item key={`b${i}`} name={n} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
