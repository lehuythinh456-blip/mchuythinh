# Hướng dẫn Deploy lên Hostinger

Website này được build ra **static export** (HTML/CSS/JS thuần) trong thư mục `out/`. Cách này chạy được trên **mọi gói hosting Hostinger** — kể cả gói Shared/Business rẻ nhất — vì không cần server Node.js chạy nền.

> Claude không thể tự đăng nhập vào tài khoản Hostinger hoặc GitHub của bạn (không được phép nhập mật khẩu/thông tin đăng nhập thay bạn). Các bước dưới đây bạn cần tự thực hiện; Claude có thể hỗ trợ sửa code hoặc debug nếu gặp lỗi.

## Bước 0 — Build bản production

```bash
npm run build
```

Kiểm tra thư mục `out/` đã được tạo, chứa `index.html`, `.htaccess`, `_next/`, `robots.txt`, `sitemap.xml`...

## Cách 1 — Upload thủ công qua File Manager (đơn giản nhất, khuyến nghị cho lần đầu)

1. Đăng nhập [hPanel Hostinger](https://hpanel.hostinger.com/).
2. Vào **Websites → chọn website → File Manager**.
3. Vào thư mục `public_html` (nếu website đặt ở domain gốc) hoặc thư mục con của domain phụ.
4. **Xoá các file mặc định** có sẵn trong `public_html` (thường chỉ có 1 file `index.html` mẫu của Hostinger).
5. Nén toàn bộ **nội dung bên trong** thư mục `out/` (không nén luôn thư mục `out` mà chỉ nén các file/folder bên trong nó) thành 1 file `.zip`.
6. Upload file `.zip` đó vào `public_html` qua File Manager, sau đó bấm **Extract** (giải nén) ngay trong hPanel.
7. Xoá file `.zip` sau khi giải nén xong.
8. Truy cập domain để kiểm tra.

## Cách 2 — Upload qua FTP (phù hợp khi cập nhật thường xuyên)

1. Trong hPanel: **Files → FTP Accounts** để lấy thông tin FTP (host, username, password, port).
2. Dùng phần mềm FTP như [FileZilla](https://filezilla-project.org/) để kết nối.
3. Kéo toàn bộ **nội dung bên trong** thư mục `out/` vào thư mục `public_html` trên server (ghi đè file cũ nếu có).

## Cách 3 — Tự động deploy khi push code (GitHub Actions, khuyến nghị lâu dài)

Cách này giúp mỗi lần bạn `git push` lên GitHub, website tự động build và cập nhật lên Hostinger qua FTP — không cần upload tay.

1. Lấy thông tin FTP từ hPanel (**Files → FTP Accounts**).
2. Vào repo GitHub → **Settings → Secrets and variables → Actions → New repository secret**, tạo 3 secret:
   - `FTP_SERVER` — host FTP (ví dụ `ftp.tenmien.com`)
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. Tạo file `.github/workflows/deploy.yml` trong repo với nội dung:

```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://ten-mien-that-cua-ban.com
      - name: Upload qua FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./out/
          server-dir: ./public_html/
```

4. Commit và push file này lên GitHub — từ lần push tiếp theo, website sẽ tự động cập nhật.

> Lưu ý bảo mật: không bao giờ ghi mật khẩu FTP trực tiếp vào code hay commit — luôn dùng GitHub Secrets như trên.

## Trỏ tên miền về Hostinger

- Nếu domain mua tại Hostinger: thường tự động trỏ sẵn, chỉ cần đợi DNS cập nhật (vài phút đến vài giờ).
- Nếu domain mua ở nơi khác: vào nơi quản lý domain, sửa **Nameservers** thành nameserver của Hostinger (xem trong hPanel → **Domains → DNS**), hoặc thêm bản ghi **A record** trỏ về IP hosting Hostinger cung cấp.
- Bật **SSL miễn phí** (Let's Encrypt) trong hPanel → **SSL** để website chạy `https://`.

## Nếu sau này nâng cấp lên gói có Node.js (VPS/Cloud Hosting)

Website hiện tại build dạng static để tương thích mọi gói hosting. Nếu sau này bạn nâng cấp lên gói Hostinger có hỗ trợ Node.js (Cloud Hosting/VPS) và muốn dùng tính năng server-side (ví dụ gửi form qua email server riêng thay vì FormSubmit), có thể chuyển sang chế độ server bằng cách:

1. Mở `next.config.ts`, xoá dòng `output: "export"` và `images.unoptimized`.
2. Dùng `npm run build` rồi `npx next start` để chạy server Node.js thật, hoặc cấu hình theo hướng dẫn "Setup Node.js App" trong hPanel.

Việc này không bắt buộc — bản static hiện tại đã đáp ứng đầy đủ nhu cầu một website giới thiệu/portfolio cá nhân.
