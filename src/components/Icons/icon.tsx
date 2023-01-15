import React from 'react'
import {Telegram, GitHub, Instagram, LinkedIn} from '@components/Icons'
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
    default:
      return <></>
  }
}
