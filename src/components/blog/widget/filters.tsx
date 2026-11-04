"use client"
import { Badge } from "@/components/ui/badge";
import { BlogWidget } from ".";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

interface CollapsibleFiltersProps{
     tags: string[],
     onToggleCategory: (category: string) => void,
     selected?: string[]
}
export default function CollapsibleFilters({tags, onToggleCategory, selected}: CollapsibleFiltersProps){
     const [expanded, setExpanded] = useState(false);
     const containerRef = useRef<HTMLDivElement>(null);
     const [isOverflowing, setIsOverflowing] = useState(false)

     useEffect(()=>{
          const el = containerRef.current;
          if(el){
               setIsOverflowing(el.scrollHeight>el.clientHeight)
          }
     },[tags])

     return tags.length!==0 ? (
          <BlogWidget title="Filters">
               <div ref={containerRef} className={cn("flex items-center gap-2 flex-wrap overflow-hidden transition-all",expanded ? "max-h-full" : "max-h-28")}>
                    {tags.map(category=>(
                         <Badge
                              className="cursor-pointer" 
                              key={category.toLowerCase()} 
                              onClick={()=>onToggleCategory(category)}
                              variant={selected && selected.includes(category) ? "default" : "secondary"}
                         >
                              {category}
                         </Badge>
                    ))}
               </div>
               {isOverflowing && (
                    <Button variant="ghost" onClick={()=>setExpanded(!expanded)}>See {expanded ? "less" : "more"} {expanded ? <ChevronUp/> : <ChevronDown/>}</Button>
               )}
          </BlogWidget>
     ) : null
}