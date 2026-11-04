
import { Button } from "@/components/ui/button";
import type { IWorkItem } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface WorkCardProps{
     data: IWorkItem
}
export default function WorkCard({data: { Icon, ...data },}: WorkCardProps) {
     return (
          <div className="flex h-full flex-col items-center gap-3 rounded-md border bg-card p-7 text-card-foreground shadow-md transition-all sm:items-start">
               <Icon className="size-10 shrink-0 text-primary" />
               <h3 className="text-center text-xl font-semibold sm:text-left md:text-2xl">{data.title}</h3>
               <p className="text-center text-xs sm:text-left md:text-sm">{data.description}</p>
               <Button variant="ghost" className="mt-auto" asChild>
                    <Link
                         href={data.url}
                         target="_blank"
                         rel="nofollow noopener noreferrer"
                    >
                         Learn more
                         <ArrowRight />
                    </Link>
               </Button>
          </div>
     )
}