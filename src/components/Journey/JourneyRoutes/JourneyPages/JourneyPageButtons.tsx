import { useNavigate } from "react-router-dom";
// styling
import "./JourneyStyling.scss";

interface IJourneyPageButtons {
  totalJourneys: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

const JourneyPageButtons = ({
  totalJourneys,
  totalPages,
  currentPage,
  pageSize,
}: IJourneyPageButtons) => {
  const navigate = useNavigate();

  return (
    <div className="journey-pages">
      {currentPage > 1 && (
        <button
          className="page-btn"
          onClick={() => {
            navigate(`/journeys/${currentPage - 1}`);
          }}
        >
          {"<"}
        </button>
      )}
      <button disabled className="page-btn current-page-btn">
        {currentPage}
      </button>
      <button
        className="page-btn"
        onClick={() => {
          navigate(`/journeys/${currentPage + 1}`);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default JourneyPageButtons;
