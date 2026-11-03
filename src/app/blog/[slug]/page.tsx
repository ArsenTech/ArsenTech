import PageLayout from "@/components/layout";
import BlogPost from "@/contents/blog/post";
import { KEYWORDS } from "@/lib/constants";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/helpers/blog";
import { absoluteURL, metaAlternatives } from "@/lib/helpers/seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface SinglePostPageProps{
  params: Promise<{slug: string}>
}

export const revalidate = 86400

export const generateStaticParams = async() => {
  const allSlugs = await getAllSlugs();
  return allSlugs.map(slug => ({slug: encodeURIComponent(slug)}))
}

export const generateMetadata = async({params}: SinglePostPageProps): Promise<Metadata> => {
  const {slug} = await params;
  const slugDecoded = decodeURIComponent(slug)
  const currPost = await getPostBySlug(slugDecoded);
  if(!currPost || !currPost.published) return notFound();
  return {
    title: currPost.title,
    description: currPost.description,
    keywords: [...currPost.tags,...KEYWORDS],
    authors: [
      {
        name: currPost.author.name,
        url: currPost.author.url
      },
      {
        name: "ArsenTech",
        url: "https://arsentech.github.io/"
      }
    ],
    openGraph: {
      title: currPost.title,
      description: currPost.description,
      url: absoluteURL(`/blog/${slugDecoded}`),
      siteName: "ArsenTech",
      locale: "en_US",
      type: "article",
      publishedTime: currPost.date.toISOString(),
      authors: "ArsenTech",
      tags: currPost.tags,
      images: {
        url: absoluteURL(`/api/og/${slugDecoded}`),
        width: 1200,
        height: 630
      }
    },
    twitter: {
      images: [{
        url: absoluteURL(`/api/og/${slugDecoded}`),
        width: 1200,
        height: 630
      }],
      card: "summary_large_image",
      title: currPost.title,
      description: currPost.description,
    },
    alternates: metaAlternatives(`/blog/${slugDecoded}`)
  }
}

export default async function SinglePostPage({params}: SinglePostPageProps){
  const {slug} = await params;
  const slugDecoded = decodeURIComponent(slug)
  const currPost = await getPostBySlug(slugDecoded);
  if(!currPost || !currPost.published) notFound();
  const relatedPosts = await getRelatedPosts(slugDecoded, currPost.tags)
  return (
    <PageLayout>
      <BlogPost
        postData={currPost}
        relatedPosts={relatedPosts}
      />
    </PageLayout>
  )
}