import { Dot } from "lucide-react";
import Image from "next/image";
import ChannelCard from "@/components/items/channel";
import usePFP from "@/hooks/use-pfp";
import { ISkill } from "@/lib/types";
import dynamic from "next/dynamic";
import { SkillsLoader } from "@/loaders/content/about";

const SkillsList = dynamic(()=>import("@/components/lists/skills"),{
     loading: SkillsLoader
});

interface AboutSectionProps{
     skills: ISkill[]
}
export default function AboutSectionContent({skills}: AboutSectionProps){
     const pfps = usePFP()
     return (
          <>
               <div className="flex items-center flex-wrap gap-5 md:gap-10">
                    <Image src={pfps.main} alt="ArsenTech" width={200} height={200} loading="lazy" className="rounded-full aspect-square object-center mx-auto md:mx-0"/>
                    <div className="w-full md:flex-1 text-center md:text-left space-y-2.5">
                         <h3 className="font-semibold text-2xl">Hello, I&apos;m ArsenTech</h3>
                         <div className="text-muted-foreground text-base flex items-center justify-center md:justify-start gap-2.5 font-semibold">
                              <span>Tech YouTuber</span>
                              <Dot className="size-5"/>
                              <span>Developer</span>
                         </div>
                         <p className="text-sm md:text-base text-left leading-6 mt-5">Arsen, also known online as ArsenTech (formerly known as Arsen Technologies) is an Armenian Tech YouTuber, Programmer (Coder), Developer known for his Tutorials, Virus Testing, Windows Experiments and much more content (formerly Powerpoint OS Videos). I Live in Yerevan, but my Videos are English as of 2020. I&apos;m Working on Programming, Video Editing.</p>
                    </div>
               </div>
               <SkillsList skills={skills}/>
               <div className="flex flex-col gap-3 items-center justify-center mt-5">
                    <h3 className="font-semibold text-2xl">My Other Channels</h3>
                    <ChannelCard
                         src={pfps.shorts}
                         fallback="ATS"
                         name="ArsenTech Shorts"
                         description="Tech Tutorials, Helpful Tips and Tricks, and other Tech-related videos in a Shorts format"
                         url="https://www.youtube.com/channel/UCvLf-YuBTmfSrB47_YARHsA?sub_confirmation=1"
                    />
                    <ChannelCard
                         src={pfps.coding}
                         fallback="CWA"
                         name="Coding with ArsenTech"
                         description="A channel for learners who want clean, high-quality coding tutorials without the noise."
                         url="https://www.youtube.com/channel/UCl52C6cFR1McvN1fAdsxdkA?sub_confirmation=1"
                    />
                    <ChannelCard
                         src={pfps.misc}
                         fallback="M_AT"
                         name="More ArsenTech"
                         description="An ArsenTech's alt channel — home of the randomness. Here you'll see probably other random stuff"
                         url="https://www.youtube.com/channel/UChjvr_TFywsE23UPlwd-wFQ?sub_confirmation=1"
                    />
               </div>
          </>
     )
}