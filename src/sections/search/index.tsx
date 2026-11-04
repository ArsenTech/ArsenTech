"use client"
import { useMemo } from "react"
import dynamic from "next/dynamic"
import SiteSection from "@/components/layout/section"
import { PaginationWithLinks } from "@/components/pagination-with-links"
import { PostsLoader } from "@/loaders/lists"
import usePaginatedData from "@/hooks/use-pagination"
import { SearchProps } from "@/contents/search"
import { POSTS_IN_SEARCH } from "@/lib/constants"
import SearchForm from "./form"
import NoSearchResultsLoader from "@/loaders/content/no-results"

const BlogPosts = dynamic(() => import("@/components/lists/blog-posts"), {
     ssr: false,
     loading: () => <PostsLoader count={POSTS_IN_SEARCH} />
})
const NoSearchResults = dynamic(()=>import("@/components/shrug"),{
     ssr: false,
     loading: NoSearchResultsLoader
})

export default function SearchSection(props: SearchProps){
     const {results, totalPages, currentPage, pageSize, mode} = props;
     const keyword = mode==="tag" ? props.tag : props.category;
     const filteredPosts = useMemo(()=>
          mode==="tag"
               ? results.filter(val=>
                    val.tags.some(keyword=>keyword.toLowerCase().includes(keyword.toLowerCase()))
               )
               : results.filter(val=>val.categories.some(c=>c.toLowerCase().includes(keyword.toLowerCase())))
     ,[results, keyword, mode])
     const entries = usePaginatedData(filteredPosts,currentPage,pageSize);
     if(entries.length===0) return (
          <SiteSection className="min-h-[50vh] flex items-center justify-center" innerWidthClass="flex flex-col items-center justify-center gap-3">
               <NoSearchResults tag={keyword} pageSize={pageSize}/>
          </SiteSection>
     )
     return (
          <SiteSection className="min-h-[56vh]" id="search" innerWidthClass="flex flex-col items-center justify-center gap-6">
               <SearchForm
                    keyword={keyword}
                    page={currentPage}
                    totalPages={totalPages}
                    pageSize={pageSize}
               />
               <div className="space-y-5 w-full">
                    <BlogPosts posts={entries}/>
                    <PaginationWithLinks
                         page={currentPage}
                         totalCount={totalPages}
                         pageSize={pageSize}
                         pageSizeSelectOptions={{
                              pageSizeOptions: [5,10,25,50,100]
                         }}
                    />
               </div>
          </SiteSection>
     )
}