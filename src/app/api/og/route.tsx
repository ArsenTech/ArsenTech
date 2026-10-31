/* eslint-disable @next/next/no-img-element */
import { absoluteURL, getValueFromKey } from "@/lib/helpers/seo"
import { formatDate } from "date-fns"
import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(req: Request) {
  try{
    const {searchParams, origin: siteUrl} = new URL(req.url)
    const [regular, semibold] = await Promise.all([
      fetch(new URL("../../../assets/Sora-Regular.ttf",import.meta.url)).then(res => res.arrayBuffer()),
      fetch(new URL("../../../assets/Sora-SemiBold.ttf",import.meta.url)).then(res => res.arrayBuffer())
    ])
    const title = getValueFromKey(searchParams,"title","ArsenTech Blog")
    const description = getValueFromKey(searchParams,"description","Learn about cybersecurity, tech tutorials, unique coding projects, and other tech-related posts all in one place.")
    const date = getValueFromKey(searchParams,"date",new Date().toDateString())
    return new ImageResponse((
      <div style={{
        backgroundImage: "linear-gradient(140deg,#22b455 25%,#1dd1a1)"
      }} tw="flex flex-col w-full h-full items-center justify-between p-5 text-white">
        <img src={`${siteUrl}/arsentech-dark.svg`} alt="ArsenTech" tw="mb-3" width={300} height={64}/>
        <div tw="flex items-center justify-center flex-col" style={{rowGap: "10px"}}>
          <h1 tw="text-[64px] my-0 font-semibold text-center">{title}</h1>
          <p tw="text-[27px] my-0 text-center">{description}</p>
        </div>
        <p tw="text-3xl text-center font-semibold">{formatDate(date,"MMMM dd, yyyy")}</p>
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