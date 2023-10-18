import { Routes, Route } from "react-router-dom";
import JourneyPages from "./JourneyRoutes/JourneyPages/JourneyPages";
import { JourneyContextProvider } from "./JourneyContext";
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
