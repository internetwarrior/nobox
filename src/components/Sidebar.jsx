import React, { useEffect } from "react";
import nobox from "../static/svg/nobox.svg";
import home from "../static/icons/Home Smile.svg";
import user from "../static/icons/User Circle.svg";
import signIn from "../static/icons/User Plus Rounded.svg";
import news from "../static/icons/Dialog.svg";
import p from "../static/icons/Documents Minimalistic.svg";
import checked from "../static/icons/Clipboard Check.svg";
import scss from "./register/register.module.scss";
import { Link, useLocation } from "react-router-dom";

function Sidebar(props) {
  return (
    <>
      {props.toggle && (
        <nav className={scss.navigatior}>
          <div onClick={props.unToggle} className={scss.close}>
            {" "}
          </div>

          <div className={scss.contayner}>
            <div>
              <div className={scss.logo}>
                <img src={nobox} alt="" />
              </div>

              <div>
                <div className={scss.divs}>
                  <div>
                    <img src={home} alt="" />
                  </div>

                  <Link to={"/"}>Главная страница</Link>
                </div>
                <div className={scss.divs}>
                  <div>
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <Link to={"/profile"}>Личный кабинет</Link>
                  </div>
                </div>
                <div className={scss.divs}>
                  <div>
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <Link to={"/profile"}>Сохраненные обявление</Link>
                  </div>
                </div>
                <div className={scss.divs}>
                  <div>
                    <img src={signIn} alt="" />
                  </div>

                  <Link to={"/sign-up"}>Зарегистрироваться</Link>
                </div>
                <div className={scss.divs}>
                  <div>
                    <img src={signIn} alt="" />
                  </div>

                  <Link to={"/login"}>Войти</Link>
                </div>
              </div>
            </div>
            <footer>
              <div>
                <div className={scss.divs}>
                  <div>
                    <img src={news} alt="" />
                  </div>

                  <Link to={"/news"}> Новости</Link>
                </div>
                <div className={scss.divs}>
                  <div>
                    <img src={p} alt="" />
                  </div>
                  <Link to={"/"}>
                    {" "}
                    Пользовательское
                    <br />
                    соглашение
                  </Link>
                </div>
                <div className={scss.divs}>
                  <div>
                    <img src={checked} alt="" />
                  </div>
                  <Link to={"/"}>Правила проекта</Link>
                </div>
              </div>
              <div>
                <p>Bishkek 2023</p>
                <p>noboxkg@gmail.com</p>
                <span className={scss.reserved}>all right reserved</span>
              </div>
            </footer>
          </div>
        </nav>
      )}
    </>
  );
}

export default Sidebar;
