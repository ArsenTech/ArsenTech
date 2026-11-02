
import { Download } from "lucide-react"
import { Button } from "../ui/button"

interface DownloadCardProps {
     title: string
     description: string
     imageUrl: string
     downloadUrl: string
}

export default function DownloadCard({
     title,
     description,
     imageUrl,
     downloadUrl,
}: DownloadCardProps) {
     return (
          <div
               style={{backgroundImage: `url("${imageUrl}")`,}}
               className="group relative w-full max-w-70 overflow-hidden rounded-[1rem] bg-cover bg-center pt-40 text-card-foreground transition-transform duration-300 ease-in-out hover:scale-105 focus-within:scale-105 hover:z-10 focus-within:z-10"
          >
               <div className=" bg-linear-to-b from-transparent via-card/65 via-10% to-card p-[1.2rem] transition-transform duration-500 ease-in-out [@media(hover:hover)]:translate-y-[55%] [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-focus-within:translate-y-0 group-hover:delay-300 group-focus-within:duration-0">
                    <h2 className="relative w-max max-w-full text-xl font-semibold after:content-[''] after:absolute after:-bottom-1.5 after:left-[-1.3rem] after:h-1 after:w-[calc(100%+1.6rem)] after:bg-primary after:origin-left after:transition-transform after:duration-300 [@media(hover:hover)]:after:scale-x-0 [@media(hover:hover)]:group-hover:after:scale-x-100 [@media(hover:hover)]:group-focus-within:after:scale-x-100 mb-5">
                         {title}
                    </h2>
                    <div className="transition-opacity duration-700 ease-linear [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100 group-hover:delay-300">
                         <p className="mb-5 text-card-foreground/90"> {description}</p>
                         <Button asChild variant="outline" className="border-primary! bg-primary/20! hover:bg-primary/40!" size="lg">
                              <a href={downloadUrl} download>
                                   <Download className="size-5" />
                                   Download
                              </a>
                         </Button>
                    </div>
               </div>
          </div>
     )
}