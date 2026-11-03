import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SiYoutube } from "react-icons/si";
import Link from "next/link";

interface ChannelCardProps{
     name: string,
     fallback: string,
     src: string,
     description?: string,
     url: string
}
export default function ChannelCard({name, fallback, src, description, url}: ChannelCardProps){
     return (
          <Item variant="muted" className="gap-4">
               <ItemMedia>
                    <Avatar className="size-20">
                         <AvatarImage src={src} alt={name}/>
                         <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
               </ItemMedia>
               <ItemContent>
                    <ItemTitle className="text-lg sm:text-xl md:text-2xl">{name}</ItemTitle>
                    {description && (
                         <ItemDescription className="text-xs sm:text-sm md:text-base">{description}</ItemDescription>
                    )}
               </ItemContent>
               <ItemActions>
                    <Button size="lg" variant="outline" asChild>
                         <Link href={url} target="_blank" rel="noopener nofollow noreferrer">
                              <SiYoutube className="size-5"/>
                              Subscribe
                         </Link>
                    </Button>
               </ItemActions>
          </Item>
     )
}