import { Skeleton } from "@/components/ui/skeleton";

export default function PaginationLoader(){
     return (
          <div className="flex flex-col md:flex-row items-center gap-3 w-full">
               <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-4">
                         <Skeleton className="h-3.5 w-full max-w-28"/>
                         <Skeleton className="h-9 w-14"/>
                    </div>
               </div>
               <div className="flex items-center gap-1 max-sm:gap-0">
                    <Skeleton className="w-25 h-9"/>
                    <Skeleton className="size-9"/>
                    <Skeleton className="size-9"/>
                    <Skeleton className="size-9"/>
                    <Skeleton className="w-18 h-9"/>
               </div>
          </div>
     )
}