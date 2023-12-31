import React from "react";
import arrow from "../../static/svg/arrow.svg";
import checkMark from "../../static/icons/check mark.svg";
import scss from "./register.module.scss";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className={scss.contaynerSignIn}>
      <p className={scss.register}>Регистрация</p>

      <div className={scss.wrapper}>
        <div>
          <label htmlFor="">Имя</label>
          <input placeholder="Ваше имя" type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Фамилия</label>
          <input placeholder="Ваша фамилия" type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Электронная почта</label>
          <input placeholder="example@gmail.com" type="email" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Номер телефона</label>
          <input placeholder="0" type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Придумайте пароль</label>
          <input placeholder="password" type="text" name="" id="" />
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
        <div>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            У вас уже есть аккаунт?
            <Link to={"/login"} className={scss.SignIn}>
              Войти
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
