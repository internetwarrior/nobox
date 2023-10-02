import React from "react";
import Create from "../static/svg/create_add.svg";
import { Link } from "react-router-dom";

function MainButton() {
  return (
    <Link
      to="/create"
      className=" z-10 fixed bottom-6 right-6 bg-yellow-500 w-[56px] h-[56px] rounded-full flex items-center justify-center cursor-pointer"
    >
      <img src={Create} alt="" />
    </Link>
  );
}

export default MainButton;
