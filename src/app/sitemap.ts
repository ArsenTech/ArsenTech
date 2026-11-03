import { SITE_URL } from "@/lib/constants";
import { getAllCategories, getAllSlugs, getAllTags, getPostBySlug } from "@/lib/helpers/blog";
import { absoluteURL } from "@/lib/helpers/seo";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
     const allTags = await getAllTags();
     const allSlugs = await getAllSlugs();
     const allCategories = await getAllCategories();
     const now = new Date();
     const searchTagPages: MetadataRoute.Sitemap = allTags.map(tag=>({
          url: absoluteURL(`/tags/${encodeURIComponent(tag)}`),
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7
     }))
     const searchCategoryPages: MetadataRoute.Sitemap = allCategories.map(category=>({
          url: absoluteURL(`/categories/${encodeURIComponent(category)}`),
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7
     }))
     const searchPostPages: MetadataRoute.Sitemap = await Promise.all(allSlugs.map(async slug=>{
          const post = await getPostBySlug(slug)
          return {
               url: absoluteURL(`/blog/${encodeURIComponent(slug)}`),
               lastModified: post?.editDate ?? now,
               changeFrequency: "daily",
               priority: 0.8,
               images: post ? [absoluteURL(`/api/og/${slug}`)] : undefined
          }
     }))
     const latestDate = searchPostPages.length>0 ? new Date(Math.max(...searchPostPages.map(p => new Date(p.lastModified as string).getTime()))) : now
     return [
          {
               url: SITE_URL,
               lastModified: latestDate,
               changeFrequency: "monthly",
               priority: 1,
               images: [absoluteURL("/og.png")]
          },
          {
               url: absoluteURL("/downloads"),
               lastModified: latestDate,
               changeFrequency: "monthly",
               priority: 0.8,
               images: [absoluteURL("/og.png")]
          },
          {
               url: absoluteURL("/blog"),
               lastModified: latestDate,
               changeFrequency: "weekly",
               priority: 0.8,
               images: [absoluteURL("/og-blog.png")]
          },
          ...searchPostPages,
          ...searchTagPages,
          ...searchCategoryPages
     ]
}
