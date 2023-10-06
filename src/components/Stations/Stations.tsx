import React from "react";
import { Routes, Route } from "react-router-dom";
import StationList from "./StationRoutes/StationList/StationList";
import SingleStation from "./StationRoutes/SingleStation/SingleStation";
import { StationContextProvider } from "./StationContext";

const Stations = () => {
  return (
    <StationContextProvider>
      <Routes>
        <Route index element={<StationList />} />
        <Route path=":station_id" element={<SingleStation />} />
      </Routes>
    </StationContextProvider>
  );
};

export default Stations;
