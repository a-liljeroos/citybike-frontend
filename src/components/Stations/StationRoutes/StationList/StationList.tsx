import { useGetStationList } from "../../../../Hooks";
import { useStationContext } from "../../StationContext";
import { Link } from "react-router-dom";
import { LuSettings } from "react-icons/lu";
import { TiArrowUpOutline } from "react-icons/ti";
import { MdPedalBike } from "react-icons/md";
import { useState } from "react";
import Spinner from "../../../Spinner/Spinner";
import ErrorMsg from "../../../ErrorMsg/ErrorMsg";
import AddButton from "../../../AddButton/AddButton";
import Filter from "./Filter/Filter";
import { sortObjectArray } from "../../../utilities";
import { TStation } from "../../../../Types";
import GoUpButton from "../../../GoUpButton/GoUpButton";

const StationList = () => {
  const goUp = () => {
    const list = document.querySelector(".station-list");
    list?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [viewFilters, setViewFilters] = useState(false);

  const { viewDetails, setViewDetails, sortStationKey, sortListDirection } =
    useStationContext();

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
            <AddButton text="New Station" />
          </Link>
          <button className="station-filter-btn">
            <LuSettings
              size={26}
              color="rgb(75, 75, 75)"
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
              <StationListItem station={station} details={viewDetails} />
            </Link>
          );
        })}
      </div>
      <GoUpButton listElementClassName="station-list" />
    </div>
  );
};

interface IStationListItem {
  station: TStation;
  details: boolean;
}

const StationListItem = ({ station, details }: IStationListItem) => {
  if (details) {
    return (
      <div className="list-item station-item-details">
        <div className="station-details details1">
          <h5>{station.station_nimi}</h5>
          <p>{station.station_kaupunki}</p>
        </div>
        <div className="station-details details2">
          <p>{station.station_capacity}</p>
          <MdPedalBike className="station-details-bike-svg" />
        </div>
      </div>
    );
  }

  return <div className="list-item station-item">{station.station_nimi}</div>;
};

export default StationList;
