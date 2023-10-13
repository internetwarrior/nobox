import React from 'react'
import marni from '../../static/svg/Marni 1.svg'
import scss from './register.module.scss'
import arrow from "../../static/svg/arrow.svg";

export const ForgotPassword = () => {
  return (
    <div className={scss.contaynerSignIn}>
     <img src={marni} alt="" />
     <p className={scss.register}>Забыли пароль</p>

     <div className={scss.wrapper}>
     <div>
        <label htmlFor=""> Электронная почта</label>
        <input placeholder="email" type="email" name="" id="" />
      </div>
     </div>
     <div className={scss.downPart}>
        <div>
          <img src={arrow} alt="" />
        </div>
        <p>или</p>
        <div>
          <button className={scss.google}>Войти через Google</button>
        </div>
        <span className={scss.SignIn}>Вернуться назад</span>
       
      
      </div>
    </div>
  )
}
