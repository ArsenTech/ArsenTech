"use client"

interface PageLayoutProps{
     children: React.ReactNode
}
export default function PageLayout({children}: PageLayoutProps){
     return (
          <div className="flex min-h-screen flex-col font-[family-name:var(--font-sora)]">
               {children}
          </div>
     )
}