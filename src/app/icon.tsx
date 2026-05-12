import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

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
          background: "linear-gradient(135deg, #f4e0cc, #d7b17c 45%, #c78b99)",
          borderRadius: 18,
          color: "#20161b",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        LG
      </div>
    ),
    size
  );
}
