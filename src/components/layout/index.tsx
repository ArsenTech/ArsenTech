"use client"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "./footer"
import Header from "./header"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import type { ILink } from "@/lib/types"
import AnchorNav from "./anchor"
import SubscribePopup from "./subscribe-popup"

interface PageLayoutProps{
     children: React.ReactNode,
     anchorLinks?: ILink[],
     includeSubscribePopup?: boolean
}
export default function PageLayout({children, anchorLinks, includeSubscribePopup=false}: PageLayoutProps){
     const [isSticky, setIsSticky] = useState(false);
     const [progress, setProgress] = useState(0)
     const pathname = usePathname()
     useEffect(() => {
          const handleScroll = () => {
               const blogContent = document.getElementById("blog-content")
               if (!blogContent) return

               const windowHeight = window.innerHeight
               const totalHeight = blogContent.scrollHeight - windowHeight
               const scrolled = Math.min(Math.max(0, window.scrollY - blogContent.offsetTop), totalHeight)

               const progressPercent = (scrolled / totalHeight) * 100
               setProgress(progressPercent)
          }
          if (pathname.startsWith("/blog/")) {
               window.addEventListener("scroll", handleScroll)
               return () => window.removeEventListener("scroll", handleScroll)
          }
     }, [pathname])

     useEffect(() => {
          const onScroll = () => setIsSticky(window.scrollY > 100)
          window.addEventListener("scroll", onScroll)
          return () => window.removeEventListener("scroll", onScroll)
     }, [])
     return (
          <div className="flex min-h-screen flex-col font-(family-name:--font-sora) relative">
               <Header progress={progress} />
               {children}
               <Footer/>
               {anchorLinks && (
                    <AnchorNav links={anchorLinks}/>
               )}
               {includeSubscribePopup && (
                    <SubscribePopup/>
               )}
               <Button onClick={()=>window.scrollTo({ top:0, left:0, behavior:"smooth" })} size="icon" className={cn("transition-all fixed right-7 z-10",isSticky ? "bottom-6 visible" : "bottom-0 invisible opacity-0")} title="Scroll to top">
                    <ChevronUp />
               </Button>
          </div>
     )
}