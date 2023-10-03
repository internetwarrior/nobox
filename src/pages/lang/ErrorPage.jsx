import React from 'react'
import scss from './lang.module.scss'

const ErrorPage = () => {
  return (
    <div className={scss.wrapper}>
     <p className={scss.errorTitle}>NoPage</p>
     <div className={scss.error}>404</div>
     <p className={scss.errorTitle}>Страница не найдено</p>
    </div>
  )
}

export default ErrorPage