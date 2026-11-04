import type { IBlogPostBase } from "@/lib/types/blog";
import { BlogWidget, BlogWidgetCard } from ".";

interface FeaturedPostsProps{
     posts: IBlogPostBase[]
}
export default function FeaturedPosts({posts}: FeaturedPostsProps){
     if (posts.length===0) return null;
     return (
          <BlogWidget title="Featured Posts">
               {posts.map(post=>(
                    <BlogWidgetCard key={post.slug} postData={post}/>
               ))}
          </BlogWidget>
     )
}