import React from "react";
import ManyButtons from "../ManyButtons/ManyButtons";
import { madeButtons } from "../../data/data";
import "./ButtonDispencer.scss";
const ButtonDispencer = () => {
    console.log('hi')
    console.log(madeButtons)
    console.log(madeButtons.length)
  return (
    <div className="container">
      {madeButtons && madeButtons.length > 0 &&
        madeButtons.map((button, index) => {
            console.log(button);
          return (
            <ManyButtons
              className="test"
              isIcon
              key={index}
              iconType={button.icon}
              isBlackButton={button.type === "blackBtn"}
              isFadedButton={button.type === "fadeGrayBtn"}
              description={button.description}
            />
          );
        })}
    </div>
  );
};

export default ButtonDispencer;
