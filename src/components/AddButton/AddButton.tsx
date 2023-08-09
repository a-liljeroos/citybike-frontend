import React from "react";
import { TiPlusOutline } from "react-icons/ti";
import "./AddButton.scss";

interface IAddButton {
  text: string;
  viewForm: boolean;
  setViewForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddButton = ({ text, viewForm, setViewForm }: IAddButton) => {
  return (
    <button
      onClick={() => setViewForm(!viewForm)}
      className="add-button button-font"
    >
      {text}
    </button>
  );
};

export default AddButton;
