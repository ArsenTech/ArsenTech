"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import BlogPosts from "@/components/blog-posts";
import { IBlogPostBase } from "@/lib/types/blog";

interface RecentPostsSectionProps{
     posts: IBlogPostBase[]
}
export default function RecentPostsSection({posts}: RecentPostsSectionProps){
     return (
          <SiteSection id="blog">
               <SectionTitle>Recent posts</SectionTitle>
               <BlogPosts posts={posts}/>
               {posts.length > 0 && (
                    <Button size="xl" variant="secondary" asChild>
                         <Link href="/blog#blog">
                              More Posts
                              <ArrowRight />
                         </Link>
                    </Button>
               )}
          </SiteSection>
     )
}