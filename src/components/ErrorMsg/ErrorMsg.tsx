import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// styling
import "./ErrorMsg.scss";
// icons
import { BsEmojiFrown } from "react-icons/bs";
// components
import Page from "../Page/Page";

interface IErrorMsg {
  message?: string;
}

const ErrorMsg = ({ message }: IErrorMsg) => {
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
      navigate(message || "/");
    }
  }, [countdown, message, navigate]);

  return (
    <Page>
      <div
        className="error-page"
        data-testid="error-page"
        onClick={() => {
          navigate(message || "/");
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

export default ErrorMsg;
