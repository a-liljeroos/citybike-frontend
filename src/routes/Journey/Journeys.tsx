import { JourneyContextProvider } from "./JourneyContext";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// components
import JourneyPages from "./Routes/JourneyPages/JourneyPages";
import { NoPage } from "../../components/index";

const Journeys = () => {
  let { page } = useParams();
  const navigate = useNavigate();
  const prevRoute = useLocation();
  useEffect(() => {
    if (prevRoute.pathname === "/journeys" || page === undefined) {
      navigate("/journeys/1");
    }
  }, []);

  return (
    <JourneyContextProvider>
      <Routes>
        <Route index path=":page" element={<JourneyPages />} />
        <Route path="*" element={<NoPage redirectTo="/journeys/1" />} />
      </Routes>
    </JourneyContextProvider>
  );
};

export default Journeys;
