import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// components
import JourneyList from "./JourneyList";
import JourneyPageButtons from "./JourneyPageButtons";
import Page from "../../../Page/Page";
import PageList from "../../../PageList/PageList";
import PageNav from "../../../PageNav/PageNav";

const JourneyPages = () => {
  let { page } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!/^\d+$/.test(page!.toString())) {
      navigate("/journeys/1");
    }
  }, [page]);

  return (
    <Page dataTestId="journey-pages">
      <PageNav>
        <JourneyPageButtons />
      </PageNav>
      <PageList>
        <JourneyList page={page} />
      </PageList>
    </Page>
  );
};

export default JourneyPages;
