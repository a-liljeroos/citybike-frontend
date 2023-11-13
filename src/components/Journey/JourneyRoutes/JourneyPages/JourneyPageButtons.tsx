import { useNavigate, useParams } from "react-router-dom";
// styling
import "./JourneyStyling.scss";
// icons
import { TbArrowBigRight } from "react-icons/tb";

const JourneyPageButtons = () => {
  return (
    <div className="journey-pages">
      <div className="current-page-display">
        {" "}
        <CurrentPage />
      </div>
      <NextPageButton />
    </div>
  );
};

const CurrentPage = () => {
  const { page } = useParams();
  return <>{Number(page)}</>;
};

const NextPageButton = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  return (
    <button
      className="page-btn"
      onClick={() => {
        navigate(`/journeys/${Number(page!) + 1}`);
      }}
    >
      <TbArrowBigRight size={27} color="rgb(75, 75, 75)" />
    </button>
  );
};

export default JourneyPageButtons;
