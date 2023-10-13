import React from 'react'
import arrow from "../../static/svg/arrow.svg";
import scss from './register.module.scss'


const ChangePassword = () => {
  return (
    <div className={scss.contaynerSignIn}>

     <p className={scss.register}>Сменить пароль</p>
     <div className={scss.wrapper}>
     <div>
        <label htmlFor=""> Сменить пароль</label>
        <input className={scss.password} placeholder="password" type="text" name="" id="" />
      </div>
      <div>
        <label htmlFor=""> Повторите пароль</label>
        <input className={scss.password} placeholder="password" type="text" name="" id="" />
      </div>

     </div>
      <div>
          <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default ChangePassword