"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Scale } from "lucide-react";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { IProject } from "@/lib/types";
import Link from "next/link";

interface ProjectCardProps{
     data: IProject
}
export default function ProjectCard({data}: ProjectCardProps){
     return (
          <Card className="justify-between">
               <Image src={data.thumbnail} alt={data.name} width={340} height={192} className="object-center object-cover w-full aspect-video"/>
               <CardHeader>
                    {data.license && (
                         <CardAction>
                              <Badge variant="secondary" asChild>
                                   <Link href={data.license.url} target="_blank" rel="noopener nofollow noreferrer">
                                        <Scale/>
                                        {data.license.name}
                                   </Link>
                              </Badge>
                         </CardAction>
                    )}
                    <CardTitle>{data.name}</CardTitle>
                    {data.description && (
                         <CardDescription className="col-span-2">
                              {data.description}
                         </CardDescription>
                    )}
               </CardHeader>
               <CardFooter>
                    <div className="flex items-center gap-2 flex-wrap w-full">
                         <Button className="flex-1" asChild>
                              <Link href={data.link} target="_blank" rel="noopener nofollow noreferrer">
                                   Learn More
                                   <ArrowRight/>
                              </Link>
                         </Button>
                         <Button className="flex-1" variant="secondary" asChild>
                              <Link href={data.contributionLink} target="_blank" rel="noopener nofollow noreferrer">
                                   <Code/>
                                   Get Involved
                              </Link>
                         </Button>
                    </div>
               </CardFooter>
          </Card>
     )
}