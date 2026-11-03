
import { isValidWallpaper } from "@/lib/constants/wallpapers"

const CDN_BASE = "https://raw.githubusercontent.com/ArsenTech/downloads/refs/heads/wallpapers"

export function getWallpaperFileUrl(wallpaper: string,size: string): string | null {
     if (!isValidWallpaper(wallpaper, size)) return null;
     const sizeWithSpace = size.split("x").join(" x ")
     return `${CDN_BASE}/coding${wallpaper}/${sizeWithSpace}.png`
}