import { Empty, EmptyContent, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Skeleton } from "@/components/ui/skeleton";

export default function NoSearchResultsLoader(){
     return (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia>
                         <Skeleton className="h-18 w-77.5"/>
                    </EmptyMedia>
                    <Skeleton className="h-6 md:h-8 w-70"/>
                    <Skeleton className="h-4 w-87.5"/>
               </EmptyHeader>
               <EmptyContent>
                    <Skeleton className="h-8 w-full"/>
               </EmptyContent>
          </Empty>
     )
}