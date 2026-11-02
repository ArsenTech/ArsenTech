"use client"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import { Search } from "lucide-react";
import FAQSection from "@/components/sections/faq";
import { DOWNLOADS_FAQS } from "@/lib/constants/faqs";
import DownloadsSection from "@/components/sections/downloads";
import WallpapersSection from "@/components/sections/wallpapers";

export default function DownloadsContent(){
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-8 h-screen min-h-125 px-4 text-center" style={getBackgroundImage()}>
                    <LandingH1 prefix="Here You Can Download" texts={["Windows versions", "Software", "Tools", "More Stuff"]}/>
                    <Button size="xl" variant="alternate" asChild>
                         <Link href="#downloads"><Search/> Discover</Link>
                    </Button>
               </AppSection>
               <DownloadsSection/>
               <WallpapersSection/>
               <FAQSection list={DOWNLOADS_FAQS} surface="background"/>
          </main>
     )
}