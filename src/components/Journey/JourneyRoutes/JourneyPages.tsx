import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetJourneyPage } from "../../../Hooks";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import Spinner from "../../Spinner/Spinner";
import JourneyCard from "./JourneyCard";
import JourneyPageButtons from "./JourneyPageButtons";

const JourneyPages = () => {
  let { page } = useParams();
  const navigate = useNavigate();
  if (Number(page) < 1) {
    navigate("/journeys/1");
  }
  const { data, isLoading, isError, error } = useGetJourneyPage({
    page: Number(page),
  });
  if (isLoading) {
    return (
      <div className="page">
        <Spinner />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="page">
        <ErrorMsg message={error.message} />
      </div>
    );
  }

  return (
    <div className="page">
      <h3 className="total-journeys">
        {data.pagination.totalJourneys} journeys in the database.
      </h3>
      <JourneyPageButtons {...data.pagination} />
      <div className="list styled-scrollbar">
        {data?.journeys.map((journey, key) => {
          return (
            <div key={key} className="list-item">
              <JourneyCard journey={journey} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyPages;
