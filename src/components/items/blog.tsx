"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Edit, User } from "lucide-react";
import { format } from "date-fns";
import type { IBlogPostBase } from "@/lib/types/blog";
import { useIsMobile } from "@/hooks/use-is-mobile";

export interface BlogItemProps{
     postData: IBlogPostBase
}
export default function BlogItem({postData}: BlogItemProps){
     const {title, description, slug, date, author, editDate} = postData;
     const isMobile = useIsMobile();
     return (
          <div className="space-y-3 pb-3 mb-3 border-b border-b-accent last:border-b-0 last:pb-0 last:mb-0">
               <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:text-primary"><Link href={`/blog/${slug}`}>{title}</Link></h2>
               <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
               <div className="flex justify-between items-center gap-4 flex-wrap">
                    <p className="text-xs sm:text-sm md:text-md lg:text-base inline-flex items-center gap-5 font-medium flex-wrap">
                         <span className="inline-flex items-center gap-2"><User className="size-4 sm:size-5"/><Link className="text-foreground hover:text-primary hover:underline underline-offset-4" href={author.url}>{author.name}</Link></span>
                         <span className="inline-flex items-center gap-2"><Calendar className="size-4 sm:size-5"/>{format(date,"LLL do, yyyy")}</span>
                         {!!editDate && (
                              <span className="inline-flex items-center gap-2"><Edit className="size-4 sm:size-5"/>{format(editDate,"LLL do, yyyy")}</span>
                         )}
                    </p>
                    {!isMobile ? (
                         <Button asChild variant="ghost">
                              <Link href={`/blog/${slug}`}>Read more <ArrowRight/></Link>
                         </Button>
                    ) : (
                         <Button asChild variant="ghost" size="icon" title="Read More">
                              <Link href={`/blog/${slug}`}><ArrowRight/></Link>
                         </Button>
                    )}
               </div>
          </div>
     )
}