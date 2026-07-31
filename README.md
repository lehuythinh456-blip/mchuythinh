# Website MC Huy Thịnh

Website cá nhân cho MC / Host Livestream / Voice Talent **Huy Thịnh** — xây dựng bằng [Next.js](https://nextjs.org) (App Router, TypeScript, Tailwind CSS v4), xuất ra static HTML để deploy trên bất kỳ gói hosting nào của Hostinger.

## Công nghệ sử dụng

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — design tokens tuỳ chỉnh (be sáng + đen + vàng đồng, font Playfair Display + Inter)
- **lucide-react** cho icon
- Xuất **static export** (`output: "export"`) — chạy được trên mọi gói hosting Hostinger, không cần server Node.js chạy nền
- Form liên hệ gửi qua [FormSubmit](https://formsubmit.co) (không cần backend riêng)

## Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Chỉnh sửa nội dung

Toàn bộ thông tin thật (tên, tiểu sử, số điện thoại, email, danh sách dự án, đối tác...) nằm trong **một file duy nhất**:

```
src/lib/data.ts
```

Sửa nội dung ở đó là cập nhật toàn bộ trang — không cần đụng vào code giao diện. Khi có ảnh/video thật, thay thế component `PortraitPlaceholder` (`src/components/PortraitPlaceholder.tsx`) bằng `next/image` trỏ tới ảnh thật trong thư mục `public/`, và cập nhật khối ảnh trong `src/components/sections/Gallery.tsx`.

## Build ra file tĩnh

```bash
npm run build
```

Kết quả nằm trong thư mục `out/` — đây chính là toàn bộ website dạng HTML/CSS/JS tĩnh để upload lên hosting.

Xem trước bản build tĩnh: `npm run preview` (mở `http://localhost:3000` bằng server tĩnh).

## Đưa code lên GitHub

Repo Git đã được khởi tạo sẵn và có commit đầu tiên. Các bước còn lại cần **bạn tự thực hiện** (Claude không thể đăng nhập GitHub thay bạn):

1. Tạo repo mới trên GitHub (ví dụ `mc-huy-thinh-website`), để **trống**, không tick "Initialize with README".
2. Trong thư mục dự án, chạy:

```bash
git remote add origin https://github.com/<username>/mc-huy-thinh-website.git
git branch -M main
git push -u origin main
```

Từ lần sau chỉ cần `git add`, `git commit`, `git push`.

## Deploy lên Hostinger

Xem hướng dẫn chi tiết trong [DEPLOY.md](./DEPLOY.md).

## Form liên hệ

Form ở mục "Liên hệ hợp tác" gửi thẳng tới email `lehuythinh456@gmail.com` qua dịch vụ FormSubmit — không cần server riêng nên hoạt động được trên mọi gói hosting Hostinger. **Lần đầu tiên** có người gửi form thật, FormSubmit sẽ gửi một email xác nhận (activate) tới hộp thư đó — bạn cần mở email và bấm xác nhận một lần duy nhất thì các lần gửi sau mới vào thẳng hộp thư.

## Cấu hình tên miền cho SEO

Trước khi build để deploy, tạo file `.env.local` (copy từ `.env.example`) và điền tên miền thật:

```
NEXT_PUBLIC_SITE_URL=https://ten-mien-that-cua-ban.com
```

Giá trị này dùng cho `sitemap.xml`, `robots.txt` và thẻ Open Graph/Twitter khi chia sẻ link lên mạng xã hội.
