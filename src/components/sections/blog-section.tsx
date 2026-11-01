import { Newspaper } from "lucide-react";
import { useMemo, useState } from "react"
import { MAX_FEATURED_POSTS, POSTS_PER_PAGE } from "@/lib/constants"
import dynamic from "next/dynamic"
import SiteSection from "@/components/layout/section";
import { BlogPostsProps } from "@/components/blog-posts";
import PostsLoader from "@/components/loaders/posts";
import { SearchIcon } from "lucide-react"
import { BlogWidget, BlogWidgetCard } from "@/components/blog/widget"
import { PaginationWithLinks } from "@/components/pagination-with-links"
import CollapsibleFilters from "@/components/blog/widget/filters"
import NoSearchResults from "@/components/shrug"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import usePaginatedData from "@/hooks/use-pagination";
import { getRangeAsText } from "@/lib/helpers/seo";
import SectionTitle from "@/components/section-title";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { IBlogPostBase } from "@/lib/types";

function BlogPosts(props: BlogPostsProps) {
     const currPage = props.currentPage ?? 1;
     const pageSize = props.pageSize ?? POSTS_PER_PAGE
     const Inner = dynamic(() => import("@/components/blog-posts"), {
          ssr: false,
          loading: () => <PostsLoader count={props.posts.slice(
               (currPage - 1) * pageSize,
               currPage + pageSize
          ).length} />
     })
     // eslint-disable-next-line react-hooks/static-components
     return <Inner {...props} />
}

interface BlogSectionProps{
     posts: IBlogPostBase[],
     currentPage: number,
     pageSize: number,
     categories: string[],
     query: string,
}
export default function BlogSection({posts, currentPage, categories, pageSize, query}: BlogSectionProps){
     const [search, setSearch] = useState(query)
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
     const featured = posts.filter(post=>post.featured).slice(0,MAX_FEATURED_POSTS);
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
          <SiteSection id="blog" innerWidthClass="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
               <SectionTitle className="mb-0 col-span-full -order-2">{search==="" ? "Latest Posts" : "Search Results"}</SectionTitle>
               <div className="space-y-5">
                    <InputGroup className="flex-1">
                         <InputGroupInput type="text" placeholder="Search tutorials, coding tips..." onChange={e=>setSearch(e.target.value)} value={search}/>
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
                         <BlogPosts
                              posts={entries}
                              currentPage={currentPage}
                              pageSize={pageSize}
                         />
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
                    {featured.length!==0 ? (
                         <BlogWidget title="Featured Posts">
                              {featured.map(post=>(
                                   <BlogWidgetCard key={post.slug} postData={post}/>
                              ))}
                         </BlogWidget>
                    ) : null}
                    <CollapsibleFilters
                         tags={categories}
                         onToggleCategory={toggleCategory}
                         selected={selected}
                    />
               </div>
          </SiteSection>
     )
}