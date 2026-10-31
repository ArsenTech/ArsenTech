import PageLayout from "@/components/layout"
import Search from "@/components/pages/search"
import { KEYWORDS, POSTS_IN_SEARCH } from "@/lib/constants"
import { getAllCategories, getPostsByCategory } from "@/lib/helpers"
import { absoluteURL, metaAlternatives } from "@/lib/helpers/seo"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface PageProps{
     params: Promise<{category: string}>,
     searchParams: Promise<{page?: string, pageSize?:string}>
}

export const revalidate = 86400

export const generateStaticParams = async() => {
     const allCategories = await getAllCategories(POSTS_IN_SEARCH);
     return allCategories.map(category => ({category}));
}

export const generateMetadata = async({params, searchParams}: PageProps): Promise<Metadata> =>{
     const {category} = await params
     const {page, pageSize} = await searchParams;
     const categoryDecoded = decodeURIComponent(category);
     const results = await getPostsByCategory(categoryDecoded)
     if(!results) return notFound();
     const currentPage = page ? parseInt(page) : 1;
     const postsPerPage = pageSize ? parseInt(pageSize) : POSTS_IN_SEARCH;
     const totalPages = Math.ceil(results.length / postsPerPage)
     const now = new Date(), meta = {
          title: `Top ${results.length} "${categoryDecoded}" blog posts - Updated ${now.getFullYear()}`,
          description: `Explore {results.length} posts from the "${categoryDecoded}" category — from coding tutorials to tech insights`,
     }
     const ogImage = absoluteURL(`/api/og?title=${encodeURIComponent(meta.title)}&description=${encodeURIComponent(meta.description)}&date=${now.toISOString()}`)
     return {
          title: meta.title,
          description: meta.description,
          keywords: [categoryDecoded,...KEYWORDS],
          pagination: {
               previous: currentPage > 1 ? absoluteURL(`/categories/${category}?page=${currentPage - 1}`) : undefined,
               next: currentPage < totalPages ? absoluteURL(`/categories/${category}?page=${currentPage + 1}`) : undefined
          },
          openGraph: {
               title: meta.title,
               description: meta.description,
               url: absoluteURL(`/categories/${category}`),
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
          alternates: metaAlternatives(`/categories/${category}`)
     }
}

export default async function CategoriesPage({params, searchParams}: PageProps){
     const {category} = await params
     const {page, pageSize} = await searchParams;
     const currentPage = page ? parseInt(page) : 1;
     const postsPerPage = pageSize ? parseInt(pageSize) : POSTS_IN_SEARCH;
     const categoryDecoded = decodeURIComponent(category);
     const results = await getPostsByCategory(categoryDecoded)
     return (
          <PageLayout>
               <Search
                    mode="category"
                    pageSize={postsPerPage}
                    category={categoryDecoded}
                    results={results}
                    totalPages={results.length}
                    currentPage={currentPage}
               />
          </PageLayout>
     )
}