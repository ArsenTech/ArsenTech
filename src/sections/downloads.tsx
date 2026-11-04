import { Download, ExternalLink, Search, X } from "lucide-react";
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { DownloadCategory, IDownloadItem } from "@/lib/types/downloads";
import { DownloadsLoader } from "@/loaders/lists";
import dynamic from "next/dynamic";

const DownloadsFilterList = dynamic(()=>import("@/components/lists/downloads"),{
     ssr: false,
     loading: DownloadsLoader
});

interface DownloadsSectionProps{
     list: IDownloadItem[]
}
export default function DownloadsSectionContent({list}: DownloadsSectionProps){
     const [search, setSearch] = useState("");
     const [category, setCategory] = useState<DownloadCategory | "">("");
     const filteredDownloads = useMemo(() => {
          const query = search.trim().toLowerCase()
          return list.filter((item) => {
               const matchesCategory = category === "" || item.category === category
               const matchesSearch = query === "" || [
                    item.title,
                    item.description,
                    ...(item.files?.map(file => file.name) ?? []),
               ].some(value =>value.toLowerCase().includes(query))
               return matchesCategory && matchesSearch
          })
     }, [search, category, list])
     return (
          <>
               <div className="flex justify-center items-center flex-col gap-4">
                    <InputGroup>
                         <InputGroupInput type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." />
                         <InputGroupAddon>
                              <Search />
                         </InputGroupAddon>
                         {search.trim()!=="" && (
                              <InputGroupAddon align="inline-end">
                                   <InputGroupButton type="button" onClick={()=>setSearch("")}>
                                        <X/>
                                   </InputGroupButton>
                              </InputGroupAddon>
                         )}
                    </InputGroup>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between w-full">
                         <div className="flex items-center gap-2 flex-wrap">
                              <Button onClick={()=>setCategory("")} variant={category==="" ? "default" : "secondary"} className="flex-1" size="lg">All</Button>
                              <Button onClick={()=>setCategory("microsoft")} variant={category==="microsoft" ? "default" : "secondary"} className="flex-1" size="lg">Windows & MS-DOS</Button>
                              <Button onClick={()=>setCategory("software")} variant={category==="software" ? "default" : "secondary"} className="flex-1" size="lg">Software</Button>
                              <Button onClick={()=>setCategory("updates")} variant={category==="updates" ? "default" : "secondary"} className="flex-1" size="lg">Updates</Button>
                         </div>
                         <p role="status" className="text-sm text-muted-foreground">
                              {filteredDownloads.length}{" "}
                              {filteredDownloads.length === 1 ? "result" : "results"}
                         </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between w-full">
                         <div className="flex items-center justify-center gap-3 sm:gap-2">
                              <ExternalLink className="size-4 xs:size-5 sm:size-6"/>
                              <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Redirects to an external source for download.</p>
                         </div>
                         <div className="flex items-center justify-center gap-3 sm:gap-2">
                              <Download className="size-4 xs:size-5 sm:size-6"/>
                              <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Downloads directly from ArsenTech&apos;s GitHub</p>
                         </div>
                    </div>
               </div>
               <DownloadsFilterList
                    downloads={filteredDownloads}
                    onClear={()=>{
                         setSearch("")
                         setCategory("")
                    }}
               />
          </>
     )
}