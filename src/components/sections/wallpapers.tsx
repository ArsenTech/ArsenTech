"use client"
import { useEffect, useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { AlertTriangleIcon, Download } from "lucide-react"
import SiteSection from "@/components/layout/section"
import SectionTitle from "@/components/section-title"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { WALLPAPER_GROUPS, WALLPAPER_SIZES, DEFAULT_WALLPAPER_SIZE,} from "@/lib/constants/wallpapers"
import { WallpaperSchema, type WallpaperType,} from "@/lib/schemas"
import { SiDeviantart } from "react-icons/si"
import Link from "next/link"
import { getSize, WallpaperSizeResult } from "@/actions/wallpapers"
import { toast } from "sonner"

function formatBytes(bytes: number) {
     if (bytes === 0) return "0 B"
     const units = ["B", "KiB", "MiB", "GiB"]
     const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)),units.length - 1)
     return `${(bytes / 1024 ** index).toFixed(2)} ${units[index]}`
}

// TODO: Address mapping issues and review the output

export default function WallpapersSection(){
     const form = useForm<WallpaperType>({
          resolver: zodResolver(WallpaperSchema),
          defaultValues: {
               wallpaper: "",
               size: "",
          },
     })
     const wallpaper = useWatch({
          control: form.control,
          name: "wallpaper",
     }) ?? ""
     const size = useWatch({
          control: form.control,
          name: "size",
     }) ?? ""
     const [previewError, setPreviewError] = useState(false)
     const [sizeState, setSizeState] = useState<{
          key: string
          result: WallpaperSizeResult
     } | null>(null)
     useEffect(() => {
          const timeout = setTimeout(() => {
               setPreviewError(false)
          }, 100)
          return () => clearTimeout(timeout)
     }, [wallpaper])
     const selectionKey = `${wallpaper}:${size}`
     useEffect(() => {
          if (!wallpaper || !size) return
          let cancelled = false
          const key = `${wallpaper}:${size}`
          getSize({ wallpaper, size }).then((result) => {
               if (!cancelled) setSizeState({ key, result })
          }).catch(() => {
               if (!cancelled) setSizeState({
                    key,
                    result: {
                         status: "unknown",
                         bytes: null,
                    },
               })
          })
          return () => {
               cancelled = true
          }
     }, [wallpaper, size])

     const sizeResult = sizeState?.key === selectionKey ? sizeState.result : null
     const fileSizeText =
          !wallpaper || !size
          ? "Select a wallpaper and resolution"
          : !sizeResult
               ? "Checking..."
               : sizeResult.status === "missing"
               ? "File unavailable"
               : sizeResult.status === "invalid"
                    ? sizeResult.error
                    : sizeResult.bytes !== null
                    ? formatBytes(sizeResult.bytes)
                    : "Size unavailable"
     function onDownload(values: WallpaperType) {
          if (sizeResult?.status === "missing") return;
          try {
               const params = new URLSearchParams(values)
               window.open(
                    `/api/wallpaper?${params}`,
                    "_blank",
                    "noopener,noreferrer"
               )
          } catch (err){
               toast.error("Failed to download the wallpaper",{
                    description: err instanceof Error ? err.message : String(err)
               })
          }
     }
     const previewSrc = wallpaper && !previewError ? `/downloads/wallpaperImg/coding${wallpaper}.webp` : "/downloads/blank.webp"
     return (
          <SiteSection id="wallpapers" className="bg-card text-card-foreground">
               <SectionTitle surface="card">Wallpapers</SectionTitle>
               <div className="flex flex-col items-center gap-2">
                    <Image
                         key={previewSrc}
                         src={previewSrc}
                         alt={wallpaper? `Preview of wallpaper #${wallpaper}`: "Select a wallpaper to view its preview"}
                         width={600}
                         height={300}
                         className="aspect-2/1 w-full h-full max-w-150 max-h-75 rounded-md object-contain"
                         onError={() => setPreviewError(true)}
                    />
                    <form
                         onSubmit={form.handleSubmit(onDownload)}
                         className="flex w-full max-w-150 items-center justify-center gap-2"
                    >
                         <Controller
                              control={form.control}
                              name="wallpaper"
                              render={({ field, fieldState }) => (
                                   <div className="min-w-0 space-y-1 flex-1">
                                        <Select
                                             name={field.name}
                                             value={field.value}
                                             onValueChange={(value) => {
                                                  field.onChange(value)
                                                  form.setValue("size",DEFAULT_WALLPAPER_SIZE,{ shouldValidate: true })
                                             }}
                                        >
                                             <SelectTrigger
                                                  ref={field.ref}
                                                  id="wallpaper"
                                                  aria-label="Choose a wallpaper"
                                                  aria-invalid={fieldState.invalid}
                                                  aria-describedby={fieldState.invalid ? "wallpaper-error" : undefined}
                                                  className="w-full"
                                             >
                                                  <SelectValue placeholder="Choose a wallpaper"/>
                                             </SelectTrigger>
                                             <SelectContent side="top" align="start">
                                                  {Object.entries(WALLPAPER_GROUPS).map(([group, ids], index) => (
                                                       <div key={group}>
                                                            {index > 0 && <SelectSeparator />}
                                                            <SelectGroup>
                                                                 <SelectLabel>{group}</SelectLabel>
                                                                 {ids.map(id => (
                                                                      <SelectItem key={id} value={String(id)}>
                                                                           Wallpaper #{id}
                                                                      </SelectItem>
                                                                 ))}
                                                            </SelectGroup>
                                                       </div>
                                                  ))}
                                             </SelectContent>
                                        </Select>
                                        {fieldState.error && (
                                             <p id="wallpaper-error" role="alert" className="text-xs text-destructive">{fieldState.error.message}</p>
                                        )}
                                   </div>
                              )}
                         />
                         <Controller
                              control={form.control}
                              name="size"
                              render={({ field, fieldState }) => (
                                   <div className="min-w-0 space-y-1 flex-1">
                                        <Select
                                             name={field.name}
                                             value={field.value}
                                             onValueChange={field.onChange}
                                             disabled={!wallpaper}
                                        >
                                             <SelectTrigger
                                                  ref={field.ref}
                                                  id="wallpaper-size"
                                                  aria-label="Choose wallpaper size"
                                                  aria-invalid={fieldState.invalid}
                                                  aria-describedby={fieldState.invalid ? "size-error" : undefined}
                                                  className="w-full"
                                             >
                                                  <SelectValue placeholder="Choose a size"/>
                                             </SelectTrigger>
                                             <SelectContent side="top" align="start">
                                                  {Object.entries(WALLPAPER_SIZES).map(([group, sizes], index) => (
                                                       <div key={group}>
                                                            {index > 0 && <SelectSeparator />}
                                                            <SelectGroup>
                                                                 <SelectLabel>{group}</SelectLabel>
                                                                 {sizes.map(item => (
                                                                      <SelectItem key={item.value} value={item.value}>
                                                                           {item.text}
                                                                      </SelectItem>
                                                                 ))}
                                                            </SelectGroup>
                                                       </div>
                                                  ))}
                                             </SelectContent>
                                        </Select>
                                        {fieldState.error && (
                                             <p
                                                  id="size-error"
                                                  role="alert"
                                                  className="text-xs text-destructive"
                                             >
                                                  {fieldState.error.message}
                                             </p>
                                        )}
                                   </div>
                              )}
                         />
                         <Button
                              type="submit"
                              variant="secondary"
                              disabled={sizeResult?.status === "missing"}
                              className="flex-1"
                         >
                              <Download />
                              Download
                         </Button>
                    </form>
                    <div className="flex w-full max-w-150 items-center justify-between gap-2 relative group">
                         <p
                              role="status"
                              className="text-sm text-muted-foreground"
                         >
                              Size of selected wallpaper: {fileSizeText}
                         </p>
                         <div className="flex items-center justify-center gap-2">
                              <Button variant="secondary" size="icon" title="For More Wallpapers, Visit My DeviantArt Page" asChild>
                                   <Link href={"https://www.deviantart.com/arsen2005"} target="_blank" rel="noopener noreferrer nofollow">
                                        <SiDeviantart/>
                                   </Link>
                              </Button>
                              <AlertTriangleIcon className="group-hover:text-primary transition-colors"/>
                         </div>
                         <div className="p-4 border bg-card text-card-foreground rounded-md rounded-tr-none shadow-sm space-y-2 absolute top-10 z-20 invisible group-hover:visible">
                              <p className="text-sm">These wallpapers use satire code snippets to highlight best practices in development.</p>
                              <p className="text-sm">No real company is targeted — the goal is to inspire better software decisions, not provoke drama.</p>
                         </div>
                    </div>
               </div>
          </SiteSection>
     )
}