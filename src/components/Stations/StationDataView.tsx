import React from "react";
import { TStation } from "../../Types";
import TrafficCounter from "./TrafficCounter";

interface IStationDataView {
  station: TStation;
}

const StationDataView = ({ station }: IStationDataView) => {
  return (
    <>
      {" "}
      <h2 className="station-title">{station.station_nimi}</h2>
      <table>
        <tbody>
          <tr>
            <th>Address</th>
            <td>{station.station_osoite}</td>
          </tr>
          <tr>
            <th>Capacity</th>
            <td>{station.station_capacity}</td>
          </tr>

          {station.station_operator && (
            <tr>
              <th>Operator</th>
              <td>{station.station_operator}</td>
            </tr>
          )}
          {station.station_kaupunki && (
            <tr>
              <th>City</th>
              <td>{station.station_kaupunki}</td>
            </tr>
          )}
        </tbody>
      </table>
      {station && (
        <div className="station-traffic">
          <div className="traffic-cont" id="traffic-cont-1">
            <h3 className="traffic-title">Departures</h3>
            <TrafficCounter trafficAmount={station.station_departures} />
          </div>
          <div className="traffic-cont" id="traffic-cont-2">
            <h3 className="traffic-title">Returns</h3>
            <TrafficCounter trafficAmount={station.station_returns} />
          </div>
        </div>
      )}
    </>
  );
};

export default StationDataView;
