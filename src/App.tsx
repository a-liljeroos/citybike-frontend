import { Routes, Route } from "react-router-dom";
import { AppContextProvider, useAppContext } from "./AppContext";
import { AuthContextProvider } from "./AuthContext";
// styles
import "./App.scss";
// icons
import Icon from "./components/Icons/icon.png";
// components
import Journeys from "./components/Journey/Journeys";
import NavBar from "./components/NavBar/NavBar";
import NoPage from "./components/NoPage/NoPage";
import Stations from "./components/Stations/Stations";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main className="bg-color-2">
            <Routes>
              <Route index element={<LandingPage />} />
              <Route index path="stations/*" element={<Stations />} />
              <Route path="journeys/*" element={<Journeys />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </main>
        </div>
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default App;
