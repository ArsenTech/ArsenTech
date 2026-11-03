"use client"
import { IBlogPostBase } from "@/lib/types/blog"
import BlogItem from "./blog/item"
import { Newspaper } from "lucide-react"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "./ui/empty"

export interface BlogPostsProps{
     posts: IBlogPostBase[],
     currentPage?: number,
     pageSize?: number,
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
     return posts.map(post=>(
          <BlogItem key={post.slug} postData={post}/>
     ))
}