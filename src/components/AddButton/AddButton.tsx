import React from "react";
import { TiPlusOutline } from "react-icons/ti";
import "./AddButton.scss";

interface IAddButton {
  text: string;
}

const AddButton = ({ text }: IAddButton) => {
  return <button className="add-button button-font">{text}</button>;
};

export default AddButton;
