import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// styling
import "./ErrorMsg.scss";
// icons
import { BsEmojiFrown } from "react-icons/bs";
// components
import { Page } from "../index";

interface IErrorMsg {
  redirectTo?: string;
  message?: string;
}

export const ErrorMsg = ({ message, redirectTo }: IErrorMsg) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate(redirectTo || "/");
    }
  }, [countdown, redirectTo, navigate]);

  return (
    <Page>
      <div
        className="error-page"
        data-testid="error-page"
        onClick={() => {
          navigate(redirectTo || "/");
        }}
      >
        <BsEmojiFrown size={50} className="error-emote" />
        <p className="error-msg">An error occured.</p>
        <p className="error-msg">
          Redirecting in <span className="error-count">{countdown}</span>{" "}
          seconds.
        </p>
      </div>
    </Page>
  );
};
