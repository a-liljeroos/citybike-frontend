import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
// styles
import "./UserRoutes.scss";
// components
import UserPage from "./Routes/UserPage/UserPage";

const UserRoutes = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" index element={<UserPage />} />
    </Routes>
  );
};

export default UserRoutes;
