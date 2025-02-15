import React from "react";
import "./TimeCard.css";
import { GetImageByDigit } from "../../shared/DigitToImage";

const TimeCard = (props) => {
  const firstDigit = Math.floor(props.Data / 10);
  const secondDigit = props.Data % 10;
  const shouldBeSingleDigit = props.ShouldBeSingleDigit;
  return !shouldBeSingleDigit ? (
    <div className="time">
      <img
        src={GetImageByDigit(firstDigit)}
        className="digit"
        alt="0"
      />
      <img
        src={GetImageByDigit(secondDigit)}
        className="digit"
        alt="0"
      />
    </div>
  ) : (
    <div>
      <img
        src={GetImageByDigit(secondDigit)}
        alt="0"
      />
    </div>
  );
};

export default TimeCard;
