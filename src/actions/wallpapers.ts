
"use server"

import {
  WallpaperSchema,
  type WallpaperType,
} from "@/lib/schemas"

import { getWallpaperFileUrl } from "@/lib/server/wallpapers"

export type WallpaperSizeResult =
     | { status: "available"; bytes: number | null }
     | { status: "missing"; bytes: null }
     | { status: "unknown"; bytes: null }
     | { status: "invalid"; bytes: null; error: string }

export async function getSize(
  values: WallpaperType
): Promise<WallpaperSizeResult> {
     const validated = WallpaperSchema.safeParse(values)

     if (!validated.success) return {
          status: "invalid",
          bytes: null,
          error: "Please check the provided fields.",
     }

     const { wallpaper, size } = validated.data
     const url = getWallpaperFileUrl(wallpaper, size)

     if (!url) return {
          status: "invalid",
          bytes: null,
          error: "Invalid wallpaper URL.",
     }

     try {
          const response = await fetch(url, {
               method: "HEAD",
               cache: "no-store",
               signal: AbortSignal.timeout(10000),
          })
          if (response.status === 404) return { status: "missing", bytes: null }
          if (!response.ok) return { status: "unknown", bytes: null }
          const header = response.headers.get("content-length")
          const bytes = header === null ? null : Number(header)
          return {
               status: "available",
               bytes: bytes !== null &&
                    Number.isSafeInteger(bytes) &&
                    bytes >= 0
                         ? bytes
                         : null,
          }
     } catch (error) {
          console.error("Wallpaper metadata lookup failed:", error)
          return {
               status: "unknown",
               bytes: null,
          }
     }
}