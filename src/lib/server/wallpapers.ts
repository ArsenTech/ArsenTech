
import { isValidWallpaper } from "@/lib/constants/wallpapers"

const CDN_BASE = "https://raw.githubusercontent.com/ArsenTech/downloads/refs/heads/wallpapers"

export function getWallpaperFileUrl(wallpaper: string,size: string): string | null {
     if (!isValidWallpaper(wallpaper, size)) return null;
     console.log(wallpaper, size)
     const filename = `${size}.webp`
     return `${CDN_BASE}/wallpapers/${wallpaper}/${filename}`
}