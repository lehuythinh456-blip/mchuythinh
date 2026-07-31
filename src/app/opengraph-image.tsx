import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#faf9f6",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, #f4ebdb 0%, rgba(244,235,219,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            fontWeight: 600,
            color: "#97682a",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 700,
            color: "#1c1917",
            lineHeight: 1,
          }}
        >
          Huy Thịnh
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#57534e",
            marginTop: 36,
            maxWidth: 820,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
