import { IFAQItem } from "../types";

export const MAIN_FAQS: IFAQItem[] = [
     // Malware Testing
     {
          question: "Why no tests for McAfee/Norton?",
          answer: "Their “free” option is a trial that requires checkout. This adds billing friction and complicates repeatable VM testing. For consistency and safety, I prioritize tools with direct, no-card downloads. I may include them if a clean, no-checkout download path is available."
     },
     {
          question: "Can I suggest a malware test?",
          answer: "Yes, suggestions are welcome, but testing depends on safety and feasibility."
     },
     {
          question: "Do you test malware on your real computer?",
          answer: "No. Malware tests are performed in isolated virtual machines, primarily using VirtualBox or VMware Workstation. I don't intentionally execute malware on my host operating system."
     },
     {
          question: "Which virtualization software do you use?",
          answer: "I primarily use VirtualBox for regular experiments and older operating systems. VMware Workstation is an alternative for more advanced testing scenarios."
     },
     {
          question: "Can you send me the malware samples?",
          answer: "No. I don't distribute malware samples. My videos are intended for educational demonstrations and analysis, not malware distribution."
     },
     {
          question: "Why don't you test every malware suggestion?",
          answer: "Not every suggestion is suitable for testing. I consider safety, feasibility, availability, originality, and whether the idea fits my channel before deciding."
     },
     {
          question: "Are malware tests educational or entertainment?",
          answer: "Both. My malware tests demonstrate how malicious software behaves while also exploring interesting visual effects, system modifications, and antivirus responses."
     },
     {
          question: "Do you recommend running malware yourself?",
          answer: "No. My demonstrations take place in controlled virtual environments. Running malware on a personal computer can cause data loss, system damage, or other unwanted consequences."
     },
     {
          question: "Why do you test different antivirus programs?",
          answer: "I compare how security products detect, block, and respond to malware in controlled experiments. These demonstrations are not comprehensive benchmarks of an antivirus product's overall protection."
     },

     // Videos and Tutorials
     {
          question: "What kind of content does ArsenTech create?",
          answer: "ArsenTech focuses on technology, cybersecurity, malware experiments, Windows experiments, operating systems, software tutorials, and related technical content."
     },
     {
          question: "Can I suggest a video idea?",
          answer: "Absolutely! I welcome relevant suggestions, including malware tests, Windows experiments, tutorials, and cybersecurity topics. However, suggestions don't guarantee future videos."
     },
     {
          question: "Why haven't you made my requested video?",
          answer: "I receive different suggestions and prioritize videos based on feasibility, relevance, available resources, and my production schedule. Some ideas may be postponed or declined."
     },
     {
          question: "When do you upload new videos?",
          answer: "I generally prioritize weekend uploads during the academic year. During summer, I may publish videos whenever they're ready. Upload schedules can change depending on production progress and availability."
     },
     {
          question: "Why are some videos delayed?",
          answer: "Recording, editing, testing, research, and technical difficulties can affect production. I prefer finishing videos properly instead of rushing them just to maintain a schedule."
     },
     {
          question: "Do you use voiceovers?",
          answer: "Yes. I use voiceovers in my newer content to provide explanations, commentary, and additional context. Some older videos may not include narration."
     },
     {
          question: "Why do you still make videos about older Windows versions?",
          answer: "Older operating systems are interesting for historical experiments, compatibility testing, and educational demonstrations. I explore them primarily in virtual machines."
     },
     {
          question: "Where can I find your coding content?",
          answer: "Coding-related content may appear on Coding with ArsenTech, depending on the topic and format."
     },
     {
          question: "Where can I watch your Shorts?",
          answer: "You can find my short-form videos on ArsenTech Shorts. My main channel primarily focuses on longer technology videos, experiments, and tutorials."
     },
     {
          question: "Can you make a requested video in one day?",
          answer: "Not always. I handle recording, editing, subtitles, and other production tasks myself. Some simpler videos may take less time, but more complex projects require additional preparation and testing."
     },
     {
          question: "What does 'Noted' mean when you reply to suggestions?",
          answer: "It means I've acknowledged your suggestion and added it to my ideas list for consideration. It doesn't guarantee that the idea will become a video."
     },
     {
          question: "How do you choose which viewer suggestions become videos?",
          answer: "I may select ideas from my list for community polls, where viewers can vote for their preferred video. I may also choose another idea for an additional upload if I have enough free time. The selection process can vary depending on my current plans."
     },

     // Copyright and Downloads
     {
          question: "Can I reuse your videos?",
          answer: "Please respect the copyright and ownership of my content. If you want to reuse substantial portions of my videos, contact me for permission first."
     },
     {
          question: "What music do you use in your videos?",
          answer: "I primarily use music from the YouTube Audio Library and NoCopyrightSounds (NCS), following their applicable usage and attribution requirements."
     },
     {
          question: "How do you handle copyright claims?",
          answer: "I review YouTube's copyright checks before publishing. If a claim appears, I investigate it and usually replace, remove, or adjust the affected material. I dispute claims when I have a valid basis to do so."
     },
     {
          question: "Are the downloads on your website free?",
          answer: "Yes. I aim to provide curated, free downloads without unnecessary advertisements. I don't distribute cracked software or malware samples."
     },
     {
          question: "Why are some Windows-related downloads unavailable?",
          answer: "Some files may be removed due to copyright, availability, or maintenance concerns. Where appropriate, I redirect visitors to official download sources."
     },

     // Community and Moderation
     {
          question: "Can I comment on your videos?",
          answer: "Of course! Constructive feedback, questions, suggestions, and respectful discussions are welcome. Spam, harassment, threats, and other disruptive behavior may be moderated."
     },
     {
          question: "Why was my comment removed?",
          answer: "Comments may be removed for spam, harassment, threats, inappropriate behavior, or repeated violations of my community boundaries. I also use moderation tools to keep discussions relevant and respectful."
     },
     {
          question: "Do you allow political or religious debates?",
          answer: "ArsenTech is primarily a technology and cybersecurity channel. I respect people of different nationalities, religions, and backgrounds, but I don't want unrelated political or religious arguments disrupting technical discussions."
     },
     {
          question: "Do you accept criticism?",
          answer: "Yes. Constructive criticism helps me improve my content. However, personal attacks, harassment, and repetitive trolling are not constructive feedback."
     },
     {
          question: "Do you have a Discord server?",
          answer: "No. I don't currently use Discord, and I have no plans to create a server. You can communicate with me through my existing public channels."
     },

     // Channel Information
     {
          question: "Where is ArsenTech from?",
          answer: "I'm a technology content creator from Armenia. My channel welcomes respectful viewers from around the world."
     },
     {
          question: "Does ArsenTech have other channels?",
          answer: "Yes. My other channels include Coding with ArsenTech, ArsenTech Shorts, and More ArsenTech. Each channel serves a different content format or purpose."
     },
     {
          question: "Why do you have multiple channels?",
          answer: "I use separate channels to organize different types of content. This helps viewers find the videos they're interested in without mixing unrelated topics into the main channel."
     },
     {
          question: "Why don't you upload every day?",
          answer: "ArsenTech is a secondary hobby alongside my other responsibilities and projects. I prioritize sustainable production and content quality over uploading simply to remain active."
     },
     {
          question: "Why do some older ArsenTech website links no longer work?",
          answer: "My website has undergone updates and migrations. Some older links may have changed or become outdated. I update links and set up redirects where appropriate, but certain archived or removed resources may no longer be available."
     },
];