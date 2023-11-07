import React from "react";

interface IPage {
  children: React.ReactNode;
  classNames?: string;
  dataTestId?: string;
}

const Page = ({ children, classNames, dataTestId }: IPage) => {
  return (
    <div
      className={"page " + classNames}
      data-testid={dataTestId ? dataTestId : ""}
    >
      {children}
    </div>
  );
};

export default Page;
