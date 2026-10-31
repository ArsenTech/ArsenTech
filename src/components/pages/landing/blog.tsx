"use client"
import { IBlogPostBase } from "@/lib/types"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rss } from "lucide-react";
import { useMemo, useState } from "react"
import { MAX_FEATURED_POSTS } from "@/lib/constants"
import dynamic from "next/dynamic"
import LandingH1 from "../../h1-animated-text";
import AppSection from "../../site-section"
import SiteSection from "../../layout/section";
import { BlogPostsProps } from "../../blog-posts";
import PostsLoader from "../../loaders/posts";
import { SearchIcon } from "lucide-react"
import { BlogWidget, BlogWidgetCard } from "../../blog/widget"
import { PaginationWithLinks } from "@/components/pagination-with-links"
import CollapsibleFilters from "../../blog/widget/filters"
import NoSearchResults from "../../shrug"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import usePaginatedData from "@/hooks/use-pagination";
import { getRangeAsText } from "@/lib/helpers/seo";

interface LandingPageProps{
     posts: IBlogPostBase[],
     totalPages: number,
     currentPage: number,
     pageSize: number,
     categories: string[],
     query: string,
}

function BlogPosts(props: BlogPostsProps) {
     const Inner = dynamic(() => import("../../blog-posts"), {
          ssr: false,
          loading: () => <PostsLoader count={props.posts.slice(
               (props.currentPage - 1) * props.pageSize,
               props.currentPage + props.pageSize
          ).length} />
     })
     return <Inner {...props} />
}

export default function LandingPage({posts, totalPages, currentPage, categories, pageSize, query}: LandingPageProps){
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
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-5 h-screen min-h-[500px] px-4 text-center" style={getBackgroundImage()}>
                    <LandingH1/>
                    <p className="text-lg sm:text-xl">Learn about cybersecurity, tech tutorials, unique coding projects, and other tech-related posts all in one place.</p>
                    <div className="flex items-center gap-2">
                         <Button size="lg" variant="alternate" asChild>
                              <Link href="#blog">Explore blog</Link>
                         </Button>
                         <Button size="icon-lg" variant="secondary" asChild>
                              <Link href="/rss.xml"><Rss/></Link>
                         </Button>
                    </div>
               </AppSection>
               {posts.length!==0 ? (
                    <SiteSection id="blog" innerWidthClass="space-y-4 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
                         <div className="space-y-5">
                              <div className="flex justify-between items-center gap-2.5 flex-wrap">
                                   <h3 className="scroll-m-20 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight border-b border-primary pb-2">{search==="" ? "Latest Posts" : "Search Results"}</h3>
                                   <p className="text-sm text-muted-foreground">
                                        {getRangeAsText(
                                             currentPage,
                                             pageSize,
                                             filteredPosts.length,
                                             "post"
                                        )}
                                   </p>
                              </div>
                              {entries.length<=0 ? (
                                   <div className="flex !mt-0 flex-col items-center justify-center gap-3 h-full w-full">
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
                                        totalCount={totalPages}
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
                              <InputGroup>
                                   <InputGroupInput type="text" placeholder="Search tutorials, coding tips..." onChange={e=>setSearch(e.target.value)} value={search}/>
                                   <InputGroupAddon>
                                        <SearchIcon/>
                                   </InputGroupAddon>
                              </InputGroup>
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