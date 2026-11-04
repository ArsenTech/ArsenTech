"use client"
import ProjectCard from "@/components/items/project";
import { IProject } from "@/lib/types";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";
import { GalleryThumbnails } from "lucide-react";

interface ProjectsSectionProps{
     projects: IProject[]
}
export default function ProjectsList({projects}: ProjectsSectionProps){
     if(projects.length===0) return (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <GalleryThumbnails/>
                    </EmptyMedia>
                    <EmptyTitle>No projects are available yet</EmptyTitle>
                    <EmptyDescription>Check back soon!</EmptyDescription>
               </EmptyHeader>
          </Empty>
     )
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
               {projects.map(project=>(
                    <ProjectCard
                         key={project.name}
                         data={project}
                    />
               ))}
          </div>
     )
}