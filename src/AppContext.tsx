import { createContext, ReactNode, useContext } from "react";
import { URL } from "./constants";
import { useLocalStorage } from "./utilities";

type TAppContext = {};

const AppContext = createContext<TAppContext>({} as TAppContext);

export function useAppContext() {
  return useContext(AppContext);
}

type TAppContextProvider = {
  children: ReactNode;
};

export function AppContextProvider({ children }: TAppContextProvider) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
