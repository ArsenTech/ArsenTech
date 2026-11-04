import { ISkill } from "@/lib/types";
import { Progress } from "../ui/progress";

interface SkillsListProps{
     skills: ISkill[]
}
export default function SkillsList({skills}: SkillsListProps){
     return (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
               {skills.map(skill=>(
                    <div key={skill.name} className="space-y-4">
                         <div className="flex justify-between items-center gap-2">
                              <span className="text-base">{skill.name}</span>
                              <span className="text-base text-muted-foreground">
                              {skill.percentage}%
                              </span>
                         </div>
                         <Progress
                              value={skill.percentage}
                              aria-label={`${skill.name} proficiency`}
                              className="h-1.5"
                         />
                    </div>
               ))}
          </div>
     )
}