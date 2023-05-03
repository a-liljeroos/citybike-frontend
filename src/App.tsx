import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Journeys from "./components/Journey/Journeys";
import Station from "./components/Stations/Station";
import StationListView from "./components/Stations/StationListView";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="bg-color-2">
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="stations" element={<StationListView />} />
          <Route path="stations/:station_id" element={<Station />} />
          <Route path="journeys/:page" element={<Journeys />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </div>
  );
}

const IndexPage = () => {
  return (
    <div className="page index-page">
      <p className="index-text">
        This is a website where you can browse Helsinki CityBike travel data
        from 1.5. to 31.7.2021.
      </p>
      <p className="index-text">
        Frontend is made with React and the backend API is ExpressJS. The system
        is written with TypeScript and uses PostgreSQL database.
      </p>
    </div>
  );
};

export default App;
