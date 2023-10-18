import "./JourneyStyling.scss";
import { useNavigate } from "react-router-dom";
import { TJourney } from "../../../../Types";
interface IjourneyCard {
  journey: TJourney;
}
const JourneyCard = ({ journey }: IjourneyCard) => {
  const duration = Math.ceil(journey.duration / 60);
  const distance = Math.round((journey.covered_distance / 1000) * 100) / 100;
  const navigate = useNavigate();
  return (
    <div className="journey-card">
      <div className="journey-stations">
        <p
          className="journey-station"
          onClick={() => {
            navigate(`/stations/${journey.departure_station_id}`);
          }}
        >
          {journey.departure_station_nimi}
        </p>
        <div className="journey-direction" />
        <p
          className="journey-station"
          onClick={() => {
            navigate(`/stations/${journey.return_station_id}`);
          }}
        >
          {journey.return_station_nimi}
        </p>
      </div>
      <div className="journey-durations">
        <p className="journey-usage">{distance} km</p>

        <p className="journey-usage">{duration} min</p>
      </div>
    </div>
  );
};

export default JourneyCard;
