import React from "react";

import User_demo from "../static/svg/user-demo.png";
import Stars from "../static/svg/stars.svg";
import Tel from "../static/svg/tel.svg";
import Wha from "../static/svg/wha.svg";
import Shar from "../static/svg/shar.svg";

function Detail() {
  const img =
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2580&q=80";

  return (
    <div className="  flex items-start justify-center w-full h-full">
      <div className=" px-[20px] w-full max-w-[1120px] ">
        <div className=" md:px-[20px] md:py-[20px] bg-white rounded-[10px] overflow-hidden px-1 py-2 shadow flex flex-col gap-[20px]">
          <div className=" h-full max-w-full w-full gap-2 relative">
            <img
              className=" rounded-[8px] w-full h-full max-h-[200px] md:max-h-[400px] object-cover"
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

          <div className=" flex items-center gap-2">
            <div>
              <img src={User_demo} alt="" />
            </div>
            <div>
              <h4>Нурлан Насип</h4>
              <div>
                {" "}
                <img src={Stars} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className=" font-bold text-[18px] md:text-[24px]">
              Парни | Девушки | 2-комнаты | Девушки | 2-комнаты| Девушки |
              2-комнаты
            </div>
          </div>
          <div className=" w-full flex justify-end items-end">
            <div className=" text-[24px] font-bold md:text-[28px]">20 000</div>
          </div>
        </div>
        <div className=" flex flex-col gap-[20px] mt-[20px]">
          <div>
            <small className=" text-gray-400">Особые примечание автора:</small>
            <p>Прошу держать квартиру в чистоте. И особо не люблю курящих</p>
          </div>
          <div className=" flex gap-[20px]">
            <h4 className=" text-xl">+996 771 11 11 11</h4>

            <img src={Tel} alt="" srcset="" />
            <img src={Wha} alt="" srcset="" />
            <img src={Shar} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
