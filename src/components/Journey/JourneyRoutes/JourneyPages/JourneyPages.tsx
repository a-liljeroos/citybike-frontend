import { useGetJourneyPage } from "../../../../Hooks";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../../AppContext";
// components
import ErrorMsg from "../../../ErrorMsg/ErrorMsg";
import JourneyCard from "./JourneyCard";
import JourneyPageButtons from "./JourneyPageButtons";
import Spinner from "../../../Spinner/Spinner";
import PageList from "../../../PageList/PageList";
import Page from "../../../Page/Page";

const JourneyPages = () => {
  const { totalJourneys } = useAppContext();
  let { page } = useParams();
  const navigate = useNavigate();
  if (Number(page) < 1) {
    navigate("/journeys/1");
  }
  const { data, isLoading, isError, error } = useGetJourneyPage({
    page: Number(page),
    totalJourneys,
  });
  if (isLoading) {
    return (
      <Page>
        <Spinner />
      </Page>
    );
  }

  if (isError || !data) {
    return (
      <Page>
        <ErrorMsg message={error.message} />
      </Page>
    );
  }

  return (
    <Page dataTestId="journey-pages">
      <JourneyPageButtons {...data.pagination} />
      <PageList>
        {data?.journeys.map((journey, key) => {
          return (
            <div key={key} className="list-item">
              <JourneyCard journey={journey} />
            </div>
          );
        })}
      </PageList>
    </Page>
  );
};

export default JourneyPages;
