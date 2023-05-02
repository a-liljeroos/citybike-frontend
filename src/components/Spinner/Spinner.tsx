import { ImSpinner5 } from "react-icons/im";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner-cont">
      <ImSpinner5 size={50} className="spinner" />
    </div>
  );
};

export default Spinner;
