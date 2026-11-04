"use client"
import { IBlogPostBase } from "@/lib/types/blog"
import {zodResolver} from "@hookform/resolvers/zod"
import { useMemo } from "react"
import { getBackgroundImage } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import dynamic from "next/dynamic"
import AppSection from "@/components/site-section"
import { SearchIcon } from "lucide-react"
import SiteSection from "@/components/layout/section"
import { PaginationWithLinks } from "@/components/pagination-with-links"
import NoSearchResults from "@/components/shrug"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import PostsLoader from "@/components/loaders/posts"
import { getRangeAsText } from "@/lib/helpers/seo"
import usePaginatedData from "@/hooks/use-pagination"
import { Field, FieldGroup } from "@/components/ui/field"
import { SearchSchema, SearchType } from "@/lib/schemas"

const BlogPosts = dynamic(() => import("@/components/blog-posts"), {
     ssr: false,
     loading: () => <PostsLoader count={5} />
})

interface SearchPropsBase{
     results: IBlogPostBase[],
     totalPages: number,
     currentPage: number,
     pageSize: number,
     mode: "tag" | "category"
}

type SearchProps = (SearchPropsBase & {mode: "tag", tag: string}) | (SearchPropsBase & {mode: "category", category: string})

export default function Search(props: SearchProps){
     const {results, totalPages, currentPage, pageSize, mode} = props;
     const keyword = mode==="tag" ? props.tag : props.category;
     const filteredPosts = useMemo(()=>
          mode==="tag"
               ? results.filter(val=>
                    val.tags.some(keyword=>keyword.toLowerCase().includes(keyword.toLowerCase()))
               )
               : results.filter(val=>val.categories.some(c=>c.toLowerCase().includes(keyword.toLowerCase())))
     ,[results, keyword, mode])
     const router = useRouter();
     const entries = usePaginatedData(filteredPosts,currentPage,pageSize);
     const form = useForm<SearchType>({
          resolver: zodResolver(SearchSchema),
          defaultValues: { query: keyword }
     })
     function onSubmit(values: SearchType) {
          router.push(`/blog?query=${values.query}&page=1&pageSize=${pageSize}`)
     }
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-5 h-[50vh] md:h-[25vh] min-h-125 px-4 text-center" style={getBackgroundImage()}>
                    <h1 className="inline-flex justify-center items-center flex-col gap-3 text-4xl sm:text-5xl lg:text-6xl font-bold">ArsenTech&aps;s Blog page</h1>
                    <p className="text-lg sm:text-xl">
                         {mode === "tag"
                              ? `Top ${results.length} posts tagged with "${keyword}"`
                              : `Top ${results.length} posts in "${keyword}" category`}
                    </p>
               </AppSection>
               {entries.length!==0 ? (
                    <SiteSection className="min-h-[56vh]" id="search" innerWidthClass="flex flex-col items-center justify-center gap-6">
                         <form id="blog-search" onSubmit={form.handleSubmit(onSubmit)} className="w-full flex items-center gap-3">
                              <FieldGroup>
                                   <Controller
                                        control={form.control}
                                        name="query"
                                        render={({field, fieldState})=>(
                                             <Field data-invalid={fieldState.invalid}>
                                                  <InputGroup>
                                                       <InputGroupInput {...field} placeholder="Search tutorials, coding tips..." aria-invalid={fieldState.invalid}/>
                                                       <InputGroupAddon>
                                                            <SearchIcon/>
                                                       </InputGroupAddon>
                                                       <InputGroupAddon align="inline-end">
                                                            {getRangeAsText(
                                                                 currentPage,
                                                                 pageSize,
                                                                 totalPages
                                                            )}
                                                       </InputGroupAddon>
                                                  </InputGroup>
                                             </Field>
                                        )}
                                   />
                              </FieldGroup>
                         </form>
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
               ) : (
                    <SiteSection className="min-h-[50vh] flex items-center justify-center" innerWidthClass="flex flex-col items-center justify-center gap-3">
                         <NoSearchResults
                              tag={keyword}
                              form={form}
                              onSubmit={onSubmit}
                         />
                    </SiteSection>
               )}
          </main>
     )
}