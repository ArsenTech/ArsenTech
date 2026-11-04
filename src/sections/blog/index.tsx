import { Newspaper } from "lucide-react";
import { useMemo, useState } from "react"
import { MAX_FEATURED_POSTS, POSTS_PER_PAGE } from "@/lib/constants"
import dynamic from "next/dynamic"
import SiteSection from "@/components/layout/section";
import { PostsLoader } from "@/loaders/lists";
import { SearchIcon } from "lucide-react"
import { PaginationWithLinks } from "@/components/pagination-with-links"
import NoSearchResults from "@/components/shrug"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import usePaginatedData from "@/hooks/use-pagination";
import { getRangeAsText } from "@/lib/helpers/seo";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { IBlogPostBase } from "@/lib/types/blog";
import { FiltersLoader, FeaturedPostsLoader } from "@/loaders/widgets";

const BlogPosts = dynamic(() => import("@/components/lists/blog-posts"), {
     ssr: false,
     loading: () => <PostsLoader count={POSTS_PER_PAGE} />
})
const FeaturedPosts = dynamic(()=>import("@/components/blog/widget/featured"),{
     ssr: false,
     loading: FeaturedPostsLoader
});
const CollapsibleFilters = dynamic(()=>import("@/components/blog/widget/filters"),{
     ssr: false,
     loading: FiltersLoader
})

interface BlogSectionProps{
     posts: IBlogPostBase[],
     currentPage: number,
     pageSize: number,
     categories: string[],
     search: string,
     onSearch: (value: string) => void
}
export default function BlogSectionContent({posts, currentPage, categories, pageSize, search, onSearch}: BlogSectionProps){
     const [selected, setSelected] = useState<string[]>([])
     const filteredPosts = useMemo(()=>{
          const currPosts = posts.filter(val=>
               val.title.toLowerCase().includes(search.toLowerCase()) ||
               val.tags.some(tag=>tag.toLowerCase().includes(search.toLowerCase())) ||
               val.description.toLowerCase().includes(search.toLowerCase())
          )
          const flairFilters = (selected && selected.length!==0)
               ? currPosts.filter(post=>
                    selected.every(category=>
                         post.categories.includes(category)
                    )
               ): currPosts;
          return flairFilters;
     },[search,posts,selected])
     const entries = usePaginatedData(filteredPosts,currentPage,pageSize);
     const toggleCategory = (category: string) => setSelected(prev=>prev?.includes(category) ? prev.filter(val=>val!==category) : [...(prev||[]),category])

     if(posts.length===0) return (
          <SiteSection id="blog">
               <Empty>
                    <EmptyHeader>
                         <EmptyMedia variant="icon">
                              <Newspaper/>
                         </EmptyMedia>
                         <EmptyTitle>No blog posts available yet</EmptyTitle>
                         <EmptyDescription>Check back soon!</EmptyDescription>
                    </EmptyHeader>
               </Empty>
          </SiteSection>
     )
     
     return (
          <>
               <div className="space-y-5">
                    <InputGroup className="flex-1">
                         <InputGroupInput type="text" placeholder="Search tutorials, coding tips..." onChange={e=>onSearch(e.target.value)} value={search}/>
                         <InputGroupAddon>
                              <SearchIcon/>
                         </InputGroupAddon>
                         <InputGroupAddon align="inline-end">
                              <p className="text-sm text-muted-foreground">
                                   {getRangeAsText(
                                        currentPage,
                                        pageSize,
                                        filteredPosts.length,
                                        "post"
                                   )}
                              </p>
                         </InputGroupAddon>
                    </InputGroup>
                    {entries.length<=0 ? (
                         <div className="flex mt-0! flex-col items-center justify-center gap-3 h-full w-full">
                              <NoSearchResults tag={search}/>
                         </div>
                    ) : (
                         <>
                         <BlogPosts posts={entries}/>
                         <PaginationWithLinks
                              page={currentPage}
                              totalCount={filteredPosts.length}
                              pageSize={pageSize}
                              navigationMode="link"
                              pageSizeSelectOptions={{
                                   pageSizeOptions: [5,10,25,50,100]
                              }}
                         />
                         </>
                    )}
               </div>
               <div className="space-y-4 relative lg:sticky top-0 lg:top-21.25 h-fit -order-1 lg:order-1">
                    <FeaturedPosts posts={posts.filter(post=>post.featured).slice(0,MAX_FEATURED_POSTS)}/>
                    <CollapsibleFilters
                         tags={categories}
                         onToggleCategory={toggleCategory}
                         selected={selected}
                    />
               </div>
          </>
     )
}