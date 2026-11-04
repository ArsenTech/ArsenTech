
import { cn } from "@/lib/utils";

export default function SiteSection({className, ...props}: React.ComponentProps<"section">){
     return (
          <section className={cn("py-12 px-0 md:px-12",className)} {...props}/>
     )
}