import { config } from "@/config"
import { Fade, getAnimationStyle } from "@/lib/animations"

import style from "./SideEmail.module.scss"

export default function SideEmail() {
  return (
    <div className={style.side} style={getAnimationStyle(Fade.Up, 15)}>
      <div className={style.email}>
        <a className={style.link} href={`mailto:${config.email}`}>
          {config.email}
        </a>
      </div>
    </div>
  )
}
