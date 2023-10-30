// styling
import "./AddButton.scss";

interface IAddButton {
  text: string;
}

const AddButton = ({ text }: IAddButton) => {
  return <button className="add-button">{text}</button>;
};

export default AddButton;
