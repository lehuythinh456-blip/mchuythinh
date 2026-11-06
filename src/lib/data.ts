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
  /** Giới thiệu sơ về chương trình, hiển thị dưới tên trên thẻ dự án. */
  description?: string;
  /** Cover photo shown on the grid card. */
  image?: string;
  /** Full set of photos for this event, shown in the lightbox when the card is clicked. Falls back to [image] when omitted. */
  images?: string[];
  /** Video / file voice đã lồng tiếng cho thương hiệu; bấm vào thẻ sẽ mở trình phát. */
  media?: VoiceMedia[];
  /** Ẩn khỏi tab "Tất cả", chỉ hiện khi khách mở đúng thư mục (tab) của mục đó. */
  hideInAll?: boolean;
};

export type VoiceMedia = {
  /** Nơi đặt video/file voice. Mặc định là Google Drive. */
  source?: "drive" | "facebook" | "youtube";
  kind: "video" | "audio";
  /** Drive: ID file (chia sẻ "Bất kỳ ai có đường liên kết") · YouTube: ID video · Facebook: link đầy đủ của reel/video công khai. */
  id: string;
  /** Video dọc (reel 9:16): khung phát sẽ cao hơn. */
  portrait?: boolean;
  /** Tên hiển thị khi một thương hiệu có nhiều video. */
  label?: string;
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
    description:
      "Sự kiện thương hiệu của Unilever gắn với mùa FIFA World Cup 2026™, Thịnh đảm nhận vai trò người dẫn chương trình.",
    meta: "Người dẫn chương trình",
    image: "/images/portfolio/su-kien-unilever-fifa.jpg",
    images: [
      "/images/portfolio/su-kien-unilever-fifa.jpg",
      "/images/portfolio/su-kien-unilever-fifa-2.jpg",
      "/images/portfolio/su-kien-unilever-fifa-3.jpg",
      "/images/portfolio/su-kien-unilever-fifa-4.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "CALI CLUB — Vui chơi Hàn Quốc",
    meta: "MC sự kiện",
    description: "Sự kiện trò chơi tương tác của CALI CLUB Vietnam với chủ đề Step into the Game World.",
    image: "/images/portfolio/su-kien-cali-club.jpg",
    images: [
      "/images/portfolio/su-kien-cali-club.jpg",
      "/images/portfolio/su-kien-cali-club-2.jpg",
      "/images/portfolio/su-kien-cali-club-3.jpg",
      "/images/portfolio/su-kien-cali-club-4.jpg",
      "/images/portfolio/su-kien-cali-club-5.jpg",
      "/images/portfolio/su-kien-cali-club-6.jpg",
      "/images/portfolio/su-kien-cali-club-7.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Hutech Next Gen Creative",
    meta: "MC sự kiện",
    description: "Vòng chung kết cuộc thi The Next Gen Creators – Mùa 3 tại HUTECH, tháng 4/2026.",
    image: "/images/portfolio/su-kien-hutech-next-gen.jpg",
    images: [
      "/images/portfolio/su-kien-hutech-next-gen.jpg",
      "/images/portfolio/su-kien-hutech-next-gen-2.jpg",
      "/images/portfolio/su-kien-hutech-next-gen-3.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Fan Screening Huy Ka — Võ Điền Gia Huy",
    meta: "MC sự kiện",
    description: "Buổi fan screening tại rạp phim dành cho người hâm mộ Võ Điền Gia Huy (Huy Ka).",
    image: "/images/portfolio/su-kien-fan-screening-huy-ka.jpg",
    images: [
      "/images/portfolio/su-kien-fan-screening-huy-ka.jpg",
      "/images/portfolio/su-kien-fan-screening-huy-ka-2.jpg",
      "/images/portfolio/su-kien-fan-screening-huy-ka-3.jpg",
      "/images/portfolio/su-kien-fan-screening-huy-ka-4.jpg",
      "/images/portfolio/su-kien-fan-screening-huy-ka-5.jpg",
      "/images/portfolio/su-kien-fan-screening-huy-ka-6.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "HTV — Lên xe đi người đẹp",
    meta: "MC truyền hình",
    description: "Chương trình truyền hình phát sóng trên HTV, Thịnh tham gia dẫn dắt.",
    image: "/images/portfolio/su-kien-htv-len-xe.jpg",
    images: [
      "/images/portfolio/su-kien-htv-len-xe.jpg",
      "/images/portfolio/su-kien-htv-len-xe-2.jpg",
      "/images/portfolio/su-kien-htv-len-xe-3.jpg",
      "/images/portfolio/su-kien-htv-len-xe-4.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Đạt Vĩnh Tiến — Kỷ niệm 20 năm",
    meta: "MC sự kiện",
    description: "Chương trình kỷ niệm 20 năm (2005 – 2025) của Đạt Vĩnh Tiến, tổ chức tại sân golf Tân Sơn Nhất.",
    image: "/images/portfolio/su-kien-dat-vinh-tien-20-nam.jpg",
    images: [
      "/images/portfolio/su-kien-dat-vinh-tien-20-nam.jpg",
      "/images/portfolio/su-kien-dat-vinh-tien-20-nam-2.jpg",
      "/images/portfolio/su-kien-dat-vinh-tien-20-nam-3.jpg",
      "/images/portfolio/su-kien-dat-vinh-tien-20-nam-4.jpg",
      "/images/portfolio/su-kien-dat-vinh-tien-20-nam-5.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Gala Chào Đón Tân Sinh Viên NTTU 2025 - 2026",
    description:
      "Đêm gala âm nhạc chào đón tân sinh viên năm học 2025 – 2026 của Đại học Nguyễn Tất Thành, thực hiện cùng NTTU Studio.",
    meta: "MC sự kiện · NTTU Studio",
    image: "/images/portfolio/su-kien-nttu-gala.jpg",
    images: [
      "/images/portfolio/su-kien-nttu-gala.jpg",
      "/images/portfolio/su-kien-nttu-gala-2.jpg",
      "/images/portfolio/su-kien-nttu-gala-3.jpg",
      "/images/portfolio/su-kien-nttu-gala-4.jpg",
      "/images/portfolio/su-kien-nttu-gala-5.jpg",
      "/images/portfolio/su-kien-nttu-gala-6.jpg",
      "/images/portfolio/su-kien-nttu-gala-7.jpg",
      "/images/portfolio/su-kien-nttu-gala-8.jpg",
      "/images/portfolio/su-kien-nttu-gala-9.jpg",
      "/images/portfolio/su-kien-nttu-gala-10.jpg",
      "/images/portfolio/su-kien-nttu-gala-11.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Khai giảng Đại học Nguyễn Tất Thành",
    description:
      "Lễ khai giảng của Đại học Nguyễn Tất Thành với khoảng 5.000 khán giả tham dự.",
    meta: "MC sự kiện · 5.000 khán giả",
    image: "/images/portfolio/su-kien-khai-giang-nttu.jpg",
    images: [
      "/images/portfolio/su-kien-khai-giang-nttu.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-2.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-3.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-4.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-5.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-6.jpg",
      "/images/portfolio/su-kien-khai-giang-nttu-7.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Fashion Show \"Sắc Hương Di Sản\"",
    description:
      "Chương trình trình diễn thời trang \"Sắc Hương Di Sản\", Thịnh dẫn dắt toàn bộ chương trình.",
    meta: "MC sự kiện",
    image: "/images/portfolio/su-kien-fashion-show.jpg",
    images: [
      "/images/portfolio/su-kien-fashion-show.jpg",
      "/images/portfolio/su-kien-fashion-show-2.jpg",
      "/images/portfolio/su-kien-fashion-show-3.jpg",
      "/images/portfolio/su-kien-fashion-show-4.jpg",
      "/images/portfolio/su-kien-fashion-show-5.jpg",
      "/images/portfolio/su-kien-fashion-show-6.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Year End Party — Shinhan Group Beauty Legends",
    description:
      "Tiệc tri ân cuối năm của Shinhan Group Beauty Legends với phần dẫn dắt chương trình và kết nối nghệ sĩ.",
    meta: "MC sự kiện",
    image: "/images/portfolio/su-kien-year-end-shinhan.jpg",
    images: [
      "/images/portfolio/su-kien-year-end-shinhan.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-2.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-3.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-4.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-5.jpg",
      "/images/portfolio/su-kien-year-end-shinhan-6.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Gameshow truyền hình \"Siêu Thị Voucher\"",
    description:
      "Gameshow truyền hình \"Siêu Thị Voucher\" với các phần chơi tương tác và quà tặng voucher cho người chơi.",
    meta: "MC truyền hình",
    image: "/images/portfolio/su-kien-sieu-thi-voucher.jpg",
    images: [
      "/images/portfolio/su-kien-sieu-thi-voucher.jpg",
      "/images/portfolio/su-kien-sieu-thi-voucher-2.jpg",
      "/images/portfolio/su-kien-sieu-thi-voucher-3.jpg",
      "/images/portfolio/su-kien-sieu-thi-voucher-4.jpg",
      "/images/portfolio/su-kien-sieu-thi-voucher-5.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Talkshow \"Ra Chơi Hóng Chuyện Nghề\" — HUTECH",
    description:
      "Talkshow hướng nghiệp \"Ra Chơi Hóng Chuyện Nghề\" tại HUTECH, trò chuyện cùng khách mời về các ngành nghề.",
    meta: "MC talkshow",
    image: "/images/portfolio/su-kien-talkshow-hutech.jpg",
    images: [
      "/images/portfolio/su-kien-talkshow-hutech.jpg",
      "/images/portfolio/su-kien-talkshow-hutech-2.jpg",
      "/images/portfolio/su-kien-talkshow-hutech-3.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "HUTECH Law in Frames — Vòng chung kết",
    meta: "Sự kiện · HUTECH",
    description: "Vòng chung kết cuộc thi HUTECH Law in Frames.",
    image: "/images/portfolio/su-kien-hutech-law-in-frames.jpg",
    images: [
      "/images/portfolio/su-kien-hutech-law-in-frames.jpg",
      "/images/portfolio/su-kien-hutech-law-in-frames-2.jpg",
      "/images/portfolio/su-kien-hutech-law-in-frames-3.jpg",
      "/images/portfolio/su-kien-hutech-law-in-frames-4.jpg",
      "/images/portfolio/su-kien-hutech-law-in-frames-5.jpg",
      "/images/portfolio/su-kien-hutech-law-in-frames-6.jpg",
      "/images/portfolio/su-kien-hutech-law-in-frames-7.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Hội nghị Đối thoại Doanh nghiệp Thương mại điện tử TP. Hồ Chí Minh",
    meta: "MC sự kiện",
    description: "Hội nghị Đối thoại Doanh nghiệp Thương mại điện tử TP. Hồ Chí Minh năm 2022 do Sở Công Thương TP.HCM tổ chức, Thịnh dẫn chương trình.",
    image: "/images/portfolio/su-kien-hoi-nghi-tmdt.jpg",
    images: [
      "/images/portfolio/su-kien-hoi-nghi-tmdt.jpg",
      "/images/portfolio/su-kien-hoi-nghi-tmdt-2.jpg",
      "/images/portfolio/su-kien-hoi-nghi-tmdt-3.jpg",
      "/images/portfolio/su-kien-hoi-nghi-tmdt-4.jpg",
      "/images/portfolio/su-kien-hoi-nghi-tmdt-5.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Lazada Run 2023",
    meta: "MC sự kiện",
    description: "Giải chạy Lazada Run, Thịnh dẫn chương trình và đồng hành cùng các vận động viên trên đường chạy. Kèm hình ảnh Lazada Run Đông Nam Á 2023 tại Singapore.",
    image: "/images/portfolio/su-kien-lazada-run.jpg",
    images: [
      "/images/portfolio/su-kien-lazada-run.jpg",
      "/images/portfolio/su-kien-lazada-run-2.jpg",
      "/images/portfolio/su-kien-lazada-run-3.jpg",
      "/images/portfolio/su-kien-lazada-run-4.jpg",
      "/images/portfolio/su-kien-lazada-run-5.jpg",
      "/images/portfolio/su-kien-lazada-run-6.jpg",
      "/images/portfolio/su-kien-lazada-run-7.jpg",
      "/images/portfolio/su-kien-lazada-run-8.jpg",
    ],
  },
  {
    category: "su-kien",
    title: "Miss HUTECH 2021 — Vòng sơ khảo",
    meta: "MC sự kiện",
    description: "Vòng sơ khảo cuộc thi Miss HUTECH 2021, tổ chức tháng 11/2020 tại Trường Đại học Công nghệ TP.HCM (HUTECH).",
    image: "/images/portfolio/su-kien-miss-hutech-2021.jpg",
    images: [
      "/images/portfolio/su-kien-miss-hutech-2021.jpg",
      "/images/portfolio/su-kien-miss-hutech-2021-2.jpg",
      "/images/portfolio/su-kien-miss-hutech-2021-3.jpg",
      "/images/portfolio/su-kien-miss-hutech-2021-4.jpg",
    ],
  },
  {
    category: "livestream",
    title: "Livestream ASUS Singapore",
    description:
      "Phiên livestream giới thiệu sản phẩm ASUS trong chuyến làm việc tại Singapore.",
    meta: "Host Livestream",
    image: "/images/portfolio/livestream-asus-singapore.jpg",
    images: [
      "/images/portfolio/livestream-asus-singapore.jpg",
      "/images/portfolio/livestream-asus-singapore-2.jpg",
    ],
  },
  {
    category: "livestream",
    title: "Livestream Highland Coffee",
    meta: "Host Livestream",
    description: "Phiên livestream giới thiệu sản phẩm Highland Coffee.",
    image: "/images/portfolio/livestream-highland-coffee.jpg",
    images: [
      "/images/portfolio/livestream-highland-coffee.jpg",
      "/images/portfolio/livestream-highland-coffee-2.jpg",
    ],
  },
  {
    category: "dao-tao",
    title: "Giảng viên Giọng nói — Thalic Voice",
    description:
      "Giảng dạy kỹ năng giọng nói và giao tiếp tại Thalic Voice.",
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
    description:
      "Buổi đào tạo kỹ năng livestream bán hàng dành cho sinh viên Đại học Kinh tế – Tài chính (UEF).",
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
    description:
      "Biên tập kịch bản và dẫn dắt các chương trình radio như Tech Story, Karma or Drama (102.7 MHz) cho trường đại học và doanh nghiệp.",
    image: "/images/portfolio/daotao-bien-tap-radio.jpg",
    images: [
      "/images/portfolio/daotao-bien-tap-radio.jpg",
      "/images/portfolio/daotao-bien-tap-radio-2.jpg",
      "/images/portfolio/daotao-bien-tap-radio-3.jpg",
      "/images/portfolio/daotao-bien-tap-radio-5.jpg",
      "/images/portfolio/daotao-bien-tap-radio-4.jpg",
    ],
  },
  {
    category: "livestream",
    title: "Livestream Epson EcoTank Store",
    description:
      "Phiên livestream giới thiệu dòng máy in Epson EcoTank tại cửa hàng.",
    meta: "Host Livestream",
    image: "/images/portfolio/livestream-epson-ecotank.jpg",
    images: [
      "/images/portfolio/livestream-epson-ecotank.jpg",
      "/images/portfolio/livestream-epson-ecotank-2.jpg",
      "/images/portfolio/livestream-epson-ecotank-3.jpg",
    ],
  },
  {
    category: "livestream",
    title: "Lazada Siêu Live Công Nghệ — Misthy x Chika MVK",
    meta: "Host Livestream",
    description: "Siêu live công nghệ trên Lazada, Thịnh dẫn dắt khung giờ 20h – 22h cùng khách mời KOL.",
    image: "/images/portfolio/livestream-lazada-sieu-live-cong-nghe.jpg",
    images: [
      "/images/portfolio/livestream-lazada-sieu-live-cong-nghe.jpg",
      "/images/portfolio/livestream-lazada-sieu-live-cong-nghe-2.jpg",
      "/images/portfolio/livestream-lazada-sieu-live-cong-nghe-3.jpg",
      "/images/portfolio/livestream-lazada-sieu-live-cong-nghe-4.jpg",
    ],
  },
  // --- Livestream bán hàng: ẩn khỏi "Tất cả", chỉ hiện khi khách mở thư mục Livestream ---
  { category: "livestream", title: "Host Livestream bán hàng — Shopee", meta: "Host Livestream", hideInAll: true },
  { category: "livestream", title: "Host Livestream bán hàng — TikTok Shop", meta: "Host Livestream", hideInAll: true },
  { category: "livestream", title: "Host Livestream bán hàng — Lazada", meta: "Host Livestream", description: "Dẫn dắt các phiên livestream bán hàng trên Lazada, tối ưu tương tác và chốt đơn.", hideInAll: true },
  // --- Voice Talent: ẩn khỏi "Tất cả"; bấm vào thẻ để xem video / nghe file voice (xem kiểu VoiceMedia) ---
  {
    category: "voice-talent",
    title: "Sony Vietnam",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { source: "facebook", kind: "video", id: "https://www.facebook.com/reel/1855398595339025/", portrait: true, label: "Khu vực Manifest năm mới" },
      { source: "youtube", kind: "video", id: "PKgqyvGyhe4", label: "INZONE E9 — Tai nghe gaming in-ear" },
      { source: "youtube", kind: "video", id: "-Z58v9fYELI", label: "INZONE H9 II — Tai nghe gaming chống ồn không dây" },
      { source: "facebook", kind: "video", id: "https://www.facebook.com/reel/3777730002362897/", portrait: true, label: "Manifest với Sony — Đón Tết như ý" },
      { source: "facebook", kind: "video", id: "https://www.facebook.com/reel/1941325300095868/", portrait: true, label: "Tết chill kiểu nào? Sony chiều như ý" },
      { source: "facebook", kind: "video", id: "https://www.facebook.com/reel/1085393050295238/", portrait: true, label: "Manifest năm mới — Cầu gì cũng phải “nét”" },
    ],
  },
  {
    category: "voice-talent",
    title: "Zalopay",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { kind: "video", id: "1d3h1sL5poC_899sKd-aaXCO_043lvMrX" },
    ],
  },
  {
    category: "voice-talent",
    title: "We Choice — WeYoung Awards",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { source: "facebook", kind: "video", id: "https://www.facebook.com/reel/1379431837019963/" },
    ],
  },
  {
    category: "voice-talent",
    title: "Nutrilite",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { source: "facebook", kind: "video", id: "https://www.facebook.com/reel/1609689827415294/" },
    ],
  },
  {
    category: "voice-talent",
    title: "Mì Cay Seoul",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { kind: "video", id: "1WnV4kQm5-C1LSwqGu31Iys6CIpQr5n51", portrait: true },
    ],
  },
  {
    category: "voice-talent",
    title: "Nam A Bank",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { kind: "video", id: "1IYYWvuRVIr6g97Pd1H6o7iexReURWzNv" },
    ],
  },
  {
    category: "voice-talent",
    title: "Reflective Learnings",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { kind: "video", id: "1cxOLnMsMFAh3fPXkvoX1V725eUnuCo7D" },
    ],
  },
  {
    category: "voice-talent",
    title: "Droppi",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { kind: "video", id: "1dZJ7xnwZ4YIPQZgBg1hQq6qwMSvAIkTR" },
    ],
  },
  {
    category: "voice-talent",
    title: "Bách Gia Trăm Họ (2019)",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { kind: "audio", id: "1FNAU9Vt3Ew_6_Hsg7clBuk8afCu-j9Nw" },
    ],
  },
  {
    category: "voice-talent",
    title: "Thu hồi bằng thạc sĩ",
    meta: "Voice Talent",
    hideInAll: true,
    media: [
      { kind: "audio", id: "1A4abTei8DmyBtoyaDkfySlVzAxSJafXS" },
    ],
  },
  {
    category: "voice-talent",
    title: "Masan Group",
    meta: "Voice Talent",
    hideInAll: true,
  },
];

export const partners = [
  "Lazada",
  "Shopee",
  "TikTok Shop",
  "Sony Vietnam",
  "Zalo",
  "Masan Group",
  "Mì Cay Seoul",
  "Đông Á Bank",
  "VOV3 - The One Radio",
];

// Khi có logo chính thức: bỏ file vào public/images/partners/ rồi khai báo ở đây,
// ví dụ: "Zalo": "/images/partners/zalo.png". Đối tác chưa có logo sẽ hiện bằng chữ.
export const partnerLogos: Record<string, string> = {};

export const navLinks = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#linh-vuc", label: "Lĩnh vực" },
  { href: "#du-an", label: "Dự án" },
  { href: "#doi-tac", label: "Đối tác" },
  { href: "#thu-vien", label: "Thư viện" },
  { href: "#lien-he", label: "Liên hệ" },
];

// Teaser showreel ở đầu trang (cột phải của Hero): các cảnh chạy lần lượt, ảnh nằm trong public/images.
// position = vị trí lấy nét khi cắt ảnh về khung dọc 4:5 ("x% y%"). cta chỉ dùng cho cảnh cuối.
export type ReelScene = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  position?: string;
  cta?: { label: string; href: string };
};

export const heroReel: ReelScene[] = [
  {
    src: "/images/portrait/about.jpg",
    alt: "Chân dung Huy Thịnh trong bộ vest đen",
    eyebrow: "MC · Host Livestream · Voice Talent",
    title: "Huy Thịnh",
    position: "50% 12%",
  },
  {
    src: "/images/portfolio/su-kien-hutech-next-gen.jpg",
    alt: "Huy Thịnh dẫn chung kết The Next Gen Creators",
    eyebrow: "MC chung kết · 04/2026",
    title: "The Next Gen Creators",
  },
  {
    src: "/images/portfolio/su-kien-unilever-fifa-3.jpg",
    alt: "Huy Thịnh dẫn sự kiện Unilever x FIFA World Cup 2026",
    eyebrow: "Người dẫn chương trình",
    title: "Unilever x FIFA World Cup 2026™",
  },
  {
    src: "/images/portfolio/su-kien-nttu-gala-4.jpg",
    alt: "Huy Thịnh dẫn đêm gala chào đón tân sinh viên NTTU",
    eyebrow: "Đêm gala · 2025 – 2026",
    title: "Gala Chào Đón Tân Sinh Viên NTTU",
    position: "45% 50%",
  },
  {
    src: "/images/portfolio/su-kien-cali-club-7.jpg",
    alt: "Huy Thịnh dẫn sự kiện trò chơi CALI CLUB",
    eyebrow: "MC sự kiện",
    title: "CALI CLUB — Vui chơi Hàn Quốc",
    position: "30% 50%",
  },
  {
    src: "/images/portfolio/su-kien-lazada-run-2.jpg",
    alt: "Huy Thịnh dẫn giải chạy Lazada Run",
    eyebrow: "MC giải chạy",
    title: "Lazada Run",
  },
  {
    src: "/images/portfolio/su-kien-year-end-shinhan.jpg",
    alt: "Huy Thịnh dẫn Year End Party của Shinhan Group Beauty Legends",
    eyebrow: "Year End Party",
    title: "Shinhan Group Beauty Legends",
  },
  {
    src: "/images/portfolio/su-kien-fashion-show-4.jpg",
    alt: "Huy Thịnh dẫn fashion show Sắc Hương Di Sản",
    eyebrow: "Fashion Show",
    title: "Sắc Hương Di Sản",
    position: "45% 50%",
  },
  {
    src: "/images/portfolio/su-kien-dat-vinh-tien-20-nam-3.jpg",
    alt: "Huy Thịnh dẫn chương trình kỷ niệm 20 năm Đạt Vĩnh Tiến",
    eyebrow: "Kỷ niệm 20 năm",
    title: "Đạt Vĩnh Tiến",
    position: "55% 50%",
  },
  {
    src: "/images/portfolio/livestream-lazada-sieu-live-cong-nghe-2.jpg",
    alt: "Huy Thịnh host phiên Siêu Live Công Nghệ trên Lazada",
    eyebrow: "Host Livestream",
    title: "Lazada Siêu Live Công Nghệ",
  },
  {
    src: "/images/portrait/hero.jpg",
    alt: "Chân dung Huy Thịnh",
    eyebrow: "Chương trình tiếp theo?",
    title: "Cùng làm nên điều đặc biệt",
    position: "62% 30%",
    cta: { label: "Liên hệ hợp tác", href: "#lien-he" },
  },
];
