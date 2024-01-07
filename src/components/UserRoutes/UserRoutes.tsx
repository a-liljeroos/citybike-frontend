import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
// styles
import "./UserRoutes.scss";
// components
import CreateAccount from "./Routes/CreateAccount/CreateAccount";
import UserPage from "./Routes/UserPage/UserPage";
import Login from "./Routes/Login/Login";

const UserRoutes = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  useEffect(() => {
    if (user === null) {
      navigate("/user/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="/" index element={<UserPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
};

export default UserRoutes;
