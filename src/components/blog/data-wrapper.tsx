"use client"
import { useIsMobile } from "@/hooks/use-is-mobile";
import { IBlogPostData, TOCItem } from "@/lib/types";
import { useMemo, useState } from "react";
import TableOfContents from "./widget/toc";
import BlogAccessibility from "./accessibility";
import { cn } from "@/lib/utils";
import SiteSection from "../layout/section";
import { toast } from "sonner";

interface BlogControlsProps{
     toc: TOCItem[],
     children: React.ReactNode,
     metaData: IBlogPostData
}
export default function BlogDataWrapper({toc, children, metaData}: BlogControlsProps){
     const hasTOC = useMemo(()=>toc.length!==0,[toc.length])
     const isTablet = useIsMobile("tablet")
     const [isOpen, setIsOpen] = useState(false);
     const sharePost = async() => {
          try{
               await navigator.share(metaData)
               toast.success("Post shared successfully")
          } catch (err: unknown) {
               console.error(err);
               toast.error("Failed to share post");
          }
     }
     return (
          <SiteSection className="!px-0 !pt-10 !pb-0 md:!pb-10" innerWidthClass={cn(hasTOC ? "grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] gap-4" : "space-y-3")} id="blog-content">
               <TableOfContents
                    isTablet={isTablet}
                    data={toc}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    currTitle={metaData.title}
               />
               <article className={cn("prose dark:prose-invert prose-code:after:content-normal prose-code:before:content-none mt-0! relative",!hasTOC ? "max-w-full" : "max-w-5xl")}>
                    <BlogAccessibility
                         hasTOC={hasTOC}
                         currTitle={metaData.title}
                         setIsOpen={setIsOpen}
                         isTablet={isTablet}
                         onShare={sharePost}
                    />
                    <div className="px-1">
                         {children}
                    </div>
               </article>
          </SiteSection>
     )
}