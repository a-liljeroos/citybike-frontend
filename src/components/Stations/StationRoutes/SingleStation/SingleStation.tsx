import { useGetStationData } from "../../../../Hooks";
import { useParams } from "react-router-dom";
import { useStationContext } from "../../StationContext";
// components
import ErrorMsg from "../../../ErrorMsg/ErrorMsg";
import Spinner from "../../../Spinner/Spinner";
import StationData from "./StationData";

const SingleStation = () => {
  let { station_id } = useParams();
  const { data, isLoading, isError, error } = useGetStationData({
    station_id,
  });

  const { spinnerMessage } = useStationContext();

  if (isLoading) {
    return (
      <div className="page">
        <Spinner message={spinnerMessage} />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="page">
        <ErrorMsg message={error.message} />
      </div>
    );
  }

  return (
    <div className="page">
      <StationData station={data} />
    </div>
  );
};

export default SingleStation;
