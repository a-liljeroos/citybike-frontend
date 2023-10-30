import { Routes, Route } from "react-router-dom";
import { StationContextProvider } from "./StationContext";
// styles
import "./Stations.scss";
// components
import EditStation from "./StationRoutes/EditStation/EditStation";
import SingleStation from "./StationRoutes/SingleStation/SingleStation";
import StationList from "./StationRoutes/StationList/StationList";

const Stations = () => {
  return (
    <StationContextProvider>
      <Routes>
        <Route index element={<StationList />} />
        <Route path=":station_id" element={<SingleStation />} />
        <Route path="edit/:station_id" element={<EditStation />} />
      </Routes>
    </StationContextProvider>
  );
};

export default Stations;
