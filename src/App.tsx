import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <IndexPage />
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
