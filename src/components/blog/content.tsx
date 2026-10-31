import { IBlogPostData, TOCItem } from "@/lib/types"
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import BlogDataWrapper from "./data-wrapper";
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