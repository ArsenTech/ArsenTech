"use client"
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogItemLoader(){
     return (
          <div className="space-y-3 pb-3 mb-3 border-b border-primary/10 last:border-b-0 last:pb-0 last:mb-0">
               <Skeleton className="w-3/4 h-9"/>
               <Skeleton className="w-full h-3"/>
               <Skeleton className="w-1/2 h-3"/>
               <div className="flex justify-between items-center gap-4">
                    <Skeleton className="h-5 w-1/2"/>
                    <Skeleton className="h-9 w-9 md:w-[132px]"/>
               </div>
          </div>
     )
}