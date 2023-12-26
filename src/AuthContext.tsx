import { createContext, ReactNode, useContext, useState } from "react";
import { useSessionStorage } from "./components/utilities";
import { useNavigate } from "react-router-dom";
import { TUser } from "./Types";
import toast from "react-hot-toast";

type TAuthContext = {
  login: () => void;
  logout: () => void;
  token: string;
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
  const [user, setUser] = useState<TUser | null>(null);
  const [token, setToken] = useSessionStorage<string>("t", "");
  const navigate = useNavigate();

  const login = () => {};

  const logout = () => {
    setUser(null);
    setToken("");
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
