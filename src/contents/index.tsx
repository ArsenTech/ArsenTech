
import { getBackgroundImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingH1 from "@/components/h1-animated-text";
import AppSection from "@/components/site-section"
import SocialMediaLinks from "@/components/social-media-links";
import { ArrowRight, Mail } from "lucide-react";
import { SiPatreon } from "react-icons/si";
import type { IBlogPostBase } from "@/lib/types/blog";
import type { IFAQItem, IProject, ISkill } from "@/lib/types";
import SiteSection from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
import { PostsLoader, ProjectsLoader, WorksLoader } from "@/loaders/lists";
import dynamic from "next/dynamic";
import FAQLoader from "@/loaders/content/faq";
import AboutLoader from "@/loaders/content/about";
import ContactLoader from "@/loaders/content/contact";

const BlogPosts = dynamic(()=>import("@/components/lists/blog-posts"),{
     loading: () => <PostsLoader count={5}/>
});
const WorksList = dynamic(()=>import("@/components/lists/works"),{
     loading: WorksLoader
});
const ProjectsList = dynamic(()=>import("@/components/lists/projects"),{
     loading: ProjectsLoader
});
const FAQSection = dynamic(()=>import("@/sections/faq"),{
     loading: FAQLoader
});
const AboutSection = dynamic(()=>import("@/sections/about"),{
     loading: AboutLoader
})
const ContactSection = dynamic(()=>import("@/sections/contact"),{
     loading: ContactLoader
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
               <SiteSection id="about">
                    <SectionTitle>About</SectionTitle>
                    <AboutSection skills={skills}/>
               </SiteSection>
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
               <SiteSection id="contact">
                    <SectionTitle className="mb-5">Get in Touch</SectionTitle>
                    <ContactSection/>
               </SiteSection>
               <SiteSection id="faqs" className="bg-card text-card-foreground">
                    <SectionTitle surface="card">FAQs</SectionTitle>
                    <FAQSection list={faqList}/>
               </SiteSection>
          </main>
     )
}