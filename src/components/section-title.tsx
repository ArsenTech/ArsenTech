import { cn } from "cn"

export default function SectionTitle({surface="background", className, ...props}: React.ComponentProps<"h2"> & {
     surface?: "background" | "card"
}){
     return (
          <h2 className={cn("text-center mb-20 relative text-3xl pb-5 font-semibold before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-0.5 before:w-20 before:bg-foreground after:content-[''] after:absolute after:-bottom-1.75 after:left-1/2 after:-translate-x-1/2 after:box-content after:h-2.5 after:w-4 after:border-4 after:bg-primary",surface==="background" ? "after:border-background scroll-m-20" : "after:border-card",className)} {...props}/>
     )
}