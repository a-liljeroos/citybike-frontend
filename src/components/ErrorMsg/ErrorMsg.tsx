import React from "react";
import "./ErrorMsg.scss";
import { BsEmojiFrown } from "react-icons/bs";

interface IErrorMsg {
  message?: string;
}

const ErrorMsg = ({ message }: IErrorMsg) => {
  return (
    <div className="error-page" data-testid="error-page">
      <BsEmojiFrown size={50} className="error-emote" />
      <h3 className="error-msg">{!message ? "Error occured..." : message}</h3>
    </div>
  );
};

export default ErrorMsg;
