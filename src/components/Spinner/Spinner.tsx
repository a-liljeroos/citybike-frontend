import { ImSpinner5 } from "react-icons/im";
import "./Spinner.scss";

interface ISpinner {
  message?: string;
}

const Spinner = ({ message }: ISpinner) => {
  return (
    <div className="spinner-cont" data-testid="spinner">
      <h4 className="spinner-message">{message ? message : ""}</h4>
      <ImSpinner5 size={50} className="spinner" />
    </div>
  );
};

export default Spinner;
