import {SiYoutube, SiGithub, SiDeviantart, SiOdysee, SiScratch, SiPatreon} from "react-icons/si"
import {FaCodepen} from "react-icons/fa"
import { ILink } from "./types"

export const LINKS: ILink[] = [
     {name: "Home", url: "/#banner"},
     {name: "About", url: "/#about"},
     {name: "Contact", url: "/#contact"},
     {name: "Downloads", url: "/downloads"},
     {name: "Blog", url: "/blog"}
]
export const MAIN_ANCHOR_LINKS: ILink[] = [
     {name: "Services", url: "/#services"},
     {name: "Recent Posts", url: "/#blog"},
     {name: "Projects", url: "/#projects"},
     {name: "FAQs", url: "/#faqs"}
]
export const DOWNLOAD_ANCHOR_LINKS: ILink[] = [
     {name: "Downloads", url: "/downloads#downloads"},
     {name: "Wallpapers", url: "/downloads#wallpapers"},
     {name: "FAQs", url: "/downloads#faqs"}
]

export const SOCIAL_MEDIA_LINKS = [
     {Icon: SiYoutube, url: "https://www.youtube.com/c/ArsenTech/", title: "Subscribe on YouTube"},
     {Icon: SiPatreon, url: "https://www.patreon.com/ArsenTech", title: "Join my Patreon"},
     {Icon: FaCodepen, url: "https://codepen.io/ArsenJS/", title: "Follow on Codepen"},
     {Icon: SiGithub, url: "https://github.com/ArsenTech/", title: "Follow on GitHub"},
     {Icon: SiDeviantart, url: "https://www.deviantart.com/arsen2005", title: "Follow on DeviantArt"},
     {Icon: SiScratch, url: "https://scratch.mit.edu/users/ArsenTech/", title: "Follow on Scratch"},
     {Icon: SiOdysee, url: "https://odysee.com/@ArsenTech", title: "Follow on Odysee"},
]

export const POSTS_PER_PAGE = 8
export const POSTS_IN_SEARCH = 5
export const MAX_RELATED_POSTS = 3
export const MAX_FEATURED_POSTS = 7
export const SITE_URL = process.env.NODE_ENV==="production" ? "https://arsentech-yt.vercel.app" : "http://localhost:3000"

export const KEYWORDS = ["arsentech", "arsentech youtube", "arsentech github", "malware", "malware testing", "windows", "windows experiments", "tech tutorials", "technology", "tech", "arsen tech", "coding", "programming", "coding with arsentech", "arsentech shorts", "remove memz", "remove 000.exe", "avast vs noescape", "antivirus", "linux", "virus testing", "antimalware", "ransomware", "trojan", "trojan malware", "techonologies", "html", "css", "js", "coding languages", "computer", "computer virus", "computer malware", "software", "more arsentech", "chrome", "tech tips", "tech youtuber", "programmer", "coder", "coding tips", "freeware", "software engineer", "software coding", "ms dos", "operating system", "coding tutorials", "pc"]