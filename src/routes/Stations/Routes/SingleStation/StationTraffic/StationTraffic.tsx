import { useGetStationTrafficData } from "../../../../../Hooks/useGetStationTrafficData";
// styles
import "./StationTraffic.scss";
// components
import { SmallSpinner } from "../../../../../components/index";
import TrafficCounter from "./TrafficCounter";

interface IStationTraffic {
  station_id: number;
}

const StationTraffic = ({ station_id }: IStationTraffic) => {
  const { data, isLoading } = useGetStationTrafficData({ station_id });

  return (
    <div className="station-traffic">
      <div className="traffic-cont" id="traffic-cont-1">
        <h3 className="traffic-title">Departures</h3>
        {data && (
          <TrafficCounter
            counterKey={1}
            trafficAmount={data.station_departures}
          />
        )}
        {isLoading && <Loader />}
      </div>
      <div className="traffic-cont" id="traffic-cont-2">
        <h3 className="traffic-title">Returns</h3>
        {data && (
          <TrafficCounter counterKey={2} trafficAmount={data.station_returns} />
        )}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

const Loader = () => {
  const screenWidth = window.innerWidth;
  return (
    <div className="traffic-loader-container" style={{ height: "45px" }}>
      <SmallSpinner size={screenWidth > 600 ? 27 : 20} />
    </div>
  );
};

export default StationTraffic;
