"use client"
import Giscus from '@giscus/react';
import PostSection from './post-section';
import { useCurrentTheme } from '@/hooks/use-current-theme';

interface BlogInteractionsProps{
     postTitle: string
}
export default function BlogInteractions({postTitle}: BlogInteractionsProps){
     const currTheme = useCurrentTheme()
     return (
          <PostSection sectionTitle="Interactions" collapsible="mobile" id="interactions">
               <Giscus
                    repo="arsentech/blog"
                    repoId="R_kgDOOQZTMQ"
                    category="Blog comments"
                    categoryId="DIC_kwDOOQZTMc4CqOxn"
                    mapping="pathname"
                    reactionsEnabled="1"
                    term={postTitle}
                    emitMetadata="0"
                    inputPosition="top"
                    theme={`${currTheme==="light" ? "light" : "dark"}_high_contrast`}
                    lang="en"
                    loading="lazy"
               />
          </PostSection>
  );
}