"use client"
import { IBlogPostBase } from "@/lib/types"
import BlogItem from "./blog/item"

export interface BlogPostsProps{
     posts: IBlogPostBase[],
     currentPage: number,
     pageSize: number,
}

export default function BlogPosts({posts}: BlogPostsProps){
     return posts.map(post=>(
          <BlogItem key={post.slug} postData={post}/>
     ))
}