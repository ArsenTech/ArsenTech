import { getBackgroundImage} from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import SocialMediaLinks from "@/components/social-media-links"

export default function Footer(){
     const [date] = useState(new Date())
     return (
          <footer className="w-full bg-main-footer text-white py-16 text-center" style={getBackgroundImage("footer")}>
               <div className="inner-width">
                    <div className="mb-5 text-base">
                         <p>&copy; {date.getFullYear()} | Developed By <Link className="underline text-[#E8FDF7] font-medium transition hover:text-[#59facf]" href="https://www.youtube.com/@ArsenTech/about">ArsenTech</Link></p>
                    </div>
                    <SocialMediaLinks/>
               </div>
          </footer>
     )
}