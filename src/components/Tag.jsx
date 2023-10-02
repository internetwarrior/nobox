import React, { useState } from "react";
import Add from "../static/svg/add.svg";
import Remove from "../static/svg/remove.svg";
function Tag(props) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => {
        setActive((prev) => !prev);
      }}
      className={
        (active ? " bg-yellow-500 text-black" : "bg-black") +
        " flex gap-[4px] justify-start items-center px-[12px] py-1  rounded-[5px] text-white text-clip whitespace-nowrap"
      }
    >
      {!active ? (
        <img src={Add} alt="" srcset="" />
      ) : (
        <img src={Remove} alt="" srcset="" />
      )}
      <div className=" pr-3">{props?.name}</div>
    </button>
  );
}

export default Tag;
