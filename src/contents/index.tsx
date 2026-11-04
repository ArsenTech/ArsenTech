"use client"
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import SocialMediaLinks from "@/components/social-media-links";
import { ArrowRight, Mail } from "lucide-react";
import { SiPatreon } from "react-icons/si";
import AboutSection from "@/sections/about";
import { IBlogPostBase } from "@/lib/types/blog";
import ContactSection from "@/sections/contact";
import FAQSection from "@/sections/faq";
import { IFAQItem, IProject, ISkill } from "@/lib/types";
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import { PostsLoader, ProjectsLoader, WorksLoader } from "@/components/loaders/lists";
import dynamic from "next/dynamic";

const BlogPosts = dynamic(()=>import("@/components/lists/blog-posts"),{
     ssr: false,
     loading: () => <PostsLoader count={5}/>
});
const WorksList = dynamic(()=>import("@/components/lists/works"),{
     ssr: false,
     loading: WorksLoader
});
const ProjectsList = dynamic(()=>import("@/components/lists/projects"),{
     ssr: false,
     loading: ProjectsLoader
});

interface LandingPageProps{
     recentPosts: IBlogPostBase[],
     faqList: IFAQItem[],
     projects: IProject[],
     skills: ISkill[]
}
export default function LandingPage({recentPosts, faqList, projects, skills}: LandingPageProps){
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
               <AboutSection skills={skills}/>
               <SiteSection id="works" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">Works</SectionTitle>
                    <WorksList/>
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
                    <ProjectsList projects={projects}/>
               </SiteSection>
               <ContactSection/>
               <FAQSection list={faqList}/>
          </main>
     )
}