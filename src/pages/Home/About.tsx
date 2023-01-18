import React, {useContext, useRef} from 'react';

import l, {LocaleContext} from "@root/helpers/locales"
import photo from '@root/assets/images/photo.png'
import {loadSection} from '@root/helpers/dom'

import style from "./style.m.scss"

const About = () => {
    const locale = useContext(LocaleContext)

    const ref = useRef<HTMLIFrameElement>(null)
    loadSection(ref)

    return  <section ref={ref}>
        <h3>{l.home.about.heading[locale]}</h3>
        <div className={style.about}>
            <p className={style.aboutText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus cum assumenda tenetur necessitatibus, inventore perferendis vitae excepturi sit suscipit asperiores sunt corrupti, veritatis sed architecto aut magni? Sequi, ex.            </p>
            <div className={style.portrait}>
                <img src={photo} alt="photo" />
            </div>
        </div>
    </section>
}

export default About