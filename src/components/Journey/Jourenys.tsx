import { JourneyContextProvider } from "./JourneyContext";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// components
import JourneyPages from "./JourneyRoutes/JourneyPages/JourneyPages";

const Jourenys = () => {
  const navigate = useNavigate();
  const prevRoute = useLocation();
  useEffect(() => {
    if (prevRoute.pathname === "/journeys") {
      navigate("/journeys/1");
    }
  }, []);

  return (
    <JourneyContextProvider>
      <Routes>
        <Route index path=":page" element={<JourneyPages />} />
      </Routes>
    </JourneyContextProvider>
  );
};

export default Jourenys;
