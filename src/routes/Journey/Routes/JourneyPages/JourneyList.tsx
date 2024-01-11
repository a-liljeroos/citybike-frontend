import React, { useEffect } from "react";
import { useGetJourneyPage } from "../../../../Hooks";
import { useJourneyContext } from "../../JourneyContext";
import { useNavigate } from "react-router-dom";
// components
import { ErrorMsg, SpinnerPage } from "../../../../components/index";
import JourneyCard from "./JourneyCard";

interface IJourneyList {
  page: string | undefined;
}

const JourneyList = ({ page }: IJourneyList) => {
  const { totalJourneys } = useJourneyContext();
  const { data, isLoading, isError, error } = useGetJourneyPage({
    page: Number(page),
    totalJourneys,
  });

  if (isLoading) {
    return <SpinnerPage />;
  }

  if (isError || !data) {
    return (
      <>
        <ErrorMsg message={error.message} />
      </>
    );
  }

  return (
    <>
      {data?.journeys.map((journey, key) => {
        return (
          <div key={key} className="list-item">
            <JourneyCard journey={journey} />
          </div>
        );
      })}
    </>
  );
};

export default JourneyList;
