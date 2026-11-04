import { MAX_FEATURED_POSTS } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function WidgetLoader({children}: {children: React.ReactNode}){
     return (
          <Card>
               <CardHeader>
                    <Skeleton className="h-4 w-1/2"/>
               </CardHeader>
               <CardContent className="space-y-4">
                    {children}
               </CardContent>
          </Card>
     )
}
export function FeaturedPostsLoader(){
     return (
          <WidgetLoader>
               {Array.from({length: MAX_FEATURED_POSTS}).map((_,i)=>(
                    <div key={`featured-${i+1}`} className="w-full space-y-1">
                         <div className="space-y-1">
                              <Skeleton className="h-4.5 w-full"/>
                              <Skeleton className="h-4.5 w-full"/>
                              <Skeleton className="h-4.5 w-1/2"/>
                         </div>
                         <div className="flex items-center gap-2 text-muted-foreground">
                              <Skeleton className="size-4"/>
                              <Skeleton className="w-28 h-4"/>
                         </div>
                    </div>
               ))}
          </WidgetLoader>
     )
}
export function FiltersLoader(){
     return (
          <WidgetLoader>
               <div className="flex items-center gap-2 flex-wrap overflow-hidden max-h-28">
                    <Skeleton className="h-5 rounded-4xl w-16"/>
                    <Skeleton className="h-5 rounded-4xl w-17.5"/>
                    <Skeleton className="h-5 rounded-4xl w-18.75"/>
                    <Skeleton className="h-5 rounded-4xl w-20"/>
                    <Skeleton className="h-5 rounded-4xl w-16"/>
                    <Skeleton className="h-5 rounded-4xl w-14"/>
                    <Skeleton className="h-5 rounded-4xl w-16"/>
                    <Skeleton className="w-28 h-5 rounded-4xl"/>
                    <Skeleton className="w-32 h-5 rounded-4xl"/>
               </div>
               <Skeleton className="h-8 w-28"/>
          </WidgetLoader>
     )
}