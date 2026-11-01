"use client"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import SocialMediaLinks from "@/components/social-media-links";
import { ArrowRight, Mail } from "lucide-react";
import { SiPatreon } from "react-icons/si";
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import AboutSection from "@/components/sections/main/about";
import { PROJECTS, WORKS } from "@/lib/constants";
import WorkCard from "@/components/cards/work";
import { IBlogPostBase } from "@/lib/types";
import BlogPosts from "@/components/blog-posts";
import ProjectCard from "@/components/cards/project";
import ContactSection from "@/components/sections/main/contact";

interface LandingPageProps{
     recentPosts: IBlogPostBase[]
}
export default function LandingPage({recentPosts}: LandingPageProps){
     return (
          <main>
               <AppSection id="banner" className="text-white flex items-center justify-center flex-col gap-12 h-screen min-h-125 px-4 text-center" style={getBackgroundImage()}>
                    <LandingH1 type="solid" prefix="Hello I'm" texts={["ArsenTech","a Tech Youtuber","a Developer"]}/>
                    <SocialMediaLinks/>
                    <div className="flex items-center gap-4 flex-wrap">
                         <Button size="xl" className="flex-1" variant="alternate" asChild>
                              <Link href="#contact">
                                   <Mail/>
                                   Contact Me
                              </Link>
                         </Button>
                         <Button size="xl" className="flex-1" variant="secondary" asChild>
                              <Link href="https://www.patreon.com/ArsenTech">
                                   <SiPatreon/>
                                   Join my Patreon
                              </Link>
                         </Button>
                    </div>
               </AppSection>
               <AboutSection/>
               <SiteSection id="works" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">Works</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                         {WORKS.map(work=>(
                              <WorkCard
                                   key={work.title}
                                   data={work}
                              />
                         ))}
                    </div>
               </SiteSection>
               <SiteSection id="blog">
                    <SectionTitle>Recent posts</SectionTitle>
                    <BlogPosts posts={recentPosts}/>
                    {recentPosts.length > 0 && (
                         <Button size="xl" variant="secondary" asChild>
                              <Link href="/blog#blog">
                                   More Posts
                                   <ArrowRight />
                              </Link>
                         </Button>
                    )}
               </SiteSection>
               <SiteSection id="projects" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">Projects</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                         {PROJECTS.map(project=>(
                              <ProjectCard
                                   key={project.name}
                                   data={project}
                              />
                         ))}
                    </div>
               </SiteSection>
               <ContactSection/>
               <SiteSection id="faqs" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">FAQs</SectionTitle>
               </SiteSection>
          </main>
     )
}