import { Skeleton } from "@/components/ui/skeleton";
import { FeaturedPostsLoader, FiltersLoader } from "@/loaders/widgets";
import { PostsLoader } from "@/loaders/lists";
import { POSTS_PER_PAGE } from "@/lib/constants";
import PaginationLoader from "@/loaders/pagination";
import SiteSection from "@/components/layout/section";

function BlogPostsLoader(){
     return (
          <div className="space-y-5 w-full">
               <Skeleton className="w-full h-8"/>
               <PostsLoader count={POSTS_PER_PAGE}/>
               <PaginationLoader/>
          </div>
     )
}
export default function BlogContentLoader(){
     return (
          <>
          <BlogPostsLoader/>
          <div className="space-y-4 relative lg:sticky top-0 lg:top-21.25 h-fit -order-1 lg:order-1">
               <FeaturedPostsLoader/>
               <FiltersLoader/>
          </div>
          </>
     )
}
export function SearchContentLoader(){
     return (
          <SiteSection className="min-h-[56vh]" id="search" innerWidthClass="flex flex-col items-center justify-center gap-6">
               <BlogPostsLoader/>
          </SiteSection>
     )
}