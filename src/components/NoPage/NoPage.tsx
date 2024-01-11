import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// components
import { Page } from "../../components/Page/Page";

interface INoPage {
  redirectTo?: string;
}

export const NoPage = ({ redirectTo }: INoPage) => {
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
