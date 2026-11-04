"use client"
import { IBlogPostBase } from "@/lib/types/blog"
import { getBackgroundImage } from "@/lib/utils"
import AppSection from "@/components/site-section"
import { SearchContentLoader } from "@/components/loaders/content/blog"
import dynamic from "next/dynamic"

const SearchSection = dynamic(()=>import("@/sections/search"),{
     loading: SearchContentLoader
})

interface SearchPropsBase{
     results: IBlogPostBase[],
     totalPages: number,
     currentPage: number,
     pageSize: number,
     mode: "tag" | "category"
}

export type SearchProps = (SearchPropsBase & {mode: "tag", tag: string}) | (SearchPropsBase & {mode: "category", category: string})

export default function Search(props: SearchProps){
     const {results, mode} = props;
     const keyword = mode==="tag" ? props.tag : props.category;
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-5 h-[50vh] md:h-[25vh] min-h-125 px-4 text-center" style={getBackgroundImage()}>
                    <h1 className="inline-flex justify-center items-center flex-col gap-3 text-4xl sm:text-5xl lg:text-6xl font-bold">ArsenTech&apos;s Blog page</h1>
                    <p className="text-lg sm:text-xl">
                         {mode === "tag"
                              ? `Top ${results.length} posts tagged with "${keyword}"`
                              : `Top ${results.length} posts in "${keyword}" category`}
                    </p>
               </AppSection>
               <SearchSection {...props}/>
          </main>
     )
}