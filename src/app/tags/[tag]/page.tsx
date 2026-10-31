import PageLayout from "@/components/layout"
import Search from "@/components/pages/search"
import { KEYWORDS, POSTS_IN_SEARCH } from "@/lib/constants"
import { getAllTags, getPostsByTag } from "@/lib/helpers"
import { absoluteURL, metaAlternatives } from "@/lib/helpers/seo"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface PageProps{
     params: Promise<{tag: string}>,
     searchParams: Promise<{page?: string, pageSize?:string}>
}

export const revalidate = 86400

export const generateStaticParams = async() => {
     const allTags = await getAllTags(POSTS_IN_SEARCH);
     return allTags.map(tag => ({tag}))
}

export const generateMetadata = async({params, searchParams}: PageProps): Promise<Metadata> =>{
     const {tag} = await params
     const {page, pageSize} = await searchParams;
     const tagDecoded = decodeURIComponent(tag)
     const results = await getPostsByTag(tagDecoded)
     if(!results) return notFound();
     const currentPage = page ? parseInt(page) : 1;
     const postsPerPage = pageSize ? parseInt(pageSize) : POSTS_IN_SEARCH;
     const totalPages = Math.ceil(results.length / postsPerPage)
     const now = new Date(), meta = {
          title: `Top ${results.length} posts tagged with "${tagDecoded}" - Updated ${now.getFullYear()}`,
          description: `Explore ${results.length} blog posts tagged with "${tagDecoded}" — from coding tutorials to tech insights`,
     }
     const ogImage = absoluteURL(`/api/og?title=${encodeURIComponent(meta.title)}&description=${encodeURIComponent(meta.description)}&date=${now.toISOString()}`)
     return {
          title: meta.title,
          description: meta.description,
          keywords: [tagDecoded,...KEYWORDS],
          pagination: {
               previous: currentPage > 1 ? absoluteURL(`/tags/${tag}?page=${currentPage - 1}`) : undefined,
               next: currentPage < totalPages ? absoluteURL(`/tags/${tag}?page=${currentPage + 1}`) : undefined
          },
          openGraph: {
               title: meta.title,
               description: meta.description,
               url: absoluteURL(`/tags/${tag}`),
               siteName: "ArsenTech Blog",
               locale: "en_US",
               type: "website",
               images: {
                    url: ogImage,
                    width: 1200,
                    height: 630
               }
          },
          twitter: {
               images: [{
                    url: ogImage,
                    width: 1200,
                    height: 630
               }],
               card: "summary_large_image",
               title: meta.title,
               description: meta.description,
          },
          alternates: metaAlternatives(`/tags/${tag}`)
     }
}

export default async function TagsPage({params, searchParams}: PageProps){
     const {tag} = await params
     const {page, pageSize} = await searchParams;
     const currentPage = page ? parseInt(page) : 1;
     const postsPerPage = pageSize ? parseInt(pageSize) : POSTS_IN_SEARCH;
     const tagDecoded = decodeURIComponent(tag)
     const results = await getPostsByTag(tagDecoded);
     return (
          <PageLayout>
               <Search
                    mode="tag"
                    pageSize={postsPerPage}
                    tag={tagDecoded}
                    results={results}
                    totalPages={results.length}
                    currentPage={currentPage}
               />
          </PageLayout>
     )
}