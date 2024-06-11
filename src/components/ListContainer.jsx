import React from "react";
import surfaceLaptop from "../assets/surface-laptop.avif";
import ms365LifeStyle from "../assets/microsoft-365-lifestyle.avif";
import gamePass from "../assets/game-pass.avif";
import xBoxSeries from "../assets/xbox-series-X.webp";
import rightArrow from "../assets/right-arrow.png";
import ListItem from "./ListItem";

const data = [
  {
    image: surfaceLaptop,
    title: "Surface Laptop, Copilot+ PC",
    description:
      "Unlock next-gen AI experiences like Recall—so you can search your PC’s past to find the content you need.",
    showNewFlag: true,
  },
  {
    image: ms365LifeStyle,
    title: "Maximise the everyday with Microsoft 365",
    description:
      "Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.",
    arrowImage: rightArrow,
    arrowImg: true,
  },
  {
    image: gamePass,
    title: "Xbox Game Pass Ultimate",
    description:
      "Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.",
  },
  {
    image: xBoxSeries,
    title: "Xbox Series X",
    description: "The fastest, most powerful Xbox ever.",
  },
];

export default function ListContainer() {
  return (
    <div className="my-10">
      <div>
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-screen space-y-10 md:space-y-0">
          {data.map((item) => (
            <ListItem
              image={item.image}
              title={item.title}
              description={item.description}
              showNewFlag={item.showNewFlag}
              arrowImage={item.arrowImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
