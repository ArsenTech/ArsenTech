import { Skeleton } from "@/components/ui/skeleton"
import { DownloadsLoader as ListLoader } from "../lists"

export default function DownloadsLoader(){
     return (
          <>
          <div className="flex justify-center items-center flex-col gap-4">
               <Skeleton className="h-8 w-full"/>
               <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between w-full">
                    <div className="flex items-center gap-2 flex-wrap">
                         <Skeleton className="h-9 w-10"/>
                         <Skeleton className="h-9 w-40"/>
                         <Skeleton className="h-9 w-24"/>
                         <Skeleton className="h-9 w-20"/>
                    </div>
                    <Skeleton className="h-5 w-17.5"/>
               </div>
               <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between w-full">
                    <div className="flex items-center justify-center gap-3 sm:gap-2">
                         <Skeleton className="size-4 xs:size-5 sm:size-6"/>
                         <Skeleton className="h-4 xs:h-5 sm:h-6 w-90"/>
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:gap-2">
                         <Skeleton className="size-4 xs:size-5 sm:size-6"/>
                         <Skeleton className="h-4 xs:h-5 sm:h-6 w-90"/>
                    </div>
               </div>
          </div>
          <ListLoader/>
          </>
     )
}
export function WallpapersLoader(){
     return (
          <div className="flex flex-col items-center gap-2">
               <Skeleton className="w-full max-w-150 aspect-2/1"/>
               <div className="flex w-full max-w-150 items-center justify-center gap-2 flex-wrap">
                    <Skeleton className="h-8 flex-1"/>
                    <Skeleton className="h-8 flex-1"/>
                    <Skeleton className="h-8 flex-1"/>
               </div>
               <div className="flex w-full max-w-150 items-center justify-between gap-2">
                    <Skeleton className="h-5 w-105"/>
                    <div className="flex items-center justify-center gap-2">
                         <Skeleton className="size-8"/>
                         <Skeleton className="size-6"/>
                    </div>
               </div>
          </div>
     )
}