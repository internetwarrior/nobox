import React from "react";
import nobox from "../../static/svg/nobox.svg";
import home from "../../static/icons/Home Smile.svg";
import user from "../../static/icons/User Circle.svg";
import signIn from "../../static/icons/User Plus Rounded.svg";
import news from "../../static/icons/Dialog.svg";
import p from "../../static/icons/Documents Minimalistic.svg";
import checked from "../../static/icons/Clipboard Check.svg";
import scss from "./register.module.scss";

const NotRegistered = () => {
  return (
    <div className={scss.contayner}>
   <div>
       <div className={scss.logo}>
       <img src={nobox} alt="" />
      </div>
      <div className={scss.divs}>
        <img src={home} alt="" />
        <p>Главная страница</p>
      </div>
      <div className={scss.divs}>
        <div>
          <img src={user} alt="" />
        </div>
        <div>
          <p>Личный кабинет</p>
          <p>Сохраненные обявление</p>
        </div>
      </div>
      <div className={scss.divs}>
        <img src={signIn} alt="" />
        <p>Зарегистрироваться</p>
      </div>
   </div>

      <div>
        <div className={scss.divs}>
          <img src={news} alt="" />
          <p>Новости</p>
        </div>
        <div className={scss.divs}>
          <img src={p} alt="" />
          <p>Пользовательское соглашение</p>
        </div>
        <div className={scss.divs}>
          <img src={checked} alt="" />
          <p>Правила проекта</p>
        </div>
      </div>
<div>
<p>Bishkek 2023</p>
      <p>noboxkg@gmail.com</p>
      <span className={scss.reserved}>all right reserved</span>
</div>
   
    </div>
  );
};

export default NotRegistered;
