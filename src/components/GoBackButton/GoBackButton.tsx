import React from "react";
import { TbArrowBigLeft } from "react-icons/tb";
import "./GoBackButton.scss";

interface IGoBackButton {
  size?: number;
  top?: number;
  left?: number;
}

const GoBackButton = ({ size, top, left }: IGoBackButton) => {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
      className="go-back-btn"
      style={{
        top: top ? top : 15,
        left: left ? left : 15,
      }}
    >
      <TbArrowBigLeft color="rgb(75, 75, 75)" size={size ? size : 38} />
    </button>
  );
};

export default GoBackButton;
