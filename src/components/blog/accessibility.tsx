"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { MessageSquareText, Share2, TableOfContents } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

interface BlogAccessibilityProps{
     currTitle: string,
     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
     isTablet: boolean,
     hasTOC: boolean,
     onShare: () => void
}
export default function BlogAccessibility({currTitle, setIsOpen, isTablet, hasTOC, onShare}: BlogAccessibilityProps){
     const [isSticky, setIsSticky] = useState(false);
     useEffect(()=>{
          function handleScroll(this: Window) {
               setIsSticky(this.scrollY > 545)
          }
          window.addEventListener("scroll",handleScroll)
          return () => {
               window.removeEventListener("scroll",handleScroll)
          }
     },[])
     return (
          <div className={cn("sticky top-[69px] w-full not-prose py-3 mb-5 z-10 px-1.5 flex items-center justify-between gap-2 bg-background border-b transition-all",isSticky ? "border-accent" : "border-transparent")}>
               <Breadcrumb className="w-3/5">
                    <BreadcrumbList className="text-xs sm:text-sm">
                         <BreadcrumbItem>
                              <BreadcrumbLink href="/">Home</BreadcrumbLink>
                         </BreadcrumbItem>
                         <BreadcrumbSeparator/>
                         <BreadcrumbItem>
                              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                         </BreadcrumbItem>
                         <BreadcrumbSeparator/>
                         <BreadcrumbItem>
                              <BreadcrumbPage>{currTitle}</BreadcrumbPage>
                         </BreadcrumbItem>
                    </BreadcrumbList>
               </Breadcrumb>
               <div className="flex items-center justify-end gap-2 flex-wrap">
                    {(isTablet && hasTOC) && <Button variant="secondary" className="size-8 md:size-9" title="Table of Contents" onClick={()=>setIsOpen(true)}>
                         <TableOfContents/>
                    </Button>}
                    <ButtonGroup>
                         <Button variant="secondary" onClick={onShare} title="Share Post" className="size-8 md:size-9">
                              <Share2/>
                         </Button>
                         <ButtonGroupSeparator/>
                         <Button variant="secondary" asChild title="Interactions" className="size-8 md:size-9">
                              <Link href="#interactions"><MessageSquareText/></Link>
                         </Button>
                    </ButtonGroup>
               </div>
          </div>
     )
}