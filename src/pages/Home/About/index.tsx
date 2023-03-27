import React, { useRef } from "react"

import photo from "@root/assets/images/photo.jpg"
import d, { useDictionary } from "@root/dictionary"
import { loadSection } from "@root/helpers/dom"

import style from "./style.m.scss"

const About = () => {
  const [locale] = useDictionary()

  const ref = useRef<HTMLIFrameElement>(null)
  loadSection(ref)

  return (
    <section ref={ref} id="about">
      <h3 className="styled">{d.home.about.heading[locale]}</h3>
      <div className={style.about}>
        <div className={style.aboutText}>
          <p>{d.home.about.start[locale]}</p>
          <p>
            {d.home.about.hobby[locale]}
            <a href="https://rfmli.ru/" target="_blank">
              {d.home.about.school[locale]}
            </a>
          </p>
          <p>
            {d.home.about.bio[locale]}
            <span className={style.fake}>{d.home.about.fakeBio[locale]}</span>
            {d.home.about.bioContinue[locale]}
          </p>
          <p>{d.home.about.end[locale]}</p>
        </div>

        <div className={style.portrait}>
          <img src={photo} alt="photo" />
        </div>
      </div>
    </section>
  )
}

export default About
