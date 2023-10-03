import React from 'react'
import scss from './Button.module.scss'

export const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={scss.mainButton}>{children}</button>
  )
}
