import React, { useState } from "react";
import Search from "../static/svg/search.svg";
import User_Demo from "../static/svg/user-demo.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Header() {
  const [toggleSide, setToggleSide] = useState(false);
  const toggleFunc = () => {
    setToggleSide((prev) => !prev);
    console.log("hey");
  };

  return (
    <header className=" w-full px-[20px] mb-[40px] mt-[20px] flex gap-[10px] items-center">
      <Link to={"/"}>
        <h2 className=" text-3xl font-bold">NoBox</h2>
      </Link>

      <form className=" relative bg-[#ECECEC] rounded-[10px] flex items-center gap-[20px] px-3 flex-grow">
        <div className=" ">
          <img src={Search} alt="" srcset="" />
        </div>
        <input
          type="search"
          placeholder="Поиск.."
          className=" bg-transparent text-[16px] w-full  py-3 h-full"
        />
        <input type="submit" value="" />
      </form>
      <button
        onClick={() => {
          toggleFunc();
        }}
      >
        <img src={User_Demo} alt="" srcset="" />
      </button>
      <Sidebar toggle={toggleSide} unToggle={toggleFunc} />
    </header>
  );
}

export default Header;
