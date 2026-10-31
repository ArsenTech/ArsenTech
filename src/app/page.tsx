import PageLayout from "@/components/layout";
import { SOCIAL_MEDIA_LINKS } from "@/lib/constants";
import { getBackgroundImage } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout>
      <main>
        <section id="#banner" className="text-white flex items-center justify-center flex-col gap-5 h-screen min-h-[500px] px-4 text-center" style={getBackgroundImage()}>
          <Link href="https://arsentech.github.io">
            <Image src="/arsentech-dark.svg" alt="logo" width={300} height={64}/>
          </Link>
          <h1 className="text-4xl sm:text-6xl font-bold">Coming Soon...</h1>
          <p className="text-lg sm:text-xl">I&apos;m working on something exciting for the website. Stay tuned!</p>
          <div className="flex justify-center flex-wrap gap-6">
            {SOCIAL_MEDIA_LINKS.map(({Icon,url},i)=>(
              <Link key={i} href={url} className="text-2xl hover:text-[#59facf] transition"><Icon/></Link>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
