"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

import { Icons } from "@/components/Icons"
import { config } from "@/config"
import { useLoadSection } from "@/hooks/useLoadSection"

import style from "./Projects.module.scss"

export default function Projects() {
  const t = useTranslations()
  const ref = useLoadSection()

  return (
    <section ref={ref} id="projects" className={style.projects}>
      <h3 className="styled">{t("projects.heading")}</h3>

      <ul>
        {config.projects.map((project) => (
          <div key={project.name} className={style.project}>
            <a className={style.image} href={project.url} target="_blank" rel="noreferrer">
              <Image src={project.photo} alt={project.name} width={600} height={350} />
            </a>
            <div className={style.content}>
              <h4>
                <a className={style.titleLink} href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h4>
              <div className={style.description}>{t(project.descriptionKey)}</div>
              <div className={style.bottomBlock}>
                <ul className={style.technologies}>
                  {project.technologies.map((item) => (
                    <li key={item} className={style.technology}>
                      {item}
                    </li>
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
