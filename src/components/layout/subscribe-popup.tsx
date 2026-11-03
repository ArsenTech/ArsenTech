"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { SiYoutube } from "react-icons/si"
import { useEffect, useState } from "react"
import { cn } from "cn"

export default function SubscribePopup(){
     const [visible, setVisible] = useState(false);
     const [isClosing, setIsClosing] = useState(false);

     useEffect(() => {
          if (sessionStorage.getItem("subscribe-dismissed") === "true") return;
          const timeout = setTimeout(() => {
               setVisible(true)
          }, 2500)
          return () => clearTimeout(timeout)
     }, [])

     const closePopup = () => {
          if (isClosing) return;
          sessionStorage.setItem("subscribe-dismissed", "true")
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
               setVisible(false)
               return
          }
          setIsClosing(true)
     }

     if (!visible) return null;
     
     return (
          <div role="region"
               aria-label="Subscribe to ArsenTech"
               onAnimationEnd={(event) => {
                    if (event.target === event.currentTarget && isClosing) {
                         setVisible(false)
                    }
               }}
               className={cn(
                    "fixed bottom-4 left-4 z-30",
                    "flex items-center gap-4",
                    "w-[calc(100vw-2rem)] max-w-md",
                    "rounded-md border bg-card p-4 text-card-foreground shadow-sm md:p-5",
                    isClosing ? "animate-hide-sub" : "animate-show-sub"
               )}
          >
               <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    title="Close"
                    aria-label="Close subscribe popup"
                    onClick={closePopup}
                    className="absolute top-0 right-0 text-lg opacity-50 hover:opacity-100"
               >
                    <X />
               </Button>
               <Image src="/profile-pics/pfp.webp" alt="ArsenTech" width={96} height={96} className="rounded-full object-center"/>
               <div className="space-y-1">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-0">ArsenTech</h2>
                    <p className="text-sm text-muted-foreground">Subscribe To My YouTube Channel</p>
                    <Button variant="secondary" size="xl" asChild>
                         <Link href="https://www.youtube.com/channel/UCrtH0g6NE8tW5VIEgDySYtg?sub_confirmation=1" target="_blank" rel="noopener noreferrer nofollow">
                              <SiYoutube className="size-5"/>
                              Subscribe
                         </Link>
                    </Button>
               </div>
          </div>
     )
}