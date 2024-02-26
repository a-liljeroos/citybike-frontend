import useFetchTotalJourneys from "../../Hooks/useFetchTotalJourneys";
// styles
import "./LandingPage.scss";
// icons
import { Icon } from "../../components/index";
// components
import { Page } from "../../components/index";
import { SmallSpinner } from "../../components/Spinner/SmallSpinner";

const LandingPage = () => {
  const { totalJourneys, loading, error } = useFetchTotalJourneys();

  return (
    <Page classNames="index-page">
      <p className="index-text index-text-top">
        <img src={Icon} alt="CityBike icon" className="frontpage-icon-top" />
      </p>
      <div className="index-text index-text-middle">
        <p>
          This is a website where you can browse Helsinki CityBike travel data
          from 1.5. to 31.7.2021.
        </p>
        <br />
        <p>
          Frontend is made with React and the backend API is ExpressJS. The
          system is written with TypeScript and uses PostgreSQL database.
        </p>
        <br />
        {!loading ? (
          <>
            {error ? (
              <p className="error">{error}</p>
            ) : (
              <p>
                There are total of {totalJourneys} journeys in the database.
              </p>
            )}
          </>
        ) : (
          <SmallSpinner size={25} />
        )}
      </div>
      <p className="index-text index-text-bottom">
        <img src={Icon} alt="CityBike icon" className="frontpage-icon-bottom" />
      </p>
    </Page>
  );
};
export default LandingPage;
