"use client"
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import { WORKS } from "@/lib/constants/works";
import WorkCard from "@/components/items/work";

export default function WorksSection(){
     return (
          <SiteSection id="works" className="bg-card text-card-foreground">
               <SectionTitle surface="card">Works</SectionTitle>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {WORKS.map(work=>(
                         <WorkCard
                              key={work.title}
                              data={work}
                         />
                    ))}
               </div>
          </SiteSection>
     )
}