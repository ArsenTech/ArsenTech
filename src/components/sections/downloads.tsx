import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import { Download, ExternalLink, Search, X } from "lucide-react";
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "../ui/input-group";
import { Button } from "../ui/button";

export default function DownloadsSection(){
     return (
          <SiteSection id="downloads">
               <SectionTitle>Downloads</SectionTitle>
               <div className="flex justify-center items-center flex-col gap-4">
                    <InputGroup>
                         <InputGroupInput placeholder="Search..." />
                         <InputGroupAddon>
                              <Search />
                         </InputGroupAddon>
                         <InputGroupAddon align="inline-end">
                              <InputGroupButton type="button">
                                   <X/>
                              </InputGroupButton>
                         </InputGroupAddon>
                    </InputGroup>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between w-full">
                         <div className="flex items-center gap-2 flex-wrap">
                              <Button variant="secondary" className="flex-1" size="lg">All</Button>
                              <Button variant="secondary" className="flex-1" size="lg">Windows & MS-DOS</Button>
                              <Button variant="secondary" className="flex-1" size="lg">Software</Button>
                              <Button variant="secondary" className="flex-1" size="lg">Updates</Button>
                         </div>
                         <p className="text-sm text-muted-foreground">12 results</p>
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
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-xols-4 gap-4 mt-4">
                    
               </div>
          </SiteSection>
     )
}