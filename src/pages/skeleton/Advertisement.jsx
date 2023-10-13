import React from "react";
import Profile from "../profile/Profile";
import scss from "./Advertisement.module.scss";
import room from "../../static/svg/Component 1.png";

const cards = [
  {
    img: room,
    title: "Семейные | 3-комнаты| Без подселения | Чистоплотные | Без животных",
    price: "5000",
  },
  {
    img: room,
    title: "Семейные | 3-комнаты| Без подселения | Чистоплотные | Без животных",
    price: "5000",
  },
  {
    img: room,
    title: "  | Чистоплотные | Без животных",
    price: "5000",
  },
  {
    img: room,
    title: "Семейные | 3-комнаты| Без подселения | Чистоплотные | Без животных |  Без подселения. Без подселения",
    price: "5000",
  },
  {
    img: room,
    title: "Семейные | 3-комнаты| Без подселения | Чистоплотные | Без животных",
    price: "5000",
  },
];
export const Advertisement = () => {
  return (
    <>
      <div style={{ padding: "15px",}}>
        <Profile />

        <div className={scss.wrapperBtn}>
          <button className={scss.advertisement}>Активные объявления</button>
          <button className={scss.advertisement}>Не активные объявления</button>
        </div>
      </div>

      <div className={scss.wrapper}>
        <div className={scss.wrapCard}>
          <div className={scss.card}>
            {cards.map((item, index) => (
              <div className={scss.cards}>
                <div className={scss.img}>
                  <img src={item.img} alt={`Image ${index}`} />
                </div>
                <div className={scss.title}>
                  <p>{item.title}</p>
                  <p className={scss.price}>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
