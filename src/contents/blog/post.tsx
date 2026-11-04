import BlogHeader from "@/components/blog/header";
import { Badge } from "@/components/ui/badge";
import { IBlogPostBase, IBlogPostFull } from "@/lib/types/blog";
import BlogContent from "@/components/blog/content";
import PostSection from "@/sections/blog/post";
import Link from "next/link";
import { absoluteURL } from "@/lib/helpers/seo";
import { MAX_RELATED_POSTS } from "@/lib/constants";
import { PostsLoader } from "@/loaders/lists";
import dynamic from "next/dynamic";
import GiscusLoader from "@/loaders/giscus";

const BlogPosts = dynamic(() => import("@/components/lists/blog-posts"), {
     loading: () => <PostsLoader count={MAX_RELATED_POSTS} />
})
const BlogInteractions = dynamic(()=>import("@/components/blog/interactions"),{
     loading: GiscusLoader
});

interface BlogPostProps {
     postData: IBlogPostFull
     relatedPosts: IBlogPostBase[],
}
export default function BlogPost({postData, relatedPosts}: BlogPostProps){
     const {content, tags, toc} = postData;
     const blogPostData = {
          title: postData.title,
          text: postData.description,
          url: absoluteURL(`/blog/${postData.slug}`)
     }
     return (
          <main>
               <BlogHeader data={postData}/>
               <BlogContent
                    data={blogPostData}
                    mdxContent={content}
                    toc={toc}
               />
               {tags.length!==0 ? (
                    <PostSection sectionTitle="Tags">
                         <div className="flex items-center gap-2 flex-wrap">
                              {tags.slice(0,8).sort((a,b)=>a.length-b.length).map((tag,i)=>(
                                   <Badge key={`tag-${i+1}`} asChild>
                                        <Link href={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
                                   </Badge>
                              ))}
                         </div>
                    </PostSection>
               ) : null}
               {relatedPosts.length!==0 ? (
                    <PostSection sectionTitle="Related Posts">
                         <BlogPosts posts={relatedPosts}/>
                    </PostSection>
               ) : null}
               <BlogInteractions postTitle={postData.title}/>
          </main>
     )
}