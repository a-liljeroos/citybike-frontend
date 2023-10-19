import React from "react";
import { useStationContext } from "../../../StationContext";
import { VscExpandAll } from "react-icons/vsc";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { TStation } from "../../../../../Types";

// this determines the filter options for the station list
const stationListFilter = {
  keyOfStation: [
    { name: "station_nimi" },
    { capacity: "station_capacity" },
    { city: "station_kaupunki" },
  ],
  reverse: [{ ascending: false }, { descending: true }],
};

interface Ifilter {
  viewFilters: boolean;
  setViewFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter = ({ viewFilters, setViewFilters }: Ifilter) => {
  const {
    viewDetails,
    setViewDetails,
    sortStationKey,
    setSortStationKey,
    sortListDirection,
    setSortListDirection,
  } = useStationContext();
  return (
    <div
      className={`filter-container ${
        !viewFilters ? `filter-close` : `filter-open`
      }`}
    >
      <form
        className="station-list-filter"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <select
          name="keyOfStation"
          className="filter-select"
          defaultValue={sortStationKey}
          onChange={(e) => {
            setSortStationKey(e.target.value as keyof TStation);
          }}
        >
          {stationListFilter.keyOfStation.map((key, value) => {
            return (
              <option key={value} value={Object.values(key)[0]}>
                {Object.keys(key)[0].charAt(0).toUpperCase() +
                  Object.keys(key)[0].slice(1)}
              </option>
            );
          })}
        </select>
        <button
          type="button"
          name="reverse"
          aria-pressed={sortListDirection}
          className="filter-direction-btn"
          onClick={() => {
            setSortListDirection(!sortListDirection);
          }}
        >
          {sortListDirection ? (
            <TbArrowBigDown
              className="direction-icon"
              size={25}
              color="rgb(75, 75, 75)"
            />
          ) : (
            <TbArrowBigUp
              className="direction-icon"
              size={25}
              color="rgb(75, 75, 75)"
            />
          )}
        </button>
      </form>
      <button
        className="station-details-btn"
        onClick={() => {
          setViewDetails(!viewDetails);
        }}
      >
        <VscExpandAll size={30} color="rgb(75, 75, 75)" />
      </button>
    </div>
  );
};

export default Filter;
