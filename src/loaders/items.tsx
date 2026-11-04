
import { Skeleton } from "@/components/ui/skeleton";

export function BlogItemLoader(){
     return (
          <div className="space-y-3 pb-3 mb-3 border-b border-primary/10 last:border-b-0 last:pb-0 last:mb-0">
               <Skeleton className="w-3/4 h-9"/>
               <Skeleton className="w-full h-3"/>
               <Skeleton className="w-1/2 h-3"/>
               <div className="flex justify-between items-center gap-4">
                    <Skeleton className="h-5 w-1/2"/>
                    <Skeleton className="h-9 w-9 md:w-33"/>
               </div>
          </div>
     )
}

export function WorkCardLoader(){
     return (
          <div className="flex h-full flex-col items-center gap-3 rounded-md border bg-card p-7 text-card-foreground shadow-md transition-all sm:items-start">
               <Skeleton className="size-10"/>
               <Skeleton className="w-1/2 h-5 md:h-6"/>
               <div className="space-y-0.5 w-full">
                    <Skeleton className="w-full h-3 md:h-3.5"/>
                    <Skeleton className="w-full h-3 md:h-3.5"/>
                    <Skeleton className="w-3/4 h-3 md:h-3.5"/>
               </div>
               <Skeleton className="h-8 w-31"/>
          </div>
     )
}

export function ProjectCardLoader(){
     return (
          <div className="flex justify-between flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] pb-0 pt-0 rounded-t-xl">
               <Skeleton className="w-full aspect-video"/>
               <div className="w-full grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) grid-cols-[1fr_auto] grid-rows-[auto_auto]">
                    <Skeleton className="h-5 w-full"/>
                    <Skeleton className="col-start-2 row-span-2 row-start-1 self-start justify-self-end rounded-4xl w-24 h-5"/>
                    <div className="space-y-0.5 w-full col-span-2">
                         <Skeleton className="h-3.5 w-3/4"/>
                         <Skeleton className="h-3.5 w-full"/>
                         <Skeleton className="h-3.5 w-1/2"/>
                    </div>
               </div>
               <div className="flex items-center gap-2 flex-wrap w-full rounded-b-xl border-t border-muted p-(--card-spacing)">
                    <Skeleton className="flex-1 h-8"/>
                    <Skeleton className="flex-1 h-8"/>
               </div>
          </div>
     )
}
export function DownloadCardLoader(){
     return (
          <div className="border-2 border-muted animate-pulse h-96 w-full bg-linear-to-b from-muted via-transparent to-transparent rounded-2xl relative">
               <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-md bg-muted h-5 w-3/4"/>
                    <div className="grid grid-rows-[1fr] [@media(hover:hover)]:grid-rows-[0fr] motion-reduce:transition-none">
                         <div className="min-h-0 overflow-hidden">
                              <div className="my-5 space-y-1 w-full col-span-2">
                                   <div className="rounded-md bg-muted h-3.5 w-full"/>
                                   <div className="rounded-md bg-muted h-3.5 w-1/2"/>
                              </div>
                              <div className="rounded-md bg-muted w-32 h-8"/>
                         </div>
                    </div>
               </div>
          </div>
     )
}