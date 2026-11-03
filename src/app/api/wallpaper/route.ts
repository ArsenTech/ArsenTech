
import { NextRequest } from "next/server"
import { WallpaperSchema } from "@/lib/schemas"
import { getWallpaperFileUrl } from "@/lib/server/wallpapers"

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams

  const validated = WallpaperSchema.safeParse({
    wallpaper: params.get("wallpaper") ?? "",
    size: params.get("size") ?? "",
  })

  if (!validated.success) {
    return Response.json(
      { error: "Invalid wallpaper selection" },
      { status: 400 }
    )
  }

  const { wallpaper, size } = validated.data
  const url = getWallpaperFileUrl(wallpaper, size)

  if (!url) {
    return Response.json(
      { error: "Invalid wallpaper file" },
      { status: 400 }
    )
  }

  try {
    const response = await fetch(url, {
      cache: "no-store",
    })

    if (!response.ok || !response.body) {
      return Response.json(
        { error: "Wallpaper unavailable" },
        { status: response.status === 404 ? 404 : 502 }
      )
    }

    return new Response(response.body, {
      headers: {
        "Content-Type":
          response.headers.get("content-type") ??
          "application/octet-stream",

        "Content-Disposition":
          `attachment; filename="ArsenTech-Wallpaper-${wallpaper}-${size}.png"`,

        "Cache-Control": "private, no-store",
      },
    })
  } catch {
    return Response.json(
      { error: "Failed to retrieve wallpaper" },
      { status: 502 }
    )
  }
}
