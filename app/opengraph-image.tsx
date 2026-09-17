import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = SITE_NAME;
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
          background: "#fbf2e3",
          color: "#241505",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          On automatise le travail répétitif de votre entreprise avec l&apos;IA.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            fontWeight: 700,
            color: "#d62828",
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    ),
    { ...size }
  );
}
