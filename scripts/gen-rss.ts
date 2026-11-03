import { Feed } from "feed"
import fs from "fs"
import path from "path"
import { getAllPosts } from "@/lib/helpers"

const SITE_URL = "https://arsentech-yt.vercel.app"

const generateRSS = async() => {
     const feed = new Feed({
          id: SITE_URL,
          title: "ArsenTech",
          description: "Learn about cybersecurity, tech tutorials, unique coding projects, and other tech-related posts all in one place.",
          generator: "Feed for Node.js",
          language: "en",
          link: SITE_URL,
          image: `${SITE_URL}/app-icon.png`,
          favicon: `${SITE_URL}/favicon.ico`,
          copyright: `All rights reserved ${new Date().getFullYear()}, ArsenTech`,
          category: "Tech",
          author: {
               name: "ArsenTech",
               link: "https://arsentech.github.io",
          },
          feedLinks: {
               rss2: `${SITE_URL}/rss.xml`,
               json: `${SITE_URL}/rss.json`,
               atom: `${SITE_URL}/atom.xml`,
          },
     })

     const posts = await getAllPosts()

     posts.forEach(post => {
          feed.addItem({
               title: post.title,
               description: post.description,
               id: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
               link: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
               date: post.date,
               category: post.categories.map(cat=>({name: cat})),
               author: [
                    {
                         name: post.author.name,
                         link: post.author.url
                    },
                    {
                         name: "ArsenTech",
                         link: "https://arsentech.github.io",
                    }
               ]
          })
     })

     const publicDir = path.join(process.cwd(), "public")
     if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir)
     }

     fs.writeFileSync(path.join(publicDir, "rss.xml"), feed.rss2())
     fs.writeFileSync(path.join(publicDir, "rss.json"), feed.json1())
     fs.writeFileSync(path.join(publicDir, "atom.xml"), feed.atom1())

     console.log("✅ RSS feeds generated.")
}
generateRSS()