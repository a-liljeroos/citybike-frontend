import React from "react";
import { Routes, Route } from "react-router-dom";
import StationList from "./StationRoutes/StationList/StationList";
import SingleStation from "./StationRoutes/SingleStation/SingleStation";
import { StationContextProvider } from "./StationContext";
import EditStation from "./StationRoutes/EditStation/EditStation";
import "./Stations.scss";

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
