import { Skeleton } from "@/components/ui/skeleton"
import { Dot } from "lucide-react"

function ChannelCardLoader(){
     return (
          <div className="flex w-full flex-wrap items-center rounded-lg border text-sm outline-none border-muted px-3 py-2.5 gap-4">
               <div className="flex shrink-0 items-center justify-center gap-2 translate-y-0.5 self-start">
                    <Skeleton className="size-20 rounded-full"/>
               </div>
               <div className="flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none">
                    <Skeleton className="h-9 w-1/3"/>
                    <div className="space-y-1 w-full">
                         <Skeleton className="h-3 sm:h-4 md:h-5 w-full"/>
                         <Skeleton className="h-3 sm:h-4 md:h-5 w-1/2"/>
                    </div>
               </div>
               <Skeleton className="h-8 w-30"/>
          </div>
     )
}
export function SkillsLoader(){
     return (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
               {Array.from({length: 6}).map((_,i)=>(
                    <div key={`skill-${i+1}`} className="space-y-4">
                         <div className="flex justify-between items-center gap-2">
                              <Skeleton className="w-1/3 h-5"/>
                              <Skeleton className="w-9 h-5"/>
                         </div>
                         <Skeleton className="h-1.5 w-full rounded-full"/>
                    </div>
               ))}
          </div>
     )
}
export default function AboutLoader(){
     return (
          <>
          <div className="flex items-center flex-wrap gap-5 md:gap-10 w-full">
               <Skeleton className="size-50 rounded-full aspect-square object-center mx-auto md:mx-0"/>
               <div className="w-full md:flex-1 text-center md:text-left space-y-2.5">
                    <Skeleton className="w-1/4 h-8"/>
                    <div className="flex items-center justify-center md:justify-start gap-2.5 font-semibold">
                         <Skeleton className="w-28 h-5"/>
                         <Dot className="size-5 text-muted animate-pulse"/>
                         <Skeleton className="w-20 h-5"/>
                    </div>
                    <div className="space-y-1 w-full">
                         <Skeleton className="w-full h-4 md:h-5 block md:hidden"/>
                         <Skeleton className="w-full h-4 md:h-5 block md:hidden"/>
                         <Skeleton className="w-full h-4 md:h-5"/>
                         <Skeleton className="w-full h-4 md:h-5"/>
                         <Skeleton className="w-3/4 h-4 md:h-5"/>
                    </div>
               </div>
          </div>
          <SkillsLoader/>
          <div className="flex flex-col gap-3 items-center justify-center mt-5">
               <Skeleton className="w-1/3 md:w-1/4 h-8"/>
               <ChannelCardLoader/>
               <ChannelCardLoader/>
               <ChannelCardLoader/>
          </div>
          </>
     )
}