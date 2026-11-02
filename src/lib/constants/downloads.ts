import { IDownloadItem } from "../types";

export const DOWNLOADS: IDownloadItem[] = [
     {
          thumbnail: "/downloads/card-img/ms/win3.1.webp",
          title: "Windows 3.1",
          path: "Win3.1.zip",
          category: "microsoft",
          type: "direct",
          description: "Early Windows OS with GUI, limited features."
     },
     {
          thumbnail: "/downloads/card-img/ms/win95.webp",
          title: "Windows 95",
          path: "windows/Win95.zip",
          category: "microsoft",
          type: "direct",
          description: "Introduced Start menu and Plug & Play support.",
          isRelease: true
     },
     {
          thumbnail: "/downloads/card-img/ms/win98.webp",
          title: "Windows 98",
          path: "windows/Win98.zip",
          category: "microsoft",
          type: "direct",
          description: "Improved hardware support and IE integration.",
          isRelease: true
     },
     {
          thumbnail: "/downloads/card-img/ms/win2000.webp",
          title: "Windows 2000",
          path: "windows/Win2000.zip",
          category: "microsoft",
          type: "direct",
          description: "Business OS with enhanced networking and security.",
          isRelease: true
     },
     {
          thumbnail: "/downloads/card-img/ms/winme.webp",
          title: "Windows ME",
          path: "windows/WinME.zip",
          category: "microsoft",
          type: "direct",
          description: "Introduced System Restore, but unstable.",
          isRelease: true
     },
     {
          thumbnail: "/downloads/card-img/ms/winxp.webp",
          title: "Windows XP",
          path: "windows/WinXP.zip",
          category: "microsoft",
          type: "direct",
          description: "Stable and popular, user-friendly interface.",
          isRelease: true
     },
     {
          thumbnail: "/downloads/card-img/ms/winvista.webp",
          title: "Windows Vista",
          path: "https://archive.org/details/windows-vista-ultimate-sp-2-x-64-fully-updated",
          category: "microsoft",
          type: "external",
          description: "New graphics and security features, mixed reviews."
     },
     {
          thumbnail: "/downloads/card-img/ms/win7.webp",
          title: "Windows 7",
          path: "https://archive.org/details/20230422_20230422_1429",
          category: "microsoft",
          type: "external",
          description: "Performance improvements over Vista, great support."
     },
     {
          thumbnail: "/downloads/card-img/ms/win8.webp",
          title: "Windows 8.1",
          path: "https://archive.org/details/win-8.1-english-x-64_20211019",
          category: "microsoft",
          type: "external",
          description: "Refined desktop features and start button re-added."
     },
     {
          thumbnail: "/downloads/card-img/ms/win10.webp",
          title: "Windows 10",
          path: "https://www.microsoft.com/en-gb/software-download/windows10",
          category: "microsoft",
          type: "external",
          description: "Blend of old Start menu and new modern features."
     },
     {
          thumbnail: "/downloads/card-img/ms/win11.webp",
          title: "Windows 11",
          path: "https://www.microsoft.com/en-gb/software-download/windows11",
          category: "microsoft",
          type: "external",
          description: "Focused on modern design and virtual desktops."
     },
     {
          thumbnail: "/downloads/card-img/softwares/7zip.webp",
          title: "7zip",
          path: "https://github.com/ip7z/7zip/releases/latest",
          category: "software",
          type: "external",
          description: "High compression file archiver, open-source."
     },
     {
          thumbnail: "/downloads/card-img/softwares/AutoClicker.webp",
          title: "AutoClicker",
          path: "https://sourceforge.net/projects/orphamielautoclicker/files/AutoClickers.exe/download",
          category: "software",
          type: "external",
          description: "Automatically click the mouse at set intervals."
     },
     {
          thumbnail: "/downloads/card-img/softwares/fileshredder.webp",
          title: "File Shredder",
          path: "software/FileShredder.zip",
          category: "software",
          type: "direct",
          description: "Securely deletes files to prevent recovery."
     },
     {
          thumbnail: "/downloads/card-img/softwares/Process-Explorer.webp",
          title: "Process Explorer",
          path: "software/Process Explorer.zip",
          category: "software",
          type: "direct",
          description: "Shows detailed info about running processes."
     },
     {
          thumbnail: "/downloads/card-img/softwares/Process-Hacker.webp",
          title: "Process Hacker",
          path: "software/Process-Hacker.zip",
          category: "software",
          type: "direct",
          description: "Advanced task manager with extra features."
     },
     {
          thumbnail: "/downloads/card-img/softwares/Rufus.webp",
          title: "Rufus",
          path: "https://github.com/pbatard/rufus/releases/latest",
          category: "software",
          type: "external",
          description: "Create bootable USB drives easily."
     },
     {
          thumbnail: "/downloads/card-img/softwares/tc.webp",
          title: "Total Commander",
          path: "https://www.ghisler.com/download.htm",
          category: "software",
          type: "external",
          description: "File manager with dual-pane navigation."
     },
     {
          thumbnail: "/downloads/card-img/softwares/UninstallTool.webp",
          title: "Uninstall Tool",
          path: "https://crystalidea.com/uninstall-tool/download",
          category: "software",
          type: "external",
          description: "Efficiently manage and uninstall programs."
     },
     {
          thumbnail: "/downloads/card-img/softwares/wds.webp",
          title: "WinDirStat",
          path: "https://github.com/windirstat/windirstat/releases/latest",
          category: "software",
          type: "external",
          description: "Visual disk usage analyzer tool."
     },
     {
          thumbnail: "/downloads/card-img/softwares/ie.webp",
          title: "Internet Explorer",
          category: "software",
          files: [
               {
                    name: "Version 1",
                    path: "software/internet-explorer/IE1.zip"
               },
               {
                    name: "Version 5",
                    path: "software/internet-explorer/IE5.zip"
               },
               {
                    name: "Version 10",
                    path: "software/IE10.zip",
                    isRelease: true
               }
          ],
          type: "direct",
          description: "Older versions of the Internet Explorer browser.",
          path: ""
     },
     {
          thumbnail: "/downloads/card-img/ms/ms-dos.webp",
          title: "MS-DOS",
          category: "microsoft",
          files: [
               {
                    name: "Version 1.25",
                    path: "ms-dos/MS-DOS_1.25.zip"
               },
               {
                    name: "Version 4.01",
                    path: "ms-dos/MS-DOS_4.01.zip"
               },
               {
                    name: "Version 5",
                    path: "ms-dos/MS-DOS 5.00a.zip"
               },
               {
                    name: "Version 6.22",
                    path: "ms-dos/MS-DOS 6.22.zip"
               },
               {
                    name: "Version 7.10",
                    path: "ms-dos/MS-DOS_7.10.zip"
               }
          ],
          type: "direct",
          description: "Various MS-DOS versions offering early OS features.",
          path: ""
     },
     {
          thumbnail: "/downloads/card-img/updates/win2000.webp",
          title: "Windows 2000 Updates",
          path: "updates/Win2000-SP4.7z",
          category: "updates",
          type: "direct",
          description: "Service Pack 4 updates for Windows 2000.",
          isRelease: true
     },
     {
          thumbnail: "/downloads/card-img/updates/winxp.webp",
          title: "Windows XP Updates",
          path: "updates/WinXP-SP2.7z",
          category: "updates",
          type: "direct",
          description: "Service Pack 2 updates for Windows XP.",
          isRelease: true
     },
     {
          thumbnail: "/downloads/card-img/softwares/dotnet.webp",
          title: ".NET (Old Versions)",
          category: "software",
          files: [
               {
                    name: "Version 2",
                    path: "software/dotnet-2.zip",
                    isRelease: true
               },
               {
                    name: "Version 3.5",
                    path: "software/dotnet-3.5.zip",
                    isRelease: true
               },
               {
                    name: "Version 4",
                    path: "software/dotnet-4.zip",
                    isRelease: true
               }
          ],
          type: "direct",
          description: "Older versions of .NET framework.",
          path: ""
     },
     {
          thumbnail: "/downloads/card-img/softwares/inkball.webp",
          title: "Windows Inkball Game",
          path: "software/Windows-Inkball.zip",
          category: "software",
          type: "direct",
          description: "A fun game from Windows Vista."
     },
     {
          thumbnail: "/downloads/card-img/softwares/movie-maker.webp",
          title: "Windows Movie Maker",
          path: "software/Windows-Movie-Maker.zip",
          category: "software",
          type: "direct",
          description: "Classic video editing software from Windows."
     },
     {
          thumbnail: "/downloads/card-img/softwares/pinball.webp",
          title: "Windows Pinball Game",
          path: "software/Windows-Pinball-Game.zip",
          category: "software",
          type: "direct",
          description: "Windows classic pinball game."
     }
];