import BlogHeader from "@/components/blog/header";
import { Badge } from "@/components/ui/badge";
import BlogItem from "@/components/blog/item";
import { IBlogPostBase, IBlogPostFull } from "@/lib/types";
import BlogContent from "@/components/blog/content";
import PostSection from "@/components/blog/post-section";
import BlogInteractions from "@/components/blog/interactions";
import Link from "next/link";
import { absoluteURL } from "@/lib/helpers/seo";

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
                         <div className="space-y-4 w-full">
                              {relatedPosts.map(post=>(
                                   <BlogItem key={post.slug} postData={post}/>
                              ))}
                         </div>
                    </PostSection>
               ) : null}
               <BlogInteractions postTitle={postData.title}/>
          </main>
     )
}