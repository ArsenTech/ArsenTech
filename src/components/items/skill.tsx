import { Progress } from "@/components/ui/progress";
import { ISkill } from "@/lib/types";

interface SkillProps{
     data: ISkill
}
export default function Skill({data}: SkillProps){
     return (
          <div key={data.name} className="space-y-4">
               <div className="flex justify-between items-center gap-2">
                    <span className="text-base">{data.name}</span>
                    <span className="text-base text-muted-foreground">
                    {data.percentage}%
                    </span>
               </div>
               <Progress
                    value={data.percentage}
                    aria-label={`${data.name} proficiency`}
                    className="h-1.5"
               />
          </div>
     )
}