import { Routes, Route } from "react-router-dom";
import { StationContextProvider } from "./StationContext";
// styles
import "./Stations.scss";
// components
import EditStation from "./Routes/EditStation/EditStation";
import SingleStation from "./Routes/SingleStation/SingleStation";
import StationList from "./Routes/StationList/StationList";
import { NoPage } from "../../components/index";

const Stations = () => {
  return (
    <StationContextProvider>
      <Routes>
        <Route index element={<StationList />} />
        <Route path=":station_id" element={<SingleStation />} />
        <Route path="edit/:station_id" element={<EditStation />} />
        <Route path="*" element={<NoPage redirectTo="/stations" />} />
      </Routes>
    </StationContextProvider>
  );
};

export default Stations;
