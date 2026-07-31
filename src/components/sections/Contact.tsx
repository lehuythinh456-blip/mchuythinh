"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { FacebookIcon, TikTokIcon } from "../icons/SocialIcons";
import { site } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="lien-he" className="py-20 sm:py-28 bg-background-alt">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Liên hệ hợp tác"
            title="Cùng lên ý tưởng cho chương trình tiếp theo"
            description="Để lại thông tin hoặc liên hệ trực tiếp, tôi sẽ phản hồi sớm nhất có thể."
          />

          <div className="flex flex-col gap-5">
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent transition-colors duration-200"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-foreground-soft">Hotline</span>
                <span className="font-medium text-foreground">{site.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent transition-colors duration-200"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-foreground-soft">Email</span>
                <span className="font-medium text-foreground">{site.email}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-foreground-soft">Khu vực hoạt động</span>
                <span className="font-medium text-foreground">{site.region}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center size-11 rounded-full border border-border text-foreground-soft hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex items-center justify-center size-11 rounded-full border border-border text-foreground-soft hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <TikTokIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <input type="hidden" name="_subject" value="Yêu cầu hợp tác từ website Huy Thịnh" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-foreground">Họ và tên</span>
              <input
                required
                name="name"
                type="text"
                placeholder="Nguyễn Văn A"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-soft/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-200"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-foreground">Số điện thoại / Email</span>
              <input
                required
                name="contact"
                type="text"
                placeholder="0901 234 567"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-soft/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-200"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">Loại hình hợp tác</span>
            <select
              name="type"
              defaultValue="Sự kiện"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-200"
            >
              <option>Sự kiện / Truyền hình</option>
              <option>Host Livestream</option>
              <option>Voice Talent</option>
              <option>Đào tạo</option>
              <option>Khác</option>
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">Nội dung</span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Chia sẻ ngắn gọn về chương trình / sản phẩm của bạn..."
              className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-soft/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-200"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:bg-accent transition-colors duration-200 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Đang gửi...
              </>
            ) : (
              "Gửi yêu cầu hợp tác"
            )}
          </button>

          {status === "success" ? (
            <p className="flex items-center gap-2 text-sm text-emerald-700" role="status">
              <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
              Cảm ơn bạn! Yêu cầu đã được gửi, tôi sẽ liên hệ lại sớm nhất.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-700" role="alert">
              Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ trực tiếp qua hotline/email bên trên.
            </p>
          ) : null}
        </form>
      </Container>
    </section>
  );
}
