import { getPostBySlug } from "@/lib/helpers";
import { NextResponse } from "next/server";

export const runtime = "nodejs"

interface SinglePostPageProps{
     params: Promise<{slug: string}>
}
export async function GET(_: Request, {params}: SinglePostPageProps){
     try{
          const {slug} = await params;
          const post = await getPostBySlug(slug)
          if(!post) return new NextResponse("Post not found",{status: 404});
          return NextResponse.json({
               title: post.title,
               description: post.description,
               date: post.date
          })
     } catch (err){
          console.error(err);
          return new NextResponse("Failed to fetch posts for OG image",{status: 500})
     }
}