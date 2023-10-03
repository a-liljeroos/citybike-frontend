import React from "react";
import { Routes, Route } from "react-router-dom";
import StationList from "./StationRoutes/StationList";
import SingleStation from "./StationRoutes/SingleStation";

const Stations = () => {
  return (
    <Routes>
      <Route index element={<StationList />} />
      <Route path=":station_id" element={<SingleStation />} />
    </Routes>
  );
};

export default Stations;
