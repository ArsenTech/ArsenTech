import { Bug, CodeIcon, Gamepad2, Hammer, ImageIcon, Laptop } from "lucide-react"
import { IWorkItem, ISkill, IProject } from "../types"

export const SKILLS: ISkill[] = [
     {name: "Web Dev (HTML, CSS, JS)", percentage: 100},
     {name: "TypeScript", percentage: 98},
     {name: "React", percentage: 95},
     {name: "Next.js", percentage: 90},
     {name: "Tailwind CSS", percentage: 100},
     {name: "shadcn ui", percentage: 100}
]
export const WORKS: IWorkItem[] = [
     {Icon: Laptop, title: "Tutorials", description: "Tech Tutorials (Windows, iPhone, Linux, and Android) and Malware Removal Tutorials in One Playlist", url: "https://www.youtube.com/playlist?list=PLsOMVP9OgGeosVdpYLlVuNTa-iiOSvGHS"},
     {Icon: CodeIcon, title: "WebDev Tutorials", description: "HTML, CSS, Javascript, React, and Any JS Framework Tutorials In One Playlist", url: "https://www.youtube.com/playlist?list=PLgdpvA9j5I7RrhEcmB_44nTsTc39GUUwX"},
     {Icon: Gamepad2, title: "Games", description: "Simple arcade games made by ArsenTech on Scratch", url: "https://scratch.mit.edu/users/ArsenTech/projects/"},
     {Icon: Hammer, title: "Windows Experiments", description: "Here, I push Windows Virtual Machines to their limits by doing Insane Windows Experiments. Expect chaos, crashes, and impossible tests!", url: "https://www.youtube.com/playlist?list=PLsOMVP9OgGerNCzsOFk1jnIlbXrv6nWrX"},
     {Icon: Bug, title: "Malware Tests", description: "Malware Tests (Computer Virus Tests), Antivirus Tests, Viewer-Made Malware Tests, and Malware Review Videos in One Place!", url: "https://www.youtube.com/playlist?list=PLsOMVP9OgGeoAFJZdOofZQS3R0g5G57ot"},
     {Icon: ImageIcon, title: "Wallpapers", description: "Here you'll like and download some wallpapers made by ArsenTech", url: "https://www.deviantart.com/arsen2005/gallery"},
]
export const PROJECTS: IProject[] = [
     {
          name: "Idea Checklist",
          description: "A checklist app for Tech YouTube Streamers and other people built using React, Tauri, and ShadCN UI",
          thumbnail: "/projects/idea-checklist.webp",
          license: {
               name: "MIT",
               url: "https://github.com/ArsenTech/idea-checklist/blob/main/LICENSE.md"
          },
          link: "https://github.com/ArsenTech/idea-checklist",
          contributionLink: "https://github.com/ArsenTech/idea-checklist/blob/main/CONTRIBUTING.md"
     },
     {
          name: "Creations stats",
          description: "A Github Action that generates user's portfolio stats (Repositories and Gists). Perfect for profile readme customization!",
          thumbnail: "/projects/creations-stats.webp",
          license: {
               name: "MIT",
               url: "https://github.com/ArsenTech/creations-stats-workflow/blob/main/LICENSE.md"
          },
          link: "https://github.com/marketplace/actions/creations-stats",
          contributionLink: "https://github.com/ArsenTech/creations-stats-workflow/blob/main/CONTRIBUTING.md"
     },
     {
          name: "ClamAV GUI",
          description: "A GUI for ClamAV Antivirus that makes the Antivirus itself look professional and work exactly like ClamAV",
          thumbnail: "/projects/clamav-gui.webp",
          license: {
               name: "GPL-3.0",
               url: "https://github.com/ArsenTech/clamav-gui/blob/main/LICENSE.md"
          },
          link: "https://github.com/ArsenTech/clamav-gui",
          contributionLink: "https://github.com/ArsenTech/clamav-gui/blob/main/docs/CONTRIBUTING.md"
     },
     {
          name: "I18N Translator",
          description: "A Universal Translator that helps you localize and translate some apps into your native language.",
          thumbnail: "/projects/i18n-translator.webp",
          license: {
               name: "Apache-2.0",
               url: "https://github.com/ArsenTech/i18n-translator/blob/main/LICENSE"
          },
          link: "https://github.com/ArsenTech/i18n-translator",
          contributionLink: "https://github.com/ArsenTech/i18n-translator/blob/main/docs/CONTRIBUTING.md"
     }
];

export const POSTS_PER_PAGE = 8
export const POSTS_IN_SEARCH = 5
export const MAX_RELATED_POSTS = 3
export const MAX_FEATURED_POSTS = 7
export const SITE_URL = process.env.NODE_ENV==="production" ? "https://arsentech-yt.vercel.app" : "http://localhost:3000"

export const KEYWORDS = ["arsentech", "arsentech youtube", "arsentech github", "malware", "malware testing", "windows", "windows experiments", "tech tutorials", "technology", "tech", "arsen tech", "coding", "programming", "coding with arsentech", "arsentech shorts", "remove memz", "remove 000.exe", "avast vs noescape", "antivirus", "linux", "virus testing", "antimalware", "ransomware", "trojan", "trojan malware", "techonologies", "html", "css", "js", "coding languages", "computer", "computer virus", "computer malware", "software", "more arsentech", "chrome", "tech tips", "tech youtuber", "programmer", "coder", "coding tips", "freeware", "software engineer", "software coding", "ms dos", "operating system", "coding tutorials", "pc"]