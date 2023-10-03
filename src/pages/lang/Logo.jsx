import React from 'react'
import logoNobox from '../../static/svg/nobox.png'
import scss from './lang.module.scss'

export const Logo = () => {
  return (
    <div className={scss.wrapper}>
     <img src={logoNobox} alt="logo" />
    </div>
  )
}
