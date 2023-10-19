import { useParams } from "react-router-dom";
import { useGetStationData } from "../../../../Hooks";
import ErrorMsg from "../../../ErrorMsg/ErrorMsg";
import Spinner from "../../../Spinner/Spinner";
import StationData from "./StationData";
import { useStationContext } from "../../StationContext";

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
    <div className="page page-expanded">
      <StationData station={data} />
    </div>
  );
};

export default SingleStation;
