import { SOCIAL_MEDIA_LINKS } from "@/lib/constants"
import { getBackgroundImage} from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

export default function Footer(){
     const [date] = useState(new Date())
     return (
          <footer className="w-full bg-main-footer text-white py-20 text-center" style={getBackgroundImage("footer")}>
               <div className="inner-width">
                    <div className="mb-5 text-base">
                         <p>&copy; {date.getFullYear()} | Developed By <Link className="underline text-[#E8FDF7] font-medium transition hover:text-[#59facf]" href="https://www.youtube.com/@ArsenTech/about">ArsenTech</Link></p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-6">
                         {SOCIAL_MEDIA_LINKS.map(({Icon,url},i)=>(
                              <Link key={i} href={url} className="text-2xl hover:text-[#59facf] transition"><Icon/></Link>
                         ))}
                    </div>
               </div>
          </footer>
     )
}