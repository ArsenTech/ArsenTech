"use client"
import { useEffect, useMemo, useState } from "react"

interface LandingH1Props{
     texts: string[],
     prefix: string,
     type?: "solid" | "colorful"
}
export default function LandingH1({texts, prefix, type="colorful"}: LandingH1Props){
     const [index, setIndex] = useState(0);
     useEffect(()=>{
          const interval = setInterval(()=>{
               setIndex(prev=>(prev+1) % texts.length)
          },1250);
          return () => clearInterval(interval)
     },[texts.length])
     const text = useMemo(()=>{
          const text = texts[index];
          return type==="solid" ? `${prefix} ${text}` : text;
     }, [texts,index,prefix,type]);
     return (
          <h1 className="inline-flex justify-center items-center flex-col gap-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
               {type === "colorful" ? (
                    <>
                    <span>{prefix}</span>
                    <span style={{color: "rgb(37, 236, 183)"}}>{text}</span>
                    </>
               ) : text}
          </h1>
     )
}