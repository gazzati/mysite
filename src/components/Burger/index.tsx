import React from "react"
import classNames from "classnames"

import style from "./style.m.scss"

const Burger = ({ open, toggleMenuOpen, animationStyle }) => {
  return (
    <div
      className={classNames(style.burger, { [style.burgerOpen]: open })}
      onClick={toggleMenuOpen}
      style={animationStyle}
    >
      <div className={style.burgerLeft}></div>
      <div className={style.burgerRight}></div>
    </div>
  )
}

export default Burger
