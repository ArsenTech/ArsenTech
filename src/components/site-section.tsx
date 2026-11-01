"use client"
import { cn } from "@/lib/utils";

export default function SiteSection({className, ...props}: React.ComponentProps<"section">){
     return (
          <section className={cn("p-12",className)} {...props}/>
     )
}