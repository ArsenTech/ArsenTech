import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export type BlockquoteVariant = "note" | "tip" | "important" | "warning" | "caution"
export interface IBlockquoteBox{
     boxClass: string,
     lineClass: string,
     Icon: LucideIcon,
     iconClass: string
}
export interface ILink{
     name: string,
     url: string
}
export interface ISkill{
     name: string,
     percentage: number
}
export interface IWorkItem{
     Icon: LucideIcon,
     title: string,
     description: string,
     url: string
}
export interface IProject{
     name: string,
     description?: string
     thumbnail: string
     license?: {
          name: string,
          url: string,
     },
     link: string
     contributionLink: string
}
export interface IFAQItem{
     question: string,
     answer: string
}
export interface ElementWithChildren {children?: ReactNode}
export interface ActionResult{
     success?: string
     error?: string
}