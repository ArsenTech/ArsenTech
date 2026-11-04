"use client"
import * as React from "react"

export function useIsMobile(type: "mobile" | "tablet" = "mobile") {
  const MOBILE_BREAKPOINT = type === "mobile" ? 768 : 992
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    const timeout = setTimeout(()=>{
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    },100)
    return () => {
      mql.removeEventListener("change", onChange);
      clearTimeout(timeout)
    }
  }, [MOBILE_BREAKPOINT])

  return !!isMobile
}