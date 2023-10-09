import React from "react";
import { TiArrowUpOutline } from "react-icons/ti";
import "./GoUpButton.scss";

interface IGoUpButton {
  listElementClassName: string;
  size?: number;
  color?: string;
}

const GoUpButton = ({ listElementClassName, size, color }: IGoUpButton) => {
  const goUp = () => {
    const list = document.querySelector(`.${listElementClassName}`);
    list?.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="go-up-btn" onClick={goUp}>
      <TiArrowUpOutline
        size={size ? size : 35}
        color={color ? color : "white"}
      />
    </div>
  );
};

export default GoUpButton;
