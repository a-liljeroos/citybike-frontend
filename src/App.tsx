import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import JourneyPages from "./components/Journey/JourneyPages";
import SingleStation from "./components/Stations/SingleStation";
import StationList from "./components/Stations/StationList";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="bg-color-2">
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="stations" element={<StationList />} />
          <Route path="stations/:station_id" element={<SingleStation />} />
          <Route path="journeys/:page" element={<JourneyPages />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </div>
  );
}

const IndexPage = () => {
  return (
    <div className="page index-page" role="main">
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
