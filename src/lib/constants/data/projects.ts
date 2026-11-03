import { IProject } from "@/lib/types";

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