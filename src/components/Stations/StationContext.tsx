import { createContext, ReactNode, useContext, useState } from "react";
import { TStation } from "../../Types";
import { useLocalStorage } from "../utilities";

type TStationContext = {
  viewDetails: boolean;
  setViewDetails: React.Dispatch<React.SetStateAction<boolean>>;
  sortStationKey: keyof TStation;
  setSortStationKey: React.Dispatch<React.SetStateAction<keyof TStation>>;
  sortListDirection: boolean;
  setSortListDirection: React.Dispatch<React.SetStateAction<boolean>>;
  spinnerMessage: string;
  setSpinnerMessage: React.Dispatch<React.SetStateAction<string>>;
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

  const [spinnerMessage, setSpinnerMessage] = useState<string>("");

  return (
    <StationContext.Provider
      value={{
        viewDetails,
        setViewDetails,
        sortStationKey,
        setSortStationKey,
        sortListDirection,
        setSortListDirection,
        spinnerMessage,
        setSpinnerMessage,
      }}
    >
      {children}
    </StationContext.Provider>
  );
}
