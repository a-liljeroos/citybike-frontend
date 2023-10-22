import { ImSpinner5 } from "react-icons/im";
import { IoMdBicycle } from "react-icons/io";
import "./Spinner.scss";
interface ISpinner {
  message?: string;
}

const Spinner = ({ message }: ISpinner) => {
  return (
    <div className="spinner-cont" data-testid="spinner">
      <h4 className="spinner-message">{message ? message : ""}</h4>
      <IoMdBicycle size={100} className="spinner" />
    </div>
  );
};

export default Spinner;
