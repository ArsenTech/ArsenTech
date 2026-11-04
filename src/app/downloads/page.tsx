import PageLayout from "@/components/layout";
import DownloadsContent from "@/contents/downloads";
import { DOWNLOAD_ANCHOR_LINKS } from "@/lib/constants/links";
import { getDownloads } from "@/lib/helpers/data";
import { getDownloadsFAQ } from "@/lib/helpers/data/faqs";
import { metaAlternatives } from "@/lib/helpers/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Downloads",
     description: "Downloads Page of ArsenTech's Official Website",
     alternates: metaAlternatives("/downloads")
}

export default async function DownloadsPage(){
     const [downloads, faqs] = await Promise.all([
          getDownloads(),
          getDownloadsFAQ()
     ]);
     return (
          <PageLayout anchorLinks={DOWNLOAD_ANCHOR_LINKS}>
               <DownloadsContent
                    list={downloads}
                    faqs={faqs}
               />
          </PageLayout>
     )
}