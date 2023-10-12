import React from 'react'
import logoNobox from '../../static/svg/nobox.svg'
import scss from './lang.module.scss'

export const Logo = () => {
  return (
    <div className={scss.wrapper}>
     <img src={logoNobox} alt="logo" />
    </div>
  )
}
