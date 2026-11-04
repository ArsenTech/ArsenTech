import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

interface NavbarTogglerProps extends ButtonProps{
     lineClass?: string,
     isActive: boolean
}
export default function NavbarToggler({
     lineClass,
     isActive,
     className,
     ...props
}: NavbarTogglerProps){
     return (
          <button className={cn("bg-transparent w-7.5 border-none cursor-pointer relative z-30 text-[25px]",className)} {...props}>
               <div className={cn("h-0.75 bg-header my-1.5 relative transition-all",isActive && "-rotate-45 top-1", lineClass)}/>
               <div className={cn("h-0.75 bg-header my-1.5 relative transition-all",isActive && "opacity-0", lineClass)}/>
               <div className={cn("h-0.75 bg-header my-1.5 relative transition-all",isActive && "rotate-45 bottom-3.5", lineClass)}/>
          </button>
     )
}