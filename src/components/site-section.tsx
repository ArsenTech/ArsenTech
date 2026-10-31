"use client"
import { cn } from "@/lib/utils";

export default function SiteSection({className, ...props}: React.ComponentProps<"section">){
     return (
          <section className={cn("pt-10 pb-14 md:pb-10",className)} {...props}/>
     )
}