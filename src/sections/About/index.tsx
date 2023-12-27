import photo from "@assets/images/photo.jpg"
import React, { useRef } from "react"

import d, { useDictionary } from "@root/dictionary"

import { loadSection } from "@helpers/dom"

import style from "./style.m.scss"

const About = () => {
  const [locale] = useDictionary()

  const ref = useRef<HTMLIFrameElement>(null)
  loadSection(ref)

  return (
    <section ref={ref} id="about">
      <h3 className="styled">{d.about.heading[locale]}</h3>
      <div className={style.about}>
        <div className={style.aboutText}>
          <p>{d.about.start[locale]}</p>
          <p>
            {d.about.hobby[locale]}
          </p>
          <p>
            {d.about.bio[locale]}
            {" "}
            <span className={style.fake}>{d.about.fakeBio[locale]}</span>
            {" "}
            {d.about.bioContinue[locale]}
          </p>
          <p>{d.about.end[locale]}</p>
        </div>

        <div className={style.portrait}>
          <img src={photo} alt="photo" />
        </div>
      </div>
    </section>
  )
}

export default About
