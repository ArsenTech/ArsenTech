"use client"
import { IBlogPostBase } from "@/lib/types/blog"
import BlogItem from "../items/blog"
import { Newspaper } from "lucide-react"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "../ui/empty"

interface BlogPostsProps{
     posts: IBlogPostBase[],
}

export default function BlogPosts({posts}: BlogPostsProps){
     if(posts.length===0) return (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <Newspaper/>
                    </EmptyMedia>
                    <EmptyTitle>No blog posts available yet</EmptyTitle>
                    <EmptyDescription>Check back soon!</EmptyDescription>
               </EmptyHeader>
          </Empty>
     )
     return (
          <div className="space-y-4 w-full">
               {posts.map(post=>(
                    <BlogItem key={post.slug} postData={post}/>
               ))}
          </div>
     ) 
}