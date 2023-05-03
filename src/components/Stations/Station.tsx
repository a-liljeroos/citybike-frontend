import { useParams } from "react-router-dom";
import { useGetStationInfo } from "../../Hooks";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import Spinner from "../Spinner/Spinner";
import StationDataView from "./StationDataView";

const Station = () => {
  let { station_id } = useParams();
  const { data, isLoading, isError, error } = useGetStationInfo({
    station_id,
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
      <StationDataView station={data} />
    </div>
  );
};

export default Station;
