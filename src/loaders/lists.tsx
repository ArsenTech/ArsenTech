import { Skeleton } from "@/components/ui/skeleton";
import { BlogItemLoader, DownloadCardLoader, ProjectCardLoader, WorkCardLoader } from "./items";

export function PostsLoader({count = 10}: {count?: number}){
     return (
          <div className="space-y-4 w-full">
               {Array.from({length: count}).map((_,i)=>(
                    <BlogItemLoader key={`post-${i+1}`}/>
               ))}
          </div>
     )
}
export function WorksLoader(){
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
               {Array.from({length: 6}).map((_,i)=>(
                    <WorkCardLoader key={`work-${i+1}`}/>
               ))}
          </div>
     )
}
export function ProjectsLoader(){
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
               {Array.from({length: 4}).map((_,i)=>(
                    <ProjectCardLoader key={i+1}/>
               ))}
          </div>
     )
}
export function DownloadsLoader(){
     return (
          <>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {Array.from({length: 8}).map((_,i)=>(
                    <DownloadCardLoader key={`download-${i+1}`}/>
               ))}
          </div>
          <Skeleton className="w-32 h-8 mt-4"/>
          </>
     )
}