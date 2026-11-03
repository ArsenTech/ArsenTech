import PageLayout from "@/components/layout";
import LandingPage from "@/contents";
import { MAIN_ANCHOR_LINKS } from "@/lib/constants/links";
import { getRecentPosts } from "@/lib/helpers/blog";
import { getProjects, getSkills } from "@/lib/helpers/data";
import { getMainFAQ } from "@/lib/helpers/data/faqs";

export default async function Home() {
  const [skills, posts, projects, faqs] = await Promise.all([
    getSkills(),
    getRecentPosts(),
    getProjects(),
    getMainFAQ()
  ]);
  return (
    <PageLayout anchorLinks={MAIN_ANCHOR_LINKS} includeSubscribePopup>
      <LandingPage
        skills={skills}
        recentPosts={posts}
        projects={projects}
        faqList={faqs}
      />
    </PageLayout>
  );
}
