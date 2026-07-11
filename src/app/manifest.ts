import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return {
    name: "Portafolio de Angel Santana",
    short_name: "Angel Santana",

    description:
      "Portafolio profesional de Angel Santana, Ingeniero en Software, Mobile App Developer y Full-Stack Developer.",

    start_url: `${basePath}/`,

    display: "standalone",

    background_color: "#f7f7f8",
    theme_color: "#111111",

    icons: [
      {
        src: `${basePath}/icons/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${basePath}/icons/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
