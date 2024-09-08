import Icons from "@components/Icons"
import React, { useRef } from "react"

import d, { useDictionary } from "@root/dictionary"

import { loadSection } from "@helpers/dom"

import data from "./data"
import style from "./style.m.scss"

const Projects = () => {
  const [locale] = useDictionary()

  const ref = useRef<HTMLIFrameElement>(null)
  loadSection(ref)

  return (
    <section ref={ref} id="projects" className={style.projects}>
      <h3 className="styled">{d.projects.heading[locale]}</h3>

      <ul>
        {data.map(project => (
          <div className={style.project}>
            <a className={style.image} href={project.url} target="_blank" rel="noreferrer">
              <img src={project.photo} alt={project.name} role="presentation" />
            </a>
            <div className={style.content}>
              <h4>
                <a className={style.titleLink} href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h4>
              <div className={style.description}>{project.description[locale]}</div>
              <div className={style.bottomBlock}>
                <ul className={style.technologies}>
                  {project.technologies.map(item => (
                    <li className={style.technology}>{item}</li>
                  ))}
                </ul>
                <div className={style.links}>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    <Icons name="github" />
                  </a>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <Icons name="link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  )
}

export default Projects
