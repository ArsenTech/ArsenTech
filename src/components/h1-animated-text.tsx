"use client"
import { useEffect, useMemo, useState } from "react"

const texts = ["Tech Fans", "Programmers", "Cybersecurity Fans", "People Finding for the Solutions"]

export default function LandingH1(){
     const [index, setIndex] = useState(0);
     useEffect(()=>{
          const interval = setInterval(()=>{
               setIndex(prev=>(prev+1) % texts.length)
          },1250);
          return () => clearInterval(interval)
     },[])
     const text = useMemo(()=>texts[index], [index]);
     return (
          <h1 className="inline-flex justify-center items-center flex-col gap-3 text-4xl sm:text-5xl lg:text-6xl font-bold"><span>Blog Page For</span><span style={{color: "rgb(37, 236, 183)"}}>{text}</span></h1>
     )
}