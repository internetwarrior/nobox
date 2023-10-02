import React, { useState } from "react";
import Card from "../components/Card";
import SearchTags from "../components/SearchTags";

function Main() {
  const [cards, setCards] = useState([]);
  return (
    <div className="h-[100vh] w-full flex items-start justify-center bg-gray-50">
      <div className=" grid grid-cols-1 gap-[20px]  px-6 md:grid-cols-3 max-w-[1120px]">
        <SearchTags />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Main;
