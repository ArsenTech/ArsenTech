
export const WALLPAPER_GROUPS = {
     Javascript: [1, 2, 3, 4, 5],
     Python: [6, 7, 8, 9, 10],
     "C#": [11, 12],
} as const

export const WALLPAPER_SIZES = {
     Desktop: [
          { value: "3440x1440", text: "3440 x 1440" },
          { value: "2560x1440", text: "2560 x 1440" },
          { value: "1920x1200", text: "1920 x 1200" },
          { value: "1920x1080", text: "1920 x 1080" },
          { value: "1600x1200", text: "1600 x 1200" },
          { value: "1440x900", text: "1440 x 900" },
          { value: "1366x768", text: "1366 x 768" },
          { value: "1280x800", text: "1280 x 800" },
          { value: "1280x720", text: "1280 x 720" },
          { value: "1152x864", text: "1152 x 864" },
          { value: "1024x768", text: "1024 x 768" },
          { value: "800x600", text: "800 x 600" },
     ],
     Mobile: [
          { value: "phone", text: "1080 x 1920" },
     ],
} as const

export const WALLPAPER_IDS = new Set<string>(Object.values(WALLPAPER_GROUPS).flat().map(String))
export const WALLPAPER_SIZE_VALUES = new Set<string>(Object.values(WALLPAPER_SIZES).flat().map(item => item.value))
export const DEFAULT_WALLPAPER_SIZE = "1920x1080"

export function isValidWallpaper(wallpaper: string,size: string
) {
     return (
          WALLPAPER_IDS.has(wallpaper) &&
          WALLPAPER_SIZE_VALUES.has(size)
     )
}