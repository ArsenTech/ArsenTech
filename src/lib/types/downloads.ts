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
export type WallpaperSizeResult =
     | { status: "available"; bytes: number | null }
     | { status: "missing"; bytes: null }
     | { status: "unknown"; bytes: null }
     | { status: "invalid"; bytes: null; error: string }