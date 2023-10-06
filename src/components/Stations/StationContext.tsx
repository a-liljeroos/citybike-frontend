import { createContext, ReactNode, useContext } from "react";

type TStationContext = {};

const StationContext = createContext<TStationContext>({} as TStationContext);

export function useStationContext() {
  return useContext(StationContext);
}

type TStationContextProvider = {
  children: ReactNode;
};

export function StationContextProvider({ children }: TStationContextProvider) {
  return (
    <StationContext.Provider value={{}}>{children}</StationContext.Provider>
  );
}
