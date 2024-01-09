import { AppContextProvider } from "./AppContext";
import { AuthContextProvider, useAuthContext } from "./AuthContext";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// styles
import "./App.scss";
// icons
import Icon from "./components/Icons/icon.png";
// components
import Journeys from "./components/Journey/Journeys";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import NoPage from "./components/NoPage/NoPage";
import Stations from "./components/Stations/Stations";
import UserRoutes from "./components/UserRoutes/UserRoutes";

interface IProtectedRoute {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = "/user" }: IProtectedRoute) => {
  const { token } = useAuthContext();
  if (token === null || token === undefined) {
    toast.error("You must be logged in to view this page.");
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

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
              <Route path="user/*" element={<UserRoutes />} />
              <Route element={<ProtectedRoute />}>
                <Route path="stations/*" element={<Stations />} />
                <Route path="journeys/*" element={<Journeys />} />
              </Route>
              <Route path="*" element={<NoPage />} />
            </Routes>
          </main>
        </div>
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default App;
