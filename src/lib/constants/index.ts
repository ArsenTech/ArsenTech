import { ISkill } from "../types"

export const SKILLS: ISkill[] = [
     {name: "Web Dev (HTML, CSS, JS)", percentage: 100},
     {name: "TypeScript", percentage: 98},
     {name: "React", percentage: 95},
     {name: "Next.js", percentage: 90},
     {name: "Tailwind CSS", percentage: 100},
     {name: "shadcn ui", percentage: 100}
]

export const POSTS_PER_PAGE = 8
export const POSTS_IN_SEARCH = 5
export const MAX_RELATED_POSTS = 3
export const MAX_FEATURED_POSTS = 7
export const SITE_URL = process.env.NODE_ENV==="production" ? "https://arsentech-yt.vercel.app" : "http://localhost:3000"

export const KEYWORDS = ["arsentech", "arsentech youtube", "arsentech github", "malware", "malware testing", "windows", "windows experiments", "tech tutorials", "technology", "tech", "arsen tech", "coding", "programming", "coding with arsentech", "arsentech shorts", "remove memz", "remove 000.exe", "avast vs noescape", "antivirus", "linux", "virus testing", "antimalware", "ransomware", "trojan", "trojan malware", "techonologies", "html", "css", "js", "coding languages", "computer", "computer virus", "computer malware", "software", "more arsentech", "chrome", "tech tips", "tech youtuber", "programmer", "coder", "coding tips", "freeware", "software engineer", "software coding", "ms dos", "operating system", "coding tutorials", "pc"]