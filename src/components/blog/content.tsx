import type { IBlogPostData, TOCItem } from "@/lib/types/blog"
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import BlogDataWrapper from "@/components/blog/data-wrapper";
import { useMDXComponents } from "@/mdx-components";

interface BlogContentProps{
     mdxContent: string,
     toc: TOCItem[],
     data: IBlogPostData
}
export default function BlogContent({mdxContent, toc, data}: BlogContentProps){
     const components = useMDXComponents({})
     return (
          <BlogDataWrapper metaData={data} toc={toc}>
               <MDXRemote
                    source={mdxContent}
                    components={components}
                    options={{
                         mdxOptions: {
                              remarkPlugins: [remarkGfm],
                              rehypePlugins: [
                                   rehypeSlug,
                                   rehypeAutolinkHeadings,
                              ],
                         }
                    }}
               />
          </BlogDataWrapper>
     )
}