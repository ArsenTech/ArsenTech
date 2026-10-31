/* eslint-disable @next/next/no-img-element */
import { absoluteURL } from "@/lib/helpers/seo"
import { formatDate } from "date-fns"
import { ImageResponse } from "next/og"
import { NextResponse } from "next/server"

export const runtime = "edge"
type ParamsType = {params: Promise<{slug: string}>}

export async function GET(req: Request, {params}: ParamsType) {
  try{
    const {slug} = await params
    const siteUrl = new URL(req.url).origin;
    const [res, regular, semibold] = await Promise.all([
      fetch(`${siteUrl}/api/posts/${slug}`,{
        next: { revalidate: 60 }
      }),
      fetch(new URL("../../../../assets/Sora-Regular.ttf",import.meta.url)).then(res => res.arrayBuffer()),
      fetch(new URL("../../../../assets/Sora-SemiBold.ttf",import.meta.url)).then(res => res.arrayBuffer())
    ])
    if (!res.ok) return new NextResponse("Post not found",{status: 404});
    const post = await res.json() as {
      title: string,
      description: string,
      date: string
    }
    return new ImageResponse((
      <div style={{
        backgroundImage: `url(${absoluteURL("/backgrounds/og-bg.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }} tw="flex flex-col w-full h-full items-center justify-between p-5 text-white">
        <img src={`${siteUrl}/arsentech-dark.svg`} alt="ArsenTech" tw="mb-3" width={300} height={64}/>
        <div tw="flex items-center justify-center flex-col" style={{rowGap: "10px"}}>
          <h1 tw="text-[64px] my-0 font-semibold text-center">{post.title}</h1>
          <p tw="text-[27px] my-0 text-center">{post.description}</p>
        </div>
        <p tw="text-3xl text-center font-semibold">{formatDate(post.date,"MMMM dd, yyyy")}</p>
      </div>
    ),{
      fonts: [
        {
          name: "Sora",
          data: regular,
          style: "normal",
          weight: 400
        },
        {
          name: "Sora",
          data: semibold,
          style: "normal",
          weight: 600
        }
      ]
    })
  } catch (e: unknown){
    console.error(e)
    return new Response("Failed to generate OpenGraph image",{status: 500})
  }
}