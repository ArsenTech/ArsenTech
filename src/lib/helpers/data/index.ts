import { cache } from "react";
import { IProject, ISkill } from "../../types";
import { IDownloadItem } from "@/lib/types/downloads";
import { absoluteCDN } from "..";

export const getSkills = cache(async(): Promise<ISkill[]> =>{
     try {
          const res = await fetch(absoluteCDN("/data/skills.json"));
          if(!res.ok) return []
          return await res.json();
     } catch {
          return []
     }
})

export const getProjects = cache(async(): Promise<IProject[]> =>{
     try {
          const res = await fetch(absoluteCDN("/data/projects.json"));
          if(!res.ok) return []
          const data = await res.json() as IProject[]
          return data.sort(({name: a},{name: b})=>a.localeCompare(b))
     } catch {
          return []
     }
})

export const getDownloads = cache(async(): Promise<IDownloadItem[]> =>{
     try {
          const res = await fetch(absoluteCDN("/data/downloads.json"));
          if(!res.ok) return []
          return await res.json();
     } catch {
          return []
     }
})