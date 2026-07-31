export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mchuythinh.com";

export const site = {
  name: "Huy Thịnh",
  role: "MC / Host Livestream / Voice Talent",
  tagline: "Chuyên nghiệp trên sóng, tự nhiên trên sân khấu, cuốn hút trên từng khung hình",
  description:
    "Huy Thịnh — MC truyền hình & sự kiện, Host Livestream thương mại điện tử, Voice Talent lồng tiếng quảng cáo và giảng viên đào tạo kỹ năng giao tiếp, thuyết trình, livestream bán hàng.",
  phone: "0383 476 528",
  phoneHref: "tel:+84383476528",
  email: "lehuythinh456@gmail.com",
  facebook: "https://www.facebook.com/HuyThinhMC/",
  tiktok: "https://www.tiktok.com/@thinhradio",
  region: "TP. Hồ Chí Minh & toàn quốc",
};

export const stats = [
  { value: "6+", label: "năm BTV / MC Truyền hình - Sự kiện" },
  { value: "6+", label: "năm kinh nghiệm Host Livestream" },
  { value: "5+", label: "năm đào tạo Giọng nói - Giao tiếp - Thuyết trình" },
  { value: "15+", label: "thương hiệu & đối tác đã đồng hành" },
];

export const bio = {
  heading: "Xin chào, tôi là Huy Thịnh",
  paragraphs: [
    "Tôi hoạt động trong lĩnh vực truyền thông và giải trí với vai trò MC truyền hình - sự kiện, Host Livestream, Voice Talent và giảng viên đào tạo kỹ năng giao tiếp. Với nền tảng giọng nói được rèn luyện bài bản và kinh nghiệm thực chiến trên nhiều sân khấu, tôi luôn hướng tới sự chuyên nghiệp, tự nhiên và truyền cảm hứng trong từng chương trình.",
    "Từ trường quay truyền hình, sân khấu sự kiện doanh nghiệp, đến phòng thu lồng tiếng và các phiên livestream bán hàng triệu lượt xem — mỗi vai trò đều được tôi chuẩn bị kỹ lưỡng về kịch bản, tâm thế và năng lượng để mang lại trải nghiệm tốt nhất cho khách hàng và khán giả.",
  ],
};

export const achievements = [
  {
    title: "Gương mặt triển vọng",
    detail: "Người dẫn chương trình Phát thanh - Truyền hình 2021",
  },
  {
    title: "Biên tập viên / VJ",
    detail: "Đài Tiếng nói Việt Nam VOV3 — The One Radio",
  },
  {
    title: "Nhân viên triển vọng 2024",
    detail: "Thalic Voice",
  },
  {
    title: "Cộng tác viên biên tập & đưa tin",
    detail: "Báo Pháp luật TP. Hồ Chí Minh",
  },
];

export type ExpertiseArea = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const expertise: ExpertiseArea[] = [
  {
    id: "su-kien",
    title: "MC Truyền hình & Sự kiện",
    description:
      "Dẫn dắt chương trình truyền hình, hội nghị doanh nghiệp, gala, cuộc thi và các sự kiện quy mô lớn nhỏ.",
    items: ["Hội nghị - hội thảo doanh nghiệp", "Gala & lễ trao giải", "Cuộc thi sắc đẹp - học đường"],
  },
  {
    id: "livestream",
    title: "Host Livestream",
    description:
      "Dẫn dắt phiên livestream bán hàng trên các sàn thương mại điện tử lớn, tối ưu tương tác và chốt đơn.",
    items: ["Lazada", "Shopee", "TikTok Shop"],
  },
  {
    id: "voice-talent",
    title: "Voice Talent",
    description:
      "Lồng tiếng quảng cáo, thuyết minh thương hiệu với chất giọng chuyên nghiệp, truyền cảm.",
    items: ["TVC quảng cáo", "Thuyết minh thương hiệu", "Nội dung âm thanh doanh nghiệp"],
  },
  {
    id: "dao-tao",
    title: "Đào tạo & Biên tập",
    description:
      "Giảng dạy kỹ năng livestream bán hàng, giao tiếp, thuyết trình; biên tập kịch bản radio cho trường học và doanh nghiệp.",
    items: ["Khoá livestream bán hàng", "Giao tiếp & thuyết trình", "Biên tập kịch bản radio"],
  },
];

export type PortfolioCategory = "su-kien" | "livestream" | "voice-talent" | "dao-tao";

export type PortfolioItem = {
  category: PortfolioCategory;
  title: string;
  meta?: string;
  /** Cover photo shown on the grid card. */
  image?: string;
  /** Full set of photos for this event, shown in the lightbox when the card is clicked. Falls back to [image] when omitted. */
  images?: string[];
};

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "su-kien", label: "Sự kiện" },
  { id: "livestream", label: "Livestream" },
  { id: "voice-talent", label: "Voice Talent" },
  { id: "dao-tao", label: "Giảng dạy" },
];

export const portfolio: PortfolioItem[] = [
  {
    category: "su-kien",
    title: "Unilever x FIFA World Cup 2026™",
    meta: "Người dẫn chương trình",
    image: "/images/portfolio/su-kien-unilever-fifa.jpg",
    images: [
      "/images/portfolio/su-kien-unilever-fifa.jpg",
      "/images/portfolio/su-kien-unilever-fifa-2.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Gala Chào Đón Tân Sinh Viên NTTU 2025 - 2026",
    meta: "MC sự kiện · NTTU Studio",
    image: "/images/portfolio/su-kien-nttu-gala.jpg",
  },
  {
    category: "su-kien",
    title: "Khai giảng Đại học Nguyễn Tất Thành",
    meta: "MC sự kiện · 5.000 khán giả",
    image: "/images/portfolio/su-kien-khai-giang-nttu.jpg",
    images: [
      "/images/portfolio/su-kien-khai-giang-nttu.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-2.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-3.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Fashion Show \"Sắc Hương Di Sản\"",
    meta: "MC sự kiện",
    image: "/images/portfolio/su-kien-fashion-show.jpg",
    images: [
      "/images/portfolio/su-kien-fashion-show.jpg",
      "/images/portfolio/su-kien-fashion-show-2.jpg",
      "/images/portfolio/su-kien-fashion-show-3.jpg",
      "/images/portfolio/su-kien-fashion-show-4.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Year End Party — Shinhan Group Beauty Legends",
    meta: "MC sự kiện",
    image: "/images/portfolio/su-kien-year-end-shinhan.jpg",
    images: [
      "/images/portfolio/su-kien-year-end-shinhan.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-2.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-3.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-4.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Gameshow truyền hình \"Siêu Thị Voucher\"",
    meta: "MC truyền hình",
    image: "/images/portfolio/su-kien-sieu-thi-voucher.jpg",
    images: [
      "/images/portfolio/su-kien-sieu-thi-voucher.jpg",
      "/images/portfolio/su-kien-sieu-thi-voucher-2.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Talkshow \"Ra Chơi Hóng Chuyện Nghề\" — HUTECH",
    meta: "MC talkshow",
    image: "/images/portfolio/su-kien-talkshow-hutech.jpg",
    images: [
      "/images/portfolio/su-kien-talkshow-hutech.jpg",
      "/images/portfolio/su-kien-talkshow-hutech-2.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Hội nghị Đối thoại Doanh nghiệp Thương mại điện tử TP. Hồ Chí Minh",
    meta: "MC sự kiện",
  },
  { category: "su-kien", title: "Miss Hutech 2018", meta: "MC sự kiện" },
  { category: "su-kien", title: "Lazada Run 2023", meta: "MC sự kiện" },
  {
    category: "livestream",
    title: "Livestream ASUS Singapore",
    meta: "Host Livestream",
    image: "/images/portfolio/livestream-asus-singapore.jpg",
    images: [
      "/images/portfolio/livestream-asus-singapore.jpg",
      "/images/portfolio/livestream-asus-singapore-2.jpg",
    ],
  },
  {
    category: "livestream",
    title: "Livestream Epson EcoTank Store",
    meta: "Host Livestream",
    image: "/images/portfolio/livestream-epson-ecotank.jpg",
    images: [
      "/images/portfolio/livestream-epson-ecotank.jpg",
      "/images/portfolio/livestream-epson-ecotank-2.jpg",
      "/images/portfolio/livestream-epson-ecotank-3.jpg",
    ],
  },
  { category: "livestream", title: "Host Livestream bán hàng — Lazada", meta: "Host Livestream" },
  { category: "livestream", title: "Host Livestream bán hàng — Shopee", meta: "Host Livestream" },
  { category: "livestream", title: "Host Livestream bán hàng — TikTok Shop", meta: "Host Livestream" },
  { category: "voice-talent", title: "Sony Vietnam", meta: "Voice Talent" },
  { category: "voice-talent", title: "Zalo", meta: "Voice Talent" },
  { category: "voice-talent", title: "Mason Group", meta: "Voice Talent" },
  { category: "voice-talent", title: "Mì Cay Seoul", meta: "Voice Talent" },
  { category: "voice-talent", title: "Đông Á Bank", meta: "Voice Talent" },
  {
    category: "dao-tao",
    title: "Giảng viên Giọng nói — Thalic Voice",
    meta: "Đào tạo giọng nói & giao tiếp",
    image: "/images/portfolio/daotao-giang-vien-thalic.jpg",
    images: [
      "/images/portfolio/daotao-giang-vien-thalic.jpg",
      "/images/portfolio/daotao-giang-vien-thalic-2.jpg",
      "/images/portfolio/daotao-giang-vien-thalic-3.jpg",
    ],
  },
  {
    category: "dao-tao",
    title: "Coach kỹ năng Livestream thu hút triệu đơn — UEF",
    meta: "Đào tạo livestream bán hàng",
    image: "/images/portfolio/daotao-coach-livestream-uef.jpg",
    images: [
      "/images/portfolio/daotao-coach-livestream-uef.jpg",
      "/images/portfolio/daotao-coach-livestream-uef-2.jpg",
    ],
  },
  {
    category: "dao-tao",
    title: "Biên tập kịch bản Radio",
    meta: "Trường Đại học, doanh nghiệp, tập đoàn",
  },
];

export const partners = [
  "Lazada",
  "Shopee",
  "TikTok Shop",
  "Sony Vietnam",
  "Zalo",
  "Mason Group",
  "Mì Cay Seoul",
  "Đông Á Bank",
  "VOV3 - The One Radio",
];

export const navLinks = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#linh-vuc", label: "Lĩnh vực" },
  { href: "#du-an", label: "Dự án" },
  { href: "#doi-tac", label: "Đối tác" },
  { href: "#thu-vien", label: "Thư viện" },
  { href: "#lien-he", label: "Liên hệ" },
];
