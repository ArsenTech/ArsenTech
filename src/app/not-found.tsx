import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
     title: "There was an Error 404",
}

export default function NotFound(){
     return (
          <div className="flex items-center justify-center flex-col gap-4 h-screen min-h-[500px] px-4 text-center font-[family-name:var(--font-sora)]">
               <h1 className="text-7xl lg:text-9xl m-0 font-extrabold text-primary tracking-tight">404</h1>
               <p className="text-3xl md:text-4xl font-bold tracking-tight">Oops! Page Not Found.</p>
               <p className="text-lg font-light text-muted-foreground">There was an error. We cannot find page you are looking for.</p>
               <Button asChild size="lg">
                    <Link href="/">Go Back</Link>
               </Button>
          </div>
     )
}