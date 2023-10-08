import React from "react";
import { useStationContext } from "../../../StationContext";
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
        <select
          name="reverse"
          className="filter-select"
          defaultValue={sortListDirection.toString()}
          onChange={(e) => {
            const reverse = e.target.value === "true" ? true : false;
            setSortListDirection(reverse);
          }}
        >
          {stationListFilter.reverse.map((key, value) => {
            return (
              <option key={value} value={Object.values(key)[0]}>
                {Object.keys(key)[0].charAt(0).toUpperCase() +
                  Object.keys(key)[0].slice(1)}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default Filter;
