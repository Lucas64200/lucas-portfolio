import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#cdfa4e",
          color: "#0c0d0a",
          fontSize: 18,
          fontWeight: 700,
          fontStyle: "italic",
          fontFamily: "serif",
        }}
      >
        LM
      </div>
    ),
    { ...size }
  );
}
