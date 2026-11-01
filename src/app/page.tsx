import PageLayout from "@/components/layout";
import LandingPage from "@/contents";
import { MAIN_ANCHOR_LINKS } from "@/lib/constants/links";
import { getRecentPosts } from "@/lib/helpers";

export default async function Home() {
  const posts = await getRecentPosts();
  return (
    <PageLayout anchorLinks={MAIN_ANCHOR_LINKS}>
      <LandingPage recentPosts={posts}/>
    </PageLayout>
  );
}
