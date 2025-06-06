import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "로나보드",
    short_name: "로나보드",
    description: "라디언트4 통제,공지 통합 정보판",
    start_url: "/",
    display: "standalone",
    background_color: "#232323",
    theme_color: "#232323",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
