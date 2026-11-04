
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { IDownloadItem } from "@/lib/types/downloads"
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { getDownloadUrl } from "@/lib/helpers/downloads"

interface DownloadCardProps {
     data: IDownloadItem
}
export default function DownloadCard({data,}: DownloadCardProps) {
     const [menuOpen, setMenuOpen] = useState(false)
     const buttonClass = "border-primary! bg-primary/20! hover:bg-primary/40!"
     const hasMultipleFiles = data.type !== "external" && !!data.files?.length
     return (
          <div data-menu-open={menuOpen} style={{ backgroundImage: `url("${data.thumbnail}")` }} className="group relative h-96 w-full overflow-hidden rounded-2xl bg-cover bg-center text-card-foreground transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105 focus-within:z-10 focus-within:scale-105 data-[menu-open=true]:z-20 data-[menu-open=true]:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 shadow-md">
               <div className="absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent via-card/65 via-10% to-card p-5">
                    <h2 className="relative mb-0 w-fit max-w-full text-xl font-semibold after:absolute after:-bottom-1.5 after:left-[-1.3rem] after:h-1 after:w-[calc(100%+1.6rem)] after:bg-primary after:origin-left after:content-[''] after:transition-transform after:duration-300 [@media(hover:hover)]:after:scale-x-0 group-hover:after:scale-x-100 group-focus-within:after:scale-x-100 group-data-[menu-open=true]:after:scale-x-100 motion-reduce:after:transition-none">{data.title}</h2>
                    <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out [@media(hover:hover)]:grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] group-data-[menu-open=true]:grid-rows-[1fr] motion-reduce:transition-none">
                         <div className="min-h-0 overflow-hidden">
                              <p className="my-5 line-clamp-4 text-card-foreground/90">{data.description}</p>
                              {hasMultipleFiles ? (
                                   <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                                        <DropdownMenuTrigger asChild>
                                             <Button variant="outline" size="lg" className={buttonClass}>
                                                  <Download className="size-5" />
                                                  Download
                                             </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent side="top" align="start" sideOffset={8} collisionPadding={12} className="z-50 min-w-48">
                                        <DropdownMenuLabel>Version / Type</DropdownMenuLabel>
                                             {data.files!.map((file) => (
                                                  <DropdownMenuItem key={`${file.name}-${file.path}`} asChild>
                                                       <a href={getDownloadUrl(file.path,file.isRelease)} target="_blank" rel="noopener noreferrer"
                                                       >
                                                            <Download className="size-4" />
                                                            {file.name}
                                                       </a>
                                                  </DropdownMenuItem>
                                             ))}
                                        </DropdownMenuContent>
                                   </DropdownMenu>
                              ) : data.type === "external" ? (
                                   <Button asChild variant="outline" size="lg" className={buttonClass} >
                                        <a href={data.path} target="_blank" rel="noopener noreferrer">
                                             <ExternalLink className="size-5" />
                                             Download
                                        </a>
                                   </Button>
                              ) : (
                                   <Button asChild variant="outline" size="lg" className={buttonClass} >
                                        <a href={getDownloadUrl(data.path,data.isRelease)} target="_blank" rel="noopener noreferrer">
                                             <Download className="size-5" />
                                             Download
                                        </a>
                                   </Button>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     )
}