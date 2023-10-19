import { TStation } from "../../../../Types";
import { FiEdit } from "react-icons/fi";
import GoBackButton from "../../../GoBackButton/GoBackButton";
import Map from "./Map/Map";
import { Link } from "react-router-dom";
import StationTraffic from "./StationTraffic/StationTraffic";

interface IStationData {
  station: TStation;
}

const StationData = ({ station }: IStationData) => {
  return (
    <>
      {" "}
      <GoBackButton top={25} left={20} />
      <h2 className="station-title">{station.station_nimi}</h2>
      <div className="station-data-options">
        <Link to={`/stations/edit/${station.station_id}`}>
          <button aria-label="edit station" className="edit-btn">
            <FiEdit size={28} color="white" />
          </button>
        </Link>
      </div>
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
      <StationTraffic station_id={station.station_id} />
      <Map lat={station.station_coord_y} lng={station.station_coord_x} />
    </>
  );
};

export default StationData;
