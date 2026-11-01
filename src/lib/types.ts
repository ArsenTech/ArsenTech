import { LucideIcon } from "lucide-react";

export interface IBlogPostBase{
     title: string;
     description: string;
     date: Date;
     editDate?: string;
     tags: string[];
     published: boolean;
     featured: boolean;
     categories: string[];
     slug: string;
     author: { name: string, url: string }
}

export interface IBlogPostFull extends IBlogPostBase {
     content: string;
     toc: TOCItem[];
}

export type BlogPostMetadata = Omit<IBlogPostBase,"published" | "featured" | "author"> & {
     published?: boolean;
     featured?: boolean;
     author: string,
     authorURL: string
}

export interface TOCItem{
     id: string,
     text: string,
     level: number
}

export type BlockquoteVariant = "note" | "tip" | "important" | "warning" | "caution"

export interface IBlockquoteBox{
     boxClass: string,
     lineClass: string,
     Icon: LucideIcon,
     iconClass: string
}

export interface IBlogPostData{
     title: string,
     text: string,
     url: string
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