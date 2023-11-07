import { Routes, Route } from "react-router-dom";
import { AppContextProvider, useAppContext } from "./AppContext";
// styles
import "./App.scss";
// components
import Jourenys from "./components/Journey/Jourenys";
import NavBar from "./components/NavBar/NavBar";
import Page from "./components/Page/Page";
import NoPage from "./components/NoPage/NoPage";
import Stations from "./components/Stations/Stations";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main className="bg-color-2">
          <Routes>
            <Route index element={<IndexPage />} />
            <Route index path="stations/*" element={<Stations />} />
            <Route path="journeys/*" element={<Jourenys />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
      </div>
    </AppContextProvider>
  );
}

const IndexPage = () => {
  const { totalJourneys } = useAppContext();
  return (
    <Page classNames="index-page">
      <p
        className="index-text"
        style={{ textAlign: "right", borderLeft: "5px solid rgb(85, 85, 85)" }}
      >
        This is a website where you can browse Helsinki CityBike travel data
        from 1.5. to 31.7.2021.
      </p>
      <p
        className="index-text"
        style={{ borderRight: "5px solid rgb(85, 85, 85)" }}
      >
        Frontend is made with React and the backend API is ExpressJS. The system
        is written with TypeScript and uses PostgreSQL database.
      </p>
      {totalJourneys !== 0 && (
        <p
          className="index-text"
          style={{
            textAlign: "right",
            borderLeft: "5px solid rgb(85, 85, 85)",
          }}
        >
          There are total of {totalJourneys} journeys in the database.
        </p>
      )}
    </Page>
  );
};

export default App;
