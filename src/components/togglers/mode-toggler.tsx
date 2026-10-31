import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ModeTogglerProps{
     className?: string
}
export default function ModeToggler({className}: ModeTogglerProps){
     const {theme, setTheme, systemTheme} = useTheme();
     const currentTheme = theme==="system" ? systemTheme : theme
     return (
          <button className={cn("w-[30px] h-[30px] transition-all cursor-pointer",className)} onClick={()=>setTheme(currentTheme ==="dark" ? "light" : "dark")}>
               <Image src={currentTheme ==="dark" ? "/icons/dark.svg" : "/icons/light.svg"} alt="mode" width={30} height={30}/>
          </button>
     )
}