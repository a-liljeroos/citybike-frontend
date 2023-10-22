import React from "react";
import { ImDownload } from "react-icons/im";
import { IoMdBicycle } from "react-icons/io";
const SmallSpinner = () => {
  return (
    <div className="small-spinner-cont">
      <IoMdBicycle className="small-spinner" size={40} color="rgb(70 70 70)" />
    </div>
  );
};

export default SmallSpinner;
