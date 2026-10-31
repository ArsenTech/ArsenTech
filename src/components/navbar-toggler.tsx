import { cn } from "@/lib/utils";
import { ButtonProps } from "./ui/button";

interface NavbarTogglerProps extends ButtonProps{
     lineClass?: string,
     isActive?: boolean
}
export default function NavbarToggler({
     lineClass,
     isActive,
     className,
     ...props
}: NavbarTogglerProps){
     return (
          <button className={cn("bg-transparent w-[30px] border-none cursor-pointer relative z-10 text-[25px]",className)} {...props}>
               <div className={cn("h-[3px] bg-header my-[6px] relative transition-all",isActive && "-rotate-45 top-1", lineClass)}/>
               <div className={cn("h-[3px] bg-header my-[6px] relative transition-all",isActive && "opacity-0", lineClass)}/>
               <div className={cn("h-[3px] bg-header my-[6px] relative transition-all",isActive && "rotate-45 bottom-[14px]", lineClass)}/>
          </button>
     )
}