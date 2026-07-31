import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const photos = [
  {
    src: "/images/portfolio/su-kien-khai-giang-nttu.jpg",
    alt: "MC Huy Thịnh dẫn chương trình Khai giảng Đại học Nguyễn Tất Thành",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/portfolio/su-kien-sieu-thi-voucher.jpg",
    alt: "MC Huy Thịnh trong gameshow truyền hình Siêu Thị Voucher",
    span: "",
  },
  {
    src: "/images/portfolio/daotao-giang-vien-thalic.jpg",
    alt: "Huy Thịnh giảng dạy tại Thalic Voice",
    span: "",
  },
  {
    src: "/images/portfolio/livestream-epson-ecotank.jpg",
    alt: "Host Livestream sản phẩm Epson EcoTank",
    span: "",
  },
  {
    src: "/images/portfolio/su-kien-fashion-show.jpg",
    alt: "MC Huy Thịnh tại Fashion Show Sắc Hương Di Sản",
    span: "",
  },
  {
    src: "/images/portrait/gallery-lifestyle.jpg",
    alt: "Huy Thịnh — hậu trường",
    span: "",
  },
  {
    src: "/images/portfolio/su-kien-year-end-shinhan.jpg",
    alt: "MC Huy Thịnh tại Year End Party Shinhan Group",
    span: "",
  },
  {
    src: "/images/portfolio/su-kien-talkshow-hutech.jpg",
    alt: "MC Huy Thịnh trong talkshow Ra Chơi Hóng Chuyện Nghề tại HUTECH",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="thu-vien" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Thư viện"
          title="Hình ảnh & video"
          description="Một số khoảnh khắc thực tế từ các chương trình, phiên livestream và lớp đào tạo."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[10rem] gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl border border-border ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
