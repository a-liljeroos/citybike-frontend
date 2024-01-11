import { createContext, ReactNode, useContext, useState } from "react";
import { toasterMsg } from "./components/Toaster/toasters";
import { TUser } from "./Types";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "./utilities";

type TAuthContext = {
  login: (t: string, user: TUser) => void;
  logout: () => void;
  token: string | null;
  setToken: (token: string) => void;
  user: TUser | null;
  setUser: (user: TUser | null) => void;
  cleanUserData: () => void;
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

  const cleanUserData = () => {
    setUser(null);
    setToken(null);
  };

  const login = (t: string, user: TUser) => {
    setToken(t);
    setUser(user);
    toasterMsg.loginSuccess();
    navigate("/");
  };

  const logout = () => {
    cleanUserData();
    toasterMsg.logoutSuccess();
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
        cleanUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
