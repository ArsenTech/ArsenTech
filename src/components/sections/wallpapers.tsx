
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { AlertTriangleIcon, Download } from "lucide-react";
import { SiDeviantart } from "react-icons/si";

// TODO: Make it work
export default function WallpapersSection(){
     return (
          <SiteSection id="wallpapers" className="bg-card text-card-foreground">
               <SectionTitle surface="card">Wallpapers</SectionTitle>
               <div className="flex items-center justify-center gap-2 flex-col">
                    <Image
                         src="/downloads/blank.webp"
                         alt="preview"
                         width={600}
                         height={300}
                         className="rounded-md"
                    />
                    <div className="flex w-full max-w-150 items-center justify-center gap-2">
                         <Select>
                              <SelectTrigger className="flex-1">
                                   <SelectValue placeholder="Choose a wallpaper"/>
                              </SelectTrigger>
                              <SelectContent side="top" align="start">
                                   <SelectGroup>
                                        <SelectLabel>Coding Language here</SelectLabel>
                                        <SelectItem value="w1">Wallpaper 1</SelectItem>
                                        <SelectItem value="w1">Wallpaper 2</SelectItem>
                                   </SelectGroup>
                                   <SelectSeparator/>
                                   <SelectGroup>
                                        <SelectLabel>Coding Language here</SelectLabel>
                                        <SelectItem value="w1">Wallpaper 1</SelectItem>
                                        <SelectItem value="w1">Wallpaper 2</SelectItem>
                                   </SelectGroup>
                              </SelectContent>
                         </Select>
                         <Select>
                              <SelectTrigger className="flex-1">
                                   <SelectValue placeholder="Choose a size"/>
                              </SelectTrigger>
                              <SelectContent side="top" align="start">
                                   <SelectGroup>
                                        <SelectLabel>Desktop</SelectLabel>
                                        <SelectItem value="s1">Size X Size 1</SelectItem>
                                        <SelectItem value="s1">Size X Size 1</SelectItem>
                                   </SelectGroup>
                                   <SelectSeparator/>
                                   <SelectGroup>
                                        <SelectLabel>Mobile</SelectLabel>
                                        <SelectItem value="s1">Size X Size 1</SelectItem>
                                   </SelectGroup>
                              </SelectContent>
                         </Select>
                         <Button variant="secondary" className="flex-1">
                              <Download/>
                              Download
                         </Button>
                    </div>
                    <div className="flex w-full max-w-150 items-center justify-between gap-2 relative group">
                         <p className="text-sm text-muted-foreground">Size of selected wallpaper:</p>
                         <div className="flex items-center justify-center gap-2">
                              <Button variant="secondary" size="icon" title="For More Wallpapers, Visit My DeviantArt Page">
                                   <SiDeviantart/>
                              </Button>
                              <AlertTriangleIcon className="group-hover:text-primary transition-colors"/>
                         </div>
                         <div className="p-4 border bg-card text-card-foreground rounded-md rounded-tr-none shadow-sm space-y-2 absolute top-10 z-20 invisible group-hover:visible">
                              <p className="text-sm">These wallpapers use satire code snippets to highlight best practices in development.</p>
                              <p className="text-sm">No real company is targeted — the goal is to inspire better software decisions, not provoke drama.</p>
                         </div>
                    </div>
               </div>
          </SiteSection>
     )
}