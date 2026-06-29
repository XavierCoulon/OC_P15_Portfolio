import { ImageResponse } from "next/og";

// Static social-share card (1200×630) generated at build time.
export const alt = "Xavier Coulon — Développeur Full Stack & Gestion de projets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fbfbfa",
        color: "#15140f",
        padding: "72px 80px",
        borderLeft: "16px solid #1f7a4d",
        fontFamily: "sans-serif",
      }}
    >
      {/* Giant faint watermark digit, like the section headings */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: 20,
          fontSize: 520,
          fontWeight: 800,
          color: "#1f7a4d",
          opacity: 0.07,
        }}
      >
        XC
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 2,
          color: "#1f7a4d",
          textTransform: "uppercase",
        }}
      >
        — Portfolio · 2026
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 600, color: "#46443c" }}>
          Xavier Coulon
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 74,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.04,
            marginTop: 12,
          }}
        >
          <div style={{ display: "flex" }}>
            Développeur Full Stack
            <span style={{ color: "#1f7a4d", marginLeft: 14 }}>&</span>
          </div>
          <div style={{ display: "flex" }}>Gestion de projets</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: 26,
          color: "#6b6a62",
        }}
      >
        <span>IA · Full Stack · AMOA · PMO</span>
        <span style={{ color: "#1f7a4d" }}>oc-p15-portfolio.vercel.app</span>
      </div>
    </div>,
    size,
  );
}
