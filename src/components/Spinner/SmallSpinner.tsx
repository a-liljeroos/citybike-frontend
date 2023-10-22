import React from "react";
import { IoMdBicycle } from "react-icons/io";

interface ISmallSpinner {
  color?: string;
  size?: number;
}

const SmallSpinner = ({ size, color }: ISmallSpinner) => {
  return (
    <div className="small-spinner-cont">
      <IoMdBicycle
        className="small-spinner"
        size={size ? size : 20}
        color={color ? color : "rgb(75, 75, 75)"}
      />
    </div>
  );
};

export default SmallSpinner;
