import { cn } from "@/lib/utils";
import React from "react";
import AppSection from "../site-section"

export interface SiteSectionProps extends React.ComponentProps<"section">{
     innerWidthClass?: string
}
export default function SiteSection({children, innerWidthClass, className, ...props}: SiteSectionProps){
     return (
          <AppSection className={cn("scroll-mt-10",className)} {...props}>
               <div className={cn("inner-width",innerWidthClass)}>
                    {children}
               </div>
          </AppSection>
     )
}