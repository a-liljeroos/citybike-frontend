import { useParams } from "react-router-dom";
import { useGetSingleStationData } from "../../Hooks";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import Spinner from "../Spinner/Spinner";
import StationData from "./StationData";

const SingleStation = () => {
  let { station_id } = useParams();
  const { data, isLoading, isError, error } = useGetSingleStationData({
    station_id,
    trafficInfo: true,
  });

  if (isLoading) {
    return (
      <div className="page">
        <Spinner />
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
