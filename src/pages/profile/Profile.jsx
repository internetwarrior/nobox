import React from "react";
import userPhoto from "../../static/svg/user-demo.png";
import pen from "../../static/svg/Pen.svg";
import scss from './Profile.module.scss'

const Profile = () => {
  return (
    <div
    className={scss.wrapper}
    >
      <div>
        <img src={userPhoto} alt="userPhoto" />
        <p>Нурлан Канатов</p>
      </div>
      <img src={pen} alt="pen" />
    </div>
  );
};

export default Profile;
