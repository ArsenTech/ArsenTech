import { absoluteCDN } from ".";
import { WALLPAPER_IDS, WALLPAPER_SIZE_VALUES } from "../constants/wallpapers";

export function getWallpaperFileUrl(wallpaper: string,size: string): string | null {
     if (!isValidWallpaper(wallpaper, size)) return null;
     const sizeWithSpace = size.split("x").join(" x ")
     return absoluteCDN(`/wallpapers/coding${wallpaper}/${sizeWithSpace}.png`)
}
export function isValidWallpaper(wallpaper: string,size: string) {
     return (
          WALLPAPER_IDS.has(wallpaper) &&
          WALLPAPER_SIZE_VALUES.has(size)
     )
}
export function getDownloadUrl(path: string, isRelease = false): string {
     const filePath = path.replace(/^\/+/, "").split("/").map(encodeURIComponent).join("/")
     return isRelease
          ? `https://github.com/ArsenTech/downloads/releases/download/${filePath}`
          : `https://raw.githubusercontent.com/ArsenTech/downloads/refs/heads/static-files/${filePath}`
}