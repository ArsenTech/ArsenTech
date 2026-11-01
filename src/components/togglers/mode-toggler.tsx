import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { useEffect, useMemo, useState } from "react";

interface ModeTogglerProps{
     className?: string
}
export default function ModeToggler({className}: ModeTogglerProps){
     const {setTheme} = useTheme();
     const [mounted, setMounted] = useState(false);
     useEffect(() => {
          const timeout = setTimeout(() => {
               setMounted(true)
          }, 100)
          return () => clearTimeout(timeout)
     }, [])
     const currentTheme = useCurrentTheme();
     const icon = useMemo(()=>{
          const currTheme = currentTheme==="dark" ? "dark" : "light"
          return `/icons/${currTheme}.svg`
     },[currentTheme])
     if(!mounted) return null
     return (
          <button className={cn("size-7.5 transition-all cursor-pointer",className)} onClick={()=>setTheme(currentTheme ==="dark" ? "light" : "dark")}>
               <Image src={icon} alt="mode" width={30} height={30}/>
          </button>
     )
}