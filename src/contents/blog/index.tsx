"use client"
import { IBlogPostBase } from "@/lib/types/blog"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, Rss } from "lucide-react";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import { useState } from "react";
import BlogContentLoader from "@/loaders/content/blog";
import dynamic from "next/dynamic";

const BlogSectionContent = dynamic(()=>import("@/sections/blog"),{
     loading: BlogContentLoader
});

interface BlogContentProps{
     posts: IBlogPostBase[],
     currentPage: number,
     pageSize: number,
     categories: string[],
     query: string,
}

export default function BlogContent({query,...props}: BlogContentProps){
     const [search, setSearch] = useState(query)
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
               <SiteSection id="blog" innerWidthClass="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
                    <SectionTitle className="mb-0 col-span-full -order-2">{search==="" ? "Latest Posts" : "Search Results"}</SectionTitle>
                    <BlogSectionContent
                         {...props}
                         search={search}
                         onSearch={setSearch}
                    />
               </SiteSection>
          </main>
     )
}