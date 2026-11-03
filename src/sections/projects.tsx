"use client"
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import ProjectCard from "@/components/items/project";
import { IProject } from "@/lib/types";

interface ProjectsSectionProps{
     projects: IProject[]
}
export default function ProjectsSection({projects}: ProjectsSectionProps){
     return (
          <SiteSection id="projects" className="bg-card text-card-foreground">
               <SectionTitle surface="card">Projects</SectionTitle>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {projects.map(project=>(
                         <ProjectCard
                              key={project.name}
                              data={project}
                         />
                    ))}
               </div>
          </SiteSection>
     )
}