import { useGetStationList } from "../../../../Hooks";
import { useStationContext } from "../../StationContext";
import { Link } from "react-router-dom";
import { LuSettings } from "react-icons/lu";
import { TiArrowUpOutline } from "react-icons/ti";
import { useState } from "react";
import Spinner from "../../../Spinner/Spinner";
import ErrorMsg from "../../../ErrorMsg/ErrorMsg";
import AddButton from "../../../AddButton/AddButton";
import Filter from "./Filter/Filter";
import { sortObjectArray } from "../../../utilities";

const StationList = () => {
  const goUp = () => {
    const list = document.querySelector(".station-list");
    list?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [viewFilters, setViewFilters] = useState(false);

  const { sortStationKey, sortListDirection } = useStationContext();

  const { data, isLoading, isError } = useGetStationList();
  if (isLoading || !data) {
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

  // sorting

  const stations = sortObjectArray({
    array: data,
    key: sortStationKey,
    reverse: sortListDirection,
  });

  return (
    <div className="page" data-testid="stations-list">
      <div className="station-nav-container">
        <div className="station-nav-box">
          <h3 className="total-stations">
            {data?.length} stations in the database.
          </h3>
          <Link to={"/stations/edit"}>
            <AddButton text="Add Station" />
          </Link>
          <button className="station-filter-btn">
            <LuSettings
              size={30}
              color="white"
              onClick={() => {
                setViewFilters(!viewFilters);
              }}
            />
          </button>
        </div>
        <div className="station-nav-box">
          <Filter viewFilters={viewFilters} setViewFilters={setViewFilters} />
        </div>
      </div>

      <div className="list styled-scrollbar station-list">
        {stations.map((station, key) => {
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

export default StationList;
