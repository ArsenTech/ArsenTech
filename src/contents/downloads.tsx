"use client"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import { Search } from "lucide-react";
import { IDownloadItem } from "@/lib/types/downloads";
import { IFAQItem } from "@/lib/types";
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import DownloadsLoader, { WallpapersLoader } from "@/loaders/content/downloads";
import dynamic from "next/dynamic";
import FAQLoader from "@/loaders/content/faq";

const DownloadsSectionContent = dynamic(()=>import("@/sections/downloads"),{
     ssr: false,
     loading: DownloadsLoader
});
const WallpapersSectionContent = dynamic(()=>import("@/sections/wallpapers"),{
     ssr: false,
     loading: WallpapersLoader
});
const FAQSection = dynamic(()=>import("@/sections/faq"),{
     ssr: false,
     loading: FAQLoader
});

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
               <SiteSection id="downloads">
                    <SectionTitle>Downloads</SectionTitle>
                    <DownloadsSectionContent list={list}/>
               </SiteSection>
               <SiteSection id="wallpapers" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">Wallpapers</SectionTitle>
                    <WallpapersSectionContent/>
               </SiteSection>
               <SiteSection id="faqs">
                    <SectionTitle surface="background">FAQs</SectionTitle>
                    <FAQSection list={faqs}/>
               </SiteSection>
          </main>
     )
}