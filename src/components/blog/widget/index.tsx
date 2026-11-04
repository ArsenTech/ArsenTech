"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {format} from "date-fns"
import Link from "next/link";
import { BlogItemProps } from "@/components/items/blog";
import { Calendar } from "lucide-react";

interface BlogWidgetProps{
     title: string,
     children: React.ReactNode,
}
export function BlogWidget({title, children}: BlogWidgetProps){
     return (
          <Card>
               <CardHeader>
                    <CardTitle className="flex justify-between items-center gap-2">
                         {title}
                    </CardTitle>
               </CardHeader>
                    <CardContent className="space-y-4">
                    {children}
               </CardContent>
          </Card>
     )
}
export function BlogWidgetCard({postData}: BlogItemProps){
     const {title, date, slug} = postData
     return (
          <Link className="inline-block w-full space-y-1" href={`/blog/${slug}`}>
               <h2 className="text-lg font-semibold">{title}</h2>
               <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="size-4"/>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">{format(date,"LLL do, yyyy")}</p>
               </div>
          </Link>
     )
}