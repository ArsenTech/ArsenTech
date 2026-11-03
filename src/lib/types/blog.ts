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
export interface IBlogPostData{
     title: string,
     text: string,
     url: string
}