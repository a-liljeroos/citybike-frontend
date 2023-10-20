import React from "react";
import GoBackButton from "../GoBackButton/GoBackButton";
import "./PageNav.scss";

interface IPageNav {
  children?: React.ReactNode;
}

const PageNav = ({ children }: IPageNav) => {
  return (
    <div className="page-nav">
      <GoBackButton style={{ marginRight: "13px" }} />
      {children}
    </div>
  );
};

export default PageNav;
