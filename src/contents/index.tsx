"use client"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import SocialMediaLinks from "@/components/social-media-links";
import { Mail } from "lucide-react";
import { SiPatreon } from "react-icons/si";
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import AboutSection from "@/components/sections/main/about";

export default function LandingPage(){
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-12 h-screen min-h-[500px] px-4 text-center" style={getBackgroundImage()}>
                    <LandingH1 type="solid" prefix="Hello I'm" texts={["ArsenTech","a Tech Youtuber","a Developer"]}/>
                    <SocialMediaLinks/>
                    <div className="flex items-center gap-6">
                         <Button size="xl" variant="alternate" asChild>
                              <Link href="#contact">
                                   <Mail/>
                                   Contact Me
                              </Link>
                         </Button>
                         <Button size="xl" variant="secondary" asChild>
                              <Link href="https://www.patreon.com/ArsenTech">
                                   <SiPatreon/>
                                   Join my Patreon
                              </Link>
                         </Button>
                    </div>
               </AppSection>
               <AboutSection/>
               <SiteSection id="services" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">Services</SectionTitle>
               </SiteSection>
               <SiteSection id="blog">
                    <SectionTitle>Recent posts</SectionTitle>
               </SiteSection>
               <SiteSection id="projects" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">Projects</SectionTitle>
               </SiteSection>
               <SiteSection id="contact">
                    <SectionTitle>Get in Touch</SectionTitle>
               </SiteSection>
               <SiteSection id="faqs" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">FAQs</SectionTitle>
               </SiteSection>
          </main>
     )
}