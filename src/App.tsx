import { AppContextProvider } from "./AppContext";
import { AuthContextProvider, useAuthContext } from "./AuthContext";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { toasterMsg } from "./components/Toaster/toasters";
// styles
import "./App.scss";
// icons
import Icon from "./components/Icons/icon.png";
// components
import Journeys from "./routes/Journey/Journeys";
import LandingPage from "./routes/LandingPage/LandingPage";
import { NavBar } from "./components/index";
import { NoPage } from "./components/index";
import Stations from "./routes/Stations/Stations";
import UserRoutes from "./routes/UserRoutes/UserRoutes";
import toast from "react-hot-toast";

interface IProtectedRoute {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = "/user" }: IProtectedRoute) => {
  const { token } = useAuthContext();
  if (token === null || token === undefined) {
    toasterMsg.loginRequired();
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
