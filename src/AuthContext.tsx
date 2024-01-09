import { createContext, ReactNode, useContext, useState } from "react";
import { useSessionStorage } from "./components/utilities";
import { useNavigate } from "react-router-dom";
import { TUser } from "./Types";
import toast from "react-hot-toast";

type TAuthContext = {
  login: (t: string, user: TUser) => void;
  logout: () => void;
  token: string | null;
  setToken: (token: string) => void;
  user: TUser | null;
  setUser: (user: TUser | null) => void;
};

const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export function useAuthContext() {
  return useContext(AuthContext);
}

type TAuthContextProvider = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: TAuthContextProvider) {
  const [user, setUser] = useSessionStorage<TUser | null>("user", null);
  const [token, setToken] = useSessionStorage<string | null>("t", null);
  const navigate = useNavigate();

  const login = (t: string, user: TUser) => {
    setToken(t);
    setUser(user);
    toast.success("Logged in successfully!");
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    toast.success("Logged out");
    navigate("/user/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
