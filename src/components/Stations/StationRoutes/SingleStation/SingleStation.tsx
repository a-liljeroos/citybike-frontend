import { useEffect } from "react";
import { useGetStationData } from "../../../../Hooks";
import { useParams, useNavigate } from "react-router-dom";
import { useStationContext } from "../../StationContext";
// components
import ErrorMsg from "../../../ErrorMsg/ErrorMsg";
import SpinnerPage from "../../../Spinner/SpinnerPage";
import StationData from "./StationData";

const SingleStation = () => {
  let { station_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!/^\d+$/.test(station_id!.toString())) {
      navigate("/stations");
    }
  }, [station_id]);

  const { data, isLoading, isError, error } = useGetStationData({
    station_id,
  });

  const { spinnerMessage } = useStationContext();

  if (isLoading) {
    return <SpinnerPage message={spinnerMessage} />;
  }

  if (isError || !data) {
    return <ErrorMsg message={error.message} />;
  }

  return (
    <div className="page">
      <StationData station={data} />
    </div>
  );
};

export default SingleStation;
