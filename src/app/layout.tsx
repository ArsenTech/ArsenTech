import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ['latin',"latin-ext"]
})

export const metadata: Metadata = {
  title: {
    template: "%s | ArsenTech's Website",
    absolute: "ArsenTech's Website"
  },
  description: "Welcome to ArsenTech's Official Website — your go-to hub for tech tutorials, antivirus comparisons, and in-depth guides for programmers, tech enthusiasts, and more tech related curious minds.",
  authors: [
    {
      name: "ArsenTech",
      url: "https://arsentech.github.io/"
    }
  ],
  keywords: ["arsentech", "arsentech youtube", "arsentech github", "malware", "malware testing", "windows", "windows experiments", "tech tutorials", "technology", "tech", "arsen tech", "coding", "programming", "coding with arsentech", "arsentech shorts", "remove memz", "remove 000.exe", "avast vs noescape", "antivirus", "linux", "virus testing", "antimalware", "ransomware", "trojan", "trojan malware", "techonologies", "html", "css", "js", "coding languages", "computer", "computer virus", "computer malware", "software", "more arsentech", "chrome", "tech tips", "tech youtuber", "programmer", "coder", "coding tips", "freeware", "software engineer", "software coding", "ms dos", "operating system", "coding tutorials", "pc", "blog", "arsentech blog", "tech blog", "coding blog"],
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png"
  },
  manifest: "/manifest.json"
};

export const viewport: Viewport = {
  themeColor: "#22b455"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
