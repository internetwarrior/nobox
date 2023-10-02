import React from "react";
import Tag from "./Tag";

function SearchTags() {
  return (
    <div className=" flex flex-col gap-[20px] grid-full">
      <div className=" flex gap-[8px] overflow-y-scroll sm:overflow-y-hidden ">
        <Tag active={true} name={"Парни"} />
        <Tag active={true} name={"Девушки"} />
        <Tag active={true} name={"Семейные"} />
        <Tag name={"1-комнатные"} />
        <Tag name={"2-комнатные"} />
      </div>
      <div className=" flex gap-[8px] overflow-y-scroll sm:overflow-y-hidden">
        <Tag name={"2-комнатные"} />
        <Tag name={"Семейные"} />
        <Tag name={"Девушки"} />
        <Tag name={"Парни"} />
        <Tag name={"1-комнатные"} />
      </div>
    </div>
  );
}

export default SearchTags;
