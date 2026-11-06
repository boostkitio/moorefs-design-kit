import type { MetadataRoute } from "next";
import { sitePaths } from "@/lib/routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.map((path) => ({ url: `${site.url}${path}` }));
}
