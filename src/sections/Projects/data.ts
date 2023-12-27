import dzera from "@assets/images/dzera.jpg"
import talker from "@assets/images/talker.jpg"

import l from "@root/dictionary"

const data = [
  {
    name: "Talker",
    description: l.projects.talker,
    photo: talker,
    technologies: ["Asterisk", "NodeJS", "Typescript", "Redis", "React", "SIP.js"],
    url: "https://talker.su",
    repoUrl: "https://github.com/talker-chat/talker"
  },
  {
    name: "Dzera Bot",
    description: l.projects.dzera,
    photo: dzera,
    technologies: ["NodeJS", "Typescript", "OpenAI", "Telegram API", "PostgreSQL"],
    url: "https://t.me/dzerassa_bot",
    repoUrl: "https://github.com/gazzati/dzera-bot"
  }
]

export default data
