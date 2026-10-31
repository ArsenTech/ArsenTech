import {SiYoutube, SiGithub, SiDeviantart, SiOdysee, SiScratch, SiPatreon} from "react-icons/si"
import {FaCodepen} from "react-icons/fa"

export const LINKS = [
     {name: "Home", url: "/#home"},
     {name: "About", url: "/#about"},
     {name: "Contact", url: "/#contact"},
     {name: "Blog", url: "/blog"}
]

export const SOCIAL_MEDIA_LINKS = [
     {Icon: SiYoutube, url: "https://www.youtube.com/c/ArsenTech/"},
     {Icon: SiPatreon, url: "https://www.patreon.com/ArsenTech"},
     {Icon: FaCodepen, url: "https://codepen.io/ArsenJS/"},
     {Icon: SiGithub, url: "https://github.com/ArsenTech/"},
     {Icon: SiDeviantart, url: "https://www.deviantart.com/arsen2005"},
     {Icon: SiScratch, url: "https://scratch.mit.edu/users/ArsenTech/"},
     {Icon: SiOdysee, url: "https://odysee.com/@ArsenTech"},
]

export const POSTS_PER_PAGE = 8
export const POSTS_IN_SEARCH = 5
export const MAX_RELATED_POSTS = 3
export const MAX_FEATURED_POSTS = 7
export const SITE_URL = process.env.NODE_ENV==="production" ? "https://arsentech-yt.vercel.app" : "http://localhost:3000"

export const KEYWORDS = ["arsentech", "arsentech youtube", "arsentech github", "malware", "malware testing", "windows", "windows experiments", "tech tutorials", "technology", "tech", "arsen tech", "coding", "programming", "coding with arsentech", "arsentech shorts", "remove memz", "remove 000.exe", "avast vs noescape", "antivirus", "linux", "virus testing", "antimalware", "ransomware", "trojan", "trojan malware", "techonologies", "html", "css", "js", "coding languages", "computer", "computer virus", "computer malware", "software", "more arsentech", "chrome", "tech tips", "tech youtuber", "programmer", "coder", "coding tips", "freeware", "software engineer", "software coding", "ms dos", "operating system", "coding tutorials", "pc"]