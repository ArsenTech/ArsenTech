"use client"
import SiteSection, { SiteSectionProps } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type PostSectionProps = SiteSectionProps & {
     sectionTitle: string,
     collapsible?: boolean | "mobile"
}
export default function PostSection({sectionTitle, children, innerWidthClass, collapsible=false, ...props}: PostSectionProps){
     const isMobile = useIsMobile("tablet");
     const shouldCollapse = collapsible===true || (collapsible==="mobile" && isMobile)
     const [isOpen, setIsOpen] = useState(shouldCollapse)
     return (
          <SiteSection className="!px-0 !pb-10 !pt-0" innerWidthClass={cn("flex flex-col gap-3 items-start justify-center w-full ",innerWidthClass)} {...props}>
               {shouldCollapse ? (
                    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full h-full space-y-5">
                         <div className="flex justify-between items-center gap-2 w-full">
                              <h3 className="scroll-m-20 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight border-b border-primary pb-2">{sectionTitle}</h3>
                              {shouldCollapse && (
                                   <CollapsibleTrigger asChild>
                                        <Button variant="ghost" size="icon">{!isOpen ? <Maximize2/> : <Minimize2/>}</Button>
                                   </CollapsibleTrigger>
                              )}
                         </div>
                         <CollapsibleContent>
                              {children}
                         </CollapsibleContent>
                    </Collapsible>
               ) : (
                    <>
                         <h3 className="scroll-m-20 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight border-b border-primary pb-2">{sectionTitle}</h3>
                         {children}
                    </>
               )}
          </SiteSection>
     )
}
