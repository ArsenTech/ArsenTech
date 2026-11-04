"use client"
import type { ILink } from "@/lib/types"
import { cn } from "cn";
import Link from "next/link"
import { useEffect, useState } from "react";

interface AnchorNavProps{
     links: ILink[]
}
export default function AnchorNav({links}: AnchorNavProps){
     const [isScrolled, setIsScrolled] = useState(false);
     const [activeId, setActiveId] = useState<string | null>(null)
     
     useEffect(() => {
          let frame = 0
          const handleScroll = () => {
               cancelAnimationFrame(frame)
               frame = requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 700)
                    const threshold = window.innerHeight * 0.3
                    let currentId: string | null = null
                    for (const link of links) {
                         const id = link.url.split("#")[1]
                         if (!id) continue
                         const section = document.getElementById(id)
                         if (!section) continue
                         const rect = section.getBoundingClientRect()
                         if (rect.top <= threshold) currentId = id
                    }
                    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
                    if (atBottom) {
                         const lastId = [...links].reverse().map(link => link.url.split("#")[1]).find(id => id && document.getElementById(id))
                         if (lastId) currentId = lastId
                    }
                    setActiveId(currentId)
               })
          }
          handleScroll()
          window.addEventListener("scroll", handleScroll, {
               passive: true,
          })
          window.addEventListener("resize", handleScroll)
          return () => {
               cancelAnimationFrame(frame)
               window.removeEventListener("scroll", handleScroll)
               window.removeEventListener("resize", handleScroll)
          }
     }, [links])

     if (links.length === 0) return null;

     return (
          <nav
               aria-label="Page sections"
               className="fixed top-0 right-0 z-30 flex h-full flex-col items-end justify-center gap-3 pr-2"
          >
               {links.map((link, index) => {
                    const id = link.url.split("#")[1]
                    const active = !!id && activeId === id
                    return (
                         <Link
                              key={`link-${index + 1}`}
                              href={link.url}
                              title={link.name}
                              aria-label={link.name}
                              aria-current={active ? "location" : undefined}
                              className="group inline-flex items-center justify-center"
                         >
                         <span className={cn(
                              "inline-block size-5 rounded-full border-2 shadow-md transition-colors",
                              isScrolled ? "border-primary hover:bg-primary/30" : "border-[#b3ffc1] hover:bg-[#b3ffc1]/30",
                              active && (isScrolled ? "bg-primary" : "bg-[#b3ffc1]")
                         )}/>
                         </Link>
                    )
               })}
          </nav>
     )
}