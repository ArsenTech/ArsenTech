"use client"
import { IBlogPostBase } from "@/lib/types"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, Rss } from "lucide-react";
import { useMemo, useState } from "react"
import { MAX_FEATURED_POSTS } from "@/lib/constants"
import dynamic from "next/dynamic"
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
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

interface BlogContentProps{
     posts: IBlogPostBase[],
     currentPage: number,
     pageSize: number,
     categories: string[],
     query: string,
}

function BlogPosts(props: BlogPostsProps) {
     const Inner = dynamic(() => import("@/components/blog-posts"), {
          ssr: false,
          loading: () => <PostsLoader count={props.posts.slice(
               (props.currentPage - 1) * props.pageSize,
               props.currentPage + props.pageSize
          ).length} />
     })
     return <Inner {...props} />
}

export default function BlogContent({posts, currentPage, categories, pageSize, query}: BlogContentProps){
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
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-5 h-screen min-h-125 px-4 text-center" style={getBackgroundImage()}>
                    <LandingH1 prefix="Blog Page For" texts={["Tech Fans", "Programmers", "Cybersecurity Fans", "People Finding for the Solutions"]}/>
                    <p className="text-lg sm:text-xl">Learn about cybersecurity, tech tutorials, unique coding projects, and other tech-related posts all in one place.</p>
                    <div className="flex items-center gap-2">
                         <Button size="lg" variant="alternate" asChild>
                              <Link href="#blog"><Compass/> Explore blog</Link>
                         </Button>
                         <Button size="icon-lg" variant="secondary" asChild>
                              <Link href="/rss.xml"><Rss/></Link>
                         </Button>
                    </div>
               </AppSection>
               {posts.length!==0 ? (
                    <SiteSection id="blog" innerWidthClass="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
                         <SectionTitle className="mb-5 col-span-full">{search==="" ? "Latest Posts" : "Search Results"}</SectionTitle>
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
                         <div className="space-y-4 relative lg:sticky top-0 lg:top-[85px] h-fit -order-1 lg:order-1">
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
               ) : (
                    <SiteSection>
                         <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-muted-foreground">No blog posts available yet. Check back soon!</p>
                    </SiteSection>
               )}
          </main>
     )
}