// styling
import "./GoBackButton.scss";
// icons
import { TbArrowBigLeft } from "react-icons/tb";

interface IGoBackButton {
  size?: number;
  style?: React.CSSProperties;
}

const GoBackButton = ({ size, style }: IGoBackButton) => {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
      className="go-back-btn"
      style={{ ...style }}
    >
      <TbArrowBigLeft color="rgb(75, 75, 75)" size={size ? size : 27} />
    </button>
  );
};

export default GoBackButton;
