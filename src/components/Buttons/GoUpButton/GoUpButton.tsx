// styling
import "./GoUpButton.scss";
// icons
import { TiArrowUpOutline } from "react-icons/ti";

interface IGoUpButton {
  listElementClassName: string;
  size?: number;
  color?: string;
}

export const GoUpButton = ({
  listElementClassName,
  size,
  color,
}: IGoUpButton) => {
  const goUp = () => {
    const list = document.querySelector(`.${listElementClassName}`);
    list?.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="go-up-btn" role="button" onClick={goUp}>
      <TiArrowUpOutline
        size={size ? size : 35}
        color={color ? color : "white"}
      />
    </div>
  );
};
