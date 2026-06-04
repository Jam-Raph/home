import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/features",
  "/faq",
  "/form-filler",
  "/security",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${SITE_CONFIG.domain}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
