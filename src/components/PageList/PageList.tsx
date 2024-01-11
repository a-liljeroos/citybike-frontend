import React from "react";
import "./PageList.scss";

interface IPageList {
  children: React.ReactNode;
}

export const PageList = ({ children }: IPageList) => {
  return (
    <div className="list-container">
      <div className="list-shadow-top" />
      <div className="list-shadow-middle" />
      <div className="list styled-scrollbar">{children}</div>
      <div className="list-shadow-bottom" />
    </div>
  );
};
