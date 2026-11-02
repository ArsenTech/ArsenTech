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
                    <div className="w-70 text-white bg-cover pt-40 max-w-[35ch] rounded-lg overflow-hidden transition-transform hover:scale-[1.05] focus-within:scale-[1.05] group bg-center h-95" style={{
                         backgroundImage: 'url("/downloads/card-img/ms/win7.webp")'
                    }}>
                         <div className="p-5 bg-linear-to-b from-transparent via-[#161616a5] via-20% to-[#161616] translate-y-[80%] space-y-1 hover:translate-y-0 delay-300">
                              <h3 className="w-max text-xl font-semibold after:content-[''] after:m-0 after:p-0 after:box-border after:h-1 after:left-[-1.3rem] after:-bottom-0.5 after:w-[calc(100%+1.6rem)] after:bg-primary after:origin-left after:transition-transform relative after:absolute">Card Name</h3>
                              <p className="text-white/90 mb-2 opacity-0 group-hover:opacity-100">Card body</p>
                              <Button variant="secondary" className=" opacity-0 group-hover:opacity-100" size="lg">
                                   <Download/>
                                   Download
                              </Button>
                         </div>
                    </div>
               </div>
          </SiteSection>
     )
}