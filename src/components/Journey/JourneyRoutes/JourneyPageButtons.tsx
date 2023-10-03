import React from "react";
import "./JourneyStyling.scss";
import { useNavigate } from "react-router-dom";

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

  function renderButton(currentPage: number): boolean {
    if (currentPage > 1) {
      return true;
    }

    return false;
  }

  return (
    <div className="journey-pages">
      {renderButton(currentPage) && (
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

      {/*   <button
        className="page-btn"
        onClick={() => {
          navigate(`/journeys/${totalPages}`);
        }}
      >
        {totalPages}
      </button> */}
    </div>
  );
};

export default JourneyPageButtons;
