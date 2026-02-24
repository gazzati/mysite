import { Icons } from "@/components/Icons"
import { config } from "@/config"
import { Fade, getAnimationStyle } from "@/lib/animations"

import style from "./SideSocial.module.scss"

export default function SideSocial() {
  return (
    <div className={style.side} style={getAnimationStyle(Fade.Up, 15)}>
      <ul className={style.list}>
        {config.socialMedia.map(({ url, name }) => (
          <li key={name}>
            <a className={style.link} href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icons name={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
