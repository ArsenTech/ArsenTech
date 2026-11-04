import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import FallbackSearchForm from "./form"

interface NoSearchResultsProps{
     tag: string
     pageSize?: number,
}
export default function NoSearchResults({tag, pageSize}: NoSearchResultsProps){
     return (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia>
                         <p aria-label="shrug" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-muted-foreground">¯\_(ツ)_/¯</p>
                    </EmptyMedia>
                    <EmptyTitle className="text-xl md:text-2xl">No results found for {tag}</EmptyTitle>
                    <EmptyDescription>Please Try again searching with another keywords</EmptyDescription>
               </EmptyHeader>
               {!!pageSize && (
                    <FallbackSearchForm
                         pageSize={pageSize}
                         query={tag}
                    />
               )}
          </Empty>
     )
}