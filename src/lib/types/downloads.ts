export interface IDownloadFile{
     name: string,
     path: string,
     isRelease?: boolean
}
export type DownloadCategory = "microsoft" | "software" | "updates";
export interface IDownloadItem{
     thumbnail: string,
     title: string,
     path: string,
     category: DownloadCategory
     type: "direct" | "external",
     description: string,
     isRelease?: boolean,
     files?: IDownloadFile[]
}