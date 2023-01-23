import React, {useContext, useRef} from 'react';

import l, {LocaleContext} from "@root/helpers/locales"
import photo from '@root/assets/images/photo.png'
import {loadSection} from '@root/helpers/dom'

import style from "./style.m.scss"

const About = () => {
    const locale = useContext(LocaleContext)

    const ref = useRef<HTMLIFrameElement>(null)
    loadSection(ref)

    return  <section ref={ref} id="about">
        <h3>{l.home.about.heading[locale]}</h3>
        <div className={style.about}>
            <div className={style.aboutText}>
                <p>{l.home.about.start[locale]}</p>
                <p>
                    {l.home.about.hobby[locale]}
                    <a href="https://rfmli.ru/" target="_blank">{l.home.about.school[locale]}</a>
                </p>
                <p>
                {l.home.about.bio[locale]}
                <span className={style.fake}>{l.home.about.fakeBio[locale]}</span>
                {l.home.about.bioContinue[locale]}
                </p>
                <p>{l.home.about.end[locale]}</p>
            </div>

            <div className={style.portrait}>
                <img src={photo} alt="photo" />
            </div>
        </div>
    </section>
}

export default About