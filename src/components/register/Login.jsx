import React from "react";
import loginImg from "../../static/svg/j.svg";
import scss from './register.module.scss'
import arrow from "../../static/svg/arrow.svg";
import checkMark from "../../static/icons/check mark.svg";
const LoginPage = () => {
  return (
    <div className={scss.contaynerSignIn}>
      <img src={loginImg} alt="kk" />
      <p className={scss.register}>Войти в аккаунт</p>
      <div className={scss.wrapper}>
      <div >
        <label htmlFor="">Номер телефона</label>
        <input placeholder="0" type="text" name="" id="" />
      </div>
      <div>
        <label htmlFor=""> пароль</label>
        <input className={scss.password} placeholder="password" type="text" name="" id="" />
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

        <div className={scss.checkMark}>
          <img src={checkMark} alt="" />

          <span>
            Нажимая на кнопку, я соглашаюсь
            <br /> на обработку персональных данных
          </span>
        </div>
      
      </div>

    </div>
  );
};

export default LoginPage;
