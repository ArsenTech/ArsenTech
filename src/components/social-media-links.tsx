import { SOCIAL_MEDIA_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function SocialMediaLinks(){
     return (
          <div className="flex justify-center flex-wrap gap-6">
               {SOCIAL_MEDIA_LINKS.map(({Icon,url,title},i)=>(
                    <Link key={i} href={url} className="text-2xl hover:text-[#59facf] transition" title={title}>
                         <Icon/>
                    </Link>
               ))}
          </div>
     )
}