import PageLayout from "@/components/layout";
import LandingPage from "@/contents";
import { MAIN_ANCHOR_LINKS } from "@/lib/constants/links";
import { getRecentPosts } from "@/lib/helpers/blog";

export default async function Home() {
  const posts = await getRecentPosts();
  return (
    <PageLayout anchorLinks={MAIN_ANCHOR_LINKS} includeSubscribePopup>
      <LandingPage recentPosts={posts}/>
    </PageLayout>
  );
}
