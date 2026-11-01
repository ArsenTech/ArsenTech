"use client"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import { Search } from "lucide-react";
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";

export default function DownloadsContent(){
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-8 h-screen min-h-[500px] px-4 text-center" style={getBackgroundImage()}>
                    <LandingH1 prefix="Here You Can Download" texts={["Windows versions", "Software", "Tools", "More Stuff"]}/>
                    <Button size="xl" variant="alternate" asChild>
                         <Link href="#downloads"><Search/> Discover</Link>
                    </Button>
               </AppSection>
               <SiteSection id="downloads">
                    <SectionTitle>Downloads</SectionTitle>
               </SiteSection>
               <SiteSection id="wallpapers" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">Wallpapers</SectionTitle>
               </SiteSection>
               <SiteSection id="faqs">
                    <SectionTitle>FAQs</SectionTitle>
               </SiteSection>
          </main>
     )
}