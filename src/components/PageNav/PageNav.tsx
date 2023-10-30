import React from "react";
// styling
import "./PageNav.scss";
// components
import GoBackButton from "../GoBackButton/GoBackButton";

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
