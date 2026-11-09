import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const photos = [
  {
    src: "/images/portfolio/su-kien-khai-giang-nttu.jpg",
    alt: "MC Huy Thịnh dẫn chương trình Khai giảng Đại học Nguyễn Tất Thành",
  },
  {
    src: "/images/portfolio/su-kien-sieu-thi-voucher.jpg",
    alt: "MC Huy Thịnh trong gameshow truyền hình Siêu Thị Voucher",
  },
  {
    src: "/images/portfolio/daotao-giang-vien-thalic.jpg",
    alt: "Huy Thịnh giảng dạy tại Thalic Voice",
  },
  {
    src: "/images/portfolio/livestream-epson-ecotank.jpg",
    alt: "Host Livestream sản phẩm Epson EcoTank",
  },
  {
    src: "/images/portfolio/su-kien-fashion-show.jpg",
    alt: "MC Huy Thịnh tại Fashion Show Sắc Hương Di Sản",
  },
  {
    src: "/images/portrait/gallery-lifestyle.jpg",
    alt: "Huy Thịnh — hậu trường",
  },
  {
    src: "/images/portfolio/su-kien-year-end-shinhan.jpg",
    alt: "MC Huy Thịnh tại Year End Party Shinhan Group",
  },
  {
    src: "/images/portfolio/su-kien-talkshow-hutech.jpg",
    alt: "MC Huy Thịnh trong talkshow Ra Chơi Hóng Chuyện Nghề tại HUTECH",
  },
];

function PhotoItem({ photo, hidden }: { photo: (typeof photos)[number]; hidden?: boolean }) {
  return (
    <div className="photo-item" aria-hidden={hidden || undefined}>
      <Image
        src={photo.src}
        alt={hidden ? "" : photo.alt}
        fill
        sizes="(min-width: 1024px) 20vw, 60vw"
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="thu-vien" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Thư viện"
          title="Hình ảnh & video"
          description="Một số khoảnh khắc thực tế từ các chương trình, phiên livestream và lớp đào tạo."
        />
      </Container>

      <div className="photo-strip" style={{ ["--dur" as string]: `${photos.length * 4}s` }}>
        <div className="photo-track">
          {photos.map((photo, i) => (
            <PhotoItem key={`a${i}`} photo={photo} />
          ))}
          {photos.map((photo, i) => (
            <PhotoItem key={`b${i}`} photo={photo} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
