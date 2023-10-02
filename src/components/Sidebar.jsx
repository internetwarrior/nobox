import React from "react";
import Main from "../static/svg/main_nav.svg";
import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <>
      {props.toggle && (
        <div
          className="fixed top-0 right-0 h-full z-10 w-full"
          onClick={() => {
            setTimeout(() => {
              props.unToggle();
            }, 300);
          }}
        >
          <div className=" absolute  h-full gap-6 z-20 w-[284px] right-0 bg-white rounded-md flex flex-col shadow top-0 py-[34px] pl-[20px] pr-[56px] ">
            <div className="flex flex-col flex-grow">
              <div className=" flex gap-[8px]">
                <img src={Main} alt="" srcset="" />
                <Link
                  to={"/"}
                  className=" w-full bg-yellow-200 py-2 px-3 rounded-md"
                >
                  Главная
                </Link>
              </div>
            </div>
            <div>
              <div className=" flex flex-col gap-[56px]">
                <div className=" flex gap-[8px]">
                  <img src={Main} alt="" srcset="" />
                  <div className=" w-full  py-2 px-3 rounded-md">Демо-мод</div>
                </div>
                <div className=" flex flex-col">
                  <h5>Bishkek 2023</h5>
                  <h5>nobox-bishkek</h5>
                  <small className=" text-gray-500">
                    Весь контент всё ещё в разработке. Это только демонстрация.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
