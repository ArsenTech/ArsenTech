import { FilterX, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import DownloadCard from "@/components/items/download";
import { IDownloadItem } from "@/lib/types/downloads";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { useState } from "react";

interface DownloadsFilterListProps{
     downloads: IDownloadItem[],
     onClear: () => void;
}
export default function DownloadsFilterList({downloads, onClear}: DownloadsFilterListProps){
     const [shown, setShown] = useState(8)
     if(downloads.length===0) return (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <Search/>
                    </EmptyMedia>
                    <EmptyTitle>No downloads found</EmptyTitle>
                    <EmptyDescription>Try another search or select a different category.</EmptyDescription>
               </EmptyHeader>
               <EmptyContent>
                    <Button
                         variant="outline"
                         onClick={onClear}
                    >
                         <FilterX />
                         Clear filters
                    </Button>
               </EmptyContent>
          </Empty>
     )
     return (
          <>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {downloads.slice(0,shown).map(item => (
                    <DownloadCard key={item.title} data={item}/>
               ))}
          </div>
          {shown < downloads.length && (
               <Button variant="secondary" size="xl" className="mt-4" onClick={()=>setShown(prev=>prev+8)}>
                    Load More
               </Button>
          )}
          </>
     )
}