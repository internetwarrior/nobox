import React from "react";
import ImageH from "../static/svg/picture_image.svg";
import Tag from "../components/Tag";
function Create() {
  const img =
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2580&q=80";

  return (
    <div className=" w-full h-full min-h-[100vh] flex justify-center ">
      <div className="max-w-[1120px] w-full flex flex-col gap-[20px] px-[24px]">
        <div className=" flex min-h-[200px] max-h-[200px] rounded-xl h-full bg-[#D9D9D9] p-[10px] gap-[20px] overflow-hidden w-full">
          <div className="flex flex-col gap-[20px] ">
            <div className=" flex-grow flex min-w-[84px] bg-white items-center justify-center rounded-lg">
              <img src={ImageH} alt="" />
            </div>
            <div className="flex-grow flex bg-white min-w-[84px] justify-center items-center rounded-lg">
              <img src={ImageH} className="" alt="" />
            </div>
          </div>
          <div className=" w-[200px]">
            <img src={img} className=" w-full h-full" alt="" srcset="" />
          </div>

          <div className=" w-[200px]">
            <img src={img} className=" w-full h-full" alt="" srcset="" />
          </div>
        </div>
        <div>
          <h3 className=" text-xl font-bold mb-[20px]">Добавить теги</h3>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px]">
              <Tag name="Hello" />
              <Tag name="Hello" />
              <Tag name="Hello" />
              <Tag name="Hello" />
            </div>
            <div className="flex gap-[20px]">
              <Tag name="Hello" />
              <Tag name="Hello" />
              <Tag name="Hello" />
              <Tag name="Hello" />
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 rounded-xl">
          <input
            type="text"
            placeholder="Например: 'Дружолюбный'"
            className="bg-transparent text-[16px]  w-full  py-3 h-full outline-amber-300  rounded-xl "
          />
        </div>{" "}
        <div className=" bg-gray-100 rounded-xl">
          <input
            type="text"
            placeholder="Например: 'Дружолюбный'"
            className="bg-transparent text-[16px] w-full  py-3 h-full outline-amber-300  rounded-xl"
          />
        </div>
        <button className=" bg-amber-400 rounded-xl px-6 py-3">
          Отправить
        </button>
      </div>
    </div>
  );
}

export default Create;
