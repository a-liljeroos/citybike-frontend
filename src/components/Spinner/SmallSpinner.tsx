import React from "react";
// icons
import { IoMdBicycle } from "react-icons/io";

interface ISmallSpinner {
  color?: string;
  size?: number;
}

export const SmallSpinner = ({ size, color }: ISmallSpinner) => {
  return (
    <div className="small-spinner-cont" data-testid="spinner">
      <IoMdBicycle
        className="small-spinner"
        size={size ? size : 20}
        color={color ? color : "rgb(75, 75, 75)"}
      />
    </div>
  );
};
