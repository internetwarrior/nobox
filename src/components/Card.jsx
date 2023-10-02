import React from "react";
import { Link } from "react-router-dom";

function Card() {
  const img =
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2580&q=80";
  return (
    <div className=" bg-white rounded-[10px] overflow-hidden px-1 py-2 shadow flex flex-col">
      <div className=" h-full max-w-full w-full gap-2 relative">
        <img
          className=" rounded-[8px] w-full h-full object-cover max-h-[208px]"
          src={img}
          alt=""
          srcset=""
        />
        <div className=" absolute bottom-[8px] flex gap-2 left-[50%] translate-x-[-50%]">
          <div className=" bg-black w-[10px] h-[10px] rounded-full"></div>
          <div className=" bg-white w-[10px] h-[10px] rounded-full"></div>
          <div className=" bg-white w-[10px] h-[10px] rounded-full"></div>
          <div className=" bg-white w-[10px] h-[10px] rounded-full"></div>
          <div className=" bg-white w-[10px] h-[10px] rounded-full"></div>
          <div className=" bg-white w-[10px] h-[10px] rounded-full"></div>
          <div className=" bg-white w-[10px] h-[10px] rounded-full"></div>
          <div className=" bg-white w-[10px] h-[10px] rounded-full"></div>
        </div>
      </div>

      <Link to={"/detail"}>
        <div className=" font-bold text-[18px]">
          Парни | Девушки | 2-комнаты | Девушки | 2-комнаты| Девушки | 2-комнаты
        </div>
      </Link>
      <div className=" w-full flex justify-end items-end">
        <div className=" text-[24px] font-bold">20 000</div>
      </div>
    </div>
  );
}

export default Card;
