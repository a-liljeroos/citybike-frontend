import { Link } from "react-router-dom";
import { sortObjectArray } from "../../../utilities";
import { TStation } from "../../../../Types";
import { useGetStationList } from "../../../../Hooks";
import { useState } from "react";
import { useStationContext } from "../../StationContext";
// icons
import { MdPedalBike } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";
// components
import AddButton from "../../../AddButton/AddButton";
import ErrorMsg from "../../../ErrorMsg/ErrorMsg";
import Filter from "./Filter/Filter";
import GoUpButton from "../../../GoUpButton/GoUpButton";
import Spinner from "../../../Spinner/Spinner";
import Page from "../../../Page/Page";
import PageList from "../../../PageList/PageList";

const StationList = () => {
  const [viewFilters, setViewFilters] = useState(false);

  const {
    viewDetails,
    setViewDetails,
    sortStationKey,
    sortListDirection,
    setSpinnerMessage,
  } = useStationContext();

  const { data, isLoading, isError, error } = useGetStationList();
  if (isLoading) {
    return (
      <Page>
        <Spinner />
      </Page>
    );
  }
  if (isError || !data) {
    return <ErrorMsg message={error.message} />;
  }

  // sorting

  const stations = sortObjectArray({
    array: data,
    key: sortStationKey,
    reverse: sortListDirection,
  });

  return (
    <Page dataTestId="station-pages">
      <div className="station-nav-container">
        <div className="station-nav-box">
          <Link to={"/stations/edit/new"}>
            <AddButton text="New Station" />
          </Link>
          <button
            className={`station-filter-btn ${viewFilters && " button-active"}`}
          >
            <RiSettingsLine
              className="buttoncolor-change"
              size={26}
              color={"rgb(75, 75, 75)"}
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
      <PageList>
        {stations.map((station, key) => {
          return (
            <Link
              className="station-link"
              key={key}
              to={`${station.station_id}`}
              onClick={() => {
                setSpinnerMessage(station.station_nimi);
              }}
            >
              <StationListItem station={station} details={viewDetails} />
            </Link>
          );
        })}
      </PageList>
      <GoUpButton listElementClassName="list" />
    </Page>
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
        <div className="station-details details1 item-reveal">
          <h5>{station.station_nimi}</h5>
          <p>{station.station_kaupunki}</p>
        </div>
        <div className="station-details details2 item-reveal">
          <p>{station.station_capacity}</p>
          <MdPedalBike className="station-details-bike-svg" />
        </div>
      </div>
    );
  }

  return (
    <div className="list-item station-item item-reveal">
      {station.station_nimi}
    </div>
  );
};

export default StationList;
