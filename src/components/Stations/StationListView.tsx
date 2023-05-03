import { useGetStations } from "../../Hooks";
import { Link } from "react-router-dom";
import { TiArrowUpOutline } from "react-icons/ti";
import Spinner from "../Spinner/Spinner";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
const StationListView = () => {
  const goUp = () => {
    const list = document.querySelector(".station-list");
    list?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { data, isLoading, isError } = useGetStations();
  if (isLoading) {
    return (
      <div className="page">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="page">
        <ErrorMsg />
      </div>
    );
  }
  return (
    <div className="page">
      <h3 className="total-stations">
        {data?.length} stations in the database.
      </h3>

      <div
        data-testid="stations-list"
        className="list styled-scrollbar station-list"
      >
        {data?.map((station, key) => {
          return (
            <Link
              className="station-link"
              key={key}
              to={`${station.station_id}`}
            >
              <div className="list-item station-item">
                {station.station_nimi}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="go-up-btn" onClick={goUp}>
        <TiArrowUpOutline size={35} color="white" />
      </div>
    </div>
  );
};

export default StationListView;
