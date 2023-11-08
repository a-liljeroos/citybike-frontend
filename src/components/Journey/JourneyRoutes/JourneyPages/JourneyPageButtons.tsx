import { useNavigate } from "react-router-dom";
// styling
import "./JourneyStyling.scss";
// icons
import { TbArrowBigRight } from "react-icons/tb";

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
      <div className="current-page-display">{currentPage}</div>
      <button
        className="page-btn"
        onClick={() => {
          navigate(`/journeys/${currentPage + 1}`);
        }}
      >
        <TbArrowBigRight size={27} color="rgb(75, 75, 75)" />
      </button>
    </div>
  );
};

export default JourneyPageButtons;
