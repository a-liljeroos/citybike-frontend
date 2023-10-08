import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../utilities";
import { TStation } from "../../Types";

type TStationContext = {
  sortStationKey: keyof TStation;
  setSortStationKey: React.Dispatch<React.SetStateAction<keyof TStation>>;
  sortListDirection: boolean;
  setSortListDirection: React.Dispatch<React.SetStateAction<boolean>>;
};

const StationContext = createContext<TStationContext>({} as TStationContext);

export function useStationContext() {
  return useContext(StationContext);
}

type TStationContextProvider = {
  children: ReactNode;
};

export function StationContextProvider({ children }: TStationContextProvider) {
  const [viewDetails, setViewDetails] = useLocalStorage<boolean>(
    "viewStationListDetails",
    false
  );

  const [sortStationKey, setSortStationKey] = useLocalStorage<keyof TStation>(
    "stationListKey",
    "station_nimi"
  );

  const [sortListDirection, setSortListDirection] = useLocalStorage<boolean>(
    "stationListDirection",
    false
  );

  return (
    <StationContext.Provider
      value={{
        sortStationKey,
        setSortStationKey,
        sortListDirection,
        setSortListDirection,
      }}
    >
      {children}
    </StationContext.Provider>
  );
}
