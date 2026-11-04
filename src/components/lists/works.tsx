import { WORKS } from "@/lib/constants/works";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";
import { Laptop } from "lucide-react";
import WorkCard from "../items/work";

export default function WorksList(){
     if(WORKS.length===0) return (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <Laptop/>
                    </EmptyMedia>
                    <EmptyTitle>No works are available yet</EmptyTitle>
                    <EmptyDescription>Check back soon!</EmptyDescription>
               </EmptyHeader>
          </Empty>
     )
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
               {WORKS.map(work=>(
                    <WorkCard
                         key={work.title}
                         data={work}
                    />
               ))}
          </div>
     )
}