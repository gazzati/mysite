import React from 'react'
import {Telegram, GitHub, Instagram, LinkedIn, Spotify} from '@components/Icons'
import { Icon } from '@interfaces/icons'

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
    default:
      return <></>
  }
}
