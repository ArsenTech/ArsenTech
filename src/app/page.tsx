import PageLayout from "@/components/layout";
import LandingPage from "@/contents";
import { MAIN_ANCHOR_LINKS } from "@/lib/constants/links";

export default function Home() {
  return (
    <PageLayout anchorLinks={MAIN_ANCHOR_LINKS}>
      <LandingPage/>
    </PageLayout>
  );
}
