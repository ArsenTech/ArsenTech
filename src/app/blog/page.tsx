import PageLayout from "@/components/layout";
import LandingPage from "@/components/pages/landing/blog";
import { KEYWORDS, POSTS_PER_PAGE } from "@/lib/constants";
import { getAllPosts, getCategories } from "@/lib/helpers";
import { absoluteURL, metaAlternatives } from "@/lib/helpers/seo";
import type { Metadata } from "next";

interface HomepageProps{
  searchParams: Promise<{query?: string, page?: string, pageSize?:string}>
}
export const generateMetadata = async({searchParams}: HomepageProps): Promise<Metadata> => {
  const {page, pageSize} = await searchParams;
  const currentPage = page ? parseInt(page) : 1;
  const postsPerPage = pageSize ? parseInt(pageSize) : POSTS_PER_PAGE;
  const posts = await getAllPosts();
  const totalPages = Math.ceil(posts.length / postsPerPage)
  return {
    title: "Blog",
    keywords: [...KEYWORDS, "blog", "arsentech blog", "tech blog", "coding blog"],
    openGraph: {
      title: "ArsenTech Blog",
      description: "Your go-to hub for tech tutorials, antivirus comparisons, and in-depth guides for programmers, tech enthusiasts, and more tech related curious minds.",
      url: absoluteURL("/blog"),
      siteName: "ArsenTech Blog",
      locale: "en_US",
      type: "website",
      images: {
        url: "/og-blog.png",
        width: 1200,
        height: 630
      }
    },
    twitter: {
      images: [{
        url: "/og-blog.png",
        width: 1200,
        height: 630
      }],
      card: "summary_large_image",
      title: "ArsenTech Blog",
      description: "Your go-to hub for tech tutorials, antivirus comparisons, and in-depth guides for programmers, tech enthusiasts, and more tech related curious minds.",
    },
    pagination: {
        previous: currentPage > 1 ? absoluteURL(`/blog?page=${currentPage - 1}`) : undefined,
        next: currentPage < totalPages ? absoluteURL(`/blog?page=${currentPage + 1}`) : undefined
    },
    alternates: metaAlternatives(currentPage === 1 ? "/blog" : `/blog?page=${currentPage}`)
  }
}
export default async function BlogPage({searchParams}: HomepageProps) {
  const {page, pageSize, query} = await searchParams;
  const currentPage = page ? parseInt(page) : 1;
  const postsPerPage = pageSize ? parseInt(pageSize) : POSTS_PER_PAGE;
  const posts = await getAllPosts();
  const categories = await getCategories(posts);
  return (
    <PageLayout>
      <LandingPage
        pageSize={postsPerPage}
        posts={posts}
        currentPage={currentPage}
        totalPages={posts.length}
        categories={categories}
        query={query || ""}
      />
    </PageLayout>
  );
}
