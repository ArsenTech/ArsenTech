import SiteSection from "@/components/layout/section";
import { Skeleton } from "@/components/ui/skeleton";

export default function GiscusLoader(){
     return (
          <SiteSection className="px-0! pb-10! pt-0!" innerWidthClass="flex flex-col gap-3 items-start justify-center w-full">
               <Skeleton className="h-6 md:h-8 lg:h-10 w-45"/>
               <div className="flex items-center justify-center flex-col w-full gap-8">
                    <div className="flex flex-col justify-center items-center gap-2">
                         <Skeleton className="h-5 w-24"/>
                         <Skeleton className="size-6.5 rounded-full"/>
                    </div>
                    <div className="space-y-6 self-start w-full">
                         <Skeleton className="h-5 w-24"/>
                         <Skeleton className="h-58.5 w-full"/>
                    </div>
               </div>
          </SiteSection>
     )
}