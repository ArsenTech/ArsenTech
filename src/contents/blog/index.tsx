"use client"
import { IBlogPostBase } from "@/lib/types/blog"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, Rss } from "lucide-react";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import BlogSection from "@/sections/blog-section";

interface BlogContentProps{
     posts: IBlogPostBase[],
     currentPage: number,
     pageSize: number,
     categories: string[],
     query: string,
}

export default function BlogContent(props: BlogContentProps){
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
               <BlogSection {...props}/>
          </main>
     )
}