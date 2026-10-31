"use client"
import { useActiveHeading } from "@/hooks/use-active-heading";
import { BlogWidget } from ".";
import {TOCItem} from "@/lib/types"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef, useEffect } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

interface TableOfContentsProps{
     data: TOCItem[],
     isTablet: boolean,
     isOpen: boolean,
     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
     currTitle?: string
}
export default function TableOfContents({data, isTablet, isOpen, setIsOpen, currTitle}: TableOfContentsProps){
     const activeId = useActiveHeading(data.map(heading=>heading.id));
     const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
     useEffect(() => {
          const el = itemRefs.current[activeId ?? ""];
          if (el) {
               el.scrollIntoView({
                    block: "nearest",
                    behavior: "smooth",
               });
          }
     }, [activeId]);
     const minLevel = Math.min(...data.map((item) => item.level));
     const tocData = (
          <ScrollArea className="w-full">
               <ul className="max-h-[32vh] md:max-h-[64vh]">
                    {data.map((item) => (
                         <li
                              key={item.id}
                              className={cn("border-l-2 hover:bg-accent hover:text-accent-foreground py-1.5 pl-3 transition-colors",activeId===item.id ? "border-primary" : "border-transparent")}
                              ref={el => {
                                   itemRefs.current[item.id] = el
                              }}
                              style={{
                                   marginLeft: `${(item.level - minLevel) * 24}px`
                              }}>
                              <Link
                                   href={`#${item.id}`}
                                   onClick={()=>setIsOpen(false)}
                                   className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                              >
                                   {item.text}
                              </Link>
                         </li>
                    ))}
               </ul>
          </ScrollArea>
     )
     return !isTablet ? (
          <div className="space-y-4 relative lg:sticky mb-3 lg:mb-0 top-0 lg:top-[85px] h-fit">
               <BlogWidget title="Table of contents">
                    {tocData}
               </BlogWidget>
          </div>
     ) : (
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
               <DrawerContent>
                    <DrawerHeader>
                         <DrawerTitle>Table of contents</DrawerTitle>
                         {currTitle && (
                              <DrawerDescription>{currTitle}</DrawerDescription>
                         )}
                    </DrawerHeader>
                    {tocData}
               </DrawerContent>
          </Drawer>
     )
}