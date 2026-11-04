import type { IBlogPostBase } from "@/lib/types/blog";
import { getBackgroundImage } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SiteSection from "@/components/site-section";
import { Calendar, Edit, User } from "lucide-react";
import { format } from "date-fns";

interface BlogHeaderProps{
     data: IBlogPostBase
}
export default function BlogHeader({data}: BlogHeaderProps){
     const {title,description,author,date,editDate} = data
     return (
          <SiteSection className="text-white flex items-center justify-center flex-col gap-5 h-screen md:h-[50vh] min-h-160 px-4 text-center" style={getBackgroundImage()}>
               <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold">{title}</h1>
               <p className="text-lg sm:text-xl">{description}</p>
               {data.categories.length!==0 ? (
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                         {data.categories.map(category=>(
                              <Badge key={category.toLowerCase()} asChild>
                                   <Link href={`/categories/${category.toLowerCase()}`}>{category}</Link>
                              </Badge>
                         ))}
                    </div>
               ) : null}
               <ul className="flex flex-col flex-wrap items-center justify-center gap-2 text-base sm:text-lg md:text-xl">
                    <li className="flex items-center gap-2.5"><User/><Link href={author.url} className="hover:underline underline-offset-4">{author.name}</Link></li>
                    <li className="flex items-center flex-col md:flex-row jusitfy-center gap-2.5 md:gap-5 flex-wrap">
                         <span className="flex items-center gap-2.5"><Calendar className="size-5"/>{format(date,"LLL do, yyyy")}</span>
                         {!!editDate && (
                              <span className="flex items-center gap-2.5"><Edit className="size-5"/>{format(editDate,"LLL do, yyyy")}</span>
                         )}
                    </li>
               </ul>
          </SiteSection>
     )
}
