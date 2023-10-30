import { JourneyContextProvider } from "./JourneyContext";
import { Routes, Route } from "react-router-dom";
// components
import JourneyPages from "./JourneyRoutes/JourneyPages/JourneyPages";

const Jourenys = () => {
  return (
    <JourneyContextProvider>
      <Routes>
        <Route index path=":page" element={<JourneyPages />} />
      </Routes>
    </JourneyContextProvider>
  );
};

export default Jourenys;
