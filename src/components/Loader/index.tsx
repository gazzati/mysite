import React from "react"

import style from "./style.m.scss"

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.loaderContent}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
