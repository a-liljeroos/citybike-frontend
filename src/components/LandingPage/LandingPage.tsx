import { useAppContext } from "../../AppContext";
// styles
import "./LandingPage.scss";
// icons
import Icon from "../Icons/icon.png";
// components
import Page from "../Page/Page";

const LandingPage = () => {
  const { totalJourneys } = useAppContext();
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
        Frontend is made with React and the backend API is ExpressJS. The system
        is written with TypeScript and uses PostgreSQL database.
        {totalJourneys !== 0 && (
          <p>
            <br />
            There are total of {totalJourneys.toLocaleString("fi-FI")} journeys
            in the database.
          </p>
        )}
      </div>
      <p className="index-text index-text-bottom">
        <img src={Icon} alt="CityBike icon" className="frontpage-icon-bottom" />
      </p>
    </Page>
  );
};
export default LandingPage;
