// styling
import "./AddButton.scss";

interface IAddButton {
  text: string;
}

export const AddButton = ({ text }: IAddButton) => {
  return <button className="add-button">{text}</button>;
};
