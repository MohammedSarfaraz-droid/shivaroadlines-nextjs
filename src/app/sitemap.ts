import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shivaroadlines.co.in";
  const lastModified = new Date("2026-10-12");

  const routes = [
    "",
    "/about",
    "/services",
    "/coal-tar-transportation",
    "/ethanol-transportation",
    "/lube-oil-transportation",
    "/other-services",
    "/clients",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.8,
  }));
}
