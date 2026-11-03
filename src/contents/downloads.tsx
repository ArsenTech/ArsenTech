"use client"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import { Search } from "lucide-react";
import FAQSection from "@/sections/faq";
import DownloadsSection from "@/sections/downloads";
import WallpapersSection from "@/sections/wallpapers";
import { IDownloadItem } from "@/lib/types/downloads";
import { IFAQItem } from "@/lib/types";

interface DownloadsContentProps{
     list: IDownloadItem[],
     faqs: IFAQItem[]
}
export default function DownloadsContent({list,faqs}: DownloadsContentProps){
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-8 h-screen min-h-125 px-4 text-center" style={getBackgroundImage()}>
                    <LandingH1 prefix="Here You Can Download" texts={["Windows versions", "Software", "Tools", "More Stuff"]}/>
                    <Button size="xl" variant="alternate" asChild>
                         <Link href="#downloads"><Search/> Discover</Link>
                    </Button>
               </AppSection>
               <DownloadsSection list={list}/>
               <WallpapersSection/>
               <FAQSection list={faqs} surface="background"/>
          </main>
     )
}