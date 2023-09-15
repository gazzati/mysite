import l from "@root/dictionary"

import { Icon } from "@interfaces/icons"

const config = {
  // dbHost: "http://127.0.0.1:8000",
  dbHost: "https://gazzzati.ru",

  email: "gazzaevtimur@gmail.com",

  socialMedia: [
    {
      name: Icon.Telegram,
      url: "https://t.me/gazzati"
    },
    {
      name: Icon.GitHub,
      url: "https://github.com/gazzati"
    },
    {
      name: Icon.Instagram,
      url: "https://www.instagram.com/gazzzati"
    },
    {
      name: Icon.LinkedIn,
      url: "https://www.linkedin.com/in/gazzati"
    }
  ],

  menuRoutes: [{ url: "/#about", name: l.links.about }]
}

export default config
