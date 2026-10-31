import type { MetadataRoute } from "next";
import { absoluteURL } from "@/lib/helpers/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/categories", "/tags"],
      },
    ],
    sitemap: absoluteURL("/sitemap.xml"),
  };
}