import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons/lib"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "cn"

interface ContactCardProps{
     Icon: LucideIcon | IconType,
     username: string,
     cta: string,
     url: string,
     className?: string
}
export default function ContactCard({Icon, username, cta, url, className}: ContactCardProps){
     return (
          <div className={cn("flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 rounded-md border bg-card p-2.5 text-card-foreground shadow-sm transition-all",className)}>
               <div className="flex justify-center items-center gap-2.5">
                    <Icon className="size-8 shrink-0 text-primary" />
                    <h3 className="text-center text-lg font-semibold sm:text-left md:text-xl lg:text-2xl">{username}</h3>
               </div>
               <Button variant="outline" size="lg" asChild>
                    <Link href={url} target="_blank" rel="noopener nofollow noreferrer">
                         <Icon className="size-4 sm:size-5"/>
                         {cta}
                    </Link>
               </Button>
          </div>
     )
}