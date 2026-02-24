export const config = {
  email: "gazzaevtimur@gmail.com",
  siteUrl: "https://gazzzati.ru",

  socialMedia: [
    { name: "telegram", url: "https://t.me/gazzati" },
    { name: "github", url: "https://github.com/gazzati" },
    { name: "instagram", url: "https://www.instagram.com/gazzzati" },
    { name: "linkedin", url: "https://www.linkedin.com/in/gazzati" },
  ],

  menuRoutes: [
    { href: "/about", translationKey: "links.about" },
    { href: "/projects", translationKey: "links.projects" },
  ],

  projects: [
    {
      name: "Fídar VPN",
      descriptionKey: "projects.fidar",
      photo: "/images/fidar.jpg",
      technologies: ["Wireguard", "NodeJS", "Typescript", "Telegram API", "PostgreSQL"],
      url: "https://t.me/fidar_vpn_bot",
      repoUrl: "https://github.com/gazzati/fidar-vpn",
    },
    {
      name: "Dzera Bot",
      descriptionKey: "projects.dzera",
      photo: "/images/dzera.jpg",
      technologies: ["NodeJS", "Typescript", "OpenAI", "Telegram API", "PostgreSQL"],
      url: "https://t.me/dzerassa_bot",
      repoUrl: "https://github.com/gazzati/dzera-bot",
    },
    {
      name: "Talker",
      descriptionKey: "projects.talker",
      photo: "/images/talker.jpg",
      technologies: ["Asterisk", "NodeJS", "Typescript", "Redis", "React", "SIP.js"],
      url: "https://talker.su",
      repoUrl: "https://github.com/talker-chat/talker",
    },
  ],
}
