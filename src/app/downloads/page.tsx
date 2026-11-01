import PageLayout from "@/components/layout";
import DownloadsContent from "@/contents/downloads";
import { DOWNLOAD_ANCHOR_LINKS } from "@/lib/constants";
import { metaAlternatives } from "@/lib/helpers/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Downloads",
     description: "Downloads Page of ArsenTech's Official Website",
     alternates: metaAlternatives("/downloads")
}

export default function DownloadsPage(){
     return (
          <PageLayout anchorLinks={DOWNLOAD_ANCHOR_LINKS}>
               <DownloadsContent/>
          </PageLayout>
     )
}