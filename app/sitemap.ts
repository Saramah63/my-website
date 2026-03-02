import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.saramahmodi.com";

  const paths = [
    "/en",
    "/en/work-with-me",
    "/en/about",
    "/en/resources",
    "/en/apply",
    "/en/privacy",
    "/en/lumi",
    "/en/digital-foundation",
    "/en/1-1",
    "/en/welcome-pack",
    "/fa",
    "/fa/work-with-me",
    "/fa/about",
    "/fa/resources",
    "/fa/apply",
    "/fa/privacy",
    "/fa/lumi",
    "/fa/digital-foundation",
    "/fa/1-1",
    "/fa/welcome-pack",
  ];

  const routes = paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "/en" || p === "/fa" ? 1 : 0.7,
  }));

  return routes;
}
