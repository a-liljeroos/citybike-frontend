import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// components
import Page from "../Page/Page";

interface INoPage {
  redirectTo?: string;
}

const NoPage = ({ redirectTo }: INoPage) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(redirectTo || "/");
  }, []);
  return (
    <Page>
      <div className="no-page">
        <h3> Page Not Found..</h3>
      </div>
    </Page>
  );
};

export default NoPage;
