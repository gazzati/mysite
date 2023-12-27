import { Telegram, GitHub, Instagram, LinkedIn, Spotify, Link } from "@components/Icons"
import React from "react"

import { Icon } from "@interfaces/icons"

export const Icons = ({ name }) => {
  switch (name) {
    case Icon.Telegram:
      return <Telegram />
    case Icon.GitHub:
      return <GitHub />
    case Icon.Instagram:
      return <Instagram />
    case Icon.LinkedIn:
      return <LinkedIn />
    case Icon.Spotify:
      return <Spotify />
    case Icon.Link:
      return <Link />
    default:
      return <></>
  }
}
