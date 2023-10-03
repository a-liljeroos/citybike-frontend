import React from "react";
import { Routes, Route } from "react-router-dom";
import JourneyPages from "./JourneyRoutes/JourneyPages";

const Jourenys = () => {
  return (
    <Routes>
      <Route index path=":page" element={<JourneyPages />} />
    </Routes>
  );
};

export default Jourenys;
