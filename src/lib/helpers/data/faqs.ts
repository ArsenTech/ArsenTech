import { IFAQItem } from "@/lib/types";
import { cache } from "react";
import { absoluteCDN } from "..";

export const getMainFAQ = cache(async(): Promise<IFAQItem[]> =>{
     try {
          const res = await fetch(absoluteCDN("/main-faq.json"));
          if(!res.ok) return [];
          const data: IFAQItem[] = await res.json()
          return data.sort(({question: a}, {question: b})=>a.localeCompare(b))
     } catch {
          return []
     }
})
export const getDownloadsFAQ = cache(async(): Promise<IFAQItem[]> =>{
     try {
          const res = await fetch(absoluteCDN("/downloads-faq.json"));
          if(!res.ok) return [];
          const data: IFAQItem[] = await res.json()
          return data.sort(({question: a}, {question: b})=>a.localeCompare(b))
     } catch {
          return []
     }
})