import { Link } from "react-router-dom";
import { TStation } from "../../../../Types";
import Map from "./Map/Map";
// icons
import { FiEdit } from "react-icons/fi";
// components
import PageNav from "../../../PageNav/PageNav";
import StationTraffic from "./StationTraffic/StationTraffic";

interface IStationData {
  station: TStation;
}

const StationData = ({ station }: IStationData) => {
  return (
    <>
      {" "}
      <PageNav>
        <Link to={`/stations/edit/${station.station_id}`}>
          <button aria-label="edit station" className="edit-btn">
            <FiEdit size={28} color="white" />
          </button>
        </Link>
      </PageNav>
      <div className="station-data-cont">
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
        <StationTraffic station_id={station.station_id} />
      </div>
      <Map lat={station.station_coord_y} lng={station.station_coord_x} />
    </>
  );
};

export default StationData;
