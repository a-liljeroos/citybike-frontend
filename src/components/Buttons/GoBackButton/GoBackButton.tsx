import { useNavigate } from "react-router-dom";
// styling
import "./GoBackButton.scss";
// icons
import { TbArrowBigLeft } from "react-icons/tb";

interface IGoBackButton {
  size?: number;
  style?: React.CSSProperties;
}

export const GoBackButton = ({ size, style }: IGoBackButton) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="go-back-btn"
      style={{ ...style }}
    >
      <TbArrowBigLeft color="rgb(75, 75, 75)" size={size ? size : 27} />
    </button>
  );
};
