import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react"
import NavbarToggler from "@/components/togglers/navbar-toggler";
import ModeToggler from "@/components/togglers/mode-toggler";
import { LINKS } from "@/lib/constants/links";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useCurrentTheme } from "@/hooks/use-current-theme";

interface HeaderProps {
     progress?: number;
}
export default function Header({progress}: HeaderProps){
     const [isScrolled, setIsScrolled] = useState(false);
     const [isHovered, setIsHovered] = useState(false);
     const currTheme = useCurrentTheme()
     const [isOpened, setIsOpened] = useState(false);
     const isMobile = useIsMobile();
     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20);
          };
          handleScroll();
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);
     const logo = useMemo(() => {
          const defaultLogo = currTheme === "dark" ? "/arsentech-dark.svg" : "/arsentech-light.svg"
          if (isOpened || isScrolled) return isHovered ? "/arsentech-colorful.svg" : defaultLogo
          return "/arsentech-dark.svg"
     }, [isOpened, isScrolled, currTheme, isHovered])
     return (
          <header className={cn(`fixed w-full top-0 left-0 z-40 transition-all border-none`,!isScrolled ? "bg-transparent py-7.5" : "bg-header py-4.5",isScrolled ? "text-header-foreground" : "text-white")}>
               <div className="inner-width flex items-center justify-between">
                    <Link href="/" className={cn(isMobile && "order-0")} aria-label="ArsenTech" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                         <Image src={logo} alt="logo" width={150} height={32} className="object-contain"/>
                    </Link>
                    {isMobile && (
                         <NavbarToggler
                              onClick={()=>setIsOpened(!isOpened)}
                              aria-expanded={isOpened}
                              lineClass={isScrolled ? "bg-header-foreground" : "bg-white"}
                              className={cn(isMobile && "-order-1")}
                              isActive={isOpened}
                         />
                    )}
                    <div className={cn("fixed md:relative h-screen md:h-fit w-full md:w-fit top-0 max-w-100 md:max-w-full py-20 md:py-0 px-12.5 md:px-0 transition-all text-center z-20 flex flex-col md:flex-row items-center gap-7.5",isScrolled ? "bg-header" : "bg-[#353b48]","md:bg-transparent",isOpened ? "left-0" : "-left-full","md:left-0")}>
                         {LINKS.map(({url,name},i)=>(
                              <Link key={i} className={cn("block md:inline text-2xl sm:text-3xl md:text-base md:my-0 font-medium transition-all",isScrolled ? "hover:text-primary" : 'hover:text-[#92e5a1]')} href={url}>{name}</Link>
                         ))}
                    </div>
                    <ModeToggler
                         className={(isScrolled && currTheme!=="dark") ? "invert-image-color" : "invert"}
                    />
               </div>
               {!!progress && (
                    <div className="absolute bottom-0 left-0 w-full">
                         <Progress value={progress} className="rounded-none"/>
                    </div>
               )}
          </header>
     )
}
